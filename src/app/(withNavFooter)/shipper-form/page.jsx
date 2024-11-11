import ShipperForm from "@/components/shiper-information/page";
import Image from "next/image";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { dispatchinImage } from "../../../../public/assets/AllImages";

const Shipper = () => {
  return (
    <>
      <div className="relative">
        <div className=" w-full h-[92vh] ">
          {/* Reduced height */}
          <Image
            src={dispatchinImage.manImage}
            alt="banner-image"
            width={0}
            height={0}
            sizes="100vw"
            className="object-cover object-top w-full h-[92vh] "
          />
        </div>
        <div className="absolute top-0 left-0 bg-gradient-to-t from-black/70 to-white/10 w-full h-full"></div>
        <div className="absolute -mt-80 ml-40 sm:ml-20 md:ml-32 lg:ml-96 xl:ml-96">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-[50px] sm:leading-[60px] md:leading-[70px]">
            Shift with <br /> OOTMS.
          </h1>
          <button
            className="font-bold text-white px-6 py-4 rounded-lg text-2xl flex items-center gap-2 mt-6"
            style={{ background: "#2B4257" }}
          >
            <p>
              <HiMiniDevicePhoneMobile className="text-2xl" />
            </p>
            <p> Download app</p>
          </button>
        </div>
      </div>
      <ShipperForm />
    </>
  );
};

export default Shipper;
