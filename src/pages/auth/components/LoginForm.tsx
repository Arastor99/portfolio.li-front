import { useState } from "react"
import { Link } from "react-router-dom"
import toast from "react-hot-toast"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

import { Eye, EyeOff, Mail, Lock } from "lucide-react"

import { login } from "@lib/services/auth.service"

import GoogleAuthButton from "@components/common/GoogleAuthButton"

export default function LoginForm() {
	const { t } = useTranslation()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [showPassword, setShowPassword] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsLoading(true)
		await toast
			.promise(login({ email, password }), {
				loading: "Logging in...",
				success: "Logged in successfully!",
				error: "Login failed. Please check your credentials.",
			})
			.then(() => {
				// La sincronizacion de las cookies requiere un window.location.href
				window.location.href = "/app/dashboard"
			})

		setIsLoading(false)
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.3, duration: 0.5 }}
		>
			<form onSubmit={handleSubmit} className="mt-8 space-y-6">
				<div className="space-y-4 rounded-md">
					<div>
						<div className="relative">
							<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
								<Mail className="h-5 w-5 text-gray-400" />
							</div>
							<input
								type="email"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="block w-full rounded-md border-0 py-2 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
								placeholder={t("login.email")}
							/>
						</div>
					</div>

					<div>
						<div className="relative">
							<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
								<Lock className="h-5 w-5 text-gray-400" />
							</div>
							<input
								type={showPassword ? "text" : "password"}
								required
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="block w-full rounded-md border-0 py-2 pl-10 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
								placeholder={t("login.password")}
							/>
							<button
								type="button"
								onClick={() => setShowPassword(!showPassword)}
								className="absolute inset-y-0 right-0 flex items-center pr-3"
							>
								{showPassword ? (
									<EyeOff className="h-5 w-5 text-gray-400" />
								) : (
									<Eye className="h-5 w-5 text-gray-400" />
								)}
							</button>
						</div>
					</div>
				</div>

				<div className="flex items-center justify-between">
					<label className="flex items-center text-sm text-gray-900">
						<input
							type="checkbox"
							className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
						/>
						<span className="ml-2">{t("login.remember")}</span>
					</label>
					<Link
						to="/auth/forgot-password"
						className="text-sm text-blue-600 hover:text-blue-500"
					>
						{t("login.forgot_password")}
					</Link>
				</div>

				<motion.button
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
					type="submit"
					disabled={isLoading}
					className="group relative flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-500 focus:outline-none disabled:bg-blue-400"
				>
					{isLoading ? t("login.submitting") : t("login.submit")}
				</motion.button>
			</form>

			<div className="mt-6">
				<div className="relative flex justify-center text-sm">
					<span className="bg-white px-2 text-gray-500">
						{t("login.google")}
					</span>
				</div>
				<div className="mt-6">
					<GoogleAuthButton />
				</div>
			</div>

			<p className="mt-6 text-center text-sm text-gray-600">
				{t("login.no_account")}{" "}
				<Link
					to="/auth/register"
					className="font-medium text-blue-600 hover:text-blue-500"
				>
					{t("login.register")}
				</Link>
			</p>
		</motion.div>
	)
}
