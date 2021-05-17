<template>
	<div class="container py-20">
		<div class="row">
			<div
				class="col w-full flex flex-col items-center text-center space-y-3"
			>
				<div class="max-w-xs flex justify-center">
					<img
						src="https://media.giphy.com/media/a8XXAqHC5tZYs/giphy.gif"
						alt="page 404 status image"
					/>
				</div>
				<h2 class="text-xl">你進到了神秘的空間，但這裡甚麼都沒有</h2>
				<nuxt-link
					class="px-3 py-2 text-primaryYellow-500 border border-primaryYellow-500 bg-white hover:bg-primaryYellow-500 hover:text-white"
					:to="{ name: 'index' }"
					>回到首頁</nuxt-link
				>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Blank',
	layout: 'topSpacing',
}
</script>
