"use client";
import { Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Teams = () => {
  const teamMembers = [
    {
      name: "Ayush Goyal",
      title: "Team Leader",
      image:
        "https://i.pinimg.com/736x/cd/27/1e/cd271ed75bcefe9cd6df0222cac97c63.jpg",
      insta: "#",
      github: "#",
      linked: "#",
      desc: "Team Leader, responsible for managing the team and coordinating tasks.",
    },
    {
      name: "Ananya Tandon",
      title: "AI/ML Expert",
      image:
        "https://i.pinimg.com/736x/e4/17/1a/e4171a45bc388893e32ed6690ad209a3.jpg",
      insta: "#",
      github: "#",
      linked: "#",
      desc: "AI/ML Expert, likely focusing on machine learning and artificial intelligence development.",
    },
    {
      name: "Kunal Gupta",
      title: "Frontend Developer",
      image:
        "https://i.pinimg.com/736x/46/a4/e9/46a4e9fcbadaff10367d9e7a7946b05c.jpg",
      insta: "#",
      github: "#",
      linked: "#",
      desc: "Frontend Developer, working on user interfaces and frontend aspects.",
    },
    {
      name: "Tushar Patel",
      title: "Backend Developer",
      image:
        "https://i.pinimg.com/736x/47/4d/11/474d114ad34f9d10289cdd834d9bb0be.jpg",
      insta: "#",
      github: "#",
      linked: "#",
      desc: "Backend Developer, handling server-side logic and database management.",
    },
  ];

  return (
    <div className="text-center">
      <motion.h1
        className="text-6xl font-semibold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Meet the Team Behind <br /> BuildHub
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[130px] mt-8 container mx-auto px-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg w-[380px] hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={member.image}
              width={300}
              height={300}
              alt="Profile Picture"
              className="rounded-xl w-full h-[300px] object-cover"
            />
            <h2 className="text-xl font-bold mt-4">{member.name}</h2>
            <p className="text-gray-400">{member.title}</p>
            <p className="text-gray-300 mt-2 text-sm">{member.desc}</p>
            <div className="flex justify-center items-center space-x-4 mt-4 text-gray-400">
              <Link href={member.insta} className="hover:text-white">
                <Instagram />
              </Link>
              <Link href={member.github} className="hover:text-white">
                <Github />
              </Link>
              <Link href={member.linked} className="hover:text-white">
                <Linkedin />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
