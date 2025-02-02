"use client";
import { useGetAllPendingLoadsQuery } from "@/redux/api/loadApi";
import {
  useCreateLoadRequestMutation,
  useReAssainLoadMutation,
} from "@/redux/api/loadRequestApi";
import { useGetPreferredDriverQuery } from "@/redux/api/preferredDiver";
import LocationCell from "@/utils/LocationCell";
import {
  Button,
  ConfigProvider,
  Form,
  Input,
  Pagination,
  Radio,
  Table,
  Typography,
} from "antd";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

import { IoMdCloseCircleOutline } from "react-icons/io";
import { toast } from "sonner";

const ReAssign = ({ id, loadId, setIsOpen }) => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [limit, setLimit] = useState(3);

  const columns = [
    {
      title: "Driver",
      dataIndex: "fullName",
      key: "fullName",
      responsive: ["xs", "sm"],
    },
    {
      title: "Truck Number",
      dataIndex: ["truck", "truckNumber"],
      key: "truckNumber",
      responsive: ["sm", "md"],
    },
    {
      title: "Pallet Spaces",
      dataIndex: ["truck", "palletSpace"],
      key: "palletSpace",
      responsive: ["md"],
    },
    {
      title: "Weight",
      dataIndex: ["truck", "weight"],
      key: "weight",
      responsive: ["md", "lg"],
    },
    {
      title: "Trailer Size",
      dataIndex: ["truck", "trailerSize"],
      key: "trailerSize",
      responsive: ["lg"],
    },
    {
      title: "Availability",
      dataIndex: ["truck", "availablePalletSpace"],
      key: "availablePalletSpace",
      responsive: ["lg", "xl"],
      render: (text, record) => (
        <div>
          {record?.truck?.availablePalletSpace === record?.truck?.palletSpace
            ? "Fully Available"
            : record?.truck?.availablePalletSpace === 0
            ? "Fully Loaded"
            : `${record?.truck?.availablePalletSpace} Pallet Spaces Available`}
        </div>
      ),
    },
  ];

  const handleSearch = (e) => {
    debounceSearch(e.target.value);
  };

  const debounceSearch = debounce((value) => {
    setSearchTerm(value);
    setPage(1);
    setLimit(3);
  }, 500);

  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }
  const { data: preferredDriver } = useGetPreferredDriverQuery({
    page,
    searchTerm,
    limit,
  });

  const router = useRouter();

  const [reAssainLoad] = useReAssainLoadMutation();
  const onFinish = async (values) => {
    const toastId = toast.loading("Re-Assigning Diver...");

    const data = [
      {
        load: loadId,
        driver: values.driver,
      },
    ];

    try {
      const res = await reAssainLoad({ data: data, id: id }).unwrap();

      toast.success(res.message, {
        id: toastId,
        duration: 2000,
      });

      router.push("/load-request?req=myRequest");
    } catch (error) {
      toast.error(
        error?.data?.message ||
          error?.error ||
          "An error occurred during Login",
        {
          id: toastId,
          duration: 2000,
        }
      );
    }
  };

  return (
    <div className=" fixed inset-0 z-50 flex flex-col items-center justify-center mt-20 bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-md w-fit overflow-y-auto">
        <div className="px-2 py-2 sm:px-5  lg:px-10 sm:py-5  lg:pt-10 relative">
          <p className="text-2xl text-center font-semibold">
            Give your driver phone number
          </p>
          <p
            onClick={() => setIsOpen()}
            className="font-bold text-xl cursor-pointer absolute top-0 right-0"
          >
            X
          </p>
          <Form
            layout="vertical"
            className="bg-transparent w-full mt-10"
            onFinish={onFinish}
          >
            <Typography.Title
              className="mb-3"
              level={4}
              style={{ color: "#222222" }}
            >
              Driver Phone Number
            </Typography.Title>

            <Input
              type="text"
              onChange={handleSearch}
              placeholder="Enter your Driver Phone Number"
              className="py-2 px-3 text-xl bg-site-color !border !border-[#BDC4DE] rounded text-base-color hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color"
            />

            <Typography.Title
              className="mt-10"
              level={4}
              style={{ color: "#222222" }}
            >
              Select a Driver
            </Typography.Title>
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
              <Form.Item name="driver">
                <Radio.Group className="grid grid-cols-1 gap-3 overflow-x-hidden ">
                  {preferredDriver?.data?.attributes?.results?.map((driver) => (
                    <Radio
                      className=" overflow-x-auto"
                      value={driver._id}
                      key={driver._id}
                    >
                      <div className="cursor-pointer  flex flex-col gap-5  overflow-x-auto overflow-y-clip">
                        <Table
                          columns={columns}
                          dataSource={[driver]}
                          pagination={false}
                          bordered
                          style={{ maxWidth: "100%", overflowX: "auto" }}
                          scroll={{ x: "100%" }} // Ensure the table can scroll to show all content
                        />
                      </div>
                    </Radio>
                  ))}
                </Radio.Group>
              </Form.Item>
            </ConfigProvider>
            <div className="flex justify-center  mt-2">
              <ConfigProvider
                theme={{
                  components: {
                    Pagination: {
                      itemActiveBg: "#2b4257",
                      colorPrimary: "#F3F3F3",
                      colorPrimaryHover: "#F3F3F3",
                    },
                  },
                }}
              >
                {preferredDriver?.data?.attributes?.pagination?.totalResults >
                  3 && (
                  <Pagination
                    onChange={(page) => setPage(page)}
                    pageSize={3}
                    current={page}
                    total={
                      preferredDriver?.data?.attributes?.pagination
                        ?.totalResults
                    }
                  />
                )}
              </ConfigProvider>
            </div>

            <Form.Item>
              <button
                className="w-full py-3 border border-[#2B4257] hover:border-[#2B4257] text-xl text-primary-color bg-[#2B4257] font-semibold rounded-2xl mt-8"
                htmltype="submit"
              >
                Continue
              </button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ReAssign;
