'use strict';
exports.main = async (event, context) => {
	let {
		data,
		method,
		tool,
		db,
		_
	} = event;
	const collection = db.collection('activity')
	switch (method) {
		// 查询活动列表
		case 'get':
			if (data.id) {
				var res = (await collection.doc(data.id).get()).data[0];
				return {
					code: 0,
					msg: 'success',
					data: res
				}
			} else {
				var page = data.page ? data.page : 1,
					pageSize = data.pageSize ? data.pageSize : 100,
					search = {
						name: data.search ? new RegExp(data.search) : _.exists(true)
					},
					total = (await collection.where(search).count()).total,
					res = (await collection.aggregate()
						.match(search)
						.skip((page - 1) * pageSize)
						.limit(pageSize)
						.end()).data;
				return {
					code: 0,
					msg: 'success',
					data: {
						total,
						page,
						pageSize,
						data: res
					}
				}
			}
			break;
		case 'post':
			if (data._id) {
				delete data._id;
			}
			await collection.add(data);
			return {
				code: 0,
				msg: 'success'
			}
			break;
		case 'put':
			var id = data._id
			delete data._id;
			await collection.doc(id).update(data);
			return {
				code: 0,
				msg: 'success'
			}
			break;
		case 'delete':
			if (data.ids) {
				for (var item of data.ids) {
					const data = await db.collection('car').where({
						brand_id: item
					}).count()
					if (data.total > 0) {
						return {
							code: 204,
							msg: '当前品牌下还有在售车辆'
						};
					}
					await collection.doc(item).remove();
				}
				return {
					code: 0,
					msg: 'success'
				}
			} else if (data.id) {
				var res = await db.collection('car').where({
					brand_id: data.id
				}).count()
				if (res.total > 0) {
					return {
						code: 204,
						msg: '当前品牌下还有在售车辆'
					};
				}
				await collection.doc(data.id).remove();
				return {
					code: 0,
					msg: 'success'
				}
			}
			break;
		default:
			return {
				code: 404,
				msg: '请求方式错误: Request mode error'
			}
			break;
	}
}
