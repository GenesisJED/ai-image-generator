import SectionHeading from '@/components/Helper/SectionHeading';
import React from 'react'
import ImageSlider from './ImageSlider';

const RecentImage = () => {
  return (
    <div id="images" className='pt-5 md:pt-16 pb-5 md:pb-16 bg-slate-950'>
        <SectionHeading heading='Explore Newly Generated Images' />
        {/* Slider */}
        <div className='w-[100%] md:w-[80%] mx-auto mt-5 md:mt-16'>
          <ImageSlider />
        </div>
    </div>
  )
}

export default RecentImage;