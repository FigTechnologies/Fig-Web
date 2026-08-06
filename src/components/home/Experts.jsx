"use client"

import { Container } from "../Container"

const features = [
	{
		title: "Reduce churn",
		desc: "Users stick to platforms that actively improve their livelihoods.",
		icon: (
			<div className="w-full h-full flex flex-col items-center justify-center gap-2">
				<div className="flex items-end gap-1.5 h-12">
					<div className="w-3 bg-teal-500/20 h-4 rounded-t-sm" />
					<div className="w-3 bg-teal-500/40 h-7 rounded-t-sm" />
					<div className="w-3 bg-teal-500/70 h-10 rounded-t-sm" />
					<div className="w-3 bg-teal-400 h-12 rounded-t-sm" />
				</div>
			</div>
		)
	},
	{
		title: "Drive loyalty",
		desc: "Create strong platform lock-in by providing essential productive assets.",
		icon: (
			<div className="w-full h-full flex items-center justify-center">
				<div className="relative w-14 h-14 bg-indigo-500/20 rounded-full flex items-center justify-center">
					<div className="absolute w-20 h-20 bg-indigo-500/10 rounded-full animate-ping opacity-50" />
					<div className="w-6 h-6 bg-indigo-400 rounded-full" />
				</div>
			</div>
		)
	},
	{
		title: "Battle-tested APIs",
		desc: "Enterprise-grade infrastructure built to handle millions of transactions.",
		icon: (
			<div className="w-full h-full flex items-center justify-center">
				<div className="w-16 h-12 bg-slate-800 rounded-lg border border-slate-600 flex flex-col p-2 gap-1.5">
					<div className="w-full h-2 bg-emerald-500/30 rounded-sm" />
					<div className="w-3/4 h-2 bg-emerald-500/30 rounded-sm" />
					<div className="w-1/2 h-2 bg-emerald-400 rounded-sm mt-auto" />
				</div>
			</div>
		)
	},
	{
		title: "Simple API",
		desc: "Go live in days with our developer-friendly documentation and support.",
		icon: (
			<div className="w-full h-full flex items-center justify-center">
				<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
					<div className="w-4 h-4 border-2 border-white rounded-sm rotate-45" />
				</div>
			</div>
		)
	}
]

const Experts = () => {
	return (
		<section id="traction" className="py-24 bg-[#121619]">
			<Container>
				<div className="max-w-4xl mx-auto mb-16 text-center">
					<h2 
						className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
					>
						Boost Revenue And Retention.<br />
						<span className="text-teal-400">Results You Can Rely On.</span>
					</h2>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{features.map((feat, idx) => (
						<div
							key={idx}
							className="bg-[#1E252B] rounded-3xl border border-white/10 shadow-lg overflow-hidden flex flex-col h-full group hover:border-teal-500/30 transition-colors duration-300"
						>
							{/* Top Image Container */}
							<div className="h-44 w-full bg-[#121619]/50 border-b border-white/5 relative overflow-hidden">
								{/* Subtle background grid pattern */}
								<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]" />
								
								<div className="relative z-10 w-full h-full">
									{feat.icon}
								</div>
							</div>
							
							{/* Bottom Text Area */}
							<div className="p-8 flex-1 flex flex-col">
								<h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
								<p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
							</div>
						</div>
					))}
				</div>
			</Container>
		</section>
	)
}

export { Experts }
