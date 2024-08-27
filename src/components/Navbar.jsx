import React, {useEffect, useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import moon from '../assets/moon.png'
import sun from '../assets/sun.png'
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState('light');

  // useEffect(() => {
  //   if(window.matchMedia('(prefers-color-scheme: dark)').matches){
  //     setTheme('dark');
  //   }else{
  //     setTheme('light');
  //   }
  // },[])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }else{
      document.documentElement.classList.remove('dark');

    }
  }, [theme])

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className='z-20 w-full fixed top-0 bg-gradient-to-r from-indigo-300  dark:bg-black border-b border-gray-400 backdrop-blur-lg'>
      <div className='mx-auto max-w-[1100px] text-gray-400 h-[70px] flex justify-between items-center'>

        <h1 className='text-3xl font-bold primary-color ml-4'>Sai Wai Kyaw</h1>
          <ul className='hidden md:flex items-center'>
            <li className='rounded-md px-3 py-2 me-2 hover:bg-gray-700 hover:text-white'><a href='#home'>Home</a></li>
            <li className='rounded-md px-3 py-2 me-2 hover:bg-gray-700 hover:text-white'><a href='#about'>About</a></li>
            <li className='rounded-md px-3 py-2 me-2 hover:bg-gray-700 hover:text-white'><a href='#work'>Work</a></li>
            <li className='rounded-md px-3 py-2 me-2 hover:bg-gray-700 hover:text-white'><a href='#contact'>Contact</a></li> 
            <li onClick={handleThemeSwitch}>
              {theme === 'light' ? <img src={moon} className='w-5 cursor-pointer' alt=''></img> : 
              <img src={sun} className='w-5 cursor-pointer' alt=''></img>}
              </li>          
          </ul>

        <div onClick={handleNav} className='block md:hidden mr-6'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>
        </div>

        <div className={nav ? 'z-100 md:hidden flex justify-between fixed h-25 left-0 top-0 w-[60%] text-white bg-gray-400 ease-in-out duration-500 rounded-br-full' : 'fixed left-[-100%]'}>
          <div>
          <h1 className='text-3xl primary-color m-4'>Sai Wai Kyaw</h1>
          <ul className='p-8 text-2xl'>
            <li className='p-2 hover:text-black'><a href='#home'>Home</a></li>
            <li className='p-2 hover:text-black'><a href='#about'>About</a></li>
            <li className='p-2 hover:text-black'><a href='#work'>Work</a></li>
            <li className='p-2 hover:text-black'><a href='#contact'>Contact</a></li>
          </ul>
          </div>
          <div onClick={handleThemeSwitch} className='mt-7 me-2'>
              {theme === 'light' ? <img src={moon} className='w-5 cursor-pointer' alt=''></img> : 
              <img src={sun} className='w-5 cursor-pointer' alt=''></img>}
              </div> 
        </div>

      
      </div>    
  )
}

export default Navbar