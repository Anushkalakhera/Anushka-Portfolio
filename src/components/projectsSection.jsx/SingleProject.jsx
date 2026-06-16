import React from 'react'
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const SingleProject = ({ name, align, image, liveLink, githubLink }) => {
  return (
    <motion.div
      variants={fadeIn('right', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className={`flex w-full sm:flex-col-reverse items-center gap-8 ${align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} justify-end`}
    >
      <div className='flex flex-col gap-4'>
        {/* ✅ Fix 1: {name} not "name" */}
        <h2 className='md:text-3xl sm:text-2xl text-orange'>{name}</h2>

        {/* Live Link */}
        <a 
          href={liveLink}                          
          target="_blank" 
          rel="noreferrer"
          className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer ${align === 'left' ? 'md:justify-start' : 'md:justify-end'}`}
        >
          Live Preview <BiSolidRightTopArrowCircle />
        </a>

        {/* GitHub Link */}
        <a 
          href={githubLink}                        
          target="_blank" 
          rel="noreferrer"
          className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer ${align === 'left' ? 'md:justify-start' : 'md:justify-end'}`}
        >
          GitHub <FaGithub />
        </a>
      </div>

      <div className='max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white'>
        <div className='w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden'></div>
        {/* ✅ Fix 2: {image} not hardcoded */}
        <img src={image} alt={name} className='w-full h-full' />
      </div>
    </motion.div>
  )
}

export default SingleProject