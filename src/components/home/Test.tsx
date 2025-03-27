"use client"

import { useGSAP } from "@gsap/react"
import { motion } from "framer-motion"
import { gsap } from "gsap/dist/gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { ThumbsUp } from "lucide-react"
import Image from "next/image"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Choose = () => {
	useGSAP(() => {
		gsap.utils.toArray(`.box`).forEach((box, idx) => {
			ScrollTrigger.create({
				trigger: box,
				start: `top 50%`,
				pin: true,
				pinSpacing: false,
			})
		})
	}, [])

	return (
		<section className="choose-bg relative">
			<div className="w-11/12 mx-auto flex lg:justify-center py-[50px] flex-col gap-[20px] md:gap-[0px] ">
				<div className="flex  justify-start  w-full mx-auto items-center">
					<h2 className="heading-2 text-black">Why Choose Us</h2>
				</div>
				<div className="w-full mx-auto relative trigger h-screen">
					<div className="w-full gap-[20px] box bg-primary-color rounded-lg choose-bg relative h-80 flex justify-center items-center p-12">
						{/* <div className="py-[6px]">
							<Image
								src="/images/thumbs.svg"
								alt=""
								className="w-[10px] h-[10px] rounded-[50%]"
								width={10}
								height={10}
							/>
						</div> */}
						<div className=" flex-1 ">
							<h4 className="heading-1 lg:mb-1 !text-white">Instant Funding </h4>
							<p className="text-[1.5rem] leading-[2] text-white">No paperwork. Just fast, easy access to the funds you need without the wait.</p>
						</div>
					</div>
					<div className="w-full gap-[20px] box bg-primary-color rounded-lg choose-bg relative h-80 flex justify-center items-center p-12">
						<div className="  py-[6px] ">
							<Image
								src="/images/thumbs.svg"
								alt=""
								className="w-[10px] h-[10px] rounded-[50%]"
								width={10}
								height={10}
							/>
						</div>
						<div className=" flex-1 ">
							<h4 className=" heading-4 lg:mb-1 text-white">Focus On The Art</h4>
							<p className=" paragraph leading-[1.5em] text-white">Get creative. Create your best work. And leave the financial stress to us.</p>
						</div>
					</div>
					<div className="w-full gap-[20px] box bg-primary-color rounded-lg choose-bg relative h-80 flex justify-center items-center p-12">
						<div className="  py-[6px] ">
							<Image
								src="/images/thumbs.svg"
								alt=""
								className="w-[10px] h-[10px] rounded-[50%]"
								width={10}
								height={10}
							/>
						</div>
						<div className=" flex-1 ">
							<h4 className=" heading-4 lg:mb-1 text-white">Flexible Repayment </h4>
							<p className=" paragraph leading-[1.5em] text-white">Take your time. Create. Deliver. When your funds start rolling in, pay us back on your terms</p>
						</div>
					</div>
				</div>
			</div>
			{/* <Ripple /> */}
		</section>
	)
}

export default Choose
{
	/* <div className="flex flex-col gap-[20px] text-primary-black  lg:gap-0 lg:flex-row justify-between w-full lg:w-11/12 mx-auto  ">

<div className="lg:group transition transform duration-500 ease-in-out lg:hover:scale-[110%] ">
  <div className="bg-white text-primary-black p-[20px] w-9/12 md:w-8/12 mx-auto lg:mx-0 lg:w-[400px] rounded-[10px] flex-1 ">
    <h4 className="group-hover:scale-105 transition ease-in-out heading-4 lg:mb-1 ">
      Instant Funding{" "}
    </h4>
    <p className="group-hover:scale-105 font-[400] transition ease-in-out text-[15px] leading-[1.5em]">
      No paperwork. Just fast, easy access to the funds you need
      without the wait.
    </p>
  </div>
</div>
<div className="lg:group transition transform duration-500 ease-in-out lg:hover:scale-[110%] ">
  <div className="bg-white text-primary-black p-[20px] w-9/12 md:w-8/12 mx-auto lg:mx-0 lg:w-[400px] rounded-[10px] flex-1 ">
    <h4 className="group-hover:scale-105 transition ease-in-out font-[700] lg:mb-1 leading-[1.4em] ">
      Focus On The Art{" "}
    </h4>
    <p className="group-hover:scale-105 font-[400] transition ease-in-out text-[15px] leading-[1.5em]">
      Get creative. Create your best work. And leave the financial
      stress to us.
    </p>
  </div>
</div>
</div>
<div className="flex justify-center items-center w-9/12 lg:w-[400px] md:w-8/12 mx-auto  ">
<div className="bg-white md:group transition transform duration-500 ease-in-out md:hover:scale-[110%] text-primary-black  p-[20px] w-11/12  mx-auto lg:mx-0  rounded-[10px] flex-1 ">
  <h4 className="group-hover:scale-105 transition ease-in-out font-[700] lg:mb-1 leading-[1.4em] ">
    Flexible Repayment{" "}
  </h4>
  <p className="group-hover:scale-105 font-[400] transition ease-in-out text-[15px] leading-[1.5em]">
    Take your time. Create. Deliver. When your funds start rolling in,
    pay us back on your terms
  </p>
</div>
</div> */
}
