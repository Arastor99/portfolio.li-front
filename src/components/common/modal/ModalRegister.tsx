import React from "react"

import RegisterForm from "@pages/auth/components/RegisterForm"

interface Props {
	onClose: () => void
	triggerRegister?: () => Promise<void>
}

const ModalRegister: React.FC<Props> = ({ triggerRegister }) => {
	return (
		<div className=" z-50 flex items-center justify-center ">
			<div className="relative w-full xl:w-md rounded-lg bg-white p-6 shadow-lg">
				<RegisterForm registerTrigger={triggerRegister} />
			</div>
		</div>
	)
}

export default ModalRegister
