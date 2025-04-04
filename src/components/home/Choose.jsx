"use client"

import { useGSAP } from "@gsap/react"
// import { motion } from "framer-motion"
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Choose = () => {
	const containerRef = useRef(null)
	const box1Ref = useRef(null)
	const box2Ref = useRef(null)
	const box3Ref = useRef(null)

	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: { trigger: `.what-we-do`, start: `40% top`, end: `+=500px bottom`, scrub: 1, toggleActions: `play none none reverse`, pin: true, pinSpacing: false },
		})

		tl
			.to(box2Ref.current, {
				y: `-90%`,
			})
			.to(box3Ref.current, {
				y: `-180%`,
			})
			.to(containerRef.current, {
				height: `500px`,
			})
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
		<section className="relative choose">
			<div className="w-full px-4 max-w-7xl mx-auto flex lg:justify-center py-[50px] flex-col gap-[20px] md:gap-[0px] ">
				<div className="flex items-center justify-start w-full mx-auto">
					<h2 className="text-black heading-2">Why Choose Us</h2>
				</div>
				<div
					className="relative w-full mx-auto trigger"
					ref={containerRef}>
					<div
						ref={box1Ref}
						className="w-full gap-[20px] box bg-[#2295f2] rounded-lg choose-bg relative h-80 flex justify-center items-center p-12 mb-4">
						<div className="flex-1 ">
							<h4 className="heading-1 lg:mb-1 !text-white">Instant Funding </h4>
							<p className="text-[1.5rem] leading-[2] text-white">No paperwork. Just fast, easy access to the funds you need without the wait.</p>
						</div>
					</div>
					<div
						ref={box2Ref}
						className="w-full gap-[20px] box bg-[#39c277] rounded-lg choose-bg relative h-80 flex justify-center items-center p-12 mb-4">
						<div className="flex-1">
							<h4 className="heading-1 lg:mb-1 !text-white">Focus On The Art</h4>
							<p className="text-[1.5rem] leading-[2] text-white">Get creative. Create your best work. And leave the financial stress to us.</p>
						</div>
					</div>
					<div
						ref={box3Ref}
						className="w-full gap-[20px] box bg-[#0c1825] rounded-lg choose-bg relative h-80 flex justify-center items-center p-12">
						<div className="flex-1 ">
							<h4 className="heading-1 lg:mb-1 !text-white">Flexible Repayment </h4>
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
