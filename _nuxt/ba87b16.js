(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{351:function(t,e,l){t.exports=l.p+"img/me_2.b797e90.png"},423:function(t,e,l){"use strict";l.r(e);l(27),l(42);var r={name:"IndexLanding",data:function(){return{socialLinkClass:["inline-block","no-underline","text-lg","h-full","flex","items-center","p-2","transition-all"],socialLinks:[{href:this.getLinkValue("github","href"),title:"前往 - 我的 Github",target:!0,linkType:"icon",icon:this.getLinkValue("github","icon"),linkClassAry:["text-white","hover:text-primaryBlue-500","w-6","h-6","md:w-7","md:h-7"]},{href:this.getLinkValue("mail","href"),title:"聯繫我",target:!0,linkType:"icon",icon:this.getLinkValue("mail","icon"),linkClassAry:["text-white","hover:text-primaryBlue-500","w-6","h-6","md:w-7","md:h-7"]},{href:this.getLinkValue("blog","href"),title:"前往 - 我的 Blog",target:!0,linkType:"icon",icon:this.getLinkValue("blog","icon"),linkClassAry:["text-white","hover:text-primaryBlue-500","w-6","h-6","md:w-7","md:h-7"]}]}},mounted:function(){this.initialAnimation().delay(.5)},methods:{getLinkValue:function(t,e){return this.$store.getters["links/getLink"](t,e)},initialAnimation:function(){var t={"upper-bg":this.$refs["upper-bg"],"low-bg":this.$refs["low-bg"],"photo-me":this.$refs["photo-me"],texts:[this.$refs["first-name"],this.$refs["last-name"],this.$refs["second-name"],this.$refs.description,this.$refs.socials]},e={xPercent:0,yPercent:0,autoAlpha:1,ease:"expo.out"},l=this.$gsap.timeline();return l.fromTo(t["upper-bg"],.7,{xPercent:30,yPercent:-30,autoAlpha:0},e,"<").fromTo(t["low-bg"],.7,{xPercent:-30,yPercent:30,autoAlpha:0},e,"<").fromTo([t["photo-me"]],.7,{yPercent:30,autoAlpha:0},e,"<").fromTo(t.texts,.7,{xPercent:30,autoAlpha:0},{xPercent:0,autoAlpha:1,stagger:.2}),l}}},o=l(23),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"h-screen grid grid-flow-col grid-cols-12 grid-rows-9 select-none relative",attrs:{id:"landing"}},[r("div",{staticClass:"absolute z-30 left-0 top-0 w-full h-full"},[r("div",{staticClass:"grid grid-flow-col grid-cols-12 grid-rows-9 h-full relative"},[r("div",{staticClass:"row-start-2 md:row-start-2 row-end-10 sm:row-end-9 md:row-end-9 col-start-1 md:col-start-1 col-end-13 md:col-end-6 lg:col-end-6 xl:col-end-5 flex items-end justify-end z-10"},[r("div",{staticClass:"h-full md:h-5/6 overflow-hidden"},[r("img",{ref:"photo-me",staticClass:"h-full w-auto object-cover object-right",attrs:{src:l(351),alt:"Kevin's Picture"}})])]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"row-start-1 row-end-9 sm:row-end-8 col-start-2 md:col-start-6 lg:col-start-6 xl:col-start-5 col-end-13 flex flex-col items-start justify-end text-white filter drop-shadow space-y-2 md:space-y-4 pl-3 pb-5 z-30"},[r("h2",{staticClass:"font-black flex flex-col text-7xl xs:text-9xl sm:text-9xl md:text-10xl lg:text-13xl 2xl:text-17xl leading-tight sm:leading-none -ml-1 sm:-ml-2 md:-ml-2.5 lg:-ml-4 xl:-ml-5"},[r("span",{ref:"first-name",staticClass:"transform translate-y-3 md:translate-y-5 lg:translate-y-10"},[t._v("Kevin")]),t._v(" "),r("span",{ref:"last-name"},[t._v("Hsu")])]),t._v(" "),r("h2",{ref:"second-name",staticClass:"space-x-2"},[r("span",{staticClass:"text-2xl md:text-3xl font-bold"},[t._v("許文修")]),t._v(" "),r("span",{staticClass:"text-lg font-medium"},[t._v("Wen-Shiu Hsu")])]),t._v(" "),r("p",{ref:"description",staticClass:"font-thin text-base pr-3",staticStyle:{"max-width":"480px"}},[t._v("\n\t\t\t\t\t我是許文修，目前是一名網頁設計師，曾經是平面設計師，目前致力於研究前端技術，寫網頁齁勝！\n\t\t\t\t")])]),t._v(" "),r("div",{staticClass:"row-start-9 sm:row-start-8 row-end-10 sm:row-end-9 col-start-2 md:col-start-6 lg:col-start-6 xl:col-start-5 col-end-13 flex flex-col items-start justify-end text-white filter drop-shadow space-y-2 md:space-y-4 pl-3 z-30"},[r("div",{staticClass:"-mx-2 h-full"},[r("div",{ref:"socials",staticClass:"flex items-center space-x-3 h-full"},[t._l(t.socialLinks,(function(link){return[r("navLink",{key:"social-"+link.icon,attrs:{"a-tag-class":t.socialLinkClass,href:link.href,"link-type":link.linkType,icon:link.icon,"icon-class-ary":link.linkClassAry,title:link.title,target:link.target}})]}))],2)])])])]),t._v(" "),r("div",{ref:"upper-bg",staticClass:"relative z-20 row-start-1 row-end-10 sm:row-end-9 md:row-end-8 col-start-1 md:col-start-4 col-end-13 bg-gradient-to-r to-primaryBlue-500 from-primaryBlue-dark-500"}),t._v(" "),r("div",{ref:"low-bg",staticClass:"relative z-10 row-start-1 md:row-start-9 row-end-10 sm:row-end-9 md:row-end-7 xl:row-end-6 col-start-1 col-end-7 sm:col-end-8 md:col-end-13 lg:col-end-12 bg-gradient-to-l to-primaryYellow-500 from-primaryYellow-400"})])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row-start-5 row-end-10 sm:row-end-9 col-start-1 col-end-13 relative z-20"},[e("div",{staticClass:"absolute z-20 left-0 bottom-0 w-full h-full bg-gradient-to-b from-transparent to-primaryBlue-500 bg-opacity-70 md:hidden"})])}],!1,null,null,null);e.default=component.exports}}]);