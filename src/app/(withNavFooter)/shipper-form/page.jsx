import ShipperForm from "@/components/shiper-information/page";
import Image from "next/image";
import { dispatchinImage } from "../../../../public/assets/AllImages";

const Shipper = () => {
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
      <ShipperForm />
    </>
  );
};

export default Shipper;
