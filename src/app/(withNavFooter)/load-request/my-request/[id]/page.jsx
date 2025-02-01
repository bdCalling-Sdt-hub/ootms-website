"use client";
import ReAssign from "@/components/CurrentShipment/ReAssign";
import Container from "@/components/ui/Container";
import {
  useCancleLoadRequestMutation,
  useGetSingleLoadRequestQuery,
} from "@/redux/api/loadRequestApi";
import { Button, Modal } from "antd";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { IoChevronBackOutline } from "react-icons/io5";
import { toast } from "sonner";

const MyRequestId = () => {
  const params = useParams();
  const { data } = useGetSingleLoadRequestQuery(params?.id);
  const [cancleLoadRequest] = useCancleLoadRequestMutation();
  const [isOpen, setIsOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false); // Modal state
  const router = useRouter();

  const loadId = data?.data?.attributes[0]?._id;

  const handleCancelRequest = async () => {
    const data = {
      loadReqId: loadId,
      action: "reject",
    };
    const toastId = toast.loading("Cancelling Load Request...");
    try {
      const res = await cancleLoadRequest(data).unwrap();

      toast.success(res.message, {
        id: toastId,
        duration: 2000,
      });
      setIsCancelModalOpen(false); // Close modal after confirmation
      router.push("/load-request?req=myRequest");
    } catch (error) {
      toast.error(
        error?.data?.message ||
          error?.error ||
          "An error occurred during Login",
        {
          id: toastId,
          duration: 2000,
        }
      );
    }

    // Redirect or trigger API call to cancel the request (replace with actual API call if needed)
    // router.push("/dispatching"); // Example redirection after cancellation
  };

  console.log("data", data);
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
                      <p>{data?.data?.attributes[0]?.driver?.fullName}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Driver Phone: </p>
                    <p>{data?.data?.attributes[0]?.driver?.phoneNumber}</p>
                  </div>
                </div>
                <div className="md:flex justify-between">
                  <div>
                    <p className="text-lg font-semibold">Driver Email: </p>
                    <p>{data?.data?.attributes[0]?.driver?.email}</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Driver Address: </p>
                    <p>{data?.data?.attributes[0]?.load?.receivingAddress}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Truck Information */}
            <div className="w-full flex flex-col mt-10">
              <p className="text-2xl font-semibold">Truck Information</p>
              <hr className="w-56 mb-4" />
              <div className="flex flex-col gap-5 mt-2">
                <div className="lg:flex justify-between">
                  <div>
                    <p className="text-lg font-semibold">Truck Number: </p>
                    <p>{data?.data?.attributes[0]?.truck?.truckNumber}</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Trailer Size: </p>
                    <p>
                      {data?.data?.attributes[0]?.truck?.trailerSize}
                      -foot trailer.
                    </p>
                  </div>
                </div>
                <div className="lg:flex justify-between">
                  <div>
                    <p className="text-lg font-semibold">Pallet Spaces: </p>
                    <p>
                      {data?.data?.attributes[0]?.truck?.palletSpace}
                      pallets.
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Availability: </p>
                    {/* <p>Fully Available.</p> */}

                    {data?.data?.attributes[0]?.availablePalletSpace > 5 && (
                      <p>The truck is fully available.</p>
                    )}
                    {data?.data?.attributes[0]?.availablePalletSpace === 0 && (
                      <p>The truck is fully loaded.</p>
                    )}
                    {data?.data?.attributes[0]?.availablePalletSpace > 0 &&
                      data?.data?.attributes[0]?.availablePalletSpace <= 5 && (
                        <p>The truck has low pallet space.</p>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">
              Reciver&#39;s Information
            </h2>
            <hr className="my-6 border-[#9D9D9D] opacity-60" />
            <div className="grid lg:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">Reciver Name</p>

                <div className="flex items-center">
                  <span>{data?.data?.attributes[0]?.load?.receiverName}</span>
                </div>
              </div>
              <div>
                <p className="font-semibold">Reciver Phone</p>
                <p> {data?.data?.attributes[0]?.load?.receiverPhoneNumber}</p>
              </div>
              <div>
                <p className="font-semibold">Reciver Email</p>
                <p> {data?.data?.attributes[0]?.load?.receiverEmail} </p>
              </div>
              <div>
                <p className="font-semibold">Reciver Address</p>
                {data?.data?.attributes[0]?.load?.receivingAddress},{" "}
                {data?.data?.attributes[0]?.load?.receiverState},{" "}
                {data?.data?.attributes[0]?.load?.receiverCity}
              </div>
            </div>
          </div>

          <div className="mt-10">
            {/* Load Information */}
            <p className="text-2xl font-semibold">Load Information</p>
            <hr className="w-56 mb-4" />
            <div className="flex space-x-8">
              <div className="grid lg:grid-cols-2 gap-4">
                <div>
                  <p className="text-lg font-semibold">Load Type: </p>
                  <p>{data?.data?.attributes[0]?.load?.loadType}</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">Trailer Size: </p>
                  <p>
                    {data?.data?.attributes[0]?.load?.trailerSize}
                    -foot trailer—
                    {data?.data?.attributes[0]?.load?.palletSpace}
                    pallets.
                  </p>
                </div>
                <div>
                  <p className="text-lg font-semibold">Bill Of Lading: </p>
                  <p>{data?.data?.attributes[0]?.load?.billOfLading}</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">#PO Number: </p>
                  <p>{data?.data?.attributes[0]?.load?.poNumber}</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">Weight: </p>
                  <p>{data?.data?.attributes[0]?.load?.weight}</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">HazMat: </p>
                  {data?.data?.attributes[0]?.load?.Hazmat
                    ? data?.data?.attributes[0]?.load?.Hazmat?.map(
                        (value, i) => (
                          <span
                            className=" bg-[#2B4257]/20 me-2 mb-2 inline-block rounded px-2 py-1"
                            key={i}
                          >
                            {value}{" "}
                          </span>
                        )
                      )
                    : ""}
                </div>

                <div>
                  <p className="text-lg font-semibold mb-2">
                    Pickup Date & Time:{" "}
                  </p>
                  <p> {data?.data?.attributes[0]?.load?.pickupDate}</p>
                </div>
                <div>
                  <p className="text-lg font-semibold mb-2">
                    Delivery Date & Time:{" "}
                  </p>
                  <p> {data?.data?.attributes[0]?.load?.deliveryDate}</p>
                </div>

                <div>
                  <p className="text-lg font-semibold mb-2">Pickup: </p>

                  <div>
                    <p>
                      <span className="font-medium"> Address: </span>
                      {data?.data?.attributes[0]?.load?.shippingAddress}
                    </p>
                    <p>
                      <span className="font-medium">City: </span>
                      {data?.data?.attributes[0]?.load?.shippingCity}
                    </p>
                    <p>
                      <span className="font-medium">State: </span>{" "}
                      {data?.data?.attributes[0]?.load?.shippingState}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-lg font-bold mb-2">Delivery: </p>
                  <div>
                    <p>
                      <span className="font-medium"> Address: </span>
                      {data?.data?.attributes[0]?.load?.receivingAddress}
                    </p>
                    <p>
                      <span className="font-medium">City: </span>
                      {data?.data?.attributes[0]?.load?.receiverCity}
                    </p>
                    <p>
                      <span className="font-medium">State: </span>{" "}
                      {data?.data?.attributes[0]?.load?.receiverState}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4"></div>
            </div>
          </div>

          {/* Button to find a new driver */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-2">
            <div className="mt-8 text-center">
              <Button
                type="primary"
                size="large"
                className="bg-transparent text-[#2B4257] border border-[#2B4257] px-4 rounded-lg"
                onClick={() => setIsCancelModalOpen(true)} // Open confirmation modal
              >
                Cancel The Request
              </Button>
            </div>
            <div className="mt-8 text-center">
              <Button
                // onClick={() => router.push("/dispatching")}
                onClick={() => setIsOpen(!isOpen)}
                type="primary"
                size="large"
                className="bg-[#2B4257] px-4 rounded-lg"
              >
                Find A New Driver
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <Modal
        title="Confirm Cancellation"
        open={isCancelModalOpen}
        onOk={handleCancelRequest}
        onCancel={() => setIsCancelModalOpen(false)}
        okText="Yes, Cancel"
        cancelText="No, Keep Request"
        okButtonProps={{
          style: {
            backgroundColor: "#FF4D4F",
            borderColor: "#FF4D4F",
            color: "white",
          }, // Red color for cancel
        }}
        cancelButtonProps={{
          style: {
            backgroundColor: "#2B4257",
            borderColor: "#2B4257",
            color: "white",
          }, // Dark blue for keep request
        }}
      >
        <p>Are you sure you want to cancel this load request?</p>
      </Modal>

      {isOpen && (
        <ReAssign
          setIsOpen={setIsOpen}
          loadId={data?.data?.attributes[0]?.load?._id}
          id={params?.id}
        />
      )}
    </div>
  );
};

export default MyRequestId;
