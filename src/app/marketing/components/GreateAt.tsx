import Link from "next/link";
import React from "react";

const services = [
  {
    title: "Paid Media",
    desc: "High-performing ad campaigns across Google, Meta, TikTok & more.",
  },
  {
    title: "SEO",
    desc: "Technical + content SEO that drives long-term organic growth.",
  },
  {
    title: "Social Media",
    desc: "Brand-first social strategy with content that actually converts.",
  },
  {
    title: "Email Marketing",
    desc: "Automations + campaigns designed to retain and upsell customers.",
  },
  {
    title: "Content Strategy",
    desc: "Content systems that build authority and increase conversions.",
  },
  {
    title: "Brand Strategy",
    desc: "Clear positioning and messaging that makes your brand unforgettable.",
  },
];

const WhatWereGreatAt = () => {
  return (
    <section className="w-full bg-white text-black py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-400">
            Capabilities
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold mt-4 leading-tight">
            What we’re <span className="text-gray-600">great at.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="group border border-gray-800 rounded-2xl p-7 transition-all duration-300 hover:border-gray-600 hover:bg-[#0c0c0c]"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl md:text-2xl font-semibold">
                  {item.title}
                </h3>

                {/* Arrow */}
                <div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center transition-all duration-300 group-hover:border-gray-400 group-hover:rotate-45">
                  <span className="text-lg">↗</span>
                </div>
              </div>

              <p className="text-gray-400 mt-4 leading-relaxed text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-20 flex justify-center">
          <Link className="px-8 rounded-sm bg-violet-500  text-white font-medium hover:bg-pink-500 hover:text-black transition-all duration-300 p-2" href={""}>
            Click To view our creative services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatWereGreatAt;
