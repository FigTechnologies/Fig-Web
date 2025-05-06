import { Container } from "@/components/Container"
import { Heading } from "@/components/Heading"

const EarlyPayDevFriendly = () => {
	return (
		<section className="py-20">
			<Container>
				<div className="grid md:grid-cols-2">
					<div className="">
						<Heading
							title="Developer-Friendly APIs"
							subtitle={`<span>
							Seamless <span class="italic text-primary-color">API Integration</span>
						</span>`}
						/>
						<p className="text-[1.3rem] leading-10 font-[400] text-primary-black">Get started with just a few lines of code. Our API documentation is robust and made for fast implementation—whether you’re building a marketplace, app, or platform for creators.</p>
					</div>
				</div>
			</Container>
		</section>
	)
}

export { EarlyPayDevFriendly }
