import { useState } from "react"

import { Profile } from "@common/types/profile"
import { getProfile } from "@lib/services/profile.service"

import Step1LinkedInInput from "@components/common/wizard/Step1LinkedinInput"
import Step2Selection from "@components/common/wizard/Step2Selection"
import Step3TemplateSelection from "@components/common/wizard/Step3TemplateSelection"
import Step4Preview from "@components/common/wizard/Step4Preview"
import WizardContainer from "@components/common/wizard/WizardContainer"
import toast from "react-hot-toast"

export default function Home() {
	// This is just a placeholder for demonstration
	// In a real implementation, you would handle this with your own state management
	const totalSteps = 4
	const [currentStep, setCurrentStep] = useState(1)

	const [profileData, setProfileData] = useState<Profile>()
	const [type, setType] = useState<"portfolio" | "cv">("portfolio")
	const [templateId, setTemplateId] = useState<string>("")

	const handle1stStepNext = async (publicId: string) => {
		setCurrentStep(2)

		const profile = await toast.promise(getProfile({ publicId }), {
			loading: "Cargando perfil...",
			success: "Perfil cargado",
			error: (err) => {
				setCurrentStep(1)
				return err.message
			},
		})
		setProfileData(profile)
		console.log(profile)
	}

	const handle2ndStepNext = (type: "portfolio" | "cv") => {
		setType(type)
		setCurrentStep(3)
	}

	const handle3rdStepNext = (templateId: string) => {
		setTemplateId(templateId)
		setCurrentStep(4)
	}

	return (
		<main>
			<WizardContainer currentStep={currentStep} totalSteps={totalSteps}>
				{currentStep === 1 && (
					<Step1LinkedInInput handleNext={handle1stStepNext} />
				)}
				{currentStep === 2 && (
					<Step2Selection
						handleNext={handle2ndStepNext}
						setCurrentStep={setCurrentStep}
					/>
				)}
				{currentStep === 3 && (
					<Step3TemplateSelection
						type={type}
						handleNext={(templateId) => handle3rdStepNext(templateId)}
						setCurrentStep={setCurrentStep}
					/>
				)}
				{currentStep === 4 && <Step4Preview type={type} profile={profileData} />}
			</WizardContainer>
		</main>
	)
}
