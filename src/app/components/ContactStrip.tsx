'use client';
import React, { useState } from 'react';

const ContactStrip = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="px-4 mt-8">
      <div>
        <button
          onClick={() => setOpen(!open)}
          className="bg-white px-4 py-2 rounded-sm font-semibold cursor-pointer"
        >
          Contact us
        </button>

        {open && (
          <div className="bg-white  px-8 py-6 rounded-sm mt-4 relative w-full ">
            <h1 className="text-4xl font-extrabold mb-4">Drop us a line</h1>
            <p className="mb-8 text-lg">
              Please fill out the form <br />
              and someone will be in touch with you shortly
            </p>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="px-3 py-2 rounded-sm border border-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="px-3 py-2 rounded-sm border border-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-3 py-2 rounded-sm border border-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="px-3 py-2 rounded-sm border border-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              <input
                type="text"
                placeholder="Subject"
                className="px-3 py-2 rounded-sm border border-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              <input
                type="text"
                placeholder="Company"
                className="px-3 py-2 rounded-sm border border-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />

              <textarea
                placeholder="Your message"
                className="md:col-span-2 px-3 py-2 rounded-sm border border-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-violet-500"
                rows={5}
              ></textarea>

              <button
                type="submit"
                className="md:col-span-2 bg-violet-500 text-white font-semibold rounded-sm py-3 hover:bg-violet-600 transition"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactStrip;
