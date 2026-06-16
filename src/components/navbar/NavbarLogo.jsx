import React from 'react'

export const NavbarLogo = () => {
  return (
    <div>
      {/* Full name — desktop */}
      <h1 className='text-white text-2xl hidden md:block'>
        Anushka <span className='text-orange font-special font-extrabold'>Lakhera</span>
      </h1>

      {/* Short name — mobile */}
      <h1 className='text-white font-special font-extrabold text-3xl block md:hidden'>
        A<span className='text-orange'>L</span>
      </h1>
    </div>
  )
}