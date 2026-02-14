import React from 'react'

const ColliersHero = () => {
  return (
   <>
      <section className="w-full h-screen">
  <video
    className="w-full h-screen object-cover"
    src="/hero.mp4"
    autoPlay
    muted
    loop
    playsInline
  />
</section>

    </>
  )
}

export default ColliersHero
