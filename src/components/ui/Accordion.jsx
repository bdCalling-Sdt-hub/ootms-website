"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi";
import Image from "next/image";

const Accordion = ({ title, content, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cn("mb-5 bg-[#DFE2EF] duration-500 rounded ", className)}>
      <div
        className="flex justify-between items-center p-4 cursor-pointer  duration-500"
        onClick={toggleAccordion}
      >
        <h3 className="text-base-color lg:text-xl font-semibold">{title}</h3>
        {isOpen ? (
          <div>
            <HiMinus className="text-2xl duration-500" />
          </div>
        ) : (
          <div>
            <GoPlus className="text-2xl duration-500" />
          </div>
        )}
      </div>
      {isOpen && (
        <div className="p-4 bg-[#c5cffc] text-base-color duration-500 sm:text-lg">
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
