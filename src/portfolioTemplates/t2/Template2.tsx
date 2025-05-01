import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"

import { Colors, PortfolioProps } from "@common/types/portfolio"

import About from "./sections/About"
import Education from "./sections/Education"
import Experience from "./sections/Experience"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"

const defaultColors: Colors = {
	primary: "#b054fc",
	secondary: "#54f8a6",
	primaryText: "#e4e4e4",
	secondaryText: "#403fa5",
	primaryBg: "#000636",
	secondaryBg: "#15214b",
	primaryBorder: "#17132e",
	secondaryBorder: "#251844",
}

const Portfolio2 = ({ profile, colors = defaultColors }: PortfolioProps) => {
	const controls = useAnimation()

	useEffect(() => {
		controls.start({ opacity: 1 })
	}, [controls])

	return (
		<motion.div
			style={{
				backgroundImage: `linear-gradient(to bottom right, ${colors.primaryBg}, ${colors.secondaryBg})`,
			}}
			className="min-h-screen overflow-hidden portfolio"
			initial={{ opacity: 0 }}
			animate={controls}
			transition={{ duration: 0.5 }}
		>
			<Hero profile={profile} colors={colors} />
			{profile.summary && <About profile={profile} colors={colors} />}
			{profile.experiences?.length > 0 && <Experience profile={profile} />}
			{profile.education?.length > 0 && <Education profile={profile} />}
			{profile.projects?.length > 0 && <Projects profile={profile} />}
			<Contact profile={profile} />
			<Footer profile={profile} />
		</motion.div>
	)
}

export default Portfolio2
