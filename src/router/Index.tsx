import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom"
import { publicRoutes, privateRoutes } from "./Routes"
import Cookies from "js-cookie"
import PrivateLayout from "@components/layouts/PrivateLayout"
import BackgroundParticles from "@components/common/wizard2/background-particles"

const Index = () => {
	const isAuthenticated = () => {
		const token = Cookies.get("accessToken")
		return !!token // Check if the token exists
	}

	return (
		<Router>
			
			<div className="bg-mesh relative">
			<BackgroundParticles />
			<Routes>
				{publicRoutes.map(({ path, element }, index) => (
					<Route
						key={index}
						path={path}
						element={
							!isAuthenticated() ? (
								element
							) : (
								<Navigate to="/app/dashboard" replace />
							)
						}
					/>
				))}

				<Route
					path="/app"
					element={
						isAuthenticated() ? (
							<PrivateLayout />
						) : (
							<Navigate to="/auth/login" replace />
						)
					}
				>
					{privateRoutes.map(({ path, element }, index) => (
						<Route key={index} path={path} element={element} />
					))}
				</Route>

				{/* Redirect to home if no route matches */}
				<Route path="*" element={<Navigate to="/home" replace />} />
			</Routes>
			</div>
		</Router>
	)
}

export default Index
