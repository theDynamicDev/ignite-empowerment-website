'use client'
import React from 'react'
import VolunteerForm from './components/VolunteerForm'
import {Text} from '@nextui-org/react'
import classNames from '../../lib/classNames'
// const PROJECT_ID = process.env.NEXT_PUBLIC_FORMSPREE_PROJECT_ID;
// console.log("this is the project id from registration =  ", PROJECT_ID);
function Registration() {
  return (
    <div
      className={classNames(
        'h-full w-screen', // element size & position
        'md:mt-24 my-10 rounded-xl', // styling
        'md:flex md:flex-col md:items-center' // medium styling
      )}
    >
      <div
        className={classNames(
          'h-full w-full',
          'flex flex-col items-center justify-center',
          'rounded-4xl bg-opacity-20 bg-gradient-to-b from-transparent via-black/70 via-50% to-transparent to-100% '
        )}
      >
        <Text
          css={{
            textGradient: '45deg, $red700 -70%, $yellow600 40%, $green600 100%',
          }}
          weight="bold"
          className={classNames(
            'my-6',
            'flex flex-row items-center justify-center text-center',
            'indent-2 text-4xl leading-10 tracking-wide text-white',
            'md:shadow-gray md:items-center',
            'drop-shadow-lg',
            'z-30'
          )}
        >
          <span>VOLUNTEER FORM</span>
        </Text>
      </div>
      <VolunteerForm />
    </div>
  )
}

export default Registration
