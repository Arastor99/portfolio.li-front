

import { useState } from "react"
import { motion } from "framer-motion"
import { Linkedin, ArrowRight, Check, AlertCircle } from "lucide-react"
import MainMenu from "@components/ui/MainMenu"

export default function LinkedInPage() {
  const [linkedinUrl, setLinkedinUrl] = useState("")
  const [isImporting, setIsImporting] = useState(false)
  const [importStatus, setImportStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [profileData, setProfileData] = useState(null)

  const handleImport = () => {
    if (!linkedinUrl) return

    setIsImporting(true)
    setImportStatus("loading")

    // Simulación de importación
    setTimeout(() => {
      setIsImporting(false)
      setImportStatus("success")

      // Datos de ejemplo que vendrían de la API
      setProfileData({
        name: "Ana García",
        title: "Diseñadora UX/UI",
        location: "Madrid, España",
        summary:
          "Diseñadora UX/UI con 5 años de experiencia en el sector tecnológico. Especializada en crear experiencias digitales centradas en el usuario y con un enfoque en la accesibilidad.",
        experience: [
          {
            company: "Empresa Innovadora",
            title: "Senior UX/UI Designer",
            period: "2020 - Actualidad",
            description:
              "Diseño de interfaces para aplicaciones web y móviles. Investigación de usuarios y creación de prototipos.",
          },
          {
            company: "Agencia Digital",
            title: "UX Designer",
            period: "2018 - 2020",
            description: "Diseño de experiencias de usuario para clientes de diversos sectores.",
          },
        ],
        education: [
          {
            institution: "Universidad Complutense",
            degree: "Grado en Diseño",
            period: "2014 - 2018",
          },
        ],
        skills: ["UX Design", "UI Design", "Figma", "Adobe XD", "Investigación de usuarios", "Prototipado"],
      })
    }, 2000)
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <MainMenu />

      <main className="flex-1 md:ml-64 p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Importar perfil de LinkedIn</h1>
          <p className="text-gray-600 mb-8">
            Importa tu información profesional desde LinkedIn para crear rápidamente tu portfolio o curriculum
          </p>

          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="max-w-xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Conecta con LinkedIn</h2>
                  <p className="text-gray-600">Introduce la URL de tu perfil para importar tus datos</p>
                </div>
              </div>

              <div className="flex mb-4">
                <input
                  type="text"
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                  placeholder="https://linkedin.com/in/tu-perfil"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
                  disabled={importStatus === "loading"}
                />
                <motion.button
                  className={`px-4 py-2 rounded-r-lg text-white ${
                    importStatus === "loading" ? "bg-gray-400" : "bg-blue-600"
                  }`}
                  whileHover={{ backgroundColor: importStatus === "loading" ? "#9ca3af" : "#2563eb" }}
                  whileTap={{ scale: importStatus === "loading" ? 1 : 0.95 }}
                  onClick={handleImport}
                  disabled={importStatus === "loading"}
                >
                  {importStatus === "loading" ? "Importando..." : "Importar"}
                </motion.button>
              </div>

              <p className="text-sm text-gray-500 mb-6">
                Tus datos se importarán de forma segura y podrás editarlos antes de utilizarlos en tu proyecto.
              </p>

              {importStatus === "loading" && (
                <div className="bg-blue-50 text-blue-700 p-4 rounded-lg flex items-center">
                  <div className="animate-spin mr-3">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </div>
                  Importando datos de LinkedIn...
                </div>
              )}

              {importStatus === "success" && profileData && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-green-50 text-green-700 p-4 rounded-lg flex items-center mb-6">
                    <Check size={20} className="mr-3" />
                    Datos importados correctamente
                  </div>

                  <div className="border border-gray-200 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
                      <div>
                        <h3 className="text-xl font-semibold">{profileData.name}</h3>
                        <p className="text-gray-600">{profileData.title}</p>
                        <p className="text-gray-500 text-sm">{profileData.location}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-medium mb-2">Resumen</h4>
                      <p className="text-gray-600">{profileData.summary}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-medium mb-2">Experiencia</h4>
                      {profileData.experience.map((exp: any, index: number) => (
                        <div key={index} className="mb-4">
                          <h5 className="font-medium">{exp.title}</h5>
                          <p className="text-gray-700">{exp.company}</p>
                          <p className="text-gray-500 text-sm">{exp.period}</p>
                          <p className="text-gray-600 mt-1">{exp.description}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6">
                      <h4 className="font-medium mb-2">Formación</h4>
                      {profileData.education.map((edu: any, index: number) => (
                        <div key={index} className="mb-2">
                          <h5 className="font-medium">{edu.degree}</h5>
                          <p className="text-gray-700">{edu.institution}</p>
                          <p className="text-gray-500 text-sm">{edu.period}</p>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h4 className="font-medium mb-2">Habilidades</h4>
                      <div className="flex flex-wrap gap-2">
                        {profileData.skills.map((skill: string, index: number) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end mt-6 gap-3">
                    <button className="px-4 py-2 border border-gray-300 rounded-lg">Editar datos</button>
                    <motion.button
                      className="px-4 py-2 bg-gray-900 text-white rounded-lg flex items-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Usar estos datos <ArrowRight size={16} className="ml-2" />
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {importStatus === "error" && (
                <div className="bg-red-50 text-red-700 p-4 rounded-lg flex items-center">
                  <AlertCircle size={20} className="mr-3" />
                  No se ha podido importar el perfil. Comprueba la URL e inténtalo de nuevo.
                </div>
              )}
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-6">
            <h3 className="font-medium mb-4">¿Qué datos se importan?</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <Check size={16} className="mr-2 text-green-600" />
                Información personal y profesional
              </li>
              <li className="flex items-center">
                <Check size={16} className="mr-2 text-green-600" />
                Experiencia laboral
              </li>
              <li className="flex items-center">
                <Check size={16} className="mr-2 text-green-600" />
                Formación académica
              </li>
              <li className="flex items-center">
                <Check size={16} className="mr-2 text-green-600" />
                Habilidades y competencias
              </li>
              <li className="flex items-center">
                <Check size={16} className="mr-2 text-green-600" />
                Certificaciones
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
