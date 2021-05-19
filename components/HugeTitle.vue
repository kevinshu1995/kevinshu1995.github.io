<template>
	<div
		class="flex flex-col text-primaryBlue-500 text-shadow-title pt-10 sm:pt-36 md:pt-24 mt-16"
	>
		<h2
			class="italic font-black text-8xl md:text-10xl lg:text-13xl leading-none"
		>
			{{ titleEn }}
		</h2>
		<h3 class="ml-6 text-4xl">{{ titleZh }}</h3>
	</div>
</template>

<script>
export default {
	props: {
		titleEn: {
			type: String,
			required: true,
		},
		titleZh: {
			type: String,
			required: true,
		},
	},
}
</script>
