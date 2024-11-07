"use client";
import Container from "@/components/ui/Container";
import Image from "next/image";
import React, { useRef } from "react";
import { allIcons, AllImages } from "../../../public/assets/AllImages";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView && { opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="py-10 mb-10 lg:mb-20 overflow-hidden"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            type: "spring",
            bounce: 0.4,
            duration: 3,
            delay: 0.2,
          }}
        >
          <h1 className="text-center text-4xl mb-3">
            Online Advocacy Consultation via
          </h1>
          <h1 className="text-center text-4xl text-secondary-color">
            Video Call with MVR
          </h1>
        </motion.div>
        <div className="mt-16">
          <div className="relative md:w-[80%] lg:w-[90%] mx-auto">
            <div className="flex items-stretch gap-4 md:block">
              <motion.div
                initial={{ opacity: 0, x: -200 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  type: "spring",
                  bounce: 0.4,
                  duration: 3,
                  delay: 0.5,
                }}
                className="md:absolute top-[30%]  md:-left-20 mb-5 md:mb-0 px-3 py-2 bg-[#EAF3FF] rounded-md w-full md:max-w-[180px] min-h-[80px] z-10"
              >
                <div className="flex items-center gap-x-2">
                  <Image
                    src={allIcons.chat}
                    alt="banner_image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-5 h-5"
                  />
                  <p className="text-base-color">Consultant</p>
                </div>
                <p className="text-[#4E4E4E] text-sm">
                  Consultation in Chat is Totally Free.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  type: "spring",
                  bounce: 0.4,
                  duration: 3,
                  delay: 0.5,
                }}
                className="z-10 md:absolute bottom-[30%] md:-right-20 mb-5 md:mb-0 px-3 py-2 bg-[#EAF3FF] rounded-md w-full md:max-w-[180px] min-h-[80px] flex items-center"
              >
                <div className="flex items-center gap-x-2">
                  <Image
                    src={allIcons.phone}
                    alt="banner_image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-5 h-5"
                  />
                  <p className="text-base-color">24/7 Services</p>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                type: "spring",
                bounce: 0.4,
                duration: 3,
                delay: 0.1,
              }}
            >
              <Image
                src={AllImages.aboutVideo}
                alt="banner_image"
                width={0}
                height={0}
                sizes="100vw"
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default About;
