import { createRoot } from "react-dom/client"
import "./index.css"
import AppRouter from "./router/Index"
import "./i18n"
import { Toaster } from "react-hot-toast"

createRoot(document.getElementById("root")!).render(
	<>
		<Toaster position="bottom-center" />
		<AppRouter />
	</>
)
