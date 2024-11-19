"use client";
import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Trucks from "@/components/map-truck/Trucks";
import MyLoad from "@/components/map-truck/MyLoad";
import Map from "@/components/map-truck/Map";
import { Row, Col, Table } from "antd";

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

  const handleDrop = (item) => {
    setTrucksData((prevData) => [
      ...prevData,
      { ...item, key: String(prevData.length + 1) },
    ]);

    setMyLoadItems((prevItems) =>
      prevItems.filter((loadItem) => loadItem.key !== item.key)
    );
  };

  console.log("trucksData", trucksData);

  console.log("myLoadItems", myLoadItems);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex gap-8 items-center p-20 overflow-hidden">
        {/* Trucks Data */}
        <div className="flex flex-col items-center gap-5 w-1/3">
          <p className="bg-[#2B4257] px-5 py-2 rounded-lg text-white w-40 text-center">
            Available Trucks
          </p>
          <Trucks data={trucksData} onDrop={handleDrop} />
        </div>

        <div className="w-1/3">
          <Map />
        </div>

        {/* MyLoad Data */}
        <div className="w-1/3 flex flex-col items-center gap-5">
          <p className="bg-[#2B4257] px-5 py-2 rounded-lg text-white w-36 text-center">
            My Load
          </p>
          <MyLoad data={myLoadItems} />
        </div>
      </div>
    </DndProvider>
  );
};

export default MapTruck;
