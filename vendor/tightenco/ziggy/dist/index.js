!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self).route=n()}(this,function(){function t(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function n(n,r,e){return r&&t(n.prototype,r),e&&t(n,e),n}function r(){return(r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t}).apply(this,arguments)}function e(t){return(e=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,n){return(i=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function u(t,n,r){return(u=o()?Reflect.construct:function(t,n,r){var e=[null];e.push.apply(e,n);var o=new(Function.bind.apply(t,e));return r&&i(o,r.prototype),o}).apply(null,arguments)}function f(t){var n="function"==typeof Map?new Map:void 0;return(f=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return u(t,arguments,e(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),i(r,t)})(t)}var c=Object.prototype.hasOwnProperty,a=Array.isArray,l=function(){for(var t=[],n=0;n<256;++n)t.push("%"+((n<16?"0":"")+n.toString(16)).toUpperCase());return t}(),s=function(t,n){for(var r=n&&n.plainObjects?Object.create(null):{},e=0;e<t.length;++e)void 0!==t[e]&&(r[e]=t[e]);return r},v={arrayToObject:s,assign:function(t,n){return Object.keys(n).reduce(function(t,r){return t[r]=n[r],t},t)},combine:function(t,n){return[].concat(t,n)},compact:function(t){for(var n=[{obj:{o:t},prop:"o"}],r=[],e=0;e<n.length;++e)for(var i=n[e],o=i.obj[i.prop],u=Object.keys(o),f=0;f<u.length;++f){var c=u[f],l=o[c];"object"==typeof l&&null!==l&&-1===r.indexOf(l)&&(n.push({obj:o,prop:c}),r.push(l))}return function(t){for(;t.length>1;){var n=t.pop(),r=n.obj[n.prop];if(a(r)){for(var e=[],i=0;i<r.length;++i)void 0!==r[i]&&e.push(r[i]);n.obj[n.prop]=e}}}(n),t},decode:function(t,n,r){var e=t.replace(/\+/g," ");if("iso-8859-1"===r)return e.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(e)}catch(t){return e}},encode:function(t,n,r){if(0===t.length)return t;var e=t;if("symbol"==typeof t?e=Symbol.prototype.toString.call(t):"string"!=typeof t&&(e=String(t)),"iso-8859-1"===r)return escape(e).replace(/%u[0-9a-f]{4}/gi,function(t){return"%26%23"+parseInt(t.slice(2),16)+"%3B"});for(var i="",o=0;o<e.length;++o){var u=e.charCodeAt(o);45===u||46===u||95===u||126===u||u>=48&&u<=57||u>=65&&u<=90||u>=97&&u<=122?i+=e.charAt(o):u<128?i+=l[u]:u<2048?i+=l[192|u>>6]+l[128|63&u]:u<55296||u>=57344?i+=l[224|u>>12]+l[128|u>>6&63]+l[128|63&u]:(u=65536+((1023&u)<<10|1023&e.charCodeAt(o+=1)),i+=l[240|u>>18]+l[128|u>>12&63]+l[128|u>>6&63]+l[128|63&u])}return i},isBuffer:function(t){return!(!t||"object"!=typeof t||!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t)))},isRegExp:function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},maybeMap:function(t,n){if(a(t)){for(var r=[],e=0;e<t.length;e+=1)r.push(n(t[e]));return r}return n(t)},merge:function t(n,r,e){if(!r)return n;if("object"!=typeof r){if(a(n))n.push(r);else{if(!n||"object"!=typeof n)return[n,r];(e&&(e.plainObjects||e.allowPrototypes)||!c.call(Object.prototype,r))&&(n[r]=!0)}return n}if(!n||"object"!=typeof n)return[n].concat(r);var i=n;return a(n)&&!a(r)&&(i=s(n,e)),a(n)&&a(r)?(r.forEach(function(r,i){if(c.call(n,i)){var o=n[i];o&&"object"==typeof o&&r&&"object"==typeof r?n[i]=t(o,r,e):n.push(r)}else n[i]=r}),n):Object.keys(r).reduce(function(n,i){var o=r[i];return n[i]=c.call(n,i)?t(n[i],o,e):o,n},i)}},d=String.prototype.replace,p=/%20/g,y={RFC1738:"RFC1738",RFC3986:"RFC3986"},h=v.assign({default:y.RFC3986,formatters:{RFC1738:function(t){return d.call(t,p,"+")},RFC3986:function(t){return String(t)}}},y),b=Object.prototype.hasOwnProperty,g={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,n){return t+"["+n+"]"},repeat:function(t){return t}},j=Array.isArray,m=Array.prototype.push,O=function(t,n){m.apply(t,j(n)?n:[n])},w=Date.prototype.toISOString,R=h.default,E={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:v.encode,encodeValuesOnly:!1,format:R,formatter:h.formatters[R],indices:!1,serializeDate:function(t){return w.call(t)},skipNulls:!1,strictNullHandling:!1},k=function t(n,r,e,i,o,u,f,c,a,l,s,d,p){var y,h=n;if("function"==typeof f?h=f(r,h):h instanceof Date?h=l(h):"comma"===e&&j(h)&&(h=v.maybeMap(h,function(t){return t instanceof Date?l(t):t}).join(",")),null===h){if(i)return u&&!d?u(r,E.encoder,p,"key"):r;h=""}if("string"==typeof(y=h)||"number"==typeof y||"boolean"==typeof y||"symbol"==typeof y||"bigint"==typeof y||v.isBuffer(h))return u?[s(d?r:u(r,E.encoder,p,"key"))+"="+s(u(h,E.encoder,p,"value"))]:[s(r)+"="+s(String(h))];var b,g=[];if(void 0===h)return g;if(j(f))b=f;else{var m=Object.keys(h);b=c?m.sort(c):m}for(var w=0;w<b.length;++w){var R=b[w],k=h[R];if(!o||null!==k){var S=j(h)?"function"==typeof e?e(r,R):r:r+(a?"."+R:"["+R+"]");O(g,t(k,S,e,i,o,u,f,c,a,l,s,d,p))}}return g},S=Object.prototype.hasOwnProperty,x=Array.isArray,C={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:v.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},D=function(t){return t.replace(/&#(\d+);/g,function(t,n){return String.fromCharCode(parseInt(n,10))})},N=function(t,n){return t&&"string"==typeof t&&n.comma&&t.indexOf(",")>-1?t.split(","):t},T=function(t,n,r,e){if(t){var i=r.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,o=/(\[[^[\]]*])/g,u=r.depth>0&&/(\[[^[\]]*])/.exec(i),f=u?i.slice(0,u.index):i,c=[];if(f){if(!r.plainObjects&&S.call(Object.prototype,f)&&!r.allowPrototypes)return;c.push(f)}for(var a=0;r.depth>0&&null!==(u=o.exec(i))&&a<r.depth;){if(a+=1,!r.plainObjects&&S.call(Object.prototype,u[1].slice(1,-1))&&!r.allowPrototypes)return;c.push(u[1])}return u&&c.push("["+i.slice(u.index)+"]"),function(t,n,r,e){for(var i=e?n:N(n,r),o=t.length-1;o>=0;--o){var u,f=t[o];if("[]"===f&&r.parseArrays)u=[].concat(i);else{u=r.plainObjects?Object.create(null):{};var c="["===f.charAt(0)&&"]"===f.charAt(f.length-1)?f.slice(1,-1):f,a=parseInt(c,10);r.parseArrays||""!==c?!isNaN(a)&&f!==c&&String(a)===c&&a>=0&&r.parseArrays&&a<=r.arrayLimit?(u=[])[a]=i:u[c]=i:u={0:i}}i=u}return i}(c,n,r,e)}},F=function(){function t(t,n,r){var e;this.name=t,this.definition=n,this.bindings=null!=(e=n.bindings)?e:{},this.config=r}var r=t.prototype;return r.matchesUrl=function(t){if(!this.definition.methods.includes("GET"))return!1;var n=this.template.replace(/\/{[^}?]*\?}/g,"(/[^/?]+)?").replace(/{[^}]+}/g,"[^/?]+").replace(/^\w+:\/\//,"");return new RegExp("^"+n+"$").test(t.replace(/\/+$/,"").split("?").shift())},r.compile=function(t){var n=this;return this.parameterSegments.length?this.template.replace(/{([^}?]+)\??}/g,function(r,e){var i;if([null,void 0].includes(t[e])&&n.parameterSegments.find(function(t){return t.name===e}).required)throw new Error("Ziggy error: '"+e+"' parameter is required for route '"+n.name+"'.");return encodeURIComponent(null!=(i=t[e])?i:"")}).replace(/\/+$/,""):this.template},n(t,[{key:"template",get:function(){return((this.config.absolute?this.definition.domain?""+this.config.url.match(/^\w+:\/\//)[0]+this.definition.domain+(this.config.port?":"+this.config.port:""):this.config.url:"")+"/"+this.definition.uri).replace(/\/+$/,"")}},{key:"parameterSegments",get:function(){var t,n;return null!=(t=null===(n=this.template.match(/{[^}?]+\??}/g))||void 0===n?void 0:n.map(function(t){return{name:t.replace(/{|\??}/g,""),required:!/\?}$/.test(t)}}))?t:[]}}]),t}(),$=function(t){var e,i;function o(n,e,i,o){var u,f;if(void 0===i&&(i=!0),(f=t.call(this)||this).t=null!=(u=null!=o?o:Ziggy)?u:null===globalThis||void 0===globalThis?void 0:globalThis.Ziggy,f.t=r({},f.t,{absolute:i}),n){if(!f.t.routes[n])throw new Error("Ziggy error: route '"+n+"' is not in the route list.");f.i=new F(n,f.t.routes[n],f.t),f.u=f.l(e)}return f}i=t,(e=o).prototype=Object.create(i.prototype),e.prototype.constructor=e,e.__proto__=i;var u=o.prototype;return u.toString=function(){var t=this,n=Object.keys(this.u).filter(function(n){return!t.i.parameterSegments.some(function(t){return t.name===n})}).filter(function(t){return"_query"!==t}).reduce(function(n,e){var i;return r({},n,((i={})[e]=t.u[e],i))},{});return this.i.compile(this.u)+function(t,n){var r,e=t,i=function(t){if(!t)return E;if(null!=t.encoder&&"function"!=typeof t.encoder)throw new TypeError("Encoder has to be a function.");var n=t.charset||E.charset;if(void 0!==t.charset&&"utf-8"!==t.charset&&"iso-8859-1"!==t.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=h.default;if(void 0!==t.format){if(!b.call(h.formatters,t.format))throw new TypeError("Unknown format option provided.");r=t.format}var e=h.formatters[r],i=E.filter;return("function"==typeof t.filter||j(t.filter))&&(i=t.filter),{addQueryPrefix:"boolean"==typeof t.addQueryPrefix?t.addQueryPrefix:E.addQueryPrefix,allowDots:void 0===t.allowDots?E.allowDots:!!t.allowDots,charset:n,charsetSentinel:"boolean"==typeof t.charsetSentinel?t.charsetSentinel:E.charsetSentinel,delimiter:void 0===t.delimiter?E.delimiter:t.delimiter,encode:"boolean"==typeof t.encode?t.encode:E.encode,encoder:"function"==typeof t.encoder?t.encoder:E.encoder,encodeValuesOnly:"boolean"==typeof t.encodeValuesOnly?t.encodeValuesOnly:E.encodeValuesOnly,filter:i,formatter:e,serializeDate:"function"==typeof t.serializeDate?t.serializeDate:E.serializeDate,skipNulls:"boolean"==typeof t.skipNulls?t.skipNulls:E.skipNulls,sort:"function"==typeof t.sort?t.sort:null,strictNullHandling:"boolean"==typeof t.strictNullHandling?t.strictNullHandling:E.strictNullHandling}}(n);"function"==typeof i.filter?e=(0,i.filter)("",e):j(i.filter)&&(r=i.filter);var o=[];if("object"!=typeof e||null===e)return"";var u=g[n&&n.arrayFormat in g?n.arrayFormat:n&&"indices"in n?n.indices?"indices":"repeat":"indices"];r||(r=Object.keys(e)),i.sort&&r.sort(i.sort);for(var f=0;f<r.length;++f){var c=r[f];i.skipNulls&&null===e[c]||O(o,k(e[c],c,u,i.strictNullHandling,i.skipNulls,i.encode?i.encoder:null,i.filter,i.sort,i.allowDots,i.serializeDate,i.formatter,i.encodeValuesOnly,i.charset))}var a=o.join(i.delimiter),l=!0===i.addQueryPrefix?"?":"";return i.charsetSentinel&&(l+="iso-8859-1"===i.charset?"utf8=%26%2310003%3B&":"utf8=%E2%9C%93&"),a.length>0?l+a:""}(r({},n,this.u._query),{addQueryPrefix:!0,arrayFormat:"indices",encodeValuesOnly:!0,skipNulls:!0,encoder:function(t,n){return"boolean"==typeof t?Number(t):n(t)}})},u.current=function(t,n){var r=this,e=this.t.absolute?this.s().host+this.s().pathname:this.s().pathname.replace(this.t.url.replace(/^\w*:\/\/[^/]+/,""),"").replace(/^\/+/,"/"),i=Object.entries(this.t.routes).find(function(n){return new F(t,n[1],r.t).matchesUrl(e)})||[void 0,void 0],o=i[0],u=i[1];if(!t)return o;var f=new RegExp("^"+t.replace(".","\\.").replace("*",".*")+"$").test(o);if([null,void 0].includes(n)||!f)return f;var c=new F(o,u,this.t);n=this.l(n,c);var a=this.v(u);return!(!Object.values(n).every(function(t){return!t})||Object.values(a).length)||Object.entries(n).every(function(t){return a[t[0]]==t[1]})},u.s=function(){var t,n,r,e,i,o,u="undefined"!=typeof window?window.location:{},f=u.host,c=u.pathname,a=u.search;return{host:null!=(t=null===(n=this.t.location)||void 0===n?void 0:n.host)?t:void 0===f?"":f,pathname:null!=(r=null===(e=this.t.location)||void 0===e?void 0:e.pathname)?r:void 0===c?"":c,search:null!=(i=null===(o=this.t.location)||void 0===o?void 0:o.search)?i:void 0===a?"":a}},u.has=function(t){return Object.keys(this.t.routes).includes(t)},u.l=function(t,n){var e=this;void 0===t&&(t={}),void 0===n&&(n=this.i),t=["string","number"].includes(typeof t)?[t]:t;var i=n.parameterSegments.filter(function(t){return!e.t.defaults[t.name]});if(Array.isArray(t))t=t.reduce(function(t,n,e){var o,u;return r({},t,i[e]?((o={})[i[e].name]=n,o):((u={})[n]="",u))},{});else if(1===i.length&&!t[i[0].name]&&(t.hasOwnProperty(Object.values(n.bindings)[0])||t.hasOwnProperty("id"))){var o;(o={})[i[0].name]=t,t=o}return r({},this.p(n),this.h(t,n.bindings))},u.p=function(t){var n=this;return t.parameterSegments.filter(function(t){return n.t.defaults[t.name]}).reduce(function(t,e,i){var o,u=e.name;return r({},t,((o={})[u]=n.t.defaults[u],o))},{})},u.h=function(t,n){return void 0===n&&(n={}),Object.entries(t).reduce(function(t,e){var i,o,u=e[0],f=e[1];if(!f||"object"!=typeof f||Array.isArray(f)||"_query"===u)return r({},t,((o={})[u]=f,o));if(!f.hasOwnProperty(n[u])){if(!f.hasOwnProperty("id"))throw new Error("Ziggy error: object passed as '"+u+"' parameter is missing route model binding key '"+n[u]+"'.");n[u]="id"}return r({},t,((i={})[u]=f[n[u]],i))},{})},u.v=function(t){var n,e=this.s().pathname.replace(this.t.url.replace(/^\w*:\/\/[^/]+/,""),"").replace(/^\/+/,""),i=function(t,n,e){void 0===n&&(n="");var i=[t,n].map(function(t){return t.split(e)}),o=i[0];return i[1].reduce(function(t,n,e){var i;return/^{[^}?]+\??}$/.test(n)&&o[e]?r({},t,((i={})[n.replace(/^{|\??}$/g,"")]=o[e],i)):t},{})};return r({},i(this.s().host,t.domain,"."),i(e,t.uri,"/"),function(t,n){var r=C;if(""===t||null==t)return r.plainObjects?Object.create(null):{};for(var e="string"==typeof t?function(t,n){var r,e={},i=(n.ignoreQueryPrefix?t.replace(/^\?/,""):t).split(n.delimiter,Infinity===n.parameterLimit?void 0:n.parameterLimit),o=-1,u=n.charset;if(n.charsetSentinel)for(r=0;r<i.length;++r)0===i[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===i[r]?u="utf-8":"utf8=%26%2310003%3B"===i[r]&&(u="iso-8859-1"),o=r,r=i.length);for(r=0;r<i.length;++r)if(r!==o){var f,c,a=i[r],l=a.indexOf("]="),s=-1===l?a.indexOf("="):l+1;-1===s?(f=n.decoder(a,C.decoder,u,"key"),c=n.strictNullHandling?null:""):(f=n.decoder(a.slice(0,s),C.decoder,u,"key"),c=v.maybeMap(N(a.slice(s+1),n),function(t){return n.decoder(t,C.decoder,u,"value")})),c&&n.interpretNumericEntities&&"iso-8859-1"===u&&(c=D(c)),a.indexOf("[]=")>-1&&(c=x(c)?[c]:c),e[f]=S.call(e,f)?v.combine(e[f],c):c}return e}(t,r):t,i=r.plainObjects?Object.create(null):{},o=Object.keys(e),u=0;u<o.length;++u){var f=o[u],c=T(f,e[f],r,"string"==typeof t);i=v.merge(i,c,r)}return v.compact(i)}(null===(n=this.s().search)||void 0===n?void 0:n.replace(/^\?/,"")))},u.valueOf=function(){return this.toString()},u.check=function(t){return this.has(t)},n(o,[{key:"params",get:function(){return this.v(this.t.routes[this.current()])}}]),o}(f(String));return function(t,n,r,e){var i=new $(t,n,r,e);return t?i.toString():i}});