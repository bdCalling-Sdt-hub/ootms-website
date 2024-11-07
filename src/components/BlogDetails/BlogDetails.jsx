import React from "react";
import Container from "../ui/Container";
import Image from "next/image";
import { GoClock } from "react-icons/go";
import { AllBlogs } from "../../../public/assets/AllImages";

const BlogDetails = () => {
  return (
    <div className="py-20 ">
      <Container>
        <div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-color text-center mb-10">
            RECENT BLOG
          </h1>
        </div>
        <div className="rounded-2xl shadow p-4 border border-[#E6E7E6] bg-[#F7F8F8]">
          <Image
            src={AllBlogs.blog1}
            alt="blog_img"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full md:w-[90%] lg:w-full md:mx-auto max-h-[600px]"
          />

          <div className="flex items-center text-base-color  my-10">
            <GoClock className="mr-2 text-secondary-color size-5" />
            <span>June 23; 2024</span>
          </div>

          <p className="text-base-color text-xl sm:text-2xl  lg:text-3xl mb-4">
            Clinivea’s MVR service played a crucial role in Sarah’s healthcare
            journey. It helped her find the right oncologist, ensuring she
            received the specialized care she needed. The service also
            coordinated her appointments, making the process smoother and
            stress-free. Beyond scheduling, Clinivea’s MVR explained every step
            of her treatment plan, providing clarity and peace of mind during a
            challenging time. Thanks to this personalized support, Sarah felt
            confident and well-informed throughout her cancer treatment,
            focusing on her health and recovery.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default BlogDetails;
