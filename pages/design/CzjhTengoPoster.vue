<template>
	<div class="container pt-8">
		<div class="row space-y-8 md:space-y-0">
			<div class="col w-full md:w-1/2">
				<div class="shadow-2xl">
					<client-only>
						<swiper ref="swiperDesign" :options="swiperOptions">
							<swiper-slide>
								<img
									src="~images/design/czjh-poster-combine.jpg"
									alt=""
								/>
							</swiper-slide>
							<swiper-slide>
								<img
									src="~images/design/cz-poster.jpg"
									alt=""
								/>
							</swiper-slide>
							<swiper-slide>
								<img
									src="~images/design/cz-poster-final_facebookCover.jpg"
									alt=""
								/>
							</swiper-slide>
							<swiper-slide>
								<img
									src="~images/design/cz-poster-square.jpg"
									alt=""
								/>
							</swiper-slide>
						</swiper>
					</client-only>
				</div>
			</div>
			<div class="col w-full md:w-1/2">
				<PageDesign :design="formatedDesign.current" />
			</div>
			<div class="col w-full pt-8">
				<PageDesignOtherDesign :design="formatedDesign.filtered" />
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	name: 'DesignCzjhTengoPoster',
	layout: 'topSpacing',
	data() {
		return {
			designId: 2,
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
