import React from 'react'
import { FaBolt } from 'react-icons/fa'
import { MdGroups } from 'react-icons/md'
import { FaCode, FaBrain } from 'react-icons/fa'

const SubHeroSection = () => {
  return (
    <div className='w-full border-y border-lightGrey text-lightGrey flex justify-around uppercase xl:text-2xl md:text-xl text-xl py-8 items-center gap-4 flex-wrap px-4'>
      
      <p className='md:flex hidden items-center gap-2'>
        <FaBolt className='text-orange' /> Fast Learner
      </p>

      <p className='md:flex hidden items-center gap-2'>
        <MdGroups className='text-cyan' /> Team Work
      </p>

      <p className='flex items-center gap-2'>
        <FaCode className='text-orange' /> Web Enthusiast
      </p>

      <p className='md:flex hidden items-center gap-2'>
        <FaBrain className='text-cyan' /> Problem Solver
      </p>

    </div>
  )
}

export default SubHeroSection