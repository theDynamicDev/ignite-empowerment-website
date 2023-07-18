'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import useDimensions from 'react-cool-dimensions'
import arrayCeil from '../../lib/arrayCeil'
import Button from '../components/ui/HeroButton'
import HeroImages from './ui/HeroImages'
import {Text} from '@nextui-org/react'
export default function Hero() {
  // className="hover:animate-pulse hover:text-white text-yellow-400 hover:underline  hover:decoration-yellow-500  "

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  React.useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const mobile = windowSize.width <= 768
  return (
    <div className=" absolute justify-center items-center -pr-2  z-20 ">
      <div className="flex relative flex-col justify-center overflow-hidden items-center ">
        <div className="flex  md:flex-none h-32 items-center overflow-hidden">
          <Text
            size={mobile ? 43 : 70}
            css={{
              position: 'relative',
              size: '800px',
              marginTop: '0',
              height: '200px',
              width: '900%',
              paddingRight: '5px',
              paddingLeft: '5px',
              flex: 1,
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textGradient: '45deg, $red700 -70%, $yellow600 30%, $green600 60%, $cyan500 100%',
            }}
            width="70vw"
            weight="bold"
            className=" md:flex-none overflow-hidden max-w-full text-center text-white px-2 tracking-wide leading-10 indent-2 drop-shadow-xl"
          >
            IGNITE EMPOWERMENT
          </Text>
        </div>
        <div className="flex flex-col w-screen justify-center items-center">
          <p className="mt-5 text-center text-xl md:text-base font-bold tracking-wider sm:tracking-tight text-white px-3 opacity-100">
            <span className="text-white   font-bold  text-xl md:md:text-4xl">EMPOWER</span>ING{' '}
            <span className="text-sm font-light">THE</span>{' '}
            <span className=" font-bold hover:animate-pulse hover:underline hover:decoration-yellow-500 sm:text-md md:text-4xl hover:text-white text-yellow-400 ">
              YOUTH
            </span>
            <span className="text-sm font-light"> AND</span>{' '}
            <span className="font-bold hover:animate-pulse sm:text-md md:text-4xl hover:text-cyan-400 underline decoration-yellow-500 ">
              NON-PROFITS
            </span>{' '}
            <span className="text-sm font-light"> OF</span>{' '}
            <span className="text-white sm:font-bold text-lg  md:text-4xl">BROWARD COUNTY</span> ...
          </p>
          <Button href="https://buy.stripe.com/aEU7tpcfl13Q0sU5kk">Donate</Button>
        </div>
      </div>
    </div>
  )
}
