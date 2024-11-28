import { AiOutlineMessage } from "react-icons/ai";

const ChatOption = () => {
  return (
    <div className="">
      <div className="w-fit h-fit p-3 rounded-full bg-[#2B4257] cursor-pointer">
        <AiOutlineMessage className="w-10 h-10 text-primary-color" />
      </div>
    </div>
  );
};

export default ChatOption;
