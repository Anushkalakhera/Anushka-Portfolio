import React from 'react'
import SingleSkill from './SingleSkill';
import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaNode, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiMongodb, SiNextdotjs, SiExpress } from "react-icons/si";
import { MdDataArray } from "react-icons/md";
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const skills = [
  { skill: 'Java',        icon: FaJava            },
  { skill: 'HTML',        icon: FaHtml5           },
  { skill: 'CSS',         icon: FaCss3Alt         },
  { skill: 'JavaScript',  icon: IoLogoJavascript  },
  { skill: 'ReactJS',     icon: FaReact           },
  { skill: 'TailwindCSS', icon: RiTailwindCssFill },
  { skill: 'TypeScript',  icon: SiTypescript      },
  { skill: 'Node.js',     icon: FaNode            },
  { skill: 'MongoDB',     icon: SiMongodb         },
  { skill: 'Git',         icon: FaGitAlt          },
  { skill: 'Next.js',     icon: SiNextdotjs       },
  { skill: 'Express',     icon: SiExpress         },
  { skill: 'DSA',         icon: MdDataArray       },
];

const AllSkills = () => {
  return (
    <div className='flex flex-wrap justify-center gap-6 max-w-[1100px] mx-auto'>
      {skills.map((item, index) => (
        <motion.div
          key={index}
          variants={fadeIn('up', `0.${index}`)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
        >
          <SingleSkill text={item.skill} imgSvg={<item.icon />} />
        </motion.div>
      ))}
    </div>
  )
}

export default AllSkills