import Image from "next/image";
import { AllImages } from "../../../public/assets/AllImages";
// import map from "../../../public/assets/AllImages";

export default function Map() {
  return (
    <div>
      <Image
        className=""
        src={AllImages.Map}
        width={1000}
        height={1000}
        alt="map"
      />
    </div>
  );
}
