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
			time: '2021',
			href: 'https://material-design.hexschool.io/',
			status: {
				variant: 'bg-gray-400',
				description: '已結案',
			},
		},
		{
			title: 'Tailwindcss.tw 文件協同翻譯',
			time: '2021',
			href: 'https://github.com/tailwindcss-tw/tailwindcss.com',
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
			content: {
				title: '搖擺酸酸',
				subtitle: 'Swing Swing',
				content: [
					'品牌宗旨為人生太苦、飲料太甜、酸甜青澀、盡情搖擺，客群主推年輕女生。風格走向歐美設計，清新活潑而極簡，能夠與市場上手搖品牌有區隔性，顏色以代表檸檬的粉黃色與粉綠色為主色。',
					'品牌手冊：用於業務推廣，因此電子檔為主要表現方式，規劃頁面方式與簡報相似。排版與顏色規劃依據品牌特色偏向極簡風，希望讀者可以著重於內容描述。',
					'社群貼文與傳單設計：以豐富顏色的飲料為主體，配色除了黃色的品牌色之外，因為客群多為上班族女性，也會選用較亮的粉色與大量的留白。畫面使用與產品系列相關的元素搭配，例如氣泡飲品背景使用泡泡作點綴，能夠與產品做相呼應的效果。文案內容多以產品本身發想，或以時事話題出發。圖中可以看到一個品牌IP，個性設定用賤話來砥礪人心。因此會加入此IP的形象，並添加一些逗趣的文字，增加"笑"果。',
				],
			},
			href: {
				path: '/design/Swing',
			},
			imgSrc: require('~/static/images/design/swing_1.jpg'),
			badges: ['Graphic Design'],
			tools: ['Illustrator', 'Photoshop'],
		},
		{
			id: 2,
			content: {
				title: '社團音樂會海報設計',
				subtitle: 'Poster Design',
				content: [
					'2020 年夏季登場的一期一會管樂音樂會海報設計，「Tengo」 在西班牙文代表我們，同時是 「ten」 與 「go」 的組合，象徵 「我們」 一起迎接 「第十年」 並攜手走向下個十年，並取其諧音 Tango 探戈，採用深紅色作為主色，並以襯線的字體營造出高雅的風格，推出各種社群媒體圖片尺寸版本。',
				],
			},
			href: {
				path: '/design/CzjhTengoPoster',
			},
			imgSrc: require('~/static/images/design/cz-poster-final_facebookCover.jpg'),
			badges: ['Graphic Design'],
			tools: ['Illustrator', 'Photoshop'],
		},
		{
			id: 3,
			content: {
				title: '電商平台橫幅設計',
				subtitle: 'E-commercial Banner Design',
				content: [
					'臨摹電商平台的橫幅設計，使用 Photoshop 製作去背及陰影等細節 與 illustrator 排版，考量到中文的橫式閱讀順序是由左至右，因此重要的優惠資訊或標語皆優先置放在左側，製作引導使用者點擊的按鈕於閱讀順序末端，即圖片右下角。',
				],
			},
			href: {
				path: '/design/Banners',
			},
			imgSrc: require('~/static/images/design/banner_1.jpg'),
			badges: ['Graphic Design'],
			tools: ['Illustrator', 'Photoshop'],
		},
		{
			id: 4,
			content: {
				title: '海報設計 - 東海食科系研究室',
				subtitle: 'Poster Design',
				content: ['歪斜主軸加上明亮的黃色使整體視覺效果更活潑。'],
			},
			href: {
				path: '/design/foodSciencePoster',
			},
			imgSrc: require('~/static/images/design/poster_1.jpg'),
			badges: ['Graphic Design'],
			tools: ['Illustrator'],
		},
		{
			id: 5,
			content: {
				title: '運動會活動海報設計',
				subtitle: 'Poster Design',
				content: [
					'主視覺以不規則的塊狀色塊隨意排列來搭配英文字體的風格，以代表活力的綠色作為主色。',
				],
			},
			href: {
				path: '/design/SoarSportPoster',
			},
			imgSrc: require('~/static/images/design/poster_2.jpg'),
			badges: ['Graphic Design'],
			tools: ['Illustrator'],
		},
		// {
		// 	id: 6,
		// 	content: {
		// 		title: '社團音樂會海報設計',
		// 		subtitle: 'Poster Design',
		// 		content: [''],
		// 	},
		// 	href: {
		// 		path: '/design/thu-musicPoster',
		// 	},
		// 	imgSrc: require('~/static/images/design/poster_3.jpg'),
		// 	badges: ['Graphic Design'],
		// 	tools: ['Illustrator', 'Photoshop'],
		// },
		{
			id: 7,
			content: {
				title: '社團活動酷卡設計',
				subtitle: 'Cool Card Design',
				content: ['幾何圖形的反覆疊加為底，搭配簡潔的文字排版。'],
			},
			href: {
				path: '/design/ThuCoolCard',
			},
			imgSrc: require('~/static/images/design/poster_4.jpg'),
			badges: ['Graphic Design'],
			tools: ['Illustrator'],
		},
		// {
		// 	id: 8,
		// 	href: '#',
		// 	imgSrc: require('~/static/images/design/poster_5.jpg'),
		// 	badges: ['Graphic Design'],
		// 	tools: ['Illustrator', 'Photoshop'],
		// },
		// {
		// 	id: 9,
		// 	content: {
		// 		title: '輕量、快速組合火爐',
		// 		subtitle: 'FireFold',
		// 		content: [
		// 			'正值寒冬的聖誕節是一年之中最重要一天，趁佳節假期待在家裡圍爐取暖，一起看電視、聚餐......等等的家庭活動幾乎是每一個美國家庭的傳統。然而近年來越來越多的年輕人因為收入、交通、婚姻狀況等的考慮，選擇租借在市區的公寓大廈裡，而這些公寓大廈不會有壁爐設計，取而代之的是暖氣，不過傳統的”圍爐”依然深植美國人心。',
		// 			'為了簡易提升氣氛，材料選擇瓦楞紙板，透過其便宜、重量輕、加工簡單的特色，使消費者可以花少少的錢，直接從貨架上拿走包裝好的紙壁爐，只需要花費五分鐘，一個人就可以組裝完成。 也因為瓦楞紙的印刷技術成熟，能根據不同消費族群提供多種外觀風格，甚至個人化設計。',
		// 			'為仿造傳統壁爐的火光，使用Arduino板偵測環境聲音大小來改變LED燈亮度的變化，讓人在寒冬中彷彿置身在真實的壁爐邊，與家人享受天倫之樂。',
		// 			'由於使用拼插紙板的方式組合，完全不需要用到任何工具，只要按照說明書的六個步驟，使用者就可以在家獨自快速完成組裝。',
		// 		],
		// 	},
		// 	href: '#',
		// 	imgSrc: require('~/static/images/design/firefold_1.jpg'),
		// 	badges: ['Industrial Design'],
		// 	tools: ['Illustrator', 'Photoshop', 'Solid works'],
		// },
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
