

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FileText, Layout, Linkedin, ArrowRight, Check } from "lucide-react"
import MainMenu from "@components/ui/MainMenu"

type ProjectType = "curriculum" | "portfolio" | null
type DataSource = "manual" | "linkedin" | null

export default function Create() {
  const [step, setStep] = useState(1)
  const [projectType, setProjectType] = useState<ProjectType>(null)
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null)
  const [dataSource, setDataSource] = useState<DataSource>(null)

  const templates = [
    {
      id: 1,
      title: "Minimalista",
      description: "Diseño limpio y elegante",
      image: "/placeholder.svg?height=200&width=300",
      type: "curriculum",
    },
    {
      id: 2,
      title: "Profesional",
      description: "Aspecto formal y corporativo",
      image: "/placeholder.svg?height=200&width=300",
      type: "curriculum",
    },
    {
      id: 3,
      title: "Creativo",
      description: "Diseño llamativo y moderno",
      image: "/placeholder.svg?height=200&width=300",
      type: "portfolio",
    },
    {
      id: 4,
      title: "Galería",
      description: "Enfocado en mostrar proyectos visuales",
      image: "/placeholder.svg?height=200&width=300",
      type: "portfolio",
    },
  ]

  const filteredTemplates = projectType ? templates.filter((template) => template.type === projectType) : templates

  const handleSelectProjectType = (type: ProjectType) => {
    setProjectType(type)
    setStep(2)
  }

  const handleSelectTemplate = (id: number) => {
    setSelectedTemplate(id)
    setStep(3)
  }

  const handleSelectDataSource = (source: DataSource) => {
    setDataSource(source)
    setStep(4)
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <MainMenu />

      <main className="flex-1 md:ml-64 p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Crear nuevo proyecto</h1>
          <p className="text-gray-600 mb-8">Sigue los pasos para crear tu curriculum o portfolio</p>

          {/* Progress Steps */}
          <div className="flex items-center mb-8">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    step >= stepNumber ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-500"
                  } transition-colors duration-200`}
                >
                  {step > stepNumber ? <Check size={20} /> : stepNumber}
                </div>
                {stepNumber < 4 && (
                  <div
                    className={`h-1 w-16 mx-2 ${
                      step > stepNumber ? "bg-gray-900" : "bg-gray-200"
                    } transition-colors duration-200`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Choose Project Type */}
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl font-semibold mb-6">Paso 1: Elige el tipo de proyecto</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    className={`bg-white p-6 rounded-xl shadow-sm border-2 ${
                      projectType === "curriculum" ? "border-gray-900" : "border-transparent"
                    } cursor-pointer hover:shadow-md transition-all`}
                    whileHover={{ y: -5 }}
                    onClick={() => handleSelectProjectType("curriculum")}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                        <FileText size={24} />
                      </div>
                      <h3 className="text-lg font-medium">Curriculum Vitae</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Crea un curriculum profesional para destacar tu experiencia, habilidades y formación académica.
                    </p>
                    <button className="flex items-center text-gray-900 font-medium">
                      Seleccionar <ArrowRight size={16} className="ml-2" />
                    </button>
                  </motion.div>

                  <motion.div
                    className={`bg-white p-6 rounded-xl shadow-sm border-2 ${
                      projectType === "portfolio" ? "border-gray-900" : "border-transparent"
                    } cursor-pointer hover:shadow-md transition-all`}
                    whileHover={{ y: -5 }}
                    onClick={() => handleSelectProjectType("portfolio")}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                        <Layout size={24} />
                      </div>
                      <h3 className="text-lg font-medium">Portfolio</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Crea un portfolio visual para mostrar tus proyectos, trabajos y logros profesionales.
                    </p>
                    <button className="flex items-center text-gray-900 font-medium">
                      Seleccionar <ArrowRight size={16} className="ml-2" />
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Choose Template */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">
                    Paso 2: Elige una plantilla para tu {projectType === "curriculum" ? "curriculum" : "portfolio"}
                  </h2>
                  <button onClick={handleBack} className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                    Volver atrás
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredTemplates.map((template) => (
                    <motion.div
                      key={template.id}
                      className={`bg-white rounded-xl overflow-hidden shadow-sm border-2 ${
                        selectedTemplate === template.id ? "border-gray-900" : "border-transparent"
                      } cursor-pointer hover:shadow-md transition-all`}
                      whileHover={{ y: -5 }}
                      onClick={() => handleSelectTemplate(template.id)}
                    >
                      <div className="h-48 bg-gray-200 relative overflow-hidden">
                        <img
                          src={template.image || "/placeholder.svg"}
                          alt={template.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-1">{template.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{template.description}</p>
                        <button className="flex items-center text-gray-900 font-medium">
                          Seleccionar <ArrowRight size={16} className="ml-2" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Choose Data Source */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">Paso 3: Elige cómo quieres añadir tus datos</h2>
                  <button onClick={handleBack} className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                    Volver atrás
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    className={`bg-white p-6 rounded-xl shadow-sm border-2 ${
                      dataSource === "manual" ? "border-gray-900" : "border-transparent"
                    } cursor-pointer hover:shadow-md transition-all`}
                    whileHover={{ y: -5 }}
                    onClick={() => handleSelectDataSource("manual")}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                        <FileText size={24} />
                      </div>
                      <h3 className="text-lg font-medium">Introducir manualmente</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Introduce tu información paso a paso utilizando nuestro editor intuitivo.
                    </p>
                    <button className="flex items-center text-gray-900 font-medium">
                      Seleccionar <ArrowRight size={16} className="ml-2" />
                    </button>
                  </motion.div>

                  <motion.div
                    className={`bg-white p-6 rounded-xl shadow-sm border-2 ${
                      dataSource === "linkedin" ? "border-gray-900" : "border-transparent"
                    } cursor-pointer hover:shadow-md transition-all`}
                    whileHover={{ y: -5 }}
                    onClick={() => handleSelectDataSource("linkedin")}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4 text-blue-600">
                        <Linkedin size={24} />
                      </div>
                      <h3 className="text-lg font-medium">Importar de LinkedIn</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Importa automáticamente tu experiencia, habilidades y formación desde tu perfil de LinkedIn.
                    </p>
                    <button className="flex items-center text-gray-900 font-medium">
                      Seleccionar <ArrowRight size={16} className="ml-2" />
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Form or LinkedIn Import */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold">
                    Paso 4: {dataSource === "manual" ? "Introduce tus datos" : "Importa tu perfil de LinkedIn"}
                  </h2>
                  <button onClick={handleBack} className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                    Volver atrás
                  </button>
                </div>

                {dataSource === "manual" ? (
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
                          placeholder="Ej. Juan Pérez"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Profesión</label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
                          placeholder="Ej. Desarrollador Web"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Resumen profesional</label>
                        <textarea
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 min-h-[100px]"
                          placeholder="Breve descripción de tu perfil profesional"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-medium mb-3">Experiencia laboral</h3>
                      <div className="border border-gray-200 rounded-lg p-4 mb-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Empresa</label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
                              placeholder="Nombre de la empresa"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Puesto</label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
                              placeholder="Tu cargo"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Fecha inicio</label>
                            <input
                              type="month"
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Fecha fin</label>
                            <input
                              type="month"
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
                            />
                          </div>
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
                            <textarea
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
                              placeholder="Describe tus responsabilidades y logros"
                            />
                          </div>
                        </div>
                      </div>
                      <button className="text-gray-600 hover:text-gray-900 text-sm font-medium flex items-center">
                        + Añadir experiencia
                      </button>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-medium mb-3">Formación académica</h3>
                      <div className="border border-gray-200 rounded-lg p-4 mb-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Institución</label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
                              placeholder="Universidad o centro educativo"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
                            <input
                              type="text"
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
                              placeholder="Grado, máster, etc."
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Fecha inicio</label>
                            <input
                              type="month"
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Fecha fin</label>
                            <input
                              type="month"
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
                            />
                          </div>
                        </div>
                      </div>
                      <button className="text-gray-600 hover:text-gray-900 text-sm font-medium flex items-center">
                        + Añadir formación
                      </button>
                    </div>

                    <div className="flex justify-end">
                      <motion.button
                        className="px-4 py-2 bg-gray-900 text-white rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Continuar
                      </motion.button>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="text-center max-w-md mx-auto py-8">
                      <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                        <Linkedin size={32} />
                      </div>
                      <h3 className="text-lg font-medium mb-2">Importar datos de LinkedIn</h3>
                      <p className="text-gray-600 mb-6">
                        Introduce la URL de tu perfil de LinkedIn para importar automáticamente tu información
                        profesional.
                      </p>
                      <div className="flex mb-6">
                        <input
                          type="text"
                          placeholder="https://linkedin.com/in/tu-perfil"
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
                        />
                        <motion.button
                          className="bg-blue-600 text-white px-4 py-2 rounded-r-lg"
                          whileHover={{ backgroundColor: "#2563eb" }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Importar
                        </motion.button>
                      </div>
                      <p className="text-sm text-gray-500">
                        Tus datos se importarán de forma segura y podrás editarlos antes de finalizar.
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}
