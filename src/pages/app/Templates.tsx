"use client"

import type React from "react"

import MainMenu from "@components/ui/MainMenu"
import { motion } from "framer-motion"

interface TemplateCardProps {
  title: string
  description: string
  image: string
  tags: string[]
}

const TemplateCard: React.FC<TemplateCardProps> = ({ title, description, image, tags }) => {
  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.2 }}
    >
      <div className="h-48 bg-gray-200 relative overflow-hidden">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full text-xs font-medium">Popular</div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <button className="flex-1 bg-gray-900 text-white py-2 rounded-lg text-sm font-medium">Usar</button>
          <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm">Vista previa</button>
        </div>
      </div>
    </motion.div>
  )
}

export default function Templates() {
  const templates = [
    {
      title: "Minimalista",
      description: "Diseño limpio y elegante para destacar tu trabajo",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Moderno", "Simple", "Profesional"],
    },
    {
      title: "Creativo",
      description: "Diseño llamativo para profesionales creativos",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Colorido", "Dinámico", "Artístico"],
    },
    {
      title: "Corporativo",
      description: "Aspecto formal para entornos empresariales",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Formal", "Ejecutivo", "Sobrio"],
    },
    {
      title: "Tecnológico",
      description: "Diseño moderno para perfiles técnicos",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Tech", "Innovador", "Digital"],
    },
    {
      title: "Portfolio Visual",
      description: "Enfocado en mostrar imágenes y proyectos visuales",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Galería", "Visual", "Portafolio"],
    },
    {
      title: "Curriculum Plus",
      description: "Formato de CV mejorado con elementos interactivos",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["CV", "Profesional", "Detallado"],
    },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      <MainMenu />

      <main className="flex-1 md:ml-64 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Plantillas</h1>
              <p className="text-gray-600">Elige la plantilla perfecta para tu portfolio profesional</p>
            </div>

            <div className="flex gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar plantillas..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full md:w-64 focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
                <span className="absolute left-3 top-2.5 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </span>
              </div>

              <select className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-1 focus:ring-gray-400">
                <option>Todos</option>
                <option>Profesional</option>
                <option>Creativo</option>
                <option>Minimalista</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template, index) => (
              <TemplateCard
                key={index}
                title={template.title}
                description={template.description}
                image={template.image}
                tags={template.tags}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
