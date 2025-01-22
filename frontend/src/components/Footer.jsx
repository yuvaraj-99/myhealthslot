import React from 'react'
import {assets} from '../assets/assets' 

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/*.....left ...*/}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt='' />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quod architecto, voluptatem vero, accusamus officia vitae fugiat delectus temporibus, earum iste voluptas autem itaque harum aperiam voluptatum nisi nam excepturi.</p>
        </div>

        {/*.........center section....*/}
        <div>
            <p className='text-xl font-medium mb-5'>Company</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
              <li>Home</li>
              <li>About us </li>
              <li>Contact us</li>
              <li>Privacy policy</li>
            </ul>
        </div>

        {/*........right section....*/}
        <div>
          <p className='text-xl font-medium mb-5' >GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>8989542563</li>
            <li>Myhealthslot@gmail.com</li>
          </ul>
        </div>
      </div>
        <div>

          {/*-------copyright--------*/}
          <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ myhealthslot -All rights reserved</p>
          </div>
        </div>
    </div>
  )
}

export default Footer