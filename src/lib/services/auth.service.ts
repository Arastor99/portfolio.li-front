import Cookies from "js-cookie"

import http from "@lib/http"

export const login = async (data: { email: string; password: string }) => {
	const response = await http.post("/auth/login", data)

	// Suponiendo que el accessToken viene en response.data.accessToken
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
	return await http.post("/auth/register", data)
}

export const logout = async () => {
	return await http.post("/auth/logout")
}
