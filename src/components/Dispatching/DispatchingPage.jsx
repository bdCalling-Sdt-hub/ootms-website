"use client";
import FormFile from "@/components/Dispatching/Form";
import { useRouter } from "next/navigation";
import Trucks from "@/components/map-truck/Trucks";
import LeafletAllTrack from "@/components/LeafletMap/LeafletAllTrack";
import { useState } from "react";
import { Button, ConfigProvider, Dropdown, Modal } from "antd";
import ShipperForm from "@/components/shiper-information/page";
import AssignDiver from "@/components/AssignDriver/AssignDriver";
import ExcelDataForm from "@/components/Dispatching/ExcelDataForm";
import { motion } from "framer-motion";
import { useGetAllPendingLoadsQuery } from "@/redux/api/loadApi";
import MyLoad from "../map-truck/MyLoad";
import { AllImages } from "../../../public/assets/AllImages";

const columns = [
  { title: "Shipper City", dataIndex: "shipperCity", key: "shipperCity" },
  { title: "Receiver City", dataIndex: "receiverCity", key: "receiverCity" },
  { title: "Load Type", dataIndex: "loadType", key: "loadType" },
  { title: "Pallet Spaces", dataIndex: "palletSpaces", key: "palletSpaces" },
  { title: "Weight", dataIndex: "weight", key: "weight" },
  { title: "Pickup Date", dataIndex: "pickupDate", key: "pickupDate" },
  { title: "Delivery Date", dataIndex: "deliveryDate", key: "deliveryDate" },
];

const DispatchingPage = () => {
  const { data: allPendingLoads, isFetching } = useGetAllPendingLoadsQuery();
  console.log("allPendingLoads", allPendingLoads?.data[0]);

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

  const [reciverData, setReciverData] = useState(null);
  const [shipperData, setShipperData] = useState(null);
  const [driverId, setDriverId] = useState(null);

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
    <div className="min-h-screen py-10 lg:py-20 px-5 lg:px-10 ">
      {isFetching ? (
        <div className="flex w-full items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div className=" grid grid-cols-1 lg:grid-cols-4  gap-8 ">
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

          {/* Map  */}
          <div
            className={` w-full h-fit order-first lg:order-none z-10 ${
              allPendingLoads?.data?.length > 0
                ? "lg:col-span-2"
                : "lg:col-span-3"
            }`}
          >
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

          {/* MyLoad Data */}
          {allPendingLoads?.data?.length > 0 ? (
            <motion.div className=" gap-5 ">
              <motion.div className="relative mb-5 mx-auto">
                <p className="bg-[#2B4257] px-5 py-2 rounded-lg text-white text-center mb-3">
                  Shipment
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
                {allPendingLoads?.data?.map((item, index) => (
                  <MyLoad
                    data={item}
                    key={index}
                    isFetching={isFetching}
                    allPendingLoads={allPendingLoads?.data}
                  />
                ))}
              </div>
            </motion.div>
          ) : (
            <div className="flex items-center justify-center h-screen">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
            </div>
          )}
        </div>
      )}

      {/* ------------------------------------------------------------Modal Start---------------------------------------------------  */}

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
          reciverData={reciverData}
          shipperData={shipperData}
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

export default DispatchingPage;
