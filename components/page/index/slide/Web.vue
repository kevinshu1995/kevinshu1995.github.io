<template>
	<client-only>
		<swiper
			:options="swiperOptions"
			class="swiper-custom-active"
			style="overflow: visible"
		>
			<swiper-slide
				v-for="(page, index) in web.pages"
				:key="`web-${index}`"
			>
				<a :href="page.url" target="_blank">
					<PageIndexSlide
						:key="`web-${index}`"
						:img-src="
							getImageUrl(
								`${web.imageDetails.folderName}/${page.nickname}${web.imageDetails.imageFileExtension}`
							)
						"
						:href="page.url"
						:index="index + 1"
						:title="page.title"
						:content="page.description"
					/>
				</a>
			</swiper-slide>
		</swiper>
	</client-only>
</template>

<script>
export default {
	props: {
		web: {
			type: Object,
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

	methods: {
		getImageUrl(url) {
			return require(`~/static/images/${url}`)
		},
	},
}
</script>
