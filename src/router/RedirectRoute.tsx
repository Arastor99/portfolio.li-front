import { Navigate } from "react-router-dom"
import Cookies from "js-cookie"

const RedirectRoute = () => {
	const token = Cookies.get("accessToken")

	if (!token) return <Navigate to={"/auth/login"} replace />

	return <Navigate to={"/app/dashboard"} replace />
}

export default RedirectRoute
