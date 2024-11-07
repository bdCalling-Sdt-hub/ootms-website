"use client";
import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import { AllImages } from "../../../public/assets/AllImages";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { buttonVariants } from "@/lib/variants";
import Link from "next/link";
import { Button } from "antd";
import { CiMobile2 } from "react-icons/ci";

export default function Banner() {
  return (
    <div className="relative">
      <Image
        src={AllImages.banner}
        alt="banner-image"
        // fill
        style={{ objectFit: "cover" }}
        className="absolute mix-blend-overlay h-[400px] sm:w-full sm:h-full"
      />
      <div className="relative z-10 -bottom-32 sm:-bottom-28 text-white flex flex-col sm:justify-end items-start h-full pt-48 sm:pt-[450px] mx-2 sm:mx-10 sm:pb-10 sm:pl-16 xl:pl-64 w-3/5">
        <p className="text-xs sm:text-xl lg:text-3xl xl:text-6xl font-medium text-white">
          Track Your Freight with Real-Time Location Updates
        </p>
      </div>

      <Link
        href="/user-guide"
        className="flex justify-end pr-2 md:pr-20 xl:pr-64 pb-5 sm:pb-20 pt-28 sm:pt-0"
      >
        <Button className="bg-[#2B4257] text-white font-bold text-xs sm:text-lg sm:px-4 sm:py-5 rounded-md border-none">
          <CiMobile2 />
          Download App
        </Button>
      </Link>
    </div>
  );
}
