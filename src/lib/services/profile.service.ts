import http from "@lib/http"

import { Profile } from "@common/types/profile"

//Obtiene un perfil si proovee un access_token el perfil se enlaza al usuario
export const getProfile = async ({ publicId }: { publicId: string }) => {
	return (await http.get(`/profile/${publicId}`)) as unknown as Promise<
		Omit<
			Profile,
			| "experiences"
			| "education"
			| "languages"
			| "publications"
			| "certifications"
			| "volunteer"
			| "honors"
			| "projects"
			| "skills"
		>
	>
}

export const getUserProfile = async () => {
	return (await http.get("/profile")) as unknown as Promise<Profile>
}
