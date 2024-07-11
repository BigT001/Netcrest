import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Check } from 'lucide-react'
import Image from 'next/image'

export default function Whychoseus() {
  return (
    <div>
  <MaxWidthWrapper className='pt-10 lg:gap-x-0 xl:gap-x-8 
          lg:flex justify-between items-start'>
    <div className='lg:w-1/2'>
      <h1 className='flex justify-center font-bold text-2xl lg:pr-20'>
        WHY CHOOSE US?
      </h1>
      <ul className='mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start'>
        <div className='space-y-2'>
          <li className='flex gap-1.5 items-center text-left'>
            <Check className='shrink-0 text-blue-800'/>
            Dynamic and Responsive Solutions
          </li>
          <li className='flex gap-1.5 items-center text-left'>
            <Check className='shrink-0 text-blue-800'/>
            High-Performance Applications
          </li>
          <li className='flex gap-1.5 items-center text-left'>
            <Check className='shrink-0 text-blue-800'/>
            Cutting-Edge Technologies
          </li>
          <li className='flex gap-1.5 items-center text-left'>
            <Check className='shrink-0 text-blue-800'/>
            Collaborative Approach
          </li>
          <li className='flex gap-1.5 items-center text-left'>
            <Check className='shrink-0 text-blue-800'/>
            Scalable and Secure Solutions
          </li>
          <li className='flex gap-1.5 items-center text-left'>
            <Check className='shrink-0 text-blue-800'/>
            Timely Delivery and Support
          </li>
        </div>
      </ul>

  
        <div className='mt-12 flex sm:flex-row items-center sm:items-start'>
            <div className='flex -space-x-4'>
                <img className='inline-block h-10 w-10 rounded-full ring-2
                 ring-slate-100' 
                 src="/samuel.png" 
                 alt="python" />
            </div>

            <div className='flex -space-x-4'>
                <img className='inline-block h-10 w-10 rounded-full ring-2
                 ring-slate-100' 
                 src="/samuel.png" 
                 alt="python" />
            </div>
          </div>
      </div>


    <div className='lg:w-1/2 mt-20 lg:mt-0'>
      <h1 className='flex justify-center  font-bold text-2xl sm:mb-10'>
        TECHNOLOGIES
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mt-10">
        <div className="flex flex-col items-center">
          <img src="/icons/python_icon.svg" alt="python icon" width={50} height={50} />
          <p className="font-bold text-center mt-2">Python</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/icons/django_icon.svg" alt="django icon" width={50} height={50} />
          <p className="font-bold text-center mt-2">Django</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/icons/javascript_icon.svg" alt="javascript icon" width={50} height={50} />
          <p className="font-bold text-center mt-2">JavaScript</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/icons/reactnative_icon.svg" alt="reactnative icon" width={50} height={50} />
          <p className="font-bold text-center mt-2">React</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/icons/nextjs_icon.svg" alt="nextjs icon" width={50} height={50} />
          <p className="font-bold text-center mt-2">Next.js</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/icons/typescript-icon.png" alt="typescript icon" width={50} height={50} />
          <p className="font-bold text-center mt-2">Typescript</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/icons/postgresql_icon.svg" alt="postgresql icon" width={50} height={50} />
          <p className="font-bold text-center mt-2">PostgreSQL</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/icons/figma_icon.svg" alt="figma icon" width={50} height={50} />
          <p className="font-bold text-center mt-2">Figma</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="/icons/tailwindcss_icon.svg" alt="tailwindcss icon" width={50} height={50} />
          <p className="font-bold text-center mt-2">Tailwind CSS</p>
        </div>
      </div>
    </div>
  </MaxWidthWrapper>
</div>

  )
}
