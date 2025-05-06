import { Container } from "@/components/Container"
import { Heading } from "@/components/Heading"

const EarlyPayTrust = () => {
	return (
		<section className="py-20 bg-[#F9FAFB]">
			<Container>
				<Heading
					className="mx-auto text-center"
					title="Built for Trust"
					subtitle={`<span>
							Secure, <span class="italic text-primary-color">Compliant,</span> Reliable.
						</span>`}
					text="We take privacy, security, and compliance seriously. Early Pay is built on microservices with encrypted storage, using OAuth 2.0 and JWT for secure authentication. All data is stored in compliance with local financial regulations."
				/>

				<div className="grid gap-4 md:grid-cols-3">
					<div className="col-span-1">
						<div className="border-[1rem] flex justify-center items-center border-[#ef3a58] rounded-full aspect-square">
							<h3 className="text-4xl font-bold tracking-wider italic text-center capitalize text-[#ef3a58]">End-to-end encryption</h3>
						</div>
					</div>
					<div className="col-span-1">
						<div className="border-[1rem] flex justify-center items-center border-[#2e2c72] rounded-full aspect-square">
							<h3 className="text-4xl font-bold tracking-wider italic text-center capitalize text-[#2e2c72]">Fraud detection via AI credit models</h3>
						</div>
					</div>
					<div className="col-span-1">
						<div className="border-[1rem] flex justify-center items-center border-[#4885c5] rounded-full aspect-square">
							<h3 className="text-4xl font-bold tracking-wider italic text-center capitalize text-[#4885c5]">Regulatory compliance for global markets</h3>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}

export { EarlyPayTrust }
