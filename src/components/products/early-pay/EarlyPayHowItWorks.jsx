"use client"

import { Container } from "@/components/Container"
import { Heading } from "@/components/Heading"
import { ScrollCard } from "@/components/ScrollCard"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const EarlyPayHowItWorks = () => {
	const box1Ref = useRef()
	const box2Ref = useRef()
	const box3Ref = useRef()
	const box4Ref = useRef()
	const box5Ref = useRef()

	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: `.how-it-works`,
				start: `0% 0%`,
				end: `100% bottom`,
				scrub: 1.5,
				toggleActions: `play none none reverse`,
				pin: true,
				pinSpacing: false,
			},
		})

		tl
			.to(box2Ref.current, {
				marginTop: `-22rem`,
			})
			.to(box3Ref.current, {
				marginTop: `-20rem`,
			})
			.to(box4Ref.current, {
				marginTop: `-20rem`,
			})
			.to(box5Ref.current, {
				marginTop: `-20rem`,
			})
		// .to(document.querySelector(`.works`), {
		// 	marginTop: `-24rem`,
		// })
	}, [])

	return (
		<section className="py-20 how-it-works">
			<Container>
				<Heading
					className="mx-auto text-center"
					title="How It Works"
					subtitle={`<span>
							Simple, <span class="italic text-primary-color">Fast,</span> Automated.
						</span>`}
				/>

				<div className="space-y-8">
					<ScrollCard
						className="bg-[#d57228]"
						ref={box1Ref}>
						<h4 className="heading-1 lg:mb-1 !text-white">Complete a Campaign</h4>
						<p className="text-[1.5rem] leading-[2] text-white">Wrap up your brand collaboration on platforms like Wowzi.</p>
					</ScrollCard>
					<ScrollCard
						className="bg-[#d8395f]"
						ref={box2Ref}>
						<h4 className="heading-1 lg:mb-1 !text-white">Payment Verified</h4>
						<p className="text-[1.5rem] leading-[2] text-white">Our API confirms payment with the marketplace in real time.</p>
					</ScrollCard>
					<ScrollCard
						className="bg-[#268e5f]"
						ref={box3Ref}>
						<h4 className="heading-1 lg:mb-1 !text-white">Loan Approved</h4>
						<p className="text-[1.5rem] leading-[2] text-white">Approval in minutes—no paperwork required.</p>
					</ScrollCard>
					<ScrollCard
						className="bg-[#3763ac]"
						ref={box4Ref}>
						<h4 className="heading-1 lg:mb-1 !text-white">Funds Released</h4>
						<p className="text-[1.5rem] leading-[2] text-white">Receive your money instantly.</p>
					</ScrollCard>
					<ScrollCard
						className="bg-[#522e8f]"
						ref={box5Ref}>
						<h4 className="heading-1 lg:mb-1 !text-white">Automated Repayment</h4>
						<p className="text-[1.5rem] leading-[2] text-white">We collect repayment once the campaign payment lands.</p>
					</ScrollCard>
				</div>
			</Container>
		</section>
	)
}

export { EarlyPayHowItWorks }
