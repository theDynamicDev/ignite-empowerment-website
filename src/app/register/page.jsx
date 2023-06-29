"use client";
import React from 'react';
import ConstentForm from './components/ConsentForm';
import { Text } from "@nextui-org/react";
const PROJECT_ID = process.env.NEXT_PUBLIC_FORMSPREE_PROJECT_ID
console.log("this is the project id from registration =  ", PROJECT_ID)
function Registration({ pageProps }) {
    console.log("this is the page props from registration =  ", JSON.stringify({...pageProps}))
  return (
    <div className='w-screen  md: md:flex md:flex-col md:items-center  mt-3 md:mt-10 rounded-xl h-full z-50'> 
    <div className="flex flex-col justify-center items-center bg-gradient-to-t from-transparent -from-10% via-black via-50% to-transparent to-100% w-full bg-opacity-20 h-full ">
                <Text
        css={{
          textGradient: "45deg, $red700 -70%, $yellow600 40%, $green600 100%",
        }}
        weight="bold"
        className="my-6 text-4xl justify-center flex flex-row items-center text-center text-white  md:items-center tracking-wide z-20 leading-10 indent-2 drop-shadow-lg md:shadow-gray"
      >
        <span className="">CONSENT FORM</span>
      </Text>
      </div>
      <ConstentForm />

    </div> 
    
  )
}

export default Registration