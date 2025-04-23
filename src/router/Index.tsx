import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { publicRoutes, privateRoutes } from "./Routes"
import Cookies from "js-cookie"

const Index = () => {
	const isAuthenticated = () => {
		const token = Cookies.get("accessToken")
		return !!token
	}

	return (
		<Router>
			<Routes>
				{publicRoutes.map(({ path, element }, index) => (
					<Route key={index} path={path} element={element} />
				))}

				{privateRoutes.map(({ path, element }, index) => (
					<Route
						key={index}
						path={path}
						element={isAuthenticated() ? element : <Navigate to="/auth/login" replace />}
					/>
				))}

				<Route path="*" element={<Navigate to="/home" replace />} />
			</Routes>
		</Router>
	)
}

export default Index
