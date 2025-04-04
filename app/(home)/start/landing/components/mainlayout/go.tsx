"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

import "swiper/css/effect-cards";
import { Autoplay, EffectCards } from "swiper/modules";

const SwiperComponent = () => {
  return (
    <div className="flex justify-center items-center w-full px-4 md:px-8 lg:px-16">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        modules={[EffectCards, Autoplay]}
        className="swiper max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
      >
        <SwiperSlide className="flex justify-center items-center text-4xl">
          💖
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-4xl">
          👍
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-4xl">
          👌
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-4xl">
          💯
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-4xl">
          🥳
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-4xl">
          🎉
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-4xl">
          🤩
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-4xl">
          😛
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center text-4xl">
          👻
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
