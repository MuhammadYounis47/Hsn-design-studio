'use client'

import React from 'react'

const peopleStories = [
  {
    title: "Story One Title Goes Here",
    description:
      "A brief description for story one. This should be concise and reflect the content shown on ArnoldStreet.",
    imageUrl: "/images/story1.jpg", // Replace with real images
  },
  {
    title: "Story Two Title Goes Here",
    description:
      "A brief description for story two. Keep it consistent with the website's style and tone.",
    imageUrl: "/images/story2.jpg",
  },
  {
    title: "Story Three Title Goes Here",
    description:
      "A brief description for story three. Highlight the important points in a user-friendly way.",
    imageUrl: "/images/story3.jpg",
  },
]

const PeopleFirstStories = () => {
  return (
    <section className="bg-[#1A1A1A] py-20 md:py-28 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center leading-tight">
          People First Stories
        </h2>

        {/* Stories grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {peopleStories.map((story, index) => (
            <div key={index} className="flex flex-col items-start gap-6">
              {/* Image */}
              <div className="w-full h-64 md:h-72 relative rounded-lg overflow-hidden">
                <img
                  src={story.imageUrl}
                  alt={story.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold leading-snug mb-4">
                  {story.title}
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-gray-300">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PeopleFirstStories
