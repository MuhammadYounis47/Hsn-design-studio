'use client'

import { useState } from 'react'
import FilterBar from './FilterBar'
import WorkGrid from './WorkGrid'
import { works, Work } from '../data/works'

interface FilterState {
  industry: string
  service: string
  
}

interface RecentWorkProps {
  variant?: 'dark' | 'light'
}

const RecentWork = ({ variant = 'dark' }: RecentWorkProps) => {
  const [filters, setFilters] = useState<FilterState>({
    industry: 'All',
    service: 'All',
  })

  const filteredWorks: Work[] = works.filter((work) => {
    const industryMatch =
      filters.industry === 'All' || work.industry === filters.industry

    const serviceMatch =
      filters.service === 'All' || work.service === filters.service

    return industryMatch && serviceMatch
  })

  const isDark = variant === 'dark'

  return (
    <section
      id="our-work"
      className={`w-full px-6 py-20 ${
        isDark ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      {/* heading */}
      <h2 className={`text-3xl font-bold mb-10 ${isDark ? 'text-white' : 'text-black'}`}>
        Recent Work
      </h2>

      {/* filters */}
      <FilterBar filters={filters} setFilters={setFilters} variant={variant} />

      {/* work grid */}
      <WorkGrid works={filteredWorks} variant={variant} />
    </section>
  )
}

export default RecentWork
