<template>
	<div
		id="landing"
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
						class="absolute z-20 left-0 bottom-0 w-full h-full bg-gradient-to-b from-transparent to-primaryBlue-500 bg-opacity-70 md:hidden"
					></div>
				</div>
				<div
					class="row-start-1 row-end-9 col-start-2 md:col-start-6 lg:col-start-6 xl:col-start-5 col-end-13 flex flex-col items-start justify-end text-white filter drop-shadow space-y-2 md:space-y-4 pl-3 pb-5 md:pb-16 lg:pb-5 z-30"
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
						<span class="text-2xl md:text-3xl font-bold"
							>許文修</span
						>
						<span class="text-lg md:text-xl font-medium"
							>Wen-Shiu Hsu</span
						>
					</h2>
					<p
						class="font-thin md:text-lg pr-3"
						style="max-width: 480px"
					>
						我是許文修，目前是一名網頁設計師，曾經是平面設計師，目前致力於研究前端技術，寫網頁齁勝！
					</p>
					<div class="-mx-2">
						<div class="flex items-center space-x-3">
							<template v-for="link in socialLinks">
								<navLink
									:key="`social-${link.icon}`"
									:a-tag-class="socialLinkClass"
									:href="link.href"
									:link-type="link.linkType"
									:icon="link.icon"
									:icon-class-ary="link.linkClassAry"
									:title="link.title"
									:target="link.target"
								/>
							</template>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- <div
			class="row-start-1 row-end-9 col-start-1 md:col-end-4 bg-primaryYellow-500"
		></div> -->
		<div
			class="row-start-1 row-end-9 md:row-end-8 col-start-1 md:col-start-4 col-end-13 bg-gradient-to-r to-primaryBlue-500 from-primaryBlue-dark-500"
		></div>
		<div
			class="row-start-1 md:row-start-9 row-end-9 md:row-end-6 col-start-1 col-end-7 sm:col-end-8 md:col-end-13 lg:col-end-12 bg-gradient-to-l to-primaryYellow-500 from-primaryYellow-400"
		></div>
	</div>
</template>

<script>
export default {
	name: 'IndexLanding',

	data() {
		return {
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
					href: this.getLinkValue('github', 'href'),
					title: '前往 - 我的 Github',
					target: true,
					linkType: 'icon',
					icon: this.getLinkValue('github', 'icon'),
					linkClassAry: [
						'text-white',
						'hover:text-primaryBlue-500',
						'w-6',
						'h-6',
						'md:w-7',
						'md:h-7',
					],
				},
				{
					href: this.getLinkValue('mail', 'href'),
					title: '聯繫我',
					target: true,
					linkType: 'icon',
					icon: this.getLinkValue('mail', 'icon'),
					linkClassAry: [
						'text-white',
						'hover:text-primaryBlue-500',
						'w-6',
						'h-6',
						'md:w-7',
						'md:h-7',
					],
				},
				{
					href: this.getLinkValue('blog', 'href'),
					title: '前往 - 我的 Blog',
					target: true,
					linkType: 'icon',
					icon: this.getLinkValue('blog', 'icon'),
					linkClassAry: [
						'text-white',
						'hover:text-primaryBlue-500',
						'w-6',
						'h-6',
						'md:w-7',
						'md:h-7',
					],
				},
			],
		}
	},

	methods: {
		getLinkValue(name, key) {
			return this.$store.getters['links/getLink'](name, key)
		},
	},
}
</script>
