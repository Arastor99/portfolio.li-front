import Cookies from "js-cookie"
import axios from "axios"

const http = axios.create({
	baseURL: import.meta.env.VITE_API_URL + "/api" || "http://localhost:3001/api",
	withCredentials: true, // manda cookies en CORS
	headers: {
		"Content-Type": "application/json",
	},
})

http.interceptors.request.use(
	(config) => {
		const token = Cookies.get("accessToken")
		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}
		return config
	},
	(error) => Promise.reject(error)
)

// ADD LOGOUT WITH 401 ERROR
http.interceptors.response.use((response) => {
	if (response.status === 401) {
		Cookies.remove("accessToken")
		Cookies.remove("refreshToken")
		window.location.href = "/auth/login"
	}
	return response
})
export default http
