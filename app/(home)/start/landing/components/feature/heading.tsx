import { Button } from "@heroui/button";
import { ArrowUpLeft } from "lucide-react";
import React from "react";

const Heading2 = () => {
  return (
    <div className="container mx-auto max-w-7xl pt-6 px-4 md:px-6 lg:px-8 flex-grow">
      <div className="flex justify-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center mt-7 mb-4 text-white dela-gothic-one-regular">
          Our Feature
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center mt-6 mb-5 gap-6">
        <h1 className="text-base sm:text-lg md:text-xl text-gray-400 max-w-lg text-center md:text-left">
          Our BuildHub provides the features you need to start your fitness
          journey from zero to hero. Our AI trainer will guide you through this
          journey. Start today and become fit!
        </h1>
        <Button size="lg" color="primary">
          Check All Features
        </Button>
      </div>

      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-8 h-[800px] md:h-[800px] mt-16">
        <div className="row-span-2 bga font-medium bg-gray-400 rounded-md text-2xl md:text-3xl transition  hover:scale-105 flex justify-center items-center p-6">
          Workout Plan
        </div>
        <div className="bg-gray-400 bga1 rounded-md transition  hover:scale-105 flex justify-center items-center p-6">
          <h1 className="text-xl md:text-2xl font-semibold">Diet Plan</h1>
        </div>
        <div className="bg-slate-500 bga2 rounded-md transition  hover:scale-105 relative flex justify-center items-center p-6">
          <h1 className="text-xl md:text-2xl font-semibold">Mucsel Plan</h1>
          <div className="absolute bottom-4 right-4 w-12 h-12 md:w-14 md:h-14 bg-white text-black rounded-md flex justify-center items-center">
            <ArrowUpLeft className="w-8 md:w-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading2;
