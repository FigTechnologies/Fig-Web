import { About } from "@/components/home/About"
import Choose from "@/components/home/Choose"
import Creators from "@/components/home/Creators"
import { Experts } from "@/components/home/Experts"
import Faq from "@/components/home/Faq"
import { FAQs } from "@/components/home/FAQs"
import FigHero from "@/components/home/FigHero"
import Hero from "@/components/home/Hero"
import Testimonial from "@/components/home/Testimonial"
import TrackRecord from "@/components/home/TrackRecord"
import WhatWeDo from "@/components/home/WhatWeDo"
import { WhyPartner } from "@/components/home/WhyPartner"
import Works from "@/components/home/Works"

export default function Home() {
	return (
		<main className="">
			{/* <FigHero /> */}
			<Hero />
			<About />
			<WhyPartner />
			<Experts />
			{/* <Creators /> */}
			{/* <WhatWeDo /> */}
			{/* <Choose /> */}
			{/* <Works /> */}
			{/* <TrackRecord /> */}
			{/* <Testimonial /> */}
			{/* <Faq /> */}
			<FAQs />
		</main>
	)
}
