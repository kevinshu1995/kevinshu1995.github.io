<template>
	<div>
		<template v-for="(text, index) in textAry">
			<span :key="`skill-f2e-${index}`">
				<span v-if="index !== 0"> 、 </span>
				<span class="whitespace-nowrap">
					{{ text }}
				</span>
			</span>
		</template>
	</div>
</template>

<script>
export default {
	name: 'TextsList',
	props: {
		textAry: {
			type: Array,
			required: true,
		},
	},
}
</script>
