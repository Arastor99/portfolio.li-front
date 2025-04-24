import { Outlet } from "react-router-dom"

import Navbar from "@components/common/Navbar"

const PrivateLayout = () => {
	return (
		<div className="flex flex-col min-h-screen overflow-hidden">
			<Navbar />
			<div className="">
				<Outlet />
			</div>
		</div>
	)
}

export default PrivateLayout
