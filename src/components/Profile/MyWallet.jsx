import { Table } from "antd";
import Container from "../ui/Container";
import Image from "next/image";
import { allIcons } from "../../../public/assets/AllImages";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";

const dataSource = [
  {
    key: "1",
    date: "31 Apr, 2044/11:00am",
    reason: "Cash in from card",
    amount: "340",
    cashFlow: "Cash In",
  },
  {
    key: "2",
    date: "31 Apr, 2044/11:00am",
    reason: "Bought medicine",
    amount: "340",
    cashFlow: "Expense",
  },
  {
    key: "31",
    date: "31 Apr, 2044/11:00am",
    reason: "Cash in from card",
    amount: "340",
    cashFlow: "Cash In",
  },
  {
    key: "4",
    date: "31 Apr, 2044/11:00am",
    reason: "Bought medicine",
    amount: "340",
    cashFlow: "Expense",
  },
  {
    key: "5",
    date: "31 Apr, 2044/11:00am",
    reason: "Cash in from card",
    amount: "340",
    cashFlow: "Cash In",
  },
  {
    key: "6",
    date: "31 Apr, 2044/11:00am",
    reason: "Bought medicine",
    amount: "340",
    cashFlow: "Expense",
  },
  {
    key: "7",
    date: "31 Apr, 2044/11:00am",
    reason: "Cash in from card",
    amount: "340",
    cashFlow: "Cash In",
  },
  {
    key: "8",
    date: "31 Apr, 2044/11:00am",
    reason: "Bought medicine",
    amount: "340",
    cashFlow: "Expense",
  },
  // Repeat for other entries
];

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Reason",
    dataIndex: "reason",
    key: "reason",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    render: (text) => (
      <div className="bg-[#F8FAFC] py-2 px-3 border border-[#758888] rounded-md flex items-center gap-2 w-fit">
        <Image
          src={allIcons.dollar}
          alt="profile_img"
          width={0}
          height={0}
          sizes="100vw"
          className="h-4 w-4 "
        />
        <span className="text-base">{text}</span>
      </div>
    ),
  },
  {
    title: "Cash Flow",
    dataIndex: "cashFlow",
    key: "cashFlow",
    sorter: (a, b) => a.cashFlow.localeCompare(b.cashFlow),
    render: (text) => (
      <span className={`font-semibold `}>
        {text === "Cash In" ? (
          <div className="flex items-center gap-x-2">
            <span>{text}</span>
            <FaArrowDown className="" />
          </div>
        ) : (
          <div className="flex items-center gap-x-2">
            <span>{text}</span>
            <FaArrowUp className="" />
          </div>
        )}
      </span>
    ),
  },
];

const MyWallet = () => {
  return (
    <div className=" my-16 md:my-20">
      <Container>
        <div className="mb-12 flex flex-col sm:flex-row sm:items-center gap-5">
          <div className="px-7 py-4 text-center sm:w-fit border-2  border-base-color rounded-2xl">
            <h2 className="text-base-color text-xl md:text-3xl lg:text-3xl mb-2">
              Your Balance
            </h2>
            <h1 className="text-base-color text-3xl md:text-4xl lg:text-5xl font-semibold">
              $5,000
            </h1>
          </div>
          <div className="p-4 flex items-center gap-4 bg-[#FCC1BE] text-base-color rounded-2xl cursor-pointer">
            <Image
              src={allIcons.wallet}
              alt="profile_img"
              width={0}
              height={0}
              sizes="100vw"
              className="h-8 w-8 "
            />
            <p className="text-lg font-medium">Add money to wallet</p>
          </div>
        </div>
        <h1 className="text-base-color text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
          History
        </h1>

        <Table
          className="text-lg min-w-full border border-[#DFE1E3] rounded"
          dataSource={dataSource}
          columns={columns}
          //   bordered
          scroll={{ x: "100%" }}
          pagination={false}
        />
      </Container>
    </div>
  );
};

export default MyWallet;
