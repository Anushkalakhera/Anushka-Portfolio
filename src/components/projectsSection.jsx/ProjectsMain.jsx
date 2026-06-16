import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const projects = [
    {
        name: 'Ecommerce website (UI design)',
        align: 'right',
        image: '/images/website-img-1.jpg',
        liveLink: 'https://your-live-link.com',
        githubLink: 'https://github.com/yourusername/project1'
    },
    {
        name: 'Ecommerce website (UI design)',
        align: 'left',
        image: '/images/website-img-2.webp',
        liveLink: 'https://your-live-link.com',
        githubLink: 'https://github.com/yourusername/project2'
    },
    {
        name: 'Ecommerce website (UI design)',
        align: 'right',
        image: '/images/website-img-3.jpg',
        liveLink: 'https://your-live-link.com',
        githubLink: 'https://github.com/yourusername/project3'
    },
    {
        name: 'Ecommerce website (UI design)',
        align: 'left',
        image: '/images/website-img-4.jpg',
        liveLink: 'https://your-live-link.com',
        githubLink: 'https://github.com/yourusername/project4'
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