import React from 'react'

const SubSkills = () => {
  return (
    <div className='border-y-2 border-lightGrey relative overflow-hidden'>
      
      {/* Gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-r from-orange to-cyan opacity-50 z-10'></div>
      
      {/* Image */}
      <img 
        src="/images/subSkills.jpg" 
        alt="Sub Skills" 
        className='w-full h-[300px] object-cover'
      />

    </div>
  )
}

export default SubSkills