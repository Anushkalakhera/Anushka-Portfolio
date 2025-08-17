import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
  return (
     <div className='flex flex-col gap-6 w-[300px] '>
        <p className='text-orange font-bold uppercase text-3xl font-special text-center'> Since 2024</p>
        <div className='flex justify-center items-center gap-4 mb-4'>
            <ExperienceInfo number="10+" text="Projects" />
            <p className='font-bold text-6xl text-lightBrown '>-</p>
            <ExperienceInfo number="100+" text="Hours Learning" />
        </div>
        <p className='text-center text-white'>Driven and dedicated web developer with hands-on project experience and a passion for crafting modern, responsive web apps.</p>
        <ExperienceInfo number="Ready" text="To Collaborate!" />
    </div>
  )
}

export default ExperienceTopLeft