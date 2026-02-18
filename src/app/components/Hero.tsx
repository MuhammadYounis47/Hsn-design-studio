'use client'
import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // screen size check karna
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768) // Tailwind md breakpoint = 768px
    }

    handleResize() // initial check
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="w-full h-screen">
      <video
        className="w-full h-screen object-cover"
        src={isMobile ? '/mobile.mp4' : '/hero.mp4'}
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  )
}

export default Hero
