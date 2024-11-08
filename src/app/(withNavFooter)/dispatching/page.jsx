import Image from "next/image";
import React from "react";
import { dispatchinImage } from "../../../../public/assets/AllImages";
import FormFile from "@/components/Dispatching/Form";

const Dispatching = () => {
  return (
    <>
      <div className="relative w-full h-[600px]">
        {" "}
        {/* Reduced height */}
        <Image
          src={dispatchinImage.manImage}
          alt="banner-image"
          layout="fill"
          objectFit="cover"
          objectPosition="bottom" // Focuses on the bottom of the image
        />
      </div>

      {/* form dispatching */}
      <FormFile />
    </>
  );
};

export default Dispatching;
