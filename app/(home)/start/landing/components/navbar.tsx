"use client";
import Image from "next/image";
import Logo from "@/public/assets/logo.svg";
import { Button } from "@heroui/button";
import Heart from "@/public/assets/heart.svg";
import MobileMenu from "./resposive/menu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export const Navbar = () => {
  const router = useRouter();
  const session = useSession();

  const handlesubmit = () => {
    if (!session.data?.user) {
      router.push("/auth/login");
    } else {
      router.push("http://localhost:3001/start");
    }
  };

  return (
    <div className="w-full flex justify-between  items-center">
      <Link href={"/"}>
        <div className="logo text-2xl font-semibold flex gap-1  items-center">
          <Image src={Logo} width={40} height={40} alt="hello" />{" "}
          <span className="hidden md:flex">
            Build <span className="text-[#6563FF]">Hub</span>
          </span>
        </div>
      </Link>

      <div className="hidden lg:flex gap-6 text-center ml-16 items-center text-sm font-bold justify-center">
        <Link href={"/"}>
          <span>HOME</span>
        </Link>
        <Link href={"/about"}>
          <span>ABOUT</span>
        </Link>
        <Link href={"/"}>
          <span>PROGRAM</span>
        </Link>
        <Link href={"/"}>
          <span>PRICING</span>
        </Link>
        <Link href={"/blog"}>
          <span>BLOG</span>
        </Link>
      </div>
      <div className="flex gap-3">
        <Button color="primary" onClick={handlesubmit}>
          {" "}
          Get Started
        </Button>
        <Button variant="ghost" className="lg:flex hidden">
          Sponsors
          <Image src={Heart} width={20} height={20} alt="hello" />
        </Button>
        <div className="md:hidden flex">
          <MobileMenu />
        </div>
      </div>
    </div>
  );
};
