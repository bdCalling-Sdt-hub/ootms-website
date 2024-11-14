"use client";
import { Card } from "antd";
import "antd/dist/reset.css"; // Ant Design reset stylesheet
import Image from "next/image";
import { AllImages } from "../../../public/assets/AllImages";
import Container from "../ui/Container";

export default function WhyOOTMS() {
  return (
    // main div with gradient background
    <div className="relative  bg-gradient-to-r from-gray-200 via-white to-gray-100  py-10 sm:py-20 ">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          {" "}
          {/* Section Title */}
          <div className="text-center">
            <h2 className="text-xl sm:text-3xl lg:text-7xl font-semibold text-[#2B4257]">
              WHY OOTMS?
            </h2>
            <p className="text-sm sm:text-xl lg:text-2xl lg:-mt-6">
              Stay Connected with Drivers and Customers.
            </p>
          </div>
          {/* Feature Cards */}
          <div className="">
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <div className="flex flex-col gap-3 sm:gap-8 lg:w-3/4">
                {/* Card 1 */}
                <div className="w-full  mx-auto">
                  <Card className="shadow-lg h-full transform transition duration-300 hover:scale-110 bg-gray-50">
                    <div className="flex flex-col items-center text-center">
                      <div className="rounded-full bg-white p-4 shadow-2xl">
                        <Image src={AllImages.tab} className="size-12" />
                      </div>
                      <h3 className="text-xl font-semibold my-2">
                        Find booking
                      </h3>
                      <p className="text-gray-500">
                        Easily find and secure bookings quickly with our
                        user-friendly search platform.
                      </p>
                    </div>
                  </Card>
                </div>

                {/* Card 2 */}
                <div className="w-full mx-auto">
                  <Card className="shadow-lg h-full transform transition duration-300 hover:scale-110 bg-gray-50">
                    <div className="flex flex-col items-center text-center">
                      <div className="rounded-full bg-white p-4 shadow-2xl">
                        <Image src={AllImages.guard} className="size-12" />
                      </div>
                      <h3 className="text-xl font-semibold my-2">
                        Secured delivery
                      </h3>
                      <p className="text-gray-500">
                        Ensure safe and timely delivery with our reliable and
                        secure transport services.
                      </p>
                    </div>
                  </Card>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:gap-8 lg:w-3/4">
                {/* Card 3 */}
                <div className="w-full mx-auto">
                  <Card className="shadow-lg h-full transform transition duration-300 hover:scale-110 bg-gray-50">
                    <div className="flex flex-col items-center text-center">
                      <div className="rounded-full bg-white p-4 shadow-2xl">
                        <Image src={AllImages.security} className="size-12" />
                      </div>
                      <h3 className="text-xl font-semibold my-2">Best rate</h3>
                      <p className="text-gray-500">
                        Get the best rate available with our competitive and
                        transparent pricing options.
                      </p>
                    </div>
                  </Card>
                </div>

                {/* Card 4 */}
                <div className="w-full mx-auto ">
                  <Card className="shadow-lg h-full transform transition duration-300 hover:scale-110 bg-gray-50">
                    <div className="flex flex-col items-center text-center">
                      <div className="rounded-full bg-white p-4 shadow-2xl">
                        <Image src={AllImages.tab} className="size-12" />
                      </div>
                      <h3 className="text-xl font-semibold my-2">
                        Verified drivers
                      </h3>
                      <p className="text-gray-500">
                        Connect with reliable, verified drivers for safe and
                        efficient transportation every time.
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative Image */}
          <Image
            alt="Decorative Image"
            src={AllImages.ornament}
            width={0}
            height={0}
            className="absolute left-0 -bottom-5 sm:bottom-0 size-14 sm:size-20"
          />
        </div>
      </Container>
    </div>
  );
}
