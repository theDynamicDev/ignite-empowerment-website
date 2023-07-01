import React from 'react'
import {Text} from '@nextui-org/react'

export default function MakeAnImpact() {
  const stripeKey = process.env.NEXT_PUBLIC_LIVE_STRIPE_PUBLISHABLE_KEY
  return (
    <div className="flex flex-col items-center md:justify-evenly justify-evenly w-screen h-screen  bg-gradient-to-t from-cyan-400 to-transparent md:pb-56 pb-[1200px] mt-[50vh] md:mt-8 py-2 ">
      <Text
        css={{
          textGradient: '45deg, $red700 -70%, $yellow600 40%, $green600 100%',
        }}
        weight="bold"
        className="mb-6 text-4xl flex-auto justify-center flex flex-row items-center text-center md:mt-32 md:-mb-20  md:left-20  md:text-5xl text-white  md:items-center tracking-widest z-20 leading-10 indent-2 drop-shadow-lg md:shadow-gray"
      >
        <span className="">MAKE AN IMPACT</span>
      </Text>
      <div className="flex flex-col md:flex-row md:justify-evenly max-h-full  justify-between bg-transparent items-center w-full h-full">
        <div className="relative md:mt-32 md:space-y-36 space-y-[50vh]">
          <div className="absolute shadow-lg -mt-2.5 -ml-3 md:ml-0 w-[310px] md:w-screen h-[1000px]  md:h-screen md:max-h-[850px] rounded-lg bg-yellow-400 animate-pulse -z-20" />
          <div className="rounded-lg flex flex-col w-[280px] md:w-screen space-y-36  md: md:items-center md:[750px] h-[550px] ">
            <div className="rounded-lg -mt-[50vh] md:-mt-32 w-[280px] h-[250px]">
              <script async src="https://js.stripe.com/v3/buy-button.js"></script>

              <stripe-buy-button
                buy-button-id="buy_btn_1NOx5HBTJQ94GAwCWRXXn0GO"
                publishable-key={stripeKey}
              ></stripe-buy-button>
            </div>
            <div className="w-full max-w-5xl ml-1 md:ml-0 rounded-lg md:overflow-visible overflow-x-scroll pb-28 md:pb-0 ">
              <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
              <stripe-pricing-table
                pricing-table-id="prctbl_1NOxbTBTJQ94GAwCaiouZIS0"
                publishable-key={stripeKey}
              ></stripe-pricing-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
