import { create } from "zustand"
import { persist } from "zustand/middleware"

import { Portfolio } from "@common/types/portfolio"

interface PortfolioState {
    portfolioStore: Portfolio | null
    setPortfolioStore: (portfolio: Portfolio) => void
    updatePortfolioStore: (updates: Partial<Portfolio>) => void
    clearPortfolioStore: () => void

}

export const usePortfolioStore = create<PortfolioState>()(
    persist(
        (set) => ({
            portfolioStore: null,
            setPortfolioStore: (portfolioStore) => set({ portfolioStore }),
            updatePortfolioStore: (updates) =>
                set((state) => ({
                    portfolioStore: state.portfolioStore
                        ? { ...state.portfolioStore, ...updates }
                        : null,
                })),
            clearPortfolioStore: () => set({ portfolioStore: null }),
        }),
        {
            name: "portfolio-storage", // Nombre en localStorage
        }
))
