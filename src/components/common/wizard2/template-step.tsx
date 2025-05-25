"use client"

import type { CVTemplate } from "@common/types/cv-template"
import type { PortfolioTemplate } from "@common/types/portfolio-template"
import { getCVTemplates } from "@lib/services/cv-template.service"
import { getPotfolioTemplates } from "@lib/services/portfolio-template.service"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Sparkles } from "lucide-react"
import { useEffect, useState, useRef } from "react"

interface TemplateStepProps {
  formData: any
  setFormData: (data: any) => void
}

export default function TemplateStep({ formData, setFormData }: TemplateStepProps) {
  const [templates, setTemplates] = useState<PortfolioTemplate[] | CVTemplate[]>([])
  const [imageIndexes, setImageIndexes] = useState<{ [name: string]: number }>({})
  const intervalRefs = useRef<{ [name: string]: NodeJS.Timeout | null }>({})

  const imageNamesPortfolios = [
    "portfolio-hero.png",
    "portfolio-experience.png",
    "portfolio-about.png",
    "portfolio-projects.png",
  ]

  const imageNamesCV = ["indio.png"]

  const fetchTemplates = async () => {
    const isCV = formData.documentType === "cv"
    const templates = isCV ? await getCVTemplates() : await getPotfolioTemplates()
    setTemplates(templates)

    const initIndexes: { [name: string]: number } = {}
    templates.forEach((t) => {
      initIndexes[t.name] = 0
    })
    setImageIndexes(initIndexes)
  }

  useEffect(() => {
    fetchTemplates()
  }, [])

  useEffect(() => {
    const selectedName = formData.templateName
    const imageNames = formData.documentType === "cv" ? imageNamesCV : imageNamesPortfolios

    // Limpiar todos los intervalos existentes
    Object.keys(intervalRefs.current).forEach((key) => {
      if (intervalRefs.current[key]) {
        clearInterval(intervalRefs.current[key]!)
        intervalRefs.current[key] = null
      }
    })

    // Crear nuevo intervalo solo para el seleccionado
    if (selectedName) {
      intervalRefs.current[selectedName] = setInterval(() => {
        setImageIndexes((prev) => {
          const nextIndex = ((prev[selectedName] || 0) + 1) % imageNames.length
          return { ...prev, [selectedName]: nextIndex }
        })
      }, 2000)
    }

    return () => {
      Object.values(intervalRefs.current).forEach((interval) => {
        if (interval) clearInterval(interval)
      })
    }
  }, [formData.templateName, formData.documentType])

  const handleSelectTemplate = (templateName: string) => {
    setFormData({ ...formData, templateName })
    setImageIndexes((prev) => ({
      ...prev,
      [templateName]: 0,
    }))
  }

  const getImagePath = (template: PortfolioTemplate | CVTemplate) => {
    const imageNames = formData.documentType === "cv" ? imageNamesCV : imageNamesPortfolios
    const currentImage = imageNames[imageIndexes[template.name] || 0]
    const basePath = formData.documentType === "cv" ? "/templatesCv" : "/templatesPortfolio"
    return `${basePath}/${template.name}/${currentImage}`
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
  }

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {templates.map((template) => {
        const imageNames = formData.documentType === "cv" ? imageNamesCV : imageNamesPortfolios
        const currentIndex = imageIndexes[template.name] || 0

        return (
          <motion.div
            key={template.name}
            variants={item}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className={`card-shine cursor-pointer overflow-hidden ${
              formData.templateName === template.name ? "ring-2 ring-primary dark:ring-primary" : ""
            }`}
            onClick={() => handleSelectTemplate(template.name)}
          >
            <div className="relative h-72 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${template.name}-${currentIndex}`}
                  src={getImagePath(template)}
                  alt={template.name}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>

              {formData.templateName === template.name && (
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

            {formData.templateName === template.name && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                className="h-1 bg-gradient-to-r from-primary to-secondary dark:from-primary dark:to-secondary"
                style={{ transformOrigin: "left" }}
              />
            )}
          </motion.div>
        )
      })}
    </motion.div>
  )
}
