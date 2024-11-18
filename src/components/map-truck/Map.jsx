import Image from "next/image";
import { AllImages } from "../../../public/assets/AllImages";
// import map from "../../../public/assets/AllImages";

export default function Map() {
  return (
    <div>
      <Image
        className="max-w-full h-auto"
        src={AllImages.Map}
        width={600}
        height={500}
        alt="map"
      />
    </div>
  );
}
