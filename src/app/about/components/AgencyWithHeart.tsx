"use client";

import React, { useRef, useEffect, useState } from "react";

const AgencyWithHeart = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false); // reset on scroll out
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div
        ref={ref}
        className="relative w-full h-full overflow-hidden"
      >
        {/* Diagonal background from bottom-left to top-right */}
        <div
          className={`absolute w-full h-full bg-linear-to-tr from-amber-400 to-yellow-300 transition-transform duration-1000 ease-out
            ${isVisible ? "translate-x-0 translate-y-0" : "-translate-x-full translate-y-full"}
          `}
        ></div>

        {/* Text overlay */}
        <h2
          className={`absolute w-full text-start mt-10 p-4 text-4xl font-bold text-black transition-opacity duration-1000 ease-out
            ${isVisible ? "opacity-100" : "opacity-0"}
          `}
        >
          Welcome to HSN Design Studio
        </h2>
        <p  className={`absolute w-full text-start mt-25 p-4 text-4xl font-bold text-black transition-opacity duration-1000 ease-out
            ${isVisible ? "opacity-100" : "opacity-0"}
          `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente architecto minima provident laudantium eum! Facilis odio porro ipsa ab ducimus cupiditate voluptatem voluptatibus, eaque blanditiis quod incidunt sequi, fugiat omnis!</p>
      </div>
    </section>
  );
};

export default AgencyWithHeart;
