import { Button } from "antd";
import Image from "next/image";
import { IoMdRadioButtonOn } from "react-icons/io";
import { allIcons, AllImages } from "../../../public/assets/AllImages";
import Container from "../ui/Container";

const points = [
  "Seamlessly transfer from the computer to mobile and never miss another load",
  "Your real-time visibility for shippers and consignees, no calls, not distractions.",
  "Highly secure app and we ONLY pull location information nothing on your phone is compromised",
  "Manage, optimize & on our highly secure site to reduce transport cost, back-haul and idle time",
  "Powering Your Drive with Real-Time Insights.",
  "Empowering Drivers with Smart Logistics.",
];

const GetTheApp = () => {
  return (
    <section className="bg-white pb-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5">
          <div className="flex flex-col  pt-0">
            <div className="text-start ml-2 ">
              {/* Title */}
              <h1 className="sm:text-2xl lg:text-3xl xl:text-5xl font-bold text-start mb-4 text-[#2B4257]">
                Get the most of OOTMS with our mobile app
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base text-start text-gray-500 mb-8 max-w-lg">
                Download the OOTMS mobile app for one-touch access to your load
                shifting experience with the OOTMS mobile app. You’ll get access
                to special features and exclusive offers.
              </p>
            </div>

            <div>
              {/* Image and Text Section */}
              <div className="flex flex-col lg:flex-row items-start lg:space-x-16 sm:ml-10">
                {/* Left Column (Placeholder icons) */}
                <div className="flex flex-col w-full">
                  <ul className="">
                    {points.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-1 mb-2 text-sm"
                        // style={{
                        //   display: "flex",
                        //   alignItems: "center",
                        //   marginBottom: "6px",
                        //   gap: "5px",
                        // }}
                      >
                        <IoMdRadioButtonOn
                          style={{
                            color: "#013564",
                            marginRight: "8px",
                            fontSize: "16px",
                          }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                  {/* Buttons for App Store Links */}
                  <div className="sm:mt-8 flex flex-col sm:flex-row gap-2 sm:gap-3 xl:gap-5 ">
                    <Button
                      type="primary"
                      className="flex items-center bg-black h-14 gap-4 px-5"
                    >
                      <Image alt="play-store" src={allIcons.playstore} />
                      <div className="flex flex-col text-start mt-5">
                        <p className="text-xs">Get it on</p>
                        <p className="text-sm sm:text-xl -mt-4">Google Play</p>
                      </div>
                    </Button>
                    <Button
                      type="primary"
                      className="flex items-center bg-black h-14 gap-4 px-5"
                    >
                      <Image alt="apple-store" src={allIcons.appleStore} />
                      <div className="flex flex-col text-start mt-5">
                        <p className="text-xs">Download on the</p>
                        <p className="text-sm sm:text-xl -mt-4">Apple Store</p>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* Right Column (Phones Image) */}
          <div className="">
            <Image
              src={AllImages.iPhone}
              alt="Mobile phones displaying the app"
              className="w-full h-full sm:w-auto mx-auto lg:w-full sm:h-[500px] lg:h-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GetTheApp;
