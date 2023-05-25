"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import useDimensions from 'react-cool-dimensions';
import arrayCeil from '../../lib/arrayCeil';
import Button from '../components/ui/HeroButton';
import HeroImages from './ui/HeroImages';
import { Text } from "@nextui-org/react";
export default function Hero() {
    
    // className="hover:animate-pulse hover:text-white text-yellow-400 hover:underline  hover:decoration-yellow-500  "
    return (
    
     
        <div
         
            className=" absolute justify-center  z-20 ">
      
         
            <div className="flex flex-col justify-center items-center px-3">
               <Text
                size={50}
                css={{
                  textGradient: "45deg, $red700 -70%, $yellow600 30%, $green600 60%, $cyan500 100%",
                }}
                weight="bold"className=" text-center  md:text-5xl text-white  tracking-wide leading-10 indent-2 drop-shadow-xl"
               >
                 <span className=''>IGNITE</span> <span >EMPOWER</span><span className="  text-3xl">MENT</span> 

               </Text>
                <p className="mt-5 text-center text-lg sm:text-base font-bold tracking-wider sm:tracking-tight text-white px-3  opacity-100"><span className="text-white   font-bold sm:text-md  text-2xl">EMPOWER</span>ING <span className="text-base font-light">THE</span> <span className=" font-bold hover:animate-pulse hover:underline hover:decoration-yellow-500 sm:text-md text-2xl hover:text-white text-yellow-400 " >YOUTH</span><span className="text-base font-light"> AND</span> <span className="font-bold hover:animate-pulse sm:text-md text-2xl hover:text-cyan-400 underline decoration-yellow-500 " >NON-PROFITS</span> <span className="text-base font-light"> OF</span> <span className="text-white sm:font-bold sm:text-md  text-2xl">BROWARD COUNTY</span> ...</p>
                <Button href="/" >Donate</Button>
            </div>
        </div>
      
    )
}
