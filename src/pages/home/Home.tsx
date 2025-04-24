import { useEffect, useState } from "react"
import toast from "react-hot-toast"

import { Profile } from "@common/types/profile"
import { generateRandomString } from "@common/utils/utils"

import { getProfile } from "@lib/services/profile.service"
import { createPortfolio } from "@lib/services/portfolio.service"

import Step1LinkedInInput from "@components/common/wizard/Step1LinkedinInput"
import Step2Selection from "@components/common/wizard/Step2Selection"
import Step3TemplateSelection from "@components/common/wizard/Step3TemplateSelection"
import Step4Preview from "@components/common/wizard/Step4Preview"
import WizardContainer from "@components/common/wizard/WizardContainer"

export default function Home() {
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
				setProfileData(undefined)
				localStorage.removeItem("profile-home")
				localStorage.removeItem("type-home")
				localStorage.removeItem("templateId-home")
				return err.message.includes("404")
					? "Perfil no encontrado"
					: "Error al cargar el perfil, intentelo de nuevo"
			},
		})
		localStorage.setItem("profile-home", JSON.stringify(profile))
		setProfileData(profile)
	}

	const handle2ndStepNext = (type: "portfolio" | "cv") => {
		setType(type)
		localStorage.setItem("type-home", JSON.stringify(type))
		setCurrentStep(3)
	}

	const handle2ndStepBack = () => {
		setCurrentStep(1)
		setProfileData(undefined)
		localStorage.removeItem("profile-home")
		localStorage.removeItem("type-home")
		localStorage.removeItem("templateId-home")
	}

	const handle3rdStepBack = () => {
		setCurrentStep(2)
		setTemplateId("")
		localStorage.removeItem("templateId-home")
	}

	const handle3rdStepNext = (templateId: string) => {
		setTemplateId(templateId)
		localStorage.setItem("templateId-home", JSON.stringify(templateId))
		setCurrentStep(4)
	}

	const handleTriggerRegister = async () => {
		if (!profileData || !type || !templateId) {
			toast.error("Por favor completa todos los pasos")
			return
		}
		await createPortfolio({
			templateId,
			url: `${profileData.publicId}-${templateId}-${generateRandomString(4)}`,
		}).then(() => {
			localStorage.removeItem("profile-home")
			localStorage.removeItem("type-home")
			localStorage.removeItem("templateId-home")
		})
	}

	const handle4thStepBack = () => {
		setCurrentStep(3)
		setTemplateId("")
		localStorage.removeItem("templateId-home")
	}

	useEffect(() => {
		const storedProfile = localStorage.getItem("profile-home")
		const storedType = localStorage.getItem("type-home")
		const storedTemplateId = localStorage.getItem("templateId-home")

		if (storedProfile) {
			const profile = JSON.parse(storedProfile)
			setProfileData(profile)
			setCurrentStep(2)
		}

		if (storedType) {
			const type = JSON.parse(storedType)
			setType(type)
			setCurrentStep(3)
		}

		if (storedTemplateId) {
			const templateId = JSON.parse(storedTemplateId)
			setTemplateId(templateId)
			setCurrentStep(4)
		}
	}, [])

	return (
		<main>
			<WizardContainer currentStep={currentStep} totalSteps={totalSteps}>
				{currentStep === 1 && (
					<Step1LinkedInInput handleNext={handle1stStepNext} />
				)}
				{currentStep === 2 && (
					<Step2Selection
						handleNext={handle2ndStepNext}
						hanldeBack={handle2ndStepBack}
					/>
				)}
				{currentStep === 3 && (
					<Step3TemplateSelection
						type={type}
						handleNext={(templateId) => handle3rdStepNext(templateId)}
						handleBack={handle3rdStepBack}
					/>
				)}
				{currentStep === 4 && (
					<Step4Preview
						type={type}
						profile={profileData}
						handleBack={handle4thStepBack}
						handleTriggerRegister={handleTriggerRegister}
					/>
				)}
			</WizardContainer>
		</main>
	)
}
