"use client";

import { useState, useEffect, useMemo } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";

// Function to calculate new positions
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

  return [(newLat * 180) / Math.PI, (newLng * 180) / Math.PI];
};

const GoogleMapAllTrack = ({ setOpen }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [markerLocations, setMarkerLocations] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);

  // Load Google Maps API
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  // Fetch user location and generate markers
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const userLoc = { lat: latitude, lng: longitude };
          setUserLocation(userLoc);

          // Generate markers
          const marker1kmWest = calculateNewPosition(
            [latitude, longitude],
            1,
            Math.PI // West
          );
          const marker2kmNorth = calculateNewPosition(
            [latitude, longitude],
            2,
            0 // North
          );
          const marker3kmSouth = calculateNewPosition(
            [latitude, longitude],
            3,
            Math.PI / 2 // South
          );
          const marker4kmEast = calculateNewPosition(
            [latitude, longitude],
            4,
            Math.PI / 2 // South
          );

          setMarkerLocations([
            { lat: marker1kmWest[0], lng: marker1kmWest[1] },
            { lat: marker2kmNorth[0], lng: marker2kmNorth[1] },
            { lat: marker3kmSouth[0], lng: marker3kmSouth[1] },
            { lat: marker4kmEast[0], lng: marker4kmEast[1] },
          ]);
        },
        (error) => {
          console.error("Error fetching location:", error);
          alert("Unable to fetch location.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  }, []);

  // Render Google Map
  const map = useMemo(() => {
    if (!isLoaded || !userLocation) return null;

    return (
      <GoogleMap
        center={userLocation}
        zoom={15}
        mapContainerStyle={{ height: "600px", width: "100%" }}
      >
        {/* User Location Marker */}
        <Marker
          position={userLocation}
          //   icon={{
          //     url: "/assets/images/location.png",
          //     scaledSize: new window.google.maps.Size(35, 45),
          //   }}
        />

        {/* Other Markers */}
        {markerLocations.map((position, index) => (
          <Marker
            key={index}
            position={position}
            icon={{
              url: "/assets/images/truck.png",
              scaledSize: new window.google.maps.Size(40, 40),
            }}
            onClick={() => setOpen(true)}
          />
        ))}
      </GoogleMap>
    );
  }, [isLoaded, userLocation, markerLocations, setOpen]);

  return <div>{map || <div>Loading map...</div>}</div>;
};

export default GoogleMapAllTrack;
