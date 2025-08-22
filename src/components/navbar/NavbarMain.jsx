import React, { useState } from 'react'
import { NavbarLogo } from './NavbarLogo'
import { NavbarLinks } from './NavbarLinks'
import { NavbarBtn } from './NavbarBtn'
import { GiHamburgerMenu } from "react-icons/gi"

export const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="max-w-[1300px] mx-auto px-4 w-full fixed left-1/2 -translate-x-1/2 z-20 mt-2">
      <div className="flex justify-between items-center bg-black p-4 rounded-full border border-orange">
        <NavbarLogo />

        <div className="hidden lg:flex items-center gap-6">
          <NavbarLinks />
        </div>

        <button
          className="lg:hidden text-2xl p-3 border border-orange rounded-full text-white"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden mt-2 flex flex-col items-center gap-4 bg-black border border-orange rounded-2xl p-6 animate-fadeIn">
          <NavbarLinks />
        </div>
      )}
    </nav>
  )
}
