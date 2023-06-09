import './globals.css'
import {Inter} from 'next/font/google'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

export const metadata = {
  title: 'Ignite Empowerment Website',
  description: 'a non profit that empowers youth in the broward county area',
}

export default function RootLayout({children}) {
  return (
    <html lang="en" className="min-h-screen w-screen bg-gray-900">
      <body className="flex flex-col items-center justify-center ">
        <header>
          <NavBar />
        </header>

        <div id="content">{children}</div>
        <footer className="mt-8">
          <Footer />
        </footer>
      </body>
    </html>
  )
}
