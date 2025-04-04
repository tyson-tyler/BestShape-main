import React from "react";
import { Star } from "lucide-react"; // Using Lucide React for the star icon

const NewVideoban = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex mt-[100px] items-center">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        preload="none"
      >
        <source src="/2.mp4" type="video/mp4" />
        Your browser does not support the video tag
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Content on Top of Video */}
      <div className="relative z-50 w-full max-w-4xl text-white px-8 md:px-16 ml-auto">
        <p className="text-sm uppercase tracking-wide text-gray-300 mb-2">
          A SMART WORKOUT APP
        </p>
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Find out why 1M+ people train with the BuildHub fitness app
        </h1>
        <p className="flex items-center text-lg md:text-2xl font-semibold mt-4">
          <Star className="text-yellow-400 w-6 h-6 mr-2" /> 5600 5 star reviews
        </p>
      </div>
    </div>
  );
};

export default NewVideoban;
