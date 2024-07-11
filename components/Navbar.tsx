"use client";

import React, { useState } from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from './ui/button';
import Link from 'next/link';



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <MaxWidthWrapper className='pb-20'> 
      <div className='flex justify-between font-bold border-b 
        border-gray-300 fixed top-0 left-0 right-0 shadow-xl z-50 bg-white'>
        <div className='pl-5'>
          <Link href="/">
            <img src="2.svg" alt="Logo" className='w-20 h-20'/>
          </Link>
        </div>
        
        <div className='hidden lg:flex space-x-4 mt-7'>
          <ul>
            <Link href="/">
                Home
            </Link>
          </ul>

          <ul>
            <Link href="/WhatWeDoNew">
                What we do
            </Link>
          </ul>

          <ul>
            <Link href="/OurStory">
                Our story
            </Link>
          </ul>
        </div>

        <div className='flex lg:hidden mt-5 pr-7'>
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="outline"
                className='font-bold'
                onClick={() => setIsOpen(!isOpen)}
              >
                Menu
              </Button>
            </DropdownMenuTrigger>
            
            <DropdownMenuContent className="w-56 font-bold">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link href="/" onClick={closeMenu}>
                    Home
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />

              <DropdownMenuGroup className="font-bold">
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger> 
                     <Link href="/WhatWeDoNew" onClick={closeMenu}>
                      What we do                   
                    </Link>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>

                    {/* 
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>
                        <Link href="/WhatWeDoNew" onClick={closeMenu}>
                          Web App Development
                        </Link>
                      </DropdownMenuItem>

                      <DropdownMenuSeparator className='item-black'/>
                      <DropdownMenuItem>
                        <Link href="/WhatWeDoNew" onClick={closeMenu}>
                           Website Development                      
                        </Link>
                      </DropdownMenuItem>

                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link href="/WhatWeDoNew" onClick={closeMenu}>
                          Ecommerce Development                     
                        </Link>
                      </DropdownMenuItem> 

                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link href="/WhatWeDoNew" onClick={closeMenu}>
                          UI/UX design                    
                        </Link>
                      </DropdownMenuItem> 

                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link href="/WhatWeDoNew" onClick={closeMenu}>
                          MVP Development            
                        </Link>
                      </DropdownMenuItem> 

                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link href="/WhatWeDoNew" onClick={closeMenu}>
                          CMS Development                   
                        </Link>
                      </DropdownMenuItem> 
                    </DropdownMenuSubContent>
*/}

                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/OurStory" onClick={closeMenu} >
                  Our Story
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className='bg-blue-900'>
                <Button
                  asChild
                  variant="default"
                  size="default"
                  className="flex px-2 py-2 text-md text-white font-bold bg-blue-900"
                  onClick={closeMenu}
                >
                  <a href="/ContactPage">
                    Contact Us
                  </a>
                </Button>         
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className='mt-7 font-bold hidden lg:flex pr-10'>
        <Button
                  asChild
                  variant="default"
                  size="default"
                  className="flex px-2 py-2 text-md text-white font-bold bg-blue-900"
                  onClick={closeMenu}
                >
                  <a href="/ContactPage">
                    Contact Us
                  </a>
                </Button>   
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
