import { PortfolioTemplate } from "./portfolio-template"

export interface Portfolio {
	id: string
	url: string
	active: boolean
	template: PortfolioTemplate
}

type colorHex = `#${string}`

export interface Colors {
	primary: colorHex
	secondary: colorHex
	primaryText: colorHex
	secondaryText: colorHex
	primaryBg: colorHex
	secondaryBg: colorHex
	primaryBorder: colorHex
	secondaryBorder: colorHex
}
export interface PortfolioProps {
	profile: Profile
	colors?: Colors
}
