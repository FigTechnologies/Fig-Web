"use client"

import { Container } from "../Container"
import { CheckCircle2 } from "lucide-react"

const steps = [
	{
		title: "PesaScore underwrites in seconds",
		desc: "Our behavioral credit engine reads earnings consistency, transaction frequency, and payout regularity directly from partner platform data — no credit bureau required. A decision in under 3 seconds.",
	},
	{
		title: "Solar asset, zero upfront cost",
		desc: "Approved users receive a productive solar system — panels, battery, inverter — financed entirely through the platform. No cash deposit. No paperwork. The platform remains the only touchpoint.",
	},
	{
		title: "Repayments deduct from payouts automatically",
		desc: "When a user earns on the platform, a pre-agreed portion of their payout is automatically collected by Fig before it reaches their wallet. The platform's payout API handles everything — aligned with how earners actually earn.",
	},
]

const WhyPartner = () => {
	return (
		<section id="how-it-works" className="py-24 bg-[#0B353D]">
			<Container>
				<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
					{/* Left Content */}
					<div>
						<p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-300/70 mb-4">How It Works</p>
						<h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
							Embedded. Automated.<br />
							<span className="text-teal-400">No standalone app.</span>
						</h2>
						<p className="text-teal-100/70 text-lg leading-relaxed mb-8">
							Platforms where people earn in Nigeria and Kenya can embed solar financing directly into their product. Fig handles underwriting via <strong className="text-teal-200">PesaScore</strong> and collects repayments automatically from platform payouts — regulated through our Microfinance Bank (Nigeria) and SACCO (Kenya) lending partners.
						</p>
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-400/10 border border-teal-400/20 text-sm text-teal-300 font-medium">
							<span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
							Currently live in pilot
						</div>
					</div>

					{/* Right Checklist */}
					<div className="space-y-6 bg-[#121619] p-8 md:p-10 rounded-[2rem] border border-white/10 shadow-2xl">
						{steps.map((step, idx) => (
							<div key={idx} className="flex gap-4 pb-6 border-b border-white/[0.06] last:border-0 last:pb-0">
								<div className="flex-shrink-0 mt-0.5">
									<CheckCircle2 className="w-5 h-5 text-teal-400" />
								</div>
								<div>
									<h3 className="text-base font-bold text-white mb-1.5">
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
