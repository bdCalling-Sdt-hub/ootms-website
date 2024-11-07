"use client";
import Container from "@/components/ui/Container";
import Image from "next/image";
import React, { useRef } from "react";

import { FaArrowRight } from "react-icons/fa6";
import { allIcons } from "../../../public/assets/AllImages";

import { motion, useInView } from "framer-motion";
import { buttonVariants } from "@/lib/variants";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
      staggerChildren: 0.5,
      delayChildren: 0.4,
    },
  },
};

const introChildren = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, type: "spring", bounce: 0.4 },
  },
};
const GetMvr = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView && { opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="py-10 overflow-hidden my-10 lg:my-20"
    >
      <Container>
        <div className="relative">
          <div className="hidden lg:grid grid-cols-2 min-h-[750px]">
            <div className="hidden lg:grid"></div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, staggerChildren: 0.5 }}
              className="bg-[#E5ECF1] w-full hidden lg:grid"
            ></motion.div>
          </div>
          <div className="lg:absolute top-0 left-0 w-full h-full flex items-center z-10">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: -200 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                  type: "spring",
                  bounce: 0.4,
                  duration: 2,
                }}
                className="text-3xl lg:text-4xl xl:text-5xl font-bold text-secondary-color mb-10"
              >
                How MVR Will Helps You.
              </motion.h1>
              <motion.div
                variants={intro}
                initial="hidden"
                animate={isInView ? "visible" : ""}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:w-[95%]"
              >
                <motion.div
                  variants={introChildren}
                  className="p-8 bg-[#181818]"
                >
                  <div className="p-4 rounded-full bg-secondary-color w-fit mb-12">
                    <Image
                      src={allIcons.book}
                      alt="banner_image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-8 h-8"
                    />
                  </div>
                  <p className="text-[#EDE9E9] text-lg mb-10">
                    MVRs enhance communication between patients and healthcare
                    providers.
                  </p>
                  <p className="text-[#EDE9E9] mb-10">
                    They prepare patients before their appointment by gathering
                    information and organizing questions.
                  </p>
                </motion.div>
                <motion.div
                  variants={introChildren}
                  className="p-8 bg-[#181818]"
                >
                  <div className="p-4 rounded-full bg-secondary-color w-fit mb-12">
                    <Image
                      src={allIcons.laptop}
                      alt="banner_image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-8 h-8"
                    />
                  </div>
                  <p className="text-[#EDE9E9] text-lg mb-10">
                    MVRs assist patients during consultations by advocating for
                    their needs.
                  </p>
                  <p className="text-[#EDE9E9] mb-10">
                    They help simplify complex medical information and ensure
                    the patient understands their treatment plan.
                  </p>
                </motion.div>
                <motion.div
                  variants={introChildren}
                  className="p-8 bg-[#181818]"
                >
                  <div className="p-4 rounded-full bg-secondary-color w-fit mb-12">
                    <Image
                      src={allIcons.communiaction}
                      alt="banner_image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-8 h-8"
                    />
                  </div>
                  <p className="text-[#EDE9E9] text-lg mb-10">
                    MVRs summarize the consultation, manage ongoing
                    communications, and maintain a consistent dialogue.
                  </p>
                  <p className="text-[#EDE9E9] mb-10">
                    This ensures personalized, effective healthcare management
                    for the patient.
                  </p>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  type: "spring",
                  bounce: 0.5,
                  duration: 3,
                  delay: 0.7,
                }}
              >
                <motion.button
                  variants={buttonVariants}
                  initial="initial"
                  whileHover={"hover"}
                  whileTap="tap"
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 7,
                  }}
                  type="primary"
                  className="flex justify-center items-center bg-secondary-color text-white mt-10 font-semibold px-16 py-3 text-lg sm:text-xl lg:text-2xl xl:text-3xl rounded-xl"
                >
                  Get An MVR
                  <FaArrowRight className="text-lg sm:text-xl lg:text-3xl ml-3 mt-1" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default GetMvr;
