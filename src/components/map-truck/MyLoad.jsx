import { ConfigProvider, Table } from "antd";

const MyLoad = ({ data }) => {
  const columns = [
    { title: "Shipper City", dataIndex: "shipperCity", key: "shipperCity" },
    { title: "Receiver City", dataIndex: "receiverCity", key: "receiverCity" },
    { title: "Load Type", dataIndex: "loadType", key: "loadType" },
    { title: "Pallet Spaces", dataIndex: "palletSpaces", key: "palletSpaces" },
    { title: "Weight", dataIndex: "weight", key: "weight" },
    { title: "Pickup Date", dataIndex: "pickupDate", key: "pickupDate" },
    { title: "Delivery Date", dataIndex: "deliveryDate", key: "deliveryDate" },
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
            Input: {
              colorText: "rgb(255,255,255)",
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
    </div>
  );
};

export default MyLoad;
