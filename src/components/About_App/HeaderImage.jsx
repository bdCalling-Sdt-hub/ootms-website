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
      <div className="relative z-10 pb-10 text-white flex flex-col sm:justify-end h-full sm:pt-[450px]  sm:mx-10 sm:pb-10 pl-2 lg:pl-24 w-full md:w-4/5 md:leading-[60px]">
        <p className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-white mt-40 leading-[40px] md:leading-[55px] lg:leading-[60px] xl:leading-[80px]">
          Load Board To Help Professional <br className="md:block lg:block" />
          Truck Drivers Find Loads
        </p>
      </div>
    </div>
  );
};

export default HeaderImage;
