'use client'
import React from 'react'
import Image from 'next/image'

const GridImages = () => {
  const images = [
    '/work-1.jpg',
    '/work-2.jpg',
    '/work-3.jpg',
    '/work-4.jpg',
  ]

  return (
    <section className="w-full px-4 py-10 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((item, index) => (
          <div key={index} className="relative w-full h-[90vh] overflow-hidden">
            <Image
              src={item}
              alt="grid image"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300 "
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default GridImages
