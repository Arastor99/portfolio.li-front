import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { useTranslation } from "react-i18next"
import LoginForm from "./components/LoginForm"

export default function Login() {
	const { t } = useTranslation()
	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 p-4">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-lg"
			>
				<div>
					<Link
						to="/home"
						className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
					>
						<ArrowLeft className="mr-2 h-4 w-4" />
						{t("auth.backToHome")}
					</Link>
					<motion.h2
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
					>
						{t("auth.signInTitle")}
					</motion.h2>
				</div>

				<LoginForm />
			</motion.div>
		</div>
	)
}
