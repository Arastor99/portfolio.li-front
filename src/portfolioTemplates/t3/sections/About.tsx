import { Profile } from "@common/types/profile"
import { motion } from "framer-motion"
import { MapPin, Calendar, Briefcase, Globe, Languages } from "lucide-react"

interface Props {
	profile: Profile
}

export default function About({ profile }: Props) {
	return (
		<section id="about" className="py-20 bg-white">
			<div className="w-full px-4 md:px-16 mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12 text-center"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre mí</h2>
					<div className="w-20 h-1 bg-teal-500 mx-auto "></div>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-10 gap-8 ">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="col-span-6"
					>
						<p className="text-lg text-gray-700 mb-6 leading-relaxed">
							{profile.summary}
						</p>
						<p className="text-lg text-gray-700 mb-6 leading-relaxed">
							Soy una desarrolladora Full Stack con experiencia en la creación
							de aplicaciones web modernas y escalables. Me especializo en
							tecnologías como React, Node.js y MongoDB, siempre buscando
							implementar soluciones innovadoras a problemas complejos.
						</p>

						<p className="text-lg text-gray-700 leading-relaxed">
							Mi objetivo es seguir creciendo profesionalmente mientras
							contribuyo a proyectos que generen un impacto positivo en la
							sociedad a través de la tecnología.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="bg-gray-50 p-6 rounded-lg shadow-sm col-span-4"
					>
						<h3 className="text-xl font-semibold mb-4 text-gray-900">
							Información Personal
						</h3>
						<ul className="space-y-4">
							<li className="flex items-center gap-3">
								<MapPin className="h-5 w-5 text-teal-500" />
								<span className="text-gray-700">{profile.geoLocationName}</span>
							</li>
							<li className="flex items-center gap-3">
								<Calendar className="h-5 w-5 text-teal-500" />
								<span className="text-gray-700">
									{profile.birthDay} / {profile.birthMonth}
								</span>
							</li>
							<li className="flex items-center gap-3">
								<Briefcase className="h-5 w-5 text-teal-500" />
								<span className="text-gray-700">{profile.industryName}</span>
							</li>
							<li className="flex items-center gap-3">
								<Globe className="h-5 w-5 text-teal-500" />
								<span className="text-gray-500">{profile.geoCountryName}</span>
							</li>
							<li className="flex items-center gap-3">
								<Languages className="h-5 w-5 text-teal-500" />
								{profile.languages.map((language) => (
									<div key={language.id} className="text-gray-700">
										{language.name}{" "}
										<span className="text-gray-500">
											{language.proficiency}
										</span>
									</div>
								))}
							</li>
						</ul>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
