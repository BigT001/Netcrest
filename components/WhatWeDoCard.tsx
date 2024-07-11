"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { CardFooter } from "./ui/card";
import { Button } from "./ui/button";

export function WhatWeDoCard() {
   
  return (
    <MaxWidthWrapper>
    <div className="flex justify-center mb-5">
      <h1 className="max-w-sm text-3xl mt-10 text-center lg:ml-6 font-bold tracking-[-0.015em] text-black">
              What we 
            <span className="bg-blue-800 text-white ">Do</span>
          </h1>
      </div>
    <div className="grid grid-cols-1 max-w-7xl mx-auto w-full  border-2">      
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-00 
          min-h-[650px] lg:min-h-[600px] xl:min-h-[300px]">
          
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg lg:ml-6 text-left text-balance text-3xl md:text-xl 
            lg:text-5xl font-semibold tracking-[-0.015em] text-black">
            Full stack development
          </h2>
          <p className="mt-4 max-w-[26rem] text-left lg:ml-6 lg:text-base/6 text-black-200">
          Full stack web development involves working on both the parts 
          of a website that users interact with (front-end) and the 
          parts that work behind the scenes (back-end)...
          </p>
          <CardFooter>
              <Button
                asChild
                variant="outline"
                size="default"
                className="relative px-6 py-3 mt-5 text-lg border-2 border-blue-900 bg-blue-800 text-white"
              >
                <a href="/WhatWeDo">
                  Learn more
                </a>
              </Button>
            </CardFooter> 
        </div>
        <Image
          src="/screenshot1.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-20 md:-right-[40%] lg:-right-[10%] 
            lg:-bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>   
    </div>
    </MaxWidthWrapper>
  );
}
