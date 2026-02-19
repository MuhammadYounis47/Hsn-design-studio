'use client'
import React, { useEffect, useState } from 'react'

const Hero = () => {
  const [screenType, setScreenType] = useState<'mobile' | 'tablet' | 'laptop'>(
    'laptop'
  )

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth

      if (width < 768) {
        setScreenType('mobile')
      } else if (width >= 768 && width < 1024) {
        setScreenType('tablet')
      } else {
        setScreenType('laptop')
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const videoSrc =
    screenType === 'mobile'
      ? '/mobile.mp4'
      : screenType === 'tablet'
      ? '/tablet.mp4'
      : '/hero.mp4'

  return (
    <section className="w-full min-h-screen mt-20">
      <video
        className="w-full h-full object-contain"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  )
}

export default Hero
