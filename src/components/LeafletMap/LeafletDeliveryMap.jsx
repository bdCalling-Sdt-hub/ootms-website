"use client";

import { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import truck from "../../../public/assets/images/truck.png";
import location from "../../../public/assets/images/location.png";

// Custom Vehicle Icon
const vehicleIcon = new L.Icon({
  iconUrl: truck.src, // Replace with your vehicle icon URL
  iconSize: [100, 100],
  iconAnchor: [60, 80],
});
const userLocationIcon = new L.Icon({
  iconUrl: location.src, // Replace with your vehicle icon URL
  iconSize: [50, 50],
  iconAnchor: [25, 48],
});

const LeafletDeliveryMap = () => {
  const [userLocation, setUserLocation] = useState(null); // Store user's location
  const [vehicleLocation, setVehicleLocation] = useState(null); // Store calculated vehicle location

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
          console.error("Error fetching location:", error);
          alert("Unable to fetch location. Please enable location access.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  }, []);

  return (
    <div className="w-full h-full">
      {userLocation && vehicleLocation ? (
        <MapContainer
          center={vehicleLocation} // Center the map on user's location
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
          <Marker position={userLocation} icon={userLocationIcon}>
            <Popup>Your Current Location</Popup>
          </Marker>

          {/* Vehicle Marker */}
          <Marker position={vehicleLocation} icon={vehicleIcon}>
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
      ) : (
        <div className="text-center text-lg">
          Loading map and fetching your location...
        </div>
      )}
    </div>
  );
};

export default LeafletDeliveryMap;
