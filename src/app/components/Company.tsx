import React from 'react'
import Image from 'next/image'

const Company = () => {
  const logoImages = [
    { id: 1, imagePath: "/logo-1.png" },
    { id: 2, imagePath: "/logo-2.png" },
    { id: 3, imagePath: "/logo-3.png" },
    { id: 4, imagePath: "/logo-4.png" },
    { id: 5, imagePath: "/logo-5.png" },
  ]

  return (
    <section className="bg-white w-full h-40 flex items-center justify-center gap-6">
      {logoImages.map((item, index) => (
        <div
          key={item.id}
          className={`
            relative w-32 h-32
            ${index >= 2 ? 'hidden md:block' : ''}
            ${index >= 3 ? 'md:hidden lg:block' : ''}
            ${index >= 4 ? 'hidden' : ''}
          `}
        >
          <Image
            src={item.imagePath}
            alt={`Company logo ${item.id}`}
            fill
            className="object-contain"
          />
        </div>
      ))}
    </section>
  )
}

export default Company
