"use client";
import Map from "@/components/map-truck/Map";
import MyLoad from "@/components/map-truck/MyLoad";
import Trucks from "@/components/map-truck/Trucks";
import { motion } from "framer-motion";
import { useState } from "react";
import { AllImages } from "../../../../public/assets/AllImages";

const columns = [
  { title: "Shipper City", dataIndex: "shipperCity", key: "shipperCity" },
  { title: "Receiver City", dataIndex: "receiverCity", key: "receiverCity" },
  { title: "Load Type", dataIndex: "loadType", key: "loadType" },
  { title: "Pallet Spaces", dataIndex: "palletSpaces", key: "palletSpaces" },
  { title: "Weight", dataIndex: "weight", key: "weight" },
  { title: "Pickup Date", dataIndex: "pickupDate", key: "pickupDate" },
  { title: "Delivery Date", dataIndex: "deliveryDate", key: "deliveryDate" },
];

const MapTruck = () => {
  const [trucksData, setTrucksData] = useState([
    {
      key: "1",
      driver: "John Doe",
      truck: "Volvo FH16",
      palletSpaces: 24,
      weight: 47000,
      trailerSize: "53 ft",
      availability: "Available",
      location: "Atlanta, GA",
    },
  ]);

  const [myLoadItems, setMyLoadItems] = useState([
    {
      key: "1",
      shipperCity: "Atlanta",
      receiverCity: "Denver",
      loadType: "Full",
      palletSpaces: 24,
      weight: 47000,
      pickupDate: "11/11/2024",
      deliveryDate: "13/11/2024",
    },
  ]);

  return (
    <div className="flex gap-8  p-20 overflow-hidden min-h-screen">
      {/* Trucks Data */}
      <div className="flex flex-col items-center gap-5 w-1/3">
        <p className="bg-[#2B4257] px-5 py-2 rounded-lg text-white w-40 text-center">
          Available Trucks
        </p>
        <Trucks data={trucksData} />
      </div>

      <div className="w-1/3">
        <Map />
      </div>

      {/* MyLoad Data */}
      <motion.div className="w-1/3 flex flex-col items-center gap-5">
        <motion.div className="relative mb-20">
          <p className="bg-[#2B4257] px-5 py-2 rounded-lg text-white w-36 text-center mb-3">
            My Load
          </p>
          <motion.div
            initial={{ y: 3 }}
            animate={{ y: -3 }}
            transition={{
              ease: "easeInOut",
              repeat: Infinity,
              duration: 0.5,
              repeatType: "reverse", // Ensures the animation reverses on repeat
            }}
            drag
            dragListener
            dragSnapToOrigin
            className="absolute left-10 w-fit bg-[#2B4257] !z-[99999] p-2 rounded-full shadow-lg mx-auto cursor-move"
          >
            <motion.img
              draggable="false"
              alt="bakso"
              src={AllImages.bakso.src}
              width={50}
              height={50}
              className="select-none "
            />
          </motion.div>
        </motion.div>
        <MyLoad data={myLoadItems} />
      </motion.div>
    </div>
  );
};

export default MapTruck;
