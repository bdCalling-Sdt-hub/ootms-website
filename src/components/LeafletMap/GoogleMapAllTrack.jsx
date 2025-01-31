// "use client";

// import { useState, useEffect, useMemo, useCallback } from "react";
// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
// import { useGetNearestDriverForUserMutation } from "@/redux/api/loadApi";

// const GoogleMapAllTrack = ({ setOpen, setCurrentDriverModalData }) => {
//   const [postUserLocation] = useGetNearestDriverForUserMutation();
//   const [userLocation, setUserLocation] = useState(null); // User's current location
//   const [markerLocations, setMarkerLocations] = useState([]); // Driver markers

//   const safeLatLng = (lat, lng) =>
//     !isNaN(lat) && !isNaN(lng) ? { lat, lng } : null;

//   // Fetch nearby drivers from API
//   const getNearByDrivers = useCallback(async () => {
//     if (!userLocation) return;

//     try {
//       const { data } = await postUserLocation({
//         userLocation: [userLocation.lng, userLocation.lat],
//       });

//       console.log("From Server All Driver", data);

//       if (data?.data?.length) {
//         const locations = data.data
//           .map((driver) => {
//             const safeLocation = safeLatLng(
//               driver?.location?.coordinates[1], // Latitude
//               driver?.location?.coordinates[0] // Longitude
//             );
//             return (
//               safeLocation && {
//                 id: driver._id, // Unique identifier for each marker
//                 ...safeLocation,
//                 fullName: driver.fullName,
//                 distance: driver.distance,
//                 address: driver.address,
//                 phoneNumber: driver.phoneNumber,
//                 image: driver.image,
//                 email: driver.email,
//                 ratings: driver.ratings,
//                 info: driver, // Pass the entire driver object
//               }
//             );
//           })
//           .filter(Boolean); // Remove invalid markers
//         setMarkerLocations(locations);
//       }
//     } catch (error) {
//       console.error("Error fetching nearby drivers:", error);
//     }
//   }, [postUserLocation, userLocation]);

//   // Fetch user location when the component mounts
//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setUserLocation({ lat: latitude, lng: longitude });
//         },
//         (error) => {
//           console.error("Error fetching location:", error);
//           alert("Unable to fetch location.");
//         }
//       );
//     } else {
//       alert("Geolocation is not supported by your browser.");
//     }
//   }, []);

//   // Trigger nearby driver fetching when user location is set
//   useEffect(() => {
//     getNearByDrivers();
//   }, [getNearByDrivers]);

//   // Load Google Maps API
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
//   });

//   const map = useMemo(() => {
//     if (!isLoaded || !userLocation) return null;

//     return (
//       <GoogleMap
//         center={userLocation}
//         zoom={13}
//         mapContainerStyle={{ height: "600px", width: "100%" }}
//       >
//         {/* User Location Marker */}
//         <Marker position={userLocation} />

//         {/* Driver Markers */}
//         {markerLocations.map((marker, i) => (
//           <Marker
//             key={i}
//             position={{ lat: marker.lat, lng: marker.lng }}
//             icon={{
//               url: "/assets/images/truck.png",
//               scaledSize: new window.google.maps.Size(60, 60),
//             }}
//             onClick={() => {
//               setOpen(true); // Open the modal
//               console.log("Driver Info", marker);
//               setCurrentDriverModalData({
//                 ...marker.info?.truck,
//                 driverName: marker.fullName,
//               }); // Set the complete driver data
//             }}
//           />
//         ))}
//       </GoogleMap>
//     );
//   }, [
//     isLoaded,
//     userLocation,
//     markerLocations,
//     setOpen,
//     setCurrentDriverModalData,
//   ]);

//   return <div>{map || <div>Loading map...</div>}</div>;
// };

// export default GoogleMapAllTrack;

import { useState, useEffect, useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useGetNearestDriverForUserMutation } from "@/redux/api/loadApi";

const GoogleMapAllTrack = ({ setOpen, setCurrentDriverModalData }) => {
  const [postUserLocation] = useGetNearestDriverForUserMutation();
  const [userLocation, setUserLocation] = useState(null); // User's current location
  const [markerLocations, setMarkerLocations] = useState([]); // Driver markers

  console.log("userLocation", userLocation);

  const markerImages = {
    fullCapacity: "/assets/images/redTruck.png", // when availablePalletSpace === palletSpace
    noCapacity: "/assets/images/greenTruck.png", // when availablePalletSpace === 0
    partialCapacity: "/assets/images/truck.png", // when availablePalletSpace is less than palletSpace and greater than 0
  };

  // Fetch user location when the component mounts
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          alert("Unable to fetch location.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  }, []);

  // Fetch nearby drivers from API when userLocation changes
  useEffect(() => {
    const fetchNearByDrivers = async () => {
      if (!userLocation) return;

      try {
        const { data } = await postUserLocation({
          userLocation: [userLocation.lng, userLocation.lat],
        });

        if (data?.data?.length) {
          const locations = data.data
            .map((driver) => ({
              lat: driver.location.coordinates[1], // Latitude
              lng: driver.location.coordinates[0], // Longitude
              id: driver._id, // Unique identifier for each marker
              fullName: driver.fullName,
              distance: driver.distance,
              address: driver.address,
              phoneNumber: driver.phoneNumber,
              image: driver.image,
              email: driver.email,
              ratings: driver.ratings,
              info: driver, // Pass the entire driver object
            }))
            .filter(Boolean); // Remove invalid markers
          setMarkerLocations(locations);
        }
      } catch (error) {
        console.error("Failed to fetch nearby drivers", error);
      }
    };

    fetchNearByDrivers();
  }, [postUserLocation, userLocation]);

  // Load Google Maps API
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });

  const map = useMemo(() => {
    if (!isLoaded || !userLocation) return null;

    return (
      <GoogleMap
        center={userLocation}
        zoom={14}
        mapContainerStyle={{ height: "600px", width: "100%" }}
      >
        {/* User Location Marker */}
        <Marker position={userLocation} />

        {/* Driver Markers */}
        {markerLocations.map((marker, i) => (
          <Marker
            key={i}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url:
                marker.info.truck.availablePalletSpace === 0
                  ? markerImages.fullCapacity
                  : marker.info.truck.availablePalletSpace ===
                    marker.info.truck.palletSpace
                  ? markerImages.noCapacity
                  : markerImages.partialCapacity,
              scaledSize: new window.google.maps.Size(60, 60),
            }}
            onClick={() => {
              setOpen(true);
              setCurrentDriverModalData({
                ...marker.info.truck,
                driverName: marker.fullName,
              });
            }}
          />
        ))}
      </GoogleMap>
    );
  }, [
    isLoaded,
    userLocation,
    markerLocations,
    markerImages.fullCapacity,
    markerImages.noCapacity,
    markerImages.partialCapacity,
    setOpen,
    setCurrentDriverModalData,
  ]);

  return <div>{map || <div>Loading map...</div>}</div>;
};

export default GoogleMapAllTrack;
