import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const SingleExperience = ({experience}) => {
  return (
    <motion.div 
    variants={fadeIn('right', 0.2)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.7}}
    className='md:h-[400px] md:w-[300px] sm:h-auto sm:w-auto border-2 border-orange border-dashed rounded-2xl mt-12 p-4 '>
      <p className='font-bold text-cyan text-2xl'>{experience.job}</p>
      <p className='text-orange text-xl'>{experience.company}</p>
      <p className='text-lightGrey'>{experience.date}</p>
      <ul className='list-disc mt-4 pl-4 text-white flex flex-col gap-4 '>{experience.Responsibilities.map((resp , index) =>{
        return <li key={index}>{resp}</li>
      })}</ul>
    </motion.div>
  )
}

export default SingleExperience