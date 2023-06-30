'use client'
import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import Button from './ui/NavDonateButton'
import {Text} from '@nextui-org/react'
import {motion, useAnimation} from 'framer-motion'
const images = [
  {src: '/public/images/hero.png', color: 'bg-orange-400', text: ' Character Building '},
  {src: '/public/images/hero2.jpg', color: 'bg-yellow-500', text: ' Communication '},
  {src: '/public/images/college-ready.png', color: 'bg-green-500', text: ' College Readiness '},
  {src: '/public/images/hero2.jpg', color: 'bg-cyan-500', text: ' Career Planning '},
]

const OurWork = () => {
  const [isHovered, setIsHovered] = React.useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const controls = useAnimation()
  const [scrollY, setScrollY] = useState(0)

  function logit() {
    setScrollY(window.pageYOffset)
    if (scrollY > 200) {
      controls.start({
        marginTop: 125,
        transition: {duration: 1},
      })
    } else {
      controls.start({
        marginTop: 0,
        transition: {duration: 1},
      })
    }
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', logit)
    }
    watchScroll()
    // Remove listener (like componentWillUnmount)
    return () => {
      window.removeEventListener('scroll', logit)
    }
  })
  return (
    <div className="flex flex-col content w-full flex-wrap md:flex-row md:flex-wrap md:justify-evenly items-center  justify-center md:items-start -z-40 md:z-30 bottom-12 ">
      <Text
        css={{
          textGradient: '45deg, $red700 -70%, $yellow600 30%, $green600 60%, $cyan500 100%',
        }}
        weight="bold"
        className=" relative  top-10 md:top-20 text-2xl md:flex-col -z-40 flex text-center bottom-20 md:bottom-0  md:text-5xl text-white items-start tracking-wide leading-10 indent-2 drop-shadow-xl"
      >
        <span className="">IGNITE. </span>
        <span className="">EMPOWER. </span>
        <span className="">IMACT. </span>
      </Text>

      {images.map((image, index) => (
        <motion.div
          animate={controls}
          key={index}
          className={`relative w-full mt-10 max-w-[360px] lg:object-cover md:max-w-xs lg:max-w-[220px] xl:max-w-[250px] 2xl:max-w-xs lg:-mx-1  h-96 py-2 -my-24 xl:mx-[5px]  rounded-md overflow-hidden shadow-lg shadow-black/40  bottom-10  `}
        >
          <Image
            src={image.src}
            alt="Description"
            fill
            center
            className={`lg:object-cover flex content-center  ${
              isHovered ? 'transition-transform duration-500 ease-out-in' : 'opacity-100'
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <div className={`absolute inset-0 ${image.color} opacity-60`} />
          <div className={`absolute inset-0 flex items-center justify-center `}>
            <p className="text-white text-2xl lg:text-lg font-bold tracking-widest  transition-transform duration-500 ease-in-out hover:scale-x-125 hover:scale-y-125 text-shadow-lg ">
              {image.text}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default OurWork
