"use client"

import MainMenu from "@components/ui/MainMenu"
import { Linkedin, Github, Globe, Twitter } from "lucide-react"
import { motion } from "framer-motion"

export default function Profile() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <MainMenu />

      <main className="flex-1 md:ml-64 p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Tu Perfil</h1>

          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=128&width=128"
                    alt="Foto de perfil"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="w-full mt-3 text-sm text-gray-600 hover:text-gray-900">Cambiar foto</button>
              </div>

              <div className="flex-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
                      placeholder="Tu nombre"
                      defaultValue="Ana García"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Profesión</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
                      placeholder="Tu profesión"
                      defaultValue="Diseñadora UX/UI"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Biografía</label>
                    <textarea
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 min-h-[100px]"
                      placeholder="Escribe una breve descripción sobre ti"
                      defaultValue="Diseñadora UX/UI con 5 años de experiencia en el sector tecnológico. Especializada en crear experiencias digitales centradas en el usuario y con un enfoque en la accesibilidad."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Redes sociales</h2>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-blue-50 text-blue-600 rounded-full">
                  <Linkedin size={20} />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
                    placeholder="URL de LinkedIn"
                    defaultValue="https://linkedin.com/in/anagarcia"
                  />
                </div>
                <motion.button
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Importar
                </motion.button>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full">
                  <Github size={20} />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
                    placeholder="URL de GitHub"
                    defaultValue="https://github.com/anagarcia"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full">
                  <Globe size={20} />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
                    placeholder="URL de tu sitio web"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gray-100 text-gray-700 rounded-full">
                  <Twitter size={20} />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
                    placeholder="URL de Twitter/X"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button className="px-4 py-2 border border-gray-300 rounded-lg">Cancelar</button>
            <motion.button
              className="px-4 py-2 bg-gray-900 text-white rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Guardar cambios
            </motion.button>
          </div>
        </div>
      </main>
    </div>
  )
}
