import Image from "next/image"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const Footer = () => {
	return (
		<footer className="w-full md:pt-[100px] bg-primary-color pt-[40px]">
			<div className="h-full md:flex flex-col gap-[50px] w-full max-w-7xl px-4 mx-auto">
				<div className="md:flex mb-[20px] md:gap-[40px] md:justify-between ">
					<div className="w-9/12 md:w-[35%]  mb-[30px]">
						<div className="relative w-[250px] h-[100px] object-contain">
							<Image
								src="/images/logo-white-2.png"
								alt="logo for footer"
								fill
								className="object-contain"
							/>
						</div>
						<p className="footer-paragraph md:w-[80%] lg:w-[90%]">Your creativity knows no boundary. Neither should the resources to bring it to life.</p>
						<div className="flex  mt-[20px] md:w-[50%] justify-between md:gap-[20px]">
							<p className="footer-paragraph">Apply</p>
							<p className="footer-paragraph">Get Funded</p>
							<p className="footer-paragraph">Repay</p>
						</div>
					</div>
					<div className="md:flex w-full md:w-1/2 lg:justify-start  justify-between  lg:gap-[50px] ">
						<div className="mb-[30px] md:flex-1">
							<h4 className=" mb-3 text-white text-[16px] font-[700] ">Company</h4>
							<p className="mb-2 footer-paragraph">About Us</p>
							<p className="mb-2 footer-paragraph">Faq</p>
							<p className="footer-paragraph">Apply For Funding</p>
						</div>
						<div className="mb-[30px] md:flex-1">
							<h4 className=" mb-3 text-white text-[16px] font-[700]">Legal</h4>
							<p className="mb-2 footer-paragraph">Terms Of Service</p>
							<p className="mb-2 footer-paragraph">Privacy Policy</p>
							<p className="footer-paragraph">Disclosure</p>
						</div>
						<div className="mb-[30px] md:flex-1">
							<h4 className=" mb-3 text-white text-[16px] font-[700]">Contact Us</h4>
							<p className="mb-2">
								{" "}
								<a
									className="footer-paragraph"
									href="mailto:hello@figfinance.co">
									hello@figfinance.co
								</a>
							</p>
							<p className="mb-2 footer-paragraph">Highway Heights, 15th Floor Marcus Garvey Rd, Nairobi, Kenya</p>
							{/* <p className="footer-paragraph">Disclosure</p> */}
						</div>
					</div>
				</div>
				{/* second row */}
				<div className="flex flex-col justify-between  md:flex-row">
					<div className=" mb-[30px] md:w-[50%] ">
						<p className="text-gray-300/90   text-center md:text-start text-[14px] font-[400] leading-[1.5em]">@2025 Fig Technologies. All Right Reserved</p>
					</div>

					<div className="flex justify-evenly md:hidden md:justify-end md:gap-[20px] mb-[30px] md:w-[50%]">
						<FaFacebookF className="text-gray-300/90" />

						<FaXTwitter className="text-gray-300/90" />
						<FaLinkedinIn className="text-gray-300/90" />
						<FaInstagram className="text-gray-300/90" />
					</div>

					<div className=" hidden md:flex justify-evenly md:justify-end md:gap-[20px] mb-[30px] md:w-[50%]">
						<div className="items-center gap-1 md:flex">
							<FaFacebookF className="text-gray-300/90" />
							<span className="text-gray-300/90 text-[14px] font-[400] ">Facebook</span>
						</div>
						<div className="items-center gap-1 md:flex">
							<FaXTwitter className="text-gray-300/90" />
							<span className="text-gray-300/90 text-[14px] font-[400] ">Twitter</span>
						</div>
						<div className="items-center gap-1 md:flex">
							<FaLinkedinIn className="text-gray-300/90" />
							<span className="text-gray-300/90 text-[14px] font-[400] ">LinkedIn</span>
						</div>
						<div className="items-center gap-1 md:flex">
							<FaInstagram className="text-gray-300/90" />
							<span className="text-gray-300/90 text-[14px] font-[400] ">Instagram</span>
						</div>
					</div>
				</div>
			</div>
			<div className=" w-full mt-[10px] md:mt-[5px] h-[20vh] md:h-[30vh] lg:h-[40vh] ">
				<div className="relative w-full h-full overflow-hidden">
					<Image
						src="/images/fig-footer.svg"
						alt="fig finance"
						fill
						className="block object-cover"
					/>
					{/* <Image
						src="/images/fig-footer-mobile.png"
						alt="fig finance"
						fill
						className="md:object-contain md:hidden"
					/> */}
				</div>
			</div>
		</footer>
	)
}

export default Footer
