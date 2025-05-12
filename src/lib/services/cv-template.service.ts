import http from "@lib/http"

import { CVTemplate } from "@common/types/cv-template"

export const getCVTemplates = async () => {
	return (await http
		.get("/cv-template")
		.then((data) => data.data)) as unknown as Promise<CVTemplate[]>
}

export const getCVTemplate = async (name: string) => {
	return (await http
		.get(`/cv-template/${name}`)
		.then((data) => data.data)) as unknown as Promise<CVTemplate>
}
