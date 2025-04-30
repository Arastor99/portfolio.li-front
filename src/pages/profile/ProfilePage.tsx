"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Edit, Save, Plus, Trash, X, Calendar } from "lucide-react"

import type { Profile, Experience, Education, Language, Certification, Project, Skill } from "@common/types/profile"

import { useProfileStore } from "@store/profileStore"
import toast from "react-hot-toast"
import { getUserProfile, updateProfile } from "@lib/services/profile.service"

// Sample data
// const sampleProfile: Profile = {
// 	id: "1",
// 	firstName: "John",
// 	lastName: "Doe",
// 	publicId: "johndoe",
// 	headline: "Senior Frontend Developer",
// 	summary:
// 		"Desarrollador frontend con más de 5 años de experiencia en React, TypeScript y diseño de interfaces de usuario.",
// 	student: false,
// 	locationName: "Madrid, España",
// 	geoCountryName: "España",
// 	geoLocationName: "Madrid",
// 	industryName: "Tecnología",
// 	birthDay: 15,
// 	birthMonth: 4,
// 	experiences: [
// 		{
// 			id: "exp1",
// 			title: "Senior Frontend Developer",
// 			companyName: "Tech Solutions Inc.",
// 			description:
// 				"Desarrollo de aplicaciones web con React y TypeScript. Implementación de arquitecturas escalables y optimización de rendimiento.",
// 			startDate: new Date("2020-01-01"),
// 			endDate: undefined,
// 			locationName: "Madrid",
// 			companyIndustries: ["Tecnología", "Software"],
// 		},
// 		{
// 			id: "exp2",
// 			title: "Frontend Developer",
// 			companyName: "Digital Agency",
// 			description:
// 				"Desarrollo de sitios web responsivos y aplicaciones interactivas utilizando React y Vue.js.",
// 			startDate: new Date("2018-03-01"),
// 			endDate: new Date("2019-12-31"),
// 			locationName: "Barcelona",
// 			companyIndustries: ["Marketing", "Diseño"],
// 		},
// 	],
// 	education: [
// 		{
// 			id: "edu1",
// 			schoolName: "Universidad Tecnológica",
// 			degreeName: "Ingeniería Informática",
// 			fieldOfStudy: "Desarrollo de software",
// 			startYear: 2014,
// 			endYear: 2018,
// 			description: "Especialización en desarrollo de software y sistemas web.",
// 		},
// 	],
// 	languages: [
// 		{ id: "lang1", name: "Español", proficiency: "Nativo" },
// 		{ id: "lang2", name: "Inglés", proficiency: "Avanzado" },
// 	],
// 	publications: [],
// 	certifications: [
// 		{
// 			id: "cert1",
// 			name: "React Developer Certification",
// 			authority: "React Academy",
// 			url: "https://reactacademy.com/cert/123456",
// 			startDate: new Date("2021-05-15"),
// 		},
// 	],
// 	volunteer: [],
// 	honors: [],
// 	projects: [
// 		{
// 			id: "proj1",
// 			title: "E-commerce Website",
// 			description: "Tienda online desarrollada con React y Node.js",
// 			startDate: new Date("2022-01-01"),
// 			endDate: new Date("2022-03-15"),
// 		},
// 	],
// 	skills: [
// 		{ id: "skill1", name: "React" },
// 		{ id: "skill2", name: "TypeScript" },
// 		{ id: "skill3", name: "JavaScript" },
// 		{ id: "skill4", name: "HTML5" },
// 		{ id: "skill5", name: "CSS3" },
// 		{ id: "skill6", name: "Tailwind CSS" },
// 		{ id: "skill7", name: "Node.js" },
// 		{ id: "skill8", name: "Git" },
// 	],
// }

export default function ProfilePage() {
  const { profileStore, updateProfileStore, setProfileStore } = useProfileStore()

  const [profile, setProfile] = useState<Profile | null>(profileStore)

  //handler for selecting sections
  const [activeSection, setActiveSection] = useState<string>("personal")

  // Variantes para las animaciones de las secciones
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  }



  // State for edit mode
  const [editMode, setEditMode] = useState<boolean>(false)

  // State for editing items
  const [editingExperience, setEditingExperience] = useState<Experience | null>(null)
  const [editingEducation, setEditingEducation] = useState<Education | null>(null)
  const [editingSkill, setEditingSkill] = useState<string>("")
  const [editingLanguage, setEditingLanguage] = useState<Language | null>(null)
  const [editingCertification, setEditingCertification] = useState<Certification | null>(null)
  const [editingProject, setEditingProject] = useState<Project | null>(null)

  useEffect(() => {
    if (!profileStore) {
      getUserProfile().then((profile) => {
        setProfile(profile)
        setProfileStore(profile)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!profile) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-gray-500">Cargando perfil...</p>
      </div>
    )
  }

  // Function to handle Submit profile
  const handleSubmitProfile = async (profile: Profile) => {
    // Save profile changes
    await toast
      .promise(updateProfile(profile), {
        loading: "Guardando cambios...",
        success: "Cambios guardados",
        error: "Error al guardar cambios",
      })
      .then(() => {
        setEditMode(false)
        updateProfileStore(profile)
        setProfile(profile)
      })
  }

  // Function to format date
  const formatDate = (date?: Date) => {
    if (!date) return ""
    return new Date(date).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
    })
  }

  // Function to handle profile updates
  const handleProfileUpdate = (
    field: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any,
  ) => {
    setProfile(
      (prev) =>
        prev && {
          ...prev,
          [field]: value,
        },
    )
  }

  // Function to add a new experience
  const handleAddExperience = () => {
    const newExperience: Experience = {
      title: "",
      companyName: "",
      description: "",
      companyIndustries: [],
    }
    setEditingExperience(newExperience)
  }

  // Function to save experience
  const handleSaveExperience = (experience: Experience) => {
    if (profile.experiences.find((exp) => exp.id === experience.id)) {
      // Update existing experience
      setProfile(
        (prev) =>
          prev && {
            ...prev,
            experiences: prev.experiences.map((exp) => (exp.id === experience.id ? experience : exp)),
          },
      )
    } else {
      // Add new experience
      setProfile(
        (prev) =>
          prev && {
            ...prev,
            experiences: [...prev.experiences, experience],
          },
      )
    }
    setEditingExperience(null)
  }

  // Function to delete experience
  const handleDeleteExperience = (id: string) => {
    setProfile(
      (prev) =>
        prev && {
          ...prev,
          experiences: prev.experiences.filter((exp) => exp.id !== id),
        },
    )
  }

  // Function to add a new education
  const handleAddEducation = () => {
    const newEducation: Education = {
      schoolName: "",
      degreeName: "",
      fieldOfStudy: "",
    }
    setEditingEducation(newEducation)
  }

  // Function to save education
  const handleSaveEducation = (education: Education) => {
    if (profile.education.find((edu) => edu.id === education.id)) {
      // Update existing education
      setProfile(
        (prev) =>
          prev && {
            ...prev,
            education: prev.education.map((edu) => (edu.id === education.id ? education : edu)),
          },
      )
    } else {
      // Add new education
      setProfile(
        (prev) =>
          prev && {
            ...prev,
            education: [...prev.education, education],
          },
      )
    }
    setEditingEducation(null)
  }

  // Function to delete education
  const handleDeleteEducation = (id: string) => {
    setProfile(
      (prev) =>
        prev && {
          ...prev,
          education: prev.education.filter((edu) => edu.id !== id),
        },
    )
  }

  // Function to add a new skill
  const handleAddSkill = () => {
    if (editingSkill.trim() === "") return

    const newSkill: Skill = {
      name: editingSkill,
    }

    setProfile(
      (prev) =>
        prev && {
          ...prev,
          skills: [...prev.skills, newSkill],
        },
    )

    setEditingSkill("")
  }

  // Function to delete skill
  const handleDeleteSkill = (id: string) => {
    setProfile(
      (prev) =>
        prev && {
          ...prev,
          skills: prev.skills.filter((skill) => skill.id !== id),
        },
    )
  }

  // Function to add a new language
  const handleAddLanguage = () => {
    const newLanguage: Language = {
      name: "",
      proficiency: "",
    }
    setEditingLanguage(newLanguage)
  }

  // Function to save language
  const handleSaveLanguage = (language: Language) => {
    if (profile.languages.find((lang) => lang.id === language.id)) {
      // Update existing language
      setProfile(
        (prev) =>
          prev && {
            ...prev,
            languages: prev.languages.map((lang) => (lang.id === language.id ? language : lang)),
          },
      )
    } else {
      // Add new language
      setProfile(
        (prev) =>
          prev && {
            ...prev,
            languages: [...prev.languages, language],
          },
      )
    }
    setEditingLanguage(null)
  }

  // Function to delete language
  const handleDeleteLanguage = (id: string) => {
    setProfile(
      (prev) =>
        prev && {
          ...prev,
          languages: prev.languages.filter((lang) => lang.id !== id),
        },
    )
  }

  // Function to add a new certification
  const handleAddCertification = () => {
    const newCertification: Certification = {
      name: "",
      authority: "",
      url: "",
    }
    setEditingCertification(newCertification)
  }

  // Function to save certification
  const handleSaveCertification = (certification: Certification) => {
    if (profile.certifications.find((cert) => cert.id === certification.id)) {
      // Update existing certification
      setProfile(
        (prev) =>
          prev && {
            ...prev,
            certifications: prev.certifications.map((cert) => (cert.id === certification.id ? certification : cert)),
          },
      )
    } else {
      // Add new certification
      setProfile(
        (prev) =>
          prev && {
            ...prev,
            certifications: [...prev.certifications, certification],
          },
      )
    }
    setEditingCertification(null)
  }

  // Function to delete certification
  const handleDeleteCertification = (id: string) => {
    setProfile(
      (prev) =>
        prev && {
          ...prev,
          certifications: prev.certifications.filter((cert) => cert.id !== id),
        },
    )
  }

  // Function to add a new project
  const handleAddProject = () => {
    const newProject: Project = {
      title: "",
      description: "",
    }
    setEditingProject(newProject)
  }

  // Function to save project
  const handleSaveProject = (project: Project) => {
    if (profile.projects.find((proj) => proj.id === project.id)) {
      // Update existing project
      setProfile(
        (prev) =>
          prev && {
            ...prev,
            projects: prev.projects.map((proj) => (proj.id === project.id ? project : proj)),
          },
      )
    } else {
      // Add new project
      setProfile(
        (prev) =>
          prev && {
            ...prev,
            projects: [...prev.projects, project],
          },
      )
    }
    setEditingProject(null)
  }

  // Function to delete project
  const handleDeleteProject = (id: string) => {
    setProfile(
      (prev) =>
        prev && {
          ...prev,
          projects: prev.projects.filter((proj) => proj.id !== id),
        },
    )
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] p-4 md:p-8 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="max-w-4xl mx-auto"
      >
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#0F172A]">Profile</h1>
          <p className="text-[#64748B]">Administra tu perfil y mantén tu información actualizada.</p>
        </div>
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
          <motion.div
            className="h-32 bg-gradient-to-r from-[#6366F1]/80 to-[#8B5CF6]/80 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {profile.backgroundPictureUrl ? (
              <motion.img
                src={profile.backgroundPictureUrl || "/placeholder.svg"}
                alt="Background"
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />
            ) : (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#6366F1]/80 to-[#8B5CF6]/80"
                animate={{
                  background: [
                    "linear-gradient(to right, rgba(99, 102, 241, 0.8), rgba(139, 92, 246, 0.8))",
                    "linear-gradient(to right, rgba(139, 92, 246, 0.8), rgba(99, 102, 241, 0.8))",
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            )}

            {editMode ? (
              <motion.button
                className="absolute right-4 top-4 bg-white/80 p-2 rounded-full text-[#6366F1]"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(255, 255, 255, 1)",
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Edit size={16} />
              </motion.button>
            ) : null}
          </motion.div>

          <div className="p-6 md:p-8 relative">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
              <motion.div
                className="w-24 h-24 bg-[#6366F1]/10 rounded-full flex items-center justify-center text-[#6366F1] text-2xl font-bold -mt-16 border-4 border-white relative"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ boxShadow: "0 0 0 4px rgba(99, 102, 241, 0.3)" }}
              >
                {profile.profilePictureUrl ? (
                  <motion.img
                    src={profile.profilePictureUrl || "/placeholder.svg"}
                    alt={`${profile.firstName} ${profile.lastName}`}
                    className="w-full h-full rounded-full object-cover"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                ) : (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {`${profile.firstName.charAt(0)}${profile.lastName.charAt(0)}`}
                  </motion.div>
                )}

                {editMode ? (
                  <motion.button
                    className="absolute right-0 bottom-0 bg-white p-1 rounded-full text-[#6366F1] shadow-md"
                    whileHover={{ scale: 1.2, backgroundColor: "#F9FAFB" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Edit size={14} />
                  </motion.button>
                ) : null}
              </motion.div>

              <div className="flex-1">
                {editMode ? (
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <motion.input
                        type="text"
                        value={profile.firstName}
                        onChange={(e) => handleProfileUpdate("firstName", e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-1/2"
                        placeholder="Nombre"
                        whileFocus={{
                          scale: 1.02,
                          boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                        }}
                        transition={{ duration: 0.2 }}
                      />
                      <motion.input
                        type="text"
                        value={profile.lastName}
                        onChange={(e) => handleProfileUpdate("lastName", e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-1/2"
                        placeholder="Apellido"
                        whileFocus={{
                          scale: 1.02,
                          boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                        }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                    <motion.input
                      type="text"
                      value={profile.headline || ""}
                      onChange={(e) => handleProfileUpdate("headline", e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-full"
                      placeholder="Título profesional"
                      whileFocus={{
                        scale: 1.02,
                        boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                      }}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.input
                      type="text"
                      value={profile.locationName || ""}
                      onChange={(e) => handleProfileUpdate("locationName", e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-full"
                      placeholder="Ubicación"
                      whileFocus={{
                        scale: 1.02,
                        boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                ) : (
                  <>
                    <h1 className="text-2xl font-bold text-[#0F172A]">
                      {profile.firstName} {profile.lastName}
                    </h1>
                    <p className="text-[#64748B]">{profile.headline}</p>
                    <p className="text-[#64748B] text-sm">{profile.locationName}</p>
                  </>
                )}
              </div>

              <div>
                {editMode ? (
                  <motion.button
                    onClick={() => handleSubmitProfile(profile)}
                    className="px-4 py-2 bg-[#6366F1] text-white rounded-lg shadow-sm flex items-center gap-2 overflow-hidden relative cursor-pointer"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 15px -3px rgba(99, 102, 241, 0.3), 0 4px 6px -4px rgba(99, 102, 241, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.span
                      className="absolute inset-0 bg-white"
                      initial={{ x: "100%" }}
                      whileHover={{ x: "-100%" }}
                      transition={{ duration: 0.3 }}
                      style={{ opacity: 0.2 }}
                    />
                    <Save size={16} />
                    <span>Guardar</span>
                  </motion.button>
                ) : (
                  <motion.button
                    onClick={() => setEditMode(true)}
                    className="px-4 py-2 border border-[#6366F1] text-[#6366F1] rounded-lg flex items-center gap-2 relative overflow-hidden cursor-pointer"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 4px 6px -1px rgba(99, 102, 241, 0.1), 0 2px 4px -2px rgba(99, 102, 241, 0.1)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span
                      className="absolute inset-0 bg-[#6366F1]"
                      initial={{ y: "100%" }}
                      whileHover={{ y: "0%" }}
                      transition={{ duration: 0.2 }}
                      style={{ opacity: 0.1 }}
                    />
                    <Edit size={16} />
                    <span>Editar perfil</span>
                  </motion.button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Profile Navigation */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
          <div className="flex overflow-x-auto overflow-y-hidden">
            {["personal", "experiences", "education", "skills", "languages", "certifications", "projects"].map(
              (section) => (
                <motion.button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-3 text-sm font-medium whitespace-nowrap relative ${
                    activeSection === section ? "text-[#6366F1]" : "text-[#64748B] hover:text-[#0F172A]"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  {activeSection === section && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6366F1]"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              ),
            )}
          </div>
        </div>

        {/* Personal Information Section */}
        <AnimatePresence mode="wait">
          {activeSection === "personal" && (
            <motion.div
              key="personal"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-xl shadow-md overflow-hidden mb-6"
            >
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-[#0F172A]">Información Personal</h2>
              </div>

              <div className="p-6">
                {editMode ? (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-[#64748B]">Email</label>
                        <motion.input
                          type="email"
                          value={profile.publicId}
                          onChange={(e) => handleProfileUpdate("publicId", e.target.value)}
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-full"
                          whileFocus={{
                            scale: 1.02,
                            boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                          }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-[#64748B]">Industria</label>
                        <motion.input
                          type="text"
                          value={profile.industryName || ""}
                          onChange={(e) => handleProfileUpdate("industryName", e.target.value)}
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-full"
                          whileFocus={{
                            scale: 1.02,
                            boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                          }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-[#64748B]">País</label>
                        <motion.input
                          type="text"
                          value={profile.geoCountryName || ""}
                          onChange={(e) => handleProfileUpdate("geoCountryName", e.target.value)}
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-full"
                          whileFocus={{
                            scale: 1.02,
                            boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                          }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-[#64748B]">Ciudad</label>
                        <motion.input
                          type="text"
                          value={profile.geoLocationName || ""}
                          onChange={(e) => handleProfileUpdate("geoLocationName", e.target.value)}
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-full"
                          whileFocus={{
                            scale: 1.02,
                            boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                          }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-[#64748B]">Mes de nacimiento</label>
                        <motion.select
                          value={profile.birthMonth || ""}
                          onChange={(e) =>
                            handleProfileUpdate(
                              "birthMonth",
                              e.target.value ? Number.parseInt(e.target.value) : undefined,
                            )
                          }
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-full cursor-pointer"
                          whileFocus={{
                            scale: 1.02,
                            boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <option value="">Seleccionar mes</option>
                          {Array.from({ length: 12 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {new Date(0, i).toLocaleString("es-ES", {
                                month: "long",
                              })}
                            </option>
                          ))}
                        </motion.select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-[#64748B]">Día de nacimiento</label>
                        <motion.select
                          value={profile.birthDay || ""}
                          onChange={(e) =>
                            handleProfileUpdate(
                              "birthDay",
                              e.target.value ? Number.parseInt(e.target.value) : undefined,
                            )
                          }
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-full cursor-pointer"
                          whileFocus={{
                            scale: 1.02,
                            boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                          }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <option value="">Seleccionar día</option>
                          {Array.from({ length: 31 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </motion.select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[#64748B]">Resumen profesional</label>
                      <motion.textarea
                        value={profile.summary || ""}
                        onChange={(e) => handleProfileUpdate("summary", e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-full min-h-[100px]"
                        placeholder="Escribe un breve resumen sobre ti y tu experiencia profesional"
                        whileFocus={{
                          scale: 1.01,
                          boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                        }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <motion.div whileTap={{ scale: 0.9 }}>
                        <input
                          type="checkbox"
                          id="student"
                          checked={profile.student}
                          onChange={(e) => handleProfileUpdate("student", e.target.checked)}
                          className="rounded border-gray-300 text-[#6366F1] focus:ring-[#6366F1] cursor-pointer"
                        />
                      </motion.div>
                      <label htmlFor="student" className="text-sm font-medium text-[#64748B]">
                        Soy estudiante
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div
                        whileHover={{
                          backgroundColor: "rgba(99, 102, 241, 0.03)",
                          borderRadius: "0.5rem",
                          padding: "0.5rem",
                          margin: "-0.5rem",
                        }}
                      >
                        <p className="text-sm text-[#64748B]">Email</p>
                        <p className="text-[#0F172A]">{profile.publicId}</p>
                      </motion.div>

                      <motion.div
                        whileHover={{
                          backgroundColor: "rgba(99, 102, 241, 0.03)",
                          borderRadius: "0.5rem",
                          padding: "0.5rem",
                          margin: "-0.5rem",
                        }}
                      >
                        <p className="text-sm text-[#64748B]">Industria</p>
                        <p className="text-[#0F172A]">{profile.industryName || "No especificado"}</p>
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div
                        whileHover={{
                          backgroundColor: "rgba(99, 102, 241, 0.03)",
                          borderRadius: "0.5rem",
                          padding: "0.5rem",
                          margin: "-0.5rem",
                        }}
                      >
                        <p className="text-sm text-[#64748B]">Ubicación</p>
                        <p className="text-[#0F172A]">
                          {profile.geoLocationName}, {profile.geoCountryName}
                        </p>
                      </motion.div>

                      <motion.div
                        whileHover={{
                          backgroundColor: "rgba(99, 102, 241, 0.03)",
                          borderRadius: "0.5rem",
                          padding: "0.5rem",
                          margin: "-0.5rem",
                        }}
                      >
                        <p className="text-sm text-[#64748B]">Fecha de nacimiento</p>
                        <p className="text-[#0F172A]">
                          {profile.birthDay && profile.birthMonth
                            ? `${profile.birthDay} de ${new Date(0, profile.birthMonth - 1).toLocaleString("es-ES", {
                                month: "long",
                              })}`
                            : "No especificado"}
                        </p>
                      </motion.div>
                    </div>

                    <motion.div
                      whileHover={{
                        backgroundColor: "rgba(99, 102, 241, 0.03)",
                        borderRadius: "0.5rem",
                        padding: "0.5rem",
                        margin: "-0.5rem",
                      }}
                    >
                      <p className="text-sm text-[#64748B]">Resumen profesional</p>
                      <p className="text-[#0F172A]">{profile.summary || "No especificado"}</p>
                    </motion.div>

                    <motion.div
                      whileHover={{
                        backgroundColor: "rgba(99, 102, 241, 0.03)",
                        borderRadius: "0.5rem",
                        padding: "0.5rem",
                        margin: "-0.5rem",
                      }}
                    >
                      <p className="text-sm text-[#64748B]">Estudiante</p>
                      <p className="text-[#0F172A]">{profile.student ? "Sí" : "No"}</p>
                    </motion.div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Experiences Section */}
        <AnimatePresence mode="wait">
          {activeSection === "experiences" && (
            <motion.div
              key="experiences"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-xl shadow-md overflow-hidden mb-6"
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-xl font-semibold text-[#0F172A]">Experiencia Laboral</h2>
                {editMode && (
                  <motion.button
                    onClick={handleAddExperience}
                    className="p-2 text-[#6366F1] rounded-full"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(99, 102, 241, 0.1)",
                      rotate: 90,
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Plus size={20} />
                  </motion.button>
                )}
              </div>

              <div className="p-6">
                {profile.experiences.length === 0 ? (
                  <p className="text-[#64748B] text-center py-4">No hay experiencia laboral registrada</p>
                ) : (
                  <div className="space-y-6">
                    {profile.experiences.map((experience) => (
                      <motion.div
                        key={experience.id}
                        className="border-l-2 border-[#6366F1] pl-4 ml-2 relative"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{
                          x: 2,
                          backgroundColor: "rgba(99, 102, 241, 0.03)",
                        }}
                      >
                        {editMode && (
                          <div className="absolute right-0 top-0 flex gap-2">
                            <motion.button
                              onClick={() => setEditingExperience(experience)}
                              className="p-1 text-[#6366F1] rounded-full"
                              whileHover={{
                                scale: 1.2,
                                backgroundColor: "rgba(99, 102, 241, 0.1)",
                              }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Edit size={16} />
                            </motion.button>
                            <motion.button
                              onClick={() => experience.id && handleDeleteExperience(experience.id)}
                              className="p-1 text-red-500 rounded-full"
                              whileHover={{
                                scale: 1.2,
                                backgroundColor: "rgba(239, 68, 68, 0.1)",
                              }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Trash size={16} />
                            </motion.button>
                          </div>
                        )}

                        <h3 className="font-medium text-[#0F172A]">{experience.title}</h3>
                        <p className="text-[#64748B]">{experience.companyName}</p>
                        <p className="text-sm text-[#64748B]">
                          {formatDate(experience.startDate)} -{" "}
                          {experience.endDate ? formatDate(experience.endDate) : "Presente"}
                          {experience.locationName && ` · ${experience.locationName}`}
                        </p>
                        {experience.description && <p className="mt-2 text-[#0F172A]">{experience.description}</p>}
                        {experience.companyIndustries && experience.companyIndustries.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-2">
                            {experience.companyIndustries.map((industry, index) => (
                              <span key={index} className="px-2 py-1 bg-gray-100 text-[#64748B] rounded-full text-xs">
                                {industry}
                              </span>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Experience Edit Modal */}
                <AnimatePresence>
                  {editingExperience && (
                    <motion.div
                      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.div
                        className="bg-white rounded-xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
                        initial={{ scale: 0.9, y: 20, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.9, y: 20, opacity: 0 }}
                        transition={{
                          type: "spring",
                          damping: 25,
                          stiffness: 300,
                        }}
                      >
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                          <h3 className="text-lg font-semibold text-[#0F172A]">
                            {profile.experiences.find((exp) => exp.id === editingExperience.id)
                              ? "Editar experiencia"
                              : "Añadir experiencia"}
                          </h3>
                          <motion.button
                            onClick={() => setEditingExperience(null)}
                            className="p-1 text-[#64748B] rounded-full"
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "#F9FAFB",
                              rotate: 90,
                            }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <X size={20} />
                          </motion.button>
                        </div>

                        <div className="p-6 space-y-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-[#64748B]">Puesto</label>
                            <motion.input
                              type="text"
                              value={editingExperience.title || ""}
                              onChange={(e) =>
                                setEditingExperience({
                                  ...editingExperience,
                                  title: e.target.value,
                                })
                              }
                              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-full"
                              placeholder="Ej: Frontend Developer"
                              whileFocus={{
                                scale: 1.02,
                                boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                              }}
                              transition={{ duration: 0.2 }}
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium text-[#64748B]">Empresa</label>
                            <motion.input
                              type="text"
                              value={editingExperience.companyName || ""}
                              onChange={(e) =>
                                setEditingExperience({
                                  ...editingExperience,
                                  companyName: e.target.value,
                                })
                              }
                              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-full"
                              placeholder="Ej: Acme Inc."
                              whileFocus={{
                                scale: 1.02,
                                boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                              }}
                              transition={{ duration: 0.2 }}
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium text-[#64748B]">Ubicación</label>
                            <motion.input
                              type="text"
                              value={editingExperience.locationName || ""}
                              onChange={(e) =>
                                setEditingExperience({
                                  ...editingExperience,
                                  locationName: e.target.value,
                                })
                              }
                              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-full"
                              placeholder="Ej: Madrid, España"
                              whileFocus={{
                                scale: 1.02,
                                boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                              }}
                              transition={{ duration: 0.2 }}
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-[#64748B]">Fecha de inicio</label>
                              <div className="relative">
                                <motion.input
                                  type="date"
                                  value={
                                    editingExperience.startDate
                                      ? new Date(editingExperience.startDate).toISOString().split("T")[0]
                                      : ""
                                  }
                                  onChange={(e) =>
                                    setEditingExperience({
                                      ...editingExperience,
                                      startDate: e.target.value ? new Date(e.target.value) : undefined,
                                    })
                                  }
                                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-full cursor-pointer"
                                  whileFocus={{
                                    scale: 1.02,
                                    boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                                  }}
                                  whileHover={{ borderColor: "#6366F1" }}
                                />
                                <motion.div
                                  initial={{ opacity: 0.7 }}
                                  animate={{ opacity: [0.7, 1, 0.7] }}
                                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                >
                                  <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
                                </motion.div>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <label className="text-sm font-medium text-[#64748B]">Fecha de fin</label>
                              <div className="relative">
                                <motion.input
                                  type="date"
                                  value={
                                    editingExperience.endDate
                                      ? new Date(editingExperience.endDate).toISOString().split("T")[0]
                                      : ""
                                  }
                                  onChange={(e) =>
                                    setEditingExperience({
                                      ...editingExperience,
                                      endDate: e.target.value ? new Date(e.target.value) : undefined,
                                    })
                                  }
                                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-full cursor-pointer"
                                  whileFocus={{
                                    scale: 1.02,
                                    boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                                  }}
                                  whileHover={{ borderColor: "#6366F1" }}
                                />
                                <motion.div
                                  initial={{ opacity: 0.7 }}
                                  animate={{ opacity: [0.7, 1, 0.7] }}
                                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                >
                                  <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
                                </motion.div>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium text-[#64748B]">Descripción</label>
                            <motion.textarea
                              value={editingExperience.description || ""}
                              onChange={(e) =>
                                setEditingExperience({
                                  ...editingExperience,
                                  description: e.target.value,
                                })
                              }
                              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-full min-h-[100px]"
                              placeholder="Describe tus responsabilidades y logros"
                              whileFocus={{
                                scale: 1.01,
                                boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                              }}
                              transition={{ duration: 0.2 }}
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium text-[#64748B]">
                              Industrias (separadas por coma)
                            </label>
                            <motion.input
                              type="text"
                              value={(editingExperience.companyIndustries || []).join(", ")}
                              onChange={(e) =>
                                setEditingExperience({
                                  ...editingExperience,
                                  companyIndustries: e.target.value
                                    .split(",")
                                    .map((i) => i.trim())
                                    .filter((i) => i),
                                })
                              }
                              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-full"
                              placeholder="Ej: Tecnología, Software, Marketing"
                              whileFocus={{
                                scale: 1.02,
                                boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                              }}
                              transition={{ duration: 0.2 }}
                            />
                          </div>
                        </div>

                        <div className="p-6 border-t border-gray-100 flex justify-end gap-3">
                          <motion.button
                            onClick={() => setEditingExperience(null)}
                            className="px-4 py-2 border border-gray-300 text-[#64748B] rounded-lg"
                            whileHover={{ backgroundColor: "#F9FAFB", y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Cancelar
                          </motion.button>
                          <motion.button
                            onClick={() => handleSaveExperience(editingExperience)}
                            className="px-4 py-2 bg-[#6366F1] text-white rounded-lg shadow-sm"
                            whileHover={{
                              backgroundColor: "#5253cc",
                              y: -2,
                              boxShadow:
                                "0 10px 15px -3px rgba(99, 102, 241, 0.3), 0 4px 6px -4px rgba(99, 102, 241, 0.3)",
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Guardar
                          </motion.button>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Education Section */}
        <AnimatePresence mode="wait">
          {activeSection === "education" && (
            <motion.div
              key="education"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-xl shadow-md overflow-hidden mb-6"
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-xl font-semibold text-[#0F172A]">Educación</h2>
                {editMode && (
                  <motion.button
                    onClick={handleAddEducation}
                    className="p-2 text-[#6366F1] rounded-full"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(99, 102, 241, 0.1)",
                      rotate: 90,
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Plus size={20} />
                  </motion.button>
                )}
              </div>

              <div className="p-6">
                {profile.education.length === 0 ? (
                  <p className="text-[#64748B] text-center py-4">No hay educación registrada</p>
                ) : (
                  <div className="space-y-6">
                    {profile.education.map((education) => (
                      <motion.div
                        key={education.id}
                        className="border-l-2 border-[#6366F1] pl-4 ml-2 relative"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{
                          x: 2,
                          backgroundColor: "rgba(99, 102, 241, 0.03)",
                        }}
                      >
                        {editMode && (
                          <div className="absolute right-0 top-0 flex gap-2">
                            <motion.button
                              onClick={() => setEditingEducation(education)}
                              className="p-1 text-[#6366F1] rounded-full"
                              whileHover={{
                                scale: 1.2,
                                backgroundColor: "rgba(99, 102, 241, 0.1)",
                              }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Edit size={16} />
                            </motion.button>
                            <motion.button
                              onClick={() => education.id && handleDeleteEducation(education.id)}
                              className="p-1 text-red-500 rounded-full"
                              whileHover={{
                                scale: 1.2,
                                backgroundColor: "rgba(239, 68, 68, 0.1)",
                              }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Trash size={16} />
                            </motion.button>
                          </div>
                        )}

                        <h3 className="font-medium text-[#0F172A]">{education.degreeName}</h3>
                        <p className="text-[#64748B]">{education.schoolName}</p>
                        <p className="text-sm text-[#64748B]">
                          {education.startYear} - {education.endYear || "Presente"}
                          {education.fieldOfStudy && ` · ${education.fieldOfStudy}`}
                        </p>
                        {education.description && <p className="mt-2 text-[#0F172A]">{education.description}</p>}
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Education Edit Modal */}
                <AnimatePresence>
                  {editingEducation && (
                    <motion.div
                      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.div
                        className="bg-white rounded-xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
                        initial={{ scale: 0.9, y: 20, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.9, y: 20, opacity: 0 }}
                        transition={{
                          type: "spring",
                          damping: 25,
                          stiffness: 300,
                        }}
                      >
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                          <h3 className="text-lg font-semibold text-[#0F172A]">
                            {profile.education.find((edu) => edu.id === editingEducation.id)
                              ? "Editar educación"
                              : "Añadir educación"}
                          </h3>
                          <motion.button
                            onClick={() => setEditingEducation(null)}
                            className="p-1 text-[#64748B] rounded-full"
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "#F9FAFB",
                              rotate: 90,
                            }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <X size={20} />
                          </motion.button>
                        </div>

                        <div className="p-6 space-y-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-[#64748B]">Institución</label>
                            <motion.input
                              type="text"
                              value={editingEducation.schoolName || ""}
                              onChange={(e) =>
                                setEditingEducation({
                                  ...editingEducation,
                                  schoolName: e.target.value,
                                })
                              }
                              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-full"
                              placeholder="Ej: Universidad Complutense de Madrid"
                              whileFocus={{
                                scale: 1.02,
                                boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                              }}
                              transition={{ duration: 0.2 }}
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium text-[#64748B]">Título</label>
                            <motion.input
                              type="text"
                              value={editingEducation.degreeName || ""}
                              onChange={(e) =>
                                setEditingEducation({
                                  ...editingEducation,
                                  degreeName: e.target.value,
                                })
                              }
                              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-full"
                              placeholder="Ej: Grado en Ingeniería Informática"
                              whileFocus={{
                                scale: 1.02,
                                boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                              }}
                              transition={{ duration: 0.2 }}
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium text-[#64748B]">Campo de estudio</label>
                            <motion.input
                              type="text"
                              value={editingEducation.fieldOfStudy || ""}
                              onChange={(e) =>
                                setEditingEducation({
                                  ...editingEducation,
                                  fieldOfStudy: e.target.value,
                                })
                              }
                              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-full"
                              placeholder="Ej: Desarrollo de Software"
                              whileFocus={{
                                scale: 1.02,
                                boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                              }}
                              transition={{ duration: 0.2 }}
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-[#64748B]">Año de inicio</label>
                              <motion.input
                                type="number"
                                value={editingEducation.startYear || ""}
                                onChange={(e) =>
                                  setEditingEducation({
                                    ...editingEducation,
                                    startYear: e.target.value ? Number.parseInt(e.target.value) : undefined,
                                  })
                                }
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-full"
                                placeholder="Ej: 2018"
                                whileFocus={{
                                  scale: 1.02,
                                  boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                                }}
                                transition={{ duration: 0.2 }}
                              />
                            </div>

                            <div className="space-y-2">
                              <label className="text-sm font-medium text-[#64748B]">Año de fin</label>
                              <motion.input
                                type="number"
                                value={editingEducation.endYear || ""}
                                onChange={(e) =>
                                  setEditingEducation({
                                    ...editingEducation,
                                    endYear: e.target.value ? Number.parseInt(e.target.value) : undefined,
                                  })
                                }
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-full"
                                placeholder="Ej: 2022"
                                whileFocus={{
                                  scale: 1.02,
                                  boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                                }}
                                transition={{ duration: 0.2 }}
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium text-[#64748B]">Calificación</label>
                            <motion.input
                              type="text"
                              value={editingEducation.grade || ""}
                              onChange={(e) =>
                                setEditingEducation({
                                  ...editingEducation,
                                  grade: e.target.value,
                                })
                              }
                              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-full"
                              placeholder="Ej: Sobresaliente"
                              whileFocus={{
                                scale: 1.02,
                                boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                              }}
                              transition={{ duration: 0.2 }}
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium text-[#64748B]">Actividades y sociedades</label>
                            <motion.input
                              type="text"
                              value={editingEducation.activities || ""}
                              onChange={(e) =>
                                setEditingEducation({
                                  ...editingEducation,
                                  activities: e.target.value,
                                })
                              }
                              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-full"
                              placeholder="Ej: Club de programación, Equipo de debate"
                              whileFocus={{
                                scale: 1.02,
                                boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                              }}
                              transition={{ duration: 0.2 }}
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium text-[#64748B]">Descripción</label>
                            <motion.textarea
                              value={editingEducation.description || ""}
                              onChange={(e) =>
                                setEditingEducation({
                                  ...editingEducation,
                                  description: e.target.value,
                                })
                              }
                              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-full min-h-[100px]"
                              placeholder="Describe tu experiencia educativa"
                              whileFocus={{
                                scale: 1.01,
                                boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                              }}
                              transition={{ duration: 0.2 }}
                            />
                          </div>
                        </div>

                        <div className="p-6 border-t border-gray-100 flex justify-end gap-3">
                          <motion.button
                            onClick={() => setEditingEducation(null)}
                            className="px-4 py-2 border border-gray-300 text-[#64748B] rounded-lg"
                            whileHover={{ backgroundColor: "#F9FAFB", y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Cancelar
                          </motion.button>
                          <motion.button
                            onClick={() => handleSaveEducation(editingEducation)}
                            className="px-4 py-2 bg-[#6366F1] text-white rounded-lg shadow-sm"
                            whileHover={{
                              backgroundColor: "#5253cc",
                              y: -2,
                              boxShadow:
                                "0 10px 15px -3px rgba(99, 102, 241, 0.3), 0 4px 6px -4px rgba(99, 102, 241, 0.3)",
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Guardar
                          </motion.button>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Skills Section */}
        <AnimatePresence mode="wait">
          {activeSection === "skills" && (
            <motion.div
              key="skills"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-xl shadow-md overflow-hidden mb-6"
            >
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-[#0F172A]">Habilidades</h2>
              </div>

              <div className="p-6">
                {editMode && (
                  <div className="mb-6">
                    <div className="flex gap-2">
                      <motion.input
                        type="text"
                        value={editingSkill}
                        onChange={(e) => setEditingSkill(e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all flex-1"
                        placeholder="Añadir nueva habilidad"
                        onKeyDown={(e) => e.key === "Enter" && handleAddSkill()}
                        whileFocus={{
                          scale: 1.02,
                          boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                        }}
                        transition={{ duration: 0.2 }}
                      />
                      <motion.button
                        onClick={handleAddSkill}
                        className="px-4 py-2 bg-[#6366F1] text-white rounded-lg shadow-sm"
                        whileHover={{
                          backgroundColor: "#5253cc",
                          scale: 1.05,
                          boxShadow: "0 4px 6px -1px rgba(99, 102, 241, 0.3), 0 2px 4px -2px rgba(99, 102, 241, 0.3)",
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Añadir
                      </motion.button>
                    </div>
                  </div>
                )}

                {profile.skills.length === 0 ? (
                  <p className="text-[#64748B] text-center py-4">No hay habilidades registradas</p>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map((skill) => (
                      <motion.div
                        key={skill.id}
                        className={`px-3 py-1.5 rounded-full text-sm ${
                          editMode
                            ? "bg-[#6366F1]/10 text-[#6366F1] pr-1 flex items-center gap-1"
                            : "bg-[#6366F1]/10 text-[#6366F1]"
                        }`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(99, 102, 241, 0.2)",
                        }}
                      >
                        {skill.name}
                        {editMode && (
                          <motion.button
                            onClick={() => skill.id && handleDeleteSkill(skill.id)}
                            className="p-0.5 text-[#6366F1] rounded-full"
                            whileHover={{
                              scale: 1.2,
                              backgroundColor: "rgba(99, 102, 241, 0.2)",
                              rotate: 90,
                            }}
                            whileTap={{ scale: 0.8 }}
                          >
                            <X size={14} />
                          </motion.button>
                        )}
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Languages Section */}
        <AnimatePresence mode="wait">
          {activeSection === "languages" && (
            <motion.div
              key="languages"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-xl shadow-md overflow-hidden mb-6"
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-xl font-semibold text-[#0F172A]">Idiomas</h2>
                {editMode && (
                  <motion.button
                    onClick={handleAddLanguage}
                    className="p-2 text-[#6366F1] rounded-full"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(99, 102, 241, 0.1)",
                      rotate: 90,
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Plus size={20} />
                  </motion.button>
                )}
              </div>

              <div className="p-6">
                {profile.languages.length === 0 ? (
                  <p className="text-[#64748B] text-center py-4">No hay idiomas registrados</p>
                ) : (
                  <div className="space-y-4">
                    {profile.languages.map((language) => (
                      <div key={language.id} className="flex justify-between items-center">
                        <div>
                          <h3 className="font-medium text-[#0F172A]">{language.name}</h3>
                          <p className="text-sm text-[#64748B]">{language.proficiency}</p>
                        </div>

                        {editMode && (
                          <div className="flex gap-2">
                            <motion.button
                              onClick={() => setEditingLanguage(language)}
                              className="p-1 text-[#6366F1] rounded-full"
                              whileHover={{
                                scale: 1.2,
                                backgroundColor: "rgba(99, 102, 241, 0.1)",
                              }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Edit size={16} />
                            </motion.button>
                            <motion.button
                              onClick={() => language.id && handleDeleteLanguage(language.id)}
                              className="p-1 text-red-500 rounded-full"
                              whileHover={{
                                scale: 1.2,
                                backgroundColor: "rgba(239, 68, 68, 0.1)",
                              }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Trash size={16} />
                            </motion.button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Language Edit Modal */}
                <AnimatePresence>
                  {editingLanguage && (
                    <motion.div
                      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.div
                        className="bg-white rounded-xl shadow-xl max-w-lg w-full"
                        initial={{ scale: 0.9, y: 20, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.9, y: 20, opacity: 0 }}
                        transition={{
                          type: "spring",
                          damping: 25,
                          stiffness: 300,
                        }}
                      >
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                          <h3 className="text-lg font-semibold text-[#0F172A]">
                            {profile.languages.find((lang) => lang.id === editingLanguage.id)
                              ? "Editar idioma"
                              : "Añadir idioma"}
                          </h3>
                          <motion.button
                            onClick={() => setEditingLanguage(null)}
                            className="p-1 text-[#64748B] rounded-full"
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "#F9FAFB",
                              rotate: 90,
                            }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <X size={20} />
                          </motion.button>
                        </div>

                        <div className="p-6 space-y-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-[#64748B]">Idioma</label>
                            <motion.input
                              type="text"
                              value={editingLanguage.name || ""}
                              onChange={(e) =>
                                setEditingLanguage({
                                  ...editingLanguage,
                                  name: e.target.value,
                                })
                              }
                              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-full"
                              placeholder="Ej: Inglés"
                              whileFocus={{
                                scale: 1.02,
                                boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                              }}
                              transition={{ duration: 0.2 }}
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium text-[#64748B]">Nivel</label>
                            <motion.select
                              value={editingLanguage.proficiency || ""}
                              onChange={(e) =>
                                setEditingLanguage({
                                  ...editingLanguage,
                                  proficiency: e.target.value,
                                })
                              }
                              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-full"
                            >
                              <option value="">Seleccionar nivel</option>
                              <option value="Nativo">Nativo</option>
                              <option value="Bilingüe">Bilingüe</option>
                              <option value="Avanzado">Avanzado</option>
                              <option value="Intermedio">Intermedio</option>
                              <option value="Básico">Básico</option>
                            </motion.select>
                          </div>
                        </div>

                        <div className="p-6 border-t border-gray-100 flex justify-end gap-3">
                          <motion.button
                            onClick={() => setEditingLanguage(null)}
                            className="px-4 py-2 border border-gray-300 text-[#64748B] rounded-lg"
                            whileHover={{ backgroundColor: "#F9FAFB", y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Cancelar
                          </motion.button>
                          <motion.button
                            onClick={() => handleSaveLanguage(editingLanguage)}
                            className="px-4 py-2 bg-[#6366F1] text-white rounded-lg shadow-sm"
                            whileHover={{
                              backgroundColor: "#5253cc",
                              y: -2,
                              boxShadow:
                                "0 10px 15px -3px rgba(99, 102, 241, 0.3), 0 4px 6px -4px rgba(99, 102, 241, 0.3)",
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Guardar
                          </motion.button>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Certifications Section */}
        <AnimatePresence mode="wait">
          {activeSection === "certifications" && (
            <motion.div
              key="certifications"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-xl shadow-md overflow-hidden mb-6"
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-xl font-semibold text-[#0F172A]">Certificaciones</h2>
                {editMode && (
                  <motion.button
                    onClick={handleAddCertification}
                    className="p-2 text-[#6366F1] rounded-full"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(99, 102, 241, 0.1)",
                      rotate: 90,
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Plus size={20} />
                  </motion.button>
                )}
              </div>

              <div className="p-6">
                {profile.certifications.length === 0 ? (
                  <p className="text-[#64748B] text-center py-4">No hay certificaciones registradas</p>
                ) : (
                  <div className="space-y-6">
                    {profile.certifications.map((certification) => (
                      <div key={certification.id} className="relative">
                        {editMode && (
                          <div className="absolute right-0 top-0 flex gap-2">
                            <motion.button
                              onClick={() => setEditingCertification(certification)}
                              className="p-1 text-[#6366F1] rounded-full"
                              whileHover={{
                                scale: 1.2,
                                backgroundColor: "rgba(99, 102, 241, 0.1)",
                              }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Edit size={16} />
                            </motion.button>
                            <motion.button
                              onClick={() => certification.id && handleDeleteCertification(certification.id)}
                              className="p-1 text-red-500 rounded-full"
                              whileHover={{
                                scale: 1.2,
                                backgroundColor: "rgba(239, 68, 68, 0.1)",
                              }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Trash size={16} />
                            </motion.button>
                          </div>
                        )}

                        <h3 className="font-medium text-[#0F172A]">{certification.name}</h3>
                        <p className="text-[#64748B]">{certification.authority}</p>
                        {certification.startDate && (
                          <p className="text-sm text-[#64748B]">
                            Expedición: {formatDate(certification.startDate)}
                            {certification.endDate && ` · Vence: ${formatDate(certification.endDate)}`}
                          </p>
                        )}
                        {certification.url && (
                          <motion.a
                            href={certification.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-[#6366F1] mt-1 inline-block"
                            whileHover={{
                              scale: 1.05,
                              textDecoration: "underline",
                              x: 2,
                            }}
                          >
                            Ver credencial
                          </motion.a>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Certification Edit Modal */}
                <AnimatePresence>
                  {editingCertification && (
                    <motion.div
                      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.div
                        className="bg-white rounded-xl shadow-xl max-w-lg w-full"
                        initial={{ scale: 0.9, y: 20, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.9, y: 20, opacity: 0 }}
                        transition={{
                          type: "spring",
                          damping: 25,
                          stiffness: 300,
                        }}
                      >
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                          <h3 className="text-lg font-semibold text-[#0F172A]">
                            {profile.certifications.find((cert) => cert.id === editingCertification.id)
                              ? "Editar certificación"
                              : "Añadir certificación"}
                          </h3>
                          <motion.button
                            onClick={() => setEditingCertification(null)}
                            className="p-1 text-[#64748B] rounded-full"
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "#F9FAFB",
                              rotate: 90,
                            }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <X size={20} />
                          </motion.button>
                        </div>

                        <div className="p-6 space-y-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-[#64748B]">Nombre</label>
                            <motion.input
                              type="text"
                              value={editingCertification.name || ""}
                              onChange={(e) =>
                                setEditingCertification({
                                  ...editingCertification,
                                  name: e.target.value,
                                })
                              }
                              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-full"
                              placeholder="Ej: AWS Certified Developer"
                              whileFocus={{
                                scale: 1.02,
                                boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                              }}
                              transition={{ duration: 0.2 }}
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium text-[#64748B]">Entidad emisora</label>
                            <motion.input
                              type="text"
                              value={editingCertification.authority || ""}
                              onChange={(e) =>
                                setEditingCertification({
                                  ...editingCertification,
                                  authority: e.target.value,
                                })
                              }
                              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-full"
                              placeholder="Ej: Amazon Web Services"
                              whileFocus={{
                                scale: 1.02,
                                boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                              }}
                              transition={{ duration: 0.2 }}
                            />
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium text-[#64748B]">URL de la credencial</label>
                            <motion.input
                              type="url"
                              value={editingCertification.url || ""}
                              onChange={(e) =>
                                setEditingCertification({
                                  ...editingCertification,
                                  url: e.target.value,
                                })
                              }
                              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-full"
                              placeholder="Ej: https://www.credential.net/..."
                              whileFocus={{
                                scale: 1.02,
                                boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                              }}
                              transition={{ duration: 0.2 }}
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-[#64748B]">Fecha de expedición</label>
                              <div className="relative">
                                <motion.input
                                  type="date"
                                  value={
                                    editingCertification.startDate
                                      ? new Date(editingCertification.startDate).toISOString().split("T")[0]
                                      : ""
                                  }
                                  onChange={(e) =>
                                    setEditingCertification({
                                      ...editingCertification,
                                      startDate: e.target.value ? new Date(e.target.value) : undefined,
                                    })
                                  }
                                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-full cursor-pointer"
                                  whileFocus={{
                                    scale: 1.02,
                                    boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                                  }}
                                  whileHover={{ borderColor: "#6366F1" }}
                                />
                                <motion.div
                                  initial={{ opacity: 0.7 }}
                                  animate={{ opacity: [0.7, 1, 0.7] }}
                                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                >
                                  <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
                                </motion.div>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <label className="text-sm font-medium text-[#64748B]">Fecha de vencimiento</label>
                              <div className="relative">
                                <motion.input
                                  type="date"
                                  value={
                                    editingCertification.endDate
                                      ? new Date(editingCertification.endDate).toISOString().split("T")[0]
                                      : ""
                                  }
                                  onChange={(e) =>
                                    setEditingCertification({
                                      ...editingCertification,
                                      endDate: e.target.value ? new Date(e.target.value) : undefined,
                                    })
                                  }
                                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-full cursor-pointer"
                                  whileFocus={{
                                    scale: 1.02,
                                    boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                                  }}
                                  whileHover={{ borderColor: "#6366F1" }}
                                />
                                <motion.div
                                  initial={{ opacity: 0.7 }}
                                  animate={{ opacity: [0.7, 1, 0.7] }}
                                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                >
                                  <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
                                </motion.div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 border-t border-gray-100 flex justify-end gap-3">
                          <motion.button
                            onClick={() => setEditingCertification(null)}
                            className="px-4 py-2 border border-gray-300 text-[#64748B] rounded-lg"
                            whileHover={{ backgroundColor: "#F9FAFB", y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Cancelar
                          </motion.button>
                          <motion.button
                            onClick={() => handleSaveCertification(editingCertification)}
                            className="px-4 py-2 bg-[#6366F1] text-white rounded-lg shadow-sm"
                            whileHover={{
                              backgroundColor: "#5253cc",
                              y: -2,
                              boxShadow:
                                "0 10px 15px -3px rgba(99, 102, 241, 0.3), 0 4px 6px -4px rgba(99, 102, 241, 0.3)",
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Guardar
                          </motion.button>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Projects Section */}
        <AnimatePresence mode="wait">
          {activeSection === "projects" && (
            <motion.div
              key="projects"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-xl shadow-md overflow-hidden mb-6"
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                <h2 className="text-xl font-semibold text-[#0F172A]">Proyectos</h2>
                {editMode && (
                  <motion.button
                    onClick={handleAddProject}
                    className="p-2 text-[#6366F1] rounded-full"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(99, 102, 241, 0.1)",
                      rotate: 90,
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Plus size={20} />
                  </motion.button>
                )}
              </div>

              <div className="p-6">
                {profile.projects.length === 0 ? (
                  <p className="text-[#64748B] text-center py-4">No hay proyectos registrados</p>
                ) : (
                  <div className="space-y-6">
                    {profile.projects.map((project) => (
                      <div key={project.id} className="relative">
                        {editMode && (
                          <div className="absolute right-0 top-0 flex gap-2">
                            <motion.button
                              onClick={() => setEditingProject(project)}
                              className="p-1 text-[#6366F1] rounded-full"
                              whileHover={{
                                scale: 1.2,
                                backgroundColor: "rgba(99, 102, 241, 0.1)",
                              }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Edit size={16} />
                            </motion.button>
                            <motion.button
                              onClick={() => project.id && handleDeleteProject(project.id)}
                              className="p-1 text-red-500 rounded-full"
                              whileHover={{
                                scale: 1.2,
                                backgroundColor: "rgba(239, 68, 68, 0.1)",
                              }}
                              whileTap={{ scale: 0.9 }}
                            >
                              <Trash size={16} />
                            </motion.button>
                          </div>
                        )}

                        <h3 className="font-medium text-[#0F172A]">{project.title}</h3>
                        {project.startDate && (
                          <p className="text-sm text-[#64748B]">
                            {formatDate(project.startDate)}
                            {project.endDate && ` - ${formatDate(project.endDate)}`}
                          </p>
                        )}
                        {project.description && <p className="mt-2 text-[#0F172A]">{project.description}</p>}
                      </div>
                    ))}
                  </div>
                )}

                {/* Project Edit Modal */}
                <AnimatePresence>
                  {editingProject && (
                    <motion.div
                      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.div
                        className="bg-white rounded-xl shadow-xl max-w-lg w-full"
                        initial={{ scale: 0.9, y: 20, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.9, y: 20, opacity: 0 }}
                        transition={{
                          type: "spring",
                          damping: 25,
                          stiffness: 300,
                        }}
                      >
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                          <h3 className="text-lg font-semibold text-[#0F172A]">
                            {profile.projects.find((proj) => proj.id === editingProject.id)
                              ? "Editar proyecto"
                              : "Añadir proyecto"}
                          </h3>
                          <motion.button
                            onClick={() => setEditingProject(null)}
                            className="p-1 text-[#64748B] rounded-full"
                            whileHover={{
                              scale: 1.1,
                              backgroundColor: "#F9FAFB",
                              rotate: 90,
                            }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <X size={20} />
                          </motion.button>
                        </div>

                        <div className="p-6 space-y-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-[#64748B]">Título</label>
                            <motion.input
                              type="text"
                              value={editingProject.title || ""}
                              onChange={(e) =>
                                setEditingProject({
                                  ...editingProject,
                                  title: e.target.value,
                                })
                              }
                              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-full"
                              placeholder="Ej: E-commerce Website"
                              whileFocus={{
                                scale: 1.02,
                                boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                              }}
                              transition={{ duration: 0.2 }}
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <label className="text-sm font-medium text-[#64748B]">Fecha de inicio</label>
                              <div className="relative">
                                <motion.input
                                  type="date"
                                  value={
                                    editingProject.startDate
                                      ? new Date(editingProject.startDate).toISOString().split("T")[0]
                                      : ""
                                  }
                                  onChange={(e) =>
                                    setEditingProject({
                                      ...editingProject,
                                      startDate: e.target.value ? new Date(e.target.value) : undefined,
                                    })
                                  }
                                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-full cursor-pointer"
                                  whileFocus={{
                                    scale: 1.02,
                                    boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                                  }}
                                  whileHover={{ borderColor: "#6366F1" }}
                                />
                                <motion.div
                                  initial={{ opacity: 0.7 }}
                                  animate={{ opacity: [0.7, 1, 0.7] }}
                                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                >
                                  <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
                                </motion.div>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <label className="text-sm font-medium text-[#64748B]">Fecha de fin</label>
                              <div className="relative">
                                <motion.input
                                  type="date"
                                  value={
                                    editingProject.endDate
                                      ? new Date(editingProject.endDate).toISOString().split("T")[0]
                                      : ""
                                  }
                                  onChange={(e) =>
                                    setEditingProject({
                                      ...editingProject,
                                      endDate: e.target.value ? new Date(e.target.value) : undefined,
                                    })
                                  }
                                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-full cursor-pointer"
                                  whileFocus={{
                                    scale: 1.02,
                                    boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                                  }}
                                  whileHover={{ borderColor: "#6366F1" }}
                                />
                                <motion.div
                                  initial={{ opacity: 0.7 }}
                                  animate={{ opacity: [0.7, 1, 0.7] }}
                                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                >
                                  <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
                                </motion.div>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium text-[#64748B]">Descripción</label>
                            <motion.textarea
                              value={editingProject.description || ""}
                              onChange={(e) =>
                                setEditingProject({
                                  ...editingProject,
                                  description: e.target.value,
                                })
                              }
                              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all w-full min-h-[100px]"
                              placeholder="Describe el proyecto, tecnologías utilizadas y tu rol"
                              whileFocus={{
                                scale: 1.01,
                                boxShadow: "0 0 0 3px rgba(99, 102, 241, 0.1)",
                              }}
                              transition={{ duration: 0.2 }}
                            />
                          </div>
                        </div>

                        <div className="p-6 border-t border-gray-100 flex justify-end gap-3">
                          <motion.button
                            onClick={() => setEditingProject(null)}
                            className="px-4 py-2 border border-gray-300 text-[#64748B] rounded-lg"
                            whileHover={{ backgroundColor: "#F9FAFB", y: -2 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Cancelar
                          </motion.button>
                          <motion.button
                            onClick={() => handleSaveProject(editingProject)}
                            className="px-4 py-2 bg-[#6366F1] text-white rounded-lg shadow-sm"
                            whileHover={{
                              backgroundColor: "#5253cc",
                              y: -2,
                              boxShadow:
                                "0 10px 15px -3px rgba(99, 102, 241, 0.3), 0 4px 6px -4px rgba(99, 102, 241, 0.3)",
                            }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Guardar
                          </motion.button>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
