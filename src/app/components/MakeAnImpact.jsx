import React from 'react'
import {Text} from '@nextui-org/react'

export default function MakeAnImpact() {
  return (
    <div className="flex flex-col items-center md:justify-evenly justify-evenly w-screen h-screen  bg-gradient-to-t from-cyan-400 to-transparent pb-10 mt-8 py-2 ">
      <Text
        css={{
          textGradient: '45deg, $red700 -70%, $yellow600 40%, $green600 100%',
        }}
        weight="bold"
        className="mb-6 text-4xl flex-auto justify-center flex flex-row items-center text-center md:mt-32 md:-mb-20  md:left-20  md:text-5xl text-white  md:items-center tracking-widest z-20 leading-10 indent-2 drop-shadow-lg md:shadow-gray"
      >
        <span className="">MAKE AN IMPACT</span>
      </Text>
      <div className="flex flex-col md:flex-row md:justify-evenly overflow-scroll-y   justify-between bg-transparent items-center w-full h-full">
        <div className="relative ">
          <div className="absolute shadow-lg  -mt-2.5 -ml-3 w-[310px] h-[400px] rounded-lg bg-yellow-400 animate-pulse -z-10" />
          <div className="rounded-lg w-[280px] h-[350px] ">
            <script async src="https://js.stripe.com/v3/buy-button.js"></script>
            <stripe-buy-button
              className="w-full h-full"
              buy-button-id="buy_btn_1NHuS2BTJQ94GAwC5jq2akMN"
              publishable-key="pk_test_LagVlliAFC7BC1xboVuxyRlS"
            ></stripe-buy-button>
          </div>
        </div>

        <div className="relative ">
          <div className="absolute shadow-lg  -mt-2.5 -ml-3 w-[310px] h-[380px] rounded-lg bg-yellow-400 animate-pulse -z-10" />
          <div className="rounded-lg w-[280px] h-[350px]">
            <script async src="https://js.stripe.com/v3/buy-button.js"></script>
            <stripe-buy-button
              className="w-full h-full"
              buy-button-id="buy_btn_1NHuj0BTJQ94GAwCKRsjpRK5"
              publishable-key="pk_test_LagVlliAFC7BC1xboVuxyRlS"
            ></stripe-buy-button>
          </div>
        </div>
      </div>
    </div>
  )
}
