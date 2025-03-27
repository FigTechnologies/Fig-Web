"use client"
import { motion } from "framer-motion"
import { ChevronsRight } from "lucide-react"
import Image from "next/image"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
// import "react-vertical-timeline-component/style.min.css";
// import { OpenSans } from "@/app/fonts";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { AlignCenterVertical } from "lucide-react";
export const variants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			// delay: 1,
			duration: 2,
			type: "spring",
			bounce: 0.5,
		},
	},
}

const Works = () => {
	return (
		<section className="w-full relative py-20  md:py-12 max-w-7xl mx-auto overflow-hidden">
			<h2 className={`heading-2 text-primary-black text-start md:text-center lg:text-start mx-auto`}>How It Works</h2>

			<div className="w-full lg:min-h-[100vh] mx-auto md:grid gap-[40px] items-center grid-cols-2">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{
						duration: 1,
						delay: 1,
						type: "spring",
						bounce: 0.6,
					}}
					viewport={{ once: true, amount: 0.5 }}
					className=" h-full w-full relative  hidden lg:block    lg:col-span-1">
					<Image
						alt="how we work demo"
						src="/images/workss.svg"
						fill
						className="object-cover"
					/>
				</motion.div>

				<div className=" mx-auto  lg:col-span-1 ">
					{/* timeline container */}
					<div className="">
						<div className=" flex justify-between w-11/12 md:w-full lg:md:w-9/12 mx-auto border-l-2 border-l-primary-color relative">
							<div className="w-[10%]"></div>
							<div className="flex justify-center items-center  h-[50px] w-[50px] rounded-[50%]  text-primary-purple bg-white absolute -left-[25px]">
								<motion.h3
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{
										duration: 1,
										delay: 1,
										type: "spring",
										bounce: 0.6,
									}}
									viewport={{ once: true, amount: 0.5 }}
									className="font-[700] text-[20px]">
									01
								</motion.h3>
							</div>
							<motion.div
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 1,
									delay: 1,
									type: "spring",
									bounce: 0.6,
								}}
								viewport={{ once: true, amount: 0.5 }}
								className="min-h-[100px] mb-5 pt-[10px] w-[89%] md:w-full">
								<h3 className="heading-4 mb-2">Share Your Vision</h3>
								<p className="paragraph text-primary-black">Share your idea, your project, and your dream. We’ll help you fund it.</p>
							</motion.div>
						</div>
						<div className=" flex justify-between w-11/12 md:w-full lg:md:w-9/12 mx-auto border-l-2 border-l-primary-color relative">
							<div className="w-[10%]"></div>
							<div className="flex justify-center items-center  h-[50px] w-[50px] rounded-[50%]  text-primary-purple bg-white absolute -left-[25px]">
								<motion.h3
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{
										duration: 1,
										delay: 1.5,
										type: "spring",
										bounce: 0.6,
									}}
									viewport={{ once: true, amount: 0.5 }}
									className="font-[700] text-[20px]">
									02
								</motion.h3>
							</div>
							<motion.div
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 1,
									delay: 1.5,
									type: "spring",
									bounce: 0.6,
								}}
								viewport={{ once: true, amount: 0.5 }}
								className="min-h-[100px] mb-5 pt-[10px] w-[89%]">
								<h3 className="heading-4 mb-2">Get Funded Fast</h3>
								<p className="paragraph text-primary-black">Blink and you’ll have the funds. We move quickly. Once approved, the funds are in your account and ready to go.</p>
							</motion.div>
						</div>
						<div className=" flex justify-between w-11/12 md:w-full lg:md:w-9/12 mx-auto border-l-2 border-l-primary-color relative">
							<div className="w-[10%]"></div>
							<div className="flex justify-center items-center  h-[50px] w-[50px] rounded-[50%]  text-primary-purple bg-white absolute -left-[25px]">
								<motion.h3
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{
										duration: 1,
										delay: 2,
										type: "spring",
										bounce: 0.6,
									}}
									viewport={{ once: true, amount: 0.5 }}
									className="font-[700] text-[20px]">
									03
								</motion.h3>
							</div>
							<motion.div
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 1,
									delay: 2,
									type: "spring",
									bounce: 0.6,
								}}
								viewport={{ once: true, amount: 0.5 }}
								className="min-h-[100px] mb-5 pt-[10px] w-[89%]">
								<h3 className="heading-4 mb-2">Create Your Masterpiece</h3>
								<p className="paragraph text-primary-black">Shoot. Edit. Post. Let the world see your brilliance.</p>
							</motion.div>
						</div>
						<div className=" flex justify-between w-11/12 md:w-full lg:md:w-9/12 mx-auto  relative">
							<div className="w-[10%]"></div>
							<div className="flex justify-center items-center  h-[50px] w-[50px] rounded-[50%]  text-primary-purple bg-white absolute -left-[25px]">
								<motion.h3
									initial={{ opacity: 0, y: 50 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{
										duration: 1,
										delay: 2.5,
										type: "spring",
										bounce: 0.6,
									}}
									viewport={{ once: true, amount: 0.5 }}
									className="font-[700] text-[20px]">
									04
								</motion.h3>
							</div>
							<motion.div
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 1,
									delay: 2.5,
									type: "spring",
									bounce: 0.6,
								}}
								viewport={{ once: true, amount: 0.5 }}
								className="min-h-[100px] pt-[10px] w-[89%]">
								<h3 className="heading-4 mb-2">Repay On Your Terms</h3>
								<p className="paragraph text-primary-black mb-10">Pay us back when the cash starts flowing. We work with flexible payment options.</p>
							</motion.div>
						</div>
						<div className="lg:w-[80%] md:w-full w-11/12 mx-auto ">
							<button className="btn-colored gap-2 items-center flex">
								Apply For Funding
								{/* <ChevronsRight /> */}
							</button>
						</div>
					</div>

					{/* timeline ends here  */}
				</div>
			</div>
		</section>
	)
}

export default Works
// <div className="md:grid grid-cols-1 md:grid-cols-2 gap-[20px] o  md:w-9/12 md:mx-auto lg:gap-[30px]">
//   {/* card 1 */}
//   <motion.div
//     initial={{ opacity: 0, y: 100 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ delay: 1, duration: 1, type: "spring", bounce: 0.6 }}
//     viewport={{ once: true }}
//     className="bg-[#F9FAFB] col-span-1 md:col-span-2 md:w-[50%] group p-[20px] rounded-[20px] overflow-hidden hover:bg-primary-purple transition duration-500 mb-[40px] md:mb-0"
//   >
//     <div className="transition transform hover:scale-[105%] duration-500 w-full h-full">
//       <div className="flex items-center gap-[30px]">
//         <div className=" ">
//           <Image
//             src="/images/work-1.webp"
//             alt="Share Your Vision"
//             width={500}
//             height={500}
//             className="rounded-[20px] "
//           />
//         </div>
//         <h2
//           className={`text-[40px] text-accent-light ${OpenSans.className}`}
//         >
//           01
//         </h2>
//       </div>
//       <div className="mt-[20px]">
//         <div className="flex justify-end mb-[10px]">
//           <p className="text-[13px] leading-[1.3em] text-gray-500 w-9/12 group-hover:text-white">
//             Share your idea, your project, and your dream. We’ll help
//             you fund it.
//           </p>
//         </div>
//         <h4 className="heading-4 group-hover:text-white ">
//           Share Your Vision
//         </h4>
//       </div>
//     </div>
//   </motion.div>

//   <motion.div
//     initial={{ opacity: 0, y: 100 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{  type: "spring", bounce: 0.6 }}
//     viewport={{ once: true, amount: 0.5 }}
//   className="hidden col-span-2 w-1/2 md:flex justify-end ">
//     <div className="w-[70px] h-[70px] relative">
//       <Image src="/images/Vector.png" fill className="object-contain" />
//     </div>
//   </motion.div>

//   {/* card 2 */}
//   <div className="w-full md:flex justify-end md:col-span-2 mb-[40px] md:mb-0">
//     <motion.div
//       initial="initial"
//       whileInView="animate"
//       viewport={{ once: true, amount: 0.5 }}
//       variants={variants}
//       className="bg-[#F9FAFB] rounded-[20px]   md:w-[50%] p-[20px] overflow-hidden "
//     >
//       <div className="w-full h-full transition transform hover:scale-[105%] duration-500 flex flex-col-reverse">
//         <div className="flex flex-row-reverse items-center gap-[30px]">
//           <div className=" ">
//             <Image
//               src="/images/work-2.webp"
//               alt="Share Your Vision"
//               width={500}
//               height={500}
//               className="rounded-[20px] "
//             />
//           </div>
//           <h2
//             className={`text-[40px] text-accent-light ${OpenSans.className}`}
//           >
//             02
//           </h2>
//         </div>
//         <div className="mt-[20px] flex flex-col-reverse ">
//           <div className="flex justify-end mb-[10px]">
//             <p className="text-[13px] leading-[1.3em] text-gray-500 w-9/12">
//               Blink and you’ll have the funds. We move quickly. Once
//               approved, the funds are in your account and ready to go
//             </p>
//           </div>
//           <h3 className="heading-4 mb-2 ">Get Funded Fast</h3>
//         </div>
//       </div>
//     </motion.div>
//   </div>

//   {/* card 3 */}
//   <motion.div
//      initial={{ opacity: 0, x: -100 }}
//      whileInView={{ opacity: 1, x: 0 }}
//      viewport={{ once: true, amount: 0.2 }}
//      transition={{  type: "spring", bounce: 0.6, duration: 1 }}
//     className="bg-[#F9FAFB] group p-[20px] rounded-[20px] md:col-span-2 md:w-[50%] hover:bg-primary-purple transition duration-500 ease-in-out mb-[40px] md:mb-0 "
//   >
//     <div className="transition transform hover:scale-[105%] duration-500 w-full h-full">
//       <div className="flex flex-row md:flex-row-reverse items-center gap-[30px]">
//         <div className=" ">
//           <Image
//             src="/images/work-3.webp"
//             alt="Share Your Vision"
//             width={500}
//             height={500}
//             className="rounded-[20px] "
//           />
//         </div>
//         <h2
//           className={`text-[40px] text-accent-light ${OpenSans.className}`}
//         >
//           03
//         </h2>
//       </div>
//       <div className="mt-[20px] flex flex-col-reverse ">
//         <div className="flex justify-end mb-[10px]">
//           <p className="text-[13px] leading-[1.3em] text-gray-500 w-9/12 group-hover:text-white">
//             Shoot. Edit. Post. Let the world see your brilliance.
//           </p>
//         </div>
//         <h3 className="heading-4 group-hover:text-white mb-2">
//           Create Your Masterpiece
//         </h3>
//       </div>
//     </div>
//   </motion.div>
//   <motion.div
//     initial={{ opacity: 0, y: 100 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{  type: "spring", bounce: 0.6, duration: 1 }}
//     viewport={{ once: true, amount: 0.5 }}
//   className="hidden col-span-2 w-1/2 md:flex justify-end ">
//     <div className="w-[70px] h-[70px] relative">
//       <Image src="/images/Vector.png" fill className="object-contain" />
//     </div>
//   </motion.div>

//   {/* card 4 */}
//   <div className="w-full md:flex justify-end md:col-span-2">
//     <motion.div
//       initial={{ opacity: 0, x: 100 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       viewport={{ once: true, amount: 0.2 }}
//       transition={{  type: "spring", bounce: 0.6, duration: 1 }}
//       className="bg-[#F9FAFB] group p-[20px]  md:w-[50%] rounded-[20px] hover:bg-primary-purple transition duration-500 ease-in-out "
//     >
//       <div className="transition transform hover:scale-[105%] duration-500 w-full h-full">
//         <div className="flex flex-row-reverse md:flex-row items-center gap-[30px]">
//           <div className=" ">
//             <Image
//               src="/images/work-4.webp"
//               alt="Share Your Vision"
//               width={500}
//               height={500}
//               className="rounded-[20px] "
//             />
//           </div>
//           <h2
//             className={`text-[40px] text-accent-light ${OpenSans.className}`}
//           >
//             04
//           </h2>
//         </div>
//         <div className="mt-[20px] flex flex-col-reverse ">
//           <div className="flex justify-start md:justify-end mb-[10px]">
//             <p className="text-[13px] leading-[1.3em] text-gray-500 w-9/12 group-hover:text-white">
//               Pay us back when the cash starts flowing. We work with
//               flexible payment options.
//             </p>
//           </div>
//           <h3 className="heading-4 group-hover:text-white mb-2">
//             Repay Own Your Terms
//           </h3>
//         </div>
//       </div>
//     </motion.div>
//   </div>
// </div>
