import Image from "next/image";
import React from "react";

const Aboutsection = () => {
  return (
    <div className="flex gap-5 w-full">
      <div className="text-center ">
        Hii Everyone We are from BuildHub. Our Mission to Make you fit for Free
        and get the great guidance of fitness and archieve the goals for health
        & Build for Body.
      </div>
      <div className="w-[400px] h-[400px] rounded-md">
        <Image
          src={}
          alt="hello"
          width={500}
          height={500}
          className="rounded-md w-[400px] h-[400px]"
        />
      </div>
    </div>
  );
};

export default Aboutsection;
