import Vue from 'vue'
import VueStickyDirective from '@renatodeleao/vue-sticky-directive'
import ResizeSensor from 'resize-sensor'
window.ResizeSensor = ResizeSensor
Vue.use(VueStickyDirective)
