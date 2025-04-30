import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import { PortfolioProps } from "@common/types/portfolio"

const Experience = ({ profile }: PortfolioProps) => {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: "-100px" })
	const controls = useAnimation()

	useEffect(() => {
		if (isInView) {
			controls.start("visible")
		}
	}, [isInView, controls])

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	}

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 80,
				damping: 12,
			},
		},
	}

	const formatDate = (date?: Date) => {
		if (!date) return "Present"
		const d = new Date(date)
		return new Intl.DateTimeFormat("en-US", {
			month: "short",
			year: "numeric",
		}).format(d)
	}

	return (
		<section
			id="experience"
			className="py-24 px-4 bg-gradient-to-b from-white to-slate-50 relative"
		>
			<motion.div
				className="absolute inset-0 bg-violet-400/5"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.3 }}
			/>

			<div className="container mx-auto">
				<motion.div
					ref={ref}
					variants={containerVariants}
					initial="hidden"
					animate={controls}
				>
					<motion.h2
						variants={itemVariants}
						className="text-3xl md:text-4xl font-bold text-center mb-16 relative"
					>
						Professional Experience
						<span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-violet-600 rounded-full"></span>
					</motion.h2>

					<motion.div
						variants={containerVariants}
						className="max-w-4xl mx-auto"
					>
						{profile.experiences.map((exp, index) => (
							<motion.div
								key={exp.id}
								variants={itemVariants}
								className="relative mb-12 ml-8 md:ml-12"
							>
								{index !== profile.experiences.length - 1 && (
									<div className="absolute left-[-21px] top-[36px] bottom-[-36px] w-0.5 bg-gradient-to-b from-violet-500/70 to-indigo-500/30 z-0"></div>
								)}

								<div className="absolute left-[-38px] top-[10px] w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg z-10">
									<span className="text-white font-bold text-sm">
										{index + 1}
									</span>
								</div>

								<motion.div
									className="bg-white rounded-xl border border-gray-100 p-6 md:p-8 shadow-md hover:shadow-lg relative z-[5] transition-all"
									whileHover={{ y: -5, x: 3 }}
								>
									<div className="flex flex-wrap items-start justify-between gap-4 mb-4">
										<div>
											<h3 className="text-xl font-semibold text-gray-800">
												{exp.title}
											</h3>
											<h4 className="text-lg text-violet-700 font-medium">
												{exp.companyName}
											</h4>
										</div>

										{exp.companyLogoUrl && (
											<div className="w-12 h-12 rounded-md overflow-hidden border border-gray-200 flex-shrink-0">
												<img
													src={exp.companyLogoUrl}
													alt={`${exp.companyName} logo`}
													className="w-full h-full object-contain"
												/>
											</div>
										)}
									</div>

									<div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-gray-600 text-sm">
										<div className="flex items-center gap-1">
											<Calendar className="w-4 h-4 text-violet-500" />
											<span>
												{formatDate(exp.startDate)} - {formatDate(exp.endDate)}
											</span>
										</div>

										{exp.locationName && (
											<div className="flex items-center gap-1">
												<MapPin className="w-4 h-4 text-violet-500" />
												<span>{exp.locationName}</span>
											</div>
										)}
									</div>

									{exp.description && (
										<p className="text-gray-600 leading-relaxed">
											{exp.description}
										</p>
									)}

									{exp.companyIndustries?.length > 0 && (
										<div className="mt-4 flex flex-wrap gap-2">
											{exp.companyIndustries.map((industry, idx) => (
												<span
													key={idx}
													className="px-3 py-1 text-xs font-medium bg-indigo-50 text-indigo-700 rounded-full"
												>
													{industry}
												</span>
											))}
										</div>
									)}
								</motion.div>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}

export default Experience
