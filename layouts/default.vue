<template>
	<div>
		<Navigation />
		<div ref="scrollBody">
			<section data-scroll-section>
				<Nuxt />
			</section>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},
	mounted() {
		const _self = this
		this.lmS = new this.LocomotiveScroll({
			el: _self.$refs.scrollBody,
			smooth: true,
			smoothMobile: true,
			getDirection: true,
		})
	},
}
</script>
