"use client"

import { useState, useEffect } from "react"
import { SecuritySection } from "@pages/account/SecuritySection"
import { PortfolioSection } from "@pages/account/PortfolioSection"
import { StatisticsSection } from "@pages/account/StatisticsSection"
import { PremiumSection } from "@pages/account/PremiumSection"
import BackgroundParticles from "@components/common/wizard/background-particles"
//import { UserMenu } from "@/components/user-menu"

export function AccountPage() {
  // This would come from your auth system
  const [user, setUser] = useState({
    name: "Alex Johnson",
    email: "alex@example.com",
    image: "/placeholder.svg?height=40&width=40",
    isPremium: false,
  })

  const [activeTab, setActiveTab] = useState("security")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-mesh z-10">
      <div className="fixed inset-0 -z-10"><BackgroundParticles /></div>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Mi cuenta
          </h1>
        </div>

        <div className="mb-10 overflow-x-auto">
          <nav className="flex space-x-1 min-w-max">
            {["security", "portfolio", "statistics", "premium"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-3 rounded-full transition-all duration-200 ${
                  activeTab === tab ? "text-white" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {activeTab === tab && (
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 animate-[fadeIn_0.3s_ease-in-out]"></span>
                )}
                <span className="relative flex items-center gap-2">
                  {tab === "security" && "Seguridad"}
                  {tab === "portfolio" && "Portfolio"}
                  {tab === "statistics" && (
                    <>
                      Estadísticas
                      {!user.isPremium && (
                        <span className="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center">
                          <span className="text-white text-xs">✦</span>
                        </span>
                      )}
                    </>
                  )}
                  {tab === "premium" && "Premium"}
                </span>
              </button>
            ))}
          </nav>
        </div>

        <div className="transition-all duration-300">
          {activeTab === "security" && <SecuritySection user={user} />}
          {activeTab === "portfolio" && <PortfolioSection user={user} />}
          {activeTab === "statistics" && <StatisticsSection user={user} />}
          {activeTab === "premium" && <PremiumSection user={user} />}
        </div>
      </main>
    </div>
  )
}
