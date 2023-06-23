"use client";
import React from 'react'
import ConstentForm from './components/ConsentForm'
import { FormspreeProvider } from '@formspree/react';
const PROJECT_ID = process.env.NEXT_PUBLIC_FORMSPREE_PROJECT_ID
console.log("this is the project id from registration =  ", PROJECT_ID)
function Registration({ pageProps }) {
    console.log("this is the page props from registration =  ", JSON.stringify({...pageProps}))
  return (
    <div className='w-screen'> 
         
      <ConstentForm />
   
    </div> 
    
  )
}

export default Registration