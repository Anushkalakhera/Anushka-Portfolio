import React from 'react'

const SingleSkill = ({imgSvg, text}) => {
  return (
    <div className='hover:-translate-y-10 transition-all duration-500'>
      <div className='flex flex-col items-center gap-2 relative'>
        <div className='bg-white text-cyan h-[120px] w-[120px] flex items-center justify-center mr-4 rounded-full hover:scale-105 transform transition-all duration-500 text-6xl border-8 border-orange'>{imgSvg}</div>
        <p className='text-white font-bold'>{text}</p>
      </div>
      <div className='w-[200px] h-[400px]  absolute top-[50px] -z-10'></div>
    </div>
  )
}

export default SingleSkill