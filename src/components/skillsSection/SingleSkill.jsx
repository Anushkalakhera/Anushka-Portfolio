import React from 'react'

const SingleSkill = ({imgSvg, text}) => {
  return (
    <div className='hover:-translate-y-10 transition-all duration-500 cursor-pointer group'>
      <div className='flex flex-col items-center gap-2 relative'>
        <div className='
          bg-white text-cyan 
          h-[120px] w-[120px] 
          flex items-center justify-center 
          rounded-full 
          text-6xl 
          border-8 border-orange
          group-hover:scale-110
          group-hover:border-cyan
          group-hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]
          transform transition-all duration-500
        '>
          {imgSvg}
        </div>
        <p className='text-white font-bold group-hover:text-orange transition-colors duration-300'>
          {text}
        </p>
      </div>
      <div className='w-[200px] h-[400px] absolute top-[50px] -z-10'></div>
    </div>
  )
}

export default SingleSkill