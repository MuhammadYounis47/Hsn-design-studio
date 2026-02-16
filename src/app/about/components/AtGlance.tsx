"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type Stat = {
  value: number;
  suffix?: string; // +, K+, M+ etc
  label: string;
  pill: string; // tailwind bg class
};

const statsLeft: Stat[] = [
  { value: 10, suffix: "", label: "Years crafting brand stories", pill: "bg-[#B56CFF]" },
  { value: 1, suffix: "M+", label: "Managed in ad spend", pill: "bg-[#FF3B6B]" },
  { value: 100, suffix: "+", label: "Clients to date", pill: "bg-[#E9FF3B]" },
];

const statsRight: Stat[] = [
  { value: 20, suffix: "+", label: "Creatives humans\ncuriously collaborating", pill: "bg-[#B56CFF]" },
  { value: 500, suffix: "K+", label: "Followers for our\nclients", pill: "bg-[#FF3B6B]" },
  { value: 1, suffix: "B+", label: "Impressions for our\nclients", pill: "bg-[#E9FF3B]" },
];

/* ---------------------------
   Hook: On-screen detection
---------------------------- */
function useOnScreen<T extends Element>(threshold = 0.25) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold }
    );

    obs.observe(ref.current);

    return () => obs.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

/* ---------------------------
   Hook: Counting animation
---------------------------- */
function useCountUp(target: number, start: boolean, duration = 1200) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let raf = 0;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const current = Math.round(target * eased);

      setCount(current);

      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);

  return count;
}

/* ---------------------------
   Stat Row Component
---------------------------- */
const StatRow = ({
  stat,
  start,
  delay = 0,
}: {
  stat: Stat;
  start: boolean;
  delay?: number;
}) => {
  const number = useCountUp(stat.value, start, 1200);

  return (
    <div
      className={`flex items-center gap-6 sm:gap-10 transition-all duration-700 ease-out
      ${start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Number + pill */}
      <div className="relative w-[180px] sm:w-[220px]">
        {/* pill */}
        <div
          className={`absolute left-0 top-1/2 -translate-y-1/2 h-[52px] sm:h-[60px] w-[120px] sm:w-[140px] rounded-full ${stat.pill}`}
        />

        {/* number */}
        <div className="relative text-[72px] sm:text-[92px] leading-none font-[500] tracking-tight text-black">
          {number}
          {stat.suffix}
        </div>
      </div>

      {/* label */}
      <p className="text-[15px] sm:text-[16px] font-medium text-black whitespace-pre-line">
        {stat.label}
      </p>
    </div>
  );
};

/* ---------------------------
   Main Component
---------------------------- */
const AtAGlance = () => {
  const { ref, isVisible } = useOnScreen<HTMLDivElement>(0.25);

  // stagger delays
  const delaysLeft = useMemo(() => [0, 150, 300], []);
  const delaysRight = useMemo(() => [0, 150, 300], []);

  return (
    <section className="w-full bg-white py-16 sm:py-24">
      <div
        ref={ref}
        className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10"
      >
        {/* Layout */}
        <div className="grid grid-cols-1  items-start">
          {/* LEFT: Heading */}
          <div>
            <h2 className="text-[52px] sm:text-[72px] leading-[0.95] font-extrabold text-black">
              Hsn Design
              <br />
              at a glance
            </h2>
          </div>

          {/* RIGHT: Stats (2 columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            {/* Left Column */}
            <div className="flex flex-col gap-10 md:gap-14">
              {statsLeft.map((s, i) => (
                <StatRow
                  key={i}
                  stat={s}
                  start={isVisible}
                  delay={delaysLeft[i]}
                />
              ))}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-10 md:gap-14">
              {statsRight.map((s, i) => (
                <StatRow
                  key={i}
                  stat={s}
                  start={isVisible}
                  delay={delaysRight[i]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtAGlance;
