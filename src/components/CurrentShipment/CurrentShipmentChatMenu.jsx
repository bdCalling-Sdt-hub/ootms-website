"use client";
import React, { useState } from "react";
import CurrentShipmentChat from "./CurrentShipmentChat";
import { AllImages } from "../../../public/assets/AllImages";
import { AiOutlineMessage } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedChatUser } from "@/redux/slices/chatSlice";

const ReciverChat = {
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

const CurrentShipmentChatMenu = ({ data }) => {
  const [ischatOptionVisible, setIsChatOptionVisible] = useState(false);
  const [isChatIconVisible, setIsChatIconVisible] = useState(true);
  const [chatBoxVisible, setChatBoxVisible] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="sticky bottom-10 ml-auto flex flex-col mr-[1%] w-fit z-20">
      {chatBoxVisible && (
        <CurrentShipmentChat
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
                  dispatch(
                    setSelectedChatUser({
                      chatId: data?.load?.shipperToReceiverChatId,
                      name: data?.load?.receiverName,
                      id: data?.load?.receiverId,
                      img: null,
                      userId: data?.load?.user,
                    })
                  );
                  setIsChatIconVisible(false);
                  setChatBoxVisible(true);
                }}
                className="bg-[#2B4257] text-primary-color mb-2 p-3 rounded-3xl cursor-pointer w-40 text-center"
              >
                Chat with Reciver
              </div>
              <div
                onClick={() => {
                  dispatch(
                    setSelectedChatUser({
                      chatId: data?.load?.shipperToDriverChatId,
                      name: data?.driver?.fullName,
                      id: data?.load?.driver,
                      img: data?.driver?.image,
                      userId: data?.load?.user,
                    })
                  );
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
  );
};

export default CurrentShipmentChatMenu;
