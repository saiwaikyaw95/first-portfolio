import React from 'react'
import pj1 from '../assets/project1.jpg'
import pj2 from '../assets/project2.jpg'
import pj3 from '../assets/project3.jpg'
import pj4 from '../assets/project4.jpg'
import pj5 from '../assets/project5.jpg'
import pj6 from '../assets/project6.jpg'

const Work = () => {
  return (
    <div className='max-w-[1100px] mx-auto p-5' id='work'>

      <div className='pb-8'>
        <p className='text-4xl mb-3 font-bold primary-color'>Work</p>
        <p className='text-gray-400'>Check Out Some of my recent works</p>
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        
        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                        shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                        h-[200px] bg-cover relative'>
          <img src={pj1} alt=''/>
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center'>
            <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
            <div className='pt-8 text-center'>
              <a href='https://www.youtube.com/watch?v=7V2W-lHWMEs'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                        shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                        h-[200px] bg-cover relative'>
          <img src={pj2} alt='' className='w-full h-full'/>
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center'>
            <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
            <div className='pt-8 text-center'>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                        shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                        h-[200px] bg-cover relative'>
          <img src={pj3} alt='' className='w-full h-full'/>
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center'>
            <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
            <div className='pt-8 text-center'>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                        shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                        h-[200px] bg-cover relative'>
          <img src={pj4} alt=''/>
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center'>
            <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
            <div className='pt-8 text-center'>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                        shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                        h-[200px] bg-cover relative'>
          <img src={pj5} alt=''/>
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center'>
            <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
            <div className='pt-8 text-center'>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
                        shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center
                        h-[200px] bg-cover relative'>
          <img src={pj6} alt='' className='w-full'/>
          <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center'>
            <span className='text-2xl font-bold text-white tracking-wider'>Project</span>
            <div className='pt-8 text-center'>
              <a href='/'>
                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Work