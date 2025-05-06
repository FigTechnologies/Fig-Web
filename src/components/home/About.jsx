import { dm_sans } from "@/app/fonts"
import { Container } from "../Container"
import { Heading } from "../Heading"

const About = () => {
	return (
		<section className="py-20 bg-[#F9FAFB]">
			<Container>
				<Heading
					title="About Us"
					subtitle={`<span>
							Rooted in Africa, Built for <span class="italic text-primary-color">Emerging Markets</span>
						</span>`}
				/>

				<div className="grid md:grid-cols-2">
					<div className="space-y-4">
						<p className="text-[1.3rem] leading-10 font-[400] text-primary-black">We exist to unlock the full potential of underserved workers with flexible, accessible financial services. From Lagos to Kigali to Nairobi, we’re powering the creators, gig workers, and blue- and black-collar communities driving Africa’s informal economy — and beyond.</p>
						<div className="flex items-center gap-4">
							<h5 className={`font-bold tracking-widest text-[1.3rem] ${dm_sans.className}`}>3+ businesses funded.</h5>
							<h5 className={`font-bold tracking-widest text-[1.3rem] border-s-2 ps-4 border-black ${dm_sans.className}`}>2+ countries live and funding.</h5>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}

export { About }
