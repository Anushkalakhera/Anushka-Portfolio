import React from 'react'
import SingleExperience from './SingleExperience'
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const experiences = [
  {
    job: 'Front-End Developer',
    company: 'InternPe',
    date: 'April 2025 - May 2025',
    Responsibilities: [
      'Collaborated with the development team to build and maintain responsive web pages using HTML, CSS, and JavaScript.',
      'Participated in code reviews and improved code quality through consistent refactoring and debugging.',
      'Used Git and GitHub for version control.'
    ]
  }
]

const AllExperience = () => {
  return (
    <div className='flex md:flex-row sm:flex-col items-center justify-center'>
      {experiences.map((experience, index) => (
        <SingleExperience key={index} experience={experience} />
      ))}
    </div>
  )
}

export default AllExperience
