import React from 'react'
function layout({children}) {
  return (
    <div className="relative flex container w-screen bg-gray-800 h-screen ">
      <div className="flex flex-col bg-local bg-cover -mt-32 md:mt-0 -pt-32 top-0 bg-transparent-flame   bg-no-repeat bg-center h-screen w-full items-center justify-center z-10 ">
        <div className="absolute flex w-screen h-screen backdrop-saturate-100 backdrop-opacity-80 backdrop-contrast-125  -mt-32 md:mt-0 -pt-32  md:bg-gradient-to-r from-black from-[-20%]  via-transparent via-50% to-black to-[120%] bg-gradient-to-l from-black from-[-100%]  via-transparent via-50% to-black to-[190%] z-10" />
        {children}
      </div>
    </div>
  )
}

export default layout
