import { useDrop } from "react-dnd";
import { ConfigProvider, Table } from "antd";

const Trucks = ({ data, onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "ITEM", // Only accept items of type "ITEM"
    drop: (item) => onDrop(item), // Execute onDrop when the item is dropped
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const columns = [
    { title: "Driver", dataIndex: "driver", key: "driver" },
    { title: "Truck", dataIndex: "truck", key: "truck" },
    { title: "Pallet Spaces", dataIndex: "palletSpaces", key: "palletSpaces" },
    { title: "Weight", dataIndex: "weight", key: "weight" },
    { title: "Trailer Size", dataIndex: "trailerSize", key: "trailerSize" },
    { title: "Availability", dataIndex: "availability", key: "availability" },
    { title: "Location", dataIndex: "location", key: "location" },
  ];

  return (
    <div
      ref={drop}
      style={{
        border: isOver ? "2px solid green" : "2px solid lightgray",
        padding: "10px",
        minHeight: "200px",
      }}
    >
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
    </div>
  );
};

export default Trucks;
