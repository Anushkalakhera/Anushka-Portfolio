import React from 'react'
import AboutMeText from './AboutMeText'
import AboutMeImage from './AboutMeImage'
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const AboutMeMain = () => {
  return (
    <div 
      id="about" 
      className='flex flex-col md:flex-row gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center'
    >
      {/* Text — slides in from left */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className='flex-1'
      >
        <AboutMeText />
      </motion.div>

      {/* Image — slides in from right */}
      <motion.div
        variants={fadeIn('left', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className='flex justify-center'
      >
        <AboutMeImage />
      </motion.div>
    </div>
  )
}

export default AboutMeMain