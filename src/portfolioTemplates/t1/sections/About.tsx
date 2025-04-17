import { motion } from 'framer-motion'
import { User, Award, Star } from 'lucide-react'


const About = () => {
  return (
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

  )
}

export default About
