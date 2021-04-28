import { resolve } from 'path'
export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Kevin Hsu',
		htmlAttrs: {
			lang: 'zh-Hant',
		},
		meta: [
			{ charset: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				hid: 'description',
				name: 'description',
				content:
					'嗨!我是許文修，目前是一名網頁設計師，目前致力研究前端技術，也曾經是平面設計師，畢業於東海大學工業設計學系。 Hi! This is Kevin Hsu - a web designer, graphic designer. Commit to Front-end currently.',
			},
			{
				property: 'og:title',
				content: 'Home',
				// following template options are identical
				// template: '%s - My page',
				template: (chunk) => `${chunk} - Kevin Hsu`,
				vmid: 'og:title',
			},
			{
				property: 'og:image',
				content:
					'https://live.staticflickr.com/65535/49344532448_74bb0a2488_o.jpg',
				vmid: 'og:image',
			},
			{
				property: 'og:description',
				content:
					'嗨!我是許文修，目前是一名網頁設計師，目前致力研究前端技術，也曾經是平面設計師，畢業於東海大學工業設計學系。 Hi! This is Kevin Hsu - a web designer, graphic designer. Commit to Front-end currently.',
				vmid: 'og:description',
			},
			{
				property: 'og:url',
				content: 'https://kevinshu1995.github.io',
				vmid: 'og:url',
			},
			{
				property: 'og:type',
				content: 'website',
				vmid: 'og:type',
			},
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
			{
				rel: 'stylesheet',
				href:
					'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;400;900&display=swap',
			},
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'~/plugins/lodash.js',
		{
			src: '~/plugins/vue-tabler-icons.js',
		},
		{
			src: '~/plugins/locomotiveScroll.js',
			mode: 'client',
		},
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
		// https://google-analytics.nuxtjs.org/
		'@nuxtjs/google-analytics',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		transpile: ['vue-tabler-icons'],
	},

	alias: {
		images: resolve(__dirname, './static/images'),
	},

	googleAnalytics: {
		id: 'UA-154890967-1',
	},
}
