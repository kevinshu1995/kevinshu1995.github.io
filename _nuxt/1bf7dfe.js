(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2],{335:function(t,e,r){"use strict";r.r(e);var n=r(78),o=(r(77),{props:{content:{type:String,required:!0},variant:{type:String,default:"bg-primaryYellow-500"},extraClasses:{type:Array,default:function(){return[]}},customClasses:{type:Array,default:function(){return[]}}},computed:{variants:function(){switch(this.variant){case"bg-primaryYellow-500":return["bg-primaryYellow-500","text-white"];case"bg-gray-400":return["bg-gray-400","text-white"];default:return["bg-primaryYellow-500","text-white"]}},classString:function(){if(this.customClasses.length>0)return[].concat(Object(n.a)(this.customClasses),Object(n.a)(this.variants));return[].concat(["px-2","text-sm","tracking-wider"],Object(n.a)(this.extraClasses),Object(n.a)(this.variants))}}}),l=r(23),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{class:t.classString},[t._v("\n\t"+t._s(t.content)+"\n")])}),[],!1,null,null,null);e.default=component.exports},397:function(t,e,r){"use strict";r.r(e);r(27),r(30),r(43),r(26),r(44);var n=r(13),o=(r(55),r(64),r(33),r(53));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c={name:"BlogPosts",data:function(){return{swiperOptions:{direction:"vertical",slidesPerView:"auto",spaceBetween:10,autoplay:!0,pagination:{clickable:!0}}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({blogPosts:"data/blog/blogPosts_noAbout"})),mounted:function(){this.$store.dispatch("data/blog/getPosts")},methods:{getFullTime:function(time){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ddd, DD MMM YYYY";return this.$dayjs(time).format(t)},getTextContent:function(t){return t.replace(/<\/?[^>]+>/gi," ")},filterNotRepeat:function(data,t){var e=data.reduce((function(e,r){var n=r[t];return e[n]||(e[n]=n),e}),{});return Object.keys(e)}}},d=r(23),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"relative custom-hoverGroup"},[r("client-only",[t.blogPosts.length>0?[r("div",{staticClass:"absolute left-1/2 bottom-10 z-20 transform -translate-x-1/2 custom-hoverGroup:hidden"},[r("div",{staticClass:"bg-white bg-opacity-90 shadow-lg rounded-full w-10 h-10 flex items-center justify-center animate-bounce"},[r("chevronsDownIcon",{staticClass:"text-primaryYellow-500 w-8 h-8"})],1)]),t._v(" "),r("swiper",{staticClass:"divide-y divide-gray-100 -my-3 max-h-screen-2/3 sm:max-h-screen-1/2 overflow-y-auto z-10",attrs:{options:t.swiperOptions}},[r("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),t._v(" "),t._l(t.blogPosts,(function(e,n){return r("swiper-slide",{key:"blogPost-"+n},[r("a",{staticClass:"card group hover:bg-gray-50 hover:px-2 hover:shadow inline-block py-3 w-full relative transition-all overflow-hidden",attrs:{href:e.link._text,target:"_blank"}},[r("div",{staticClass:"flex flex-col space-y-1 relative z-0"},[r("div",{staticClass:"header"},[r("div",{staticClass:"flex items-center space-x-2 text-base"},[0===n?r("Badge",{attrs:{content:"NEW"}}):t._e(),t._v(" "),r("p",{staticClass:"text-gray-400 text-sm"},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.getFullTime(e.pubDate._text))+"\n\t\t\t\t\t\t\t\t\t")])],1)]),t._v(" "),r("div",{staticClass:"body flex flex-col"},[r("h4",{staticClass:"font-bold truncate text-lg text-gray-900 group-hover:text-primaryBlue"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(e.title._text)+"\n\t\t\t\t\t\t\t\t")]),t._v(" "),r("p",{staticClass:"truncate text-gray-900"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.getTextContent(e.description._text))+"\n\t\t\t\t\t\t\t\t")])]),t._v(" "),r("div",{staticClass:"footer flex space-x-2 text-sm"},t._l(t.filterNotRepeat(e.category,"_text"),(function(e,n){return r("span",{key:"blogCategory-"+n,staticClass:"text-gray-400"},[t._v("\n\t\t\t\t\t\t\t\t\t#"+t._s(e)+"\n\t\t\t\t\t\t\t\t")])})),0)]),t._v(" "),r("span",{staticClass:"group-hover:translate-x-0 absolute z-10 right-4 bottom-4 bg-primaryBlue-dark-500 text-white px-2 py-1 transform translate-x-96 transition-all"},[t._v("\n\t\t\t\t\t\t\t前往閱讀\n\t\t\t\t\t\t")])])])})),t._v(" "),r("p",{staticClass:"text-center py-5 font-bold text-sm text-primaryBlue"},[t._v("\n\t\t\t\t\t文章列表到尾端了，我會努力的 QQ\n\t\t\t\t")])],2)]:[r("p",{staticClass:"font-bold text-lg text-red-700"},[t._v("\n\t\t\t\t抱歉，取得文章列表時發生了問題。\n\t\t\t")])]],2)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Badge:r(335).default})}}]);