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
		isPrivate: false,
		redirectTo: null,
	},
	{
		path: "/auth/login",
		element: <Login />,
		isPrivate: false,
		redirectTo: null,
	},
	{
		path: "/auth/register",
		element: <Register />,
		isPrivate: false,
		redirectTo: null,
	},
	{
		path: "/auth/forgot-password",
		element: <ForgotPassword />,
		isPrivate: false,
		redirectTo: null,
	},
	{
		path: "/home/preview",
		element: <Preview />,
		isPrivate: false,
		redirectTo: null,
	},
]

export const privateRoutes = [
	{
		path: "/app/dashboard",
		element: <DashboardPage />,
		isPrivate: true,
		redirectTo: "/auth/login",
	},
	{
		path: "/app/profile",
		element: <ProfilePage />,
		isPrivate: true,
		redirectTo: "/auth/login",
	},
	{
		path: "/app/templates",
		element: <TemplatesPage />,
		isPrivate: true,
		redirectTo: "/auth/login",
	},
	{
		path: "/app/account",
		element: <AccountPage />,
		isPrivate: true,
		redirectTo: "/auth/login",
	},
	{
		path: "/app/portfolio",
		element: <PortfolioPage />,
		isPrivate: true,
		redirectTo: "/auth/login",
	},
]
