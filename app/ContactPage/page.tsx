import ContactForm from '@/components/Contactform'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Card, CardContent } from '@/components/ui/card'
import { Check } from 'lucide-react'
import React from 'react'

export default function ContactPage() {
  return (
    <div>
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
              <ContactForm />
            </CardContent>
          </Card>
        </div>
     </MaxWidthWrapper>
    </div>
  )
}
