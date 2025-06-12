import { useEffect, useState } from "react"
import toast from "react-hot-toast"

import { Profile } from "@common/types/profile"
import { generateRandomString } from "@common/utils/utils"

import { attachProfile, getProfile } from "@lib/services/profile.service"
import { createPortfolio } from "@lib/services/portfolio.service"

import Step1LinkedInInput from "@components/common/wizard/Step1LinkedinInput"
import Step3TemplateSelection from "@components/common/wizard/Step3TemplateSelection"
import Step4Preview from "@components/common/wizard/Step4Preview"
import WizardContainer from "@components/common/wizard/WizardContainer"
import {isAuthenticated} from "@lib/services/auth.service"
export default function CreatePortfolio() {
	const totalSteps = 3
	const [currentStep, setCurrentStep] = useState(1)

	const [profileData, setProfileData] = useState<Profile>()
	const [TemplateName, setTemplateName] = useState<string>("")
	const type = "portfolio" 

	const handle1stStepNext = async (publicId: string) => {
		const profile = await toast.promise(getProfile({ publicId }), {
			loading: "Cargando perfil...",
			success: "Perfil cargado",
			error: (err) => {
				setCurrentStep(1)
				setProfileData(undefined)
				localStorage.removeItem("profile-home")
				localStorage.removeItem("TemplateName-home")
				return err.message.includes("404")
					? "Perfil no encontrado"
					: "Error al cargar el perfil, inténtelo de nuevo"
			},
		})
		localStorage.setItem("profile-home", JSON.stringify(profile))
		setProfileData(profile)
		setCurrentStep(2)
	}

	const handle2ndStepNext = (TemplateName: string) => {
		setTemplateName(TemplateName)
		localStorage.setItem("TemplateName-home", JSON.stringify(TemplateName))
		setCurrentStep(3)
	}

	const handle2ndStepBack = () => {
		setCurrentStep(1)
		setProfileData(undefined)
		localStorage.removeItem("profile-home")
		localStorage.removeItem("TemplateName-home")
	}

	const handle3rdStepBack = () => {
		setCurrentStep(2)
		setTemplateName("")
		localStorage.removeItem("TemplateName-home")
	}

	const handleCreate = async () => {
		if (!profileData || !type || !TemplateName) {
			toast.error("Por favor completa todos los pasos")
			return
		}
		await attachProfile(profileData.publicId).then(async () => {
			await createPortfolio({
				templateName: TemplateName,
				url: `${profileData.publicId}-${TemplateName}-${generateRandomString(
					4
				)}`,
			}).then(() => {
				localStorage.removeItem("profile-home")
				localStorage.removeItem("type-home")
				localStorage.removeItem("TemplateName-home")
			})
		})
	}

	useEffect(() => {
		const storedProfile = localStorage.getItem("profile-home")
		const storedTemplateName = localStorage.getItem("TemplateName-home")

		if (storedProfile) {
			const profile = JSON.parse(storedProfile)
			setProfileData(profile)
			setCurrentStep(2)
		}

		if (storedTemplateName) {
			const TemplateName = JSON.parse(storedTemplateName)
			setTemplateName(TemplateName)
			setCurrentStep(3)
		}
	}, [])

	return (
		<main>
			<WizardContainer currentStep={currentStep} totalSteps={totalSteps}>
				{currentStep === 1 && (
					<Step1LinkedInInput handleNext={handle1stStepNext} />
				)}
				{currentStep === 2 && (
					<Step3TemplateSelection
						type={type}
						handleNext={(TemplateName) => handle2ndStepNext(TemplateName)}
						handleBack={handle2ndStepBack}
					/>
				)}
				{currentStep === 3 && (
					<Step4Preview
						type={type}
						profile={profileData}
						handleBack={handle3rdStepBack}
						TemplateName={TemplateName}
						handleAction={handleCreate}
						isAuthenticated={isAuthenticated() ? true : false}
						mode="create"
					/>
				)}
			</WizardContainer>
		</main>
	)
}
