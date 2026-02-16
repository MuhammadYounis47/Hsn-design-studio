import React from "react";

type Member = {
  name: string;
  role: string;
  img: string;
  offset?: "up" | "down" | "none";
};

const leadershipMembers: Member[] = [
  {
    name: "Lindsay Srutwa",
    role: "VP Accounts",
    img: "/about/leaderTeam-1.png",
    offset: "none",
  },
  {
    name: "Emily Silverman",
    role: "CEO",
    img: "/about/leaderTeam-1.png",
    offset: "up", // 👈 beech wala card uper
  },
  {
    name: "Andrew Terwissen",
    role: "VP Design & Creative",
    img: "/about/leaderTeam-1.png",
    offset: "none",
  },
];

const getCardOffsetClass = (offset?: "up" | "down" | "none") => {
  if (offset === "up") return "-translate-y-8 sm:-translate-y-12";
  if (offset === "down") return "translate-y-8 sm:translate-y-12";
  return "translate-y-0";
};

const LeadershipTeam = () => {
  return (
    <section className="w-full bg-black py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Leadership Team
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
          {leadershipMembers.map((m, i) => (
            <div key={i} className="text-center">
              {/* IMAGE CARD */}
              <div
                className={`group rounded-sm bg-[#f5f4f0] border border-black/10
                p-6 sm:p-7 transition-all duration-300
                hover:bg-[#fff3b0] hover:border-black/30 hover:shadow-xl
                transform ${getCardOffsetClass(m.offset)}`}
              >
                <div className="overflow-hidden w-full">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-auto object-cover transition-transform duration-300 "
                  />
                </div>
              </div>

              {/* TEXT (CARD KE BAHAR / NICHE) */}
              <div className="mt-5">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  {m.name}
                </h3>
                <p className="mt-2 text-base sm:text-lg text-white/70 font-medium">
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

export default LeadershipTeam;
