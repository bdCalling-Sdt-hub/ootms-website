"use client";

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import truck from "../../../public/assets/images/truck.png";
import redTruck from "../../../public/assets/images/redTruck.png";
import greenTruck from "../../../public/assets/images/greenTruck.png";

// Custom Marker Icon
const customIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const randomTruckIcon = new L.Icon({
  iconUrl: truck.src, // Replace with your vehicle icon URL
  iconSize: [75, 75],
  iconAnchor: [0, 0],
});
const trackOne = new L.Icon({
  iconUrl: greenTruck.src, // Replace with your vehicle icon URL
  iconSize: [75, 75],
  iconAnchor: [0, 0],
});
const trackTwo = new L.Icon({
  iconUrl: greenTruck.src, // Replace with your vehicle icon URL
  iconSize: [75, 75],
  iconAnchor: [0, 0],
});
const trackThree = new L.Icon({
  iconUrl: greenTruck.src, // Replace with your vehicle icon URL
  iconSize: [75, 75],
  iconAnchor: [0, 0],
});

// Function to calculate a new position (lat, lng) based on a distance in kilometers and bearing
const calculateNewPosition = ([lat, lng], distanceKm, bearing = 0) => {
  const earthRadiusKm = 6371; // Radius of the Earth in kilometers
  const dByR = distanceKm / earthRadiusKm; // Angular distance in radians

  const lat1 = (lat * Math.PI) / 180; // Convert latitude to radians
  const lng1 = (lng * Math.PI) / 180; // Convert longitude to radians

  // Calculate new latitude
  const newLat = Math.asin(
    Math.sin(lat1) * Math.cos(dByR) +
      Math.cos(lat1) * Math.sin(dByR) * Math.cos(bearing)
  );

  // Calculate new longitude
  const newLng =
    lng1 +
    Math.atan2(
      Math.sin(bearing) * Math.sin(dByR) * Math.cos(lat1),
      Math.cos(dByR) - Math.sin(lat1) * Math.sin(newLat)
    );

  // Convert back to degrees
  return [(newLat * 180) / Math.PI, (newLng * 180) / Math.PI];
};

// Function to generate a random position within a given radius (in km) around a central point
const generateRandomPosition = ([lat, lng], minDistanceKm, maxDistanceKm) => {
  // Random angle between 0 and 360 degrees (0 to 2π radians)
  const randomAngle = Math.random() * 2 * Math.PI;
  // Random distance between minDistanceKm and maxDistanceKm
  const randomDistance =
    Math.random() * (maxDistanceKm - minDistanceKm) + minDistanceKm;
  // Calculate new position using random angle and distance
  return calculateNewPosition([lat, lng], randomDistance, randomAngle);
};

const LeafletAllTrack = ({ setOpen, open }) => {
  const [userLocation, setUserLocation] = useState(null); // Store user location
  const [markerLocations, setMarkerLocations] = useState([]);
  const [randomMarkers, setRandomMarkers] = useState([]);

  // Fetch user's location on component mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const userLoc = [latitude, longitude];
          setUserLocation(userLoc);

          // Calculate 1 km to the left (west), 2 km north, and 3 km to the bottom (south)
          const marker1kmLeft = calculateNewPosition(userLoc, 2, Math.PI); // 1km Left (West)
          const marker2kmNorth = calculateNewPosition(userLoc, 1.5, 0); // 2km North
          const marker3kmSouth = calculateNewPosition(userLoc, 4, Math.PI / 2); // 3km Bottom (South)

          setMarkerLocations([marker1kmLeft, marker2kmNorth, marker3kmSouth]);

          // Generate 3 random markers with a distance between 5 km and 10 km
          const randomMarkersArray = [];
          for (let i = 0; i < 3; i++) {
            const randomMarker = generateRandomPosition(userLoc, 1, 3.5);
            randomMarkersArray.push(randomMarker);
          }
          setRandomMarkers(randomMarkersArray);
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

  if (!userLocation) {
    return <div>Loading map and fetching your location...</div>; // Show a loading message while fetching the location
  }

  return (
    <div className="h-full w-full">
      <div className="relative w-full h-96 rounded-lg shadow-lg overflow-hidden">
        <MapContainer
          center={userLocation} // Set center to the user's current location
          zoom={13}
          scrollWheelZoom={true}
          className="w-full h-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {/* User Marker */}
          <Marker position={userLocation} icon={customIcon}>
            <Popup>Your Current Location</Popup>
          </Marker>

          {/* 1 km Left (West) Marker */}
          <Marker
            onClick={() => setOpen(!open)}
            position={markerLocations[0]}
            icon={trackOne}
          >
            <Popup>
              <div>1 km Left (West) from your location. </div>
            </Popup>
          </Marker>

          {/* 2 km North Marker */}
          <Marker position={markerLocations[1]} icon={trackTwo}>
            <Popup>
              <div onClick={() => setOpen(!open)}>
                2 km North from your location
                <button className="py-2 px-2 bg-[#2B4257] text-primary-color rounded-lg ml-1">
                  Load Truck
                </button>
              </div>
            </Popup>
          </Marker>

          {/* 3 km Bottom (South) Marker */}
          <Marker position={markerLocations[2]} icon={trackThree}>
            <Popup>
              <div onClick={() => setOpen(!open)}>
                3 km Bottom (South) from your location
                <button className="py-2 px-2 bg-[#2B4257] text-primary-color rounded-lg ml-1">
                  Load Truck
                </button>
              </div>
            </Popup>
          </Marker>

          {/* Random Markers */}
          {randomMarkers.map((randomMarker, index) => (
            <Marker position={randomMarker} icon={randomTruckIcon} key={index}>
              <Popup>
                {" "}
                <div onClick={() => setOpen(!open)}>
                  <button className="py-2 px-2 bg-[#2B4257] text-primary-color rounded-lg ml-1">
                    Load Truck
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default LeafletAllTrack;
