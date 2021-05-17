<template>
	<div class="space-y-52 overflow-x-hidden" data-v-sticky-container>
		<!-- landing -->
		<pageIndexLanding />
		<div id="about" class="container">
			<div class="row space-y-20 sm:space-y-0">
				<!-- my photo -->
				<div class="col hidden sm:block sm:w-3/12 px-0 lg:px-8">
					<div v-sticky="stickyOptions">
						<img src="~images/me-2.jpg" alt="" />
					</div>
				</div>
				<!-- Content -->
				<div class="col w-full sm:w-9/12 space-y-20">
					<div class="row space-y-20 lg:space-y-0">
						<div class="col w-full lg:w-6/12">
							<Card title-zh="關於我" title-en="About me">
								<p>
									設計系背景，對於美感與使用者體驗有些涉獵。目前著重於研究前端領域，曾參與品牌形象官網、網站後台建置、教師課程管理平台、企業管理平台、計分程式...等的專案開發與頁面設計。
								</p>
								<p>
									主要使用 Vue.js 開發，負責 API
									串接、畫面動態效果、主題色彩配置、設計稿切版...等。
								</p>
								<p>
									CSS 框架使用過 Bootstrap
									4、Bulma，目前最喜歡使用 Tailwind CSS
									進行開發。
								</p>
								<template
									v-for="(link, index) in about.socialLinks"
								>
									<a
										:key="`about-socialLink-${index}`"
										class="flex items-center space-x-3 group hover:text-primaryBlue-500 transition-all"
										:href="link.href"
										target="_blank"
									>
										<iconWrap
											:icon="link.icon"
											:icon-class-ary="[
												'inline-block',
												'w-6',
												'h-6',
											]"
										/>
										<span
											class="text-dark group-hover:text-primaryBlue-500"
											>{{ link.title }}</span
										>
									</a>
								</template>
							</Card>
						</div>
						<div class="col w-full lg:w-6/12">
							<Card title-zh="部落格" title-en="Blog">
								<pageIndexBlogPosts />
							</Card>
						</div>
					</div>
					<div class="row space-y-20 lg:space-y-0">
						<div class="col w-full lg:w-6/12">
							<Card title-zh="技能" title-en="Skills">
								<ul
									class="list-connect hover-animate space-y-4"
								>
									<li
										v-for="(skill, index) in skills"
										:key="`skill-${index}`"
										class="whitespace-nowrap"
									>
										<div
											class="inline-flex flex-col whitespace-normal"
										>
											<h4 class="text-lg font-medium">
												{{ skill.title }}
											</h4>
											<TextsList
												class="text-base"
												:text-ary="skill.list"
											/>
										</div>
									</li>
								</ul>
							</Card>
						</div>
						<div class="col w-full lg:w-6/12">
							<Card title-zh="特別經歷" title-en="Highlight">
								<ul
									class="list-connect hover-animate space-y-4"
								>
									<li
										v-for="(event, index) in highlight"
										:key="`skill-${index}`"
										class="whitespace-nowrap"
									>
										<a
											:href="event.href"
											target="_blank"
											class="group inline-flex flex-col space-y-1 whitespace-normal text-current transition-all"
										>
											<div class="text-left space-x-4">
												<span class="text-gray-700">
													2021
												</span>
												<Badge
													v-if="event.status"
													:content="
														event.status.description
													"
													:variant="
														event.status.variant
													"
													:custom-classes="[
														'px-2.5',
														'font-normal',
														'text-sm',
														'tracking-wider',
														'rounded-full',
													]"
												/>
											</div>
											<h4
												class="flex space-x-2 text-lg font-medium text-gray-900 group-hover:text-primaryBlue-500"
											>
												<span>
													{{ event.title }}
												</span>
												<span
													class="relative group-hover:opacity-100 opacity-0 transition-all"
												>
													<ArrowUpRightCircleIcon
														class="relative top-1 animate-ping"
													/>
													<ArrowUpRightCircleIcon
														class="absolute top-1 transition-all"
													/>
												</span>
											</h4>
										</a>
									</li>
								</ul>
							</Card>
						</div>
					</div>
					<div class="row space-y-20 lg:space-y-0">
						<div class="col w-full">
							<Card
								title-zh="工作經歷"
								title-en="Work Experience"
							>
								<PageIndexWorkExperience
									:contents="experiences"
								/>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="web" class="container">
			<div class="row space-y-14">
				<div class="col w-full">
					<HugeTitle title-zh="網頁作品" title-en="Web" />
				</div>
				<div class="col w-full">
					<client-only>
						<swiper
							:options="swiperOptions.webGallery"
							class="swiper-custom-active"
							style="overflow: visible"
						>
							<swiper-slide
								v-for="(page, index) in webGallery.pages"
								:key="`webGallery-${index}`"
							>
								<PageIndexWebGallery
									:key="`webGallery-${index}`"
									:img-src="
										getImageUrl(
											`${webGallery.imageDetails.folderName}/${page.nickname}${webGallery.imageDetails.imageFileExtension}`
										)
									"
									:href="page.url"
									:index="index + 1"
									:title="page.title"
									:content="page.description"
								/>
							</swiper-slide>
						</swiper>
					</client-only>
				</div>
			</div>
		</div>
		<div id="design" class="container">
			<div class="row space-y-14">
				<div class="col w-full">
					<HugeTitle title-zh="設計" title-en="Design" />
				</div>
				<div class="col w-full">
					<client-only>
						<swiper
							ref="swiperDesign"
							:options="swiperOptions.design"
							class="swiper-custom-active"
							style="overflow: visible"
						>
							<swiper-slide
								v-for="(work, index) in design"
								:key="`design-${index}`"
								style="width: auto"
							>
								<PageIndexWebGallery
									:href="work.href"
									:index="index + 1"
									:img-src="work.imgSrc"
									:badges="work.badges"
									:img-height="250"
									:img-full="true"
								/>
							</swiper-slide>
						</swiper>
					</client-only>
				</div>
			</div>
		</div>
		<div id="photography" class="pt-24 relative overflow-hidden space-y-20">
			<div class="container">
				<div class="row">
					<div class="col w-full">
						<HugeTitle title-zh="攝影" title-en="Photography" />
					</div>
				</div>
			</div>
			<div
				ref="photography-image"
				class="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 grid-row-4"
			>
				<div
					v-for="(photo, index) in photography.photos"
					:key="`photo-${index}`"
					class="h-60 filter grayscale hover:grayscale-0 transition-all"
				>
					<img
						class="w-full h-full object-cover"
						:src="
							require(`~/static/images/photography/${photo.fileName}`)
						"
						alt="photography by Kevin Hsu"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { pages, imageDetails } from '~~/screenshots'
export default {
	name: 'Index',

	asyncData({ store }) {
		const getLinkValue = (name, key) =>
			store.getters['links/getLink'](name, key)
		return {
			about: {
				socialLinkClass: [
					'inline-block',
					'no-underline',
					'text-lg',
					'h-full',
					'flex',
					'items-center',
					'p-2',
					'transition-all',
				],
				socialLinks: [
					{
						href: getLinkValue('mail', 'href'),
						title: getLinkValue('mail', 'socialName'),
						target: true,
						linkType: 'icon',
						icon: getLinkValue('mail', 'icon'),
						linkClassAry: [
							'text-primaryYellow-500',
							'hover:text-primaryYellow-500',
							'w-5',
							'h-5',
							'md:w-6',
							'md:h-6',
						],
					},
					{
						href: getLinkValue('github', 'href'),
						title: getLinkValue('github', 'socialName'),
						target: true,
						linkType: 'icon',
						icon: getLinkValue('github', 'icon'),
						linkClassAry: [
							'text-primaryYellow-500',
							'hover:text-primaryYellow-500',
							'w-5',
							'h-5',
							'md:w-6',
							'md:h-6',
						],
					},
					{
						href: getLinkValue('linkedin', 'href'),
						title: getLinkValue('linkedin', 'socialName'),
						target: true,
						linkType: 'icon',
						icon: getLinkValue('linkedin', 'icon'),
						linkClassAry: [
							'text-primaryYellow-500',
							'hover:text-primaryYellow-500',
							'w-5',
							'h-5',
							'md:w-6',
							'md:h-6',
						],
					},
				],
			},
			skills: store.state.me.skills,
			highlight: store.state.me.highlight,
			experiences: store.state.me.experiences,
			webGallery: {
				imageDetails,
				pages,
			},
			design: store.state.me.design,
			photography: store.state.me.photography,
		}
	},

	data() {
		return {
			stickyOptions: {
				topSpacing: 100,
			},
			about: {
				socialLinkClass: [
					'inline-block',
					'no-underline',
					'text-lg',
					'h-full',
					'flex',
					'items-center',
					'p-2',
					'transition-all',
				],
				socialLinks: [],
			},
			skills: [],
			highlight: [],
			experiences: [],
			webGallery: [],
			design: [],
			photography: {},
			swiperOptions: {
				webGallery: {
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
				design: {
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
			},
		}
	},

	computed: {
		socialLinks() {
			return this.$store.state.links.socialLinks
		},
		swiperInstance_Design() {
			return this.$refs.swiperDesign.$swiper
		},
	},

	methods: {
		getImageUrl(url) {
			return require(`~/static/images/${url}`)
		},
	},
}
</script>

<style lang="postcss" scoped>
.is-affixed .inner-wrapper-sticky {
	@apply lg:ml-8;
}
.swiper-custom-active .swiper-slide-active .indexNumber,
.swiper-custom-active .swiper-slide-active .content {
	@apply text-primaryYellow-500;
}
</style>
