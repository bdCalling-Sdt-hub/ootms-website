import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoClock } from "react-icons/go";

const BlogCard = ({ item }) => {
  return (
    <div className="bg-white  rounded-lg shadow p-4  hover:shadow-lg transition-shadow duration-300 border border-[#E6E7E6">
      <Image
        src={item.image.src}
        alt="blog_img"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full  rounded-lg"
      />

      <div className="flex items-center text-base-color text-sm mb-3 mt-6">
        <GoClock className="mr-2 text-secondary-color size-5" />
        <span>{item.date}</span>
      </div>

      <p className="text-base-color text-xl mb-4">
        {item.title}
        <Link href="/blogs/64854564231231">
          <span className="text-[#2F87FC] font-semibold hover:underline">
            Read More...
          </span>
        </Link>
      </p>
    </div>
  );
};

export default BlogCard;
