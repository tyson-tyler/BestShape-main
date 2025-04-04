"use client";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";

const reviews = [
  {
    name: "Zoey Lang",
    username: "@zoeylang",
    image: "https://heroui.com/avatars/avatar-1.png",
    description:
      "Frontend developer and UI/UX enthusiast. Join me on this coding adventure!",
    following: 4,
    followers: "97.1K",
  },
  {
    name: "John Doe",
    username: "@johndoe",
    image: "https://heroui.com/avatars/avatar-2.png",
    description:
      "Full-stack engineer and tech blogger. Let&apos;s build the web together!",
    following: 10,
    followers: "120K",
  },
  {
    name: "Emily Carter",
    username: "@emilycarter",
    image: "https://heroui.com/avatars/avatar-3.png",
    description:
      "Passionate about design and front-end development. Creating cool things!",
    following: 8,
    followers: "85K",
  },
  {
    name: "Michael Smith",
    username: "@michaelsmith",
    image: "https://heroui.com/avatars/avatar-4.png",
    description:
      "Software engineer & AI enthusiast. Sharing knowledge and projects!",
    following: 6,
    followers: "110K",
  },
  {
    name: "Sarah Johnson",
    username: "@sarahjohnson",
    image: "https://heroui.com/avatars/avatar-5.png",
    description:
      "Data scientist and AI researcher. Exploring the future of machine learning!",
    following: 12,
    followers: "130K",
  },
  {
    name: "David Brown",
    username: "@davidbrown",
    image: "https://heroui.com/avatars/avatar-6.png",
    description:
      "Cybersecurity expert and ethical hacker. Protecting the digital world!",
    following: 5,
    followers: "98K",
  },
  {
    name: "Laura Wilson",
    username: "@laurawilson",
    image: "https://heroui.com/avatars/avatar-7.png",
    description:
      "Mobile app developer and Swift enthusiast. Creating amazing user experiences!",
    following: 7,
    followers: "92K",
  },
  {
    name: "Chris Martinez",
    username: "@chrismartinez",
    image: "https://heroui.com/avatars/avatar-8.png",
    description:
      "Game developer and Unity expert. Building immersive digital worlds!",
    following: 9,
    followers: "115K",
  },
  {
    name: "Olivia Thompson",
    username: "@oliviathompson",
    image: "https://heroui.com/avatars/avatar-9.png",
    description:
      "AI engineer and deep learning researcher. Passionate about neural networks!",
    following: 11,
    followers: "140K",
  },
  {
    name: "Ethan White",
    username: "@ethanwhite",
    image: "https://heroui.com/avatars/avatar-10.png",
    description:
      "Cloud computing specialist and DevOps advocate. Scaling the web!",
    following: 15,
    followers: "105K",
  },
  {
    name: "Sophia Green",
    username: "@sophiagreen",
    image:
      "https://i.pinimg.com/736x/90/b3/44/90b3443d28057d749f9aa531c0c2321b.jpg",
    description:
      "AI researcher and Python developer. Exploring new AI applications!",
    following: 7,
    followers: "88K",
  },
  {
    name: "James Lee",
    username: "@jameslee",
    image:
      "https://i.pinimg.com/736x/48/47/a0/4847a0b847f6ed59153cc047b5fa3dac.jpg",
    description:
      "Tech enthusiast and open-source contributor. Learning every day!",
    following: 9,
    followers: "102K",
  },
];

export default function Review2() {
  return (
    <div className="min-h-screen bg-gray-50 mt-9 mb-12 px-4 sm:px-6 lg:px-8 pb-9">
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-center font-semibold text-black mt-12 mb-9 pt-[120px] dela-gothic-one-regular">
        Reviews from our satisfied <br className="hidden sm:block" /> Daily
        Members and Users
      </h1>
      <div className="container mx-auto max-w-7xl pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {reviews.map((review, index) => (
          <Card
            key={index}
            className="w-full max-w-sm transition-transform hover:scale-105 cursor-pointer mx-auto"
          >
            <CardHeader className="justify-between">
              <div className="flex gap-5">
                <Avatar isBordered radius="full" size="md" src={review.image} />
                <div className="flex flex-col gap-1 items-start justify-center">
                  <h4 className="text-small font-semibold leading-none text-default-600">
                    {review.name}
                  </h4>
                  <h5 className="text-small tracking-tight text-default-400">
                    {review.username}
                  </h5>
                </div>
              </div>
              <Button color="primary" radius="full" size="sm" variant="solid">
                Follow
              </Button>
            </CardHeader>
            <CardBody className="px-3 py-2 text-small text-default-400">
              <p>{review.description}</p>
            </CardBody>
            <CardFooter className="gap-3">
              <div className="flex gap-1">
                <p className="font-semibold text-default-400 text-small">
                  {review.following}
                </p>
                <p className="text-default-400 text-small">Following</p>
              </div>
              <div className="flex gap-1">
                <p className="font-semibold text-default-400 text-small">
                  {review.followers}
                </p>
                <p className="text-default-400 text-small">Followers</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className="flex justify-center items-center w-full mb-10 mt-7">
        <Button size="lg" radius="full" variant="solid" color="primary">
          More Reviews
        </Button>
      </div>
    </div>
  );
}
