import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 min-h-[300px] justify-center md:text-left text-center">
      
      <motion.h2
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-xl md:text-2xl uppercase text-lightCyan tracking-widest"
      >
        Web Developer & DSA Enthusiast
      </motion.h2>

      <motion.h1
        variants={fadeIn('right', 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-3xl md:text-5xl lg:text-6xl font-bold font-special text-orange"
      >
        ANUSHKA LAKHERA
      </motion.h1>

      <motion.p
        variants={fadeIn('up', 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-base md:text-lg mt-4 text-white max-w-2xl leading-relaxed opacity-90"
      >
        A Computer Science student from <span className='text-cyan'>BIST, Bhopal</span> — building 
        AI-powered projects like <span className='text-orange font-semibold'>AI Resume Analyzer</span> & {' '}
        <span className='text-orange font-semibold'>TravelMinds AI</span>, solving{' '}
        <span className='text-cyan font-semibold'>300+ DSA problems</span>, and crafting 
        responsive web experiences one line at a time.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        variants={fadeIn('up', 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className='flex gap-4 mt-4 md:justify-start justify-center flex-wrap'
      >
        <a 
          href='#projects'
          className='border border-orange rounded-full py-2 px-6 text-white hover:bg-orange hover:text-cyan transition-all duration-500 cursor-pointer'
        >
          View Projects
        </a>
        <a 
          href='#contact'
          className='border border-cyan rounded-full py-2 px-6 text-white hover:bg-cyan hover:text-orange transition-all duration-500 cursor-pointer'
        >
          Contact Me
        </a>
      </motion.div>

    </div>
  );
};

export default HeroText;