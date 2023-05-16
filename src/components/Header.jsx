import Link from 'next/link'
import MenuItem from './MenuItem'
import {AiTwotoneHome} from 'react-icons/ai'
import {BsFillInfoSquareFill} from 'react-icons/bs'
import LOGO from '../../public/ignite-full-logo.png'
import Image from 'next/image'
//going to animate log to stager in the image first then the words come from left. framer motion
const background = 'https://cdn.midjourney.com/8918741c-b160-40e0-82d4-70433710f4e3/0_1.png'
function Header() {
  return (
    <div className="flex justify-evenly sm:mx-auto max-w-6xl mx-2 items-start py-3" >
       <div className="flex w-38 min-w-min "> 
     <Link href="/">
       <Image
          src={LOGO}
          alt="ignite logo"
  
          className='flex  h-48 w-52 text-lg my-auto -mt-12  '
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