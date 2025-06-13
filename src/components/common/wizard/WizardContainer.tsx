import { useState, useEffect } from "react"
import { motion, AnimatePresence, useMotionValue } from "framer-motion"
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import toast from "react-hot-toast"

import type { Profile } from "@common/types/profile"

import {
	extractPublicIdFromUrl,
	validateLinkedinUrl,
} from "@common/utils/utils"
import { attachProfile, getProfile } from "@lib/services/profile.service"

import ImportStep from "@components/common/wizard/import-step"
import DocumentTypeStep from "@components/common/wizard/document-type-step"
import TemplateStep from "@components/common/wizard/template-step"
import EditorStep from "@components/common/wizard/editor-step"
import StepIndicator from "@components/common/wizard/step-indicator"
import BackgroundParticles from "@components/common/wizard/background-particles"
import Modal from "../modal/Modal"
import ModalRegister from "../modal/ModalRegister"
import { createPortfolio, updatePortfolio } from "@lib/services/portfolio.service"
import { usePortfolioStore } from "@store/portfolioStore"
import { useNavigate } from "react-router-dom"

interface Props {
	profileData?: Profile | null
	mode: "register" | "createOrUpdate"
	type?: "portfolio" | "cv" | ""
}

export default function WizardContainer({ profileData, mode, type = "" }: Props) {
	const navigate = useNavigate()
	const [currentStep, setCurrentStep] = useState(0)
	const [linkedinUrl, setLinkedinUrl] = useState("")
	const [direction, setDirection] = useState(0)
	const { portfolioStore, updatePortfolioStore } = usePortfolioStore()
	const [modalRegister, setModalRegister] = useState(false)

	const [formData, setFormData] = useState({
		importMethod: "",
		documentType: type,
		templateName: "",
		profileData,
	})

	const mouseX = useMotionValue(0)
	const mouseY = useMotionValue(0)

	useEffect(() => {
		console.log(profileData)
		if(mode == "createOrUpdate" && portfolioStore){
			setCurrentStep(2)
		}
		const handleMouseMove = (e: MouseEvent) => {
			mouseX.set(e.clientX)
			mouseY.set(e.clientY)
		}

		window.addEventListener("mousemove", handleMouseMove)
		return () => {
			window.removeEventListener("mousemove", handleMouseMove)
		}
	}, [mouseX, mouseY])

	const steps = [
		{
			id: "import",
			title: "¿Cómo quieres comenzar?",
			component: (
				<ImportStep
					formData={formData}
					setFormData={setFormData}
					linkedinUrl={linkedinUrl}
					setLinkedinUrl={setLinkedinUrl}
				/>
			),
		},
		{
			id: "document-type",
			title: "¿Qué quieres crear?",
			component: (
				<DocumentTypeStep formData={formData} setFormData={setFormData} />
			),
		},
		{
			id: "template",
			title: "Elige una plantilla",
			component: <TemplateStep formData={formData} setFormData={setFormData} />,
		},
		{
			id: "editor",
			title: "Editor",
			component: <EditorStep formData={formData} setFormData={setFormData} />,
		},
	]

	const handle4step = async () => {
		if (mode === "register") {
			setModalRegister(true)
		} else if (mode === "createOrUpdate" && !portfolioStore) {
			handleCreate()
		} else if (mode === "createOrUpdate" && portfolioStore) {
			handleUpdate()
		}
	}
	const handleUpdate = async () => {
		console.log(profileData, "---->" + formData.documentType, "2------>" + formData.templateName)
        if (!profileData || !formData.documentType || !formData.templateName) {
            toast.error("Por favor completa todos los pasos 2")
            return
        }
        await updatePortfolio({ templateName: formData.templateName })
        updatePortfolioStore({
            ...(portfolioStore?.template && {
                template: {
                    ...portfolioStore.template,
                    name: formData.templateName,
                },
            }),
        })
        navigate("/app/dashboard")
    }
		const handleCreate = async () => {
			console.log(formData.profileData, "---->" + formData.documentType, "2------>" + formData.templateName)
		if (!formData.profileData || !formData.documentType || !formData.templateName) {
			toast.error("Por favor completa todos los pasos")
			return
		}
		await attachProfile(formData.profileData.publicId).then(async () => {
			await createPortfolio({
				templateName: formData.templateName,
			})
		})
	}
	const goToNextStep = async () => {
		if (currentStep < steps.length) {
			switch (currentStep) {
				case 0:
					if (formData.importMethod === "linkedin") {
						const publicId = extractPublicIdFromUrl(linkedinUrl)
						if (!publicId)
							return toast.error(
								"Por favor, introduce una URL de LinkedIn válida"
							)

						await toast
							.promise(
								getProfile({
									publicId: publicId,
								}),
								{
									loading: "Cargando perfil de LinkedIn",
									success: "Perfil cargado",
									error: "Error al cargar el perfil",
								}
							)
							.then((response) => {
								setFormData({
									...formData,
									profileData: response,
								})
							})
							.catch((error) => {
								console.error("Error fetching profile data:", error)
							})
					}
					break

				case 3:
					return await handle4step()
				default:
					break
			}
			setDirection(1)
			setCurrentStep(currentStep + 1)
		}
	}

	const goToPreviousStep = () => {
		if (currentStep > 0) {
			setDirection(-1)
			setCurrentStep(currentStep - 1)
		}
	}

	const canProceed = () => {
		switch (currentStep) {
			case 0:
				return (
					formData.importMethod === "manual" ||
					(linkedinUrl &&
						validateLinkedinUrl(linkedinUrl) &&
						formData.importMethod === "linkedin")
				)
			case 1:
				return !!formData.documentType
			case 2:
				return !!formData.templateName
			case 3:
				// TODO: CHECQUEAR MAS COSAS MINIMAS DEL PROFILE ANTES DE PROCEEDER
				return !!formData.profileData
			default:
				return true
		}
	}

	const triggerRegister = async () => {
		try {
			await attachProfile(formData.profileData?.publicId || "")

			await createPortfolio({
				templateName: formData.templateName,
			})
		} catch (error) {
			console.error("Error attaching profile:", error)
		}
	}

	return (
		<>
			<main
				className={`${
					currentStep === 3 ? "h-screen" : "min-h-screen"
				} bg-mesh relative overflow-hidden flex flex-col `}
			>
				<BackgroundParticles />

				<div
					className={`${
						currentStep === 3
							? "w-full px-3 py-2 flex-1 flex flex-col"
							: "container mx-auto px-4 py-4 flex flex-col"
					} relative z-10`}
				>
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className={`${currentStep === 3 ? "mb-2" : "mb-4"} text-center`}
					>
						<h1
							className={`${
								currentStep === 3
									? "text-2xl md:text-3xl"
									: "text-3xl md:text-4xl"
							} font-bold gradient-text mb-1`}
						>
							Resume Builder
						</h1>
						<p
							className={`text-primary dark:text-primary ${
								currentStep === 3
									? "text-xs md:text-sm"
									: "text-sm md:text-base"
							}`}
						>
							Crea tu currículum o portfolio profesional en minutos
						</p>
					</motion.div>

					{currentStep !== 3 && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="mb-4"
						>
							<StepIndicator
								steps={steps}
								currentStep={currentStep}
								setCurrentStep={setCurrentStep}
							/>
						</motion.div>
					)}

					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className={`${
							currentStep === 3
								? "card-shine-subtle p-2 mb-2 mx-1 flex-1"
								: "card-shine p-4 mb-3 "
						} relative overflow-hidden flex flex-col`}
						style={{
							minHeight: currentStep === 3 ? "0" : "425px",
							height: currentStep === 3 ? "calc(100vh - 160px)" : "auto",
							maxHeight: currentStep === 3 ? "calc(100vh - 160px)" : "none",
						}}
					>
						<AnimatePresence mode="wait" initial={false} custom={direction}>
							<motion.div
								key={currentStep}
								custom={direction}
								initial={{
									x: direction > 0 ? "100%" : "-100%",
									opacity: 0,
									scale: 0.9,
								}}
								animate={{
									x: 0,
									opacity: 1,
									scale: 1,
								}}
								exit={{
									x: direction < 0 ? "100%" : "-100%",
									opacity: 0,
									scale: 0.9,
								}}
								transition={{
									type: "spring",
									stiffness: 300,
									damping: 30,
								}}
								className={`${
									currentStep === 3 ? "h-full" : ""
								} relative z-10 flex flex-col `}
							>
								<motion.h2
									className={`${
										currentStep === 3
											? "text-lg md:text-xl mb-2"
											: "text-xl md:text-2xl mb-4"
									} font-semibold text-primary dark:text-primary flex items-center`}
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.2 }}
								>
									<Sparkles
										className={`${
											currentStep === 3 ? "w-4 h-4" : "w-5 h-5"
										} mr-2 text-primary-light dark:text-primary-light`}
									/>
									{steps[currentStep].title}
								</motion.h2>
								<div className={`${currentStep === 3 ? "flex-1 h-full " : ""}`}>
									{steps[currentStep].component}
								</div>
							</motion.div>
						</AnimatePresence>
					</motion.div>

					<div 
						className={`flex items-center justify-between mb-3 ${currentStep === 3 ? 'mx-4' : ''}`}
						style={currentStep === 3 ? { marginTop: '-2rem' } : {}}
					>
						<button
							onClick={goToPreviousStep}
							disabled={currentStep === 0}
							className={`btn btn-outline flex items-center gap-2 ${
								currentStep === 3 ? "btn-sm" : ""
							}`}
						>
							<ChevronLeft size={currentStep === 3 ? 16 : 18} />
							Anterior
						</button>

						{currentStep === 3 && (
							<div className="flex-1 px-2" style={{ marginTop: '2rem' }}>
								<div className="flex justify-center">
									<StepIndicator
										steps={steps}
										currentStep={currentStep}
										setCurrentStep={setCurrentStep}
										compact={true}
									/>
								</div>
							</div>
						)}

						<button
							onClick={goToNextStep}
							disabled={!canProceed()}
							className={`btn btn-primary flex items-center gap-2 ${
								currentStep === 3 ? "btn-sm" : ""
							}`}
						>
							Siguiente
							<ChevronRight size={currentStep === 3 ? 16 : 18} />
						</button>
					</div>
				</div>
			</main>
			<Modal isOpen={modalRegister} onClose={() => setModalRegister(false)}>
				<ModalRegister
					onClose={() => setModalRegister(false)}
					triggerRegister={triggerRegister}
				/>
			</Modal>
		</>
	)
}