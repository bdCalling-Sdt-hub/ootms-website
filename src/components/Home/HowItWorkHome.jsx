"use client";

import HowDriversWork from "./HowDriversWork";
import HowUsersWork from "./HowUsersWork";

const HowItWorkHome = () => {
  return (
    <div className="">
      <div className="">
        <div className="text-center  pt-20 pb-10">
          <h1 className="text-xl sm:text-4xl lg:text-5xl font-bold text-[#2B4257]">
            How It Work
          </h1>
          <p className="sm:text-3xl">A simple and quick truck hiring process</p>
        </div>

        {/* Flexbox layout */}
        <HowUsersWork />
        <HowDriversWork />
      </div>

      {/* Button */}
      {/* <motion.button
        variants={buttonVariants}
        initial="initial"
        whileHover={"hover"}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 7,
        }}
        type="primary"
        className="w-full sm:w-[90%] md:w-[70%] lg:w-[60%] mx-auto flex justify-center items-center bg-[#F7F8F8] text-secondary-color border border-[#E6E7E6] font-semibold px-10 py-3 text-lg sm:text-xl lg:text-2xl xl:text-3xl rounded-xl"
      >
        See Full Details on How It Works
        <FaArrowRight className="text-lg sm:text-xl lg:text-3xl ml-3 mt-1" />
      </motion.button> */}
    </div>
  );
};

export default HowItWorkHome;
