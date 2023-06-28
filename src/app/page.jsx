"use client";
import LandingPage from "./components/LandingPage";
import OurWork from "./components/OurWork";

import WhoWeAre from "./components/WhoWeAre";
import RecentImpact from "./components/RecentImpact";
import MakeAnImpact from "./components/MakeAnImpact";

import { loadStripe } from "@stripe/stripe-js";
import React from "react";

import axios from "axios";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
// console.dir(stripePromise, {depth: null});
export default function Home() {
  const [clientSecret, setClientSecret] = React.useState("");

  React.useEffect(() => {
    fetchPaymentIntent();
  }, []);

  const fetchPaymentIntent = async () => {
    const { data } = await axios.post("/api/create-payment-intent", {
      items: [{ id: "DONATIONS" }],
    });
    setClientSecret(data.clientSecret);
    console.log(
      "this is the client secret from function =  " + data.clientSecret
    );
    console.log("this is the data from function =  ", data);
    console.log("this is the client secret index =  ", clientSecret);
  };
  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  console.log("this is the client secret index =  ", clientSecret);
  return (
    <div className="flex flex-col">
      <div className="snap-center ">
        <LandingPage />
      </div>
      <div className="flex justify-center items-center">
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
      <div className="relative flex snap-mandatory snap-center w-screen h-screen justify-center items-center  mt-0 z-30">
        <RecentImpact />
      </div>
      <div className="flex justify-center items-center h-screen w-screen">
        <MakeAnImpact />
      </div>
      <div></div>

      {/* Statistics? */}
      {/* Mobile menu */}
      {/* Volunteer */}
      {/* Footer */}
    </div>
  );
}
