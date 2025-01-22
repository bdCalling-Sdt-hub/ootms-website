"use client";
import { Button, Col, ConfigProvider, Modal, Row, Table } from "antd";
import Image from "next/image";
import { useRef, useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import { AllImages } from "../../../public/assets/AllImages";
 
const Trucks = ({
  data,
  setOpen,
  open,
  setCurrentDriverModalData,
  setDragData,
}) => {
  const showModal = (data) => {
    console.log("Received data:", data);
    setOpen(true);
    setCurrentDriverModalData(data);
  };
 console.log("11111",data);
 
  const columns = [
    {
      title: "Driver",
      dataIndex: "driverName",
      key: "driverName",
      render: (text, record) => <div>{text}</div>,
      responsive: ["xs", "sm"], // Display on extra small and small screens
    },
    {
      title: "Truck Number",
      dataIndex: "truckNumber",
      key: "truckNumber",
      responsive: ["xs", "sm"], // Display on small and medium screens and above
    },
    {
      title: "Pallet Spaces",
      dataIndex: "palletSpace",
      key: "palletSpace",
      responsive: ["xs", "sm"], // Display on medium screens and above
    },
    {
      title: "Weight",
      dataIndex: "weight",
      key: "weight",
      responsive: ["xs", "sm"], // Display on medium and large screens
    },
    {
      title: "Trailer Size",
      dataIndex: "trailerSize",
      key: "trailerSize",
      responsive: ["xs", "sm"], // Display only on large screens
    },
    {
      title: "Availability",
      dataIndex: "availability",
      key: "availability",
      responsive: ["xs", "sm"],
      render: (text, record) => <div>Available</div>, // Display on large and extra large screens
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      responsive: ["xs", "sm"], // Display on small screens and above
    },
  ];

  // console.log("currentData", currentData);
  return (
    <div className="">
      <ConfigProvider
        theme={{
          components: {
            Table: {
              padding: 10,
              margin: 10,
              cellFontSize: 12,
              headerBg: "rgb(189,196,222)",
            },
          },
        }}
      >
        <div className="cursor-pointer " onClick={() => showModal(data)}>
          <Table
            columns={columns}
            dataSource={[data]}
            pagination={false}
            bordered
            scroll={{ x: "100%" }}
          />
        </div>
      </ConfigProvider>
    </div>
  );
};

export default Trucks;

//  <Modal
//    className="!rounded-lg "
//    open={open}
//    footer={null}
//    onCancel={handleCancel}
//    mask={false}
//    maskClosable={false} // Disable closing the modal when clicking outside
//  >
//    <div className="mt-5 rounded-lg ">
//      {/* Header Text  */}
//      <div className="flex items-center gap-2 mx-auto p-2 bg-white">
//        <div className="w-fit p-1 rounded-full bg-[#B8E2A2] flex justify-center items-center">
//          <span className="w-5 h-5 rounded-full bg-[#90BA7A]"></span>
//        </div>
//        <p className="text-lg font-semibold">
//          The truck is {currentData?.availability}
//        </p>
//      </div>
//      {/* Track Details  */}
//      <div className="bg-[#EEF2FC] p-3 rounded mt-2">
//        <div className="">
//          <p className="text-2xl font-semibold mb-1">
//            {currentData?.truck} weight {currentData?.weight}
//          </p>
//          <p className="text-lg font-semibold mb-1">
//            {currentData?.trailerSize}-foot trailer—
//            {currentData?.palletSpaces} pallets
//          </p>
//        </div>
//      </div>
//      {/* Driver Details  */}
//      <div className="bg-white flex justify-between items-center mt-5 p-3">
//        <div className="flex items-center gap-x-5">
//          <div className="p-1 rounded-full bg-[#2B4257] w-fit">
//            <Image
//              src={AllImages.user}
//              alt="user"
//              width={0}
//              height={0}
//              sizes="100vw"
//              className="w-12 h-12 "
//            />
//          </div>
//          <div>
//            <p className="text-xl font-semibold">{currentData?.driver}</p>
//            {/* <p className="mt-1 text-lg flex items-center">
//                 <span className="pr-2 mr-1 border-r border-[#474747] flex items-center">
//                   <IoMdStar className="text-[#FFCE31] mr-1 inline-block text-lg" />
//                   4.65
//                 </span>
//                 <span>+995 654654</span>
//               </p> */}
//          </div>
//        </div>
//        <div className="p-3 rounded-full w-fit bg-[#FDFDFD] border border-[#DDDDDD]">
//          <FaPhone className="w-6 h-6" />
//        </div>
//      </div>
//      <div ref={inputRef} className="bg-[#EEF2FC] rounded-lg">
//        {/* Assign And Cancle  */}
//        <div className=" flex justify-center items-center gap-5 pt-5 p-3">
//          <Button
//            onClick={handleCancel}
//            className="!bg-[#DDDDDD] w-full py-6 rounded-xl text-2xl font-semibold !text-black border border-[#2B4257]"
//          >
//            Cancel
//          </Button>
//          <Button className="!bg-[#2B4257] w-full py-6 rounded-xl text-2xl font-semibold !text-white border border-[#2B4257]">
//            Assign Load
//          </Button>
//        </div>
//        {/* Drag Input  */}
//        <div className="  p-3">
//          {dragData ? (
//            <div className="my-6 overflow-x-auto">
//              {/* Shipper and Receiver Section */}
//              <Row
//                gutter={0}
//                style={{
//                  textAlign: "center",
//                  backgroundColor: "#d9d9f0",
//                  border: "1px solid gray",
//                }}
//              >
//                <Col
//                  xs={24}
//                  sm={12}
//                  style={{
//                    padding: "10px",
//                    fontWeight: "bold",
//                    borderRight: "1px solid gray",
//                  }}
//                >
//                  Shipper
//                </Col>
//                <Col
//                  xs={24}
//                  sm={12}
//                  style={{
//                    padding: "10px",
//                    fontWeight: "bold",
//                  }}
//                >
//                  Receiver
//                </Col>
//              </Row>

//              <Row
//                gutter={0}
//                style={{
//                  textAlign: "center",
//                  border: "1px solid gray",
//                }}
//              >
//                <Col
//                  xs={24}
//                  sm={12}
//                  style={{
//                    padding: "10px",
//                    borderRight: "1px solid #ccc",
//                  }}
//                >
//                  {dragData?.shipperName || "N/A"}
//                </Col>
//                <Col xs={24} sm={12} style={{ padding: "10px" }}>
//                  {dragData?.receiverName || "N/A"}
//                </Col>
//              </Row>

//              {/* Data Table */}
//              <ConfigProvider
//                theme={{
//                  components: {
//                    Table: {
//                      padding: 10,
//                      margin: 10,
//                      cellFontSize: 12,
//                      headerBg: "rgb(189,196,222)",
//                    },
//                    Input: {
//                      colorText: "rgb(255,255,255)",
//                    },
//                  },
//                }}
//              >
//                <Table
//                  columns={dragColumns}
//                  dataSource={[dragData]}
//                  rowKey="_id" // Use `_id` as a unique key for rows
//                  pagination={false}
//                  bordered
//                  scroll={{ x: "max-content" }}
//                  style={{ maxWidth: "100%", overflowX: "hidden" }}
//                />
//              </ConfigProvider>
//            </div>
//          ) : (
//            <div>
//              <p className="text-xl text-center text-[#7D7D7D] mb-3">- OR -</p>
//              <div className="">
//                <Image
//                  src={AllImages.drop}
//                  alt="drag"
//                  className="h-40 w-auto mx-auto"
//                />
//              </div>
//              <p className="text-2xl  text-center text-[#7D7D7D] my-2 font-semibold">
//                Drop Your Load Here
//              </p>
//            </div>
//          )}
//        </div>
//      </div>
//    </div>
//  </Modal>;
