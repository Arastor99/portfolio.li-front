import axios from "axios"

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
  withCredentials: true, // manda cookies en CORS
  headers: {
    "Content-Type": "application/json",
  },
})

// Optional: Interceptores para errores o añadir tokens manuales
http.interceptors.response.use(
  res => res,
  err => {
    // Puedes mostrar toasts o loguear errores aquí
    return Promise.reject(err)
  }
)

export default http
