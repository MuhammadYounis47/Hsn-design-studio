'use client'
import React from 'react'

const VideoGrid = () => {
  const videos = [
    '/riocan.mp4',
    '/riocan.mp4',
    '/riocan.mp4',
    '/riocan.mp4',
    '/riocan.mp4',
    '/riocan.mp4',
    '/riocan.mp4',
    '/riocan.mp4',
  ]

  return (
    <section className="w-full px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className="w-full overflow-hidden  bg-black"
          >
            <video
              src={video}
               autoPlay
               muted
               loop
             playsInline
              className="w-full h-[90vh] object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default VideoGrid
