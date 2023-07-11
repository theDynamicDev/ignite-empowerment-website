import Link from 'next/link'
import {motion} from 'framer-motion'

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

const MobileSubMenu = ({subMenuItems, onMenuItemClick}) => {
  return (
    <motion.div
      variants={itemVariants}
      className="subMenuItems-container relative flex flex-col space-y-5 justify-center container items-center text-center underline tracking-widest  decoration-yellow-400 decoration-wavy hover:text-orange-400 uppercase content-center mt-3 "
    >
      {subMenuItems.map((item, index) => (
        <Link href={item.link} key={index}>
          <motion.div
            variants={itemVariants}
            className="text-cyan-400  py-1 text-lg font-semi-bold my-0 cursor-pointer"
            onClick={() => onMenuItemClick(item)}
          >
            {item.name}
          </motion.div>
        </Link>
      ))}
    </motion.div>
  )
}

export default MobileSubMenu
