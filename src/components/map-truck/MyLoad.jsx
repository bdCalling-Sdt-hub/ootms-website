"use client";
import { Col, Row, Table } from "antd";
import { useState } from "react";

const MyLoad = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const columns = [
    { title: "Shipper City", dataIndex: "shipperCity", key: "shipperCity" },
    { title: "Receiver City", dataIndex: "receiverCity", key: "receiverCity" },
    { title: "Load Type", dataIndex: "loadType", key: "loadType" },
    { title: "Pallet Spaces", dataIndex: "palletSpaces", key: "palletSpaces" },
    { title: "Weight", dataIndex: "weight", key: "weight" },
    { title: "Pickup Date", dataIndex: "pickupDate", key: "pickupDate" },
    { title: "Delivery Date", dataIndex: "deliveryDate", key: "deliveryDate" },
  ];

  const data = [
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
  ];

  const handleDragStart = (e) => {
    // Store the initial mouse position when drag starts
    const offsetX = e.clientX - position.x;
    const offsetY = e.clientY - position.y;

    const handleDragMove = (e) => {
      if (e.buttons === 1) {
        // Check if the mouse button is held down
        setPosition({
          x: e.clientX - offsetX,
          y: e.clientY - offsetY,
        });
      }
    };

    const handleDragEnd = () => {
      window.removeEventListener("mousemove", handleDragMove);
      window.removeEventListener("mouseup", handleDragEnd);
    };

    window.addEventListener("mousemove", handleDragMove);
    window.addEventListener("mouseup", handleDragEnd);
  };

  return (
    <div
      className="mb-6 w-2/3 relative"
      onMouseDown={handleDragStart}
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: "move",
        width: "100%", // Set width as needed
        maxWidth: "100%",
      }}
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
        dataSource={data}
        pagination={false}
        bordered
        scroll={{ x: "max-content" }} // Adds horizontal scrolling to the table on smaller screens
        style={{ maxWidth: "100%", overflowX: "hidden" }}
      />
    </div>
  );
};

export default MyLoad;
