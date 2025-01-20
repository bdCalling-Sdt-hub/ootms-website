import { Input } from "antd";
import Image from "next/image";
import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { IoSend } from "react-icons/io5";

const CurrentShipmentChat = ({
  data,
  setChatBoxVisible,
  setIsChatIconVisible,
}) => {
  return (
    <div className="absolute bottom-0 right-0 ">
      <div className=" w-[280px] sm:w-[350px] md:w-[400px] ml-10 relative shadow-2xl">
        <div className="bg-[#FAFAFA] rounded-2xl w-full h-full flex flex-col">
          <header className="bg-[#2B4257] text-[#FFFFFF] flex items-center justify-between gap-2 px-2 py-4 rounded-t-2xl">
            <div className="flex items-center gap-2">
              <Image
                src={data.reciverImg}
                alt="elon_musk"
                width={30}
                height={30}
              />
              <p className="text-white">{data.reciverName}</p>
            </div>
            <IoMdCloseCircle
              onClick={() => {
                setChatBoxVisible(false);
                setIsChatIconVisible(true);
              }}
              className="text-2xl text-[#FFFFFF] cursor-pointer"
            >
              x
            </IoMdCloseCircle>
          </header>

          <div className=" px-4 py-2 h-[500px] overflow-y-auto pb-14 place-content-end">
            {data?.chat?.map((item, index) => (
              <div key={index} className="mb-2 ">
                <p
                  className={`w-fit ${
                    item.sender === "sender"
                      ? " bg-[#E3E3E3] text-[#282828] p-2 rounded-xl"
                      : "ml-auto bg-[#2B4257] text-white p-2 rounded-xl"
                  }`}
                >
                  {item.message}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Input
          suffix={<IoSend className="text-[#999999] cursor-pointer " />}
          type="text"
          placeholder="Type your message"
          className="w-full p-2  rounded-b-2xl bg-[#FAFAFA] !ring-0 !border-b-0 !border-l-0 !border-r-0 !border-t-2 border-[#999999] z-10 outline-none absolute bottom-0"
        />
      </div>
    </div>
  );
};

export default CurrentShipmentChat;
