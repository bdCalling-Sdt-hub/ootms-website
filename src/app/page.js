import Navbar from "../components/shared/Navbar";

import Footer from "../components/shared/Footer";
import About from "@/components/Home/About";
import GetMvr from "@/components/Home/GetMvr";
import CliniveaPayComponent from "@/components/Home/CliniveaPayComponent";
import Testimonial from "@/components/Home/Testimonial";
import Banner from "@/components/Home/Banner";

import FAQ from "@/components/Home/FAQ";
import OurServices from "@/components/Home/OurServices";
import HowItWorkHome from "@/components/Home/HowItWorkHome";
import SubscriptionSection from "@/components/Home/SubscriptionSection";
import ContactUs from "@/components/ContactUs/ContactUs";
import GetTheApp from "@/components/Home/GetTheApp";

const HomePage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Banner />
      <OurServices />
      <HowItWorkHome />
      <SubscriptionSection />
      <Testimonial />
      <GetTheApp />
      <FAQ />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default HomePage;
