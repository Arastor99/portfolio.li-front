import { Profile } from "@common/types/profile"
import { motion } from "framer-motion"
import { Card } from "@components/ui/card"
import { useState } from "react"
import { Button } from "@components/ui/button"
import { formatDate } from "@common/utils/utils"
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
							{" "}
							{
								<Card
									className="h-full p-0 border-gray-300 rounded-xs gap-0 :overflow-hidden transition-all duration-300 hover:shadow-md mx-auto"
									onMouseEnter={() =>
										project.id && setActiveProject(project.id)
									}
									onMouseLeave={() => setActiveProject(null)}
								>
									<div className="relative h-48 w-full overflow-hidden">
										<img
											src="/public/project-placeholder.jpg"
											alt={project.title}
											className="object-cover p-0  transition-transform duration-500 ease-in-out group-hover:scale-105"
										/>
										<div
											className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${
												activeProject === project.id
													? "opacity-100"
													: "opacity-0"
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
									<div className=" flex flex-col w-full px-3 h-48 bg-gray-50">
										<h1 className="text-xl font-bold mt-6 text-gray-900">
											{project.title}
										</h1>

										{project.startDate && project.endDate && (
											<div className="flex flex-col  p-1 justify-center items-start gap-2 text-sm text-gray-500 mt-1">
												<div className="inline-flex gap-2 items-center">
													<Calendar className="h-4 w-4" />
													<span>
														{formatDate(project.startDate)} -{" "}
														{formatDate(project.endDate)}
													</span>
												</div>

												<p className="text-xl font-normal mt-2 text-gray-900">
													{project.description}
												</p>
											</div>
										)}
									</div>
								</Card>
							}
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
