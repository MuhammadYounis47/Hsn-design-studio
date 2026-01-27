'use client'

import React, { useEffect, useState } from 'react'

interface Stat {
  value: number
  label: string
  suffix?: string
}

const stats: Stat[] = [
  { value: 5200, label: 'engagements', suffix: '%' },
  { value: 400, label: 'impressions', suffix: 'K+' },
  { value: 300, label: 'video views' },
  { value: 3000, label: 'followers' },
  { value: 3400, label: 'increase in link clicks' },
  { value: 30, label: 'increase in impression' },
]

// Colors for desktop only
const colors = [
  'md:bg-pink-500',
  'md:bg-green-500',
  'md:bg-blue-500',
  'md:bg-yellow-500',
  'md:bg-red-500',
  'md:bg-purple-500',
]

const Counter = ({
  value,
  suffix = '',
  color = 'md:bg-pink-500',
}: {
  value: number
  suffix?: string
  color?: string
}) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 1200
    const increment = value / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span
      className={`${color} inline-block rounded-full px-4 py-1 text-black font-bold text-3xl sm:text-4xl md:text-5xl`}
    >
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

const PartnershipAtGlance = () => {
  return (
    <section
      className="bg-white py-16 md:py-20 w-full bg-cover bg-center"
      
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-12 md:mb-16 text-center">
          Partnership at a glance
        </h2>

        {/* Always 2 columns on all screen sizes */}
        <div className="grid grid-cols-2 gap-y-12 gap-x-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col gap-2 items-center">
              <h3 className="font-bold tracking-tight">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  color={colors[index] || 'md:bg-pink-500'}
                />
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnershipAtGlance
