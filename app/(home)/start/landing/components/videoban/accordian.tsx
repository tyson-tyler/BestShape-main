"use client";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Button } from "@heroui/button";

export default function Accc() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div>
      <div className="container mx-auto max-w-7xl pt-6 px-6 flex justify-center items-center flex-col flex-grow ">
        <h1 className="text-7xl text-center text-white mt-16 mb-16 dela-gothic-one-regular">
          Most Common Questions
        </h1>
        <Accordion>
          <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
            <span className="text-[30px]">{defaultContent}</span>
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="4" aria-label="Accordion 4" title="Accordion 4">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="5" aria-label="Accordion 5" title="Accordion 5">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="6" aria-label="Accordion 6" title="Accordion 6">
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="7" aria-label="Accordion 7" title="Accordion 7">
            {defaultContent}
          </AccordionItem>
        </Accordion>
        <Button className="w-[300px] bg-blue-600 hover:bg-blue-500 rounded-full h-[80px] text-xl font-semibold my-6">
          Ask Your Questions
        </Button>
      </div>
    </div>
  );
}
