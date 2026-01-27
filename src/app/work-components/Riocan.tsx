import React from 'react'
import Image from 'next/image'

import ReiocanHero from '../components/riocan/RiocanHero'
import PartnershipAtGlance from '../components/riocan/Partnership'
import Mobile from '../components/riocan/Mobile'
import PeopleFirst from '../components/riocan/PeopleFirst'
import VideoGrid from '../components/riocan/VideoGrid'
import RootedInPlace from '../components/riocan/RootedInPlace'
import RelatedProjects from '../components/riocan/ReletedProject'
import Content from '../components/Content'
import Form from '../components/Form'
import ContactStrip from '../components/ContactStrip'

const Riocan = () => {
  return (
    <>
      {/* HERO INFO SECTION */}
      <section className="w-full bg-black py-20">
        <div className="mt-5 lg:mt-0 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: LOGO */}
          <div className="md:col-span-3">
            <Image
              src="/rio-can-white-logo.svg"
              width={220}
              height={120}
              alt="RioCan Living"
              className="object-contain"
            />
          </div>

          {/* CENTER: DESCRIPTION */}
          <div className="md:col-span-6">
            <p className="text-white text-lg leading-relaxed opacity-90">
              Arnold Street Agency has partnered with RioCan Living to elevate and grow
              their digital presence across Canada. Our collaboration began with the
              development of a refined social strategy and the production of premium
              photo and video content for Instagram and Facebook—showcasing RioCan
              Living’s commitment to design, community, and lifestyle. By translating
              their brand values into visually engaging, platform-native content, we’ve
              helped position RioCan Living as a leader in real estate storytelling
              across digital channels.
            </p>
          </div>

          {/* RIGHT: SERVICES */}
          <div className="md:col-span-3">
            <h2 className="text-white text-xl font-semibold mb-4">
              Services
            </h2>

            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-white opacity-90">
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
      <ReiocanHero />
      <PartnershipAtGlance />
      <Mobile />
      <PeopleFirst />
      <VideoGrid />
      <RootedInPlace />

      {/* RELATED PROJECTS */}
      <RelatedProjects
        bg="black"
        columns={3}
        heading="Related Projects"
        projects={[
          {
            id: 1,
            title: 'Hyperio.ai',
            slug: '/project/hyperio-ai',
            image: '/work-3.jpg',
          },
          {
            id: 2,
            title: 'Covalon',
            slug: '/project/covalon',
            image: '/work-2.jpg',
          },
          {
            id: 3,
            title: 'RioCan Living',
            slug: '/project/colliers',
            image: '/work-1.jpg',
          },
        ]}
      />

      {/* FOOTER CONTENT */}
      <Content />
      <Form />
      <ContactStrip />
    </>
  )
}

export default Riocan
