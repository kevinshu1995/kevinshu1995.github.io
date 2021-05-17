<template>
	<div class="container">
		<div class="row space-y-8">
			<div class="col w-full">
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
			<div class="col w-full">
				<PageDesign :design="banner" />
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'DesignSwing',
	layout: 'topSpacing',
	data() {
		return {
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
		banner() {
			return this.design.find((target) => {
				return target.id === 1
			})
		},
	},
}
</script>
