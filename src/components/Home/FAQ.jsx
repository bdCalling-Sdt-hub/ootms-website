"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { AllImages } from "../../../public/assets/AllImages";
import Accordion from "../ui/Accordion";
import Container from "../ui/Container";

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
    <motion.div className="py-10 overflow-hidden md:my-10">
      <Container>
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <div className="mb-6 md:mb-0">
            <Image alt="faq" src={AllImages.faq} />
          </div>
          <div>
            <div>
              {generalData.map((item, index) => (
                <Accordion
                  key={index}
                  title={
                    <span className="text-sm md:text-2xl">{item.title}</span>
                  }
                  content={
                    <span className="text-sm md:text-2xl">{item.content}</span>
                  }
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
