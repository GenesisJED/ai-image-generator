"use client";
import Image from 'next/image';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1
    }
};

const ImageSlider = () => {
    return (
        <Carousel
            arrows={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
        >
            {['r1.jpg', 'r2.jpg', 'r3.jpg', 'r4.jpg', 'r5.jpg'].map((image, index) => (
                <div key={index} className='p-4'>
                    <div className='h-[200px] md:h-[300px] relative'>
                        <Image 
                            src={`/image/${image}`} 
                            alt='image' 
                            className='object-cover rounded-md'
                            fill 
                        />
                    </div>
                </div>
            ))}
        </Carousel>
    )
}

export default ImageSlider;