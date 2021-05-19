import Vue from 'vue'

// Make sure to pick a unique name for the flag
// so it won't conflict with any other mixin.
if (!Vue.__mixin__) {
	Vue.__mixin__ = true
	Vue.mixin({
		methods: {
			mixin_filterArrayById({ id, array }) {
				const result = {
					current: {},
					filtered: [],
				}
				array.forEach((eachItem) => {
					return eachItem.id === id
						? (result.current = eachItem)
						: (result.filtered = [...result.filtered, eachItem])
				})
				return result
			},
		},
	})
}
