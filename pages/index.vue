<template>
	<div class="space-y-0" data-v-sticky-container>
		<!-- landing -->
		<pageIndexLanding />
		<div id="about" class="container pt-24">
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
								<PageIndexBlogPosts />
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
								<PageIndexHighLight :highlight="highlight" />
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
					<div ref="webTitle">
						<HugeTitle title-zh="網頁作品" title-en="Web" />
					</div>
				</div>
				<div class="col w-full">
					<div ref="webContent">
						<PageIndexSlideWeb :web="webGallery" />
					</div>
				</div>
			</div>
		</div>
		<div id="design" class="container">
			<div class="row space-y-14">
				<div class="col w-full">
					<div ref="designTitle">
						<HugeTitle title-zh="設計" title-en="Design" />
					</div>
				</div>
				<div class="col w-full">
					<div ref="designContent">
						<PageIndexSlideDesign :design="design" />
					</div>
				</div>
			</div>
		</div>
		<div id="photography" class="relative overflow-hidden space-y-20">
			<div class="container">
				<div class="row">
					<div class="col w-full" data-scrollTrigger>
						<div ref="photographyTitle">
							<HugeTitle title-zh="攝影" title-en="Photography" />
						</div>
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
			gsap: {},
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

	mounted() {
		this.gsap = [...this.scrollTrigger()]
	},

	beforeDestroy() {
		this.gsap.forEach((gsap) => gsap.kill())
	},

	methods: {
		scrollTrigger() {
			const el = {
				titles: [
					this.$refs.webTitle,
					this.$refs.designTitle,
					this.$refs.photographyTitle,
				],
				contents: [
					this.$refs.webContent,
					this.$refs.designContent,
					this.$refs['photography-image'],
				],
			}
			const gsapTitles = el.titles.map((title) => {
				return this.$gsap.from(title, {
					// xPercent: -30,
					// autoAlpha: 0,
					// ease: 'expo.in',
					scrollTrigger: {
						once: true,
						trigger: title,
						start: 'top 95%',
						// end: '+=30%',
						onEnter: () => {
							title.classList.add('animate-fadeLeftIn')
						},
						// toggleActions: 'play none none reset',
						markers: true,
						scrub: true,
					},
				})
			})
			const gsapContents = el.contents.map((content) => {
				return this.$gsap.from(content, {
					// yPercent: 30,
					// autoAlpha: 0,
					// ease: 'expo.in',
					scrollTrigger: {
						once: true,
						trigger: content,
						start: 'top 95%',
						// end: '+=1%',
						onEnter: () => {
							content.classList.add('animate-fadeDownIn')
						},
						// toggleActions: 'play none none reset',
						markers: true,
						scrub: true,
					},
				})
			})
			return [...gsapTitles, ...gsapContents]
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
