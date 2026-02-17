import React from 'react'
import ContactUsSection from './components/ContactSection'
import GetInTouch from './components/GetInTouch'

const page = () => {
  return (
    <>
    <section className="relative  h-screen flex items-center">
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          THANKS FOR VISITING HSN DESIGN STUDIO
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste et nostrum, aliquam adipisci sint numquam ratione laudantium dolor, itaque cupiditate impedit fugit aperiam ut ipsum facere perferendis voluptas culpa pariatur.
        </p>
       
      </div>
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </section>
    <ContactUsSection/>
    <GetInTouch/>
    </>
  )
}

export default page
