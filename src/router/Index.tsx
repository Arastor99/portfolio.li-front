import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { appRoutes } from "./Routes"

const Index = () => {
    return (
        <Router>
          <Routes>
            {appRoutes.map(({ path, element }, index) => (
              <Route key={index} path={path} element={element} />
            ))}
          </Routes>
        </Router>
      )
}

export default Index
