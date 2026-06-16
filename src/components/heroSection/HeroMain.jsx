import React from 'react'
import HeroText from './HeroText';
import HeroPic from './HeroPic';

const HeroMain = () => {
  return (
    <div className='pt-60 pb-16'>
      <div className='flex flex-col-reverse md:flex-row max-w-[1200px] mx-auto justify-between items-center relative px-4 gap-12'>
        <HeroText />
        <HeroPic />
      </div>
    </div>
  )
}

export default HeroMain;