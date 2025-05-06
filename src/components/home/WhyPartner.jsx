"use client"

import { dm_sans } from "@/app/fonts"
import { CardDetails } from "@/libs/data"
import { motion } from "framer-motion"
import { Container } from "../Container"
import FlipCard from "../FlipCard"
import { Heading } from "../Heading"

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

const WhyPartner = () => {
	return (
		<section className="py-20">
			<Container>
				<Heading
					className="mx-auto text-center"
					title="Why partner with Fig Finance?"
					subtitle={`<span>
							Empower your users. Unlock new <span class="italic text-primary-color">revenue.</span>
						</span>`}
				/>

				<div className="grid md:grid-cols-2">
					<div></div>
					<div className="space-y-4">
						<p className="text-[1.3rem] leading-10 font-[400] text-primary-black">Today’s gig workers, creators, and underserved communities expect more — instant access to funding, smart financial tools, and seamless support within the platforms they already use.</p>
						<div className="flex items-center gap-4">
							<h5 className={`font-bold tracking-widest text-[1.3rem] ${dm_sans.className}`}>At Fig Finance, we help you deliver all that and more, effortlessly.</h5>
						</div>
					</div>
				</div>

				<div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-[5rem]">
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
			</Container>
		</section>
	)
}

export { WhyPartner }
