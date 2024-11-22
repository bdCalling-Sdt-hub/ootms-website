import { Input } from "antd";
import Image from "next/image";
import { IoSend } from "react-icons/io5";

export default function ElonProfile({ data }) {
  return (
    <div className=" w-[280px] sm:w-[350px] md:w-[400px] ml-10 relative ">
      <div className="bg-slate-200 rounded-2xl w-full h-full flex flex-col">
        <header className="bg-black flex items-center gap-2 p-2 rounded-t-2xl">
          <div>
            <Image
              src={data.reciverImg}
              alt="elon_musk"
              width={50}
              height={50}
            />
          </div>
          <p className="text-white">{data.reciverName}</p>
        </header>

        <div className=" px-4 py-2 h-[500px] overflow-y-auto pb-14 place-content-end">
          {data?.chat?.map((item, index) => (
            <div key={index} className="mb-2 ">
              <p
                className={`w-fit ${
                  item.sender === "sender"
                    ? " bg-[#FF5C00] p-2 rounded-3xl"
                    : "ml-auto bg-[#FFFFFF] p-2 rounded-3xl"
                }`}
              >
                {item.message}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Input
        suffix={<IoSend className="text-[#ACACAC] cursor-pointer " />}
        type="text"
        placeholder="Type your message"
        className="w-full p-2  rounded-b-2xl bg-slate-200 border-t-2 border-[#ACACAC] z-10 outline-none absolute bottom-0"
      />
    </div>
  );
}
