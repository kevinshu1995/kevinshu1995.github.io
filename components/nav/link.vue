<template>
	<a :class="linkClass" :href="href" :title="title" :target="linkTarget">
		<template v-if="linkType === 'normal' && content">
			<span
				class="flex flex-row items-center md:items-start md:flex-col space-x-4 md:space-x-0 leading-3"
			>
				<span
					v-if="content.zh"
					class="inline-block font-medium text-base"
				>
					{{ content.zh }}
				</span>
				<span v-if="content.en" class="inline-block text-sm">{{
					content.en
				}}</span>
			</span>
		</template>
		<template v-if="linkType === 'icon' && icon">
			<svg :is="icon" :icon-class-ary="iconClassAry" />
		</template>
		<template v-if="linkType === 'head'">
			<slot />
		</template>
	</a>
</template>

<script>
export default {
	props: {
		aTagClass: {
			type: Array,
			default() {
				return []
			},
		},
		title: {
			type: String,
			required: true,
		},
		target: {
			type: Boolean,
			default: false,
		},
		linkType: {
			type: String,
			default: 'normal',
		},
		content: {
			type: Object,
			default() {
				return {
					zh: '',
					en: '',
				}
			},
		},
		href: {
			type: String,
			default: '#',
		},
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
	},
	data() {
		return {}
	},

	computed: {
		linkClass() {
			if (this.aTagClass.length > 0) return this.aTagClass
			else {
				const defaultClass = [
					'inline-block',
					'no-underline',
					'text-lg',
					'h-full',
					'flex',
					'items-center',
					'p-4',
					'transition-all',
				]
				switch (this.linkType) {
					case 'normal':
						return [
							...defaultClass,
							'font-light',
							'text-gray-700',
							'hover:bg-gray-100',
						].join(' ')
					case 'icon':
						return [
							...defaultClass,
							'font-light',
							'text-gray-500',
							'hover:text-primaryBlue',
						].join(' ')
					case 'head':
						return [
							...defaultClass,
							'font-bold',
							'text-primaryBlue',
							'hover:bg-gray-100',
						].join(' ')
				}
				return ''
			}
		},
		// iconClass() {
		// 	const defaultClass = ['inline-block', 'flex', 'items-center']
		// 	const result = [...defaultClass, ...this.iconClassAry].join(' ')
		// 	return result
		// },
		linkTarget() {
			return this.target ? '_blank' : ''
		},
	},
}
</script>
