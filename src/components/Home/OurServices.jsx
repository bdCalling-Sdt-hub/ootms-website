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
              Drivers and Customers
            </h2>
            <p className="text-sm sm:text-xl lg:text-2xl lg:-mt-6">
              Stay Connected with Drivers and Customers.
            </p>
          </div>
          {/* Feature Cards */}
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 items-stretch justify-items-center gap-8">
              {/* Card 1 */}
              <div className="w-full  mx-auto">
                <Card className="shadow-md h-full transform transition duration-300 hover:scale-105 bg-gray-50">
                  <div className="flex flex-col items-center text-center">
                    <div className="rounded-full bg-white p-4 shadow-2xl">
                      <Image
                        alt="tab"
                        src={AllImages.tab}
                        className="size-12"
                      />
                    </div>
                    <h3 className="text-xl font-semibold my-2">Connect</h3>
                    <p className="text-gray-500">
                      Connect brokers, drivers and customers on a single,
                      automated end-to-end shipment management tool.
                    </p>
                  </div>
                </Card>
              </div>

              {/* Card 2 */}
              <div className="w-full mx-auto">
                <Card className="shadow-md h-full transform transition duration-300 hover:scale-105 bg-gray-50">
                  <div className="flex flex-col items-center text-center">
                    <div className="rounded-full bg-white p-4 shadow-2xl">
                      <Image
                        alt="guard"
                        src={AllImages.guard}
                        className="size-12"
                      />
                    </div>
                    <h3 className="text-xl font-semibold my-2">
                      Real-time visibility for drivers
                    </h3>
                    <p className="text-gray-500">
                      Real-time visibility for drivers, brokers and customers,
                      no calls, no distractions. Drive, track and deliver all in
                      one app
                    </p>
                  </div>
                </Card>
              </div>

              {/* Card 3 */}
              <div className="w-full mx-auto">
                <Card className="shadow-md h-full transform transition duration-300 hover:scale-105 bg-gray-50">
                  <div className="flex flex-col items-center text-center">
                    <div className="rounded-full bg-white p-4 shadow-2xl">
                      <Image
                        alt="security"
                        src={AllImages.hands}
                        className="size-12"
                      />
                    </div>
                    <h3 className="text-xl font-semibold my-2">
                      Manage from Anywhere
                    </h3>
                    <p className="text-gray-500">
                      Manage transportation operations with a comprehensive
                      dashboards and seamlessly “manage at the office” or “on
                      the go.”
                    </p>
                  </div>
                </Card>
              </div>

              {/* Card 4 */}
              <div className="w-full mx-auto ">
                <Card className="shadow-md h-full transform transition duration-300 hover:scale-105 bg-gray-50">
                  <div className="flex flex-col items-center text-center">
                    <div className="rounded-full bg-white p-4 shadow-2xl">
                      <Image
                        alt="tab"
                        src={AllImages.security}
                        className="size-12"
                      />
                    </div>
                    <h3 className="text-xl font-semibold my-2">
                      Industry leading management tool
                    </h3>
                    <p className="text-gray-500">
                      Provide industry-leading real-time shipment visibility
                      utilizing OOTMS dashboard, mobile apps, and API
                      integrations.
                    </p>
                  </div>
                </Card>
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
