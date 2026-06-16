import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const projects = [
    {
        name: 'TravelMinds (AI TRAVEL PLANNER)',
        align: 'right',
        image: '/images/website-img-1.jpg',
        liveLink: 'https://travelminds-ai.vercel.app/',
        githubLink: 'https://github.com/Anushkalakhera/travelminds-ai'
    },
    {
        name: 'AI Resume Analyser',
        align: 'left',
        image: '/images/website-img-2.webp',
        liveLink: 'https://interview-resume-analyser.vercel.app/',
        githubLink: 'https://github.com/Anushkalakhera/Interview-resume-Analyser-GenAI-MERN-'
    },
    {
        name: 'CineTrack (Movie Recommendation System)',
        align: 'right',
        image: '/images/website-img-3.jpg',
        liveLink: 'https://github.com/Anushkalakhera/CineTrack-',
        githubLink: 'https://github.com/Anushkalakhera/CineTrack-'
    },
    {
        name: 'Personal Portfolio Website',
        align: 'left',
        image: '/images/website-img-4.jpg',
        liveLink: 'https://anushkalakhera-portfolio.vercel.app/',
        githubLink: 'https://github.com/Anushkalakhera/Anushka-Portfolio'
    }
]

const ProjectsMain = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto px-4'>
        <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
        >
            <ProjectsText />
        </motion.div>
       
        <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
            {projects.map((item, index) => (
                <SingleProject 
                    key={index} 
                    name={item.name} 
                    align={item.align} 
                    image={item.image}
                    liveLink={item.liveLink}
                    githubLink={item.githubLink}
                />
            ))}
        </div>
    </div>
  )
}

export default ProjectsMain