import { createRoot } from "react-dom/client"
import { Toaster } from "react-hot-toast"
import { GoogleOAuthProvider } from "@react-oauth/google"

import "./index.css"
import AppRouter from "./router/Index"
import "./i18n"
import { GOOGLE_CLIENT_ID } from "@common/constants"

createRoot(document.getElementById("root")!).render(
	<>
		<GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
			<Toaster position="bottom-center" />
			<AppRouter />
		</GoogleOAuthProvider>
		;
	</>
)
