"use client";
import Image from "next/image";
import classNames from "classnames";
import React, { useState } from "react";
import { FaUsers } from "react-icons/fa6";
import { AllImages } from "../../../public/assets/AllImages";

export default function HowUsersWork() {
  const [activeSection, setActiveSection] = useState("Connect");
  const sections = [
    { id: "Connect", label: "Real-time Freight Tracking" },
    { id: "Receive", label: "Choose preferred driver" },
    {
      id: "Manage",
      label: "Engage shippers and receivers seamlessly",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row justify-between relative bg-[#EAECF4] sm:px-20">
      <div
        className="flex gap-2 absolute sm:w-44 xl:w-52 left-2 xl:left-40 xl:top-10
       bg-[#2B4257] text-white py-2 sm:py-3 rounded-lg
        h-8 sm:h-14 px-5 sm:text-2xl xl:text-3xl"
      >
        <FaUsers />
        <p>For User</p>
      </div>
      {/* Navigation */}
      <div className="flex justify-center items-center py-10 sm:py-20 lg:py-5 w-full lg:w-1/2">
        <nav className="border-l border-[#2A4094]">
          {sections.map((section) => (
            <div
              className="-ml-1.5 sm:-ml-[6px] flex mb-5 items-center mt-2"
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
                  "block text-xs sm:text-lg md:text-xl lg:text-2xl font-semibold ps-10 cursor-pointer",
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

      {/* Content Section */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 gap-y-28 sm:mt-0">
        {activeSection === "Connect" ? (
          <section className="flex flex-col justify-center items-center gap-2 sm:gap-10">
            <Image
              src={AllImages.howUserWork1}
              alt="connect"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-2/3"
            />
            <p className="text-xs sm:text-lg md:text-xl lg:text-2xl w-full text-center">
              Experience real-time freight tracking for complete visibility,
              ensuring timely updates and efficient delivery management.
            </p>
          </section>
        ) : activeSection === "Receive" ? (
          <section className="flex flex-col justify-center items-center gap-2 sm:gap-10">
            <Image
              src={AllImages.howUserWork2}
              alt="connect"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-2/3"
            />
            <p className="text-xs sm:text-lg md:text-xl lg:text-2xl w-full text-center">
              Choose a preferred driver for reliable service, ensuring safety,
              professionalism, and timely deliveries every time.
            </p>
          </section>
        ) : (
          <section className="flex flex-col justify-center items-center gap-2 sm:gap-10">
            <Image
              src={AllImages.howUserWork3}
              alt="connect"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-2/3"
            />
            <p className="text-xs sm:text-lg md:text-xl lg:text-2xl w-full text-center">
              Effortlessly engage shippers with our platform, streamlining
              communication and ensuring smooth, hassle-free logistics
              coordination.
            </p>
          </section>
        )}
      </div>
    </div>
  );
}
