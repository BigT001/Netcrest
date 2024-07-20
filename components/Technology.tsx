"use client";

import IconCloud from "@/components/magicui/icon-cloud";
import { Card, CardContent } from "./ui/card";

const technologies = [
  { slug: "typescript", name: "TypeScript" },
  { slug: "javascript", name: "JavaScript" },
  { slug: "java", name: "Java" },
  { slug: "react", name: "React" },
  { slug: "flutter", name: "Flutter" },
  { slug: "html5", name: "HTML5" },
  { slug: "css3", name: "CSS3" },
  { slug: "nodedotjs", name: "Node.js" },
  { slug: "nextdotjs", name: "Next.js" },
  { slug: "prisma", name: "Prisma" },
  { slug: "amazonaws", name: "AWS" },
  { slug: "postgresql", name: "PostgreSQL" },
  { slug: "firebase", name: "Firebase" },
  { slug: "vercel", name: "Vercel" },
  { slug: "git", name: "Git" },
  { slug: "github", name: "GitHub" },
  { slug: "visualstudiocode", name: "VS Code" },
  { slug: "figma", name: "Figma" },
];

export function Technology() {
  return (
    <div>
      <section>
        <div className="mx-auto py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex items-center b">
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
                    Web Solutions{" "}
                  </p>

                  <p className="mt-4 text-gray-600 text-lg">
                    Performance and scalability are top priorities for NetCresT
                    in all of our online applications. As your company grows, we
                    understand that your web app need to be able to manage more
                    data and traffic without sacrificing functionality or speed.
                    Our Tech stack and development approach is based on this
                    dedication to reliable, scalable solutions. Our method
                    starts with well considered architecture design to make sure
                    every application is constructed on a strong base for future
                    expansion in addition to meeting present demands.
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
              <div className="h-50 w-full object-cover">
                <IconCloud iconSlugs={technologies.map((tech) => tech.slug)} />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                {technologies.map((tech) => (
                  <div key={tech.slug} className="text-xs">
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
