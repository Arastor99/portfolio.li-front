import { motion } from "framer-motion";
import { Plus, Edit, Download, Eye } from "lucide-react";
import { useEffect, useState } from "react";
import { useProfileStore } from "@store/profileStore";
import { useNavigate } from "react-router-dom";
import { usePortfolioStore } from "@store/portfolioStore";
import { PDFViewer } from "@react-pdf/renderer";
import ModernCV from "src/CvTemplates/t1/cv2";
export default function DashboardPage() {
  const [hasPortfolio, setHasPortfolio] = useState(false);
  const [hasCV, setHasCV] = useState(true);
  const [loading, setLoading] = useState(true);
  const { profileStore } = useProfileStore();
  const { portfolioStore } = usePortfolioStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (portfolioStore) {
      setHasPortfolio(true);
    }
  }, [portfolioStore]);
  return (
    <div className="min-h-screen p-4 md:p-8 pt-20 z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#0F172A]">
            Dashboard
          </h1>
          <p className="text-[#64748B]">
            Gestiona tu CV y portfolio profesional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* CV Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl overflow-hidden shadow-md"
          >
            <div className="p-6 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-[#0F172A]">
                  Currículum Vitae
                </h2>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    hasCV
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {hasCV ? "Creado" : "No creado"}
                </span>
              </div>
            </div>

            {hasCV ? (
            <div>
            <div className="p-6">
              <div className="aspect-[3/4] bg-gray-50 rounded-lg mb-4 overflow-hidden">
              <PDFViewer className="w-full h-full rounded-lg" style={{ border: 'none' }}>
                <ModernCV/>
              </PDFViewer>
              </div>
              <p className="text-[#64748B] mb-4">
                Última actualización: 15 de abril, 2023
              </p>
              <div className="flex flex-wrap gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2 bg-[#6366F1] text-white rounded-lg shadow-sm flex items-center gap-2"
                >
                  <Edit size={16} />
                  <span>Editar</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2 border border-[#6366F1] text-[#6366F1] rounded-lg flex items-center gap-2"
                >
                  <Download size={16} />
                  <span>Descargar</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2 border border-gray-300 text-[#64748B] rounded-lg flex items-center gap-2"
                >
                  <Eye size={16} />
                  <span>Vista previa</span>
                </motion.button>
              </div>
            </div>
          </div>
            ) : (
              <div className="p-6 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-[#6366F1]/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-[#6366F1]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-[#0F172A] mb-2">
                  No tienes un CV creado
                </h3>
                <p className="text-[#64748B] mb-6">
                  Crea tu CV profesional para destacar tus habilidades y
                  experiencia
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-[#6366F1] text-white rounded-lg shadow-md flex items-center gap-2"
                >
                  <Plus size={18} />
                  <span>Crear CV</span>
                </motion.button>
              </div>
            )}
          </motion.div>

          {/* Portfolio Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-white rounded-xl overflow-hidden shadow-md"
          >
            <div className="p-6 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-[#0F172A]">
                  Portfolio
                </h2>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    hasPortfolio
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {hasPortfolio ? "Creado" : "No creado"}
                </span>
              </div>
            </div>

            {hasPortfolio ? (
              <div className="p-6">
                {profileStore && portfolioStore?.template.name && (
                  <div className="w-full aspect-[3/4] overflow-x-hidden overflow-auto border mb-4 shadow-lg flex justify-center bg-[#030014] hide-scrollbar rounded-xl relative">
                    <div className="absolute top-3 left-1/2 transform -translate-x-1/2 z-10 bg-yellow-100 text-yellow-900 text-xs px-4 py-1 rounded-full shadow-md font-semibold">
                      Vista en modo móvil
                    </div>
                    <div className="w-full h-full origin-top transform rounded-xl">
                      <iframe
                        src="http://localhost:5173/app/preview"
                        className="w-full h-full rounded-xl border overflow-hidden"
                        loading="lazy"
                        style={{ overflow: "hidden" }}
                      />
                    </div>
                  </div>
                )}
                <p className="text-[#64748B] mb-4">
                  Última actualización: 3 de mayo, 2023
                </p>
                <div className="flex flex-wrap gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 bg-[#6366F1] text-white rounded-lg shadow-sm flex items-center gap-2"
                    onClick={() => navigate("/app/portfolio/update")}
                  >
                    <Edit size={16} />
                    <span>Editar</span>
                  </motion.button>
                  <motion.a
                    href="http://localhost:5173/app/preview"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 py-2 border border-gray-300 text-[#64748B] rounded-lg flex items-center gap-2"
                  >
                    <Eye size={16} />
                    <span>Ver en modo escritorio</span>
                  </motion.a>
                </div>
              </div>
            ) : (
              <div className="p-6 flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-[#6366F1]/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-[#6366F1]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-[#0F172A] mb-2">
                  No tienes un portfolio creado
                </h3>
                <p className="text-[#64748B] mb-6">
                  Crea un portfolio para mostrar tus proyectos profesionales
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-[#6366F1] text-white rounded-lg shadow-md flex items-center gap-2"
                  onClick={() => navigate("/app/portfolio/create")}
                >
                  <Plus size={18} />
                  <span>Crear Portfolio</span>
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>

        {/* Recent Activity Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl overflow-hidden shadow-md"
        >
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-[#0F172A]">
              Actividad reciente
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[#0F172A] font-medium">CV actualizado</p>
                  <p className="text-[#64748B] text-sm">
                    Has actualizado tu CV con nueva experiencia laboral
                  </p>
                  <p className="text-[#64748B] text-xs mt-1">Hace 2 días</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[#0F172A] font-medium">CV descargado</p>
                  <p className="text-[#64748B] text-sm">
                    Has descargado tu CV en formato PDF
                  </p>
                  <p className="text-[#64748B] text-xs mt-1">Hace 1 semana</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[#0F172A] font-medium">
                    Perfil actualizado
                  </p>
                  <p className="text-[#64748B] text-sm">
                    Has actualizado tu información de perfil
                  </p>
                  <p className="text-[#64748B] text-xs mt-1">Hace 2 semanas</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
