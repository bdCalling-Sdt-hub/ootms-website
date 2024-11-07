"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "../ui/Container";
import { buttonVariants } from "@/lib/variants";
import Subscription from "../ui/Subscription/Subscription";
import Link from "next/link";

const SubscriptionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView && { opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="sm:py-16 overflow-hidden my-10 lg:my-20"
    >
      <Container>
        <h1 className="text-center text-2xl sm:text-5xl font-semibold mb-10 text-[#2B4257]">
          Subscriptions
        </h1>
        <div className="">
          <div className="text-center md:text-right mb-10 lg:w-[75%] xl:w-[65%] mx-auto">
            {/* <Link href="/membership">
              <motion.button
                variants={buttonVariants}
                initial="initial"
                whileTap="tap"
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 7,
                }}
                className="py-2 px-6 rounded-2xl text-secondary-color border border-[#E6E7E6]  bg-[#F7F8F8]"
              >
                See more
              </motion.button>
            </Link> */}
          </div>
          <Subscription isInView={isInView} />
        </div>
      </Container>
    </motion.div>
  );
};

export default SubscriptionSection;
