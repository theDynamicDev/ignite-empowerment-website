import Link from 'next/link'
import MenuItem from './MenuItem'
import {AiTwotoneHome} from 'react-icons/ai'
import {BsFillInfoSquareFill} from 'react-icons/bs'
import LOGO from '../../public/ignite-full-logo.png'
import Image from 'next/image'
//going to animate log to stager in the image first then the words come from left. framer motion

function Header() {
  const gradientStyle = {
    background: "linear-gradient(to bottom, #ffffff,rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.5), rgba(253, 253, 254, 0))"
  };
  return (
    <div className="flex justify-around sm:mx-auto max-w-6xl mx-2 items-start pb-5 z-50" style={gradientStyle}>
       <div className="flex w-[50%] min-w-min -my-12"> 
     <Link href="/">
       <Image
          src={LOGO}
          alt="ignite logo"
  
          className='flex  h-[100%] w-[100%]   '
     /> 
     </Link>
      </div>
      <div className="flex mx-4  text-lg "> 
      <MenuItem title="HOME" address="/" Icon={AiTwotoneHome}/>
      <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoSquareFill}/>
      </div>
     
      <div className=" "> 
      
      </div>
      <div className=" "> 
      
      </div>
    </div>
  )
}

export default Header