import { motion } from "framer-motion"

export default function ProfilePage() {
	const sections = [
		{
			id: "personal",
			title: "Información Personal",
			content: {
				name: "John Doe",
				title: "Senior Frontend Developer",
				location: "Madrid, España",
				email: "john.doe@example.com",
				phone: "+34 600 123 456",
				about:
					"Desarrollador frontend con más de 5 años de experiencia en React, TypeScript y diseño de interfaces de usuario.",
			},
		},
		{
			id: "experience",
			title: "Experiencia Laboral",
			items: [
				{
					company: "Tech Solutions Inc.",
					position: "Senior Frontend Developer",
					period: "2020 - Presente",
					description:
						"Desarrollo de aplicaciones web con React y TypeScript. Implementación de arquitecturas escalables y optimización de rendimiento.",
				},
				{
					company: "Digital Agency",
					position: "Frontend Developer",
					period: "2018 - 2020",
					description:
						"Desarrollo de sitios web responsivos y aplicaciones interactivas utilizando React y Vue.js.",
				},
			],
		},
		{
			id: "education",
			title: "Educación",
			items: [
				{
					institution: "Universidad Tecnológica",
					degree: "Ingeniería Informática",
					period: "2014 - 2018",
					description:
						"Especialización en desarrollo de software y sistemas web.",
				},
			],
		},
		{
			id: "skills",
			title: "Habilidades",
			tags: [
				"React",
				"TypeScript",
				"JavaScript",
				"HTML5",
				"CSS3",
				"Tailwind CSS",
				"Node.js",
				"Git",
				"Figma",
				"UI/UX",
			],
		},
	]

	return (
		<div className="min-h-screen bg-[#F9FAFB] p-4 md:p-8 pt-20">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="max-w-4xl mx-auto"
			>
				<div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
					<div className="p-6 md:p-8">
						<div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
							<div className="w-24 h-24 bg-[#6366F1]/10 rounded-full flex items-center justify-center text-[#6366F1] text-2xl font-bold">
								JD
							</div>
							<div>
								<h1 className="text-2xl font-bold text-[#0F172A]">
									{sections[0].content.name}
								</h1>
								<p className="text-[#64748B]">{sections[0].content.title}</p>
								<p className="text-[#64748B] text-sm">
									{sections[0].content.location}
								</p>
							</div>
						</div>
					</div>
				</div>

				{sections.map((section) => (
					<motion.div
						key={section.id}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="bg-white rounded-xl shadow-md overflow-hidden mb-6"
					>
						<div className="border-b border-gray-100 p-4 md:p-6">
							<h2 className="text-xl font-semibold text-[#0F172A]">
								{section.title}
							</h2>
						</div>

						<div className="p-4 md:p-6">
							{section.id === "personal" && (
								<div className="space-y-4">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
										<div>
											<p className="text-sm text-[#64748B]">Email</p>
											<p className="text-[#0F172A]">{section.content.email}</p>
										</div>
										<div>
											<p className="text-sm text-[#64748B]">Teléfono</p>
											<p className="text-[#0F172A]">{section.content.phone}</p>
										</div>
									</div>
									<div>
										<p className="text-sm text-[#64748B]">Sobre mí</p>
										<p className="text-[#0F172A]">{section.content.about}</p>
									</div>
								</div>
							)}

							{(section.id === "experience" || section.id === "education") &&
								section.items && (
									<div className="space-y-6">
										{section.items.map((item, index) => (
											<div
												key={index}
												className="border-l-2 border-[#6366F1] pl-4 ml-2"
											>
												<h3 className="font-medium text-[#0F172A]">
													{section.id === "experience"
														? item.position
														: item.degree}
												</h3>
												<p className="text-[#64748B]">
													{section.id === "experience"
														? item.company
														: item.institution}
												</p>
												<p className="text-sm text-[#64748B]">{item.period}</p>
												<p className="mt-2 text-[#0F172A]">
													{item.description}
												</p>
											</div>
										))}
									</div>
								)}

							{section.id === "skills" && section.tags && (
								<div className="flex flex-wrap gap-2">
									{section.tags.map((tag, index) => (
										<span
											key={index}
											className="px-3 py-1 bg-[#6366F1]/10 text-[#6366F1] rounded-full text-sm"
										>
											{tag}
										</span>
									))}
								</div>
							)}
						</div>
					</motion.div>
				))}
			</motion.div>
		</div>
	)
}
