import React from "react";

type Member = {
  name: string;
  role: string;
  img: string;
  offset?: "up" | "down" | "none";
};

const dreamTeamMembers: Member[] = [
  {
    name: "Robyn Bluestein",
    role: "Director, Digital Accounts",
    img: "/about/leaderTeam-1.png",
    offset: "up",
  },
  {
    name: "Pouyan Ajali",
    role: "Sr. Graphic & UI/UX Designer",
    img: "/about/leaderTeam-1.png",
    offset: "none",
  },
  {
    name: "Becca Black",
    role: "Sr. Graphic Designer",
    img: "/about/leaderTeam-1.png",
    offset: "down",
  },
  {
    name: "Natasha Gvozdek",
    role: "Digital Account Coordinator",
    img: "/about/leaderTeam-1.png",
    offset: "up",
  },
  {
    name: "Emily Peotto",
    role: "Digital Account Manager",
    img: "/about/leaderTeam-1.png",
    offset: "none",
  },
  {
    name: "Georgia Mills",
    role: "Copywriter",
    img: "/about/leaderTeam-1.png",
    offset: "down",
  },
  {
    name: "Kimson Ng",
    role: "Head of Digital Experience & Development",
    img: "/about/leaderTeam-1.png",
    offset: "up",
  },
  {
    name: "Stella Green-Rhoades",
    role: "Art Director",
    img: "/about/leaderTeam-1.png",
    offset: "none",
  },
];

const getOffsetClass = (offset?: "up" | "down" | "none") => {
  if (offset === "up") return "-mt-6";
  if (offset === "down") return "mt-6";
  return "mt-0";
};

const DreamTeam = () => {
  return (
    <section className="w-full bg-black py-16 sm:py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Dream Team
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {dreamTeamMembers.map((m, i) => (
            <div
              key={i}
              className="group rounded-[28px] bg-[#f5f4f0] border border-black/10
              p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1
              hover:bg-[#fff3b0] hover:border-black/30 hover:shadow-xl"
            >
              {/* Image */}
              <div className={`flex justify-center ${getOffsetClass(m.offset)}`}>
                <div
                  className="w-36 h-36 sm:w-40 sm:h-40 rounded-sm overflow-hidden
                 "
                >
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="mt-6 text-center">
                <h3 className="text-lg sm:text-xl font-extrabold text-black">
                  {m.name}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-black/70 font-medium leading-snug">
                  {m.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DreamTeam;
