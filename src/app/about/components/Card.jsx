import React from 'react'
import Image from 'next/image'
function Card({image, title, name}) {
  return (
    <div className=" absolute h-[80%]  min-h-[200px] md:top-20 mt-32 md:mt-8 max-h-[400px] left-[7.5vw] md:left-6 md: w-[320px]  rounded-t-full flex justify-center shadow-xl  bg-white/90">
      <div className="  relative flex items-center  md:h-80 h-72  rounded-lg rounded-t-full max-w-[300px] z-10 justify-center ring-offset-green-700/30 ring-4 ring-yellow-300 bg-gradient-to-r from-cyan-400/80 from-10% via-white via-50% to-cyan-400/80 to-100% ">
        <div className="  bg-white/30 h-full w-full hover:scale-110 container overflow-hidden relative rounded-t-full rounded-lg ">
          <Image
            height={600}
            width={400}
            src={image}
            alt="team image"
            className=" object-cover z-30 min-w-[300px] overflow-visible max-h-[650px]  w-full min-h-[350px] rounded-b-full rounded-t-full "
          />
        </div>
        <div className="text-white absolute -bottom-32 md:-bottom-20 bg-gradient-to-r from-orange-500 from-10% via-yellow-500 via-100%   py-3 justify-center rounded-b-3xl w-[115%] md:h-[30%] h-[90px] overflow-visible shadow-lg ring-2 ring-green-500 font-medium text-3xl items-center flex flex-col z-30 ">
          <h3 className="text-3xl leading-10 tracking-wide">
            <a href="#">
              <span className="text-shadow-lg font-thin text-2xl"> {name}</span>
            </a>
          </h3>
          <span className="text-base tracking-widest font-semi">{title}</span>
        </div>
      </div>
    </div>
  )
}

export default Card
