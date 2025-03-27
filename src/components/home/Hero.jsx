"use client"
import { ChevronsRight } from "lucide-react"

import { dm_sans } from "@/app/fonts"
import Image from "next/image"
import MySwiper from "../MySwiper"
import MyTypewriter from "../MyTypewriter"

const Hero = () => {
	return (
		<div className="w-full  md:pb-0 hero-bg">
			<div className="md:grid  relative  lg:pb-0 pt-[100px] md:pt-[120px] grid-cols-1 md:grid-cols-2 w-full md:w-full md:max-w-7xl min-h-screen lg:grid-cols-12 mx-auto">
				<div className="mx-auto md:pt-[40px] lg:pb-[40px] md:text-center lg:text-start md:w-9/12 md:mx-auto lg:w-full lg:mx-0 md:col-span-2 lg:flex flex-col lg:justify-center lg:col-span-7">
					<h4 className="heading-4   text-primary-color mb-2 ">Trusted By 100+ Creators</h4>
					<h1 className={`heading-1`}>
						Financing for <span className="italic text-primary-color"> Creators</span> And <span className="italic text-primary-color">Influencers </span> in Africa
					</h1>
					<span className="text-[25px] font-[400] lg:flex hidden md:mt-3 text-primary-black ">
						Powering the dreams of {"    "}
						<MySwiper />
					</span>
					<span className="text-[20px] md:h-[30px] font-[400] text-primary-black block h-[40px] mb-[20px] md:mb-0 mt-3 lg:hidden  ">
						Powering the dreams of {"    "}{" "}
						<span className="text-[#050914] font-[700]">
							<MyTypewriter />
						</span>
					</span>
					<div className="md:flex gap-[20px] md:my-5   lg:mt-[10px] md:justify-center lg:justify-start   ">
						<button className={`btn-colored ${dm_sans.className}`}> Apply For Funding</button>
					</div>
				</div>

				<div className="h-[60vh] lg:h-full w-full lg:w-full md:mx-auto md:mt-5 lg:mt-0 md:col-span-2 lg:col-span-5 absolute top-0 right-0">
					<div className="h-full w-full relative ">
						<Image
							src="/images/big-hero.gif"
							alt="fig creators gif image"
							fill
							className="object-cover  lg:hidden"
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
