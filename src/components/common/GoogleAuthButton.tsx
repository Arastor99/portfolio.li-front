import { googleAuth } from "@lib/services/auth.service"
import { GoogleLogin } from "@react-oauth/google"
import toast from "react-hot-toast"

interface Props {
	registerTrigger?: () => Promise<void>
}

const GoogleAuthButton = ({ registerTrigger }: Props) => {
	return (
		<GoogleLogin
			onSuccess={async (credentialResponse) => {
				if (!credentialResponse?.credential) return toast.error("Login Failed")

				await googleAuth(credentialResponse).then(async () => {
					toast.success("Login Success")

					if (registerTrigger) {
						await registerTrigger()
					}

					window.location.href = "/app/dashboard"
				})
			}}
			onError={() => toast.error("Login Failed")}
		/>
	)
}

export default GoogleAuthButton
