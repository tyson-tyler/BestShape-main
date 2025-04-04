import React from "react";

const Heading = ({ title, desc }: any) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 mt-7">
      <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold">{title}</h1>
      <p className="text-sm text-gray-500">{desc}</p>
    </div>
  );
};

export default Heading;
