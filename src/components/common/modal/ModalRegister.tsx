import React, { useState } from "react"
import toast from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom"

import { register } from "@lib/services/auth.service"
import { EyeOff, Eye, Lock, Mail, User } from "lucide-react"

interface Props {
	onClose: () => void
	triggerRegister?: () => void
}

const ModalRegister: React.FC<Props> = ({ onClose, triggerRegister }) => {
	const navigate = useNavigate()

	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [showPassword, setShowPassword] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const handleSubmit = async (e: React.FormEvent) => {
		if (!name || !email || !password) {
			toast.error("Please fill in all fields")
			return
		}
		e.preventDefault()
		setIsLoading(true)
		await toast
			.promise(register({ fullName: name, email, password }), {
				loading: "Registering...",
				success: "Registered successfully!",
				error: "Registration failed. Please check your details.",
			})
			.then(() => triggerRegister && triggerRegister())
			.then(() => {
				navigate("/app/dashboard", { replace: true })
				onClose()
			})
			.finally(() => {
				setIsLoading(false)
			})
	}
	return (
		<div className=" z-50 flex items-center justify-center ">
			<div className="relative w-[330px] rounded-lg bg-white p-6 shadow-lg">
				<button
					type="button"
					disabled={isLoading}
					onClick={onClose}
					className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 cursor-pointer"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<line x1="18" y1="6" x2="6" y2="18"></line>
						<line x1="6" y1="6" x2="18" y2="18"></line>
					</svg>
				</button>

				<div className="mb-6 text-center">
					<h2 className="text-2xl font-bold">Create an account</h2>
					<p className="text-sm text-gray-500">Sign up to get started</p>
				</div>

				<form className="space-y-4">
					<div className="relative">
						<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<User className="h-5 w-5 text-gray-400" />
						</div>
						<input
							type="text"
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-10    ring-inset placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#6366F1]/90 outline-none sm:text-sm"
							placeholder={"Name"}
						/>
					</div>

					<div className="relative">
						<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<Mail className="h-5 w-5 text-gray-400" />
						</div>
						<input
							type="email"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-10    ring-inset placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#6366F1]/90 outline-none sm:text-sm"
							placeholder={"Email"}
						/>
					</div>
					<div className="relative">
						<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<Lock className="h-5 w-5 text-gray-400" />
						</div>
						<input
							id="password"
							type={showPassword ? "text" : "password"}
							required
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-10    ring-inset placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-[#6366F1]/90 outline-none sm:text-sm"
							placeholder={"Password"}
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

					<button
						disabled={isLoading}
						onClick={handleSubmit}
						type="submit"
						className="w-full rounded-md bg-[#6366F1] py-2 text-sm font-medium text-white transition-colors hover:bg-[#6366F1]/90 focus:outline-none focus:ring-1 focus:ring-[#6366F1]/90 focus:ring-offset-2 cursor-pointer"
					>
						Register
					</button>
				</form>

				<div className="mt-4 text-center text-sm">
					<span className="text-gray-600">Already signed in? </span>
					<Link
						to="/auth/login"
						className="font-medium text-[#6366F1] hover:underline"
					>
						Log in
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ModalRegister
