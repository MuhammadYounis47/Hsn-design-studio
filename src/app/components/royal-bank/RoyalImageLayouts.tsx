'use client';

import React from 'react';
import Image from 'next/image';

interface Section {
  type: 'two-column' | 'full-image';
  id: number;
  title?: string;
  text?: string;
  image?: { src: string; alt: string; height: string };
  // For full-width image
  fullImage?: { src: string; alt: string; height: string };
  // for two-column: order: 'left-image' | 'left-text'
  order?: 'left-image' | 'left-text';
}

const RoyalImageLayouts = () => {
  const sections: Section[] = [
    // 1) Two-column: Left Image, Right Text
    {
      type: 'two-column',
      id: 1,
      order: 'left-image',
      title: 'Project Section 1',
      text: 'This is some description for section 1.',
      image: { src: '/RBP_Digital-Stand-Mockup.webp', alt: 'Section 1 Image', height: 'h-[420px]' },
    },

    // 2) Full width image
    {
      type: 'full-image',
      id: 2,
      fullImage: { src: '/RBP-Resposnive.webp', alt: 'Full Image 1', height: 'h-[80vh]' },
    },

    // 3) Two-column: Left Text, Right Image
    {
      type: 'two-column',
      id: 3,
      order: 'left-text',
      title: 'Project Section 2',
      text: 'This is some description for section 2.',
      image: { src: '/RBP_Digital-Stand-Mockup.webp', alt: 'Section 2 Image', height: 'h-[420px]' },
    },

    // 4) Full width image
    {
      type: 'full-image',
      id: 4,
      fullImage: { src: '/RBP_Digital-Stand-Mockup.webp', alt: 'Full Image 2', height: 'h-[80vh]' },
    },

    // 5) Two-column: Left Image, Right Text
    {
      type: 'two-column',
      id: 5,
      order: 'left-image',
      title: 'Project Section 3',
      text: 'This is some description for section 3.',
      image: { src: '/RBP-Resposnive.webp', alt: 'Section 3 Image', height: 'h-[420px]' },
    },
  ];

  return (
    <section className="w-full bg-white">
      {sections.map((section) => {
        // FULL WIDTH IMAGE
        if (section.type === 'full-image' && section.fullImage) {
          return (
            <div key={section.id} className={`relative w-full ${section.fullImage.height}`}>
              <Image
                src={section.fullImage.src}
                alt={section.fullImage.alt}
                fill
                className="object-cover"
              />
            </div>
          );
        }

        // TWO COLUMN SECTION
        if (section.type === 'two-column' && section.image) {
          const isLeftImage = section.order === 'left-image';
          return (
            <div
              key={section.id}
              className={`max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`}
            >
              {/* LEFT */}
              <div className={`lg:col-span-6 ${isLeftImage ? 'order-1' : 'order-2'} flex`}>
                <div className={`relative w-full ${section.image.height} rounded-2xl overflow-hidden`}>
                  <Image
                    src={section.image.src}
                    alt={section.image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* RIGHT */}
              <div className={`lg:col-span-6 ${isLeftImage ? 'order-2' : 'order-1'}`}>
                <h2 className="text-3xl font-semibold text-black mb-5">{section.title}</h2>
                <p className="text-black/80 text-lg leading-relaxed">{section.text}</p>
              </div>
            </div>
          );
        }

        return null;
      })}
    </section>
  );
};

export default RoyalImageLayouts;
