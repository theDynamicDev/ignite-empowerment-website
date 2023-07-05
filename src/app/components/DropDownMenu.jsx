'use client'
import {useState} from 'react'
import React from 'react'
import {FiMenu, FiX} from 'react-icons/fi'
import {motion, AnimatePresence} from 'framer-motion'
import Link from 'next/link'

const menuVariants = {
  open: {
    transition: {staggerChildren: 0.07, delayChildren: 0.2},
  },
  closed: {
    transition: {staggerChildren: 0.05, staggerDirection: -1},
  },
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: {stiffness: 1000, velocity: -100},
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: {stiffness: 1000},
    },
  },
}

const menuItems = [
  {name: 'Home', link: '/'},
  {name: 'About', link: '/about'},
  {name: 'Volunteer', link: '/volunteer'},
  {name: 'Events', link: '/events'},
  {name: 'Gallery', link: '/gallery'},
  {name: 'Donate', link: 'https://buy.stripe.com/aEU7tpcfl13Q0sU5kk', target: '_blank'},
  {name: 'Register', link: '/register'},
  {name: 'Contact Us', link: '/contact'},
]

const DropDownMenu = ({isOpen, onToggleMenu, onMenuItemClick}) => {
  return (
    <div className="z-50 overflow-hidden right-[25px] absolute">
      <button className="focus:outline-none text-orange-400 relative z-50" onClick={onToggleMenu}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-80 flex flex-col justify-center items-center space-y-4 "
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            {menuItems.map((item) => (
              <Link href={item.link} target={item?.target} key={item.name}>
                <motion.div
                  variants={itemVariants}
                  className="text-white hover:text-orange-400 text-4xl font-semi-bold my-4 cursor-pointer"
                  onClick={onMenuItemClick}
                >
                  {item.name}
                </motion.div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default DropDownMenu
