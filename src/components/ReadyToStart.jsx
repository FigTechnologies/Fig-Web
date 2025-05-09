import React from "react"
import { Container } from "./Container"

const ReadyToStart = () => {
	return (
		<section className="py-20">
			<Container>
				<div className="p-12 bg-primary-color text-white rounded-3xl">
					<div className="flex justify-between gap-4 items-center mx-auto max-w-4xl flex-col md:flex-row text-center md:text-start">
						<div>
							<h3 className="text-[2rem] font-bold leading-[1.3] mb-4 tracking-[-.05em] text-white">Ready to get started?</h3>
							<p className="text-[1rem] leading-[1.4 text-white">We’d love to learn how we can help you connect more deeply with your merchant customers.</p>
						</div>
						<div>
							<button className="btn">Get in touch</button>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}

export { ReadyToStart }
