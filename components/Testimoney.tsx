"use client";

import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Image from 'next/image';



const people = [
  {
    id: 1,
    name: "Samuel Stanley",
    designation: "Software Engineer",
    image: "/samuel.png"
    
  },

  {
    id: 2,
    name: "Faith Jijooke",
    designation: "UI/UX Designer",
    image: "/samuel.png"
  },

  {
    id: 3,
    name: "Success NWauzor",
    designation: "Product Manager",
    image: "/samuel.png"
  },


];

export function Testimoney() {
  return (
    <div className="flex flex-row items-center justify-center 
      mt-5 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
