import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { dm_sans, nunito_sans } from "./fonts"
import "./globals.css"

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`${dm_sans.className} ${nunito_sans.className} `}>
			<body className="relative w-full">
				<div className="fixed z-[999] top-0 w-full">
					<Navbar />
				</div>
				{children}
				<Footer />
			</body>
		</html>
	)
}
