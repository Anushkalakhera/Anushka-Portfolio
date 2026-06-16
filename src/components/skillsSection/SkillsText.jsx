import React from 'react'

const SkillsText = () => {
  return (
    <div className='flex flex-col items-center mt-[100px]'>
      <h2 className='text-6xl text-cyan mb-4 font-bold tracking-wide'>My Skills</h2>
      <div className='w-24 h-1 bg-orange rounded-full mb-8'></div>
      <p className='text-lg text-center text-white max-w-[700px] leading-relaxed opacity-80'>
        I not only work with these technologies but excel at using them with best practices 
        to deliver high-quality results. I have been working with all these skills 
        to build real-world projects and my portfolio.
      </p>
    </div>
  )
}

export default SkillsText