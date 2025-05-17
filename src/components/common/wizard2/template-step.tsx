"use client"

import { motion } from "framer-motion"
import { Check, Sparkles } from "lucide-react"

interface TemplateStepProps {
  formData: any
  setFormData: (data: any) => void
}

export default function TemplateStep({ formData, setFormData }: TemplateStepProps) {
  const templates =
    formData.documentType === "cv"
      ? [
          { id: "cv-1", name: "Minimalista", image: "/placeholder.svg?height=200&width=150" },
          { id: "cv-2", name: "Profesional", image: "/placeholder.svg?height=200&width=150" },
          { id: "cv-3", name: "Moderno", image: "/placeholder.svg?height=200&width=150" },
          { id: "cv-4", name: "Creativo", image: "/placeholder.svg?height=200&width=150" },
          { id: "cv-5", name: "Ejecutivo", image: "/placeholder.svg?height=200&width=150" },
          { id: "cv-6", name: "Técnico", image: "/placeholder.svg?height=200&width=150" },
        ]
      : [
          { id: "portfolio-1", name: "Galería", image: "/placeholder.svg?height=200&width=150" },
          { id: "portfolio-2", name: "Showcase", image: "/placeholder.svg?height=200&width=150" },
          { id: "portfolio-3", name: "Interactivo", image: "/placeholder.svg?height=200&width=150" },
          { id: "portfolio-4", name: "Storytelling", image: "/placeholder.svg?height=200&width=150" },
        ]

  const handleSelectTemplate = (templateId: string) => {
    setFormData({
      ...formData,
      templateId,
    })
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
  }

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {templates.map((template) => (
        <motion.div
          key={template.id}
          variants={item}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.98 }}
          className={`card-shine cursor-pointer overflow-hidden ${
            formData.templateId === template.id ? "ring-2 ring-primary dark:ring-primary" : ""
          }`}
          onClick={() => handleSelectTemplate(template.id)}
        >
          <div className="relative h-48 overflow-hidden">
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              className="absolute inset-0"
            >
              <img src={template.image || "/placeholder.svg"} alt={template.name} fill className="object-cover" />
            </motion.div>

            {formData.templateId === template.id && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute top-2 right-2 bg-primary dark:bg-primary text-white rounded-full p-1"
              >
                <Check className="h-4 w-4" />
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-2"
            >
              <div className="flex items-center">
                <Sparkles className="h-3 w-3 text-white mr-1" />
                <span className="text-xs text-white">
                  {formData.documentType === "cv" ? "Currículum" : "Portfolio"}
                </span>
              </div>
            </motion.div>
          </div>

          <div className="p-3 text-center">
            <h3 className="font-medium text-primary dark:text-primary">{template.name}</h3>
          </div>

          {formData.templateId === template.id && (
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
              className="h-1 bg-gradient-to-r from-primary to-secondary dark:from-primary dark:to-secondary"
              style={{ transformOrigin: "left" }}
            />
          )}
        </motion.div>
      ))}
    </motion.div>
  )
}
