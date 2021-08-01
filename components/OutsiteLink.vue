<template>
	<h6 :class="dealedRootClass">
		<span>
			{{ name }}
		</span>
		<span class="relative hidden sm:block transition-all">
			<span
				class="relative inline-block top-0 opacity-0 group-hover:opacity-100"
			>
				<ArrowUpRightCircleIcon class="animate-ping w-5" />
			</span>
			<ArrowUpRightCircleIcon class="absolute top-0 w-5 transition-all" />
		</span>
	</h6>
</template>

<script>
export default {
	name: 'OutsiteLink',
	props: {
		name: {
			type: String,
			default() {
				return ''
			},
		},
		rootClass: {
			type: Array,
			default() {
				return []
			},
		},
	},
	computed: {
		dealedRootClass() {
			const baseClass = ['flex', 'space-x-2', 'group']
			const defaultClass = [
				'text-base',
				'sm:text-lg',
				'text-gray-900',
				'hover:text-primaryBlue-500',
			]

			return this.rootClass.length === 0
				? [...baseClass, ...defaultClass]
				: [...baseClass, ...this.rootClass]
		},
	},
}
</script>
