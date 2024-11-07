import Navbar from "@/components/shared/Navbar";
import Signup from "../../../components/(Auth)/signUp/Signup";
import React from "react";
import Footer from "@/components/shared/Footer";

const signUpPage = () => {
  return (
    <div>
      <Navbar />
      <Signup />
      <Footer />
    </div>
  );
};

export default signUpPage;
