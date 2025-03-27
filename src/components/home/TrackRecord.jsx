import Image from "next/image"

const TrackRecord = () => {
	return (
		<section className="w-full py-12 bg-[#F9FAFB] md:py-20 relative">
			<div className="w-full flex items-center md:max-w-7xl mx-auto lg:h-auto">
				<div className="flex flex-col  w-full gap-[30px] lg:flex-row relative">
					<div className="lg:w-[70%] ">
						<div className="w-full">
							<h2 className="heading-2 md:text-center text-primary-black lg:text-start">Our Numbers</h2>
						</div>
						<div className="flex text-primary-black mb-3 md:justify-center lg:justify-start  lg:w-11/12 ">
							<div className="w-[50%] md:w-[30%] lg:w-[50%] ">
								<h3 className="font-[7000] text-[35px] lg:text-[50px] ">₦2M+</h3>
								<p className="font-[400] w-11/12 text-[16px]"> Funded to support creators and influencers.</p>
							</div>
							<div className="w-[50%] md:w-[30%] lg:w-[50%] ">
								<h3 className="font-[7000] text-[35px] lg:text-[50px] ">15+ </h3>
								<p className="font-[400] w-11/12 text-[16px]"> Projects funded across Africa.</p>
							</div>
						</div>
						<div className="flex text-primary-black mb-3 md:justify-center lg:justify-start lg:w-11/12">
							<div className="w-[50%] md:w-[30%] lg:w-[50%] ">
								<h3 className="font-[7000] text-[35px] lg:text-[50px] ">98%</h3>
								<p className="font-[400] w-11/12 text-[16px]"> Approval rate for eligible creators.</p>
							</div>
							<div className="w-[50%] md:w-[30%] lg:w-[50%] ">
								<h3 className="font-[7000] text-[35px] lg:text-[50px] ">12+ </h3>
								<p className="font-[400] w-11/12 text-[16px]"> Creators empowered to level up their craft.</p>
							</div>
						</div>
						<div className="flex text-primary-black md:justify-center lg:justify-start mb-3">
							<div className="w-[50%] md:w-[30%] lg:w-[50%]  ">
								<h3 className="font-[7000] text-[35px] lg:text-[50px]">98%</h3>
								<p className="font-[400] w-11/12 text-[16px]"> Repayment flexibility rating from satisfied users.</p>
							</div>
						</div>
					</div>
					<div className=" w-full md:mx-auto h-[400px] lg:h-auto relative">
						<div className="h-full w-full">
							<Image
								src="/images/track-record.webp"
								fill
								alt="our track record"
								className="object-cover rounded-[8px]"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default TrackRecord
{
	/* <div className="h-full relative hidden md:block col-span-1 ">

          </div> */
}
