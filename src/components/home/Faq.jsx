import { FaqDetails } from "@/libs/data"
import AccordionLayout from "./Accordion"

const Faq = () => {
	return (
		<section>
			<div className=" w-full max-w-7xl mx-auto py-12 md:py-20">
				<h2 className="text-start heading-2 text-primary-black ">Frequently Asked Question</h2>
				{/* <div className="md:w-full w-full mt-[50px] bg-light-bg"> */}
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
					<div className="col-span-2 md:col-span-1 border-l">
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
			</div>
		</section>
	)
}

export default Faq
