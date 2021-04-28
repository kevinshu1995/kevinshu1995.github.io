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
		container: {
			center: true,
		},
		colors: {
			primaryYellow: '#D79724',
			primaryBlue: '#205058',
			'primaryBlue-dark': '#0A272C',
			transparent: 'transparent',
			current: 'currentColor',
			dark: '#222222',
			gray: colors.gray,
			red: colors.red,
			yellow: colors.yellow,
			green: colors.green,
			black: colors.black,
			white: colors.white,
		},
		extend: {
			fontSize: {
				'10xl': '9rem',
				'11xl': '10rem',
				'12xl': '11rem',
				'13xl': '12rem',
				'14xl': '13rem',
				'15xl': '14rem',
				'16xl': '15rem',
				'17xl': '16rem',
				'18xl': '17rem',
				'19xl': '18rem',
			},
			gridTemplateRows: {
				8: 'repeat(8, minmax(0, 1fr))',
				9: 'repeat(9, minmax(0, 1fr))',
			},
			gridRow: {
				'span-7': 'span 7 / span 7',
				'span-8': 'span 8 / span 8',
			},
			gridRowStart: {
				8: '8',
				9: '9',
				10: '10',
				11: '11',
				12: '12',
				13: '13',
			},
			gridRowEnd: {
				8: '8',
				9: '9',
				10: '10',
				11: '11',
				12: '12',
				13: '13',
			},
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
