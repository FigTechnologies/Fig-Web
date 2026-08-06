"use client"

import { Container } from "../Container"
import { CheckCircle2 } from "lucide-react"

const steps = [
	{
		title: "Fast access, zero friction",
		desc: "Eliminate long wait times. Provide instant credit decisioning directly inside your app.",
	},
	{
		title: "Built for digital platforms",
		desc: "Our APIs seamlessly embed into your existing checkout or payout workflows.",
	},
	{
		title: "Automated, reliable repayments",
		desc: "Deduct repayments automatically from user platform earnings, minimizing your risk.",
	}
]

const WhyPartner = () => {
	return (
		<section id="how-it-works" className="py-24 bg-[#0B353D]">
			<Container>
				<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
					{/* Left Content */}
					<div>
						<h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
							Empower Your Users.<br />
							<span className="text-teal-400">Unlock New Revenue.</span>
						</h2>
						<p className="text-teal-100/80 text-lg leading-relaxed">
							Gig workers and digital earners expect more from the platforms they use. By embedding our solar financing directly into your ecosystem, you can provide fast access with zero friction, driving both loyalty and retention.
						</p>
					</div>

					{/* Right Checklist */}
					<div
						className="space-y-8 bg-[#121619] p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl"
					>
						{steps.map((step, idx) => (
							<div key={idx} className="flex gap-4">
								<div className="flex-shrink-0 mt-1">
									<CheckCircle2 className="w-6 h-6 text-teal-400" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-white mb-2">
										{step.title}
									</h3>
									<p className="text-slate-400 leading-relaxed text-sm">
										{step.desc}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</Container>
		</section>
	)
}

export { WhyPartner }
