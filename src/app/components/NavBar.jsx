"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import LOGOICON from '../../../public/images/logo-icon-darkshadow.png'
import LOGOLIGHTWORDS from '../../../public/images/ignite_logo_light.png'
import LOGODARKICON from '../../../public/images/logo-icon-light-shadow.png'
import LOGODARKWORDS from '../../../public/images/logo-words-light-shadow.png'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion';
import MenuItem from './MenuItem'
import {AiTwotoneHome} from 'react-icons/ai'
import {BsFillInfoSquareFill} from 'react-icons/bs'
import {RiMenu3Fill} from 'react-icons/ri'
import NavDonateButton from './ui/NavDonateButton';
import DropDownMenu from './DropDownMenu'
//going to animate log to stager in the image first then the words come from left. framer motion

function Navbar() {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
    controls.start({
      rotate: scrollY / .5, // you can adjust the rate of rotation here
      transition: { duration: 0.5 },
    });
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    // Remove listener (like componentWillUnmount)
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener("resize", handleResize);
    
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobile = windowSize.width <= 768;
  const gradientStyle = {
    background: "linear-gradient(to bottom, #ffffff9a,rgba(255, 255, 255, 0)"
  };
  return (
    
    <div className= {`flex flex-row w-screen max-w-6xl justify-between h-32 mx-auto  items-center text-white hover:text-black z-30 bg-transparent px-2  hover:bg-white  `} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
     <div className="flex max-w-[200px] items-center"> 
     <div className=" flex-auto   z-10" />
    
    <motion.div

         
          animate={controls}
        className='content'
      >
          <Link href="/">

              <Image
                  src={isHovered ? LOGOICON : LOGODARKICON  }
                  alt="ignite logo"
                  height={90}
                  width={90}
               className=" min-w-[55px] min-h-[55px] scroll-animate-spin "
                   />
          </Link>
      </motion.div>
      
      <motion.div animate={{ x: 100 }}
          transition={{ ease: "easeOut", duration: 1, }}>
              <Link href="/">
                  <Image
                      src={isHovered ? LOGODARKWORDS : LOGOLIGHTWORDS  }
                      alt="ignite logo words"
                      height={120}
                      width={175}
                      className='relative z-50 mt-.5 -left-24 bottom-0 invisible sm:visible  ' />
              </Link>
          </motion.div>
         <div />
      </div>
    
      <div className={`flex relative items-start invisible sm:visible h-24 z-10 font-bold leading-10 text-xl tracking-wider`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 
    
      <MenuItem title="HOME" address="/" Icon={AiTwotoneHome}/>
     
      <MenuItem title="EVENTS" address="/events" Icon={BsFillInfoSquareFill}/>
      <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoSquareFill}/>
      <MenuItem title="GET IN TOUCH" address="/contact" Icon={BsFillInfoSquareFill}/>
      
      </div>
      {/*  Search */}
      <div className=" items-center  justify-between -right-10 ml-5 left-10 text-4xl flex flex-end z-50 md:invisible" >
        {mobile ?  <DropDownMenu 
        isOpen={isMenuOpen} 
        onToggleMenu={toggleMenu}
        onMenuItemClick={handleMenuItemClick}
      /> : 
      <NavDonateButton > Donate </NavDonateButton>

        }
      
      
      </div>
     
     
    
      
    </div>
  )
}

export default Navbar