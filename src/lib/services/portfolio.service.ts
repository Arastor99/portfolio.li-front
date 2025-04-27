import http from "@lib/http"

import { Portfolio } from "@common/types/portfolio"

export const createPortfolio = async (data: {
	templateName: string
	url: string
}) => {
	return (await http.post("/portfolio", data)).data as unknown as Promise<Portfolio>
}

//Actualiza un portafolio por el id de access_token
export const updatePortfolio = async (data: {
	templateName?: string
	url?: string
	active?: boolean
}) => {
	return (await http.put("/portfolio", data)).data as unknown as Promise<Portfolio>
}

//Obtiene un portafolio por el id de access_token
export const getPortfolio = async () => {
	return (await http.get(`/portfolio`)).data as unknown as Promise<Portfolio>
}
