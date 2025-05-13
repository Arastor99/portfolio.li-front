import http from "@lib/http"

import { CV } from "@common/types/cv"

export const createCV = async (data: { templateName: string }) => {
	return (await http.post("/cv", data)).data as unknown as Promise<CV>
}

export const updateCV = async (data: { templateName?: string }) => {
	return (await http.put("/cv", data)).data as unknown as Promise<CV>
}

export const getCV = async () => {
	return (await http.get(`/cv`)).data as unknown as Promise<CV>
}
