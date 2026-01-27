'use client';

import React from 'react';

interface Section {
  type: 'fullImage' | 'twoColumns';
  images?: string[]; // for fullImage: one or more images, for twoColumns: 1 image
  text?: string;
  textOnLeft?: boolean; // only for twoColumns
}

const sections: Section[] = [
  // 2 full screen images one after another
  { type: 'fullImage', images: ['/new-glad-logo-with-yellow-banner.jpg'] },
  { type: 'fullImage', images: ['/Glad_laptop-img.jpg'] },

  // two columns - left text, right image
  {
    type: 'twoColumns',
    text: 'Our approach simplified and refined their visual identity, creating a more cohesive and contemporary look across all packaging formats. From belly bands and bags to round, square, and rectangular containers—both standard and divided—we ensured that each element not only reflected their commitment to sustainability but also enhanced functionality and brand recognition.',
    images: ['/Laptop-Second-Glad.jpg'],
    textOnLeft: true,
  },

  // 1 full screen image
  { type: 'fullImage', images: ['/Packaging_glad.jpg'] },

  // two columns - left image, right text
  {
    type: 'twoColumns',
    text: 'Beyond packaging, we extended this new identity across digital and print touchpoints. We designed a sleek, user-friendly website that embodies the brand’s modern and environmentally conscious ethos, making it easier for customers to engage with their products. Additionally, we created informative and visually compelling brochures, seamlessly integrating the new branding while effectively communicating the company’s sustainability efforts and product offerings.',
    images: ['/Food_Container.jpg'],
    textOnLeft: false,
  },

  // 6 full screen images one after another
  { type: 'fullImage', images: ['/CuBE_Container_rectangle.jpg'] },
  { type: 'fullImage', images: ['/three.png'] },
  { type: 'fullImage', images: ['/Glad_brochure-img-8-1536x1010.png'] },
  { type: 'fullImage', images: ['/three.png'] },
  { type: 'fullImage', images: ['/Glad-brochure-img-7-1536x1010.png'] },
  { type: 'fullImage', images: ['/Glad-brochure-img-9-1536x1010.png'] },
];

const GaldImage = () => {
  return (
    <div className="w-full bg-white space-y-5">
      {sections.map((section, i) => {
        if (section.type === 'fullImage' && section.images) {
          // render each image full screen width-height
          return section.images.map((img, idx) => (
            <div
              key={`${i}-${idx}`}
              className="w-full h-screen bg-cover bg-center object-cover"
              style={{ backgroundImage: `url(${img})` }}
            />
          ));
        }

       if (section.type === 'twoColumns' && section.images && section.images.length > 0) {
  return (
    <div
      key={i}
      className="flex flex-col md:flex-row w-full h-screen"
      style={{ minHeight: '100vh' }}
    >
      {section.textOnLeft ? (
        <>
          <div className="md:w-1/2 flex items-center justify-center p-8 px-4">
            <p className="text-xl">{section.text}</p>
          </div>
          <div
            className="md:w-1/2 bg-cover bg-center px-4 flex items-center justify-center"
            style={{ maxHeight: '80vh', maxWidth: '100%' }}
          >
            {/* For better control, image as <img> tag instead of background */}
            <img
              src={section.images[0]}
              alt="Related visual"
              className="object-contain max-h-[80vh] w-full"
            />
          </div>
        </>
      ) : (
        <>
          <div
            className="md:w-1/2 bg-cover bg-center px-4 flex items-center justify-center"
            style={{ maxHeight: '80vh', maxWidth: '100%' }}
          >
            <img
              src={section.images[0]}
              alt="Related visual"
              className="object-contain max-h-[80vh] w-full"
            />
          </div>
          <div className="md:w-1/2 flex items-center justify-center p-8 px-4">
            <p className="text-xl">{section.text}</p>
          </div>
        </>
      )}
    </div>
  );
}


        return null;
      })}
    </div>
  );
};

export default GaldImage;
