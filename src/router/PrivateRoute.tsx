import { Navigate, useLocation } from "react-router-dom"
import Cookies from "js-cookie"

interface PrivateRouteProps {
  children: React.ReactNode
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const location = useLocation()
  
  
  const token = Cookies.get("token")

  
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} />
  }

  
  return <>{children}</>
}

export default PrivateRoute
