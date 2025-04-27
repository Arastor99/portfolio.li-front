import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Profile } from "@common/types/profile"
import { getTemplate } from "@common/utils/templates"

interface Props {
	templateNameProps?: string
	profileData?: Profile
}

const Preview: React.FC<Props> = ({profileData, templateNameProps}) => {
	const [profile, setProfile] = useState<Profile | null>(null)
	const [templateName, setTemplateName] = useState<string>("")
	const navigate = useNavigate()
	useEffect(() => {

		if( profileData && templateNameProps) {
			setProfile(profileData)
			setTemplateName(templateNameProps)
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
	}, [navigate])

	if (!profile) {
		return (
			<div className="flex items-center justify-center h-screen">
				<p className="text-gray-500">Loading...</p>
			</div>
		)
	}

	return (
		<div>
			{getTemplate(templateName, profile)}
		</div>
	)
}

export default Preview
