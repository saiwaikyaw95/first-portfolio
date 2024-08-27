import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-[1100px] mx-auto sm:py-20 p-5' id='contact'>


      <div className='text-center'>
        <h2 className='text-4xl font-bold leading-tight primary-color'>Contact Me</h2>
      </div>

        <div className='mt-6 dark:bg-[#161616] bg-orange-100 rounded-xl p-10'>

            <form action='https://getform.io/f/bvrejvob' method='POST'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-7'>
                
                <input type='text' name='name' id='' placeholder='Your Name'
                        className='dark:bg-[#161616] bg-orange-100 w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                        border-gray-700 rounded-md focus:outline-none focus:border-pink-600'/>
            
                <input type='text' name='email' id='' placeholder='Your Email'
                        className='dark:bg-[#161616] bg-orange-100 w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                        border-gray-700 rounded-md focus:outline-none focus:border-pink-600'/>                

                <div className='sm:col-span-2'>
                    <input type='text' name='message' id='' placeholder='Your Message'
                            className='dark:bg-[#161616] bg-orange-100 w-full px-4 py-4 text-gray-400 placeholder-gray-400 border
                            border-gray-700 rounded-md focus:outline-none focus:border-pink-600'/>
                </div>

                <div className='sm:col-span-2'>
                  <button type='submit' 
                          className='text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md'>
                    Send
                  </button>
                </div>

              </div>

            </form>

          </div>
      
    </div>
  )
}

export default Contact