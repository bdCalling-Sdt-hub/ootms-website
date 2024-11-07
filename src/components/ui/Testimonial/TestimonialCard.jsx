import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";

const TestimonialCard = ({ item }) => {
  return (
    <div className="flex flex-col md:flex-row justify-stretch items-center md:gap-5 xl:gap-10 bg-[#dbe9ff] md:bg-white md:shadow-lg p-7 md:p-0 rounded-lg">
      <Image
        src={item.image}
        alt="Testimonial"
        width={0}
        height={0}
        sizes="100vw"
        className="h-20 w-20 rounded-full md:rounded-none md:w-auto md:h-[400px] lg:h-[450px]"
      />
      <div className="flex flex-col items-center md:items-start md:px-5 xl:px-10 py-5">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold mb-1 md:mb-4">
          {item.name}
        </h1>
        <p className="sm:text-lg lg:text-xl mb-1 md:mb-4">{item.role}</p>
        <div className="flex gap-2 items-center">
          <FaStar className="size-5 text-[#FF5C00]" />
          <FaStar className="size-5 text-[#FF5C00]" />
          <FaStar className="size-5 text-[#FF5C00]" />
          <FaStar className="size-5 text-[#FF5C00]" />
          <FaStar className="size-5 text-[#FF5C00]" />
        </div>
        <p className="mt-5 md:mt-10 font-medium text-center md:text-start">
          {item.message}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
