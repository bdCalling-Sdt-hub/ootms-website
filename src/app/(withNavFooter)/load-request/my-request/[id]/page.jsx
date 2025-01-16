"use client";
import Container from "@/components/ui/Container";
import { useGetSingleLoadRequestQuery } from "@/redux/api/loadRequestApi";
import { Button } from "antd";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { IoChevronBackOutline } from "react-icons/io5";

const MyRequestId = () => {
  const params = useParams();
  const { data } = useGetSingleLoadRequestQuery(params?.id);

  console.log("data", data?.data?.attributes?.loadRequests[0]);

  const router = useRouter();
  return (
    <div className="py-20 bg-[#F3F3F3]">
      <Container>
        <div className="flex justify-between items-center mb-10">
          <IoChevronBackOutline
            className="text-3xl cursor-pointer text-[#2B4257] font-semibold"
            onClick={() => window.history.back()}
          />
          <p className="text-4xl text-[#2B4257] font-semibold">My Request</p>
          <div></div>
        </div>
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
                      {/* <p>
                        <FaStar className="text-yellow-400" />
                      </p>
                      <p>4.5</p> */}
                      <p>
                        {
                          data?.data?.attributes?.loadRequests[0]?.driver
                            ?.fullName
                        }
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Driver Phone: </p>
                    <p>
                      {
                        data?.data?.attributes?.loadRequests[0]?.driver
                          ?.phoneNumber
                      }
                    </p>
                  </div>
                </div>
                <div className="md:flex justify-between">
                  <div>
                    <p className="text-lg font-semibold">Driver Email: </p>
                    <p>
                      {data?.data?.attributes?.loadRequests[0]?.driver?.email}
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Driver Address: </p>
                    <p>
                      {
                        data?.data?.attributes?.loadRequests[0]?.load
                          ?.receivingAddress
                      }
                    </p>
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
                    <p>
                      {
                        data?.data?.attributes?.loadRequests[0]?.truck
                          ?.truckNumber
                      }
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Trailer Size: </p>
                    <p>
                      {
                        data?.data?.attributes?.loadRequests[0]?.truck
                          ?.trailerSize
                      }
                      -foot trailer.
                    </p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="text-lg font-semibold">Pallet Spaces: </p>
                    <p>
                      {
                        data?.data?.attributes?.loadRequests[0]?.truck
                          ?.palletSpace
                      }
                      pallets.
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Availability: </p>
                    {/* <p>Fully Available.</p> */}

                    {data?.data?.attributes?.loadRequests[0]
                      ?.availablePalletSpace > 5 && (
                      <p>The truck is fully available.</p>
                    )}
                    {data?.data?.attributes?.loadRequests[0]
                      ?.availablePalletSpace === 0 && (
                      <p>The truck is fully loaded.</p>
                    )}
                    {data?.data?.attributes?.loadRequests[0]
                      ?.availablePalletSpace > 0 &&
                      data?.data?.attributes?.loadRequests[0]
                        ?.availablePalletSpace <= 5 && (
                        <p>The truck has low pallet space.</p>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:mt-10">
            <h2 className="text-xl font-semibold mb-4">
              Reciver&#39;s Information
            </h2>
            <hr className="my-6 border-[#9D9D9D] opacity-60" />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Reciver Name</p>

                <div className="flex items-center">
                  <span>
                    {
                      data?.data?.attributes?.loadRequests[0]?.load
                        ?.receiverName
                    }
                  </span>
                </div>
              </div>
              <div>
                <p className="font-semibold">Reciver Phone</p>
                <p>
                  {" "}
                  {
                    data?.data?.attributes?.loadRequests[0]?.load
                      ?.receiverPhoneNumber
                  }
                </p>
              </div>
              <div>
                <p className="font-semibold">Reciver Email</p>
                <p>
                  {" "}
                  {
                    data?.data?.attributes?.loadRequests[0]?.load?.receiverEmail
                  }{" "}
                </p>
              </div>
              <div>
                <p className="font-semibold">Reciver Address</p>
                {data?.data?.attributes?.loadRequests[0].load?.receivingAddress}
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
                  <p>
                    {data?.data?.attributes?.loadRequests[0].load?.loadType}
                  </p>
                </div>
                <div>
                  <p className="text-lg font-semibold">Weight: </p>
                  <p>{data?.data?.attributes?.loadRequests[0].load?.weight}</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">Pickup: </p>
                  <p>
                    {
                      data?.data?.attributes?.loadRequests[0].load
                        ?.shippingAddress
                    }
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-lg font-semibold">Trailer Size: </p>
                  <p>
                    {data?.data?.attributes?.loadRequests[0].load?.trailerSize}
                    -foot trailer—
                    {data?.data?.attributes?.loadRequests[0].load?.palletSpace}
                    pallets.
                  </p>
                </div>
                <div>
                  <p className="text-lg font-semibold">HazMat: </p>
                  {data?.data?.attributes?.loadRequests[0].load?.Hazmat
                    ? data?.data?.attributes?.loadRequests[0].load?.Hazmat?.map(
                        (value, i) => (
                          <span
                            className=" bg-[#2B4257]/20 me-2 rounded px-2 py-1"
                            key={i}
                          >
                            {value}{" "}
                          </span>
                        )
                      )
                    : ""}
                </div>
                <div>
                  <p className="text-lg font-semibold">Delivery: </p>
                  <p>
                    {
                      data?.data?.attributes?.loadRequests[0].load
                        ?.receivingAddress
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Button to find a new driver */}
          <div className="mt-8 text-center">
            <Button
              onClick={() => router.push("/dispatching")}
              type="primary"
              size="large"
              className="bg-[#2B4257] px-4 rounded-lg"
            >
              Find A New Driver
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MyRequestId;
