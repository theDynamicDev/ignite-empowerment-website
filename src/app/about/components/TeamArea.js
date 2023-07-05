'use client'
import React from 'react'
import Image from 'next/image'
import Card from './Card'
import {Text} from '@nextui-org/react'
const TeamArea = () => {
  const samImage = '/public/images/bossMan.png'
  const directorOfCollegeReadiness = '/public/images/Tiyaji_college-ready.png'
  const bossLady = '/public/images/vp-monroe.png'
  return (
    <section className=" flex relative justify-center md:top-0 top-0 items-center bg-white/90 pb-32 md:pb-0 h-screen">
      <div className=" justify-center items-center pb-32 mt-0  md:flex-row flex-col w-full h-full">
        <div className="relative pb-12 md:py-0 h-[190px] md:-mb-10 md:h-64 w-screen flex justify-center items-center ">
          <div className=" absolute object-cover h-full w-screen">
            <Image
              height={400}
              width={300}
              src="/public/images/hero2.jpg"
              alt="section-icon"
              className="h-full w-screen  object-cover top-0  z-0"
            />
          </div>
          <div className="flex justify-center items-center transparent w-full h-full ">
            <div className="flex absolute justify-center items-center transparent bg-cyan-400/90 w-full h-full z-20" />
            <div className=" text-red-400 font-bold text-4xl md:text-6xl flex flex-col justify-center items-center w-full h-full z-30 container">
              <Text
                css={{
                  textGradient: '45deg, $red600 -100%, $yellow600 100% ',
                }}
                weight="bold"
                className="text-4xl md:mt-10 justify-center flex flex-row items-center text-center   md:left-20  md:text-5xl md:items-center tracking-widest z-20 leading-10 indent-2 drop-shadow-lg md:shadow-gray "
              >
                <span className="">OUR TEAM</span>
              </Text>
              <span className="z-50 text-white/60 underline">____</span>
            </div>
          </div>
        </div>
        <div className="h-[790px] md:h-[700px] -mt-20 md:pb-5 md:-mt-20 ml-5 overflow-x-hidden gap-y-[60%] grid-flow-row grid grid-cols-1 grid-rows-3 md:grid-rows-1 md:gap-x-[0%] md:grid-flow-col md:grid-cols-3  md:px-auto justify-center items-center pb-32">
          <div className="relative hover:mb-24 h-full">
            <Card image={samImage} title={'PRESDENT/CEO'} name={'SAM MONROE'} />
          </div>
          <div className="relative hover:mb-24 h-full">
            <Card image={bossLady} title={'DIRECTOR OF IGNITE INSTITUTES'} name={'LISA MONROE'} />
          </div>
          <div className="relative h-full hover:mb-24 md:mb-0 mb-12">
            <Card
              image={directorOfCollegeReadiness}
              title={'DIRECTOR OF COLLEGE READINESS'}
              name={'DR TIKIYA HENRY'}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamArea
