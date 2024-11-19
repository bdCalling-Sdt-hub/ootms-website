// / eslint-disable react/no-unescaped-entities /
"use client";
import classNames from "classnames";
import { useEffect, useState } from "react";
// import Container from "../ui/Container";
import Image from "next/image";

// import SectionHeader from "../ui/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import HeaderImage from "@/components/About_App/HeaderImage";
import Container from "@/components/ui/Container";
import { Autoplay, EffectFade } from "swiper/modules";
import { AllImages, userGuide } from "../../../../public/assets/AllImages";

const sections = [
  { id: "register", label: "Register" },
  { id: "bookAppointment", label: "Live Tracking" },
  { id: "bookManagement", label: "Information form" },
  { id: "payment", label: "Subscription" },
];

const registerSliderImages = [
  { img: userGuide.register1 },
  { img: userGuide.register2 },
  { img: userGuide.register3 },
  { img: userGuide.register4 },
  { img: userGuide.register5 },
  { img: userGuide.register6 },

  // { img: userGuide.register2 },
  // { img: userGuide.register3 },
  // { img: userGuide.register4 },
  // { img: userGuide.register5 },
  // { img: userGuide.register6 },
];

// const bookAppointmentSliderImages = [
//   { img: userGuide.bookAppointment1 },
//   { img: userGuide.bookAppointment2 },
//   { img: userGuide.bookAppointment3 },
//   { img: userGuide.bookAppointment4 },
//   { img: userGuide.bookAppointment5 },
//   { img: userGuide.bookAppointment6 },
//   { img: userGuide.bookAppointment7 },
//   { img: userGuide.bookAppointment8 },
// ];
// const bookManagementSliderImages = [
//   { img: userGuide.bookManagement1 },
//   { img: userGuide.bookManagement2 },
//   { img: userGuide.bookManagement3 },
//   { img: userGuide.bookManagement4 },
//   { img: userGuide.bookManagement5 },
//   { img: userGuide.bookManagement6 },
// ];

// const paymentSliderImages = [
//   { img: userGuide.payment1 },
//   { img: userGuide.payment2 },
//   { img: userGuide.payment3 },
//   { img: userGuide.payment4 },
// ];

// const practiceBroadcastStorySliderImages = [
//   { img: userGuide.useGuideBroadcastStory },
//   { img: userGuide.useGuideBroadcastStory },
//   { img: userGuide.useGuideBroadcastStory },
//   { img: userGuide.useGuideBroadcastStory },
// ];

const AboutApp = () => {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);

          // Update the URL without reloading the page
          window.history.pushState(null, "", `#${sectionId}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null, // default to viewport
      threshold: 0.6, // Adjusted to ensure enough of the section is visible
    });

    // Observe each section element
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    // Cleanup observer when the component is unmounted
    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);
  return (
    <>
      <HeaderImage />
      <section className="text-base-color bg-transparent my-20">
        <Container>
          <div className="mt-16">
            <h3 className="text-center text-3xl sm:text-4xl lg:text-5xl font-semibold  text-base-color mb-10">
              <span className="text-[#2B4257]"> User Flow</span>
            </h3>
          </div>

          <div className="flex flex-col lg:flex-row relative  ">
            <div className="flex-shrink-0 lg:w-1/5 py-5 ">
              <nav className="space-y-4 sticky lg:top-52 lg:mt-10 lg:mb-60 border-l border-section-color py-8">
                {sections.map((section) => (
                  <div
                    className="-ml-[6px]  flex items-center"
                    key={section.id}
                  >
                    <span
                      className={classNames(
                        "h-3 w-3 rounded-full bg-[#f13939]",
                        activeSection === section.id ? "block" : "hidden"
                      )}
                    ></span>
                    <a
                      href={`#${section.id}`}
                      className={classNames(
                        "block text-lg font-semibold ps-10",
                        activeSection === section.id
                          ? "text-[#2B4257] ps-8 transition ease-in-out "
                          : "text-base-color"
                      )}
                    >
                      {section.label}
                    </a>
                  </div>
                ))}
              </nav>
            </div>
            <div className="text-base-color flex-grow flex flex-col w-full gap-y-28 mt-16 lg:mt-0">
              {/* {/ Register  /} */}
              <section
                id="register"
                className="w-full flex flex-col justify-center items-center gap-10  py-10"
              >
                <div
                  className="relative h-[520px] w-[250px] sm:w-[300px] sm:h-[620px] lg:h-[620px] p-10  flex justify-center items-center overflow-hidden gap-0 select-none"
                  style={{
                    backgroundImage: `url(${userGuide.casing.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <Swiper
                    spaceBetween={0}
                    draggable={false}
                    effect={"fade"}
                    loop
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    modules={[EffectFade, Autoplay]}
                    className="mySwiper absolute sm:top-[15px] sm:left-[12px] h-[96%] w-[93%] sm:h-[95%] sm:w-[92%] rounded-[36px] sm:rounded-[40px] bg-[#FAFAFA]"
                  >
                    {registerSliderImages.map((img, i) => (
                      <SwiperSlide
                        // className="w-full flex justify-center items-center gap-0"
                        key={i}
                      >
                        <Image
                          src={img.img}
                          alt="userGuideRegister"
                          width={0}
                          height={0}
                          sizes="100vw"
                          className="h-full w-full"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* <p className="md:text-xl w-full md:w-[80%] lg:w-[70%] text-center">
                  Welcome to Photo Op! Booking a photographer has never been
                  easier. Whether it’s a wedding, birthday, corporate event, or
                  portrait session, we’ve got you covered. Simply select your
                  date and time, browse our list of talented Snappers and view
                  their portfolios, then confirm your details in just a few
                  clicks. Managing your appointments is easy too — reschedule or
                  cancel whenever you need. Plus, secure payment options ensure
                  a worry-free experience. Join us at Photo Op and capture
                  life’s special moments with ease and professionalism!
                </p> */}
              </section>

              {/* {/ mobile map  /} */}
              <section
                id="bookAppointment"
                className="w-full flex flex-col justify-center items-center gap-10 -mt-40 py-10"
              >
                <div>
                  <Image
                    src={AllImages.mobileMap}
                    alt="mobileMap"
                    width={600}
                    height={600}
                    priority
                  />
                </div>

                {/* <p className="md:text-xl w-full md:w-[80%] lg:w-[70%] text-center">
                  Welcome to Photo Op! Booking a Snapper session has never been
                  easier. Whether it’s a wedding, birthday, corporate event, or
                  portrait session, we’ve got you covered. Simply select your
                  date and time, browse our list of talented Snappers and view
                  their portfolios, then confirm your details in just a few
                  clicks. Managing your appointments is instant too — reschedule
                  or cancel whenever you need. Plus, secure payment options
                  ensure a worry-free experience. Join us at Photo Op and
                  capture life’s special moments with ease and confidence!
                </p> */}
              </section>

              {/* {/ information  /} */}
              <section
                id="bookManagement"
                className="w-full flex flex-col justify-center items-center gap-10 -mt-24 py-10"
              >
                <div>
                  <Image
                    src={AllImages.information}
                    alt="mobileMap"
                    width={600}
                    height={600}
                    priority
                  />
                </div>

                <p className="md:text-lg w-full md:w-[80%] lg:w-[70%] text-center">
                  Share your cherished memories with the world by uploading your
                  story. Whether it&apos;s a heartfelt tribute or a special
                  moment, let your words and photos preserve the memories that
                  matter most to you.
                </p>
              </section>

              {/* {/ subscriptons   /} */}
              <section
                id="payment"
                className="w-full flex flex-col justify-center items-center gap-10 -mt-24 py-10"
              >
                <div>
                  <Image
                    src={AllImages.subscription}
                    alt="mobileMap"
                    width={600}
                    height={600}
                    priority
                  />
                </div>

                <p className="md:text-lg w-full md:w-[80%] lg:w-[70%] text-center">
                  Subscribe to our app for seamless access to the best loads
                  tailored for professional truck drivers. Enjoy real-time
                  updates, easy navigation, and priority access to high-paying
                  jobs. Maximize your earnings and reduce downtime with our
                  premium subscription service.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default AboutApp;
