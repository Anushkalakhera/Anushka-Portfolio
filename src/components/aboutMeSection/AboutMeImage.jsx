import React from 'react'

const AboutMeImage = () => {
  return (
    <div className='h-[500px] w-[300px] relative'>
      
      {/* Profile Image */}
      <div className='h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden hover:scale-105 transform transition-all duration-500'>
        <img 
          src="/images/about-me.jpg" 
          alt="About Me" 
          className='h-full w-full object-cover object-top'
        />
      </div>

      {/* Orange decorative block */}
      <div className='h-[500px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10'></div>

      {/* Dot pattern decoration */}
      <div className='absolute top-[-20px] right-[-20px] w-[80px] h-[80px] grid grid-cols-4 gap-1 -z-10'>
        {[...Array(16)].map((_, i) => (
          <div key={i} className='w-2 h-2 rounded-full bg-cyan opacity-60'></div>
        ))}
      </div>

    </div>
  )
}

export default AboutMeImage