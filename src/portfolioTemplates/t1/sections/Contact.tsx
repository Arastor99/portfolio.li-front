import { Button } from '@components/ui/button'
import { motion } from 'framer-motion'
import { Mail, Github, Twitter, Linkedin, Send } from 'lucide-react'

interface ContactProps {
    handleMouseEnter: () => void
    handleMouseLeave: () => void
}

const Contact: React.FC<ContactProps>= ({handleMouseEnter, handleMouseLeave }) => {
  return (
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
  )
}

export default Contact
