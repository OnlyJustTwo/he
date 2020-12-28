import {
	post,
	get,
	deleted,
	put
} from '@/libs/axios'

export const getActivityList = data => get("activity/index", data)

export const addActivity = data => post("activity/index", data)

export const editActivity = data => put("activity/index", data)

export const deleteActivity = data => deleted("activity/index", data)

export const batchdelete = data => deleted("activity/index", data)