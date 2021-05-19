<template>
	<div class="pt-10 space-y-6">
		<div
			class="pt-10 text-gray-500 border-t border-gray-300 space-x-4 flex items-end"
		>
			<h2 class="text-3xl">看看其它設計作品</h2>
			<p>Other Design</p>
		</div>
		<PageIndexSlideDesign :design="design" />
	</div>
</template>

<script>
export default {
	props: {
		design: {
			type: Array,
			required: true,
		},
	},
}
</script>
