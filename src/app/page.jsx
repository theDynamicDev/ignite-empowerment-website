'use client'
import LandingPage from './components/LandingPage'
import OurWork from './components/OurWork'

import WhoWeAre from './components/WhoWeAre'
import RecentImpact from './components/RecentImpact'
import MakeAnImpact from './components/MakeAnImpact'

import {loadStripe} from '@stripe/stripe-js'
import React from 'react'

import axios from 'axios'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_LIVE_STRIPE_PUBLISHABLE_KEY)
// console.dir(stripePromise, {depth: null});
export default function Home() {
  // const [clientSecret, setClientSecret] = React.useState('')

  // React.useEffect(() => {
  //   fetchPaymentIntent()
  // }, [])

  // const fetchPaymentIntent = async () => {
  //   const {data} = await axios.post('/api/create-payment-intent', {
  //     items: [{id: 'DONATIONS'}],
  //   })
  // setClientSecret(data.clientSecret)
  // console.log('this is the client secret from function =  ' + data.clientSecret)
  // console.log('this is the data from function =  ', data)
  // console.log('this is the client secret index =  ', clientSecret)
  // }
  // const appearance = {
  //   theme: 'stripe',
  // }
  // const options = {
  //   clientSecret,
  //   appearance,
  // }

  // console.log('this is the client secret index =  ', clientSecret)
  return (
    <div className="flex flex-col max-w-full">
      <div className="snap-center ">
        <LandingPage />
      </div>
      <div className="flex items-center justify-center">
        {/* <Image
      src="/public/images/flame-black-bg.png"
      alt="flame bg"
      fill
      className= " opacity-50 object-cover object-center absolute bottom-0 transform rotate-180 top-0"
      /> */}
        <OurWork />
      </div>
      <div className="flex snap-mandatory snap-center md:mt-12 ">
        <WhoWeAre />
      </div>
      <section
        id="events"
        className="mt-0 flex h-screen w-screen  snap-mandatory snap-center  items-center justify-center"
      >
        <RecentImpact />
      </section>
      <section className="flex h-screen w-screen items-center justify-center">
        <MakeAnImpact />
      </section>

      {/* Statistics? */}
      {/* Mobile menu */}
      {/* Volunteer */}
      {/* Footer */}
    </div>
  )
}
