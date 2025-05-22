import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Profile } from "@common/types/profile"
import { getTemplate } from "@common/utils/templates"

interface Props {
	templateNameProps?: string
	profileData?: Profile
	forceMobile?: boolean
}

const Preview: React.FC<Props> = ({ templateNameProps, profileData, forceMobile }) => {
	const [profile, setProfile] = useState<Profile | null>(null)
	const [templateName, setTemplateName] = useState<string>("")
	const navigate = useNavigate()
	console.log("templateNameProps", templateNameProps)
	console.log("profileData", profileData)
	useEffect(() => {
		if (profileData && templateNameProps) {
			setProfile(profileData)
			setTemplateName(templateNameProps)
		} else {
			navigate("/home", { replace: true }) // redirigir si faltan datos
		}
	}, [profileData, templateNameProps, navigate])

	if (!profile) {
		return (
			<div className="flex items-center justify-center h-screen">
				<p className="text-gray-500">Cargando vista previa...</p>
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
