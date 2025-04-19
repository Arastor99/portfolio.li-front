import http from "@lib/http"

import { PortfolioTemplate } from "@common/types/portfolio-template"

export const getPotfolioTemplates = async () => {
	return (await http
		.get("/portfolio-template")
		.then((data) => data.data)) as unknown as Promise<PortfolioTemplate[]>
}

export const getPortfolioTemplate = async (id: string) => {
	return (await http
		.get(`/portfolio-template/${id}`)
		.then((data) => data.data)) as unknown as Promise<PortfolioTemplate>
}
