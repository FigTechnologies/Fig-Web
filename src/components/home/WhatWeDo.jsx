"use client"

import { motion } from "framer-motion"

import { CardDetails } from "@/libs/data"
import { ChevronsRight } from "lucide-react"
import Image from "next/image"
import FlipCard from "../FlipCard"

const variants = {
	initial: {
		opacity: 0,
		y: 30,
	},
	animate: index => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.2 * index,
			type: "spring",
			stiffness: 100,
			damping: 10,
			bounce: 0.25,
			duration: 0.8,
			ease: "easeInOut",
		},
	}),
}

const WhatWeDo = () => {
	return (
		<section className="w-full section">
			<div className=" lg:max-w-7xl lg:w-full w-11/12 lg:py-20  py-[0px] mx-auto ">
				<div className=" h-full lg:flex items-center ">
					<div className="py-[50px] lg:py-0 w-full">
						<h2 className="heading-2 text-start text-primary-black mb-12">What We Do</h2>

						<div className="w-full  grid md:grid-cols-2 lg:grid-cols-3  gap-12 mt-[30px] mx-auto ">
							{CardDetails.map(card => (
								<motion.div
									variants={variants}
									initial="initial"
									whileInView="animate"
									whileHover={{
										scale: 1.02,
									}}
									custom={card.id}
									viewport={{
										once: true,
										amount: 0.25,
									}}
									key={card.id}
									className="w-full mb-5 md:w-full h-[400px] md:col-span-1 mx-auto text-center rounded-[20px]   ">
									<FlipCard card={card} />
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default WhatWeDo
