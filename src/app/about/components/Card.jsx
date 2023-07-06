import React from 'react'
import Image from 'next/image'
function Card({image, title, name}) {
  return (
    <div classname="absolute container mt-12  md:scale-90 h-[100%] flex items-center justify-center shadow-xl  z-30">
      <div className=" absolute  h-full flex-auto  md:min-h-full md:top-0 mt-0 md:mt-0 container scale-75 max-w-[300px] -z-20 rounded-t-full  flex  bg-gradient-to-b from-white from-10% via-white via-50% to-transparent to-100%  " />

      <div className="  relative flex items-center  md:h-80 h-72 hover:mb-24 rounded-lg rounded-t-full max-w-[300px] z-0 justify-center ring-offset-green-700/30 ring-4 ring-yellow-300 bg-gradient-to-r from-cyan-400/80 from-10% via-white via-50% to-cyan-400/80 to-100% ">
        <div className="  bg-white/30 h-full w-full container overflow-hidden relative rounded-t-full rounded-lg ">
          <Image
            height={600}
            width={400}
            src={image}
            alt="team image"
            className=" object-cover z-30 min-w-[300px] overflow-visible max-h-[650px]  w-full min-h-[350px] rounded-b-full rounded-t-full "
          />
        </div>
        <div className="text-white absolute -bottom-12 md:-bottom-20 bg-gradient-to-r from-orange-500 from-10% via-yellow-500 via-100%   py-3 justify-center rounded-b-3xl w-[115%] md:h-[30%] h-[90px] overflow-visible shadow-lg ring-2 ring-green-500 font-medium text-3xl items-center flex flex-col z-30 ">
          <h3 className="text-3xl leading-10 ">
            <span className="text-shadow-lg tracking-widest font-bold text-xl"> {name}</span>
          </h3>
          <span className="text-sm tracking-[.1px]  font-thin">{title}</span>
        </div>
      </div>
    </div>
  )
}

export default Card
