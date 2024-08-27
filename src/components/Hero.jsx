import React from 'react'
import heroimage from '../assets/hero.png';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1100px] md:h-[70vh] mx-auto py-8 mt-[70px]'>

      <div className='col-span-1 my-auto mx-auto w-[270px] h-auto lg:w-[350px]'>
          <img src={heroimage} alt='hero-image'></img>
      </div>

      <div className='col-span-2 px-5 my-auto'>

        <h1 className='text-black dark:text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
          <span className='primary-color'>
            I'm a
          </span><br/>
          <TypeAnimation
          sequence={[
            "Frontend Dev", 1000,
            "Webdesigner", 1000,
            "Consultant", 1000,
          ]}
          wrapper='span' speed={50} repeat={Infinity}/>
        </h1>

        <p className='text-black dark:text-white sm:text-lg my-6 lg:text-xl'>
          My name is Sai Wai Kyaw and I have 2+ years experience in web development.
        </p>

        <div className='my-8'>
          <a href='/' className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to to-pink-500 text-black dark:text-white hover:bg-none hover:border hover:border-gray-400'>Download CV</a>
          <a href='#contact' className='px-6 py-3 w-full rounded-xl border border-gray-400 hover:bg-gradient-to-br from-orange-500 to to-pink-500 text-black dark:text-white hover:border-none'>Contact</a>
        </div>
      </div>

    </div>
  )
}

export default Hero