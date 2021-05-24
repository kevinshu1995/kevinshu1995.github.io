<template>
	<div class="container pt-8">
		<div class="row space-y-10 md:space-y-0">
			<div class="col w-full md:w-1/2 lg:w-1/3">
				<div class="shadow-2xl">
					<img src="~images/design/poster_4.jpg" alt="" />
				</div>
			</div>
			<div class="col w-full md:w-1/2 lg:w-2/3">
				<PageDesignMain :design="formatedDesign.current" />
			</div>
			<div class="col w-full">
				<PageDesignOtherDesign :design="formatedDesign.filtered" />
			</div>
		</div>
	</div>
</template>

<script>
import mixin from '~/plugins/mixins/index'
export default {
	name: 'DesignThuCoolCard',
	layout: 'topSpacing',
	asyncData({ store }) {
		const designId = 7
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
