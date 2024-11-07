"use client";
import React, { useRef, useState } from "react";
import Container from "../ui/Container";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Accordion from "../ui/Accordion";
import Image from "next/image";
import { AllImages } from "../../../public/assets/AllImages";

const FAQ = () => {
  const generalData = [
    {
      title: "How do I book a truck on your platform?",
      content:
        "Simply enter your pickup and delivery details, choose a truck, select a date, and confirm your booking.",
    },
    {
      title: "What types of trucks are available for booking?",
      content:
        "We offer various trucks such as small pickups, mini trucks, open trucks, container trucks, and heavy-duty vehicles.​",
    },
    {
      title: "Can I track my shipment in real-time?",
      content:
        "Yes, our platform provides real-time GPS tracking for all shipments.",
    },
    {
      title: "What are your charges for truck booking?",
      content:
        "Charges vary based on truck type, distance, cargo size, and other factors, with costs shown before booking.​",
    },
    {
      title: "Do you offer same-day deliveries?",
      content:
        "Yes, same-day deliveries are available for local routes, subject to truck availability.",
    },
  ];

  return (
    <motion.div className="py-10 overflow-hidden my-10">
      <Container>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <div className="">
            <Image src={AllImages.faq} />
          </div>
          <div>
            <div>
              {generalData.map((item, index) => (
                <Accordion
                  key={index}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </motion.div>
  );
};

export default FAQ;
