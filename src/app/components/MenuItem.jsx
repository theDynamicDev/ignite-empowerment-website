import Link from 'next/link'


export default function MenuItem({title, address, Icon}) {
  return (
    <div className='flex  '>
      <Link href={address} className='mx-3  lg:mx-6  hover:animate-pulse hover:underline hover:decoration-green-500 hover:text-orangeTheme drop-shadow-lg z-20'>
      <Icon className= " h-[60%] w-[60%]  sm:hidden mx-4"/>
      <p className= "hidden sm:inline my-2 text-base" >{title}</p>
      </Link>
    </div>
  )
}
