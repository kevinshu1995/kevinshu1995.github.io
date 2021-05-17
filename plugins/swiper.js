import Vue from 'vue'

import { Swiper as SwiperClass, Pagination, Autoplay } from 'swiper/core'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

SwiperClass.use([Pagination, Autoplay])
Vue.use(getAwesomeSwiper(SwiperClass), {
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
})
