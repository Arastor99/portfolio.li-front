import { Navigate, Outlet } from "react-router-dom"
import Cookies from "js-cookie"

const PrivateRoute = () => {
	const token = Cookies.get("accessToken")

	console.log("token", token)

	if (!token) return <Navigate to={"/auth/login"} replace />

	return <Outlet />
}

export default PrivateRoute
