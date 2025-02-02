"use client";

import { useEffect, useState } from "react";
import Container from "../ui/Container";
import Image from "next/image";
import { AllImages } from "../../../public/assets/AllImages";
import { Button, ConfigProvider, Input, Modal, Pagination } from "antd";
import { FaPhone, FaStar } from "react-icons/fa6";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import MyRequest from "./MyRequest";
import {
  useGetAllLoadRequestQuery,
  useHandleAssignLoadRequestMutation,
} from "@/redux/api/loadRequestApi";
import { toast } from "sonner";
import DirverAssignLoadRequest from "./DirverAssignLoadRequest";

const LoadRequest = () => {
  const [page, setPage] = useState(1);
  const [tab, setTab] = useState("loadRequest");

  const { data: allLoad, isFetching } = useGetAllLoadRequestQuery({
    page,
    filter: tab === "myRequest",
  });

  // const [handleAssignLoadRequest] = useHandleAssignLoadRequestMutation();

  const router = useRouter();
  const searchParams = useSearchParams();

  // const { req } = router.query; // Extract the "req" parameter from the query

  // useEffect(() => {
  //   if (req) {

  //     // You can use 'req' to fetch data or perform other actions
  //   }
  // }, [req]);

  useEffect(() => {
    const typeParam = searchParams.get("req");
    if (typeParam === "myRequest") {
      setTab("myRequest");
    }
  }, [searchParams]);
  const [isTruckModalVisible, setIsTruckModalVisible] = useState(false);

  const showModal = () => {
    setIsTruckModalVisible(true);
  };

  const handleCancel = () => {
    setIsTruckModalVisible(false);
  };
  const [isRequestModalVisible, setIsRequestModalVisible] = useState(false);
  const [currentData, setCurrentData] = useState(null);

  const showModalRequest = (data) => {
    setCurrentData(data);
    setIsRequestModalVisible(true);
  };

  const handleCancelRequest = () => {
    setCurrentData(null);
    setIsRequestModalVisible(false);
  };

  return (
    <div className="py-10 bg-[#F3F3F3]">
      <Container>
        <div>
          {/* Tab  */}
          <div className="p-5 flex items-center justify-between gap-x-10 bg-[#2B4257] rounded-2xl">
            <div
              onClick={() => setTab("loadRequest")}
              className={`"text-2xl p-3 w-full font-bold text-center rounded-2xl " ${
                tab === "loadRequest"
                  ? "bg-[#BDC4CB] text-[#2B4257] rounded-2xl cursor-pointer duration-500 transition-all"
                  : "bg-transparent text-[#BDC4CB] rounded-2xl cursor-pointer duration-500 transition-all"
              }`}
            >
              Load Request
            </div>
            <div
              onClick={() => setTab("myRequest")}
              className={`"text-2xl p-3 w-full font-bold text-center  " ${
                tab === "myRequest"
                  ? "!bg-[#BDC4CB] !text-[#2B4257] rounded-2xl cursor-pointer duration-500 transition-all"
                  : "bg-transparent text-[#BDC4CB] rounded-2xl cursor-pointer duration-500 transition-all"
              }`}
            >
              My Request
            </div>
          </div>
          {/* Content  */}
          {tab === "loadRequest" ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch my-10 min-h-[50vh]">
                {allLoad?.data?.attributes?.loadRequests?.length > 0 ? (
                  allLoad?.data?.attributes?.loadRequests?.map((truck) => (
                    <DirverAssignLoadRequest
                      key={truck?.id}
                      showModalRequest={showModalRequest}
                      truck={truck}
                    />
                  ))
                ) : (
                  <div className="flex justify-center items-center md:col-span-2 lg:col-span-3 ">
                    <h1 className="text-2xl font-semibold">
                      No Load Request Found
                    </h1>
                  </div>
                )}
              </div>
              <div className="flex justify-center my-2">
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
                  {allLoad?.data?.attributes?.loadRequests?.length > 0 && (
                    <Pagination
                      showSizeChanger={false}
                      align="center"
                      onChange={(page) => setPage(page)}
                      pageSize={9}
                      current={page}
                      total={
                        allLoad?.data?.attributes?.pagination?.totalResults
                      }
                    />
                  )}
                </ConfigProvider>
              </div>
            </>
          ) : (
            <>
              <div className="p-5 grid gap-5 lg:grid-cols-2 xl:grid-cols-3 min-h-[50vh]">
                {allLoad?.data?.attributes?.loadRequests?.length > 0 ? (
                  allLoad?.data?.attributes?.loadRequests?.map(
                    (truck, index) => <MyRequest key={index} data={truck} />
                  )
                ) : (
                  <div className="flex justify-center items-center md:col-span-2 lg:col-span-3">
                    <h1 className="text-2xl font-semibold">
                      No Load Request Found
                    </h1>
                  </div>
                )}
              </div>

              <div className="flex justify-center my-2">
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
                  {allLoad?.data?.attributes?.loadRequests?.length > 0 && (
                    <Pagination
                      showSizeChanger={false}
                      onChange={(page) => setPage(page)}
                      pageSize={9}
                      current={page}
                      total={
                        allLoad?.data?.attributes?.pagination?.totalResults
                      }
                    />
                  )}
                </ConfigProvider>
              </div>
            </>
          )}
        </div>
      </Container>
      <ConfigProvider
        theme={{
          components: {
            Modal: {
              borderRadiusLG: 20,
            },
          },
        }}
      >
        <Modal
          visible={isRequestModalVisible}
          onCancel={handleCancelRequest}
          footer={null}
          width={1000}
        >
          <div className="p-5">
            <div className="md:flex justify-between gap-10">
              {/* Driver Information */}
              <div className="w-full flex flex-col">
                <p className="text-2xl font-semibold">Driver’s Information</p>
                <hr className="w-56 mb-4" />
                <div className="flex flex-col gap-x-5 gap-2 mt-2">
                  <div className="lg:flex justify-between">
                    <div>
                      <p className="text-lg font-semibold">Driver Name: </p>
                      <div className="flex items-center gap-2">
                        {/* <p>
                          <FaStar className="text-yellow-400" />
                        </p>
                        <p>4.5</p> */}
                        <p>{currentData?.driver?.fullName}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-semibold">Driver Phone: </p>
                      <p>{currentData?.driver?.phoneNumber}</p>
                    </div>
                  </div>
                  <div className="lg:flex justify-between">
                    <div>
                      <p className="text-lg font-semibold">Driver Email: </p>
                      <p>{currentData?.driver?.email}</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold">Driver Address: </p>
                      <p>{currentData?.driver?.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Truck Information */}
              <div className="w-full flex flex-col mt-5 md:mt-0">
                <p className="text-2xl font-semibold">Truck Information</p>
                <hr className="w-56 mb-4" />
                <div className="flex flex-col gap-5 mt-2">
                  <div className="lg:flex justify-between">
                    <div>
                      <p className="text-lg font-semibold">Truck Number: </p>
                      <p>{currentData?.truck?.truckNumber}</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold">Trailer Size: </p>
                      <p>{currentData?.truck?.trailerSize}-foot trailer.</p>
                    </div>
                  </div>
                  <div className="lg:flex justify-between">
                    <div>
                      <p className="text-lg font-semibold">Pallet Spaces: </p>
                      <p>{currentData?.truck?.palletSpace} pallets.</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold">Availability: </p>
                      <p>
                        {currentData?.truck?.availablePalletSpace > 5 && (
                          <p>The truck is fully available.</p>
                        )}
                        {currentData?.truck?.availablePalletSpace === 0 && (
                          <p>The truck is fully loaded.</p>
                        )}
                        {currentData?.truck?.availablePalletSpace > 0 &&
                          currentData?.truck?.availablePalletSpace <= 5 && (
                            <p>The truck has low pallet space.</p>
                          )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5">
              {/* Load Information */}
              <p className="text-2xl font-semibold">Load Information</p>
              <hr className="w-56 mb-4" />
              <div className="grid lg:grid-cols-2 gap-4">
                <div>
                  <p className="text-lg font-semibold">Load Type: </p>
                  <p>{currentData?.load?.loadType}</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">Trailer Size: </p>
                  <p>
                    {currentData?.load?.trailerSize}
                    -foot trailer—
                    {currentData?.load?.palletSpace}
                    pallets.
                  </p>
                </div>
                <div>
                  <p className="text-lg font-semibold">Bill Of Lading: </p>
                  <p>{currentData?.load?.billOfLading}</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">#PO Number: </p>
                  <p>{currentData?.load?.poNumber}</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">Weight: </p>
                  <p>{currentData?.load?.weight}</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">HazMat: </p>
                  {currentData?.load?.Hazmat
                    ? currentData?.load?.Hazmat?.map((value, i) => (
                        <span
                          className=" bg-[#2B4257]/20 me-2 mb-2 inline-block rounded px-2 py-1"
                          key={i}
                        >
                          {value}{" "}
                        </span>
                      ))
                    : ""}
                </div>

                <div>
                  <p className="text-lg font-semibold mb-2">
                    Pickup Date & Time:{" "}
                  </p>
                  <p> {currentData?.load?.pickupDate}</p>
                </div>
                <div>
                  <p className="text-lg font-semibold mb-2">
                    Delivery Date & Time:{" "}
                  </p>
                  <p> {currentData?.load?.deliveryDate}</p>
                </div>

                <div>
                  <p className="text-lg font-semibold mb-2">Pickup: </p>

                  <div>
                    <p>
                      <span className="font-medium"> Address: </span>
                      {currentData?.load?.shippingAddress}
                    </p>
                    <p>
                      <span className="font-medium">City: </span>
                      {currentData?.load?.shippingCity}
                    </p>
                    <p>
                      <span className="font-medium">State: </span>{" "}
                      {currentData?.load?.shippingState}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-lg font-bold mb-2">Delivery: </p>
                  <div>
                    <p>
                      <span className="font-medium"> Address: </span>
                      {currentData?.load?.receivingAddress}
                    </p>
                    <p>
                      <span className="font-medium">City: </span>
                      {currentData?.load?.receiverCity}
                    </p>
                    <p>
                      <span className="font-medium">State: </span>{" "}
                      {currentData?.load?.receiverState}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </ConfigProvider>
    </div>
  );
};

export default LoadRequest;
