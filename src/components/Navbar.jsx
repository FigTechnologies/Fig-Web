"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePartnerModal } from "@/context/PartnerModalContext"

const Navbar = () => {
	const [showMobile, setShowMobile] = useState(false)
	const { openModal } = usePartnerModal()

	return (
		<header className="sticky top-0 z-50 bg-[#121619]/90 backdrop-blur-md border-b border-white/10">
			<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
				<Link href="/" className="h-9 w-32 relative">
					<Image
						src="/images/logo-white-2.png"
						alt="Fig"
						fill
						className="object-contain object-left"
					/>
				</Link>

				<nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-white">
					<Link href="#about" className="hover:text-slate-300 transition-colors">About</Link>
					<Link href="#how-it-works" className="hover:text-slate-300 transition-colors">How It Works</Link>
				</nav>

				<div className="hidden md:block">
					<button
						onClick={openModal}
						className="btn-primary text-sm py-2.5 px-6"
					>
						Become a Partner
					</button>
				</div>

				<button
					className="md:hidden p-2 text-white"
					onClick={() => setShowMobile(!showMobile)}
					aria-label="Toggle menu"
				>
					{showMobile ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{showMobile && (
				<div className="md:hidden bg-[#121619] border-b border-white/10 px-6 py-6 space-y-4 shadow-lg">
					<Link
						href="#about"
						className="block font-semibold text-white py-2"
						onClick={() => setShowMobile(false)}
					>
						About
					</Link>
					<Link
						href="#how-it-works"
						className="block font-semibold text-white py-2"
						onClick={() => setShowMobile(false)}
					>
						How It Works
					</Link>
					<div className="pt-2">
						<button
							onClick={() => {
								setShowMobile(false)
								openModal()
							}}
							className="btn-primary w-full py-3"
						>
							Become a Partner
						</button>
					</div>
				</div>
			)}
		</header>
	)
}

export default Navbar
