import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Head from 'next/head'
export const metadata = {
  title: 'Ignite Empowerment Website',
  description: 'a non profit that empowers youth in the broward county area',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="  w-screen h-screen -z-10 bg-gray-200">
  
  <Head>

  <script
    async
    src="https://js.stripe.com/v3/buy-button.js">
  </script>
</Head>

  
      <body className="   flex flex-col justify-center items-center " >
      <header className={`z-20`}>

<NavBar />
  </header>
  

  <div className=" flex ">

        {children}
        </div>
        <footer className=' mt-8'>
   <Footer/>
   </footer>
      </body>
    
    
     
     
     
    </html>
  )
}
