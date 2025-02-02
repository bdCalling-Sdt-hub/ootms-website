import React, { useState, useEffect } from "react";

function LocationCell({ coordinates }) {
  const [address, setAddress] = useState("Loading...");

  useEffect(() => {
    async function fetchAddress() {
      if (!coordinates || coordinates.length !== 2) {
        console.error("Invalid or missing coordinates:", coordinates);
        setAddress("N/A");
        return;
      }

      // Make sure to replace 'YOUR_API_KEY' with your actual Google Maps API key.
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates[1]},${coordinates[0]}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.status === "OK") {
          setAddress(data.results[0].formatted_address);
        } else {
          console.error("Geocoding failed:", data.status);
          setAddress("Address not found");
        }
      } catch (error) {
        console.error("Error fetching address:", error);
        setAddress("Failed to load address");
      }
    }

    fetchAddress();
  }, [coordinates]);

  return <div>{address}</div>;
}

export default LocationCell;
