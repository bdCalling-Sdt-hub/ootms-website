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

const DirverAssignLoadRequest = ({ truck, showModalRequest }) => {
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

  const onFinish = async (id, action) => {
    if (action === "reject") {
      Modal.confirm({
        title: "Are you sure you want to reject this load?",
        content: "Rejecting the load cannot be undone.",
        okText: "Yes, Reject it",
        okType: "danger",
        cancelText: "No, Cancel",
        okButtonProps: {
          style: {
            backgroundColor: "#ff4d4f", // Red color for the reject button
            borderColor: "#ff4d4f",
            color: "white",
          },
        },
        onOk: () => handleReject(id),
        onCancel() {},
      });
    }
  };

  const handleReject = async (id) => {
    const toastId = toast.loading("Rejecting Load...");
    try {
      let data = {
        loadReqId: id,
        action: "reject",
      };

      const res = await handleAssignLoadRequest(data).unwrap();

      toast.success(res.message, {
        id: toastId,
        duration: 2000,
      });
      // Add any additional actions after rejection
    } catch (error) {
      toast.error(error.message, {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <div>
      <div className="bg-white rounded-lg p-2 ">
        <div
          onClick={() => showModalRequest(truck)}
          key={truck?.id}
          className="flex justify-center items-center gap-5 cursor-pointer "
        >
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
            <h1 className="text-xl font-bold mb-1">
              {truck?.driver?.fullName}
            </h1>
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
                <p className=" flex justify-center">
                  The truck is fully loaded.
                </p>
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
          </div>
        </div>
        <div className=" flex justify-center items-center gap-5 mt-1 w-[90%] mx-auto">
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
