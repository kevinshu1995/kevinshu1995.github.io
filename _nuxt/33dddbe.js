(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2],{334:function(t,e,r){"use strict";r.r(e);var n=r(78),l=(r(77),{props:{content:{type:String,required:!0},variant:{type:String,default:"bg-primaryYellow-500"},extraClasses:{type:Array,default:function(){return[]}},customClasses:{type:Array,default:function(){return[]}}},computed:{variants:function(){switch(this.variant){case"bg-primaryYellow-500":return["bg-primaryYellow-500","text-white"];case"bg-gray-400":return["bg-gray-400","text-white"];default:return["bg-primaryYellow-500","text-white"]}},classString:function(){if(this.customClasses.length>0)return[].concat(Object(n.a)(this.customClasses),Object(n.a)(this.variants));return[].concat(["px-2","text-sm","tracking-wider"],Object(n.a)(this.extraClasses),Object(n.a)(this.variants))}}}),c=r(23),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{class:t.classString},[t._v("\n\t"+t._s(t.content)+"\n")])}),[],!1,null,null,null);e.default=component.exports},396:function(t,e,r){"use strict";r.r(e);var n={props:{highlight:{type:Array,required:!0}}},l=r(23),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"list-connect hover-animate space-y-4"},t._l(t.highlight,(function(e,n){return r("li",{key:"skill-"+n,staticClass:"whitespace-nowrap"},[r("a",{staticClass:"group inline-flex flex-col space-y-1 whitespace-normal text-current transition-all",attrs:{href:e.href,target:"_blank"}},[r("div",{staticClass:"text-left space-x-4"},[r("span",{staticClass:"text-gray-700"},[t._v(" "+t._s(e.time)+" ")]),t._v(" "),e.status?r("Badge",{attrs:{content:e.status.description,variant:e.status.variant,"custom-classes":["px-2.5","font-normal","text-sm","tracking-wider","rounded-full"]}}):t._e()],1),t._v(" "),r("h4",{staticClass:"flex space-x-2 text-base sm:text-lg text-gray-900 group-hover:text-primaryBlue-500"},[r("span",[t._v("\n\t\t\t\t\t"+t._s(e.title)+"\n\t\t\t\t")]),t._v(" "),r("span",{staticClass:"relative hidden sm:block group-hover:opacity-100 opacity-0 transition-all"},[r("ArrowUpRightCircleIcon",{staticClass:"relative top-1 animate-ping"}),t._v(" "),r("ArrowUpRightCircleIcon",{staticClass:"absolute top-1 transition-all"})],1)])])])})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Badge:r(334).default})}}]);