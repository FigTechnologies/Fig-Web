import { dm_sans } from "@/app/fonts"

const Heading = ({ className, title, subtitle, text }) => {
	return (
		<div className={`space-y-4 mb-12 max-w-3xl w-full ${dm_sans.className} ${className ? className : ``}`}>
			{title && <h5 className={`uppercase font-semibold opacity-70 tracking-widest text-base ${dm_sans.className}`}>{title}.</h5>}
			{subtitle && (
				<h2
					className={`text-5xl font-bold tracking-wider capitalize`}
					dangerouslySetInnerHTML={{ __html: subtitle }}
				/>
			)}
			{text && <p className="text-[1.3rem] leading-10 font-[400] text-primary-black my-8">{text}</p>}
		</div>
	)
}

export { Heading }
