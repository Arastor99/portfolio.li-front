"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Linkedin, FileText, Sparkles } from "lucide-react"

interface ImportStepProps {
  formData: any
  setFormData: (data: any) => void
}

export default function ImportStep({ formData, setFormData }: ImportStepProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleImportLinkedIn = () => {
    setIsLoading(true)
    // Simulate API call to LinkedIn
    setTimeout(() => {
      // This would be the response from the LinkedIn API
      const sampleProfileData = {
        firstName: "Miguel Angel",
        lastName: "Durán García",
        headline:
          "Software Engineer and Web Developer. Awarded as GitHub Star, Microsoft MVP, and Google Developer Expert.",
        summary:
          "I was born on the 12th of February of 1985 in Barcelona. I'm a passionate about programming since a child...",
        experience: [
          {
            title: "Content Creator about Programming and Web Technologies",
            companyName: "midudev",
            timePeriod: { startDate: { month: 1, year: 2021 } },
          },
          // More experiences would be here
        ],
        education: [
          {
            schoolName: "Universitat Oberta de Catalunya",
            degreeName: "Ingeniería de Software",
            timePeriod: { endDate: { year: 2009 }, startDate: { year: 2003 } },
          },
        ],
        skills: [
          { name: "Desarrollo front end" },
          { name: "Desarrollo de software" },
          { name: "SQL" },
          { name: "React.js" },
        ],
      }

      setFormData({
        ...formData,
        importMethod: "linkedin",
        profileData: sampleProfileData,
      })
      setIsLoading(false)
    }, 1500)
  }

  const handleManualEntry = () => {
    setFormData({
      ...formData,
      importMethod: "manual",
      profileData: {
        firstName: "",
        lastName: "",
        headline: "",
        summary: "",
        experience: [],
        education: [],
        skills: [],
      },
    })
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
  }

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div
        variants={item}
        whileHover={{ scale: 1.03, y: -5 }}
        whileTap={{ scale: 0.98 }}
        className={`selection-card ${formData.importMethod === "linkedin" ? "selected" : ""}`}
        onClick={handleImportLinkedIn}
      >
        {isLoading ? (
          <div className="selection-card-icon primary relative">
            <div className="absolute inset-0 rounded-full border-4 border-border dark:border-border-dark"></div>
            <div className="absolute inset-0 rounded-full border-4 border-t-primary dark:border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Linkedin size={24} className="text-primary dark:text-primary" />
            </motion.div>
          </div>
        ) : (
          <motion.div
            className="selection-card-icon primary"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <Linkedin size={32} />
          </motion.div>
        )}

        <h3 className="text-xl font-medium mb-2 text-primary dark:text-primary">Importar desde LinkedIn</h3>
        <p className="text-center text-primary/80 dark:text-primary/80 mb-4">
          Importa automáticamente tu perfil profesional desde LinkedIn
        </p>

        <motion.div
          className="flex items-center text-primary dark:text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Sparkles className="h-4 w-4 mr-1" />
          <span className="text-sm font-medium">Rápido y sencillo</span>
        </motion.div>

        {formData.importMethod === "linkedin" && (
          <div className="selection-badge">
            <Sparkles className="h-3 w-3" />
            <span>Seleccionado</span>
          </div>
        )}
      </motion.div>

      <motion.div
        variants={item}
        whileHover={{ scale: 1.03, y: -5 }}
        whileTap={{ scale: 0.98 }}
        className={`selection-card ${formData.importMethod === "manual" ? "selected" : ""}`}
        onClick={handleManualEntry}
      >
        <motion.div
          className="selection-card-icon secondary"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 0.5,
          }}
        >
          <FileText size={32} />
        </motion.div>

        <h3 className="text-xl font-medium mb-2 text-secondary dark:text-secondary">Rellenar manualmente</h3>
        <p className="text-center text-secondary/80 dark:text-secondary/80 mb-4">
          Crea tu currículum desde cero con nuestro editor intuitivo
        </p>

        <motion.div
          className="flex items-center text-secondary dark:text-secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Sparkles className="h-4 w-4 mr-1" />
          <span className="text-sm font-medium">Control total</span>
        </motion.div>

        {formData.importMethod === "manual" && (
          <div className="selection-badge">
            <Sparkles className="h-3 w-3" />
            <span>Seleccionado</span>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}
