"use client";
import { Col, ConfigProvider, Row, Table } from "antd";
import { motion } from "framer-motion";
import { AllImages } from "../../../public/assets/AllImages";

const MyLoad = ({ data, isFetching, open, handleDragEnd }) => {
  // Ensure `data` is an array
  const tableData = [data];

  // Define columns correctly
  const columns = [
    {
      title: "Shipper City",
      dataIndex: "shippingCity", // Refers to the key in each object
      key: "shippingCity",
    },
    {
      title: "Receiver City",
      dataIndex: "receiverCity",
      key: "receiverCity",
    },
    { title: "Load Type", dataIndex: "loadType", key: "loadType" },
    {
      title: "Pallet Spaces",
      dataIndex: "palletSpace",
      key: "palletSpace",
    },
    { title: "Weight", dataIndex: "weight", key: "weight" },
    {
      title: "Pickup Date",
      dataIndex: "pickupDate",
      key: "pickupDate",
    },
    {
      title: "Delivery Date",
      dataIndex: "deliveryDate",
      key: "deliveryDate",
    },
  ];

  // Display the first record for Shipper and Receiver sections

  return (
    <div className="">
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
        drag={open}
        dragListener
        dragSnapToOrigin
        onDragEnd={handleDragEnd}
        className="relative  w-fit bg-[#2B4257] !z-[99999] p-2 rounded-full shadow-lg mx-auto cursor-move "
      >
        <motion.img
          draggable="false"
          alt="bakso"
          src={AllImages.bakso.src}
          width={50}
          height={50}
          data-full-data={JSON.stringify(data)}
          data-id={data?._id}
          className="select-none "
        />
      </motion.div>
      <div className="my-6 overflow-x-auto">
        {/* Shipper and Receiver Section */}
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
            Shipper
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
            {data?.shipperName || "N/A"}
          </Col>
          <Col xs={24} sm={12} style={{ padding: "10px" }}>
            {data?.receiverName || "N/A"}
          </Col>
        </Row>

        {/* Data Table */}
        <ConfigProvider
          theme={{
            components: {
              Table: {
                padding: 10,
                margin: 10,
                cellFontSize: 12,
                headerBg: "rgb(189,196,222)",
              },
              Input: {
                colorText: "rgb(255,255,255)",
              },
            },
          }}
        >
          <Table
            columns={columns}
            dataSource={tableData}
            loading={isFetching}
            rowKey="_id" // Use `_id` as a unique key for rows
            pagination={false}
            bordered
            scroll={{ x: "max-content" }}
            style={{ maxWidth: "100%", overflowX: "hidden" }}
          />
        </ConfigProvider>
      </div>
    </div>
  );
};

export default MyLoad;
