import { create } from "zustand"
import { persist } from "zustand/middleware"

import { CV } from "@common/types/cv"

interface CVState {
	cvStore: CV | null
	setCVStore: (cv: CV) => void
	updateCVStore: (updates: Partial<CV>) => void
	clearCVStore: () => void
}

export const useCVStore = create<CVState>()(
	persist(
		(set) => ({
			cvStore: null,
			setCVStore: (cvStore) => set({ cvStore }),
			updateCVStore: (updates) =>
				set((state) => ({
					cvStore: state.cvStore ? { ...state.cvStore, ...updates } : null,
				})),
			clearCVStore: () => set({ cvStore: null }),
		}),
		{
			name: "cv-storage", // Nombre en localStorage
		}
	)
)
