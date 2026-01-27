'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export interface RelatedProject {
  id: number
  title: string
  slug: string
  image: string
}

interface RelatedProjectsProps {
  projects: RelatedProject[]
  bg?: 'black' | 'white'
  columns?: 2 | 3
  heading?: string
}

const RelatedProjects = ({
  projects,
  bg = 'black',
  columns = 3,
  heading = 'Related Projects',
}: RelatedProjectsProps) => {
  return (
    <section
      className={`py-20 ${
        bg === 'black' ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Heading */}
        <h3 className="text-3xl lg:text-6xl font-bold mb-10 text-center">
          {heading}
        </h3>

        {/* Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 ${
            columns === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'
          } gap-8 py-12`}
        >
          {projects.map((proj) => (
            <Link
              key={proj.id}
              href={proj.slug}
              className="group relative block overflow-hidden rounded-xl"
            >
              {/* Image */}
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-lg font-semibold text-white">
                  {proj.title}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

export default RelatedProjects
