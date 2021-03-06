<template>
	<nav
		id="header"
		class="fixed w-full z-40 top-0 bg-white bg-opacity-80 backdrop-filter backdrop-blur shadow-lg"
	>
		<div
			class="relative z-10 w-full flex flex-wrap items-center justify-between self-stretch"
		>
			<h1 class="flex justify-center self-stretch">
				<navLink
					:href="{ name: 'index', hash: '#landing' }"
					link-type="head"
					title="首頁"
					@scrollOnStart="scrollOnStart"
				>
					Kevin Hsu
				</navLink>
			</h1>
			<div
				id="menu"
				class="flex self-stretch px-3 sm:px-6 order-1 md:order-2"
			>
				<nav class="self-stretch">
					<ul class="h-full flex items-center justify-between">
						<li
							v-for="(links, index) in socialLinks"
							:key="`socialLinks-${index}`"
							class="h-full flex items-center"
						>
							<navLink
								:href="links.href"
								:link-type="links.linkType"
								:icon="links.icon"
								:icon-class-ary="links.iconClassAry"
								:title="links.title"
								:target="links.target"
								@scrollOnStart="scrollOnStart"
							/>
						</li>
					</ul>
				</nav>
				<label
					for="menu-toggle"
					class="text-gray-700 hover:text-gray-900 hover:bg-gray-100 cursor-pointer flex items-center md:hidden p-2 sm:p-4"
				>
					<menu2Icon />
				</label>
				<input
					id="menu-toggle"
					v-model="isShowNav"
					class="hidden"
					type="checkbox"
				/>
			</div>
			<div
				class="h-full w-full md:w-auto flex items-center justify-between md:justify-start mr-auto md:px-6 order-2 md:order-1 relative"
			>
				<nav class="w-full md:w-auto" :class="navMobileClass">
					<ul
						class="w-full md:w-auto flex flex-col md:flex-row items-center md:justify-between"
					>
						<li
							v-for="(links, index) in siteLinks"
							:key="`siteLinks-${index}`"
							class="w-full md:w-auto"
						>
							<navLink
								:href="links.href"
								:link-type="links.linkType"
								:content="links.textContent"
								:title="links.title"
								@scrollOnStart="scrollOnStart"
							/>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
	data() {
		return {
			isShowNav: true,
			siteLinks: [
				{
					href: {
						name: 'index',
						hash: '#web',
					},
					title: '前往 - 網頁 Web',
					linkType: 'normal',
					textContent: {
						zh: '網頁',
						en: 'Web',
					},
				},
				{
					href: {
						name: 'index',
						hash: '#design',
					},
					title: '前往 - 設計 Design',
					linkType: 'normal',
					textContent: {
						zh: '設計',
						en: 'Design',
					},
				},
				{
					href: {
						name: 'index',
						hash: '#photography',
					},
					title: '前往 - 攝影 Photography',
					linkType: 'normal',
					textContent: {
						zh: '攝影',
						en: 'Photography',
					},
				},
			],
		}
	},

	computed: {
		...mapGetters(['links/getLink']),
		navMobileClass() {
			const result = this.isShowNav
				? ['hidden', 'md:block']
				: ['w-full', 'h-full']
			return result.join(' ')
		},
		socialLinks() {
			return [
				{
					href: this['links/getLink']('github', 'href'),
					title: '前往 - 我的 Github',
					target: true,
					linkType: 'icon',
					icon: this['links/getLink']('github', 'icon'),
					iconClassAry: ['w-5', 'h-5'],
				},
				{
					href: this['links/getLink']('blog', 'href'),
					title: '前往 - 我的 Blog',
					target: true,
					linkType: 'icon',
					icon: this['links/getLink']('blog', 'icon'),
					iconClassAry: ['w-5', 'w-5'],
				},
				{
					href: this['links/getLink']('mail', 'href'),
					title: '聯繫我',
					target: true,
					linkType: 'icon',
					icon: this['links/getLink']('mail', 'icon'),
					iconClassAry: ['w-5', 'w-5'],
				},
			]
		},
	},

	mounted() {
		this.$nextTick(function () {
			window.addEventListener('resize', this.throttleShowNav)
			this.throttleShowNav()
		})
	},

	beforeDestroy() {
		window.removeEventListener('resize', this.throttleShowNav)
	},

	methods: {
		throttleShowNav() {
			return this.$_.throttle(this.fireWhenResize, 1000)
		},
		fireWhenResize(event) {
			this.isShowNav = true
		},
		scrollOnStart(element) {
			return !this.isShowNav ? (this.isShowNav = true) : null
		},
	},
}
</script>
