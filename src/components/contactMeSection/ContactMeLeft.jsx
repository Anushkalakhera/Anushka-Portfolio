import React from 'react'
import ContactForm from './ContactForm'

const ContactMeLeft = () => {
  return (
    <div className='flex flex-col gap-8 w-full'>
        <div>
            <h2 className='text-orange text-3xl mb-4 '>Get In touch</h2>
            <p className='text-white'>Let’s build something amazing together. <br/>I'm open to freelance, internships, or just a good tech talk!</p>
        </div>
        <ContactForm />
    </div>
  )
}

export default ContactMeLeft