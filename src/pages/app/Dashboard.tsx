import Navbar from "@components/common/Navbar"
import AccountPage from "@pages/account/AccountPage"
import PortfolioPage from "@pages/portfolio/PortfolioPage"
import ProfilePage from "@pages/profile/ProfilePage"
import TemplatesPage from "@pages/templates/TemplatesPage"
import { useState } from "react"

export default function Dashboard() {
	// This is just a placeholder for demonstration
	// In a real implementation, you would handle this with your own state management
	const [currentPage, setCurrentPage] = useState("account")

	return (
		<main>
			<Navbar />

			{currentPage === "profile" && <ProfilePage />}
			{currentPage === "templates" && <TemplatesPage />}
			{currentPage === "portfolio" && <PortfolioPage />}
			{currentPage === "account" && <AccountPage />}
		</main>
	)
}
