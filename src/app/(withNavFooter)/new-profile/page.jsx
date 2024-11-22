"use client";

import ElonProfile from "@/components/ElonMuskProfile/ElonProfile";
import { useState } from "react";
import { AllImages } from "../../../../public/assets/AllImages";

const Shipperchat = {
  reciverName: "Stave Jobs",
  reciverImg: AllImages.stave,
  chat: [
    { sender: "sender", message: "I'm in Shamsipour College!" },
    { sender: "sender", message: "hey man, are you fucking bitch?" },
    { receiver: "me", message: "Fuck off" },
  ],
};
const Driverchat = {
  reciverName: "Elon Mask",
  reciverImg: AllImages.musk,
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

export default function Profile() {
  const [chatUser, setChatUser] = useState("shipper");

  const chat = chatUser === "shipper" ? Shipperchat : Driverchat;

  return (
    <div>
      <div>
        <button
          onClick={() => setChatUser("shipper")}
          className="w-fit px-4 py-2 bg-[#2B4257] text-white"
        >
          Shipper
        </button>
        <button
          onClick={() => setChatUser("driver")}
          className="w-fit px-4 py-2 bg-[#2B4257] text-white"
        >
          Driver
        </button>
      </div>
      <ElonProfile data={chat} />
    </div>
  );
}
