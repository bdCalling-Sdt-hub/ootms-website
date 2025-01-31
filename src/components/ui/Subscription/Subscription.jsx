"use client";
import { useInView } from "framer-motion";
import SubscriptionCard from "./SubscriptionCard";
import { useRef } from "react";
import { useGetSubscriptionsQuery } from "@/redux/api/subscriptionApi";

// const plans = [
//   {
//     _id: "6785f9c9ce3ec2c597564824",
//     name: "Premium Plan",
//     price: 100,
//     duration: 60,
//     expiaryTime: 0,
//     noOfDispathes: 70,
//   },
//   {
//     _id: "6785f9c9ce3ec2c597564825",
//     name: "Premium Plan",
//     price: 100,
//     duration: 60,
//     expiaryTime: 0,
//     noOfDispathes: 70,
//   },
//   {
//     _id: "6785f9c9ce3ec2c597564826",
//     name: "Premium Plan",
//     price: 100,
//     duration: 60,
//     expiaryTime: 0,
//     noOfDispathes: 70,
//   },
//   {
//     _id: "6785f9c9ce3ec2c597564827",
//     name: "Premium Plan",
//     price: 100,
//     duration: 60,
//     expiaryTime: 0,
//     noOfDispathes: 70,
//   },
// ];

const Subscription = () => {
  const { data: plans, isFetching } = useGetSubscriptionsQuery();
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-20"
    >
      {plans?.data?.attributes?.map((plan, index) => {
        const initialMotion =
          index === 0
            ? {
                opacity: 0,
                x: -200,
                transition: {
                  type: "spring",
                  // stiffness: 110,
                  bounce: 0.4,
                  duration: 3,
                  delay: 0.2,
                },
              }
            : {
                opacity: 0,
                x: 200,
                transition: {
                  type: "spring",
                  // stiffness: 110,
                  bounce: 0.4,
                  duration: 3,
                  delay: 0.2,
                },
              };

        const visibleMotion = {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            type: "spring",
            // stiffness: 110,
            bounce: 0.4,
            duration: 3,
            delay: 0.5,
          },
        };

        return (
          <SubscriptionCard
            key={plan?._id}
            plan={plan}
            index={index}
            isInView={isInView}
            initialMotion={initialMotion}
            visibleMotion={visibleMotion}
          />
        );
      })}
    </div>
  );
};

export default Subscription;
