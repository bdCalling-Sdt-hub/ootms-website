"use client";
import FormFile from "@/components/Dispatching/Form";
import Image from "next/image";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import {
  AllImages,
  dispatchinImage,
} from "../../../../public/assets/AllImages";
import { useRouter } from "next/navigation";
import Trucks from "@/components/map-truck/Trucks";
import LeafletAllTrack from "@/components/LeafletMap/LeafletAllTrack";
import { motion } from "framer-motion";
import MyLoad from "@/components/map-truck/MyLoad";
import { useState } from "react";
import { Button, ConfigProvider, Dropdown, Modal } from "antd";
import ShipperForm from "@/components/shiper-information/page";
import AssignDiver from "@/components/AssignDriver/AssignDriver";
import ExcelDataForm from "@/components/Dispatching/ExcelDataForm";

const columns = [
  { title: "Shipper City", dataIndex: "shipperCity", key: "shipperCity" },
  { title: "Receiver City", dataIndex: "receiverCity", key: "receiverCity" },
  { title: "Load Type", dataIndex: "loadType", key: "loadType" },
  { title: "Pallet Spaces", dataIndex: "palletSpaces", key: "palletSpaces" },
  { title: "Weight", dataIndex: "weight", key: "weight" },
  { title: "Pickup Date", dataIndex: "pickupDate", key: "pickupDate" },
  { title: "Delivery Date", dataIndex: "deliveryDate", key: "deliveryDate" },
];

const Dispatching = () => {
  const items = [
    {
      label: (
        <a
          href="https://www.antgroup.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          1st menu item
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <a
          href="https://www.aliyun.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          2nd menu item
        </a>
      ),
      key: "1",
    },
  ];
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

  const [reciverData, setReciverData] = useState(null);
  const [shipperData, setShipperData] = useState(null);
  const [driverId, setDriverId] = useState(null);
  console.log("reciverData:", reciverData);
  console.log("shipperData:", shipperData);
  const [open, setOpen] = useState(false);

  const [openReciverFrom, setOpenReciverFrom] = useState(false);
  const [openShipperFrom, setOpenShipperFrom] = useState(false);
  const [openAddDriverIdModal, setOpenAddDriverIdModal] = useState(false);

  const [openExcelFromModal, setOpenExcelFromModal] = useState(false);

  //reciver
  const showoOenReciverFromModal = () => {
    setOpenReciverFrom(true);
  };
  const handleOpenReciverFromCancel = () => {
    setOpenReciverFrom(false);
  };

  // Shipper
  const showoOenShipperFromModal = () => {
    setOpenShipperFrom(true);
  };
  const handleOpenShipperFromCancel = () => {
    setOpenShipperFrom(false);
  };

  // Add Driver
  const showoOpenAddDriverIdModal = () => {
    setOpenAddDriverIdModal(true);
  };
  const handleOpenAddDriverIdModal = () => {
    setOpenAddDriverIdModal(false);
  };

  // Add Excel
  const showoOpenExcelFromModal = () => {
    setOpenExcelFromModal(true);
  };
  const handleOpenExcelFromModalCancle = () => {
    setOpenExcelFromModal(false);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-3  gap-8  py-10 lg:py-20 px-5 lg:px-10 ">
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

      <div className="lg:col-span-2 w-full h-fit order-first lg:order-none z-10">
        <ConfigProvider
          theme={{
            components: {
              Dropdown: {
                colorBgElevated: "#2B4257",
              },
            },
          }}
        >
          <Dropdown
            menu={{
              items: [
                {
                  label: (
                    <div
                      onClick={showoOenReciverFromModal}
                      className="text-white w-full text-lg"
                    >
                      Create Load from Form
                    </div>
                  ),
                  key: "0",
                },
                {
                  label: (
                    <div
                      onClick={showoOpenExcelFromModal}
                      className="text-white w-full text-lg"
                    >
                      Create Load from Excel Sheet
                    </div>
                  ),
                  key: "1",
                },
              ],
            }}
            trigger={["click"]}
          >
            <Button
              type="primary"
              className="bg-[#2B4257] px-5 py-5 rounded-lg text-lg text-white text-center mb-16 w-full"
            >
              Create New Shipment
            </Button>
          </Dropdown>
        </ConfigProvider>

        <div className="-mt-5">
          {" "}
          <LeafletAllTrack setOpen={setOpen} />
        </div>
      </div>

      {/* Reciver Modal  */}
      <Modal
        open={openReciverFrom}
        onCancel={handleOpenReciverFromCancel}
        footer={null}
        centered
        style={{ textAlign: "center" }}
        className="lg:min-w-[800px]"
      >
        <FormFile
          setReciverData={setReciverData}
          handleOpenReciverFromCancel={handleOpenReciverFromCancel}
          showoOenShipperFromModal={showoOenShipperFromModal}
        />
      </Modal>

      {/* Shiper Modal  */}
      <Modal
        open={openShipperFrom}
        onCancel={handleOpenShipperFromCancel}
        footer={null}
        centered
        style={{ textAlign: "center" }}
        className="lg:min-w-[800px]"
      >
        <ShipperForm
          showoOpenAddDriverIdModal={showoOpenAddDriverIdModal}
          setShipperData={setShipperData}
          handleOpenShipperFromCancel={handleOpenShipperFromCancel}
        />
      </Modal>

      {/* Excel Sheet Modal  */}

      <Modal
        open={openExcelFromModal}
        onCancel={handleOpenExcelFromModalCancle}
        footer={null}
        centered
        style={{ textAlign: "center" }}
        className="lg:min-w-[800px]"
      >
        <ExcelDataForm
          handleOpenExcelFromModalCancle={handleOpenExcelFromModalCancle}
        />
      </Modal>

      {/* Add Driver ID Modal  */}
      <Modal
        open={openAddDriverIdModal}
        onCancel={handleOpenAddDriverIdModal}
        footer={null}
        centered
        style={{ textAlign: "center" }}
        className="lg:min-w-[800px]"
      >
        <AssignDiver />
      </Modal>
    </div>
  );
};

export default Dispatching;
