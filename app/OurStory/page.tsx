import CallToAction from "@/components/CallToAction";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TestimoneySlider from "@/components/TestimoneySlider";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function OurStory() {
  return (
    <div>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl">
              WHO <br />
              <strong className="font-extrabold text-blue-800 sm:block">
                WE ARE{" "}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              At Net CresT, we are passionate about transforming ideas into
              dynamic digital experiences. Our mission is to innovate with
              simplicity, speed, and interaction, ensuring that our clients
              thrive in the digital world.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-blue-800 px-12 py-3 text-sm 
                font-medium text-white shadow hover:bg-blue-800 focus:outline-none 
                focus:ring active:bg-blue-500 sm:w-auto"
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
        <section>
          <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
              <div className="relative z-10 lg:py-16">
                <div className="relative h-64 sm:h-80 lg:h-full">
                  <img
                    alt=""
                    src="samuel.png"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="relative flex items-center bg-gray-100">
                <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

                <div className="p-8 sm:p-16 lg:p-24">
                  <h2 className="text-2xl font-bold sm:text-3xl">Our Vision</h2>

                  <p className="mt-4 text-gray-600">
                    Our journey began with a vision to revolutionize the digital
                    landscape by providing innovative, high-quality solutions
                    tailored to meet the unique needs of each client. Founded by
                    Samuel Stanley, Netcrest has grown from a small startup into
                    a trusted partner for businesses looking to make a mark in
                    the digital world.
                  </p>

                  <a
                    href="#"
                    className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*for mobile*/}
        <section className="lg:hidden">
          <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
              <div className="relative z-10 lg:py-16">
                <div className="relative h-64 sm:h-80 lg:h-full">
                  <img
                    alt=""
                    src="samuel.png"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="relative flex items-center bg-gray-100">
                <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

                <div className="p-8 sm:p-16 lg:p-24">
                  <h2 className="text-2xl font-bold sm:text-3xl">
                    Our Mission
                  </h2>

                  <p className="mt-4 text-gray-600">
                    Our journey began with a vision to revolutionize the digital
                    landscape by providing innovative, high-quality solutions
                    tailored to meet the unique needs of each client. Founded by
                    Samuel Stanley, Netcrest has grown from a small startup into
                    a trusted partner for businesses looking to make a mark in
                    the digital world.
                  </p>

                  <p>
                    Founder <br />
                    Samuel Stanley
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*for large devices*/}
        <section className="hidden lg:block">
          <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
              <div className="relative flex items-center bg-gray-100">
                <span className="hidden lg:absolute lg:inset-y-0 lg:-end-16 lg:block lg:w-16 lg:bg-gray-100"></span>

                <div className="p-8 sm:p-16 lg:p-24">
                  <h2 className="text-2xl font-bold sm:text-3xl">
                    Our Mission
                  </h2>

                  <p className="mt-4 text-gray-600">
                    Our journey began with a vision to revolutionize the digital
                    landscape by providing innovative, high-quality solutions
                    tailored to meet the unique needs of each client. Founded by
                    Samuel Stanley, Netcrest has grown from a small startup into
                    a trusted partner for businesses looking to make a mark in
                    the digital world.
                  </p>

                  <a
                    href="#"
                    className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>

              <div className="relative z-10 lg:py-16">
                <div className="relative h-64 sm:h-80 lg:h-full">
                  <img
                    alt=""
                    src="samuel.png"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>

      <section>
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center ltr:sm:text-left rtl:sm:text-right">
            <CallToAction />
          </div>
        </div>
      </section>

      <section className="mt-40">
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className=" p-8 md:p-12 lg:px-16 lg:py-24">
              <div className="mx-auto max-w-xl text-center">
                <h2 className="text-2xl font-bold text-black md:text-3xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit
                </h2>

                <p className=" text-black/90 sm:mt-4 sm:block">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                  egestas tempus tellus etiam sed. Quam a scelerisque amet
                  ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
                  quisque ut interdum tincidunt duis.
                </p>

                <div className="mt-4 md:mt-8"></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <img
                alt=""
                src="/samuel.png"
                className="h-40 w-full object-cover sm:h-56 md:h-full"
              />
              <img
                alt=""
                src="/samuel.png"
                className="h-40 w-full object-cover sm:h-56 md:h-full"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20">
        <TestimoneySlider />
      </section>
    </div>
  );
}
