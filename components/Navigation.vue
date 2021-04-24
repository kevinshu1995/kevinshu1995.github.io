<template>
	<nav
		id="header"
		class="fixed w-full z-30 top-0 backdrop-filter backdrop-blur-xl backdrop-grayscale shadow-lg"
	>
		<div
			class="relative z-10 w-full flex flex-wrap items-center justify-between"
		>
			<h1 class="flex items-center justify-center">
				<navLink href="#" link-type="head" title="首頁">
					Kevin Hsu
				</navLink>
			</h1>
			<div
				id="menu"
				class="flex items-center justify-end px-6 order-1 md:order-2"
			>
				<nav>
					<ul class="flex items-center justify-between">
						<li
							v-for="(links, index) in socialLinks"
							:key="`socialLinks-${index}`"
						>
							<navLink
								:href="links.href"
								:link-type="links.linkType"
								:icon="links.icon"
								:icon-class-ary="links.iconClassAry"
								:title="links.title"
							/>
						</li>
					</ul>
				</nav>
				<label
					for="menu-toggle"
					class="text-gray-700 hover:text-gray-900 hover:bg-gray-100 cursor-pointer block md:hidden p-4"
				>
					<iconBurger />
				</label>
				<input
					id="menu-toggle"
					v-model="isShowNav"
					class="hidden"
					type="checkbox"
				/>
			</div>
			<div
				class="w-full md:w-auto flex items-center justify-between md:justify-start mr-auto md:px-6 order-2 md:order-1 relative"
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
							>
							</navLink>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			isShowNav: true,
			siteLinks: [
				{
					href: '#',
					title: '前往 - 網頁 Web',
					linkType: 'normal',
					textContent: {
						zh: '網頁',
						en: 'Web',
					},
				},
				{
					href: '#',
					title: '前往 - 設計 Design',
					linkType: 'normal',
					textContent: {
						zh: '設計',
						en: 'Design',
					},
				},
				{
					href: '#',
					title: '前往 - 攝影 Photography',
					linkType: 'normal',
					textContent: {
						zh: '攝影',
						en: 'Photography',
					},
				},
			],
			socialLinks: [
				{
					href: '#',
					title: '前往 - 我的 Github',
					target: true,
					linkType: 'icon',
					icon: 'iconGithub',
					iconClassAry: ['w-4.5', 'h-4.5'],
				},
				{
					href: '#',
					title: '前往 - 我的 Blog',
					target: true,
					linkType: 'icon',
					icon: 'iconRss',
					iconClassAry: ['w-5', 'w-5'],
				},
				{
					href: '#',
					title: '聯繫我',
					target: true,
					linkType: 'icon',
					icon: 'iconMail',
					iconClassAry: ['w-5', 'w-5'],
				},
			],
		}
	},

	computed: {
		navMobileClass() {
			const result = this.isShowNav
				? ['hidden', 'md:block']
				: ['w-full', 'h-full']
			return result.join(' ')
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
	},
}
</script>
