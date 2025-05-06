import { forwardRef } from "react"

const ScrollCard = forwardRef(function ScrollCard({ className, children }, ref) {
	return (
		<div
			ref={ref}
			className={`w-full gap-[20px] box rounded-3xl relative h-96 flex justify-center items-center p-12 mb-4 box ${className}`}>
			<div className="flex-1">{children}</div>
		</div>
	)
})

export { ScrollCard }
