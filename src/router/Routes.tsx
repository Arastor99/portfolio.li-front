
import Login from "@pages/auth/Login"
import Index from "@pages/app/Index"
import Register from "@pages/auth/Register"
import ForgotPassword from "@pages/auth/ForgotPassword"
import Profile from "@pages/app/Profile"
import Create from "@pages/app/Create"
import LinkedInPage from "@pages/app/linkedin"
import Templates from "@pages/app/Templates"


export const appRoutes = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path:"/forgot-password",
    element: <ForgotPassword/>
  },
  {
    path: "/dashboard",
    element: <Index />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/linkedin",
    element: <LinkedInPage />,
  },
  {
    path: "/templates",
    element: <Templates />,
  },
]
