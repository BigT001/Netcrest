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
import CallToAction from "@/components/CallToAction";

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
        className="lg:h-screen pb-24 pt-10 lg:grid lg:grid-cols-2 
        sm:pb lg:gap-x-0 xl:gap-x-8 lg:pb-30 bg-white "
      >
        <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
          <div
            className="relative mx-auto text-center lg:text-center 
              flex flex-col items-center lg:items-center overflow-hidden"
          >
            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <h1
                className="relative tracking-tight text-balance mt- lg:mt-10 font-bold
                !leading-tight text-gray-900 text-4xl md:text-5xl lg:text-6xl "
              >
                We<span className="bg-blue-800 px-2 text-white">Build</span>
                <br />
                interactive, dynamic <br />
                and fast software solutions.
              </h1>
            </BoxReveal>

            <BoxReveal boxColor={"#5046e6"} duration={0.5}>
              <p
                className="mt-5 lg:text-lg lg:pr-10 lg:mr-60 lg:ml-60 text-center 
                    lg:text-center text-balance md:text-wrap"
              >
                Transforming ideas into dynamic digital experiences. We innovate
                with simplicity, speed, and interaction, ensuring your success
                in the digital world.
              </p>
            </BoxReveal>

            <div className="grid lg:flex lg:space-x-2 gap-2 mt-8 mb-4">
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
                className="inline-block rounded border-2 
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
      <div className="mt-10">
        <Cardscards />
      </div>

      <div className="mt-20">
        <Founder />
      </div>

      <Technology />

      <div className="mb-20 px-10">
        <CallToAction />
      </div>
      <ChoseUsNow />
      <Ourstory />
      <ContactSection />
    </div>
  );
}
