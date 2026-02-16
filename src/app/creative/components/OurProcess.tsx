import React from "react";

const processSteps = [
  {
    number: "1",
    title: "Define",
    description:
      "We begin to map the route to success by conducting research and discovery. This is where the secrets to our award-winning design work are put into action.",
  },
  {
    number: "2",
    title: "Design",
    description:
      "Based on our findings in the research phase, we start to ideate and develop and test strategic ideas that meet the goals of the project.",
  },
  {
    number: "3",
    title: "Refine",
    description:
      "Strategy meets creativity and ideas begin to take form. Detailed campaign mockups, mood boards, and other visual elements are presented for feedback and refinement.",
  },
  {
    number: "4",
    title: "Deliver",
    description:
      "We go live and implement the project and design assets. We are methodical and thorough in our efforts to deliver stunning, high-value design for our clients.",
  },
];

const OurProcess = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold mb-12 r">
          Our Process
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className={`group relative p-6 rounded-sm shadow-lg transform transition-all duration-500 border
                hover:-translate-y-4 hover:shadow-2xl 
                ${idx % 2 === 0 ? "mt-0" : "mt-12"} 
                bg-blue-500`}
            >
           

              {/* Card Content */}
              <div className="">
                <div className="flex items-center gap-4 mb-6">
                  {/* Number Circle */}
                  <div className="w-16 h-16 rounded-full flex items-center justify-center  text-black text-2xl font-bold transition-colors duration-500 group-hover:bg-white group-hover:text-blue-600">
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-semibold transition-colors duration-500 group-hover:text-white">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-700 transition-colors duration-500 group-hover:text-white leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
