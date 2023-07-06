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
    <section className=" flex relative flex-col justify-center content-center md:top-0  md:mt-0 items-start bg-slate-100 w-full  md:-pb-44 md:h-1/3 h-[1400px]">
      <div className="relative  md:py-0 -mt-[155px] md:mt-0 h-[170px] md:h-72 w-full flex justify-center items-center ">
        <div className=" absolute object-cover h-full w-full">
          <Image
            height={400}
            width={300}
            src="/public/images/hero2.jpg"
            alt="section-icon"
            className="h-full w-full  object-cover top-0  z-0"
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
      <div className=" justify-between relative flex items-center content-between md:flex-row md:content-center md:items-start md:h-1/2 space-y-7 md:space-y-0 md:mt-44 mt-[74px] bg-slate-100 h-[1000px] flex-col w-screen ">
        {' '}
        <div className="flex  justify-center scale-95 items-center relative -mt-12 hover:scale-105 w-1/3 z-30 h-1/3">
          <Card image={samImage} title={'PRESDENT/CEO'} name={'SAM MONROE'} />
        </div>
        <div className=" flex  scale-[80%] justify-center items-center relative hover:scale-105 w-1/3 z-30 h-1/3">
          <Card image={bossLady} title={'DIRECTOR OF IGNITE INSTITUTES'} name={'LISA MONROE'} />
        </div>
        <div className=" flex  scale-[80%] justify-center items-center relative  h-1/3 hover:scale-105 w-1/3 z-30 md:mb-0 mb-12">
          <Card
            image={directorOfCollegeReadiness}
            title={'DIRECTOR OF COLLEGE READINESS'}
            name={'DR TIKIYA HENRY'}
          />
        </div>
      </div>
    </section>
  )
}

export default TeamArea
