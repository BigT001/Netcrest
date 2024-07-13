import CallToAction from "@/components/CallToAction";
import ContactForm from "@/components/Contactform";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import {
  Check,
  Hospital,
  Landmark,
  Router,
  Scale,
  Store,
  Truck,
  University,
  Waypoints,
} from "lucide-react";
import React from "react";

export default function WhatWeDoNew() {
  return (
    <div>
      <div
        className="lg:px-36 lg:flex lg:items-center 
       lg:space-x-8 shadow-xl shadow-blue-300 mr-5 ml-5"
      >
        <div className="mt-10 lg:mt-0 text-center lg:text-left lg:flex-1">
          <h1 className="font-extrabold text-4xl">
            What we
            <span className="text-blue-800"> Do?</span>
          </h1>

          <p className="mt- font-semibold text-2xl sm:text-xl/relaxed mb-5">
            We bring your visoin to life
          </p>

          <div className="ml-10 lg:m-0">
            <div className="flex text-blue-800 space-x-3 ml-2 mb-4">
              <Check className="" />
              <h1 className="text-black">Signed NDA to keep all</h1>
            </div>

            <div className="flex text-blue-800 space-x-3 ml-2 mb-4">
              <Check className="" />
              <h1 className="text-black">
                Free consultation for your project.
              </h1>
            </div>

            <div className="flex text-blue-800 space-x-3 ml-2 mb-4">
              <Check className="" />
              <h1 className="text-black">Transparent pricing policy.</h1>
            </div>

            <div className="flex text-blue-800 space-x-3 ml-2 mb-4">
              <Check className="" />
              <h1 className="text-black">Flexible engagement models.</h1>
            </div>

            <div className="flex text-blue-800 space-x-3 ml-2 mb-4">
              <Check className="" />
              <h1 className="text-black">SWIFT kick start to your project.</h1>
            </div>

            <div className="flex text-blue-800 space-x-3 ml-2 mb-4">
              <Check className="" />
              <h1 className="text-black">We always deliver the source code.</h1>
            </div>

            <div className="flex text-blue-800 space-x-3 ml-2 mb-4">
              <Check className="" />
              <h1 className="text-black">We always deliver the source code.</h1>
            </div>

            <div className="flex text-blue-800 space-x-3 ml-2 mb-4">
              <Check className="" />
              <h1 className="text-black">We always deliver the source code.</h1>
            </div>

            <div className="flex text-blue-800 space-x-3 ml-2 mb-4">
              <Check className="" />
              <h1 className="text-black">We always deliver the source code.</h1>
            </div>
          </div>
        </div>

        <div className="lg:flex-1 lg:max-w-md mb-20 mt-20">
          <p className="text-3xl font-bold text-center">
            <span className="bg-blue-800 text-white px-2">Fill</span> out the
            form to start a Conversation with us today
          </p>
          <div className="pb-6 px-5 border shadow-xl shadow-blue-300">
            <ContactForm />
          </div>
        </div>
      </div>

      <span className="flex justify-center mt-40 lg:mb-10 font-bold text-3xl">
        Web
        <span className="bg-blue-900 text-white px-2">App</span>
        Development
      </span>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mr-10 ml-10 lg:mr-20 lg:ml-20">
        <div className="mt-10">
          <img src="WebApppic.svg" alt="" />
        </div>

        <div className="shadow-xl shadow-blue-300">
          <Card>
            <h1
              className="font-semibold font-md text-xl text-center  
                py-2 shadow-md shadow-blue-300 px-3"
            >
              Our focus is on constructing web applications that address
              specific challenges in line with your vision.
            </h1>
            <ul className="mt-8 ml-8 font-bold text-2xl">Key Areas of Focus</ul>

            <Accordion type="single" collapsible className="w-full ml-5">
              <AccordionItem value="item-1">
                <span className="flex justify">
                  <Check className="shrink-0 text-blue-800 mt-4" />
                  <AccordionTrigger
                    className="text-xl transform hover:scale-105 
                           transition-transform duration-300"
                  >
                    Customer-first
                  </AccordionTrigger>
                </span>

                <AccordionContent
                  className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
                >
                  <span className="font-bold">
                    Understanding Client Needs <br />
                  </span>
                  We prioritize comprehensively understanding our clients'
                  goals, challenges, and visions. This involves in-depth
                  discussions, needs assessments, and ongoing consultations to
                  ensure alignment.
                </AccordionContent>
                <AccordionContent
                  className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
                >
                  <span className="font-bold">
                    Tailored Solutions <br />
                  </span>
                  Based on the insights gathered, we design and develop web
                  applications that are customized to meet the unique
                  requirements of each client, ensuring that the solutions
                  provided are not just functional but also highly relevant and
                  effective.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <span className="flex justify">
                  <Check className="shrink-0 text-blue-800 mt-4" />
                  <AccordionTrigger
                    className="text-xl transform hover:scale-105 
                      transition-transform duration-300"
                  >
                    Smart solutions{" "}
                  </AccordionTrigger>
                </span>
                <AccordionContent
                  className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
                >
                  <span className="font-bold">
                    Cutting-Edge Technologies <br />
                  </span>
                  We leverage the latest technologies and frameworks to build
                  web applications that are robust, scalable, and future-proof.
                  This includes the use of modern programming languages, cloud
                  services, and AI integration where applicable.
                </AccordionContent>
                <AccordionContent
                  className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
                >
                  <span className="font-bold">
                    Seamless User Experience <br />
                  </span>
                  Emphasis is placed on creating intuitive and seamless user
                  interfaces (UI) and experiences (UX). We ensure that the
                  applications are user-friendly, accessible, and engaging,
                  which is crucial for user adoption and satisfaction.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <span className="flex justify">
                  <Check className="shrink-0 text-blue-800 mt-4" />
                  <AccordionTrigger
                    className="text-xl transform hover:scale-105 
                           transition-transform duration-300"
                  >
                    Agile Methods
                  </AccordionTrigger>
                </span>
                <AccordionContent
                  className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
                >
                  <span className="font-bold">
                    Iterative Process <br />
                  </span>
                  We adopt an agile development methodology, which allows for
                  iterative progress and regular feedback loops. This ensures
                  that any changes in client requirements can be swiftly
                  accommodated without disrupting the overall project timeline.
                </AccordionContent>
                <AccordionContent
                  className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
                >
                  <span className="font-bold">
                    Open teamwork <br />
                  </span>
                  Our development process is highly collaborative, involving
                  clients at every stage. Regular updates, demos, and reviews
                  are part of our process to maintain transparency and ensure
                  that the project is on track.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <span className="flex justify">
                  <Check className="shrink-0 text-blue-800 mt-4" />
                  <AccordionTrigger
                    className="text-xl transform hover:scale-105 
                           transition-transform duration-300"
                  >
                    Quality checks
                  </AccordionTrigger>
                </span>
                <AccordionContent
                  className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
                >
                  <span className="font-bold">
                    Rigorous Testing <br />
                  </span>
                  We implement rigorous testing protocols to ensure that the web
                  applications are bug-free, secure, and perform optimally under
                  various conditions. This includes unit testing, integration
                  testing, performance testing, and user acceptance testing
                  (UAT).
                </AccordionContent>
                <AccordionContent
                  className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
                >
                  <span className="font-bold">
                    Continuous Improvement <br />
                  </span>
                  Post-deployment, we offer maintenance and support services to
                  ensure that the application remains up-to-date with the latest
                  technology trends and continues to operate efficiently.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <span className="flex justify">
                  <Check className="shrink-0 text-blue-800 mt-4" />
                  <AccordionTrigger
                    className="text-xl transform hover:scale-105 
                           transition-transform duration-300"
                  >
                    Scalability and Flexibility
                  </AccordionTrigger>
                </span>
                <AccordionContent
                  className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
                >
                  <span className="font-bold">
                    Scalable Architecture <br />
                  </span>
                  Our web applications are built with scalability in mind,
                  ensuring they can grow alongside the clients' business needs
                  without compromising performance.
                </AccordionContent>
                <AccordionContent
                  className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
                >
                  <span className="font-bold">
                    Flexible Solutions <br />
                  </span>
                  We design solutions that are flexible and adaptable, allowing
                  for easy updates and integration with other systems as
                  required by the clients.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <span className="flex justify">
                  <Check className="shrink-0 text-blue-800 mt-4" />
                  <AccordionTrigger
                    className="text-xl transform hover:scale-105 
                           transition-transform duration-300"
                  >
                    Security and Compliance
                  </AccordionTrigger>
                </span>
                <AccordionContent
                  className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
                >
                  <span className="font-bold">
                    Data Protection <br />
                  </span>
                  Ensuring the security and privacy of user data is paramount.
                  We implement robust security measures, including encryption,
                  secure authentication, and regular security audits.
                </AccordionContent>
                <AccordionContent
                  className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
                >
                  <span className="font-bold">
                    Compliance <br />
                  </span>
                  We stay abreast of industry regulations and compliance
                  requirements, ensuring that our applications adhere to
                  relevant standards, such as GDPR, HIPAA, and others as
                  applicable.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <span className="flex justify">
                  <Check className="shrink-0 text-blue-800 mt-4" />
                  <AccordionTrigger
                    className="text-xl transform hover:scale-105 
                           transition-transform duration-300"
                  >
                    Post-Launch and Support
                  </AccordionTrigger>
                </span>
                <AccordionContent
                  className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
                >
                  <span className="font-bold">
                    Ongoing Support <br />
                  </span>
                  We provide continuous support and maintenance services to
                  address any issues that may arise
                </AccordionContent>
                <AccordionContent
                  className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
                >
                  <span className="font-bold">
                    Post-launch <br />
                  </span>
                  This includes bug fixes, performance optimization, and feature
                  enhancements.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </div>
      </div>

      {/*For web development*/}
      <span className="flex justify-center mb-3 lg:mb-10 font-bold text-3xl mt-20">
        Web<span className="bg-blue-900 text-white">site </span> Development
      </span>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mr-10 ml-10 lg:mr-20 lg:ml-20">
        <div className="">
          <img
            src="WebsiteCreator.svg"
            alt="Website design image"
            className="lg:mt-"
          />
        </div>

        <div className="shadow-xl shadow-blue-300">
          <Card>
            <h1
              className="font-semibold font-md text-xl text-center  
                py-2 shadow-md shadow-blue-300 px-3"
            >
              We specialize in designing and developeing websites that meets
              your specific needs
            </h1>
            <ul className="mt-5 ml-8 font-bold text-2xl">Key Areas of Focus</ul>

            <Accordion type="single" collapsible className="w-full ml-5">
              <AccordionItem value="item-1">
                <span className="flex justify">
                  <Check className="shrink-0 text-blue-800 mt-4" />
                  <AccordionTrigger
                    className="text-xl transform hover:scale-105 
                           transition-transform duration-300"
                  >
                    SEO optimization
                  </AccordionTrigger>
                </span>
                <AccordionContent
                  className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
                >
                  <span className="font-bold">
                    Keyword optimization <br />
                  </span>
                  We strategically incorporate relevant keywords into your
                  content, meta tags, and URLs to improve visibility for
                  targeted searches.
                </AccordionContent>
                <AccordionContent
                  className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
                >
                  <span className="font-bold">
                    Content structuring <br />
                  </span>
                  We organize your site's content with proper heading tags (H1,
                  H2, etc.) and schema markup to enhance search engine
                  understanding and display.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <span className="flex justify">
                  <Check className="shrink-0 text-blue-800 mt-4" />
                  <AccordionTrigger
                    className="text-xl transform hover:scale-105 
                           transition-transform duration-300"
                  >
                    Cost-effectivenes
                  </AccordionTrigger>
                </span>
                <AccordionContent
                  className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
                >
                  <span className="font-bold">
                    Competitive pricing <br />
                  </span>
                  We offer high-quality services at reasonable rates, ensuring
                  maximum value for your investment without compromising on
                  excellence.
                </AccordionContent>
                <AccordionContent
                  className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
                >
                  <span className="font-bold">
                    Value for money
                    <br />
                  </span>
                  Our solutions provide long-term benefits, maximizing your
                  investment. We focus on creating robust, scalable websites
                  that grow with your business, reducing future redevelopment
                  costs.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <span className="flex justify">
                  <Check className="shrink-0 text-blue-800 mt-4" />
                  <AccordionTrigger
                    className="text-xl transform hover:scale-105 
                           transition-transform duration-300"
                  >
                    User experience
                  </AccordionTrigger>
                </span>
                <AccordionContent
                  className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
                >
                  <span className="font-bold">
                    Responsive design <br />
                  </span>
                  Our websites adapt seamlessly to all screen sizes, providing a
                  consistent experience across devices.
                </AccordionContent>
                <AccordionContent
                  className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
                >
                  <span className="font-bold">
                    Performance optimization <br />
                  </span>
                  We ensure fast loading times and smooth interactions to keep
                  users engaged.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <span className="flex justify">
                  <Check className="shrink-0 text-blue-800 mt-4" />
                  <AccordionTrigger
                    className="text-xl transform hover:scale-105 
                           transition-transform duration-300"
                  >
                    Security focus
                  </AccordionTrigger>
                </span>
                <AccordionContent
                  className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
                >
                  <span className="font-bold">
                    SSL encryption
                    <br />
                  </span>
                  We implement HTTPS protocol to secure data transmission
                  between users and your site.
                </AccordionContent>
                <AccordionContent
                  className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
                >
                  <span className="font-bold">
                    Secure coding practices <br />
                  </span>
                  Our developers follow best practices to prevent common
                  security issues like SQL injection and cross-site scripting.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <span className="flex justify">
                  <Check className="shrink-0 text-blue-800 mt-4" />
                  <AccordionTrigger
                    className="text-xl transform hover:scale-105 
                           transition-transform duration-300"
                  >
                    Ongoing support
                  </AccordionTrigger>
                </span>
                <AccordionContent
                  className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
                >
                  <span className="font-bold">
                    Routine maintenance <br />
                  </span>
                  We offer regular updates and patches to keep your site secure
                  and functioning optimally.
                </AccordionContent>
                <AccordionContent
                  className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
                >
                  <span className="font-bold">
                    Technical assistance <br />
                  </span>
                  Our support team is available to address any issues or
                  questions that arise post-launch.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <span className="flex justify">
                  <Check className="shrink-0 text-blue-800 mt-4" />
                  <AccordionTrigger
                    className="text-xl transform hover:scale-105 
                           transition-transform duration-300"
                  >
                    Timely delivery
                  </AccordionTrigger>
                </span>
                <AccordionContent
                  className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
                >
                  <span className="font-bold">
                    Agile methodology <br />
                  </span>
                  We use an iterative approach that allows for flexibility and
                  faster delivery of working features.
                </AccordionContent>
                <AccordionContent
                  className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
                >
                  <span className="font-bold">
                    Clear project roadmap <br />
                  </span>
                  We establish and communicate a detailed timeline with specific
                  milestones.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <span className="flex justify">
                  <Check className="shrink-0 text-blue-800 mt-4" />
                  <AccordionTrigger
                    className="text-xl transform hover:scale-105 
                           transition-transform duration-300"
                  >
                    Scalability
                  </AccordionTrigger>
                </span>
                <AccordionContent
                  className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
                >
                  <span className="font-bold">
                    Flexible architecture <br />
                  </span>
                  We build your site on a robust, modular framework that can
                  easily accommodate future growth and new features.
                </AccordionContent>
                <AccordionContent
                  className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
                >
                  <span className="font-bold">
                    API integration <br />
                  </span>
                  We create APIs that allow for seamless integration with other
                  systems and future expansions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>
        </div>
      </div>

      <span className="flex justify-center lg:mb-10 font-bold text-3xl mt-20">
        UI/UX
        <span className="bg-blue-900 text-white">Design</span>
      </span>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mr-10 ml-10 lg:mr-20 lg:ml-20">
        <img src="UIUXdesign.svg" alt="" className="lg:hidden md:hidden" />
      </div>

      <div
        className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 
        mr-10 ml-10 lg:mr-20 lg:ml-20 "
      >
        <Card className="shadow-xl shadow-blue-300">
          <h1
            className="font-semibold font-md text-xl text-center  
                py-2 shadow-md shadow-blue-300 px-3"
          >
            We design elegant and user-friendly User Interfaces (UI) and User
            Experiences (UX) that are visually appealing and highly functional.
          </h1>
          <ul className="mt-5 ml-8 font-bold text-2xl px-5">
            Key Components of Our UI/UX Design Process
          </ul>

          <Accordion type="single" collapsible className="w-full ml-5">
            <AccordionItem value="item-1">
              <span className="flex justify">
                <Check className="shrink-0 text-blue-800 mt-4" />
                <AccordionTrigger
                  className="text-xl transform hover:scale-105 
                           transition-transform duration-300"
                >
                  User Research and Analysis
                </AccordionTrigger>
              </span>
              <AccordionContent
                className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
              >
                <span className="font-bold">
                  Understanding User Needs <br />
                </span>
                We conduct thorough research to understand the target audience,
                their behaviors, preferences, and pain points. This involves
                user interviews, surveys, and analyzing user data to gather
                valuable insights.
              </AccordionContent>
              <AccordionContent
                className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
              >
                <span className="font-bold">
                  Personas and Scenarios <br />
                </span>
                Based on the research, we create detailed user personas and
                scenarios that guide the design process, ensuring that the end
                product meets the actual needs and expectations of the users.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <span className="flex justify">
                <Check className="shrink-0 text-blue-800 mt-4" />
                <AccordionTrigger
                  className="text-xl transform hover:scale-105 
                           transition-transform duration-300"
                >
                  Wireframing
                </AccordionTrigger>
              </span>
              <AccordionContent
                className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
              >
                <span className="font-bold">
                  Structuring Information <br />
                </span>
                We develop a clear and logical information architecture that
                defines the structure and organization of the content within the
                application. This ensures that users can easily find the
                information they need.
              </AccordionContent>
              <AccordionContent
                className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
              >
                <span className="font-bold">
                  Wireframing <br />
                </span>
                We create wireframes to outline the basic layout and elements of
                each screen. Wireframes serve as a blueprint for the design,
                allowing us to focus on functionality and user flow without
                distractions from visual details.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <span className="flex justify">
                <Check className="shrink-0 text-blue-800 mt-4" />
                <AccordionTrigger
                  className="text-xl transform hover:scale-105 
                           transition-transform duration-300"
                >
                  Visual Design
                </AccordionTrigger>
              </span>
              <AccordionContent
                className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
              >
                <span className="font-bold">
                  Aesthetically Pleasing Design <br />
                </span>
                Our design team crafts visually stunning interfaces that reflect
                the brand identity and appeal to the target audience. We use
                color theory, typography, and design principles to create a
                harmonious and attractive design.
              </AccordionContent>
              <AccordionContent
                className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
              >
                <span className="font-bold">
                  Consistency and Cohesion <br />
                </span>
                We ensure that the design is consistent across all screens and
                elements, creating a cohesive and professional look and feel.
                This includes designing reusable components and adhering to
                design systems.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <span className="flex justify">
                <Check className="shrink-0 text-blue-800 mt-4" />
                <AccordionTrigger
                  className="text-xl transform hover:scale-105 
                           transition-transform duration-300"
                >
                  Interactive Prototyping
                </AccordionTrigger>
              </span>
              <AccordionContent
                className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
              >
                <span className="font-bold">
                  Prototyping <br />
                </span>
                We develop interactive prototypes that simulate the user
                experience and allow stakeholders to experience the design in
                action. Prototypes help in validating design concepts and
                gathering feedback before development.
              </AccordionContent>
              <AccordionContent
                className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
              >
                <span className="font-bold">
                  User Testing <br />
                </span>
                We conduct usability testing with real users to identify any
                issues or areas for improvement. This iterative process helps in
                refining the design to ensure it is intuitive and easy to use.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <span className="flex justify">
                <Check className="shrink-0 text-blue-800 mt-4" />
                <AccordionTrigger
                  className="text-xl transform hover:scale-105 
                           transition-transform duration-300"
                >
                  Responsive Design
                </AccordionTrigger>
              </span>
              <AccordionContent
                className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
              >
                <span className="font-bold">
                  Cross-Device Compatibility <br />
                </span>
                We design responsive interfaces that provide a seamless
                experience across different devices and screen sizes, from
                desktops to mobile phones. This ensures accessibility and
                usability for all users.
              </AccordionContent>
              <AccordionContent
                className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
              >
                <span className="font-bold">
                  Performance Optimization <br />
                </span>
                We optimize the design to ensure fast load times and smooth
                performance, enhancing the overall user experience.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <span className="flex justify">
                <Check className="shrink-0 text-blue-800 mt-4" />
                <AccordionTrigger
                  className="text-xl transform hover:scale-105 
                           transition-transform duration-300"
                >
                  Accessibility
                </AccordionTrigger>
              </span>
              <AccordionContent
                className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
              >
                <span className="font-bold">
                  Inclusive Design <br />
                </span>
                We prioritize accessibility to ensure that our designs are
                usable by people with disabilities. This includes adhering to
                accessibility standards (such as WCAG) and implementing features
                like keyboard navigation and screen reader support.
              </AccordionContent>
              <AccordionContent
                className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
              >
                <span className="font-bold">
                  Usability Enhancements <br />
                </span>
                We incorporate features that enhance usability for all users,
                such as clear navigation, readable fonts, and sufficient
                contrast between text and background.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <span className="flex justify">
                <Check className="shrink-0 text-blue-800 mt-4" />
                <AccordionTrigger
                  className="text-xl transform hover:scale-105 
                           transition-transform duration-300"
                >
                  Teamwork & Input
                </AccordionTrigger>
              </span>
              <AccordionContent
                className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
              >
                <span className="font-bold">
                  Collaborative Process <br />
                </span>
                We work closely with clients, developers, and other stakeholders
                throughout the design process. Regular feedback sessions ensure
                that the design aligns with the project goals and vision.
              </AccordionContent>
              <AccordionContent
                className="px-5 transform hover:scale-105 
                      transition-transform duration-300 text-lg"
              >
                <span className="font-bold">
                  Iterative Improvements <br />
                </span>
                Based on feedback, we continuously refine and improve the design
                to achieve the best possible user experience.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
        <div className="hidden lg:block mt-20">
          <img src="UIUXdesign.svg" alt="" />
        </div>
      </div>

      <div className="mt-20 mb-20 pr-10 pl-10">
        <CallToAction />
      </div>

      <div className="mt-40">
        <h1 className="text-center font-bold text-4xl mr-10 ml-10 mb-2">
          SKilled Web Developers For Different Industry
        </h1>
        <p className="text-center px-2 lg:px-52 text-xl">
          At Netcrest, we build powerful, customer-attracting websites and web
          apps tailored to diverse industries, aligning with brand identity.
        </p>

        <div
          className="grid grid-cols-2 space-y-4 space-x-4 lg:grid-cols-4 lg:space-x-6 lg:space-y-6 mt-5 
        lg:mr-12 lg:ml-12"
        >
          <Card
            className="lg:ml-6 lg:mt-6 mt-4 ml-4 flex flex-col py-3 
            items-center justify-center border shadow-xl 
            shadow-blue-300"
          >
            <Landmark className="w-40 h-40 text-blue-900" />
            <h2 className="font-bold text-xl mt-2 text-center">Banking</h2>
          </Card>

          <Card
            className="lg:ml-6 lg:mt-6 mt-4 ml-4 flex flex-col py-3 
            items-center justify-center border shadow-xl 
            shadow-blue-300"
          >
            <Scale className="w-40 h-40 text-blue-900" />
            <h2 className="font-bold text-xl mt-2 text-center">Government</h2>
          </Card>

          <Card
            className="lg:ml-6 lg:mt-6 mt-4 ml-4 flex flex-col py-3 
            items-center justify-center border shadow-xl 
            shadow-blue-300"
          >
            <University className="w-40 h-40 text-blue-900" />
            <h2 className="font-bold text-xl mt-2 text-center">Education</h2>
          </Card>

          <Card
            className="lg:ml-6 lg:mt-6 mt-4 ml-4 flex flex-col py-3 
            items-center justify-center border shadow-xl 
            shadow-blue-300"
          >
            <Router className="w-40 h-40 text-blue-900" />
            <h2 className="font-bold text-xl mt-2 text-center">IT</h2>
          </Card>

          <Card
            className="lg:ml-6 lg:mt-6 mt-4 ml-4 flex flex-col py-3 
            items-center justify-center border shadow-xl 
            shadow-blue-300"
          >
            <Truck className="w-40 h-40 text-blue-900" />
            <h2 className="font-bold text-xl mt-2 text-center">Logistics</h2>
          </Card>

          <Card
            className="lg:ml-6 lg:mt-6 mt-4 ml-4 flex flex-col py-3 
            items-center justify-center border shadow-xl 
            shadow-blue-300"
          >
            <Hospital className="w-40 h-40 text-blue-900" />
            <h2 className="font-bold text-xl mt-2 text-center">Health care</h2>
          </Card>

          <Card
            className="lg:ml-6 lg:mt-6 mt-4 ml-4 flex flex-col py-3 
            items-center justify-center border shadow-xl 
            shadow-blue-300"
          >
            <Waypoints className="w-40 h-40 text-blue-900" />
            <h2 className="font-bold text-xl mt-2 text-center">Supply chain</h2>
          </Card>

          <Card
            className="lg:ml-6 lg:mt-6 mt-4 ml-4 flex flex-col py-3 
            items-center justify-center border shadow-xl 
            shadow-blue-300"
          >
            <Store className="w-40 h-40 text-blue-900" />
            <h2 className="font-bold text-xl mt-2 text-center">Ecommerce</h2>
          </Card>
        </div>
      </div>
    </div>
  );
}
