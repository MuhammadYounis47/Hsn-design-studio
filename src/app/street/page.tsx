import React from 'react'
import BlogAfterHeroSection from './components/ImageSection'
import ImageSection from './components/ImageSection'
import TwoColumnBlogSection from './components/ImageSection'

import Content from '../components/Content'
import ContactStrip from '../components/ContactStrip'

const page = () => {
  return (
    <>
   <section className="relative bg-black h-screen flex items-center">
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
          Hsn Design in Hyderabad for Brands Ready to Grow
        </h1>
       
       
      </div>
      <div className="absolute inset-0 "></div>
    </section>
    <TwoColumnBlogSection/>
    <Content/>
    <ContactStrip/>
    </>
  )
}

export default page
