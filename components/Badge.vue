<template>
	<span :class="classString">
		{{ content }}
	</span>
</template>

<script>
export default {
	props: {
		content: {
			type: String,
			required: true,
		},
		variant: {
			type: String,
			default: 'bg-primaryYellow-500',
		},
		extraClasses: {
			type: Array,
			default() {
				return []
			},
		},
		customClasses: {
			type: Array,
			default() {
				return []
			},
		},
	},
	computed: {
		variants() {
			switch (this.variant) {
				case 'bg-primaryYellow-500':
					return ['bg-primaryYellow-500', 'text-white']
				case 'bg-gray-400':
					return ['bg-gray-400', 'text-white']
				default:
					return ['bg-primaryYellow-500', 'text-white']
			}
		},
		classString() {
			if (this.customClasses.length > 0)
				return [...this.customClasses, ...this.variants]
			const defaultClasses = ['px-2', 'text-sm', 'tracking-wider']
			return [...defaultClasses, ...this.extraClasses, ...this.variants]
		},
	},
}
</script>
