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
			primaryYellow: {
				50: '#fdfaf4',
				100: '#fbf5e9',
				200: '#f5e5c8',
				300: '#efd5a7',
				400: '#e3b666',
				500: '#D79724',
				600: '#c28820',
				700: '#a1711b',
				800: '#815b16',
				900: '#694a12',
			},
			primaryBlue: {
				50: '#f4f6f7',
				100: '#e9eeee',
				200: '#c7d3d5',
				300: '#a6b9bc',
				400: '#63858a',
				500: '#205058',
				600: '#1d484f',
				700: '#183c42',
				800: '#133035',
				900: '#10272b',
			},
			'primaryBlue-dark': {
				50: '#f3f4f4',
				100: '#e7e9ea',
				200: '#c2c9ca',
				300: '#9da9ab',
				400: '#54686b',
				500: '#0A272C',
				600: '#092328',
				700: '#081d21',
				800: '#06171a',
				900: '#051316',
			},
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
		extend: {
			padding: ['hover'],
			translate: ['group-hover'],
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
}
