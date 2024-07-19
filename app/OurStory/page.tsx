import CallToAction from "@/components/CallToAction";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TestimoneySlider from "@/components/TestimoneySlider";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function OurStory() {
  return (
    <div>
      <section className="max-h-screen shadow-xl shadow-blue-300">
        <div
          className="mx-auto max-w-screen-xl px-4 
        py-32 lg:flex lg:h-screen lg:items-center"
        >
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl">
              WHO <br />
              <strong className="font-extrabold text-blue-800 sm:block">
                WE ARE{" "}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              We are NetCresT, we are passionate about your ideas about
              transforming them into dynamic digital experiences. Our mission is
              to build exceptional digital solutions that are impartful and
              scalable with simplicity and speed.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
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
            </div>
          </div>
        </div>
      </section>

      <MaxWidthWrapper>
        <section>
          <div className="mx-auto max-w-screen-2xl mb-20 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
              <div className=" lg:py-16">
                <div className="relative sm:h-full lg:h-full">
                  <img alt="" src="discover.svg" className="" />
                </div>
              </div>

              <div className="relative flex items-center ">
                <span
                  className="hidden lg:absolute lg:inset-y-0 lg:-start-16 
                lg:block lg:w-16 "
                ></span>

                <div className="p-8 sm:p-16 lg:p-24 shadow-xl shadow-blue-300 border-r border-b border-black rounded-xl">
                  <h2 className="text-2xl font-bold sm:text-3xl">Our Vision</h2>

                  <p className="mt-4 text-gray-600 text-xl">
                    To be at the forefront of digital innovation, creating
                    experiences that captivate and engage.
                  </p>

                  <h2 className="text-2xl font-bold sm:text-3xl mt-20">
                    Our Mission
                  </h2>
                  <p className="mt-4 text-gray-600 text-xl">
                    To deliver exceptional digital solutions that empowers our
                    clients and end-users to achieve their goals with ease and
                    efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>

      <section>
        <div className="mx-auto sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className=" flex items-center b">
              <div className="p-2 lg:p-8 sm:p-16">
                {/*for mobile*/}
                <CardContent className="lg:hidden">
                  <img
                    alt=""
                    src="/Programmer.png"
                    className="h-auto w-full object-cover"
                  />
                </CardContent>

                <CardContent
                  className="border-l border-b rounded-xl 
                border-black shadow-xl shadow-blue-200 py-10"
                >
                  <p className="font-bold text-4xl ">
                    Our{" "}
                    <span className="bg-blue-800 text-white px-2">Story</span>{" "}
                  </p>

                  <p className="mt-4 text-gray-600 px-2 text-xl">
                    Samuel Stanley, a forward-thinking IT enthusiast with a love
                    for building web solutions founded NetCresT. NetCresT is a
                    tech start up focusing on creativity and innovation, aiming
                    to solve problems by transforming ideas into real-time
                    solutions. At NetCresT, we believe that ideas should be
                    turned into practical solutions and issues should be solved.
                    Our goal is to help businesses overcome the obstacles they
                    encounter in the digital era by offering them innovative
                    solutions that simplifies how we interact with the web. We
                    provide solutions that surpass our clients' expectations by
                    utilizing simplicity, speed, and interaction to their
                    fullest potential.
                  </p>
                </CardContent>
              </div>
            </div>

            {/*for large screen*/}
            <CardContent className="hidden lg:block">
              <img
                alt=""
                src="/Programmer.png"
                className="h-auto w-full object-cover"
              />
            </CardContent>
          </div>
        </div>
      </section>

      <section>
        <div className="p-2 md:p-12 lg:px-20 lg:py-24 mt-10 lg:mt-0">
          <div className="text-center ltr:sm:text-left rtl:sm:text-right lg:border-t">
            <CallToAction />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto sm:px-6 lg:px-20 mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className=" flex items-center b">
              <div className="p-2 lg:p-8 sm:p-16">
                <CardContent
                  className="border-l border-b rounded-xl 
                border-black shadow-xl shadow-blue-200 py-10"
                >
                  <p className="font-bold text-4xl ">
                    Our{" "}
                    <span className="bg-blue-800 text-white px-2">Team</span>{" "}
                  </p>

                  <div>
                    <p className="mt-4 text-gray-600 px-2 text-xl">
                      Our team is our greatest asset. Comprised of skilled
                      professionals with diverse expertise, we work
                      collaboratively to deliver outstanding results. Meet our
                      key team members who bring passion and creativity to every
                      project.
                    </p>
                    <div>
                      <div className="mx-auto max-w-screen-xl sm:px-6 ">
                        <div className="mt-8 grid grid-cols-3 gap-8 md:grid-cols-3 lg:grid-cols-3">
                          <div className="block border border-gray-800 p- shadow-xl">
                            <img src="/samuel.png" alt="" />
                          </div>

                          <div className="block border border-gray-800 p- shadow-xl">
                            <img src="/samuel.png" alt="" />
                          </div>

                          <div className="block border border-gray-800 p- shadow-xl">
                            <img src="/samuel.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </div>

            <div className=" flex items-center b">
              <div className="p-2 lg:p-8 sm:p-16">
                <CardContent
                  className="border-r border-b rounded-xl 
                border-black shadow-xl shadow-blue-200 py-10"
                >
                  <p className="font-bold text-4xl ">
                    Our{" "}
                    <span className="bg-blue-800 text-white px-2">Values</span>{" "}
                  </p>
                  <p className="mt-4 text-gray-600 px-2 text-xl">
                    <span className="font-bold text-xl text-black">
                      {" "}
                      Excellence:{" "}
                    </span>
                    We uphold high standards, refining our skills and processes
                    to deliver exceptional results.
                  </p>
                  <p className="mt-4 text-gray-600 px-2 text-xl">
                    <span className="font-bold text-xl text-black">
                      {" "}
                      Creativity:{" "}
                    </span>
                    Bringing fresh ideas and innovative solutions to the table.{" "}
                  </p>
                  <p className="mt-4 text-gray-600 px-2 text-xl">
                    <span className="font-bold text-xl text-black">
                      {" "}
                      Collaboration:{" "}
                    </span>
                    Working closely with our clients to understand and achieve
                    their vision.{" "}
                  </p>
                  <p className="mt-4 text-gray-600 px-2 text-xl">
                    <span className="font-bold text-xl text-black">
                      {" "}
                      Integrity:{" "}
                    </span>
                    Our business values integrity, promoting honesty,
                    transparency, and ethical practices.{" "}
                  </p>
                  <p className="mt-4 text-gray-600 px-2 text-xl">
                    <span className="font-bold text-xl text-black">
                      {" "}
                      Inovation:{" "}
                    </span>
                    We are dedicated to innovation, constantly exploring new
                    technologies and methodologies.{" "}
                  </p>
                </CardContent>
              </div>
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
