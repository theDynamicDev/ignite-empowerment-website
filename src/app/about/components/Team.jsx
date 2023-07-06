'use client'
import React from 'react'
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
    <section className=" flex relative justify-start md:justify-center flex-col top-0 md:top-0 bottom-0 items-center md:pb-40 z-0 w-screen h-[2600px] md:h-[1300px] bg-slate-100">
      <div className=" justify-center  mb-0 items-center md:pb-32 md:flex-row flex-col w-screen h-screen">
        <div className="relative  md:py-0 h-[170px]  w-screen flex justify-center items-center">
          <div className="flex flex-col justify-center items-center w-screen  h-screen md:max-h-96 max-h-[400px] -z-20 ">
            <div className="flex absolute bg-gray-900/70 w-screen h-screen md:max-h-96 max-h-52 mb-12 md:mb-0 pb-0" />
            <div className=" bg-forms-background bg-fixed bg-center ring-1  ring-green-500  md:mb-20 font-bold text-4xl md:text-6xl flex flex-col justify-center items-center w-full h-screen  md:max-h-96 max-h-52 mb-12 ">
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
        <div className="absolute  md:flex-auto md:flex md:justify-center px-3 md:h-full w-full mt-36 md:mt-0  bg-slate-100 ">
          <div className=" flex flex-col md:flex-row md:flex-wrap relative container my-auto md:space-x-12 md:space-y-24 space-y-12  content-around justify-evenly items-center md:bg-transparent z-0 ">
            <div className="relative scale-95 flex justify-center  items-center h-full hover:scale-[100%] -mt-12 md:mt-0">
              <Card image={boardChair} title={'BOARD CHAIRMAN'} name={'TRAVIS BATEN'} />
            </div>
            <div className="relative flex scale-[80%] justify-center items-center h-full   hover:scale-[100%]">
              <Card image={solaImage} title={'MEMBER'} name={'SOLA TOJUOLA'} />
            </div>
            <div className="relative flex scale-[80%] justify-center items-center h-full  hover:scale-[100%]   ">
              <Card image={lisaV} title={'MEMBER'} name={'LISA VIGNOLA'} />
            </div>
            <div className="relative flex scale-[80%] justify-center items-center h-full  hover:scale-[100%]  ">
              <Card image={drJanice} title={'MEMBER'} name={'DR.JANICE STONE'} />
            </div>
            <div className="relative flex scale-[80%] justify-center items-center h-full  hover:scale-[100%]  ">
              <Card image={lindaWalker} title={'MEMBER'} name={'LINDA WALKER'} />
            </div>
            <div className="relative flex scale-[80%] justify-center items-center h-full  hover:scale-[110%]  ">
              <Card image={noel} title={'MEMBER'} name={'NOEL JOHNSON'} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
