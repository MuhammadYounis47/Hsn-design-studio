import React from 'react'
import Image from 'next/image'

import Mobile from '../components/riocan/Mobile'
import PartnershipAtGlance from '../components/walkers/PartnershipGlance'
import ContentWithVideo from '../components/walkers/ContentWithVideo'
import WalkersMobileVideo from '../components/walkers/WalkersMobileVideo'
import Delicious from '../components/walkers/Delicious'
import GridImages from '../components/walkers/GridImages'
import RelatedProjects from '../components/riocan/ReletedProject'
import Content from '../components/Content'
import Form from '../components/Form'
import ContactStrip from '../components/ContactStrip'

const Walkers = () => {
  return (
    <>
      {/* HERO INFO SECTION */}
      <section className="w-full bg-white py-20">
        <div className="mt-5 lg:mt-0 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: LOGO */}
          <div className="md:col-span-3">
            <Image
              src="/walker-logo.png"
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

              <ul className="space-y-2">
                <li>Creative Direction</li>
                <li>Graphic Design</li>
                <li>Social Media</li>
                <li>Video Production</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* PAGE SECTIONS */}
      <Mobile />
      <PartnershipAtGlance />
      <ContentWithVideo />
      <WalkersMobileVideo />
      <Delicious />
      <GridImages />

      {/* RELATED PROJECTS */}
      <RelatedProjects
        bg="white"
        columns={2}
        heading="Related Projects"
        projects={[
          {
            id: 1,
            title: 'Walker Shortbread',
            slug: '/project/covalon',
            image: '/work-4.jpg',
          },
          {
            id: 2,
            title: 'Arnold Street',
            slug: '/project/ROAR-ORGANIC',
            image: '/work-5.jpg',
          },
        ]}
      />
      <Content/>
      <Form />
      <ContactStrip />
      </>
    
  )
}

export default Walkers
