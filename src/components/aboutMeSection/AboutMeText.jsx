import React from 'react'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start items-center md:text-left text-center'>
      <h2 className='text-6xl text-cyan mb-4 font-bold'>About me</h2>
      <div className='w-24 h-1 bg-orange rounded-full mb-8 md:self-start self-center'></div>
      
      <p className='text-white text-xl leading-relaxed opacity-90'>
        Hi, I'm <span className='text-orange font-bold'>Anushka Lakhera</span>, a passionate web developer 
        currently pursuing my degree at <span className='text-cyan'>Bansal Institute of Science and Technology, Bhopal</span>. 
        I specialize in building responsive, user-friendly interfaces with a strong foundation in 
        front-end technologies and a growing interest in full-stack development.
      </p>

      <p className='text-white text-xl leading-relaxed opacity-90 mt-4'>
        I've built projects like <span className='text-orange font-bold'>AI Resume Analyzer</span> and{' '}
        <span className='text-orange font-bold'>TravelMinds AI</span> — combining modern web technologies 
        with AI to create smart, real-world solutions. Beyond development, I've solved{' '}
        <span className='text-orange font-bold'>300+ DSA problems</span>, sharpening my 
        problem-solving and logical thinking skills.
      </p>

      <a 
        href='#projects'
        className='border border-orange rounded-full py-2 px-6 text-lg flex items-center gap-2 mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start self-center text-white hover:text-cyan'
      >
        View My Projects →
      </a>
    </div>
  )
}

export default AboutMeText