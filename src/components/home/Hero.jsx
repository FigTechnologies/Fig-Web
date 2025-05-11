"use client"

import { dm_sans } from "@/app/fonts"
import Image from "next/image"
import Link from "next/link"
import MySwiper from "../MySwiper"
import MyTypewriter from "../MyTypewriter"

const Hero = () => {
	return (
		<div className="w-full md:pb-0">
			<div className="relative w-full grid-cols-1 px-4 mx-auto md:grid lg:pb-0 md:grid-cols-2 md:w-full md:max-w-7xl md:min-h-screen lg:grid-cols-12">
				<div className="mx-auto pt-[7rem] text-center pr-8 pb-[40px] md:text-start md:w-9/12 md:mx-auto lg:w-full lg:mx-0 md:col-span-2 lg:flex flex-col lg:justify-center lg:col-span-6">
					{/* <h4 className="mb-2 heading-4 text-primary-color ">Trusted By 100+ Creators</h4> */}
					<h1 className="text-[2.4rem] md:text-[3.4rem] mb-4 leading-[1.5] md:leading-[1.3] font-inter font-semibold">
						<span className="text-primary-color">AI-powered financing,</span> integrated directly into your platform.
					</h1>
					<span className="text-[1.25rem] leading-[1.6] my-8 text-primary-black">
						Our embedded finance solutions can be live on your platform in less than a week
						{/* <MySwiper /> */}
					</span>
					{/* <span className="text-base md:h-[30px] font-[400] text-primary-black block my-8 lg:hidden  ">
						Powering the dreams of {"    "}{" "}
						<span className="text-[#050914] font-[700]">
							<MyTypewriter />
						</span>
					</span> */}
					<div className="md:flex gap-[20px] mt-4 md:my-5 lg:mt-[10px] md:justify-center lg:justify-start   ">
						<Link href="mailto:jp@figfinance.com">
							<button className={`btn-colored ${dm_sans.className}`}>Contact Sales</button>
						</Link>
					</div>
				</div>

				<div className="h-[80dvh] md:h-[60dvh] lg:h-full w-full lg:w-full relative md:mx-auto md:mt-5 lg:mt-0 md:col-span-2 lg:col-span-6">
					<div className="absolute top-[35%] md:top-[calc(50%-5rem)] left-[.5rem] md:left-4 aspect-video w-[15rem] md:w-80 rounded-3xl overflow-hidden z-10 border-[5px] md:border-[10px] border-white hover:scale-105 cursor-pointer transition-all ease-in-out duration-300">
						<Image
							src="/images/hero-1.jpg"
							alt="fig creators gif image"
							fill
							className="object-cover"
						/>
					</div>
					<div className="absolute top-0 mt:top-40 left-[1.5rem] md:left-[6rem] h-[70dvh] w-[25rem] rounded-3xl overflow-hidden z-0">
						<Image
							src="/images/hero-4.jpg"
							alt="fig creators gif image"
							fill
							className="object-cover"
						/>
					</div>
					<div className="absolute -top-4 md:top-[calc(20%-5rem)] -right-[.5rem] md:right-4 aspect-video w-[15rem] md:w-80 rounded-3xl overflow-hidden z-10 border-[5px] md:border-[10px] border-white hover:scale-105 cursor-pointer transition-all ease-in-out duration-300">
						<Image
							src="/images/hero-2.jpg"
							alt="fig creators gif image"
							fill
							className="object-cover"
						/>
					</div>
					<div className="absolute top-[calc(65%-5rem)] -right-[.5rem] md:-right-20 h-[22rem] w-[15rem] md:w-80 rounded-3xl overflow-hidden z-10 border-[5px] md:border-[10px] border-white hover:scale-105 cursor-pointer transition-all ease-in-out duration-300">
						<Image
							src="/images/hero-3.jpg"
							alt="fig creators gif image"
							fill
							className="object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
