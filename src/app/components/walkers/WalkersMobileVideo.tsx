import React from 'react'

const WalkersMobileVideo = () => {
  return (
   <section>
    <section className="w-full h-screen">
      <video
        className='w-full h-screen object-cover'
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
   </section>
  )
}

export default WalkersMobileVideo
