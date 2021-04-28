<template>
	<div>
		<!-- landing -->
		<div
			class="h-screen grid grid-flow-col grid-cols-12 grid-rows-9 select-none relative"
		>
			<div class="absolute left-0 top-0 w-full h-full">
				<div
					class="grid grid-flow-col grid-cols-12 grid-rows-9 h-full relative"
				>
					<div
						class="row-start-2 md:row-start-2 row-end-9 md:row-end-9 col-start-1 md:col-start-1 col-end-13 md:col-end-6 lg:col-end-6 xl:col-end-5 flex items-end justify-end z-10"
					>
						<div class="h-full md:h-5/6">
							<img
								class="h-full w-auto object-cover object-right"
								src="~images/me.png"
								alt="Kevin's Picture"
							/>
						</div>
					</div>
					<div
						class="row-start-5 row-end-9 col-start-1 col-end-13 relative z-20"
					>
						<div
							class="absolute z-20 left-0 bottom-0 w-full h-full bg-gradient-to-b from-transparent to-primaryBlue bg-opacity-70 md:hidden"
						></div>
					</div>
					<div
						class="row-start-1 row-end-9 col-start-2 md:col-start-6 lg:col-start-6 xl:col-start-5 col-end-13 flex flex-col items-start justify-end text-white filter drop-shadow space-y-2 md:space-y-4 pl-3 pb-5 z-30"
					>
						<h1
							class="font-black flex flex-col text-8xl xs:text-9xl sm:text-9xl md:text-11xl lg:text-15xl xl:text-18xl 2xl:text-19xl leading-none -ml-1 sm:-ml-2 md:-ml-2.5 lg:-ml-4 xl:-ml-5"
						>
							<span
								class="transform translate-y-3 md:translate-y-5 lg:translate-y-10"
								>Kevin</span
							>
							<span>Hsu</span>
						</h1>
						<h2 class="space-x-2">
							<span class="text-2xl md:text-3xl font-medium"
								>許文修</span
							>
							<span class="text-lg md:text-xl font-thin"
								>Wen-Shiu Hsu</span
							>
						</h2>
						<p
							class="font-thin md:text-lg pr-3"
							style="max-width: 480px"
						>
							我是許文修，目前是一名網頁設計師，目前致力研究前端技術，也曾經是平面設計師，畢業於東海大學工業設計學系。
						</p>
						<div class="-mx-2">
							<div class="flex items-center space-x-3">
								<template v-for="link in landing.socialLinks">
									<navLink
										:key="`social-${link.icon}`"
										:a-tag-class="landing.socialLinkClass"
										:href="link.href"
										:link-type="link.linkType"
										:icon="link.icon"
										:icon-class-ary="link.linkClassAry"
										:title="link.title"
									/>
								</template>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				class="row-start-1 row-end-9 col-start-1 md:col-end-4 bg-primaryYellow"
			></div>
			<div
				class="row-start-1 row-end-9 col-start-1 md:col-start-4 col-end-13 bg-gradient-to-r to-primaryBlue from-primaryBlue-dark"
			></div>
			<!-- <div
				class="row-start-9 row-end-10 col-start-1 col-end-11 md:col-end-10 bg-gradient-to-r from-primaryYellow to-transparent"
			></div> -->
		</div>
		<div class="container">
			<div class="flex -mx-2">
				<!-- my photo -->
				<div class="px-2 w-3/12"></div>
				<!-- Content -->
				<div class="px-2 w-9/12">
					<div class="flex -mx-2">
						<div class="px-2 w-full lg:w-6/12 space-y-4">
							<div
								class="flex items-end space-x-3 text-primaryBlue"
							>
								<h3>About me</h3>
								<p>關於我</p>
							</div>
							<div class="flex flex-col space-y-4">
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
							</div>
						</div>
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
	asyncData({ app, params, store }) {
		const getLinkValue = (name, key) =>
			store.getters['links/getLink'](name, key)
		return {
			landing: {
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
						href: getLinkValue('github', 'href'),
						title: '前往 - 我的 Github',
						target: true,
						linkType: 'icon',
						icon: getLinkValue('github', 'icon'),
						linkClassAry: [
							'text-white',
							'hover:text-primaryYellow',
							'w-6',
							'h-6',
							'md:w-7',
							'md:h-7',
						],
					},
					{
						href: getLinkValue('mail', 'href'),
						title: '聯繫我',
						target: true,
						linkType: 'icon',
						icon: getLinkValue('mail', 'icon'),
						linkClassAry: [
							'text-white',
							'hover:text-primaryYellow',
							'w-6',
							'h-6',
							'md:w-7',
							'md:h-7',
						],
					},
					{
						href: getLinkValue('blog', 'href'),
						title: '前往 - 我的 Blog',
						target: true,
						linkType: 'icon',
						icon: getLinkValue('blog', 'icon'),
						linkClassAry: [
							'text-white',
							'hover:text-primaryYellow',
							'w-6',
							'h-6',
							'md:w-7',
							'md:h-7',
						],
					},
				],
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
				socialLinks: [
					{
						href: getLinkValue('mail', 'href'),
						title: getLinkValue('mail', 'socialName'),
						target: true,
						linkType: 'icon',
						icon: getLinkValue('mail', 'icon'),
						linkClassAry: [
							'text-primaryYellow',
							'hover:text-primaryYellow',
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
							'text-primaryYellow',
							'hover:text-primaryYellow',
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
							'text-primaryYellow',
							'hover:text-primaryYellow',
							'w-5',
							'h-5',
							'md:w-6',
							'md:h-6',
						],
					},
				],
			},
		}
	},

	data() {
		return {
			landing: {},
			about: {},
		}
	},

	computed: {
		socialLinks() {
			return this.$store.state.links.socialLinks
		},
	},
}
</script>
