'use client'

import React, { useEffect, useState } from 'react'

/* ---------------- TYPES ---------------- */
interface Stat {
  value: number
  label: string
  color: string
  suffix?: string
}

interface PartnershipAtGlanceProps {
  variant?: 'dark' | 'light'
  title?: string
}

/* ---------------- DATA ---------------- */
const stats: Stat[] = [
  { value: 3, label: 'Years partnered', color: '#FF4275' },
  { value: 1200, label: 'Pieces of content', color: '#BF62FF' },
  { value: 25, label: 'Campaigns launched', color: '#F6FD29' },
  { value: 4, label: 'Platforms activated', color: '#32E0FF' },
]

/* ---------------- COUNTER ---------------- */
const Counter = ({
  value,
  color,
  suffix = '',
}: {
  value: number
  color: string
  suffix?: string
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
    <span style={{ color }}>
      {count}
      {suffix}
    </span>
  )
}

/* ---------------- MAIN COMPONENT ---------------- */
const PartnershipAtGlance = ({
  variant = 'dark',
  title = 'Partnership at a glance',
}: PartnershipAtGlanceProps) => {
  const isDark = variant === 'dark'

  return (
    <section
      className={`py-16 md:py-24 transition-colors duration-300 ${
        isDark ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-12 md:mb-16">
          {title}
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-10 md:gap-14">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
            >
              {/* Number + Bar */}
              <div className="flex flex-col gap-3">
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  <Counter value={stat.value} color={stat.color} />+
                </h3>

                <div
                  className="h-2 sm:h-3 rounded-full w-24 sm:w-32"
                  style={{ backgroundColor: stat.color }}
                />
              </div>

              {/* Label */}
              <p
                className={`text-sm sm:text-base max-w-sm ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
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
