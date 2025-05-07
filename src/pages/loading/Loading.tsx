"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const LoadingAnimation = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const totalPages = 3

  useEffect(() => {
    // Create an infinite loop for page transitions
    const pageTimer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages)
    }, 2000) // Flip page every 2 seconds

    return () => {
      clearInterval(pageTimer)
    }
  }, [])

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 z-50">
      <div className="relative w-full max-w-md px-8">
        {/* Logo/Brand */}
        <motion.div
          className="mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-slate-800">
            My<span className="text-blue-500">Portfolio</span>
          </h1>
          <p className="text-slate-500 text-sm mt-1">Transformando perfiles en portfolios profesionales</p>
        </motion.div>

        {/* Main Animation - Page Flipping */}
        <div className="relative h-80 mb-8 perspective">
          {/* LinkedIn Page */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-white rounded-lg shadow-lg border border-slate-200 p-6 origin-left"
            initial={{ rotateY: 0, opacity: 1 }}
            animate={{
              rotateY: currentPage > 0 ? -180 : 0,
              opacity: currentPage > 0 ? 0 : 1,
              zIndex: currentPage > 0 ? 0 : 3,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                  in
                </div>
                <div className="ml-3">
                  <div className="h-4 w-24 bg-slate-200 rounded"></div>
                  <div className="h-3 w-32 bg-slate-100 rounded mt-1"></div>
                </div>
              </div>
              <div className="text-xs text-slate-400 font-medium">LinkedIn Data</div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="h-3 w-full bg-slate-100 rounded"></div>
              <div className="h-3 w-5/6 bg-slate-100 rounded"></div>
              <div className="h-3 w-4/6 bg-slate-100 rounded"></div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs text-slate-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="ml-3">
                  <div className="h-3 w-32 bg-slate-200 rounded"></div>
                  <div className="h-2 w-24 bg-slate-100 rounded mt-1"></div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs text-slate-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div className="ml-3">
                  <div className="h-3 w-40 bg-slate-200 rounded"></div>
                  <div className="h-2 w-32 bg-slate-100 rounded mt-1"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="h-6 px-3 bg-blue-50 border border-blue-100 rounded-full flex items-center justify-center"
                >
                  <div className="h-2 w-12 bg-blue-200 rounded"></div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Processing Page */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-white rounded-lg shadow-lg border border-slate-200 p-6 origin-left"
            initial={{ rotateY: 180, opacity: 0 }}
            animate={{
              rotateY: currentPage === 1 ? 0 : currentPage > 1 ? -180 : 180,
              opacity: currentPage === 1 ? 1 : 0,
              zIndex: currentPage === 1 ? 3 : 0,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="h-full flex flex-col items-center justify-center">
              <div className="relative w-32 h-32 mb-6">
                {/* Data transformation animation */}
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <motion.circle cx="50" cy="50" r="40" stroke="#e2e8f0" strokeWidth="4" fill="none" />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="#3b82f6"
                    strokeWidth="4"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </svg>

                {/* Floating documents */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-20 bg-white border border-slate-200 rounded shadow-sm"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  <div className="h-2 w-10 bg-blue-400 rounded m-2"></div>
                  <div className="h-1 w-12 bg-slate-200 rounded mx-2"></div>
                  <div className="h-1 w-8 bg-slate-200 rounded mx-2 mt-1"></div>
                  <div className="h-1 w-10 bg-slate-200 rounded mx-2 mt-1"></div>
                  <div className="h-1 w-6 bg-slate-200 rounded mx-2 mt-1"></div>
                </motion.div>
              </div>

              <h3 className="text-lg font-semibold text-slate-700 mb-2">Procesando datos</h3>
              <p className="text-sm text-slate-500 text-center">
                Transformando tu información profesional en un portfolio impactante
              </p>

              {/* Data particles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-blue-500"
                  initial={{
                    x: Math.random() * 200 - 100,
                    y: Math.random() * 200 - 100,
                    opacity: 0,
                  }}
                  animate={{
                    x: Math.random() * 200 - 100,
                    y: Math.random() * 200 - 100,
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 1,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Portfolio/CV Page */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-white rounded-lg shadow-lg border border-slate-200 p-6 origin-left"
            initial={{ rotateY: 180, opacity: 0 }}
            animate={{
              rotateY: currentPage === 2 ? 0 : 180,
              opacity: currentPage === 2 ? 1 : 0,
              zIndex: currentPage === 2 ? 3 : 0,
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="flex h-full">
              <div className="w-1/3 pr-3 border-r border-slate-100">
                <div className="w-16 h-16 rounded-full bg-slate-200 mx-auto mb-3"></div>
                <div className="h-3 w-full bg-slate-200 rounded mb-2"></div>
                <div className="h-2 w-5/6 bg-slate-100 rounded mx-auto mb-4"></div>

                <div className="h-2 w-full bg-blue-500 rounded mb-3"></div>

                <div className="space-y-2 mb-4">
                  <div className="h-2 w-full bg-slate-100 rounded"></div>
                  <div className="h-2 w-5/6 bg-slate-100 rounded"></div>
                  <div className="h-2 w-4/6 bg-slate-100 rounded"></div>
                </div>

                <div className="flex flex-wrap gap-1 mt-3">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-4 w-12 bg-slate-100 rounded-full"></div>
                  ))}
                </div>
              </div>

              <div className="w-2/3 pl-3">
                <div className="h-4 w-32 bg-blue-500 rounded mb-3"></div>
                <div className="space-y-2 mb-4">
                  <div className="h-2 w-full bg-slate-100 rounded"></div>
                  <div className="h-2 w-5/6 bg-slate-100 rounded"></div>
                  <div className="h-2 w-full bg-slate-100 rounded"></div>
                  <div className="h-2 w-4/6 bg-slate-100 rounded"></div>
                </div>

                <div className="h-4 w-32 bg-blue-500 rounded mb-3 mt-4"></div>
                <div className="space-y-3 mb-2">
                  <div className="flex">
                    <div className="w-2 h-full bg-blue-500 rounded mr-2"></div>
                    <div className="flex-1">
                      <div className="h-3 w-32 bg-slate-200 rounded mb-1"></div>
                      <div className="h-2 w-24 bg-slate-100 rounded mb-1"></div>
                      <div className="h-2 w-full bg-slate-100 rounded"></div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="w-2 h-full bg-blue-500 rounded mr-2"></div>
                    <div className="flex-1">
                      <div className="h-3 w-40 bg-slate-200 rounded mb-1"></div>
                      <div className="h-2 w-24 bg-slate-100 rounded mb-1"></div>
                      <div className="h-2 w-full bg-slate-100 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Page corner fold effect */}
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-blue-500 border-r-white transform rotate-90"></div>
          </motion.div>

          {/* Stacked pages in background */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-0 left-0 w-full h-full bg-white rounded-lg shadow-sm border border-slate-200"
              style={{
                zIndex: -1,
                top: `${(i + 1) * 3}px`,
                left: `${(i + 1) * 3}px`,
              }}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: 0.3 }}
            />
          ))}
        </div>

        {/* Animated dots for infinite loading indication */}
        <div className="flex justify-center items-center space-x-2 mt-4">
          <motion.div
            className="w-2 h-2 bg-blue-500 rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.2 }}
          />
          <motion.div
            className="w-2 h-2 bg-blue-500 rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.2, delay: 0.2 }}
          />
          <motion.div
            className="w-2 h-2 bg-blue-500 rounded-full"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.2, delay: 0.4 }}
          />
        </div>

        <motion.div
          className="text-center text-sm text-slate-500 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {currentPage === 0 && <p>Extrayendo datos profesionales...</p>}
          {currentPage === 1 && <p>Transformando información...</p>}
          {currentPage === 2 && <p>Creando portfolio profesional...</p>}
        </motion.div>
      </div>
    </div>
  )
}

export default LoadingAnimation
