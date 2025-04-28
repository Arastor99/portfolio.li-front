import { motion } from "framer-motion"
import { useState } from "react"
import toast from "react-hot-toast"

interface Props {
	handleNext: (publicId: string) => void
}

export default function Step1LinkedInInput({ handleNext }: Props) {
	const [inputValue, setInputValue] = useState("")
	const [isValid, setIsValid] = useState(false)
	const regex =
		/^https?:\/\/(www\.)?linkedin\.com\/in\/([a-zA-Z0-9-_%]+)(\/.*)?$/
	const regexPattern = new RegExp(regex)

	const handleContinue = () => {
		if (inputValue) {
			const match = inputValue.match(regexPattern)
			if (!match) {
				toast.error("Por favor, introduce una URL válida de LinkedIn")
				setIsValid(false)
				return
			}

			const publicId = match[2] // Aquí sigue estando el publicId

			if (!publicId) {
				toast.error("Por favor, introduce una URL válida de LinkedIn")
				return
			}

			handleNext(publicId)
		}
	}

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 0.2 }}
			className="space-y-6"
		>
			<div className="text-center space-y-2">
				<h1 className="text-2xl md:text-3xl font-bold text-[#0F172A]">
					Comencemos con tu perfil
				</h1>
				<p className="text-[#64748B]">
					Pega la URL de tu perfil de LinkedIn para importar tus datos
				</p>
			</div>

			<div className="space-y-4">
				<div className="relative">
					<input
						value={inputValue}
						onChange={(e) => {
							setInputValue(e.target.value)
							setIsValid(regexPattern.test(e.target.value))
						}}
						type="text"
						placeholder="https://linkedin.com/in/tu-perfil"
						className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6366F1] focus:border-transparent outline-none transition-all"
					/>
					<motion.div
						onClick={() => isValid && handleContinue()}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						style={{
							opacity: isValid ? 1 : 0.5,
							cursor: isValid ? "pointer" : "not-allowed",
						}}
						className="absolute right-2 top-2 bg-[#6366F1] text-white p-1 rounded-md cursor-pointer"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M14 5l7 7m0 0l-7 7m7-7H3"
							/>
						</svg>
					</motion.div>
				</div>

				<p className="text-xs text-[#64748B] text-center">
					Usaremos esta información para crear tu perfil profesional
				</p>
			</div>

			<motion.button
				disabled={!isValid}
				onClick={handleContinue}
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.98 }}
				className="w-full py-3 cursor-pointer disabled:cursor-not-allowed bg-[#6366F1] text-white font-medium rounded-lg shadow-md hover:bg-[#5253cc] transition-colors disabled:opacity-50"
			>
				Continuar
			</motion.button>
		</motion.div>
	)
}
