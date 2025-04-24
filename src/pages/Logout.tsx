import { logout } from "@lib/services/auth.service"
import { Loader } from "lucide-react"

const Logout = () => {
	logout()

	return (
		<>
			<Loader />
		</>
	)
}

export default Logout
