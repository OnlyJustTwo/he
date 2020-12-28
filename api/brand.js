import {
	post,
	get,
	deleted,
	put
} from '@/libs/axios'

export const getBrandList = data => get("brand/index", data)

export const addBrand = data => post("brand/index", data)

export const editBrand = data => put("brand/index", data)

export const deleteBrand = data => deleted("brand/index", data)

export const batchdelete = data => deleted("brand/index", data)