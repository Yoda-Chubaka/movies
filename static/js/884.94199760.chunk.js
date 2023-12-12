/*! For license information please see 884.94199760.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{454:function(t,n,r){r.d(n,{a:function(){return u}});var e,o=r(430),i=r(168),a=r(867).ZP.div(e||(e=(0,i.Z)(["\n    text-align: center;\n    margin-top: 150px;\n    margin-left: auto;\n    margin-right: auto;\n"]))),c=r(184),u=function(){return(0,c.jsx)(a,{children:(0,c.jsx)(o.p2,{height:"150",width:"150",color:"#000C66",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"circles-loading"})})}},884:function(t,n,r){r.r(n);var e=r(439),o=r(454),i=r(791),a=r(689),c=r(87),u=r(390),s=r(558),l=r(184);n.default=function(){var t,n,r=(0,a.UO)().movieId,f=(0,i.useState)(!0),h=(0,e.Z)(f,2),p=h[0],d=h[1],v=(0,i.useState)(null),y=(0,e.Z)(v,2),g=y[0],x=y[1],w=(0,a.TH)(),m=(0,i.useRef)(null!==(t=null===(n=w.state)||void 0===n?void 0:n.from)&&void 0!==t?t:"/movies");if((0,i.useEffect)((function(){r&&(0,u.Y5)("/movie",r).then((function(t){x(t)})).catch(u.NI).finally((function(){return d(!1)}))}),[r]),g){var b=g.poster_path,j=g.title,k=g.original_title,L=g.release_date,E=g.genres,Z=g.vote_average,_=g.overview;return(0,l.jsxs)(s.dE,{children:[(0,l.jsx)(s.Fg,{to:m.current,children:"Go back"}),(0,l.jsx)("h2",{children:"Movie Details:"}),p&&(0,l.jsx)(o.a,{}),g&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(s.O2,{children:[(0,l.jsx)("img",{src:b?"http://image.tmdb.org/t/p/w342".concat(b):"https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg",alt:j,width:"200"}),(0,l.jsxs)(s.UE,{children:[(0,l.jsx)("h3",{children:k}),(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"Release date: "})," ",L||"No information"]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"Genres: "}),E.length>0?E.map((function(t){return(0,l.jsxs)("span",{children:[" ",t.name]},t.id)})):"No information"]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"Ranking: "})," ",Z||"No information"]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"Overview: "})," ",_||"No information"]})]})]}),(0,l.jsx)("h3",{children:"Additional information:"}),(0,l.jsxs)(s.Z,{children:[(0,l.jsx)("li",{children:(0,l.jsx)(c.rU,{to:"cast",children:(0,l.jsx)(s.iH,{children:"Cast"})})}),(0,l.jsx)("li",{children:(0,l.jsx)(c.rU,{to:"reviews",children:(0,l.jsx)(s.iH,{children:"Reviews"})})})]}),(0,l.jsx)(i.Suspense,{fallback:(0,l.jsx)("div",{children:"Loading..."}),children:(0,l.jsx)(a.j3,{})})]})]})}}},558:function(t,n,r){r.d(n,{Fg:function(){return p},O2:function(){return d},UE:function(){return v},Z:function(){return y},dE:function(){return h},iH:function(){return g}});var e,o,i,a,c,u,s=r(168),l=r(867),f=r(87),h=l.ZP.section(e||(e=(0,s.Z)(["\npadding: 40px;\ndisplay: flex;\nflex-direction: column;\ngap: 20px;\nheight: 100vw;\ncolor: #fff;\nbackground-color: #101010;\n"]))),p=(0,l.ZP)(f.rU)(o||(o=(0,s.Z)(["\n  color: #fff;\n  font-weight: 700;\n  padding: 6px;\n  text-align: center;\n  border: 1px solid #000C66;\n  width: 100px;\n  &.active {\n    cursor: pointer;\n  }\n  \n  &:hover, &:focus {\n    border-radius: 4px;\n    background-color: #000C66;\n    color: #fff;\n  }\n"]))),d=l.ZP.div(i||(i=(0,s.Z)(["\ndisplay: flex;\ngap: 20px;\n"]))),v=l.ZP.div(a||(a=(0,s.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 20px;\nwidth: 400px;\n"]))),y=l.ZP.ul(c||(c=(0,s.Z)(["\ndisplay: flex;\nflex-direction: column;\ngap: 10px;\nfont-weight: 500;\n"]))),g=l.ZP.a(u||(u=(0,s.Z)(["\ncolor: #fff;\n&.active {\n    cursor: pointer;\n    text-decoration: underline;\n  \n  }\n  \n  &:hover, &:focus {\n    text-decoration: underline;\n    \n  }\n"])))},390:function(t,n,r){r.d(n,{Hx:function(){return x},NI:function(){return m},Pu:function(){return s},Y5:function(){return d},bI:function(){return h},uV:function(){return y},vw:function(){return l}});var e=r(861),o=r(243),i=r(686);function a(){a=function(){return n};var t,n={},r=Object.prototype,e=r.hasOwnProperty,o=Object.defineProperty||function(t,n,r){t[n]=r.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(t,n,r){return Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{l({},"")}catch(t){l=function(t,n,r){return t[n]=r}}function f(t,n,r,e){var i=n&&n.prototype instanceof g?n:g,a=Object.create(i.prototype),c=new P(e||[]);return o(a,"_invoke",{value:Z(t,r,c)}),a}function h(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=f;var p="suspendedStart",d="executing",v="completed",y={};function g(){}function x(){}function w(){}var m={};l(m,c,(function(){return this}));var b=Object.getPrototypeOf,j=b&&b(b(S([])));j&&j!==r&&e.call(j,c)&&(m=j);var k=w.prototype=g.prototype=Object.create(m);function L(t){["next","throw","return"].forEach((function(n){l(t,n,(function(t){return this._invoke(n,t)}))}))}function E(t,n){function r(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&e.call(l,"__await")?n.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):n.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return i=i?i.then(o,o):o()}})}function Z(n,r,e){var o=p;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(e.method=i,e.arg=a;;){var c=e.delegate;if(c){var u=_(c,e);if(u){if(u===y)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(o===p)throw o=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);o=d;var s=h(n,r,e);if("normal"===s.type){if(o=e.done?v:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(o=v,e.method="throw",e.arg=s.arg)}}}function _(n,r){var e=r.method,o=n.iterator[e];if(o===t)return r.delegate=null,"throw"===e&&n.iterator.return&&(r.method="return",r.arg=t,_(n,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),y;var i=h(o,n.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[n.resultName]=a.value,r.next=n.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function O(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function N(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function S(n){if(n||""===n){var r=n[c];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function r(){for(;++o<n.length;)if(e.call(n,o))return r.value=n[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof n+" is not iterable")}return x.prototype=w,o(k,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:x,configurable:!0}),x.displayName=l(w,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===x||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},n.awrap=function(t){return{__await:t}},L(E.prototype),l(E.prototype,u,(function(){return this})),n.AsyncIterator=E,n.async=function(t,r,e,o,i){void 0===i&&(i=Promise);var a=new E(f(t,r,e,o),i);return n.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(k),l(k,s,"Generator"),l(k,c,(function(){return this})),l(k,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),r=[];for(var e in n)r.push(e);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},n.values=S,P.prototype={constructor:P,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!n)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function o(e,o){return c.type="throw",c.arg=n,r.next=e,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=e.call(a,"catchLoc"),s=e.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),y},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),y}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var o=e.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,r,e){return this.delegate={iterator:S(n),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=t),y}},n}var c="https://api.themoviedb.org/3",u="43596775cda6588db61d2519acdb98b6",s={position:"center-center",timeout:3e3,width:"400px",fontSize:"24px"};function l(t){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(a().mark((function t(n){var r,e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="".concat(c).concat(n,"?api_key=").concat(u),t.next=3,o.Z.get(r);case 3:return e=t.sent,t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t,n){return p.apply(this,arguments)}function p(){return(p=(0,e.Z)(a().mark((function t(n,r){var e,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(c).concat(n,"?api_key=").concat(u,"&query=").concat(r),t.next=3,o.Z.get(e);case 3:return i=t.sent,t.abrupt("return",i.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t,n){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(a().mark((function t(n,r){var e,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(c).concat(n,"/").concat(r,"?api_key=").concat(u),t.next=3,o.Z.get(e);case 3:return i=t.sent,t.abrupt("return",i.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t,n){return g.apply(this,arguments)}function g(){return(g=(0,e.Z)(a().mark((function t(n,r){var e,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(c).concat(n,"/").concat(r,"/credits?api_key=").concat(u),t.next=3,o.Z.get(e);case 3:return i=t.sent,t.abrupt("return",i.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t,n){return w.apply(this,arguments)}function w(){return(w=(0,e.Z)(a().mark((function t(n,r){var e,i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(c).concat(n,"/").concat(r,"/reviews?api_key=").concat(u),t.next=3,o.Z.get(e);case 3:return i=t.sent,t.abrupt("return",i.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(){i.Notify.failure("Oops! Something went wrong! Try reloading the page or make another choice!",s)}}}]);
//# sourceMappingURL=884.94199760.chunk.js.map