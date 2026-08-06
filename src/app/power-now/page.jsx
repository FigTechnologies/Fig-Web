"use client"

import Link from "next/link"
import { Zap, Activity, Code, Sun, Battery, Wifi } from "lucide-react"
import { Container } from "@/components/Container"

/* ─── A. HERO ─── */
const PowerNowHero = () => (
	<section className="relative bg-[#0B353D] pt-32 pb-24 overflow-hidden">
		{/* Background glow blobs */}
		<div className="pointer-events-none absolute inset-0">
			<div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px]" />
			<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-400/10 rounded-full blur-[100px]" />
		</div>

		<Container className="relative z-10">
			<div className="grid md:grid-cols-2 gap-14 items-center">
				{/* Left */}
				<div>
					<span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-[#07969E]/20 border border-[#00A3AD]/30 text-[#00A3AD] text-sm font-medium">
						⚡ Power Now — by Fig Finance
					</span>
					<h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-white mb-6">
						Powering Africa&apos;s <br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-500">
							Digital Economy.
						</span>
					</h1>
					<p className="text-lg text-teal-100/75 leading-relaxed mb-10 max-w-lg">
						We are building the infrastructure that connects digital platforms to clean energy. Enable your users to finance productive solar assets through embedded credit.
					</p>
					<div className="flex flex-wrap gap-4">
						<Link href="mailto:hello@figfinance.co">
							<button className="px-7 py-3.5 rounded-full bg-white text-[#0B353D] font-bold text-sm hover:bg-teal-50 transition-colors shadow-lg">
								Become a Partner
							</button>
						</Link>
						<Link href="#how-it-works">
							<button className="px-7 py-3.5 rounded-full border border-teal-400/50 text-teal-300 font-semibold text-sm hover:bg-teal-400/10 transition-colors">
								Learn More
							</button>
						</Link>
					</div>
				</div>

				{/* Right – Solar + Dashboard Mockup */}
				<div className="relative flex justify-center items-center">
					<div className="absolute inset-0 bg-teal-400/10 blur-[80px] rounded-full" />
					{/* Outer frame */}
					<div className="relative z-10 w-full max-w-md rounded-3xl bg-[#121619]/90 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
						{/* Solar visual top panel */}
						<div className="relative bg-gradient-to-br from-[#0B353D] to-[#0a2b31] px-6 pt-6 pb-4">
							<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent" />
							<div className="flex items-center justify-between mb-4">
								<span className="text-xs font-semibold text-teal-300 uppercase tracking-wider">Power Now Dashboard</span>
								<span className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
									<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
									Live
								</span>
							</div>
							{/* Solar grid representation */}
							<div className="grid grid-cols-4 gap-1.5 mb-4">
								{Array.from({ length: 12 }).map((_, i) => (
									<div
										key={i}
										className="aspect-square rounded-md border border-teal-500/30"
										style={{
											background: `linear-gradient(135deg, rgba(4,151,158,${0.15 + (i % 4) * 0.1}) 0%, rgba(4,151,158,0.05) 100%)`
										}}
									/>
								))}
							</div>
							<div className="flex justify-between items-center text-xs text-slate-400">
								<span className="flex items-center gap-1"><Sun className="w-3 h-3 text-amber-400" /> 4.2 kWh</span>
								<span className="flex items-center gap-1"><Battery className="w-3 h-3 text-teal-400" /> 87% charged</span>
								<span className="flex items-center gap-1"><Wifi className="w-3 h-3 text-teal-400" /> Connected</span>
							</div>
						</div>
						{/* Finance section */}
						<div className="p-5 space-y-3">
							<div className="flex justify-between items-center">
								<span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Repayment progress</span>
								<span className="text-xs text-teal-400 font-semibold">Month 4 / 12</span>
							</div>
							<div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
								<div className="h-full w-1/3 rounded-full bg-gradient-to-r from-teal-500 to-teal-300" />
							</div>
							<div className="flex gap-3">
								<div className="flex-1 rounded-2xl bg-[#1E252B] border border-white/5 p-4">
									<div className="text-xs text-slate-400 mb-1">Next deduction</div>
									<div className="text-lg font-bold text-white">₦4,500</div>
									<div className="text-xs text-slate-500 mt-0.5">from Bolt earnings</div>
								</div>
								<div className="flex-1 rounded-2xl bg-[#1E252B] border border-white/5 p-4">
									<div className="text-xs text-slate-400 mb-1">Remaining</div>
									<div className="text-lg font-bold text-teal-300">₦54,000</div>
									<div className="text-xs text-slate-500 mt-0.5">8 months left</div>
								</div>
							</div>
						</div>
					</div>
					{/* Floating badge */}
					<div className="absolute -bottom-4 -right-4 z-20 rounded-2xl bg-[#1E252B] border border-white/10 px-4 py-2.5 shadow-xl text-xs font-semibold text-white flex items-center gap-2">
						<Zap className="w-3.5 h-3.5 text-amber-400" />
						Zero upfront cost
					</div>
				</div>
			</div>
		</Container>
	</section>
)

/* ─── B. PROBLEM & SOLUTION ─── */
const ProblemSolution = () => (
	<section className="bg-[#121619] py-24">
		<Container>
			<div className="grid md:grid-cols-2 gap-14 items-center">
				{/* Left text */}
				<div>
					<p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-400 mb-4">The Challenge</p>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
						The energy challenge is a{" "}
						<span className="text-teal-400">distribution challenge.</span>
					</h2>
					<p className="text-slate-400 leading-relaxed text-base">
						Millions of economically active Africans lack access to productive energy assets because they earn irregular digital incomes and remain invisible to traditional credit systems.
					</p>
					<div className="mt-6 pt-6 border-t border-white/10">
						<p className="text-slate-300 leading-relaxed text-base font-medium">
							<span className="text-teal-300">Fig bridges this gap.</span> We enable digital platforms to become distribution channels for clean energy, allowing creators and gig workers to access solar systems through the platforms they already use to earn a living.
						</p>
					</div>
				</div>

				{/* Right glowing card */}
				<div className="relative rounded-3xl bg-[#1E252B] border border-white/10 p-8 overflow-hidden">
					{/* Glow accents */}
					<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-teal-400/60 to-transparent" />
					<div className="absolute -bottom-16 -right-16 w-56 h-56 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

					<div className="relative space-y-4">
						{[
							{ label: "Digital earners in Africa", value: "21.7M+", sub: "Informal & gig workers", icon: <Activity className="w-4 h-4 text-teal-400" /> },
							{ label: "Without reliable energy access", value: "600M", sub: "Sub-Saharan Africans", icon: <Zap className="w-4 h-4 text-teal-400" /> },
							{ label: "Addressable solar market", value: "$23B", sub: "By 2030", icon: <Sun className="w-4 h-4 text-teal-400" /> },
						].map((stat, i) => (
							<div key={i} className="flex items-center gap-5 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.04]">
								<div className="w-10 h-10 rounded-full bg-teal-500/15 flex items-center justify-center flex-shrink-0">
									{stat.icon}
								</div>
								<div>
									<div className="text-2xl font-bold text-white">{stat.value}</div>
									<div className="text-sm text-slate-400">{stat.label}</div>
									<div className="text-xs text-slate-500">{stat.sub}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</Container>
	</section>
)

/* ─── C. HOW IT WORKS ─── */
const techCards = [
	{
		Icon: Activity,
		title: "PesaScore Underwriting",
		body: "Our proprietary alternative underwriting engine analyzes behavioral and transactional signals—like earnings consistency and transaction frequency—directly within partner platforms, bypassing the need for traditional credit bureaus.",
		iconBg: "bg-teal-500/15",
		iconColor: "text-teal-400",
		glowColor: "from-teal-500/20",
	},
	{
		Icon: Zap,
		title: "Embedded Source Collection",
		body: "Repayments are integrated directly into platform payout infrastructure. Funds are collected automatically whenever users receive income, aligning financing with how digital workers actually earn.",
		iconBg: "bg-amber-500/15",
		iconColor: "text-amber-400",
		glowColor: "from-amber-500/15",
	},
	{
		Icon: Code,
		title: "Seamless API Integration",
		body: "No standalone consumer app required. Platforms integrate our credit decisioning API and SDK to offer solar BNPL directly to their users, supported by a full-visibility operations dashboard.",
		iconBg: "bg-indigo-500/15",
		iconColor: "text-indigo-400",
		glowColor: "from-indigo-500/15",
	},
]

const HowItWorks = () => (
	<section id="how-it-works" className="bg-[#121619] py-24 border-t border-white/5">
		<Container>
			<div className="max-w-2xl mx-auto text-center mb-16">
				<p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-400 mb-3">How It Works</p>
				<h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
					Infrastructure built for the{" "}
					<span className="text-teal-400">informal economy.</span>
				</h2>
			</div>

			<div className="grid md:grid-cols-3 gap-6">
				{techCards.map(({ Icon, title, body, iconBg, iconColor, glowColor }, i) => (
					<div
						key={i}
						className="relative h-full rounded-3xl bg-[#1E252B] border border-white/10 p-8 overflow-hidden group hover:border-white/20 transition-colors duration-300"
					>
						{/* Top accent glow */}
						<div className={`absolute inset-0 bg-gradient-to-b ${glowColor} to-transparent opacity-30 group-hover:opacity-60 transition-opacity duration-300`} />
						<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

						<div className="relative">
							<div className={`w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center mb-6`}>
								<Icon className={`w-6 h-6 ${iconColor}`} />
							</div>
							<h3 className="text-lg font-bold text-white mb-3">{title}</h3>
							<p className="text-slate-400 text-sm leading-relaxed">{body}</p>
						</div>
					</div>
				))}
			</div>
		</Container>
	</section>
)

/* ─── D. WHO WE SERVE ─── */
const platforms = [
	{ category: "Creator Economy", names: ["Selar", "Nestuge"] },
	{ category: "Ride-Hailing", names: ["Bolt", "Glovo"] },
	{ category: "Freelance Marketplaces", names: ["Wrkman"] },
	{ category: "E-commerce", names: ["Jumia", "Twiva"] },
]

const WhoWeServe = () => (
	<section className="bg-[#0B353D] py-24">
		<Container>
			<div className="max-w-2xl mx-auto text-center mb-14">
				<h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
					Built for platforms.{" "}
					<span className="text-teal-300">Designed for earners.</span>
				</h2>
				<p className="text-teal-100/70 text-lg leading-relaxed">
					Our primary customers are digital platforms whose users earn income through regular economic activity.
				</p>
			</div>

			<div className="flex flex-wrap justify-center gap-4">
				{platforms.map((p) =>
					p.names.map((name) => (
						<div
							key={name}
							className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#121619]/60 border border-white/10 backdrop-blur-sm hover:border-teal-400/40 hover:bg-[#121619]/80 transition-all duration-200 cursor-default"
						>
							<span className="text-xs text-teal-400 font-semibold">{p.category}</span>
							<span className="text-white/20">·</span>
							<span className="text-sm text-white font-medium">{name}</span>
						</div>
					))
				)}
			</div>

			<p className="mt-10 text-center text-sm text-teal-100/40 italic">
				And many more platforms across Nigeria, Kenya, and the wider African digital economy.
			</p>
		</Container>
	</section>
)

/* ─── E. BOTTOM CTA ─── */
const PowerNowCTA = () => (
	<section className="bg-[#121619] py-24">
		<Container>
			<div className="relative rounded-3xl bg-[#0B353D] border border-teal-700/40 p-12 md:p-16 text-center overflow-hidden">
				{/* Decorative glows */}
				<div className="pointer-events-none absolute inset-0">
					<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-teal-400/50 to-transparent" />
					<div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl" />
				</div>

				<div className="relative">
					<div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-[#07969E]/20 border border-[#00A3AD]/30 text-[#00A3AD] text-sm font-medium">
						<Zap className="w-3.5 h-3.5" />
						Power Now · Partnership Program
					</div>
					<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
						Ready to power your platform?
					</h2>
					<p className="text-teal-100/70 text-lg leading-relaxed max-w-xl mx-auto mb-10">
						Join us in expanding financial inclusion and accelerating clean energy adoption across Africa.
					</p>
					<Link href="mailto:hello@figfinance.co">
						<button className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0B4A30] text-white font-bold text-base hover:bg-[#0d5a3a] transition-colors shadow-lg shadow-black/30">
							<Zap className="w-4 h-4 text-emerald-400" />
							Partner with Fig
						</button>
					</Link>
				</div>
			</div>
		</Container>
	</section>
)

/* ─── PAGE ─── */
export default function PowerNowPage() {
	return (
		<main>
			<PowerNowHero />
			<ProblemSolution />
			<HowItWorks />
			<WhoWeServe />
			<PowerNowCTA />
		</main>
	)
}
