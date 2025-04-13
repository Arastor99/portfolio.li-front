import http from "@lib/http"

export const login = (data: { email: string; password: string }) => {
  return http.post("/auth/login", data)
}

export const register = (data: { email: string; password: string }) => {
  return http.post("/auth/register", data)
}

export const logout = () => {
  return http.post("/auth/logout")
}
