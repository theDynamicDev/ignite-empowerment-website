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
    <section className=" flex relative justify-center top-10 md:top-32 items-center h-screen">
      <div className=" justify-center  items-center md:flex-row flex-col w-full h-full">
        <div className="relative  md:py-0 h-[170px] md:h-1/5 w-screen flex justify-center items-center">
          <div className="flex justify-center items-center  mb-12  w-full h-screen max-h-[300px] -z-20 ">
            <div className="flex absolute bg-gray-900/70 w-screen mb-12 h-screen max-h-56" />
            <div className=" bg-forms-background bg-fixed ring-1 py-12 ring-green-500  mb-12  font-bold text-4xl md:text-6xl flex flex-col justify-center items-center w-full h-full max-h-56  ">
              <Text
                css={{
                  textGradient: '45deg, $green600 -40%, $yellow600 50%, $red500 190% ',
                }}
                weight="bold"
                className="text-4xl  justify-center flex flex-row items-center text-center md:left-20  md:text-5xl md:items-center tracking-widest z-20 leading-10 indent-2 drop-shadow-lg md:shadow-gray "
              >
                <span className=""> BOARD MEMBERS</span>
              </Text>
              <span className="z-50 text-gray-700 underline">____</span>
            </div>
          </div>
        </div>
        <div className="h-[79vh] md:h-[700px] overflow-y-scroll overflow-x-scroll gap-y-[100%] grid-flow-row grid grid-cols-1 grid-rows-3 md:grid-rows-1 md:gap-x-44 md:grid-flow-col md:grid-cols-3  md:px-10 justify-center items-center bg-white">
          <div className="relative h-full">
            <Card image={boardChair} title={'CEO'} name={'Sam Monroe'} />
          </div>
          <div className="relative h-full">
            <Card image={solaImage} title={'CEO'} name={'not Monroe'} />
          </div>
          <div className="relative h-full">
            <Card image={lisaV} title={'NOT'} name={'Sam Monroe'} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
