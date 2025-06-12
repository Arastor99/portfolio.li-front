import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

import { usePortfolioStore } from "@store/portfolioStore"
import { useProfileStore } from "@store/profileStore"

import { isAuthenticated } from "@lib/services/auth.service"
import { updatePortfolio } from "@lib/services/portfolio.service"

import WizardContainer from "@components/common/wizard/WizardContainer"
import Step3TemplateSelection from "@components/common/wizard/Step3TemplateSelection"
import Step4Preview from "@components/common/wizard/Step4Preview"

export default function UpdatePortfolio() {
    const totalSteps = 2
    const navigate = useNavigate()
    const [currentStep, setCurrentStep] = useState(1)
    const [templateName, setTemplateName] = useState<string>("")
    const type = "portfolio"
    const { profileStore } = useProfileStore()
    const { portfolioStore, updatePortfolioStore } = usePortfolioStore()
    const handle2ndStepNext = (TemplateName: string) => {
        setTemplateName(TemplateName)

        setCurrentStep(2)
    }

    const handle2ndStepBack = () => {
        setCurrentStep(1)
        setTemplateName("")
        localStorage.removeItem("TemplateName-home")
    }

    const handleUpdate = async () => {
        if (!profileStore || !type || !templateName) {
            toast.error("Por favor completa todos los pasos")
            return
        }
        await updatePortfolio({ templateName })
        updatePortfolioStore({
            ...(portfolioStore?.template && {
                template: {
                    ...portfolioStore.template,
                    name: templateName,
                },
            }),
        })
        navigate("/app/dashboard")
    }

    useEffect(() => {
        const storedTemplateName = localStorage.getItem("TemplateName-home")
        if (storedTemplateName) {
            const TemplateName = JSON.parse(storedTemplateName)
            setTemplateName(TemplateName)
            setCurrentStep(2)
        }
    }, [])

    return (
        <main>
            <WizardContainer currentStep={currentStep} totalSteps={totalSteps}>
                {currentStep === 1 && (
                    <Step3TemplateSelection
                        type={type}
                        handleNext={handle2ndStepNext}
                        handleBack={() => {}}
                    />
                )}
                {currentStep === 2 && (
                    <Step4Preview
                        type={type}
                        profile={profileStore ?? undefined}
                        handleBack={handle2ndStepBack}
                        TemplateName={templateName}
                        handleAction={handleUpdate}
                        isAuthenticated={isAuthenticated()}
                        mode="update"
                    />
                )}
            </WizardContainer>
        </main>
    )
}
