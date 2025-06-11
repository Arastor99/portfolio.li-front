import { Profile } from "@common/types/profile"
import { formatDate } from "@common/utils/utils"
import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

interface Props {
	profile: Profile
}
export default function Experience({ profile }: Props) {
	return (
		<section id="experience" className="py-20 bg-gray-50">
			<div className="container px-4 md:px-6 mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12 text-center"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Experiencia Profesional
					</h2>
				</motion.div>
				<div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
					{profile.experiences.map((experience, index) => (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							key={experience.id}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 relative"
						>
							<div className="absolute top-6 left-0 w-1 h-[calc(100%-3rem)] bg-teal-500 rounded-r-full"></div>
							<div className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4">
								<div className="flex justify-center md:justify-start items-center">
									<div className="w-16 h-16 rounded-md overflow-hidden  flex items-center justify-center">
										<img
											src="/public/company_image.png?height=64&width=64"
											alt={experience.companyName}
											width={64}
											height={64}
											className="object-contain bg-none"
										/>
									</div>
								</div>
								<div>
									<h3 className="text-xl font-bold text-gray-900">
										{experience.title}
									</h3>

									<h4 className="text-lg font-medium text-teal-600 mb-2">
										{experience.companyName}
									</h4>

									{experience?.startDate && experience?.endDate && (
										<div className="flex, flex-wrap gap-4 text-sm text-gray-500 mb-4">
											<div className="flex items-center gap-1">
												<Calendar className="h-4 w-4" />
												<span>
													{formatDate(experience.startDate)} -{" "}
													{formatDate(experience.endDate)}
												</span>
											</div>
											<div className="flex items-center gap-1">
												<MapPin className="h-4 w-4" />
												<span>{experience.locationName}</span>
											</div>
											<p className="text-gray-700">{experience.description}</p>

											<div className="mt-4 flex flex-wrap gap-2">
												{experience.companyIndustries.map((industry, i) => (
													<span
														key={i}
														className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
													>
														{industry}
													</span>
												))}
											</div>
										</div>
									)}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
