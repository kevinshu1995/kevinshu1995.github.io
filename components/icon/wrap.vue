<template>
	<span class="inline-block font-medium text-base">
		<span :class="iconClass">
			<span :is="icon" :size="size" :stroke-width="strokeWidth"></span>
		</span>
	</span>
</template>

<script>
export default {
	props: {
		icon: {
			type: String,
			default: 'iconRss',
		},
		iconClassAry: {
			type: Array,
			default() {
				return []
			},
		},
		size: {
			type: String,
			default: '24',
		},
		strokeWidth: {
			type: Number,
			default: 2,
		},
	},

	computed: {
		iconClass() {
			const defaultClass = ['inline-block', 'flex', 'items-center']
			const result = [...defaultClass, ...this.iconClassAry].join(' ')
			return result
		},
	},
}
</script>
