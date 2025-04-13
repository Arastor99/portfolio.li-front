
import Login from "@pages/auth/Login"
import Index from "@pages/Index"
import Register from "@pages/auth/Register"


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
]
