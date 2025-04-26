import http from "@lib/http"

import { Profile } from "@common/types/profile"

//Obtiene un perfil si proovee un access_token el perfil se enlaza al usuario
export const getProfile = async ({ publicId }: { publicId: string }) => {
	return (
		await http.get(`/profile/${publicId}`, {
			timeout: 70000, // 70 seconds
		})
	).data as unknown as Promise<Profile>
}

export const getUserProfile = async () => {
	return (await http.get("/profile")).data as unknown as Promise<Profile>
}

export const updateProfile = async (profile: Partial<Profile>) => {
	return (await http.put("/profile", profile)).data as unknown
}

export const attachProfile = async (publicId: string) => {
	return (await http.put(`/profile/${publicId}/attach`)).data as unknown
}
