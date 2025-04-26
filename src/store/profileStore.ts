import { create } from "zustand"
import { persist } from "zustand/middleware"

import { Profile } from "@common/types/profile"

interface ProfileState {
	profileStore: Profile | null
	setProfileStore: (profile: Profile) => void
	updateProfileStore: (updates: Partial<Profile>) => void
	clearProfileStore: () => void
}

export const useProfileStore = create<ProfileState>()(
	persist(
		(set) => ({
			profileStore: null,
			setProfileStore: (profileStore) => set({ profileStore }),
			updateProfileStore: (updates) =>
				set((state) => ({
					profileStore: state.profileStore
						? { ...state.profileStore, ...updates }
						: null,
				})),
			clearProfileStore: () => set({ profileStore: null }),
		}),
		{
			name: "profile-storage", // Nombre en localStorage
		}
	)
)
