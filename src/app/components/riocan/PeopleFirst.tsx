import React from 'react'

const PeopleFirst = () => {
  return (
    <section className="w-full bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: TITLE */}
          <div className="md:col-span-4">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              People First
              <br />
              Stories
            </h2>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="md:col-span-8">
            <p className="text-white text-lg leading-relaxed opacity-90">
              From everyday storytelling to long-term brand building, we’ve worked
              closely with RioCan Living to build a digital presence that feels
              grounded in real life. Our team oversees the full content
              process—from creative direction to production—capturing photo and
              video that reflects the brand’s commitment to intentional design,
              connected communities, and vibrant urban living.
              <br /><br />
              From reels to static images, we ensure every piece of content
              reinforces a consistent brand narrative across platforms—one that
              puts people at the centre of every story.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default PeopleFirst
