"use client"

import { Container } from "../Container"

const About = () => {
	return (
		<section id="about" className="py-24 bg-[#121619] border-y border-white/5">
			<Container>
				<div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 items-center justify-between">
					{/* Text Section */}
					<div className="md:w-1/2">
						<h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
							Rooted In Africa, Built For <span className="text-teal-400">Emerging Markets</span>
						</h2>
						<p className="text-slate-300 text-lg leading-relaxed">
							We exist to unlock the full potential of underserved workers by providing seamless access to productive clean energy assets. Digital platforms already have the trust and payment flows to solve this—they just need the credit infrastructure.
						</p>
					</div>

					{/* Stats Section */}
					<div className="md:w-1/2 flex flex-col sm:flex-row gap-12 sm:gap-16 justify-center">
						<div className="text-center sm:text-left">
							<div className="text-sm text-slate-400 font-semibold mb-2 uppercase tracking-wider">Trusted by</div>
							<div className="flex items-baseline gap-2 justify-center sm:justify-start">
								<span className="text-5xl md:text-6xl font-bold text-white">3+</span>
								<span className="text-lg text-teal-400 font-medium">businesses<br/>funded</span>
							</div>
						</div>
						<div className="text-center sm:text-left">
							<div className="text-sm text-slate-400 font-semibold mb-2 uppercase tracking-wider">Operating in</div>
							<div className="flex items-baseline gap-2 justify-center sm:justify-start">
								<span className="text-5xl md:text-6xl font-bold text-white">2+</span>
								<span className="text-lg text-teal-400 font-medium">countries<br/>live</span>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}

export { About }
