<template>
	<div
		id="landing"
		class="h-screen grid grid-flow-col grid-cols-12 grid-rows-9 select-none relative"
	>
		<div class="absolute z-30 left-0 top-0 w-full h-full">
			<div
				class="grid grid-flow-col grid-cols-12 grid-rows-9 h-full relative"
			>
				<div
					class="row-start-2 md:row-start-2 row-end-10 sm:row-end-9 md:row-end-9 col-start-1 md:col-start-1 col-end-13 md:col-end-6 lg:col-end-6 xl:col-end-5 flex items-end justify-end z-10"
				>
					<div class="h-full md:h-5/6 overflow-hidden">
						<img
							ref="photo-me"
							class="h-full w-auto object-cover object-right"
							src="~images/me_2.png"
							alt="Kevin's Picture"
						/>
					</div>
				</div>
				<div
					class="row-start-5 row-end-10 sm:row-end-9 col-start-1 col-end-13 relative z-20"
				>
					<div
						class="absolute z-20 left-0 bottom-0 w-full h-full bg-gradient-to-b from-transparent to-primaryBlue-500 bg-opacity-70 md:hidden"
					></div>
				</div>
				<div
					class="row-start-1 row-end-9 sm:row-end-8 col-start-2 md:col-start-6 lg:col-start-6 xl:col-start-5 col-end-13 flex flex-col items-start justify-end text-white filter drop-shadow space-y-2 md:space-y-4 pl-3 pb-5 z-30"
				>
					<h2
						class="font-black flex flex-col text-7xl xs:text-9xl sm:text-9xl md:text-10xl lg:text-13xl 2xl:text-17xl leading-none -ml-1 sm:-ml-2 md:-ml-2.5 lg:-ml-4 xl:-ml-5"
					>
						<span
							ref="first-name"
							class="transform translate-y-3 md:translate-y-5 lg:translate-y-10"
							>Kevin</span
						>
						<span ref="last-name">Hsu</span>
					</h2>
					<h2 ref="second-name" class="space-x-2">
						<span class="text-2xl md:text-3xl font-bold"
							>許文修</span
						>
						<span class="text-lg font-medium">Wen-Shiu Hsu</span>
					</h2>
					<p
						ref="description"
						class="font-thin text-base pr-3"
						style="max-width: 480px"
					>
						我是許文修，目前是一名網頁設計師，曾經是平面設計師，目前致力於研究前端技術，寫網頁齁勝！
					</p>
				</div>
				<div
					class="row-start-9 sm:row-start-8 row-end-10 sm:row-end-9 col-start-2 md:col-start-6 lg:col-start-6 xl:col-start-5 col-end-13 flex flex-col items-start justify-end text-white filter drop-shadow space-y-2 md:space-y-4 pl-3 z-30"
				>
					<div class="-mx-2 h-full">
						<div
							ref="socials"
							class="flex items-center space-x-3 h-full"
						>
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
			ref="upper-bg"
			class="relative z-20 row-start-1 row-end-10 sm:row-end-9 md:row-end-8 col-start-1 md:col-start-4 col-end-13 bg-gradient-to-r to-primaryBlue-500 from-primaryBlue-dark-500"
		></div>
		<div
			ref="low-bg"
			class="relative z-10 row-start-1 md:row-start-9 row-end-10 sm:row-end-9 md:row-end-7 xl:row-end-6 col-start-1 col-end-7 sm:col-end-8 md:col-end-13 lg:col-end-12 bg-gradient-to-l to-primaryYellow-500 from-primaryYellow-400"
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

	mounted() {
		this.initialAnimation()
	},

	methods: {
		getLinkValue(name, key) {
			return this.$store.getters['links/getLink'](name, key)
		},

		initialAnimation() {
			const el = {
				'upper-bg': this.$refs['upper-bg'],
				'low-bg': this.$refs['low-bg'],
				'photo-me': this.$refs['photo-me'],
				texts: [
					this.$refs['first-name'],
					this.$refs['last-name'],
					this.$refs['second-name'],
					this.$refs.description,
					this.$refs.socials,
				],
			}
			const tl = this.$gsap.timeline()
			tl.set(el.texts, { xPercent: 30, autoAlpha: 0 })
				.set([el['upper-bg'], el['low-bg'], el['photo-me']], {
					autoAlpha: 0.5,
				})
				.set(el['upper-bg'], { xPercent: 30, yPercent: -30 })
				.set(el['low-bg'], { xPercent: -30, yPercent: 30 })
				.set([el['photo-me']], { yPercent: 30 })
				.to([el['upper-bg'], el['low-bg']], {
					xPercent: 0,
					yPercent: 0,
					autoAlpha: 1,
					ease: 'expo.out',
					duration: 0.7,
				})
				.to(
					[el['photo-me']],
					{ yPercent: 0, duration: 0.7, autoAlpha: 1 },
					'<'
				)
				.to(
					el.texts,
					{ xPercent: 0, autoAlpha: 1, stagger: 0.2, duration: 0.7 },
					'>'
				)
			return tl
		},
	},
}
</script>
