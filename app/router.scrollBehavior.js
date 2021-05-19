export default function (to, from, savedPosition) {
	// savedPosition is only available for popstate navigations (back button)
	if (to.hash) {
		return { selector: to.hash }
	}
	if (savedPosition) {
		return savedPosition
	}
	return { x: 0, y: 0 }
}
