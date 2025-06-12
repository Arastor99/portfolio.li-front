import { Profile } from "@common/types/profile"
import {
	Send,
	Mail,
	Phone,
	MapPin,
	Linkedin,
	Github,
	Twitter,
} from "lucide-react"
import { Button } from "@components/ui/button"
import { motion } from "framer-motion"
import { useState } from "react"
import toast from "react-hot-toast"

interface Props {
	profile: Profile
}

export default function Contact({ profile }: Props) {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	})

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (e: React.FormEvent) => {
		if (
			!formState.name &&
			!formState.email &&
			!formState.subject &&
			!formState.message
		) {
			toast.error("Complete los campos")
		} else {
			toast.success("¡Enviado!")
		}
		e.preventDefault()
		console.log("¡Enviado!", formState)
		setFormState({
			name: "",
			email: "",
			subject: "",
			message: "",
		})
	}
	return (
		<section key="contact" className="py-20 bg-white ">
			<div className="container px-4 md:px-6 mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-12 text-center"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h2>
					<div className="h-1 w-20 bg-teal-500 mx-auto"></div>
				</motion.div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
					<motion.div /* Contact Info */
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<h3 className="text-2xl font-bold mb-6 text-gray-900">
							Envíame un mensaje
						</h3>
						<form onSubmit={handleSubmit} className="space-y-4">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div className="flex flex-col space-y-2">
									<label
										htmlFor="name"
										className="text-sm font-medium text-gray-700"
									>
										Nombre
									</label>
									<input
										type="text"
										id="name"
										name="name"
										placeholder="Tu nombre"
										value={formState.name}
										onChange={handleChange}
										required
										className="p-1 border-1 rounded-sm space-y-2 border-teal-500 "
									/>
								</div>
								<div className="flex flex-col space-y-2">
									<label
										htmlFor="email"
										className="text-sm font-medium text-gray-700"
									>
										Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										placeholder="tu@email.com"
										value={formState.email}
										onChange={handleChange}
										required
										className="p-1 border-1 rounded-sm space-y-2 border-teal-500 "
									/>
								</div>
							</div>
							<div className="flex flex-col space-y-2 mx-auto">
								<label
									htmlFor="subject"
									className="text-sm font-medium text-gray-700"
								>
									Asunto
								</label>
								<input
									name="subject"
									id="subject"
									placeholder="Asunto del mensaje"
									value={formState.subject}
									onChange={handleChange}
									required
									className="p-1 border-1 rounded-sm space-y-2 border-teal-500 "
								/>
							</div>
							<div className=" flex flex-col space-y-2 mx-auto">
								<label
									htmlFor="message"
									className="text-sm font-medium text-gray-700"
								>
									Mensaje
								</label>
								<textarea
									name="message"
									id="message"
									placeholder="Tu mensaje"
									value={formState.message}
									onChange={handleChange}
									required
									className="p-1 border-1 rounded-sm space-y-2 border-teal-500 "
								></textarea>
							</div>
							<Button
								onClick={handleSubmit}
								type="submit"
								className="w-full bg-tea-600 border border-teal-500 hover:bg-teal-700 text-black hover:text-white"
							>
								<Send className="w-4 h-4 " />
								¡Enviar!
							</Button>
						</form>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						<h3 className="text-2xl font-bold mb-6 text-gray-900">
							Información de Contacto
						</h3>
						<div className="space-y-6">
							<div className="flex items-start gap-4">
								<div className="p-3 bg-teal-100 rounded-full">
									<Mail className="h-6 w-6 text-teal-600" />
								</div>
								<div>
									<h4 className="text-lg font-semibold text-gray-900">Email</h4>
									<a
										href="mailto:anagomez@example.com"
										className="text-teal-600 hover:underline"
									>
										ana.gomez@example.com
									</a>
								</div>
							</div>
							<div className="flex items-start gap-4">
								<div className="p-3 bg-teal-100 rounded-full">
									<Phone className="h-6 w-6 text-teal-600" />
								</div>
								<div>
									<h4 className="text-lg font-semibold text-gray-900">
										Teléfono
									</h4>
									<a
										href="tel:+52551235678"
										className="text-teal-600 hover:underline"
									>
										+52 55 1234 5678
									</a>
								</div>
							</div>
							<div className="flex items-start gap-4">
								<div className="p-3 bg-teal-100 rounded-full">
									<MapPin className="h-6 w-6 text-teal-600" />
								</div>
								<div>
									<h4 className="text-lg font-semibold text-gray-900">
										Ubicación
									</h4>
									<p className="text-gray-700">{profile.geoLocationName}</p>
								</div>
							</div>

							<div className="pt-6 border-t border-gray-200">
								<h4 className="text-lg font-semibold text-gray-900 mb-4">
									Redes Sociales
								</h4>
								<div className="flex gap-4">
									<a
										href="https://linkedin.com/in/anagomez"
										target="_blank"
										rel="noopener noreferrer"
										className="p-3 bg-gray-100 rounded-full hover:bg-teal-100 transition-colors"
									>
										<Linkedin className="h-5 w-5 text-gray-700 hover:text-teal-600" />
										<span className="sr-only">LinkedIn</span>
									</a>

									<a
										href="https://github.com/anagomez"
										target="_blank"
										rel="noopener noreferrer"
										className="p-3 bg-gray-100 rounded-full hover:bg-teal-100 transition-colors"
									>
										<Github className="h-5 w-5 text-gray-700 hover:text-teal-600" />
										<span className="sr-only">GitHub</span>
									</a>
									<a
										href="https://twitter.com/anagomez"
										target="_blank"
										rel="noopener noreferrer"
										className="p-3 bg-gray-100 rounded-full hover:bg-teal-100 transition-colors"
									>
										<Twitter className="h-5 w-5 text-gray-700 hover:text-teal-600" />
										<span className="sr-only">Twitter</span>
									</a>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
