import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 min-h-[300px] justify-center md:text-left sm:text-center ">
      <motion.h2
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0}}
        className="text-xl md:text-2xl uppercase text-lightCyan"
      >
       Web And Software Developer
      </motion.h2>

      <motion.h1
        variants={fadeIn('right', 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0}}
        className="text-3xl md:text-5xl lg:text-6xl font-bold font-special text-orange"
      >
        ANUSHKA LAKHERA
      </motion.h1>

      <motion.p
        variants={fadeIn('up', 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-base md:text-lg mt-4 text-white max-w-2xl"
      >
        Crafting the web one line at a time —<br />
        learning, building, and evolving as a developer.
      </motion.p>
    </div>
  );
};

export default HeroText;
