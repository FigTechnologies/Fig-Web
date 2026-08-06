import { About } from "@/components/home/About"
import { Experts } from "@/components/home/Experts"
import { FAQs } from "@/components/home/FAQs"
import Hero from "@/components/home/Hero"
import { WhyPartner } from "@/components/home/WhyPartner"
import { ReadyToStart } from "@/components/ReadyToStart"

export default function Home() {
	return (
		<main>
			{/* Hero — one-liner + problem statement + partner CTA */}
			<Hero />

			{/* The Problem — 600M unelectrified, 21.7M digital earners, platform data gap; video embed */}
			<section id="about">
				<About />
			</section>

			{/* How It Works — 3-step flow + Why Fig differentiation */}
			<WhyPartner />

			{/* Traction & Partners — verified stats + platform partner marquee */}
			<Experts />

			{/* FAQs — platform partner audience */}
			<section id="faqs">
				<FAQs />
			</section>

			{/* CTA — Talk to our partnerships team */}
			<ReadyToStart />
		</main>
	)
}
