import React from "react";
import Diagonal from "./components/Diagonal";
import WhatWeAreGreatAt from "./components/GreateAt";
import OurProcess from "./components/OurProcess";
import RecentWork from "../components/Recent-work";
import Content from "../components/Content";
import ContactStrip from "../components/ContactStrip";



const HeroSection = () => {
  return (
    <>
    <section className="relative   h-screen flex items-center">
      <div className="container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hsn Desing in Hyderabad for Brands Ready to Grow
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste et nostrum, aliquam adipisci sint numquam ratione laudantium dolor, itaque cupiditate impedit fugit aperiam ut ipsum facere perferendis voluptas culpa pariatur.
        </p>
       
      </div>
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </section>
    <Diagonal/>
    <WhatWeAreGreatAt/>
    <OurProcess/>
    <RecentWork/>
    <Content/>
    <ContactStrip/>
    
    
    
    </>
  );
};

export default HeroSection;
