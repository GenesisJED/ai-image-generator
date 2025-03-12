import React from 'react';

type Props = {
    heading:string;
}

const SectionHeading = ({ heading }: Props) => {
  return (
    <div className='w-[80%] m-auto'>
        <h1 className='text-2xl lg:text-3l font-bold text-white'>{heading}</h1>
        <p className='text-sm sm:text-base md:text-lg font-medium mt-2 text-gray-200'>
            Each image, an instant creation, a testament to real-time AI generation.
        </p>
    </div>
  )
}

export default SectionHeading;