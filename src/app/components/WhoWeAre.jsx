'use client'
import {motion, useAnimation} from 'framer-motion'
import {Text} from '@nextui-org/react'
import React, {useEffect, useState} from 'react'
import Image from 'next/image'
function WhoWeAre() {
  const controls = useAnimation()
  const [scrollY, setScrollY] = useState(0)

  function logit() {
    setScrollY(window.pageYOffset)
    if (scrollY > 200) {
      controls.start({
        marginTop: 175,
        transition: {duration: 2},
      })
    } else {
      controls.start({
        marginTop: 0,
        transition: {duration: 1},
      })
    }
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', logit)
    }
    watchScroll()
    // Remove listener (like componentWillUnmount)
    return () => {
      window.removeEventListener('scroll', logit)
    }
  })
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
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
  const tablet = windowSize.width <= 1024
  return (
    <motion.div
      animate={controls}
      className="content  h-screen w-screen flex relative flex-col md:flex-row  md:justify-center md:items-center mb-20 snap-center"
    >
      <motion.div className="  flex flex-col md:flex-row md:absolute h-full w-full md:flex-wrap overflow-hidden items-center justify-center">
        <Text
          css={{
            textGradient: '45deg, $red700 -70%, $yellow600 30%, $green600 60%, $cyan500 100%',
          }}
          weight="bold"
          className=" text-4xl justify-center flex flex-row md:justify-center text-center  lg:-top-20  md:left-20  md:text-5xl text-white  md:items-center tracking-wide leading-10 indent-2 drop-shadow-lg md:shadow-gray shadow-white"
        >
          <span className="">Who </span>
          <span className="">We </span>
          <span className="">Are </span>
        </Text>

        <div className="  md:flex-wrap md:justify-center    items-center justify-center  pl-2 flex ">
          <div className=" flex flex-col  md:justify-center  md:items-center md:bottom-0 md:flex-row">
            <div className="flex justify-center mb-32  items-center h-full w-full ">
              <Image
                src="/public/images/whoweare.png"
                alt="image of founders"
                width="550"
                height="350"
                className="md:absolute md:h-full max-w-44 md:object-contain max-h-[550px] md:max-w-3xl  "
              />
              <div className="absolute md:-z-10  mt-[135px] md:mt-[112px] mr-11 max-w-[340px] w-full -z-10 h-[300px] md:h-[454px] md:w-[50vw] md:max-w-[43vw] md:min-w-[530px]  md:-left-20 right-[3px] border-8 border-yellow-300" />
            </div>
            <div className="flex  md:flex-col md:justify-between justify-center w-full items-center">
              <div className="relative  -mt-12 md:flex md:flex-col md:h-full  md:w-full  md:justify-center">
                <div className="absolute invisible md:visible w-32 md:-z-40 md:h-[495px] md:w-[120vw] md:-left-[20vw] z-10  md:-top-12  flex justify-center items-center border-4 border-cyan-400 " />
                <h1 className=" flex flex-row px-2 justify-center items-center md:flex-row md:mt-12 text-xl md:text-2xl text-white font-semibold ">
                  <p className=" ">
                    {' '}
                    <span className=" "> We want to </span>
                    <span className=" uppercase text-2xl md:text-4xl ">breathe new life</span> into
                    many of the existing{' '}
                    <span className=" uppercase text-2xl md:text-4xl ">organizations</span> and{' '}
                    <span className=" uppercase text-2xl md:text-4xl"> ignite a fire </span>within{' '}
                    <span className=" uppercase text-2xl md:text-4xl">our youth</span> that will{' '}
                    <span className=" uppercase text-2xl md:text-4xl "> impact the future</span> of
                    the entire <span className=" uppercase text-2xl md:text-4xl"> community</span>.
                  </p>
                </h1>{' '}
                <p className=" mb-5">{'\n'} </p>
                <span className=" text-2xl text-slate-200 mr-4 items-end flex justify-end font-bold">
                  - Sam Monroe, Founder{' '}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-green-500/70 w-full h-[80vh] md:h-1/2 md:w-[120vw] absolute mt-36 md:mt-72 lg:mt-52 overflow-hidden md:rotate-12  -z-30  " />
      </motion.div>
    </motion.div>
  )
}

export default WhoWeAre
