import { motion } from "framer-motion"
import { useState } from "react"

import { Profile } from "@common/types/profile"


import Modal from "../modal/Modal"
import ModalRegister from "../modal/ModalRegister"
import { ArrowLeftCircle } from "lucide-react"

import { getTemplate } from "@common/utils/templates"
interface Props {
	type: "portfolio" | "cv"
	profile: Profile | undefined
	TemplateName: string
	handleBack: () => void
	handleTriggerRegister: () => void
}

export default function Step4Preview({
	type,
	profile,
	handleBack,
	TemplateName,
	handleTriggerRegister,
}: Props) {
	const [modalRegister, setModalRegister] = useState(false)

	const handleViewFullPreview = () => {
		window.open("/home/preview", "_blank")

		// Si necesitas pasar datos, puedes usar localStorage, sessionStorage o query params
		localStorage.setItem("profileData", JSON.stringify(profile))
		localStorage.setItem("templateName", JSON.stringify(TemplateName))
	}

	if (!profile) return null

	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2 }}
				className="space-y-6"
			>
				<div>
					<h2 className="text-2xl font-bold mb-6 text-center">
						Preview your {type === "cv" ? "CV" : "portfolio"}
					</h2>
					<div className="flex flex-col  gap-8 items-center">
						{/* <div className="w-full lg:w-2/3 bg-gray-100 dark:bg-slate-200 rounded-lg p-4 aspect-[3/4] flex items-center justify-center"> */}
						{/* <img
							src={"/placeholder.svg"}
							alt="Preview"
							className="max-h-[500px] shadow-lg"
						/> */}

						<div className="w-full h-[500px] overflow-x-hidden overflow-auto border rounded-xl shadow-lg flex justify-center bg-[#030014] hide-scrollbar">
							<div className="scale-75 origin-top transform  ">
							{getTemplate(TemplateName, profile)}
							</div>
						</div>
						{/* </div> */}
						<div className="w-full  space-y-6 md:inline-flex items-start justify-between gap-6">
							<div className="p-4 rounded-lg bg-green-100 dark:bg-green-100">
								<h3 className="font-semibold text-lg mb-2">
									Want to share your {type === "cv" ? "CV" : "portfolio"}?
								</h3>
								<p className="text-gray-800 text-sm">
									Create an account to get your own personalized link, share it
									with the world, and update it anytime. It's quick and free!
								</p>
							</div>

							<div className="space-y-3 ">
								<button
									onClick={() => setModalRegister(true)}
									type="button"
									className="w-full inline-flex items-center justify-center bg-[#6366F1] text-white font-semibold py-2 px-4 rounded-lg cursor-pointer transition duration-200"
								>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										className="lucide lucide-user-plus mr-2 h-4 w-4"
									>
										<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
										<circle cx="9" cy="7" r="4"></circle>
										<line x1="19" x2="19" y1="8" y2="14"></line>
										<line x1="22" x2="16" y1="11" y2="11"></line>
									</svg>
									Create Account
								</button>

								<button
									onClick={handleViewFullPreview}
									type="button"
									className="w-full cursor-pointer inline-flex items-center justify-center gap-2 border border-gray-300 rounded-lg bg-white text-gray-800 font-semibold py-2 px-4 hover:bg-gray-100 transition duration-200"
								>
									<svg
										className="h-5 w-5 "
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										></path>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
										></path>
									</svg>{" "}
									View Full Preview
								</button>

								<button
									onClick={handleBack}
									className="w-full cursor-pointer inline-flex items-center justify-center gap-2  text-gray-600 font-semibold py-2 px-4"
								>
									<ArrowLeftCircle />
									<span className="text-sm">Back</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
			<Modal isOpen={modalRegister} onClose={() => setModalRegister(false)}>
				<ModalRegister
					onClose={() => setModalRegister(false)}
					triggerRegister={async () => handleTriggerRegister()}
				/>
			</Modal>
		</>
	)
}
