import React from 'react'
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

const AllSkillsSM = () => {
  return (
    // 13 items → 3 cols = 3+3+3+3+1 (last row has 1 centered)
    // justify-items-center centers the lone last item automatically
    <div className='grid grid-cols-3 md:grid-cols-4 gap-8 my-12 justify-items-center'>
      {skills.map((item, index) => (
        <motion.div
          key={index}
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className='flex flex-col items-center'
        >
          <item.icon className='text-7xl text-orange' />
          <p className='text-center mt-4 text-white text-sm'>{item.skill}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default AllSkillsSM