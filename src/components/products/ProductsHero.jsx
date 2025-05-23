"use client"

import { dm_sans } from "@/app/fonts"
import Image from "next/image"
import MySwiper from "../MySwiper"
import MyTypewriter from "../MyTypewriter"

const ProductsHero = () => {
	return (
		<div className="w-full md:pb-0">
			<div className="md:grid relative px-4 lg:pb-0 grid-cols-1 md:grid-cols-2 w-full md:w-full md:max-w-7xl md:min-h-screen lg:grid-cols-12 mx-auto">
				<div className="mx-auto md:pt-[40px] pr-8 lg:pb-[40px] md:text-center lg:text-start md:w-9/12 md:mx-auto lg:w-full lg:mx-0 md:col-span-2 lg:flex flex-col lg:justify-center lg:col-span-6 border-e-2">
					<h4 className="heading-4 text-primary-color mb-2 ">Trusted By 100+ Creators</h4>
					<h1 className={`heading-1`}>
						Financing for <span className="italic text-primary-color"> Creators</span> And <span className="italic text-primary-color">Influencers </span> in Africa
					</h1>
					<span className="text-[25px] font-[400] lg:flex hidden md:mt-3 text-primary-black ">
						Powering the dreams of {"    "}
						<MySwiper />
					</span>
					<span className="text-base md:h-[30px] font-[400] text-primary-black block my-8 lg:hidden  ">
						Powering the dreams of {"    "}{" "}
						<span className="text-[#050914] font-[700]">
							<MyTypewriter />
						</span>
					</span>
					<div className="md:flex gap-[20px] md:my-5   lg:mt-[10px] md:justify-center lg:justify-start   ">
						<button className={`btn-colored !rounded-[2rem] ${dm_sans.className}`}> Apply For Funding</button>
						<button className={`btn-colored !rounded-[2rem] ${dm_sans.className}`}> Watch Video</button>
					</div>
				</div>

				<div className="h-[60vh] lg:block lg:h-full w-full lg:w-full relative md:mx-auto md:mt-5 lg:mt-0 md:col-span-2 lg:col-span-6">
					<div className="absolute top-[calc(50%-5rem)] -left-16 aspect-video w-80 rounded-3xl overflow-hidden z-10 border-[10px] border-white">
						<Image
							src="/images/hero-1.jpg"
							alt="fig creators gif image"
							fill
							className="object-cover"
						/>
					</div>
					<div className="absolute top-40 left-[6rem] h-[70dvh] w-[25rem] rounded-3xl overflow-hidden z-0">
						<Image
							src="/images/hero-4.jpg"
							alt="fig creators gif image"
							fill
							className="object-cover"
						/>
					</div>
					<div className="absolute top-[calc(20%-5rem)] right-4 aspect-video w-80 rounded-3xl overflow-hidden z-10 border-[10px] border-white">
						<Image
							src="/images/hero-2.jpg"
							alt="fig creators gif image"
							fill
							className="object-cover"
						/>
					</div>
					<div className="absolute top-[calc(65%-5rem)] -right-20 h-[22rem] w-80 rounded-3xl overflow-hidden z-10 border-[10px] border-white">
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

export { ProductsHero }
