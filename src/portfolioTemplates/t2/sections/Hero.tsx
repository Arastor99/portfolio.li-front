import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

import { PortfolioProps } from "@common/types/portfolio"

import ImgProxy from "@components/ui/ImgProxy"

const Hero = ({ profile, colors }: PortfolioProps) => {
	const fullName = `${profile.firstName} ${profile.lastName}`

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
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

	const imageVariants = {
		hidden: { scale: 0.8, opacity: 0 },
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				type: "spring",
				stiffness: 100,
				delay: 0.2,
			},
		},
	}

	const glowVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: [0.5, 0.8, 0.5],
			transition: {
				duration: 3,
				repeat: Infinity,
				repeatType: "reverse" as const,
			},
		},
	}

	return (
		<section className="relative w-full overflow-hidden min-h-screen flex items-center justify-center py-20 px-4 md:px-8">
			{/* Decorative blurred gradients */}
			<motion.div
				style={{ backgroundColor: colors?.secondary, opacity: 0.2 }}
				className="absolute top-1/4 -left-32 w-64 h-64 rounded-full blur-3xl "
				variants={glowVariants}
				initial="hidden"
				animate="visible"
			/>
			<motion.div
				style={{ backgroundColor: colors?.primary, opacity: 0.2 }}
				className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full  blur-3xl"
				variants={glowVariants}
				initial="hidden"
				animate="visible"
				transition={{ delay: 1 }}
			/>

			<div className="container mx-auto">
				<motion.div
					className="flex flex-col lg:flex-row items-center justify-between gap-12"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					<div className="lg:w-1/2 text-center lg:text-left">
						<motion.span
							style={{ color: colors?.primary }}
							variants={itemVariants}
							className="inline-block font-medium mb-4"
						>
							{profile.headline || "Welcome to my portfolio"}
						</motion.span>

						<motion.h1
							style={{
								background: `linear-gradient(to right, ${colors?.primaryText}, ${colors?.primary})`,
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
								backgroundClip: "text",
							}}
							variants={itemVariants}
							className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent  mb-6"
						>
							{fullName}
						</motion.h1>

						<motion.p
							style={{ color: colors?.secondaryText }}
							variants={itemVariants}
							className="text-lg md:text-xl  mb-8 max-w-lg mx-auto lg:mx-0"
						></motion.p>

						{profile.locationName && (
							<motion.div
								style={{ color: colors?.secondaryText }}
								variants={itemVariants}
								className="flex items-center justify-center lg:justify-start gap-2  mb-8"
							>
								<MapPin
									style={{ color: colors?.primary }}
									className="w-5 h-5 "
								/>
								<span>{profile.locationName}</span>
								{profile.geoCountryName && `, ${profile.geoCountryName}`}
							</motion.div>
						)}

						<motion.div
							variants={itemVariants}
							className="flex flex-wrap gap-4 justify-center lg:justify-start"
						>
							<motion.a
								href="#contact"
								style={{
									color: colors?.secondaryText,
									background: `linear-gradient(to right, ${colors?.primary}, ${colors?.secondary})`,
									shadow: `0 4px 30px ${colors?.primary}`,
								}}
								className="px-8 py-3  text-white font-medium rounded-full shadow-lg  hover:shadow-xl  transform hover:translate-y-[-2px] transition-all duration-300"
								whileHover={{ scale: 1.03 }}
								whileTap={{ scale: 0.98 }}
							>
								Contact Me
							</motion.a>
							<motion.a
								href="#projects"
								style={{
									color: colors?.primaryText,
									backgroundColor: colors?.primaryBg,
									shadow: `0 4px 30px ${colors?.primary}`,
									borderColor: colors?.primaryBorder,
								}}
								className="px-8 py-3 border font-medium rounded-full shadow-md hover:shadow-lg transform hover:translate-y-[-2px] transition-all duration-300"
								whileHover={{ scale: 1.03 }}
								whileTap={{ scale: 0.98 }}
							>
								View Projects
							</motion.a>
						</motion.div>
					</div>

					<motion.div
						className="lg:w-1/2 flex justify-center"
						variants={imageVariants}
					>
						<div className="relative">
							<div
								style={{
									background: `linear-gradient(to top right, ${colors?.primary}, ${colors?.secondary})`,
								}}
								className="absolute inset-0 rounded-full blur-2xl transform scale-110 "
							/>
							<motion.div
								style={{ borderColor: colors?.primaryBorder }}
								className="w-60 h-60 md:w-80 md:h-80 rounded-full border-4 overflow-hidden shadow-2xl relative z-10"
								whileHover={{ scale: 1.03 }}
								transition={{ type: "spring", stiffness: 300, damping: 15 }}
							>
								{profile.profilePictureUrl ? (
									<ImgProxy
										src={profile.profilePictureUrl}
										alt="Profile picture"
										css="absolute inset-0 w-full h-full object-cover z-10"
									/>
								) : (
									<div
										style={{
											background: `linear-gradient(to top right, ${colors?.primary}, ${colors?.secondary})`,
										}}
										className="w-full h-full flex items-center justify-center"
									>
										<span
											style={{
												color: colors?.secondaryText,
											}}
											className="text-4xl font-bold text-white"
										>
											{profile.firstName.charAt(0)}
											{profile.lastName.charAt(0)}
										</span>
									</div>
								)}
							</motion.div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}

export default Hero
