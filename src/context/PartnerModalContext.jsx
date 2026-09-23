"use client"

import { createContext, useContext, useState } from "react"
import PartnerModal from "@/components/PartnerModal"

const PartnerModalContext = createContext({
	isOpen: false,
	openModal: () => {},
	closeModal: () => {},
})

export function PartnerModalProvider({ children }) {
	const [isOpen, setIsOpen] = useState(false)

	const openModal = () => setIsOpen(true)
	const closeModal = () => setIsOpen(false)

	return (
		<PartnerModalContext.Provider value={{ isOpen, openModal, closeModal }}>
			{children}
			<PartnerModal isOpen={isOpen} onClose={closeModal} />
		</PartnerModalContext.Provider>
	)
}

export function usePartnerModal() {
	return useContext(PartnerModalContext)
}
