'use client'
import React, {useState} from 'react'
import SlideShow from '../components/SlideShow'
import {Text} from '@nextui-org/react'

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let [isOpen, setIsOpen] = useState(false)
  const onClose = () => {
    setIsOpen(false)
  }
  return (
    <div className="w-full h-full px-4 md:mt-32 bg-black/60 md:bg-black-70  md:pt-0 mt-44 pt-12  max-h-[80%] md:max-h-full container justify-center md:justify-around items-center flex-col  z-30 flex">
      <Text
        css={{
          textGradient: '45deg, $red700 -70%, $yellow600 30%, $green600 60%, $cyan500 100%',
        }}
        weight="bold"
        className=" relative  top-56 md:top-20 w-screen-px-4 text-4xl md:flex-col my-32  md:my-0 z-40 flex text-center bottom-0 md:bottom-0  md:text-5xl text-white items-center justify-center tracking-wide leading-10 indent-2  drop-shadow-lg"
      >
        <span className="">EXPERIENCE THE IMPACT. </span>
      </Text>
      <SlideShow isOpen={isOpen} close={onClose} />
      <button
        onClick={() => {
          setIsOpen(true)
        }}
        className="text-white/90 text-2xl h-32 w-56 flex drop-shadow-black  md:static  drop-shadow-xl md:justify-center md:items-center justify-start  sticky items-start z-50 -pt-52 md:mt-0 font-semi-bold animate-pulse hover:shadow-lg hover:scale-125 tracking-wide  hover:tracking-widest transform transition-all duration-300 ease-in-out rounded-md p-2"
      >
        View Slide Show
      </button>
    </div>
  )
}

export default page
