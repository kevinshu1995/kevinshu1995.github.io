<template>
	<div>
		<!-- landing -->
		<pageIndexLanding />
		<div class="container">
			<div class="row space-y-20 sm:space-y-0">
				<!-- my photo -->
				<div class="col hidden sm:block sm:w-3/12 px-0 lg:px-8">
					<img src="~images/me-2.jpg" alt="" />
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
									串接、畫面動態效果、主題色彩配置、設計稿切版、效能提升...等。
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
										class="flex items-center space-x-3 hover:text-primaryBlue"
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
										<span class="text-dark">{{
											link.title
										}}</span>
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
								<ul class="list-connect space-y-4">
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
								<ul class="list-connect space-y-4">
									<li
										v-for="(event, index) in highlight"
										:key="`skill-${index}`"
										class="whitespace-nowrap"
									>
										<a
											:href="event.href"
											target="_blank"
											class="inline-flex items-center space-x-4 whitespace-normal text-current"
										>
											<h4
												class="text-lg font-medium inline"
											>
												{{ event.title }}
											</h4>
											<Badge
												v-if="event.status"
												:content="event.status"
												:custom-classes="[
													'px-2.5',
													'font-normal',
													'text-sm',
													'tracking-wider',
													'rounded-full',
												]"
											/>
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
								<ul
									class="list-connect-noDot space-y-7 lg:space-y-6"
								>
									<li
										v-for="(
											experience, index
										) in experiences"
										:key="`experience-${index}`"
										class="grid grid-cols-12 items-start relative group"
									>
										<div
											class="dot col-start-1 col-span-1 row-start-1 row-span-2"
										>
											<div
												class="w-6 h-6 bg-white border-4 rounded-full transition-all"
												:class="
													index === 0
														? 'border-primaryYellow-500'
														: 'border-gray-400 group-hover:border-primaryYellow-300'
												"
											></div>
										</div>
										<p
											class="whitespace-nowrap col-start-2 col-span-2 row-start-1 font-medium mb-1 lg:mb-0"
											:class="
												index !== 0
													? 'text-gray-400 group-hover:text-gray-500 transition-all'
													: 'text-gray-400'
											"
										>
											{{ experience.time.start }} -
											{{ experience.time.end }}
										</p>
										<div
											class="flex flex-col col-start-2 lg:col-start-4 col-end-13 row-start-2 lg:row-start-1"
											:class="
												index !== 0
													? 'text-gray-400 group-hover:text-dark transition-all'
													: ''
											"
										>
											<h4
												class="whitespace-nowrap text-lg"
											>
												{{ experience.jobTitle }}
												{{ experience.company }}
											</h4>
											<template
												v-for="(
													content, descriptionIndex
												) in experience.description"
											>
												<p
													v-if="
														typeof content ===
														'string'
													"
													:key="`experience-paraphrase-${descriptionIndex}`"
												>
													{{ content }}
												</p>
												<ol
													v-if="
														typeof content ===
														'array'
													"
													:key="`experience-paraphrase-${descriptionIndex}`"
												>
													<li
														v-for="(
															list, listIndex
														) in content"
														:key="`experience-list-${listIndex}`"
													>
														{{ list }}
													</li>
												</ol>
											</template>
										</div>
									</li>
								</ul>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="col w-full">
					<div class="flex flex-col">
						<h2>Web</h2>
						<h3>網頁作品</h3>
					</div>
				</div>
			</div>
		</div>
		<div class="pb-96 mb-96">test1</div>
	</div>
</template>

<script>
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
			skills: [
				{
					title: '網頁前端',
					list: [
						'HTML',
						'Pug',
						'CSS',
						'SCSS',
						'Javascript',
						'Bootstrap4',
						'Tailwindcss',
						'Bulma',
						'Vue.js',
						'Vuex',
						'Vue Router',
						'Gulp',
						'Webpack',
						'Webpack',
						'Git',
						'Git flow',
					],
				},
				{
					title: '多媒體設計',
					list: ['Photoshop', 'illustrator', 'Adobe XD', 'Figma'],
				},
			],
			highlight: [
				{
					title: 'Material Design 文件協同翻譯',
					href: 'https://material-design.hexschool.io/',
					status: '',
				},
				{
					title: 'Tailwindcss.tw 文件協同翻譯',
					href: '#',
					status: '進行中',
				},
			],
			experiences: [
				{
					time: {
						start: '2020',
						end: 'current',
					},
					company: '佳音事業股份有限公司',
					jobTitle: '網頁設計',
					description: [
						'前端切版動畫效果、UI/UX 設計與優化、API串接、Git 協作 / Git flow，專案包含活動網頁製作、後台CMS撰寫、網站維護，部分專案使用 Vue.js 框架開發。',
					],
				},
				{
					time: {
						start: '2019',
						end: '2019',
					},
					company: '原聚股份有限公司',
					jobTitle: '平面設計',
					description: [
						'工作內容包含平面與行銷。',
						[
							'平面主要執行品牌手冊、店面視覺設定、廣宣，其中包含設計與發包。',
							'行銷面協助店面行銷活動、網路行銷，包含 Facebook, Instagram, line@, 官方網站...等的管理與維護。',
							'加盟展擔任公司春季加盟展時主要的對外窗口，處理參展設備、流程、視覺、活動等。',
						],
					],
				},
				{
					time: {
						start: '2016',
						end: '2017',
					},
					company: '原聚股份有限公司',
					jobTitle: '平面設計',
					description: [
						'擔任一年正職設計，使用 Illustrator、Photoshop 製作商品開版圖、商品外觀平面設計。公司商品以布類家飾產品為主，理解工廠製作的限制的同時兼顧視覺效果來製作圖面。後因受主管青睞，與資深業務外派至明尼蘇達州兩周，協助業務開會與市場調查，也藉此見識美式風格與文化薰陶，進而了解商品設計師背後蘊含的深厚文化背景。',
					],
				},
			],
		}
	},

	data() {
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
				socialLinks: [],
			},
			skills: [],
			highlight: [],
			experiences: [],
		}
	},

	computed: {
		socialLinks() {
			return this.$store.state.links.socialLinks
		},
	},

	methods: {},
}
</script>
