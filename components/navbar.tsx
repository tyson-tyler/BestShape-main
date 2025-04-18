"use client";

// imports
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";

export default function Navbar({ className }: { className: string }) {
  return (
    <div
      className={`flex py-6 justify-between items-center ${className} w-full`}
    >
      {/* LOGO */}
      <div className="w-36 md:w-40 xl:w-60">
        <Link href="/">
          <div className="w-36 md:w-40 xl:w-60 flex justify-end">
            <Link href="/start">
              <Button size="lg" className="rounded-3xl">
                BuildHub
              </Button>
            </Link>
          </div>
        </Link>
      </div>

      {/* LINKS */}
      <NavigationMenu className="justify-between mx-auto w-2/6 hidden md:flex">
        <NavigationMenuList>
          {/* HOME */}
          <NavigationMenuItem>
            <Link href="/">
              <Button
                variant="ghost"
                className="text-lg font-semibold rounded-xl hover:bg-neutral-100"
                size="lg"
              >
                Home
              </Button>
            </Link>
          </NavigationMenuItem>
          {/* <NavigationMenuItem>
            <Link href="http://localhost:8501/">
              <Button
                variant="ghost"
                className="text-lg font-semibold rounded-xl hover:bg-neutral-100"
                size="lg"
              >
                Food Calories Analyser
              </Button>
            </Link>
          </NavigationMenuItem> */}

          {/* ABOUT */}
          <NavigationMenuItem>
            <Link href="http://192.168.28.53:8501/">
              <Button
                variant="ghost"
                className="text-lg font-semibold rounded-xl hover:bg-neutral-100"
                size="lg"
              >
                Food Analyser
              </Button>
            </Link>
            <Link href="http://192.168.137.222:8501/">
              <Button
                variant="ghost"
                className="text-lg font-semibold rounded-xl hover:bg-neutral-100"
                size="lg"
              >
                Posture Analyser
              </Button>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* BUTTON */}
      <div className="w-36 md:w-40 xl:w-60 flex justify-end">
        <Link href="/start">
          <Button size="lg" className="rounded-3xl">
            Start now
          </Button>
        </Link>
      </div>
    </div>
  );
}
