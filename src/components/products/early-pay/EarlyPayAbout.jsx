import { Container } from "@/components/Container"
import { Heading } from "@/components/Heading"

const EarlyPayAbout = () => {
	return (
		<section className="py-20 bg-[#F9FAFB]">
			<Container>
				<Heading
					title="About Us"
					subtitle={`<span>
							Powering Creators with <span class="italic text-primary-color">Embedded Financing</span>
						</span>`}
				/>

				<div className="grid md:grid-cols-2">
					<div className="space-y-4">
						<p className="text-[1.3rem] leading-10 font-[400] text-primary-black">Early Pay is an embedded financing API designed for influencer marketplaces. It gives creators early access to their earnings—right after a campaign ends</p>
						<p className="text-[1.3rem] leading-10 font-[400] text-primary-black">Whether {`you're`} working with Wowzi or any partner marketplace, Early Pay integrates directly to streamline approval, disbursement, and repayment. You focus on content. We handle the cash flow.</p>
					</div>
				</div>
			</Container>
		</section>
	)
}

export { EarlyPayAbout }
