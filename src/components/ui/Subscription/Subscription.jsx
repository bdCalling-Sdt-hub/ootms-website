"use client";
import { useInView } from "framer-motion";
import SubscriptionCard from "./SubscriptionCard";
import { useRef } from "react";

const plans = [
  {
    plan: "Free",
    price: "$0",
    features: [
      "Limited Care Coordination",
      "1:1 Audio conference with MVR for general support ",
      "Appointment reminders",
      "Basic insurance assistance",
    ],
    buttonStatus: "Buy Now", // 'active' or 'inactive'
  },
  {
    plan: "Premium",
    price: "$10",
    features: [
      "Personalized Care Coordination",
      "1:1 Video or Audio conference with dedicated MVR",
      "Virtual or In-Person Appointment Attendance",
      "Insurance advocacy & Bill Management and Payment Assistance",
    ],
    buttonStatus: "Get Premium",
  },
];

const Subscription = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-20"
    >
      {plans.map((plan, index) => {
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
            key={index}
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
