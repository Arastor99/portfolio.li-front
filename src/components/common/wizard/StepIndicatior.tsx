import { motion } from "framer-motion"

interface StepIndicatorProps {
	currentStep: number
	totalSteps: number
}

export default function StepIndicator({
	currentStep,
	totalSteps,
}: StepIndicatorProps) {
	return (
		<div className="w-full">
			<div className="flex justify-between items-center mb-2">
				<span className="text-sm font-medium text-[#64748B]">
					Paso {currentStep} de {totalSteps}
				</span>
				<span className="text-sm font-medium text-[#64748B]">
					{Math.round((currentStep / totalSteps) * 100)}%
				</span>
			</div>

			<div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
				<motion.div
					className="h-full bg-[#6366F1] rounded-full"
					initial={{ width: 0 }}
					animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
					transition={{ duration: 0.5 }}
				/>
			</div>
		</div>
	)
}
