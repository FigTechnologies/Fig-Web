"use client"

import { useGSAP } from "@gsap/react"
// import { motion } from "framer-motion"
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Choose = () => {
	const containerRef = useRef(null)
	const chooseRef = useRef(null)
	const box1Ref = useRef(null)
	const box2Ref = useRef(null)
	const box3Ref = useRef(null)

	useGSAP(() => {
		// const boxes = gsap.utils.toArray(".choose .box")

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: `.choose`,
				start: `0% 0%`,
				end: `100% bottom`,
				scrub: 1.5,
				toggleActions: `play none none reverse`,
				pin: true,
				pinSpacing: false,
			},
		})

		// gsap.set(boxes, { top: 16 })
		// boxes.forEach((text, i) => {
		// 	const previous = boxes[i - 1]
		// 	if (previous) {
		// 		tl
		// 			.to(
		// 				text,
		// 				{
		// 					top: 32,
		// 					autoAlpha: 1,
		// 				},
		// 				"+=0.5",
		// 			)
		// 			.to(
		// 				previous,
		// 				{
		// 					top: 16,
		// 					autoAlpha: 0,
		// 				},
		// 				"<",
		// 			)
		// 	} else {
		// 		tl.to(
		// 			text,
		// 			{
		// 				top: 16,
		// 				autoAlpha: 1,
		// 			},
		// 			"+=0.5",
		// 		)
		// 	}
		// })
		// // Final Text
		// tl.to(
		// 	boxes[boxes.length - 1],
		// 	{
		// 		y: 100,
		// 		autoAlpha: 0,
		// 	},
		// 	"+=0.5",
		// )
		tl
			.to(box2Ref.current, {
				marginTop: `-24rem`,
				// top: `32px`,
			})
			.to(box3Ref.current, {
				// top: `64px`,
				marginTop: `-24rem`,
			})
			.to(document.querySelector(`.works`), {
				marginTop: `-24rem`,
			})
		// .to(`.choose`, {
		// 	position: `relative`,
		// })
		// gsap.utils.toArray(`.box`).forEach((box, idx) => {
		// 	ScrollTrigger.create({
		// 		trigger: box,
		// 		start: `top 50%`,
		// 		pin: true,
		// 		pinSpacing: false,
		// 		paused: true,
		// 	})
		// })
	}, [])

	return (
		<section
			className="choose relative pt-8"
			ref={chooseRef}>
			<div className="w-full px-4 max-w-7xl mx-auto flex lg:justify-center py-[50px] flex-col gap-[20px] md:gap-[0px] ">
				<div className="flex items-center justify-start w-full mx-auto">
					<h2 className="text-black heading-2">Why Choose Us</h2>
				</div>
				<div
					className="relative w-full mx-auto trigger h-[1250px]"
					ref={containerRef}>
					<div
						ref={box1Ref}
						className="w-full gap-[20px] box bg-[#2295f2] rounded-lg funding-bg relative mt-4 h-96 flex justify-center items-center p-12 mb-4 box">
						<div className="flex-1 ">
							<h4 className="heading-1 lg:mb-1 !text-white">Instant Funding </h4>
							<p className="text-[1.5rem] leading-[2] text-white">No paperwork. Just fast, easy access to the funds you need without the wait.</p>
						</div>
					</div>
					<div
						ref={box2Ref}
						className="w-full gap-[20px] box bg-[#39c277] rounded-lg art-bg relative mt-4 h-96 flex justify-center items-center p-12 mb-4 box">
						<div className="flex-1">
							<h4 className="heading-1 lg:mb-1 !text-white">Focus On The Art</h4>
							<p className="text-[1.5rem] leading-[2] text-white">Get creative. Create your best work. And leave the financial stress to us.</p>
						</div>
					</div>
					<div
						ref={box3Ref}
						className="w-full gap-[20px] box bg-[#0c1825] rounded-lg flexible-bg  relative mt-4 h-96 flex items-center p-12 box">
						<div className="w-2/3">
							<h4 className="heading-1 mb-4 !text-white">Flexible Repayment </h4>
							<p className="text-[1.5rem] leading-[2] text-white">Take your time. Create. Deliver. When your funds start rolling in, pay us back on your terms</p>
						</div>
					</div>
				</div>
			</div>
			{/* <Ripple /> */}
		</section>
	)
}

export default Choose
{
	/* <div className="flex flex-col gap-[20px] text-primary-black  lg:gap-0 lg:flex-row justify-between w-full lg:w-11/12 mx-auto  ">

<div className="lg:group transition transform duration-500 ease-in-out lg:hover:scale-[110%] ">
  <div className="bg-white text-primary-black p-[20px] w-9/12 md:w-8/12 mx-auto lg:mx-0 lg:w-[400px] rounded-[10px] flex-1 ">
    <h4 className="transition ease-in-out group-hover:scale-105 heading-4 lg:mb-1 ">
      Instant Funding{" "}
    </h4>
    <p className="group-hover:scale-105 font-[400] transition ease-in-out text-[15px] leading-[1.5em]">
      No paperwork. Just fast, easy access to the funds you need
      without the wait.
    </p>
  </div>
</div>
<div className="lg:group transition transform duration-500 ease-in-out lg:hover:scale-[110%] ">
  <div className="bg-white text-primary-black p-[20px] w-9/12 md:w-8/12 mx-auto lg:mx-0 lg:w-[400px] rounded-[10px] flex-1 ">
    <h4 className="group-hover:scale-105 transition ease-in-out font-[700] lg:mb-1 leading-[1.4em] ">
      Focus On The Art{" "}
    </h4>
    <p className="group-hover:scale-105 font-[400] transition ease-in-out text-[15px] leading-[1.5em]">
      Get creative. Create your best work. And leave the financial
      stress to us.
    </p>
  </div>
</div>
</div>
<div className="flex justify-center items-center w-9/12 lg:w-[400px] md:w-8/12 mx-auto  ">
<div className="bg-white md:group transition transform duration-500 ease-in-out md:hover:scale-[110%] text-primary-black  p-[20px] w-11/12  mx-auto lg:mx-0  rounded-[10px] flex-1 ">
  <h4 className="group-hover:scale-105 transition ease-in-out font-[700] lg:mb-1 leading-[1.4em] ">
    Flexible Repayment{" "}
  </h4>
  <p className="group-hover:scale-105 font-[400] transition ease-in-out text-[15px] leading-[1.5em]">
    Take your time. Create. Deliver. When your funds start rolling in,
    pay us back on your terms
  </p>
</div>
</div> */
}
