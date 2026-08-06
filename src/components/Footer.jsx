import Image from "next/image"
import Link from "next/link"

const Footer = () => {
	return (
		<footer className="w-full bg-[#0B353D] text-white pt-16 relative overflow-hidden">
			<div className="max-w-6xl px-6 mx-auto grid md:grid-cols-4 gap-10 relative z-10 pb-20 md:pb-32">
				<div className="md:col-span-2">
					<div className="relative w-32 h-10 mb-4">
						<Image
							src="/images/logo-white-2.png"
							alt="Fig"
							fill
							className="object-contain object-left"
						/>
					</div>
					<p className="text-teal-100/70 text-sm max-w-sm leading-relaxed">
						Embedded solar financing infrastructure connecting Africa&apos;s digital economy with clean energy.
					</p>
				</div>

				<div>
					<h4 className="text-xs font-bold uppercase tracking-wider mb-4 text-teal-200">Navigation</h4>
					<ul className="space-y-2.5 text-sm text-teal-100/80">
						<li><Link href="#company" className="hover:text-white transition-colors">Company</Link></li>
						<li><Link href="#legal" className="hover:text-white transition-colors">Legal</Link></li>
						<li><Link href="#contact" className="hover:text-white transition-colors">Contact Us</Link></li>
					</ul>
				</div>

				<div>
					<h4 className="text-xs font-bold uppercase tracking-wider mb-4 text-teal-200">Contact &amp; Legal</h4>
					<p className="text-sm text-teal-100/80 mb-2">
						Email: <a href="mailto:hello@figfinance.co" className="underline hover:text-white">hello@figfinance.co</a>
					</p>
					<p className="text-sm text-teal-100/80 mb-4">
						Highway Heights, 15th Floor<br />Marcus Garvey Rd, Nairobi, Kenya
					</p>
					<p className="text-xs text-teal-100/50">
						Regulated partners: Microfinance Bank (Nigeria) &amp; SACCO (Kenya).
					</p>
				</div>
			</div>

			<div className="relative z-10 max-w-6xl px-6 mx-auto pb-8 border-t border-white/10 text-xs text-teal-100/50 text-center md:text-left pt-6">
				&copy; {new Date().getFullYear()} Fig Technologies. All rights reserved.
			</div>

			{/* Massive Watermark */}
			<div className="absolute -bottom-[20%] left-1/2 -translate-x-1/2 text-[15rem] md:text-[25rem] font-black text-white/[0.03] select-none pointer-events-none whitespace-nowrap leading-none tracking-tighter z-0">
				Fig Finance
			</div>
		</footer>
	)
}

export default Footer
