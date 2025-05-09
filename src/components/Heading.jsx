import { dm_sans } from "@/app/fonts"

const Heading = ({ className, title, subtitle, text }) => {
	return (
		<div className={`space-y-4 mb-12 max-w-3xl w-full ${dm_sans.className} ${className ? className : ``}`}>
			{title && <h5 className={`uppercase font-semibold tracking-[.5px] text-[#8e94a9] text-[14px] mb-[1.5rem]`}>{title}.</h5>}
			{subtitle && (
				<h2
					className={`text-[2.3rem] md:text-[3rem] font-bold leading-[1.1] capitalize tracking-[-.05em]`}
					dangerouslySetInnerHTML={{ __html: subtitle }}
				/>
			)}
			{text && <p className="text-[1.3rem] leading-10 font-[400] text-primary-black my-8">{text}</p>}
		</div>
	)
}

export { Heading }
