import { motion } from "framer-motion"
import { FileText, LayoutGrid, Zap, Sparkles } from "lucide-react"

import { Profile } from "@common/types/profile"
interface FormData {
	importMethod: string
	documentType: string
	templateName: string
	profileData: Profile | undefined
}

interface DocumentTypeStepProps {
	formData: FormData
	setFormData: (data: FormData) => void
}

export default function DocumentTypeStep({
	formData,
	setFormData,
}: DocumentTypeStepProps) {
	const handleSelectType = (type: string) => {
		setFormData({
			...formData,
			documentType: type,
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
		show: {
			opacity: 1,
			y: 0,
			transition: { type: "spring", stiffness: 300, damping: 30 },
		},
	}

	return (
		<motion.div
			variants={container}
			initial="hidden"
			animate="show"
			className="grid grid-cols-1 md:grid-cols-2 gap-8"
		>
			<motion.div
				variants={item}
				whileHover={{ scale: 1.05, y: -5 }}
				whileTap={{ scale: 0.98 }}
				className={`selection-card ${
					formData.documentType === "cv" ? "selected" : ""
				}`}
				onClick={() => handleSelectType("cv")}
			>
				<motion.div
					className="selection-card-icon primary"
					animate={{
						y: [0, -10, 0],
						rotate: [0, -5, 5, 0],
					}}
					transition={{
						duration: 4,
						repeat: Number.POSITIVE_INFINITY,
						repeatType: "reverse",
					}}
				>
					<FileText size={32} />
				</motion.div>

				<h3 className="text-xl font-medium mb-2 text-primary dark:text-primary">
					Currículum Vitae
				</h3>
				<p className="text-center text-primary/80 dark:text-primary/80 mb-4">
					Ideal para aplicar a ofertas de trabajo y destacar tu experiencia
					profesional
				</p>

				<motion.div
					className="flex items-center text-primary dark:text-primary"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}
				>
					<Zap className="h-4 w-4 mr-1" />
					<span className="text-sm font-medium">
						Perfecto para búsqueda de empleo
					</span>
				</motion.div>

				{formData.documentType === "cv" && (
					<div className="selection-badge">
						<Sparkles className="h-3 w-3" />
						<span>Seleccionado</span>
					</div>
				)}
			</motion.div>

			<motion.div
				variants={item}
				whileHover={{ scale: 1.05, y: -5 }}
				whileTap={{ scale: 0.98 }}
				className={`selection-card ${
					formData.documentType === "portfolio" ? "selected" : ""
				}`}
				onClick={() => handleSelectType("portfolio")}
			>
				<motion.div
					className="selection-card-icon secondary"
					animate={{
						y: [0, -10, 0],
						rotate: [0, 5, -5, 0],
					}}
					transition={{
						duration: 4,
						repeat: Number.POSITIVE_INFINITY,
						repeatType: "reverse",
						delay: 0.5,
					}}
				>
					<LayoutGrid size={32} />
				</motion.div>

				<h3 className="text-xl font-medium mb-2 text-secondary dark:text-secondary">
					Portfolio
				</h3>
				<p className="text-center text-secondary/80 dark:text-secondary/80 mb-4">
					Perfecto para mostrar tus proyectos y habilidades de forma visual
				</p>

				<motion.div
					className="flex items-center text-secondary dark:text-secondary"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}
				>
					<Zap className="h-4 w-4 mr-1" />
					<span className="text-sm font-medium">
						Ideal para creativos y freelancers
					</span>
				</motion.div>

				{formData.documentType === "portfolio" && (
					<div className="selection-badge">
						<Sparkles className="h-3 w-3" />
						<span>Seleccionado</span>
					</div>
				)}
			</motion.div>
		</motion.div>
	)
}
