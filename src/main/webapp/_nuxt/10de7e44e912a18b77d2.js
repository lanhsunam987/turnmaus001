(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{348:function(t,e,r){var n=r(44),o=r(361),l=r(362),c="Expected a function",d=Math.max,f=Math.min;t.exports=function(t,e,r){var m,v,h,x,y,w,k=0,O=!1,$=!1,C=!0;if("function"!=typeof t)throw new TypeError(c);function _(time){var e=m,r=v;return m=v=void 0,k=time,x=t.apply(r,e)}function j(time){var t=time-w;return void 0===w||t>=e||t<0||$&&time-k>=h}function T(){var time=o();if(j(time))return P(time);y=setTimeout(T,function(time){var t=e-(time-w);return $?f(t,h-(time-k)):t}(time))}function P(time){return y=void 0,C&&m?_(time):(m=v=void 0,x)}function S(){var time=o(),t=j(time);if(m=arguments,v=this,w=time,t){if(void 0===y)return function(time){return k=time,y=setTimeout(T,e),O?_(time):x}(w);if($)return clearTimeout(y),y=setTimeout(T,e),_(w)}return void 0===y&&(y=setTimeout(T,e)),x}return e=l(e)||0,n(r)&&(O=!!r.leading,h=($="maxWait"in r)?d(l(r.maxWait)||0,e):h,C="trailing"in r?!!r.trailing:C),S.cancel=function(){void 0!==y&&clearTimeout(y),k=0,m=w=v=y=void 0},S.flush=function(){return void 0===y?x:P(o())},S}},361:function(t,e,r){var n=r(28);t.exports=function(){return n.Date.now()}},362:function(t,e,r){var n=r(44),o=r(92),l=NaN,c=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,m=/^0o[0-7]+$/i,v=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return l;if(n(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=n(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(c,"");var r=f.test(t);return r||m.test(t)?v(t.slice(2),r?2:8):d.test(t)?l:+t}},363:function(t,e,r){var content=r(400);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("49d6ff9f",content,!1,{sourceMap:!1})},399:function(t,e,r){"use strict";var n=r(363);r.n(n).a},400:function(t,e,r){(t.exports=r(18)(!1)).push([t.i,"@-webkit-keyframes spinAround-data-v-1add7df4{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spinAround-data-v-1add7df4{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.c-vert-center[data-v-1add7df4]{display:-webkit-box!important;display:flex!important;-webkit-box-align:center!important;align-items:center!important}.c-vert-center[data-v-1add7df4]>:nth-child(2){margin-left:4px!important}.c-vert-inline-center[data-v-1add7df4]{display:-webkit-inline-box!important;display:inline-flex!important;-webkit-box-align:center!important;align-items:center!important}.c-vert-inline-center[data-v-1add7df4]>:nth-child(2){margin-left:4px!important}table tbody tr td[data-v-1add7df4],table thead tr td[data-v-1add7df4]{vertical-align:middle!important}.wrapper[data-v-1add7df4]{width:800px;padding:20px}.form-footer[data-v-1add7df4]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}",""])},428:function(t,e,r){"use strict";r.r(e);r(53),r(30),r(25),r(14),r(34);var n=r(27),o=(r(43),r(24),r(20)),l=r(348);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={data:function(){return{phone:null,name:null,email:null}},methods:{login:function(){var t,e,r,n;return regeneratorRuntime.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,regeneratorRuntime.awrap(this.$refs.form.validate());case 3:if(l.sent){l.next=6;break}return l.abrupt("return");case 6:return t=this.name,e=this.phone,r=this.email,l.next=11,regeneratorRuntime.awrap(this.$axios.post(o.a.loginCustomer,{name:t,phone:e,email:r}));case 11:(n=l.sent).data&&n.data[this.$API.STATUS]===this.$API.OK&&(this.$store.commit("SET_LOGIN_CUSTOMER",d({},n.data,{name:t,phone:e})),this.$router.push("/user")),l.next=18;break;case 15:l.prev=15,l.t0=l.catch(0),console.log("TCL: login -> error",l.t0);case 18:case"end":return l.stop()}}),null,this,[[0,15]])},getCustomer:function(){var t,e,r=arguments;return regeneratorRuntime.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:this.phone,n.prev=1,n.next=4,regeneratorRuntime.awrap(this.$axios.post(o.a.getCustomer,{phone:t}));case 4:(e=n.sent)&&e.data&&(this.name=e.data.name,this.email=e.data.email),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log("TCL: getCustomer -> error",n.t0);case 11:case"end":return n.stop()}}),null,this,[[1,8]])},getCustomerDebounce:r.n(l)()((function(){this.getCustomer()}),1e3)}},m=(r(399),r(7)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[r("h2",{staticClass:"title"},[t._v(t._s(t.$t("welcome_to",{name:"XXX"})))]),t._v(" "),r("validation-observer",{ref:"form",attrs:{tag:"div"}},[r("div",{staticClass:"columns is-multiline"},[r("div",{staticClass:"column is-12"},[r("validation-provider",{attrs:{name:t.$t("phone"),rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors,o=e.failed;return[r("b-field",{attrs:{label:t.$t("phone"),"label-position":"on-border",type:o?"is-danger":"",message:n[0]}},[r("b-input",{attrs:{placeholder:t.$t("phone")},on:{input:function(e){return t.getCustomerDebounce(300)}},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1)]}}])})],1),t._v(" "),r("div",{staticClass:"column is-12"},[r("validation-provider",{attrs:{name:t.$t("name"),rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors,o=e.failed;return[r("b-field",{attrs:{label:t.$t("name"),"label-position":"on-border",type:o?"is-danger":"",message:n[0]}},[r("b-input",{attrs:{placeholder:t.$t("name")},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)]}}])})],1),t._v(" "),r("div",{staticClass:"column is-12"},[r("validation-provider",{attrs:{name:t.$t("email"),rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors,o=e.failed;return[r("b-field",{attrs:{label:t.$t("email"),"label-position":"on-border",type:o?"is-danger":"",message:n[0]}},[r("b-input",{attrs:{placeholder:t.$t("email")},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)]}}])})],1)]),t._v(" "),r("div",{staticClass:"form-footer"},[r("b-button",{attrs:{type:"is-primary"},on:{click:t.login}},[t._v(t._s("login"))])],1)])],1)}),[],!1,null,"1add7df4",null);e.default=component.exports}}]);