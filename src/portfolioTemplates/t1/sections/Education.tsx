import { motion } from 'framer-motion'
import { GraduationCap, Badge } from 'lucide-react'

const Education = () => {
  return (
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
  )
}

export default Education
