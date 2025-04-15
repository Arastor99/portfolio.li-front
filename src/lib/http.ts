import axios from "axios"

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api" || "http://localhost:3001/api",
  withCredentials: true, // manda cookies en CORS
  headers: {
    "Content-Type": "application/json",
  },
})


http.interceptors.response.use(
  res => res,
  err => {
    
    return Promise.reject(err)
  }
)

export default http
