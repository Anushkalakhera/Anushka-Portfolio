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
      <div className="flex justify-between items-center bg-black px-6 py-4 rounded-full border border-orange">
        {/* Logo */}
        <NavbarLogo />

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {/* Links */}
          <div className="flex items-center gap-8">
            <NavbarLinks />
          </div>
          {/* Hire Me Button */}
          <div>
            <NavbarBtn />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-2xl p-3 border border-orange rounded-full text-white"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-2 flex flex-col items-center gap-6 bg-black border border-orange rounded-2xl p-6 animate-fadeIn">
          <NavbarLinks />
          <NavbarBtn />
        </div>
      )}
    </nav>
  )
}
