"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";

// Dynamically import Leaflet components and library
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  {
    ssr: false,
  }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  {
    ssr: false,
  }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});
const Polyline = dynamic(
  () => import("react-leaflet").then((mod) => mod.Polyline),
  {
    ssr: false,
  }
);

// Import Leaflet dynamically to ensure compatibility with Next.js
const L = dynamic(() => import("leaflet"), { ssr: false });

const LeafletDeliveryMap = () => {
  const [userLocation, setUserLocation] = useState(null); // Store user's location
  const [vehicleLocation, setVehicleLocation] = useState(null); // Store calculated vehicle location
  const [icons, setIcons] = useState(null); // Store custom icons

  // Distance in kilometers
  const distance = 5; // 5km

  // Function to calculate new coordinates 5km away
  const calculateNewPosition = ([lat, lng], distanceKm, bearing = 0) => {
    const earthRadiusKm = 6371; // Radius of the Earth in kilometers
    const dByR = distanceKm / earthRadiusKm; // Angular distance in radians

    const lat1 = (lat * Math.PI) / 180; // Convert latitude to radians
    const lng1 = (lng * Math.PI) / 180; // Convert longitude to radians

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

  // Initialize custom icons once Leaflet is loaded
  useEffect(() => {
    const initializeIcons = async () => {
      const leaflet = await import("leaflet");
      setIcons({
        vehicleIcon: new leaflet.Icon({
          iconUrl: "/assets/images/truck.png", // Corrected path
          iconSize: [100, 100],
          iconAnchor: [50, 50],
        }),
        userLocationIcon: new leaflet.Icon({
          iconUrl: "/assets/images/location.png", // Corrected path
          iconSize: [50, 50],
          iconAnchor: [25, 48],
        }),
      });
    };
    initializeIcons();
  }, []);

  // Fetch user's location on component mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const userLoc = [latitude, longitude];
          setUserLocation(userLoc);

          // Calculate vehicle location 5km north (bearing = 0 radians)
          const vehicleLoc = calculateNewPosition(userLoc, distance, 0); // 0 radians = north
          setVehicleLocation(vehicleLoc);
        },
        (error) => {
          alert("Unable to fetch location. Please enable location access.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  }, []);

  if (!userLocation || !vehicleLocation || !icons) {
    return (
      <div className="text-center text-lg">
        Loading map and fetching your location...
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <MapContainer
        center={vehicleLocation} // Center the map on the vehicle location
        zoom={12.5}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        {/* Base Tile Layer */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* User Marker */}
        <Marker position={userLocation} icon={icons.userLocationIcon}>
          <Popup>Your Current Location</Popup>
        </Marker>

        {/* Vehicle Marker */}
        <Marker position={vehicleLocation} icon={icons.vehicleIcon}>
          <Popup>Vehicle Location (5km Away)</Popup>
        </Marker>

        {/* Route Polyline */}
        <Polyline
          positions={[userLocation, vehicleLocation]}
          color="red"
          weight={4}
        >
          <Popup>Route Path</Popup>
        </Polyline>
      </MapContainer>
    </div>
  );
};

export default LeafletDeliveryMap;
