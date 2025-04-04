"use client";
import { auth } from "@/auth";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@heroui/dropdown";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { LogOut } from "lucide-react";
import { logout } from "@/lib/actions/auth";
const Userauth = () => {
  const { data: session } = useSession();

  return (
    <div>
      <Dropdown>
        <DropdownTrigger>
          <Image
            src={session?.user?.image || ""}
            alt="hello"
            width={40}
            height={40}
            className="rounded-full w-[30px] h-[30px] md:w-[40px] md:h-[40px] "
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem key="new">Profile</DropdownItem>
          <DropdownItem key="copy">Your Plan</DropdownItem>
          <DropdownItem key="edit">Edit file</DropdownItem>
          <DropdownItem
            key="delete"
            className="text-danger flex w-full"
            color="danger"
          >
            <div className="flex" onClick={() => logout()}>
              Logout
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Userauth;
