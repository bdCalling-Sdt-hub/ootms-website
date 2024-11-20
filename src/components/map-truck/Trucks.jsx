"use client";
import { Button, ConfigProvider, Modal, Table } from "antd";
import Image from "next/image";
import { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import { AllImages } from "../../../public/assets/AllImages";

const Trucks = ({ data }) => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  const columns = [
    {
      title: "Driver",
      dataIndex: "driver",
      key: "driver",
      render: (text, record) => <div>{text}</div>,
    },
    { title: "Truck", dataIndex: "truck", key: "truck" },
    { title: "Pallet Spaces", dataIndex: "palletSpaces", key: "palletSpaces" },
    { title: "Weight", dataIndex: "weight", key: "weight" },
    { title: "Trailer Size", dataIndex: "trailerSize", key: "trailerSize" },
    { title: "Availability", dataIndex: "availability", key: "availability" },
    { title: "Location", dataIndex: "location", key: "location" },
  ];
  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Table: {
              padding: 10,
              margin: 10,
              cellFontSize: 12,
              headerBg: "rgb(189,196,222)",
            },
          },
        }}
      >
        <div onClick={showModal}>
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            bordered
            scroll={{ x: "max-content" }}
            style={{ maxWidth: "100%", overflowX: "hidden" }}
          />
        </div>
      </ConfigProvider>
      <Modal
        className="!rounded-lg "
        open={open}
        onOk={handleOk}
        footer={null}
        onCancel={handleCancel}
        mask={false}
        maskClosable={false} // Disable closing the modal when clicking outside
      >
        <div className="mt-5 rounded-lg ">
          {/* Header Text  */}
          <div className="flex items-center gap-2 mx-auto p-2 bg-white">
            <div className="w-fit p-1 rounded-full bg-[#B8E2A2] flex justify-center items-center">
              <span className="w-5 h-5 rounded-full bg-[#90BA7A]"></span>
            </div>
            <p className="text-lg font-semibold">
              The truck is fully available.
            </p>
          </div>
          {/* Track Details  */}
          <div className="bg-[#EEF2FC] p-3 rounded mt-2">
            <div className="">
              <p className="text-2xl font-semibold mb-1">
                DHK METRO HA 64-8549
              </p>
              <p className="text-lg font-semibold mb-1">
                48-foot trailer—24 pallets
              </p>
            </div>
          </div>
          {/* Driver Details  */}
          <div className="bg-white flex justify-between items-center mt-5 p-3">
            <div className="flex items-center gap-x-5">
              <div className="p-1 rounded-full bg-[#2B4257] w-fit">
                <Image
                  src={AllImages.user}
                  alt="user"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-12 h-12 "
                />
              </div>
              <div>
                <p className="text-xl font-semibold">Sabbir Hossein</p>
                <p className="mt-1 text-lg flex items-center">
                  <span className="pr-2 mr-1 border-r border-[#474747] flex items-center">
                    <IoMdStar className="text-[#FFCE31] mr-1 inline-block text-lg" />
                    4.65
                  </span>
                  <span>+995 654654</span>
                </p>
              </div>
            </div>
            <div className="p-3 rounded-full w-fit bg-[#FDFDFD] border border-[#DDDDDD]">
              <FaPhone className="w-6 h-6" />
            </div>
          </div>
          <div className="bg-[#EEF2FC] rounded-lg">
            {/* Assign And Cancle  */}
            <div className=" flex justify-center items-center gap-5 pt-5 p-3">
              <Button
                onClick={handleCancel}
                className="!bg-[#DDDDDD] w-full py-6 rounded-xl text-2xl font-semibold !text-black border border-[#2B4257]"
              >
                Cancel
              </Button>
              <Button className="!bg-[#2B4257] w-full py-6 rounded-xl text-2xl font-semibold !text-white border border-[#2B4257]">
                Assign Load
              </Button>
            </div>
            {/* Drag Input  */}
            <div className="  p-3">
              <p className="text-xl text-center text-[#7D7D7D] mb-3">- OR -</p>
              <div className="">
                <Image
                  src={AllImages.drop}
                  alt="drag"
                  className="h-40 w-auto mx-auto"
                />
              </div>
              <p className="text-2xl  text-center text-[#7D7D7D] my-2 font-semibold">
                Drop Your Load Here
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Trucks;
