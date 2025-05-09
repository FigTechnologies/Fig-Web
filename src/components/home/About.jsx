import { dm_sans } from "@/app/fonts"
import { Container } from "../Container"
import { Heading } from "../Heading"

const About = () => {
	return (
		<section className="py-20 relative z-0">
			<Container>
				<Heading
					className="mx-auto text-center md:mx-0 md:text-start"
					title="About Us"
					subtitle={`<span>
							Rooted in Africa, Built for <span class="text-primary-color">Emerging Markets</span>
						</span>`}
				/>

				<div className="grid md:grid-cols-2">
					<div className="space-y-4">
						<p className="text-[.9rem] md:text-[1.25rem] leading-[1.6] text-primary-black">We exist to unlock the full potential of underserved workers with flexible, accessible financial services. From Lagos to Kigali to Nairobi, we’re powering the creators, gig workers, and blue- and black-collar communities driving Africa’s informal economy — and beyond.</p>
						<div className="flex items-center gap-4 mt-20">
							<h5 className={`font-bold tracking-widest text-[1rem] md:text-[1.3rem] border-s-2 ps-4 border-[#fc6956]`}>3+ businesses funded.</h5>
							<h5 className={`font-bold tracking-widest text-[1rem] md:text-[1.3rem] border-s-2 ps-4 border-[#fc6956]`}>2+ countries live and funding.</h5>
						</div>
					</div>
				</div>
			</Container>
			<div class="video-wrap">
				<video
					src="https://player.vimeo.com/progressive_redirect/playback/1007970218/rendition/720p/file.mp4?loc=external&amp;log_user=0&amp;signature=9eb2320cc14745ba9525d1deef375625678ea753667c0d29a6f4bdba0363b9a7"
					autoplay="true"
					loop=""
					playsinline="true"
					video-cursor="true"
					muted=""
					border="none"
					style={{ objectFit: `scale-down` }}
					class="globe-video"></video>
				<div class="globe-video overlay bg-0"></div>
				<div class="w-embed"></div>
			</div>
		</section>
	)
}

export { About }
