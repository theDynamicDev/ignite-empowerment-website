'use client'
import React from 'react'

import Image from 'next/image'
import Card from './Card'
import {Text} from '@nextui-org/react'
const Team = () => {
  const solaImage = '/public/images/Sola_Tojuola.png'
  const boardChair = '/public/images/board-chair.png'
  const lisaV = '/public/images/LisaV.png'

  return (
    <section className=" flex relative justify-center top-28 md:top-32 bottom-32 items-center z-0 h-screen">
      <div className=" justify-center mb-12 items-center md:flex-row flex-col w-full h-full">
        <div className="relative  md:py-0 h-[170px]  w-screen flex justify-center items-center">
          <div className="flex justify-center items-center   w-full h-screen md:max-h-80 max-h-[400px] -z-20 ">
            <div className="flex absolute bg-gray-900/70 w-screen md:mb-20 md:-mt-1 mb-5 h-screen md:max-h-80 max-h-52 " />
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
        <div className="h-screen max-h-[77vh] md:max-h-[95vh] md:h-[700px]  overflow-y-scroll overflow-x-scroll gap-y-[50%] grid-flow-row grid grid-cols-1 grid-rows-3 md:grid-rows-1 md:gap-x-44 md:grid-flow-col md:grid-cols-3  md:px-10 justify-center items-center z-0 bg-white">
          <div className="relative h-full hover:mb-24 -mt-12 md:mt-0">
            <Card image={boardChair} title={'BOARD CHAIRMAN'} name={'TRAVIS BATEN'} />
          </div>
          <div className="relative h-full hover:mb-24">
            <Card image={solaImage} title={'MEMBER'} name={'SOLA TOJUOLA'} />
          </div>
          <div className="relative h-full hover:mb-24 ">
            <Card image={lisaV} title={'MEMBER'} name={'LISA VIGNOLA'} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
