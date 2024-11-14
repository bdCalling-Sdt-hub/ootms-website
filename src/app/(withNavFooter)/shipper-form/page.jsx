import ShipperForm from "@/components/shiper-information/page";
import Image from "next/image";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { dispatchinImage } from "../../../../public/assets/AllImages";

const Shipper = () => {
  return (
    <>
      <div className="relative">
        <div className="w-full h-[75vh] sm:h-[85vh] md:h-[92vh]">
          {/* Adjust height for different screen sizes */}
          <Image
            src={dispatchinImage.manImage}
            alt="banner-image"
            width={0}
            height={0}
            sizes="100vw"
            layout="cover"
            className="object-cover object-top w-full h-full"
          />
        </div>

        {/* Overlay */}
        <div className="absolute top-0 left-0 bg-gradient-to-t from-black/70 to-white/10 h-full w-full"></div>

        {/* Text and Button Container with responsive centering */}
        <div className="absolute top-1/2 left-1/2 md:top-[600px] md:left-[350px] transform -translate-x-1/2 -translate-y-1/2 text-center  sm:px-10 md:px-16 lg:px-32 max-w-[90%] md:max-w-[80%] lg:max-w-[60%] mx-auto">
          <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight sm:leading-[50px] md:leading-[60px] lg:leading-[70px]">
            Shift with <br /> OOTMS.
          </h1>
          <button
            className="mt-4 sm:mt-6 md:mt-8 font-bold text-white py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-lg text-sm sm:text-lg md:text-xl lg:text-2xl flex items-center justify-center gap-2"
            style={{ background: "#2B4257" }}
          >
            <HiMiniDevicePhoneMobile className="text-lg sm:text-xl md:text-2xl" />
            <span>Download app</span>
          </button>
        </div>
      </div>
      <ShipperForm />
    </>
  );
};

export default Shipper;
