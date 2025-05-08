"use client"

import { dm_sans } from "@/app/fonts"
import { expertDetails, TestimonialData } from "@/libs/data"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useRef } from "react"
import { Container } from "../Container"
import ExpertCard from "../ExpertCard"
import { Heading } from "../Heading"
import { ScrollCard } from "../ScrollCard"
import { Marquee } from "../ui/marquee"
import TestimonialCard from "./TestimonialCard"

// gsap.registerPlugin(useGSAP, ScrollTrigger)

const Experts = () => {
	// const box1Ref = useRef()
	// const box2Ref = useRef()
	// const box3Ref = useRef()
	// const box4Ref = useRef()
	// const box5Ref = useRef()
	// const box6Ref = useRef()

	// useGSAP(() => {
	// 	const tl = gsap.timeline({
	// 		scrollTrigger: {
	// 			trigger: `.experts`,
	// 			start: `0% 0%`,
	// 			end: `100% bottom`,
	// 			scrub: 1.5,
	// 			toggleActions: `play none none reverse`,
	// 			pin: true,
	// 			pinSpacing: false,
	// 		},
	// 	})

	// 	tl
	// 		.to(box2Ref.current, {
	// 			marginTop: `-22rem`,
	// 		})
	// 		.to(box3Ref.current, {
	// 			marginTop: `-20rem`,
	// 		})
	// 		.to(box4Ref.current, {
	// 			marginTop: `-20rem`,
	// 		})
	// 		.to(box5Ref.current, {
	// 			marginTop: `-20rem`,
	// 		})
	// 		.to(box6Ref.current, {
	// 			marginTop: `-20rem`,
	// 		})
	// 		.to(document.querySelector(`.experts`), {
	// 			height: `120dvh`,
	// 		})
	// }, [])

	return (
		<section className="py-20 bg-[#F9FAFB] experts">
			<Container>
				<Heading
					className="mx-auto text-center"
					title="EXPERTS IN EMBEDDED FINANCE"
					subtitle={`<span>
							Boost revenue and retention. Results you can rely on. <span class="text-primary-color">Book a demo</span>
						</span>`}
				/>

				{/* <div className="space-y-8">
					<ScrollCard
						className="bg-[#d57228]"
						ref={box1Ref}>
						<h4 className="heading-1 lg:mb-1 !text-white">Battle-tested APIs.</h4>
					</ScrollCard>
					<ScrollCard
						className="bg-[#d8395f]"
						ref={box2Ref}>
						<h4 className="heading-1 lg:mb-1 !text-white">We embed our solution into your platform with a single API.</h4>
					</ScrollCard>
					<ScrollCard
						className="bg-[#268e5f]"
						ref={box3Ref}>
						<h4 className="heading-1 lg:mb-1 !text-white">Go live in 7 days or less.</h4>
					</ScrollCard>
					<ScrollCard
						className="bg-[#3763ac]"
						ref={box4Ref}>
						<h4 className="heading-1 lg:mb-1 !text-white">Our solutions experts can launch in less than a week, depending on the level of integration required.</h4>
					</ScrollCard>
					<ScrollCard
						className="bg-[#522e8f]"
						ref={box5Ref}>
						<h4 className="heading-1 lg:mb-1 !text-white">Reduce churn by 75%.</h4>
					</ScrollCard>
					<ScrollCard
						className="bg-[#40aab1]"
						ref={box6Ref}>
						<h4 className="heading-1 lg:mb-1 !text-white">Drive loyalty with AI-powered funding that meets your users’ real financial needs.</h4>
					</ScrollCard>
				</div> */}
			</Container>

			<Marquee className="w-full lg:w-full">
				<div className="flex gap-x-8 w-full">
					{[...expertDetails, ...expertDetails].map((expert, index) => (
						<ExpertCard
							{...expert}
							key={index}
							className="w-full md:w-1/2 lg:w-1/4"
						/>
					))}
				</div>
			</Marquee>
		</section>
	)
}

export { Experts }
