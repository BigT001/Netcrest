import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Check } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Whyus() {
  return (
    <div>
      <MaxWidthWrapper className='pt-20 sm:pb-15 lg:gap-x-0 xl:gap-x-8 xl:pt-18 pr-10 pl-10 lg:mt-20'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold pb-4'>
            Why choose us?
          </h1>  
        </div>

          <div className='grid gap-5 lg:grid-cols-2'>
            <Card className=''>
              <CardContent className='justify-center'>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                      <span className='flex justify'>
                        <Check className='shrink-0 text-blue-800 mt-4'/>
                          <AccordionTrigger>
                          Dynamic and Responsive Solutions
                          </AccordionTrigger>
                        </span>
                      <AccordionContent className='ml-10'>
                      Refers to the capability of applications to adapt and 
                      respond to changes in demand, user behavior, 
                      or environmental conditions.
                      </AccordionContent>
                    </AccordionItem>

                  <AccordionItem value="item-2">
                      <span className='flex justify'>
                        <Check className='shrink-0 text-blue-800 mt-4'/>
                          <AccordionTrigger>
                          High-Performance Applications
                          </AccordionTrigger>
                        </span>
                      <AccordionContent className='ml-10'>
                      Focuses on developing software and systems that deliver superior 
                      performance in terms of speed, reliability, and efficiency. 
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7">
                      <span className='flex justify'>
                        <Check className='shrink-0 text-blue-800 mt-4'/>
                          <AccordionTrigger>
                            Fast and interactive
                          </AccordionTrigger>
                        </span>
                      <AccordionContent className='ml-10'>
                      Refers to the ability of application to provide quick 
                      responses and seamless interactions for users. This involves 
                      optimizing performance to ensure minimal latency and smooth 
                      user experiences.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <span className='flex justify'>
                        <Check className='shrink-0 text-blue-800 mt-4'/>
                          <AccordionTrigger>
                           Cutting-Edge Technologies
                          </AccordionTrigger>
                        </span>
                      <AccordionContent className='ml-10'>
                      Indicates the use of the latest technological advancements 
                      and innovations to enhance functionality, usability, and 
                      competitiveness.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <span className='flex justify'>
                        <Check className='shrink-0 text-blue-800 mt-4'/>
                          <AccordionTrigger>
                            Collaborative Approach
                          </AccordionTrigger>
                        </span>
                      <AccordionContent className='ml-10'>
                      This approach encourages open communication, shared decision-making, 
                      and collective problem-solving among team members to foster 
                      innovation, efficiency, and satisfaction.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                      <span className='flex justify'>
                        <Check className='shrink-0 text-blue-800 mt-4'/>
                          <AccordionTrigger>
                            scalable and secure Solutions
                          </AccordionTrigger>
                        </span>
                      <AccordionContent className='ml-10'>
                      The ability to handle more users 
                      or data without degradation in performance, while security 
                      ensures that data and assets remain protected against 
                      unauthorized access or attacks.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                      <span className='flex justify'>
                        <Check className='shrink-0 text-blue-800 mt-4'/>
                          <AccordionTrigger>
                            Timely Delivery and Support
                          </AccordionTrigger>
                        </span>
                      <AccordionContent className='ml-10'>
                      Stresses the commitment to delivering products or services on 
                      schedule and providing ongoing support to ensure continued operation 
                      and satisfaction.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
            </CardContent>

           
          </Card>

          <Card className='border-2'>
            <CardContent className='justify-center text-lg'>
              <p className='lg:mt-24 mt-5 mr-5 ml-5'>
              At Netcrest, we bring your unique vision to life with 
              strategic innovation. Tailoring solutions to your specific 
              needs, we ensure an exceptional online presence. Let's turn
               your ideas into reality with creativity and precision.
              </p>
            </CardContent>

            <CardFooter className="flex item-center justify-center mt-5">
              <Button
                asChild
                variant="outline"
                size="default"
                className="relative px-6 py-3 ml-2 text-lg border-2 border-blue-900 bg-blue-800 text-white"
              >
                <a href="/#">
                  Learn more
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}
