import React from 'react'
import { PiCircleThin } from "react-icons/pi";
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn('left', 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className='relative flex items-center justify-center mt-10 md:mt-0'
    >
      {/* Profile Image */}
      <img 
        src="/images/Anushka.png"
        alt="Anushka Lakhera" 
        className='max-h-[380px] w-auto relative z-10'
      />

      {/* Spinning circle behind image */}
      <div className='absolute inset-0 flex justify-center items-center -z-10'>
        <PiCircleThin className='min-w-[500px] min-h-[500px] text-cyan blur-md animate-[spin_50s_linear_infinite]'/>
      </div>

      {/* Glow effect */}
      <div className='absolute w-[300px] h-[300px] bg-cyan opacity-10 rounded-full blur-3xl -z-10'></div>

    </motion.div>
  )
}

export default HeroPic