import React from 'react'

const HeroGradient = () => {
  return (
    <div>
      {/* Top gradients */}
      <div className='shadow-CyanMediumShadow absolute top-0 right-[400px] -z-10 animate-pulse'></div>
      <div className='shadow-orangeMediumShadow absolute top-0 right-0 -z-10 animate-pulse'></div>

      {/* Mid gradients */}
      <div className='shadow-CyanMediumShadow absolute top-[300px] left-0 -z-10 opacity-50 animate-pulse'></div>
      <div className='shadow-orangeMediumShadow absolute top-[500px] left-0 -z-10 opacity-50 animate-pulse'></div>

      {/* Bottom gradients */}
      <div className='shadow-CyanMediumShadow absolute bottom-0 right-0 -z-10 opacity-30 animate-pulse'></div>
      <div className='shadow-orangeMediumShadow absolute bottom-0 left-[400px] -z-10 opacity-30 animate-pulse'></div>
    </div>
  )
}

export default HeroGradient