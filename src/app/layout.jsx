import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'



export const metadata = {
  title: 'Ignite Empowerment Website',
  description: 'a non profit that empowers youth in the broward county area',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="  w-screen h-screen  bg-white">
  
       
  
      <body className="flex flex-col  " >
     
      <header className={`flex justify-center items-center `}>

<NavBar />
  </header>

  <div className=" flex flex-col items-center ">

        {children}
        </div>
      </body>
    </html>
  )
}
