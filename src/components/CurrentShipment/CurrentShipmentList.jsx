"use client";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import { AllImages } from "../../../public/assets/AllImages";
import Container from "../ui/Container";
import { PiArrowSquareDownLight, PiArrowSquareUpLight } from "react-icons/pi";
import { ConfigProvider, Form, Input, Pagination } from "antd";
import { FaTruckFront } from "react-icons/fa6";
import Link from "next/link";
import { useGetCurrentShipmentQuery } from "@/redux/api/currentShipmentApi";
import { getImageUrl } from "@/helpers/config/envConfig";

const CurrentShipmentList = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const url = getImageUrl();

  // let userImage = `${url.replace(
  //     /\/+$/,
  //     ""
  //   )}/${myProfile?.data?.attributes?.userDetails?.image?.replace(/^\/+/, "")}`;

  const handleSearch = (values) => {
    setSearchTerm(values.search);
    // Your logic to handle the search
  };

  // const debounceSearch = debounce((value) => {
  //   setSearchTerm(value);
  // }, 500);

  // function debounce(func, wait) {
  //   let timeout;
  //   return function (...args) {
  //     clearTimeout(timeout);
  //     timeout = setTimeout(() => func.apply(this, args), wait);
  //   };
  // }
  const { data: currentShipment, isFetching } = useGetCurrentShipmentQuery({
    page,
    searchTerm,
  });

  return (
    <div className="min-h-[100vh] py-20">
      <Container>
        <div className="flex justify-between items-center gap-5 mb-10">
          <Form onFinish={handleSearch} className="w-full">
            <Form.Item name="search" className="w-full">
              <Input
                type="text"
                value={searchTerm}
                prefix={
                  <FaTruckFront className="w-8 h-8 mr-2 text-[#2B4257]" />
                }
                suffix={
                  <button
                    type="submit"
                    className="w-fit px-4 py-2 bg-[#2B4257] text-lg text-primary-color rounded-full cursor-pointer"
                  >
                    Search Load
                  </button>
                }
                placeholder="Enter bill of lading number"
                className="w-full border-[#DDDDDD] h-14 rounded-3xl"
              />
            </Form.Item>
          </Form>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 min-h-[50vh]">
          {currentShipment?.data?.attributes?.loadRequests?.length > 0 ? (
            currentShipment?.data?.attributes?.loadRequests?.map((truck) => (
              <Link href={`current-shipment/${truck?._id}`} key={truck?._id}>
                <div className="flex flex-col p-5 border rounded-lg shadow-md bg-white">
                  <div className="flex items-center  gap-4">
                    <div className="flex items-center justify-center bg-[#2B4257] w-fit p-[6px] rounded-full">
                      <Image
                        src={
                          truck?.driver?.image
                            ? url + truck?.driver?.image?.replace(/^\/+/, "")
                            : AllImages.profile
                        }
                        alt="user"
                        width={0}
                        height={0}
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
                          <span>{truck.load?.shippingAddress}</span>
                          <PiArrowSquareDownLight className="text-[#2B4257] text-xl  font-extrabold" />{" "}
                          <span>{truck.load?.receivingAddress}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="flex items-center justify-center w-full lg:col-span-2">
              <p className="text-2xl font-semibold">
                No current shipment found
              </p>
            </div>
          )}
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
            {currentShipment?.data?.attributes?.loadRequests?.length > 0 && (
              <Pagination
                showSizeChanger={false}
                onChange={(page) => setPage(page)}
                pageSize={9}
                current={page}
                total={
                  currentShipment?.data?.attributes?.pagination?.totalResults
                }
              />
            )}
          </ConfigProvider>
        </div>
      </Container>
    </div>
  );
};

export default CurrentShipmentList;
