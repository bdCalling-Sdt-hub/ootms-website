"use client";
import Map from "@/components/map-truck/Map";
import MyLoad from "@/components/map-truck/MyLoad";
import Trucks from "@/components/map-truck/Trucks";
import { motion } from "framer-motion";
import { useState } from "react";
import { AllImages } from "../../../../public/assets/AllImages";
import { useRouter } from "next/navigation";
import LeafletAllTrack from "@/components/LeafletMap/LeafletAllTrack";

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
  const router = useRouter();
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

  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-4  gap-8  py-10 lg:py-20 px-5 lg:px-10 ">
      {/* Trucks Data */}
      <div className=" gap-5 ">
        <p className="bg-[#2B4257] px-5 py-2 rounded-lg text-white  text-center mb-10 w-full">
          Available Trucks
        </p>
        <div className=" flex flex-col gap-5 overflow-x-auto">
          <Trucks data={trucksData} setOpen={setOpen} open={open} />
          <Trucks data={trucksData} setOpen={setOpen} open={open} />
          <Trucks data={trucksData} setOpen={setOpen} open={open} />
          <Trucks data={trucksData} setOpen={setOpen} open={open} />
          <Trucks data={trucksData} setOpen={setOpen} open={open} />
        </div>
      </div>

      <div className="lg:col-span-2 w-full h-fit place-self-center order-first lg:order-none z-10">
        <LeafletAllTrack setOpen={setOpen} />
      </div>

      {/* MyLoad Data */}
      <motion.div className=" gap-5 ">
        <motion.div className="relative mb-5 mx-auto">
          <p className="bg-[#2B4257] px-5 py-2 rounded-lg text-white text-center mb-3">
            My Load
          </p>
          <motion.div
            // onClick={() =>
            //   setTimeout(() => router.push("/load-request?req=myRequest"), 5000)
            // }
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
            className="relative  w-fit bg-[#2B4257] !z-[99999] p-2 rounded-full shadow-lg mx-auto cursor-move "
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
        <div className=" flex flex-col gap-5 overflow-x-auto">
          <MyLoad data={myLoadItems} />
          <MyLoad data={myLoadItems} />
        </div>
      </motion.div>
    </div>
  );
};

export default MapTruck;
