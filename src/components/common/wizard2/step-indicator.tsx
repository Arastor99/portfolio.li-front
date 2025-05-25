import { motion } from "framer-motion"
import { Check } from "lucide-react"

interface StepIndicatorProps {
	steps: {
		id: string
		title: string
	}[]
	currentStep: number
	setCurrentStep: (step: number) => void
	compact?: boolean
}

export default function StepIndicator({
	steps,
	currentStep,
	setCurrentStep,
	compact = false,
}: StepIndicatorProps) {
	return (
		<div className={`step-indicator ${compact ? "compact" : ""}`}>
			{steps.map((step, index) => (
				<div key={step.id} className="flex items-center">
					<div className="step-item">
						<motion.div
							className={`step-circle ${
								index === currentStep ? "active" : ""
							} ${index < currentStep ? "completed" : ""}`}
							onClick={() => index < currentStep && setCurrentStep(index)}
							whileHover={index < currentStep ? { scale: 1.1 } : {}}
							whileTap={index < currentStep ? { scale: 0.95 } : {}}
							style={{ cursor: index < currentStep ? "pointer" : "default" }}
						>
							{index < currentStep ? (
								<motion.div
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									transition={{ type: "spring", stiffness: 500, damping: 30 }}
								>
									<Check className="w-5 h-5" />
								</motion.div>
							) : (
								<span>{index + 1}</span>
							)}
						</motion.div>
						{!compact && (
							<span
								className={`step-title ${
									index === currentStep ? "active" : ""
								}`}
							>
								{step.title}
							</span>
						)}
					</div>

					{index < steps.length - 1 && (
						<div
							className="step-connector"
							style={{ width: compact ? "20px" : "60px" }}
						>
							<motion.div
								className="step-connector-progress"
								initial={{ width: index < currentStep ? "100%" : "0%" }}
								animate={{
									width:
										index < currentStep
											? "100%"
											: index === currentStep
											? "50%"
											: "0%",
								}}
								transition={{ duration: 0.5 }}
							/>
						</div>
					)}
				</div>
			))}
		</div>
	)
}
