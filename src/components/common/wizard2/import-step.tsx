"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Linkedin, FileText, Sparkles } from "lucide-react"
import { link } from "fs"
import { validateLinkedinUrl } from "@common/utils/utils"

interface ImportStepProps {
  formData: any
  setFormData: (data: any) => void
  linkedinUrl?: string
  setLinkedinUrl?: (url: string) => void
}

export default function ImportStep({ formData, setFormData, linkedinUrl, setLinkedinUrl  }: ImportStepProps) {
  const [isLoading, setIsLoading] = useState(false)

  const [inputFocused, setInputFocused] = useState(false)
  
  const handleClick = () => {
    

    setIsLoading(true)
    

      setFormData({
        ...formData,
        importMethod: "linkedin",
      })
      setIsLoading(false)
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
        whileHover={{
          scale: formData.importMethod !== "linkedin" ? 1.03 : 1,
          y: formData.importMethod !== "linkedin" ? -5 : 0,
        }}
        whileTap={{ scale: 0.98 }}
        className={`selection-card ${formData.importMethod === "linkedin" ? "selected" : ""}`}
        onClick={handleClick}
      >
        {isLoading ? (
          <div className="selection-card-icon primary relative">
            <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-700"></div>
            <div className="absolute inset-0 rounded-full border-4 border-t-blue-500 dark:border-t-blue-400 border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Linkedin size={24} className="text-blue-500 dark:text-blue-400" />
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

        <h3 className="text-xl font-medium mb-2 text-blue-600 dark:text-blue-400">Importar desde LinkedIn</h3>
        <p className="text-center text-blue-600/80 dark:text-blue-400/80 mb-4">
          Importa automáticamente tu perfil profesional desde LinkedIn
        </p>

        <motion.div
          className="flex items-center text-blue-600 dark:text-blue-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Sparkles className="h-4 w-4 mr-1" />
          <span className="text-sm font-medium">Rápido y sencillo</span>
        </motion.div>

        <div className="mt-4 w-full relative" >
          <input
            type="text"
            value={linkedinUrl}
            onChange={(e) => setLinkedinUrl(e.target.value)}
            placeholder="Introduce tu URL de LinkedIn"
            className="w-full px-4 py-2 rounded-md bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 text-gray-800  placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-200"
            disabled={isLoading}
          />
        {!linkedinUrl && formData.importMethod === "linkedin" && (
          <p>
            <span className="text-red-500 text-sm">Por favor, introduce una URL de LinkedIn</span> 
          </p>
        )}
        {linkedinUrl && !validateLinkedinUrl(linkedinUrl) && (
          <p>
            <span className="text-red-500 text-sm">Por favor, introduce una URL de LinkedIn válida</span> 
          </p>
        )}
        </div>

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
