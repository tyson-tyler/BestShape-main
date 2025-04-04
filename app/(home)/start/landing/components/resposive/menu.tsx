"use client";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@heroui/drawer";
import { Button } from "@heroui/button";
import { useDisclosure } from "@nextui-org/react";
import Image from "next/image";
import Heart from "@/public/assets/heart.svg";
import Logo from "@/public/assets/logo.svg";
import { Menu } from "lucide-react";

export default function MobileMenu() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button isIconOnly onPress={onOpen} variant="ghost">
        <Menu className="w-5 h-5" />
      </Button>
      <Drawer
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">Menu</DrawerHeader>
              <DrawerBody>
                <div className="logo text-2xl font-semibold flex gap-1 items-center">
                  <Image src={Logo} width={40} height={40} alt="hello" /> Build
                  <span className="text-[#6563FF]">Hub</span>
                </div>

                <div className="flex cursor-pointer flex-col h-full items-center gap-6 text-center items-center text-sm font-bold justify-center">
                  <span className="">HOME</span>
                  <span>ABOUT</span>
                  <span>PROGRAM</span>
                  <span>PRICING</span>

                  <span>BLOG</span>
                </div>
              </DrawerBody>
              <DrawerFooter className="w-full">
                <div className="flex gap-3">
                  <Button color="primary"> Get Started</Button>
                  <Button variant="ghost">
                    Sponsors
                    <Image src={Heart} width={20} height={20} alt="hello" />
                  </Button>
                </div>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
