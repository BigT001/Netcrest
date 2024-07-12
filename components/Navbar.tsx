"use client";

import React, { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const closeMenu = () => {
    setIsSidebarVisible(false);
  };

  return (
    <MaxWidthWrapper className="pb-20">
      <div
        className="flex justify-between font-bold border-b 
        border-gray-300 fixed top-0 left-0 right-0 
        shadow-xl z-50 bg-white"
      >
        <div className="pl-5">
          <Link href="/">
            <img src="2.svg" alt="Logo" className="w-28 h-20" />
          </Link>
        </div>

        <div className="hidden lg:flex space-x-4 mt-7">
          <ul>
            <Link href="/">Home</Link>
          </ul>
          <ul>
            <Link href="/WhatWeDoNew">What we do</Link>
          </ul>
          <ul>
            <Link href="/OurStory">Our story</Link>
          </ul>
        </div>

        <div className="mt-7 font-bold hidden lg:flex pr-10">
          <a
            href="/ContactPage"
            onClick={closeMenu}
            className="inline-block rounded border-2 
                  border-blue-200 bg-white px-12 py-3 
                  text-md font-medium text-black  
                  shadow-md shadow-blue-300 transform hover: 
                  transition-transform duration-300 mb-4"
          >
            Contact us
          </a>
        </div>

        <a
          href="#"
          onClick={toggleSidebar}
          className="inline-block rounded border-2 
                    border-blue-800 bg-blue-800 px-5 py-1 h-10 mt-4 mr-5
                    text-md font-medium text-white   
                    transition-transform duration-300 lg:hidden"
        >
          Menu
        </a>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-800 text-white transform transition-transform duration-300 z-50 ${
          isSidebarVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button onClick={toggleSidebar} className="p-4 text-center">
          Close
        </button>
        <div className="p-4 bg-white text-black h-full">
          <Sidebar />
        </div>
      </div>

      {/* Overlay to close sidebar when clicking outside */}
      {isSidebarVisible && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}
    </MaxWidthWrapper>
  );
}
