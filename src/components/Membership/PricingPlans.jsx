"use client";
import React from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { GoCheck } from "react-icons/go";
import { buttonVariants } from "@/lib/variants";

const Plans = [
  "Care Coordination",
  "Audio/Video Conference with MVR",
  "Appointment Reminders",
  "Post-Appointment Follow-Up",
  "Insurance Assistance",
  "Access to Online Health Portal",
  "Clinivea Pay Rewards",
  "Personalized Healthcare Navigation and Advocacy",
  "Video Conference with MVR",
  "Virtual/In-Person Appointment Attendance",
  "Healthcare Concierge Services",
  "Appointment Scheduling and Management",
  "Treatment and Medication Guidance",
  "Insurance Advocacy & Bill Management",
  "Proactive Health Monitoring and Reporting",
  "Health & Wellness Plans",
  "Second Opinion & Specialist Coordination",
  "Advance Care Planning",
  "Transportation and Accessibility Assistance",
];

const PricingPlans = () => {
  return (
    <div className="p-5">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 items-stretch gap-10">
        <div className="flex flex-col md:col-span-2 lg:col-span-1">
          <div
            className=" h-[200px] flex flex-col justify-center items-center mb-5  bg-white border border-[#CBCEEA] rounded-2xl"
            style={{ boxShadow: "0px 0px 5px 2px #00000040" }}
          >
            <h1 className="text-secondary-color text-xl sm:text-2xl lg:text-3xl font-bold text-center px-5">
              Choose the Right Plan for Your Healthcare Needs
            </h1>
          </div>
          <ul
            style={{ boxShadow: "0px 0px 5px 2px #00000040" }}
            className="w-full flex flex-col justify-between items-center h-full space-y-3 text-lg px-5 pt-5 bg-white border border-[#CBCEEA] rounded-2xl "
          >
            {Plans.map((plan, index) => (
              <li
                key={index}
                className="w-full border-b border-[#DFDFDF] py-2 font-bold h-16 flex justify-center items- flex-col overflow-hidden"
              >
                {plan}
              </li>
            ))}
          </ul>
        </div>
        <div
          style={{ boxShadow: "0px 0px 5px 2px #00000040" }}
          className="flex flex-col md:col-span-2 lg:col-span-1 bg-[#FEEBEA87] border border-[#CBCEEA] rounded-2xl "
        >
          <div className="text-center h-[200px] flex flex-col justify-center items-center mb-5">
            <h2 className="text-3xl mb-2 font-bold">Free</h2>
            <div className="flex  gap-2 justify-center items-center">
              <p className="text-4xl font-bold ">$00</p>
              <p className="text-lg">/month</p>
            </div>
            <motion.button
              variants={buttonVariants}
              initial="initial"
              whileTap="tap"
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 7,
              }}
              className="bg-transparent border-2 border-secondary-color text-xl text-secondary-color font-semibold px-5 py-3 rounded-lg mt-3 w-[90%] mx-auto"
            >
              Join For Free
            </motion.button>
          </div>
          <ul className="w-full flex flex-col justify-between items-center h-full space-y-3 text-lg px-5 pt-5 text-gray-700">
            <li className=" font-bold border-b border-[#E2E4FB] h-16 py-2 w-full text-center">
              Limited
            </li>
            <li className=" font-bold border-b border-[#E2E4FB] h-16 py-2 w-full text-center">
              1:1 Audio conference for general support
            </li>
            <li className=" font-bold border-b border-[#E2E4FB] h-16 py-2 w-full text-center">
              Included
            </li>
            <li className=" font-bold border-b border-[#E2E4FB] h-16 py-2 w-full text-center">
              Limited
            </li>
            <li className=" font-bold border-b border-[#E2E4FB] h-16 py-2 w-full text-center">
              Basic
            </li>
            <li className="flex items-center justify-center font-bold border-b border-[#E2E4FB] h-16 py-2 w-full text-center">
              <div className="w-fit p-2 bg-[#EBECFC] rounded-full">
                <GoCheck className="text-[#6A26FF] font-bold size-5 " />
              </div>
            </li>
            <li className="flex items-center justify-center font-bold border-b border-[#E2E4FB] h-16 py-2 w-full text-center">
              Limited Rewards
            </li>
            <li className="flex items-center justify-center font-bold border-b border-[#E2E4FB] h-16 py-2 w-full text-center">
              Not Included
            </li>
            {Array.from({ length: 11 }).map((_, index) => (
              <li
                key={index}
                className="flex items-center justify-center font-bold border-b border-[#E2E4FB] h-16 py-2 w-full text-center"
              >
                <div className="w-fit p-2 bg-[#EBECFC] rounded-full">
                  <IoMdClose className="text-[#606060] font-bold size-5 " />
                </div>
              </li>
            ))}
            {/* Repeat similar structure for other features */}
          </ul>
        </div>
        <div
          style={{ boxShadow: "0px 0px 5px 2px #00000040" }}
          className="flex flex-col md:col-start-2 md:col-span-2 lg:col-span-1 bg-[#FEEBEA] border border-[#CBCEEA] rounded-2xl "
        >
          <div className="text-center h-[200px] flex flex-col justify-center items-center mb-5">
            <h2 className="text-3xl mb-2 font-bold">Premium</h2>
            <div className="flex gap-2 justify-center items-center">
              <p className="text-4xl font-bold ">$10</p>
              <p className="text-lg">/month</p>
            </div>
            <motion.button
              variants={buttonVariants}
              initial="initial"
              whileTap="tap"
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 7,
              }}
              className="bg-red-500 border-2 border-secondary-color text-xl text-white font-semibold px-5 py-3 rounded-lg mt-3 w-[90%] mx-auto"
            >
              Get Premium
            </motion.button>
          </div>
          <ul className="w-full flex flex-col justify-between items-center h-full space-y-3 text-lg px-5 pt-5 text-gray-700">
            <li className=" font-bold border-b border-[#E2E4FB] h-16 py-2 w-full text-center">
              Comprehensive
            </li>
            <li className=" font-bold border-b border-[#E2E4FB] h-16 py-2 w-full text-center">
              1:1 Video or Audio conference with dedicated MVR
            </li>
            <li className=" font-bold border-b border-[#E2E4FB] h-16 py-2 w-full text-center">
              Included
            </li>
            <li className=" font-bold border-b border-[#E2E4FB] h-16 py-2 w-full text-center">
              Comprehensive
            </li>
            <li className=" font-bold border-b border-[#E2E4FB] h-16 py-2 w-full text-center">
              Comprehensive
            </li>
            <li className="flex items-center justify-center font-bold border-b border-[#E2E4FB] h-16 py-2 w-full text-center">
              <div className="w-fit p-2 bg-[#EBECFC] rounded-full">
                <GoCheck className="text-[#6A26FF] font-bold size-5 " />
              </div>
            </li>
            <li className="flex items-center justify-center font-bold border-b border-[#E2E4FB] h-16 py-2 w-full text-center">
              Enhanced Rewards
            </li>
            <li className="flex items-center justify-center font-bold border-b border-[#E2E4FB] h-16 py-2 w-full text-center">
              Included
            </li>
            {Array.from({ length: 11 }).map((_, index) => (
              <li
                key={index}
                className="flex items-center justify-center font-bold border-b border-[#E2E4FB] h-16 py-2 w-full text-center"
              >
                <div className="w-fit p-2 bg-[#EBECFC] rounded-full">
                  <GoCheck className="text-[#6A26FF] font-bold size-5 " />
                </div>
              </li>
            ))}
            {/* Repeat similar structure for other features */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
