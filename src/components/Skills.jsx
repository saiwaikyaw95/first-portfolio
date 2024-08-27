import React from 'react'
import html from '../assets/html.svg'
import js from '../assets/js.svg'
import tailwind from '../assets/tailwind.svg'
import react from '../assets/react.svg'
import python from '../assets/python.png'
import laravel from '../assets/laravel.png'
import db from '../assets/mysql.png'
import github from '../assets/github.png'
import php from '../assets/php.png'
import bootstrap from '../assets/bootstrap.png'
import css2 from '../assets/css.svg'

const Skills = () => {
  return (
    <div className='text-gray-400 md-h-[150px] max-w-[1100px] mx-auto grid grid-cols-3 place-items-center sm:grid-cols-4 md:grid-cols-6 lg:flex lg:justify-between lg:items-center'>

      <h2 className='text-gray-700 text-2xl md:text-2xl font-bold m-4'>
        My <br/> Tech <br/> Stack
      </h2>

      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] lg:w-[100px]'>
        <img src={html} alt=''/>
        <p className='mt-2'>HTML</p>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] lg:w-[100px]'>
        <img src={css2} alt=''/>
        <p className='mt-2'>CSS</p>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] lg:w-[100px]'>
        <img src={js} alt=''/>
        <p className='mt-2'>JS</p>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] lg:w-[100px]'>
        <img src={bootstrap} alt=''/>
        <p className='mt-2'>BS</p>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] lg:w-[100px]'>
        <img src={tailwind} alt=''/>
        <p className='mt-2'>Tailwind</p>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] lg:w-[100px]'>
        <img src={react} alt=''/>
        <p className='mt-2'>React</p>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] lg:w-[100px]'>
        <img src={python} alt=''/>
        <p className='mt-2'>Python</p>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] lg:w-[100px]'>
        <img src={php} alt=''/>
        <p className='mt-2'>PHP</p>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] lg:w-[100px]'>
        <img src={laravel}alt=''/>
        <p className='mt-2'>Laravel</p>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] lg:w-[100px]'>
        <img src={db} alt=''/>
        <p className='mt-2'>MySQL</p>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] lg:w-[100px]'>
        <img src={github} alt=''/>
        <p className='mt-2'>Github</p>
      </div>
      
    </div>
  )
}

export default Skills