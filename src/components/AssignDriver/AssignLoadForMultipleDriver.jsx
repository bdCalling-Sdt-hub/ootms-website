"use client";
import Container from "@/components/ui/Container";
import { useCreateLoadRequestMutation } from "@/redux/api/loadRequestApi";
import { useGetPreferredDriverQuery } from "@/redux/api/preferredDiver";
import {
  ConfigProvider,
  Form,
  Input,
  Pagination,
  Radio,
  Table,
  Typography,
} from "antd";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const AssignLoadForMultipleDriver = ({ loadId }) => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [limit, setLimit] = useState(3);

  const columns = [
    {
      title: "Driver",
      dataIndex: ["fullName"],
      key: "fullName",
      responsive: ["xs", "sm"], // Display on extra small and small screens
    },
    {
      title: "Truck Number",
      dataIndex: ["truck", "truckNumber"],
      key: "truckNumber",
      responsive: ["sm", "md"], // Display on small and medium screens and above
    },
    {
      title: "Pallet Spaces",
      dataIndex: ["truck", "palletSpace"],
      key: "palletSpace",
      responsive: ["md"], // Display on medium screens and above
    },
    {
      title: "Weight",
      dataIndex: ["truck", "weight"],
      key: "weight",
      responsive: ["md", "lg"], // Display on medium and large screens
    },
    {
      title: "Trailer Size",
      dataIndex: ["truck", "trailerSize"],
      key: "trailerSize",
      responsive: ["lg"], // Display only on large screens
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

  const [createLoadRequest, { isLoading }] = useCreateLoadRequestMutation();
  const navigate = useRouter();
  const onFinish = async (values) => {
    const toastId = toast.loading("Assigning Diver...");

    const data = loadId?.map((loadData) => ({
      load: loadData,
      driver: values.driver,
    }));

    try {
      const res = await createLoadRequest(data).unwrap();

      localStorage.removeItem("myXlLoad");

      toast.success(res.message, {
        id: toastId,
        duration: 2000,
      });
      navigate.push("/load-request?req=myRequest");
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
    <div className="mt-10">
      <Container>
        <div className="">
          <p className="text-2xl text-center font-semibold">
            Give your driver phone number
          </p>

          <Form
            layout="vertical"
            className="bg-transparent w-full mt-10"
            onFinish={onFinish}
          >
            <Typography.Title
              className="mb-3 text-start"
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
              className="mt-10  text-start"
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
      </Container>
    </div>
  );
};

export default AssignLoadForMultipleDriver;
