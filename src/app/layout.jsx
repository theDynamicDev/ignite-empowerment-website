import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ignite Empowerment Website',
  description: 'a non profit that empowers youth in the broward county area',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      
      <body className={`${inter.className}  bg-fuchsia-800`}>
        <Header />
      </body>
    </html>
  )
}
