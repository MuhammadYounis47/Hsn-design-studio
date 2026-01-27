'use client'

import React from 'react'
import Image from 'next/image'

interface RootedImage {
  id: number
  src: string
  alt: string
}

const rootedImages: RootedImage[] = [
  { id: 1, src: '/work-1.jpg', alt: 'Community street view' },
  { id: 2, src: '/work-2.jpg', alt: 'Local neighbourhood' },
  { id: 3, src: '/work-3.jpg', alt: 'People walking' },
  { id: 4, src: '/work-4.jpg', alt: 'Urban life' },
  { id: 5, src: '/work-5.jpg', alt: 'Retail space' },
  { id: 6, src: '/work-6.jpg', alt: 'Everyday moments' },
]

const RootedInPlace = () => {
  return (
    <section className="bg-black text-white py-24 md:py-32">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">

        {/* Heading + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-28 mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Rooted in place
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl">
            The campaign was deeply rooted in local communities, reflecting
            the everyday experiences of people and places that define RioCan’s
            neighbourhoods.
          </p>
        </div>

        {/* Images Layout */}
        {/* Images Layout */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

  {rootedImages.map((image, index) => {
    const isFull = index < 2

    return (
      <div
        key={image.id}
        className={`relative overflow-hidden
          ${isFull
            ? 'lg:col-span-2 h-[360px] md:h-[420px] lg:h-[520px]'
            : 'h-[260px] md:h-[300px] lg:h-[340px]'
          }
        `}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
          sizes={isFull ? '100vw' : '(max-width: 1024px) 100vw, 50vw'}
        />
      </div>
    )
  })}

</div>


      </div>
    </section>
  )
}

export default RootedInPlace
