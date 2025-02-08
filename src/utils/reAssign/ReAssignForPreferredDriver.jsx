import TowerLoader from "@/components/ui/Loader";
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
import React, { useState } from "react";

const ReAssignForPreferredDriver = ({ isNearBy, columns, onFinish }) => {
  //*
  //*
  //*
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [limit, setLimit] = useState(3);
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

  const handleDriverChange = (e) => {
    setSelectedDriver(e.target.value);
  };

  const { data: preferredDriver, isFetching } = useGetPreferredDriverQuery(
    {
      page,
      searchTerm,
      limit,
    },
    {
      skip: isNearBy,
    }
  );
  return (
    <Form
      layout="vertical"
      className="bg-transparent w-full mt-10"
      onFinish={onFinish}
    >
      <div>
        <Typography.Title
          className="mb-3"
          level={4}
          style={{ color: "#222222" }}
        >
          Search Driver
        </Typography.Title>

        <Input
          type="text"
          onChange={handleSearch}
          placeholder="Search Driver"
          className="py-2 px-3 text-xl bg-site-color !border !border-[#BDC4DE] rounded text-base-color hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color"
        />
      </div>

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
          <Radio.Group
            className="grid grid-cols-1 gap-3 overflow-x-hidden "
            onChange={handleDriverChange}
          >
            {isFetching ? (
              <TowerLoader />
            ) : (
              preferredDriver?.data?.attributes?.results?.map((driver) => (
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
              ))
            )}
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
          {preferredDriver?.data?.attributes?.pagination?.totalResults > 3 &&
            !isFetching && (
              <Pagination
                onChange={(page) => setPage(page)}
                pageSize={3}
                current={page}
                total={
                  preferredDriver?.data?.attributes?.pagination?.totalResults
                }
              />
            )}
        </ConfigProvider>
      </div>

      <Form.Item>
        <button
          disabled={!selectedDriver}
          className={`w-full py-3 border border-[#2B4257] hover:border-[#2B4257] text-xl text-primary-color bg-[#2B4257] font-semibold rounded-2xl mt-8 ${
            !selectedDriver ? "disabled:cursor-not-allowed opacity-50" : ""
          }`}
          htmltype="submit"
        >
          Continue
        </button>
      </Form.Item>
    </Form>
  );
};

export default ReAssignForPreferredDriver;
