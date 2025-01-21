"use client";

import { useState, useEffect, useMemo } from "react";
import {
  GoogleMap,
  Marker,
  Polyline,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";

// Function to calculate new coordinates
const calculateNewPosition = ([lat, lng], distanceKm, bearing = 0) => {
  const earthRadiusKm = 6371;
  const dByR = distanceKm / earthRadiusKm;

  const lat1 = (lat * Math.PI) / 180;
  const lng1 = (lng * Math.PI) / 180;

  const newLat = Math.asin(
    Math.sin(lat1) * Math.cos(dByR) +
      Math.cos(lat1) * Math.sin(dByR) * Math.cos(bearing)
  );

  const newLng =
    lng1 +
    Math.atan2(
      Math.sin(bearing) * Math.sin(dByR) * Math.cos(lat1),
      Math.cos(dByR) - Math.sin(lat1) * Math.sin(newLat)
    );

  return [(newLat * 180) / Math.PI, (newLng * 180) / Math.PI]; // Convert back to degrees
};

const GoogleDeliveryMap = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [vehicleLocation, setVehicleLocation] = useState(null);
  const [routePath, setRoutePath] = useState([]); // Path provided by Directions API
  const [selectedMarker, setSelectedMarker] = useState(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  const distance = 5; // Distance in kilometers

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const userLoc = { lat: latitude, lng: longitude };
          setUserLocation(userLoc);

          // Calculate vehicle location 5km north
          const vehicleLoc = calculateNewPosition(
            [latitude, longitude],
            distance,
            0 // Bearing 0 = North
          );
          const vehiclePosition = { lat: vehicleLoc[0], lng: vehicleLoc[1] };
          setVehicleLocation(vehiclePosition);
        },
        (error) => {
          console.error("Error fetching location:", error);
          alert("Unable to fetch location. Please enable location access.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  }, []);

  // Fetch the route from Directions API
  useEffect(() => {
    if (userLocation && vehicleLocation) {
      const fetchRoute = async () => {
        const directionsService = new window.google.maps.DirectionsService();
        directionsService.route(
          {
            origin: userLocation,
            destination: vehicleLocation,
            travelMode: window.google.maps.TravelMode.DRIVING,
          },
          (result, status) => {
            if (status === "OK" && result.routes[0]) {
              const path = result.routes[0].overview_path.map((point) => ({
                lat: point.lat(),
                lng: point.lng(),
              }));
              setRoutePath(path);
            } else {
              console.error("Error fetching directions:", status);
              alert("Could not fetch route directions.");
            }
          }
        );
      };

      fetchRoute();
    }
  }, [userLocation, vehicleLocation]);

  const map = useMemo(() => {
    if (!isLoaded || !userLocation || !vehicleLocation) {
      return (
        <div className="text-center text-lg">
          Loading map and fetching your location...
        </div>
      );
    }

    return (
      <GoogleMap
        center={userLocation}
        zoom={12.5}
        mapContainerStyle={{ height: "100%", width: "100%" }}
      >
        {/* User Marker */}
        <Marker
          position={userLocation}
          icon={{
            url: "/assets/images/location.png",
            scaledSize: new window.google.maps.Size(50, 50),
          }}
          onClick={() => setSelectedMarker("user")}
        />

        {/* Vehicle Marker */}
        <Marker
          position={vehicleLocation}
          icon={{
            url: "/assets/images/truck.png",
            scaledSize: new window.google.maps.Size(100, 100),
          }}
          onClick={() => setSelectedMarker("vehicle")}
        />

        {/* Info Window for Markers */}
        {selectedMarker === "user" && (
          <InfoWindow
            position={userLocation}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div>Your Current Location</div>
          </InfoWindow>
        )}
        {selectedMarker === "vehicle" && (
          <InfoWindow
            position={vehicleLocation}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div>Vehicle Location (5km Away)</div>
          </InfoWindow>
        )}

        {/* Route Polyline */}
        {routePath.length > 0 && (
          <Polyline
            path={routePath}
            options={{
              strokeColor: "blue",
              strokeOpacity: 0.8,
              strokeWeight: 4,
            }}
          />
        )}
      </GoogleMap>
    );
  }, [isLoaded, userLocation, vehicleLocation, selectedMarker, routePath]);

  return <div className="h-[600px] w-full">{map}</div>;
};

export default GoogleDeliveryMap;
