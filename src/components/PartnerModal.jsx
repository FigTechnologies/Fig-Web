"use client"

import { useState } from "react"
import { X, CheckCircle2, Building2, Send, ArrowRight } from "lucide-react"

export default function PartnerModal({ isOpen, onClose }) {
	const [submitted, setSubmitted] = useState(false)
	const [formData, setFormData] = useState({
		fullName: "",
		workEmail: "",
		companyName: "",
		platformType: "Gig / Delivery",
		earnerCount: "1,000 - 10,000 earners",
		country: "Nigeria",
		message: "",
	})

	if (!isOpen) return null

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormData((prev) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const subject = encodeURIComponent(`Partnership Inquiry: ${formData.companyName}`)
		const body = encodeURIComponent(
			`Full Name: ${formData.fullName}\n` +
			`Work Email: ${formData.workEmail}\n` +
			`Company / Platform Name: ${formData.companyName}\n` +
			`Platform Category: ${formData.platformType}\n` +
			`Active Earner Count: ${formData.earnerCount}\n` +
			`Primary Market: ${formData.country}\n\n` +
			`Message:\n${formData.message || 'N/A'}`
		)
		window.location.href = `mailto:jp@figfinance.co?subject=${subject}&body=${body}`
		setSubmitted(true)
	}

	const handleResetAndClose = () => {
		setSubmitted(false)
		setFormData({
			fullName: "",
			workEmail: "",
			companyName: "",
			platformType: "Gig / Delivery",
			earnerCount: "1,000 - 10,000 earners",
			country: "Nigeria",
			message: "",
		})
		onClose()
	}

	return (
		<div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
			{/* Backdrop */}
			<div
				className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
				onClick={handleResetAndClose}
			/>

			{/* Modal Card */}
			<div className="relative w-full max-w-xl bg-[#1E252B] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-auto text-white overflow-hidden">
				{/* Top Accent Line */}
				<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-teal-300 to-teal-600" />

				{/* Close Button */}
				<button
					onClick={handleResetAndClose}
					className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
					aria-label="Close modal"
				>
					<X size={20} />
				</button>

				{!submitted ? (
					<>
						{/* Header */}
						<div className="mb-6">
							<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07969E]/20 border border-[#00A3AD]/30 text-[#00A3AD] text-xs font-semibold mb-3">
								<Building2 className="w-3.5 h-3.5" />
								Platform Integration
							</div>
							<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
								Partner with Fig
							</h2>
							<p className="text-slate-400 text-sm mt-1.5 leading-relaxed">
								Fill out the form below to explore embedding solar financing and PesaScore into your platform.
							</p>
						</div>

						{/* Form */}
						<form onSubmit={handleSubmit} className="space-y-4">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div>
									<label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
										Full Name *
									</label>
									<input
										type="text"
										name="fullName"
										required
										placeholder="e.g. Sarah Jenkins"
										value={formData.fullName}
										onChange={handleChange}
										className="w-full px-4 py-3 rounded-xl bg-[#121619] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400 text-sm transition-colors"
									/>
								</div>

								<div>
									<label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
										Work Email *
									</label>
									<input
										type="email"
										name="workEmail"
										required
										placeholder="sarah@platform.com"
										value={formData.workEmail}
										onChange={handleChange}
										className="w-full px-4 py-3 rounded-xl bg-[#121619] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400 text-sm transition-colors"
									/>
								</div>
							</div>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div>
									<label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
										Company / Platform Name *
									</label>
									<input
										type="text"
										name="companyName"
										required
										placeholder="e.g. Selar / Bolt"
										value={formData.companyName}
										onChange={handleChange}
										className="w-full px-4 py-3 rounded-xl bg-[#121619] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400 text-sm transition-colors"
									/>
								</div>

								<div>
									<label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
										Platform Category
									</label>
									<select
										name="platformType"
										value={formData.platformType}
										onChange={handleChange}
										className="w-full px-4 py-3 rounded-xl bg-[#121619] border border-white/10 text-white focus:outline-none focus:border-teal-400 text-sm transition-colors"
									>
										<option value="Gig / Delivery">Gig / Ride-Hailing / Delivery</option>
										<option value="Creator Economy">Creator Economy</option>
										<option value="Freelance Marketplace">Freelance Marketplace</option>
										<option value="E-commerce">E-commerce / Merchant Platform</option>
										<option value="Other">Other</option>
									</select>
								</div>
							</div>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div>
									<label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
										Active Earner Count
									</label>
									<select
										name="earnerCount"
										value={formData.earnerCount}
										onChange={handleChange}
										className="w-full px-4 py-3 rounded-xl bg-[#121619] border border-white/10 text-white focus:outline-none focus:border-teal-400 text-sm transition-colors"
									>
										<option value="< 1,000 earners">&lt; 1,000 earners</option>
										<option value="1,000 - 10,000 earners">1,000 - 10,000 earners</option>
										<option value="10,000 - 50,000 earners">10,000 - 50,000 earners</option>
										<option value="50,000+ earners">50,000+ earners</option>
									</select>
								</div>

								<div>
									<label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
										Primary Market
									</label>
									<select
										name="country"
										value={formData.country}
										onChange={handleChange}
										className="w-full px-4 py-3 rounded-xl bg-[#121619] border border-white/10 text-white focus:outline-none focus:border-teal-400 text-sm transition-colors"
									>
										<option value="Nigeria">Nigeria</option>
										<option value="Kenya">Kenya</option>
										<option value="Both">Both (Nigeria & Kenya)</option>
										<option value="Other Africa">Other African Market</option>
									</select>
								</div>
							</div>

							<div>
								<label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
									Tell us about your platform (Optional)
								</label>
								<textarea
									name="message"
									rows={3}
									placeholder="Tell us a little bit about your earner base and what you're looking to achieve..."
									value={formData.message}
									onChange={handleChange}
									className="w-full px-4 py-3 rounded-xl bg-[#121619] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400 text-sm transition-colors resize-none"
								/>
							</div>

							<div className="pt-2">
								<button
									type="submit"
									className="w-full py-4 rounded-full bg-gradient-to-r from-teal-400 to-[#07969E] text-[#0B353D] font-bold text-base hover:opacity-95 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-teal-500/10"
								>
									<span>Submit Partnership Request</span>
									<ArrowRight className="w-4 h-4" />
								</button>
							</div>
						</form>
					</>
				) : (
					/* Success View */
					<div className="py-8 text-center space-y-4">
						<div className="w-16 h-16 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-400 flex items-center justify-center mx-auto">
							<CheckCircle2 size={36} />
						</div>
						<h3 className="text-2xl font-bold text-white">
							Partnership Request Received!
						</h3>
						<p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
							Thank you for reaching out, <strong className="text-white">{formData.fullName}</strong>. Your details have been sent to <a href="mailto:jp@figfinance.co" className="text-teal-400 underline">jp@figfinance.co</a>. Our team will review <strong className="text-[#00A3AD]">{formData.companyName}</strong>&apos;s details and reach out within 24 hours.
						</p>
						<div className="pt-4">
							<button
								onClick={handleResetAndClose}
								className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors"
							>
								Close Window
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}
