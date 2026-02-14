'use client';

import React from 'react';
import Image from 'next/image';

const ColliersImageLayouts = () => {
  // 1) Top Hero Image
  const heroImage = {
    src: '/colliers-hero.webp',
    alt: 'Top Banner',
    height: 'h-[80vh]', // tum change kar lena
  };

  // 2) Right Side Image (2 columns section)
  const sideImage = {
    src: '/Bike-rack-colliers.webp',
    alt: 'Side Image',
    height: 'h-[420px]', // tum change kar lena
  };

  // 3) Bottom Full Width Images (3 stacked)
  const stackedImages = [
    {
      id: 1,
      src: '/Colliers-Landscape-mockup.webp',
      alt: 'Full Image 1',
      height: 'h-[80vh]',
    },
    {
      id: 2,
      src: '/EV-parking-colliers.webp',
      alt: 'Full Image 2',
      height: 'h-[80vh]',
    },
    {
      id: 3,
      src: '/colliers-rise.webp',
      alt: 'Full Image 3',
      height: 'h-[80vh]',
    },
  ];

  return (
    <section className="w-full bg-white py-12">

      {/* 1) TOP FULL WIDTH IMAGE */}
      <div className={`relative w-full ${heroImage.height}`}>
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 2) TWO COLUMNS SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <div>
          <h2 className="text-3xl font-semibold text-black mb-5">
            Project Title Here
          </h2>

          <p className="text-black/80 text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, esse!
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className={`relative w-full ${sideImage.height} rounded-2xl overflow-hidden`}>
          <Image
            src={sideImage.src}
            alt={sideImage.alt}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* 3) STACKED FULL WIDTH IMAGES (MAP) */}
      <div className="w-full space-y-10 pb-20">
        {stackedImages.map((img) => (
          <div key={img.id} className={`relative w-full ${img.height}`}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

    </section>
  );
};

export default ColliersImageLayouts;
