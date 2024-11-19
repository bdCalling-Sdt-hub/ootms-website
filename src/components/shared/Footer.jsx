/* eslint-disable react/no-unescaped-entities */
"use client";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { allIcons, AllImages } from "../../../public/assets/AllImages";

export default function Footer() {
  return (
    <footer className="pt-5 sm:pt-16 pb-5 bg-black text-white sm:px-10 xl:px-72">
      <div className="flex justify-center items-center gap-10 sm:items-start sm:mx-auto mb-12">
        <div className="flex flex-col sm:flex-row gap-5 sm:gap-16 lg:gap-40 xl:gap-64 sm:mt-0">
          <div className="flex flex-col gap-5">
            <p className="text-xl font-bold">Services</p>
            <div className="flex flex-col gap-2">
              <Link href="">Shipping</Link>
              <Link href="">FAQs</Link>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-xl font-bold">Company</p>
            <div className="flex flex-col gap-2">
              <Link href="">Contact Us</Link>
              <Link href="">Live Location</Link>
            </div>
          </div>{" "}
          <div className="flex flex-col gap-5">
            <p className="text-xl font-bold">Legal</p>
            <div className="flex flex-col gap-2">
              <Link href="">About Us</Link>
              <Link href="">Terms & Condition</Link>
              <Link href="">Privacy Policy</Link>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-xl font-bold">Contact Us</p>
            <div className="flex flex-col gap-2">
              <p>adasdi@gmail.com</p>
              <p>12456345</p>
              <div className="flex flex-col gap-6 justify-start mt-6 lg:mt-0">
                <div className="flex space-x-4 mb-4">
                  <div className="p-2 rounded-full bg-[#FEEBEA]">
                    <Link href="#">
                      <Image
                        src={allIcons.insta}
                        alt="play_store"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-[24px] w-[24px]"
                      />
                    </Link>
                  </div>
                  <div className="p-2 rounded-full bg-[#FEEBEA]">
                    <Link href="#">
                      <Image
                        src={allIcons.linkedIn}
                        alt="play_store"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-[24px] w-[24px]"
                      />
                    </Link>
                  </div>
                  <div className="p-2 rounded-full bg-[#FEEBEA]">
                    <Link href="#">
                      <Image
                        src={allIcons.facebook}
                        alt="play_store"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-[24px] w-[24px]"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col sm:flex-row gap-5 sm:gap-16 lg:gap-40 xl:gap-24"></div> */}
      </div>

      <div className="">
        <div className="border-t border-[#2B4257] mt-10"></div>
        <div className="flex flex-col lg:flex-row justify-between items-center mt-10 gap-10 lg:gap-0 mb-10">
          <Image
            src={AllImages.logo}
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            className="w-[120px] md:w-[150px] lg:w-[150px]"
          />
          <div className="sm:mt-8 flex flex-col sm:flex-row gap-1 sm:gap-0 space-x-4">
            <Button
              type="primary"
              className="flex items-center bg-black h-14 gap-4 px-5"
            >
              <Image
                alt="play_store"
                src={allIcons.playstore}
                className="size-8"
              />
              <div className="flex flex-col text-start mt-5">
                <p className="text-xs">Get it on</p>
                <p className="sm:text-xl -mt-4">Google Play</p>
              </div>
            </Button>
            <Button
              type="primary"
              className="flex items-center bg-black h-14 gap-4 px-5"
            >
              <Image alt="apple" src={allIcons.appleStore} className="size-8" />
              <div className="flex flex-col text-start mt-5">
                <p className="text-xs">Download on the</p>
                <p className="sm:text-xl -mt-4">Apple Store</p>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
