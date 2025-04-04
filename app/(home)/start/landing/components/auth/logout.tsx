"use client";
import { logout } from "@/lib/actions/auth";
import { Button } from "@heroui/button";
import { LogOut } from "lucide-react";

export const Logoutbtn = () => {
  return (
    <div>
      <LogOut className="w-5 h-5 text-danger-500 transition hover:scale-105 cursor-pointer ml-3" />
    </div>
  );
};
