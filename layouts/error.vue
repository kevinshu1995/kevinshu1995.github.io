<template>
	<div class="container py-20">
		<div class="row">
			<div
				class="col w-full flex flex-col items-center text-center space-y-5"
			>
				<div class="max-w-xs flex justify-center">
					<img
						src="https://media.giphy.com/media/a8XXAqHC5tZYs/giphy.gif"
						alt="page 404 status image"
					/>
				</div>
				<!-- <h1 v-if="error.statusCode === 404">Page not found</h1>
				<h1 v-else>An error occurred</h1> -->
				<h2 class="text-xl">你進到了神秘的空間，但這裡只有皮卡丘</h2>
				<Nuxt-link
					class="px-3 py-2 text-primaryYellow-500 border border-primaryYellow-500 bg-white hover:bg-primaryYellow-500 hover:text-white"
					:to="{ name: 'index' }"
					>回到首頁</Nuxt-link
				>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	layout: 'topSpacing',
	props: {
		error: {
			type: Object,
			required: true,
		},
	}, // you can set a custom layout for the error page
}
</script>
