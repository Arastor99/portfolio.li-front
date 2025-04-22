import Login from "@pages/auth/Login"
import Register from "@pages/auth/Register"
import ForgotPassword from "@pages/auth/ForgotPassword"

import Home from "@pages/home/Home"

import Preview from "@pages/preview/Preview"

import AccountPage from "@pages/account/AccountPage"
import ProfilePage from "@pages/profile/ProfilePage"
import TemplatesPage from "@pages/templates/TemplatesPage"
import PortfolioPage from "@pages/portfolio/PortfolioPage"
import DashboardPage from "@pages/dashboard/DashboardPage"

export const publicRoutes = [
	{
		path: "/home",
		element: <Home />,
	},
	{
		path: "/auth/login",
		element: <Login />,
	},
	{
		path: "/auth/register",
		element: <Register />,
	},
	{
		path: "/auth/forgot-password",
		element: <ForgotPassword />,
	},

	{
		path: "/home/preview",
		element: <Preview />,
	},
]

export const privateRoutes = [
	{
		path: "/app/dashboard",
		element: <DashboardPage />,
	},
	{
		path: "/app/profile",
		element: <ProfilePage />,
	},
	{
		path: "/app/templates",
		element: <TemplatesPage />,
	},
	{
		path: "/app/account",
		element: <AccountPage />,
	},
	{
		path: "/app/portfolio",
		element: <PortfolioPage />,
	},
]
