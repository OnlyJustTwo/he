import {
	post,
	get,
	deleted,
	put
} from '@/libs/axios'

export const getShopList = data => get("shop/index", data)

export const addShop = data => post("shop/index", data)

export const editShop = data => put("shop/index", data)

export const deleteShop = data => deleted("shop/index", data)

export const batchdelete = data => deleted("shop/index", data)