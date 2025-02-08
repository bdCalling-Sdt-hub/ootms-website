import { motion } from "framer-motion";
import { ConfigProvider, Pagination } from "antd";
import React, { useState } from "react";
import MyLoad from "../map-truck/MyLoad";
import { useGetAllPendingLoadsQuery } from "@/redux/api/loadApi";
import TowerLoader from "../ui/Loader";

const MyAllLoads = ({ open, handleDragEnd, handleOpenShipperEditFrom }) => {
  const [allLoadsPage, setAllLoadsPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    debounceSearch(e.target.value);
  };

  const debounceSearch = debounce((value) => {
    setAllLoadsPage(1);
    setSearchTerm(value);
  }, 500);

  function debounce(func, wait) {
    let timeout;
    return function (...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  }

  const { data: allPendingLoads, isFetching } = useGetAllPendingLoadsQuery({
    allLoadsPage,
    searchTerm,
  });
  return (
    <div>
      <motion.div className=" gap-5 ">
        <motion.div className="relative mb-5 mx-auto">
          <p className="bg-[#2B4257] px-5 py-2 rounded-lg text-white text-center mb-3">
            Shipment
          </p>
        </motion.div>
        <div className="mb-5">
          <input
            className="border border-[#2B4257] rounded-lg px-3 py-2 w-full"
            type="text"
            onChange={handleSearch}
            placeholder="Search Loads"
          />
        </div>
        <div className=" flex flex-col gap-5">
          {isFetching ? (
            <TowerLoader />
          ) : allPendingLoads?.data?.results?.length > 0 ? (
            allPendingLoads?.data?.results?.map((item, index) => (
              <MyLoad
                data={item}
                key={item?._id}
                isFetching={isFetching}
                allPendingLoads={item}
                open={open}
                handleDragEnd={handleDragEnd}
                handleOpenShipperEditFrom={handleOpenShipperEditFrom}
              />
            ))
          ) : (
            <div className="text-center">No loads found</div>
          )}
        </div>
      </motion.div>
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
          {allPendingLoads?.data?.results?.length > 0 && !isFetching && (
            <Pagination
              showSizeChanger={false}
              onChange={(allLoadsPage) => setAllLoadsPage(allLoadsPage)}
              pageSize={2}
              current={allLoadsPage}
              total={allPendingLoads?.data?.pagination?.totalResults}
            />
          )}
        </ConfigProvider>
      </div>
    </div>
  );
};

export default MyAllLoads;
