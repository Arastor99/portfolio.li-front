import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'


const Experience = () => {
  return (
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
  )
}

export default Experience
