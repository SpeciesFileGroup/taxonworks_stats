(function(t){function e(e){for(var a,o,i=e[0],u=e[1],c=e[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0025":function(t,e,n){},"01f7":function(t,e,n){},"0d9a":function(t,e,n){"use strict";n("8a7d")},"0f84":function(t,e,n){},"17e5":function(t,e,n){"use strict";n("91b4")},"2c3a":function(t,e,n){},"2e93":function(t,e){},"30db":function(t,e,n){"use strict";n("0025")},"404b":function(t,e,n){"use strict";n("2c3a")},4358:function(t,e,n){"use strict";n("a2a2")},"53d7":function(t,e,n){"use strict";n("01f7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("87b8");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("HeaderNav",[n("ServerSelector",{attrs:{slot:"middle","api-list":t.apiList,remain:t.remain,status:t.status},slot:"middle",model:{value:t.server,callback:function(e){t.server=e},expression:"server"}})],1),n("GridStats",{attrs:{stats:t.stats.data,metadata:t.stats.metadata}}),n("FooterComponent",[n("ServerSelector",{attrs:{"api-list":t.apiList,remain:t.remain,status:t.status},model:{value:t.server,callback:function(e){t.server=e},expression:"server"}})],1)],1)},s=[],o=(n("c740"),n("a9e3"),n("d3b7"),n("ac1f"),n("3ca3"),n("841c"),n("ddb0"),n("2b3d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid-stats"},[t._l(t.stats,(function(t,e){return n("CardStat",{key:e,attrs:{number:t,label:e,link:""}})})),t._l(t.metadata,(function(t,e){return n("CardStat",{key:e,attrs:{number:t,label:e}})}))],2)}),i=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.htmlTag,{ref:"card",tag:"component",staticClass:"card-stat",class:{"card-stat-pulse":t.activePulse},style:t.cssVars,attrs:{target:"_blank",href:t.linkString}},[n("div",{ref:"cardData",staticClass:"card-stat-data"},[n("animate-number",{ref:"number",staticClass:"card-stat-animated-count",style:t.animateNumberStyle,attrs:{number:t.number},on:{"animation-start":function(e){return t.setActivePulse(!0)},"animation-end":function(e){return t.setActivePulse(!1)}}}),n("div",{ref:"label",staticClass:"card-stat-label"},[t._v(t._s(t.label))])],1)])},c=[],l=(n("fb6a"),n("5319"),n("9911"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(t._s(t.displayNumber))])}),d=[],f={props:{number:{type:Number,default:100},duration:{type:Number,default:1e3}},data:function(){return{displayNumber:0,interval:!1,incrementing:!1,start:0}},watch:{number:{handler:function(t,e){t!==e&&this.animateNumber()},immediate:!0}},methods:{animateNumber:function(){var t=this,e=null;this.$emit("animation-start");var n=function n(a){e||(e=a);var r=Math.min((a-e)/t.duration,1);t.displayNumber=Math.floor(r*(t.number-t.start)+t.start),r<1?window.requestAnimationFrame(n):(t.start=t.displayNumber,t.$emit("animation-end"))};window.requestAnimationFrame(n)}}},p=f,m=n("2877"),h=Object(m["a"])(p,l,d,!1,null,null,null),v=h.exports,b=function(t,e){return t+Math.random()*(e-t)},y=function(){var t=b(1,360),e=b(0,80),n=b(30,70);return"hsl("+t+","+e+"%,"+n+"%)"},_=y,g=function(t,e){var n=document.createElement("canvas"),a=n.getContext("2d");return a.font=e,a.measureText(t).width},w=function(t,e){var n,a=0;do{a++,n=g(t,"".concat(a,"px Arial"))}while(n<e);return a},k=w,S=(n("a15b"),n("d81d"),n("466d"),function(t){return t.match(/[a-z]+/gi).map((function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()})).join("")}),C={name:"CardStat",components:{AnimateNumber:v},props:{number:{type:Number,required:!0},label:{type:String,required:!0},link:{type:Boolean,default:!1}},data:function(){return{activePulse:!1,bgColor:_(),animateNumberStyle:{}}},watch:{number:{handler:function(){this.resizeFont()}}},computed:{cssVars:function(){return{"--scaleStart":1,"--scaleEnd":1.2,"--backgroundColor":this.bgColor}},linkString:function(){return"https://rdoc.taxonworks.org/".concat(S(this.label).slice(0,-1),".html")},htmlTag:function(){return this.link?"a":"div"}},mounted:function(){this.resizeFont(),window.addEventListener("resize",this.resizeFont)},beforeDestroy:function(){window.removeEventListener("resize",this.resizeFont)},methods:{setActivePulse:function(t){this.activePulse=t},resizeFont:function(){var t=this.$refs.cardData,e=parseFloat(getComputedStyle(t,null).width.replace("px","")),n=k(this.number,e);this.animateNumberStyle={fontSize:"".concat(n,"px")}}}},x=C,j=(n("4358"),Object(m["a"])(x,u,c,!1,null,"31def1c2",null)),O=j.exports,P={name:"GridStats",components:{CardStat:O},props:{metadata:{type:Object,default:function(){return{}}},stats:{type:Object,default:function(){return{}}},randomColor:{type:Boolean,default:!1}}},M=P,N=(n("0d9a"),Object(m["a"])(M,o,i,!1,null,null,null)),$=N.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("div",{staticClass:"empty"}),a("nav",{staticClass:"navbar",class:t.menuState},[a("img",{staticClass:"brand",attrs:{src:n("798a"),height:"48px",alt:"TaxonWorks"}}),a("button",{staticClass:"toggle",attrs:{type:"button"},on:{click:t.setMenuState}}),a("div",{staticClass:"middle"},[t._t("middle")],2),a("div",{staticClass:"right"},[a("what-this"),t._l(t.links,(function(e,n){return a("a",{key:n,staticClass:"item",attrs:{href:e}},[t._v(t._s(n))])}))],2)])])},L=[],T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{staticClass:"modal-button item",attrs:{type:"button",href:"#"},on:{click:function(e){return t.setModalView(!0)}}},[t._v(" What is this? ")]),t.showModal?n("modal-component",{on:{close:function(e){return t.setModalView(!1)}}},[n("h3",{attrs:{slot:"header"},slot:"header"},[t._v("What's this")]),n("div",{attrs:{slot:"body"},slot:"body"},[n("p",[t._v("The purpose of this website is to provide a quick glimpse into the scope of TaxonWorks use.")]),n("ul",[n("li",[t._v("There is no one TaxonWorks, the numbers here reflect a single instance, as selected on the top of the page.")]),n("li",[t._v("Currently, clicking on a card takes you to the technical definition of that concept, as defined in code. We'll work to make this more accessible in the future.")]),n("li",[t._v("Find out more about the project and code via the links on top.")])]),n("p",[t._v("This website is also an "),n("a",{attrs:{href:"https://github.com/SpeciesFileGroup/taxonworks_stats"}},[t._v("open-source demonstration")]),t._v(" of how to build applications off of a TaxonWorks API, and serve them freely.")]),n("p",[t._v("Questions? We're always "),n("a",{attrs:{href:"https://gitter.im/SpeciesFileGroup/taxonworks"}},[t._v("available to chat")]),t._v(".")])])]):t._e()],1)},U=[],F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal-mask",on:{click:function(e){return t.$emit("close")},key:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.$emit("close")}}},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container",class:t.containerClass,style:t.containerStyle,on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"modal-header"},[n("div",{staticClass:"modal-close",on:{click:function(e){return t.$emit("close")}}}),t._t("header",[t._v(" default header ")])],2),n("div",{staticClass:"modal-body"},[t._t("body",[t._v(" default body ")])],2),n("div",{staticClass:"modal-footer"},[t._t("footer",[n("button",{staticClass:"modal-default-button",on:{click:function(e){return t.$emit("close")}}},[t._v(" OK ")])])],2)])])])])},A=[],z={props:{containerClass:{type:Object,default:function(){return{}}},containerStyle:{type:Object,default:function(){return{}}}},mounted:function(){document.addEventListener("keydown",this.handleKey)},destroyed:function(){document.removeEventListener("keydown",this.handleKey)},methods:{handleKey:function(t){"Escape"===t.key&&this.$emit("close")}}},W=z,q=(n("30db"),Object(m["a"])(W,F,A,!1,null,null,null)),G=q.exports,I={components:{ModalComponent:G},data:function(){return{showModal:!1}},methods:{setModalView:function(t){this.showModal=t}}},R=I,V=(n("17e5"),Object(m["a"])(R,T,U,!1,null,null,null)),J=V.exports,K={components:{WhatThis:J},data:function(){return{openMenu:!1,links:{Home:"https://taxonworks.org",Code:"https://github.com/SpeciesFileGroup/taxonworks",API:"https://api.taxonworks.org"}}},computed:{menuState:function(){return this.openMenu?"active":""}},methods:{setMenuState:function(){this.openMenu=!this.openMenu}}},D=K,H=(n("404b"),Object(m["a"])(D,E,L,!1,null,null,null)),B=H.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"server-selector"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.server,expression:"server"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.server=e.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:""},domProps:{value:void 0}},[t._v(" Choose a server ")]),t._l(t.apiList,(function(e){return n("option",{key:e.apiUrl,domProps:{value:e}},[t._v(" "+t._s(e.apiUrl)+" ")])}))],2),n("button",{staticClass:"json-button",attrs:{type:"button",disabled:!t.server},on:{click:t.openLink}},[t._v(" JSON link ")]),n("div",{staticClass:"status",style:{color:t.stateStatus}},[t._v(" Status: ("+t._s(t.status.message)+"). "),t.server?n("span",[t._v(t._s(t.refreshMessage))]):t._e()])])},X=[],Y={props:{value:{type:Object,default:void 0},apiList:{type:Array,required:!0},remain:{type:Number,required:!0},status:{type:Object,required:!0}},computed:{server:{get:function(){return this.value},set:function(t){this.$emit("input",t)}},isServerSelected:function(){return this.server?"a":"span"},refreshMessage:function(){return this.remain?"Refreshing in ".concat(this.remain):"Refreshing..."},stateStatus:function(){return this.status.state}},methods:{openLink:function(){window.open("".concat(this.server.apiUrl,"/stats"))}}},Z=Y,tt=(n("db3c"),Object(m["a"])(Z,Q,X,!1,null,null,null)),et=tt.exports,nt=n("bc3a"),at=n.n(nt),rt=n("7dc5"),st=n("fd2d"),ot=(n("99af"),n("25f0"),function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=new URLSearchParams(window.location.search),a=new URL(window.location.origin);n.set(t,e);var r=n.toString();history.pushState(null,null,"".concat(a,"?").concat(r.toString()))}),it=at.a.create();var ut={name:"App",components:{GridStats:$,HeaderNav:B,ServerSelector:et,FooterComponent:st["default"]},data:function(){return{apiList:rt,countdownProcess:void 0,refreshInSeconds:10,remain:0,server:{},stats:{},status:{state:"black",message:"Idle"}}},watch:{server:{handler:function(t){var e=t.apiParams,n=t.apiUrl;it.defaults.baseURL=n,it.defaults.params=e,clearTimeout(this.countdownProcess),ot("server",rt.findIndex((function(t){return t.apiUrl===n}))),this.loadStats()}}},created:function(){var t=new URLSearchParams(window.location.search),e=Number(t.get("server"));this.server=rt[e]||rt[0]},methods:{loadStats:function(){var t=this;it.get("/stats").then((function(e){t.stats=e.data,t.status={state:"green",message:"Successful"}}),(function(e){var n=e.response;t.status={state:"red",message:n.data.message}})).finally((function(){t.countdown(t.refreshInSeconds)}))},countdown:function(t){var e=this;this.remain=t,0===t?this.loadStats():this.countdownProcess=setTimeout((function(){e.countdown(t-1)}),1e3)}}},ct=ut,lt=(n("5c0b"),Object(m["a"])(ct,r,s,!1,null,null,null)),dt=lt.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(dt)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},6548:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-section"},[n("div",{staticClass:"empty"}),n("div",{staticClass:"footer"},[t._t("default")],2)])},r=[]},"798a":function(t,e,n){t.exports=n.p+"img/taxonworks_logo-full.63dd8c91.svg"},"7dc5":function(t){t.exports=JSON.parse('[{"apiUrl":"https://sfg.taxonworks.org/api/v1","apiParams":{"token":null,"project_id":null}},{"apiUrl":"https://sandbox.taxonworks.org/api/v1","apiParams":{"token":null,"project_id":null}},{"apiUrl":"https://sandcastle.taxonworks.org/api/v1","apiParams":{"token":null,"project_id":null}},{"apiUrl":"https://sandfly.taxonworks.org/api/v1","apiParams":{"token":null,"project_id":null}},{"apiUrl":"https://sandworm.taxonworks.org/api/v1","apiParams":{"token":null,"project_id":null}}]')},"87b8":function(t,e,n){},"8a7d":function(t,e,n){},"91b4":function(t,e,n){},"94d4":function(t,e,n){"use strict";var a=n("2e93"),r=n.n(a);e["default"]=r.a},"9c0c":function(t,e,n){},a2a2:function(t,e,n){},db3c:function(t,e,n){"use strict";n("0f84")},fd2d:function(t,e,n){"use strict";var a=n("6548"),r=n("94d4"),s=(n("53d7"),n("2877")),o=Object(s["a"])(r["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports}});
//# sourceMappingURL=app.0ee88186.js.map