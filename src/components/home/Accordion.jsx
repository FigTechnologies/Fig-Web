import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const AccordionLayout = ({ question, answer, value, id }) => {
	return (
		<div>
			<Accordion
				className="rounded-[5px] px-[20px] py-[5px] mb-3"
				// className="border rounded-[5px] px-[20px] py-[5px] mb-3 bg-light-bg"
				type="single"
				collapsible>
				<AccordionItem value={value}>
					<AccordionTrigger className="text-[18px] md:text-[25px] font-[900]  text-primary-black">
						<div className="flex w-full">
							<span className="w-2/12">{id}</span>
							<span className="flex-1">{question} </span>
						</div>
					</AccordionTrigger>
					<AccordionContent className="text-[16px]  md:text-[18px] font-[400] leading-[1.5em] text-primary-black">{answer}</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	)
}

export default AccordionLayout
