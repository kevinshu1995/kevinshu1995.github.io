<template>
	<div class="container pt-8">
		<div class="row space-y-10">
			<div class="col w-full md:w-1/2">
				<div class="shadow-2xl">
					<img src="~images/design/poster_4.jpg" alt="" />
				</div>
			</div>
			<div class="col w-full md:w-1/2">
				<PageDesign :design="formatedDesign.current" />
			</div>
			<div class="col w-full">
				<PageDesignOtherDesign :design="formatedDesign.filtered" />
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'DesignThuCoolCard',
	layout: 'topSpacing',
	data() {
		return {
			designId: 7,
			swiperOptions: {
				slidesPerView: 1,
				spaceBetween: 20,
				autoplay: true,
				autoHeight: true,
			},
		}
	},

	computed: {
		...mapState({
			design: (state) => state.me.design,
		}),
		formatedDesign() {
			return this.mixin_filterArrayById({
				array: this.design,
				id: this.designId,
			})
		},
	},
}
</script>
