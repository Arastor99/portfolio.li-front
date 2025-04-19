import { motion } from "framer-motion"

export default function PortfolioPage() {
	const projects = [
		{
			id: 1,
			title: "E-commerce Website",
			description: "Tienda online desarrollada con React y Node.js",
			image: "/placeholder.svg?height=200&width=300",
			tags: ["React", "Node.js", "MongoDB"],
		},
		{
			id: 2,
			title: "Mobile Banking App",
			description: "Aplicación móvil para gestión financiera",
			image: "/placeholder.svg?height=200&width=300",
			tags: ["React Native", "Firebase"],
		},
		{
			id: 3,
			title: "Portfolio Personal",
			description: "Sitio web personal con proyectos y experiencia",
			image: "/placeholder.svg?height=200&width=300",
			tags: ["HTML", "CSS", "JavaScript"],
		},
		{
			id: 4,
			title: "Dashboard Analytics",
			description: "Panel de control para visualización de datos",
			image: "/placeholder.svg?height=200&width=300",
			tags: ["React", "D3.js", "Tailwind CSS"],
		},
	]

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
							Portfolio
						</h1>
						<p className="text-[#64748B]">
							Gestiona tus proyectos y experiencia profesional
						</p>
					</div>

					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="px-4 py-2 bg-[#6366F1] text-white rounded-lg shadow-md flex items-center space-x-2"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M12 6v6m0 0v6m0-6h6m-6 0H6"
							/>
						</svg>
						<span>Añadir Proyecto</span>
					</motion.button>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{projects.map((project) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.3 }}
							className="bg-white rounded-xl overflow-hidden shadow-md group"
						>
							<div className="relative">
								<img
									src={project.image || "/placeholder.svg"}
									alt={project.title}
									className="w-full h-48 object-cover"
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
													d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
												/>
											</svg>
										</motion.button>
										<motion.button
											whileHover={{ scale: 1.1 }}
											whileTap={{ scale: 0.9 }}
											className="p-2 bg-white rounded-full shadow-md"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5 text-red-500"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
												/>
											</svg>
										</motion.button>
									</div>
								</div>
							</div>
							<div className="p-4">
								<h3 className="font-medium text-lg text-[#0F172A]">
									{project.title}
								</h3>
								<p className="text-[#64748B] mb-3">{project.description}</p>
								<div className="flex flex-wrap gap-2">
									{project.tags.map((tag, index) => (
										<span
											key={index}
											className="text-xs px-2 py-1 bg-[#6366F1]/10 text-[#6366F1] rounded-full"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</motion.div>
		</div>
	)
}
