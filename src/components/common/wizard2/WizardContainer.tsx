"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useMotionValue } from "framer-motion"
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react"

import ImportStep from "@components/common/wizard2/import-step"
import DocumentTypeStep from "@components/common/wizard2/document-type-step"
import TemplateStep from "@components/common/wizard2/template-step"
import EditorStep from "@components/common/wizard2/editor-step"
import StepIndicator from "@components/common/wizard2/step-indicator"
import BackgroundParticles from "@components/common/wizard2/background-particles"

export default function WizardPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [direction, setDirection] = useState(0)
  const [formData, setFormData] = useState({
    importMethod: "",
    documentType: "",
    templateId: "",
    profileData: null,
  })

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
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
      component: <ImportStep formData={formData} setFormData={setFormData} />,
    },
    {
      id: "document-type",
      title: "¿Qué quieres crear?",
      component: <DocumentTypeStep formData={formData} setFormData={setFormData} />,
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

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
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
        return !!formData.importMethod
      case 1:
        return !!formData.documentType
      case 2:
        return !!formData.templateId
      default:
        return true
    }
  }

  return (
    <main className="min-h-screen bg-mesh relative overflow-hidden">
      <BackgroundParticles />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-2">Resume Builder</h1>
          <p className="text-primary dark:text-primary text-lg">
            Crea tu currículum o portfolio profesional en minutos
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <StepIndicator steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="card-shine p-6 mb-6 min-h-[400px] relative overflow-hidden"
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
              className="h-full relative z-10"
            >
              <motion.h2
                className="text-2xl md:text-3xl font-semibold mb-6 text-primary dark:text-primary flex items-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="w-6 h-6 mr-2 text-primary-light dark:text-primary-light" />
                {steps[currentStep].title}
              </motion.h2>
              {steps[currentStep].component}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="flex justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button
            onClick={goToPreviousStep}
            disabled={currentStep === 0}
            className="btn btn-outline flex items-center gap-2"
          >
            <ChevronLeft size={18} />
            Anterior
          </button>

          <button
            onClick={goToNextStep}
            disabled={!canProceed() || currentStep === steps.length - 1}
            className="btn btn-primary flex items-center gap-2"
          >
            Siguiente
            <ChevronRight size={18} />
          </button>
        </motion.div>
      </div>
    </main>
  )
}
