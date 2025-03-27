"use client"

import { dm_sans, poppins } from "@/app/fonts"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const [showDropdown, setSHowDropdown] = useState(false)
	const ref = useRef(null)

	const toggleDropdown = () => {
		setSHowDropdown(!showDropdown)
	}

	const handleScroll = () => {
		setIsScrolled(() => window.scrollY > 0)
	}

	// listen for  clicks outside of the menu dropdown and close the menu
	useEffect(() => {
		const handleClickOutside = e => {
			if (ref && !ref.current.contains(e.target)) {
				setSHowDropdown(false)
			}
		}
		document.addEventListener("mousedown", handleClickOutside)

		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [])

	// change state if the page is scrolled
	useEffect(() => {
		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [isScrolled])

	return (
		<nav className={`${isScrolled ? "bg-primary-color" : "bg-transparent"} sticky top-0  h-[70px]  lg:h-auto lg:py-[5px]   transition-all duration-300 `}>
			<div className={`flex justify-between mx-auto w-full px-8 h-full relative items-center ${isScrolled ? " text-white" : "text-primary-color"}`}>
				<AnimatePresence mode="wait">
					{isScrolled ? (
						<motion.div
							key="logo-white"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 30 }}
							transition={{ duration: 0.2, ease: "easeInOut" }}
							className="h-[70px] w-[170px]  relative">
							<Image
								src="/images/logo-white-2.png"
								alt="fig finance logo"
								fill
								className="object-contain"
							/>
						</motion.div>
					) : (
						<motion.div
							key="logo-dark"
							initial={{ opacity: 0, y: -50 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -50 }}
							transition={{ duration: 0.2, ease: "easeInOut" }}
							className="h-[70px] w-[170px] relative">
							<Image
								src="/images/logo.png"
								alt="fig finance logo"
								fill
								className="object-contain"
							/>
						</motion.div>
					)}
				</AnimatePresence>

				<div className={`lg:flex gap-[20px] hidden  text-[15px] font-[600] ${dm_sans.className} `}>
					<Link href="#">Products</Link>
					<Link href="#">Use Cases</Link>
					<Link href="#">Developers</Link>
					<Link href="#">Company</Link>
				</div>
				<div className="hidden lg:block">
					<button className={`text-[15px] font-[700] ${isScrolled ? "btn" : "btn-colored"}`}>Contact Sales</button>
				</div>

				{/* hamburger menu for mobile  */}
				<div
					ref={ref}
					className="lg:hidden "
					onClick={toggleDropdown}>
					{showDropdown ? <X /> : <Menu />}
				</div>
				{/* {showDropdown && (
          <div className="lg:hidden absolute top-[70px] w-full h-[300px] z-[999] bg-dark-gray ">
            <ul className=" space-y-3 text-black">
              <li className="">
                <Link href="#" className="w-full h-full">
                  About
                </Link>
              </li>
              <li className="">
                <Link href="#" className="w-full h-full">
                  Services
                </Link>
              </li>
            </ul>
          </div>
        )} */}
			</div>
		</nav>
	)
}

export default Navbar
