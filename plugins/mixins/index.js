export default {
	mixin_filterArrayById({ id, array }) {
		const result = {
			current: {},
			filtered: [],
		}
		if (id !== undefined && array !== undefined) {
			array.forEach((eachItem) => {
				return eachItem.id === id
					? (result.current = eachItem)
					: (result.filtered = [...result.filtered, eachItem])
			})
		}
		return result
	},
}
