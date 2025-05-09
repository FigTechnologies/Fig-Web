"use client"

import { dm_sans } from "@/app/fonts"
import { CardDetails } from "@/libs/data"
import { motion } from "framer-motion"
import { Container } from "../Container"
import FlipCard from "../FlipCard"
import { Heading } from "../Heading"

// const variants = {
// 	initial: {
// 		opacity: 0,
// 		y: 30,
// 	},
// 	animate: index => ({
// 		opacity: 1,
// 		y: 0,
// 		transition: {
// 			delay: 0.2 * index,
// 			type: "spring",
// 			stiffness: 100,
// 			damping: 10,
// 			bounce: 0.25,
// 			duration: 0.8,
// 			ease: "easeInOut",
// 		},
// 	}),
// }

const WhyPartner = () => {
	return (
		<section className="py-20">
			<Container>
				<div className="p-8 md:p-20 bg-primary-color text-white rounded-3xl">
					<div className="grid md:grid-cols-2 items-center">
						<div>
							<h5 className={`font-semibold tracking-[.5px] text-[14px] mb-[1.5rem]`}>Why partner with Fig Finance?</h5>
							<Heading subtitle={`<span class="text-white">Empower your users. Unlock new revenue</span>`} />
							<p className="text-[1rem] mb-4 leading-[1.4] text-white">Today’s gig workers, creators, and underserved communities expect more — instant access to funding, smart financial tools, and seamless support within the platforms they already use.</p>
							<p className="text-[1rem] mb-4 leading-[1.4] text-white">At Fig Finance, we help you deliver all that and more, effortlessly.</p>
						</div>
						<div className="md:border-s md:border-dotted md:border-white space-y-4 md:px-8">
							<div>
								<h5 className={`font-semibold tracking-[.5px] text-[1.5rem] mb-[1rem]`}>Fast access, zero friction.</h5>
								<p className="text-[1rem] mb-4 leading-[1.4] text-white">Our platform uses our proprietary credit scoring algorithm and AI to assess users in real time and disburse funds, often in under 24 hours. That’s why underserved workers keep coming back.</p>
							</div>
							<div>
								<hr className="w-full border-t border-white" />
							</div>
							<div>
								<h5 className={`font-semibold tracking-[.5px] text-[1.5rem] mb-[1rem]`}>Fast access, zero friction.</h5>
								<p className="text-[1rem] mb-4 leading-[1.4] text-white">Our platform uses our proprietary credit scoring algorithm and AI to assess users in real time and disburse funds, often in under 24 hours. That’s why underserved workers keep coming back.</p>
							</div>
							<div>
								<hr className="w-full border-t border-white" />
							</div>
							<div>
								<h5 className={`font-semibold tracking-[.5px] text-[1.5rem] mb-[1rem]`}>Fast access, zero friction.</h5>
								<p className="text-[1rem] mb-4 leading-[1.4] text-white">Our platform uses our proprietary credit scoring algorithm and AI to assess users in real time and disburse funds, often in under 24 hours. That’s why underserved workers keep coming back.</p>
							</div>
						</div>
					</div>
				</div>

				<div className="grid md:grid-cols-2">
					<div></div>
					<div className="space-y-4"></div>
				</div>

				{/* <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-[5rem]">
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
				</div> */}
			</Container>
		</section>
	)
}

export { WhyPartner }
