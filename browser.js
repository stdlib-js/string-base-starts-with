// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t=void 0!==String.prototype.startsWith,e=String.prototype.startsWith;return t?function(t,n,r){var o;return o=r<0?t.length+r:r,0===n.length||!(o<0||o+n.length>t.length)&&e.call(t,n,o)}:function(t,e,n){var r,o;if(r=n<0?t.length+n:n,0===e.length)return!0;if(r<0||r+e.length>t.length)return!1;for(o=0;o<e.length;o++)if(t.charCodeAt(r+o)!==e.charCodeAt(o))return!1;return!0}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).startsWith=e();
//# sourceMappingURL=browser.js.map
