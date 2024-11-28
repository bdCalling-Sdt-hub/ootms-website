"use client";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
import { FaUserInjured } from "react-icons/fa";
import { AllImages } from "../../../public/assets/AllImages";
import Container from "../ui/Container";

export default function HowDriversWork() {
  const [activeSection, setActiveSection] = useState("loads");
  const sections = [
    { id: "loads", label: "Choose loads by availability" },
    { id: "Scheduling", label: "Flexible Load Scheduling" },
    {
      id: "Shipper",
      label: "Maintain shipper and receiver connection",
    },
  ];
  return (
    <div className="relative  mb-16 py-5">
      <Container>
        <div className="flex flex-col lg:flex-row-reverse justify-between ">
          <div className="w-1/2 flex flex-col lg:items-end">
            <div className="flex gap-2 sm:w-48 mt-6 xl:w-60 bg-[#2B4257] text-white py-2 sm:py-3 rounded-lg h-8 sm:h-14 px-5 sm:text-2xl xl:text-3xl mb-5 sm:mb-10 lg:mb-20">
              <FaUserInjured />
              <p>For Driver</p>
            </div>

            {/* Navigation */}
            <div className="flex lg:justify-end items-center py-10 sm:py-20 lg:py-5 w-full">
              <nav className="border-l border-[#2A4094]">
                {sections.map((section) => (
                  <div
                    className="-ml-[6px] flex mb-5 items-center"
                    key={section.id}
                  >
                    <span
                      className={classNames(
                        "size-3 rounded-full bg-[#00C7BE]",
                        activeSection === section.id ? "block" : "hidden"
                      )}
                    ></span>
                    <div
                      className={classNames(
                        "block text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold ps-10 cursor-pointer",
                        activeSection === section.id
                          ? "text-black ps-8 transition ease-in-out scale-110"
                          : "text-[#B4B4B4]"
                      )}
                      onClick={() => setActiveSection(section.id)}
                    >
                      {section.label}
                    </div>
                  </div>
                ))}
              </nav>
            </div>
          </div>
          {/* Content Section */}
          <div className="flex flex-col justify-center  w-full lg:w-1/2 gap-y-28 sm:mt-0">
            {activeSection === "loads" ? (
              <section className="flex flex-col justify-center items-center gap-2 sm:gap-10">
                <Image
                  src={AllImages.fordriver}
                  alt="connect"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className=" md:-top-[10%] lg:-top-[20%]"
                />
                <p className="text-md leading-7 mt-2 sm:mt-0 sm:text-lg md:text-xl lg:text-2xl w-full text-center">
                  Select loads based on their availability, ensuring flexibility
                  and control over your schedule. Prioritize options that align
                  with your time and capacity
                </p>
              </section>
            ) : activeSection === "Scheduling" ? (
              <section className="flex flex-col justify-center items-center gap-2 sm:gap-10">
                <Image
                  src={AllImages.howDriversWork2}
                  alt="connect"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-2/3"
                />
                <p className="text-xs sm:text-lg md:text-xl lg:text-2xl w-full text-center">
                  Flexible load scheduling allows you to choose shipments that
                  fit your availability, giving you more control over your
                  work-life balance.
                </p>
              </section>
            ) : (
              <section className="flex flex-col justify-center items-center gap-2 sm:gap-10">
                <Image
                  src={AllImages.howDriversWork3}
                  alt="connect"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-2/3"
                />
                <p className="text-xs sm:text-lg md:text-xl lg:text-2xl w-full text-center">
                  Maintain strong shipper connections to ensure smooth
                  communication, reliable partnerships, and consistent load
                  opportunities effortlessly.
                </p>
              </section>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
