import React from "react";

export default function ChoseUsNow() {
  return (
    <div
      className="grid grid-cols-1 gap-4 lg:grid-cols-3 
        lg:gap-8 mr-10 ml-10 lg:mr-20 lg:ml-20"
    >
      <div className="h- rounded-lg lg:mt-32">
        <h2 className="text-3xl font-bold sm:text-4xl ">
          Why choose
          <span className="bg-blue-800 text-white">us?</span>
        </h2>

        <p className="mt-4 text-gray-600">
          At Netcrest, we bring your unique vision to life with strategic
          innovation. Tailoring solutions to your specific needs, we ensure an
          exceptional online presence. Let's turn your ideas into reality with
          creativity and precision.
        </p>

        {/*button for large devices*/}
        <a
          href="/WhatWeDoNew"
          className="hidden mt-8 lg:inline-block rounded border-2 
              border-blue-700 bg-bwhite px-12 py-3 
              text-md font-medium text-black  
              shadow-md shadow-blue-300 transform hover:scale-105 
              transition-transform duration-300"
        >
          Learn more...
        </a>
      </div>

      <div
        className="grid gap-4 col-span-2 lg:grid-cols-3 grid-cols-1 
      md:grid-cols-3 lg:gap-8 "
      >
        <a
          className="block rounded-xl border border-gray-800 p-4 shadow-xl 
          transition shadow-blue-200 hover:border-l-blue-800 hover:border-b-blue-800
          hover:shadow-blue-500/10  transform hover:scale-105 
           duration-300"
          href="#"
        >
          <h2 className="mt-2 font-bold text-xl">
            Dynamic and Responsive Solutions
          </h2>
          <p className="sm:mt-1 sm:block sm:text-md sm:text-gray-600 mt-2">
            Refers to the capability of applications to adapt and respond to
            changes in demand, user behavior, or environmental conditions.
          </p>
        </a>

        <a
          className="block rounded-xl border border-gray-800 p-4 shadow-xl 
          transition hover:border-blue-800 hover:shadow-blue-500/10 transform hover:scale-105 
          duration-300 shadow-blue-200"
          href="#"
        >
          <h2 className="mt-2 font-bold text-xl">
            High Performance Applications
          </h2>
          <p className="sm:mt-1 sm:block sm:text-sm sm:text-gray-600 mt-2">
            Focuses on developing software and systems that deliver superior
            performance in terms of speed, reliability, and efficiency.
          </p>
        </a>

        <a
          className="block rounded-xl border border-gray-800 p-4 shadow-xl 
          transition hover:border-blue-700 hover:shadow-blue-500/10 transform hover:scale-105 
          duration-300 shadow-blue-200"
          href="#"
        >
          <h2 className="mt-2 font-bold text-xl">Fast and Interactive</h2>
          <p className="sm:mt-1 sm:block sm:text-sm sm:text-gray-600 mt-2">
            Refers to the ability of application to provide quick responses and
            seamless interactions for users. This involves optimizing
            performance to ensure minimal latency and smooth user experiences.
          </p>
        </a>

        <a
          className="block rounded-xl border border-gray-800 p-4 shadow-xl 
          transition hover:border-blue-800 hover:shadow-blue-500/10 transform hover:scale-105 
          duration-300 shadow-blue-200"
          href="#"
        >
          <h2 className="mt-2 font-bold text-xl">
            Scalable and Secure Solutions
          </h2>
          <p className="sm:mt-1 sm:block sm:text-sm sm:text-gray-600 mt-2">
            The ability to handle more users or data without degradation in
            performance, while security ensures that data and assets remain
            protected against unauthorized access or attacks.
          </p>
        </a>

        <a
          className="block rounded-xl border border-gray-800 p-4 shadow-xl 
          transition hover:border-blue-800 hover:shadow-blue-500/10 transform hover:scale-105 
          duration-300 shadow-blue-200"
          href="#"
        >
          <h2 className="mt-2 font-bold text-xl">
            Timely Delivery and Support
          </h2>
          <p className="sm:mt-1 sm:block sm:text-sm sm:text-gray-600 mt-2">
            Stresses the commitment to delivering products or services on
            schedule and providing ongoing support to ensure continued operation
            and satisfaction.
          </p>
        </a>

        <a
          className="block rounded-xl border border-gray-800 p-4 shadow-xl 
          transition hover:border-blue-800 hover:shadow-blue-500/10 transform hover:scale-105 
          duration-300 shadow-blue-200"
          href="#"
        >
          <h2 className="mt-2 font-bold text-xl">Collaborative Approach</h2>
          <p className="sm:mt-1 sm:block sm:text-sm sm:text-gray-600 mt-2">
            This approach encourages open communication, shared decision-making,
            and collective problem-solving among team members to foster
            innovation, efficiency, and satisfaction.
          </p>
        </a>
      </div>
    </div>
  );
}
