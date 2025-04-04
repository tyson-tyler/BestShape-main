import React from "react";

const Heading = () => {
  return (
    <div className="flex flex-col gap-6 px-4 md:px-8 lg:px-16 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold dela-gothic-one-regular">
        Build Strength
      </h1>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-400 hover:text-gray-100 font-semibold">
        Boost Confidence
      </h2>
    </div>
  );
};

export default Heading;
