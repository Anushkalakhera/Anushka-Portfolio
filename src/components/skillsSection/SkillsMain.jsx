import React from 'react'
import SkillsText from './SkillsText'
import AllSkills from './AllSkills'
import AllSkillsSM from './AllSkillsSM'
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const SkillsMain = () => {
  return (
    <div id='skills' className='py-16'>
      <div className='max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden'>
        
        {/* Heading */}
        <motion.div
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
        >
          <SkillsText />
        </motion.div>

        {/* Desktop layout — lg and above */}
        <div className='hidden lg:flex justify-center mt-12'>
          <AllSkills />
        </div>

        {/* Mobile/Tablet layout — below lg */}
        <div className='lg:hidden block'>
          <AllSkillsSM />
        </div>

      </div>
    </div>
  )
}

export default SkillsMain