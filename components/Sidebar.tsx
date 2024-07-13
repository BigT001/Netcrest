import Link from "next/link";
import React from "react";

export default function Sidebar() {
  return (
    <div className="flex h-screen flex-col justify-between ">
      <div className="px-4 py-">
        <div className="pl-5">
          <Link href="/">
            <img
              src="2.svg"
              alt="Logo"
              className="w-32 h-20 place-content-center"
            />
          </Link>
        </div>

        <ul className="mt-6 space-y-1">
          <li>
            <a
              href="/"
              className="block rounded-lg bg-blue-100 
              px-4 py-2 text-sm font-bold text-black"
            >
              Home
            </a>
          </li>

          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary
                className="flex cursor-pointer items-center 
              justify-between rounded-lg px-4 py-2 text-black 
              hover:bg-blue-100 hover:text-blue-100 hover:font-bold"
              >
                <span className="text-sm font-bold text-black">
                  {" "}
                  What We Do{" "}
                </span>

                <span
                  className="shrink-0 transition duration-300 
                  group-open:-rotate-180 text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>

              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <a
                    href="/WhatWeDoNew"
                    className="block rounded-lg px-4 py-2 text-sm font-medium 
                    text-gray-500 transform hover:scale-105 transition-transform 
                    hover:text-black hover:font-bold duration-300"
                  >
                    Web app development
                  </a>
                </li>

                <li>
                  <a
                    href="/WhatWeDoNew"
                    className="block rounded-lg px-4 py-2 text-sm font-medium 
                    text-gray-500 transform hover:scale-105 transition-transform 
                    hover:text-black hover:font-bold duration-300"
                  >
                    Website development
                  </a>
                </li>

                <li>
                  <a
                    href="/WhatWeDoNew"
                    className="block rounded-lg px-4 py-2 text-sm font-medium 
                    text-gray-500 transform hover:scale-105 transition-transform 
                    hover:text-black hover:font-bold duration-300"
                  >
                    UI/UX design
                  </a>
                </li>

                <li>
                  <a
                    href="/WhatWeDoNew"
                    className="block rounded-lg px-4 py-2 text-sm font-medium 
                    text-gray-500 transform hover:scale-105 transition-transform 
                    hover:text-black hover:font-bold duration-300"
                  >
                    Ecommerce development
                  </a>
                </li>

                <li>
                  <a
                    href="/WhatWeDoNew"
                    className="block rounded-lg px-4 py-2 text-sm font-medium 
                    text-gray-500 transform hover:scale-105 transition-transform 
                    hover:text-black hover:font-bold duration-300"
                  >
                    MVP development
                  </a>
                </li>

                <li>
                  <a
                    href="/WhatWeDoNew"
                    className="block rounded-lg px-4 py-2 text-sm font-medium 
                    text-gray-500 transform hover:scale-105 transition-transform 
                    hover:text-black hover:font-bold duration-300"
                  >
                    CMS development
                  </a>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <a
              href="/OurStory"
              className="block rounded-lg px-4 py-2 text-sm 
              font-semibold text-black hover:bg-blue-100
              hover:text-black hover:font-bold"
            >
              Our Story
            </a>
          </li>
        </ul>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <a
          href="/ContactPage"
          className="inline-block rounded border-2 
              border-blue-200 bg-white px-12 py-3 
              text-md font-medium text-black  
              shadow-md shadow-blue-300 transform hover: 
              transition-transform duration-300 mb-4"
        >
          Contact us
        </a>
      </div>
    </div>
  );
}
