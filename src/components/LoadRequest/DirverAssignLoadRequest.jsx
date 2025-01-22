import React, { useState } from "react";
import { AllImages } from "../../../public/assets/AllImages";
import { Button, Input, Modal } from "antd";
import { useHandleAssignLoadRequestMutation } from "@/redux/api/loadRequestApi";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { FaPhone, FaStar } from "react-icons/fa6";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { getImageUrl } from "@/helpers/config/envConfig";
import Image from "next/image";

const DirverAssignLoadRequest = ({ truck }) => {
  const router = useRouter();
  const [handleAssignLoadRequest] = useHandleAssignLoadRequestMutation();
  const url = getImageUrl();
  const img = `${url.replace(/\/+$/, "")}/${truck?.driver?.image?.replace(
    /^\/+/,
    ""
  )}`;

  const [isTruckModalVisible, setIsTruckModalVisible] = useState(false);
  const showModal = () => {
    setIsTruckModalVisible(true);
  };
  const handleCancel = () => {
    setIsTruckModalVisible(false);
  };
  // console.log("truck", truck);

  const onFinish = async (id, action) => {
    // navigate.push("/sign-in");
    const toastId = toast.loading("Load Request...");

    try {
      let data = {
        loadReqId: id,
        action: action,
      };
      console.log("data", data);

      const res = await handleAssignLoadRequest(data).unwrap();

      console.log("res: ", res);

      toast.success(res?.message, {
        id: toastId,
        duration: 2000,
      });
      if (action === "accept") {
        router.push("/current-shipment");
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error?.data?.message || "An error occurred during Assign Load",
        {
          id: toastId,
          duration: 2000,
        }
      );
    }
  };
  console.log("truck", truck);
  
  return (
    <div>
      <div
        key={truck?.id}
        className="flex justify-center items-center gap-5 bg-white rounded-lg p-2 "
      >
        {/* {console.log("my truck", truck)} */}
        <div className="flex items-center justify-center bg-[#2B4257] w-fit p-[6px] rounded-full">
          <Image
            width={50}
            height={50}
            src={img}
            alt="user"
            className="w-16 h-16 rounded-full"
          />
        </div>
        <div>
          <h1 className="text-xl font-bold mb-1">{truck?.driver?.fullName}</h1>
          <p className="text-lg text-gray-500">
            {truck?.load?.trailerSize}-foot trailer—
            {truck?.load?.palletSpace}
            pallets
          </p>

          {truck?.availablePalletSpace > 5 && (
            <div className="text-lg font-semibold mb-1 flex items-center gap-x-2">
              <div className="w-fit p-1 rounded-full bg-[#B8E2A2] flex justify-center items-center">
                <span className="w-3 h-3 rounded-full bg-[#90BA7A]"></span>
              </div>
              <p>The truck is fully available.</p>
            </div>
          )}
          {truck?.availablePalletSpace === 0 && (
            <div className="text-lg font-semibold mb-1 flex items-center justify-center gap-x-2 ">
              <div className="w-fit p-1 rounded-full bg-[#e2a2a2] flex justify-center items-center ">
                <span className="w-3 h-3 rounded-full bg-[#ba7a7a]"></span>
              </div>
              <p className=" flex justify-center">The truck is fully loaded.</p>
            </div>
          )}
          {truck?.availablePalletSpace > 0 &&
            truck?.availablePalletSpace <= 5 && (
              <div className="text-lg font-semibold mb-1 flex items-center gap-x-2">
                <div className="w-fit p-1 rounded-full bg-[#e1e2a2] flex justify-center items-center">
                  <span className="w-3 h-3 rounded-full bg-[#bab67a]"></span>
                </div>
                <p>The truck has low pallet space.</p>
              </div>
            )}

          {/* Assign And Cancle  */}
          <div className=" flex justify-center items-center gap-5 mt-1">
            <Button
              onClick={() => {
                onFinish(truck?.id, "reject");
              }}
              className="!bg-[#DDDDDD] w-full py-2 rounded font-semibold !text-black border border-[#2B4257]"
            >
              Reject Load
            </Button>
            <Button
              onClick={showModal}
              className="!bg-[#2B4257] w-full py-2 rounded font-semibold !text-white border border-[#2B4257]"
            >
              Assign Load
            </Button>
          </div>
        </div>
      </div>
      <Modal
        visible={isTruckModalVisible}
        onCancel={handleCancel}
        footer={null}
        centered
        width={800}
      >
        <div className="p-5">
          <div className="sm:flex justify-between gap-10">
            {/* Driver Information */}
            <div className="w-full flex flex-col">
              <p className="text-2xl font-semibold">Driver’s Information</p>
              <hr className="w-56 mb-4" />
              <div className="flex flex-col gap-5 mt-2">
                <div className="flex justify-between">
                  <div>
                    <p className="text-lg font-semibold">Driver Name: </p>
                    <div className="flex items-center gap-2">
                      {/* <p>
                        <FaStar className="text-yellow-400" />
                      </p> */}
                      {/* <p>4.5</p> */}
                      <p>{truck?.driver?.fullName}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Driver Phone: </p>
                    <p>{truck?.driver?.phoneNumber}</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="text-lg font-semibold">Driver Email: </p>
                    <p>{truck?.driver?.email}</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Delivery Address: </p>
                    <p>{truck?.load?.receivingAddress}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Truck Information */}
            <div className="w-full ">
              <p className="text-2xl font-semibold">Truck Information</p>
              <hr className="w-56 mb-4" />
              <div className="flex flex-col gap-5 mt-2">
                <div className="flex justify-between">
                  <div>
                    <p className="text-lg font-semibold">Truck Number: </p>
                    <p>{truck?.truck?.truckNumber}</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Trailer Size: </p>
                    <p>{truck?.truck?.trailerSize}-foot trailer.</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div>
                    <p className="text-lg font-semibold">Pallet Spaces: </p>
                    <p>{truck?.truck?.palletSpace} pallets.</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Availability: </p>
                    <p>{truck?.availablePalletSpace} Pallet Space</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="w-[90%] mx-auto flex justify-between items-center gap-5 mt-5">
            <Input
              prefix={<BiSolidMessageSquareDetail className="w-8 h-8 mr-2" />}
              placeholder="Send a free message"
              className="w-full border-[#DDDDDD] h-12 rounded-3xl"
            />
            <div className="p-3 rounded-full w-fit bg-[#FDFDFD] border border-[#DDDDDD]">
              <FaPhone className="w-6 h-6" />
            </div>
          </div> */}
          {/* Button to find a new driver */}
          <div className=" sm:flex justify-center items-center gap-5 space-y-3 pt-5 p-3">
            <Button
              onClick={handleCancel}
              className="!bg-[#DDDDDD] w-full py-5 rounded-xl text-xl font-semibold !text-black "
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                onFinish(truck?.id, "accept");
              }}
              className="!bg-[#2B4257] w-full py-5 rounded-xl text-xl font-semibold !text-white border border-[#2B4257]"
            >
              Assign Load
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DirverAssignLoadRequest;
