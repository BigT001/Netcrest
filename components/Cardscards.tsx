import {
  LayoutDashboard,
  MonitorSmartphone,
  PanelsTopLeft,
  ShoppingCart,
  Tablet,
  Touchpad,
} from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

export default function Cardscards() {
  return (
    <div>
      <section className=" text-black">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <h2 className="text-3xl font-bold text-center mr-10 ml-10">
            Web Development
            <span className="bg-blue-900 text-white"> Services </span>
            We Offer
          </h2>
          <div className="mx-auto max-w-lg text-center">
            <p className="mt-4 text-black">
              With our end-to-end web development services, we address your
              unique needs, delivering responsive apps that work perfectly
              across desktops, tablets, and mobile devices
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mr-10 ml-10">
            <a
              className="block rounded-xl p-8 
            transition hover:border-blue-500 hover:shadow-blue-500/10 
            border-l border-b border-black shadow-xl shadow-blue-200"
            >
              <MonitorSmartphone
                className="w-10 h-10 text-black ml-2transition 
            hover:border-blue-500 hover:shadow-blue-800/10 
            border-l border-b border-black shadow-lg shadow-blue-200"
              />
              <h2 className="mt-4 text-xl font-bold text-black">
                Web App Development
              </h2>

              <p className="mt-1 text-sm text-gray-black">
                Our focus is on constructing web applications that address
                specific challenges in line with our clients vision.
              </p>
            </a>

            {/* for mobile view*/}
            <a
              className="lg:hidden block rounded-xl p-8 hover:shadow-blue-800/10
              transition hover:border-blue-500 border-r border-b
               border-black shadow-xl shadow-blue-200"
            >
              <PanelsTopLeft
                className="w-10 h-10 text-black ml-2transition 
            hover:border-blue-500 hover:shadow-blue-800/10 
            border-l border-b border-black shadow-lg shadow-blue-200"
              />

              <h2 className="mt-4 text-xl font-bold text-black">
                Website Development
              </h2>

              <p className="mt-1 text-sm text-black">
                We develop websites that perfectly align with our clients needs
                and effectively represent their brand identity.
              </p>
            </a>

            {/* for desktop view*/}
            <a
              className="hidden lg:block rounded-xl p-8 hover:shadow-blue-800/10
              transition hover:border-blue-500 border-r border-l
               border-black shadow-xl shadow-blue-200"
            >
              <PanelsTopLeft
                className="w-10 h-10 text-black ml-2transition 
            hover:border-blue-500 hover:shadow-blue-800/10 
            border-l border-b border-black shadow-lg shadow-blue-200"
              />

              <h2 className="mt-4 text-xl font-bold text-black">
                Website Development
              </h2>

              <p className="mt-1 text-sm text-black">
                We develop websites that perfectly align with our clients needs
                and effectively represent their brand identity.
              </p>
            </a>

            <a
              className="block rounded-xl p-8 transition 
            hover:border-blue-500 hover:shadow-blue-800/10
            border-l border-b border-black shadow-xl shadow-blue-200"
            >
              <ShoppingCart
                className="w-10 h-10 text-black ml-2transition 
            hover:border-blue-500 hover:shadow-blue-800/10 
            border-r border-b border-black shadow-lg shadow-blue-200"
              />

              <h2 className="mt-4 text-xl font-bold text-black">
                Ecommerce Development
              </h2>

              <p className="mt-1 text-sm text-black">
                We create e-commerce solutions that easy to navigate and also
                highly effective in converting visitors into customers.
              </p>
            </a>

            <a
              className="block rounded-xl p-8 transition 
           hover:border-blue-500 hover:shadow-blue-800/10 
            border-r border-b border-black shadow-xl shadow-blue-200"
            >
              <LayoutDashboard
                className="w-10 h-10 text-black ml-2transition 
            hover:border-blue-500 hover:shadow-blue-800/10 
            border-l border-b border-black shadow-lg shadow-blue-200"
              />

              <h2 className="mt-4 text-xl font-bold text-black">
                UI/UX design
              </h2>

              <p className="mt-1 text-sm text-black">
                We design elegant and user-friendly User Interface/User
                Experience that are visually appealing.
              </p>
            </a>

            {/* for mobile view*/}
            <a
              className="lg:hidden block rounded-xl p-8  transition 
           hover:border-blue-500 hover:shadow-blue-800/10 
            border-l border-b border-black shadow-xl shadow-blue-200"
            >
              <Tablet
                className="w-10 h-10 text-black ml-2transition 
            hover:border-blue-500 hover:shadow-blue-800/10 
            border-r border-b border-black shadow-lg shadow-blue-200"
              />

              <h2 className="mt-4 text-xl font-bold text-black">
                MVP Development
              </h2>

              <p className="mt-1 text-sm text-black">
                We develop a minimum viable product (MVP) to kickstart your
                ideas and gather feedback from your users.
              </p>
            </a>

            {/* for desktop view*/}
            <a
              className="hidden lg:block rounded-xl p-8  transition 
           hover:border-blue-500 hover:shadow-blue-800/10 
            border-l border-r border-black shadow-xl shadow-blue-200"
            >
              <Tablet
                className="w-10 h-10 text-black ml-2 transition 
            hover:border-blue-500 hover:shadow-blue-800/10 
            border-t border-b border-black shadow-lg shadow-blue-200"
              />

              <h2 className="mt-4 text-xl font-bold text-black">
                MVP Development
              </h2>

              <p className="mt-1 text-sm text-black">
                We develop a minimum viable product (MVP) to kickstart your
                ideas and gather feedback from your users.
              </p>
            </a>

            <a
              className="block rounded-xl p-8 transition 
            hover:border-blue-500 hover:shadow-blue-800/10 
            border-r border-b border-black shadow-xl shadow-blue-200"
            >
              <Touchpad
                className="w-10 h-10 text-black ml-2 transition 
            hover:border-blue-500 hover:shadow-blue-800/10 
            border-l border-b border-black shadow-lg shadow-blue-200"
              />

              <h2 className="mt-4 text-xl font-bold text-black">
                CMS Development
              </h2>

              <p className="mt-1 text-sm text-black">
                We create customized content management systems to fit clients
                needs and streamline workflows with automation.
              </p>
            </a>
          </div>

          {/*    <div className="mt-12 text-center">
      <a
        className="inline-block rounded bg-blue-900 px-8 py-3 
        text-sm font-medium text-white transition hover:scale-110 
        hover:shadow-md focus:outline-none focus:ring 
        border-2 shadow-lg hover:shadow-blue-600"
        href="#">
        Learn more...
      </a>  
    </div>
    */}
        </div>
      </section>
    </div>
  );
}
