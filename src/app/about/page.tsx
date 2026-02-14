import React from 'react';
import AgencyWithHeart from './components/AgencyWithHeart';
import Features from './components/Features';

const page = () => {
  return (
    <>
      {/* Hero Section */}
      <section className='bg-black w-full min-h-[90vh] flex justify-center items-center px-4'>
        <h1 className='text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center'>
          HSN <span className='text-gray-400'>DESIGN</span>
        </h1>
      </section>

      {/* Scroll Reveal Section */}
      <AgencyWithHeart />
      <Features/>
    </>
  );
};

export default page;
