"use strict";var c=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=c(function(J,y){
var O=require("path").resolve,L=require('@stdlib/fs-read-wasm/dist').sync,P=L(O(__dirname,"..","src","main.wasm"));y.exports=P
});var q=c(function(K,E){
var V=require('@stdlib/assert-is-wasm-memory/dist'),h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=require('@stdlib/utils-inherit/dist'),m=require('@stdlib/wasm-module-wrapper/dist'),j=require('@stdlib/error-tools-fmtprodmsg/dist'),z=f();function o(e){if(!(this instanceof o))return new o(e);if(!V(e))throw new TypeError(j('nullH0',e));return m.call(this,z,e,{env:{memory:e}}),this}g(o,m);h(o.prototype,"main",function(r,s,i,a,t){return this._instance.exports.c_dswap(r,s,i,a,t),a});h(o.prototype,"ndarray",function(r,s,i,a,t,v,d){return this._instance.exports.c_dswap_ndarray(r,s,i,a,t,v,d),t});E.exports=o
});var T=c(function(Q,b){
var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),D=require('@stdlib/utils-inherit/dist'),M=require('@stdlib/strided-base-stride2offset/dist'),_=require('@stdlib/strided-base-read-dataview/dist').ndarray,k=require('@stdlib/wasm-memory/dist'),C=require('@stdlib/wasm-base-arrays2ptrs/dist'),R=require('@stdlib/wasm-base-strided2object/dist'),w=q();function p(){return this instanceof p?(w.call(this,new k({initial:0})),this):new p}D(p,w);x(p.prototype,"main",function(r,s,i,a,t){return this.ndarray(r,s,i,M(r,i),a,t,M(r,t))});x(p.prototype,"ndarray",function(r,s,i,a,t,v,d){var l,n,u;return l=C(this,[R(r,s,i,a),R(r,t,v,d)]),n=l[0],u=l[1],w.prototype.ndarray.call(this,r,n.ptr,n.stride,n.offset,u.ptr,u.stride,u.offset),n.copy&&_(r,this.view,n.stride*n.BYTES_PER_ELEMENT,n.ptr,s,i,a,!0),u.copy&&_(r,this.view,u.stride*u.BYTES_PER_ELEMENT,u.ptr,t,v,d,!0),t});b.exports=p
});var A=c(function(U,W){
var F=T(),S=new F;S.initializeSync();W.exports=S
});var G=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),B=A(),H=q();G(B,"Module",H);module.exports=B;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
