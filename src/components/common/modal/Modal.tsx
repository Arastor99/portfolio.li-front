interface Props {
	isOpen: boolean
	onClose: () => void
	children: React.ReactNode
	omitClickOutside?: boolean
}

const Modal: React.FC<Props> = ({
	isOpen,
	onClose,
	children,
	omitClickOutside = false,
}) => {
	return (
		isOpen && (
			<div
				className={`fixed inset-0 z-50 flex items-center bg-black/50 justify-center ${
					isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
			>
				{children}

				{!omitClickOutside && (
					<div
						className={`fixed inset-0  transition-opacity z-10 ${
							isOpen ? "" : " pointer-events-none"
						}`}
						onClick={omitClickOutside ? () => {} : onClose}
					/>
				)}
			</div>
		)
	)
}

export default Modal
