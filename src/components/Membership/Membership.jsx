import React from "react";
import Subscription from "../ui/Subscription/Subscription";
import Container from "../ui/Container";
import PricingPlans from "./PricingPlans";

const Membership = () => {
  return (
    <div className="py-20">
      <div className="w-full overflow-hidden">
        <Container>
          <PricingPlans />
          <div className="py-20 pt-32">
            <Subscription />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Membership;
