import React from 'react'

const Footer = () => {
  return (
    <div className='pt-16 pb-16 bg-black'>
        <div className='w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
        gap-10 items-start pb-8 border-b-2 border-gray-900 space-y-6 sm:space-y-0'>
            <div className='col-span-2'>
                <p className='text-2xl sm:text-3xl md:text-4xl text-white w-[80%] font-bold'>
                    We develop & create digital future
                </p>
            </div>
        </div>
        <div className='w-[80%] mx-auto text-gray-300 mt-6'>© 2025 All rights reserved.</div>
    </div>
  )
}

export default Footer;