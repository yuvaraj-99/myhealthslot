import React from 'react'
import { assets } from '../assets/assets'

const content = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500 '>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span>  </p>

      </div>


      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500'>3456 George town <br/> washington, USA</p>
          <p className='text-gray-500'>Tel :(415) 555-89012 <br/>Email: Myhealthslot@gmail.com</p>
          <p className='font-semibold text-lg text-gray-500'>Careers at MyHealthSlot</p>
          <p className='text-gray-500'>Learn more about our team and openings</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore jobs</button>
        </div>
      </div>
    </div>
  )
}

export default content