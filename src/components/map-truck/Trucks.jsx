import { Table } from "antd";

const Trucks = () => {
  const columns = [
    { title: "Shipper City", dataIndex: "shipperCity", key: "shipperCity" },
    { title: "Receiver City", dataIndex: "receiverCity", key: "receiverCity" },
    { title: "Load Type", dataIndex: "loadType", key: "loadType" },
    { title: "Pallet Spaces", dataIndex: "palletSpaces", key: "palletSpaces" },
    { title: "Weight", dataIndex: "weight", key: "weight" },
    { title: "Pickup Date", dataIndex: "pickupDate", key: "pickupDate" },
    { title: "Delivery Date", dataIndex: "deliveryDate", key: "deliveryDate" },
  ];

  const data = [
    {
      key: "1",
      shipperCity: "Atlanta",
      receiverCity: "Denver",
      loadType: "Full",
      palletSpaces: 24,
      weight: 47000,
      pickupDate: "11/11/2024",
      deliveryDate: "13/11/2024",
    },
  ];

  return (
    <div className="mb-6">
      {/* Table Section */}
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        bordered
        scroll={{ x: 80 }} // Adds horizontal scrolling to the table on smaller screens
        style={{ maxWidth: "100%", overflowX: "hidden" }}
      />
    </div>
  );
};

export default Trucks;
