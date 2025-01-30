"use client";
import FormFile from "@/components/Dispatching/Form";
import { useRouter } from "next/navigation";
import Trucks from "@/components/map-truck/Trucks";
import { useRef, useState } from "react";
import {
  Button,
  Col,
  ConfigProvider,
  Dropdown,
  Modal,
  Pagination,
  Row,
  Table,
} from "antd";
import ShipperForm from "@/components/shiper-information/page";
import AssignDiver from "@/components/AssignDriver/AssignDriver";
import ExcelDataForm from "@/components/Dispatching/ExcelDataForm";
import { AllImages } from "../../../public/assets/AllImages";
import Image from "next/image";
import { toast } from "sonner";
import {
  useCreateLoadRequestMutation,
  useGetAllTrucksQuery,
} from "@/redux/api/loadRequestApi";
import GoogleMapAllTrack from "../LeafletMap/GoogleMapAllTrack";
import MyAllLoads from "./MyAllLoads";

const dragColumns = [
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

const DispatchingPage = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);

  const { data: allTrucks, isFetching: loading } = useGetAllTrucksQuery({
    page,
  });

  const [createLoadRequest, { isLoading }] = useCreateLoadRequestMutation();

  //* Drag And Drop--------------------------------------------------------------
  const inputRef = useRef(null);
  const [dragData, setDragData] = useState(null);
  const [currentDriverModalData, setCurrentDriverModalData] = useState(null);

  console.log("currentDriverModalData", currentDriverModalData);
  // console.log("allTrucks", allTrucks);

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

  // console.log("shipperData", shipperData);

  const [open, setOpen] = useState(false);

  const [openReciverFrom, setOpenReciverFrom] = useState(false);
  const [openShipperFrom, setOpenShipperFrom] = useState(false);
  const [openAddDriverIdModal, setOpenAddDriverIdModal] = useState(false);

  const [openExcelFromModal, setOpenExcelFromModal] = useState(false);

  //reciver
  const showOenShipperFromModal = () => {
    setOpenShipperFrom(true);
  };
  const handleOpenReciverFromCancel = () => {
    setOpenReciverFrom(false);
  };

  // Shipper
  const showOpenReciverFromModal = () => {
    setOpenReciverFrom(true);
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
  const handleCancel = () => {
    setOpen(false);
    // setDragData(null);
    // setCurrentData(null);
  };

  const handleDriverModalCancel = () => {
    setOpen(false);
    setDragData(null);
    setCurrentDriverModalData(null);
  };

  const onAssignLoad = async (id2, id1) => {
    console.log("load dibo vai", id1, id2);
    const toastId = toast.loading("Assigning Load...");
    // const load = JSON.parse(localStorage.getItem("loadId"));
    const data = [
      {
        load: id1,
        driver: id2,
      },
    ];
    console.log(data);

    try {
      if (id1 == null) {
        throw new Error("Please select load...");
      }
      const res = await createLoadRequest(data).unwrap();
      console.log("res", res);

      toast.success(res.message, {
        id: toastId,
        duration: 2000,
      });
      router.push("/load-request?req=myRequest");
    } catch (error) {
      console.log(error);
      toast.error(
        error?.data?.message ||
          error?.message ||
          "An error occurred during load assign",
        {
          id: toastId,
          duration: 2000,
        }
      );
    }
  };

  console.log("currentDriverModalData", currentDriverModalData);
  return (
    <div className="min-h-screen py-10 lg:py-20 px-5 lg:px-10 ">
      {/* {isFetching ? (
        <div className="flex w-full items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
      ) : ( */}
      <div className=" grid grid-cols-1 lg:grid-cols-5  gap-8 ">
        {/* Trucks Data */}
        <div className=" gap-5 ">
          <p className="bg-[#2B4257] px-5 py-2 rounded-lg text-white  text-center mb-10 w-full">
            Available Trucks
          </p>
          <div className=" flex flex-col gap-5 overflow-x-auto overflow-y-clip">
            {allTrucks?.data?.attributes?.data?.map((data) => (
              <>
                <Trucks
                  key={data.key}
                  data={data}
                  setOpen={setOpen}
                  open={open}
                  setCurrentDriverModalData={setCurrentDriverModalData}
                  setDragData={setDragData}
                />
              </>
            ))}

            <div className="flex justify-center  mt-2">
              <ConfigProvider
                theme={{
                  components: {
                    Pagination: {
                      itemActiveBg: "#2b4257",
                      colorPrimary: "#F3F3F3",
                      colorPrimaryHover: "#F3F3F3",
                    },
                  },
                }}
              >
                <Pagination
                  onChange={(page) => setPage(page)}
                  pageSize={4}
                  current={page}
                  total={allTrucks?.data?.attributes?.pagination?.totalResults}
                />
              </ConfigProvider>
            </div>
            <Modal
              className="!rounded-lg "
              open={open}
              footer={null}
              onCancel={handleDriverModalCancel}
              mask={false}
              maskClosable={false} // Disable closing the modal when clicking outside
            >
              <div className="mt-5 rounded-lg ">
                {/* Header Text  */}
                {/* <div className="flex items-center gap-2 mx-auto p-2 bg-white">
                    <div className="w-fit p-1 rounded-full bg-[#B8E2A2] flex justify-center items-center">
                      <span className="w-5 h-5 rounded-full bg-[#90BA7A]"></span>
                    </div>
                    <p className="text-lg font-semibold">
                      The truck is {currentDriverModalData?.availability} Not
                      complete
                    </p>
                  </div> */}
                {/* Track Details  */}
                <div className="bg-[#EEF2FC] p-3 rounded mt-2">
                  <div className="">
                    <p className="text-2xl font-semibold mb-1">
                      {currentDriverModalData?.truckNumber} weight{" "}
                      {currentDriverModalData?.weight}
                    </p>
                    <p className="text-lg font-semibold mb-1">
                      {currentDriverModalData?.trailerSize}-foot trailer—
                      {currentDriverModalData?.palletSpace} pallets
                    </p>
                  </div>
                </div>
                {/* Driver Details  */}
                <div className="bg-white flex justify-between items-center mt-5 p-3">
                  <div className="flex items-center gap-x-5">
                    <div className="p-1 rounded-full bg-[#2B4257] w-fit">
                      <Image
                        src={AllImages.user}
                        alt="user"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-12 h-12 "
                      />
                    </div>
                    <div>
                      <p className="text-xl font-semibold">
                        {currentDriverModalData?.driverName ||
                          currentDriverModalData?.driverInfo?.driverName}
                      </p>
                      {/* <p className="mt-1 text-lg flex items-center">
                  <span className="pr-2 mr-1 border-r border-[#474747] flex items-center">
                    <IoMdStar className="text-[#FFCE31] mr-1 inline-block text-lg" />
                    4.65
                  </span>
                  <span>+995 654654</span>
                </p> */}
                    </div>
                  </div>
                  {/* <div className="p-3 rounded-full w-fit bg-[#FDFDFD] border border-[#DDDDDD]">
                      <FaPhone className="w-6 h-6" />
                    </div> */}
                </div>
                <div ref={inputRef} className="bg-[#EEF2FC] rounded-lg">
                  {/* Assign And Cancle  */}
                  <div className=" flex justify-center items-center gap-5 pt-5 p-3">
                    <Button
                      onClick={handleDriverModalCancel}
                      className="!bg-[#DDDDDD] w-full py-6 rounded-xl text-2xl font-semibold !text-black border border-[#2B4257]"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={() =>
                        onAssignLoad(
                          currentDriverModalData?.driverId ||
                            currentDriverModalData?.driver ||
                            currentDriverModalData?.driverInfo?.driverId,
                          dragData?._id
                        )
                      }
                      className="!bg-[#2B4257] w-full py-6 rounded-xl text-2xl font-semibold !text-white border border-[#2B4257]"
                    >
                      Assign Load
                    </Button>
                  </div>
                  {/* Drag Input  */}
                  <div className="  p-3">
                    {dragData ? (
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
                            {dragData?.shipperName || "N/A"}
                          </Col>
                          <Col xs={24} sm={12} style={{ padding: "10px" }}>
                            {dragData?.receiverName || "N/A"}
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
                          {console.log("dragData", dragData)}
                          <Table
                            columns={dragColumns}
                            dataSource={[dragData]}
                            rowKey="_id" // Use `_id` as a unique key for rows
                            pagination={false}
                            bordered
                            scroll={{ x: "max-content" }}
                            style={{
                              maxWidth: "100%",
                              overflowX: "hidden",
                            }}
                          />
                        </ConfigProvider>
                      </div>
                    ) : (
                      <div>
                        <p className="text-xl text-center text-[#7D7D7D] mb-3">
                          - OR -
                        </p>
                        <div className="">
                          <Image
                            src={AllImages.drop}
                            alt="drag"
                            className="h-40 w-auto mx-auto"
                          />
                        </div>
                        <p className="text-2xl  text-center text-[#7D7D7D] my-2 font-semibold">
                          Drop Your Load Here
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        </div>

        {/* Map  */}
        <div
          className={` w-full h-fit order-first lg:order-none z-10 lg:col-span-3`}
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
                        onClick={showOenShipperFromModal}
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
            {/* <LeafletAllTrack setOpen={setOpen} /> */}
            <GoogleMapAllTrack
              setCurrentDriverModalData={setCurrentDriverModalData}
              setOpen={setOpen}
            />
          </div>
        </div>

        {/* MyLoad Data */}

        <MyAllLoads open={open} handleDragEnd={handleDragEnd} />
      </div>
      {/* )} */}

      {/* <GoogleMapCompo /> */}

      {/* ------------------------------------------------------------Modal Start---------------------------------------------------  */}

      {/* Reciver Modal  */}
      <Modal
        open={openReciverFrom}
        onCancel={handleOpenReciverFromCancel}
        footer={null}
        centered
        style={{ textAlign: "center" }}
        className="lg:min-w-[800px] mt-24"
      >
        <FormFile
          shipperData={shipperData}
          setReciverData={setReciverData}
          handleOpenReciverFromCancel={handleOpenReciverFromCancel}
          showoOpenAddDriverIdModal={showoOpenAddDriverIdModal}
        />
      </Modal>

      {/* Shiper Modal  */}
      <Modal
        open={openShipperFrom}
        onCancel={handleOpenShipperFromCancel}
        footer={null}
        centered
        style={{ textAlign: "center" }}
        className="lg:min-w-[800px] mt-24"
      >
        <ShipperForm
          reciverData={reciverData}
          shipperData={shipperData}
          setShipperData={setShipperData}
          handleOpenShipperFromCancel={handleOpenShipperFromCancel}
          showOpenReciverFromModal={showOpenReciverFromModal}
        />
      </Modal>

      {/* Excel Sheet Modal  */}

      <Modal
        open={openExcelFromModal}
        onCancel={handleOpenExcelFromModalCancle}
        footer={null}
        centered
        style={{ textAlign: "center" }}
        className="lg:min-w-[800px] mt-24"
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
        className="lg:min-w-[800px] mt-24"
      >
        <AssignDiver />
      </Modal>
    </div>
  );
};

export default DispatchingPage;
