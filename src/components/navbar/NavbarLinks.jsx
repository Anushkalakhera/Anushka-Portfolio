import React from 'react';
import { Link } from 'react-scroll';

const links = [
  { link: "About Me",   setLink: "about"      },
  { link: "Skills",     setLink: "skills"     },
  { link: "Experience", setLink: "experience" },
  { link: "Projects",   setLink: "projects"   },
  { link: "Contact",    setLink: "contact"    },
];

export const NavbarLinks = () => {
  return (
    <ul className="flex gap-6 text-white font-bold text-center lg:flex-row flex-col lg:items-center">
      {links.map((link, index) => (
        <li key={index} className="group">
          <Link
            to={link.setLink}
            smooth={true}
            spy={true}
            duration={500}
            offset={-130}
            activeClass="text-cyan"
            className="cursor-pointer text-white hover:text-orange transition-all duration-300"
          >
            {link.link}
          </Link>
          {/* Underline animation */}
          <div className="mx-auto bg-orange w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
        </li>
      ))}
    </ul>
  );
};