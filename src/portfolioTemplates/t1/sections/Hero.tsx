import { motion } from "framer-motion"
import { Button } from "@components/ui/button"
import { ArrowRight, Badge, Code, Github, Linkedin, Star, Twitter } from "lucide-react"
import { Profile } from "@common/types/profile"
import ImgProxy from "@components/ui/ImgProxy"

interface HeroProps {
    scrollToSection: (sectionId: string) => void
    handleMouseEnter: () => void
    handleMouseLeave: () => void
    profile: Profile
}


const Hero: React.FC<HeroProps> = ({handleMouseEnter,handleMouseLeave,scrollToSection, profile}) => {
  console.log(profile)
  return (
    
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
                    <span>{profile.experiences[0].title}</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl font-bold tracking-tight sm:text-6xl xl:text-7xl/none"
                  >
                    <span className="block">{profile.firstName}</span>
                    <div className="relative">
                      <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 animate-text-gradient bg-300%">
                        {profile.lastName}
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
                    {profile.headline}
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
                      
                      <ImgProxy 
                        src={profile.profilePictureUrl}
                        alt="Profile picture"
                        css="absolute inset-0 w-full h-full object-cover z-10"
                      />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#030014]/80 via-transparent to-transparent z-20" />

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
                      <span>{profile.honors?.[0]?.title}</span>
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
                      <span>{profile.honors?.[1]?.title}</span>
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
  )
}

export default Hero
