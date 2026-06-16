import React from 'react'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start items-center md:text-left text-center'>
      <h2 className='text-6xl text-cyan mb-4 font-bold'>About Me</h2>
      <div className='w-24 h-1 bg-orange rounded-full mb-8 md:self-start self-center'></div>

      <p className='text-white text-xl leading-relaxed opacity-90'>
        Hi, I'm <span className='text-orange font-bold'>Anushka Lakhera</span>, a passionate
        Software Developer currently pursuing an{' '}
        <span className='text-cyan font-semibold'>
          MCA from Bansal Institute of Science and Technology, Bhopal
        </span>.
        I enjoy building modern, responsive, and user-friendly web applications
        that solve real-world problems. My primary focus is on creating clean,
        efficient, and scalable applications using modern technologies.
      </p>

      <p className='text-white text-xl leading-relaxed opacity-90 mt-4'>
        I have experience working with{' '}
        <span className='text-orange font-bold'>
          Java, JavaScript, React.js, Tailwind CSS, HTML, CSS, and Git
        </span>.
        I am continuously improving my development skills while exploring
        full-stack development and software engineering best practices.
      </p>

      <p className='text-white text-xl leading-relaxed opacity-90 mt-4'>
        Some of my notable projects include{' '}
        <span className='text-orange font-bold'>AI Resume Analyzer</span> and{' '}
        <span className='text-orange font-bold'>TravelMinds AI</span>,
        where I combined modern web technologies with AI-powered features to
        build practical and impactful solutions.
      </p>

      <p className='text-white text-xl leading-relaxed opacity-90 mt-4'>
        Beyond development, I have solved{' '}
        <span className='text-orange font-bold'>300+ Data Structures and Algorithms problems</span>,
        strengthening my problem-solving, analytical thinking, and coding skills.
        I am always eager to learn new technologies, take on challenging projects,
        and grow as a software engineer.
      </p>

      {/* Social Links */}
      <div className='flex gap-4 mt-8 flex-wrap md:justify-start justify-center'>
        <a
          href='https://github.com/Anushkalakhera'
          target='_blank'
          rel='noreferrer'
          className='border border-cyan px-5 py-2 rounded-full text-cyan hover:bg-cyan hover:text-black transition duration-300'
        >
          GitHub
        </a>

        <a
          href='https://www.linkedin.com/in/anushka-lakhera/'
          target='_blank'
          rel='noreferrer'
          className='border border-blue-500 px-5 py-2 rounded-full text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300'
        >
          LinkedIn
        </a>

        <a
          href='https://leetcode.com/u/anushka_lakhera/'
          target='_blank'
          rel='noreferrer'
          className='border border-yellow-500 px-5 py-2 rounded-full text-yellow-500 hover:bg-yellow-500 hover:text-black transition duration-300'
        >
          LeetCode
        </a>
      </div>

      {/* Projects Button */}
      <a
        href='#projects'
        className='border border-orange rounded-full py-3 px-6 text-lg flex items-center gap-2 mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start self-center text-white hover:text-cyan'
      >
        View My Projects →
      </a>
    </div>
  )
}

export default AboutMeText