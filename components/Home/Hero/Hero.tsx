import { Button } from '@/components/ui/button';
import React from 'react';

const Hero = () => {
  return (
    <div className='w-[95%] min-h-screen relative mx-auto mt-[20vh]'>
        <div className='relative z-10 text-white flex flex-col items-center justify-center'>
            <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold 
            text-center bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent pb-2'>
                Transform your words into <br /> images with AI
            </h1>
            <p className='mt-3 text-sm md:text-base font-semibold text-center text-gray-400'>
                Start creating AI images now
            </p>
            <div className='h-11 md:h-16 w-[95%] sm:-w[80%] lg:w-[70%] xl:w-[60%] 
            bg-white rounded-lg mt-12 px-2 md:px-6 flex items-center justify-between'>
                <input 
                    type='text' 
                    placeholder='Produce your perfect picture'
                    className='h-full rounded-lg outline-none w-full text-black block 
                    flex-1 placeholder:text-xs sm:placeholder:text-base' 
                />
                <Button className='cursor-pointer' variant={"default"} size={"lg"}>
                    Generate
                </Button>
            </div>
            {/*Tags*/}
            <div className='flex justify-center mt-6 space-x-4 flex-wrap space-y-3'>
                <p>Popular Tag : </p>
                <Button variant={'secondary'}>Creative</Button>
                <Button variant={'secondary'}>Hyperreality</Button>
                <Button variant={'secondary'}>Steampunk</Button>
                <Button variant={'secondary'}>Animation</Button>
                <Button variant={'secondary'}>Business</Button>
            </div>
        </div>
    </div>
  )
}

export default Hero;