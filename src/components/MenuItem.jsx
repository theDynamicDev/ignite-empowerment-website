import Link from 'next/link'


export default function MenuItem({title, address, Icon}) {
  return (
    <div>
      <Link href={address} className='mx-4 lg:mx-6 hover:text-orange-600 z-50'>
      <Icon className= "text h-[50%] w-[50%] 2xl sm:hidden mx-4"/>
      <p className= "hidden sm:inline my-2 text-sm" >{title}</p>
      </Link>
    </div>
  )
}
