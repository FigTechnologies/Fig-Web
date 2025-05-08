import { dm_sans } from "@/app/fonts"
import Image from "next/image"

const EarlyPayHero = () => {
	return (
		<div className="w-full md:pb-0 hero-bg">
			<div className="relative w-full grid-cols-1 px-4 mx-auto md:grid lg:pb-0 md:grid-cols-2 md:w-full md:max-w-7xl md:min-h-screen lg:grid-cols-12">
				<div className="mx-auto md:pt-[40px] px-8 lg:pb-[40px] md:text-center lg:text-start md:w-9/12 md:mx-auto lg:w-full lg:mx-0 md:col-span-2 lg:flex flex-col lg:justify-center lg:col-span-6 border-e-2 border-s-2">
					{/* <h4 className="mb-2 heading-4 text-primary-color ">Trusted By 100+ Creators</h4> */}
					<h1 className={`heading-1`}>
						<span className="italic text-primary-color">Early Pay:</span> Instant Financing for Creators
					</h1>
					<span className="text-[1.3rem] leading-10 font-[400] text-primary-black my-8">Unlock earnings the moment your campaign ends. Early Pay empowers creators with instant access to funds—fully integrated into your favorite influencer marketplaces.</span>
					<div className="md:flex gap-[20px] md:my-5   lg:mt-[10px] md:justify-center lg:justify-start">
						<button className={`btn-colored !rounded-[2rem] ${dm_sans.className}`}>Get Early Pay</button>
						<button className={`btn !rounded-[2rem] ${dm_sans.className}`}>Book a Demo</button>
					</div>
				</div>
				{/*
				<div className="h-[60vh] lg:block lg:h-full w-full lg:w-full relative md:mx-auto md:mt-5 lg:mt-0 md:col-span-2 lg:col-span-6">
					<div className="absolute top-[calc(50%-5rem)] left-4 aspect-video w-80 rounded-3xl overflow-hidden z-10 border-[10px] border-white hover:scale-105 cursor-pointer transition-all ease-in-out duration-300">
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
					<div className="absolute top-[calc(20%-5rem)] right-4 aspect-video w-80 rounded-3xl overflow-hidden z-10 border-[10px] border-white hover:scale-105 cursor-pointer transition-all ease-in-out duration-300">
						<Image
							src="/images/hero-2.jpg"
							alt="fig creators gif image"
							fill
							className="object-cover"
						/>
					</div>
					<div className="absolute top-[calc(65%-5rem)] -right-20 h-[22rem] w-80 rounded-3xl overflow-hidden z-10 border-[10px] border-white hover:scale-105 cursor-pointer transition-all ease-in-out duration-300">
						<Image
							src="/images/hero-3.jpg"
							alt="fig creators gif image"
							fill
							className="object-cover"
						/>
					</div>
				</div> */}
			</div>
		</div>
	)
}

export { EarlyPayHero }
