'use client'
import React from 'react'

interface FilterState {
  industry: string
  service: string
}

interface FilterBarProps {
  filters: FilterState
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>
}

const FilterBar: React.FC<FilterBarProps> = ({ filters, setFilters }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setFilters(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 mt-6">
      <div>
        <label className="text-white font-semibold block">
          Filter by Industry
        </label>
        <select
          name="industry"
          value={filters.industry}
          onChange={handleChange}
          className="border p-2 bg-white text-black"
        >
          <option value="All">All</option>
          <option value="CPG">CPG</option>
          <option value="Corporate">Corporate</option>
          <option value="Food & Beverage">Food & Beverage</option>
          <option value="Government">Government</option>
          <option value="Health & Wellness">Health & Wellness</option>
          <option value="Non-Profit">Non-Profit</option>
          <option value="Other">Other</option>
          <option value="Real-Estate">Real Estate</option>
          <option value="Retail">Retail</option>
          <option value="Tech">Tech</option>
          
        </select>
      </div>

      <div>
        <label className="text-white font-semibold block">
          Filter by Service
        </label>
        <select
          name="service"
          value={filters.service}
          onChange={handleChange}
          className="border p-2 bg-white text-black"
        >
          <option value="All">All</option>
          <option value="Brand Identity">Brand Identity</option>
          <option value="Advertisement campaign">Advertisement campaign</option>
          <option value="Brand Identity">Brand Identity</option>
          <option value="Copywriting">Copywriting</option>
          <option value="Creative Direction">Creative Direction</option>
          <option value="Digital Ads">Digital Ads</option>
          <option value="Email Marketing">Email Marketing</option>
          <option value="Enviromental Design">Enviromental Design</option>
          <option value="Graphic design">Graphic designing</option>
          <option value="Influncer Marketing">Influncer Marketing</option>
          <option value="Motion Graphic Design">Motion Graphic Design</option>
          <option value="Packaging">Packaging</option>
          <option value="Packaging Design">Packaging Design</option>
          <option value="Photography">Photography</option>
          <option value="Signage">Signage</option>
          <option value="Social Media">Social Media</option>
          <option value="Strategy">Strategy</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="Video Animation">Video Animation</option>
          <option value="Video Production">Video Production</option>
          <option value="Web Design">Web Design</option>
        </select>
      </div>
    </div>
  )
}

export default FilterBar
