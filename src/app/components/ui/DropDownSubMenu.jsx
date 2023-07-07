import React, {useState} from 'react'
import Link from 'next/link'

const menuItems = [
  {name: 'Volunteer', link: '/volunteer'},
  {name: 'Registration', link: '/register'},
]

function DropDownSubMenu({isOpen, onToggleMenu, onMenuItemClick}) {
  // You can use the isOpen state from the parent to control the opening and closing of the dropdown.
  return (
    <div className="mx-3 relative lg:mx-6  overflow-visible h-32  z-50">
      <button
        onClick={onToggleMenu}
        className="hidden hover:animate-pulse sm:inline  z-30 hover:underline hover:decoration-green-500 hover:text-orangeTheme text-shadow-lg  text-base"
      >
        FORMS
      </button>

      {/* The dropdown menu */}
      {isOpen && (
        <div className="flex bg-white-80 flex-col w-12 h-32 -space-y-2 z-50  -mt-3 text-shadow-lg absolute overflow-visible ">
          {menuItems.map((item, index) => (
            <Link key={index} href={item.link} onClick={onMenuItemClick}>
              <p className="hidden sm:inline my-0 text-sm font-semi-bold hover:my-2 underline decoration-orangeTheme hover:text-cyan-500  text-green-600 hover:animate-pulse uppercase tracking-widest leading-10  ">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default DropDownSubMenu
