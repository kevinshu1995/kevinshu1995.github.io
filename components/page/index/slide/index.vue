<template>
	<div class="inline-flex flex-col space-y-4 group">
		<div class="p-2 image-border select-none">
			<div class="relative">
				<img
					:class="imgClass"
					:style="imgStyle"
					:src="img"
					alt=""
					@error="imageLoadError"
				/>
				<span
					class="indexNumber absolute z-0 left-0 bottom-0 mx-1 my-1 font-black text-6xl italic leading-none text-primaryBlue-500 group-hover:text-primaryYellow-500 transition-all"
				>
					{{ indexDigit }}
				</span>
			</div>
			<div
				class="hidden group-hover:block absolute z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
			>
				<div
					class="inline-flex items-center space-x-2 px-3 bg-primaryBlue-500 text-white text-lg font-bold"
				>
					<span class="inline-block pb-1"> 去看看</span>
					<ArrowUpRightCircleIcon />
				</div>
			</div>
		</div>
		<div class="space-y-1 pl-2">
			<div v-if="badges.length > 0" class="flex flex-wrap">
				<template v-for="(badge, badgeIndex) in badges">
					<Badge
						:key="`gallery-${badge}-${badgeIndex}`"
						:content="badge"
						:extra-classes="['mr-2', 'mb-1']"
					/>
				</template>
			</div>
			<div
				v-if="title || content"
				class="content max-w-xs text-primaryBlue-500 group-hover:text-primaryYellow-500 transition-all"
			>
				<h4 v-if="title">{{ title }}</h4>
				<p v-if="content">{{ content }}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		href: {
			type: [String, Object],
			required: true,
		},
		target: {
			type: Boolean,
			default: true,
		},
		index: {
			type: [String, Number],
			required: true,
		},
		imgSrc: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			default: '',
		},
		content: {
			type: String,
			default: '',
		},
		badges: {
			type: Array,
			default() {
				return []
			},
		},
		imgFull: {
			type: Boolean,
			default: false,
		},
		imgHeight: {
			type: Number,
			default() {
				return 0
			},
		},
	},

	data() {
		return {
			img: '',
		}
	},

	computed: {
		linkTarget() {
			return this.target ? '_blank' : ''
		},
		indexDigit() {
			const index = Number(this.index)
			if (isNaN(index)) return '00'
			return index < 10 ? `0${index}` : `${index}`
		},
		imgHeightStyle() {
			return this.imgHeight !== 0
				? ['max-width: unset', `height: ${this.imgHeight}px`]
				: []
		},
		imgFullSize() {
			return this.imgFull ? ['w-full', 'h-full', 'object-cover'] : []
		},
		imgStyle() {
			return [...this.imgHeightStyle].join(';')
		},
		imgClass() {
			return [
				'filter',
				'grayscale',
				'group-hover:blur',
				'brightness-105',
				'transition-all',
				...this.imgFullSize,
			].join(' ')
		},
	},

	mounted() {
		this.img = this.imgSrc
	},

	methods: {
		imageLoadError() {
			this.img = require('~/static/images/error-image.svg')
		},
	},
}
</script>

<style lang="postcss" scoped>
.image-border {
	@apply relative;
}
/* .image-border::before, */
.image-border::after {
	@apply absolute -z-1 w-1/2 h-1/2 bg-primaryBlue-500 group-hover:bg-primaryYellow-500 transition-all;
	content: '';
}
/* .image-border::before {
	@apply left-0 top-0;
} */
.image-border::after {
	@apply right-0 bottom-0;
}
</style>
