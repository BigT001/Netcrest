import React from 'react'
import ContactForm from './Contactform'
import { Card, CardContent } from './ui/card'

export default function ContactSection() {
  return (
    <div className=''>
        <h2 className='text-center font-bold text-3xl mt-40'>
            Start a conversation <br /> by filling out the {" "}
            <span className='bg-blue-900 text-white px-2'>
              form
            </span>
        </h2>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="lg:mt-20 rounded ml-5 mr-5 lg:ml-20 ">
                <img src="ChatBot-cuate.png" 
                     alt="Chat bot image" 
                     className=''/>
            </div>
          
            <div className="lg:mr-20 lg:ml-10 ml-5 mr-5 lg:mt-32 p-8 
                shadow-xl shadow-blue-300 ">
                <div className='lg:mt-10'>
                    <ContactForm/>
                </div>             
            </div>           
        </div>
    </div>
  )
}
