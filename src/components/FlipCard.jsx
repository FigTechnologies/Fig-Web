import Image from "next/image"
import { useState } from "react"
import ReactCardFlip from "react-card-flip"

const FlipCard = ({ card }) => {
	const [isFlipped, setIsFlipped] = useState(false)

	const handleFlip = e => {
		e.preventDefault()
		setIsFlipped(!isFlipped)
	}
	const cardStyles = {
		front: {
			// border: "3px solid blue",
			width: "100%",
			height: "100%",
			background: "white",
			borderRadius: "10px",
			boxShadow: "2px 2px 25px rgba(113, 113, 122, 0.3)",
		},
		back: {
			boxShadow: "2px 2px 25px rgba(113, 113, 122, 0.3)",
			borderRadius: "10px",
			height: "100%",
		},
	}
	const containerStyles = {
		height: "100%",
	}
	const styles = {
		borderRadius: "10px 10px 0 0",
	}
	return (
		<ReactCardFlip
			isFlipped={isFlipped}
			containerStyle={containerStyles}
			cardStyles={cardStyles}
			flipDirection="horizontal">
			<div
				onClick={handleFlip}
				className="w-full flex-col flex gap-[20px] pb-5 h-full">
				<div className="flex  w-full justify-center items-center  bg-accent-light  h-[500px] relative rounded-[10px] mx-auto mb-[5px] text-primary-purple">
					<Image
						src={card.image}
						alt="img"
						fill
						className="object-cover object-[0%_25%]"
						style={styles}
					/>
				</div>
				<h4 className="heading-4 lg:mb-[px] text-primary-black px-4">{card.title}</h4>
				<div>
					<button
						className="btn-colored"
						onClick={handleFlip}>
						See More
					</button>
				</div>
			</div>

			<div
				onClick={handleFlip}
				className="h-full pb-5 flex flex-col justify-center w-11/12 mx-auto  ">
				{/* Centered Description */}
				<div className="flex-1  flex flex-col justify-center w-11/12 mx-auto items-center  ">
					<div className="flex justify-center items-center text-[100px] bg-primary-color h-[50px] w-[50px] rounded-full  text-white  mx-auto mb-5">{card.img}</div>
					<p className="text-[16px] font-[400] text-primary-black lg:text-[15px]">{card.desc}</p>
				</div>

				{/* Button at the Bottom */}
				<div className="mt-auto ">
					<button
						className="btn-colored"
						onClick={handleFlip}>
						See Less
					</button>
				</div>
			</div>
		</ReactCardFlip>
	)
}

export default FlipCard
