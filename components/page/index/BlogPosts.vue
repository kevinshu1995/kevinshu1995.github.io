<template>
	<div class="relative custom-hoverGroup">
		<client-only>
			<template v-if="blogPosts.length > 0">
				<div
					class="absolute left-1/2 bottom-10 z-20 transform -translate-x-1/2 custom-hoverGroup:hidden"
				>
					<div
						class="bg-white bg-opacity-90 shadow-lg rounded-full w-10 h-10 flex items-center justify-center animate-bounce"
					>
						<chevronsDownIcon
							class="text-primaryYellow-500 w-8 h-8"
						/>
					</div>
				</div>

				<swiper
					:options="swiperOptions"
					class="divide-y divide-gray-100 -my-3 overflow-y-auto z-10"
					style="max-height: 50vh"
				>
					<div slot="pagination" class="swiper-pagination"></div>
					<swiper-slide
						v-for="(post, index) in blogPosts"
						:key="`blogPost-${index}`"
					>
						<a
							:href="post.link._text"
							class="card group hover:bg-gray-50 hover:px-2 hover:shadow inline-block py-3 w-full relative transition-all overflow-hidden"
						>
							<div class="flex flex-col space-y-1 relative z-0">
								<div class="header">
									<div
										class="flex items-center space-x-2 text-base"
									>
										<Badge
											v-if="index === 0"
											content="NEW"
										/>
										<p class="text-gray-400 text-sm">
											{{
												getFullTime(post.pubDate._text)
											}}
										</p>
									</div>
								</div>
								<div class="body flex flex-col">
									<h4
										class="font-bold truncate text-lg text-gray-900 group-hover:text-primaryBlue"
									>
										{{ post.title._text }}
									</h4>
									<p class="truncate text-gray-900">
										{{
											getTextContent(
												post.description._text
											)
										}}
									</p>
								</div>
								<div class="footer flex space-x-2 text-sm">
									<span
										v-for="(
											category, categoryIndex
										) in filterNotRepeat(
											post.category,
											'_text'
										)"
										:key="`blogCategory-${categoryIndex}`"
										class="text-gray-400"
									>
										#{{ category }}
									</span>
								</div>
							</div>
							<span
								class="group-hover:translate-x-0 absolute z-10 right-4 bottom-4 bg-primaryBlue-dark-500 text-white px-2 py-1 transform translate-x-96 transition-all"
							>
								前往閱讀
							</span>
						</a>
					</swiper-slide>
					<p
						class="text-center py-5 font-bold text-sm text-primaryBlue"
					>
						文章列表到尾端了，我會努力的 QQ
					</p>
				</swiper>
			</template>
			<template v-else>
				<p class="font-bold text-lg text-red-700">
					抱歉，取得文章列表時發生了問題。
				</p>
			</template>
		</client-only>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'BlogPosts',

	data() {
		return {
			swiperOptions: {
				direction: 'vertical',
				slidesPerView: 'auto',
				spaceBetween: 10,
				autoplay: true,
				pagination: {
					clickable: true,
				},
			},
		}
	},

	computed: {
		...mapGetters({
			blogPosts: 'data/blog/blogPosts_noAbout',
		}),
	},

	mounted() {
		this.$store.dispatch('data/blog/getPosts')
	},

	methods: {
		getFullTime(time, format = 'ddd, DD MMM YYYY') {
			return this.$dayjs(time).format(format)
		},

		getTextContent(stringTarget) {
			return stringTarget.replace(/<\/?[^>]+>/gi, ' ')
		},

		filterNotRepeat(data, key) {
			const filterData = data.reduce((accum, current) => {
				const targetKey = current[key]
				if (!accum[targetKey]) {
					accum[targetKey] = targetKey
					return accum
				} else {
					return accum
				}
			}, {})
			return Object.keys(filterData)
		},
	},
}
</script>
