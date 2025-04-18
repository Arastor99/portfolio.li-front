import http from "@lib/http"

import { Portfolio } from "@common/types/portfolio"

export const createPortfolio = async (data: {
	templateId: string
	url: string
}) => {
	return (await http.post("/portfolio", data)) as unknown as Promise<Portfolio>
}

//Actualiza un portafolio por el id de access_token
export const updatePortfolio = async (data: {
	templateId?: string
	url?: string
	active?: boolean
}) => {
	return (await http.put("/portfolio", data)) as unknown as Promise<Portfolio>
}

//Obtiene un portafolio por el id de access_token
export const getPortfolio = async () => {
	return (await http.get(`/portfolio`)) as unknown as Promise<Portfolio>
}
