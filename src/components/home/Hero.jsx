"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const Hero = () => {
	return (
		<section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-[#0B353D] overflow-hidden">
			<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
				{/* Left Content */}
				<div>
					{/* Announcement Badge */}
					<Link href="/power-now" className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#07969E]/20 border border-[#00A3AD]/30 text-[#00A3AD] text-sm font-medium hover:bg-[#07969E]/30 transition-all duration-200 group">
						<span>✨ New: Embedded solar financing with Power Now</span>
						<span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
					</Link>

					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.15]">
						AI-powered financing, integrated directly into your platform.
					</h1>
					<p className="text-lg md:text-xl text-teal-100/80 mb-10 max-w-lg leading-relaxed">
						Our embedded finance solutions can be live on your platform in less than a week.
					</p>
					<div className="flex flex-col sm:flex-row items-center gap-4">
						<Link href="mailto:[TODO: confirm contact email]">
							<button className="btn-primary w-full sm:w-auto text-base">
								Contact Sales
							</button>
						</Link>
					</div>
				</div>

				{/* Right Premium Mockup */}
				<div className="relative w-full aspect-square flex justify-center items-center">
					{/* Glowing Orb */}
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-teal-400/20 blur-[100px] rounded-full pointer-events-none" />
					
					{/* Main Dashboard Card */}
					<div className="relative z-10 w-full max-w-sm rounded-3xl bg-[#121619]/90 backdrop-blur-xl border border-white/10 shadow-2xl p-6 overflow-hidden">
						{/* Subtle top glare */}
						<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
						
						{/* Header */}
						<div className="flex justify-between items-center mb-8">
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-[#0B353D]" />
								<div>
									<div className="text-sm font-semibold text-white">Hi, Developer</div>
									<div className="text-xs text-slate-400">Fig Finance API</div>
								</div>
							</div>
							<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
								<div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
							</div>
						</div>
						
						{/* Balance Card */}
						<div className="rounded-2xl bg-[#1E252B] p-5 mb-6 border border-white/5 relative overflow-hidden group">
							<div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
							<div className="text-xs text-slate-400 mb-1">Total Financed</div>
							<div className="text-3xl text-white font-bold tracking-tight">$824,450.00</div>
						</div>

						{/* Activity Rows */}
						<div className="space-y-3">
							<div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Recent Activity</div>
							{[1, 2, 3].map((_, i) => (
								<div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.02]">
									<div className="flex items-center gap-3">
										<div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center">
											<div className="w-3 h-3 rounded-sm bg-teal-400" />
										</div>
										<div className="text-sm text-white font-medium">Payout Processed</div>
									</div>
									<div className="text-sm text-slate-300">+$2,450</div>
								</div>
							))}
						</div>
					</div>
					
					{/* Floating Decorative Elements */}
					<div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-2xl bg-teal-500/10 backdrop-blur-xl border border-white/10 -rotate-12 z-0 shadow-2xl" />
					<div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[#121619]/80 backdrop-blur-md border border-white/10 z-20 shadow-xl flex items-center justify-center">
						<div className="text-teal-400 font-bold text-xl">99.9%</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
