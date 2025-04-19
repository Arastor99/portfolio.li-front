import { motion } from "framer-motion"

export default function AccountPage() {
	const sections = [
		{
			id: "profile",
			title: "Perfil",
			description: "Gestiona tu información personal",
			icon: "user",
		},
		{
			id: "subscription",
			title: "Suscripción",
			description: "Gestiona tu plan y facturación",
			icon: "credit-card",
		},
		{
			id: "notifications",
			title: "Notificaciones",
			description: "Configura tus preferencias de notificaciones",
			icon: "bell",
		},
		{
			id: "security",
			title: "Seguridad",
			description: "Actualiza tu contraseña y seguridad",
			icon: "shield",
		},
		{
			id: "integrations",
			title: "Integraciones",
			description: "Conecta con otras plataformas",
			icon: "link",
		},
	]

	return (
		<div className="min-h-screen bg-[#F9FAFB] p-4 md:p-8 pt-20">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="max-w-4xl mx-auto"
			>
				<div className="mb-8">
					<h1 className="text-2xl md:text-3xl font-bold text-[#0F172A]">
						Cuenta
					</h1>
					<p className="text-[#64748B]">Gestiona tu cuenta y preferencias</p>
				</div>

				<div className="space-y-4">
					{sections.map((section) => (
						<motion.div
							key={section.id}
							whileHover={{
								y: -2,
								boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
							}}
							className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
						>
							<div className="p-4 md:p-6 flex items-center justify-between">
								<div className="flex items-center space-x-4">
									<div className="w-10 h-10 rounded-full bg-[#6366F1]/10 flex items-center justify-center text-[#6366F1]">
										{section.icon === "user" && (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
												/>
											</svg>
										)}
										{section.icon === "credit-card" && (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
												/>
											</svg>
										)}
										{section.icon === "bell" && (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
												/>
											</svg>
										)}
										{section.icon === "shield" && (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
												/>
											</svg>
										)}
										{section.icon === "link" && (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
												/>
											</svg>
										)}
									</div>
									<div>
										<h3 className="font-medium text-[#0F172A]">
											{section.title}
										</h3>
										<p className="text-sm text-[#64748B]">
											{section.description}
										</p>
									</div>
								</div>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5 text-[#64748B]"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				<div className="mt-8 pt-6 border-t border-gray-200">
					<motion.button
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className="px-4 py-2 text-red-500 font-medium rounded-lg hover:bg-red-50 transition-colors flex items-center space-x-2"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
							/>
						</svg>
						<span>Cerrar sesión</span>
					</motion.button>
				</div>
			</motion.div>
		</div>
	)
}
