"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Company = () => {
  const logoImages = [
    { id: 1, imagePath: "/client/1.png" },
    { id: 2, imagePath: "/client/2.png" },
    { id: 3, imagePath: "/client/3.png" },
    { id: 4, imagePath: "/client/4.png" },
    { id: 5, imagePath: "/client/5.png" },
    { id: 6, imagePath: "/client/6.png" },
    { id: 7, imagePath: "/client/7.png" },
    { id: 8, imagePath: "/client/8.png" },
    { id: 9, imagePath: "/client/9.png" },
    { id: 10, imagePath: "/client/10.png" },
    { id: 11, imagePath: "/client/11.png" },
    { id: 12, imagePath: "/client/12.png" },
    { id: 13, imagePath: "/client/13.png" },
    { id: 14, imagePath: "/client/14.png" },
    { id: 15, imagePath: "/client/15.png" },
    { id: 16, imagePath: "/client/16.png" },
    { id: 17, imagePath: "/client/17.png" },
    { id: 18, imagePath: "/client/18.png" },
  ];

  const [startIndex, setStartIndex] = useState(0);

  // Automatic sliding (every 3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % logoImages.length);
    }, 3000); // 3 seconds per slide
    return () => clearInterval(interval);
  }, []);

  // Responsive number of visible logos
  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width >= 1024) return 5; // Large screens
      if (width >= 768) return 3;  // Medium screens
      return 2;                    // Small screens
    }
    return 5; // default fallback
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate visible logos
  const visibleLogos = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleLogos.push(logoImages[(startIndex + i) % logoImages.length]);
  }

  return (
    <section className="bg-gray-900 w-full py-8 flex items-center justify-center overflow-hidden">
      <div className="flex gap-8">
        {visibleLogos.map((item) => (
          <div
            key={item.id}
            className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 transition-transform duration-1000 ease-in-out"
          >
            <Image
              src={item.imagePath}
              alt={`Company logo ${item.id}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Company;
