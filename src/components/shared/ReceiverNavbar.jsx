import React from "react";
import Container from "../ui/Container";
import Link from "next/link";
import Image from "next/image";
import { AllImages } from "../../../public/assets/AllImages";

const ReceiverNavbar = () => {
  return (
    <div className="sticky top-0 left-0 w-full z-50 bg-[#ffffff] shadow-md">
      <Container>
        <div className="flex items-center justify-center py-5 ">
          <Link href="/">
            <Image
              src={AllImages.logo}
              alt="logo"
              className="w-auto h-[40px]"
            />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default ReceiverNavbar;
