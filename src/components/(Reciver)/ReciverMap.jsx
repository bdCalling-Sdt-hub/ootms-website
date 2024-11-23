"use client";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { AllImages } from "../../../public/assets/AllImages";
import ChatOption from "../shared/ChatOption";
import { AiOutlineMessage } from "react-icons/ai";
import { useState } from "react";
import ReciverChat from "./ReciverChat";
import LeafletDeliveryMap from "../LeafletMap/LeafletDeliveryMap";

const Shipperchat = {
  reciverName: "Stave Jobs",
  reciverImg: AllImages.user,
  chat: [
    { sender: "sender", message: "I'm in Shamsipour College!" },
    { sender: "sender", message: "hey man, are you fucking bitch?" },
    { receiver: "me", message: "Fuck off" },
  ],
};
const Driverchat = {
  reciverName: "Elon Mask",
  reciverImg: AllImages.profile,
  chat: [
    { sender: "sender", message: "hey man, are you fucking bitch?" },
    { receiver: "me", message: "Fuck off" },

    { sender: "sender", message: "Shut Up!" },
    { receiver: "me", message: "Where are you from?" },

    { sender: "sender", message: "I'm in Shamsipour College!" },
    { sender: "sender", message: "hey man, are you fucking bitch?" },
    { receiver: "me", message: "Fuck off" },

    { sender: "sender", message: "Shut Up!" },
    { receiver: "me", message: "Where are you from?" },

    { sender: "sender", message: "I'm in Shamsipour College!" },
    { sender: "sender", message: "hey man, are you fucking bitch?" },
    { receiver: "me", message: "Fuck off" },

    { sender: "sender", message: "Shut Up!" },
    { receiver: "me", message: "Where are you from?" },

    { sender: "sender", message: "I'm in Shamsipour College!" },
  ],
};

export default function ReceiverMap() {
  const [ischatOptionVisible, setIsChatOptionVisible] = useState(false);
  const [isChatIconVisible, setIsChatIconVisible] = useState(true);
  const [chatBoxVisible, setChatBoxVisible] = useState(false);
  const [chatUser, setChatUser] = useState("shipper");

  const chat = chatUser === "shipper" ? Shipperchat : Driverchat;

  return (
    <div className="py-20 relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
          <div>
            <div className="">
              <h1 className="text-xl font-semibold text-[#2B4257] underline mb-2">
                Driver’s Information
              </h1>
              <div className="grid grid-cols-2 items-stretch mb-2">
                <p className="font-semibold">Name</p>
                <p>
                  <span className="font-semibold">:</span>Steve Jobs
                </p>
              </div>
              <div className="grid grid-cols-2 items-stretch mb-2">
                <p className="font-semibold">Truck Number</p>
                <p>
                  <span className="font-semibold">:</span>ABC 123456
                </p>
              </div>
              <div className="grid grid-cols-2 items-stretch mb-2">
                <p className="font-semibold">Email</p>
                <p className="text-left">
                  <span className="font-semibold">:</span>example@gmail.com
                </p>
              </div>
              <div className="grid grid-cols-2 items-stretch">
                <p className="font-semibold">Contact Number</p>
                <p className="justify-start">
                  <span className="font-semibold">:</span>123 456 789
                </p>
              </div>
            </div>{" "}
            <div className="mt-6">
              <h1 className="text-xl font-semibold text-[#2B4257] underline mb-2">
                Shipper’s Information
              </h1>
              <div className="grid grid-cols-2 items-stretch mb-2">
                <p className="font-semibold">Name</p>
                <p>
                  <span className="font-semibold">:</span>Elon Musk
                </p>
              </div>

              <div className="grid grid-cols-2 items-stretch mb-2">
                <p className="font-semibold">Email</p>
                <p className="text-left">
                  <span className="font-semibold">:</span>example@gmail.com
                </p>
              </div>
              <div className="grid grid-cols-2 items-stretch">
                <p className="font-semibold">Contact Number</p>
                <p className="justify-start">
                  <span className="font-semibold">:</span>123 456 789
                </p>
              </div>
            </div>{" "}
            <div className=" mt-6">
              <h1 className="text-xl font-semibold text-[#2B4257] underline mb-2">
                Load Information
              </h1>
              <div className="grid grid-cols-2 items-stretch mb-2">
                <p className="font-semibold">Load Type</p>
                <p>
                  <span className="font-semibold">:</span>Dry Load.
                </p>
              </div>
              <div className="grid grid-cols-2 items-stretch mb-2">
                <p className="font-semibold">Trailer size</p>
                <p>
                  <span className="font-semibold">:</span>48-foot-trailer — 24
                  pallets
                </p>
              </div>
              <div className="grid grid-cols-2 items-stretch mb-2">
                <p className="font-semibold">Pickup</p>
                <p className="text-left">
                  <span className="font-semibold">:</span>Address
                  <span className="font-semibold">:</span> Rupatoli, Barishal
                </p>
              </div>
              <div className="grid grid-cols-2 items-stretch">
                <p className="font-semibold">Delivery</p>
                <p className="justify-start">
                  <span className="font-semibold">:</span>Address
                  <span className="font-semibold">:</span> Banashree, Dhaka
                </p>
              </div>
              <div className="grid grid-cols-2 items-stretch">
                <p className="font-semibold">Wirght</p>
                <p className="justify-start">
                  <span className="font-semibold">:</span>120 kg
                </p>
              </div>
              <div className="grid grid-cols-2 items-stretch">
                <p className="font-semibold">Hazmat</p>
                <p className="justify-start">
                  <span className="font-semibold">:</span>Flammable Gas 2,
                  Corrosive, Danger
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-1 lg:col-span-2  xl:col-span-3 z-10">
            <LeafletDeliveryMap />
          </div>
        </div>
      </Container>
      {/* Message  */}
      <div className="sticky  bottom-0 ml-auto flex flex-col mr-[1%] w-fit z-20">
        {chatBoxVisible && (
          // <div className="h-48 w-72 bg-[#2B4257] mb-auto p-2 ">
          //   <p
          //     onClick={() => {
          //       setChatBoxVisible(false);
          //       setIsChatIconVisible(true);
          //     }}
          //     className="text-2xl text-primary-color cursor-pointer"
          //   >
          //     x
          //   </p>
          // </div>
          <ReciverChat
            data={chat}
            setChatBoxVisible={setChatBoxVisible}
            setIsChatIconVisible={setIsChatIconVisible}
          />
        )}
        {isChatIconVisible && (
          <div className="relative">
            {ischatOptionVisible && (
              <div className="absolute right-0 bottom-14 w-fit bg-transparent mb-5 -mt-[124px]">
                <div
                  onClick={() => {
                    setChatUser("shipper");
                    setIsChatIconVisible(false);
                    setChatBoxVisible(true);
                  }}
                  className="bg-[#2B4257] text-primary-color mb-2 p-3 rounded-3xl cursor-pointer w-40 text-center"
                >
                  Chat with Shipper
                </div>
                <div
                  onClick={() => {
                    setChatUser("driver");
                    setIsChatIconVisible(false);
                    setChatBoxVisible(true);
                  }}
                  className="bg-[#2B4257] text-primary-color p-3 rounded-3xl cursor-pointer w-40 text-center"
                >
                  Chat with Driver
                </div>
              </div>
            )}
            <div
              onClick={() => {
                setIsChatOptionVisible((prev) => !prev);
              }}
              className="w-fit h-fit p-3 rounded-full bg-[#2B4257] cursor-pointer"
            >
              <AiOutlineMessage className="w-5 lg:w-10 h-5 lg:h-10 text-primary-color" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
