"use client";
import { ConfigProvider, Modal, Table } from "antd";
import { useState } from "react";

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
      render: (text, record) => <div onClick={showModal}>{text}</div>,
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
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          bordered
          scroll={{ x: "max-content" }}
          style={{ maxWidth: "100%", overflowX: "hidden" }}
        />
      </ConfigProvider>
      <Modal
        className="!rounded-lg"
        open={open}
        onOk={handleOk}
        footer={null}
        onCancel={handleCancel}
        maskClosable={false} // Disable closing the modal when clicking outside
      >
        <div className="mt-5 rounded-lg">
          <div className="flex items-center gap-2 w-[90%] mx-auto">
            <div className="w-fit p-1 rounded-full bg-[#B8E2A2] flex justify-center items-center">
              <span className="w-5 h-5 rounded-full bg-[#90BA7A]"></span>
            </div>
            <p className="text-lg font-semibold">
              The truck is fully available.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Trucks;
