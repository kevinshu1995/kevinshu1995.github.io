<template>
	<div class="space-y-4">
		<div
			class="flex flex-col sm:flex-row sm:items-end sm:space-x-3 text-primaryBlue-500"
		>
			<h3 class="font-black">{{ titleEn }}</h3>
			<p class="font-bold">{{ titleZh }}</p>
		</div>
		<div class="flex flex-col space-y-4">
			<slot></slot>
		</div>
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
