import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, CheckCircle } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function ForgotPasswordForm() {
	const { t } = useTranslation()
	const [email, setEmail] = useState("")
	const [isLoading, setIsLoading] = useState(false)
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [error, setError] = useState("")

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setError("")
		setIsLoading(true)

		if (!email || !email.includes("@")) {
			setError(t("forgotPassword.invalidEmail"))
			setIsLoading(false)
			return
		}

		await new Promise((resolve) => setTimeout(resolve, 1500))
		console.log("Password reset requested for:", email)

		setIsLoading(false)
		setIsSubmitted(true)
	}

	if (isSubmitted) {
		return (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
				className="mt-8 text-center"
			>
				<div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
					<CheckCircle className="h-6 w-6 text-green-600" />
				</div>
				<h3 className="mt-4 text-lg font-medium text-gray-900">
					{t("forgotPassword.checkEmail")}
				</h3>
				<p className="mt-2 text-sm text-gray-500">
					{t("forgotPassword.emailSent", { email })}
				</p>
				<p className="mt-1 text-sm text-gray-500">
					{t("forgotPassword.checkSpam")}
				</p>
				<motion.button
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
					onClick={() => {
						setEmail("")
						setIsSubmitted(false)
					}}
					className="mt-6 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
				>
					{t("forgotPassword.resetAnother")}
				</motion.button>
			</motion.div>
		)
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
						<label htmlFor="email" className="sr-only">
							{t("forgotPassword.emailPlaceholder")}
						</label>
						<div className="relative">
							<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
								<Mail className="h-5 w-5 text-gray-400" />
							</div>
							<input
								id="email"
								name="email"
								type="email"
								autoComplete="email"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="block w-full rounded-md border-0 py-2 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
								placeholder={t("forgotPassword.emailPlaceholder")}
							/>
						</div>
						{error && <p className="mt-2 text-sm text-red-600">{error}</p>}
					</div>
				</div>

				<div>
					<motion.button
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						type="submit"
						disabled={isLoading}
						className="group relative flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:bg-blue-400"
					>
						{isLoading ? t("forgotPassword.sending") : t("forgotPassword.send")}
					</motion.button>
				</div>
			</form>
		</motion.div>
	)
}
