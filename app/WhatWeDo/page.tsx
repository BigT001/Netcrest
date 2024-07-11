"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check, Hospital, Landmark, MonitorSmartphone, PanelsTopLeft, Router, 
        Scale, ShoppingCart, Store, Truck, University, Waypoints 
        } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardFooter,
  } from "@/components/ui/card"

import Techstackdrawer from "@/components/Techstackdrawer";
import Contactform from "@/components/Contactform";

const WhatWeDo = () => {
  return (
    <div>
    <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl">
             What we <span className="text-blue-800">Do?</span>              
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              We develop full stack web applicatios            
            </p>

            <p className="mt-4 sm:text-xl/relaxed">
              Full stack web development is divided into two.{" "}
              <Link href="/" className="text-blue-900 font-bold">
                Frontend
              </Link>{" "}
              and{" "}
              <Link href="/" className="text-blue-900 font-bold">
                Backend
              </Link>{" "}
              development          
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-blue-800 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-800 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="#"
              >
                Contact us
              </a>

              <a
                className="block w-full rounded px-12 py-3 text-sm font-medium text-blue-600 shadow hover:text-blue-800 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
                href="#"
              >
                Book a call
              </a>
            </div>
          </div>
        </div>
      </section>

    <MaxWidthWrapper className="">
      <div>
      <h1 className="text-center font-bold text-4xl mb-2 mr-10 ml-10">
        Web Development Services We Offer
        </h1>
        <p className="text-center mr-10 ml-10 lg:mr-20 lg:ml-20 text-lg">
        With our end-to-end web development services, we address your 
        unique needs, delivering responsive apps that work perfectly across 
        desktops, tablets, and mobile devices
        </p>
      </div>
      <div className="grid justify-items-center lg:grid-cols-3 lg:space-x-6 lg:space-y-6 mt-2 
        mr-12 ml-12">

      <Card className="mt-5 lg:ml-5 lg:mt-6 w-90 h-60">
          <div className="flex mt-5">
          <MonitorSmartphone className="w-20 h-20 text-blue-900 ml-2"/>
          <h2 className="font-bold text-2xl mt-2 mr-4 ml-4">
            Web App <br /> Development
          </h2>
          </div>
          <p className="text-lg mt-5 mr-4 ml-4">
            Our focus is on constructing web applications that address 
            specific challenges in line with our clients vision.
          </p> 
        </Card>
        
        <Card className="mt-5 lg:mt-0 w-90 h-60">
          <div className="flex mt-5">
          <PanelsTopLeft  className="w-20 h-20 text-blue-900 ml-2"/>
          <h2 className="font-bold text-2xl mt-2 mr-4 ml-4">
          Website <br /> Development
          </h2>
          </div>
          <p className="text-lg mt-5 mr-4 ml-4">
          We develop websites that perfectly align with
          our clients' needs and effectively represent their brand identity.
          </p> 
        </Card>
        <Card className="mt-5 lg:mt-0 w-90 h-60">
          <div className="flex mt-5">
          <ShoppingCart className="w-20 h-20 text-blue-900 ml-2"/>
          <h2 className="font-bold text-2xl mt-2 mr-4 ml-4">
          Ecommerce <br /> Development
          </h2>
          </div>
          <p className="text-lg mt-5 mr-4 ml-4">
          We create e-commerce solutions that easy to 
          navigate and also highly effective in converting visitors 
          into customers.
          </p> 
        </Card>
        <Card className="mt-5 lg:mt-0 w-90 h-60">
          <div className="flex mt-5">
          <MonitorSmartphone className="w-20 h-20 text-blue-900 ml-2"/>
          <h2 className="font-bold text-2xl mt-2 mr-4 ml-4">
            UI/UX <br /> design
          </h2>
          </div>
          <p className="text-lg mt-5 mr-4 ml-4">
          We design elegant and user-friendly User Interface/User 
          Experience that are visually appealing.
          </p> 
        </Card>
        <Card className="mt-5 lg:mt-0 w-90 h-60">
          <div className="flex mt-5">
          <MonitorSmartphone className="w-20 h-20 text-blue-900 ml-2"/>
          <h2 className="font-bold text-2xl mt-2 mr-4 ml-4">
            MVP <br /> Development
          </h2>
          </div>
          <p className="text-lg mt-5 mr-4 ml-4 ">
          We develop a minimum viable product (MVP) to kickstart your 
          ideas and gather feedback from your users.
          </p> 
        </Card>
        <Card className="mt-5 lg:mt-0 w-100 h-100">
          <div className="flex mt-5">
          <MonitorSmartphone className="w-20 h-20 text-blue-900 ml-2"/>
          <h2 className="font-bold text-2xl mt-2 mr-4 ml-4">
            CMS <br /> Development
          </h2>
          </div>
          <p className="text-lg mt-5 mr-4 ml-4">
          We create customized content management systems to fit clients
           needs and streamline workflows with automation.
          </p> 
        </Card>
      </div>




      <div className="mt-40">
        <h1 className="text-center font-bold text-4xl mr-10 ml-10 mb-2">
          SKilled Web Developers For Different Industry
        </h1>
        <p className="text-center mr-10 ml-10 text-xl lg:mr-20 lg:ml-20">
          At Netcrest, we build powerful, customer-attracting websites and 
          web apps tailored to diverse industries, aligning with brand 
          identity.
        </p>
       
      <div className="grid grid-cols-2 space-y-4 space-x-4 lg:grid-cols-4 lg:space-x-6 lg:space-y-6 mt-5 
        mr-12 ml-12">
        <Card className="lg:ml-6 lg:mt-6 mt-4 ml-4 flex flex-col items-center justify-center w-50">
          <Landmark className="w-40 h-40 text-blue-900" />
          <h2 className="font-bold text-xl mt-2 text-center">Banking</h2>
        </Card>
        <Card className=" lg:mt-0 flex flex-col items-center justify-center w-50">
          <Scale className="w-40 h-40 text-blue-900" />
          <h2 className="font-bold text-xl mt-2 text-center">Government</h2>
        </Card>
        <Card className=" lg:mt-0 flex flex-col items-center justify-center w-50">
          <University className="w-40 h-40 text-blue-900" />
          <h2 className="font-bold text-xl mt-2 text-center">Education</h2>
        </Card>
        <Card className=" lg:mt-0 flex flex-col items-center justify-center w-50">
          <Router className="w-40 h-40 text-blue-900" />
          <h2 className="font-bold text-xl mt-2 text-center">IT</h2>
        </Card>
        <Card className="lg:mt-0 flex flex-col items-center justify-center w-50">
          <Truck className="w-40 h-40 text-blue-900" />
          <h2 className="font-bold text-xl mt-2 text-center">Logistics</h2>
        </Card>
        <Card className="lg:mt-0 flex flex-col items-center justify-center w-50">
          <Hospital className="w-40 h-40 text-blue-900" />
          <h2 className="font-bold text-xl mt-2 text-center">Healthcare</h2>
        </Card>
        <Card className="lg:mt-0 flex flex-col items-center justify-center w-50">
          <Waypoints className="w-40 h-40 text-blue-900" />
          <h2 className="font-bold text-xl mt-2 text-center">Supply chain</h2>
        </Card>
        <Card className="lg:mt-0 flex flex-col items-center justify-center w-50">
          <Store className="w-40 h-40 text-blue-900" />
          <h2 className="font-bold text-xl mt-2 text-center">Ecommerce</h2>
        </Card>
        </div>
      </div>


    <MaxWidthWrapper>
      <div className='text-center mt-40 mr-20 ml-20'>
          <h1 className='text-3xl font-bold pb-4'>
            Our Tech Stack
          </h1>  
      </div>

      <div className='grid gap-5 lg:grid-cols-2'>
         <Card className='border-2'>
            <CardContent className='justify-center text-lg ml-10'>
              <h1 className='mt-10 font-bold text-5xl'>
              The Right Tech Stack Makes All Difference
              </h1>
            </CardContent>
            <CardFooter className="flex item-center justify-center mt-5">
              <Button
                asChild
                variant="outline"
                size="default"
                className="relative px-6 py-3 ml-2 text-lg border-2 border-blue-900 bg-blue-800 text-white"
              >
                <a href="/#">
                  Get in touch
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card className=''>
            <CardContent className='justify-center text-lg mt-5'>
              <Techstackdrawer/>
            </CardContent>
          </Card>
        </div>
     </MaxWidthWrapper>




     <MaxWidthWrapper>
      <div className='text-center mt-40 mr- ml-'>
          <h1 className='text-3xl font-bold pb-4 mb-5'>
            Start a conversation by filling out the form
          </h1>  
      </div>
      <div className='grid gap-5 lg:grid-cols-2 mt-2'>
        <CardContent className='justify-center text-lg lg:mt-10'>
            <div className="flex text-blue-800 space-x-3 ml-2 mb-4">
              <Check className=""/>
                <h1 className="text-black">
                  Signed NDA to keep all project-related information confidential
                </h1>
            </div>

            <div className="flex text-blue-800 space-x-3 ml-2 mb-4">
              <Check className=""/>
                <h1 className="text-black">
                  Free consultation for your project.
                </h1>
            </div>

            <div className="flex text-blue-800 space-x-3 ml-2 mb-4">
              <Check className=""/>
                <h1 className="text-black">
                  Transparent pricing policy.
                </h1>
            </div>

            <div className="flex text-blue-800 space-x-3 ml-2 mb-4">
              <Check className=""/>
                <h1 className="text-black">
                  Flexible engagement models. 
                </h1>
            </div>

            <div className="flex text-blue-800 space-x-3 ml-2 mb-4">
              <Check className=""/>
                <h1 className="text-black">
                  SWIFT kick start to your project.
                </h1>
          </div>

          <div className="flex text-blue-800 space-x-3 ml-2 mb-4">
            <Check className=""/>
              <h1 className="text-black">
               We always deliver the source code with the project.
              </h1>
          </div>
          </CardContent>

          <Card className=''>
            <CardContent className='justify-center text-lg mt-5'>
              <Contactform />
            </CardContent>
          </Card>
        </div>
     </MaxWidthWrapper>
    </MaxWidthWrapper>
    </div>
  );
};

export default WhatWeDo;
