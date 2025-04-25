import { PortfolioTemplate } from "./portfolio-template"

export interface Portfolio {
	id: string
	url: string

	active: boolean

	templateName: string
	template: PortfolioTemplate
}
