import React from 'react';
import Hero from './Hero/Hero';
import RecentImage from './RecentImage/RecentImage';
import About from './About/About';

const Home = () => {

  return (
    <div id="home" className='overflow-hidden'>
      <Hero />
      <RecentImage /> 
      <About />
    </div>
  )
}

export default Home;