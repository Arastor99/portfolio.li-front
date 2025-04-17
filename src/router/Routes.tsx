
import Login from "@pages/auth/Login"
import Index from "@pages/app/Index"
import Register from "@pages/auth/Register"
import ForgotPassword from "@pages/auth/ForgotPassword"
import Profile from "@pages/app/Profile"
import Create from "@pages/app/Create"
import LinkedInPage from "@pages/app/linkedin"
import Templates from "@pages/app/Templates"
import Portfolio from "src/portfolioTemplates/t1/template1"
import Template2 from "@templatesPortfolio/t2/template2"


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
  {
    path: "/templates1",
    element: <Portfolio />,
  },
]
