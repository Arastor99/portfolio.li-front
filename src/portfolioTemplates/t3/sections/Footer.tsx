import { Profile } from "@common/types/profile"

interface Props {
	profile: Profile
}

export default function Footer({ profile }: Props) {
	return (
		<footer className="bg-gray-900 text-white py-12">
			<div className="container px-4 md:px-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h3 className="text-xl font-bold mb-4">
							{profile.firstName} {profile.lastName}
						</h3>
						<p className="text-gray-300 mb-4">{profile.headline}</p>
						<p className="text-gray-400">{profile.summary}</p>
					</div>
				</div>
			</div>
		</footer>
	)
}
