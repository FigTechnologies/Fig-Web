import { merriweather } from "@/app/fonts"
import Image from "next/image"

const style = {
	boxShadow: "4px 4px 4px 4px #6A095814",
	//   backgroundColor: "rgba(252, 239, 239, 0.8)",
}
const ExpertCard = ({ className, image, title }) => {
	return (
		<div
			style={style}
			className={`border overflow-hidden border-[#3A4262] rounded-[20px] text-[#F1F2F8] ${className}`}>
			<div className="flex w-full justify-center items-center bg-accent-light h-[500px] relative">
				<Image
					src={image}
					alt="img"
					fill
					className="object-cover w-full h-full"
				/>
			</div>
			<div className="p-4 bg-primary-color text-white h-full text-center">
				<h5 className={`font-semibold tracking-[.5px] text-[1.5rem]`}>{title}</h5>
			</div>
		</div>
	)
}

export default ExpertCard
