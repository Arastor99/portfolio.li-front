import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Profile } from "@common/types/profile"
import { getTemplate } from "@common/utils/templates"
import { useProfileStore } from "@store/profileStore"
import { usePortfolioStore } from "@store/portfolioStore"

interface Props {
	templateNameProps?: string
	profileData?: Profile
	forceMobile?: boolean
}

const Preview: React.FC<Props> = ({forceMobile}) => {
	const [profile, setProfile] = useState<Profile | null>(null)
	const [templateName, setTemplateName] = useState<string>("")
	const navigate = useNavigate()
		const { profileStore } = useProfileStore()
		const { portfolioStore } = usePortfolioStore()
	useEffect(() => {
		if (profileStore && portfolioStore) {
			setProfile(profileStore)
			setTemplateName(portfolioStore.template.name)
		
		}else{
		const storedProfile = localStorage.getItem("profileData")
		const storedTemplate = localStorage.getItem("templateName")

		if (storedProfile) {
			const profile = JSON.parse(storedProfile)
			setProfile(profile)
			console.log(storedTemplate)
			setTemplateName(JSON.parse(storedTemplate || ""))
			localStorage.removeItem("templateName")
			localStorage.removeItem("profileData")
		} else {
			// redirige a otra ruta si no hay datos
			navigate("/home", { replace: true }) // o "/"
		}
	}
	}, [profileStore, portfolioStore, navigate])

	if (!profile) {
		return (
			<div className="flex items-center justify-center h-screen">
				<p className="text-gray-500">Loading...</p>
			</div>
		)
	}

	return (
		<div>
			{getTemplate(templateName, profile, forceMobile)}
		</div>
	)
}

export default Preview
