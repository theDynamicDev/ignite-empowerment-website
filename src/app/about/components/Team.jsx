'use client'
import React from 'react'

import Image from 'next/image'
import Card from './Card'
import {Text} from '@nextui-org/react'
const Team = () => {
  const solaImage = '/public/images/Sola_Tojuola.png'
  const boardChair = '/public/images/board-chair.png'
  const lisaV = '/public/images/LisaV.png'
  const noel = '/public/images/Noel-Johnson.png'
  const lindaWalker = '/public/images/linda.png'
  const drJanice = '/public/images/dr-stone.png'
  return (
    <section className=" flex relative justify-center top-5 md:top-32 bottom-32 items-center md:pb-40 z-0 w-screen h-screen bg-white/90">
      <div className=" justify-center mb-12 items-center md:pb-32 md:flex-row flex-col w-screen h-screen">
        <div className="relative  md:py-0 h-[170px]  w-screen flex justify-center items-center">
          <div className="flex justify-center items-center w-screen  h-screen md:max-h-80 max-h-[400px] -z-20 ">
            <div className="flex absolute bg-gray-900/70 w-screen md:mb-20 md:-mt-2 mb-2 h-screen md:max-h-80 max-h-56 pb-12" />
            <div className=" bg-forms-background bg-fixed bg-center ring-1 py-12 ring-green-500  md:mb-20 font-bold text-4xl md:text-6xl flex flex-col justify-center items-center w-full h-screen  md:max-h-80 max-h-56  ">
              <Text
                css={{
                  textGradient: '45deg, $green600 -40%, $yellow600 50%, $red500 190% ',
                }}
                weight="bold"
                className="text-4xl  justify-center flex flex-row items-center text-center md:left-20  md:text-5xl md:items-center tracking-widest z-20 leading-10 indent-2 drop-shadow-lg md:shadow-gray "
              >
                <span className=""> BOARD MEMBERS</span>
              </Text>
              <span className="z-50 text-white underline">____</span>
            </div>
          </div>
        </div>
        <div className="absolute overflow-y-scroll px-3 h-screen w-full mt-0 bg-white md:mb-10 md:pb-72 ">
          <div className="h-screen max-h-[77vh] md:max-h-[105vh] md:h-screen ml-2 md:ml-4 md:-pb-12 overflow-y-scroll overflow-x-hidden gap-y-[50%] grid-flow-row grid grid-cols-1 grid-rows-3 md:grid-rows-2 md:gap-x-[40px] md:gap-y-[80px] md:overflow-x-scroll md:grid-flow-col md:grid-cols-3 md:px-auto justify-center items-center md:bg-transparent z-0 ">
            <div className="relative h-full hover:mb-24 -mt-12 md:mt-0">
              <Card image={boardChair} title={'BOARD CHAIRMAN'} name={'TRAVIS BATEN'} />
            </div>
            <div className="relative h-full hover:mb-24">
              <Card image={solaImage} title={'MEMBER'} name={'SOLA TOJUOLA'} />
            </div>
            <div className="relative h-full hover:mb-24 ">
              <Card image={lisaV} title={'MEMBER'} name={'LISA VIGNOLA'} />
            </div>
            <div className="relative h-full hover:mb-24 ">
              <Card image={drJanice} title={'MEMBER'} name={'DR.JANICE STONE'} />
            </div>
            <div className="relative h-full hover:mb-24 ">
              <Card image={lindaWalker} title={'MEMBER'} name={'LINDA WALKER'} />
            </div>
            <div className="relative h-full hover:mb-24 ">
              <Card image={noel} title={'MEMBER'} name={'NOEL JOHNSON'} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
