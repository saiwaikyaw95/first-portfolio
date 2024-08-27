import React from 'react'
import about from '../assets/about.jpg'

const About = () => {
  return (
    <div className='dark:text-white text-black max-w-[1100px] mx-auto my-12' id='about'>

      <div className='md:grid md:grid-cols-2 sm:py-12'>

        <div className='mt-4 md:mt-0 text-left flex'>
          <div className='mx-6'>
            <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
            <p className='text-base lg:text-lg'>
            As a Junior Web Developer, I am starting my journey in web development, focusing on building and maintaining websites. My work with HTML, CSS, JavaScript and React, gaining experience in front-end and back-end technologies. My role involves learning, coding, debugging, and collaborating with senior developers to enhance my skills.
            </p>
          </div>
        </div>

        <img src={about} alt='' className='mx-auto rounded-3xl py-8 md:py-0' width={300} height={300}></img>

      </div>
    </div>
  )
}

export default About