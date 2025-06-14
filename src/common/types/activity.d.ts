export type ActivityType =
	| "ATTACH_PROFILE"
	| "CREATE_PROFILE"
	| "UPDATE_PROFILE"
	| "CREATE_PORTFOLIO"
	| "UPDATE_PORTFOLIO"
	| "CREATE_CV"
	| "UPDATE_CV"

export interface Activity {
	id: string
	type: ActivityType

	createdAt: string
}
