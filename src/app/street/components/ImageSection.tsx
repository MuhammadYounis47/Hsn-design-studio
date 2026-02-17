'use client'

import Image from 'next/image'

// --- LEFT COLUMN DATA (15 images) ---
const leftColumnData = [
  {
    id: 1,
    image: '/blog.jpg',
    topDesc: 'Short description 1',
    title: 'Title 1',
    bottomDesc: 'Another short description 1',
  },
  {
    id: 2,
    image: '/blog.jpg',
    topDesc: 'Short description 2',
    title: 'Title 2',
    bottomDesc: 'Another short description 2',
  },
  {
    id: 3,
    image: '/blog.jpg',
    topDesc: 'Short description 3',
    title: 'Title 3',
    bottomDesc: 'Another short description 3',
  },
  {
    id: 4,
    image: '/blog.jpg',
    topDesc: 'Short description 4',
    title: 'Title 4',
    bottomDesc: 'Another short description 4',
  },
  {
    id: 5,
    image: '/blog.jpg',
    topDesc: 'Short description 5',
    title: 'Title 5',
    bottomDesc: 'Another short description 5',
  },
  {
    id: 6,
    image: '/blog.jpg',
    topDesc: 'Short description 6',
    title: 'Title 6',
    bottomDesc: 'Another short description 6',
  },
  {
    id: 7,
    image: '/blog.jpg',
    topDesc: 'Short description 7',
    title: 'Title 7',
    bottomDesc: 'Another short description 7',
  },
  {
    id: 8,
    image: '/blog.jpg',
    topDesc: 'Short description 8',
    title: 'Title 8',
    bottomDesc: 'Another short description 8',
  },
  {
    id: 9,
    image: '/blog.jpg',
    topDesc: 'Short description 9',
    title: 'Title 9',
    bottomDesc: 'Another short description 9',
  },
  {
    id: 10,
    image: '/blog.jpg',
    topDesc: 'Short description 10',
    title: 'Title 10',
    bottomDesc: 'Another short description 10',
  },
  {
    id: 11,
    image: '/blog.jpg',
    topDesc: 'Short description 11',
    title: 'Title 11',
    bottomDesc: 'Another short description 11',
  },
  {
    id: 12,
    image: '/blog.jpg',
    topDesc: 'Short description 12',
    title: 'Title 12',
    bottomDesc: 'Another short description 12',
  },
  {
    id: 13,
    image: '/blog.jpg',
    topDesc: 'Short description 13',
    title: 'Title 13',
    bottomDesc: 'Another short description 13',
  },
  {
    id: 14,
    image: '/blog.jpg',
    topDesc: 'Short description 14',
    title: 'Title 14',
    bottomDesc: 'Another short description 14',
  },
  {
    id: 15,
    image: '/blog.jpg',
    topDesc: 'Short description 15',
    title: 'Title 15',
    bottomDesc: 'Another short description 15',
  },
]

// --- RIGHT COLUMN DATA ---
const rightColumnData = {
  title: 'Right Column Main Title',
  image: '/studio.jpg',
  subTitle: 'Right Column Sub Title',
  paragraphs: [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  ],
}

const TwoColumnBlogSection = () => {
  return (
    <section className="w-full bg-white text-black px-6 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="flex flex-col gap-12">
          {leftColumnData.map((item) => (
            <div key={item.id} className="flex flex-col gap-4">
              {/* Top Image */}
              <div className="relative w-full  rounded-xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                    height={0}
                  className="w-full h-[40vh] object-cover"
                />
              </div>

              {/* Top Description */}
              <p className="text-gray-600">{item.topDesc}</p>

              {/* Title */}
              <h3 className="text-2xl font-semibold">{item.title}</h3>

              {/* Bottom Description */}
              <p className="text-gray-600">{item.bottomDesc}</p>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-bold">{rightColumnData.title}</h2>

          <div className="relative w-full  rounded-xl overflow-hidden">
            <Image
              src={rightColumnData.image}
              alt={rightColumnData.subTitle}
              width={200}
                height={0}
              className="w-full h-full object-cover"
            />
          </div>

          <h3 className="text-2xl font-semibold mt-4">{rightColumnData.subTitle}</h3>

          {rightColumnData.paragraphs.map((para, idx) => (
            <p key={idx} className="text-gray-600 leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TwoColumnBlogSection
