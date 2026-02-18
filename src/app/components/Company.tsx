"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Company = () => {
  const logoImages = [
    { id: 1, imagePath: "/client/client-1.png" },
    { id: 2, imagePath: "/client/client-2.png" },
    { id: 3, imagePath: "/client/client-3.png" },
    { id: 4, imagePath: "/client/client-4.png" },
    { id: 5, imagePath: "/client/client-5.png" },
    { id: 6, imagePath: "/client/client-6.png" },
    { id: 7, imagePath: "/client/client-7.png" },
    { id: 8, imagePath: "/client/client-8.png" },
    { id: 9, imagePath: "/client/client-9.png" },
    { id: 10, imagePath: "/client/client-10.png" },
    { id: 11, imagePath: "/client/client-11.png" },
    { id: 12, imagePath: "/client/client-12.png" },
    { id: 13, imagePath: "/client/client-13.png" },
    { id: 14, imagePath: "/client/client-14.png" },
    { id: 15, imagePath: "/client/client-15.png" },
    { id: 16, imagePath: "/client/client-16.png" },
    { id: 17, imagePath: "/client/client-17.png" },
    { id: 18, imagePath: "/client/client-18.png" },
  ];

  // Responsive visible logos
  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width >= 1024) return 5;
      if (width >= 768) return 3;
      return 2;
    }
    return 5;
  };

  const [visibleCount, setVisibleCount] = useState(5);
  const [startIndex, setStartIndex] = useState(0);

  // Update visible count on resize
  useEffect(() => {
    setVisibleCount(getVisibleCount());

    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto sliding (change all together)
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + visibleCount) % logoImages.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [visibleCount, logoImages.length]);

  // Calculate visible logos
  const visibleLogos = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleLogos.push(logoImages[(startIndex + i) % logoImages.length]);
  }

  return (
    <section className="bg-white w-full py-10 overflow-hidden">
      <div className="w-full px-4">
        <div className="flex gap-8 items-center justify-between w-full">
          {visibleLogos.map((item) => (
            <div
              key={item.id}
              className="relative flex items-center justify-center
                         w-32 h-32 sm:w-32 sm:h-32 md:w-36 md:h-36"
            >
              <Image
                src={item.imagePath}
                alt={`Company logo ${item.id}`}
                fill
                className="object-contain p-2"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Company;
