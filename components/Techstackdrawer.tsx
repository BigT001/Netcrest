import * as React from "react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import MaxWidthWrapper from "./MaxWidthWrapper"
import { Card, CardContent } from "./ui/card"
import Link from "next/link"
  

export default function Techstackdrawer() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-2 space-x-2 
    space-y-2">
      <div >
        <Card className="lg:mt-2 flex flex-col items-center 
          justify-center w-auto h-auto mt-2 ml-2 ">
        <Drawer>
        <DrawerTrigger className="flex items-start space-x-4">
          <img src="icons/python_icon.svg" alt="Python Icon" 
          className="w-10 h-10 items-start"
          />
          <h1 className="text-2xl">Python</h1>
        </DrawerTrigger>
        <DrawerContent>
            <DrawerHeader>
            <DrawerTitle className="ml-10 text-2xl">Python Programming</DrawerTitle>
            <DrawerDescription className="lg:mr-10 lg:ml-10 text-1xl">
              Python programming is a high-level, interpreted programming language known for its simplicity and readability. 
              It was created by Guido van Rossum and first released in 1991. Python is widely used in various domains such as 
              web development, data analysis, artificial intelligence, scientific computing, and more. <br /><br />
              Python supports multiple programming paradigms, including procedural, object-oriented, and functional programming.
              One of the key features of Python is its extensive standard library, which provides a wide range of modules and 
              functions that simplify common tasks. Additionally, Python has a vast ecosystem of third-party libraries and 
              frameworks, such as NumPy, Pandas, Django, Flask, TensorFlow, and PyTorch, which further expand its capabilities 
              for specific use cases.
            </DrawerDescription>
            </DrawerHeader>         
            <DrawerFooter>
              <div className="flex justify-center space-x-4">
             
                <div className="mt-2">
                  <Link href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
                    Learn more...
                  </Link>
                </div>            
                <div>
                    <DrawerClose className="flex">
                      <Button variant="outline">Close</Button>
                    </DrawerClose>
                </div>
              </div>
            </DrawerFooter>
        </DrawerContent>
        </Drawer>
        </Card>
     </div>

     <div className="">
        <Card className="lg:mt-0 flex flex-col items-center 
          justify-center w-50 h-50">
        <Drawer>
        <DrawerTrigger className="flex space-x-4">
          <img src="icons/django_icon.svg" alt="django Icon" className="w-10 h-10"/>
          <h1 className="text-2xl">django</h1>
        </DrawerTrigger>
        <DrawerContent>
            <DrawerHeader>
            <DrawerTitle className="ml-10 text-2xl">django</DrawerTitle>
            <DrawerDescription className="lg:mr-10 lg:ml-10 text-1xl">
              Django is a high-level web framework written in Python that encourages rapid development and clean, pragmatic design. 
              It facilitates the creation of web applications by providing a set of tools and features to handle common web 
              development tasks, such as database management, URL routing, authentication, and templating. <br /><br />

              <span className="font-bold">Key features of Django include: </span><br />
              1. {"  "}Object-Relational Mapping (ORM): <br />
              2. {"  "}URL Routing:  <br />
              3. {"  "}Template Engine <br />
              4. {"  "}Security <br />
              5. {"  "}Administration Interface <br />
              6. {"  "}Authentication and Authorization <br />
            </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <div className="flex justify-center space-x-4">
                <div className="mt-2">
                  <Link href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer">
                    Learn more...
                  </Link>
                </div>            
                <div>
                    <DrawerClose className="flex">
                      <Button variant="outline">Close</Button>
                    </DrawerClose>
                </div>
              </div>
            </DrawerFooter>
        </DrawerContent>
        </Drawer>
        </Card>
     </div>


     <div className="">
        <Card className="lg:mt-0 flex flex-col items-center 
          justify-center w-50 h-50">
        <Drawer>
        <DrawerTrigger className="flex space-x-4">
          <img src="icons/node_icon.svg" alt="nodejs Icon" className="w-10 h-10"/>
          <h1 className="text-2xl">nodejs</h1>
        </DrawerTrigger>
        <DrawerContent>
            <DrawerHeader>
            <DrawerTitle className="ml-10 text-2xl">Nodejs</DrawerTitle>
            <DrawerDescription className="lg:mr-10 lg:ml-10 text-1xl">
             nodejs content
            </DrawerDescription>
            </DrawerHeader>
            
            <DrawerFooter>
              <div className="flex justify-center space-x-4">
                <div className="mt-2">
                  <Link href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer">
                    Learn more...
                  </Link>
                </div>            
                <div>
                    <DrawerClose className="flex">
                      <Button variant="outline">Close</Button>
                    </DrawerClose>
                </div>
              </div>
            </DrawerFooter>
        </DrawerContent>
        </Drawer>
        </Card>
     </div>


     <div className="">
        <Card className="lg:mt-0 flex flex-col items-center 
          justify-center w-50 h-50">
        <Drawer>
        <DrawerTrigger className="flex space-x-4">
          <img src="icons/figma_icon.svg" alt="figma Icon" className="w-10 h-10"/>
          <h1 className="text-2xl">figma</h1>
        </DrawerTrigger>
        <DrawerContent>
            <DrawerHeader>
            <DrawerTitle className="ml-10 text-2xl">figma</DrawerTitle>
            <DrawerDescription className="lg:mr-10 lg:ml-10 text-1xl">
             figma content
            </DrawerDescription>
            </DrawerHeader>
            
            <DrawerFooter>
              <div className="flex justify-center space-x-4">
             
                <div className="mt-2">
                  <Link href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer">
                    Learn more...
                  </Link>
                </div>            
                <div>
                    <DrawerClose className="flex">
                      <Button variant="outline">Close</Button>
                    </DrawerClose>
                </div>
              </div>
            </DrawerFooter>
        </DrawerContent>
        </Drawer>
        </Card>
     </div>


     <div className="">
        <Card className="lg:mt-0 flex flex-col items-center 
          justify-center w-50 h-50">
        <Drawer>
        <DrawerTrigger className="flex space-x-4">
          <img src="icons/javascript_icon.svg" alt="javascript Icon" className="w-10 h-10"/> 
          <h1 className="text-2xl">javascript</h1>
        </DrawerTrigger>
        <DrawerContent>
            <DrawerHeader>
            <DrawerTitle className="ml-10 text-2xl">javascript</DrawerTitle>
            <DrawerDescription className="lg:mr-10 lg:ml-10 text-1xl">
             javascript content
            </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <div className="flex justify-center space-x-4">
             
                <div className="mt-2">
                  <Link href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer">
                    Learn more...
                  </Link>
                </div>            
                <div>
                    <DrawerClose className="flex">
                      <Button variant="outline">Close</Button>
                    </DrawerClose>
                </div>
              </div>
            </DrawerFooter>
        </DrawerContent>
        </Drawer>
        </Card>
     </div>


     <div className="">
        <Card className="lg:mt-0 flex flex-col items-center 
          justify-center w-50 h-50">
        <Drawer>
        <DrawerTrigger className="flex space-x-4">
          <img src="icons/nextjs_icon.svg" alt="nextjs Icon" className="w-10 h-10"/>
          <h1 className="text-2xl">nextjs</h1>
        </DrawerTrigger>
        <DrawerContent>
            <DrawerHeader>
            <DrawerTitle className="ml-10 text-2xl">nextjs</DrawerTitle>
            <DrawerDescription className="lg:mr-10 lg:ml-10 text-1xl">
             nextjs content
            </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <div className="flex justify-center space-x-4">
             
                <div className="mt-2">
                  <Link href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer">
                    Learn more...
                  </Link>
                </div>            
                <div>
                    <DrawerClose className="flex">
                      <Button variant="outline">Close</Button>
                    </DrawerClose>
                </div>
              </div>
            </DrawerFooter>
        </DrawerContent>
        </Drawer>
        </Card>
     </div>


     <div className="">
        <Card className="lg:mt-0 flex flex-col items-center 
          justify-center w-50 h-50">
        <Drawer>
        <DrawerTrigger className="flex space-x-4">
          <img src="icons/postgresql_icon.svg" alt="postgresql Icon" className="w-10 h-10"/>
          <h1 className="text-2xl">postgresql</h1>
        </DrawerTrigger>
        <DrawerContent>
            <DrawerHeader>
            <DrawerTitle className="ml-10 text-2xl">postgresql</DrawerTitle>
            <DrawerDescription className="lg:mr-10 lg:ml-10 text-1xl">
            postgresql content
            </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <div className="flex justify-center space-x-4">
             
                <div className="mt-2">
                  <Link href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer">
                    Learn more...
                  </Link>
                </div>            
                <div>
                    <DrawerClose className="flex">
                      <Button variant="outline">Close</Button>
                    </DrawerClose>
                </div>
              </div>
            </DrawerFooter>
        </DrawerContent>
        </Drawer>
        </Card>
     </div>


     <div className="">
        <Card className="lg:mt-0 flex flex-col items-center 
          justify-center w-50 h-50">
        <Drawer>
        <DrawerTrigger className="flex space-x-4">
          <img src="icons/reactnative_icon.svg" alt="react Icon" className="w-10 h-10"/>
          <h1 className="text-2xl">react</h1>
        </DrawerTrigger>
        <DrawerContent>
            <DrawerHeader>
            <DrawerTitle className="ml-10 text-2xl">react</DrawerTitle>
            <DrawerDescription className="lg:mr-10 lg:ml-10 text-1xl">
            react content
            </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <div className="flex justify-center space-x-4">
             
                <div className="mt-2">
                  <Link href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer">
                    Learn more...
                  </Link>
                </div>            
                <div>
                    <DrawerClose className="flex">
                      <Button variant="outline">Close</Button>
                    </DrawerClose>
                </div>
              </div>
            </DrawerFooter>
        </DrawerContent>
        </Drawer>
        </Card>
     </div>


     <div className="">
        <Card className="lg:mt-0 flex flex-col items-center 
          justify-center w-50 h-50">
        <Drawer>
        <DrawerTrigger className="flex space-x-4">
          <img src="icons/tailwindcss_icon.svg" alt="tailwindcss Icon" className="w-10 h-10"/>
          <h1 className="text-2xl">tailwindcss</h1>
        </DrawerTrigger>
        <DrawerContent>
            <DrawerHeader>
            <DrawerTitle className="ml-10 text-2xl">tailwindcss</DrawerTitle>
            <DrawerDescription className="lg:mr-10 lg:ml-10 text-1xl">
            tailwindcss content
            </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <div className="flex justify-center space-x-4">       
                <div className="mt-2">
                  <Link href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer">
                    Learn more...
                  </Link>
                </div>            
                <div>
                    <DrawerClose className="flex">
                      <Button variant="outline">Close</Button>
                    </DrawerClose>
                </div>
              </div>
            </DrawerFooter>
        </DrawerContent>
        </Drawer>
        </Card>
     </div>


     <div className="">
        <Card className="lg:mt-0 flex flex-col items-center 
          justify-center w-50 h-50">
        <Drawer>
        <DrawerTrigger className="flex space-x-4">
          <img src="icons/typescript-icon.png" alt="typescript Icon" className="w-10 h-10"/>
          <h1 className="text-2xl">typescript</h1>
        </DrawerTrigger>
        <DrawerContent>
            <DrawerHeader>
            <DrawerTitle className="ml-10 text-2xl">typescript</DrawerTitle>
            <DrawerDescription className="lg:mr-10 lg:ml-10 text-1xl">
            typescript content
            </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <div className="flex justify-center space-x-4">       
                <div className="mt-2">
                  <Link href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer">
                    Learn more...
                  </Link>
                </div>            
                <div>
                    <DrawerClose className="flex">
                      <Button variant="outline">Close</Button>
                    </DrawerClose>
                </div>
              </div>
            </DrawerFooter>
        </DrawerContent>
        </Drawer>
        </Card>
     </div>
    </div>
  )
}
