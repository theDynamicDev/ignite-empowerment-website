import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ignite Empowerment Website',
  description: 'a non profit that empowers youth in the broward county area',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      
      <body className={`${inter.className} `} >
        <Header />
        <Hero />
      </body>
    </html>
  )
}
