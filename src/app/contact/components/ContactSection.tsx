'use client'

import { useState } from 'react'

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    projectType: '',
    website: '',
    budget: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // send form data to backend / API
    console.log(formData)
  }

  return (
    <section className=" bg-white py-16 px-10 md:px-12">
      <div className=" mb-10">
        <h2 className="text-5xl font-extrabold text-black">Drop us a line</h2>
        <p className="mt-2 text-lg text-black">
          Please fill out the form below and someone will be in touch shortly!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full">
        {/* Name */}
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-6 px-2 md:px-0'>
        <div>
          <label className="block text-black font-semibold mb-2">Name*</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300"
          />
        </div>

        {/* Company */}
        <div>
          <label className="block text-black font-semibold mb-2">Company*</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-black font-semibold mb-2">Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300"
          />
        </div>

        {/* Project Type */}
        <div>
          <label className="block text-black font-semibold mb-2">Project Type</label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300"
          >
            <option value="">Select project type</option>
            <option value="campaign">Campaign (short-term)</option>
            <option value="monthly">Ongoing Monthly Budget</option>
            <option value="yearly">Ongoing Yearly Budget</option>
            <option value="onetime">One-Time Project</option>
          </select>
        </div>

        {/* Website */}
        <div>
          <label className="block text-black font-semibold mb-2">Website</label>
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300"
          />
        </div>

        {/* Budget */}
        <div>
          <label className="block text-black font-semibold mb-2">Budget</label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300"
          >
            <option value="">Select budget range</option>
            <option value="$5k-$10k">$5,000-$10,000</option>
            <option value="$10k-$50k">$10,000-$50,000</option>
            <option value="$50k-$200k">$50,000-$200,000</option>
            <option value="$200k+">$200,000+</option>
          </select>
        </div>
</div>
        {/* Message */}
        <div>
          <label className="block text-black font-semibold mb-2">Message*</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-300"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-black text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-500 transition cursor-pointer"
        >
          Submit
        </button>
      </form>
    </section>
  )
}

export default ContactUsSection
