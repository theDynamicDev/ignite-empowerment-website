import React from 'react'
import Image from 'next/image'
function Card({image, title, name}) {
  return (
    <div className=" absolute h-[100%] hover:scale-110 min-h-[200px] md:top-20 mt-32 md:mt-8 max-h-[430px] left-[7.5vw] md:left-6 md:h-full w-[330px] flex justify-center rounded-lg   shadow-xl ring-1 ring-orange-400 bg-green-400/40">
    <div className="  relative flex items-center container w-screen md:h-80 h-72 rounded-lg z-10 justify-center bg-gradient-to-r from-cyan-400 from-10% via-white via-50% to-cyan-400 to-90% ">
        <div className="  bg-white/50 h-full w-full object-contain rounded-lg ">
            <Image height={500} width={400} src={image} alt="team image" className=" object-cover z-30  overflow-visible  w-full h-5/6  rounded-lg "/>
             
        </div>
        <div className="text-white absolute -bottom-32 md:-bottom-28 bg-gradient-to-r from-orange-500 from-10% via-yellow-500 via-100%   py-3 justify-center rounded-lg w-[110%] md:h-[35%] h-[90px] overflow-visible shadow-lg ring-1 ring-cyan-400 font-medium  text-3xl items-center flex flex-col z-50 ">
            <h3 className="text-3xl leading-10 tracking-wide"><a href="#"><span className='text-shadow-lg'> {name}</span></a></h3>
            <span className="text-base tracking-widest font-light">{title}</span>
        </div>
    </div>
</div>
  )
}

export default Card