(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e){e.exports={version:"2.1.53"}},104:function(e,t,n){e.exports=n(217)},154:function(e,t){},207:function(e,t,n){},209:function(e,t,n){},211:function(e,t,n){},213:function(e,t){Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;if("function"!==typeof e)throw new TypeError("predicate must be a function");for(var o=arguments[1],a=0;a<n;){var r=t[a];if(e.call(o,r,a,t))return r;a++}}}),String.prototype.endsWith||(String.prototype.endsWith=function(e,t){return(void 0===t||t>this.length)&&(t=this.length),this.substring(t-e.length,t)===e})},217:function(e,t,n){"use strict";n.r(t);var o=n(99),a=n.n(o),r=n(3),c=n(1),l=n(71),u=n.n(l),i=n(102),p=(n(207),function(e){var t=["Layout,\u5e03\u5c40","Button,\u6309\u94ae","Input,\u6587\u672c\u8f93\u5165","Card,\u5361\u7247","Cell,\u5355\u5143\u683c","Alert,\u63d0\u793a\u6846","Message,\u6d88\u606f\u6846","Dialog,\u5bf9\u8bdd\u6846","Popup,\u5f39\u51fa\u5c42","Radio,\u52fe\u9009\u6846","Switch,\u5f00\u5173","Toast,\u8f7b\u63d0\u793a","Loading,\u5168\u5c40\u52a0\u8f7d","Spin,\u52a0\u8f7d","ActionSheet,\u52a8\u4f5c\u6846","Tabs,\u6807\u7b7e\u9875","Space,\u7a7a\u683c\u5360\u4f4d","AspectRatio,\u5bbd\u9ad8\u6bd4","TimePicker,\u65f6\u95f4\u9009\u62e9"];return c.createElement("div",{className:"web-aside"},c.createElement("h1",null,"Auto UI",c.createElement("sup",null,"V ",i.version)),c.createElement("ul",null,c.createElement("li",null,c.createElement("a",null,"\u7ec4\u4ef6")),function(){var n=e.location.pathname;return t.map(function(t){var o=t.split(","),a="/".concat(o[0].toLowerCase()),r=u()("group-item",{active:n===a}),l=c.createElement("li",{className:r},c.createElement("a",{href:"javascript:;",onClick:function(){n!==a&&e.history.push(a)}},o[0],c.createElement("span",null,o[1])));return c.createElement(c.Fragment,{key:t},l)})}()))}),m=(n(209),function(e){return c.createElement("main",{className:"web-main"},e.children)}),h=c.lazy(function(){return n.e(11).then(n.bind(null,226))}),s=c.lazy(function(){return n.e(6).then(n.bind(null,227))}),f=c.lazy(function(){return n.e(13).then(n.bind(null,228))}),d=c.lazy(function(){return n.e(10).then(n.bind(null,229))}),E=c.lazy(function(){return n.e(7).then(n.bind(null,230))}),y=c.lazy(function(){return n.e(8).then(n.bind(null,231))}),b=c.lazy(function(){return n.e(4).then(n.bind(null,232))}),R=c.lazy(function(){return n.e(9).then(n.bind(null,233))}),x=c.lazy(function(){return n.e(15).then(n.bind(null,234))}),z=c.lazy(function(){return n.e(16).then(n.bind(null,235))}),v=c.lazy(function(){return n.e(19).then(n.bind(null,236))}),w=c.lazy(function(){return n.e(22).then(n.bind(null,237))}),g=c.lazy(function(){return n.e(12).then(n.bind(null,238))}),S=c.lazy(function(){return n.e(18).then(n.bind(null,239))}),k=c.lazy(function(){return n.e(3).then(n.bind(null,240))}),A=c.lazy(function(){return n.e(20).then(n.bind(null,241))}),T=c.lazy(function(){return n.e(17).then(n.bind(null,242))}),j=c.lazy(function(){return n.e(14).then(n.bind(null,243))}),C=c.lazy(function(){return n.e(21).then(n.bind(null,244))}),L=c.lazy(function(){return n.e(5).then(n.bind(null,245))}),N=n(5),O=(n(211),n(213),n(214),a()({history:Object(N.b)()}));O.router(function(e){return t=e.history,c.createElement(r.Router,{history:t},c.createElement(c.Suspense,{fallback:function(){return c.createElement("div",null)}},c.createElement(r.Route,{component:p}),c.createElement(m,null,c.createElement(r.Switch,null,c.createElement(r.Route,{exact:!0,path:"/layout",component:h}),c.createElement(r.Route,{exact:!0,path:"/button",component:s}),c.createElement(r.Route,{exact:!0,path:"/input",component:d}),c.createElement(r.Route,{exact:!0,path:"/card",component:E}),c.createElement(r.Route,{exact:!0,path:"/cell",component:y}),c.createElement(r.Route,{exact:!0,path:"/alert",component:b}),c.createElement(r.Route,{exact:!0,path:"/message",component:f}),c.createElement(r.Route,{exact:!0,path:"/dialog",component:R}),c.createElement(r.Route,{exact:!0,path:"/popup",component:x}),c.createElement(r.Route,{exact:!0,path:"/radio",component:z}),c.createElement(r.Route,{exact:!0,path:"/switch",component:v}),c.createElement(r.Route,{exact:!0,path:"/toast",component:w}),c.createElement(r.Route,{exact:!0,path:"/loading",component:g}),c.createElement(r.Route,{exact:!0,path:"/spin",component:S}),c.createElement(r.Route,{exact:!0,path:"/actionsheet",component:k}),c.createElement(r.Route,{exact:!0,path:"/tabs",component:A}),c.createElement(r.Route,{exact:!0,path:"/space",component:T}),c.createElement(r.Route,{exact:!0,path:"/navbar",component:j}),c.createElement(r.Route,{exact:!0,path:"/timepicker",component:C}),c.createElement(r.Route,{exact:!0,path:"/aspectratio",component:L}),c.createElement(r.Redirect,{from:"*",to:"/layout"}),c.createElement(r.Redirect,{from:"*",to:"/button"})))));var t}),O.start("#root")}},[[104,1,2]]]);
//# sourceMappingURL=main.2460e329.chunk.js.map