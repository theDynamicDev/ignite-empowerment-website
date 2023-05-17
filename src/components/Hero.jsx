"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import useDimensions from 'react-cool-dimensions';
import arrayCeil from '../lib/arrayCeil';
import Button from './ui/HeroButton';
import HeroImage from '/public/images/hero-1920.png';

const hero= HeroImage;
export default function Hero() {
    const [heroImage, setHeroImage] = useState('hero-1920.png')
    const imageSizes = [600, 1280, 1920]
    const { observe, unobserve, width, height, entry } = useDimensions({
        onResize: ({ observe, unobserve, width, height, entry }) => {
            setHeroImage(`hero-${arrayCeil(imageSizes, width)}.png`)
            console.log("THIS IS WHAT I GOT FOR HERO IMAGE", heroImage)
            unobserve(); // To stop observing the current target element
            observe(); // To re-start observing the current target element
        },
    });
    
    return (
        <div
            ref={observe}
            className="w-full h-screen -mt-[28.5%] flex justify-center items-center overflow-hidden relative bg-black -z-10">
            <Image
                src={hero}
                alt="Hero Image"
                className="opacity-60 object-cover"
                fill
            />
            <div class="flex flex-col justify-center items-center px-3">
                <h1 class=" text-center text-3xl md:text-5xl text-white font-bold drop-shadow-lg">WELCOME TO <br />
                    MY COMPANY
                </h1>
                <p className="mt-5 text-center text-lg text-white opacity-90">Empowering the youth of broward county by cultivating unshakable mindsets</p>
                <Button href="/">Get Started</Button>
            </div>
        </div>
    )
}
