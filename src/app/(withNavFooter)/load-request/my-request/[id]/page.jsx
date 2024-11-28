"use client";
import Container from "@/components/ui/Container";
import { Button } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import { FaStar } from "react-icons/fa6";
import { IoChevronBackOutline } from "react-icons/io5";

const MyRequestId = () => {
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

          <div className="md:mt-10">
            <h2 className="text-xl font-semibold mb-4">
              Reciver&#39;s Information
            </h2>
            <hr className="my-6 border-[#9D9D9D] opacity-60" />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Reciver Name</p>

                <div className="flex items-center">
                  <div className="flex text-yellow-400 mr-2">
                    {"★".repeat(1)}
                  </div>
                  <span>4.65 AL Shakib</span>
                </div>
              </div>
              <div>
                <p className="font-semibold">Reciver Phone</p>
                <p>123-456-789</p>
              </div>
              <div>
                <p className="font-semibold">Reciver Email</p>
                <p>example@gmail.com</p>
              </div>
              <div>
                <p className="font-semibold">Reciver Address</p>
                <p>Uttara, Dhaka</p>
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
      </Container>
    </div>
  );
};

export default MyRequestId;
