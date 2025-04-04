import { Button } from "@heroui/button";
import React from "react";
import PricingCard from "./pricingcard";

const Pricing = () => {
  return (
    <div className="h-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center mt-20 sm:mt-24 mb-5 dela-gothic-one-regular">
        Unlock the full potential of your
        <br className="hidden sm:block" /> fitness with our Pro Plans
      </h1>
      <p className="text-sm sm:text-base text-gray-400 text-center max-w-2xl mx-auto">
        We offer our best plan for your fitness journey. If you don’t want a pro
        plan, you can stick with our free plan as well.
      </p>
      <div className="mt-10 sm:mt-16 flex justify-center">
        <PricingCard />
      </div>
    </div>
  );
};

export default Pricing;
