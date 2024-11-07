import React from "react";
import ServiceHighlights from "./ServiceHighlights";
import Image from "next/image";
import { AllHowItWorks } from "../../../public/assets/AllImages";
import Container from "../ui/Container";
import ComparisonTable from "./ComparisonTable";

const HowItWork = () => {
  return (
    <div className="py-20">
      <Container>
        <div>
          <div className="mb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-color text-center mb-10">
              How It Works
            </h1>
            <h2 className="w-full sm:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto text-2xl sm:text-3xl lg:text-4xl font-medium text-base-color text-center mb-8">
              Our MVRs guide you through every step of your healthcare journey
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch  md:py-28">
            {/* 1st Step  */}
            <div className=" flex flex-col items-stretch">
              <div className="bg-[#F7F8F8] p-5 sm:p-6 lg:p-8  xl:p-10 rounded-3xl border border-[#E6E7E6] flex flex-col items-center justify-center md:h-[500px] lg:h-[450px] xl:h-[380px] relative">
                <Image
                  src={AllHowItWorks.howItWorks1}
                  alt="user"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-28 w-28 lg:h-40 lg:w-40 md:absolute md:-top-[10%] lg:-top-[20%]"
                />
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-base-color my-5 text-center">
                  Sign Up & Connect
                </h2>
                <p className=" sm:text-lg lg:text-xl  text-center">
                  Join Clinivea and connect with a dedicated MedicoVigilance
                  Representative (MVR). They’ll learn about your healthcare
                  needs and guide you through the process
                </p>
              </div>
              <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center font-semibold text-secondary-color mb-5 md:mb-0 md:mt-5 order-first md:order-last">
                Step -01
              </p>
            </div>
            {/* 2nd Step  */}
            <div className=" flex flex-col items-stretch mt-0 md:-mt-24">
              <div className="bg-[#F7F8F8] p-5 sm:p-7 lg:p-8 xl:p-10 rounded-3xl border border-[#E6E7E6] flex flex-col items-center justify-center md:h-[500px] lg:h-[450px] xl:h-[380px] relative">
                <Image
                  src={AllHowItWorks.howItWorks2}
                  alt="user"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-28 w-28 lg:h-40 lg:w-40 md:absolute md:-bottom-[10%] lg:-bottom-[20%] order-first md:order-last"
                />
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-base-color my-5 md:my-0 md:mb-5 text-center">
                  Personalized Healthcare Support
                </h2>
                <p className=" sm:text-lg lg:text-xl  text-center mb-0 md:mb-5">
                  Your MVR will review your medical history, help you understand
                  treatment options, schedule appointments, and explain your
                  insurance benefits.
                </p>
              </div>
              <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center font-semibold text-secondary-color mb-5 order-first">
                Step -02
              </p>
            </div>
            {/* 3rd Step  */}
            <div className=" flex flex-col items-stretch">
              <div className="bg-[#F7F8F8] p-5 sm:p-7 lg:p-8 xl:p-10 rounded-3xl border border-[#E6E7E6] flex flex-col items-center justify-center md:h-[500px] lg:h-[450px] xl:h-[380px] relative">
                <Image
                  src={AllHowItWorks.howItWorks3}
                  alt="user"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-28 w-28 lg:h-40 lg:w-40 md:absolute md:-top-[10%] lg:-top-[22%]"
                />
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-base-color my-7 xl:mt-9 text-center">
                  Ongoing Advocacy & Navigation
                </h2>
                <p className=" sm:text-lg lg:text-xl  text-center">
                  Throughout your healthcare journey, your MVR will provide
                  continuous support, ensuring you stay on track and helping you
                  make informed decisions about your care.
                </p>
              </div>
              <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center font-semibold text-secondary-color mb-5 md:mb-0 md:mt-5  order-first md:order-last">
                Step -03
              </p>
            </div>
          </div>
        </div>
      </Container>
      <ServiceHighlights />
      <ComparisonTable />
    </div>
  );
};

export default HowItWork;
