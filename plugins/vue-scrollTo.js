import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo)

Object.defineProperty(Vue.prototype, '$scrollTo', { value: VueScrollTo })
