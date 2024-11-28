"use client";

import { useState, useEffect, useMemo } from "react";
import dynamic from "next/dynamic"; // Import dynamic for conditional SSR
import "leaflet/dist/leaflet.css";

// Dynamically import Leaflet components
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

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

const LeafletAllTrack = ({ setOpen }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [markerLocations, setMarkerLocations] = useState([]);
  const [isLeafletReady, setIsLeafletReady] = useState(false);
  const [customIcons, setCustomIcons] = useState(null);

  // Initialize custom icons dynamically
  useEffect(() => {
    const initializeLeaflet = async () => {
      const leaflet = await import("leaflet");
      setCustomIcons({
        userLocationIcon: new leaflet.Icon({
          iconUrl: "/assets/images/location.png", // Icon for user location
          iconSize: [35, 45],
          iconAnchor: [17, 45],
        }),
        markerIcon: new leaflet.Icon({
          iconUrl: "/assets/images/truck.png", // Icon for other markers
          iconSize: [75, 75],
          iconAnchor: [37, 75],
        }),
      });
      setIsLeafletReady(true);
    };
    initializeLeaflet();
  }, []);

  // Fetch user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const userLoc = [latitude, longitude];
          setUserLocation(userLoc);

          // Generate markers
          const marker1kmWest = calculateNewPosition(userLoc, 1, Math.PI); // West
          const marker2kmNorth = calculateNewPosition(userLoc, 2, 0); // North
          const marker3kmSouth = calculateNewPosition(userLoc, 3, Math.PI / 2); // South
          setMarkerLocations([marker1kmWest, marker2kmNorth, marker3kmSouth]);
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

  // Memoized MapContainer to avoid unnecessary reinitialization
  const map = useMemo(() => {
    if (!isLeafletReady || !userLocation || !customIcons) return null;

    return (
      <MapContainer
        center={userLocation}
        zoom={13.5}
        scrollWheelZoom={true}
        className="h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* User Location Marker */}
        <Marker position={userLocation} icon={customIcons.userLocationIcon}>
          <Popup>Your Location</Popup>
        </Marker>

        {/* Other Markers */}
        {markerLocations.map((position, index) => (
          <Marker key={index} position={position} icon={customIcons.markerIcon}>
            <Popup>
              <div onClick={() => setOpen(true)}>
                <button className="py-2 px-2 bg-[#2B4257] text-primary-color rounded-lg ml-1">
                  Load Truck
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    );
  }, [isLeafletReady, userLocation, customIcons, markerLocations]);

  return (
    <div className="h-[600px] w-full">{map || <div>Loading map...</div>}</div>
  );
};

export default LeafletAllTrack;
