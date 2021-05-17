export const state = () => ({
	skills: [
		{
			title: '網頁前端',
			list: [
				'HTML',
				'Pug',
				'CSS',
				'SCSS',
				'Javascript',
				'Bootstrap4',
				'Tailwindcss',
				'Bulma',
				'Vue.js',
				'Vuex',
				'Vue Router',
				'Gulp',
				'Webpack',
				'Webpack',
				'Git',
				'Git flow',
			],
		},
		{
			title: '多媒體設計',
			list: ['Photoshop', 'illustrator', 'Adobe XD', 'Figma'],
		},
	],
	highlight: [
		{
			title: 'Material Design 文件協同翻譯',
			href: 'https://material-design.hexschool.io/',
			status: {
				variant: 'bg-gray-400',
				description: '已結案',
			},
		},
		{
			title: 'Tailwindcss.tw 文件協同翻譯',
			href: '#',
			status: {
				variant: 'bg-primaryYellow-500',
				description: '進行中',
			},
		},
	],
	experiences: [
		{
			time: {
				start: '2020',
				end: 'current',
			},
			company: '佳音事業股份有限公司',
			jobTitle: '網頁設計',
			description: [
				'前端切版動畫效果、UI/UX 設計與優化、API串接、Git 協作 / Git flow，專案包含活動網頁製作、後台CMS撰寫、網站維護，部分專案使用 Vue.js 框架開發。',
			],
		},
		{
			time: {
				start: '2019',
				end: '2019',
			},
			company: '原聚股份有限公司',
			jobTitle: '平面設計',
			description: [
				'工作內容包含平面與行銷。',
				[
					'平面主要執行品牌手冊、店面視覺設定、廣宣，其中包含設計與發包。',
					'行銷面協助店面行銷活動、網路行銷，包含 Facebook, Instagram, line@, 官方網站...等的管理與維護。',
					'加盟展擔任公司春季加盟展時主要的對外窗口，處理參展設備、流程、視覺、活動等。',
				],
			],
		},
		{
			time: {
				start: '2016',
				end: '2017',
			},
			company: '原聚股份有限公司',
			jobTitle: '平面設計',
			description: [
				'擔任一年正職設計，使用 Illustrator、Photoshop 製作商品開版圖、商品外觀平面設計。公司商品以布類家飾產品為主，理解工廠製作的限制的同時兼顧視覺效果來製作圖面。後因受主管青睞，與資深業務外派至明尼蘇達州兩周，協助業務開會與市場調查，也藉此見識美式風格與文化薰陶，進而了解商品設計師背後蘊含的深厚文化背景。',
			],
		},
	],
	design: [
		{
			id: 1,
			href: '#',
			imgSrc: require('~/static/images/design/swing_1.jpg'),
			badges: ['Graphic Design'],
		},
		{
			id: 2,
			href: '#',
			imgSrc: require('~/static/images/design/banner_1.jpg'),
			badges: ['Graphic Design'],
		},
		{
			id: 3,
			href: '#',
			imgSrc: require('~/static/images/design/firefold_1.jpg'),
			badges: ['Industrial Design'],
		},
		{
			id: 4,
			href: '#',
			imgSrc: require('~/static/images/design/poster_1.jpg'),
			badges: ['Graphic Design'],
		},
		{
			id: 5,
			href: '#',
			imgSrc: require('~/static/images/design/poster_2.jpg'),
			badges: ['Graphic Design'],
		},
		{
			id: 6,
			href: '#',
			imgSrc: require('~/static/images/design/poster_3.jpg'),
			badges: ['Graphic Design'],
		},
		{
			id: 7,
			href: '#',
			imgSrc: require('~/static/images/design/poster_4.jpg'),
			badges: ['Graphic Design'],
		},
		{
			id: 8,
			href: '#',
			imgSrc: require('~/static/images/design/poster_5.jpg'),
			badges: ['Graphic Design'],
		},
	],
	photography: {
		imgFolder: 'static/images/photography',
		photos: [
			{
				id: 1,
				fileName: 'photo-01.jpg',
			},
			// {
			// 	id: 2,
			// 	fileName: 'photo-02.jpg',
			// },
			// {
			// 	id: 3,
			// 	fileName: 'photo-03.jpg',
			// },
			{
				id: 4,
				fileName: 'photo-04.jpg',
			},
			{
				id: 5,
				fileName: 'photo-05.jpg',
			},
			{
				id: 6,
				fileName: 'photo-06.jpg',
			},
			{
				id: 7,
				fileName: 'photo-07.jpg',
			},
			{
				id: 8,
				fileName: 'photo-08.jpg',
			},
			{
				id: 9,
				fileName: 'photo-09.jpg',
			},
			{
				id: 10,
				fileName: 'photo-10.jpg',
			},
			// {
			// 	id: 11,
			// 	fileName: 'photo-11.jpg',
			// },
			// {
			// 	id: 12,
			// 	fileName: 'photo-12.jpg',
			// },
			// {
			// 	id: 13,
			// 	fileName: 'photo-13.jpg',
			// },
			// {
			// 	id: 14,
			// 	fileName: 'photo-14.jpg',
			// },
			{
				id: 15,
				fileName: 'photo-15.jpg',
			},
			// {
			// 	id: 16,
			// 	fileName: 'photo-16.jpg',
			// },
			{
				id: 17,
				fileName: 'photo-17.jpg',
			},
			// {
			// 	id: 18,
			// 	fileName: 'photo-18.jpg',
			// },
			{
				id: 19,
				fileName: 'photo-19.jpg',
			},
			// {
			// 	id: 20,
			// 	fileName: 'photo-20.jpg',
			// },
			{
				id: 21,
				fileName: 'photo-21.jpg',
			},
			// {
			// 	id: 22,
			// 	fileName: 'photo-22.jpg',
			// },
			{
				id: 23,
				fileName: 'photo-23.jpg',
			},
			{
				id: 24,
				fileName: 'photo-24.jpg',
			},
			{
				id: 25,
				fileName: 'photo-25.jpg',
			},
			// {
			// 	id: 26,
			// 	fileName: 'photo-26.jpg',
			// },
			// {
			// 	id: 27,
			// 	fileName: 'photo-27.jpg',
			// },
		],
	},
})
