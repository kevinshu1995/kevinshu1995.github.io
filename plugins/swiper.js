import Vue from 'vue'

import { Swiper as SwiperClass, Pagination } from 'swiper/core'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

SwiperClass.use([Pagination])
Vue.use(getAwesomeSwiper(SwiperClass), {
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
})
