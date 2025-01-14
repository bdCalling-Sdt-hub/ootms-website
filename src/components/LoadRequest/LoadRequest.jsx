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
  useHandleAssignLoadRequestMutation
} from "@/redux/api/loadRequestApi";
import { toast } from "sonner";
import DirverAssignLoadRequest from "./DirverAssignLoadRequest";

const loadData = [
  {
    name: "Sabbir Ahmed",
    trailer: "48-foot trailer—24 pallets",
    truckAvailability: "The truck is fully available",
    status: "available",
  },
  {
    name: "John Doe",
    trailer: "53-foot trailer—30 pallets",
    truckAvailability: "The truck is partially available",
    status: "partially available",
  },
  {
    name: "Jane Smith",
    trailer: "40-foot trailer—20 pallets",
    truckAvailability: "The truck is unavailable",
    status: "unavailable",
  },
  {
    name: "Michael Johnson",
    trailer: "45-foot trailer—18 pallets",
    truckAvailability: "The truck is fully available",
    status: "available",
  },
  {
    name: "Emily Davis",
    trailer: "48-foot trailer—22 pallets",
    truckAvailability: "The truck is fully available",
    status: "available",
  },
  {
    name: "Chris Lee",
    trailer: "50-foot trailer—25 pallets",
    truckAvailability: "The truck is partially available",
    status: "partially available",
  },
  {
    name: "Katie Brown",
    trailer: "45-foot trailer—28 pallets",
    truckAvailability: "The truck is fully available",
    status: "available",
  },
  {
    name: "Daniel Harris",
    trailer: "60-foot trailer—40 pallets",
    truckAvailability: "The truck is unavailable",
    status: "unavailable",
  },
  {
    name: "Liam Williams",
    trailer: "48-foot trailer—26 pallets",
    truckAvailability: "The truck is fully available",
    status: "available",
  },
  {
    name: "Sophia Walker",
    trailer: "52-foot trailer—35 pallets",
    truckAvailability: "The truck is partially available",
    status: "partially available",
  },
  {
    name: "Jacob Martinez",
    trailer: "42-foot trailer—24 pallets",
    truckAvailability: "The truck is fully available",
    status: "available",
  },
  {
    name: "Olivia Taylor",
    trailer: "46-foot trailer—30 pallets",
    truckAvailability: "The truck is unavailable",
    status: "unavailable",
  },
];

const requestData = [
  {
    name: "Sabbir Ahmed",
    trailer: "48-foot trailer—24 pallets",
    truckAvailability: "The truck is fully available",
    status: "available",
    locations: ["Rupatoli, Barishal", "Banassree, Dhaka"],
  },
  {
    name: "John Doe",
    trailer: "53-foot trailer—30 pallets",
    truckAvailability: "The truck is partially available",
    status: "partially available",
    locations: ["Motijheel, Dhaka", "Mirpur, Dhaka"],
  },
  {
    name: "Jane Smith",
    trailer: "40-foot trailer—20 pallets",
    truckAvailability: "The truck is unavailable",
    status: "unavailable",
    locations: ["Chittagong", "Sylhet"],
  },
  {
    name: "Michael Johnson",
    trailer: "45-foot trailer—18 pallets",
    truckAvailability: "The truck is fully available",
    status: "available",
    locations: ["Rajshahi", "Khulna"],
  },
  {
    name: "Emily Davis",
    trailer: "48-foot trailer—22 pallets",
    truckAvailability: "The truck is fully available",
    status: "available",
    locations: ["Gazipur", "Narsingdi"],
  },
  {
    name: "Chris Lee",
    trailer: "50-foot trailer—25 pallets",
    truckAvailability: "The truck is partially available",
    status: "partially available",
    locations: ["Cox's Bazar", "Narayanganj"],
  },
  {
    name: "Katie Brown",
    trailer: "45-foot trailer—28 pallets",
    truckAvailability: "The truck is fully available",
    status: "available",
    locations: ["Comilla", "Barisal"],
  },
  {
    name: "Daniel Harris",
    trailer: "60-foot trailer—40 pallets",
    truckAvailability: "The truck is unavailable",
    status: "unavailable",
    locations: ["Tangail", "Chandpur"],
  },
  {
    name: "Liam Williams",
    trailer: "48-foot trailer—26 pallets",
    truckAvailability: "The truck is fully available",
    status: "available",
    locations: ["Jessore", "Mymensingh"],
  },
  {
    name: "Sophia Walker",
    trailer: "52-foot trailer—35 pallets",
    truckAvailability: "The truck is partially available",
    status: "partially available",
    locations: ["Bogra", "Feni"],
  },
  {
    name: "Jacob Martinez",
    trailer: "42-foot trailer—24 pallets",
    truckAvailability: "The truck is fully available",
    status: "available",
    locations: ["Pabna", "Madaripur"],
  },
  {
    name: "Olivia Taylor",
    trailer: "46-foot trailer—30 pallets",
    truckAvailability: "The truck is unavailable",
    status: "unavailable",
    locations: ["Khulna", "Dhaka"],
  },
];

const LoadRequest = () => {
  const [page, setPage] = useState(1);
  const [tab, setTab] = useState("loadRequest");

  const { data: allLoad, isFetching } = useGetAllLoadRequestQuery({
    page,
    filter: tab === "myRequest",
  });

  // const [handleAssignLoadRequest] = useHandleAssignLoadRequestMutation();

  // console.log("allLoad", allLoad?.data?.attributes?.loadRequests);

  const router = useRouter();
  const searchParams = useSearchParams();

  // const { req } = router.query; // Extract the "req" parameter from the query

  // useEffect(() => {
  //   if (req) {
  //     console.log("Query parameter 'req':", req);
  //     // You can use 'req' to fetch data or perform other actions
  //   }
  // }, [req]);

  console.log(tab === "myRequest");

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

  const showModalRequest = () => {
    setIsRequestModalVisible(true);
  };

  const handleCancelRequest = () => {
    setIsRequestModalVisible(false);
  };

  console.log(allLoad?.data?.attributes?.pagination?.totalItems);



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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch my-10 ">
                {allLoad?.data?.attributes?.loadRequests.map((truck) => (
                  <DirverAssignLoadRequest key={truck?.id} truck={truck} />
                ))}
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
                  <Pagination
                    showSizeChanger={false}
                    align="center"
                    onChange={(page) => setPage(page)}
                    pageSize={9}
                    current={page}
                    total={allLoad?.data?.attributes?.pagination?.totalResults}
                  />
                </ConfigProvider>
              </div>
            </>
          ) : (
            <>
              <div className="p-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3 ">
                {allLoad?.data?.attributes?.loadRequests.map((truck, index) => (
                  <MyRequest key={index} data={truck} />
                ))}
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
                    <Pagination
                      showSizeChanger={false}
                    onChange={(page) => setPage(page)}
                    pageSize={9}
                    current={page}
                    total={allLoad?.data?.attributes?.pagination?.totalResults}
                  />
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
      ></ConfigProvider>
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
          centered
          width={800}
        >
          <div className="p-5">
            <div className="md:flex justify-between gap-10">
              {/* Driver Information */}
              <div className="w-full flex flex-col">
                <p className="text-2xl font-semibold">Driver’s Information</p>
                <hr className="w-56 mb-4" />
                <div className="flex flex-col gap-x-5 gap-2 mt-2">
                  <div className="md:flex justify-between">
                    <div>
                      <p className="text-lg font-semibold">Driver Name: </p>
                      <div className="flex items-center gap-2">
                        <p>
                          <FaStar className="text-yellow-400" />
                        </p>
                        <p>4.5</p>
                        <p>NRShakib</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-lg font-semibold">Driver Phone: </p>
                      <p>123-456-789</p>
                    </div>
                  </div>
                  <div className="md:flex justify-between">
                    <div>
                      <p className="text-lg font-semibold">Driver Email: </p>
                      <p>example@gmail.com</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold">Driver Address: </p>
                      <p>Rupatoli, Barishal.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Truck Information */}
              <div className="w-full flex flex-col">
                <p className="text-2xl font-semibold">Truck Information</p>
                <hr className="w-56 mb-4" />
                <div className="flex flex-col gap-5 mt-2">
                  <div className="flex justify-between">
                    <div>
                      <p className="text-lg font-semibold">Truck Number: </p>
                      <p>DHK METRO HA 64-8549</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold">Trailer Size: </p>
                      <p>48-foot trailer.</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-lg font-semibold">Pallet Spaces: </p>
                      <p>24 pallets.</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold">Availability: </p>
                      <p>Fully Available.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5">
              {/* Load Information */}
              <p className="text-2xl font-semibold">Load Information</p>
              <hr className="w-56 mb-4" />
              <div className="flex space-x-8">
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-lg font-semibold">Load Type: </p>
                    <p>Dry Load</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Weight: </p>
                    <p>120 kg</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Pickup: </p>
                    <p>12-12-2024, Rupatoli, Barishal.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-lg font-semibold">Trailer Size: </p>
                    <p>48-foot trailer—24 pallets.</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">HazMat: </p>
                    <p>Flammable Gas 2, Corrosive, Danger.</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Delivery: </p>
                    <p>13-12-2024, Banasree, Dhaka.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Button to find a new driver */}
            <div className="mt-8 text-center">
              <Button
                onClick={() => router.push("/map-truck")}
                type="primary"
                size="large"
                className="bg-[#2B4257] px-4 rounded-lg"
              >
                Find A New Driver
              </Button>
            </div>
          </div>
        </Modal>
      </ConfigProvider>
    </div>
  );
};

export default LoadRequest;
