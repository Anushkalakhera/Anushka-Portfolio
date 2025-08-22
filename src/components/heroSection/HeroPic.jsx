import React from 'react'
import { PiHexagonThin } from "react-icons/pi";
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';
import { PiCircleThin } from "react-icons/pi";


const HeroPic = () => {
  return (
    <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0}}
    className='h-full flex items-center justify-center sm:mt-10'>
        <img src="\images\Anushka.png" alt="Anushka Lakhera "  className='max-h-[380px] w-auto'/>
        <div className='absolute -z-10 flex justify-center items-center animate-pulse'>
            
            <PiCircleThin className='md:h-[90%]  min-w-[500px] min-h-[500px] w-auto text-cyan blur-md animate-[spin_50s_linear_infinite]'/>
        </div>
    </motion.div>
  )
}

export default HeroPic