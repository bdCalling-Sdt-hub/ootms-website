"use client";
import Container from "@/components/ui/Container";
import { useGetSingleLoadRequestQuery } from "@/redux/api/loadRequestApi";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoChevronBackOutline } from "react-icons/io5";
import LeafletDeliveryMap from "../LeafletMap/LeafletDeliveryMap";
import ReAssign from "./ReAssign";
import CurrentShipmentChatMenu from "./CurrentShipmentChatMenu";
import GoogleDeliveryMap from "../LeafletMap/GoogleDeliveryMap";
import dayjs from "dayjs";

const SingleCurrentShipment = () => {
  const params = useParams();

  const { data } = useGetSingleLoadRequestQuery(params?.id);

  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  return (
    <div className="pt-20 pb-10 bg-[#F3F3F3]">
      <Container>
        <div className="flex justify-between items-center mb-10">
          <IoChevronBackOutline
            className="text-3xl cursor-pointer text-[#2B4257] font-semibold"
            onClick={() => window.history.back()}
          />
          <p className="text-4xl text-[#2B4257] font-semibold">
            {" "}
            Current Shipment
          </p>
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
                    <p>{data?.data?.attributes[0]?.driver?.address}</p>
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
                <div className="flex justify-between">
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

          <div className="md:mt-10">
            <h2 className="text-xl font-semibold mb-4">
              Reciver&#39;s Information
            </h2>
            <hr className="my-6 border-[#9D9D9D] opacity-60" />
            <div className="grid grid-cols-2 gap-4">
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
                {data?.data?.attributes[0]?.load?.receiverCity},{" "}
                {data?.data?.attributes[0]?.load?.receiverState}
              </div>
            </div>
          </div>

          <div className="mt-5">
            {/* Load Information */}
            <p className="text-2xl font-semibold">Load Information</p>
            <hr className="w-56 mb-4" />
            <div className="flex space-x-8">
              <div className="grid grid-cols-2 gap-4">
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
                  <p className="text-lg font-semibold">Weight: </p>
                  <p>{data?.data?.attributes[0]?.load?.weight}</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">HazMat: </p>
                  {data?.data?.attributes[0]?.load?.Hazmat
                    ? data?.data?.attributes[0]?.load?.Hazmat?.map(
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
            </div>
          </div>

          <div className="flex gap-4 justify-center py-10 mt-10">
            <button
              onClick={() => setOpen(!open)}
              className=" bg-[#BDC4CB] lg:px-44 md:px-10 px-8  text-gray-800 py-3 font-semibold  rounded flex items-center justify-center"
            >
              Track On Map
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className=" font-semibold bg-[#2B4257] lg:px-44 md:px-10 px-8  text-white py-2  rounded"
            >
              Re-Assign
            </button>
          </div>
        </div>
      </Container>
      <CurrentShipmentChatMenu data={data?.data?.attributes[0]} />
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-xl p-5  flex flex-col items-center justify-center bg-primary-color">
            <div
              className="w-fit ml-auto cursor-pointer mb-3"
              onClick={() => setOpen(!open)}
            >
              <IoMdCloseCircleOutline className="text-3xl" />
            </div>
            {/* <h2 className="text-lg font-semibold mb-4">Assign Driver</h2>  */}
            <div className=" h-[70vh] w-[70vw]">
              {/* <label className="block text-gray-700 font-bold mb-2" htmlFor="driver">Driver</label>                                    */}
              {/* <LeafletDeliveryMap /> */}
              <GoogleDeliveryMap data={data?.data?.attributes[0]} />
            </div>
          </div>
        </div>
      )}
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

export default SingleCurrentShipment;
