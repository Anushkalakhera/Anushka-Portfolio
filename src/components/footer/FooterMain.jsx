import React from 'react'

const links = [
  { link: "About Me", setLink: "about" },
  { link: "Skills", setLink: "skills" },
  { link: "Experience", setLink: "experience" },
  { link: "Projects", setLink: "projects" },
  { link: "Contact", setLink: "contact" },
];

const FooterMain = () => {
  return (
    <div className='px-4'>
        <div className='w-full h-[2px] bg-lightGrey mt-24'></div>
        <div className='md:flex sm:hidden justify-between mt-3 max-w-full mx-auto'>
            <p className='text-3xl text-lightGrey'>Anushka Lakhera</p>
            <ul className='flex gap-4 text-lightGrey text-xl'>
                {links.map((item, index) => {
                    return (
                    <li key={index}>
                        <a href="#" className='hover:text-white transition-all duration-500 cursor-pointer'>{item.link}</a>
                    </li>
                    );
                })}

            </ul>
        </div>
        <p className='max-w-full mx-auto text-center mt-2 mb-4 text-sm text-lightBrown'>© 2025 Built from scratch by Anushka Lakhera. All bugs fixed... maybe.</p>
    </div>
  )
}

export default FooterMain