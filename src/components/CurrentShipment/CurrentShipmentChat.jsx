import { SocketContext } from "@/context/SocketContextApi";
import { getImageUrl } from "@/helpers/config/envConfig";
import { formatDateTime } from "@/helpers/date-formats";
import { useGetAllMessageByChatIdQuery } from "@/redux/api/chatApi";
import { selectUser } from "@/redux/slices/authSlice";
import {
  clearSelectedChatUser,
  selectChatMessages,
  selectOnlineUsers,
  selectSelectedChatUser,
  setChatMessages,
  setOnlineUsers,
  setSelectedChatUser,
} from "@/redux/slices/chatSlice";
import { Form, Input } from "antd";
import Image from "next/image";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { AllImages } from "../../../public/assets/AllImages";

const CurrentShipmentChat = ({
  data,
  setChatBoxVisible,
  setIsChatIconVisible,
}) => {
  const [form] = Form.useForm();
  const { socket } = useContext(SocketContext);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const selectedChat = useSelector(selectSelectedChatUser);
  const chatMessages = useSelector(selectChatMessages);
  const onlineUsers = useSelector(selectOnlineUsers);
  const messagesContainerRef = useRef(null);
  const messagesEndRef = useRef(null);
  const imageServerUrl = getImageUrl();

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  });

  const {
    data: allMessages,
    isFetching: isAllMessageFetching,
    refetch,
  } = useGetAllMessageByChatIdQuery(
    { id: selectedChat?.chatId },
    {
      skip: !selectedChat?.chatId,
    }
  );

  useEffect(() => {
    if (selectedChat?.chatId) {
      refetch();
    }
    if (allMessages?.data?.attributes) {
      dispatch(setChatMessages(allMessages?.data?.attributes));
    }
  }, [allMessages, dispatch, refetch, selectedChat]);

  const handleMessage = useCallback(
    (message) => {
      dispatch(setChatMessages([...chatMessages, message]));
    },
    [chatMessages, dispatch]
  );

  useEffect(() => {
    const roomId = selectedChat?.chatId?.toString();

    socket?.emit("join", roomId);

    socket?.on("online-users-updated", (online) => {
      dispatch(setOnlineUsers(online));
    });
    if (selectedChat && socket) {
      socket?.on(
        `new-message-received::${selectedChat?.chatId}`,
        handleMessage
      );
    }

    return () => {
      socket?.off(`new-message-received::${selectedChat?.chatId}`);
      socket?.emit("leave", roomId);
    };
  }, [selectedChat, dispatch, handleMessage, socket]);

  //* For Sending Message
  const handleMessageSend = async (values) => {
    const toastId = toast.loading("Sending Message...");

    const data = {
      chat: selectedChat?.chatId,
      sender: selectedChat?.userId,
      text: values?.message,
    };

    console.log("chat data", data);

    try {
      socket.emit("send-new-message", data);
      form.resetFields();
      toast.success("Message sent successfully!", {
        id: toastId,
        duration: 2000,
      });
    } catch (error) {
      console.log("error", error);
      toast.error(error?.data?.message || "Failed to send message", {
        id: toastId,
        duration: 2000,
      });
    }
  };
  return (
    <div className="absolute bottom-0 right-0 ">
      <div className=" w-[250px] sm:w-[300px] md:w-[350px] ml-10 relative shadow-2xl">
        <div className="bg-[#FAFAFA] rounded-2xl w-full h-full flex flex-col">
          <header className="bg-[#2B4257] text-[#FFFFFF] flex items-center justify-between gap-2 px-2 py-4 rounded-t-2xl">
            <div className="flex items-center gap-2">
              <Image
                src={
                  selectedChat?.img
                    ? imageServerUrl + selectedChat?.img
                    : AllImages.profile
                }
                alt={selectedChat?.name}
                width={100}
                height={100}
                className="w-12 h-12 rounded-full"
              />
              <p className="text-white">{selectedChat?.name}</p>
            </div>
            <IoMdCloseCircle
              onClick={() => {
                dispatch(clearSelectedChatUser());
                setChatBoxVisible(false);
                setIsChatIconVisible(true);
              }}
              className="text-2xl text-[#FFFFFF] cursor-pointer"
            >
              x
            </IoMdCloseCircle>
          </header>

          <div
            ref={messagesContainerRef}
            className=" px-4 py-2 h-[400px] overflow-y-auto pb-4 place-content-end"
          >
            {isAllMessageFetching ? (
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900">
                  {" "}
                </div>
              </div>
            ) : (
              chatMessages?.map((msg, index) => (
                <div key={index} className="mb-2 ">
                  <p
                    className={`w-fit ${
                      msg?.sender === selectedChat?.userId
                        ? "ml-auto bg-[#2B4257]  text-white p-2 rounded-xl"
                        : "  text-[#282828] bg-[#E3E3E3] p-2 rounded-xl"
                    }`}
                  >
                    {msg?.text}
                  </p>

                  <p
                    className={`text-[#999999] text-xs ${
                      msg?.sender === selectedChat?.userId ? "text-right" : ""
                    }`}
                  >
                    {formatDateTime(msg?.createdAt)}
                  </p>
                </div>
              ))
            )}
            {/* {} */}
            <div ref={messagesEndRef}></div>
          </div>
        </div>
        <Form form={form} onFinish={handleMessageSend}>
          <div>
            <Form.Item name="message">
              <Input
                suffix={
                  <button
                    type="submit"
                    className="bg-[#2B4257] text-white p-2 w-fit"
                  >
                    <IoSend className="" />
                  </button>
                }
                type="text"
                placeholder="Type your message"
                className="w-full p-2  rounded-b-2xl bg-[#FAFAFA] !ring-0 !border-b-0 !border-l-0 !border-r-0 !border-t-2 border-[#999999] z-10 outline-none absolute bottom-0"
              />
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CurrentShipmentChat;
