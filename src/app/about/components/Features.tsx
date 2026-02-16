"use client";

import React from "react";

const Features = () => {
  const features = [
    "Brand Identity",
    "UI/UX Design",
    "Packaging Design",
    "Photography Production",
    "Social Media",
    "Video Production",
    "Influencer Marketing",
    "Digital Ads",
    "Graphic Design",
    "Environmental Design",
    "Digital Strategy",
    "Creative Direction",
    "Signage Design",
    "Email Marketing",
    "Web Hosting & Management",
    "Copywriting & Brand Voice",
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          What we're great at
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We are a youthful, nimble team, operating seamlessly as an extension of yours. 
          Our creativity knows no bounds, staying ahead of the curve in all things creative, social, and digital.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 flex items-center justify-center text-center hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-lg md:text-xl font-semibold text-gray-800">{feature}</h3>
          </div>
        ))}
      </div>

       <div className="flex flex-col md:flex-row justify-center gap-8 mt-5">
  <button className="bg-black text-white p-2 rounded hover:bg-cyan-400 transition-colors duration-700 cursor-pointer hover:text-black font-medium">
    Click To View Our Creative <span className="block sm:inline">Services</span>
  </button>

  <button className="bg-black text-white p-2 rounded hover:bg-cyan-400 transition-colors duration-700 cursor-pointer hover:text-black font-medium">
    Click To View Our Digital <span className="block sm:inline">Marketing</span>
  </button>
</div>


    </section>
  );
};

export default Features;
