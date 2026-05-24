"use strict";var l=function(e,t){return function(){return t||e((t={exports:{}}).exports,t),t.exports}};var a=l(function(C,s){
var W=typeof String.prototype.startsWith!="undefined";s.exports=W
});var h=l(function(I,f){
function c(e,t,i){var r,u;if(i<0?r=e.length+i:r=i,t.length===0)return!0;if(r<0||r+t.length>e.length)return!1;for(u=0;u<t.length;u++)if(e.charCodeAt(r+u)!==t.charCodeAt(u))return!1;return!0}f.exports=c
});var g=l(function(m,o){
var x=String.prototype.startsWith;o.exports=x
});var p=l(function(B,v){
var d=g();function q(e,t,i){var r;return i<0?r=e.length+i:r=i,t.length===0?!0:r<0||r+t.length>e.length?!1:d.call(e,t,r)}v.exports=q
});var y=a(),A=h(),S=p(),n;y?n=S:n=A;module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
