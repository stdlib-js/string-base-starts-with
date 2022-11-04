// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
var t=void 0!==String.prototype.startsWith;var r=String.prototype.startsWith;var e=t?function(t,e,n){var h;return h=n<0?t.length+n:n,0===e.length||!(h<0||h+e.length>t.length)&&r.call(t,e,h)}:function(t,r,e){var n,h;if(n=e<0?t.length+e:e,0===r.length)return!0;if(n<0||n+r.length>t.length)return!1;for(h=0;h<r.length;h++)if(t.charCodeAt(n+h)!==r.charCodeAt(h))return!1;return!0};export{e as default};
//# sourceMappingURL=index.mjs.map
