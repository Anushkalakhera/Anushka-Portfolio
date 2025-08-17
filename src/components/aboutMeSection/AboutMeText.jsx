import React from 'react'

const AboutMeText = () => {
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
        <h2 className='text-6xl text-cyan mb-10'>About me</h2>
        <p  className='text-white text-xl'>I'm a passionate and detail-oriented web developer with a strong foundation in front-end technologies and a growing interest in full-stack development. I enjoy turning creative ideas into responsive, user-friendly interfaces and constantly seek opportunities to learn and improve. Whether working solo or collaborating in a team, I bring curiosity, adaptability, and a problem-solving mindset to every project I take on.</p>
        <button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan '>My Projects</button>
    </div>
  )
}

export default AboutMeText