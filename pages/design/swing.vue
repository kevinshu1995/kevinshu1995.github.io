<template>
	<div class="container pt-8">
		<div class="row space-y-10">
			<div class="col w-full">
				<div class="shadow-lg">
					<client-only>
						<swiper ref="swiperDesign" :options="swiperOptions">
							<swiper-slide>
								<img src="~images/design/swing_1.jpg" alt="" />
							</swiper-slide>
							<swiper-slide>
								<img src="~images/design/swing_2.jpg" alt="" />
							</swiper-slide>
							<swiper-slide>
								<img src="~images/design/swing_3.jpg" alt="" />
							</swiper-slide>
						</swiper>
					</client-only>
				</div>
			</div>
			<div class="col w-full">
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
	name: 'DesignSwing',
	layout: 'topSpacing',
	asyncData({ store }) {
		const designId = 1
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
