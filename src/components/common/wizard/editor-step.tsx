import type React from "react"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, ChevronUp, Sparkles, Zap, Eye } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"

import { Profile } from "@common/types/profile"

import Preview from "@pages/preview/Preview"

interface FormData {
	importMethod: string
	documentType: string
	templateName: string
	profileData: Profile | undefined
}

interface EditorStepProps {
	formData: FormData
	setFormData: (data: FormData) => void
}

// Custom Input Component - moved outside main component
const CustomInput = ({
	value,
	onChange,
	placeholder,
	className = "",
}: {
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	placeholder?: string
	className?: string
}) => {
	return (
		<input
			type="text"
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			className={`input ${className}`}
		/>
	)
}

// Custom Textarea Component - moved outside main component
const CustomTextarea = ({
	value,
	onChange,
	placeholder,
	rows = 3,
	className = "",
}: {
	value: string
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
	placeholder?: string
	rows?: number
	className?: string
}) => {
	return (
		<textarea
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			rows={rows}
			className={`textarea ${className}`}
		/>
	)
}

// Custom Button Component - moved outside main component
const CustomButton = ({
	onClick,
	disabled = false,
	className = "",
	children,
}: {
	onClick?: () => void
	disabled?: boolean
	className?: string
	children: React.ReactNode
}) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`btn ${className}`}
		>
			{children}
		</button>
	)
}

export default function EditorStep({ formData, setFormData }: EditorStepProps) {
	const [profileData, setProfileData] = useState(formData.profileData || {})
	const [previewVisible, setPreviewVisible] = useState(true)
	const [activeTab, setActiveTab] = useState("basic")
	const [isSaving, setIsSaving] = useState(false)
	const tabsRef = useRef<HTMLDivElement>(null)
	const editorRef = useRef<HTMLDivElement>(null)
	const previewRef = useRef<HTMLDivElement>(null)
	const [indicatorStyle, setIndicatorStyle] = useState({
		left: 0,
		width: 0,
	})

	useEffect(() => {
		setFormData({
			...formData,
			profileData,
		})
	}, [profileData, setFormData])

	useEffect(() => {
		// Actualizar la posición del indicador de pestañas
		if (tabsRef.current) {
			const activeTabElement = tabsRef.current.querySelector(
				`.tab-trigger[data-tab="${activeTab}"]`
			) as HTMLElement
			if (activeTabElement) {
				setIndicatorStyle({
					left: activeTabElement.offsetLeft,
					width: activeTabElement.offsetWidth,
				})
			}
		}
	}, [activeTab])

	const handleInputChange = (section: string, field: string, value: string) => {
		setProfileData({
			...profileData,
			[section]: {
				...profileData[section],
				[field]: value,
			},
		})
	}

	const handleBasicInfoChange = (field: string, value: string) => {
		setProfileData({
			...profileData,
			[field]: value,
		})
	}

	const togglePreview = () => {
		setPreviewVisible(!previewVisible)
	}

	const handleSave = () => {
		setIsSaving(true)
		setTimeout(() => {
			setIsSaving(false)
		}, 1500)
	}

	const tabVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { type: "spring", stiffness: 300, damping: 30 },
		},
	}

	return (
		<div className="flex flex-col md:flex-row gap-2 h-full max-h-full overflow-hidden">
			{/* Editor Panel */}
			<motion.div
				ref={editorRef}
				initial={{ opacity: 0, x: -20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5 }}
				className={`${
					previewVisible ? "md:w-1/3" : "w-full"
				} card-shine p-2 overflow-hidden h-full flex flex-col`}
			>
				<div className="tabs flex-1 flex flex-col overflow-hidden">
					<div className="tabs-list" ref={tabsRef}>
						<div
							className={`tab-trigger ${activeTab === "basic" ? "active" : ""}`}
							onClick={() => setActiveTab("basic")}
							data-tab="basic"
						>
							<motion.div
								initial={{ scale: 0.9 }}
								animate={{ scale: activeTab === "basic" ? 1 : 0.9 }}
								className="flex items-center"
							>
								{activeTab === "basic" && <Sparkles className="h-3 w-3 mr-1" />}
								Básico
							</motion.div>
						</div>
						<div
							className={`tab-trigger ${
								activeTab === "experience" ? "active" : ""
							}`}
							onClick={() => setActiveTab("experience")}
							data-tab="experience"
						>
							<motion.div
								initial={{ scale: 0.9 }}
								animate={{ scale: activeTab === "experience" ? 1 : 0.9 }}
								className="flex items-center"
							>
								{activeTab === "experience" && (
									<Sparkles className="h-3 w-3 mr-1" />
								)}
								Experiencia
							</motion.div>
						</div>
						<div
							className={`tab-trigger ${
								activeTab === "education" ? "active" : ""
							}`}
							onClick={() => setActiveTab("education")}
							data-tab="education"
						>
							<motion.div
								initial={{ scale: 0.9 }}
								animate={{ scale: activeTab === "education" ? 1 : 0.9 }}
								className="flex items-center"
							>
								{activeTab === "education" && (
									<Sparkles className="h-3 w-3 mr-1" />
								)}
								Educación
							</motion.div>
						</div>
						<div
							className={`tab-trigger ${
								activeTab === "skills" ? "active" : ""
							}`}
							onClick={() => setActiveTab("skills")}
							data-tab="skills"
						>
							<motion.div
								initial={{ scale: 0.9 }}
								animate={{ scale: activeTab === "skills" ? 1 : 0.9 }}
								className="flex items-center"
							>
								{activeTab === "skills" && (
									<Sparkles className="h-3 w-3 mr-1" />
								)}
								Habilidades
							</motion.div>
						</div>
						<motion.div
							className="tab-indicator"
							animate={{
								left: indicatorStyle.left,
								width: indicatorStyle.width,
							}}
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 30,
							}}
						/>
					</div>

					<AnimatePresence mode="wait">
						<motion.div
							key={activeTab}
							initial="hidden"
							animate="visible"
							exit="hidden"
							variants={tabVariants}
							className="flex-1 overflow-auto pb-4"
						>
							<div
								className={`tab-content ${
									activeTab === "basic" ? "active" : ""
								}`}
							>
								<div className="space-y-2">
									<div className="grid grid-cols-2 gap-2">
										<div>
											<label className="label text-xs">Nombre</label>
											<CustomInput
												value={profileData.firstName || ""}
												onChange={(e) =>
													handleBasicInfoChange("firstName", e.target.value)
												}
												placeholder="Nombre"
											/>
										</div>
										<div>
											<label className="label text-xs">Apellidos</label>
											<CustomInput
												value={profileData.lastName || ""}
												onChange={(e) =>
													handleBasicInfoChange("lastName", e.target.value)
												}
												placeholder="Apellidos"
											/>
										</div>
									</div>

									<div>
										<label className="label text-xs">Título Profesional</label>
										<CustomInput
											value={profileData.headline || ""}
											onChange={(e) =>
												handleBasicInfoChange("headline", e.target.value)
											}
											placeholder="Ej: Desarrollador Frontend Senior"
										/>
									</div>

									<div>
										<label className="label text-xs">Resumen</label>
										<CustomTextarea
											value={profileData.summary || ""}
											onChange={(e) =>
												handleBasicInfoChange("summary", e.target.value)
											}
											placeholder="Breve descripción sobre ti y tu experiencia profesional"
											rows={3}
										/>
									</div>
								</div>
							</div>

							<div
								className={`tab-content ${
									activeTab === "experience" ? "active" : ""
								}`}
							>
								{(profileData.experience || []).map(
									(exp: any, index: number) => (
										<motion.div
											key={index}
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: index * 0.1 }}
											className="mb-3 p-2 border border-border dark:border-border-dark rounded-lg bg-primary/5 dark:bg-primary/10"
										>
											<div className="mb-2">
												<label className="label text-xs">Puesto</label>
												<CustomInput
													value={exp.title || ""}
													onChange={(e) => {
														const newExperience = [...profileData.experience]
														newExperience[index].title = e.target.value
														setProfileData({
															...profileData,
															experience: newExperience,
														})
													}}
													placeholder="Ej: Desarrollador Frontend"
												/>
											</div>

											<div className="mb-2">
												<label className="label text-xs">Empresa</label>
												<CustomInput
													value={exp.companyName || ""}
													onChange={(e) => {
														const newExperience = [...profileData.experience]
														newExperience[index].companyName = e.target.value
														setProfileData({
															...profileData,
															experience: newExperience,
														})
													}}
													placeholder="Ej: Empresa S.L."
												/>
											</div>

											{/* More fields would go here */}
										</motion.div>
									)
								)}

								<CustomButton
									onClick={() => {
										const newExperience = [...(profileData.experience || [])]
										newExperience.push({
											title: "",
											companyName: "",
											timePeriod: { startDate: {}, endDate: {} },
										})
										setProfileData({
											...profileData,
											experience: newExperience,
										})
									}}
									className="btn-primary w-full btn-sm"
								>
									<Zap className="mr-1 h-3 w-3" />
									Añadir Experiencia
								</CustomButton>
							</div>

							<div
								className={`tab-content ${
									activeTab === "education" ? "active" : ""
								}`}
							>
								{/* Similar to experience tab */}
								{(profileData.education || []).map(
									(edu: any, index: number) => (
										<motion.div
											key={index}
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: index * 0.1 }}
											className="mb-3 p-2 border border-border dark:border-border-dark rounded-lg bg-secondary/5 dark:bg-secondary/10"
										>
											<div className="mb-2">
												<label className="label text-xs">
													Centro Educativo
												</label>
												<CustomInput
													value={edu.schoolName || ""}
													onChange={(e) => {
														const newEducation = [...profileData.education]
														newEducation[index].schoolName = e.target.value
														setProfileData({
															...profileData,
															education: newEducation,
														})
													}}
													placeholder="Ej: Universidad de Barcelona"
												/>
											</div>

											<div className="mb-2">
												<label className="label text-xs">Título</label>
												<CustomInput
													value={edu.degreeName || ""}
													onChange={(e) => {
														const newEducation = [...profileData.education]
														newEducation[index].degreeName = e.target.value
														setProfileData({
															...profileData,
															education: newEducation,
														})
													}}
													placeholder="Ej: Ingeniería Informática"
												/>
											</div>
										</motion.div>
									)
								)}

								<CustomButton
									onClick={() => {
										const newEducation = [...(profileData.education || [])]
										newEducation.push({
											schoolName: "",
											degreeName: "",
											timePeriod: { startDate: {}, endDate: {} },
										})
										setProfileData({ ...profileData, education: newEducation })
									}}
									className="btn-primary w-full btn-sm"
								>
									<Zap className="mr-1 h-3 w-3" />
									Añadir Educación
								</CustomButton>
							</div>

							<div
								className={`tab-content ${
									activeTab === "skills" ? "active" : ""
								}`}
							>
								<div className="space-y-2">
									{(profileData.skills || []).map(
										(skill: any, index: number) => (
											<motion.div
												key={index}
												className="flex items-center gap-2"
												initial={{ opacity: 0, x: -20 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{ delay: index * 0.05 }}
											>
												<CustomInput
													value={skill.name || ""}
													onChange={(e) => {
														const newSkills = [...profileData.skills]
														newSkills[index].name = e.target.value
														setProfileData({
															...profileData,
															skills: newSkills,
														})
													}}
													placeholder="Ej: React.js"
												/>
												<button
													onClick={() => {
														const newSkills = [...profileData.skills]
														newSkills.splice(index, 1)
														setProfileData({
															...profileData,
															skills: newSkills,
														})
													}}
													className="text-secondary hover:text-secondary-dark dark:text-secondary dark:hover:text-secondary-light h-8 w-8 flex items-center justify-center rounded-full"
												>
													×
												</button>
											</motion.div>
										)
									)}

									<CustomButton
										onClick={() => {
											const newSkills = [...(profileData.skills || [])]
											newSkills.push({ name: "" })
											setProfileData({ ...profileData, skills: newSkills })
										}}
										className="btn-primary w-full btn-sm"
									>
										<Zap className="mr-1 h-3 w-3" />
										Añadir Habilidad
									</CustomButton>
								</div>
							</div>
						</motion.div>
					</AnimatePresence>
				</div>
			</motion.div>

			{/* Preview Panel */}
			{previewVisible && (
				<motion.div
					ref={previewRef}
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					className="flex-1 card-shine p-2 overflow-hidden h-full flex flex-col"
				>
					{/* Título de Preview */}
					<div className="flex items-center justify-center mb-2">
						<div className="bg-gradient-to-r from-primary-light/20 via-primary/30 to-primary-light/20 px-4 py-1 rounded-full flex items-center">
							<Eye className="h-4 w-4 mr-2 text-primary" />
							<span className="text-sm font-medium text-primary">
								Vista Previa
							</span>
						</div>
					</div>

					<div className="flex-1 overflow-hidden rounded-lg">
						<div
							className="bg-white dark:bg-gray-800 rounded-lg shadow-lg mx-auto h-full"
							style={{
								aspectRatio: "16/9",
								width: "100%",
								transform: "scale(0.98)",
								transformOrigin: "center center",
								overflow: "hidden",
							}}
						>
							<div className="w-full h-full overflow-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
								<Preview
									profileData={formData.profileData}
									templateNameProps={formData.templateName}
								/>
							</div>
						</div>
					</div>
				</motion.div>
			)}

			{/* Mobile toggle for preview */}
			<div className="md:hidden mt-2 mb-2">
				<CustomButton
					onClick={togglePreview}
					className="btn-outline w-full flex items-center justify-center btn-sm"
				>
					{previewVisible ? (
						<>
							<ChevronUp
								size={14}
								className="mr-1 text-primary dark:text-primary"
							/>
							Ocultar Vista Previa
						</>
					) : (
						<>
							<ChevronDown
								size={14}
								className="mr-1 text-primary dark:text-primary"
							/>
							Mostrar Vista Previa
						</>
					)}
				</CustomButton>
			</div>
		</div>
	)
}