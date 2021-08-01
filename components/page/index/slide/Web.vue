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
				class="space-y-2"
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
				<div class="flex text-sm space-x-2">
					<a
						v-for="(webOutSite, webOutSiteIndex) in page.links"
						:key="`web-outSite-${webOutSiteIndex}`"
						class="px-2 flex items-center space-x-1 hover:text-yellow-700"
						target="_blank"
						:href="webOutSite.url"
					>
						<span>
							{{ webOutSite.name }}
						</span>
						<ArrowUpRightCircleIcon class="w-4" />
					</a>
				</div>
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
