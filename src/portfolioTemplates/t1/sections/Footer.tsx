import { motion } from 'framer-motion'
import { ChevronRight, Github, Twitter, Linkedin } from 'lucide-react'

interface FooterProps {
  navItems: { id: string; label: string }[]
    scrollToSection: (id: string) => void
    handleMouseEnter: () => void
    handleMouseLeave: () => void
}

const Footer: React.FC<FooterProps> = ({navItems, scrollToSection, handleMouseEnter, handleMouseLeave }) => {
  return (
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
  )
}

export default Footer
