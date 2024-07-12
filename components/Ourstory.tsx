import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnimatedListDisplay } from "./Animatedlistdisplay";
import { Testimoney } from "./Testimoney";

export default function Ourstory() {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 border-2 shadow-xl 
          shadow-blue-300 border-gray-300 pt-16 mt-20  
            lg:mr-20 lg:ml-20 sm:pb-5 lg:gap-x-0 rounded-xl"
    >
      <div
        className="grid gap-5 text-md pr-5 pl-5 
              shadow-md rounded-xl shadow-blue-400"
      >
        <div className="text-center text-white">
          <h1 className="text-3xl text-black font-bold ">
            Our <span className="bg-blue-800 text-white px-2">Story</span>
          </h1>
        </div>

        <div>
          <p className="text-left text-black text-lg lg:pr-10 lg:pl-10">
            Our journey began with a vision to revolutionize the digital
            landscape by providing innovative, high-quality solutions tailored
            to meet the unique needs of each client. Founded by Samuel Stanley,
            Netcrest has grown from a small startup into a trusted partner for
            businesses looking to make a mark in the digital world.
          </p>

          <div className="pb-10 mt-20">
            <Testimoney />
          </div>

          <CardFooter className="hidden lg:flex justify-center mt-10">
            <a
              href="/ContactPage"
              className="inline-block rounded border-2 
                      border-blue-700 bg-white px-12 py-3 
                      text-md font-medium text-black  
                      shadow-md shadow-blue-300 transform hover:scale-105 
                      transition-transform duration-300"
            >
              Learn More
            </a>
          </CardFooter>
        </div>
      </div>

      <div className="shadow-md shadow-blue-400 rounded-xl">
        <div className="text-center text-white mt-20 lg:mt-10 mb-5">
          <h1 className="text-3xl text-black font-bold ">
            Our <span className="bg-blue-800 text-white px-2">Values</span>
          </h1>
        </div>

        <CardContent className="text-lg">
          <AnimatedListDisplay />
        </CardContent>

        <CardFooter>
          <a
            href="/ContactPage"
            className="lg:hidden inline-block rounded border-2 
                 border-blue-700 bg-white px-12 py-3 
                 text-md font-medium text-black  
                 shadow-md shadow-blue-300 transform hover:scale-105 
                 transition-transform duration-300"
          >
            Learn More
          </a>
        </CardFooter>
      </div>
    </div>
  );
}
