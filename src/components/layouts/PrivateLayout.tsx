import { Outlet } from "react-router-dom"

import Navbar from "@components/common/Navbar"
import useBoostrap from "@common/hooks/useBoostrap"

const PrivateLayout = () => {
	useBoostrap()
	return (
		<div className="flex flex-col min-h-screen overflow-hidden">
			<Navbar />
			<Outlet />
		</div>
	)
}

export default PrivateLayout
