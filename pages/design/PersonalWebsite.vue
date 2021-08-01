<template>
	<div class="container pt-8">
		<div class="row space-y-8 md:space-y-0">
			<div class="col w-full md:w-1/2">
				<div class="shadow-2xl">
					<img src="~images/design/personalWebsite.jpg" alt="" />
				</div>
			</div>
			<div class="col w-full md:w-1/2">
				<PageDesignMain :design="formatedDesign.current" />
			</div>
			<div class="col w-full pt-8">
				<PageDesignOtherDesign :design="formatedDesign.filtered" />
			</div>
		</div>
	</div>
</template>

<script>
import mixin from '~/plugins/mixins/index'
export default {
	name: 'DesignPersonalWebsite',
	layout: 'topSpacing',
	asyncData({ store }) {
		const designId = 9
		const filteredDesign = () => {
			return mixin.mixin_filterArrayById({
				id: designId,
				array: store.state.me.design,
			})
		}
		return {
			designId,
			formatedDesign: filteredDesign(),
		}
	},
	data() {
		return {
			designId: null,
			formatedDesign: {},
			swiperOptions: {
				slidesPerView: 1,
				spaceBetween: 20,
				autoplay: true,
				autoHeight: true,
			},
		}
	},
}
</script>
