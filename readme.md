"use client";
import { Col, Row, Table } from "antd";
import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import Trucks from "@/components/map-truck/Trucks";
import MyLoad from "@/components/map-truck/MyLoad";
import Map from "@/components/map-truck/Map";
import { motion } from "framer-motion";

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

// Handle drop event and move the item from MyLoad to Trucks
const handleDropItem = (event) => {
const droppedItem = event.active.data.current;
setTrucksData((prevData) => [
...prevData,
{ ...droppedItem, key: String(prevData.length + 1) },
]);
// Remove the item from MyLoad after it is dropped
setMyLoadItems((prevItems) =>
prevItems.filter((item) => item.key !== droppedItem.key)
);
};

return (
<div className="flex gap-8 items-center p-20 overflow-hidden">
{/_ Track Data _/}
<div className="w-1/3">
<Trucks data={trucksData} />
</div>

      <div className="w-1/3">
        <Map />
      </div>

      {/* myLoad Data  */}
      <div className="w-1/3">
        <motion.div
          className="mb-6 w-2/3 relative cursor-move"
          drag
          dragSnapToOrigin
        >
          {/* First Row: Header (Driver and Receiver) */}
          <Row
            gutter={0}
            style={{
              textAlign: "center",
              backgroundColor: "#d9d9f0",
              border: "1px solid gray",
            }}
          >
            <Col
              xs={24}
              sm={12}
              style={{
                padding: "10px",
                fontWeight: "bold",
                borderRight: "1px solid gray",
              }}
            >
              Driver
            </Col>
            <Col
              xs={24}
              sm={12}
              style={{
                padding: "10px",
                fontWeight: "bold",
              }}
            >
              Receiver
            </Col>
          </Row>

          {/* Second Row: Data (Driver and Receiver Names) */}
          <Row
            gutter={0}
            style={{
              textAlign: "center",
              border: "1px solid gray",
            }}
          >
            <Col
              xs={24}
              sm={12}
              style={{
                padding: "10px",
                borderRight: "1px solid #ccc",
              }}
            >
              John Smith
            </Col>
            <Col xs={24} sm={12} style={{ padding: "10px" }}>
              Sohagh Ahmed
            </Col>
          </Row>

          {/* Table Section */}
          <Table
            columns={columns}
            dataSource={myLoadItems}
            pagination={false}
            bordered
            scroll={{ x: "max-content" }} // Adds horizontal scrolling to the table on smaller screens
            style={{ maxWidth: "100%", overflowX: "hidden" }}
          />
        </motion.div>
      </div>
    </div>

);
};

export default MapTruck;
