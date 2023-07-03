'use client'
import LandingPage from './components/LandingPage'
import OurWork from './components/OurWork'
import WhoWeAre from './components/WhoWeAre'
import RecentImpact from './components/RecentImpact.tsx'
import MakeAnImpact from './components/MakeAnImpact'
import React, {Suspense} from 'react'
import Loading from './components/ui/Loading'
import {Text} from '@nextui-org/react'
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

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
      <Suspense fallback={<Loading />}>
        <section
          id="events"
          className="top-10 flex h-screen w-screen mb-12 md:mb-20 snap-mandatory snap-center  items-center justify-center"
        >
          <RecentImpact />
        </section>
      </Suspense>

      <section className="flex flex-col h-screen w-screen md:pb-80 md:bottom-0 md:mb-32 relative items-center justify-center">
        <div className="flex w-full h-44 mt-0 -mb-10 md: md:-top-32 md:mb-0 md:absolute lg:my-10 flex-row ">
          <Text
            css={{
              textGradient: '45deg, $red700 -70%, $yellow600 40%, $green600 100%',
              display: 'flex',
              width: '100%',
            }}
            weight="bold"
            className="-mb-0 lg:my-[50px]  md:mb:32 text-4xl items-center flex justify-center w-full  md:text-5xl text-white  md:items-center tracking-widest z-50 leading-10 indent-2 drop-shadow-lg md:shadow-gray"
          >
            MAKE AN IMPACT
          </Text>
        </div>

        <MakeAnImpact />
      </section>

      {/* Statistics? */}
      {/* Mobile menu */}
      {/* Volunteer */}
      {/* Footer */}
    </div>
  )
}
