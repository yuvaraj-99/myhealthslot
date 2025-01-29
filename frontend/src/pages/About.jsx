import React from 'react'
import { assets } from '../assets/assets'

const about = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500 '>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
    <div className='my-10 flex flex-col md:flex-row gap-12'>
      <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
    <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore repellat corporis minima. Sed, deserunt hic numquam pariatur iure animi, aut velit repellendus fugiat nam, quod aliquid. Velit quibusdam quo delectus veniam, nihil dicta magni ipsum.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, reprehenderit facere ea cum sint corporis vel id quia assumenda, mollitia consectetur architecto possimus quo explicabo dignissimos dolor, accusamus illum magnam minima. Ullam vero nulla tempora?</p>
      <b className='text-gray-800'>Our Vision</b>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ducimus dolores obcaecati quasi architecto sunt mollitia officia delectus quod! Et blanditiis cum veniam alias mollitia? Corrupti repellat dicta repellendus velit maiores nostrum cum saepe ipsum, asperiores incidunt quasi ratione tempore earum eligendi impedit qui. Vitae quibusdam odit harum commodi ducimus?</p>
    </div>
    
    
    </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span> </p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transistion-all duration-300 text-gray-600 cursor-pointer'>                    
          <b>Efficiency:</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transistion-all duration-300 text-gray-600 cursor-pointer'>
          <b>Convenience</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transistion-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum.</p>
        </div>
      </div>


    </div>
  )
}

export default about