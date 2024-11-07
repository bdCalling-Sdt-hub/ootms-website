"use client";
import Image from "next/image";
import classNames from "classnames";
import React, { useState } from "react";
import { FaUserInjured } from "react-icons/fa";
import { AllImages } from "../../../public/assets/AllImages";

export default function HowDriversWork() {
  const [activeSection, setActiveSection] = useState("loads");
  const sections = [
    { id: "loads", label: "Choose loads by availability" },
    { id: "Scheduling", label: "Flexible Load Scheduling" },
    {
      id: "Shipper",
      label: "Maintain Shipper Connections",
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row-reverse justify-between relative bg-[#f3f5fd] mb-16 sm:px-20 py-5">
      <div
        className="flex gap-2 absolute sm:w-48 xl:w-56 right-2 lg:right-10 xl:right-40
       xl:top-10 bg-[#2B4257] text-white py-2 sm:py-3 rounded-lg h-8
        sm:h-14 px-5 sm:text-2xl xl:text-3xl"
      >
        <FaUserInjured />
        <p>For Driver</p>
      </div>
      {/* Navigation */}
      <div className="flex justify-center items-center py-12 sm:py-20 lg:py-5 w-full lg:w-1/2">
        <nav className="border-l border-[#2A4094]">
          {sections.map((section) => (
            <div className="-ml-[6px] flex mb-5 items-center" key={section.id}>
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
        {activeSection === "loads" ? (
          <section className="flex flex-col justify-center items-center gap-2 sm:gap-10">
            <Image
              src={AllImages.howDriversWork1}
              alt="connect"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-2/3"
            />
            <p className="text-xs sm:text-lg md:text-xl lg:text-2xl w-full text-center">
              Select loads based on their availability, ensuring flexibility and
              control over your schedule. Prioritize options that align with
              your time and capacity
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
              Flexible load scheduling allows you to choose shipments that fit
              your availability, giving you more control over your work-life
              balance.
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
  );
}
