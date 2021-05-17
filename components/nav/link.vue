<template>
	<button
		v-scroll-to="scrollTarget"
		:class="linkClass"
		:title="title"
		:target="linkTarget"
		@click="go"
	>
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
			<svg :is="icon" :class="iconClass" />
		</template>
		<template v-if="linkType === 'head'">
			<slot />
		</template>
	</button>
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
			type: [String, Object],
			default: '#',
		},
		icon: {
			type: String,
			default: 'rssIcon',
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
		isOuterLink() {
			const regexUrl = /^(mailto:|http:\/\/|https:\/\/)/
			return regexUrl.test(this.href)
		},
		linkTag() {
			return this.isOuterLink ? 'a' : 'router-link'
		},
		scrollTarget() {
			const vm = this
			const hash = vm.href.hash || ''
			return {
				el: hash,
				onStart(element) {
					vm.$emit('scrollOnStart', element)
				},
			}
		},
		linkClass() {
			if (this.aTagClass.length > 0) return this.aTagClass
			else {
				const defaultClass = [
					'inline-block',
					'no-underline',
					'text-lg',
					'outline-none',
					'flex',
					'self-stretch',
					'items-center',
					'w-full',
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
							'hover:text-primaryBlue-500',
						].join(' ')
					case 'head':
						return [
							...defaultClass,
							'font-bold',
							'text-primaryBlue-500',
							'hover:bg-gray-100',
						].join(' ')
				}
				return ''
			}
		},
		iconClass() {
			const defaultClass = ['inline-block', 'flex', 'items-center']
			const result = [...defaultClass, ...this.iconClassAry].join(' ')
			return result
		},
		linkTarget() {
			return this.target ? '_blank' : ''
		},
	},

	methods: {
		go(e) {
			const vm = this
			if (!vm.isOuterLink) {
				vm.$router.push(vm.href)
			} else {
				e.preventDefault()
				window.open(vm.href)
			}
		},
	},
}
</script>
