/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { AllImages } from "../../../public/assets/AllImages";
import Container from "@/components/ui/Container";
import { Button } from "antd";
import { motion, useInView } from "framer-motion";
import { buttonVariants } from "@/lib/variants";
import { useRef } from "react";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 3,
      delay: 0.2,
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const introChildren = {
  hidden: { opacity: 0, y: -500 },
  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 1,
      type: "spring",
      bounce: 0.3,
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};
const introSubChildren = {
  hidden: { opacity: 0, y: -300 },
  visible: {
    opacity: 1,
    y: 0,

    transition: { duration: 1, type: "spring", stiffness: 120 },
  },
};

const CliniveaPayComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView && { opacity: 1 }}
      transition={{ duration: 0.1 }}
      className=" py-10 mb-10 lg:mb-20 overflow-hidden"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-7">
          <div className="order-last lg:order-first">
            <motion.div
              initial={{ opacity: 0, y: -200 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ bounce: 0.4, duration: 2, delay: 0.2 }}
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">
                Introducing Clinivea Pay: Make Healthcare More Rewarding.
              </h2>
              <p className="mb-6 md:text-lg text-justify">
                Earn rewards on every healthcare payment and use them to reduce
                future expenses, all while managing your healthcare spending
                with ease. With every transaction, you'll accumulate points that
                can be redeemed for future services, making your medical journey
                more affordable. Clinivea Pay simplifies the payment process
                through its user-friendly digital wallet, allowing you to track
                spending, view rewards, and stay in control of your finances,
                ensuring transparency and peace of mind. Experience a smarter,
                more rewarding way to manage healthcare costs effortlessly.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                type: "spring",
                bounce: 0.4,
                duration: 3,
                delay: 0.8,
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
                className="bg-red-500 text-[#FDFDFD] px-8 rounded-xl hover:bg-red-600 w-full text-lg sm:text-xl lg:text-2xl xl:text-3xl py-3"
              >
                Start Earning Rewards
              </motion.button>
            </motion.div>
          </div>
          <motion.div
            variants={intro}
            initial="hidden"
            animate={isInView ? "visible" : ""}
            className="grid grid-cols-2 items-center justify-items-center gap-4 w-full"
          >
            <motion.div
              className="w-full max-h-[330px] lg:h-auto"
              variants={introChildren}
            >
              <Image
                src={AllImages.cliniveaPay1}
                alt="Healthcare rewards app"
                width={0}
                height={0}
                className="lg:-mt-40 lg:w-full h-full  max-h-[330px] lg:h-auto"
              />
            </motion.div>

            <motion.div className="w-full " variants={introChildren}>
              <motion.div
                className="w-full max-h-[330px] lg:h-auto"
                variants={introSubChildren}
              >
                <Image
                  src={AllImages.cliniveaPay2}
                  alt="Healthcare spending tracker"
                  width={0}
                  height={0}
                  className="mb-5 lg:w-full h-full  max-h-[330px] lg:h-auto"
                />
              </motion.div>

              <motion.div
                className="w-full max-h-[330px] lg:h-auto"
                variants={introSubChildren}
              >
                <Image
                  src={AllImages.cliniveaPay3}
                  alt="Digital wallet healthcare"
                  width={0}
                  height={0}
                  className=" lg:w-full h-full  max-h-[330px] lg:h-auto"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </motion.div>
  );
};

export default CliniveaPayComponent;
