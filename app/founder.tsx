import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function Founder() {
  return (
    <MaxWidthWrapper>
    <div className='container flex-col mt-20 mb-20 w-auto lg:mt-10 items-center'>
        <div className='text-center '>

            <h1 className='font-bold text-5xl'>
              "All the difference
            </h1>

            <h4 className='text-gray-700'>
             We live in a world where the pace of change is 
             relentless and the demands on our digital experiences are 
             ever-increasing. Whether you are a business striving to 
             captivate your audience or an individual seeking to express 
             your ideas seamlessly, <span className="text-blue-800 font-bold">the quality and performance</span> of your 
             web applications can make all the difference.
            </h4>

            <div className="flex items-center justify-center mt-10">
                <Avatar>
                  <AvatarImage src="samuel.png" className=""/>
                  <AvatarFallback>Founder</AvatarFallback>
                </Avatar>
                <div className="pl-4">
                  <h1 className="font-bold text-xl justify-start">Samuel Stanley</h1>
                  <p className="flex justify-start">Founder Netcrest</p>
                </div>
              </div>
        </div>
    </div>
    </MaxWidthWrapper>
  )
}
