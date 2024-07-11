import React from 'react'

export default function CallToAction() {
  return (
    <div>
      <section
          className="overflow-hidden bg-cover bg-top bg-no-repeat 
            lg:mr-1 lg:ml-1 shadow-lg shadow-blue-300 ">
            <div className=" p-8 md:p-12 lg:px-16 lg:py-24">
              <div className="text-center ltr:sm:text-left rtl:sm:text-right">
                <h2 className="text-xl font-bold text-black sm:text-2xl md:text-3xl">
                  Ready to get started? 
                </h2>
                <h2 className="text-4xl font-bold text-black sm:text-4xl md:text-5xl">
                  Let's work together
                </h2>

                <div className='fex justtify-center mt-10 mb-4'>
                    <a
                      href="/ContactPage"
                      className="inline-block rounded border-2 
                      border-blue-700 bg-white px-12 py-3 
                      text-md font-medium text-black  
                      shadow-md shadow-blue-300 transform hover:scale-105 
                      transition-transform duration-300">
                      Get in Touch
                    </a>
                </div>          
              </div>
            </div>
          </section>
    </div>
  )
}
