import About from "@/components/Home/About";
import Banner from "@/components/Home/Banner";
import CliniveaPayComponent from "@/components/Home/CliniveaPayComponent";
import FAQ from "@/components/Home/FAQ";
import GetMvr from "@/components/Home/GetMvr";
import HowItWork from "@/components/Home/HowItWorkHome";
import OurServices from "@/components/Home/OurServices";
import SubscriptionSection from "@/components/Home/SubscriptionSection";
import Subscription from "@/components/Home/SubscriptionSection";
import Testimonial from "@/components/Home/Testimonial";
import React from "react";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <OurServices />
      <HowItWork />
      <SubscriptionSection />
      <Testimonial />
    </div>
  );
}
