(function(t){function e(e){for(var a,o,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},s=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0025":function(t,e,n){},"0d9a":function(t,e,n){"use strict";n("8a7d")},"17e5":function(t,e,n){"use strict";n("91b4")},"2c3a":function(t,e,n){},"30db":function(t,e,n){"use strict";n("0025")},"404b":function(t,e,n){"use strict";n("2c3a")},5273:function(t,e,n){"use strict";var a=n("d321"),r=n.n(a);e["default"]=r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("87b8");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("HeaderNav",[n("template",{slot:"selectors"},[n("ServerSelector",{attrs:{"api-list":t.apiList},model:{value:t.server,callback:function(e){t.server=e},expression:"server"}}),n("ProjectSelector",{attrs:{projects:t.projects},model:{value:t.projectToken,callback:function(e){t.projectToken=e},expression:"projectToken"}})],1),n("template",{slot:"buttons"},[n("button",{staticClass:"json-button",attrs:{type:"button",disabled:!t.server},on:{click:t.openLink}},[t._v(" JSON ")]),n("button",{staticClass:"csv-button",attrs:{type:"button",disabled:!Object.keys(t.stats).length},on:{click:t.makeCSVFile}},[t._v(" CSV ")]),n("StatusMessage",{attrs:{server:t.server,status:t.status,remain:t.remain}})],1)],2),n("MobileBar",[n("div",{staticClass:"navbar-selectors"},[n("ServerSelector",{attrs:{"api-list":t.apiList},model:{value:t.server,callback:function(e){t.server=e},expression:"server"}}),n("ProjectSelector",{attrs:{projects:t.projects},model:{value:t.projectToken,callback:function(e){t.projectToken=e},expression:"projectToken"}}),n("StatusMessage",{attrs:{server:t.server,status:t.status,remain:t.remain}})],1)]),n("GridStats",{attrs:{stats:t.stats.data,metadata:t.stats.metadata}})],1)},s=[],o=(n("99af"),n("7db0"),n("caad"),n("d81d"),n("b64b"),n("d3b7"),n("07ac"),n("ac1f"),n("2532"),n("3ca3"),n("5319"),n("841c"),n("498a"),n("ddb0"),n("2b3d"),n("ade3")),i=n("2909"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid-stats"},[t._l(t.stats,(function(t,e){return n("CardStat",{key:e,attrs:{number:t,label:e,link:""}})})),t._l(t.metadata,(function(t,e){return n("CardStat",{key:e,attrs:{number:t,label:e}})}))],2)},l=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.htmlTag,{ref:"card",tag:"component",staticClass:"card-stat",class:{"card-stat-pulse":t.activePulse},style:t.cssVars,attrs:{target:"_blank",href:t.linkString}},[n("div",{ref:"cardData",staticClass:"card-stat-data"},[n("animate-number",{ref:"number",staticClass:"card-stat-animated-count",style:t.animateNumberStyle,attrs:{number:t.number},on:{"animation-start":function(e){return t.setActivePulse(!0)},"animation-end":function(e){return t.setActivePulse(!1)}}}),n("div",{ref:"label",staticClass:"card-stat-label"},[t._v(t._s(t.label))])],1)])},d=[],p=(n("fb6a"),n("a9e3"),n("25f0"),n("9911"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(t._s(t.displayNumber))])}),f=[],m={props:{number:{type:Number,default:100},duration:{type:Number,default:1e3}},data:function(){return{displayNumber:0,interval:!1,incrementing:!1,start:0}},watch:{number:{handler:function(t,e){t!==e&&this.animateNumber()},immediate:!0}},methods:{animateNumber:function(){var t=this,e=null;this.$emit("animation-start");var n=function n(a){e||(e=a);var r=Math.min((a-e)/t.duration,1);t.displayNumber=Math.floor(r*(t.number-t.start)+t.start),r<1?window.requestAnimationFrame(n):(t.start=t.displayNumber,t.$emit("animation-end"))};window.requestAnimationFrame(n)}}},v=m,h=n("2877"),b=Object(h["a"])(v,p,f,!1,null,null,null),y=b.exports,g=function(t,e){return t+Math.random()*(e-t)},_=function(){var t=g(1,360),e=g(0,80),n=g(30,70);return"hsl("+t+","+e+"%,"+n+"%)"},k=_,j=function(t,e){var n=document.createElement("canvas"),a=n.getContext("2d");return a.font=e,a.measureText(t).width},w=function(t,e){var n,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=0;do{r++,n=j(t,"".concat(r,"px Arial"))}while(n<e*a);return r},S=w,C=(n("a15b"),n("466d"),function(t){return t.match(/[a-z]+/gi).map((function(t){return t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()})).join("")}),x=[1,.35,.5],O={name:"CardStat",components:{AnimateNumber:y},props:{number:{type:Number,required:!0},label:{type:String,required:!0},link:{type:Boolean,default:!1}},data:function(){return{activePulse:!1,bgColor:k(),animateNumberStyle:{}}},watch:{number:{handler:function(){this.resizeFont()}}},computed:{cssVars:function(){return{"--scaleStart":1,"--scaleEnd":1.2,"--backgroundColor":this.bgColor}},linkString:function(){return"https://rdoc.taxonworks.org/".concat(C(this.label).slice(0,-1),".html")},htmlTag:function(){return this.link?"a":"div"}},mounted:function(){this.resizeFont(),window.addEventListener("resize",this.resizeFont)},beforeDestroy:function(){window.removeEventListener("resize",this.resizeFont)},methods:{setActivePulse:function(t){this.activePulse=t},resizeFont:function(){var t=this.$refs.cardData,e=parseFloat(getComputedStyle(t,null).width.replace("px","")),n=this.number.toString().length,a=S(this.number,e,x[n]);this.animateNumberStyle={fontSize:"".concat(a,"px")}}}},P=O,M=(n("d988"),Object(h["a"])(P,u,d,!1,null,"e465ba0a",null)),T=M.exports,$={name:"GridStats",components:{CardStat:T},props:{metadata:{type:Object,default:function(){return{}}},stats:{type:Object,default:function(){return{}}},randomColor:{type:Boolean,default:!1}}},E=$,L=(n("0d9a"),Object(h["a"])(E,c,l,!1,null,null,null)),U=L.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("div",{staticClass:"empty"}),a("nav",{staticClass:"navbar",class:t.menuState},[a("img",{staticClass:"brand",attrs:{src:n("798a"),height:"48px",alt:"TaxonWorks"}}),a("button",{staticClass:"toggle",attrs:{type:"button"},on:{click:t.setMenuState}}),a("div",{staticClass:"middle"},[a("div",{staticClass:"navbar-selectors"},[t._t("selectors")],2),t._t("buttons")],2),a("div",{staticClass:"right"},[a("what-this"),t._l(t.links,(function(e,n){return a("a",{key:n,staticClass:"item",attrs:{href:e}},[t._v(t._s(n))])}))],2)])])},A=[],q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a",{staticClass:"modal-button item",attrs:{type:"button",href:"#"},on:{click:function(e){return t.setModalView(!0)}}},[t._v(" What is this? ")]),t.showModal?n("modal-component",{on:{close:function(e){return t.setModalView(!1)}}},[n("h3",{attrs:{slot:"header"},slot:"header"},[t._v("What is this?")]),n("div",{attrs:{slot:"body"},slot:"body"},[n("p",[t._v("The purpose of this website is to provide a quick glimpse into the scope of TaxonWorks' use.")]),n("p",[n("ul",[n("li",[t._v("There is no one TaxonWorks, the numbers here reflect a single instance, the one selected at the top.")]),n("li",[t._v("Currently, clicking on a card takes you to the technical definition of that concept, as defined in code. We'll work to make this more accessible in the future.")]),n("li",[t._v("Find out more about the project and code via links at the top right.")])])]),n("p",[t._v("This website is also an "),n("a",{attrs:{href:"https://github.com/SpeciesFileGroup/taxonworks_stats"}},[t._v("open-source demonstration")]),t._v(" of how to build applications on top of a TaxonWorks API, and how to serve those application freely.")]),n("p",[t._v("Questions? We're always "),n("a",{attrs:{href:"https://gitter.im/SpeciesFileGroup/taxonworks"}},[t._v("available to chat")]),t._v(".")])])]):t._e()],1)},F=[],R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal-mask",on:{click:function(e){return t.$emit("close")},key:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.$emit("close")}}},[n("div",{staticClass:"modal-wrapper"},[n("div",{staticClass:"modal-container",class:t.containerClass,style:t.containerStyle,on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"modal-header"},[n("div",{staticClass:"modal-close",on:{click:function(e){return t.$emit("close")}}}),t._t("header",[t._v(" default header ")])],2),n("div",{staticClass:"modal-body"},[t._t("body",[t._v(" default body ")])],2),n("div",{staticClass:"modal-footer"},[t._t("footer",[n("button",{staticClass:"modal-default-button",on:{click:function(e){return t.$emit("close")}}},[t._v(" OK ")])])],2)])])])])},z=[],W={props:{containerClass:{type:Object,default:function(){return{}}},containerStyle:{type:Object,default:function(){return{}}}},mounted:function(){document.addEventListener("keydown",this.handleKey)},destroyed:function(){document.removeEventListener("keydown",this.handleKey)},methods:{handleKey:function(t){"Escape"===t.key&&this.$emit("close")}}},V=W,G=(n("30db"),Object(h["a"])(V,R,z,!1,null,null,null)),I=G.exports,B={components:{ModalComponent:I},data:function(){return{showModal:!1}},methods:{setModalView:function(t){this.showModal=t}}},D=B,J=(n("17e5"),Object(h["a"])(D,q,F,!1,null,null,null)),K=J.exports,H={components:{WhatThis:K},data:function(){return{openMenu:!1,links:{Home:"https://taxonworks.org",Code:"https://github.com/SpeciesFileGroup/taxonworks",API:"https://api.taxonworks.org"}}},computed:{menuState:function(){return this.openMenu?"active":""}},methods:{setMenuState:function(){this.openMenu=!this.openMenu}}},Q=H,X=(n("404b"),Object(h["a"])(Q,N,A,!1,null,null,null)),Y=X.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("select",{directives:[{name:"model",rawName:"v-model",value:t.server,expression:"server"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.server=e.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:""},domProps:{value:void 0}},[t._v(" Choose a server ")]),t._l(t.apiList,(function(e){return n("option",{key:e.apiUrl,domProps:{value:e}},[t._v(" "+t._s(e.apiUrl)+" ")])}))],2)},tt=[],et={props:{value:{type:Object,default:void 0},apiList:{type:Array,required:!0}},computed:{server:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{openLink:function(){window.open("".concat(this.server.apiUrl,"/stats"))}}},nt=et,at=Object(h["a"])(nt,Z,tt,!1,null,null,null),rt=at.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{color:t.status.state}},[t._v(" Status: "+t._s(t.status.message)+". "),t.server?n("span",[t._v(t._s(t.refreshMessage))]):t._e()])},ot=[],it={props:{status:{type:Object,require:!0},server:{type:Object,default:void 0},remain:{type:Number,required:!0}},computed:{refreshMessage:function(){return this.remain?"Refreshing in ".concat(this.remain):"Refreshing..."}}},ct=it,lt=Object(h["a"])(ct,st,ot,!1,null,null,null),ut=lt.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("select",{directives:[{name:"model",rawName:"v-model",value:t.project,expression:"project"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.project=e.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:""},domProps:{value:void 0}},[t._v(" All projects ")]),t._l(t.projects,(function(e,a){return n("option",{key:a,domProps:{value:a}},[t._v(" "+t._s(e)+" ")])}))],2)},pt=[],ft={props:{value:{type:String,default:void 0},projects:{type:Object,required:!0}},computed:{project:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}}},mt=ft,vt=Object(h["a"])(mt,dt,pt,!1,null,null,null),ht=vt.exports,bt=n("bc3a"),yt=n.n(bt),gt=n("7dc5"),_t=n("c61b"),kt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=new URLSearchParams(window.location.search),a=new URL(window.location.origin);n.set(t,e);var r=n.toString();history.pushState(null,null,"".concat(a,"?").concat(r.toString()))},jt=(n("4fad"),n("3835")),wt=function(t){return Object.entries(t).map((function(t){var e=Object(jt["a"])(t,2),n=e[0],a=e[1];return"".concat(n,",").concat(a)})).join("\r\n")},St=function(t,e){return"".concat(t.join(","),"\r\n").concat(wt(e))},Ct=yt.a.create();var xt={name:"App",components:{GridStats:U,HeaderNav:Y,ProjectSelector:ht,ServerSelector:rt,StatusMessage:ut,MobileBar:_t["default"]},data:function(){return{apiList:gt,countdownProcess:void 0,refreshInSeconds:10,remain:0,server:{},projects:{},projectToken:void 0,stats:{},status:{state:"black",message:"Idle"},requestCount:0,maxRequest:50}},computed:{refreshMessage:function(){return this.remain?"Refreshing in ".concat(this.remain):"Refreshing..."}},watch:{server:{handler:function(t){var e=t.apiParams,n=t.apiUrl,a=new URL(n).host;Ct.defaults.baseURL=n,Ct.defaults.params=e,document.title="TaxonWorks Stats - ".concat(a),clearTimeout(this.countdownProcess),kt("server",a),this.stats={},this.loadStats(),this.loadProjects()}},projectToken:{handler:function(t){this.setProjectToken(t),clearTimeout(this.countdownProcess),this.loadStats()}}},created:function(){var t=new URLSearchParams(window.location.search),e=t.get("server");this.server=gt.find((function(t){var n=t.apiUrl;return n.includes(e)}))||gt[0]},methods:{loadStats:function(){var t=this;this.requestCount++,this.requestCount>this.maxRequest&&(alert("Are you still here?"),this.requestCount=0),Ct.get("/stats").then((function(e){var n=e.data;t.stats=n,t.status={state:"green",message:"Successful"}}),(function(e){var n=e.response;t.status={state:"red",message:n.data.message}})).finally((function(){t.countdown(t.refreshInSeconds)}))},countdown:function(t){var e=this;this.remain=t,0===t?this.loadStats():this.countdownProcess=setTimeout((function(){e.countdown(t-1)}),1e3)},loadProjects:function(t){var e=this;Ct.get().then((function(t){var n=t.data;e.projects=Object.assign.apply(Object,[{}].concat(Object(i["a"])(n.open_projects)))}))},openLink:function(){window.open("".concat(this.server.apiUrl,"/stats"))},setProjectToken:function(t){Ct.defaults.params=Object.assign({},this.server.apiParams,{project_token:t})},makeCSVFile:function(){var t=Object.assign.apply(Object,[{}].concat(Object(i["a"])(Object.values(this.stats)))),e=["Metadata","Total"],n=Object.assign.apply(Object,[{}].concat(Object(i["a"])(Object.keys(t).sort().map((function(e){return Object(o["a"])({},e,t[e])}))))),a=new Blob([St(e,n)]),r=(new Date).toISOString().replace(/z|t/gi," ").trim(),s="".concat(new URL(this.server.apiUrl).host," ").concat(r,".csv"),c=document.createElement("a");c.href=URL.createObjectURL(a,{type:"text/csv;charset=utf-8;"}),c.download=s,document.body.appendChild(c),c.click(),document.body.removeChild(c)}}},Ot=xt,Pt=(n("5c0b"),Object(h["a"])(Ot,r,s,!1,null,null,null)),Mt=Pt.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(Mt)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"76e6":function(t,e,n){"use strict";n("8168")},"798a":function(t,e,n){t.exports=n.p+"img/taxonworks_logo-full.63dd8c91.svg"},"7dc5":function(t){t.exports=JSON.parse('[{"apiUrl":"https://sfg.taxonworks.org/api/v1","apiParams":{"token":null,"project_id":null}},{"apiUrl":"https://sandbox.taxonworks.org/api/v1","apiParams":{"token":null,"project_id":null}},{"apiUrl":"https://sandcastle.taxonworks.org/api/v1","apiParams":{"token":null,"project_id":null}},{"apiUrl":"https://sandfly.taxonworks.org/api/v1","apiParams":{"token":null,"project_id":null}},{"apiUrl":"https://sandworm.taxonworks.org/api/v1","apiParams":{"token":null,"project_id":null}}]')},8168:function(t,e,n){},"87b8":function(t,e,n){},"8a7d":function(t,e,n){},"91b4":function(t,e,n){},"9c0c":function(t,e,n){},"9eb1":function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mobile-bar-section"},[n("div",{staticClass:"empty"}),n("div",{staticClass:"mobile-bar"},[t._t("default")],2)])},r=[]},c61b:function(t,e,n){"use strict";var a=n("9eb1"),r=n("5273"),s=(n("76e6"),n("2877")),o=Object(s["a"])(r["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports},d321:function(t,e){},d988:function(t,e,n){"use strict";n("ef42")},ef42:function(t,e,n){}});
//# sourceMappingURL=app.51c58315.js.map