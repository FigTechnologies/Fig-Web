import { EarlyPayAbout } from "@/components/products/early-pay/EarlyPayAbout"
import { EarlyPayDevFriendly } from "@/components/products/early-pay/EarlyPayDevFriendly"
import { EarlyPayEmpowerYourCreator } from "@/components/products/early-pay/EarlyPayEmpowerYourCreator"
import { EarlyPayHero } from "@/components/products/early-pay/EarlyPayHero"
import { EarlyPayHowItWorks } from "@/components/products/early-pay/EarlyPayHowItWorks"
import { EarlyPayTrust } from "@/components/products/early-pay/EarlyPayTrust"

export default function EarlyPayPage() {
	return (
		<main>
			<EarlyPayHero />
			<EarlyPayAbout />
			<EarlyPayHowItWorks />
			<EarlyPayTrust />
			<EarlyPayDevFriendly />
			<EarlyPayEmpowerYourCreator />
		</main>
	)
}
