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

const MobileSubMenu = ({subMenuItems, onMenuItemClick, item}) => {
  return (
    <motion.div variants={itemVariants} className="subMenuItems-container -mt-1">
      {subMenuItems.map((item) => (
        <Link href={item.link} key={index}>
          <motion.div
            variants={itemVariants}
            className="text-green-500  underline decoration-cyan-400 hover:text-orange-400 text-2xl font-semi-bold my-4 cursor-pointer"
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
