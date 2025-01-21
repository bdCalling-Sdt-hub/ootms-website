"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  GoogleMap,
  Marker,
  useLoadScript,
  StandaloneSearchBox,
} from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const libraries = ["places"];

export default function ShipperFormGoogleMap({
  onLocationSelect,
  setLocationDetails,
}) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
    libraries,
  });

  const [markerPosition, setMarkerPosition] = useState(null);
  const [currentCenter, setCurrentCenter] = useState({
    lat: 37.7749,
    lng: -122.4194,
  });

  const mapRef = useRef();
  const searchBoxRef = useRef();

  // Get user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentCenter({ lat: latitude, lng: longitude });
          setMarkerPosition({ lat: latitude, lng: longitude });
          fetchLocationDetails(latitude, longitude); // Fetch details of current location
        },
        (error) => {
          console.error("Error getting location:", error);
          alert(
            "Could not fetch your location. Default location will be used."
          );
        }
      );
    }
  }, []);

  const handleMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setMarkerPosition({ lat, lng });
    fetchLocationDetails(lat, lng);
    if (onLocationSelect) {
      onLocationSelect({ lat, lng });
    }
  };

  const handlePlacesChanged = () => {
    const places = searchBoxRef.current.getPlaces();
    if (places && places.length > 0) {
      const location = places[0].geometry.location;
      const lat = location.lat();
      const lng = location.lng();

      setMarkerPosition({ lat, lng });
      fetchLocationDetails(lat, lng);

      if (onLocationSelect) {
        onLocationSelect({ lat, lng });
      }

      if (mapRef.current) {
        mapRef.current.panTo({ lat, lng });
      }
    }
  };

  // Fetch location details using Geocoding API
  const fetchLocationDetails = async (lat, lng) => {
    const geocodingURL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`;
    try {
      const response = await fetch(geocodingURL);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const addressComponents = data.results[0].address_components;
        const city = getAddressComponent(addressComponents, "locality");
        const state = getAddressComponent(
          addressComponents,
          "administrative_area_level_1"
        );
        const zip = getAddressComponent(addressComponents, "postal_code") || "";
        const formattedAddress = cleanFormattedAddress(
          data.results[0].formatted_address
        ); // Cleaned formatted address

        setLocationDetails({ city, state, zip, fullAddress: formattedAddress });
      } else {
        setLocationDetails({
          city: "",
          state: "",
          zip: "",
          fullAddress: "",
        });
      }
    } catch (error) {
      console.error("Error fetching location details:", error);
      setLocationDetails({
        city: "",
        state: "",
        zip: "",
        fullAddress: "",
      });
    }
  };

  // Helper function to clean Plus Codes from the formatted address
  const cleanFormattedAddress = (address) => {
    return address.replace(/^[^,]+,\s*/, ""); // Removes anything before the first comma
  };

  // Helper function to get specific address component
  const getAddressComponent = (components, type) => {
    const component = components.find((c) => c.types.includes(type));
    return component ? component.long_name : null;
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
      <StandaloneSearchBox
        onLoad={(ref) => (searchBoxRef.current = ref)}
        onPlacesChanged={handlePlacesChanged}
      >
        <input
          type="text"
          placeholder="Search for a location"
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `100%`,
            height: `40px`,
            padding: `0 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `16px`,
            outline: `none`,
            textOverflow: `ellipses`,
            marginBottom: "10px",
          }}
        />
      </StandaloneSearchBox>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={currentCenter}
        onClick={handleMapClick}
        onLoad={(map) => (mapRef.current = map)}
      >
        {markerPosition && <Marker position={markerPosition} />}
      </GoogleMap>
      {/* <div style={{ marginTop: "20px" }}>
        <label>
          <strong>City:</strong> {locationDetails.city}
        </label>
        <br />
        <label>
          <strong>State:</strong> {locationDetails.state}
        </label>
        <br />
        <label>
          <strong>ZIP Code:</strong> {locationDetails.zip}
        </label>
        <br />
        <label>
          <strong>Full Address:</strong> {locationDetails.fullAddress}
        </label>
      </div> */}
    </div>
  );
}
