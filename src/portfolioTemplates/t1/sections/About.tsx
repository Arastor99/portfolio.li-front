import { Profile } from "@common/types/profile";
import { motion } from "framer-motion";
import { User, Award } from "lucide-react";

interface AboutProps {
  profile: Profile;
}
const proficiencyMap: Record<string, { label: string; width: string }> = {
  NATIVE_OR_BILINGUAL: { label: "Nativo", width: "100%" },
  FULL_PROFESSIONAL: { label: "Profesional", width: "90%" },
  PROFESSIONAL_WORKING: { label: "Profesional", width: "80%" },
  LIMITED_WORKING: { label: "Intermedio", width: "60%" },
  ELEMENTARY: { label: "Básico", width: "40%" },
};

const About: React.FC<AboutProps> = ({ profile }) => {
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
                      350k+
                    </div>
                    <div className="text-white/60 text-sm">Followers</div>
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
                {profile.summary?.split("\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="text-white/80 font-medium">Idiomas</div>
                  <div className="space-y-3">
                    {profile.languages.map((lang, i) => {
                      const prof = proficiencyMap[lang.proficiency] || {
                        label: lang.proficiency,
                        width: "50%",
                      };

                      return (
                        <div key={lang.name} className="space-y-1">
                          <div className="flex justify-between mb-1 text-sm">
                            <span>{lang.name}</span>
                            <span className="text-emerald-400">
                              {prof.label}
                            </span>
                          </div>
                          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: prof.width }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                              className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="space-y-2">
                    <div className="text-white/80 font-medium">
                      Reconocimientos
                    </div>
                    <div className="space-y-3">
                      {profile.honors.map((honor) => {
                        // Calcula el año solo si issueDate está presente
                        const year = honor.issueDate
                          ? new Date(honor.issueDate).getFullYear()
                          : null;

                        return (
                          <div
                            key={honor.title}
                            className="flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                          >
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                              <Award className="h-4 w-4 text-pink-400" />
                            </div>
                            <div>
                              <div className="text-sm font-medium">
                                {honor.title}
                              </div>
                              <div className="text-xs text-white/60">
                                {year ? `Año: ${year}` : "Fecha no disponible"}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
