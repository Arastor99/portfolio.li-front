import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { BookOpen, Calendar, Globe, Briefcase } from "lucide-react"
import { PortfolioProps } from "@common/types/portfolio"
import { hexToRgba } from "@common/utils/utils"
import { Skill } from "@common/types/profile"

const About = ({ profile, colors }: PortfolioProps) => {
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
				stiffness: 100,
				damping: 15,
			},
		},
	}

	const getMonthName = (month?: number) => {
		if (!month) return ""
		const months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		]
		return months[month - 1]
	}

	return (
		<section
			style={{ backgroundColor: colors?.primaryBg }}
			id="about"
			className="py-24 px-4 relative overflow-hidden bg-white"
		>
			<motion.div
				style={{
					background: `linear-gradient(180deg, ${hexToRgba(
						colors?.secondaryBg as string,
						0.2
					)} 0%, ${hexToRgba(colors?.primary as string, 0)} 100%)`,
				}}
				className="absolute top-0 left-0 w-full h-32 "
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2 }}
			/>

			<div className="container mx-auto">
				<motion.div
					ref={ref}
					variants={containerVariants}
					initial="hidden"
					animate={controls}
					className="max-w-4xl mx-auto"
				>
					<motion.h2
						style={{ color: colors?.primaryText }}
						variants={itemVariants}
						className="text-3xl md:text-4xl font-bold text-center mb-16 relative"
					>
						About Me
						<span
							style={{ backgroundColor: colors?.primary }}
							className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1  rounded-full"
						></span>
					</motion.h2>

					<motion.div variants={itemVariants} className="mb-12">
						<p
							style={{ color: colors?.primaryText }}
							className="text-lg  leading-relaxed"
						>
							{profile.summary}
						</p>
					</motion.div>

					<motion.div
						variants={containerVariants}
						className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
					>
						{profile.locationName && (
							<motion.div
								style={{
									borderColor: colors?.primaryBorder,
									backgroundColor: colors?.primaryBg,
								}}
								variants={itemVariants}
								className=" p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
								whileHover={{ y: -5 }}
							>
								<div
									style={{
										backgroundColor: hexToRgba(colors?.primary as string, 0.1),
									}}
									className="p-3 rounded-lg"
								>
									<Globe
										style={{ color: colors?.primary }}
										className="w-5 h-5 "
									/>
								</div>
								<div>
									<h3
										style={{ color: colors?.primaryText }}
										className="font-semibold mb-1"
									>
										Location
									</h3>
									<p
										style={{ color: colors?.primaryText, opacity: 0.8 }}
										className=""
									>
										{profile.locationName}
										{profile.geoCountryName
											? `, ${profile.geoCountryName}`
											: ""}
									</p>
								</div>
							</motion.div>
						)}

						{profile.industryName && (
							<motion.div
								variants={itemVariants}
								style={{
									borderColor: colors?.primaryBorder,
									backgroundColor: colors?.primaryBg,
								}}
								className=" p-6 rounded-xl border shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
								whileHover={{ y: -5 }}
							>
								<div className="p-3 bg-indigo-100 rounded-lg">
									<Briefcase
										style={{ color: colors?.secondary }}
										className="w-5 h-5 "
									/>
								</div>
								<div>
									<h3
										style={{ color: colors?.primaryText }}
										className="font-semibold mb-1"
									>
										Industry
									</h3>
									<p
										style={{ color: colors?.primaryText, opacity: 0.8 }}
										className=""
									>
										{profile.industryName}
									</p>
								</div>
							</motion.div>
						)}

						{profile.birthMonth && profile.birthDay && (
							<motion.div
								variants={itemVariants}
								style={{
									borderColor: colors?.primaryBorder,
									backgroundColor: colors?.primaryBg,
								}}
								className="p-6 rounded-xl border  shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
								whileHover={{ y: -5 }}
							>
								<div
									style={{ backgroundColor: colors?.primaryBg }}
									className="p-3 bg-pink-100 rounded-lg"
								>
									<Calendar
										style={{ color: colors?.primary }}
										className="w-5 h-5 "
									/>
								</div>
								<div>
									<h3
										style={{ color: colors?.primaryText }}
										className="font-semibold  mb-1"
									>
										Birthday
									</h3>
									<p
										style={{ color: colors?.primaryText, opacity: 0.8 }}
										className=""
									>
										{getMonthName(profile.birthMonth)} {profile.birthDay}
									</p>
								</div>
							</motion.div>
						)}

						{profile.student && (
							<motion.div
								variants={itemVariants}
								style={{
									borderColor: colors?.primaryBorder,
									backgroundColor: colors?.primaryBg,
								}}
								className=" p-6 rounded-xl border  shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
								whileHover={{ y: -5 }}
							>
								<div
									style={{ backgroundColor: colors?.primaryBg }}
									className="p-3  rounded-lg"
								>
									<BookOpen
										style={{ color: colors?.secondary }}
										className="w-5 h-5 "
									/>
								</div>
								<div>
									<h3
										style={{ color: colors?.primaryText }}
										className="font-semibold  mb-1"
									>
										Education Status
									</h3>
									<p
										style={{ color: colors?.primaryText, opacity: 0.8 }}
										className=""
									>
										Student
									</p>
								</div>
							</motion.div>
						)}
					</motion.div>

					{profile.skills.length > 0 && (
						<motion.div variants={containerVariants}>
							<motion.h3
								variants={itemVariants}
								style={{ color: colors?.primaryText }}
								className="text-2xl font-semibold  mb-8 text-center"
							>
								Skills
							</motion.h3>

							<motion.div
								variants={containerVariants}
								className="flex flex-wrap justify-center gap-3"
							>
								{profile.skills.map((skill: Skill) => (
									<motion.span
										key={skill.id}
										style={{
											color: colors?.primaryText,
											borderColor: colors?.primaryBorder,
											background: `linear-gradient(to right, ${hexToRgba(
												colors?.primary as string,
												0.2
											)} 0%, ${hexToRgba(
												colors?.secondary as string,
												0.2
											)} 100%)`,
										}}
										variants={itemVariants}
										className="px-4 py-2 rounded-full border shadow-sm hover:shadow transition-all cursor-default"
										whileHover={{ y: -5 }}
										whileTap={{ scale: 0.95 }}
										whileInView={{ opacity: 1 }}
										initial={{ opacity: 0 }}
									>
										{skill.name}
									</motion.span>
								))}
							</motion.div>
						</motion.div>
					)}
				</motion.div>
			</div>
		</section>
	)
}

export default About
