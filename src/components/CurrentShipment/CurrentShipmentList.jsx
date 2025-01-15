"use client";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import { AllImages } from "../../../public/assets/AllImages";
import Container from "../ui/Container";
import { PiArrowSquareDownLight, PiArrowSquareUpLight } from "react-icons/pi";
import { ConfigProvider, Input, Pagination } from "antd";
import { FaTruckFront } from "react-icons/fa6";
import Link from "next/link";
import { useGetCurrentShipmentQuery } from "@/redux/api/currentShipmentApi";

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

const CurrentShipmentList = () => {
  const [page, setPage] = useState(1);
  const { data: currentShipment, isFetching } = useGetCurrentShipmentQuery({
    page,
  });
  console.log("currentShipment list", currentShipment?.data?.attributes);

  const [searchText, setSearchText] = useState("");
  //* Use to set user
  const [data, setData] = useState(requestData);

  const filteredData = useMemo(() => {
    if (!searchText) return data;
    return data.filter((item) =>
      item.trailer.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [data, searchText]);

  const onSearch = (value) => {
    setSearchText(value);
  };
  return (
    <div className="min-h-[100vh] py-20">
      <Container>
        <div className="flex justify-between items-center gap-5 mb-10">
          <Input
            value={searchText}
            onChange={(e) => onSearch(e.target.value)}
            prefix={<FaTruckFront className="w-8 h-8 mr-2" />}
            suffix={
              <div className="w-fit px-4 py-2 bg-[#2B4257] text-lg text-primary-color rounded-full cursor-pointer">
                Track
              </div>
            }
            placeholder="Enter bill of lading number"
            className="w-full border-[#DDDDDD] h-14 rounded-3xl"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {currentShipment?.data?.attributes?.loadRequests?.map((truck) => (
            <Link href={`current-shipment/${truck?._id}`} key={truck?._id}>
              <div className="flex flex-col p-5 border rounded-lg shadow-md bg-white">
                <div className="flex items-center  gap-4">
                  <div className="flex items-center justify-center bg-[#2B4257] w-fit p-[6px] rounded-full">
                    <Image
                      src={AllImages.user}
                      alt="user"
                      className="w-16 h-16 rounded-full"
                    />
                  </div>

                  <div className="">
                    <h1 className="text-xl font-semibold">
                      {truck?.driver?.fullName}
                    </h1>
                    <div className="flex gap-5">
                      <p className="text-lg text-gray-500">
                        Trailer Size:{truck.load?.trailerSize}
                      </p>
                      <p className="text-lg text-gray-500">
                        Pallet Space:{truck.load?.palletSpace}
                      </p>
                    </div>
                    <p className="text-lg text-gray-500">
                      Weight:{truck.load?.weight}
                    </p>

                    <div className="flex items-center justify-center gap-4">
                      <p className="flex items-center gap-1">
                        <PiArrowSquareUpLight className="text-[#2B4257] text-xl  font-extrabold" />{" "}
                        <span>{truck.load?.shippingAddress} </span>
                        <PiArrowSquareDownLight className="text-[#2B4257] text-xl  font-extrabold" />{" "}
                        <span>{truck.load?.receivingAddress} </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center my-7">
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
              total={
                currentShipment?.data?.attributes?.pagination?.totalResults
              }
            />
          </ConfigProvider>
        </div>
      </Container>
    </div>
  );
};

export default CurrentShipmentList;
