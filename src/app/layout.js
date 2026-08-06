import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import "./globals.css"

export const metadata = {
	title: "Fig — Embedded Solar Financing Infrastructure for Africa's Digital Platforms",
	description:
		"Fig connects Africa's digital economy with its clean energy economy. We provide credit decisioning infrastructure (PesaScore) that digital platforms embed to let their users finance solar assets — with repayments collected automatically from platform payouts.",
	keywords: [
		"embedded finance Africa",
		"solar financing Africa",
		"clean energy credit",
		"PesaScore",
		"digital platform financing",
		"Nigeria Kenya fintech",
		"B2B credit infrastructure",
	],
	openGraph: {
		title: "Fig — Embedded Solar Financing Infrastructure",
		description:
			"Infrastructure for digital platforms to embed solar financing across Africa. Partner with Fig to give your users access to clean energy.",
		url: "https://figfinance.co",
		siteName: "Fig",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Fig — Embedded Solar Financing Infrastructure",
		description:
			"Fig connects Africa's digital economy with its clean energy economy through embedded credit infrastructure.",
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="relative w-full antialiased text-slate-300 bg-[#121619]">
				<div className="fixed z-[999] top-0 w-full">
					<Navbar />
				</div>
				{children}
				<Footer />
			</body>
		</html>
	)
}
