"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import { AllHowItWorks, AllImages } from "../../../public/assets/AllImages";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { buttonVariants } from "@/lib/variants";

const ServiceHighlights = () => {
  //   <div className="text-center mb-10">
  //   <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-base-color mb-5">
  //     Personalized Support
  //   </h1>
  //   <p className="text sm:text-lg lg:text-2xl w-full">
  //     Every client receives a dedicated MVR to ensure a smooth and
  //     stress-free experience.
  //   </p>
  // </div>

  //   <div className="text-center mb-10">
  //   <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-base-color mb-5">
  //     Maximized Healthcare Benefits
  //   </h1>
  //   <p className="text sm:text-lg lg:text-2xl w-full">
  //     We ensure you’re getting the most from your insurance plan and
  //     healthcare coverage.
  //   </p>
  // </div>

  // <div className="text-center mt-10">
  //   <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-base-color mb-5">
  //     Comprehensive Care
  //   </h1>
  //   <p className="text sm:text-lg lg:text-2xl">
  //     Clinivea doesn’t just explain; we advocate and handle everything from
  //     appointment bookings to coordinating follow-ups.
  //   </p>
  // </div>;
  return (
    <div className="relative py-20">
      <Container>
        <div className="flex justify-center items-center gap-2 mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-color text-center ">
            Why
          </h1>
          <Image src={AllImages.logo} alt="icon" className="w-[180px]" />
        </div>
        <div className="hidden sm:block">
          <div className="flex justify-between">
            <div className="w-1/3">
              <div className="text-center ">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-base-color mb-5">
                  Personalized Support
                </h1>
                <p className="text sm:text-lg lg:text-xl w-full">
                  Every client receives a dedicated MVR to ensure a smooth and
                  stress-free experience.
                </p>
              </div>
            </div>
            <div className="w-1/3">
              <div className="text-center ">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-base-color mb-5">
                  Maximized Healthcare Benefits
                </h1>
                <p className="text sm:text-lg lg:text-xl w-full">
                  We ensure you’re getting the most from your insurance plan and
                  healthcare coverage.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center py-5">
            <div className="w-1/3 flex flex-col sm:-mr-[1.7%] lg:-mr-[1.67%]">
              <div className="w-full h-[100px] sm:h-[120px] md:h-[150px] lg:h-[200px] xl:h-[250px] relative ">
                <div className=" w-full h-full bg-[#003366] rounded-t-full"></div>
                <div className="w-[90%] sm:h-[200px] md:h-[440px] bg-white rounded-full absolute top-[10%] left-[5%]"></div>
                <Image
                  src={AllHowItWorks.whyClinivea1}
                  alt="icon"
                  className="absolute top-[25%] left-[15%] w-[70%]"
                />
              </div>
            </div>

            <div className="w-1/3 flex flex-col sm:mt-28 md:mt-32 lg:mt-48 xl:mt-60">
              <div className="w-full h-[100px] sm:h-[120px] md:h-[150px] lg:h-[200px] xl:h-[250px] relative">
                <Image
                  src={AllHowItWorks.whyClinivea2}
                  alt="icon"
                  className="absolute bottom-[25%] left-[15%] w-[70%] z-10"
                />
                <div className="w-[90%] sm:h-[200px] md:h-[440px] bg-white rounded-full absolute bottom-[10%] left-[5%]"></div>
                <div className=" w-full h-full bg-[#009900] rounded-b-full"></div>
              </div>
            </div>

            <div className="w-1/3 flex flex-col sm:-ml-[1.7%] lg:-ml-[1.67%] ">
              <div className="w-full h-[100px] sm:h-[120px] md:h-[150px] lg:h-[200px] xl:h-[250px] relative">
                <div className=" w-full h-full bg-[#003366] rounded-t-full"></div>
                <div className="w-[90%] sm:h-[200px] md:h-[440px] bg-white rounded-full absolute top-[10%] left-[5%]"></div>
                <Image
                  src={AllHowItWorks.whyClinivea1}
                  alt="icon"
                  className="absolute top-[25%] left-[15%] w-[70%]"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-1/3">
              <div className="text-center ">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold text-base-color mb-5">
                  Comprehensive Care
                </h1>
                <p className="text sm:text-lg lg:text-xl">
                  Clinivea doesn’t just explain; we advocate and handle
                  everything from appointment bookings to coordinating
                  follow-ups.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="block sm:hidden">
          <div className="flex flex-col items-center space-y-12 p-6">
            {/* Personalized Support */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
                <Image src={AllHowItWorks.whyClinivea1} alt="icon" />
              </div>
              <h2 className="text-xl font-semibold mt-4">
                Personalized Support
              </h2>
              <p className="text-gray-600 mt-2">
                Every client receives a dedicated MVR to ensure a smooth and
                stress-free experience.
              </p>
            </div>

            {/* Comprehensive Care */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
                <Image src={AllHowItWorks.whyClinivea2} alt="icon" />
              </div>
              <h2 className="text-xl font-semibold mt-4">Comprehensive Care</h2>
              <p className="text-gray-600 mt-2">
                Clinivea doesn't just explain; we advocate and handle everything
                from appointment bookings to coordinating follow-ups.
              </p>
            </div>

            {/* Maximized Healthcare Benefits */}
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
                <Image src={AllHowItWorks.whyClinivea3} alt="icon" />
              </div>
              <h2 className="text-xl font-semibold mt-4">
                Maximized Healthcare Benefits
              </h2>
              <p className="text-gray-600 mt-2">
                We ensure you're getting the most from your insurance plan and
                healthcare coverage.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <motion.button
            variants={buttonVariants}
            initial="initial"
            whileHover={"hover"}
            transition={{
              type: "spring",
              stiffness: 200,

              damping: 7,
            }}
            type="primary"
            className=" w-full sm:w-[90%] md:w-[70%] lg:w-[60%] mx-auto flex justify-center items-center bg-[#F7F8F8] text-secondary-color border border-[#E6E7E6] font-semibold px-10 py-3 text-lg sm:text-xl lg:text-2xl xl:text-3xl  rounded-xl"
          >
            Start Your Journey with Clinivea
            <FaArrowRight className="text-lg sm:text-xl lg:text-3xl ml-3 mt-1" />
          </motion.button>
        </div>
      </Container>
    </div>
  );
};

export default ServiceHighlights;
