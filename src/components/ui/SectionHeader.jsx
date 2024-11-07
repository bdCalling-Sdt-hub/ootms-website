import React from "react";

const SectionHeader = ({ children }) => {
  return (
    <div className="flex justify-center flex-row gap-1 sm:gap-2 items-center mx-auto">
      <div className="flex flex-col items-center md:items-end">
        <hr className="w-[60px] md:w-[100px] mr-10 md:mr-10 border-t-2 border-[#037EEE]" />
        <hr className="w-[60px] md:w-[100px] mt-1 md:mr-5 border-t-2 border-[#222222]" />
      </div>
      <p className="text-lg sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-center md:text-left text-primary-color">
        {children}
      </p>
      <div className="flex flex-col items-center md:items-start">
        <hr className="w-[60px] md:w-[100px] ml-10 md:ml-10  border-t-2 border-[#222222]" />
        <hr className="w-[60px] md:w-[100px] mt-1 md:ml-5 border-t-2 border-[#037EEE]" />
      </div>
    </div>
  );
};

export default SectionHeader;
