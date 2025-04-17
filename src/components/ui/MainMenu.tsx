
import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, Layout, Edit, User, Settings, MenuIcon, X, Linkedin } from "lucide-react"
import { Link } from "react-router-dom"

interface MenuItemProps {
  icon: React.ReactNode
  label: string
  href: string
  isActive: boolean
  onClick: () => void
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, href, isActive, onClick }) => {
  return (
    <Link to={href} onClick={onClick}>
      <motion.div
        className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${
          isActive ? "bg-gray-100 text-gray-900" : "text-gray-600 hover:bg-gray-50"
        }`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="text-xl">{icon}</span>
        <span className="font-medium">{label}</span>
        {isActive && (
          <motion.div
            className="absolute left-0 w-1 h-8 bg-gray-900 rounded-r-full"
            layoutId="activeIndicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </motion.div>
    </Link>
  )
}

export default function MainMenu() {
  const [activeItem, setActiveItem] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Update the menuItems array to replace "Editor" with "Create" and add "LinkedIn"
  const menuItems = [
    { id: "home", label: "Inicio", icon: <Home size={20} />, href: "/" },
    { id: "templates", label: "Plantillas", icon: <Layout size={20} />, href: "/templates" },
    { id: "create", label: "Crear", icon: <Edit size={20} />, href: "/create" },
    { id: "linkedin", label: "LinkedIn", icon: <Linkedin size={20} />, href: "/linkedin" },
    { id: "profile", label: "Perfil", icon: <User size={20} />, href: "/profile" },
    { id: "settings", label: "Ajustes", icon: <Settings size={20} />, href: "/settings" },
  ]

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleMenuItemClick = (id: string) => {
    setActiveItem(id)
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* Mobile menu button */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <motion.button
          className="p-2 bg-white rounded-full shadow-md"
          onClick={toggleMobileMenu}
          whileTap={{ scale: 0.9 }}
        >
          {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </motion.button>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden md:flex">
        <motion.div
          className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg p-4 z-40"
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="flex flex-col h-full">
            <div className="mb-8 mt-4">
              <motion.h1
                className="text-2xl font-bold text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Myportfolio
              </motion.h1>
            </div>

            <nav className="flex-1">
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.id} className="relative">
                    <MenuItem
                      icon={item.icon}
                      label={item.label}
                      href={item.href}
                      isActive={activeItem === item.id}
                      onClick={() => handleMenuItemClick(item.id)}
                    />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </motion.div>
      </div>

      {/* Mobile menu (full screen) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-40 md:hidden"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col h-full p-6 pt-16">
              <motion.h1
                className="text-2xl font-bold text-center mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Portfolio Pro
              </motion.h1>

              <nav className="flex-1">
                <ul className="space-y-3">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <MenuItem
                        icon={item.icon}
                        label={item.label}
                        href={item.href}
                        isActive={activeItem === item.id}
                        onClick={() => handleMenuItemClick(item.id)}
                      />
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
