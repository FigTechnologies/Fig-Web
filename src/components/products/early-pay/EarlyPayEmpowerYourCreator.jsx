import { dm_sans } from "@/app/fonts"
import { Container } from "@/components/Container"
import { Heading } from "@/components/Heading"
import TestimonialCard from "@/components/home/TestimonialCard"
import { Marquee } from "@/components/ui/marquee"
import { TestimonialData } from "@/libs/data"

const EarlyPayEmpowerYourCreator = () => {
	return (
		<section className="py-20 bg-[#F9FAFB]">
			<Container>
				<Heading
					className="mx-auto text-center"
					title="Ready to Empower Your Creators?"
					subtitle={`<span>
							Start <span class="italic text-primary-color">Financing Smarter.</span>
						</span>`}
					text="With Early Pay, influencers can access the money they’ve earned—without the wait. It's simple to integrate and built to scale."
				/>
			</Container>

			<Marquee className="w-full lg:w-full">
				<div className="flex gap-x-4 w-full h-[300px]">
					{[...TestimonialData, ...TestimonialData].map((Testimonial, index) => (
						<TestimonialCard
							{...Testimonial}
							key={index}
							className="flex-shrink-0 w-full md:w-2/3 lg:w-1/3"
						/>
					))}
				</div>
			</Marquee>

			<Container>
				<div className="flex items-center justify-center gap-4 mt-8 text-center">
					<button className={`btn-colored !rounded-[2rem] ${dm_sans.className}`}>Integrate Now</button>
					<button className={`btn !rounded-[2rem] ${dm_sans.className}`}>Talk to Sales</button>
				</div>
			</Container>
		</section>
	)
}

export { EarlyPayEmpowerYourCreator }
