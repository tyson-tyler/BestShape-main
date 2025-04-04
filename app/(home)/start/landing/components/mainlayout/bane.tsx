import React from "react";

import SwiperComponent from "./go";
import { Avatar, AvatarGroup } from "@heroui/avatar";

const Bane = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-center gap-[-10px]  items-center">
      <SwiperComponent />
      <div>
        <div className="mb-[80px] lg:mb-0 lg:w-[410px]  mt-6 lg:mt-0 h-[151px]">
          <span className="lg:text-lg md:text-sm text-xs  px-3 lg:px-0 text-gray-400">
            Our BuildHub Offer alot of Building your Body Features that you to
            get In your dream body shape . Also improve you confidence and help
            you see your self How you want. Join us and see the how your life
            change .
          </span>
          <div className="flex justify-center gap-3 mt-10">
            <div className="avatar">
              <AvatarGroup isBordered color="success">
                <Avatar
                  size="lg"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
                <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
              </AvatarGroup>

              <div className="flex justify-center flex-col text-center mt-4">
                <span className="text-2xl font-semibold">1M+</span>
                <span className="text-gray-300">Active Users </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bane;
