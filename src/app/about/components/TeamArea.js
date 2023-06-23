"use client"
import React from 'react';
import Image from 'next/image';
import Card from './Card';
import { Text } from "@nextui-org/react";
const TeamArea = () => {
    const samImage = "/public/images/CEO-SAM.png";
    return (
        <section className=" flex relative justify-center md:top-0 top-10 items-center h-screen">
            <div className=" justify-center bg-yellow-200/80 items-center md:flex-row flex-col w-full h-full">
                <div className="relative  md:py-0 h-[170px] md:h-1/3 w-screen flex justify-center items-center bg-blue-400/40">
                <div className=" absolute object-cover h-full w-screen">
                                <Image height={400} width={300} src="/public/images/hero2.jpg" alt="section-icon" className="h-full w-screen  object-cover top-0  z-0"/>
                            </div>
                    <div className="flex justify-center items-center transparent w-full h-full ">
                    <div className="flex absolute justify-center items-center transparent bg-cyan-400/90 w-full h-full z-20"/>
                        <div className=" text-red-400 font-bold text-4xl md:text-6xl flex flex-col justify-center items-center w-full h-full z-30 container">
                           
                        <Text
              
              css={{
                textGradient: "45deg, $red600 -100%, $yellow600 100% ",
              }}
              weight="bold"
              className="text-4xl  justify-center flex flex-row items-center text-center   md:left-20  md:text-5xl md:items-center tracking-widest z-20 leading-10 indent-2 drop-shadow-lg md:shadow-gray "
             >
             
               <span className=''>OUR TEAM</span> 
               
          
             </Text> 
                            <span className="z-50 text-white/60 underline">____</span>
                        </div>
                    </div>
                </div>
                <div className="h-[79vh] md:h-[700px] overflow-y-scroll overflow-x-hidden gap-y-[100%] grid-flow-row grid grid-cols-1 grid-rows-3 md:grid-rows-1 md:gap-x-44 md:grid-flow-col md:grid-cols-3  md:px-10 justify-center items-center bg-white pb-32">
                    <div className='relative h-full'>
                    <Card image={samImage} title={"CEO"} name={"Sam Monroe"}/>
                    </div>
                    <div className='relative h-full'>
                    <Card image={samImage} title={"CEO"} name={"not Monroe"}/>
                    </div>
                    <div className='relative h-full'>
                    <Card image={samImage} title={"NOT"} name={"Sam Monroe"}/>
                    </div>
             
                
               
                    
                </div>
            </div>
        </section>
    );
};

export default TeamArea;
