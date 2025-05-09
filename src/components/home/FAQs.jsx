import { FaqDetails } from "@/libs/data"
import { Container } from "../Container"
import { Heading } from "../Heading"
import AccordionLayout from "./Accordion"

const FAQs = () => {
	return (
		<section className="py-20 mt-[20dvh]">
			<Container>
				<Heading
					title="FAQs"
					subtitle={`<span>Frequently Asked Questions</span>`}
				/>

				<div className="md:w-full w-full grid grid-cols-2 mt-[50px]">
					<div className="col-span-2 md:col-span-1">
						{FaqDetails.map(
							(faq, idx) =>
								idx % 2 == 0 && (
									<AccordionLayout
										{...faq}
										key={faq.value}
									/>
								),
						)}
					</div>
					<div className="col-span-2 border-l md:col-span-1">
						{FaqDetails.map(
							(faq, idx) =>
								idx % 2 != 0 && (
									<AccordionLayout
										{...faq}
										key={faq.value}
									/>
								),
						)}
					</div>
				</div>
			</Container>
		</section>
	)
}

export { FAQs }
