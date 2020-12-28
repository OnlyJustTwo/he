import {
	post,
	get,
	deleted,
	put
} from '@/libs/axios'

export const getCarList = data => get("car/index", data)

export const addCar = data => post("car/index", data)

export const editCar = data => put("car/index", data)

export const deleteCar = data => deleted("car/index", data)

export const batchdelete = data => deleted("car/index", data)