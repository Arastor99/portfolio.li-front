
import { useEffect, useRef, useState } from "react"

import { motion, useScroll, AnimatePresence } from "framer-motion"
import {
  Github,
  Twitter,
  Linkedin,
  Award,
  ExternalLink,
  Mail,
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  Star,
  Code,
  Briefcase,
  GraduationCap,
  User,
  Send,
} from "lucide-react"
import { Badge } from "@components/ui/badge"
import { Button } from "@components/ui/button"
import { cn } from "@lib/utils"
import { useMobile } from "@hooks/useMobile"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")
  const isMobile = useMobile()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()


  const sections = ["home", "about", "experience", "projects", "education", "contact"]

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
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
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
    { id: "experience", label: "Experiencia", icon: <Briefcase className="h-4 w-4" /> },
    { id: "projects", label: "Proyectos", icon: <Code className="h-4 w-4" /> },
    { id: "education", label: "Educación", icon: <GraduationCap className="h-4 w-4" /> },
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

    <div ref={containerRef} className="min-h-screen bg-[#030014] text-white overflow-hidden">
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
                activeSection === item.id ? "text-white" : "text-white/40",
              )}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span
                className={cn(
                  "absolute right-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity text-sm whitespace-nowrap",
                  activeSection === item.id ? "text-emerald-400" : "text-white/60",
                )}
              >
                {item.label}
              </span>
              <div
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-full border transition-all",
                  activeSection === item.id
                    ? "border-emerald-500 bg-emerald-500/10 text-emerald-400"
                    : "border-white/10 text-white/40 group-hover:border-white/30 group-hover:text-white/60",
                )}
              >
                {item.icon}
              </div>
              <span
                className={cn(
                  "absolute left-full ml-4 h-[2px] transition-all",
                  activeSection === item.id ? "w-10 bg-emerald-500" : "w-5 bg-white/20 group-hover:bg-white/40",
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
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
                  transition={{ duration: 0.2, delay: navItems.indexOf(item) * 0.05 }}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "flex items-center justify-between py-4 px-4 rounded-lg",
                    activeSection === item.id
                      ? "bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-white"
                      : "text-white/60",
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "flex items-center justify-center w-8 h-8 rounded-full",
                        activeSection === item.id ? "bg-emerald-500/20 text-emerald-400" : "bg-white/5 text-white/40",
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
        <div className="grid place-content-center">
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16 lg:pt-0">
          <div className="container py-20">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="order-2 lg:order-1"
              >
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-emerald-400"
                  >
                    <span>Desarrollador & Creador de Contenido</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl font-bold tracking-tight sm:text-6xl xl:text-7xl/none"
                  >
                    <span className="block">Miguel Angel</span>
                    <div className="relative">
                      <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 animate-text-gradient bg-300%">
                        Durán García
                      </span>
                      <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                        className="absolute bottom-0 left-0 h-[6px] bg-gradient-to-r from-emerald-500/40 via-teal-500/40 to-cyan-500/40 rounded-full"
                      />
                    </div>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-white/70 text-lg max-w-2xl mt-4 leading-relaxed"
                  >
                    Ingeniero de Software y Desarrollador Web. Reconocido como GitHub Star, Microsoft MVP y Google
                    Developer Expert.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="flex flex-wrap gap-4 pt-4"
                  >
                    <Button
                      onClick={() => scrollToSection("contact")}
                      className="relative overflow-hidden group bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white border-0"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Contactar
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                      <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    </Button>

                    <Button
                      variant="outline"
                      onClick={() => scrollToSection("projects")}
                      className="border-white/10 text-white hover:bg-white/5"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      Ver Proyectos
                    </Button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="flex gap-4 pt-6"
                  >
                    <motion.a
                      href="https://github.com/midudev"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </motion.a>
                    <motion.a
                      href="https://twitter.com/midudev"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </motion.a>
                    <motion.a
                      href="https://linkedin.com/in/midudev"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="order-1 lg:order-2 flex justify-center"
              >
                <div className="relative">
                  {/* Decorative elements */}
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-xl" />

                  {/* Geometric decorations */}
                  <div className="absolute -top-12 -right-12 w-24 h-24 border border-emerald-500/20 rounded-xl rotate-12" />
                  <div className="absolute -bottom-16 -left-8 w-16 h-16 border border-cyan-500/20 rounded-full" />
                  <div className="absolute top-1/2 -right-20 w-10 h-10 border border-teal-500/30 rounded-full" />

                  {/* Profile image container */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur-sm opacity-70 -rotate-6" />
                    <div className="relative bg-[#030014] p-2 rounded-2xl rotate-3 shadow-xl">
                      {/* Profile image */}
                      <div className="relative aspect-[4/5] w-[280px] sm:w-[320px] overflow-hidden rounded-xl border-2 border-white/10">
                      <img
                        src="/suu.jpg"
                        alt="Miguel Angel Durán García"
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="eager"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/80 via-transparent to-transparent" />

                        {/* Content overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                            <div className="text-xs text-emerald-400 font-medium">Disponible para proyectos</div>
                          </div>
                          <div className="flex gap-2">
                            <Badge className="bg-white/10 text-white/90 hover:bg-white/20">React</Badge>
                            <Badge className="bg-white/10 text-white/90 hover:bg-white/20">Next.js</Badge>
                            <Badge className="bg-white/10 text-white/90 hover:bg-white/20">Node</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating badges */}
                  <motion.div
                    initial={{ opacity: 0, y: 20, x: 20 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className="absolute -top-10 -right-10 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-xs font-medium text-white shadow-lg"
                  >
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-300 fill-yellow-300" />
                      <span>GitHub Star</span>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20, x: -20 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="absolute -bottom-10 -left-10 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-xs font-medium text-white shadow-lg"
                  >
                    <div className="flex items-center gap-1">
                      <Code className="h-3 w-3" />
                      <span>Microsoft MVP</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center">
            <span className="text-sm text-white/50 mb-2">Scroll para explorar</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
              className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1"
            >
              <motion.div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </motion.div>
          </div>
        </section>
        </div>

        {/* About Section */}
        <section id="about" className="py-20 relative grid place-content-center">
          <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-[#050024] to-[#030014] z-0" />

          <div className="container relative z-10">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative">
                  <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-lg" />
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
                  <img
                        src="https://placehold.co/600x400"
                        alt="Miguel coding"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/90 via-[#030014]/50 to-transparent" />

                    {/* Stats overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 grid grid-cols-2 gap-4">
                      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                          10+
                        </div>
                        <div className="text-white/60 text-sm">Años de experiencia</div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                          350k+
                        </div>
                        <div className="text-white/60 text-sm">Seguidores</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-10 -left-10 w-20 h-20 border border-emerald-500/20 rounded-full" />
                <div className="absolute -bottom-12 -right-12 w-24 h-24 border border-cyan-500/20 rounded-xl rotate-12" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-emerald-400 mb-4">
                    <User className="h-4 w-4" />
                    <span>Sobre mí</span>
                  </div>

                  <h2 className="text-3xl font-bold">
                    Desarrollador apasionado y{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                      creador de contenido
                    </span>
                  </h2>

                  <div className="space-y-4 text-white/80 leading-relaxed">
                    <p>
                      Nací el 12 de febrero de 1985 en Barcelona. Me apasiona la programación desde la infancia. Comencé
                      jugando con Locomotive BASIC en un Amstrad CPC que mi padre me regaló. Desde entonces hasta hoy,
                      he utilizado muchas tecnologías y diferentes lenguajes de programación.
                    </p>
                    <p>
                      Una de mis mayores motivaciones es aprender. Por eso comencé a ser autodidacta, leyendo libros y
                      buscando tutoriales sobre informática. Años después completé un grado en ingeniería informática en
                      la Universidad Abierta de Cataluña. Desde entonces no he dejado de trabajar como desarrollador y
                      continúo aprendiendo.
                    </p>
                    <p>
                      Me gusta asistir a reuniones de desarrolladores, conferencias, hacer talleres y compartir
                      conocimientos. El mejor lugar para trabajar es donde puedo mejorar constantemente.
                    </p>
                  </div>

                  <div className="pt-4 grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="text-white/80 font-medium">Idiomas</div>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1 text-sm">
                            <span>Español</span>
                            <span className="text-emerald-400">Nativo</span>
                          </div>
                          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: "100%" }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.2 }}
                              className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1 text-sm">
                            <span>Catalán</span>
                            <span className="text-emerald-400">Profesional</span>
                          </div>
                          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: "90%" }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.3 }}
                              className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1 text-sm">
                            <span>Inglés</span>
                            <span className="text-emerald-400">Profesional</span>
                          </div>
                          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: "80%" }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.4 }}
                              className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-white/80 font-medium">Reconocimientos</div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                            <Award className="h-4 w-4 text-cyan-400" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">Microsoft MVP</div>
                            <div className="text-xs text-white/60">2023</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center">
                            <Award className="h-4 w-4 text-orange-400" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">Google Dev Expert</div>
                            <div className="text-xs text-white/60">2021</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500/20 to-amber-500/20 flex items-center justify-center">
                            <Star className="h-4 w-4 text-yellow-400" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">GitHub Star ⭐️</div>
                            <div className="text-xs text-white/60">2020</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 relative grid place-content-center">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-repeat opacity-5" />

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="max-w-xl mx-auto text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-emerald-400 mb-4">
                <Briefcase className="h-4 w-4" />
                <span>Experiencia</span>
              </div>

              <h2 className="text-3xl font-bold mb-4">
                Mi trayectoria{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  profesional
                </span>
              </h2>

              <p className="text-white/70">Un recorrido por mi carrera como desarrollador y creador de contenido.</p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500 hidden md:block" />

                <div className="space-y-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-16 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 hidden md:flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-white" />
                    </div>

                    <div className="md:ml-24 relative">
                      <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 blur-lg opacity-70" />
                      <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                              Creador de Contenido
                            </h3>
                            <div className="text-white/70">midudev</div>
                          </div>
                          <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 text-sm text-emerald-400 border border-emerald-500/20">
                            Ene 2021 - Presente
                          </div>
                        </div>

                        <ul className="list-disc pl-5 space-y-2 text-white/80">
                          <li>Streamer de programación en español más visto en Twitch (https://twitch.tv/midudev)</li>
                          <li>
                            Difundo conocimientos sobre Programación y Desarrollo en varias plataformas de redes
                            sociales.
                          </li>
                          <li>2 canales de YouTube con más de 250.000 y 100.000 suscriptores cada uno.</li>
                          <li>+315.000 seguidores en Instagram.</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-16 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 hidden md:flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-white" />
                    </div>

                    <div className="md:ml-24 relative">
                      <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 blur-lg opacity-70" />
                      <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                              Lead Frontend Architect
                            </h3>
                            <div className="text-white/70">Adevinta Spain</div>
                          </div>
                          <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 text-sm text-emerald-400 border border-emerald-500/20">
                            Jun 2016 - Sep 2022
                          </div>
                        </div>

                        <p className="text-white/80">
                          Formé parte del equipo Frontend Enablers en Adevinta Spain. Nuestra misión era asegurar que
                          todos nuestros verticales (Fotocasa, MilAnuncios, Habitaclia, Coches.net, Infojobs)
                          convergieran tecnológicamente, tuvieran una arquitectura moderna, flexible y optimizada, y
                          promovieran la excelencia técnica entre los desarrolladores fomentando las mejores prácticas y
                          realizando talleres para compartir conocimientos.
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-16 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 hidden md:flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-white" />
                    </div>

                    <div className="md:ml-24 relative">
                      <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 blur-lg opacity-70" />
                      <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                              Co-Fundador e Ingeniero de Software
                            </h3>
                            <div className="text-white/70">Sublime Codes</div>
                          </div>
                          <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 text-sm text-emerald-400 border border-emerald-500/20">
                            Oct 2018 - Feb 2022
                          </div>
                        </div>

                        <p className="text-white/80">
                          Estudio de consultoría de código. Ayudamos a crear MVPs y proyectos con cuidado, enfocándonos
                          en la calidad y durabilidad. Proyectos de primera clase basados en Javascript, ReactJS,
                          GraphQL y Node.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 relative grid place-content-center">
          <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-[#050024] to-[#030014] z-0" />

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="max-w-xl mx-auto text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-emerald-400 mb-4">
                <Code className="h-4 w-4" />
                <span>Proyectos</span>
              </div>

              <h2 className="text-3xl font-bold mb-4">
                Mis trabajos{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  creativos
                </span>
              </h2>

              <p className="text-white/70">Una selección de mis proyectos de desarrollo web.</p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative h-full">
                  <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-md opacity-75 group-hover:opacity-100 transition-opacity" />
                  <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
                    <div className="h-48 overflow-hidden">
                    <img
                        src="https://placehold.co/600x400"
                        alt="Hubii"
                        width={400}
                        height={200}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent opacity-70" />

                      {/* Overlay content */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                          <div className="flex items-center gap-2 text-sm font-medium text-white">
                            <span>Ver proyecto</span>
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-cyan-400 transition-colors">
                        Hubii
                      </h3>
                      <p className="text-white/70 mb-4 line-clamp-2">
                        Una plataforma que ayuda a los usuarios a encontrar contenido de noticias relevante, haciendo
                        que el descubrimiento de noticias sea tan agradable como una taza de café fresco.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge className="bg-white/10 hover:bg-white/20 text-white/70">React</Badge>
                        <Badge className="bg-white/10 hover:bg-white/20 text-white/70">Node.js</Badge>
                      </div>
                      <a
                        href="http://hubii.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-emerald-400 hover:text-emerald-300"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <span>Visitar proyecto</span>
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative h-full">
                  <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-md opacity-75 group-hover:opacity-100 transition-opacity" />
                  <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
                    <div className="h-48 overflow-hidden">
                    <img
                        src="https://placehold.co/600x400"
                        alt="Web Clara Peya"
                        width={400}
                        height={200}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent opacity-70" />

                      {/* Overlay content */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                          <div className="flex items-center gap-2 text-sm font-medium text-white">
                            <span>Ver proyecto</span>
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-cyan-400 transition-colors">
                        Web Clara Peya
                      </h3>
                      <p className="text-white/70 mb-4 line-clamp-2">
                        Sitio web creado para la pianista catalana Clara Peya.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge className="bg-white/10 hover:bg-white/20 text-white/70">Next.js</Badge>
                        <Badge className="bg-white/10 hover:bg-white/20 text-white/70">GSAP</Badge>
                      </div>
                      <a
                        href="http://clarapeya.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-emerald-400 hover:text-emerald-300"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <span>Visitar proyecto</span>
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative h-full">
                  <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-md opacity-75 group-hover:opacity-100 transition-opacity" />
                  <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10">
                    <div className="h-48 overflow-hidden">
                    <img
                        src="https://placehold.co/600x400"
                        alt="Web AFK Estudio"
                        width={400}
                        height={200}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent opacity-70" />

                      {/* Overlay content */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                          <div className="flex items-center gap-2 text-sm font-medium text-white">
                            <span>Ver proyecto</span>
                            <ArrowRight className="h-4 w-4" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-cyan-400 transition-colors">
                        Web AFK Estudio
                      </h3>
                      <p className="text-white/70 mb-4 line-clamp-2">
                        Sitio web para el estudio multidisciplinar AFK Estudio.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge className="bg-white/10 hover:bg-white/20 text-white/70">React</Badge>
                        <Badge className="bg-white/10 hover:bg-white/20 text-white/70">Three.js</Badge>
                      </div>
                      <a
                        href="http://afkestudio.es"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-emerald-400 hover:text-emerald-300"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <span>Visitar proyecto</span>
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 relative grid place-content-center">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-repeat opacity-5" />

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="max-w-xl mx-auto text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-emerald-400 mb-4">
                <GraduationCap className="h-4 w-4" />
                <span>Educación</span>
              </div>

              <h2 className="text-3xl font-bold mb-4">
                Formación{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  académica
                </span>
              </h2>

              <p className="text-white/70">Mi trayectoria educativa y cualificaciones.</p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="relative h-full">
                  <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-md opacity-75 group-hover:opacity-100 transition-opacity" />
                  <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex flex-col gap-2 mb-4">
                      <div className="inline-flex items-center px-3 py-1 self-start rounded-full bg-emerald-500/10 text-sm text-emerald-400 border border-emerald-500/20">
                        2003 - 2009
                      </div>
                      <h3 className="text-xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-cyan-400 transition-colors">
                        Ingeniería de Software
                      </h3>
                      <div className="text-white/70">Universitat Oberta de Catalunya</div>
                    </div>

                    <p className="text-white/80 mb-4">
                      Estudié Informática, Economía, Marketing, Física y Matemáticas.
                    </p>

                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-white/10 hover:bg-white/20 text-white/70">Informática</Badge>
                      <Badge className="bg-white/10 hover:bg-white/20 text-white/70">Economía</Badge>
                      <Badge className="bg-white/10 hover:bg-white/20 text-white/70">Matemáticas</Badge>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="relative h-full">
                  <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-md opacity-75 group-hover:opacity-100 transition-opacity" />
                  <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex flex-col gap-2 mb-4">
                      <div className="inline-flex items-center px-3 py-1 self-start rounded-full bg-emerald-500/10 text-sm text-emerald-400 border border-emerald-500/20">
                        2004 - 2007
                      </div>
                      <h3 className="text-xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-cyan-400 transition-colors">
                        Ingeniero Técnico en Informática de Gestión
                      </h3>
                      <div className="text-white/70">Universitat Politècnica de Catalunya</div>
                    </div>

                    <p className="text-white/80 mb-4">
                      Enfocado en Gestión de Proyectos IT, Desarrollo de Aplicaciones y Planificación de Productos.
                    </p>

                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <div className="text-sm text-white/60">
                        <span className="text-emerald-400 font-medium">Actividades:</span> Profesor de Taller de
                        Guitarra durante tres cursos.
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 relative grid place-content-center">
          <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-[#050024] to-[#030014] z-0" />

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="max-w-xl mx-auto text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-emerald-400 mb-4">
                <Mail className="h-4 w-4" />
                <span>Contacto</span>
              </div>

              <h2 className="text-3xl font-bold mb-4">
                Ponte en{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                  contacto
                </span>
              </h2>

              <p className="text-white/70">No dudes en contactarme para colaboraciones o simplemente para saludar.</p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative">
                  <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-md" />
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-6">Redes Sociales</h3>
                    <div className="space-y-4">
                      <motion.a
                        href="https://github.com/midudev"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                          <Github className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="font-medium">GitHub</div>
                          <div className="text-sm text-white/60">@midudev</div>
                        </div>
                      </motion.a>
                      <motion.a
                        href="https://twitter.com/midudev"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                          <Twitter className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="font-medium">Twitter</div>
                          <div className="text-sm text-white/60">@midudev</div>
                        </div>
                      </motion.a>
                      <motion.a
                        href="https://linkedin.com/in/midudev"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                          <Linkedin className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="font-medium">LinkedIn</div>
                          <div className="text-sm text-white/60">midudev</div>
                        </div>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="relative">
                  <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-md" />
                  <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-6">Envíame un mensaje</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm text-white/70">Nombre</label>
                        <div className="relative">
                          <input
                            type="text"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                            placeholder="Tu nombre"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-white/70">Email</label>
                        <div className="relative">
                          <input
                            type="email"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                            placeholder="tu@email.com"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-white/70">Mensaje</label>
                        <div className="relative">
                          <textarea
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 min-h-[120px]"
                            placeholder="Tu mensaje..."
                          />
                        </div>
                      </div>
                      <Button
                        className="w-full relative overflow-hidden group bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white border-0"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Enviar mensaje
                          <Send className="h-4 w-4" />
                        </span>
                        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-[#020010] grid place-content-center">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-4">
              <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Miguel Angel Durán García
              </div>
              <p className="text-white/60 max-w-md">
                Ingeniero de Software y Desarrollador Web. Reconocido como GitHub Star, Microsoft MVP y Google Developer
                Expert.
              </p>
            </div>
            <div className="space-y-4">
              <div className="text-lg font-bold">Enlaces rápidos</div>
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-white/60 hover:text-emerald-400 transition-colors text-left flex items-center gap-2"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <ChevronRight className="h-3 w-3 text-emerald-500" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
            <div className="space-y-4">
              <div className="text-lg font-bold">Conecta</div>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/midudev"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </motion.a>
                <motion.a
                  href="https://twitter.com/midudev"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/midudev"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </motion.a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Miguel Angel Durán García. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>

  )
}
