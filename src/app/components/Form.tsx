import React from 'react'

const Form = () => {
  return (
    <section className="mt-5">
      <div className="flex flex-col space-y-5">

        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-white bg-transparent p-3 text-white outline-none focus:border-gray-300"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border border-white bg-transparent p-3 text-white outline-none focus:border-gray-300"
          />
        </div>

        {/* Message */}
        <div className="px-4">
          <textarea
            placeholder="Message"
            rows={5}
            className="w-full border border-white bg-transparent p-3 text-white outline-none resize-none focus:border-gray-300"
          />
        </div>

      </div>
    </section>
  )
}

export default Form
