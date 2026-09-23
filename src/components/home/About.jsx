"use client"

import { Container } from "../Container"

const stats = [
	{
		number: "20M+",
		label: "Africans earning on\nintegrated platforms",
		sublabel: "Gig, creator & marketplace workers",
	},
	{
		number: "2",
		label: "Countries\nlive",
		sublabel: "Nigeria & Kenya",
	},
	{
		number: "0",
		label: "Bureau queries\nper underwrite",
		sublabel: "PesaScore uses behavioral data only",
	},
	{
		number: "1",
		label: "Anchor partner\nin pilot",
		sublabel: "Selar — live cohort",
	},
]

const About = () => {
	return (
		<section id="about" className="py-20 bg-[#121619] border-y border-white/5">
			<Container>
				{/* Heading block */}
				<div className="max-w-3xl mb-16">
					<p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-400 mb-4">About Fig</p>
					<h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
						Credit infrastructure for platforms.<br />
						<span className="text-teal-400">Built for how Africa actually earns.</span>
					</h2>
					<p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
						Over 20 million Africans earn income through digital platforms — gig work, creator sales, delivery, e-commerce. They are creditworthy by behavior, invisible to bureaus. Fig&apos;s underwriting engine, <strong className="text-slate-200">PesaScore</strong>, reads their platform earnings directly. Repayments deduct automatically from payouts. No consumer app. No bureau query. No friction for the platform.
					</p>
				</div>

				{/* Stats row */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
					{stats.map((stat, i) => (
						<div key={i} className="bg-[#121619] px-6 py-8 md:px-8 md:py-10">
							{/* Charge bar motif */}
							<div className="flex gap-0.5 mb-5">
								{Array.from({ length: 5 }).map((_, j) => (
									<div
										key={j}
										className="h-1 rounded-full flex-1"
										style={{
											background: j < (i + 2 > 4 ? 4 : i + 2)
												? "linear-gradient(90deg, #0497A2, #00D4B1)"
												: "rgba(255,255,255,0.07)"
										}}
									/>
								))}
							</div>
							<div className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">
								{stat.number}
							</div>
							<div className="text-sm font-semibold text-slate-300 whitespace-pre-line leading-snug mb-1">
								{stat.label}
							</div>
							<div className="text-xs text-slate-500">
								{stat.sublabel}
							</div>
						</div>
					))}
				</div>
			</Container>
		</section>
	)
}

export { About }
