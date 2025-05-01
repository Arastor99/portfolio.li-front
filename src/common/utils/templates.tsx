// utils/templates.tsx
import Portfolio1 from "@templatesPortfolio/t1/template1"
import Portfolio2 from "@templatesPortfolio/t2/Template2"
import { Profile } from "@common/types/profile"
import { JSX } from "react"

export function getTemplate(templateName: string, profile: Profile, forceMobile?: boolean){
	if (!profile) return null

	const templates: Record<string, JSX.Element> = {
		default: <Portfolio1 profile={profile} forceMobile={forceMobile} />,
		minimal: <Portfolio2 profile={profile} />,
		
	}

	return templates[templateName] || templates["default"]
}
