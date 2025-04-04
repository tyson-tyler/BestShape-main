"use client";
import { logout } from "@/lib/actions/auth";
import { Button } from "@heroui/button";
import React from "react";

const Authbtn = () => {
  return (
    <div>
      <Button
        onClick={() => {
          logout();
        }}
      >
        Logout
      </Button>
    </div>
  );
};

export default Authbtn;
