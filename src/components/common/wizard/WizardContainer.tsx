import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowLeftCircle } from "lucide-react"

import StepIndicator from "./StepIndicatior"

interface WizardContainerProps {
	currentStep: number
	totalSteps: number
	children: ReactNode
}

export default function WizardContainer({
	currentStep,
	totalSteps,
	children,
}: WizardContainerProps) {
	return (
		<div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center p-4 md:p-8">
			{/* ALREADY HAVE A PROFILE?{" "} */}
			<div className=" justify-start mb-4  w-full max-w-6xl">
				<Link
					to="/auth/login"
					className="inline-flex items-center hover:text-[#6366F1] hover:underline"
				>
					<ArrowLeftCircle className="w-6 h-6" />
					<span className="text-sm text-gray-500 ml-2">Ya tengo un perfil</span>
				</Link>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				className="w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden"
			>
				<div className="p-6 md:p-8">
					<StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

					<motion.div
						key={currentStep}
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -20 }}
						transition={{ duration: 0.3 }}
						className="mt-8"
					>
						{children}
					</motion.div>
				</div>
			</motion.div>
		</div>
	)
}
