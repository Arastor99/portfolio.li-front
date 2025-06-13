"use client"

import { motion } from "framer-motion"
import {
  Pencil,
  Download,
  Eye,
  CheckCircle2,
  FileText,
  Briefcase,
  Clock,
  ArrowRight,
  User2,
  Bell,
  BarChart3,
} from "lucide-react"
import { useEffect, useState } from "react"
import { useProfileStore } from "@store/profileStore"
import { useNavigate } from "react-router-dom"
import { usePortfolioStore } from "@store/portfolioStore"
import { PDFViewer } from "@react-pdf/renderer"
import ModernCV from "src/CvTemplates/t1/cv2"

export default function DashboardPage2() {
  const [hasPortfolio, setHasPortfolio] = useState(false)
  const [hasCV, setHasCV] = useState(true)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("documents")
  const { profileStore } = useProfileStore()
  const { portfolioStore } = usePortfolioStore()
  const navigate = useNavigate()

  useEffect(() => {
    if (portfolioStore) {
      setHasPortfolio(true)
    }
  }, [portfolioStore])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  // Custom Button Component
  const Button = ({ children, variant = "primary", size = "md", className = "", onClick = () => {} }) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"

    const variantStyles = {
      primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm",
      outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
      ghost: "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
      danger: "bg-red-600 text-white hover:bg-red-700",
    }

    const sizeStyles = {
      sm: "text-xs px-2.5 py-1.5",
      md: "text-sm px-4 py-2",
      lg: "text-base px-6 py-3",
    }

    return (
      <button className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`} onClick={onClick}>
        {children}
      </button>
    )
  }

  // Custom Card Component
  const Card = ({ children, className = "" }) => {
    return (
      <div className={`bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm ${className}`}>
        {children}
      </div>
    )
  }

  // Custom Card Header Component
  const CardHeader = ({ children, className = "" }) => {
    return <div className={`bg-gray-50 border-b border-gray-100 p-6 ${className}`}>{children}</div>
  }

  // Custom Card Content Component
  const CardContent = ({ children, className = "" }) => {
    return <div className={`p-6 ${className}`}>{children}</div>
  }

  // Custom Card Footer Component
  const CardFooter = ({ children, className = "" }) => {
    return (
      <div className={`px-6 py-4 bg-gray-50 border-t border-gray-100 flex flex-wrap gap-3 ${className}`}>
        {children}
      </div>
    )
  }

  // Custom Badge Component
  const Badge = ({ children, variant = "default", className = "" }) => {
    const variantStyles = {
      default: "bg-gray-100 text-gray-800",
      success: "bg-green-100 text-green-800",
      warning: "bg-yellow-100 text-yellow-800",
      danger: "bg-red-100 text-red-800",
      info: "bg-blue-100 text-blue-800",
    }

    return (
      <span
        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variantStyles[variant]} ${className}`}
      >
        {children}
      </span>
    )
  }

  // Custom Avatar Component
  const Avatar = ({ children, className = "" }) => {
    return <div className={`inline-flex items-center justify-center rounded-full ${className}`}>{children}</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with gradient background */}
      <div className="bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-20">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <User2 className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Dashboard</h1>
                  <p className="mt-1 text-gray-500">Gestiona tu CV y portfolio profesional</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
                    <Bell size={20} />
                    <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats overview - Only showing Last Update and Portfolio Visits */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          <motion.div variants={fadeInUp}>
            <Card>
              <div className="p-6 flex items-center">
                <div className="p-3 rounded-full bg-amber-50 text-amber-600 mr-4">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Última actualización</p>
                  <p className="text-2xl font-semibold text-gray-900">3 días</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card>
              <div className="p-6 flex items-center">
                <div className="p-3 rounded-full bg-blue-50 text-blue-600 mr-4">
                  <BarChart3 size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Visitas al portfolio</p>
                  <p className="text-2xl font-semibold text-gray-900">124</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Custom Tabs */}
        <div className="mb-8">
          <div className="flex space-x-1 border-b border-gray-200 mb-6">
            <button
              onClick={() => setActiveTab("documents")}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "documents"
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Documentos
            </button>
            <button
              onClick={() => setActiveTab("activity")}
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "activity"
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Actividad reciente
            </button>
          </div>

          {activeTab === "documents" && (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* CV Card */}
              <motion.div variants={fadeInUp}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900">Currículum Vitae</h2>
                        <p className="text-gray-500 mt-1 text-sm">Tu perfil profesional</p>
                      </div>
                      <Badge variant={hasCV ? "success" : "warning"}>{hasCV ? "Creado" : "No creado"}</Badge>
                    </div>
                  </CardHeader>

                  {hasCV ? (
                    <>
                      <CardContent>
                        <div className="aspect-[3/4] bg-gray-50 rounded-lg mb-4 overflow-hidden border">
                          <PDFViewer className="w-full h-full rounded-lg" style={{ border: "none" }}>
                            <ModernCV />
                          </PDFViewer>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 mt-2">
                          <Clock size={14} className="mr-1" />
                          <span>Última actualización: 15 de abril, 2023</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="flex items-center gap-2">
                          <Pencil size={14} />
                          <span>Editar</span>
                        </Button>
                        <Button variant="outline" className="flex items-center gap-2">
                          <Download size={14} />
                          <span>Descargar</span>
                        </Button>
                        <Button variant="ghost" className="flex items-center gap-2">
                          <Eye size={14} />
                          <span>Vista previa</span>
                        </Button>
                      </CardFooter>
                    </>
                  ) : (
                    <CardContent className="p-8 flex flex-col items-center justify-center text-center">
                      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <FileText className="h-10 w-10 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No tienes un CV creado</h3>
                      <p className="text-gray-500 mb-6 max-w-md">
                        Crea tu CV profesional para destacar tus habilidades y experiencia laboral
                      </p>
                      <Button className="flex items-center gap-2">
                        <FileText size={16} />
                        <span>Crear CV</span>
                      </Button>
                    </CardContent>
                  )}
                </Card>
              </motion.div>

              {/* Portfolio Card */}
              <motion.div variants={fadeInUp}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900">Portfolio</h2>
                        <p className="text-gray-500 mt-1 text-sm">Tu escaparate profesional</p>
                      </div>
                      <Badge variant={hasPortfolio ? "success" : "warning"}>
                        {hasPortfolio ? "Creado" : "No creado"}
                      </Badge>
                    </div>
                  </CardHeader>

                  {hasPortfolio ? (
                    <>
                      <CardContent>
                        {profileStore && portfolioStore?.template.name && (
                          <div className="w-full aspect-[3/4] overflow-hidden border mb-4 shadow-md flex justify-center bg-gray-900 rounded-lg relative">
                            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 z-10 bg-amber-100 text-amber-900 text-xs px-4 py-1 rounded-full shadow-sm font-medium">
                              Vista en modo móvil
                            </div>
                            <div className="w-full h-full origin-top transform rounded-lg">
                              <iframe
                                src="http://localhost:5173/app/preview"
                                className="w-full h-full rounded-lg border-0"
                                loading="lazy"
                                style={{ overflow: "hidden" }}
                              />
                            </div>
                          </div>
                        )}
                        <div className="flex items-center text-sm text-gray-500 mt-2">
                          <Clock size={14} className="mr-1" />
                          <span>Última actualización: 3 de mayo, 2023</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="flex items-center gap-2" onClick={() => navigate("/app/portfolio/update")}>
                          <Pencil size={14} />
                          <span>Editar</span>
                        </Button>
                        <Button
                          variant="outline"
                          className="flex items-center gap-2"
                          onClick={() => window.open("http://localhost:5173/app/preview", "_blank")}
                        >
                          <Eye size={14} />
                          <span>Ver en escritorio</span>
                        </Button>
                      </CardFooter>
                    </>
                  ) : (
                    <CardContent className="p-8 flex flex-col items-center justify-center text-center">
                      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <Briefcase className="h-10 w-10 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No tienes un portfolio creado</h3>
                      <p className="text-gray-500 mb-6 max-w-md">
                        Crea un portfolio para mostrar tus proyectos y habilidades profesionales
                      </p>
                      <Button className="flex items-center gap-2" onClick={() => navigate("/app/portfolio/create")}>
                        <Briefcase size={16} />
                        <span>Crear Portfolio</span>
                      </Button>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            </motion.div>
          )}

          {activeTab === "activity" && (
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold text-gray-900">Actividad reciente</h2>
                <p className="text-gray-500 mt-1 text-sm">Historial de acciones en tu cuenta</p>
              </CardHeader>
              <div className="divide-y divide-gray-100">
                <motion.div variants={staggerContainer} initial="hidden" animate="visible">
                  <motion.div variants={fadeInUp} className="flex items-start gap-4 p-6">
                    <Avatar className="h-10 w-10 bg-green-100">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">CV actualizado</p>
                      <p className="text-sm text-gray-500">Has actualizado tu CV con nueva experiencia laboral</p>
                      <p className="text-xs text-gray-400 mt-1">Hace 2 días</p>
                    </div>
                    <Button variant="ghost" size="sm" className="flex-shrink-0">
                      <ArrowRight size={16} />
                    </Button>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="flex items-start gap-4 p-6">
                    <Avatar className="h-10 w-10 bg-blue-100">
                      <Download className="h-5 w-5 text-blue-600" />
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">CV descargado</p>
                      <p className="text-sm text-gray-500">Has descargado tu CV en formato PDF</p>
                      <p className="text-xs text-gray-400 mt-1">Hace 1 semana</p>
                    </div>
                    <Button variant="ghost" size="sm" className="flex-shrink-0">
                      <ArrowRight size={16} />
                    </Button>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="flex items-start gap-4 p-6">
                    <Avatar className="h-10 w-10 bg-purple-100">
                      <Pencil className="h-5 w-5 text-purple-600" />
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">Perfil actualizado</p>
                      <p className="text-sm text-gray-500">Has actualizado tu información de perfil</p>
                      <p className="text-xs text-gray-400 mt-1">Hace 2 semanas</p>
                    </div>
                    <Button variant="ghost" size="sm" className="flex-shrink-0">
                      <ArrowRight size={16} />
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </Card>
          )}
        </div>

        {/* Recent Activity Section (replacing Projects section) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Actividad reciente</h2>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <span>Ver todo</span>
              <ArrowRight size={14} />
            </Button>
          </div>

          <Card>
            <div className="divide-y divide-gray-100">
              <div className="flex items-start gap-4 p-6">
                <Avatar className="h-10 w-10 bg-green-100">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">CV actualizado</p>
                  <p className="text-sm text-gray-500">Has actualizado tu CV con nueva experiencia laboral</p>
                  <p className="text-xs text-gray-400 mt-1">Hace 3 días</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6">
                <Avatar className="h-10 w-10 bg-blue-100">
                  <Download className="h-5 w-5 text-blue-600" />
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">CV descargado</p>
                  <p className="text-sm text-gray-500">Has descargado tu CV en formato PDF</p>
                  <p className="text-xs text-gray-400 mt-1">Hace 1 semana</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6">
                <Avatar className="h-10 w-10 bg-purple-100">
                  <Pencil className="h-5 w-5 text-purple-600" />
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">Perfil actualizado</p>
                  <p className="text-sm text-gray-500">Has actualizado tu información de perfil</p>
                  <p className="text-xs text-gray-400 mt-1">Hace 2 semanas</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6">
                <Avatar className="h-10 w-10 bg-amber-100">
                  <Eye className="h-5 w-5 text-amber-600" />
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">Portfolio visitado</p>
                  <p className="text-sm text-gray-500">Tu portfolio ha recibido 12 nuevas visitas</p>
                  <p className="text-xs text-gray-400 mt-1">Hace 3 semanas</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
