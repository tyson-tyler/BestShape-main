import React from "react";
import Heading from "./heading";
import Bane from "./bane";

const Banner = () => {
  return (
    <div className="min-w-screen pt-[130px] h-full">
      <Heading />
      <div className="w-full pt-12 ">
        <Bane />
      </div>
    </div>
  );
};

export default Banner;
