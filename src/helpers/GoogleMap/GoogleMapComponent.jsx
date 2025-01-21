import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";

const libraries = ["places"]; // Include any libraries you need

const GoogleMapCompo = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY, // Use your API key
    libraries,
  });

  const [currentPosition, setCurrentPosition] = useState(null);

  // Get user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          console.error("Error getting user's location");
        }
      );
    }
  }, []);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <div style={{ height: "500px", width: "100%" }}>
      {currentPosition && (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={currentPosition}
          zoom={15}
        >
          <Marker position={currentPosition} />
        </GoogleMap>
      )}
    </div>
  );
};

export default GoogleMapCompo;
