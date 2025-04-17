import { motion } from "framer-motion"
import { Code, ArrowRight, Badge, ExternalLink } from "lucide-react"

interface ProjectsProps {
    handleMouseEnter: () => void
    handleMouseLeave: () => void
}


const Projects: React.FC<ProjectsProps> = ({handleMouseEnter, handleMouseLeave}) => {
  return (
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
  )
}

export default Projects
