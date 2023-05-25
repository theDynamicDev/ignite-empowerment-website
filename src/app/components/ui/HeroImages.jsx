"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import HeroImage from '../../../../public/images/mobile-hero.png';
import AltHero from '../../../../public/images/hero2.jpg'

import MaleFemaleHero from '../../../../public/images/hero3.png'

const hero= MaleFemaleHero;
const hero2 = HeroImage;
const HeroImages = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
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
    
      return (
        <div className={`flex relative w-screen h-screen -z-10`}>
          <Image
            src={mobile ? hero2 : hero}
            alt="Description of image"
            fill
         
          />
        </div>
      );
    }
    


export default HeroImages;
