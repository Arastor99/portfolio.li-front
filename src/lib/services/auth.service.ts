import Cookies from "js-cookie"

import http from "@lib/http"

export const login = async (data: { email: string; password: string }) => {
	const response = await http.post("/auth/login", data)

	//  accessToken viene en response.data.accessToken
	const accessToken = response.data.token
	if (accessToken) {
		Cookies.set("accessToken", accessToken, {
			expires: 7, // caduca en 7 días
			secure: true, // solo sobre HTTPS
			sameSite: "Lax",
		})
	}

	return response
}

export const register = async (data: {
	fullName: string
	email: string
	password: string
}) => {
	const response = await http.post("/auth/register", data)

	//  accessToken viene en response.data.accessToken
	const accessToken = response.data.token
	if (accessToken) {
		Cookies.set("accessToken", accessToken, {
			expires: 7, // caduca en 7 días
			secure: true, // solo sobre HTTPS
			sameSite: "Lax",
		})
	}

	return response
}

export const verifyEmail = async (token: string) => {
	const response = await http.post("/auth/verify-email", { token })

	const accessToken = response.data.token
	if (accessToken) {
		Cookies.set("accessToken", accessToken, {
			expires: 7, // caduca en 7 días
			secure: true, // solo sobre HTTPS
			sameSite: "Lax",
		})
	}

	return response
}

export const logout = async () => {
	Cookies.remove("accessToken")
	Cookies.remove("refreshToken")
	window.location.href = "/auth/login"
	return
}

export const isAuthenticated = () => {
	const token = Cookies.get("accessToken")
	return !!token
}
