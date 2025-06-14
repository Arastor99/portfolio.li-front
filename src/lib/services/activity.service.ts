import http from "@lib/http"

import { Activity } from "@common/types/activity"

export const getActivities = async ({
	offset = 0,
	limit = 10,
}): Promise<Activity[]> => {
	const response = await http.get<Activity[]>("/activities", {
		params: {
			offset,
			limit,
		},
	})

	return response.data
}
