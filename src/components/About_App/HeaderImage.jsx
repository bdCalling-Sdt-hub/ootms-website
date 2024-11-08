import Image from "next/image";
import React from "react";
import { AllImages } from "../../../public/assets/AllImages";

const HeaderImage = () => {
  return (
    <div className="relative">
      {/* Image with Linear Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(360deg, rgba(12, 12, 12, 0.6) 0%, rgba(114, 114, 114, 0.1) 100%)",
          zIndex: 1, // Ensures the gradient appears above the image
        }}
      />
      <Image
        src={AllImages.imageHero}
        alt="banner-image"
        style={{ objectFit: "cover" }}
        className="absolute w-full h-full"
      />

      {/* Content over the image */}
      <div className="relative z-10 sm:-bottom-28 text-white flex flex-col sm:justify-end items-start h-full sm:pt-[450px] mx-2 sm:mx-10 sm:pb-10 sm:pl-16 xl:pl-64 w-3/5">
        <p className="text-xs sm:text-xl lg:text-3xl xl:text-6xl font-medium text-white pb-28">
          Load Board To Help Professional Truck Drivers Find Loads
        </p>
      </div>
    </div>
  );
};

export default HeaderImage;
