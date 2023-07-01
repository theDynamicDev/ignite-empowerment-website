import Image from 'next/image'
import NavDonateButton from './ui/NavDonateButton'
import Registration from '../register/page'
import Link from 'next/link'
export default function Footer() {
  return (
    <div className="h-full w-screen justify-between bg-gray-800 px-8 py-12 text-white md:px-16">
      <div className="md:flex md:justify-between">
        <div className="mb-8 space-y-2 md:mb-0 md:w-1/2">
          <h2 className="pb-4 text-lg font-semibold">
            Arm our youth with an unstoppable mindset...
          </h2>
          <Link href="https://buy.stripe.com/aEU7tpcfl13Q0sU5kk">
            <NavDonateButton>DONATE</NavDonateButton>
          </Link>
        </div>
        <div className="mb-8 space-y-2 md:mb-0 md:w-1/2">
          <h2 className="text-lg font-semibold text-orange-500">Contact Us</h2>
          <p>P.O. Box 9181 Fort Lauderdale, FL 33310</p>
          <p>Email: info@ignite-empowerment.org</p>
          <p>Phone: 954-544-9900</p>
        </div>
      </div>
      <div className="my-8">
        <h2 className="text-lg font-semibold text-orange-500 mb-2">Useful links</h2>
        <ul className="list-inside list-disc space-y-2">
          <Link href="/register">
            {' '}
            <li>Registration</li>{' '}
          </Link>
          <Link href="/ignite-book-club">
            {' '}
            <li>Book Club</li>{' '}
          </Link>
          <Link href=" /volunteer">
            {' '}
            <li>Volunteer</li>
          </Link>
          <Link href="contact">
            {' '}
            <li>Contact</li>
          </Link>
          <Link href="/about">
            {' '}
            <li>About Us</li>{' '}
          </Link>
        </ul>
      </div>
      <div className="mb-8 space-y-2">
        <Image
          className=" -my-2"
          src="/public/images/logo-light-shadow.png"
          alt="Ignite logo"
          width={188}
          height={102}
        />
        <p>Ignite Empowerment is a florida registered non-profit 501c</p>
      </div>

      <p className="text-center">© 2023 Ignite Empowerment</p>
    </div>
  )
}
