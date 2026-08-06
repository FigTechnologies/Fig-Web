import { FaqDetails } from "@/libs/data"
import { Container } from "../Container"
import AccordionLayout from "./Accordion"

const FAQs = () => {
	return (
		<section id="faqs" className="py-24 bg-[#121619]">
			<Container>
				<div className="max-w-3xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
							Frequently asked questions
						</h2>
						<p className="text-slate-300 text-lg">
							Everything you need to know about embedding Fig into your platform.
						</p>
					</div>

					<div className="space-y-4">
						{FaqDetails.map((faq) => (
							<AccordionLayout
								{...faq}
								key={faq.value}
							/>
						))}
					</div>
				</div>
			</Container>
		</section>
	)
}

export { FAQs }
