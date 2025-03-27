import Choose from "@/components/home/Choose";
import Creators from "@/components/home/Creators";
import Faq from "@/components/home/Faq";
import FigHero from "@/components/home/FigHero";
import Hero from "@/components/home/Hero";
import Testimonial from "@/components/home/Testimonial";
import TrackRecord from "@/components/home/TrackRecord";
import WhatWeDo from "@/components/home/WhatWeDo";
import Works from "@/components/home/Works";

export default function Home() {
  return (
    <main className=" ">
      {/* <FigHero /> */}
      <Hero />
      <Creators />
      <WhatWeDo />
      <Choose />
      <Works />
      <TrackRecord />
      <Testimonial />
      <Faq />
    </main>
  );
}
