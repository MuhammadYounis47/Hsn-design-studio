'use client'
import React from 'react'
import Image from 'next/image'
import RelatedProjects from '../components/riocan/ReletedProject'
import Content from '../components/Content'
import Form from '../components/Form'
import ContactStrip from '../components/ContactStrip'
import RogersVideo from '../components/rogers/RogersVideo'
const Rogers = () => {
  return (
    <>
    <section className="w-full bg-white py-20 h-auto">
            <div className="mt-5 lg:mt-0 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center h-full">
              
              {/* LEFT: LOGO */}
              <div className="md:col-span-3">
                <Image
                  src="/Rogers_logo.svg"
                  width={220}
                  height={120}
                  alt="Walker Shortbread"
                  className="object-contain"
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
    
                <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm opacity-90">
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
         <RogersVideo/>
          <RelatedProjects
  bg="white"
  columns={3}
  projects={[
    {
      id: 1,
      title: 'Colliers-Rise Program',
      slug: '/project/colliers-rise',
      image: '/work-4.jpg',
    },
    {
      id: 2,
      title: 'Royal Bank Plaza',
      slug: '/project/royal-bank-plaza',
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
  )
}

export default Rogers
