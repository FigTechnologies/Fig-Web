import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const AccordionLayout = ({ question, answer, value }) => {
	return (
		<div className="bg-[#1E252B] border border-white/5 rounded-2xl px-6 py-2 shadow-sm transition-all duration-200 hover:border-teal-500/30">
			<Accordion type="single" collapsible>
				<AccordionItem value={value} className="border-none">
					<AccordionTrigger className="text-lg font-bold text-white hover:no-underline py-4 text-left">
						{question}
					</AccordionTrigger>
					<AccordionContent className="text-slate-300 leading-relaxed pb-4 text-base">
						{answer}
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	)
}

export default AccordionLayout
