import React from 'react'
import Link from 'next/link'
import LOGOICON from '../../../../public/images/logo-icon-darkshadow.png'
import LOGOWORDS from '../../../../public/images/logo-words-light-shadow.png'
import Image from 'next/image'
import {motion} from 'framer-motion'

function AnimatedLogo() {

  
  return (
    <>
    <div className=" flex-auto   z-10" />
    
    <motion.div

          initial={{ scale: 0 }}
          animate={{ rotate: 180, scale: 1 }}
          transition={{
              type: "spring",
              stiffness: 260,
              damping: 50,
              delay: 0.5
          }}
      >
          <Link href="/">

              <Image
                  src={LOGOICON}
                  alt="ignite logo"
                  height={90}
                  width={90}
               className=" min-w-[55px] min-h-[55px]  hover:animate-spin"
                   />
          </Link>
      </motion.div>
      
      <motion.div animate={{ x: 100 }}
          transition={{ ease: "easeOut", duration: 1, }}>
              <Link href="/">
                  <Image
                      src={LOGOWORDS}
                      alt="ignite logo words"
                      height={120}
                      width={175}
                      className='relative z-50 mt-.5 -left-24 bottom-0 invisible sm:visible  ' />
              </Link>
          </motion.div><div />
          </>
  )
}

export default AnimatedLogo