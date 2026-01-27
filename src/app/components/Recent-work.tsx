'use client'

import { useState } from 'react'
import FilterBar from './FilterBar'
import WorkGrid from './WorkGrid'
import { works, Work } from '../data/works'

interface FilterState {
  industry: string
  service: string
}

const RecentWork = () => {
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

  return (
    <section className="w-full bg-black px-6 py-20">
      {/* heading */}
      <h2 className="text-3xl font-bold text-white mb-10">
        Recent Work
      </h2>

      {/* filters */}
      <FilterBar
        filters={filters}
        setFilters={setFilters}
      />

      {/* work grid */}
      <WorkGrid works={filteredWorks} />
    </section>
  )
}

export default RecentWork
