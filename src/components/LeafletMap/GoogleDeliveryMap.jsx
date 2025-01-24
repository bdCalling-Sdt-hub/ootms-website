"use client";

import { useState, useEffect, useMemo, useContext } from "react";
import {
  GoogleMap,
  Marker,
  Polyline,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";
import { SocketContext } from "@/context/SocketContextApi";

const GoogleDeliveryMap = ({ data }) => {
  const { socket } = useContext(SocketContext);

  const [userLocation, setUserLocation] = useState({
    lat: data?.load?.receiverLocation?.coordinates[1] || 0,
    lng: data?.load?.receiverLocation?.coordinates[0] || 0,
  });

  const [vehicleLocation, setVehicleLocation] = useState({
    lat: data?.driver?.location?.coordinates[1],
    lng: data?.driver?.location?.coordinates[0],
  });

  const [routePath, setRoutePath] = useState([]); // Path provided by Directions API
  const [selectedMarker, setSelectedMarker] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  // Emit user location and receive vehicle location every 5 seconds
  useEffect(() => {
    if (!socket) return;

    // Emit user location to the server
    // socket.emit("client_location", {
    //   lat: userLocation.lat,
    //   lng: userLocation.lng,
    // });

    // Listen for vehicle location updates from the server
    socket.on("server_location", (data) => {
      console.log("From Server Socket", data);
      setVehicleLocation({
        lat: Number(data?.lat),
        lng: Number(data?.lang),
      });
    });

    return () => {
      socket.off("server_location"); // Remove socket listener on unmount
    };
  }, [socket, userLocation]);

  // Fetch the route from Directions API
  useEffect(() => {
    if (!isLoaded || !window.google || !userLocation || !vehicleLocation)
      return;

    // Validate lat/lng values
    if (
      isNaN(userLocation.lat) ||
      isNaN(userLocation.lng) ||
      isNaN(vehicleLocation.lat) ||
      isNaN(vehicleLocation.lng)
    ) {
      console.error("Invalid lat/lng values:", {
        userLocation,
        vehicleLocation,
      });
      return;
    }

    const fetchRoute = async () => {
      try {
        const directionsService = new window.google.maps.DirectionsService();

        directionsService.route(
          {
            origin: userLocation, // Starting point
            destination: vehicleLocation, // Ending point
            travelMode: window.google.maps.TravelMode.DRIVING, // Driving mode
          },
          (result, status) => {
            if (status === "OK" && result.routes.length > 0) {
              const path = result.routes[0].overview_path.map((point) => ({
                lat: point.lat(),
                lng: point.lng(),
              }));
              setRoutePath(path);
            } else {
              console.error("Directions API error:", status);
            }
          }
        );
      } catch (error) {
        console.error("Error fetching route:", error);
      }
    };

    fetchRoute();
  }, [isLoaded, userLocation, vehicleLocation]);

  const map = useMemo(() => {
    if (!isLoaded || !userLocation || !vehicleLocation) {
      return <div className="text-center text-lg">Loading map...</div>;
    }

    return (
      <GoogleMap
        center={userLocation}
        zoom={15}
        mapContainerStyle={{ height: "68vh", width: "100%" }}
      >
        {/* User Marker */}
        <Marker
          position={userLocation}
          onClick={() => setSelectedMarker("user")}
        />

        {/* Vehicle Marker */}
        <Marker
          position={vehicleLocation}
          icon={{
            url: "/assets/images/truck.png",
            scaledSize: new window.google.maps.Size(50, 50),
          }}
          onClick={() => setSelectedMarker("vehicle")}
        />

        {/* Info Window for Markers */}
        {selectedMarker === "user" && (
          <InfoWindow
            position={userLocation}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div>Receiver Location</div>
          </InfoWindow>
        )}
        {selectedMarker === "vehicle" && (
          <InfoWindow
            position={vehicleLocation}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div>Vehicle Location</div>
          </InfoWindow>
        )}

        {/* Route Polyline */}
        {routePath.length > 0 && (
          <Polyline
            path={routePath}
            options={{
              strokeColor: "red",
              strokeOpacity: 0.8,
              strokeWeight: 4,
            }}
          />
        )}
      </GoogleMap>
    );
  }, [isLoaded, userLocation, vehicleLocation, selectedMarker, routePath]);

  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }

  return <div className="!h-auto w-full">{map}</div>;
};

export default GoogleDeliveryMap;
