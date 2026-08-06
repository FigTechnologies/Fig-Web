import React from "react"
import Link from "next/link"
import { Container } from "./Container"

const ReadyToStart = () => {
	return (
		<section className="py-24 bg-[#121619]">
			<Container>
				<div className="max-w-5xl mx-auto bg-[#0B353D] p-12 md:p-20 rounded-[3rem] text-center shadow-2xl border border-white/5 relative overflow-hidden">
					{/* Abstract glowing background sphere */}
					<div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/10 blur-[100px] rounded-full pointer-events-none" />
					
					<div className="relative z-10">
						<h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
							Ready to get started?
						</h2>
						<p className="text-teal-50 max-w-xl mx-auto mb-10 text-lg leading-relaxed opacity-90">
							Talk to our team to learn how your users in Nigeria or Kenya can access productive assets.
						</p>
						<Link href="mailto:[TODO: confirm contact email]">
							<button className="bg-white text-[#0B353D] hover:bg-gray-100 font-bold px-10 py-4 rounded-full transition-all duration-300 active:scale-95 shadow-lg inline-flex items-center justify-center text-center text-base hover:shadow-xl">
								Contact Sales
							</button>
						</Link>
					</div>
				</div>
			</Container>
		</section>
	)
}

export { ReadyToStart }
