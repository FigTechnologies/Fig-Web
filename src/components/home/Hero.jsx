"use client"

import Link from "next/link"
import { usePartnerModal } from "@/context/PartnerModalContext"

const Hero = () => {
	const { openModal } = usePartnerModal()

	return (
		<section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-[#0B353D] overflow-hidden">
			{/* Subtle background radial */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-400/5 rounded-full blur-[120px]" />
			</div>

			<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
				{/* Left Content */}
				<div>
					{/* Announcement Badge */}
					<Link href="/power-now" className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-[#07969E]/20 border border-[#00A3AD]/30 text-[#00A3AD] text-sm font-medium hover:bg-[#07969E]/30 transition-all duration-200 group">
						<span>✨ New: Embedded solar financing with Power Now</span>
						<span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
					</Link>

					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
						Fig connects Africa&apos;s clean energy economy to its digital economy.
					</h1>
					<p className="text-lg md:text-xl text-teal-100/75 mb-4 max-w-lg leading-relaxed">
						We enable platforms where over <strong className="text-white">20 million Africans earn</strong> to embed clean energy financing — underwritten by PesaScore, repaid automatically from platform payouts.
					</p>
					<p className="text-sm text-teal-100/50 mb-10 max-w-lg">
						Live in Nigeria &amp; Kenya. Anchor partner: Selar.
					</p>
					<div className="flex flex-col sm:flex-row items-start gap-4">
						<button
							onClick={openModal}
							className="btn-primary w-full sm:w-auto text-base"
						>
							Become a Partner
						</button>
						<Link href="#how-it-works">
							<button className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-teal-400/40 text-teal-300 text-base font-semibold hover:bg-teal-400/10 transition-colors">
								How it works
							</button>
						</Link>
					</div>
				</div>

				{/* Right — API/Integration mockup */}
				<div className="relative w-full flex justify-center items-center">
					<div className="absolute inset-0 bg-teal-400/10 blur-[80px] rounded-full pointer-events-none" />

					{/* API flow card */}
					<div className="relative z-10 w-full max-w-sm rounded-3xl bg-[#121619]/95 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
						{/* Top glare */}
						<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent" />

						{/* Header */}
						<div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
							<div className="flex items-center gap-2">
								<div className="w-2 h-2 rounded-full bg-red-500/70" />
								<div className="w-2 h-2 rounded-full bg-amber-500/70" />
								<div className="w-2 h-2 rounded-full bg-emerald-500/70" />
							</div>
							<span className="text-xs text-slate-500 font-mono">Fig API · PesaScore</span>
						</div>

						{/* Code area */}
						<div className="p-6 font-mono text-xs space-y-1">
							<p><span className="text-slate-500">{"// Platform payout webhook received"}</span></p>
							<p className="text-slate-300"><span className="text-teal-400">POST</span> /v1/repayments/collect</p>
							<div className="mt-3 bg-white/[0.03] rounded-xl p-4 border border-white/5 space-y-1.5">
								<p><span className="text-slate-500">user_id:</span> <span className="text-amber-300">&quot;selar_usr_4821&quot;</span></p>
								<p><span className="text-slate-500">payout_amount:</span> <span className="text-emerald-300">₦18,400</span></p>
								<p><span className="text-slate-500">deduction:</span> <span className="text-teal-300">₦4,600</span></p>
								<p><span className="text-slate-500">net_to_user:</span> <span className="text-white">₦13,800</span></p>
							</div>
							<div className="mt-4 bg-teal-500/10 rounded-xl p-4 border border-teal-500/20 space-y-1.5">
								<p className="text-teal-400 font-semibold">200 OK — Repayment collected</p>
								<p><span className="text-slate-500">pesascore:</span> <span className="text-white">742 <span className="text-emerald-400">↑ +12</span></span></p>
								<p><span className="text-slate-500">status:</span> <span className="text-emerald-400">&quot;on_track&quot;</span></p>
							</div>
						</div>

						{/* Flow label */}
						<div className="px-6 pb-5 flex items-center justify-between text-xs text-slate-500">
							<span>Automated. No consumer app required.</span>
							<span className="flex items-center gap-1 text-teal-400 font-semibold">
								<span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
								Live
							</span>
						</div>
					</div>

					{/* Floating badge */}
					<div className="absolute -bottom-4 -left-4 z-20 rounded-2xl bg-[#1E252B] border border-white/10 px-4 py-2.5 shadow-xl text-xs font-semibold text-white flex items-center gap-2">
						<span className="text-teal-400">⚡</span> Repaid from platform payouts
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
