(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{262:function(t,e,r){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},263:function(t,e,r){var content=r(289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(74).default)("60e80960",content,!0,{sourceMap:!1})},269:function(t,e,r){var map={"./afk-systema.png":270,"./almaz-antay.png":271,"./cb-rf.png":272,"./frp.png":273,"./gazprom.png":274,"./inter-rao.png":275,"./mkb.png":276,"./moskowkiy-bank.png":277,"./novikom-bank.png":278,"./otkritie-bank.png":279,"./pcb.png":280,"./rosatom.png":281,"./rosekim-bank.png":282,"./rosselhoz-bank.png":283,"./rosteh.png":284,"./sber.png":285,"./turizm-rf.png":286,"./web-rf.png":287};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=269},270:function(t,e,r){t.exports=r.p+"img/afk-systema.c9bfa55.png"},271:function(t,e,r){t.exports=r.p+"img/almaz-antay.495a836.png"},272:function(t,e,r){t.exports=r.p+"img/cb-rf.2b5d4fb.png"},273:function(t,e,r){t.exports=r.p+"img/frp.e2affc6.png"},274:function(t,e,r){t.exports=r.p+"img/gazprom.fee22f6.png"},275:function(t,e,r){t.exports=r.p+"img/inter-rao.2ea04c1.png"},276:function(t,e,r){t.exports=r.p+"img/mkb.1ba894b.png"},277:function(t,e,r){t.exports=r.p+"img/moskowkiy-bank.7766082.png"},278:function(t,e,r){t.exports=r.p+"img/novikom-bank.8f58c6f.png"},279:function(t,e,r){t.exports=r.p+"img/otkritie-bank.069e934.png"},280:function(t,e,r){t.exports=r.p+"img/pcb.c195c80.png"},281:function(t,e,r){t.exports=r.p+"img/rosatom.29faf95.png"},282:function(t,e,r){t.exports=r.p+"img/rosekim-bank.ed11476.png"},283:function(t,e,r){t.exports=r.p+"img/rosselhoz-bank.800c037.png"},284:function(t,e,r){t.exports=r.p+"img/rosteh.e3fc614.png"},285:function(t,e,r){t.exports=r.p+"img/sber.9626c23.png"},286:function(t,e,r){t.exports=r.p+"img/turizm-rf.c2164e2.png"},287:function(t,e,r){t.exports=r.p+"img/web-rf.eb19b9e.png"},288:function(t,e,r){"use strict";r(263)},289:function(t,e,r){var n=r(73),o=r(262),c=r(290),l=n((function(i){return i[1]})),d=o(c);l.push([t.i,".tab-transition[data-v-71576a16]{animation:show-tab-71576a16 ease}@keyframes show-tab-71576a16{0%{opacity:0;transform:translateY(-100vh)}}.bg[data-v-71576a16]{background:url("+d+") repeat}.img-animate[data-v-71576a16]{animation:show-71576a16 ease}@keyframes show-71576a16{0%{opacity:0;transform:translateX(50vw)}}",""]),l.locals={},t.exports=l},290:function(t,e,r){t.exports=r.p+"img/bg-fill-gray-lines-ops-70.21f315e.png"},321:function(t,e,r){"use strict";r.r(e);r(44),r(19);var n=[{id:1,value:"оценка бизнеса, оценка имущественных активов",logotypes:[{id:1,img:"inter-rao"},{id:2,img:"rosatom"}]},{id:2,value:"оценка",logotypes:[{id:1,img:"moskowkiy-bank"},{id:2,img:"rosekim-bank"},{id:3,img:"rosselhoz-bank"},{id:4,img:"afk-systema"},{id:5,img:"web-rf"},{id:6,img:"sber"},{id:7,img:"mkb"},{id:8,img:"novikom-bank"}]},{id:3,value:"строительный аудит",logotypes:[{id:1,img:"pcb"},{id:2,img:"otkritie-bank"},{id:3,img:"cb-rf"},{id:4,img:"almaz-antay"},{id:5,img:"turizm-rf"},{id:6,img:"frp"},{id:7,img:"rosteh"}]},{id:4,value:"строительная экспертиза, технологическая экспертиза",logotypes:[{id:1,img:"otkritie-bank"},{id:2,img:"cb-rf"},{id:3,img:"almaz-antay"},{id:4,img:"turizm-rf"},{id:5,img:"frp"},{id:6,img:"rosteh"}]},{id:5,value:"финансово-технический надзор",logotypes:[{id:1,img:"pcb"}]}],o={name:"experience",data:function(){return{tabs:n,activeTab:1,dropMenuIsOpen:!1}},methods:{setActiveTab:function(t){this.activeTab=t,this.dropMenuIsOpen=!1},getTabLogotypes:function(){var t=this;return this.tabs.filter((function(e){return e.id===t.activeTab}))[0].logotypes}}},c=(r(288),r(33)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg"},[e("div",{staticClass:"h-[calc(100vh-60px)] sm:h-[calc(100vh-80px)] md:h-screen w-full flex flex-col justify-start px-4 border-b border-b-gray-700 md:border-b-0"},[e("div",{staticClass:"md:hidden w-full flex flex-col justify-start text-gray-300 text-lg text-center py-4"},[e("div",{staticClass:"border border-gray-600 w-full rounded-lg flex flex-row justify-between p-2 px-4",on:{click:function(e){t.dropMenuIsOpen=!t.dropMenuIsOpen}}},[e("div",[t._v("Класс услуг")]),t._v(" "),e("div",{staticClass:"duration-150",class:{"-rotate-90":t.dropMenuIsOpen}},[t._v("<")])]),t._v(" "),t.dropMenuIsOpen?e("div",{staticClass:"rounded-lg border-t border-t-gray-900 border-l border-r border-b border-l-gray-600 border-b-gray-600 border-r-gray-600 px-4"},[e("ul",{staticClass:"w-full flex flex-col justify-center items-start pb-4"},t._l(t.tabs,(function(r){return e("li",{staticClass:"border-b border-b-gray-700 uppercase cursor-pointer show-left font-bold text-base mt-4 sm:mt-6 text-gray-300 text-center w-full transition-colors",on:{click:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:t.setActiveTab(r.id)}}},[t._v("\n            "+t._s(r.value)+"\n            "),8===r.id?e("div",{staticClass:"w-full border-b border-b-gray-600"}):t._e()])})),0)]):t._e()]),t._v(" "),e("div",{staticClass:"hidden md:flex flex-row items-start overflow-x-scroll font-bold text-gray-300 text-lg uppercase md:pt-24"},t._l(t.tabs,(function(r){return e("div",{key:r.id,staticClass:"text-center border border-gray-600 text-base md:text-lg tab-transition duration-300 hover:backdrop-brightness-75 cursor-pointer border-b border-b-gray-600 p-6 w-full",class:{"backdrop-brightness-75":t.activeTab===r.id},on:{click:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:void(t.activeTab=r.id)}}},[t._v("\n        "+t._s(r.value)+"\n      ")])})),0),t._v(" "),e("div",{staticClass:"flex flex-col items-center md:flex-row md:justify-start overflow-x-scroll border-b border-b-gray-600"},t._l(t.getTabLogotypes(),(function(t){return e("img",{key:t.id,staticClass:"block whitespace-nowrap break hover:opacity-50 py-6 sm:py-8 px-16 object-fill object-contain",style:{animationDuration:.55+t.id/10+"s"},attrs:{src:r(269)("./".concat(t.img,".png")),alt:"no image"}})})),0)])])}),[],!1,null,"71576a16",null);e.default=component.exports}}]);