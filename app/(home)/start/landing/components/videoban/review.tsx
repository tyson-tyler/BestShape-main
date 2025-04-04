import { Button } from "@heroui/button";
import { ArrowUpLeft } from "lucide-react";
import React from "react";

const Review = () => {
  return (
    <div className="container mx-auto max-w-7xl pt-6 min-h-screen px-6 flex-grow">
      <div className="flex justify-center text-left">
        <h2 className="text-7xl text-center mt-7 mb-4 text-white dela-gothic-one-regular">
          Our Blog
        </h2>
      </div>
      <div className="text-2xl flex justify-around items-center mt-6 mb-5">
        <h1 className="text-lg text-gray-400 w-[600px]">
          Our BuildHub Give the Feature that you Need to start you Fitness Route
          From Zero to Hero Level and Our Ai Trainer Help you guide you throw
          this Route. Just Start it for Today. Join Now and become Fit
        </h1>
        <Button size="lg" color="primary">
          Check All Blog
        </Button>
      </div>

      <div className="grid w-full md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8 h-[800px] mt-16 ">
        <div className="row-span-2 font-medium  bg-gray-400 rounded-md  text-3xl transition scale-100 hover:scale-105 text-center bottom-2 bg-cover bg-center bg-[url('https://i.pinimg.com/736x/3a/1b/a2/3a1ba246e0bc64c57cf53eb4ba06f84a.jpg')]">
          <h1 className="bottom-1 absolute  text-2xl px-5 mt-6 font-semibold  ">
            Workout Plan
          </h1>
        </div>
        <div className="bg-gray-400 row-span-2 rounded-md bga12 transition scale-100 hover:scale-105 bg-cover bg-center bg-[url('https://i.pinimg.com/736x/95/f3/e0/95f3e0edb9963e545319c99ebae9b976.jpg')]">
          <h1 className="bottom-2 absolute   text-2xl px-5 mt-6 font-semibold ">
            nice
          </h1>
        </div>

        <div className="bg-gray-400 grid grid-rows-2 rounded-md bga14 transition scale-100 hover:scale-105 bg-cover bg-center bg-[url('https://i.pinimg.com/736x/cb/9f/0c/cb9f0c3cdd4f35987f3c7b5822e0937f.jpg')]">
          <h1 className="bottom-2 absolute   text-2xl px-5 mt-6 font-semibold ">
            asdfasdf
          </h1>
        </div>
        <div className="bg-gray-400 rounded-md  transition scale-100 hover:scale-105 bg-cover bg-center bg-[url('https://i.pinimg.com/736x/51/d5/f6/51d5f61b5003e915c663a31747f3c5a7.jpg')]">
          <h1 className="bottom-2 absolute   text-2xl px-5 mt-6 font-semibold ">
            hello
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Review;
