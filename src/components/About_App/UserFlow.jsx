import Image from "next/image";
import React from "react";
import { AllImages } from "../../../public/assets/AllImages";

const UserFlow = () => {
  return (
    <div>
      <h1 className="text-center font-poppins text-[60px] font-semibold leading-[66px] text-gray-color pt-16 font-poppins">
        User flow
      </h1>

      {/* register side */}
      <div className="flex items-center justify-around mt-56 px-28">
        <div>
          <div className="border-l-4 border-indigo-500"></div>
          <ul className="">
            <li className="mt-12 text-gray-color font-poppins">Register</li>
            <li className="mt-12 text-same-gray">Live Tracking</li>
            <li className="mt-12 text-same-gray">Subscription</li>
            <li className="mt-12 text-same-gray">Apps details</li>
          </ul>
        </div>
        <div className="-ml-28">
          <Image
            src={AllImages.mobile}
            width={872}
            height={826}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
};

export default UserFlow;
