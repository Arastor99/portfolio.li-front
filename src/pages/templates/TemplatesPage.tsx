import { motion } from "framer-motion"

export default function TemplatesPage() {
	const templates = [
		{
			id: 1,
			name: "Minimalista",
			category: "CV",
			image: "/placeholder.svg?height=300&width=220",
		},
		{
			id: 2,
			name: "Profesional",
			category: "CV",
			image: "/placeholder.svg?height=300&width=220",
		},
		{
			id: 3,
			name: "Creativo",
			category: "Portfolio",
			image: "/placeholder.svg?height=300&width=220",
		},
		{
			id: 4,
			name: "Moderno",
			category: "Portfolio",
			image: "/placeholder.svg?height=300&width=220",
		},
		{
			id: 5,
			name: "Elegante",
			category: "CV",
			image: "/placeholder.svg?height=300&width=220",
		},
		{
			id: 6,
			name: "Dinámico",
			category: "Portfolio",
			image: "/placeholder.svg?height=300&width=220",
		},
	]

	const categories = ["Todos", "CV", "Portfolio"]

	return (
		<div className="min-h-screen bg-[#F9FAFB] p-4 md:p-8 pt-20">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="max-w-6xl mx-auto"
			>
				<div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
					<div>
						<h1 className="text-2xl md:text-3xl font-bold text-[#0F172A]">
							Templates
						</h1>
						<p className="text-[#64748B]">
							Elige entre nuestra colección de diseños profesionales
						</p>
					</div>

					<div className="flex space-x-2 bg-white p-1 rounded-lg shadow-sm">
						{categories.map((category) => (
							<motion.button
								key={category}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className={`px-4 py-2 rounded-md text-sm font-medium ${
									category === "Todos"
										? "bg-[#6366F1] text-white"
										: "text-[#64748B] hover:bg-gray-100"
								}`}
							>
								{category}
							</motion.button>
						))}
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					{templates.map((template) => (
						<motion.div
							key={template.id}
							whileHover={{ y: -5 }}
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.3 }}
							className="bg-white rounded-xl overflow-hidden shadow-md group"
						>
							<div className="relative">
								<img
									src={template.image || "/placeholder.svg"}
									alt={template.name}
									className="w-full h-auto object-cover"
								/>
								<div className="absolute inset-0 bg-[#6366F1]/0 group-hover:bg-[#6366F1]/10 transition-all flex items-center justify-center">
									<div className="opacity-0 group-hover:opacity-100 transition-opacity flex space-x-2">
										<motion.button
											whileHover={{ scale: 1.1 }}
											whileTap={{ scale: 0.9 }}
											className="p-2 bg-white rounded-full shadow-md"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5 text-[#6366F1]"
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
										</motion.button>
										<motion.button
											whileHover={{ scale: 1.1 }}
											whileTap={{ scale: 0.9 }}
											className="p-2 bg-[#6366F1] rounded-full shadow-md"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5 text-white"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
												/>
											</svg>
										</motion.button>
									</div>
								</div>
							</div>
							<div className="p-4">
								<div className="flex justify-between items-center">
									<h3 className="font-medium text-[#0F172A]">
										{template.name}
									</h3>
									<span className="text-xs px-2 py-1 bg-[#6366F1]/10 text-[#6366F1] rounded-full">
										{template.category}
									</span>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</div>
	)
}
