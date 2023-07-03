import React from 'react'
import {Text} from '@nextui-org/react'

export default function MakeAnImpact() {
  const stripeKey = process.env.NEXT_PUBLIC_LIVE_STRIPE_PUBLISHABLE_KEY
  return (
    <div className="flex flex-col items-center md:justify-evenly justify-evenly bg-gradient-to-t from-cyan-400 to-transparent md:pb-96 lg:pb-96 pb-[0px] mt-[60px] md:bottom-0 py-2 ">
      <div className="w-screen absolute bg-gradient-to-t from-cyan-400 to-transparent pb-80 overflow-visible -bottom-32 -z-40 h-screen" />

      <div className="flex flex-col md:flex-row md:justify-evenly max-h-full z-10 justify-between bg-transparent items-center w-full h-full">
        <div className="md:h-screen md:mt-0 md:space-y-36 space-y-[460px]">
          <div className="rounded-lg flex flex-col relative w-[280px]  md:w-screen lg:space-y-12  lg:mt-20 lg:h-full md:space-y-32 md:items-center md:mt-[750px] md:justify-between md:content-between h-[800px] ">
            <div className="absolute shadow-lg flex -mt-2.5 -ml-3 md:flex md:items-center md:justify-end md:-bottom-[347px] w-[310px] md:mt-10 md:w-full h-[950px] md:ml-0 md:h-screen lg:mt-44 md:max-h-[428px] md: rounded-lg bg-yellow-400 animate-pulse -z-20" />

            <script async src="https://js.stripe.com/v3/buy-button.js"></script>
            <div className="rounded-lg flex mb-36  md:pb-20 md: lg:mt-0 w-[280px] md:top-72 lg:mb-24 md:absolute h-[250px]">
              <stripe-buy-button
                buy-button-id="buy_btn_1NOx5HBTJQ94GAwCWRXXn0GO"
                publishable-key={stripeKey}
                target="_blank"
              ></stripe-buy-button>
            </div>
            <div className="w-full md: md:absolute max-w-6xl ml-1 md:ml-0 rounded-lg md:overflow-visible overflow-x-scroll pb-52 md:pb-12 md:-mt-10 md:-bottom-96  ">
              <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
              <stripe-pricing-table
                pricing-table-id="prctbl_1NOxbTBTJQ94GAwCaiouZIS0"
                publishable-key={stripeKey}
                target="_blank"
              ></stripe-pricing-table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
