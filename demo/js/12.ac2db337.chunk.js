(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{218:function(n,a,t){"use strict";function s(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}t.d(a,"a",function(){return s})},219:function(n,a,t){"use strict";function s(n,a){for(var t=0;t<a.length;t++){var s=a[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}function e(n,a,t){return a&&s(n.prototype,a),t&&s(n,t),n}t.d(a,"a",function(){return e})},220:function(n,a,t){"use strict";function s(n){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}t.d(a,"a",function(){return s})},221:function(n,a,t){"use strict";var s=t(1);t(222);a.a=function(n){return s.createElement("div",{className:"mobile-preview",key:n.link},s.createElement("header",null,n.link),s.createElement("main",null,s.createElement("iframe",{src:n.link,frameBorder:"0",seamless:!0,width:375,height:667})))}},222:function(n,a,t){},224:function(n,a,t){"use strict";function s(n){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function e(n){return(e="function"===typeof Symbol&&"symbol"===s(Symbol.iterator)?function(n){return s(n)}:function(n){return n&&"function"===typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":s(n)})(n)}function o(n,a){return!a||"object"!==e(a)&&"function"!==typeof a?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):a}t.d(a,"a",function(){return o})},225:function(n,a,t){"use strict";function s(n,a){return(s=Object.setPrototypeOf||function(n,a){return n.__proto__=a,n})(n,a)}function e(n,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),a&&s(n,a)}t.d(a,"a",function(){return e})},238:function(n,a,t){"use strict";t.r(a),t.d(a,"default",function(){return k});var s=t(218),e=t(219),o=t(224),p=t(220),c=t(225),l=t(1),u=t(71),r=t.n(u),i=t(221),k=function(n){function a(){var n,t;Object(s.a)(this,a);for(var e=arguments.length,c=new Array(e),l=0;l<e;l++)c[l]=arguments[l];return(t=Object(o.a)(this,(n=Object(p.a)(a)).call.apply(n,[this].concat(c)))).state={previewUrl:"https://aotuzuche.github.io/auto-ui/examples/#/loading"},t.onCodeClick=function(n){t.setState({previewUrl:"https://aotuzuche.github.io/auto-ui/examples/#"+n})},t}return Object(c.a)(a,n),Object(e.a)(a,[{key:"render",value:function(){return l.createElement("div",null,l.createElement("div",{className:"markdown-content"},l.createElement("h1",null,"Loading \u5168\u5c40\u52a0\u8f7d"),l.createElement("h2",null,"\u57fa\u672c\u4f7f\u7528"),l.createElement("div",{className:r()("code-box",{active:this.state.previewUrl.endsWith("/loading")}),onClick:this.onCodeClick.bind(null,"/loading")},l.createElement("header",null,"\u57fa\u672c\u4f7f\u7528"),l.createElement("div",{className:"bd"},l.createElement("pre",{className:"language-tsx"},l.createElement("code",{className:"language-tsx",dangerouslySetInnerHTML:{__html:'<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Loading <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'auto-ui\'</span>\n\n<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text"> = () => </span><span class="token punctuation">{</span>\n  <span class="token function">Loading</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token keyword">return</span> <span class="token keyword">null</span>\n<span class="token punctuation">}</span><span class="token plain-text">\n\nexport default Demo\n</span>'}})))),l.createElement("h2",null,"\u63d0\u793a"),l.createElement("h2",null,"\u5173\u95ed"),l.createElement("div",{className:r()("code-box",{active:this.state.previewUrl.endsWith("/loading_close")}),onClick:this.onCodeClick.bind(null,"/loading_close")},l.createElement("header",null,"close"),l.createElement("div",{className:"bd"},l.createElement("pre",{className:"language-tsx"},l.createElement("code",{className:"language-tsx",dangerouslySetInnerHTML:{__html:'<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Layout<span class="token punctuation">,</span> Loading <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'auto-ui\'</span>\n\n<span class="token keyword">const</span> Demo<span class="token punctuation">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>any</span><span class="token punctuation">></span></span><span class="token plain-text"> = () => </span><span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token function-variable function">onClick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">Loading</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span>Loading<span class="token punctuation">.</span>hide<span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>onClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\u70b9\u51fb\u52a0\u8f7d</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token plain-text">\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout.Body</span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Layout</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token plain-text">\n\nexport default Demo\n</span>'}}))))),l.createElement(i.a,{link:this.state.previewUrl}))}}]),a}(l.PureComponent)}}]);
//# sourceMappingURL=12.ac2db337.chunk.js.map