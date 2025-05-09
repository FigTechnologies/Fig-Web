"use client"

import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import * as React from "react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item
		ref={ref}
		className={cn("border-b", className)}
		{...props}
	/>
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Header className="flex">
		<AccordionPrimitive.Trigger
			ref={ref}
			className={cn("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className)}
			{...props}>
			{children}
			{/* <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" /> */}
			<div>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M0 12C0.03125 9.75 0.578125 7.73438 1.64062 5.95312C2.70312 4.14062 4.14062 2.70313 5.95312 1.64062C7.73438 0.578125 9.75 0.03125 12 0C14.25 0.03125 16.2656 0.578125 18.0469 1.64062C19.8594 2.70313 21.2969 4.14062 22.3594 5.95312C23.4219 7.73438 23.9688 9.75 24 12C23.9688 14.25 23.4219 16.2656 22.3594 18.0469C21.2969 19.8594 19.8594 21.2969 18.0469 22.3594C16.2656 23.4219 14.25 23.9688 12 24C9.75 23.9688 7.73438 23.4219 5.95312 22.3594C4.14062 21.2969 2.70312 19.8594 1.64062 18.0469C0.578125 16.2656 0.03125 14.25 0 12ZM12 17.25C12.6875 17.1875 13.0625 16.8125 13.125 16.125V13.125H16.125C16.8125 13.0625 17.1875 12.6875 17.25 12C17.1875 11.3125 16.8125 10.9375 16.125 10.875H13.125V7.875C13.0625 7.1875 12.6875 6.8125 12 6.75C11.3125 6.8125 10.9375 7.1875 10.875 7.875V10.875H7.875C7.1875 10.9375 6.8125 11.3125 6.75 12C6.8125 12.6875 7.1875 13.0625 7.875 13.125H10.875V16.125C10.9375 16.8125 11.3125 17.1875 12 17.25Z"
						fill="#0497a2"></path>
				</svg>
			</div>
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
		{...props}>
		<div className={cn("pb-4 pt-0", className)}>{children}</div>
	</AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
