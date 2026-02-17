"use client";

import React, { useRef, useEffect, useState } from "react";

const OutShine = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
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
    <section className="w-full min-h-screen flex justify-center items-center bg-white">
      <div
        ref={ref}
        className="relative w-full min-h-screen overflow-hidden flex items-center"
      >
        {/* Diagonal background */}
        <div
          className={`absolute inset-0 bg-violet-500 transition-transform duration-1000 ease-out
            ${
              isVisible
                ? "translate-x-0 translate-y-0"
                : "-translate-x-full translate-y-full"
            }
          `}
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
          <div
            className={`max-w-3xl transition-opacity duration-1000 ease-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
              Welcome to HSN Design Studio
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-black/90 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              architecto minima provident laudantium eum! Facilis odio porro
              ipsa ab ducimus cupiditate voluptatem voluptatibus, eaque
              blanditiis quod incidunt sequi, fugiat omnis!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutShine;
