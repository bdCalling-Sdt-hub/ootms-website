import FormFile from "@/components/Dispatching/Form";
import Image from "next/image";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { dispatchinImage } from "../../../../public/assets/AllImages";

const Dispatching = () => {
  return (
    <div>
      <div className="relative">
        <div className="w-full h-[92vh]">
          {" "}
          {/* Adjust height for different screen sizes */}
          <Image
            src={dispatchinImage.manImage}
            alt="banner-image"
            width={0}
            height={0}
            sizes="100vw"
            layout="cover"
            className="object-cover object-top w-full h-[92vh]"
          />
        </div>

        {/* Overlay */}
        <div className="absolute top-0 left-0 bg-gradient-to-t from-black/70 to-white/10 w-full h-[92vh]"></div>

        {/* Text and Button Container with responsive centering */}
        <div className="absolute bottom-[10%] left-[10%] max-h-[95vh]">
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

      <FormFile />
    </div>
  );
};

export default Dispatching;
