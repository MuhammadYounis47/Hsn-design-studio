'use client';

import React from 'react';
import Image from 'next/image';
import ColliersHero from '../components/colliers/ColliersHero';
import ColliersImageLayouts from '../components/colliers/ColliersImageLayouts';
import Content from '../components/Content'
import RelatedProjects from '../components/riocan/ReletedProject';
import Form from '../components/Form';
import ContactStrip from '../components/ContactStrip';

const Colliers = () => {
  return (
    <>
      {/* TOP INFO SECTION */}
      <section className="w-full bg-white py-20  lg:min-h-[65vh] lg:flex lg:items-center">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full">

          {/* LEFT: LOGO */}
          <div className="md:col-span-3 flex justify-start">
            <Image
              src="/colliers.webp"
              width={220}
              height={120}
              alt="Colliers"
              className="object-contain"
              priority
            />
          </div>

          {/* CENTER: DESCRIPTION */}
          <div className="md:col-span-6">
            <p className="text-black text-lg leading-relaxed opacity-90">
              Arnold Street Agency has partnered with Walker Shortbread to elevate and
              grow their digital presence. Our collaboration began with a refined
              social strategy and the production of premium photo and video content—
              translating Walker’s heritage into visually engaging, platform-native
              storytelling.
            </p>
          </div>

          {/* RIGHT: SERVICES */}
          <div className="md:col-span-3 text-black">
            <h2 className="text-xl font-semibold mb-4">
              Services
            </h2>

            <div className="grid grid-cols-1 gap-y-2 text-sm opacity-90">
              <ul className="space-y-2">
                <li>Copywriting</li>
                <li>Digital Ads</li>
                <li>Photography</li>
                <li>Strategy</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
        <ColliersHero />
        <ColliersImageLayouts/>
         <RelatedProjects
  bg="white"
  columns={3}
  projects={[
    {
      id: 1,
      title: 'Royal-bank plaza',
      slug: '/project/royal-bank-plaza',
      image: '/work-4.jpg',
    },
    {
      id: 2,
      title: 'carvalo on collage',
      slug: '/project/carvalo-on-college',
      image: '/work-5.jpg',
    },
    {
      id: 3,
      title: 'Menkes',
      slug: '/project/menkes',
      image: '/work-7.jpg',
    },
  ]}
/>
       <Content/>
      <Form/>
      <ContactStrip/>
    </>
  );
};

export default Colliers;
