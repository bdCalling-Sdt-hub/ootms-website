/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import Container from "../ui/Container";
import { AllImages } from "../../../public/assets/AllImages";
import { FaStar } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import TestimonialCard from "../ui/Testimonial/TestimonialCard";

const testimonials = [
  {
    id: 1,
    image: AllImages.testimonia1,
    name: "Maria S.",
    role: "User",
    message:
      "OOTMS made home shifting hassle free. Their workers carried every piece of furniture very carefully.",
  },
  {
    id: 2,
    image: AllImages.testimonia2,
    name: "Anne L.",
    role: "Driver",
    message:
      "Clinivea's representatives have bridged the gap between my instructions and patient understanding, improving treatment outcomes significantly",
  },
  {
    id: 3,
    image: AllImages.testimonia3,
    name: "John D",
    role: "Driver",
    message:
      "Thanks to my MedicoVigilance Representative, I finally understand my treatment options and feel in control of my health. Clinivea has transformed my approach to healthcare.",
  },
  {
    id: 4,
    image: AllImages.testimonia4,
    name: "Emily R.",
    role: "User",
    message:
      "Working with Clinivea MVRs has made patient follow-ups more effective. They ensure that treatment plans are understood and adhered to, which makes a huge difference.",
  },
];

const Testimonial = () => {
  return (
    <div className="py-8 sm:py-20 select-none">
      <div>
        <h1 className="text-xl sm:text-4xl lg:text-5xl font-bold text-[#2B4257] text-center sm:mb-16">
          Our Customers’ Saying
        </h1>
      </div>
      <Container>
        <div className="relative">
          <div className="hidden lg:block w-full lg:w-1/5 min-h-[687px] bg-[#2B4257]"></div>
          <div className="w-full lg:w-[95%] mx-auto block lg:absolute lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] lg:max-h-[450px]">
            <Swiper
              slidesPerView={1}
              effect={"fade"}
              loop={true}
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 1,
                },
              }}
              modules={[EffectFade, Navigation]}
              className="mySwiper px-5 md:px-10"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.id}>
                  <TestimonialCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Custom Navigation Buttons */}
            <div className="custom-prev absolute top-[50%] left-4 z-10 cursor-pointer text-white text-2xl bg-[#005194] rounded py-1 px-2 -ml-3 md:ml-0">
              <GoArrowLeft />
            </div>
            <div className="custom-next absolute top-[50%] right-4 z-10 cursor-pointer text-white text-2xl bg-[#005194] rounded py-1 px-2 -mr-3 md:mr-0">
              <GoArrowRight />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
