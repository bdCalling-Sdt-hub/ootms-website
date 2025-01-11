"use client";
import FormFile from "@/components/Dispatching/Form";
import { useRouter } from "next/navigation";
import Trucks from "@/components/map-truck/Trucks";
import LeafletAllTrack from "@/components/LeafletMap/LeafletAllTrack";
import { useRef, useState } from "react";
import { Button, ConfigProvider, Dropdown, Modal, Pagination } from "antd";
import ShipperForm from "@/components/shiper-information/page";
import AssignDiver from "@/components/AssignDriver/AssignDriver";
import ExcelDataForm from "@/components/Dispatching/ExcelDataForm";
import { motion } from "framer-motion";
import { useGetAllPendingLoadsQuery } from "@/redux/api/loadApi";
import MyLoad from "../map-truck/MyLoad";
import { AllImages } from "../../../public/assets/AllImages";

const trucksData = [
  {
    key: "1",
    driver: "John Doe",
    truck: "Volvo FH16",
    palletSpaces: 20,
    weight: 47090,
    trailerSize: "53 ft",
    availability: "Available",
    location: "Atlanta, GA",
  },
  {
    key: "2",
    driver: "John Doe",
    truck: "Volvo FH16",
    palletSpaces: 21,
    weight: 47000,
    trailerSize: "53 ft",
    availability: "Not Available",
    location: "Atlanta, GA",
  },
  {
    key: "3",
    driver: "John Doe",
    truck: "Volvo FH16",
    palletSpaces: 22,
    weight: 47000,
    trailerSize: "53 ft",
    availability: "Available",
    location: "Atlanta, GA",
  },
  {
    key: "4",
    driver: "John Doe",
    truck: "Volvo FH16",
    palletSpaces: 23,
    weight: 47000,
    trailerSize: "53 ft",
    availability: "Available",
    location: "Atlanta, GA",
  },
  {
    key: "5",
    driver: "John Doe",
    truck: "Volvo FH16",
    palletSpaces: 24,
    weight: 45000,
    trailerSize: "53 ft",
    availability: "Available",
    location: "Atlanta, GA",
  },
  {
    key: "6",
    driver: "John Doe",
    truck: "Volvo FH16",
    palletSpaces: 25,
    weight: 89000,
    trailerSize: "53 ft",
    availability: "Available",
    location: "Atlanta, GA",
  },
  {
    key: "7",
    driver: "John Doe",
    truck: "Volvo FH16",
    palletSpaces: 26,
    weight: 75000,
    trailerSize: "53 ft",
    availability: "Available",
    location: "Atlanta, GA",
  },
  {
    key: "8",
    driver: "John Doe",
    truck: "Volvo FH16",
    palletSpaces: 27,
    weight: 47000,
    trailerSize: "53 ft",
    availability: "Available",
    location: "Atlanta, GA",
  },
  {
    key: "9",
    driver: "John Doe",
    truck: "Volvo FH16",
    palletSpaces: 28,
    weight: 47000,
    trailerSize: "53 ft",
    availability: "Available",
    location: "Atlanta, GA",
  },
  {
    key: "10",
    driver: "John Doe",
    truck: "Volvo FH16",
    palletSpaces: 29,
    weight: 47000,
    trailerSize: "53 ft",
    availability: "Not Available",
    location: "Atlanta, GA",
  },
];

const DispatchingPage = () => {
  const { data: allPendingLoads, isFetching } = useGetAllPendingLoadsQuery();

  //* Drag And Drop--------------------------------------------------------------
  const inputRef = useRef(null);
  const [dragData, setDragData] = useState(null);

  const handleDragEnd = (event, info) => {
    const inputBox = inputRef.current.getBoundingClientRect();
    // Check if the item was dropped within the bounds of Box 2
    if (
      info.point.x >= inputBox.left &&
      info.point.x <= inputBox.right &&
      info.point.y >= inputBox.top &&
      info.point.y <= inputBox.bottom
    ) {
      const fullData = JSON.parse(event.target.getAttribute("data-full-data"));

      setDragData(fullData);
    }
  };

  //* Drag And Drop--------------------------------------------------------------

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
              {trucksData?.map((data) => (
                <Trucks
                  key={data.key}
                  data={data}
                  setOpen={setOpen}
                  open={open}
                  inputRef={inputRef}
                  dragData={dragData}
                  setDragData={setDragData}
                />
              ))}
              <div className="flex justify-center my-20">
                <ConfigProvider
                  theme={{
                    components: {
                      Pagination: {
                        itemActiveBg: "#F88D58",
                        colorPrimary: "#F3F3F3",
                        colorPrimaryHover: "#F3F3F3",
                      },
                    },
                  }}
                >
                  <Pagination
                    onChange={(page) => setPage(page)}
                    pageSize={5}
                    total={10}
                  />
                </ConfigProvider>
              </div>

              {/* <Trucks
                data={trucksData}
                setOpen={setOpen}
                open={open}
                inputRef={inputRef}
                dragData={dragData}
                setDragData={setDragData}
              />
              <Trucks
                data={trucksData}
                setOpen={setOpen}
                open={open}
                inputRef={inputRef}
                dragData={dragData}
                setDragData={setDragData}
              />
              <Trucks
                data={trucksData}
                setOpen={setOpen}
                open={open}
                inputRef={inputRef}
                dragData={dragData}
                setDragData={setDragData}
              />
              <Trucks
                data={trucksData}
                setOpen={setOpen}
                open={open}
                inputRef={inputRef}
                dragData={dragData}
                setDragData={setDragData}
              /> */}
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
              </motion.div>
              <div className=" flex flex-col gap-5">
                {allPendingLoads?.data?.map((item, index) => (
                  <MyLoad
                    data={item}
                    key={item?._id}
                    isFetching={isFetching}
                    allPendingLoads={item}
                    open={open}
                    handleDragEnd={handleDragEnd}
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
