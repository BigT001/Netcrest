"use client";

import IconCloud from "@/components/magicui/icon-cloud";
import { Card, CardContent } from "./ui/card";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "flutter",
  "html5",
  "css3",
  "nodedotjs",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "vercel",
  "git",
  "github",
  "visualstudiocode",
  "figma",
];

export function Technology() {
  return (
    <div>
      <section>
        <div className="mx-auto py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className=" flex items-center b">
              <div className="p-2 lg:p-8 sm:p-16">
                <CardContent
                  className="border-l border-b rounded-xl 
                border-black shadow-xl shadow-blue-200"
                >
                  <p className="text-xl  ">
                    <span className="font-bold text-4xl">Technologies</span>{" "}
                    <br />
                    Our Modern Tech Stack for Building <br />
                    <span className="bg-blue-800 text-white font-bold">
                      Cutting-Edge
                    </span>{" "}
                    Web Application
                  </p>

                  <p className="mt-4 text-gray-600">
                    At Netcrest, we are proud to harness cutting-edge technology
                    to deliver outstanding web applications. Our meticulous
                    selection of the technology stack guarantees scalability,
                    performance, and a seamless development experience. By
                    leveraging modern frameworks and libraries, we build robust,
                    secure, and efficient solutions.
                  </p>

                  <a
                    href="/WhatWeDoNew"
                    className="mt-8 inline-block rounded border-2 
                      border-blue-700 bg-bwhite px-12 py-3 
                      text-md font-medium text-black  
                      shadow-md shadow-blue-300 transform hover:scale-105 
                      transition-transform duration-300"
                  >
                    Learn more...
                  </a>
                </CardContent>
              </div>
            </div>

            <div className="relative lg:py-16">
              <div
                className=" h-50
                    w-full object-cover"
              >
                <IconCloud iconSlugs={slugs} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
