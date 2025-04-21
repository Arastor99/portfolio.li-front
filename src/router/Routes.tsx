import Login from "@pages/auth/Login"
import Register from "@pages/auth/Register"
import ForgotPassword from "@pages/auth/ForgotPassword"

import Home from "@pages/home/Home"

import Preview from "@pages/preview/Preview"

import Dashboard from "@pages/app/Dashboard"

import AccountPage from "@pages/account/AccountPage"
import ProfilePage from "@pages/profile/ProfilePage"
import TemplatesPage from "@pages/templates/TemplatesPage"
import PortfolioPage from "@pages/portfolio/PortfolioPage"

import Portfolio from "src/portfolioTemplates/t1/template1"

export const appRoutes = [
	{
		path: "/",
		element: <Home />,
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
		path: "/forgot-password",
		element: <ForgotPassword />,
	},
	{
		path: "/dashboard",
		element: <Dashboard />,
	},
	{
		path: "/profile",
		element: <ProfilePage />,
	},
	{
		path: "/templates",
		element: <TemplatesPage />,
	},
	{
		path: "/preview",
		element: <Preview />,
	},
	// { // TODO?
	// 	path: "/create",
	// 	element: <Create />,
	// },
	{
		path: "/account",
		element: <AccountPage />,
	},
	{
		path: "/templates",
		element: <PortfolioPage />,
	},
	{
		path: "/templates1",
		element: <Portfolio />,
	},
]
