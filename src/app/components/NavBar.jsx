"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import MenuItem from './MenuItem'
import {AiTwotoneHome} from 'react-icons/ai'
import {BsFillInfoSquareFill} from 'react-icons/bs'
import AnimatedLogo from './ui/AnimatedLogo';
import NavDonateButton from './ui/NavDonateButton';

//going to animate log to stager in the image first then the words come from left. framer motion

function Navbar() {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const gradientStyle = {
    background: "linear-gradient(to bottom, #ffffff9a,rgba(255, 255, 255, 0)"
  };
  return (
    
    <div className= {`flex flex-row w-screen max-w-6xl justify-between h-32 mx-auto  items-center text-white hover:text-black z-50 bg-transparent px-2  hover:bg-white  `} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
     <div className="flex max-w-[200px] items-center"> 
     <AnimatedLogo />
      </div>
    
      <div className={`flex relative items-start  h-24 z-10 font-bold leading-10 text-xl tracking-wider   `} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
    
      <MenuItem title="HOME" address="/" Icon={AiTwotoneHome}/>
     
      <MenuItem title="EVENTS" address="/events" Icon={BsFillInfoSquareFill}/>
      <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoSquareFill}/>
      <MenuItem title="GET IN TOUCH" address="/contact" Icon={BsFillInfoSquareFill}/>
      
      </div>
     
      <NavDonateButton > Donate </NavDonateButton>
    </div>
  )
}

export default Navbar