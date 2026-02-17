import React from "react";

const OurProcess = () => {
  return (
    <section className="w-full bg-black text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-14">
          Our Process
        </h2>

        {/* Parent Div */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start mt-12">
          
          {/* Card 1 */}
          <div className="w-full md:w-1/4 rounded-2xl border border-gray-300/70 bg-black hover:bg-pink-500 transition-colors duration-300 p-8 ">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-2xl font-extrabold">Research</h3>
            </div>

            <p className="text-white/90 leading-relaxed text-[15px] whitespace-pre-line">
              {`We kickoff by diving into extensive research to map out the path to success in media buying for your brand. This is where our media strategies take shape, setting the foundation for impactful campaigns.`}
            </p>
          </div>

          {/* Card 2 (Down) */}
          <div className="w-full md:w-1/4 rounded-2xl border border-gray-300/70 bg-black hover:bg-blue-600 transition-colors duration-300 p-8  md:mt-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-2xl font-extrabold">Refine</h3>
            </div>

            <p className="text-white/90 leading-relaxed text-[15px] whitespace-pre-line">
              {`We then refine our approach and craft detailed media strategies tailored to your goals.

We develop targeted plans to reach your audience effectively and maximize your advertising budget.`}
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-full md:w-1/4 rounded-2xl border border-gray-300/70 bg-black hover:bg-emerald-600 transition-colors duration-300 p-8 ">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-2xl font-extrabold">Execute</h3>
            </div>

            <p className="text-white/90 leading-relaxed text-[15px] whitespace-pre-line">
              {`Here’s where the magic happens! We leverage our expertise to align with your objectives. With precision, we launch your campaigns to capture, convince, and convert your audience.`}
            </p>
          </div>

          {/* Card 4 (Down) */}
          <div className="w-full md:w-1/4 rounded-2xl border border-gray-300/70 bg-black hover:bg-orange-500 transition-colors duration-300 p-8  md:mt-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="text-2xl font-extrabold">Optimize</h3>
            </div>

            <p className="text-white/90 leading-relaxed text-[15px] whitespace-pre-line">
              {`Once live, we closely monitor campaign performance, making real-time adjustments to optimize results and maximize ROI. We continuously refine our strategies to ensure your campaign's success.`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
