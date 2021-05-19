<template>
	<client-only>
		<swiper
			:options="swiperOptions"
			class="swiper-custom-active"
			style="overflow: visible"
		>
			<swiper-slide
				v-for="(work, index) in design"
				:key="`design-${index}`"
				style="width: auto"
			>
				<nuxt-link :to="work.href">
					<PageIndexSlide
						:href="work.href"
						:title="work.content.title"
						:content="work.content.subtitle"
						:index="index + 1"
						:img-src="work.imgSrc"
						:badges="work.tools"
						:img-height="250"
						:img-full="true"
					/>
				</nuxt-link>
			</swiper-slide>
		</swiper>
	</client-only>
</template>

<script>
export default {
	props: {
		design: {
			type: Array,
			required: true,
		},
	},

	data() {
		return {
			swiperOptions: {
				slidesPerView: 1,
				spaceBetween: 20,
				autoplay: true,
				breakpoints: {
					768: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					1200: {
						slidesPerView: 3,
						spaceBetween: 50,
					},
				},
			},
		}
	},
}
</script>
