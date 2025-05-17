"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Eye, Download, ChevronDown, ChevronUp, Sparkles, Zap, Save } from "lucide-react"

interface EditorStepProps {
  formData: any
  setFormData: (data: any) => void
}

export default function EditorStep({ formData, setFormData }: EditorStepProps) {
  const [profileData, setProfileData] = useState(formData.profileData || {})
  const [previewVisible, setPreviewVisible] = useState(true)
  const [activeTab, setActiveTab] = useState("basic")
  const [isSaving, setIsSaving] = useState(false)
  const tabsRef = useRef<HTMLDivElement>(null)
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
      const activeTabElement = tabsRef.current.querySelector(`.tab-trigger[data-tab="${activeTab}"]`) as HTMLElement
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
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
  }

  // Custom Input Component
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
      <input type="text" value={value} onChange={onChange} placeholder={placeholder} className={`input ${className}`} />
    )
  }

  // Custom Textarea Component
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

  // Custom Button Component
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
      <button onClick={onClick} disabled={disabled} className={`btn ${className}`}>
        {children}
      </button>
    )
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 h-full">
      {/* Editor Panel */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={`${previewVisible ? "md:w-1/2" : "w-full"} card-shine p-4 overflow-y-auto`}
      >
        <div className="tabs">
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
              className={`tab-trigger ${activeTab === "experience" ? "active" : ""}`}
              onClick={() => setActiveTab("experience")}
              data-tab="experience"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: activeTab === "experience" ? 1 : 0.9 }}
                className="flex items-center"
              >
                {activeTab === "experience" && <Sparkles className="h-3 w-3 mr-1" />}
                Experiencia
              </motion.div>
            </div>
            <div
              className={`tab-trigger ${activeTab === "education" ? "active" : ""}`}
              onClick={() => setActiveTab("education")}
              data-tab="education"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: activeTab === "education" ? 1 : 0.9 }}
                className="flex items-center"
              >
                {activeTab === "education" && <Sparkles className="h-3 w-3 mr-1" />}
                Educación
              </motion.div>
            </div>
            <div
              className={`tab-trigger ${activeTab === "skills" ? "active" : ""}`}
              onClick={() => setActiveTab("skills")}
              data-tab="skills"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: activeTab === "skills" ? 1 : 0.9 }}
                className="flex items-center"
              >
                {activeTab === "skills" && <Sparkles className="h-3 w-3 mr-1" />}
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
            <motion.div key={activeTab} initial="hidden" animate="visible" exit="hidden" variants={tabVariants}>
              <div className={`tab-content ${activeTab === "basic" ? "active" : ""}`}>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="label">Nombre</label>
                      <CustomInput
                        value={profileData.firstName || ""}
                        onChange={(e) => handleBasicInfoChange("firstName", e.target.value)}
                        placeholder="Nombre"
                      />
                    </div>
                    <div>
                      <label className="label">Apellidos</label>
                      <CustomInput
                        value={profileData.lastName || ""}
                        onChange={(e) => handleBasicInfoChange("lastName", e.target.value)}
                        placeholder="Apellidos"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="label">Título Profesional</label>
                    <CustomInput
                      value={profileData.headline || ""}
                      onChange={(e) => handleBasicInfoChange("headline", e.target.value)}
                      placeholder="Ej: Desarrollador Frontend Senior"
                    />
                  </div>

                  <div>
                    <label className="label">Resumen</label>
                    <CustomTextarea
                      value={profileData.summary || ""}
                      onChange={(e) => handleBasicInfoChange("summary", e.target.value)}
                      placeholder="Breve descripción sobre ti y tu experiencia profesional"
                      rows={5}
                    />
                  </div>
                </div>
              </div>

              <div className={`tab-content ${activeTab === "experience" ? "active" : ""}`}>
                {(profileData.experience || []).map((exp: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-6 p-4 border border-border dark:border-border-dark rounded-lg bg-primary/5 dark:bg-primary/10"
                  >
                    <div className="mb-3">
                      <label className="label">Puesto</label>
                      <CustomInput
                        value={exp.title || ""}
                        onChange={(e) => {
                          const newExperience = [...profileData.experience]
                          newExperience[index].title = e.target.value
                          setProfileData({ ...profileData, experience: newExperience })
                        }}
                        placeholder="Ej: Desarrollador Frontend"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="label">Empresa</label>
                      <CustomInput
                        value={exp.companyName || ""}
                        onChange={(e) => {
                          const newExperience = [...profileData.experience]
                          newExperience[index].companyName = e.target.value
                          setProfileData({ ...profileData, experience: newExperience })
                        }}
                        placeholder="Ej: Empresa S.L."
                      />
                    </div>

                    {/* More fields would go here */}
                  </motion.div>
                ))}

                <CustomButton
                  onClick={() => {
                    const newExperience = [...(profileData.experience || [])]
                    newExperience.push({
                      title: "",
                      companyName: "",
                      timePeriod: { startDate: {}, endDate: {} },
                    })
                    setProfileData({ ...profileData, experience: newExperience })
                  }}
                  className="btn-primary w-full"
                >
                  <Zap className="mr-2 h-4 w-4" />
                  Añadir Experiencia
                </CustomButton>
              </div>

              <div className={`tab-content ${activeTab === "education" ? "active" : ""}`}>
                {/* Similar to experience tab */}
                {(profileData.education || []).map((edu: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-6 p-4 border border-border dark:border-border-dark rounded-lg bg-secondary/5 dark:bg-secondary/10"
                  >
                    <div className="mb-3">
                      <label className="label">Centro Educativo</label>
                      <CustomInput
                        value={edu.schoolName || ""}
                        onChange={(e) => {
                          const newEducation = [...profileData.education]
                          newEducation[index].schoolName = e.target.value
                          setProfileData({ ...profileData, education: newEducation })
                        }}
                        placeholder="Ej: Universidad de Barcelona"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="label">Título</label>
                      <CustomInput
                        value={edu.degreeName || ""}
                        onChange={(e) => {
                          const newEducation = [...profileData.education]
                          newEducation[index].degreeName = e.target.value
                          setProfileData({ ...profileData, education: newEducation })
                        }}
                        placeholder="Ej: Ingeniería Informática"
                      />
                    </div>
                  </motion.div>
                ))}

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
                  className="btn-primary w-full"
                >
                  <Zap className="mr-2 h-4 w-4" />
                  Añadir Educación
                </CustomButton>
              </div>

              <div className={`tab-content ${activeTab === "skills" ? "active" : ""}`}>
                <div className="space-y-4">
                  {(profileData.skills || []).map((skill: any, index: number) => (
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
                          setProfileData({ ...profileData, skills: newSkills })
                        }}
                        placeholder="Ej: React.js"
                      />
                      <button
                        onClick={() => {
                          const newSkills = [...profileData.skills]
                          newSkills.splice(index, 1)
                          setProfileData({ ...profileData, skills: newSkills })
                        }}
                        className="text-secondary hover:text-secondary-dark dark:text-secondary dark:hover:text-secondary-light h-10 w-10 flex items-center justify-center rounded-full"
                      >
                        ×
                      </button>
                    </motion.div>
                  ))}

                  <CustomButton
                    onClick={() => {
                      const newSkills = [...(profileData.skills || [])]
                      newSkills.push({ name: "" })
                      setProfileData({ ...profileData, skills: newSkills })
                    }}
                    className="btn-primary w-full"
                  >
                    <Zap className="mr-2 h-4 w-4" />
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
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2 preview-container overflow-y-auto"
        >
          <div className="preview-header">
            <h3 className="font-semibold text-primary dark:text-primary flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-primary-light dark:text-primary-light" />
              Vista Previa
            </h3>
            <div className="flex gap-2">
              <CustomButton className="btn-outline text-sm">
                <Eye size={16} className="mr-1" />
                Ver como PDF
              </CustomButton>
              <CustomButton className="btn-primary text-sm">
                <Download size={16} className="mr-1" />
                Descargar
              </CustomButton>
            </div>
          </div>

          <div className="preview-content">
            {/* Preview content based on template and data */}
            <div className="preview-section text-center">
              <motion.h1
                className="text-2xl font-bold gradient-text"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                {profileData.firstName} {profileData.lastName}
              </motion.h1>
              <motion.p
                className="text-primary/80 dark:text-primary/80"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {profileData.headline}
              </motion.p>
            </div>

            {profileData.summary && (
              <motion.div
                className="preview-section"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="text-lg font-semibold mb-2 text-primary dark:text-primary flex items-center">
                  <Sparkles className="w-4 h-4 mr-1 text-primary-light dark:text-primary-light" />
                  Resumen
                </h2>
                <p className="text-foreground dark:text-foreground-dark">{profileData.summary}</p>
              </motion.div>
            )}

            {profileData.experience && profileData.experience.length > 0 && (
              <motion.div
                className="preview-section"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <h2 className="text-lg font-semibold mb-2 text-primary dark:text-primary flex items-center">
                  <Sparkles className="w-4 h-4 mr-1 text-primary-light dark:text-primary-light" />
                  Experiencia
                </h2>
                {profileData.experience.map((exp: any, index: number) => (
                  <motion.div
                    key={index}
                    className="mb-3"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <h3 className="font-medium text-primary dark:text-primary">{exp.title}</h3>
                    <p className="text-primary/80 dark:text-primary/80">{exp.companyName}</p>
                    {exp.timePeriod && (
                      <p className="text-sm text-primary/70 dark:text-primary/70">
                        {exp.timePeriod.startDate?.month && exp.timePeriod.startDate?.year
                          ? `${exp.timePeriod.startDate.month}/${exp.timePeriod.startDate.year}`
                          : ""}
                        {exp.timePeriod.endDate?.month && exp.timePeriod.endDate?.year
                          ? ` - ${exp.timePeriod.endDate.month}/${exp.timePeriod.endDate.year}`
                          : exp.timePeriod.startDate
                            ? " - Presente"
                            : ""}
                      </p>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Education section */}
            {profileData.education && profileData.education.length > 0 && (
              <motion.div
                className="preview-section"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <h2 className="text-lg font-semibold mb-2 text-secondary dark:text-secondary flex items-center">
                  <Sparkles className="w-4 h-4 mr-1 text-secondary-light dark:text-secondary-light" />
                  Educación
                </h2>
                {profileData.education.map((edu: any, index: number) => (
                  <motion.div
                    key={index}
                    className="mb-3"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <h3 className="font-medium text-secondary dark:text-secondary">{edu.degreeName}</h3>
                    <p className="text-secondary/80 dark:text-secondary/80">{edu.schoolName}</p>
                    {edu.timePeriod && (
                      <p className="text-sm text-secondary/70 dark:text-secondary/70">
                        {edu.timePeriod.startDate?.year ? `${edu.timePeriod.startDate.year}` : ""}
                        {edu.timePeriod.endDate?.year
                          ? ` - ${edu.timePeriod.endDate.year}`
                          : edu.timePeriod.startDate
                            ? " - Presente"
                            : ""}
                      </p>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Skills section */}
            {profileData.skills && profileData.skills.length > 0 && (
              <motion.div
                className="preview-section"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <h2 className="text-lg font-semibold mb-2 text-secondary dark:text-secondary flex items-center">
                  <Sparkles className="w-4 h-4 mr-1 text-secondary-light dark:text-secondary-light" />
                  Habilidades
                </h2>
                <div className="flex flex-wrap">
                  {profileData.skills.map((skill: any, index: number) => (
                    <motion.span
                      key={index}
                      className="skill-tag"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.9 + index * 0.05 }}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          <motion.div
            className="p-4 flex justify-end border-t border-border dark:border-border-dark"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <CustomButton onClick={handleSave} className="btn-primary" disabled={isSaving}>
              {isSaving ? (
                <>
                  <motion.div
                    className="h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                  Guardando...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Guardar Documento
                </>
              )}
            </CustomButton>
          </motion.div>
        </motion.div>
      )}

      {/* Mobile toggle for preview */}
      <div className="md:hidden mt-4">
        <CustomButton onClick={togglePreview} className="btn-outline w-full flex items-center justify-center">
          {previewVisible ? (
            <>
              <ChevronUp size={16} className="mr-2 text-primary dark:text-primary" />
              Ocultar Vista Previa
            </>
          ) : (
            <>
              <ChevronDown size={16} className="mr-2 text-primary dark:text-primary" />
              Mostrar Vista Previa
            </>
          )}
        </CustomButton>
      </div>
    </div>
  )
}
