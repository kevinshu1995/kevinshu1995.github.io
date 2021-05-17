<template>
	<div class="pt-20">
		blank
		<nuxt-link :to="{ path: '/' }">Home</nuxt-link>
		<nuxt-link :to="{ path: '/', hash: 'about' }">a</nuxt-link>
		<nuxt-link :to="{ path: '/', hash: 'web' }">b</nuxt-link>
		<nuxt-link :to="{ path: '/', hash: 'design' }">c</nuxt-link>
	</div>
</template>
