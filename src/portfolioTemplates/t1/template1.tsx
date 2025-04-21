import { useEffect, useRef, useState } from "react"

import { motion, useScroll, AnimatePresence } from "framer-motion"
import {
	Mail,
	Menu,
	X,
	ChevronRight,
	Code,
	Briefcase,
	GraduationCap,
	User,
} from "lucide-react"

import { Button } from "@components/ui/button"
import { cn } from "@lib/utils"
import { useMobile } from "@hooks/useMobile"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import Education from "./sections/Education"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import { Profile } from "@common/types/profile"

export default function Portfolio( {profile}: { profile: Profile}) {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [activeSection, setActiveSection] = useState("home")
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
	const [cursorVariant, setCursorVariant] = useState("default")
	const isMobile = useMobile()
	const containerRef = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll()

	const sections = [
		"home",
		"about",
		"experience",
		"projects",
		"education",
		"contact",
	]

	useEffect(() => {
		if (typeof window === "undefined" || isMobile) return

		const handleMouseMove = (e: MouseEvent) => {
			setCursorPosition({ x: e.clientX, y: e.clientY })
		}

		window.addEventListener("mousemove", handleMouseMove)
		return () => window.removeEventListener("mousemove", handleMouseMove)
	}, [isMobile])

	useEffect(() => {
		const handleScroll = () => {
			if (typeof window === "undefined") return

			const scrollPosition = window.scrollY + 100

			for (const section of sections) {
				const element = document.getElementById(section)
				if (element) {
					const { offsetTop, offsetHeight } = element
					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					) {
						setActiveSection(section)
						break
					}
				}
			}
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [sections])

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId)
		if (element) {
			window.scrollTo({
				top: element.offsetTop - 80,
				behavior: "smooth",
			})
			setIsMenuOpen(false)
		}
	}

	const navItems = [
		{ id: "home", label: "Inicio", icon: <User className="h-4 w-4" /> },
		{ id: "about", label: "Sobre mí", icon: <User className="h-4 w-4" /> },
		{
			id: "experience",
			label: "Experiencia",
			icon: <Briefcase className="h-4 w-4" />,
		},
		{ id: "projects", label: "Proyectos", icon: <Code className="h-4 w-4" /> },
		{
			id: "education",
			label: "Educación",
			icon: <GraduationCap className="h-4 w-4" />,
		},
		{ id: "contact", label: "Contacto", icon: <Mail className="h-4 w-4" /> },
	]

	const cursorVariants = {
		default: {
			x: cursorPosition.x - 16,
			y: cursorPosition.y - 16,
			height: 32,
			width: 32,
			backgroundColor: "rgba(236, 72, 153, 0.3)",
			mixBlendMode: "screen" as const,
			transition: {
				type: "spring",
				mass: 0.6,
			},
		},
		button: {
			x: cursorPosition.x - 40,
			y: cursorPosition.y - 40,
			height: 80,
			width: 80,
			backgroundColor: "rgba(236, 72, 153, 0.2)",
			mixBlendMode: "screen" as const,
		},
	}

	const handleMouseEnter = () => {
		if (!isMobile) setCursorVariant("button")
	}

	const handleMouseLeave = () => {
		if (!isMobile) setCursorVariant("default")
	}

	return (
		<div
			ref={containerRef}
			className="min-h-screen bg-[#030014] text-white overflow-hidden "
		>
			{/* Custom cursor */}
			{!isMobile && typeof window !== "undefined" && (
				<motion.div
					className="fixed top-0 left-0 rounded-full pointer-events-none z-50"
					variants={cursorVariants}
					animate={cursorVariant}
				/>
			)}

			{/* Progress bar */}
			<motion.div
				className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 z-50"
				style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
			/>

			{/* Background Elements */}
			<div className="fixed inset-0 z-0">
				<div className="absolute top-0 left-0 w-full h-full bg-[#030014] opacity-90" />
				<div className="absolute top-0 left-0 w-full h-full">
					<div className="absolute top-[20%] right-[10%] w-96 h-96 rounded-full bg-emerald-500 opacity-20 blur-[120px]" />
					<div className="absolute bottom-[10%] left-[15%] w-80 h-80 rounded-full bg-cyan-500 opacity-20 blur-[120px]" />
				</div>
				<div className="absolute inset-0">
					<div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjMjIyIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjxwYXRoIGQ9Ik0wIDBoMXYxSDB6TTAgOWgxdjFIMHpNOSAwaDFWMUg5ek05IDloMXYxSDl6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20" />
				</div>
			</div>

			{/* Side Navigation */}
			<nav className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
				<div className="flex flex-col items-center space-y-6">
					{navItems.map((item) => (
						<motion.button
							key={item.id}
							onClick={() => scrollToSection(item.id)}
							className={cn(
								"relative group flex items-center",
								activeSection === item.id ? "text-white" : "text-white/40"
							)}
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
						>
							<span
								className={cn(
									"absolute right-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity text-sm whitespace-nowrap",
									activeSection === item.id
										? "text-emerald-400"
										: "text-white/60"
								)}
							>
								{item.label}
							</span>
							<div
								className={cn(
									"flex items-center justify-center w-10 h-10 rounded-full border transition-all",
									activeSection === item.id
										? "border-emerald-500 bg-emerald-500/10 text-emerald-400"
										: "border-white/10 text-white/40 group-hover:border-white/30 group-hover:text-white/60"
								)}
							>
								{item.icon}
							</div>
							<span
								className={cn(
									"absolute left-full ml-4 h-[2px] transition-all",
									activeSection === item.id
										? "w-10 bg-emerald-500"
										: "w-5 bg-white/20 group-hover:bg-white/40"
								)}
							/>
						</motion.button>
					))}
				</div>
			</nav>

			{/* Mobile Header */}
			<header className="fixed top-0 left-0 right-0 z-50 lg:hidden backdrop-blur-lg bg-[#030014]/70 border-b border-white/10">
				<div className="container flex h-16 items-center justify-between">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="flex items-center gap-2"
					>
						<div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-emerald-500">
							<img
								src="https://placehold.co/600x400"
								alt="Miguel"
								className="object-cover"
								width={100}
								height={100}
							/>
						</div>
						<span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
							Miguel Durán
						</span>
					</motion.div>

					{/* Mobile Menu Button */}
					<Button
						variant="ghost"
						size="icon"
						className="lg:hidden text-white"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? (
							<X className="h-5 w-5" />
						) : (
							<Menu className="h-5 w-5" />
						)}
					</Button>
				</div>
			</header>

			{/* Mobile Navigation Menu */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.2 }}
						className="fixed inset-0 z-40 bg-[#030014]/95 backdrop-blur-lg lg:hidden pt-16"
					>
						<nav className="container flex flex-col gap-2 py-8">
							{navItems.map((item) => (
								<motion.button
									key={item.id}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -20 }}
									transition={{
										duration: 0.2,
										delay: navItems.indexOf(item) * 0.05,
									}}
									onClick={() => scrollToSection(item.id)}
									className={cn(
										"flex items-center justify-between py-4 px-4 rounded-lg",
										activeSection === item.id
											? "bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-white"
											: "text-white/60"
									)}
								>
									<div className="flex items-center gap-3">
										<div
											className={cn(
												"flex items-center justify-center w-8 h-8 rounded-full",
												activeSection === item.id
													? "bg-emerald-500/20 text-emerald-400"
													: "bg-white/5 text-white/40"
											)}
										>
											{item.icon}
										</div>
										<span>{item.label}</span>
									</div>
									<ChevronRight className="h-4 w-4" />
								</motion.button>
							))}
						</nav>
					</motion.div>
				)}
			</AnimatePresence>

			<main className="relative z-10">
				{/* Hero Section */}
				<Hero
					handleMouseEnter={handleMouseEnter}
					handleMouseLeave={handleMouseLeave}
					scrollToSection={scrollToSection}
					profile={profile}
				/>
				{/* About Section */}
				<About />
				{/* Experience Section */}
				<Experience />
				{/* Projects Section */}
				<Projects
					handleMouseEnter={handleMouseEnter}
					handleMouseLeave={handleMouseLeave}
				/>
				{/* Education Section */}
				<Education />
				{/* Contact Section */}
				<Contact
					handleMouseEnter={handleMouseEnter}
					handleMouseLeave={handleMouseLeave}
				/>
			</main>
			<Footer
				navItems={navItems}
				scrollToSection={scrollToSection}
				handleMouseEnter={handleMouseEnter}
				handleMouseLeave={handleMouseLeave}
			/>
		</div>
	)
}
