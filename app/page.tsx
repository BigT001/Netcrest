"use client";

import React from "react";
import Founder from "@/components/founder";
import BoxReveal from "@/components/magicui/box-reveal";
import { Technology } from "@/components/Technology";
import Ourstory from "@/components/Ourstory";
import Particles from "@/components/magicui/particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Cardscards from "@/components/Cardscards";
import ChoseUsNow from "@/components/ChoseUsNow";
import ContactSection from "@/components/ContactSection";

export default function Landingpage() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);
  return (
    <div>
      <Particles
        className="absolute inset-0"
        quantity={300}
        ease={80}
        color={color}
        refresh
      />

      <div
        className="h-screen pb-24 pt-16 lg:grid lg:grid-cols-2 
        sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pb-30 bg-white shadow-xl shadow-blue-200"
      >
        <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
          <div
            className="relative mx-auto text-center lg:text-center 
              flex flex-col items-center lg:items-center overflow-hidden"
          >
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <h1
                className="relative w-fit tracking-tight text-balance mt-16 font-bold
                !leading-tight text-gray-900 text-4xl md:text-4xl lg:text-5xl pr-10 pl-10"
              >
                We
                <span className="bg-blue-800 px-2 text-white">Build</span>
                interactive, dynamic and fast software solutions
              </h1>
            </BoxReveal>

            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <p
                className="mt-5 lg:text-lg lg:pr-10 max-w-prose text-center 
                    lg:text-center text-balance md:text-wrap"
              >
                Transforming ideas into dynamic digital experiences. We innovate
                with simplicity, speed, and interaction, ensuring your success
                in the digital world.
              </p>
            </BoxReveal>

            <div className="flex space-x-4 spaxe-y-4 mt-10 mb-4">
              <a
                href="/ContactPage"
                className="inline-block rounded border-2 
                      border-blue-700 bg-white px-12 py-3 
                      text-md font-medium text-black  
                      shadow-md shadow-blue-300 transform hover:scale-105 
                      transition-transform duration-300"
              >
                Get in Touch
              </a>

              <a
                href="/OurStory"
                className=" inline-block rounded border-2 
                      border-blue-800 bg-blue-800 px-12 py-3 
                      text-md font-medium text-white  
                      shadow-md shadow-blue-300 transform hover:scale-105 
                      transition-transform duration-300"
              >
                Our Story
              </a>
            </div>
          </div>
        </div>
      </div>
      <Cardscards />
      <Founder />
      <Technology />
      <ChoseUsNow />
      <Ourstory />
      <ContactSection />
    </div>
  );
}
