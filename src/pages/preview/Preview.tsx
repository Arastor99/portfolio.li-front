import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { Profile } from "@common/types/profile"
import Portfolio from "@templatesPortfolio/t1/template1"

const Preview = () => {
	const [profile, setProfile] = useState<Profile | null>(null)
	const navigate = useNavigate()

	useEffect(() => {
		const storedProfile = localStorage.getItem("profileData")

		if (storedProfile) {
			const profile = JSON.parse(storedProfile)
			setProfile(profile)

			localStorage.removeItem("profileData")
		} else {
			// redirige a otra ruta si no hay datos
			navigate("/", { replace: true }) // o "/"
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
			<Portfolio profile={profile} />
		</div>
	)
}

export default Preview
