const colors = require('tailwindcss/colors')

module.exports = {
	jit: true,
	purge: {
		content: [
			'components/**/*.vue',
			'layouts/**/*.vue',
			'pages/**/*.vue',
			'plugins/**/*.js',
			'nuxt.config.js',
		],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			primaryYellow: '#D79724',
			primaryBlue: '#205058',
			'primaryBlue-dark': '#0A272C',
			transparent: 'transparent',
			current: 'currentColor',
			gray: colors.gray,
			red: colors.red,
			yellow: colors.yellow,
			green: colors.green,
			black: colors.black,
			white: colors.white,
		},
		extend: {
			spacing: {
				4.5: '1.125rem',
			},
			zIndex: {
				'-1': '-1',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/line-clamp')],
}
