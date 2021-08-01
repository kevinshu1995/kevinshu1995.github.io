<template>
	<div class="row space-y-4">
		<div class="col w-full space-y-6">
			<div class="space-y-2">
				<h2>{{ design.content.title }}</h2>
				<div class="flex space-x-4">
					<h3 class="text-gray-500 text-base">
						{{ design.content.subtitle }}
					</h3>
					<div class="flex space-x-2">
						<template
							v-for="(badgeTool, badgeToolIndex) in design.tools"
						>
							<Badge
								:key="`badgeTool-${badgeToolIndex}`"
								:custom-classes="[
									'px-2',
									'text-sm',
									'tracking-wider',
									'flex',
									'items-center',
									'self-center',
								]"
								:content="badgeTool"
							/>
						</template>
					</div>
				</div>
			</div>
			<div class="space-y-2">
				<template v-for="(paragraph, index) in design.content.content">
					<p :key="`paragraph-${index}`">{{ paragraph }}</p>
				</template>
			</div>
			<div v-if="design.content.outSiteLinks" class="pt-3">
				<div class="flex space-x-2">
					<a
						v-for="(extraLink, index) in design.content
							.outSiteLinks"
						:key="`designExtraLink-${index}`"
						:href="extraLink.url"
						target="_blank"
					>
						<OutsiteLink
							:name="extraLink.name"
							:root-class="[
								'text-base',
								'underline',
								'text-yellow-500',
								'hover:text-yellow-600',
							]"
						/>
					</a>
				</div>
			</div>
		</div>
		<div class="col w-full">
			<nuxt-link
				to="/"
				class="inline-flex space-x-2 py-2 pl-2 pr-3 border border-primaryYellow-500 hover:text-white hover:bg-primaryYellow-500 transition-all"
			>
				<ArrowBackIcon />
				<span> 回到首頁 </span>
			</nuxt-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'PageDesign',

	props: {
		design: {
			type: Object,
			required: true,
		},
		allDesign: {
			type: Array,
			default() {
				return []
			},
		},
	},

	data() {
		return {
			swiperOptions: {
				slidesPerView: 1,
				spaceBetween: 20,
				autoplay: true,
			},
		}
	},
}
</script>
