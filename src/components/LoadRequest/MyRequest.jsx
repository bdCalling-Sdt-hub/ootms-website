import React from "react";
import { AllImages } from "../../../public/assets/AllImages";
import Image from "next/image";
import Link from "next/link";
import { getImageUrl } from "@/helpers/config/envConfig";

const truck = {
  name: "Sabbir Ahmed",
  trailer: "48-foot trailer—24 pallets",
  truckAvailability: "The truck is fully available",
  status: "available",
  locations: ["Rupatoli, Barishal", "Banassree, Dhaka"],
};

const MyRequest = ({ data }) => {
  // console.log(data);

  const url = getImageUrl();
  const img = `${url.replace(/\/+$/, "")}/${data?.driver?.image?.replace(
    /^\/+/,
    ""
  )}`;


  return (
    <Link href={`load-request/my-request/${data?.id}`}>
      <div
        //   key={index}
        className="flex flex-col p-4 mb-5 border rounded-lg shadow-md bg-white"
      >
        <div className="flex items-center mb-4 gap-4">
          <div className="flex items-center justify-center bg-[#2B4257] w-fit p-[6px] rounded-full">
            <Image
              src={img}
              width={0}
              height={0}
              sizes="100vw"
              alt="user"
              className="w-16 h-16 rounded-full"
            />
          </div>

          <div className="">
            <h1 className="text-xl font-semibold">{data?.driver?.fullName}</h1>
            <p className="text-lg text-gray-500">
              {data?.load?.trailerSize}-foot trailer—{data?.load?.palletSpace}
              pallets
            </p>

            {console.log(
              "data single",
              
              data
            )}

            {data?.availablePalletSpace > 5 && (
              <div className="text-lg font-semibold mb-1 flex items-center gap-x-2">
                <div className="w-fit p-1 rounded-full bg-[#B8E2A2] flex justify-center items-center">
                  <span className="w-3 h-3 rounded-full bg-[#90BA7A]"></span>
                </div>
                <p>The truck is fully available.</p>
              </div>
            )}
            {data?.availablePalletSpace === 0 && (
              <div className="text-lg font-semibold mb-1 flex items-center gap-x-2">
                <div className="w-fit p-1 rounded-full bg-[#e2a2a2] flex justify-center items-center">
                  <span className="w-3 h-3 rounded-full bg-[#ba7a7a]"></span>
                </div>
                <p>The truck is fully loaded.</p>
              </div>
            )}
            {data?.availablePalletSpace > 0 &&
              data?.availablePalletSpace <= 5 && (
                <div className="text-lg font-semibold mb-1 flex items-center gap-x-2">
                  <div className="w-fit p-1 rounded-full bg-[#e1e2a2] flex justify-center items-center">
                    <span className="w-3 h-3 rounded-full bg-[#bab67a]"></span>
                  </div>
                  <p>The truck has low pallet space.</p>
                </div>
              )}

            {/* <div className="flex items-center justify-center gap-4">
                                <p className="bg-[#90BA7A] h-8 w-8 rounded-full"></p>
                                <p
                                  className={`text-md ${
                                    truck.status === "available"
                                      ? "text-green-600"
                                      : truck.status === "partially available"
                                      ? "text-yellow-600"
                                      : "text-red-600"
                                  }`}
                                >
                                  {truck.truckAvailability}
                                </p>
                              </div> */}
            <p className="text-md text-gray-600 flex">
              Pickup: {data?.load?.shippingAddress}
            </p>
            <p className="text-md text-gray-600 flex">
              Delivery: {data?.load?.receivingAddress}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MyRequest;
