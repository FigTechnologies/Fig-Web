import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { Inter } from "next/font/google"
import { dm_sans, nunito_sans } from "./fonts"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`${inter.className}`}>
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
