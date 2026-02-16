import Link from "next/link";
import React from "react";

const services = [
  {
    title: "Brand Development",
    items: [
      "Logo Design",
      "Brand Style Guides",
      "Naming Workshops",
      "Brand Voice Development",
      "Brand Positioning",
      "Mission and Vision Statements",
      "Brand Storytelling",
    ],
  },
  {
    title: "UI/UX Design",
    items: [
      "User Research",
      "Personal Development",
      "Information Architecture",
      "Interaction Design",
      "Mobile-First Design",
      "Accessibility Design",
      "High-Fidelity Prototyping",
    ],
  },
  {
    title: "Web Design",
    items: [
      "Responsive Web Design",
      "CMS Integration",
      "E-commerce Solutions",
      "SEO-Friendly Design",
      "Web Animation",
      "API Integrations",
      "Web Security",
    ],
  },
  {
    title: "Packaging Design",
    items: [
      "Structural Design",
      "Graphic Design for Packaging",
      "Material Selection",
      "Label Design and Compliance",
      "Prototyping and Testing",
      "Packaging Innovation",
      "Brand Consistency",
    ],
  },
  {
    title: "Photography Production",
    items: [
      "Product Photography",
      "Fashion Photography",
      "Event Photography",
      "Portrait Photography",
      "Architectural Photography",
      "Food Photography",
      "Sports Photography",
    ],
  },
  {
    title: "Video Production",
    items: [
      "Corporate Video Production",
      "Commercial Production",
      "Documentary Filming",
      "Event Videography",
      "Educational Videos",
      "Animation and Motion Graphics",
      "Post-Production Services",
    ],
  },
  {
    title: "Creative Direction",
    items: [
      "Art Direction",
      "Campaign Concept Development",
      "Visual Storytelling",
      "Creative Team Leadership",
      "Project Creative Oversight",
      "Concept Implementation",
      "Brand Image Enhancement",
    ],
  },
  {
    title: "Graphic Design",
    items: [
      "Design Print and Digital Graphics",
      "Brochures and Flyers",
      "Annual Reports",
      "Advertising Design",
      "Infographics",
      "Trade Show Graphics",
      "Catalog Design",
    ],
  },
];

const WhatWeAreGreatAt = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-white">
          What We’re Great At
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center">
        <Link href="/services" className="inline-block text-center mt-10 text-black hover:text-violet-500 transition-colors bg-white px-6 py-3 rounded-lg shadow">
          Click To Our Digital Marketing Services
        </Link></div>
      </div>
    </section>
  );
};

export default WhatWeAreGreatAt;
