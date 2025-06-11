import { Profile } from "@common/types/profile"
import { motion } from "framer-motion"
import { Card } from "@components/ui/card"
import { useState } from "react"
import { Button } from "@components/ui/button"
import { Calendar } from "lucide-react"

// interface Props {
// 	profile: Profile
// }
// export default function Projects({ profile }: Props) {
// 	const [activeProject, setActiveProject] = useState<string | null>(null)
// 	return (
// 		<section id="projects" className="py-20 bg-gray-50">
// 			<div className="container px-4 md:px-6 mx-auto">
// 				<motion.div
// 					initial={{ opacity: 0, y: 20 }}
// 					whileInView={{ opacity: 1, y: 0 }}
// 					viewport={{ once: true }}
// 					transition={{ duration: 0.6 }}
// 					className="mb-12 text-center"
// 				>
// 					<h2 className="text-3xl md:text-4xl font-bold mb-4">Proyectos</h2>
// 					<div className="w-20 h-1 bg-teal-500 mx-auto"></div>
// 				</motion.div>
// 				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// 					{profile.projects.map((project, index) => (
// 						<motion.div
// 							key={project.id}
// 							initial={{ opacity: 0, y: 20 }}
// 							whileInView={{ opacity: 1, y: 0 }}
// 							viewport={{ once: true }}
// 							transition={{ duration: 0.6, delay: index * 0.1 }}
// 						>
// 							<Card
// 								className="h-full overflow-hidden transition-all duration-300 hover:shadow-md"
// 								onMouseEnter={() => project.id && setActiveProject(project.id)}
// 								onMouseLeave={() => setActiveProject(null)}
// 							>
// 								{project.title}
// 								<div className="relative h-48 w-full overflow-hidden">
// 									<img
// 										src="/public/project-placeholder.jpg"
// 										alt={project.title}
// 										className=" object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
// 									/>
// 								</div>
// 								/
// 							</Card>
// 						</motion.div>
// 					))}
// 				</div>
// 			</div>
// 		</section>
// 	)
// }

interface ProjectsProps {
	profile: Profile
}

export default function Projects({ profile }: ProjectsProps) {
	const [activeProject, setActiveProject] = useState<string | null>(null)

	return (
		<section id="projects" className="py-20 bg-gray-50">
			<div className="container px-4 md:px-6 mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12 text-center"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Proyectos</h2>
					<div className="w-20 h-1 bg-teal-500 mx-auto"></div>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{profile.projects.map((project, index) => (
						<motion.div
							key={project.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
						>
							<Card
								className="h-full overflow-hidden transition-all duration-300 hover:shadow-md "
								onMouseEnter={() => project.id && setActiveProject(project.id)}
								onMouseLeave={() => setActiveProject(null)}
							>
								<div className="relative h-48 w-full overflow-hidden">
									<img
										src="/placeholder.svg?height=300&width=500"
										alt={project.title}
										className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
									/>
									<div
										className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${
											activeProject === project.id ? "opacity-100" : "opacity-0"
										}`}
									/>
									<div
										className={`absolute bottom-0 left-0 right-0 p-4 text-white transition-transform duration-300 ${
											activeProject === project.id
												? "translate-y-0"
												: "translate-y-10 opacity-0"
										}`}
									>
										<Button
											variant="outline"
											className="text-white border-white hover:bg-white/20 hover:text-white"
										>
											Ver detalles
										</Button>
									</div>
								</div>
							</Card>
						</motion.div>
					))}

					{/* Additional project examples */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						<Card
							className="h-full overflow-hidden transition-all duration-300 hover:shadow-md"
							onMouseEnter={() => setActiveProject("proj2")}
							onMouseLeave={() => setActiveProject(null)}
						>
							<div className="relative h-48 w-full overflow-hidden">
								<img
									src="/placeholder.svg?height=300&width=500"
									alt="E-commerce Platform"
									className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
								/>
								<div
									className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${
										activeProject === "proj2" ? "opacity-100" : "opacity-0"
									}`}
								/>
								<div
									className={`absolute bottom-0 left-0 right-0 p-4 text-white transition-transform duration-300 ${
										activeProject === "proj2"
											? "translate-y-0"
											: "translate-y-10 opacity-0"
									}`}
								>
									<Button
										variant="outline"
										className="text-white border-white hover:bg-white/20 hover:text-white"
									>
										Ver detalles
									</Button>
								</div>
							</div>
						</Card>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<Card
							className="h-full overflow-hidden transition-all duration-300 hover:shadow-md"
							onMouseEnter={() => setActiveProject("proj3")}
							onMouseLeave={() => setActiveProject(null)}
						>
							<div className="relative h-48 w-full overflow-hidden">
								<img
									src="/placeholder.svg?height=300&width=500"
									alt="Dashboard Analytics"
									className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
								/>
								<div
									className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${
										activeProject === "proj3" ? "opacity-100" : "opacity-0"
									}`}
								/>
								<div
									className={`absolute bottom-0 left-0 right-0 p-4 text-white transition-transform duration-300 ${
										activeProject === "proj3"
											? "translate-y-0"
											: "translate-y-10 opacity-0"
									}`}
								>
									<Button
										variant="outline"
										className="text-white border-white hover:bg-white/20 hover:text-white"
									>
										Ver detalles
									</Button>
								</div>
							</div>
						</Card>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
