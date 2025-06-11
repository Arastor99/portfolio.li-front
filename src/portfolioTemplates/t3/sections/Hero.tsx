import { Profile } from "@common/types/profile"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

interface HeroProps {
	profile: Profile
}
export default function Hero({ profile }: HeroProps) {
	return (
		<section className="relative h-screen flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0 z-0">
				<img
					src={"/public/placeholder_image2.png"}
					alt="Background"
					style={{ width: "100%", height: "auto", objectFit: "cover" }}
				/>

				<div className="absolute inset-0 bg-black/50"></div>
			</div>

			<div className="container relative z-10 px-4 md:px-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center md:text-left"
					>
						<h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
							{profile.firstName} {profile.lastName}
						</h1>
						<h2 className="text-xl md:text-2xl text-white/90 mb-6">
							{profile.headline}
						</h2>
						<p className="text-white/80 mb-8 max-w-md mx-auto md:mx-0">
							{profile.summary}
						</p>
						<div className="flex flex-wrap gap-3 justify-center md:justify-start">
							{profile.skills.slice(0, 4).map((skill) => (
								<span
									key={skill.id}
									className="px-3 py-1 bg-white/10 text-white rounded-full text-sm backdrop-blur-sm"
								>
									{skill.name}
								</span>
							))}
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="flex justify-center"
					>
						<div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20">
							<img
								src="/public/male-placeholder-image.jpeg"
								alt={`${profile.firstName} ${profile.lastName}`}
								className="object-cover"
							/>
						</div>
					</motion.div>
				</div>
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, y: [0, 10, 0] }}
				transition={{
					duration: 1.5,
					repeat: Number.POSITIVE_INFINITY,
					delay: 1,
				}}
				className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white"
			>
				<ArrowDown className="h-8 w-8" />
			</motion.div>
		</section>
	)
}
