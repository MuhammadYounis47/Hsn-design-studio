import React from 'react';
import AgencyWithHeart from './components/AgencyWithHeart';
import Features from './components/Features';
import LeadershipTeam from './components/LeadershipTeam';
import DreamTeam from './components/DreamTeam';
import AtAGlance from './components/AtGlance';
import Content from '../components/Content';
import Form from '../components/Form';
import ContactStrip from '../components/ContactStrip';

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
      <LeadershipTeam/>
      <DreamTeam/>
      <AtAGlance/>
      <Content/>
      <Form/>
      <ContactStrip/>
    </>
  );
};

export default page;
