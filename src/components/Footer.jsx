import Image from "next/image"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const Footer = () => {
	return (
		<footer className="w-full md:pt-[100px] bg-primary-color pt-[40px]  ">
			<div className=" h-full  md:flex flex-col gap-[50px]  w-11/12 mx-auto">
				<div className="md:flex mb-[20px] md:gap-[40px] md:justify-between ">
					<div className="w-9/12 md:w-[35%]   mb-[30px]">
						<div className="relative w-[150px] h-[50px] object-contain">
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
							<p className="footer-paragraph mb-2">About Us</p>
							<p className="footer-paragraph mb-2">Faq</p>
							<p className="footer-paragraph">Apply For Funding</p>
						</div>
						<div className="mb-[30px] md:flex-1">
							<h4 className=" mb-3 text-white text-[16px] font-[700]">Legal</h4>
							<p className="footer-paragraph mb-2">Terms Of Service</p>
							<p className="footer-paragraph mb-2">Privacy Policy</p>
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
							<p className="footer-paragraph mb-2">Highway Heights, 15th Floor Marcus Garvey Rd, Nairobi, Kenya</p>
							{/* <p className="footer-paragraph">Disclosure</p> */}
						</div>
					</div>
				</div>
				{/* second row */}
				<div className=" flex flex-col md:flex-row justify-between">
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
						<div className="md:flex gap-1 items-center">
							<FaFacebookF className="text-gray-300/90" />
							<span className="text-gray-300/90 text-[14px] font-[400] ">Facebook</span>
						</div>
						<div className="md:flex gap-1 items-center">
							<FaXTwitter className="text-gray-300/90" />
							<span className="text-gray-300/90 text-[14px] font-[400] ">Twitter</span>
						</div>
						<div className="md:flex gap-1 items-center">
							<FaLinkedinIn className="text-gray-300/90" />
							<span className="text-gray-300/90 text-[14px] font-[400] ">LinkedIn</span>
						</div>
						<div className="md:flex gap-1 items-center">
							<FaInstagram className="text-gray-300/90" />
							<span className="text-gray-300/90 text-[14px] font-[400] ">Instagram</span>
						</div>
					</div>
				</div>
			</div>
			<div className=" w-full mt-[30px] md:mt-[20px] h-[20vh] md:h-[30vh] lg:h-[40vh] ">
				<div className="relative w-full h-full">
					<Image
						src="/images/fig-footer.png"
						alt="fig finance"
						fill
						className="hidden md:object-contain md:block"
					/>
					<Image
						src="/images/fig-footer-mobile.png"
						alt="fig finance"
						fill
						className="md:object-contain md:hidden"
					/>
				</div>
			</div>
		</footer>
	)
}

export default Footer
