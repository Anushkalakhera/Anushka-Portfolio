import React from 'react' 
import { LuArrowDownRight } from "react-icons/lu"; 
export const NavbarBtn = () => { 
  return ( 
  <button className='px-4 py-2 text-xl font-bold text-white border-cyan border flex items-center gap-1 rounded-full bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-CyanShadow'> 
  Hire Me 
  <div className='sm:hidden md:block'>
     <LuArrowDownRight />
      </div> 
      </button> 
      ) }