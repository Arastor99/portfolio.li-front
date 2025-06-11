"use client"

import { Profile } from "@common/types/profile"
import { motion } from "framer-motion"
import { GraduationCap, Calendar, Award } from "lucide-react"

interface EducationProps {
	profile: Profile
}

export default function Education({ profile }: EducationProps) {
	return (
		<section id="education" className="py-20 bg-white">
			<div className="container px-4 md:px-6 mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12 text-center"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Educación</h2>
					<div className="w-20 h-1 bg-teal-500 mx-auto"></div>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
					{/* Education */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="bg-gray-50 p-6 rounded-lg shadow-sm"
					>
						<div className="flex items-center gap-3 mb-6">
							<div className="p-3 bg-teal-100 rounded-full">
								<GraduationCap className="h-6 w-6 text-teal-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900">
								Formación Académica
							</h3>
						</div>

						{profile.education.map((edu) => (
							<div
								key={edu.id}
								className="mb-6 border-l-2 border-teal-200 pl-4"
							>
								<h4 className="text-lg font-semibold text-gray-900">
									{edu.schoolName}
								</h4>
								<p className="text-teal-600 font-medium">{edu.degreeName}</p>
								<div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
									<Calendar className="h-4 w-4" />
									<span>
										{edu.startYear} - {edu.endYear}
									</span>
								</div>
								<p className="mt-2 text-gray-700">{edu.description}</p>
								<div className="mt-2 text-sm text-gray-600">
									<span className="font-medium">Actividades:</span>{" "}
									{edu.activities}
								</div>
								<div className="mt-1 text-sm text-gray-600">
									<span className="font-medium">Calificación:</span> {edu.grade}
								</div>
							</div>
						))}
					</motion.div>

					{/* Certifications and Honors */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						{/* Certifications */}
						<div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
							<div className="flex items-center gap-3 mb-6">
								<div className="p-3 bg-teal-100 rounded-full">
									<Award className="h-6 w-6 text-teal-600" />
								</div>
								<h3 className="text-xl font-bold text-gray-900">
									Certificaciones
								</h3>
							</div>

							{profile.certifications.map((cert) => (
								<div
									key={cert.id}
									className="mb-4 border-l-2 border-teal-200 pl-4"
								>
									<h4 className="text-lg font-semibold text-gray-900">
										{cert.name}
									</h4>
									<p className="text-teal-600">{cert.authority}</p>
									{cert.startDate && cert.endDate && (
										<div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
											<Calendar className="h-4 w-4" />
											<span>
												{formatDate(cert.startDate)} -{" "}
												{formatDate(cert.endDate)}
											</span>
										</div>
									)}
								</div>
							))}
						</div>

						{/* Honors */}
						<div className="bg-gray-50 p-6 rounded-lg shadow-sm">
							<div className="flex items-center gap-3 mb-6">
								<div className="p-3 bg-teal-100 rounded-full">
									<Award className="h-6 w-6 text-teal-600" />
								</div>
								<h3 className="text-xl font-bold text-gray-900">
									Reconocimientos
								</h3>
							</div>

							{profile.honors.map((honor) => (
								<div
									key={honor.id}
									className="mb-4 border-l-2 border-teal-200 pl-4"
								>
									<h4 className="text-lg font-semibold text-gray-900">
										{honor.title}
									</h4>
									<p className="text-teal-600">{honor.issuer}</p>
									{honor?.issueDate && (
										<div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
											<Calendar className="h-4 w-4" />

											<span>{formatDate(honor.issueDate)}</span>
										</div>
									)}
									<p className="mt-2 text-gray-700">{honor.description}</p>
								</div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

function formatDate(date: Date): string {
	return new Date(date).toLocaleDateString("es-ES", {
		year: "numeric",
		month: "short",
	})
}
