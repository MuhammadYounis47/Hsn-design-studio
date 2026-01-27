import Image from "next/image";
import Hero from "./components/Hero";
import DigitalLandscape from "./components/DigitalLandscape";
import Company from "./components/Company";
import RecentWork from "./components/Recent-work";
import Content from "./components/Content";
import ContactStrip from "./components/ContactStrip";


export default function Home() {
  return (
   <>
   <Hero/>
   <DigitalLandscape/>
   <Company/>
   <RecentWork/>
   <Content/>
   <ContactStrip/>
   
  
   
   </>
  );
}
