import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { privateRoutes, publicRoutes } from "./Routes"
import PrivateRoute from "./PrivateRoute"
import RedirectRoute from "./RedirectRoute"

const Index = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<RedirectRoute />}>
					{publicRoutes.map(({ path, element }, index) => (
						<Route key={index} path={path} element={element} />
					))}
				</Route>

				<Route path="/app" element={<PrivateRoute />}>
					{/* <PrivateRoute> */}
					{privateRoutes.map(({ path, element }, index) => (
						<Route key={index} path={path} element={element} />
					))}
				</Route>

				<Route path="*" element={<RedirectRoute />} />
			</Routes>
		</Router>
	)
}

export default Index
