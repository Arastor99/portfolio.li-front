import { PortfolioTemplate } from "@common/types/portfolio-template"
import { getPotfolioTemplates } from "@lib/services/portfolio-template.service"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState, useRef } from "react"

interface Props {
	type: "portfolio" | "cv"
	handleNext: (templateName: string) => void
	handleBack: () => void
}

export default function Step3TemplateSelection({
	type,
	handleNext,
	handleBack,
}: Props) {
	const [templates, setTemplates] = useState<PortfolioTemplate[]>([])
	const [imageIndexes, setImageIndexes] = useState<{ [id: string]: number }>({})
	const intervalRefs = useRef<{ [id: string]: NodeJS.Timeout | null }>({})

	const imageNames = [
		"portfolio-hero.png",
		"portfolio-experience.png",
		"portfolio-about.png",
		"portfolio-projects.png",
	]

	const fetchTemplates = async () => {
		if (type === "cv") {
			// const templates = await getCVTemplates()
			// setTemplates(templates)
		} else {
			const templates = await getPotfolioTemplates()
			setTemplates(templates)

			const initIndexes: { [id: string]: number } = {}
			templates.forEach((t) => {
				initIndexes[t.id] = 0
			})
			setImageIndexes(initIndexes)
		}
	}

	useEffect(() => {
		fetchTemplates()
	}, [type])

	const handleMouseEnter = (templateId: string) => {
		if (intervalRefs.current[templateId]) return

		intervalRefs.current[templateId] = setInterval(() => {
			setImageIndexes((prev) => {
				const nextIndex = (prev[templateId] + 1) % imageNames.length
				return { ...prev, [templateId]: nextIndex }
			})
		}, 2000) // Espera 2s entre cambios para que dure visible más tiempo
	}

	const handleMouseLeave = (templateId: string) => {
		if (intervalRefs.current[templateId]) {
			clearInterval(intervalRefs.current[templateId]!)
			intervalRefs.current[templateId] = null
		}

		setImageIndexes((prev) => ({
			...prev,
			[templateId]: 0,
		}))
	}

	return (
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.2 }}
  className="space-y-6"
>
  <div className="text-center space-y-2">
    <h1 className="text-2xl md:text-3xl font-bold text-[#0F172A]">
      Elige un template
    </h1>
    <p className="text-[#64748B]">
      Selecciona el diseño que mejor se adapte a tu estilo
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
    {templates.map((template) => {
      const currentImage =
        imageNames[imageIndexes[template.id] || 0] ?? imageNames[0]
      const imagePath = `/templates/${template.name}/${currentImage}`

      return (
        <motion.div
          key={template.id}
          onClick={() => handleNext(template.name)}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          onMouseEnter={() => handleMouseEnter(template.id)}
          onMouseLeave={() => handleMouseLeave(template.id)}
          className="flex flex-col items-center space-y-2 cursor-pointer group"
        >
          <div className="relative overflow-hidden rounded-lg border-2 border-transparent group-hover:border-[#6366F1] transition-all w-full aspect-[5/3]">
            <AnimatePresence mode="wait">
              <motion.img
                key={imagePath}
                src={imagePath}
                alt={template.name}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.6 }} // Deslizamiento suave
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-[#6366F1]/0 group-hover:bg-[#6366F1]/10 transition-all flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <span className="text-sm font-medium text-[#0F172A]">
            {template.name}
          </span>
        </motion.div>
      )
    })}
  </div>

  <div className="flex justify-between pt-4">
    <motion.button
      onClick={handleBack}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="px-6 py-2 border border-gray-300 text-[#64748B] font-medium rounded-lg hover:bg-gray-50 transition-colors"
    >
      Atrás
    </motion.button>
  </div>
</motion.div>
	)
}
