'use client'
import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import LOGOICON from '../../../public/images/logo-icon-darkshadow.png'
import LOGOLIGHTWORDS from '../../../public/images/ignite_logo_light.png'
import LOGODARKICON from '../../../public/images/logo-icon-light-shadow.png'
import LOGODARKWORDS from '../../../public/images/logo-words-light-shadow.png'
import Image from 'next/image'
import {motion, useAnimation} from 'framer-motion'
import MenuItem from './MenuItem'
import {AiTwotoneHome} from 'react-icons/ai'
import {BsFillInfoSquareFill} from 'react-icons/bs'
import NavDonateButton from './ui/NavDonateButton'
import DropDownMenu from './DropDownMenu'
import classNames from '../../lib/classNames'
import useScrollPosition from '../../lib/hooks/useScrollPostion'
//going to animate log to stager in the image first then the words come from left. framer motion

function Navbar() {
  const scrollPosition = useScrollPosition()
  const [isHovered, setIsHovered] = React.useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleMenuItemClick = () => {
    setIsMenuOpen(false)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })
  const controls = useAnimation()
  const [scrollY, setScrollY] = useState(0)

  function logit() {
    setScrollY(window.scrollY)
    controls.start({
      rotate: scrollY / 0.5, // you can adjust the rate of rotation here
      transition: {duration: 0.8},
    })
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
  const gradientStyle = {
    background: 'linear-gradient(to bottom, #ffffff9a,rgba(255, 255, 255, 0)',
  }
  return (
    <div
      className={classNames(
        'z-40 w-screen',
        'text-white hover:bg-white hover:text-black hover:shadow',
        'transition duration-500',
        'md:fixed md:left-0 md:top-0',
        scrollPosition > 0 && 'md:bg-white md:text-black md:shadow'
      )}
    >
      <div
        // className={classNames(
        //   "w-screen max-w-6xl h-32 z-30",
        //   "flex flex-row  justify-between  mx-auto  items-center px-2",
        //   "text-white hover:text-black rounded bg-transparent",
        //   "hover:bg-white/70"
        // )}
        className={classNames(
          'h-32 w-screen max-w-6xl',
          'mx-auto flex flex-row  items-center justify-between px-2',
          'text-inherit'
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex max-w-[200px] items-center">
          <div className=" z-10 flex-auto ml-2" />
          <Link href="/">
            <motion.div animate={controls} className="content ml-.5">
              <Image
                src={isHovered ? LOGOICON : LOGODARKICON}
                alt="ignite logo"
                height={90}
                width={90}
                className=" scroll-animate-spin min-h-[55px] min-w-[55px] z-50  "
              />
            </motion.div>
          </Link>
          <motion.div animate={{x: 100}} transition={{ease: 'easeOut', duration: 1}}>
            <Link href="/">
              <Image
                src={isHovered ? LOGODARKWORDS : LOGOLIGHTWORDS}
                alt="ignite logo words"
                height={120}
                width={175}
                className="mt-.5 invisible relative -left-24 bottom-0 z-50 sm:visible  "
              />
            </Link>
          </motion.div>
          <div />
        </div>

        <div
          className={`invisible relative z-10 flex h-24 items-start text-xl font-bold leading-10 tracking-wider sm:visible`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <MenuItem title="HOME" address="/" Icon={AiTwotoneHome} />
          <MenuItem title="EVENTS" address="/events" Icon={BsFillInfoSquareFill} />
          <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoSquareFill} />
          <MenuItem title="VOLUNTEER" address="/volunteer" Icon={BsFillInfoSquareFill} />
          <MenuItem title="CONTACT US" address="/contact" Icon={BsFillInfoSquareFill} />
        </div>
        {/*  Search */}
        <div className="flex-end -right-10 left-10 z-50 ml-5 flex items-center justify-between text-4xl md:invisible">
          {mobile ? (
            <DropDownMenu
              isOpen={isMenuOpen}
              onToggleMenu={toggleMenu}
              onMenuItemClick={handleMenuItemClick}
            />
          ) : (
            <Link className="z-50" href="https://buy.stripe.com/aEU7tpcfl13Q0sU5kk">
              {' '}
              <NavDonateButton href="https://buy.stripe.com/aEU7tpcfl13Q0sU5kk">
                {' '}
                Donate{' '}
              </NavDonateButton>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
