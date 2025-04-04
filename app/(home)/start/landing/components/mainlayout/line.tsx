import React from "react";

const Line = () => {
  return (
    <div className="w-full text-black h-auto flex flex-wrap justify-center gap-6 md:gap-11 rounded-lg items-center p-4 md:p-9 mt-16 mb-6 bg-[#6563FF]">
      {[
        "Cardio",
        "☘︎",
        "Strength",
        "☘︎",
        "Workout",
        "☘︎",
        "Diet",
        "☘︎",
        "Yoga",
      ].map((item, index) => (
        <div key={index} className="flex justify-center items-center">
          <h1
            className={`font-semibold text-center ${
              item === "☘︎"
                ? "lg:text-5xl text-sm text-white"
                : "text-xl md:text-4xl"
            }`}
          >
            {item}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Line;
