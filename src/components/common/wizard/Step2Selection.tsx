import { motion } from "framer-motion"

interface Props {
	handleNext: (type: "portfolio" | "cv") => void
	hanldeBack: () => void
}

export default function Step2Selection({ handleNext, hanldeBack }: Props) {
	const handleContinue = (type: "portfolio" | "cv") => {
		handleNext(type)
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
					¿Qué deseas crear?
				</h1>
				<p className="text-[#64748B]">
					Selecciona el tipo de documento que quieres generar
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<motion.div
					onClick={() => handleContinue("cv")}
					whileHover={{
						scale: 1.03,
						boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
					}}
					whileTap={{ scale: 0.97 }}
					className="border border-gray-200 rounded-xl p-6 cursor-pointer hover:border-[#6366F1] transition-all"
				>
					<div className="flex flex-col items-center space-y-4">
						<div className="w-16 h-16 bg-[#6366F1]/10 rounded-full flex items-center justify-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-8 w-8 text-[#6366F1]"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
								/>
							</svg>
						</div>
						<h3 className="font-bold text-lg text-[#0F172A]">
							Currículum Vitae
						</h3>
						<p className="text-[#64748B] text-center text-sm">
							Crea un CV profesional con tus datos de LinkedIn
						</p>
					</div>
				</motion.div>

				<motion.div
					onClick={() => handleContinue("portfolio")}
					whileHover={{
						scale: 1.03,
						boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
					}}
					whileTap={{ scale: 0.97 }}
					className="border border-gray-200 rounded-xl p-6 cursor-pointer hover:border-[#6366F1] transition-all"
				>
					<div className="flex flex-col items-center space-y-4">
						<div className="w-16 h-16 bg-[#6366F1]/10 rounded-full flex items-center justify-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-8 w-8 text-[#6366F1]"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
								/>
							</svg>
						</div>
						<h3 className="font-bold text-lg text-[#0F172A]">Portfolio</h3>
						<p className="text-[#64748B] text-center text-sm">
							Crea un portfolio interactivo con tus proyectos
						</p>
					</div>
				</motion.div>
			</div>

			<div className="flex justify-between pt-4">
				<motion.button
					onClick={hanldeBack}
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
					className="px-6 py-2 border border-gray-300 text-[#64748B] font-medium rounded-lg hover:bg-gray-50 transition-colors"
				>
					Atrás
				</motion.button>
			</div>
		</motion.div>
	)
}
