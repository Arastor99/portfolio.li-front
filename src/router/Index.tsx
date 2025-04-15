import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { appRoutes } from "./Routes"
import PrivateRoute from "@features/app/components/PrivateRoute" 

const Index = () => {
  return (
    <Router>
      <Routes>
        {appRoutes.map(({ path, element }, index) => (
          path === "/login" || path === "/register" || path === "/forget-password" ? (
            <Route key={index} path={path} element={element} />
          ) : (
            <Route
              key={index}
              path={path}
              element={<PrivateRoute>{element}</PrivateRoute>}
            />
          )
        ))}
      </Routes>
    </Router>
  )
}

export default Index
