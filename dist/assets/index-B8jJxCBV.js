(function(){const X=document.createElement("link").relList;if(X&&X.supports&&X.supports("modulepreload"))return;for(const H of document.querySelectorAll('link[rel="modulepreload"]'))g(H);new MutationObserver(H=>{for(const z of H)if(z.type==="childList")for(const gn of z.addedNodes)gn.tagName==="LINK"&&gn.rel==="modulepreload"&&g(gn)}).observe(document,{childList:!0,subtree:!0});function V(H){const z={};return H.integrity&&(z.integrity=H.integrity),H.referrerPolicy&&(z.referrerPolicy=H.referrerPolicy),H.crossOrigin==="use-credentials"?z.credentials="include":H.crossOrigin==="anonymous"?z.credentials="omit":z.credentials="same-origin",z}function g(H){if(H.ep)return;H.ep=!0;const z=V(H);fetch(H.href,z)}})();function lp(A){return A&&A.__esModule&&Object.prototype.hasOwnProperty.call(A,"default")?A.default:A}var yo={exports:{}},li={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ih;function ip(){if(Ih)return li;Ih=1;var A=Symbol.for("react.transitional.element"),X=Symbol.for("react.fragment");function V(g,H,z){var gn=null;if(z!==void 0&&(gn=""+z),H.key!==void 0&&(gn=""+H.key),"key"in H){z={};for(var xn in H)xn!=="key"&&(z[xn]=H[xn])}else z=H;return H=z.ref,{$$typeof:A,type:g,key:gn,ref:H!==void 0?H:null,props:z}}return li.Fragment=X,li.jsx=V,li.jsxs=V,li}var Ph;function cp(){return Ph||(Ph=1,yo.exports=ip()),yo.exports}var E=cp(),bo={exports:{}},L={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv;function up(){if(nv)return L;nv=1;var A=Symbol.for("react.transitional.element"),X=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),gn=Symbol.for("react.context"),xn=Symbol.for("react.forward_ref"),on=Symbol.for("react.suspense"),dn=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),y=Symbol.for("react.activity"),q=Symbol.for("react.view_transition"),_n=Symbol.iterator;function $n(r){return r===null||typeof r!="object"?null:(r=_n&&r[_n]||r["@@iterator"],typeof r=="function"?r:null)}var In={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pn=Object.assign,Yn={};function $(r,T,w){this.props=r,this.context=T,this.refs=Yn,this.updater=w||In}$.prototype.isReactComponent={},$.prototype.setState=function(r,T){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,T,"setState")},$.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function ut(){}ut.prototype=$.prototype;function Pn(r,T,w){this.props=r,this.context=T,this.refs=Yn,this.updater=w||In}var gt=Pn.prototype=new ut;gt.constructor=Pn,pn(gt,$.prototype),gt.isPureReactComponent=!0;var Sn=Array.isArray;function J(){}var nn={H:null,A:null,T:null,S:null},xt=Object.prototype.hasOwnProperty;function st(r,T,w){var M=w.ref;return{$$typeof:A,type:r,key:T,ref:M!==void 0?M:null,props:w}}function ot(r,T){return st(r.type,T,r.props)}function tt(r){return typeof r=="object"&&r!==null&&r.$$typeof===A}function at(r){var T={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(w){return T[w]})}var Qt=/\/+/g;function Mn(r,T){return typeof r=="object"&&r!==null&&r.key!=null?at(""+r.key):T.toString(36)}function O(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(J,J):(r.status="pending",r.then(function(T){r.status==="pending"&&(r.status="fulfilled",r.value=T)},function(T){r.status==="pending"&&(r.status="rejected",r.reason=T)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function x(r,T,w,M,en){var ln=typeof r;(ln==="undefined"||ln==="boolean")&&(r=null);var un=!1;if(r===null)un=!0;else switch(ln){case"bigint":case"string":case"number":un=!0;break;case"object":switch(r.$$typeof){case A:case X:un=!0;break;case U:return un=r._init,x(un(r._payload),T,w,M,en)}}if(un)return en=en(r),un=M===""?"."+Mn(r,0):M,Sn(en)?(w="",un!=null&&(w=un.replace(Qt,"$&/")+"/"),x(en,T,w,"",function(la){return la})):en!=null&&(tt(en)&&(en=ot(en,w+(en.key==null||r&&r.key===en.key?"":(""+en.key).replace(Qt,"$&/")+"/")+un)),T.push(en)),1;un=0;var D=M===""?".":M+":";if(Sn(r))for(var G=0;G<r.length;G++)M=r[G],ln=D+Mn(M,G),un+=x(M,T,w,ln,en);else if(G=$n(r),typeof G=="function")for(r=G.call(r),G=0;!(M=r.next()).done;)M=M.value,ln=D+Mn(M,G++),un+=x(M,T,w,ln,en);else if(ln==="object"){if(typeof r.then=="function")return x(O(r),T,w,M,en);throw T=String(r),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return un}function Y(r,T,w){if(r==null)return r;var M=[],en=0;return x(r,M,"","",function(ln){return T.call(w,ln,en++)}),M}function rn(r){if(r._status===-1){var T=r._result,w=T();w.then(function(M){(r._status===0||r._status===-1)&&(r._status=1,r._result=M,w.status===void 0&&(w.status="fulfilled",w.value=M))},function(M){(r._status===0||r._status===-1)&&(r._status=2,r._result=M,w.status===void 0&&(w.status="rejected",w.reason=M))}),r._status===-1&&(r._status=0,r._result=w)}if(r._status===1)return r._result.default;throw r._result}var an=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function C(r){var T=nn.T,w={};w.types=T!==null?T.types:null,nn.T=w;try{var M=r(),en=nn.S;en!==null&&en(w,M),typeof M=="object"&&M!==null&&typeof M.then=="function"&&M.then(J,an)}catch(ln){an(ln)}finally{T!==null&&w.types!==null&&(T.types=w.types),nn.T=T}}function K(r){var T=nn.T;if(T!==null){var w=T.types;w===null?T.types=[r]:w.indexOf(r)===-1&&w.push(r)}else C(K.bind(null,r))}var On={map:Y,forEach:function(r,T,w){Y(r,function(){T.apply(this,arguments)},w)},count:function(r){var T=0;return Y(r,function(){T++}),T},toArray:function(r){return Y(r,function(T){return T})||[]},only:function(r){if(!tt(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return L.Activity=y,L.Children=On,L.Component=$,L.Fragment=V,L.Profiler=H,L.PureComponent=Pn,L.StrictMode=g,L.Suspense=on,L.ViewTransition=q,L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=nn,L.__COMPILER_RUNTIME={__proto__:null,c:function(r){return nn.H.useMemoCache(r)}},L.addTransitionType=K,L.cache=function(r){return function(){return r.apply(null,arguments)}},L.cacheSignal=function(){return null},L.cloneElement=function(r,T,w){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var M=pn({},r.props),en=r.key;if(T!=null)for(ln in T.key!==void 0&&(en=""+T.key),T)!xt.call(T,ln)||ln==="key"||ln==="__self"||ln==="__source"||ln==="ref"&&T.ref===void 0||(M[ln]=T[ln]);var ln=arguments.length-2;if(ln===1)M.children=w;else if(1<ln){for(var un=Array(ln),D=0;D<ln;D++)un[D]=arguments[D+2];M.children=un}return st(r.type,en,M)},L.createContext=function(r){return r={$$typeof:gn,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:z,_context:r},r},L.createElement=function(r,T,w){var M,en={},ln=null;if(T!=null)for(M in T.key!==void 0&&(ln=""+T.key),T)xt.call(T,M)&&M!=="key"&&M!=="__self"&&M!=="__source"&&(en[M]=T[M]);var un=arguments.length-2;if(un===1)en.children=w;else if(1<un){for(var D=Array(un),G=0;G<un;G++)D[G]=arguments[G+2];en.children=D}if(r&&r.defaultProps)for(M in un=r.defaultProps,un)en[M]===void 0&&(en[M]=un[M]);return st(r,ln,en)},L.createRef=function(){return{current:null}},L.forwardRef=function(r){return{$$typeof:xn,render:r}},L.isValidElement=tt,L.lazy=function(r){return{$$typeof:U,_payload:{_status:-1,_result:r},_init:rn}},L.memo=function(r,T){return{$$typeof:dn,type:r,compare:T===void 0?null:T}},L.startTransition=C,L.unstable_useCacheRefresh=function(){return nn.H.useCacheRefresh()},L.use=function(r){return nn.H.use(r)},L.useActionState=function(r,T,w){return nn.H.useActionState(r,T,w)},L.useCallback=function(r,T){return nn.H.useCallback(r,T)},L.useContext=function(r){return nn.H.useContext(r)},L.useDebugValue=function(){},L.useDeferredValue=function(r,T){return nn.H.useDeferredValue(r,T)},L.useEffect=function(r,T){return nn.H.useEffect(r,T)},L.useEffectEvent=function(r){return nn.H.useEffectEvent(r)},L.useId=function(){return nn.H.useId()},L.useImperativeHandle=function(r,T,w){return nn.H.useImperativeHandle(r,T,w)},L.useInsertionEffect=function(r,T){return nn.H.useInsertionEffect(r,T)},L.useLayoutEffect=function(r,T){return nn.H.useLayoutEffect(r,T)},L.useMemo=function(r,T){return nn.H.useMemo(r,T)},L.useOptimistic=function(r,T){return nn.H.useOptimistic(r,T)},L.useReducer=function(r,T,w){return nn.H.useReducer(r,T,w)},L.useRef=function(r){return nn.H.useRef(r)},L.useState=function(r){return nn.H.useState(r)},L.useSyncExternalStore=function(r,T,w){return nn.H.useSyncExternalStore(r,T,w)},L.useTransition=function(){return nn.H.useTransition()},L.version="19.3.0",L}var tv;function Oo(){return tv||(tv=1,bo.exports=up()),bo.exports}var ol=Oo();const sp=lp(ol);var So={exports:{}},ii={},To={exports:{}},Eo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av;function op(){return av||(av=1,(function(A){function X(O,x){var Y=O.length;O.push(x);n:for(;0<Y;){var rn=Y-1>>>1,an=O[rn];if(0<H(an,x))O[rn]=x,O[Y]=an,Y=rn;else break n}}function V(O){return O.length===0?null:O[0]}function g(O){if(O.length===0)return null;var x=O[0],Y=O.pop();if(Y!==x){O[0]=Y;n:for(var rn=0,an=O.length,C=an>>>1;rn<C;){var K=2*(rn+1)-1,On=O[K],r=K+1,T=O[r];if(0>H(On,Y))r<an&&0>H(T,On)?(O[rn]=T,O[r]=Y,rn=r):(O[rn]=On,O[K]=Y,rn=K);else if(r<an&&0>H(T,Y))O[rn]=T,O[r]=Y,rn=r;else break n}}return x}function H(O,x){var Y=O.sortIndex-x.sortIndex;return Y!==0?Y:O.id-x.id}if(A.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var z=performance;A.unstable_now=function(){return z.now()}}else{var gn=Date,xn=gn.now();A.unstable_now=function(){return gn.now()-xn}}var on=[],dn=[],U=1,y=null,q=3,_n=!1,$n=!1,In=!1,pn=!1,Yn=typeof setTimeout=="function"?setTimeout:null,$=typeof clearTimeout=="function"?clearTimeout:null,ut=typeof setImmediate<"u"?setImmediate:null;function Pn(O){for(var x=V(dn);x!==null;){if(x.callback===null)g(dn);else if(x.startTime<=O)g(dn),x.sortIndex=x.expirationTime,X(on,x);else break;x=V(dn)}}function gt(O){if(In=!1,Pn(O),!$n)if(V(on)!==null)$n=!0,Sn||(Sn=!0,tt());else{var x=V(dn);x!==null&&Mn(gt,x.startTime-O)}}var Sn=!1,J=-1,nn=5,xt=-1;function st(){return pn?!0:!(A.unstable_now()-xt<nn)}function ot(){if(pn=!1,Sn){var O=A.unstable_now();xt=O;var x=!0;try{n:{$n=!1,In&&(In=!1,$(J),J=-1),_n=!0;var Y=q;try{t:{for(Pn(O),y=V(on);y!==null&&!(y.expirationTime>O&&st());){var rn=y.callback;if(typeof rn=="function"){y.callback=null,q=y.priorityLevel;var an=rn(y.expirationTime<=O);if(O=A.unstable_now(),typeof an=="function"){y.callback=an,Pn(O),x=!0;break t}y===V(on)&&g(on),Pn(O)}else g(on);y=V(on)}if(y!==null)x=!0;else{var C=V(dn);C!==null&&Mn(gt,C.startTime-O),x=!1}}break n}finally{y=null,q=Y,_n=!1}x=void 0}}finally{x?tt():Sn=!1}}}var tt;if(typeof ut=="function")tt=function(){ut(ot)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,Qt=at.port2;at.port1.onmessage=ot,tt=function(){Qt.postMessage(null)}}else tt=function(){Yn(ot,0)};function Mn(O,x){J=Yn(function(){O(A.unstable_now())},x)}A.unstable_IdlePriority=5,A.unstable_ImmediatePriority=1,A.unstable_LowPriority=4,A.unstable_NormalPriority=3,A.unstable_Profiling=null,A.unstable_UserBlockingPriority=2,A.unstable_cancelCallback=function(O){O.callback=null},A.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):nn=0<O?Math.floor(1e3/O):5},A.unstable_getCurrentPriorityLevel=function(){return q},A.unstable_next=function(O){switch(q){case 1:case 2:case 3:var x=3;break;default:x=q}var Y=q;q=x;try{return O()}finally{q=Y}},A.unstable_requestPaint=function(){pn=!0},A.unstable_runWithPriority=function(O,x){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Y=q;q=O;try{return x()}finally{q=Y}},A.unstable_scheduleCallback=function(O,x,Y){var rn=A.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?rn+Y:rn):Y=rn,O){case 1:var an=-1;break;case 2:an=250;break;case 5:an=1073741823;break;case 4:an=1e4;break;default:an=5e3}return an=Y+an,O={id:U++,callback:x,priorityLevel:O,startTime:Y,expirationTime:an,sortIndex:-1},Y>rn?(O.sortIndex=Y,X(dn,O),V(on)===null&&O===V(dn)&&(In?($(J),J=-1):In=!0,Mn(gt,Y-rn))):(O.sortIndex=an,X(on,O),$n||_n||($n=!0,Sn||(Sn=!0,tt()))),O},A.unstable_shouldYield=st,A.unstable_wrapCallback=function(O){var x=q;return function(){var Y=q;q=x;try{return O.apply(this,arguments)}finally{q=Y}}}})(Eo)),Eo}var ev;function rp(){return ev||(ev=1,To.exports=op()),To.exports}var Ao={exports:{}},Fn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv;function fp(){if(lv)return Fn;lv=1;var A=Oo();function X(U){var y="https://react.dev/errors/"+U;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var q=2;q<arguments.length;q++)y+="&args[]="+encodeURIComponent(arguments[q])}return"Minified React error #"+U+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function V(){}var g={d:{f:V,r:function(){throw Error(X(522))},D:V,C:V,L:V,m:V,X:V,S:V,M:V},p:0,findDOMNode:null},H=Symbol.for("react.portal"),z=Symbol.for("react.recoverable"),gn=Symbol.for("react.optimistic_key");function xn(U,y,q){var _n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:_n==null?null:_n===gn?gn:""+_n,children:U,containerInfo:y,implementation:q}}var on=A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function dn(U,y){if(U==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=g,Fn.browser=function(U){return{$$typeof:z,_reason:U}},Fn.createPortal=function(U,y){var q=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(X(299));return xn(U,y,null,q)},Fn.flushSync=function(U){var y=on.T,q=g.p;try{if(on.T=null,g.p=2,U)return U()}finally{on.T=y,g.p=q,g.d.f()}},Fn.preconnect=function(U,y){typeof U=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,g.d.C(U,y))},Fn.prefetchDNS=function(U){typeof U=="string"&&g.d.D(U)},Fn.preinit=function(U,y){if(typeof U=="string"&&y&&typeof y.as=="string"){var q=y.as,_n=dn(q,y.crossOrigin),$n=typeof y.integrity=="string"?y.integrity:void 0,In=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;q==="style"?g.d.S(U,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:_n,integrity:$n,fetchPriority:In}):q==="script"&&g.d.X(U,{crossOrigin:_n,integrity:$n,fetchPriority:In,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Fn.preinitModule=function(U,y){if(typeof U=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var q=dn(y.as,y.crossOrigin);g.d.M(U,{crossOrigin:q,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0})}}else y==null&&g.d.M(U)},Fn.preload=function(U,y){if(typeof U=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var q=y.as,_n=dn(q,y.crossOrigin);g.d.L(U,q,{crossOrigin:_n,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Fn.preloadModule=function(U,y){if(typeof U=="string")if(y){var q=dn(y.as,y.crossOrigin);g.d.m(U,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:q,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0})}else g.d.m(U)},Fn.requestFormReset=function(U){g.d.r(U)},Fn.unstable_batchedUpdates=function(U,y){return U(y)},Fn.useFormState=function(U,y,q){return on.H.useFormState(U,y,q)},Fn.useFormStatus=function(){return on.H.useHostTransitionStatus()},Fn.version="19.3.0",Fn}var iv;function dp(){if(iv)return Ao.exports;iv=1;function A(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)}catch(X){console.error(X)}}return A(),Ao.exports=fp(),Ao.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cv;function hp(){if(cv)return ii;cv=1;var A=rp(),X=Oo(),V=dp();function g(n){var t="https://react.dev/errors/"+n;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+n+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function H(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function z(n){for(var t=n,a=t;a&&!a.alternate;)t=a,(t.flags&4098)!==0&&(n=t.return),a=t.return;for(;t.return;)t=t.return;return t.tag===3?n:null}function gn(n){if(n.tag===13){var t=n.memoizedState;if(t===null&&(n=n.alternate,n!==null&&(t=n.memoizedState)),t!==null)return t.dehydrated}return null}function xn(n){if(n.tag===31){var t=n.memoizedState;if(t===null&&(n=n.alternate,n!==null&&(t=n.memoizedState)),t!==null)return t.dehydrated}return null}function on(n){if(z(n)!==n)throw Error(g(188))}function dn(n){var t=n.alternate;if(!t){if(t=z(n),t===null)throw Error(g(188));return t!==n?null:n}for(var a=n,e=t;;){var l=a.return;if(l===null)break;var i=l.alternate;if(i===null){if(e=l.return,e!==null){a=e;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===a)return on(l),n;if(i===e)return on(l),t;i=i.sibling}throw Error(g(188))}if(a.return!==e.return)a=l,e=i;else{for(var c=!1,u=l.child;u;){if(u===a){c=!0,a=l,e=i;break}if(u===e){c=!0,e=l,a=i;break}u=u.sibling}if(!c){for(u=i.child;u;){if(u===a){c=!0,a=i,e=l;break}if(u===e){c=!0,e=i,a=l;break}u=u.sibling}if(!c)throw Error(g(189))}}if(a.alternate!==e)throw Error(g(190))}if(a.tag!==3)throw Error(g(188));return a.stateNode.current===a?n:t}function U(n){var t=n.tag;if(t===5||t===26||t===27||t===6)return n;for(n=n.child;n!==null;){if(t=U(n),t!==null)return t;n=n.sibling}return null}function y(n,t,a,e,l,i){for(;n!==null;){if((n.tag===5||n.tag===27||n.tag===6)&&a(n,e,l,i)||(n.tag!==22||n.memoizedState===null)&&(t||n.tag!==5&&n.tag!==27)&&y(n.child,t,a,e,l,i))return!0;n=n.sibling}return!1}function q(n){for(n=n.return;n!==null;){if(n.tag===3||n.tag===5||n.tag===27)return n;n=n.return}return null}function _n(n){var t=!1;for(n=n.return;n!==null&&(n.tag===4&&(t=!0),!(n.tag===3||n.tag===5||n.tag===27));)n=n.return;return t}function $n(n){var t=[null,null],a=q(n);return a===null||In(t,n,a.child,{foundSelf:!1}),t}function In(n,t,a,e){for(;a!==null;){if(a===t)e.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(e.foundSelf)return n[1]=a,!0;n[0]=a}else if((a.tag!==22||a.memoizedState===null)&&In(n,t,a.child,e))return!0;a=a.sibling}return!1}function pn(n){switch(n.tag){case 5:case 27:case 6:return n.stateNode;case 3:return n.stateNode.containerInfo;default:throw Error(g(559))}}var Yn=null,$=null;function ut(n,t,a){return n===a?!0:n===t?(Yn=n,!0):!1}function Pn(n,t,a){return n===a?($=n,!1):n===t?($!==null&&(Yn=n),!0):!1}function gt(n){if(n===null)return null;do n=n===null?null:n.return;while(n&&n.tag!==5&&n.tag!==27&&n.tag!==3);return n||null}function Sn(n,t,a){for(var e=0,l=n;l;l=a(l))e++;l=0;for(var i=t;i;i=a(i))l++;for(;0<e-l;)n=a(n),e--;for(;0<l-e;)t=a(t),l--;for(;e--;){if(n===t||t!==null&&n===t.alternate)return n;n=a(n),t=a(t)}return null}var J=Object.assign,nn=Symbol.for("react.element"),xt=Symbol.for("react.transitional.element"),st=Symbol.for("react.portal"),ot=Symbol.for("react.fragment"),tt=Symbol.for("react.strict_mode"),at=Symbol.for("react.profiler"),Qt=Symbol.for("react.consumer"),Mn=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),Y=Symbol.for("react.suspense_list"),rn=Symbol.for("react.memo"),an=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),K=Symbol.for("react.legacy_hidden"),On=Symbol.for("react.memo_cache_sentinel"),r=Symbol.for("react.view_transition"),T=Symbol.for("react.recoverable"),w=Symbol.iterator;function M(n){return n===null||typeof n!="object"?null:(n=w&&n[w]||n["@@iterator"],typeof n=="function"?n:null)}var en=Symbol.for("react.client.reference");function ln(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===en?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ot:return"Fragment";case at:return"Profiler";case tt:return"StrictMode";case x:return"Suspense";case Y:return"SuspenseList";case C:return"Activity";case r:return"ViewTransition"}if(typeof n=="object")switch(n.$$typeof){case st:return"Portal";case Mn:return n.displayName||"Context";case Qt:return(n._context.displayName||"Context")+".Consumer";case O:var t=n.render;return n=n.displayName,n||(n=t.displayName||t.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case rn:return t=n.displayName||null,t!==null?t:ln(n.type)||"Memo";case an:t=n._payload,n=n._init;try{return ln(n(t))}catch{}}return null}var un=Array.isArray,D=X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=V.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,la={pending:!1,data:null,method:null,action:null},qc=[],ye=-1;function Zt(n){return{current:n}}function Vn(n){0>ye||(n.current=qc[ye],qc[ye]=null,ye--)}function Tn(n,t){ye++,qc[ye]=n.current,n.current=t}var Kt=Zt(null),rl=Zt(null),Sa=Zt(null),ci=Zt(null);function ui(n,t){switch(Tn(Sa,t),Tn(rl,n),Tn(Kt,null),t.nodeType){case 9:case 11:n=(n=t.documentElement)&&(n=n.namespaceURI)?uh(n):0;break;default:if(n=t.tagName,t=t.namespaceURI)t=uh(t),n=sh(t,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Vn(Kt),Tn(Kt,n)}function be(){Vn(Kt),Vn(rl),Vn(Sa)}function xc(n){var t=n.memoizedState;t!==null&&(cl._currentValue=t.memoizedState,Tn(ci,n)),t=Kt.current;var a=sh(t,n.type);t!==a&&(Tn(rl,n),Tn(Kt,a))}function si(n){rl.current===n&&(Vn(Kt),Vn(rl)),ci.current===n&&(Vn(ci),cl._currentValue=la)}var Yc,No;function Ta(n){if(Yc===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Yc=t&&t[1]||"",No=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yc+n+No}var Bc=!1;function Gc(n,t){if(!n||Bc)return"";Bc=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var e={DetermineComponentFrameRoot:function(){try{if(t){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(_){var f=_}Reflect.construct(n,[],S)}else{try{S.call()}catch(_){f=_}S=!1;try{var m=Object.getOwnPropertyDescriptor(n.prototype,"props");Object.defineProperty(n.prototype,"props",{configurable:!0,set:function(){throw Error()}}),S=!0,new n}finally{S&&(m!==void 0?Object.defineProperty(n.prototype,"props",m):delete n.prototype.props)}}}else{try{throw Error()}catch(_){f=_}(S=n())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(_){if(_&&f&&typeof _.stack=="string")return[_.stack,f.stack]}return[null,null]}};e.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(e.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=e.DetermineComponentFrameRoot(),c=i[0],u=i[1];if(c&&u){var s=c.split(`
`),h=u.split(`
`);for(l=e=0;e<s.length&&!s[e].includes("DetermineComponentFrameRoot");)e++;for(;l<h.length&&!h[l].includes("DetermineComponentFrameRoot");)l++;if(e===s.length||l===h.length)for(e=s.length-1,l=h.length-1;1<=e&&0<=l&&s[e]!==h[l];)l--;for(;1<=e&&0<=l;e--,l--)if(s[e]!==h[l]){if(e!==1||l!==1)do if(e--,l--,0>l||s[e]!==h[l]){var p=`
`+s[e].replace(" at new "," at ");return n.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",n.displayName)),p}while(1<=e&&0<=l);break}}}finally{Bc=!1,Error.prepareStackTrace=a}return(a=n?n.displayName||n.name:"")?Ta(a):""}function sv(n,t){switch(n.tag){case 26:case 27:case 5:return Ta(n.type);case 16:return Ta("Lazy");case 13:return n.child!==t&&t!==null?Ta("Suspense Fallback"):Ta("Suspense");case 19:return Ta("SuspenseList");case 0:case 15:return Gc(n.type,!1);case 11:return Gc(n.type.render,!1);case 1:return Gc(n.type,!0);case 31:return Ta("Activity");case 30:return Ta("ViewTransition");default:return""}}function jo(n){try{var t="",a=null;do t+=sv(n,a),a=n,n=n.return;while(n);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Lc=Object.prototype.hasOwnProperty,Xc=A.unstable_scheduleCallback,Vc=A.unstable_cancelCallback,ov=A.unstable_shouldYield,rv=A.unstable_requestPaint,pt=A.unstable_now,fv=A.unstable_getCurrentPriorityLevel,Do=A.unstable_ImmediatePriority,Mo=A.unstable_UserBlockingPriority,oi=A.unstable_NormalPriority,dv=A.unstable_LowPriority,Co=A.unstable_IdlePriority,hv=A.log,vv=A.unstable_setDisableYieldValue,fl=null,yt=null;function Ea(n){if(typeof hv=="function"&&vv(n),yt&&typeof yt.setStrictMode=="function")try{yt.setStrictMode(fl,n)}catch{}}var bt=Math.clz32?Math.clz32:pv,mv=Math.log,gv=Math.LN2;function pv(n){return n>>>=0,n===0?32:31-(mv(n)/gv|0)|0}var ri=256,fi=262144,di=4194304;function Wa(n){var t=n&42;if(t!==0)return t;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&-n;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function hi(n,t,a){var e=n.pendingLanes;if(e===0)return 0;var l=0,i=n.suspendedLanes,c=n.pingedLanes;n=n.warmLanes;var u=e&134217727;return u!==0?(e=u&~i,e!==0?l=Wa(e):(c&=u,c!==0?l=Wa(c):a||(a=u&~n,a!==0&&(l=Wa(a))))):(u=e&~i,u!==0?l=Wa(u):c!==0?l=Wa(c):a||(a=e&~n,a!==0&&(l=Wa(a)))),l===0?0:t!==0&&t!==l&&(t&i)===0&&(i=l&-l,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:l}function dl(n,t){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&t)===0}function wo(n,t){(t&8)!==0&&(t|=t&32);var a=n.entangledLanes;if(a!==0)for(n=n.entanglements,a&=t;0<a;){var e=31-bt(a),l=1<<e;t|=n[e],a&=~l}return t}function yv(n,t){switch(n){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ro(){var n=di;return di<<=1,(di&62914560)===0&&(di=4194304),n}function Qc(n){for(var t=[],a=0;31>a;a++)t.push(n);return t}function hl(n,t){n.pendingLanes|=t,t!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function bv(n,t,a,e,l,i){var c=n.pendingLanes;n.pendingLanes=a,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=a,n.entangledLanes&=a,n.errorRecoveryDisabledLanes&=a,n.shellSuspendCounter=0;var u=n.entanglements,s=n.expirationTimes,h=n.hiddenUpdates;for(a=c&~a;0<a;){var p=31-bt(a),S=1<<p;u[p]=0,s[p]=-1;var f=h[p];if(f!==null)for(h[p]=null,p=0;p<f.length;p++){var m=f[p];m!==null&&(m.lane&=-536870913)}a&=~S}e!==0&&Uo(n,e,0),i!==0&&l===0&&n.tag!==0&&(n.suspendedLanes|=i&~(c&~t))}function Uo(n,t,a){n.pendingLanes|=t,n.suspendedLanes&=~t;var e=31-bt(t);n.entangledLanes|=t,n.entanglements[e]=n.entanglements[e]|1073741824|a&261930}function Ho(n,t){var a=n.entangledLanes|=t;for(n=n.entanglements;a;){var e=31-bt(a),l=1<<e;l&t|n[e]&t&&(n[e]|=t),a&=~l}}function qo(n,t){var a=t&-t;return a=(a&42)!==0?1:Zc(a),(a&(n.suspendedLanes|t))!==0?0:a}function Zc(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Kc(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function xo(){var n=G.p;return n!==0?n:(n=window.event,n===void 0?32:Zh(n.type))}function Yo(n,t){var a=G.p;try{return G.p=n,t()}finally{G.p=a}}var ia=Math.random().toString(36).slice(2),Qn="__reactFiber$"+ia,rt="__reactProps$"+ia,Se="__reactContainer$"+ia,Bo="__reactEvents$"+ia,Sv="__reactListeners$"+ia,Tv="__reactHandles$"+ia,Go="__reactResources$"+ia,vl="__reactMarker$"+ia,vi="__reactLoad$"+ia;function mi(n){delete n[Qn],delete n[rt],delete n[Sv],delete n[Tv]}function Fa(n){var t;if(t=n[Qn])return t;for(var a=n.parentNode;a;){if(t=a[Se]||a[Qn]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(n=zh(n);n!==null;){if(a=n[Qn])return a;n=zh(n)}return t}n=a,a=n.parentNode}return null}function Te(n){if(n=n[Qn]||n[Se]){var t=n.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return n}return null}function ml(n){var t=n.tag;if(t===5||t===26||t===27||t===6)return n.stateNode;throw Error(g(33))}function Ee(n){var t=n[Go];return t||(t=n[Go]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Bn(n){n[vl]=!0}function Lo(n){n[vi]=void 0}var Xo=new Set,Vo={};function $a(n,t){Ae(n,t),Ae(n+"Capture",t)}function Ae(n,t){for(Vo[n]=t,n=0;n<t.length;n++)Xo.add(t[n])}var Ev=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qo={},Zo={};function Av(n){return Lc.call(Zo,n)?!0:Lc.call(Qo,n)?!1:Ev.test(n)?Zo[n]=!0:(Qo[n]=!0,!1)}var cn=!1;function Ko(){var n=cn;return cn=!1,n}function gi(n,t,a){if(Av(t))if(a===null)n.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":n.removeAttribute(t);return;case"boolean":var e=t.toLowerCase().slice(0,5);if(e!=="data-"&&e!=="aria-"){n.removeAttribute(t);return}}n.setAttribute(t,a)}}function pi(n,t,a){if(a===null)n.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(t);return}n.setAttribute(t,a)}}function ca(n,t,a,e){if(e===null)n.removeAttribute(a);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttributeNS(t,a,e)}}function St(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Jo(n){var t=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _v(n,t,a){var e=Object.getOwnPropertyDescriptor(n.constructor.prototype,t);if(!n.hasOwnProperty(t)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var l=e.get,i=e.set;return Object.defineProperty(n,t,{configurable:!0,get:function(){return l.call(this)},set:function(c){a=""+c,i.call(this,c)}}),Object.defineProperty(n,t,{enumerable:e.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){n._valueTracker=null,delete n[t]}}}}function Jc(n){if(!n._valueTracker){var t=Jo(n)?"checked":"value";n._valueTracker=_v(n,t,""+n[t])}}function ko(n){if(!n)return!1;var t=n._valueTracker;if(!t)return!0;var a=t.getValue(),e="";return n&&(e=Jo(n)?n.checked?"true":"false":n.value),n=e,n!==a?(t.setValue(n),!0):!1}var zv=/[\n"\\]/g;function jt(n){return n.replace(zv,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function kc(n,t,a,e,l,i,c,u){n.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?n.type=c:n.removeAttribute("type"),t!=null?c==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+St(t)):n.value!==""+St(t)&&(n.value=""+St(t)):c!=="submit"&&c!=="reset"||n.removeAttribute("value"),t!=null?c==="number"&&n.value==t?Wc(n,St(n.value)):Wc(n,St(t)):a!=null?Wc(n,St(a)):e!=null&&n.removeAttribute("value"),l==null&&i!=null&&(n.defaultChecked=!!i),l!=null&&(n.checked=l&&typeof l!="function"&&typeof l!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?n.name=""+St(u):n.removeAttribute("name")}function Wo(n,t,a,e,l,i,c,u){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(n.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Jc(n);return}a=a!=null?""+St(a):"",t=t!=null?""+St(t):a,u||t===n.value||(n.value=t),n.defaultValue=t}e=e??l,e=typeof e!="function"&&typeof e!="symbol"&&!!e,n.checked=u?n.checked:!!e,n.defaultChecked=!!e,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(n.name=c),Jc(n)}function Wc(n,t){n.defaultValue!==""+t&&(n.defaultValue=""+t)}function _e(n,t,a,e){if(n=n.options,t){t={};for(var l=0;l<a.length;l++)t["$"+a[l]]=!0;for(a=0;a<n.length;a++)l=t.hasOwnProperty("$"+n[a].value),n[a].selected!==l&&(n[a].selected=l),l&&e&&(n[a].defaultSelected=!0)}else{for(a=""+St(a),t=null,l=0;l<n.length;l++){if(n[l].value===a){n[l].selected=!0,e&&(n[l].defaultSelected=!0);return}t!==null||n[l].disabled||(t=n[l])}t!==null&&(t.selected=!0)}}function Fo(n,t,a){if(t!=null&&(t=""+St(t),t!==n.value&&(n.value=t),a==null)){n.defaultValue!==t&&(n.defaultValue=t);return}n.defaultValue=a!=null?""+St(a):""}function $o(n,t,a,e){if(t==null){if(e!=null){if(a!=null)throw Error(g(92));if(un(e)){if(1<e.length)throw Error(g(93));e=e[0]}a=e}a==null&&(a=""),t=a}a=St(t),n.defaultValue=a,e=n.textContent,e===a&&e!==""&&e!==null&&(n.value=e),Jc(n)}function ze(n,t){if(t){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=t;return}}n.textContent=t}var Ov=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Io(n,t,a){var e=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?e?n.setProperty(t,""):t==="float"?n.cssFloat="":n[t]="":e?n.setProperty(t,a):typeof a!="number"||a===0||Ov.has(t)?t==="float"?n.cssFloat=a:n[t]=(""+a).trim():n[t]=a+"px"}function Po(n,t,a){if(t!=null&&typeof t!="object")throw Error(g(62));if(n=n.style,a!=null){for(var e in a)!a.hasOwnProperty(e)||t!=null&&t.hasOwnProperty(e)||(e.indexOf("--")===0?n.setProperty(e,""):e==="float"?n.cssFloat="":n[e]="",cn=!0);for(var l in t)e=t[l],t.hasOwnProperty(l)&&a[l]!==e&&(Io(n,l,e),cn=!0)}else for(var i in t)t.hasOwnProperty(i)&&Io(n,i,t[i])}function Fc(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function yi(n){return jv.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function Jt(){}var $c=null;function Ic(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Oe=null,Ne=null;function nr(n){var t=Te(n);if(t&&(n=t.stateNode)){var a=n[rt]||null;n:switch(n=t.stateNode,t.type){case"input":if(kc(n,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+jt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var e=a[t];if(e!==n&&e.form===n.form){var l=e[rt]||null;if(!l)throw Error(g(90));kc(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<a.length;t++)e=a[t],e.form===n.form&&ko(e)}break n;case"textarea":Fo(n,a.value,a.defaultValue);break n;case"select":t=a.value,t!=null&&_e(n,!!a.multiple,t,!1)}}}var Pc=!1;function tr(n,t,a){if(Pc)return n(t,a);Pc=!0;try{var e=n(t);return e}finally{if(Pc=!1,(Oe!==null||Ne!==null)&&(yc(),Oe&&(t=Oe,n=Ne,Ne=Oe=null,nr(t),n)))for(t=0;t<n.length;t++)nr(n[t])}}function gl(n,t){var a=n.stateNode;if(a===null)return null;var e=a[rt]||null;if(e===null)return null;a=e[t];n:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(n=n.type,e=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!e;break n;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(g(231,t,typeof a));return a}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nu=!1;if(ua)try{var pl={};Object.defineProperty(pl,"passive",{get:function(){nu=!0}}),window.addEventListener("test",pl,pl),window.removeEventListener("test",pl,pl)}catch{nu=!1}var Aa=null,tu=null,bi=null;function ar(){if(bi)return bi;var n,t=tu,a=t.length,e,l="value"in Aa?Aa.value:Aa.textContent,i=l.length;for(n=0;n<a&&t[n]===l[n];n++);var c=a-n;for(e=1;e<=c&&t[a-e]===l[i-e];e++);return bi=l.slice(n,1<e?1-e:void 0)}function Si(n){var t=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&t===13&&(n=13)):n=t,n===10&&(n=13),32<=n||n===13?n:0}function Ti(){return!0}function er(){return!1}function et(n){function t(a,e,l,i,c){this._reactName=a,this._targetInst=l,this.type=e,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var u in n)n.hasOwnProperty(u)&&(a=n[u],this[u]=a?a(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ti:er,this.isPropagationStopped=er,this}return J(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ti)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ti)},persist:function(){},isPersistent:Ti}),t}var _a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ei=et(_a),yl=J({},_a,{view:0,detail:0}),Dv=et(yl),au,eu,bl,Ai=J({},yl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:iu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==bl&&(bl&&n.type==="mousemove"?(au=n.screenX-bl.screenX,eu=n.screenY-bl.screenY):eu=au=0,bl=n),au)},movementY:function(n){return"movementY"in n?n.movementY:eu}}),lr=et(Ai),Mv=J({},Ai,{dataTransfer:0}),Cv=et(Mv),wv=J({},yl,{relatedTarget:0}),lu=et(wv),Rv=J({},_a,{animationName:0,elapsedTime:0,pseudoElement:0}),Uv=et(Rv),Hv=J({},_a,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),qv=et(Hv),xv=J({},_a,{data:0}),ir=et(xv),Yv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lv(n){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(n):(n=Gv[n])?!!t[n]:!1}function iu(){return Lv}var Xv=J({},yl,{key:function(n){if(n.key){var t=Yv[n.key]||n.key;if(t!=="Unidentified")return t}return n.type==="keypress"?(n=Si(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Bv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:iu,charCode:function(n){return n.type==="keypress"?Si(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Si(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Vv=et(Xv),Qv=J({},Ai,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cr=et(Qv),Zv=J({},_a,{submitter:0}),Kv=et(Zv),Jv=J({},yl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:iu}),kv=et(Jv),Wv=J({},_a,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fv=et(Wv),$v=J({},Ai,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Iv=et($v),Pv=J({},_a,{newState:0,oldState:0,source:0}),nm=et(Pv),tm=[9,13,27,32],cu=ua&&"CompositionEvent"in window,Sl=null;ua&&"documentMode"in document&&(Sl=document.documentMode);var am=ua&&"TextEvent"in window&&!Sl,ur=ua&&(!cu||Sl&&8<Sl&&11>=Sl),sr=" ",or=!1;function rr(n,t){switch(n){case"keyup":return tm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fr(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var je=!1;function em(n,t){switch(n){case"compositionend":return fr(t);case"keypress":return t.which!==32?null:(or=!0,sr);case"textInput":return n=t.data,n===sr&&or?null:n;default:return null}}function lm(n,t){if(je)return n==="compositionend"||!cu&&rr(n,t)?(n=ar(),bi=tu=Aa=null,je=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ur&&t.locale!=="ko"?null:t.data;default:return null}}var im={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dr(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t==="input"?!!im[n.type]:t==="textarea"}function hr(n,t,a,e){Oe?Ne?Ne.push(e):Ne=[e]:Oe=e,t=_c(t,"onChange"),0<t.length&&(a=new Ei("onChange","change",null,a,e),n.push({event:a,listeners:t}))}var Tl=null,El=null;function cm(n){th(n,0)}function _i(n){var t=ml(n);if(ko(t))return n}function vr(n,t){if(n==="change")return t}var mr=!1;if(ua){var uu;if(ua){var su="oninput"in document;if(!su){var gr=document.createElement("div");gr.setAttribute("oninput","return;"),su=typeof gr.oninput=="function"}uu=su}else uu=!1;mr=uu&&(!document.documentMode||9<document.documentMode)}function pr(){Tl&&(Tl.detachEvent("onpropertychange",yr),El=Tl=null)}function yr(n){if(n.propertyName==="value"&&_i(El)){var t=[];hr(t,El,n,Ic(n)),tr(cm,t)}}function um(n,t,a){n==="focusin"?(pr(),Tl=t,El=a,Tl.attachEvent("onpropertychange",yr)):n==="focusout"&&pr()}function sm(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return _i(El)}function om(n,t){if(n==="click")return _i(t)}function rm(n,t){if(n==="input"||n==="change")return _i(t)}function fm(n,t){return n===t&&(n!==0||1/n===1/t)||n!==n&&t!==t}var Tt=typeof Object.is=="function"?Object.is:fm;function Al(n,t){if(Tt(n,t))return!0;if(typeof n!="object"||n===null||typeof t!="object"||t===null)return!1;var a=Object.keys(n),e=Object.keys(t);if(a.length!==e.length)return!1;for(e=0;e<a.length;e++){var l=a[e];if(!Lc.call(t,l)||!Tt(n[l],t[l]))return!1}return!0}function ou(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function br(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Sr(n,t){var a=br(n);n=0;for(var e;a;){if(a.nodeType===3){if(e=n+a.textContent.length,n<=t&&e>=t)return{node:a,offset:t-n};n=e}n:{for(;a;){if(a.nextSibling){a=a.nextSibling;break n}a=a.parentNode}a=void 0}a=br(a)}}function Tr(n,t){return n&&t?n===t?!0:n&&n.nodeType===3?!1:t&&t.nodeType===3?Tr(n,t.parentNode):"contains"in n?n.contains(t):n.compareDocumentPosition?!!(n.compareDocumentPosition(t)&16):!1:!1}function Er(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var t=ou(n.document);t instanceof n.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)n=t.contentWindow;else break;t=ou(n.document)}return t}function ru(n){var t=n&&n.nodeName&&n.nodeName.toLowerCase();return t&&(t==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||t==="textarea"||n.contentEditable==="true")}var dm=ua&&"documentMode"in document&&11>=document.documentMode,De=null,fu=null,_l=null,du=!1;function Ar(n,t,a){var e=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;du||De==null||De!==ou(e)||(e=De,"selectionStart"in e&&ru(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),_l&&Al(_l,e)||(_l=e,e=_c(fu,"onSelect"),0<e.length&&(t=new Ei("onSelect","select",null,t,a),n.push({event:t,listeners:e}),t.target=De)))}function Ia(n,t){var a={};return a[n.toLowerCase()]=t.toLowerCase(),a["Webkit"+n]="webkit"+t,a["Moz"+n]="moz"+t,a}var Me={animationend:Ia("Animation","AnimationEnd"),animationiteration:Ia("Animation","AnimationIteration"),animationstart:Ia("Animation","AnimationStart"),transitionrun:Ia("Transition","TransitionRun"),transitionstart:Ia("Transition","TransitionStart"),transitioncancel:Ia("Transition","TransitionCancel"),transitionend:Ia("Transition","TransitionEnd")},hu={},_r={};ua&&(_r=document.createElement("div").style,"AnimationEvent"in window||(delete Me.animationend.animation,delete Me.animationiteration.animation,delete Me.animationstart.animation),"TransitionEvent"in window||delete Me.transitionend.transition);function Pa(n){if(hu[n])return hu[n];if(!Me[n])return n;var t=Me[n],a;for(a in t)if(t.hasOwnProperty(a)&&a in _r)return hu[n]=t[a];return n}var zr=Pa("animationend"),Or=Pa("animationiteration"),Nr=Pa("animationstart"),hm=Pa("transitionrun"),vm=Pa("transitionstart"),mm=Pa("transitioncancel"),jr=Pa("transitionend"),Dr=new Map,vu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vu.push("scrollEnd");function Yt(n,t){Dr.set(n,t),$a(t,[n])}var gm=0;function sa(n,t){if(n.name!=null&&n.name!=="auto")return n.name;if(t.autoName!==null)return t.autoName;n=Xt.identifierPrefix;var a=gm++;return n="_"+n+"t_"+a.toString(32)+"_",t.autoName=n}function Mr(n){if(n==null||typeof n=="string")return n;var t=null,a=Fe;if(a!==null)for(var e=0;e<a.length;e++){var l=n[a[e]];if(l!=null){if(l==="none")return"none";t=t==null?l:t+(" "+l)}}return t??n.default}function oa(n,t){return n=Mr(n),t=Mr(t),t==null?n==="auto"?null:n:t==="auto"?null:t}var zi=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},Dt=[],Ce=0,mu=0;function Oi(){for(var n=Ce,t=mu=Ce=0;t<n;){var a=Dt[t];Dt[t++]=null;var e=Dt[t];Dt[t++]=null;var l=Dt[t];Dt[t++]=null;var i=Dt[t];if(Dt[t++]=null,e!==null&&l!==null){var c=e.pending;c===null?l.next=l:(l.next=c.next,c.next=l),e.pending=l}i!==0&&Cr(a,l,i)}}function Ni(n,t,a,e){Dt[Ce++]=n,Dt[Ce++]=t,Dt[Ce++]=a,Dt[Ce++]=e,mu|=e,n.lanes|=e,n=n.alternate,n!==null&&(n.lanes|=e)}function gu(n,t,a,e){return Ni(n,t,a,e),ji(n)}function ne(n,t){return Ni(n,null,null,t),ji(n)}function Cr(n,t,a){n.lanes|=a;var e=n.alternate;e!==null&&(e.lanes|=a);for(var l=!1,i=n.return;i!==null;)i.childLanes|=a,e=i.alternate,e!==null&&(e.childLanes|=a),i.tag===22&&(n=i.stateNode,n===null||n._visibility&1||(l=!0)),n=i,i=i.return;return n.tag===3?(i=n.stateNode,l&&t!==null&&(l=31-bt(a),n=i.hiddenUpdates,e=n[l],e===null?n[l]=[t]:e.push(t),t.lane=a|536870912),i):null}function ji(n){if(50<Kl)throw Kl=0,pc=null,Error(g(185));for(var t=n.return;t!==null;)n=t,t=n.return;return n.tag===3?n.stateNode:null}var we={};function pm(n,t,a,e){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ft(n,t,a,e){return new pm(n,t,a,e)}function pu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ra(n,t){var a=n.alternate;return a===null?(a=ft(n.tag,t,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=t,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&1206910976,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,t=n.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a.refCleanup=n.refCleanup,a}function wr(n,t){n.flags&=1206910978;var a=n.alternate;return a===null?(n.childLanes=0,n.lanes=t,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=a.childLanes,n.lanes=a.lanes,n.child=a.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=a.memoizedProps,n.memoizedState=a.memoizedState,n.updateQueue=a.updateQueue,n.type=a.type,t=a.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n}function Di(n,t,a,e,l,i){var c=0;if(e=n,typeof e=="function")pu(e)&&(c=1);else if(typeof e=="string")c=Zg(n,a,Kt.current)?26:n==="html"||n==="head"||n==="body"?27:5;else n:switch(e){case C:return n=ft(31,a,t,l),n.elementType=C,n.lanes=i,n;case ot:return te(a.children,l,i,t);case tt:c=8,l|=24;break;case at:return n=ft(12,a,t,l|2),n.elementType=at,n.lanes=i,n;case x:return n=ft(13,a,t,l),n.elementType=x,n.lanes=i,n;case Y:return n=ft(19,a,t,l),n.elementType=Y,n.lanes=i,n;case K:case r:return n=l|32,n=ft(30,a,t,n),n.elementType=r,n.lanes=i,n.stateNode={autoName:null,paired:null,clones:null,ref:null},n;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Mn:c=10;break n;case Qt:c=9;break n;case O:c=11;break n;case rn:c=14;break n;case an:c=16,e=null;break n}c=29,a=Error(g(130,n===null?"null":typeof n,"")),e=null}return t=ft(c,a,t,l),t.elementType=n,t.type=e,t.lanes=i,t}function te(n,t,a,e){return n=ft(7,n,e,t),n.lanes=a,n}function yu(n,t,a){return n=ft(6,n,null,t),n.lanes=a,n}function Rr(n){var t=ft(18,null,null,0);return t.stateNode=n,t}function bu(n,t,a){return t=ft(4,n.children!==null?n.children:[],n.key,t),t.lanes=a,t.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},t}var Ur=new WeakMap;function Mt(n,t){if(typeof n=="object"&&n!==null){var a=Ur.get(n);return a!==void 0?a:(t={value:n,source:t,stack:jo(t)},Ur.set(n,t),t)}return{value:n,source:t,stack:jo(t)}}var Re=[],Ue=0,Mi=null,zl=0,Ct=[],wt=0,za=null,kt=1,Wt="";function fa(n,t){Re[Ue++]=zl,Re[Ue++]=Mi,Mi=n,zl=t}function Hr(n,t,a){Ct[wt++]=kt,Ct[wt++]=Wt,Ct[wt++]=za,za=n;var e=kt;n=Wt;var l=32-bt(e)-1;e&=~(1<<l),a+=1;var i=32-bt(t)+l;if(30<i){var c=l-l%5;i=(e&(1<<c)-1).toString(32),e>>=c,l-=c,kt=1<<32-bt(t)+l|a<<l|e,Wt=i+n}else kt=1<<i|a<<l|e,Wt=n}function Ci(n){n.return!==null&&(fa(n,1),Hr(n,1,0))}function Su(n){for(;n===Mi;)Mi=Re[--Ue],Re[Ue]=null,zl=Re[--Ue],Re[Ue]=null;for(;n===za;)za=Ct[--wt],Ct[wt]=null,Wt=Ct[--wt],Ct[wt]=null,kt=Ct[--wt],Ct[wt]=null}function qr(n,t){Ct[wt++]=kt,Ct[wt++]=Wt,Ct[wt++]=za,kt=t.id,Wt=t.overflow,za=n}var Gn=null,En=null,k=!1,Oa=null,Rt=!1,Tu=Error(g(519));function Na(n){var t=Error(g(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ol(Mt(t,n)),Tu}function xr(n){var t=n.stateNode,a=n.type,e=n.memoizedProps;switch(t[Qn]=n,t[rt]=e,a){case"dialog":F("cancel",t),F("close",t);break;case"iframe":case"object":case"embed":F("load",t);break;case"video":case"audio":for(a=0;a<kl.length;a++)F(kl[a],t);break;case"source":F("error",t);break;case"img":case"image":case"link":F("error",t),F("load",t);break;case"details":F("toggle",t);break;case"input":F("invalid",t),Wo(t,e.value,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name,!0);break;case"select":F("invalid",t);break;case"textarea":F("invalid",t),$o(t,e.value,e.defaultValue,e.children)}a=e.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||e.suppressHydrationWarning===!0||ih(t.textContent,a)?(e.popover!=null&&(F("beforetoggle",t),F("toggle",t)),e.onScroll!=null&&F("scroll",t),e.onScrollEnd!=null&&F("scrollend",t),e.onClick!=null&&(t.onclick=Jt),t=!0):t=!1,t||Na(n,!0)}function wi(n){for(Gn=n.return;Gn;)switch(Gn.tag){case 5:case 31:case 13:Rt=!1;return;case 27:case 3:Rt=!0;return;default:Gn=Gn.return}}function He(n){if(n!==Gn)return!1;if(!k)return wi(n),k=!0,!1;var t=n.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=n.type,a=!(a!=="form"&&a!=="button")||$s(n.type,n.memoizedProps)),a=!a),a&&En&&Na(n),wi(n),t===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(g(317));En=_h(n)}else if(t===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(g(317));En=_h(n)}else t===27?(t=En,Va(n.type)?(n=co,co=null,En=n):En=t):En=Gn?Ht(n.stateNode.nextSibling):null;return!0}function ae(){En=Gn=null,k=!1}function Eu(){var n=Oa;return n!==null&&(vt===null?vt=n:vt.push.apply(vt,n),Oa=null),n}function Ol(n){Oa===null?Oa=[n]:Oa.push(n)}var Au=Zt(null),ee=null,da=null;function ja(n,t,a){Tn(Au,t._currentValue),t._currentValue=a}function ha(n){n._currentValue=Au.current,Vn(Au)}function Ri(n,t,a){for(;n!==null;){var e=n.alternate;if((n.childLanes&t)!==t?(n.childLanes|=t,e!==null&&(e.childLanes|=t)):e!==null&&(e.childLanes&t)!==t&&(e.childLanes|=t),n===a)break;n=n.return}}function _u(n,t,a,e){var l=n.child;for(l!==null&&(l.return=n);l!==null;){var i=l.dependencies;if(i!==null){var c=l.child;i=i.firstContext;n:for(;i!==null;){var u=i;i=l;for(var s=0;s<t.length;s++)if(u.context===t[s]){i.lanes|=a,u=i.alternate,u!==null&&(u.lanes|=a),Ri(i.return,a,n),e||(c=null);break n}i=u.next}}else if(l.tag===18){if(c=l.return,c===null)throw Error(g(341));c.lanes|=a,i=c.alternate,i!==null&&(i.lanes|=a),Ri(c,a,n),c=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=a,c=l.alternate,c!==null&&(c.lanes|=a),Ri(l.return,a,n),c=l.child,c=c!==null?c.sibling:null):c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===n){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}}function le(n,t,a,e){n=null;for(var l=t,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var c=l.alternate;if(c===null)throw Error(g(387));if(c=c.memoizedProps,c!==null){var u=l.type;Tt(l.pendingProps.value,c.value)||(n!==null?n.push(u):n=[u])}}else if(l===ci.current){if(c=l.alternate,c===null)throw Error(g(387));c.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(n!==null?n.push(cl):n=[cl])}l=l.return}return n!==null&&_u(t,n,a,e),t.flags|=262144,n!==null}function Ui(n){for(n=n.firstContext;n!==null;){if(!Tt(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function ie(n){ee=n,da=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function Zn(n){return Yr(ee,n)}function Hi(n,t){return ee===null&&ie(n),Yr(n,t)}function Yr(n,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},da===null){if(n===null)throw Error(g(308));da=t,n.dependencies={lanes:0,firstContext:t},n.flags|=524288}else da=da.next=t;return a}var ym=typeof AbortController<"u"?AbortController:function(){var n=[],t=this.signal={aborted:!1,addEventListener:function(a,e){n.push(e)}};this.abort=function(){t.aborted=!0,n.forEach(function(a){return a()})}},bm=A.unstable_scheduleCallback,Sm=A.unstable_NormalPriority,wn={$$typeof:Mn,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zu(){return{controller:new ym,data:new Map,refCount:0}}function Nl(n){n.refCount--,n.refCount===0&&bm(Sm,function(){n.controller.abort()})}function Br(n,t){if((n.pendingLanes&4194048)!==0){var a=n.transitionTypes;for(a===null&&(a=n.transitionTypes=[]),n=0;n<t.length;n++){var e=t[n];a.indexOf(e)===-1&&a.push(e)}}}var jl=null;function Tm(n){var t=n.transitionTypes;return n.transitionTypes=null,t}var Dl=null,Ou=0,ce=0,qe=null;function Em(n,t){if(Dl===null){var a=Dl=[];Ou=0,ce=Xs(),qe={status:"pending",value:void 0,then:function(e){a.push(e)}}}return Ou++,t.then(Gr,Gr),t}function Gr(){if(--Ou===0&&(jl=null,Dl!==null)){qe!==null&&(qe.status="fulfilled");var n=Dl;Dl=null,ce=0,qe=null;for(var t=0;t<n.length;t++)(0,n[t])()}}function Am(n,t){var a=[],e={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return n.then(function(){e.status="fulfilled",e.value=t;for(var l=0;l<a.length;l++)(0,a[l])(t)},function(l){for(e.status="rejected",e.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),e}var Lr=D.S;D.S=function(n,t){if(Ud=pt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Em(n,t),jl!==null)for(var a=nl;a!==null;)Br(a,jl),a=a.next;if(a=n.types,a!==null){for(var e=nl;e!==null;)Br(e,a),e=e.next;if(ce!==0){e=jl,e===null&&(e=jl=[]);for(var l=0;l<a.length;l++){var i=a[l];e.indexOf(i)===-1&&e.push(i)}}}Lr!==null&&Lr(n,t)};var ue=Zt(null);function Nu(){var n=ue.current;return n!==null?n:bn.pooledCache}function qi(n,t){t===null?Tn(ue,ue.current):Tn(ue,t.pool)}function Xr(){var n=Nu();return n===null?null:{parent:wn._currentValue,pool:n}}var xe=Error(g(460)),ju=Error(g(474)),xi=Error(g(542)),Yi={then:function(){}};function Vr(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Qr(n,t,a){switch(a=n[a],a===void 0?n.push(t):a!==t&&(t.then(Jt,Jt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw n=t.reason,Kr(n),n===void 0&&!("reason"in t)?Error(g(600)):n;default:if(typeof t.status=="string")t.then(Jt,Jt);else{if(n=bn,n!==null&&100<n.shellSuspendCounter)throw Error(g(482));n=t,n.status="pending",n.then(function(e){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=e}},function(e){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw n=t.reason,Kr(n),n}throw oe=t,xe}}function se(n){try{var t=n._init;return t(n._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(oe=a,xe):a}}var oe=null;function Zr(){if(oe===null)throw Error(g(459));var n=oe;return oe=null,n}function Kr(n){if(n===xe||n===xi)throw Error(g(483))}var Ye=null,Ml=0;function Bi(n){var t=Ml;return Ml+=1,Ye===null&&(Ye=[]),Qr(Ye,n,t)}function Da(n,t){t=t.props.ref,n.ref=t!==void 0?t:null}function Gi(n,t){throw t.$$typeof===nn?Error(g(525)):(n=Object.prototype.toString.call(t),Error(g(31,n==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":n)))}function Jr(n){function t(d,o){if(n){var v=d.deletions;v===null?(d.deletions=[o],d.flags|=16):v.push(o)}}function a(d,o){if(!n)return null;for(;o!==null;)t(d,o),o=o.sibling;return null}function e(d){for(var o=new Map;d!==null;)d.key===null?o.set(d.index,d):o.set(d.key,d),d=d.sibling;return o}function l(d,o){return d=ra(d,o),d.index=0,d.sibling=null,d}function i(d,o,v){return d.index=v,n?(v=d.alternate,v!==null?(v=v.index,v<o?(d.flags|=2,o):v):(d.flags|=134217730,o)):(d.flags|=1048576,o)}function c(d){return n&&d.alternate===null&&(d.flags|=134217730),d}function u(d,o,v,b){return o===null||o.tag!==6?(o=yu(v,d.mode,b),o.return=d,o):(o=l(o,v),o.return=d,o)}function s(d,o,v,b){var N=v.type;return N===ot?(d=p(d,o,v.props.children,b,v.key),Da(d,v),d):o!==null&&(o.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===an&&se(N)===o.type)?(o=l(o,v.props),Da(o,v),o.return=d,o):(o=Di(v.type,v.key,v.props,null,d.mode,b),Da(o,v),o.return=d,o)}function h(d,o,v,b){return o===null||o.tag!==4||o.stateNode.containerInfo!==v.containerInfo||o.stateNode.implementation!==v.implementation?(o=bu(v,d.mode,b),o.return=d,o):(o=l(o,v.children||[]),o.return=d,o)}function p(d,o,v,b,N){return o===null||o.tag!==7?(o=te(v,d.mode,b,N),o.return=d,o):(o=l(o,v),o.return=d,o)}function S(d,o,v){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=yu(""+o,d.mode,v),o.return=d,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case xt:return v=Di(o.type,o.key,o.props,null,d.mode,v),Da(v,o),v.return=d,v;case st:return o=bu(o,d.mode,v),o.return=d,o;case an:return o=se(o),S(d,o,v)}if(un(o)||M(o))return o=te(o,d.mode,v,null),o.return=d,o;if(typeof o.then=="function")return S(d,Bi(o),v);if(o.$$typeof===Mn)return S(d,Hi(d,o),v);Gi(d,o)}return null}function f(d,o,v,b){var N=o!==null?o.key:null;if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return N!==null?null:u(d,o,""+v,b);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case xt:return v.key===N?s(d,o,v,b):null;case st:return v.key===N?h(d,o,v,b):null;case an:return v=se(v),f(d,o,v,b)}if(un(v)||M(v))return N!==null?null:p(d,o,v,b,null);if(typeof v.then=="function")return f(d,o,Bi(v),b);if(v.$$typeof===Mn)return f(d,o,Hi(d,v),b);Gi(d,v)}return null}function m(d,o,v,b,N){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return d=d.get(v)||null,u(o,d,""+b,N);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case xt:return d=d.get(b.key===null?v:b.key)||null,s(o,d,b,N);case st:return d=d.get(b.key===null?v:b.key)||null,h(o,d,b,N);case an:return b=se(b),m(d,o,v,b,N)}if(un(b)||M(b))return d=d.get(v)||null,p(o,d,b,N,null);if(typeof b.then=="function")return m(d,o,v,Bi(b),N);if(b.$$typeof===Mn)return m(d,o,v,Hi(o,b),N);Gi(o,b)}return null}function _(d,o,v,b){for(var N=null,P=null,R=o,B=o=0,Hn=null;R!==null&&B<v.length;B++){R.index>B?(Hn=R,R=null):Hn=R.sibling;var tn=f(d,R,v[B],b);if(tn===null){R===null&&(R=Hn);break}n&&R&&tn.alternate===null&&t(d,R),o=i(tn,o,B),P===null?N=tn:P.sibling=tn,P=tn,R=Hn}if(B===v.length)return a(d,R),k&&fa(d,B),N;if(R===null){for(;B<v.length;B++)R=S(d,v[B],b),R!==null&&(o=i(R,o,B),P===null?N=R:P.sibling=R,P=R);return k&&fa(d,B),N}for(R=e(R);B<v.length;B++)Hn=m(R,d,B,v[B],b),Hn!==null&&(n&&(tn=Hn.alternate,tn!==null&&R.delete(tn.key===null?B:tn.key)),o=i(Hn,o,B),P===null?N=Hn:P.sibling=Hn,P=Hn);return n&&R.forEach(function(ka){return t(d,ka)}),k&&fa(d,B),N}function j(d,o,v,b){if(v==null)throw Error(g(151));for(var N=null,P=null,R=o,B=o=0,Hn=null,tn=v.next();R!==null&&!tn.done;B++,tn=v.next()){R.index>B?(Hn=R,R=null):Hn=R.sibling;var ka=f(d,R,tn.value,b);if(ka===null){R===null&&(R=Hn);break}n&&R&&ka.alternate===null&&t(d,R),o=i(ka,o,B),P===null?N=ka:P.sibling=ka,P=ka,R=Hn}if(tn.done)return a(d,R),k&&fa(d,B),N;if(R===null){for(;!tn.done;B++,tn=v.next())tn=S(d,tn.value,b),tn!==null&&(o=i(tn,o,B),P===null?N=tn:P.sibling=tn,P=tn);return k&&fa(d,B),N}for(R=e(R);!tn.done;B++,tn=v.next())tn=m(R,d,B,tn.value,b),tn!==null&&(n&&(Hn=tn.alternate,Hn!==null&&R.delete(Hn.key===null?B:Hn.key)),o=i(tn,o,B),P===null?N=tn:P.sibling=tn,P=tn);return n&&R.forEach(function(ep){return t(d,ep)}),k&&fa(d,B),N}function Z(d,o,v,b){if(typeof v=="object"&&v!==null&&v.type===ot&&v.key===null&&v.props.ref===void 0&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case xt:n:{for(var N=v.key;o!==null;){if(o.key===N){if(N=v.type,N===ot){if(o.tag===7){a(d,o.sibling),b=l(o,v.props.children),Da(b,v),b.return=d,d=b;break n}}else if(o.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===an&&se(N)===o.type){a(d,o.sibling),b=l(o,v.props),Da(b,v),b.return=d,d=b;break n}a(d,o);break}else t(d,o);o=o.sibling}v.type===ot?(b=te(v.props.children,d.mode,b,v.key),Da(b,v),b.return=d,d=b):(b=Di(v.type,v.key,v.props,null,d.mode,b),Da(b,v),b.return=d,d=b)}return c(d);case st:n:{for(N=v.key;o!==null;){if(o.key===N)if(o.tag===4&&o.stateNode.containerInfo===v.containerInfo&&o.stateNode.implementation===v.implementation){a(d,o.sibling),b=l(o,v.children||[]),b.return=d,d=b;break n}else{a(d,o);break}else t(d,o);o=o.sibling}b=bu(v,d.mode,b),b.return=d,d=b}return c(d);case an:return v=se(v),Z(d,o,v,b)}if(un(v))return _(d,o,v,b);if(M(v)){if(N=M(v),typeof N!="function")throw Error(g(150));return v=N.call(v),j(d,o,v,b)}if(typeof v.then=="function")return Z(d,o,Bi(v),b);if(v.$$typeof===Mn)return Z(d,o,Hi(d,v),b);Gi(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint"?(v=""+v,o!==null&&o.tag===6?(a(d,o.sibling),b=l(o,v),b.return=d,d=b):(a(d,o),b=yu(v,d.mode,b),b.return=d,d=b),c(d)):a(d,o)}return function(d,o,v,b){try{Ml=0;var N=Z(d,o,v,b);return Ye=null,N}catch(R){if(R===xe||R===xi)throw R;var P=ft(29,R,null,d.mode);return P.lanes=b,P.return=d,P}finally{}}}var re=Jr(!0),kr=Jr(!1),Ma=!1;function Du(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Mu(n,t){n=n.updateQueue,t.updateQueue===n&&(t.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Ca(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function wa(n,t,a){var e=n.updateQueue;if(e===null)return null;if(e=e.shared,(sn&2)!==0){var l=e.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),e.pending=t,t=ji(n),Cr(n,null,a),t}return Ni(n,e,t,a),ji(n)}function Cl(n,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var e=t.lanes;e&=n.pendingLanes,a|=e,t.lanes=a,Ho(n,a)}}function Cu(n,t){var a=n.updateQueue,e=n.alternate;if(e!==null&&(e=e.updateQueue,a===e)){var l=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?l=i=c:i=i.next=c,a=a.next}while(a!==null);i===null?l=i=t:i=i.next=t}else l=i=t;a={baseState:e.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:e.shared,callbacks:e.callbacks},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=t:n.next=t,a.lastBaseUpdate=t}var wu=!1;function wl(){if(wu){var n=qe;if(n!==null)throw n}}function Rl(n,t,a,e){wu=!1;var l=n.updateQueue;Ma=!1;var i=l.firstBaseUpdate,c=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var s=u,h=s.next;s.next=null,c===null?i=h:c.next=h,c=s;var p=n.alternate;p!==null&&(p=p.updateQueue,u=p.lastBaseUpdate,u!==c&&(u===null?p.firstBaseUpdate=h:u.next=h,p.lastBaseUpdate=s))}if(i!==null){var S=l.baseState;c=0,p=h=s=null,u=i;do{var f=u.lane&-536870913,m=f!==u.lane;if(m?(I&f)===f:(e&f)===f){f!==0&&f===ce&&(wu=!0),p!==null&&(p=p.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});n:{var _=n,j=u;f=t;var Z=a;switch(j.tag){case 1:if(_=j.payload,typeof _=="function"){S=_.call(Z,S,f);break n}S=_;break n;case 3:_.flags=_.flags&-65537|128;case 0:if(_=j.payload,f=typeof _=="function"?_.call(Z,S,f):_,f==null)break n;S=J({},S,f);break n;case 2:Ma=!0}}f=u.callback,f!==null&&(n.flags|=64,m&&(n.flags|=8192),m=l.callbacks,m===null?l.callbacks=[f]:m.push(f))}else m={lane:f,tag:u.tag,payload:u.payload,callback:u.callback,next:null},p===null?(h=p=m,s=S):p=p.next=m,c|=f;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;m=u,u=m.next,m.next=null,l.lastBaseUpdate=m,l.shared.pending=null}}while(!0);p===null&&(s=S),l.baseState=s,l.firstBaseUpdate=h,l.lastBaseUpdate=p,i===null&&(l.shared.lanes=0),Ba|=c,n.lanes=c,n.memoizedState=S}}function Wr(n,t){if(typeof n!="function")throw Error(g(191,n));n.call(t)}function Fr(n,t){var a=n.callbacks;if(a!==null)for(n.callbacks=null,n=0;n<a.length;n++)Wr(a[n],t)}var Ra=Zt(null),Li=Zt(0);function $r(n,t){n=ya,Tn(Li,n),Tn(Ra,t),ya=n|t.baseLanes}function Ru(){Tn(Li,ya),Tn(Ra,Ra.current)}function Uu(){ya=Li.current,Vn(Ra),Vn(Li)}var Kn=Zt(null),nt=null;function Ua(n){var t=n.alternate;Tn(Jn,Jn.current&1),Tn(Kn,n),nt===null&&(t===null||Ra.current!==null||t.memoizedState!==null)&&(nt=n)}function Hu(n){Tn(Jn,Jn.current),Tn(Kn,n),nt===null&&(nt=n)}function Ir(n){n.tag===22?(Tn(Jn,Jn.current),Tn(Kn,n),nt===null&&(nt=n)):Ha()}function Ha(){Tn(Jn,Jn.current),Tn(Kn,Kn.current)}function Et(n){Vn(Kn),nt===n&&(nt=null),Vn(Jn)}var Jn=Zt(0);function Ul(n,t){Tn(Kn,Kn.current),Tn(Jn,t)}function qu(n){Vn(Jn),Vn(Kn),nt===n&&(nt=null)}function Xi(n){for(var t=n;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||lo(a)||io(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var va=0,Q=null,yn=null,Rn=null,Vi=!1,Be=!1,fe=!1,Qi=0,Hl=0,Ge=null,_m=0;function jn(){throw Error(g(321))}function xu(n,t){if(t===null)return!1;for(var a=0;a<t.length&&a<n.length;a++)if(!Tt(n[a],t[a]))return!1;return!0}function Yu(n,t,a,e,l,i){return va=i,Q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=n===null||n.memoizedState===null?qf:xf,fe=!1,i=a(e,l),fe=!1,Be&&(i=nf(t,a,e,l)),Pr(n),i}function Pr(n){D.H=$i;var t=yn!==null&&yn.next!==null;if(va=0,Rn=yn=Q=null,Vi=!1,Hl=0,Ge=null,t)throw Error(g(300));n===null||Un||(n=n.dependencies,n!==null&&Ui(n)&&(Un=!0))}function nf(n,t,a,e){Q=n;var l=0;do{if(Be&&(Ge=null),Hl=0,Be=!1,25<=l)throw Error(g(301));if(l+=1,Rn=yn=null,n.updateQueue!=null){var i=n.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}D.H=wm,i=t(a,e)}while(Be);return i}function zm(){var n=D.H,t=n.useState()[0];return t=typeof t.then=="function"?ql(t):t,n=n.useState()[0],(yn!==null?yn.memoizedState:null)!==n&&(Q.flags|=1024),t}function Bu(){var n=Qi!==0;return Qi=0,n}function Gu(n,t,a){t.updateQueue=n.updateQueue,t.flags&=-2053,n.lanes&=~a}function Lu(n){if(Vi){for(n=n.memoizedState;n!==null;){var t=n.queue;t!==null&&(t.pending=null),n=n.next}Vi=!1}va=0,Rn=yn=Q=null,Be=!1,Hl=Qi=0,Ge=null}function lt(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rn===null?Q.memoizedState=Rn=n:Rn=Rn.next=n,Rn}function Cn(){if(yn===null){var n=Q.alternate;n=n!==null?n.memoizedState:null}else n=yn.next;var t=Rn===null?Q.memoizedState:Rn.next;if(t!==null)Rn=t,yn=n;else{if(n===null)throw Q.alternate===null?Error(g(467)):Error(g(310));yn=n,n={memoizedState:yn.memoizedState,baseState:yn.baseState,baseQueue:yn.baseQueue,queue:yn.queue,next:null},Rn===null?Q.memoizedState=Rn=n:Rn=Rn.next=n}return Rn}function Zi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ql(n){var t=Hl;return Hl+=1,Ge===null&&(Ge=[]),n=Qr(Ge,n,t),t=Q,(Rn===null?t.memoizedState:Rn.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?qf:xf),n}function Ki(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return ql(n);if(n.$$typeof===T)return;if(n.$$typeof===Mn)return Zn(n)}throw Error(g(438,String(n)))}function Xu(n){var t=null,a=Q.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var e=Q.alternate;e!==null&&(e=e.updateQueue,e!==null&&(e=e.memoCache,e!=null&&(t={data:e.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Zi(),Q.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(n),e=0;e<n;e++)a[e]=On;return t.index++,a}function ma(n,t){return typeof t=="function"?t(n):t}function Ji(n){var t=Cn();return Vu(t,yn,n)}function Vu(n,t,a){var e=n.queue;if(e===null)throw Error(g(311));e.lastRenderedReducer=a;var l=n.baseQueue,i=e.pending;if(i!==null){if(l!==null){var c=l.next;l.next=i.next,i.next=c}t.baseQueue=l=i,e.pending=null}if(i=n.baseState,l===null)n.memoizedState=i;else{t=l.next;var u=c=null,s=null,h=t,p=!1;do{var S=h.lane&-536870913;if(S!==h.lane?(I&S)===S:(va&S)===S){var f=h.revertLane;if(f===0)s!==null&&(s=s.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),S===ce&&(p=!0);else if((va&f)===f){h=h.next,f===ce&&(p=!0);continue}else S={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},s===null?(u=s=S,c=i):s=s.next=S,Q.lanes|=f,Ba|=f;S=h.action,fe&&a(i,S),i=h.hasEagerState?h.eagerState:a(i,S)}else f={lane:S,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},s===null?(u=s=f,c=i):s=s.next=f,Q.lanes|=S,Ba|=S;h=h.next}while(h!==null&&h!==t);if(s===null?c=i:s.next=u,!Tt(i,n.memoizedState)&&(Un=!0,p&&(a=qe,a!==null)))throw a;n.memoizedState=i,n.baseState=c,n.baseQueue=s,e.lastRenderedState=i}return l===null&&(e.lanes=0),[n.memoizedState,e.dispatch]}function Qu(n){var t=Cn(),a=t.queue;if(a===null)throw Error(g(311));a.lastRenderedReducer=n;var e=a.dispatch,l=a.pending,i=t.memoizedState;if(l!==null){a.pending=null;var c=l=l.next;do i=n(i,c.action),c=c.next;while(c!==l);Tt(i,t.memoizedState)||(Un=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,e]}function tf(n,t,a){var e=Q,l=Cn(),i=k;if(i){if(a===void 0)throw Error(g(407));a=a()}else a=t();var c=!Tt((yn||l).memoizedState,a);if(c&&(l.memoizedState=a,Un=!0),l=l.queue,Ju(lf.bind(null,e,l,n),[n]),n=l.getSnapshot!==t||c||Rn!==null&&(Rn.memoizedState.tag&1)!==0,Le(n?9:8,{destroy:void 0},ef.bind(null,e,l,a,t),null),n){if(e.flags|=2048,bn===null)throw Error(g(349));i||(va&127)!==0||af(e,t,a)}return a}function af(n,t,a){n.flags|=16384,n={getSnapshot:t,value:a},t=Q.updateQueue,t===null?(t=Zi(),Q.updateQueue=t,t.stores=[n]):(a=t.stores,a===null?t.stores=[n]:a.push(n))}function ef(n,t,a,e){t.value=a,t.getSnapshot=e,cf(t)&&uf(n)}function lf(n,t,a){return a(function(){cf(t)&&uf(n)})}function cf(n){var t=n.getSnapshot;n=n.value;try{var a=t();return!Tt(n,a)}catch{return!0}}function uf(n){var t=ne(n,2);t!==null&&mt(t,n,2)}function Zu(n){var t=lt();if(typeof n=="function"){var a=n;if(n=a(),fe){Ea(!0);try{a()}finally{Ea(!1)}}}return t.memoizedState=t.baseState=n,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:n},t}function sf(n,t,a,e){return n.baseState=a,Vu(n,yn,typeof e=="function"?e:ma)}function Om(n,t,a,e,l){if(Fi(n))throw Error(g(485));if(n=t.action,n!==null){var i={payload:l,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};D.T!==null?a(!0):i.isTransition=!1,e(i),a=t.pending,a===null?(i.next=t.pending=i,of(t,i)):(i.next=a.next,t.pending=a.next=i)}}function of(n,t){var a=t.action,e=t.payload,l=n.state;if(t.isTransition){var i=D.T,c={};c.types=i!==null?i.types:null,D.T=c;try{var u=a(l,e),s=D.S;s!==null&&s(c,u),rf(n,t,u)}catch(h){Ku(n,t,h)}finally{i!==null&&c.types!==null&&(i.types=c.types),D.T=i}}else try{i=a(l,e),rf(n,t,i)}catch(h){Ku(n,t,h)}}function rf(n,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(e){ff(n,t,e)},function(e){return Ku(n,t,e)}):ff(n,t,a)}function ff(n,t,a){t.status="fulfilled",t.value=a,df(t),n.state=a,t=n.pending,t!==null&&(a=t.next,a===t?n.pending=null:(a=a.next,t.next=a,of(n,a)))}function Ku(n,t,a){var e=n.pending;if(n.pending=null,e!==null){e=e.next;do t.status="rejected",t.reason=a,df(t),t=t.next;while(t!==e)}n.action=null}function df(n){n=n.listeners;for(var t=0;t<n.length;t++)(0,n[t])()}function hf(n,t){return t}function vf(n,t){if(k){var a=bn.formState;if(a!==null){n:{var e=Q;if(k){if(En){t:{for(var l=En,i=Rt;l.nodeType!==8;){if(!i){l=null;break t}if(l=Ht(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){En=Ht(l.nextSibling),e=l.data==="F!";break n}}Na(e)}e=!1}e&&(t=a[0])}}return a=lt(),a.memoizedState=a.baseState=t,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hf,lastRenderedState:t},a.queue=e,a=Rf.bind(null,Q,e),e.dispatch=a,e=Zu(!1),i=Iu.bind(null,Q,!1,e.queue),e=lt(),l={state:t,dispatch:null,action:n,pending:null},e.queue=l,a=Om.bind(null,Q,l,i,a),l.dispatch=a,e.memoizedState=n,[t,a,!1]}function mf(n){var t=Cn();return gf(t,yn,n)}function gf(n,t,a){if(t=Vu(n,t,hf)[0],n=Ji(ma)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var e=ql(t)}catch(c){throw c===xe?xi:c}else e=t;t=Cn();var l=t.queue,i=l.dispatch;return a!==t.memoizedState&&(Q.flags|=2048,Le(9,{destroy:void 0},Nm.bind(null,l,a),null)),[e,i,n]}function Nm(n,t){n.action=t}function pf(n){var t=Cn(),a=yn;if(a!==null)return gf(t,a,n);Cn(),t=t.memoizedState,a=Cn();var e=a.queue.dispatch;return a.memoizedState=n,[t,e,!1]}function Le(n,t,a,e){return n={tag:n,create:a,deps:e,inst:t,next:null},t=Q.updateQueue,t===null&&(t=Zi(),Q.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=n.next=n:(e=a.next,a.next=n,n.next=e,t.lastEffect=n),n}function yf(){return Cn().memoizedState}function ki(n,t,a,e){var l=lt();Q.flags|=n,l.memoizedState=Le(1|t,{destroy:void 0},a,e===void 0?null:e)}function Wi(n,t,a,e){var l=Cn();e=e===void 0?null:e;var i=l.memoizedState.inst;yn!==null&&e!==null&&xu(e,yn.memoizedState.deps)?l.memoizedState=Le(t,i,a,e):(Q.flags|=n,l.memoizedState=Le(1|t,i,a,e))}function bf(n,t){ki(8390656,8,n,t)}function Ju(n,t){Wi(2048,8,n,t)}function jm(n){Q.flags|=4;var t=Q.updateQueue;if(t===null)t=Zi(),Q.updateQueue=t,t.events=[n];else{var a=t.events;a===null?t.events=[n]:a.push(n)}}function Sf(n){var t=Cn().memoizedState;return jm({ref:t,nextImpl:n}),function(){if((sn&2)!==0)throw Error(g(440));return t.impl.apply(void 0,arguments)}}function Tf(n,t){return Wi(4,2,n,t)}function Ef(n,t){return Wi(4,4,n,t)}function Af(n,t){if(typeof t=="function"){n=n();var a=t(n);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return n=n(),t.current=n,function(){t.current=null}}function _f(n,t,a){a=a!=null?a.concat([n]):null,Wi(4,4,Af.bind(null,t,n),a)}function ku(){}function zf(n,t){var a=Cn();t=t===void 0?null:t;var e=a.memoizedState;return t!==null&&xu(t,e[1])?e[0]:(a.memoizedState=[n,t],n)}function Of(n,t){var a=Cn();t=t===void 0?null:t;var e=a.memoizedState;if(t!==null&&xu(t,e[1]))return e[0];if(e=n(),fe){Ea(!0);try{n()}finally{Ea(!1)}}return a.memoizedState=[e,t],e}function Wu(n,t,a){return a===void 0||(va&1073741824)!==0&&(I&261930)===0?n.memoizedState=t:(n.memoizedState=a,n=qd(),Q.lanes|=n,Ba|=n,a)}function Nf(n,t,a,e){return Tt(a,t)?a:Ra.current!==null?(n=Wu(n,a,e),Tt(n,t)||(Un=!0),n):(va&106)===0||(va&1073741824)!==0&&(I&261930)===0?(Un=!0,n.memoizedState=a):(n=qd(),Q.lanes|=n,Ba|=n,t)}function jf(n,t,a,e,l){var i=G.p;G.p=i!==0&&8>i?i:8;var c=D.T,u={};u.types=c!==null?c.types:null,D.T=u,Iu(n,!1,t,a);try{var s=l(),h=D.S;if(h!==null&&h(u,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var p=Am(s,e);xl(n,t,p,Ot(n))}else xl(n,t,e,Ot(n))}catch(S){xl(n,t,{then:function(){},status:"rejected",reason:S},Ot())}finally{G.p=i,c!==null&&u.types!==null&&(c.types=u.types),D.T=c}}function Dm(){}function Fu(n,t,a,e){if(n.tag!==5)throw Error(g(476));var l=Df(n).queue;jf(n,l,t,la,a===null?Dm:function(){return Mf(n),a(e)})}function Df(n){var t=n.memoizedState;if(t!==null)return t;t={memoizedState:la,baseState:la,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:la},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:a},next:null},n.memoizedState=t,n=n.alternate,n!==null&&(n.memoizedState=t),t}function Mf(n){var t=Df(n);t.next===null&&(t=n.alternate.memoizedState),xl(n,t.next.queue,{},Ot())}function $u(){return Zn(cl)}function Cf(){return Cn().memoizedState}function wf(){return Cn().memoizedState}function Mm(n){for(var t=n.return;t!==null;){switch(t.tag){case 24:case 3:var a=Ot();n=Ca(a);var e=wa(t,n,a);e!==null&&(mt(e,t,a),Cl(e,t,a)),t={cache:zu()},n.payload=t;return}t=t.return}}function Cm(n,t,a){var e=Ot();a={lane:e,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Fi(n)?Uf(t,a):(a=gu(n,t,a,e),a!==null&&(mt(a,n,e),Hf(a,t,e)))}function Rf(n,t,a){var e=Ot();xl(n,t,a,e)}function xl(n,t,a,e){var l={lane:e,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fi(n))Uf(t,l);else{var i=n.alternate;if(n.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var c=t.lastRenderedState,u=i(c,a);if(l.hasEagerState=!0,l.eagerState=u,Tt(u,c))return Ni(n,t,l,0),bn===null&&Oi(),!1}catch{}finally{}if(a=gu(n,t,l,e),a!==null)return mt(a,n,e),Hf(a,t,e),!0}return!1}function Iu(n,t,a,e){if(e={lane:2,revertLane:Xs(),gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},Fi(n)){if(t)throw Error(g(479))}else t=gu(n,a,e,2),t!==null&&mt(t,n,2)}function Fi(n){var t=n.alternate;return n===Q||t!==null&&t===Q}function Uf(n,t){Be=Vi=!0;var a=n.pending;a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t}function Hf(n,t,a){if((a&4194048)!==0){var e=t.lanes;e&=n.pendingLanes,a|=e,t.lanes=a,Ho(n,a)}}var $i={readContext:Zn,use:Ki,useCallback:jn,useContext:jn,useEffect:jn,useImperativeHandle:jn,useLayoutEffect:jn,useInsertionEffect:jn,useMemo:jn,useReducer:jn,useRef:jn,useState:jn,useDebugValue:jn,useDeferredValue:jn,useTransition:jn,useSyncExternalStore:jn,useId:jn,useHostTransitionStatus:jn,useFormState:jn,useActionState:jn,useOptimistic:jn,useMemoCache:jn,useCacheRefresh:jn,useEffectEvent:jn},qf={readContext:Zn,use:Ki,useCallback:function(n,t){return lt().memoizedState=[n,t===void 0?null:t],n},useContext:Zn,useEffect:bf,useImperativeHandle:function(n,t,a){a=a!=null?a.concat([n]):null,ki(4194308,4,Af.bind(null,t,n),a)},useLayoutEffect:function(n,t){return ki(4194308,4,n,t)},useInsertionEffect:function(n,t){ki(4,2,n,t)},useMemo:function(n,t){var a=lt();t=t===void 0?null:t;var e=n();if(fe){Ea(!0);try{n()}finally{Ea(!1)}}return a.memoizedState=[e,t],e},useReducer:function(n,t,a){var e=lt();if(a!==void 0){var l=a(t);if(fe){Ea(!0);try{a(t)}finally{Ea(!1)}}}else l=t;return e.memoizedState=e.baseState=l,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:l},e.queue=n,n=n.dispatch=Cm.bind(null,Q,n),[e.memoizedState,n]},useRef:function(n){var t=lt();return n={current:n},t.memoizedState=n},useState:function(n){n=Zu(n);var t=n.queue,a=Rf.bind(null,Q,t);return t.dispatch=a,[n.memoizedState,a]},useDebugValue:ku,useDeferredValue:function(n,t){var a=lt();return Wu(a,n,t)},useTransition:function(){var n=Zu(!1);return n=jf.bind(null,Q,n.queue,!0,!1),lt().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,t,a){var e=Q,l=lt();if(k){if(a===void 0)throw Error(g(407));a=a()}else{if(a=t(),bn===null)throw Error(g(349));(I&127)!==0||af(e,t,a)}l.memoizedState=a;var i={value:a,getSnapshot:t};return l.queue=i,bf(lf.bind(null,e,i,n),[n]),e.flags|=2048,Le(9,{destroy:void 0},ef.bind(null,e,i,a,t),null),a},useId:function(){var n=lt(),t=bn.identifierPrefix;if(k){var a=Wt,e=kt;a=(e&~(1<<32-bt(e)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Qi++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=_m++,t="_"+t+"r_"+a.toString(32)+"_";return n.memoizedState=t},useHostTransitionStatus:$u,useFormState:vf,useActionState:vf,useOptimistic:function(n){var t=lt();t.memoizedState=t.baseState=n;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Iu.bind(null,Q,!0,a),a.dispatch=t,[n,t]},useMemoCache:Xu,useCacheRefresh:function(){return lt().memoizedState=Mm.bind(null,Q)},useEffectEvent:function(n){var t=lt(),a={impl:n};return t.memoizedState=a,function(){if((sn&2)!==0)throw Error(g(440));return a.impl.apply(void 0,arguments)}}},xf={readContext:Zn,use:Ki,useCallback:zf,useContext:Zn,useEffect:Ju,useImperativeHandle:_f,useInsertionEffect:Tf,useLayoutEffect:Ef,useMemo:Of,useReducer:Ji,useRef:yf,useState:function(){return Ji(ma)},useDebugValue:ku,useDeferredValue:function(n,t){var a=Cn();return Nf(a,yn.memoizedState,n,t)},useTransition:function(){var n=Ji(ma)[0],t=Cn().memoizedState;return[typeof n=="boolean"?n:ql(n),t]},useSyncExternalStore:tf,useId:Cf,useHostTransitionStatus:$u,useFormState:mf,useActionState:mf,useOptimistic:function(n,t){var a=Cn();return sf(a,yn,n,t)},useMemoCache:Xu,useCacheRefresh:wf,useEffectEvent:Sf},wm={readContext:Zn,use:Ki,useCallback:zf,useContext:Zn,useEffect:Ju,useImperativeHandle:_f,useInsertionEffect:Tf,useLayoutEffect:Ef,useMemo:Of,useReducer:Qu,useRef:yf,useState:function(){return Qu(ma)},useDebugValue:ku,useDeferredValue:function(n,t){var a=Cn();return yn===null?Wu(a,n,t):Nf(a,yn.memoizedState,n,t)},useTransition:function(){var n=Qu(ma)[0],t=Cn().memoizedState;return[typeof n=="boolean"?n:ql(n),t]},useSyncExternalStore:tf,useId:Cf,useHostTransitionStatus:$u,useFormState:pf,useActionState:pf,useOptimistic:function(n,t){var a=Cn();return yn!==null?sf(a,yn,n,t):(a.baseState=n,[n,a.queue.dispatch])},useMemoCache:Xu,useCacheRefresh:wf,useEffectEvent:Sf};function Pu(n,t,a,e){t=n.memoizedState,a=a(e,t),a=a==null?t:J({},t,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var ns={enqueueSetState:function(n,t,a){n=n._reactInternals;var e=Ot(),l=Ca(e);l.payload=t,a!=null&&(l.callback=a),t=wa(n,l,e),t!==null&&(mt(t,n,e),Cl(t,n,e))},enqueueReplaceState:function(n,t,a){n=n._reactInternals;var e=Ot(),l=Ca(e);l.tag=1,l.payload=t,a!=null&&(l.callback=a),t=wa(n,l,e),t!==null&&(mt(t,n,e),Cl(t,n,e))},enqueueForceUpdate:function(n,t){n=n._reactInternals;var a=Ot(),e=Ca(a);e.tag=2,t!=null&&(e.callback=t),t=wa(n,e,a),t!==null&&(mt(t,n,a),Cl(t,n,a))}};function Yf(n,t,a,e,l,i,c){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(e,i,c):t.prototype&&t.prototype.isPureReactComponent?!Al(a,e)||!Al(l,i):!0}function Bf(n,t,a,e){n=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,e),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,e),t.state!==n&&ns.enqueueReplaceState(t,t.state,null)}function de(n,t){var a=t;if("ref"in t){a={};for(var e in t)e!=="ref"&&(a[e]=t[e])}if(n=n.defaultProps){a===t&&(a=J({},a));for(var l in n)a[l]===void 0&&(a[l]=n[l])}return a}function Gf(n){zi(n)}function Lf(n){console.error(n)}function Xf(n){zi(n)}function Ii(n,t){try{var a=n.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Vf(n,t,a){try{var e=n.onCaughtError;e(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function ts(n,t,a){return a=Ca(a),a.tag=3,a.payload={element:null},a.callback=function(){Ii(n,t)},a}function Qf(n){return n=Ca(n),n.tag=3,n}function Zf(n,t,a,e){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var i=e.value;n.payload=function(){return l(i)},n.callback=function(){Vf(t,a,e)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(n.callback=function(){Vf(t,a,e),typeof l!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var u=e.stack;this.componentDidCatch(e.value,{componentStack:u!==null?u:""})})}function Rm(n,t,a,e,l){if(a.flags|=32768,e!==null&&typeof e=="object"&&typeof e.then=="function"){if(t=a.alternate,t!==null&&le(t,a,l,!0),a=Kn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return nt===null?bc():a.alternate===null&&Dn===0&&(Dn=3),a.flags&=-257,a.flags|=65536,a.lanes=l,e===Yi?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([e]):t.add(e),Bs(n,e,l)),!1;case 22:return a.flags|=65536,e===Yi?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([e])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([e]):a.add(e)),Bs(n,e,l)),!1}throw Error(g(435,a.tag))}return Bs(n,e,l),bc(),!1}if(k)return t=Kn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,e!==Tu&&(n=Error(g(422),{cause:e}),Ol(Mt(n,a)))):(e!==Tu&&(t=Error(g(423),{cause:e}),Ol(Mt(t,a))),n=n.current.alternate,n.flags|=65536,l&=-l,n.lanes|=l,e=Mt(e,a),l=ts(n.stateNode,e,l),Cu(n,l),Dn!==4&&(Dn=2)),!1;var i=Error(g(520),{cause:e});if(i=Mt(i,a),Zl===null?Zl=[i]:Zl.push(i),Dn!==4&&(Dn=2),t===null)return!0;e=Mt(e,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,n=l&-l,a.lanes|=n,n=ts(a.stateNode,e,n),Cu(a,n),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ga===null||!Ga.has(i))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Qf(l),Zf(l,n,a,e),Cu(a,l),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var as=Error(g(461)),Un=!1;function qn(n,t,a,e){t.child=n===null?kr(t,null,a,e):re(t,n.child,a,e)}function Kf(n,t,a,e,l){a=a.render;var i=t.ref;if("ref"in e){var c={};for(var u in e)u!=="ref"&&(c[u]=e[u])}else c=e;return ie(t),e=Yu(n,t,a,c,i,l),u=Bu(),n!==null&&!Un?(Gu(n,t,l),ga(n,t,l)):(k&&u&&Ci(t),t.flags|=1,qn(n,t,e,l),t.child)}function Jf(n,t,a,e,l){if(n===null){var i=a.type;return typeof i=="function"&&!pu(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,kf(n,t,i,e,l)):(n=Di(a.type,null,e,t,t.mode,l),n.ref=t.ref,n.return=t,t.child=n)}if(i=n.child,!rs(n,l)){var c=i.memoizedProps;if(a=a.compare,a=a!==null?a:Al,a(c,e)&&n.ref===t.ref)return ga(n,t,l)}return t.flags|=1,n=ra(i,e),n.ref=t.ref,n.return=t,t.child=n}function kf(n,t,a,e,l){if(n!==null){var i=n.memoizedProps;if(Al(i,e)&&n.ref===t.ref)if(Un=!1,t.pendingProps=e=i,rs(n,l))(n.flags&131072)!==0&&(Un=!0);else return t.lanes=n.lanes,ga(n,t,l)}return es(n,t,a,e,l)}function Wf(n,t,a,e){var l=e.children,i=n!==null?n.memoizedState:null;if(n===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|a:a,n!==null){for(e=t.child=n.child,l=0;e!==null;)l=l|e.lanes|e.childLanes,e=e.sibling;e=l&~i}else e=0,t.child=null;return Ff(n,t,i,a,e)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},n!==null&&qi(t,i!==null?i.cachePool:null),i!==null?$r(t,i):Ru(),Ir(t);else return e=t.lanes=536870912,Ff(n,t,i!==null?i.baseLanes|a:a,a,e)}else i!==null?(qi(t,i.cachePool),$r(t,i),Ha(),t.memoizedState=null):(n!==null&&qi(t,null),Ru(),Ha());return qn(n,t,l,a),t.child}function Yl(n,t){return n!==null&&n.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ff(n,t,a,e,l){var i=Nu();return i=i===null?null:{parent:wn._currentValue,pool:i},t.memoizedState={baseLanes:a,cachePool:i},n!==null&&qi(t,null),Ru(),Ir(t),n!==null&&le(n,t,e,!0),t.childLanes=l,null}function Pi(n,t){return t=nc({mode:t.mode,children:t.children},n.mode),t.ref=n.ref,n.child=t,t.return=n,t}function $f(n,t,a){return re(t,n.child,null,a),n=Pi(t,t.pendingProps),n.flags|=2,Et(t),t.memoizedState=null,n}function Um(n,t,a){var e=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,n===null){if(k){if(e.mode==="hidden")return n=Pi(t,e),t.lanes=536870912,n.memoizedState={baseLanes:0,cachePool:null},Yl(null,n);if(Hu(t),(n=En)?(n=Ah(n,Rt),n=n!==null&&n.data==="&"?n:null,n!==null&&(t.memoizedState={dehydrated:n,treeContext:za!==null?{id:kt,overflow:Wt}:null,retryLane:536870912,hydrationErrors:null},a=Rr(n),a.return=t,t.child=a,Gn=t,En=null)):n=null,n===null)throw Na(t);return t.lanes=536870912,null}return Pi(t,e)}var i=n.memoizedState;if(i!==null){var c=i.dehydrated;if(Hu(t),l)if(t.flags&256)t.flags&=-257,t=$f(n,t,a);else if(t.memoizedState!==null)t.child=n.child,t.flags|=128,t=null;else throw Error(g(558));else if(Un||le(n,t,a,!1),l=(a&n.childLanes)!==0,Un||l){if(Ra.current===null){if(e=bn,e!==null&&(c=qo(e,a),c!==0&&c!==i.retryLane))throw i.retryLane=c,ne(n,c),mt(e,n,c),as;bc()}t=$f(n,t,a)}else n=i.treeContext,En=Ht(c.nextSibling),Gn=t,k=!0,Oa=null,Rt=!1,n!==null&&qr(t,n),t=Pi(t,e),t.flags|=134221824;return t}return n=ra(n.child,{mode:e.mode,children:e.children}),n.ref=t.ref,t.child=n,n.return=t,n}function Xe(n,t){var a=t.ref;if(a===null)n!==null&&n.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(g(284));(n===null||n.ref!==a)&&(t.flags|=4194816)}}function es(n,t,a,e,l){return ie(t),a=Yu(n,t,a,e,void 0,l),e=Bu(),n!==null&&!Un?(Gu(n,t,l),ga(n,t,l)):(k&&e&&Ci(t),t.flags|=1,qn(n,t,a,l),t.child)}function If(n,t,a,e,l,i){return ie(t),t.updateQueue=null,a=nf(t,e,a,l),Pr(n),e=Bu(),n!==null&&!Un?(Gu(n,t,i),ga(n,t,i)):(k&&e&&Ci(t),t.flags|=1,qn(n,t,a,i),t.child)}function Pf(n,t,a,e,l){if(ie(t),t.stateNode===null){var i=we,c=a.contextType;typeof c=="object"&&c!==null&&(i=Zn(c)),i=new a(e,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ns,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=e,i.state=t.memoizedState,i.refs={},Du(t),c=a.contextType,i.context=typeof c=="object"&&c!==null?Zn(c):we,i.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(Pu(t,a,c,e),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&ns.enqueueReplaceState(i,i.state,null),Rl(t,e,i,l),wl(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),e=!0}else if(n===null){i=t.stateNode;var u=t.memoizedProps,s=de(a,u);i.props=s;var h=i.context,p=a.contextType;c=we,typeof p=="object"&&p!==null&&(c=Zn(p));var S=a.getDerivedStateFromProps;p=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,p||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u||h!==c)&&Bf(t,i,e,c),Ma=!1;var f=t.memoizedState;i.state=f,Rl(t,e,i,l),wl(),h=t.memoizedState,u||f!==h||Ma?(typeof S=="function"&&(Pu(t,a,S,e),h=t.memoizedState),(s=Ma||Yf(t,a,s,e,f,h,c))?(p||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=e,t.memoizedState=h),i.props=e,i.state=h,i.context=c,e=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),e=!1)}else{i=t.stateNode,Mu(n,t),c=t.memoizedProps,p=de(a,c),i.props=p,S=t.pendingProps,f=i.context,h=a.contextType,s=we,typeof h=="object"&&h!==null&&(s=Zn(h)),u=a.getDerivedStateFromProps,(h=typeof u=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==S||f!==s)&&Bf(t,i,e,s),Ma=!1,f=t.memoizedState,i.state=f,Rl(t,e,i,l),wl();var m=t.memoizedState;c!==S||f!==m||Ma||n!==null&&n.dependencies!==null&&Ui(n.dependencies)?(typeof u=="function"&&(Pu(t,a,u,e),m=t.memoizedState),(p=Ma||Yf(t,a,p,e,f,m,s)||n!==null&&n.dependencies!==null&&Ui(n.dependencies))?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(e,m,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(e,m,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===n.memoizedProps&&f===n.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===n.memoizedProps&&f===n.memoizedState||(t.flags|=1024),t.memoizedProps=e,t.memoizedState=m),i.props=e,i.state=m,i.context=s,e=p):(typeof i.componentDidUpdate!="function"||c===n.memoizedProps&&f===n.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===n.memoizedProps&&f===n.memoizedState||(t.flags|=1024),e=!1)}return i=e,Xe(n,t),e=(t.flags&128)!==0,i||e?(i=t.stateNode,a=e&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,n!==null&&e?(t.child=re(t,n.child,null,l),t.child=re(t,null,a,l)):qn(n,t,a,l),t.memoizedState=i.state,n=t.child):n=ga(n,t,l),n}function nd(n,t,a,e){return ae(),t.flags|=256,qn(n,t,a,e),t.child}var ls={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function is(n){return{baseLanes:n,cachePool:Xr()}}function cs(n,t,a){return n=n!==null?n.childLanes&~a:0,t&&(n|=zt),n}function td(n,t,a){var e=t.pendingProps,l=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=n!==null&&n.memoizedState===null?!1:(Jn.current&2)!==0),c&&(l=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,n===null){if(k){if(l?Ua(t):Ha(),(n=En)?(n=Ah(n,Rt),n=n!==null&&n.data!=="&"?n:null,n!==null&&(t.memoizedState={dehydrated:n,treeContext:za!==null?{id:kt,overflow:Wt}:null,retryLane:536870912,hydrationErrors:null},a=Rr(n),a.return=t,t.child=a,Gn=t,En=null)):n=null,n===null)throw Na(t);return io(n)?t.lanes=32:t.lanes=536870912,null}return i=e.children,e=e.fallback,l?(Ha(),l=t.mode,i=nc({mode:"hidden",children:i},l),e=te(e,l,a,null),i.return=t,e.return=t,i.sibling=e,t.child=i,e=t.child,e.memoizedState=is(a),e.childLanes=cs(n,c,a),t.memoizedState=ls,Yl(null,e)):(Ua(t),us(t,i))}var u=n.memoizedState;if(u!==null){var s=u.dehydrated;if(s!==null)return Hm(n,t,i,c,e,s,u,a)}return l?(Ha(),l=e.fallback,i=t.mode,u=n.child,s=u.sibling,e=ra(u,{mode:"hidden",children:e.children}),e.subtreeFlags=u.subtreeFlags&1206910976,s!==null?l=ra(s,l):(l=te(l,i,a,null),l.flags|=2),l.return=t,e.return=t,e.sibling=l,t.child=e,Yl(null,e),e=t.child,l=n.child.memoizedState,l===null?l=is(a):(i=l.cachePool,i!==null?(u=wn._currentValue,i=i.parent!==u?{parent:u,pool:u}:i):i=Xr(),l={baseLanes:l.baseLanes|a,cachePool:i}),e.memoizedState=l,e.childLanes=cs(n,c,a),t.memoizedState=ls,Yl(n.child,e)):(Ua(t),a=n.child,n=a.sibling,a=ra(a,{mode:"visible",children:e.children}),a.return=t,a.sibling=null,n!==null&&(c=t.deletions,c===null?(t.deletions=[n],t.flags|=16):c.push(n)),t.child=a,t.memoizedState=null,a)}function us(n,t){return t=nc({mode:"visible",children:t},n.mode),t.return=n,n.child=t}function nc(n,t){return n=ft(22,n,null,t),n.lanes=0,n}function tc(n,t,a){return re(t,n.child,null,a),n=us(t,t.pendingProps.children),n.flags|=2,t.memoizedState=null,n}function Hm(n,t,a,e,l,i,c,u){if(a)return t.flags&256?(Ua(t),t.flags&=-257,tc(n,t,u)):t.memoizedState!==null?(Ha(),t.child=n.child,t.flags|=128,null):(Ha(),i=l.fallback,c=t.mode,l=nc({mode:"visible",children:l.children},c),i=te(i,c,u,null),i.flags|=2,l.return=t,i.return=t,l.sibling=i,t.child=l,re(t,n.child,null,u),l=t.child,l.memoizedState=is(u),l.childLanes=cs(n,e,u),t.memoizedState=ls,Yl(null,l));if(Ua(t),io(i)){if(e=i.nextSibling&&i.nextSibling.dataset,e)var s=e.dgst;return e=s,e!==""&&(l=Error(g(419)),l.stack="",l.digest=e,Ol({value:l,source:null,stack:null})),tc(n,t,u)}if(Un||le(n,t,u,!1),e=(u&n.childLanes)!==0,Un||e){if(Ra.current!==null)return tc(n,t,u);if(e=bn,e!==null&&(l=qo(e,u),l!==0&&l!==c.retryLane))throw c.retryLane=l,ne(n,l),mt(e,n,l),as;return lo(i)||bc(),tc(n,t,u)}return lo(i)?(t.flags|=192,t.child=n.child,null):(n=c.treeContext,En=Ht(i.nextSibling),Gn=t,k=!0,Oa=null,Rt=!1,n!==null&&qr(t,n),t=us(t,l.children),t.flags|=134221824,t)}function ad(n,t,a){n.lanes|=t;var e=n.alternate;e!==null&&(e.lanes|=t),Ri(n.return,t,a)}function ed(n){for(var t=null;n!==null;){var a=n.alternate;a!==null&&Xi(a)===null&&(t=n),n=n.sibling}return t}function ac(n,t,a,e,l,i){var c=n.memoizedState;c===null?n.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:e,tail:a,tailMode:l,treeForkCount:i}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=e,c.tail=a,c.tailMode=l,c.treeForkCount=i)}function ss(n){var t=n.child;for(n.child=null;t!==null;){var a=t.sibling;t.sibling=n.child,n.child=t,t=a}}function os(n,t,a){var e=t.pendingProps,l=e.revealOrder,i=e.tail;e=e.children;var c=Jn.current;if(t.flags&128)return Ul(t,c),null;var u=(c&2)!==0;if(u?(c=c&1|2,t.flags|=128):c&=1,Ul(t,c),l==="backwards"&&n!==null?(ss(n),qn(n,t,e,a),ss(n)):qn(n,t,e,a),e=k?zl:0,!u&&n!==null&&(n.flags&128)!==0)n:for(n=t.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&ad(n,a,t);else if(n.tag===19)ad(n,a,t);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break n;for(;n.sibling===null;){if(n.return===null||n.return===t)break n;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(l){case"backwards":a=ed(t.child),a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null,ss(t)),ac(t,!0,l,null,i,e);break;case"unstable_legacy-backwards":for(a=null,l=t.child,t.child=null;l!==null;){if(n=l.alternate,n!==null&&Xi(n)===null){t.child=l;break}n=l.sibling,l.sibling=a,a=l,l=n}ac(t,!0,a,null,i,e);break;case"together":ac(t,!1,null,null,void 0,e);break;case"independent":t.memoizedState=null;break;default:a=ed(t.child),a===null?(l=t.child,t.child=null):(l=a.sibling,a.sibling=null),ac(t,!1,l,a,i,e)}return t.child}function ld(n,t,a){var e=t.pendingProps;return ja(t,t.type,e.value),qn(n,t,e.children,a),t.child}function ga(n,t,a){if(n!==null&&(t.dependencies=n.dependencies),Ba|=t.lanes,(a&t.childLanes)===0)if(n!==null){if(le(n,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(n!==null&&t.child!==n.child)throw Error(g(153));if(t.child!==null){for(n=t.child,a=ra(n,n.pendingProps),t.child=a,a.return=t;n.sibling!==null;)n=n.sibling,a=a.sibling=ra(n,n.pendingProps),a.return=t;a.sibling=null}return t.child}function rs(n,t){return(n.lanes&t)!==0?!0:(n=n.dependencies,!!(n!==null&&Ui(n)))}function qm(n,t,a){switch(t.tag){case 3:ui(t,t.stateNode.containerInfo),ja(t,wn,n.memoizedState.cache),ae();break;case 27:case 5:xc(t);break;case 4:ui(t,t.stateNode.containerInfo);break;case 10:ja(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Hu(t),null;break;case 13:var e=t.memoizedState;if(e!==null){if(e.dehydrated!==null)return Ua(t),t.flags|=128,null;e=le(n,t,a,!1);var l=t.child.childLanes;return e||(a&l)!==0?td(n,t,a):(Ua(t),n=ga(n,t,a),n!==null?n.sibling:null)}Ua(t);break;case 19:if(t.flags&128)return os(n,t,a);if(l=(n.flags&128)!==0,e=(a&t.childLanes)!==0,e||(le(n,t,a,!1),e=(a&t.childLanes)!==0),l){if(e)return os(n,t,a);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Ul(t,Jn.current),e)break;return null;case 22:return t.lanes=0,Wf(n,t,a,t.pendingProps);case 24:ja(t,wn,n.memoizedState.cache)}return ga(n,t,a)}function id(n,t,a){if(n!==null)if(n.memoizedProps!==t.pendingProps)Un=!0;else{if(!rs(n,a)&&(t.flags&128)===0)return Un=!1,qm(n,t,a);Un=(n.flags&131072)!==0}else Un=!1,k&&(t.flags&1048576)!==0&&Hr(t,zl,t.index);switch(t.lanes=0,t.tag){case 16:n:{var e=t.pendingProps;if(n=se(t.elementType),t.type=n,typeof n=="function")pu(n)?(e=de(n,e),t.tag=1,t=Pf(null,t,n,e,a)):(t.tag=0,t=es(null,t,n,e,a));else{if(n!=null){var l=n.$$typeof;if(l===O){t.tag=11,t=Kf(null,t,n,e,a);break n}else if(l===rn){t.tag=14,t=Jf(null,t,n,e,a);break n}else if(l===Mn){t.tag=10,t.type=n,t=ld(null,t,a);break n}}throw t=ln(n)||n,Error(g(306,t,""))}}return t;case 0:return es(n,t,t.type,t.pendingProps,a);case 1:return e=t.type,l=de(e,t.pendingProps),Pf(n,t,e,l,a);case 3:n:{if(ui(t,t.stateNode.containerInfo),n===null)throw Error(g(387));e=t.pendingProps;var i=t.memoizedState;l=i.element,Mu(n,t),Rl(t,e,null,a);var c=t.memoizedState;if(e=c.cache,ja(t,wn,e),e!==i.cache&&_u(t,[wn],a,!0),wl(),e=c.element,i.isDehydrated)if(i={element:e,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=nd(n,t,e,a);break n}else if(e!==l){l=Mt(Error(g(424)),t),Ol(l),t=nd(n,t,e,a);break n}else{switch(n=t.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(En=Ht(n.firstChild),Gn=t,k=!0,Oa=null,Rt=!0,a=kr(t,null,e,a),t.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(ae(),e===l){t=ga(n,t,a);break n}qn(n,t,e,a)}t=t.child}return t;case 26:return Xe(n,t),n===null?(a=Mh(t.type,null,t.pendingProps,null))?t.memoizedState=a:k||(t.stateNode=oh(t.type,t.pendingProps,Sa.current,t)):t.memoizedState=Mh(t.type,n.memoizedProps,t.pendingProps,n.memoizedState),null;case 27:return xc(t),n===null&&k&&(e=t.stateNode=Oh(t.type,t.pendingProps,Sa.current),Gn=t,Rt=!0,l=En,Va(t.type)?(co=l,En=Ht(e.firstChild)):En=l),qn(n,t,t.pendingProps.children,a),Xe(n,t),n===null&&(t.flags|=4194304),t.child;case 5:return n===null&&k&&((l=e=En)&&(e=Mg(e,t.type,t.pendingProps,Rt),e!==null?(t.stateNode=e,Gn=t,En=Ht(e.firstChild),Rt=!1,l=!0):l=!1),l||Na(t)),xc(t),l=t.type,i=t.pendingProps,c=n!==null?n.memoizedProps:null,e=i.children,$s(l,i)?e=null:c!==null&&$s(l,c)&&(t.flags|=32),t.memoizedState!==null&&(l=Yu(n,t,zm,null,null,a),cl._currentValue=l),Xe(n,t),qn(n,t,e,a),t.child;case 6:return n===null&&k&&((n=a=En)&&(a=Cg(a,t.pendingProps,Rt),a!==null?(t.stateNode=a,Gn=t,En=null,n=!0):n=!1),n||Na(t)),null;case 13:return td(n,t,a);case 4:return ui(t,t.stateNode.containerInfo),e=t.pendingProps,n===null?t.child=re(t,null,e,a):qn(n,t,e,a),t.child;case 11:return Kf(n,t,t.type,t.pendingProps,a);case 7:return e=t.pendingProps,Xe(n,t),qn(n,t,e,a),t.child;case 8:return qn(n,t,t.pendingProps.children,a),t.child;case 12:return qn(n,t,t.pendingProps.children,a),t.child;case 10:return ld(n,t,a);case 9:return l=t.type._context,e=t.pendingProps.children,ie(t),l=Zn(l),e=e(l),t.flags|=1,qn(n,t,e,a),t.child;case 14:return Jf(n,t,t.type,t.pendingProps,a);case 15:return kf(n,t,t.type,t.pendingProps,a);case 19:return os(n,t,a);case 31:return Um(n,t,a);case 22:return Wf(n,t,a,t.pendingProps);case 24:return ie(t),e=Zn(wn),n===null?(l=Nu(),l===null&&(l=bn,i=zu(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=a),l=i),t.memoizedState={parent:e,cache:l},Du(t),ja(t,wn,l)):((n.lanes&a)!==0&&(Mu(n,t),Rl(t,null,null,a),wl()),l=n.memoizedState,i=t.memoizedState,l.parent!==e?(l={parent:e,cache:e},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),ja(t,wn,e)):(e=i.cache,ja(t,wn,e),e!==l.cache&&_u(t,[wn],a,!0))),qn(n,t,t.pendingProps.children,a),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),e=t.pendingProps,e.name!=null&&e.name!=="auto"?t.flags|=n===null?18882560:18874368:k&&Ci(t),n!==null&&n.memoizedProps.name!==e.name?t.flags|=4194816:Xe(n,t),qn(n,t,e.children,a),t.child;case 29:throw t.pendingProps}throw Error(g(156,t.tag))}function pa(n){n.flags|=4}function fs(n,t,a,e,l){var i;if((i=(n.mode&32)!==0)&&(i=a===null?Uh(t,e):Uh(t,e)&&(e.src!==a.src||e.srcSet!==a.srcSet)),i){if(n.flags|=16777216,(l&335544128)===l)if(n.stateNode.complete)n.flags|=8192;else if(Gd())n.flags|=8192;else throw oe=Yi,ju}else n.flags&=-16777217}function cd(n,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!Hh(t))if(Gd())n.flags|=8192;else throw oe=Yi,ju}function ec(n,t){t!==null&&(n.flags|=4),n.flags&16384&&(t=n.tag!==22?Ro():536870912,n.lanes|=t,Je|=t)}function Bl(n,t){if(!k)switch(n.tailMode){case"visible":break;case"collapsed":for(var a=n.tail,e=null;a!==null;)a.alternate!==null&&(e=a),a=a.sibling;e===null?t||n.tail===null?n.tail=null:n.tail.sibling=null:e.sibling=null;break;default:for(t=n.tail,a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n.tail=null:a.sibling=null}}function An(n){var t=n.alternate!==null&&n.alternate.child===n.child,a=0,e=0;if(t)for(var l=n.child;l!==null;)a|=l.lanes|l.childLanes,e|=l.subtreeFlags&1206910976,e|=l.flags&1206910976,l.return=n,l=l.sibling;else for(l=n.child;l!==null;)a|=l.lanes|l.childLanes,e|=l.subtreeFlags,e|=l.flags,l.return=n,l=l.sibling;return n.subtreeFlags|=e,n.childLanes=a,t}function xm(n,t,a){var e=t.pendingProps;switch(Su(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return An(t),null;case 1:return An(t),null;case 3:return a=t.stateNode,e=null,n!==null&&(e=n.memoizedState.cache),t.memoizedState.cache!==e&&(t.flags|=2048),ha(wn),be(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(n===null||n.child===null)&&(He(t)?pa(t):n===null||n.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Eu())),An(t),null;case 26:var l=t.type,i=t.memoizedState;return n===null?(pa(t),i!==null?(An(t),cd(t,i)):(An(t),fs(t,l,null,e,a))):i?i!==n.memoizedState?(pa(t),An(t),cd(t,i)):(An(t),t.flags&=-16777217):(n=n.memoizedProps,n!==e&&pa(t),An(t),fs(t,l,n,e,a)),null;case 27:if(si(t),a=Sa.current,l=t.type,n!==null&&t.stateNode!=null)n.memoizedProps!==e&&pa(t);else{if(!e){if(t.stateNode===null)throw Error(g(166));return An(t),t.subtreeFlags&=-33554433,null}n=Kt.current,He(t)?xr(t):(n=Oh(l,e,a),t.stateNode=n,pa(t))}return An(t),t.subtreeFlags&=-33554433,null;case 5:if(si(t),l=t.type,n!==null&&t.stateNode!=null)n.memoizedProps!==e&&pa(t);else{if(!e){if(t.stateNode===null)throw Error(g(166));return An(t),t.subtreeFlags&=-33554433,null}if(i=Kt.current,He(t))xr(t);else{var c=Fl(Sa.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof e.is=="string"?c.createElement("select",{is:e.is}):c.createElement("select"),e.multiple?i.multiple=!0:e.size&&(i.size=e.size);break;default:i=typeof e.is=="string"?c.createElement(l,{is:e.is}):c.createElement(l)}}i[Qn]=t,i[rt]=e;n:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break n;for(;c.sibling===null;){if(c.return===null||c.return===t)break n;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=i;n:switch(Wn(i,l,e),l){case"button":case"input":case"select":case"textarea":e=!!e.autoFocus;break n;case"img":e=!0;break n;default:e=!1}e&&pa(t)}}return An(t),t.subtreeFlags&=-33554433,fs(t,t.type,n===null?null:n.memoizedProps,t.pendingProps,a),null;case 6:if(n&&t.stateNode!=null)n.memoizedProps!==e&&pa(t);else{if(typeof e!="string"&&t.stateNode===null)throw Error(g(166));if(n=Sa.current,He(t)){if(n=t.stateNode,a=t.memoizedProps,e=null,l=Gn,l!==null)switch(l.tag){case 27:case 5:e=l.memoizedProps}n[Qn]=t,n=!!(n.nodeValue===a||e!==null&&e.suppressHydrationWarning===!0||ih(n.nodeValue,a)),n||Na(t,!0)}else n=Fl(n).createTextNode(e),n[Qn]=t,t.stateNode=n}return An(t),null;case 31:if(a=t.memoizedState,n===null||n.memoizedState!==null){if(e=He(t),a!==null){if(n===null){if(!e)throw Error(g(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(g(557));n[Qn]=t}else ae(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;An(t),n=!1}else a=Eu(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=a),n=!0;if(!n)return t.flags&256?(Et(t),t):(Et(t),null);if((t.flags&128)!==0)throw Error(g(558))}return An(t),null;case 13:if(e=t.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(l=He(t),e!==null&&e.dehydrated!==null){if(n===null){if(!l)throw Error(g(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(g(317));l[Qn]=t}else ae(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;An(t),l=!1}else l=Eu(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Et(t),t):(Et(t),null)}return Et(t),(t.flags&128)!==0?(t.lanes=a,t):(a=e!==null,n=n!==null&&n.memoizedState!==null,a&&(e=t.child,l=null,e.alternate!==null&&e.alternate.memoizedState!==null&&e.alternate.memoizedState.cachePool!==null&&(l=e.alternate.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==l&&(e.flags|=2048)),a!==n&&a&&(t.child.flags|=8192),ec(t,t.updateQueue),An(t),null);case 4:return be(),n===null&&Ks(t.stateNode.containerInfo),t.flags|=67108864,An(t),null;case 10:return ha(t.type),An(t),null;case 19:if(qu(t),e=t.memoizedState,e===null)return An(t),null;if(l=(t.flags&128)!==0,i=e.rendering,i===null)if(l)Bl(e,!1);else{if(Dn!==0||n!==null&&(n.flags&128)!==0)for(n=t.child;n!==null;){if(i=Xi(n),i!==null){for(t.flags|=128,Bl(e,!1),n=i.updateQueue,t.updateQueue=n,ec(t,n),t.subtreeFlags=0,n=a,a=t.child;a!==null;)wr(a,n),a=a.sibling;return Ul(t,Jn.current&1|2),k&&fa(t,e.treeForkCount),t.child}n=n.sibling}e.tail!==null&&pt()>mc&&(t.flags|=128,l=!0,Bl(e,!1),t.lanes=4194304)}else{if(!l)if(n=Xi(i),n!==null){if(t.flags|=128,l=!0,n=n.updateQueue,t.updateQueue=n,ec(t,n),Bl(e,!0),e.tail===null&&e.tailMode!=="collapsed"&&e.tailMode!=="visible"&&!i.alternate&&!k)return An(t),null}else 2*pt()-e.renderingStartTime>mc&&a!==536870912&&(t.flags|=128,l=!0,Bl(e,!1),t.lanes=4194304);e.isBackwards?(i.sibling=t.child,t.child=i):(n=e.last,n!==null?n.sibling=i:t.child=i,e.last=i)}if(e.tail!==null){n=e.tail;n:{for(a=n;a!==null;){if(a.alternate!==null){a=!1;break n}a=a.sibling}a=!0}return e.rendering=n,e.tail=n.sibling,e.renderingStartTime=pt(),n.sibling=null,i=Jn.current,i=l?i&1|2:i&1,e.tailMode==="visible"||e.tailMode==="collapsed"||!a||k?Ul(t,i):(a=i,Tn(Kn,t),Tn(Jn,a),nt===null&&(nt=t)),k&&fa(t,e.treeForkCount),n}return An(t),null;case 22:case 23:return Et(t),Uu(),e=t.memoizedState!==null,n!==null?n.memoizedState!==null!==e&&(t.flags|=8192):e&&(t.flags|=8192),e?(a&536870912)!==0&&(t.flags&128)===0&&(An(t),t.subtreeFlags&6&&(t.flags|=8192)):An(t),a=t.updateQueue,a!==null&&ec(t,a.retryQueue),a=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(t.flags|=2048),n!==null&&Vn(ue),null;case 24:return a=null,n!==null&&(a=n.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),ha(wn),An(t),null;case 25:return null;case 30:return t.flags|=33554432,An(t),null}throw Error(g(156,t.tag))}function Ym(n,t){switch(Su(t),t.tag){case 1:return n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 3:return ha(wn),be(),n=t.flags,(n&65536)!==0&&(n&128)===0?(t.flags=n&-65537|128,t):null;case 26:case 27:case 5:return si(t),null;case 31:if(t.memoizedState!==null){if(Et(t),t.alternate===null)throw Error(g(340));ae()}return n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 13:if(Et(t),n=t.memoizedState,n!==null&&n.dehydrated!==null){if(t.alternate===null)throw Error(g(340));ae()}return n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 19:return qu(t),n=t.flags,n&65536?(t.flags=n&-65537|128,n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null),t.flags|=4,t):null;case 4:return be(),null;case 10:return ha(t.type),null;case 22:case 23:return Et(t),Uu(),n!==null&&Vn(ue),n=t.flags,n&65536?(t.flags=n&-65537|128,t):null;case 24:return ha(wn),null;case 25:return null;default:return null}}function ud(n,t){switch(Su(t),t.tag){case 3:ha(wn),be();break;case 26:case 27:case 5:si(t);break;case 4:be();break;case 31:t.memoizedState!==null&&Et(t);break;case 13:Et(t);break;case 19:qu(t);break;case 10:ha(t.type);break;case 22:case 23:Et(t),Uu(),n!==null&&Vn(ue);break;case 24:ha(wn)}}function Gl(n,t){try{var a=t.updateQueue,e=a!==null?a.lastEffect:null;if(e!==null){var l=e.next;a=l;do{if((a.tag&n)===n){e=void 0;var i=a.create,c=a.inst;e=i(),c.destroy=e}a=a.next}while(a!==l)}}catch(u){vn(t,t.return,u)}}function qa(n,t,a){try{var e=t.updateQueue,l=e!==null?e.lastEffect:null;if(l!==null){var i=l.next;e=i;do{if((e.tag&n)===n){var c=e.inst,u=c.destroy;if(u!==void 0){c.destroy=void 0,l=t;var s=a,h=u;try{h()}catch(p){vn(l,s,p)}}}e=e.next}while(e!==i)}}catch(p){vn(t,t.return,p)}}function sd(n){var t=n.updateQueue;if(t!==null){var a=n.stateNode;try{Fr(t,a)}catch(e){vn(n,n.return,e)}}}function od(n,t,a){a.props=de(n.type,n.memoizedProps),a.state=n.memoizedState;try{a.componentWillUnmount()}catch(e){vn(n,t,e)}}function Ft(n,t){try{var a=n.ref;if(a!==null){switch(n.tag){case 26:case 27:case 5:var e=n.stateNode;break;case 30:var l=n.stateNode,i=sa(n.memoizedProps,l);(l.ref===null||l.ref.name!==i)&&(l.ref=gh(i)),e=l.ref;break;case 7:if(n.stateNode===null){var c=new Nt(n);y(n.child,!1,jg,c,void 0,void 0),n.stateNode=c}e=n.stateNode;break;default:e=n.stateNode}typeof a=="function"?n.refCleanup=a(e):a.current=e}}catch(u){vn(n,t,u)}}function kn(n,t){var a=n.ref,e=n.refCleanup;if(a!==null)if(typeof e=="function")try{e()}catch(l){vn(n,t,l)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){vn(n,t,l)}else a.current=null}function lc(n,t){if((n.tag===5||n.tag===27||n.tag===6)&&n.alternate===null&&t!==null)for(var a=0;a<t.length;a++)Eh(n.stateNode,t[a])}function rd(n){for(var t=n.return;t!==null&&(hs(t)&&Eh(n.stateNode,t.stateNode),!ds(t));)t=t.return}function Ll(n){for(var t=n.return;t!==null&&(hs(t)&&Dg(n.stateNode,t.stateNode),!ds(t));)t=t.return}function ds(n){return n.tag===5||n.tag===3||n.tag===27}function hs(n){return n&&n.tag===7&&n.stateNode!==null}function vs(n){var t=n.type,a=n.memoizedProps,e=n.stateNode;try{n:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&e.focus();break n;case"img":a.src?e.src=a.src:a.srcSet&&(e.srcset=a.srcSet)}}catch(l){vn(n,n.return,l)}}function ms(n,t,a){try{var e=n.stateNode;rg(e,n.type,a,t),e[rt]=t}catch(l){vn(n,n.return,l)}}function fd(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Va(n.type)||n.tag===4}function gs(n){n:for(;;){for(;n.sibling===null;){if(n.return===null||fd(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Va(n.type)||n.flags&2||n.child===null||n.tag===4)continue n;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ps(n,t,a,e){var l=n.tag;if(l===5||l===6)l=n.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(l),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Jt)),lc(n,e),cn=!0;else if(l!==4&&(l===27&&(lc(n,e),e=null,Va(n.type)&&(a=n.stateNode,t=null)),n=n.child,n!==null))for(ps(n,t,a,e),n=n.sibling;n!==null;)ps(n,t,a,e),n=n.sibling}function ic(n,t,a,e){var l=n.tag;if(l===5||l===6)l=n.stateNode,t?a.insertBefore(l,t):a.appendChild(l),lc(n,e),cn=!0;else if(l!==4&&(l===27&&(lc(n,e),e=null,Va(n.type)&&(a=n.stateNode)),n=n.child,n!==null))for(ic(n,t,a,e),n=n.sibling;n!==null;)ic(n,t,a,e),n=n.sibling}function dd(n){var t=n.stateNode,a=n.memoizedProps;try{for(var e=n.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Wn(t,e,a),t[Qn]=n,t[rt]=a}catch(i){vn(n,n.return,i)}}var cc=!1,At=null;function hd(n){(n.tag===30||(n.subtreeFlags&33554432)!==0)&&(cc=!0)}var $t=null;function vd(){var n=$t;return $t=null,n}var dt=0;function Ve(n,t,a,e,l){return dt=0,md(n.child,t,a,e,l)}function md(n,t,a,e,l){for(var i=!1;n!==null;){if(n.tag===5){var c=n.stateNode;if(e!==null){var u=no(c);e.push(u),u.view&&(i=!0)}else i||no(c).view&&(i=!0);cc=!0,vh(c,dt===0?t:t+"_"+dt,a),dt++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&l||md(n.child,t,a,e,l)&&(i=!0));n=n.sibling}return i}function It(n,t){for(;n!==null;)n.tag===5?mh(n.stateNode,n.memoizedProps):(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&t||It(n.child,t)),n=n.sibling}function uc(n){if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if((n.tag!==22||n.memoizedState===null)&&(uc(n),n.tag===30&&(n.flags&18874368)!==0&&n.stateNode.paired)){var t=n.memoizedProps;if(t.name==null||t.name==="auto")throw Error(g(544));var a=t.name;t=oa(t.default,t.share),t!=="none"&&(Ve(n,a,t,null,!1)||It(n.child,!1))}n=n.sibling}}function ys(n,t){if(n.tag===30){var a=n.stateNode,e=n.memoizedProps,l=sa(e,a),i=oa(e.default,a.paired?e.share:e.enter);i!=="none"?Ve(n,l,i,null,!1)?(uc(n),a.paired||t||$e(n,e.onEnter)):It(n.child,!1):uc(n)}else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)ys(n,t),n=n.sibling;else uc(n)}function bs(n){if(At!==null&&At.size!==0){var t=At;if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if(n.tag!==22||n.memoizedState===null){if(n.tag===30&&(n.flags&18874368)!==0){var a=n.memoizedProps,e=a.name;if(e!=null&&e!=="auto"){var l=t.get(e);if(l!==void 0){var i=oa(a.default,a.share);if(i!=="none"&&(Ve(n,e,i,null,!1)?(i=n.stateNode,l.paired=i,i.paired=l,$e(n,a.onShare)):It(n.child,!1)),t.delete(e),t.size===0)break}}}bs(n)}n=n.sibling}}}function Ss(n){if(n.tag===30){var t=n.memoizedProps,a=sa(t,n.stateNode),e=At!==null?At.get(a):void 0,l=oa(t.default,e!==void 0?t.share:t.exit);l!=="none"&&(Ve(n,a,l,null,!1)?e!==void 0?(l=n.stateNode,e.paired=l,l.paired=e,At.delete(a),$e(n,t.onShare)):$e(n,t.onExit):It(n.child,!1)),At!==null&&bs(n)}else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)Ss(n),n=n.sibling;else At!==null&&bs(n)}function gd(n){for(n=n.child;n!==null;){if(n.tag===30){var t=n.memoizedProps,a=sa(t,n.stateNode);t=oa(t.default,t.update),n.flags&=-5,t!=="none"&&Ve(n,a,t,n.memoizedState=[],!1)}else(n.subtreeFlags&33554432)!==0&&gd(n);n=n.sibling}}function Ts(n){if((n.subtreeFlags&18874368)!==0)for(n=n.child;n!==null;){if(n.tag!==22||n.memoizedState===null){if(n.tag===30&&(n.flags&18874368)!==0){var t=n.stateNode;t.paired!==null&&(t.paired=null,It(n.child,!1))}Ts(n)}n=n.sibling}}function sc(n){if(n.tag===30)n.stateNode.paired=null,It(n.child,!1),Ts(n);else if((n.subtreeFlags&33554432)!==0)for(n=n.child;n!==null;)sc(n),n=n.sibling;else Ts(n)}function pd(n){for(n=n.child;n!==null;)n.tag===30?It(n.child,!1):(n.subtreeFlags&33554432)!==0&&pd(n),n=n.sibling}function Es(n,t,a,e,l,i,c){for(var u=!1;t!==null;){if(t.tag===5){var s=t.stateNode;if(i!==null&&dt<i.length){var h=i[dt],p=no(s);(h.view||p.view)&&(u=!0);var S;if(S=(n.flags&4)===0)if(p.clip)S=!0;else{S=h.rect;var f=p.rect;S=S.y!==f.y||S.x!==f.x||S.height!==f.height||S.width!==f.width}S&&(n.flags|=4),p.abs?p=!h.abs:(h=h.rect,p=p.rect,p=h.height!==p.height||h.width!==p.width),p&&(n.flags|=32)}else n.flags|=32;(n.flags&4)!==0&&vh(s,dt===0?a:a+"_"+dt,l),u&&(n.flags&4)!==0||($t===null&&($t=[]),$t.push(s,dt===0?e:e+"_"+dt,t.memoizedProps)),dt++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&c?n.flags|=t.flags&32:Es(n,t.child,a,e,l,i,c)&&(u=!0));t=t.sibling}return u}function yd(n,t){for(n=n.child;n!==null;){if(n.tag===30){var a=n.memoizedProps,e=n.stateNode,l=sa(a,e),i=oa(a.default,a.update),c;c=n.memoizedState,n.memoizedState=null,e=n;var u=n.child;dt=0,l=Es(e,u,l,l,i,c,!1),(n.flags&4)!==0&&l&&$e(n,a.onUpdate)}else(n.subtreeFlags&33554432)!==0&&yd(n);n=n.sibling}}var Ln=!1,fn=!1,Pt=!1,As=!1,bd=typeof WeakSet=="function"?WeakSet:Set,Xn=null,na=!1,Xl=!1,oc=!1,_s=!1;function Bm(n,t,a){if(n=n.containerInfo,Ws=ul,n=Er(n),ru(n)){if("selectionStart"in n)var e={start:n.selectionStart,end:n.selectionEnd};else n:{e=(e=n.ownerDocument)&&e.defaultView||window;var l=e.getSelection&&e.getSelection();if(l&&l.rangeCount!==0){e=l.anchorNode;var i=l.anchorOffset,c=l.focusNode;l=l.focusOffset;try{e.nodeType,c.nodeType}catch{e=null;break n}var u=0,s=-1,h=-1,p=0,S=0,f=n,m=null;t:for(;;){for(var _;f!==e||i!==0&&f.nodeType!==3||(s=u+i),f!==c||l!==0&&f.nodeType!==3||(h=u+l),f.nodeType===3&&(u+=f.nodeValue.length),(_=f.firstChild)!==null;)m=f,f=_;for(;;){if(f===n)break t;if(m===e&&++p===i&&(s=u),m===c&&++S===l&&(h=u),(_=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=_}e=s===-1||h===-1?null:{start:s,end:h}}else e=null}e=e||{start:0,end:0}}else e=null;for(Fs={focusedElem:n,selectionRange:e},ul=!1,a=(a&335544064)===a,Xn=t,t=a?9270:1024;Xn!==null;){if(n=Xn,a&&(e=n.deletions,e!==null))for(i=0;i<e.length;i++)a&&Ss(e[i]);if(n.alternate===null&&(n.flags&2)!==0)a&&hd(n),rc(a);else{if(n.tag===22){if(e=n.alternate,n.memoizedState!==null){e!==null&&e.memoizedState===null&&a&&Ss(e),rc(a);continue}else if(e!==null&&e.memoizedState!==null){a&&hd(n),rc(a);continue}}e=n.child,(n.subtreeFlags&t)!==0&&e!==null?(e.return=n,Xn=e):(a&&gd(n),rc(a))}}At=null}function rc(n){for(;Xn!==null;){var t=Xn,a=n,e=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&e!==null){a=void 0,l=e.memoizedProps,e=e.memoizedState;var i=t.stateNode;try{var c=de(t.type,l);a=i.getSnapshotBeforeUpdate(c,e),i.__reactInternalSnapshotBeforeUpdate=a}catch(u){vn(t,t.return,u)}}break;case 3:if((l&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)eo(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":eo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&e!==null&&(a=sa(e.memoizedProps,e.stateNode),l=t.memoizedProps,l=oa(l.default,l.update),l!=="none"&&Ve(e,a,l,e.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(g(163))}if(e=t.sibling,e!==null){e.return=t.return,Xn=e;break}Xn=t.return}}function Sd(n,t,a){var e=a.flags;switch(a.tag){case 0:case 11:case 15:ta(n,a),e&4&&Gl(5,a);break;case 1:if(ta(n,a),e&4)if(n=a.stateNode,t===null)try{n.componentDidMount()}catch(c){vn(a,a.return,c)}else{var l=de(a.type,t.memoizedProps);t=t.memoizedState;try{n.componentDidUpdate(l,t,n.__reactInternalSnapshotBeforeUpdate)}catch(c){vn(a,a.return,c)}}e&64&&sd(a),e&512&&Ft(a,a.return);break;case 3:if(ta(n,a),e&64&&(n=a.updateQueue,n!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Fr(n,t)}catch(c){vn(a,a.return,c)}}break;case 27:t===null&&e&4&&dd(a);case 26:case 5:ta(n,a),t===null&&e&4&&vs(a),e&512&&Ft(a,a.return);break;case 12:ta(n,a);break;case 31:ta(n,a),e&4&&_d(n,a);break;case 13:ta(n,a),e&4&&zd(n,a),e&64&&(n=a.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(a=$m.bind(null,a),wg(n,a))));break;case 22:if(e=a.memoizedState!==null||Ln,!e){var i=t!==null&&t.memoizedState!==null||fn;t=Ln,l=fn,Ln=e,(fn=i)&&!l?(e=2,(a.subtreeFlags&8772)!==0&&(e|=1),Lt(n,a,e)):ta(n,a),Ln=t,fn=l}break;case 30:ta(n,a),e&512&&Ft(a,a.return);break;case 7:e&512&&Ft(a,a.return);default:ta(n,a)}}function zs(n,t){for(n=n.child;n!==null;)Td(n,t),n=n.sibling}function Td(n,t){switch(n.tag){case 5:case 26:try{var a=n.stateNode;if(t){var e=a.style;typeof e.setProperty=="function"?e.setProperty("display","none","important"):e.display="none"}else{var l=n.stateNode,i=n.memoizedProps.style,c=i!=null&&i.hasOwnProperty("display")?i.display:null;l.style.display=c==null||typeof c=="boolean"?"":(""+c).trim()}}catch(s){vn(n,n.return,s)}Os(n,t);break;case 6:try{n.stateNode.nodeValue=t?"":n.memoizedProps,cn=!0}catch(s){vn(n,n.return,s)}break;case 18:try{var u=n.stateNode;t?hh(u,!0):hh(n.stateNode,!1)}catch(s){vn(n,n.return,s)}break;case 22:case 23:n.memoizedState===null&&zs(n,t);break;default:zs(n,t)}}function Os(n,t){if(n.subtreeFlags&67108864)for(n=n.child;n!==null;){n:{var a=n,e=t;switch(a.tag){case 4:Td(a,e);break n;case 22:a.memoizedState===null&&Os(a,e);break n;default:Os(a,e)}}n=n.sibling}}function Ed(n){var t=n.alternate;t!==null&&(n.alternate=null,Ed(t)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(t=n.stateNode,t!==null&&mi(t)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var zn=null,ht=!1;function Bt(n,t,a){for(a=a.child;a!==null;)Ad(n,t,a),a=a.sibling}function Ad(n,t,a){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(fl,a)}catch{}switch(a.tag){case 26:fn||kn(a,t),Bt(n,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!fn&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||kn(a,t),Ll(a);var e=zn,l=ht;Va(a.type)&&(zn=a.stateNode,ht=!1),Bt(n,t,a),Nh(a.stateNode,a.type,a.memoizedProps),zn=e,ht=l;break;case 5:fn||kn(a,t),Ll(a);case 6:if(a.tag===6&&Ll(a),e=zn,l=ht,zn=null,Bt(n,t,a),zn=e,ht=l,zn!==null)if(ht)try{(zn.nodeType===9?zn.body:zn.nodeName==="HTML"?zn.ownerDocument.body:zn).removeChild(a.stateNode),cn=!0}catch(i){vn(a,t,i)}else try{zn.removeChild(a.stateNode),cn=!0}catch(i){vn(a,t,i)}break;case 18:zn!==null&&(ht?(n=zn,dh(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.stateNode),sl(n)):dh(zn,a.stateNode));break;case 4:e=zn,l=ht,zn=a.stateNode.containerInfo,ht=!0,Bt(n,t,a),zn=e,ht=l;break;case 0:case 11:case 14:case 15:qa(2,a,t),fn||qa(4,a,t),Bt(n,t,a);break;case 1:fn||(kn(a,t),e=a.stateNode,typeof e.componentWillUnmount=="function"&&od(a,t,e)),Bt(n,t,a);break;case 21:Bt(n,t,a);break;case 22:fn=(e=fn)||a.memoizedState!==null,Bt(n,t,a),fn=e;break;case 30:kn(a,t),Bt(n,t,a);break;case 7:fn||kn(a,t),Bt(n,t,a);break;default:Bt(n,t,a)}}function _d(n,t){if(t.memoizedState===null&&(n=t.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{sl(n)}catch(a){vn(t,t.return,a)}}}function zd(n,t){if(t.memoizedState===null&&(n=t.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{sl(n)}catch(a){vn(t,t.return,a)}}function Gm(n){switch(n.tag){case 31:case 13:case 19:var t=n.stateNode;return t===null&&(t=n.stateNode=new bd),t;case 22:return n=n.stateNode,t=n._retryCache,t===null&&(t=n._retryCache=new bd),t;default:throw Error(g(435,n.tag))}}function fc(n,t){var a=Gm(n);t.forEach(function(e){if(!a.has(e)){a.add(e);var l=Im.bind(null,n,e);e.then(l,l)}})}function it(n,t,a){var e=t.deletions;if(e!==null)for(var l=0;l<e.length;l++){var i=e[l],c=n,u=t,s=u;n:for(;s!==null;){switch(s.tag){case 27:if(Va(s.type)){zn=s.stateNode,ht=!1;break n}break;case 5:zn=s.stateNode,ht=!1;break n;case 3:case 4:zn=s.stateNode.containerInfo,ht=!0;break n}s=s.return}if(zn===null)throw Error(g(160));Ad(c,u,i),zn=null,ht=!1,c=i.alternate,c!==null&&(c.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Od(t,n,a),t=t.sibling}var Gt=null;function Od(n,t,a){var e=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(l&4&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(var i=0;i<e.length;i++){var c=e[i];c.ref.impl=c.nextImpl}it(t,n,a),ct(n),l&4&&(qa(3,n,n.return),Gl(3,n),qa(5,n,n.return));break;case 1:it(t,n,a),ct(n),l&512&&(fn||e===null||kn(e,e.return)),l&64&&Ln&&(n=n.updateQueue,n!==null&&(t=n.callbacks,t!==null&&(a=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=a===null?t:a.concat(t))));break;case 26:if(i=Gt,it(t,n,a),ct(n),l&512&&(fn||e===null||kn(e,e.return)),l&4)if(l=e!==null?e.memoizedState:null,a=n.memoizedState,e===null)if(a===null)if(n.stateNode===null)if(Ln)n.stateNode=oh(n.type,n.memoizedProps,t.containerInfo,n);else{n:{t=n.type,a=n.memoizedProps,l=i.ownerDocument||i;t:switch(t){case"title":e=l.getElementsByTagName("title")[0],(!e||e[vl]||e[Qn]||e.namespaceURI==="http://www.w3.org/2000/svg"||e.hasAttribute("itemprop"))&&(e=l.createElement(t),l.head.insertBefore(e,l.querySelector("head > title"))),Wn(e,t,a),e[Qn]=n,Bn(e),t=e;break n;case"link":if(i=Rh("link","href",l).get(t+(a.href||""))){for(c=0;c<i.length;c++)if(e=i[c],e.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&e.getAttribute("rel")===(a.rel==null?null:a.rel)&&e.getAttribute("title")===(a.title==null?null:a.title)&&e.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){i.splice(c,1);break t}}e=l.createElement(t),Wn(e,t,a),l.head.appendChild(e);break;case"meta":if(i=Rh("meta","content",l).get(t+(a.content||""))){for(c=0;c<i.length;c++)if(e=i[c],e.getAttribute("content")===(a.content==null?null:""+a.content)&&e.getAttribute("name")===(a.name==null?null:a.name)&&e.getAttribute("property")===(a.property==null?null:a.property)&&e.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&e.getAttribute("charset")===(a.charSet==null?null:a.charSet)){i.splice(c,1);break t}}e=l.createElement(t),Wn(e,t,a),l.head.appendChild(e);break;default:throw Error(g(468,t))}e[Qn]=n,Bn(e),t=e}n.stateNode=t}else Ln||ro(i,n.type,n.stateNode);else n.stateNode=wh(i,a,n.memoizedProps);else l!==a?(l===null?(t=e.stateNode,t===null||fn||t.parentNode.removeChild(t)):l.count--,a===null?Ln||ro(i,n.type,n.stateNode):wh(i,a,n.memoizedProps)):a===null&&n.stateNode!==null&&ms(n,n.memoizedProps,e.memoizedProps);break;case 27:it(t,n,a),ct(n),l&512&&(fn||e===null||kn(e,e.return)),e!==null&&l&4&&ms(n,n.memoizedProps,e.memoizedProps);break;case 5:if(i=Pt,Pt=!1,it(t,n,a),Pt=i,ct(n),l&512&&(fn||e===null||kn(e,e.return)),n.flags&32){t=n.stateNode;try{ze(t,""),cn=!0}catch(p){vn(n,n.return,p)}}l&4&&n.stateNode!=null&&(t=n.memoizedProps,ms(n,t,e!==null?e.memoizedProps:t)),l&1024&&(As=!0);break;case 6:if(it(t,n,a),ct(n),l&4){if(n.stateNode===null)throw Error(g(162));t=n.memoizedProps,a=n.stateNode;try{a.nodeValue=t,cn=!0}catch(p){vn(n,n.return,p)}}break;case 3:if(cn=!1,Oc=null,i=Gt,Gt=$l(t.containerInfo),it(t,n,a),Gt=i,ct(n),l&4&&e!==null&&e.memoizedState.isDehydrated)try{sl(t.containerInfo)}catch(p){vn(n,n.return,p)}As&&(As=!1,Nd(n)),cn=!1;break;case 4:l=Pt,Pt=Ln,e=Ko(),i=Gt,Gt=$l(n.stateNode.containerInfo),it(t,n,a),ct(n),Gt=i,cn&&Xl&&(oc=!0),cn=e,Pt=l;break;case 12:it(t,n,a),ct(n);break;case 31:it(t,n,a),ct(n),l&4&&(t=n.updateQueue,t!==null&&(n.updateQueue=null,fc(n,t)));break;case 13:it(t,n,a),ct(n),n.child.flags&8192&&n.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(vc=pt()),l&4&&(t=n.updateQueue,t!==null&&(n.updateQueue=null,fc(n,t)));break;case 22:i=n.memoizedState!==null,c=e!==null&&e.memoizedState!==null;var u=Ln,s=fn,h=Pt;Ln=u||i,Pt=h||i,fn=s||c,it(t,n,a),fn=s,Pt=h,Ln=u,ct(n),l&8192&&(t=n.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,!i||e===null||c||Ln||fn||(t=c||fn,a=Ln,e=fn,Ln=i||Ln,fn=t,xa(n,2),Ln=a,fn=e),!i&&Pt||zs(n,i)),l&4&&(t=n.updateQueue,t!==null&&(a=t.retryQueue,a!==null&&(t.retryQueue=null,fc(n,a))));break;case 19:it(t,n,a),ct(n),l&4&&(t=n.updateQueue,t!==null&&(n.updateQueue=null,fc(n,t)));break;case 30:l&512&&(fn||e===null||kn(e,e.return)),l=Ko(),i=Xl,c=(a&335544064)===a,u=n.memoizedProps,Xl=c&&oa(u.default,u.update)!=="none",it(t,n,a),ct(n),c&&e!==null&&cn&&(n.flags|=4),Xl=i,cn=l;break;case 21:break;case 7:l&512&&(fn||e===null||kn(e,e.return)),e&&e.stateNode!==null&&(e.stateNode._fragmentFiber=n);default:it(t,n,a),ct(n)}}function ct(n){var t=n.flags;if(t&2){try{for(var a,e=n.return;e!==null;){if(fd(e)){a=e;break}e=e.return}e=null;for(var l=n.return;l!==null;){if(hs(l)){var i=l.stateNode;e===null?e=[i]:e.push(i)}if(ds(l))break;l=l.return}var c=e;if(a==null)throw Error(g(160));switch(a.tag){case 27:var u=a.stateNode,s=gs(n);ic(n,s,u,c);break;case 5:var h=a.stateNode;a.flags&32&&(ze(h,""),a.flags&=-33);var p=gs(n);ic(n,p,h,c);break;case 3:case 4:var S=a.stateNode.containerInfo,f=gs(n);ps(n,f,S,c);break;default:throw Error(g(161))}}catch(m){vn(n,n.return,m)}n.flags&=-3}t&4096&&(n.flags&=-4097)}function Nd(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var t=n;Nd(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,ul=!0,t.reset(),ul=!1),n=n.sibling}}function Qe(n,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)jd(t,n),t=t.sibling;else yd(t)}function jd(n,t){var a=n.alternate;if(a===null)ys(n,!1);else switch(n.tag){case 3:if(_s=na=!1,vd(),Qe(t,n),!na&&!oc){if(n=$t,n!==null)for(var e=0;e<n.length;e+=3){a=n[e];var l=n[e+1];mh(a,n[e+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}n=t.containerInfo,n=n.nodeType===9?n.documentElement:n.ownerDocument.documentElement,n!==null&&n.style.viewTransitionName===""&&(n.style.viewTransitionName="none",n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),n.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),_s=!0}$t=null;break;case 5:Qe(t,n);break;case 4:e=na,na=!1,Qe(t,n),na&&(oc=!0),na=e;break;case 22:n.memoizedState===null&&(a.memoizedState!==null?ys(n,!1):Qe(t,n));break;case 30:e=na,l=vd(),na=!1,Qe(t,n),na&&(n.flags|=4);var i=n.memoizedProps,c=n.stateNode;t=sa(i,c),c=sa(a.memoizedProps,c);var u=oa(i.default,i.update);u==="none"?t=!1:(i=a.memoizedState,a.memoizedState=null,a=n.child,dt=0,t=Es(n,a,t,c,u,i,!0),dt!==(i===null?0:i.length)&&(n.flags|=32)),(n.flags&4)!==0&&t?($e(n,n.memoizedProps.onUpdate),$t=l):l!==null&&(l.push.apply(l,$t),$t=l),na=(n.flags&32)!==0?!0:e;break;default:Qe(t,n)}}function ta(n,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Sd(n,t.alternate,t),t=t.sibling}function xa(n,t){for(n=n.child;n!==null;){var a=n,e=t;switch(a.tag){case 0:case 11:case 14:case 15:qa(4,a,a.return),xa(a,e);break;case 1:kn(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&od(a,a.return,l),xa(a,e);break;case 27:(e&2)!==0&&Nh(a.stateNode,a.type,a.memoizedProps);case 5:kn(a,a.return),a.tag!==5&&a.tag!==27||Ll(a),xa(a,e);break;case 6:Ll(a);break;case 26:kn(a,a.return),l=a.stateNode,a.memoizedState!==null||l===null||fn||l.parentNode.removeChild(l),xa(a,e);break;case 22:a.memoizedState===null&&xa(a,e);break;case 30:kn(a,a.return),xa(a,e);break;case 7:kn(a,a.return);default:xa(a,e)}n=n.sibling}}function Lt(n,t,a){for(a=(t.subtreeFlags&8772)!==0?a:a&-2,t=t.child;t!==null;){var e=t.alternate,l=n,i=t,c=i.flags,u=(a&1)!==0;switch(i.tag){case 0:case 11:case 15:Lt(l,i,a),Gl(4,i);break;case 1:if(Lt(l,i,a),e=i,l=e.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(p){vn(e,e.return,p)}if(e=i,l=e.updateQueue,l!==null){var s=e.stateNode;try{var h=l.shared.hiddenCallbacks;if(h!==null)for(l.shared.hiddenCallbacks=null,l=0;l<h.length;l++)Wr(h[l],s)}catch(p){vn(e,e.return,p)}}u&&c&64&&sd(i),Ft(i,i.return);break;case 27:(a&2)!==0&&dd(i);case 5:i.tag!==5&&i.tag!==27||rd(i),Lt(l,i,a),u&&e===null&&c&4&&vs(i),Ft(i,i.return);break;case 6:rd(i);break;case 26:s=i.stateNode,i.memoizedState!==null||s===null||Ln||ro($l(s.ownerDocument),i.type,s),Lt(l,i,a),u&&e===null&&c&4&&vs(i),Ft(i,i.return);break;case 12:Lt(l,i,a);break;case 31:Lt(l,i,a),u&&c&4&&_d(l,i);break;case 13:Lt(l,i,a),u&&c&4&&zd(l,i);break;case 22:i.memoizedState===null&&Lt(l,i,a),Ft(i,i.return);break;case 30:Lt(l,i,a),Ft(i,i.return);break;case 7:Ft(i,i.return);default:Lt(l,i,a)}t=t.sibling}}function Ns(n,t){var a=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(n!=null&&n.refCount++,a!=null&&Nl(a))}function js(n,t){n=null,t.alternate!==null&&(n=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==n&&(t.refCount++,n!=null&&Nl(n))}function Ut(n,t,a,e){var l=(a&335544064)===a;if(t.subtreeFlags&(l?10262:10256))for(t=t.child;t!==null;)Dd(n,t,a,e),t=t.sibling;else l&&pd(t)}function Dd(n,t,a,e){var l=(a&335544064)===a;l&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&sc(t);var i=t.flags;switch(t.tag){case 0:case 11:case 15:Ut(n,t,a,e),i&2048&&Gl(9,t);break;case 1:Ut(n,t,a,e);break;case 3:Ut(n,t,a,e),l&&_s&&(n=n.containerInfo,n=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,n.style.viewTransitionName==="root"&&(n.style.viewTransitionName=""),n=n.ownerDocument.documentElement,n!==null&&n.style.viewTransitionName==="none"&&(n.style.viewTransitionName="")),i&2048&&(i=null,t.alternate!==null&&(i=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==i&&(t.refCount++,i!=null&&Nl(i)));break;case 12:if(i&2048){Ut(n,t,a,e),i=t.stateNode;try{var c=t.memoizedProps,u=c.id,s=c.onPostCommit;typeof s=="function"&&s(u,t.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(h){vn(t,t.return,h)}}else Ut(n,t,a,e);break;case 31:Ut(n,t,a,e);break;case 13:Ut(n,t,a,e);break;case 23:break;case 22:c=t.stateNode,u=t.alternate,t.memoizedState!==null?(l&&u!==null&&u.memoizedState===null&&sc(u),c._visibility&2?Ut(n,t,a,e):Vl(n,t)):(l&&u!==null&&u.memoizedState!==null&&sc(t),c._visibility&2?Ut(n,t,a,e):(c._visibility|=2,Ze(n,t,a,e,(t.subtreeFlags&10256)!==0||!1))),i&2048&&Ns(u,t);break;case 24:Ut(n,t,a,e),i&2048&&js(t.alternate,t);break;case 30:l&&(i=t.alternate,i!==null&&(It(i.child,!0),It(t.child,!0))),Ut(n,t,a,e);break;default:Ut(n,t,a,e)}}function Ze(n,t,a,e,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=n,c=t,u=a,s=e,h=c.flags;switch(c.tag){case 0:case 11:case 15:Ze(i,c,u,s,l),Gl(8,c);break;case 23:break;case 22:var p=c.stateNode;c.memoizedState!==null?p._visibility&2?Ze(i,c,u,s,l):Vl(i,c):(p._visibility|=2,Ze(i,c,u,s,l)),l&&h&2048&&Ns(c.alternate,c);break;case 24:Ze(i,c,u,s,l),l&&h&2048&&js(c.alternate,c);break;default:Ze(i,c,u,s,l)}t=t.sibling}}function Vl(n,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=n,e=t,l=e.flags;switch(e.tag){case 22:Vl(a,e),l&2048&&Ns(e.alternate,e);break;case 24:Vl(a,e),l&2048&&js(e.alternate,e);break;default:Vl(a,e)}t=t.sibling}}var he=8192;function ve(n,t,a){if(n.subtreeFlags&he)for(n=n.child;n!==null;)Md(n,t,a),n=n.sibling}function Md(n,t,a){switch(n.tag){case 26:ve(n,t,a),n.flags&he&&(n.memoizedState!==null?Kg(a,Gt,n.memoizedState,n.memoizedProps):(n=n.stateNode,(t&335544128)===t&&xh(a,n)));break;case 5:ve(n,t,a),n.flags&he&&(n=n.stateNode,(t&335544128)===t&&xh(a,n));break;case 3:case 4:var e=Gt;Gt=$l(n.stateNode.containerInfo),ve(n,t,a),Gt=e;break;case 22:n.memoizedState===null&&(e=n.alternate,e!==null&&e.memoizedState!==null?(e=he,he=16777216,ve(n,t,a),he=e):ve(n,t,a));break;case 30:if((n.flags&he)!==0&&(e=n.memoizedProps.name,e!=null&&e!=="auto")){var l=n.stateNode;l.paired=null,At===null&&(At=new Map),At.set(e,l)}ve(n,t,a);break;default:ve(n,t,a)}}function Cd(n){var t=n.alternate;if(t!==null&&(n=t.child,n!==null)){t.child=null;do t=n.sibling,n.sibling=null,n=t;while(n!==null)}}function Ql(n){var t=n.deletions;if((n.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var e=t[a];Xn=e,Rd(e,n)}Cd(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)wd(n),n=n.sibling}function wd(n){switch(n.tag){case 0:case 11:case 15:Ql(n),n.flags&2048&&qa(9,n,n.return);break;case 3:Ql(n);break;case 12:Ql(n);break;case 22:var t=n.stateNode;n.memoizedState!==null&&t._visibility&2&&(n.return===null||n.return.tag!==13)?(t._visibility&=-3,dc(n)):Ql(n);break;default:Ql(n)}}function dc(n){var t=n.deletions;if((n.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var e=t[a];Xn=e,Rd(e,n)}Cd(n)}for(n=n.child;n!==null;){switch(t=n,t.tag){case 0:case 11:case 15:qa(8,t,t.return),dc(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,dc(t));break;default:dc(t)}n=n.sibling}}function Rd(n,t){for(;Xn!==null;){var a=Xn;switch(a.tag){case 0:case 11:case 15:qa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var e=a.memoizedState.cachePool.pool;e!=null&&e.refCount++}break;case 24:Nl(a.memoizedState.cache)}if(e=a.child,e!==null)e.return=a,Xn=e;else n:for(a=n;Xn!==null;){e=Xn;var l=e.sibling,i=e.return;if(Ed(e),e===a){Xn=null;break n}if(l!==null){l.return=i,Xn=l;break n}Xn=i}}}var Lm={getCacheForType:function(n){var t=Zn(wn),a=t.data.get(n);return a===void 0&&(a=n(),t.data.set(n,a)),a},cacheSignal:function(){return Zn(wn).controller.signal}},Xm=typeof WeakMap=="function"?WeakMap:Map,sn=0,bn=null,W=null,I=0,hn=0,_t=null,Ya=!1,Ke=!1,Ds=!1,ya=0,Dn=0,Ba=0,me=0,hc=0,zt=0,Je=0,Zl=null,vt=null,Ms=!1,vc=0,Ud=0,mc=1/0,gc=null,Ga=null,Nn=0,Xt=null,ge=null,aa=0,Cs=0,ws=null,Hd=null,ke=null,We=null,Fe=null,Kl=0,pc=null;function Ot(){return(sn&2)!==0&&I!==0?I&-I:D.T!==null?Xs():xo()}function qd(){if(zt===0)if((I&536870912)===0||k){var n=fi;fi<<=1,(fi&3932160)===0&&(fi=262144),zt=n}else zt=536870912;return n=Kn.current,n!==null&&(n.flags|=32),zt}function $e(n,t){if(t!=null){var a=n.stateNode,e=a.ref;e===null&&(e=a.ref=gh(sa(n.memoizedProps,a))),We===null&&(We=[]),We.push(t.bind(null,e))}}function mt(n,t,a){(n===bn&&(hn===2||hn===9)||n.cancelPendingCommit!==null)&&(Ie(n,0),La(n,I,zt,!1)),hl(n,a),((sn&2)===0||n!==bn)&&(n===bn&&((sn&2)===0&&(me|=a),Dn===4&&La(n,I,zt,!1)),ea(n))}function xd(n,t,a){if((sn&6)!==0)throw Error(g(327));var e=!a&&(t&127)===0&&(t&n.expiredLanes)===0||dl(n,t),l=e?Zm(n,t):Us(n,t,!0),i=e;do{if(l===0){Ke&&!e&&La(n,t,0,!1);break}else{if(a=n.current.alternate,i&&!Vm(a)){l=Us(n,t,!1),i=!1;continue}if(l===2){if(i=t,n.errorRecoveryDisabledLanes&i)var c=0;else c=n.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;n:{var u=n;l=Zl;var s=u.current.memoizedState.isDehydrated;if(s&&(Ie(u,c).flags|=256),c=Us(u,c,!1),c!==2&&c!==6){if(Ds&&!s){u.errorRecoveryDisabledLanes|=i,me|=i,l=4;break n}i=vt,vt=l,i!==null&&(vt===null?vt=i:vt.push.apply(vt,i))}l=c}if(i=!1,l!==2)continue}}if(l===1){Ie(n,0),La(n,t,0,!0);break}n:{switch(e=n,i=l,i){case 0:case 1:throw Error(g(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:La(e,t,zt,!Ya);break n;case 2:vt=null;break;case 3:case 5:break;default:throw Error(g(329))}if((t&62914560)===t&&(l=vc+300-pt(),10<l)){if(La(e,t,zt,!Ya),hi(e,0,!0)!==0)break n;aa=t,e.timeoutHandle=Ps(Yd.bind(null,e,a,vt,gc,Ms,t,zt,me,Je,Ya,i,"Throttled",-0,0),l);break n}Yd(e,a,vt,gc,Ms,t,zt,me,Je,Ya,i,null,-0,0)}}break}while(!0);ea(n)}function Yd(n,t,a,e,l,i,c,u,s,h,p,S,f,m){n.timeoutHandle=-1;var _=t.subtreeFlags,j=(i&335544064)===i;if(S=null,(j||_&8192||(_&16785408)===16785408)&&(S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Jt},At=null,Md(t,i,S),j&&(_=S,j=n.containerInfo,j=(j.nodeType===9?j:j.ownerDocument).__reactViewTransition,j!=null&&(_.count++,_.waitingForViewTransition=!0,_=ni.bind(_),j.finished.then(_,_))),_=(i&62914560)===i?vc-pt():(i&4194048)===i?Ud-pt():0,_=Jg(S,_),_!==null)){aa=i,n.cancelPendingCommit=_(Kd.bind(null,n,t,i,a,e,l,c,u,s,h,p,S,null,f,m)),La(n,i,c,!h);return}Kd(n,t,i,a,e,l,c,u,s,h,p,S)}function Vm(n){for(var t=n;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var e=0;e<a.length;e++){var l=a[e],i=l.getSnapshot;l=l.value;try{if(!Tt(i(),l))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function La(n,t,a,e){t=wo(n,t),t&=~hc,t&=~me,n.suspendedLanes|=t,n.pingedLanes&=~t,e&&(n.warmLanes|=t),e=n.expirationTimes;for(var l=t;0<l;){var i=31-bt(l),c=1<<i;e[i]=-1,l&=~c}a!==0&&Uo(n,a,t)}function yc(){return(sn&6)===0?(Jl(0),!1):!0}function Rs(){if(W!==null){if(hn===0)var n=W.return;else n=W,da=ee=null,Lu(n),Ye=null,Ml=0,n=W;for(;n!==null;)ud(n.alternate,n),n=n.return;W=null}}function Ie(n,t){var a=n.timeoutHandle;return a!==-1&&(n.timeoutHandle=-1,hg(a)),a=n.cancelPendingCommit,a!==null&&(n.cancelPendingCommit=null,a()),aa=0,Rs(),bn=n,W=a=ra(n.current,null),I=t,hn=0,_t=null,Ya=!1,Ke=dl(n,t),Ds=!1,Je=zt=hc=me=Ba=Dn=0,vt=Zl=null,Ms=!1,ya=wo(n,t),Oi(),a}function Bd(n,t){Q=null,D.H=$i,t===xe||t===xi?(t=Zr(),hn=3):t===ju?(t=Zr(),hn=4):hn=t===as?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,_t=t,W===null&&(Dn=1,Ii(n,Mt(t,n.current)))}function Gd(){var n=Kn.current;return n===null?!0:(I&4194048)===I?nt===null:(I&62914560)===I||(I&536870912)!==0?n===nt:!1}function Ld(){var n=D.H;return D.H=$i,n===null?$i:n}function Xd(){var n=D.A;return D.A=Lm,n}function bc(){Dn=4,Ya||(I&4194048)!==I&&Kn.current!==null||(Ke=!0),(Ba&134217727)===0&&(me&134217727)===0||bn===null||La(bn,I,zt,!1)}function Us(n,t,a){var e=sn;sn|=2;var l=Ld(),i=Xd();(bn!==n||I!==t)&&(gc=null,Ie(n,t)),t=!1;var c=Dn;n:do try{if(hn!==0&&W!==null){var u=W,s=_t;switch(hn){case 8:Rs(),c=6;break n;case 3:case 2:case 9:case 6:Kn.current===null&&(t=!0);var h=hn;if(hn=0,_t=null,Pe(n,u,s,h),a&&Ke){c=0;break n}break;default:h=hn,hn=0,_t=null,Pe(n,u,s,h)}}Qm(),c=Dn;break}catch(p){Bd(n,p)}while(!0);return t&&n.shellSuspendCounter++,da=ee=null,sn=e,D.H=l,D.A=i,W===null&&(bn=null,I=0,Oi()),c}function Qm(){for(;W!==null;)Vd(W)}function Zm(n,t){var a=sn;sn|=2;var e=Ld(),l=Xd();bn!==n||I!==t?(gc=null,mc=pt()+500,Ie(n,t)):Ke=dl(n,t);n:do try{if(hn!==0&&W!==null){t=W;var i=_t;t:switch(hn){case 1:hn=0,_t=null,Pe(n,t,i,1);break;case 2:case 9:if(Vr(i)){hn=0,_t=null,Qd(t);break}t=function(){hn!==2&&hn!==9||bn!==n||(hn=7),ea(n)},i.then(t,t);break n;case 3:hn=7;break n;case 4:hn=5;break n;case 7:Vr(i)?(hn=0,_t=null,Qd(t)):(hn=0,_t=null,Pe(n,t,i,7));break;case 5:var c=null;switch(W.tag){case 26:c=W.memoizedState;case 5:case 27:var u=W;if(c?Hh(c):u.stateNode.complete){hn=0,_t=null;var s=u.sibling;if(s!==null)W=s;else{var h=u.return;h!==null?(W=h,Sc(h)):W=null}break t}}hn=0,_t=null,Pe(n,t,i,5);break;case 6:hn=0,_t=null,Pe(n,t,i,6);break;case 8:Rs(),Dn=6;break n;default:throw Error(g(462))}}Km();break}catch(p){Bd(n,p)}while(!0);return da=ee=null,D.H=e,D.A=l,sn=a,W!==null?0:(bn=null,I=0,Oi(),Dn)}function Km(){for(;W!==null&&!ov();)Vd(W)}function Vd(n){var t=id(n.alternate,n,ya);n.memoizedProps=n.pendingProps,t===null?Sc(n):W=t}function Qd(n){var t=n,a=t.alternate;switch(t.tag){case 15:case 0:t=If(a,t,t.pendingProps,t.type,void 0,I);break;case 11:t=If(a,t,t.pendingProps,t.type.render,t.ref,I);break;case 5:Lu(t);var e=t;e===Gn&&(k?(wi(e),e.tag===5&&e.stateNode!=null&&(En=e.stateNode)):(wi(e),k=!0));default:ud(a,t),t=W=wr(t,ya),t=id(a,t,ya)}n.memoizedProps=n.pendingProps,t===null?Sc(n):W=t}function Pe(n,t,a,e){da=ee=null,Lu(t),Ye=null,Ml=0;var l=t.return;try{if(Rm(n,l,t,a,I)){Dn=1,Ii(n,Mt(a,n.current)),W=null;return}}catch(i){if(l!==null)throw W=l,i;Dn=1,Ii(n,Mt(a,n.current)),W=null;return}t.flags&32768?(k||e===1?n=!0:Ke||(I&536870912)!==0?n=!1:(Ya=n=!0,(e===2||e===9||e===3||e===6)&&(e=Kn.current,e!==null&&e.tag===13&&(e.flags|=16384))),Zd(t,n)):Sc(t)}function Sc(n){var t=n;do{if((t.flags&32768)!==0){Zd(t,Ya);return}n=t.return;var a=xm(t.alternate,t,ya);if(a!==null){W=a;return}if(t=t.sibling,t!==null){W=t;return}W=t=n}while(t!==null);Dn===0&&(Dn=5)}function Zd(n,t){do{var a=Ym(n.alternate,n);if(a!==null){a.flags&=32767,W=a;return}if(a=n.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(n=n.sibling,n!==null)){W=n;return}W=n=a}while(n!==null);Dn=6,W=null}function Kd(n,t,a,e,l,i,c,u,s,h,p,S){n.cancelPendingCommit=null;do Tc();while(Nn!==0);if((sn&6)!==0)throw Error(g(327));if(t!==null){if(t===n.current)throw Error(g(177));n===bn&&(W=bn=null,I=0),ge=t,Xt=n,aa=a,ws=l,Hd=e,Jm(n,t,a,c,u,s,S)}}function Jm(n,t,a,e,l,i,c){var u=t.lanes|t.childLanes;if(Cs=u,u|=mu,bv(n,a,u,e,l,i),We=null,(a&335544064)===a?(Fe=Tm(n),e=10262):(Fe=null,e=10256),(t.subtreeFlags&e)!==0||(t.flags&e)!==0?(n.callbackNode=null,n.callbackPriority=0,Pm(oi,function(){return Ys(),null})):(n.callbackNode=null,n.callbackPriority=0),cc=!1,e=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||e){e=D.T,D.T=null,l=G.p,G.p=2,i=sn,sn|=4;try{Bm(n,t,a)}finally{sn=i,G.p=l,D.T=e}}Nn=1,cc?ke=bg(c,n.containerInfo,Fe,Hs,qs,Wm,xs,Ys,km):(Hs(),qs(),xs())}function km(n){if(Nn!==0){var t=Xt.onRecoverableError;t(n,{componentStack:null})}}function Wm(){Nn===3&&(Nn=0,jd(ge,Xt),Nn=4)}function Hs(){if(Nn===1){Nn=0;var n=Xt,t=ge,a=aa,e=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||e){e=D.T,D.T=null;var l=G.p;G.p=2;var i=sn;sn|=4;try{Xl=oc=!1,Od(t,n,a),a=Fs;var c=Er(n.containerInfo),u=a.focusedElem,s=a.selectionRange;if(c!==u&&u&&u.ownerDocument&&Tr(u.ownerDocument.documentElement,u)){if(s!==null&&ru(u)){var h=s.start,p=s.end;if(p===void 0&&(p=h),"selectionStart"in u)u.selectionStart=h,u.selectionEnd=Math.min(p,u.value.length);else{var S=u.ownerDocument||document,f=S&&S.defaultView||window;if(f.getSelection){var m=f.getSelection(),_=u.textContent.length,j=Math.min(s.start,_),Z=s.end===void 0?j:Math.min(s.end,_);!m.extend&&j>Z&&(c=Z,Z=j,j=c);var d=Sr(u,j),o=Sr(u,Z);if(d&&o&&(m.rangeCount!==1||m.anchorNode!==d.node||m.anchorOffset!==d.offset||m.focusNode!==o.node||m.focusOffset!==o.offset)){var v=S.createRange();v.setStart(d.node,d.offset),m.removeAllRanges(),j>Z?(m.addRange(v),m.extend(o.node,o.offset)):(v.setEnd(o.node,o.offset),m.addRange(v))}}}}for(S=[],m=u;m=m.parentNode;)m.nodeType===1&&S.push({element:m,left:m.scrollLeft,top:m.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<S.length;u++){var b=S[u];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}ul=!!Ws,Fs=Ws=null}finally{sn=i,G.p=l,D.T=e}}n.current=t,Nn=2}}function qs(){if(Nn===2){Nn=0;var n=Xt,t=ge,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=D.T,D.T=null;var e=G.p;G.p=2;var l=sn;sn|=4;try{Sd(n,t.alternate,t)}finally{sn=l,G.p=e,D.T=a}}Nn=3}}function xs(){if(Nn===4||Nn===3){Nn=0;var n=ke;ke=null,rv();var t=Xt,a=ge,e=aa,l=Hd,i=(e&335544064)===e?10262:10256;if((a.subtreeFlags&i)!==0||(a.flags&i)!==0?Nn=5:(Nn=0,ge=Xt=null,Jd(t,t.pendingLanes)),i=t.pendingLanes,i===0&&(Ga=null),Kc(e),a=a.stateNode,yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(fl,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=D.T,i=G.p,G.p=2,D.T=null;try{for(var c=t.onRecoverableError,u=0;u<l.length;u++){var s=l[u];c(s.value,{componentStack:s.stack})}}finally{D.T=a,G.p=i}}if(l=We,c=Fe,Fe=null,l!==null&&(We=null,c===null&&(c=[]),n!==null))for(s=0;s<l.length;s++)a=(0,l[s])(c),a!==void 0&&n.finished.finally(a);(aa&3)!==0&&Tc(),ea(t),i=t.pendingLanes,(e&261930)!==0&&(i&42)!==0?t===pc?Kl++:(Kl=0,pc=t):(Kl=0,pc=null),Jl(0)}}function Jd(n,t){(n.pooledCacheLanes&=t)===0&&(t=n.pooledCache,t!=null&&(n.pooledCache=null,Nl(t)))}function Tc(){return ke!==null&&(ke.skipTransition(),ke=null),Hs(),qs(),xs(),Ys()}function Ys(){if(Nn!==5)return!1;var n=Xt,t=Cs;Cs=0;var a=Kc(aa),e=D.T,l=G.p;try{G.p=32>a?32:a,D.T=null,a=ws,ws=null;var i=Xt,c=aa;if(Nn=0,ge=Xt=null,aa=0,(sn&6)!==0)throw Error(g(331));var u=sn;if(sn|=4,wd(i.current),Dd(i,i.current,c,a),sn=u,Jl(0,!1),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(fl,i)}catch{}return!0}finally{G.p=l,D.T=e,Jd(n,t)}}function kd(n,t,a){t=Mt(a,t),t=ts(n.stateNode,t,2),n=wa(n,t,2),n!==null&&(hl(n,2),ea(n))}function vn(n,t,a){if(n.tag===3)kd(n,n,a);else for(;t!==null;){if(t.tag===3){kd(t,n,a);break}else if(t.tag===1){var e=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(Ga===null||!Ga.has(e))){n=Mt(a,n),a=Qf(2),e=wa(t,a,2),e!==null&&(Zf(a,e,t,n),hl(e,2),ea(e));break}}t=t.return}}function Bs(n,t,a){var e=n.pingCache;if(e===null){e=n.pingCache=new Xm;var l=new Set;e.set(t,l)}else l=e.get(t),l===void 0&&(l=new Set,e.set(t,l));l.has(a)||(Ds=!0,l.add(a),n=Fm.bind(null,n,t,a),t.then(n,n))}function Fm(n,t,a){var e=n.pingCache;e!==null&&e.delete(t),n.pingedLanes|=n.suspendedLanes&a,n.warmLanes&=~a,bn===n&&(I&a)===a&&((Dn===4||Dn===3&&(I&62914560)===I&&300>pt()-vc)&&(sn&2)===0?Ie(n,0):hc|=a,Je===I&&(Je=0)),ea(n)}function Wd(n,t){t===0&&(t=Ro()),n=ne(n,t),n!==null&&(hl(n,t),ea(n))}function $m(n){var t=n.memoizedState,a=0;t!==null&&(a=t.retryLane),Wd(n,a)}function Im(n,t){var a=0;switch(n.tag){case 31:case 13:var e=n.stateNode,l=n.memoizedState;l!==null&&(a=l.retryLane);break;case 19:e=n.stateNode;break;case 22:e=n.stateNode._retryCache;break;default:throw Error(g(314))}e!==null&&e.delete(t),Wd(n,a)}function Pm(n,t){return Xc(n,t)}var nl=null,tl=null,Gs=!1,Ec=!1,Ls=!1,Xa=0;function ea(n){n!==tl&&n.next===null&&(tl===null?nl=tl=n:tl=tl.next=n),Ec=!0,Gs||(Gs=!0,tg())}function Jl(n,t){if(!Ls&&Ec){Ls=!0;do for(var a=!1,e=nl;e!==null;){if(n!==0){var l=e.pendingLanes;if(l===0)var i=0;else{var c=e.suspendedLanes,u=e.pingedLanes;i=(1<<31-bt(42|n)+1)-1,i&=l&~(c&~u),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Pd(e,i))}else i=I,i=hi(e,e===bn?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),(i&3)===0||dl(e,i)||(a=!0,Pd(e,i));e=e.next}while(a);Ls=!1}}function ng(){Fd()}function Fd(){Ec=Gs=!1;var n=0;Xa!==0&&dg()&&(n=Xa);for(var t=pt(),a=null,e=nl;e!==null;){var l=e.next,i=$d(e,t);i===0?(e.next=null,a===null?nl=l:a.next=l,l===null&&(tl=a)):(a=e,(n!==0||(i&3)!==0)&&(Ec=!0)),e=l}Nn!==0&&Nn!==5||Jl(n),Xa!==0&&(Xa=0)}function $d(n,t){for(var a=n.suspendedLanes,e=n.pingedLanes,l=n.expirationTimes,i=n.pendingLanes&-62914561;0<i;){var c=31-bt(i),u=1<<c,s=l[c];s===-1?((u&a)===0||(u&e)!==0)&&(l[c]=yv(u,t)):s<=t&&(n.expiredLanes|=u),i&=~u}if(t=bn,a=I,a=hi(n,n===t?a:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),e=n.callbackNode,a===0||n===t&&(hn===2||hn===9)||n.cancelPendingCommit!==null)return e!==null&&e!==null&&Vc(e),n.callbackNode=null,n.callbackPriority=0;if((a&3)===0||dl(n,a)){if(t=a&-a,t===n.callbackPriority)return t;switch(e!==null&&Vc(e),Kc(a)){case 2:case 8:a=Mo;break;case 32:a=oi;break;case 268435456:a=Co;break;default:a=oi}return e=Id.bind(null,n),a=Xc(a,e),n.callbackPriority=t,n.callbackNode=a,t}return e!==null&&e!==null&&Vc(e),n.callbackPriority=2,n.callbackNode=null,2}function Id(n,t){if(Nn!==0&&Nn!==5)return n.callbackNode=null,n.callbackPriority=0,null;var a=n.callbackNode;if(Tc()&&n.callbackNode!==a)return null;var e=I;return e=hi(n,n===bn?e:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),e===0?null:(xd(n,e,t),$d(n,pt()),n.callbackNode!=null&&n.callbackNode===a?Id.bind(null,n):null)}function Pd(n,t){if(Tc())return null;xd(n,t,!0)}function tg(){vg(function(){(sn&6)!==0?Xc(Do,ng):Fd()})}function Xs(){if(Xa===0){var n=ce;n===0&&(n=ri,ri<<=1,(ri&261888)===0&&(ri=256)),Xa=n}return Xa}function nh(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:yi(n)}function ag(n,t,a,e,l){if(t==="submit"&&a&&a.stateNode===l){var i=nh((l[rt]||null).action),c=e.submitter;c&&(t=(t=c[rt]||null)?nh(t.formAction):c.getAttribute("formAction"),t!==null&&(i=t,c=null));var u=new Ei("action","action",null,e,l);n.push({event:u,listeners:[{instance:null,listener:function(){if(e.defaultPrevented){if(Xa!==0){var s=new FormData(l,c);Fu(a,{pending:!0,data:s,method:l.method,action:i},null,s)}}else typeof i=="function"&&(u.preventDefault(),s=new FormData(l,c),Fu(a,{pending:!0,data:s,method:l.method,action:i},i,s))},currentTarget:l}]})}}for(var Vs=0;Vs<vu.length;Vs++){var Qs=vu[Vs],eg=Qs.toLowerCase(),lg=Qs[0].toUpperCase()+Qs.slice(1);Yt(eg,"on"+lg)}Yt(zr,"onAnimationEnd"),Yt(Or,"onAnimationIteration"),Yt(Nr,"onAnimationStart"),Yt("dblclick","onDoubleClick"),Yt("focusin","onFocus"),Yt("focusout","onBlur"),Yt(hm,"onTransitionRun"),Yt(vm,"onTransitionStart"),Yt(mm,"onTransitionCancel"),Yt(jr,"onTransitionEnd"),Ae("onMouseEnter",["mouseout","mouseover"]),Ae("onMouseLeave",["mouseout","mouseover"]),Ae("onPointerEnter",["pointerout","pointerover"]),Ae("onPointerLeave",["pointerout","pointerover"]),$a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$a("onBeforeInput",["compositionend","keypress","textInput","paste"]),$a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ig=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(kl));function th(n,t){t=(t&4)!==0;for(var a=0;a<n.length;a++){var e=n[a],l=e.event;e=e.listeners;n:{var i=void 0;if(t)for(var c=e.length-1;0<=c;c--){var u=e[c],s=u.instance,h=u.currentTarget;if(u=u.listener,s!==i&&l.isPropagationStopped())break n;i=u,l.currentTarget=h;try{i(l)}catch(p){zi(p)}l.currentTarget=null,i=s}else for(c=0;c<e.length;c++){if(u=e[c],s=u.instance,h=u.currentTarget,u=u.listener,s!==i&&l.isPropagationStopped())break n;i=u,l.currentTarget=h;try{i(l)}catch(p){zi(p)}l.currentTarget=null,i=s}}}}function F(n,t){var a=t[Bo];a===void 0&&(a=t[Bo]=new Set);var e=n+"__bubble";a.has(e)||(ah(t,n,2,!1),a.add(e))}function Zs(n,t,a){var e=0;t&&(e|=4),ah(a,n,e,t)}var Ac="_reactListening"+Math.random().toString(36).slice(2);function Ks(n){if(!n[Ac]){n[Ac]=!0,Xo.forEach(function(a){a!=="selectionchange"&&(ig.has(a)||Zs(a,!1,n),Zs(a,!0,n))});var t=n.nodeType===9?n:n.ownerDocument;t===null||t[Ac]||(t[Ac]=!0,Zs("selectionchange",!1,t))}}function ah(n,t,a,e){switch(Zh(t)){case 2:var l=$g;break;case 8:l=Ig;break;default:l=ho}a=l.bind(null,t,a,n),l=void 0,!nu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),e?l!==void 0?n.addEventListener(t,a,{capture:!0,passive:l}):n.addEventListener(t,a,!0):l!==void 0?n.addEventListener(t,a,{passive:l}):n.addEventListener(t,a,!1)}function Js(n,t,a,e,l){var i=e;if((t&1)===0&&(t&2)===0&&e!==null)n:for(;;){if(e===null)return;var c=e.tag;if(c===3||c===4){var u=e.stateNode.containerInfo;if(u===l)break;if(c===4)for(c=e.return;c!==null;){var s=c.tag;if((s===3||s===4)&&c.stateNode.containerInfo===l)return;c=c.return}for(;u!==null;){if(c=Fa(u),c===null)return;if(s=c.tag,s===5||s===6||s===26||s===27){e=i=c;continue n}u=u.parentNode}}e=e.return}tr(function(){var h=i,p=Ic(a),S=[];n:{var f=Dr.get(n);if(f!==void 0){var m=Ei,_=n;switch(n){case"keypress":if(Si(a)===0)break n;case"keydown":case"keyup":m=Vv;break;case"focusin":_="focus",m=lu;break;case"focusout":_="blur",m=lu;break;case"beforeblur":case"afterblur":m=lu;break;case"click":if(a.button===2)break n;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=lr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Cv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=kv;break;case zr:case Or:case Nr:m=Uv;break;case jr:m=Fv;break;case"scroll":case"scrollend":m=Dv;break;case"wheel":m=Iv;break;case"copy":case"cut":case"paste":m=qv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=cr;break;case"submit":m=Kv;break;case"toggle":case"beforetoggle":m=nm}var j=(t&4)!==0,Z=!j&&(n==="scroll"||n==="scrollend"),d=j?f!==null?f+"Capture":null:f;j=[];for(var o=h,v;o!==null;){var b=o;if(v=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||v===null||d===null||(b=gl(o,d),b!=null&&j.push(Wl(o,b,v))),Z)break;o=o.return}0<j.length&&(f=new m(f,_,null,a,p),S.push({event:f,listeners:j}))}}if((t&7)===0){n:{if(m=n==="mouseover"||n==="pointerover",f=n==="mouseout"||n==="pointerout",m&&a!==$c&&(_=a.relatedTarget||a.fromElement)&&(Fa(_)||_[Se]))break n;(f||m)&&(_=p.window===p?p:(m=p.ownerDocument)?m.defaultView||m.parentWindow:window,f?(m=a.relatedTarget||a.toElement,f=h,m=m?Fa(m):null,m!==null&&(Z=z(m),j=m.tag,m!==Z||j!==5&&j!==27&&j!==6)&&(m=null)):(f=null,m=h),f!==m&&(j=lr,b="onMouseLeave",d="onMouseEnter",o="mouse",(n==="pointerout"||n==="pointerover")&&(j=cr,b="onPointerLeave",d="onPointerEnter",o="pointer"),Z=f==null?_:ml(f),v=m==null?_:ml(m),_=new j(b,o+"leave",f,a,p),_.target=Z,_.relatedTarget=v,b=null,Fa(p)===h&&(j=new j(d,o+"enter",m,a,p),j.target=v,j.relatedTarget=Z,b=j),Z=b,j=f&&m?Sn(f,m,cg):null,f!==null&&eh(S,_,f,j,!1),m!==null&&Z!==null&&eh(S,Z,m,j,!0)))}n:{if(f=h?ml(h):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var N=vr;else if(dr(f))if(mr)N=rm;else{N=sm;var P=um}else m=f.nodeName,!m||m.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?h&&Fc(h.elementType)&&(N=vr):N=om;if(N&&(N=N(n,h))){hr(S,N,a,p);break n}P&&P(n,f,h)}switch(P=h?ml(h):window,n){case"focusin":(dr(P)||P.contentEditable==="true")&&(De=P,fu=h,_l=null);break;case"focusout":_l=fu=De=null;break;case"mousedown":du=!0;break;case"contextmenu":case"mouseup":case"dragend":du=!1,Ar(S,a,p);break;case"selectionchange":if(dm)break;case"keydown":case"keyup":Ar(S,a,p)}var R;if(cu)n:{switch(n){case"compositionstart":var B="onCompositionStart";break n;case"compositionend":B="onCompositionEnd";break n;case"compositionupdate":B="onCompositionUpdate";break n}B=void 0}else je?rr(n,a)&&(B="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(B="onCompositionStart");B&&(ur&&a.locale!=="ko"&&(je||B!=="onCompositionStart"?B==="onCompositionEnd"&&je&&(R=ar()):(Aa=p,tu="value"in Aa?Aa.value:Aa.textContent,je=!0)),P=_c(h,B),0<P.length&&(B=new ir(B,n,null,a,p),S.push({event:B,listeners:P}),R?B.data=R:(R=fr(a),R!==null&&(B.data=R)))),(R=am?em(n,a):lm(n,a))&&(B=_c(h,"onBeforeInput"),0<B.length&&(P=new ir("onBeforeInput","beforeinput",null,a,p),S.push({event:P,listeners:B}),P.data=R)),ag(S,n,h,a,p)}th(S,t)})}function Wl(n,t,a){return{instance:n,listener:t,currentTarget:a}}function _c(n,t){for(var a=t+"Capture",e=[];n!==null;){var l=n,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=gl(n,a),l!=null&&e.unshift(Wl(n,l,i)),l=gl(n,t),l!=null&&e.push(Wl(n,l,i))),n.tag===3)return e;n=n.return}return[]}function cg(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function eh(n,t,a,e,l){for(var i=t._reactName,c=[];a!==null&&a!==e;){var u=a,s=u.alternate,h=u.stateNode;if(u=u.tag,s!==null&&s===e)break;u!==5&&u!==26&&u!==27||h===null||(s=h,l?(h=gl(a,i),h!=null&&c.unshift(Wl(a,h,s))):l||(h=gl(a,i),h!=null&&c.push(Wl(a,h,s)))),a=a.return}c.length!==0&&n.push({event:t,listeners:c})}var ug=/\r\n?/g,sg=/\u0000|\uFFFD/g;function lh(n){return(typeof n=="string"?n:""+n).replace(ug,`
`).replace(sg,"")}function ih(n,t){return t=lh(t),lh(n)===t}function mn(n,t,a,e,l,i){switch(a){case"children":if(typeof e=="string")t==="body"||t==="textarea"&&e===""||ze(n,e);else if(typeof e=="number"||typeof e=="bigint")t!=="body"&&ze(n,""+e);else return;break;case"className":pi(n,"class",e);break;case"tabIndex":pi(n,"tabindex",e);break;case"dir":case"role":case"viewBox":case"width":case"height":pi(n,a,e);break;case"style":Po(n,e,i);return;case"data":if(t!=="object"){pi(n,"data",e);break}case"src":case"href":if(e===""&&(t!=="a"||a!=="href")){n.removeAttribute(a);break}if(e==null||typeof e=="function"||typeof e=="symbol"||typeof e=="boolean"){n.removeAttribute(a);break}e=yi(e),n.setAttribute(a,e);break;case"action":case"formAction":if(typeof e=="function"){n.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&mn(n,t,"name",l.name,l,null),mn(n,t,"formEncType",l.formEncType,l,null),mn(n,t,"formMethod",l.formMethod,l,null),mn(n,t,"formTarget",l.formTarget,l,null)):(mn(n,t,"encType",l.encType,l,null),mn(n,t,"method",l.method,l,null),mn(n,t,"target",l.target,l,null)));if(e==null||typeof e=="symbol"||typeof e=="boolean"){n.removeAttribute(a);break}e=yi(e),n.setAttribute(a,e);break;case"onClick":e!=null&&(n.onclick=Jt);return;case"onScroll":e!=null&&F("scroll",n);return;case"onScrollEnd":e!=null&&F("scrollend",n);return;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(g(61));if(a=e.__html,a!=null){if(l.children!=null)throw Error(g(60));(i!=null?i.__html:void 0)!==a&&(n.innerHTML=a)}}break;case"multiple":n.multiple=e&&typeof e!="function"&&typeof e!="symbol";break;case"muted":n.muted=e&&typeof e!="function"&&typeof e!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(e==null||typeof e=="function"||typeof e=="boolean"||typeof e=="symbol"){n.removeAttribute("xlink:href");break}a=yi(e),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":e!=null&&typeof e!="function"&&typeof e!="symbol"?n.setAttribute(a,e):n.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":e&&typeof e!="function"&&typeof e!="symbol"?n.setAttribute(a,""):n.removeAttribute(a);break;case"capture":case"download":e===!0?n.setAttribute(a,""):e!==!1&&e!=null&&typeof e!="function"&&typeof e!="symbol"?n.setAttribute(a,e):n.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":e!=null&&typeof e!="function"&&typeof e!="symbol"&&!isNaN(e)&&1<=e?n.setAttribute(a,e):n.removeAttribute(a);break;case"rowSpan":case"start":e==null||typeof e=="function"||typeof e=="symbol"||isNaN(e)?n.removeAttribute(a):n.setAttribute(a,e);break;case"popover":F("beforetoggle",n),F("toggle",n),gi(n,"popover",e);break;case"xlinkActuate":ca(n,"http://www.w3.org/1999/xlink","xlink:actuate",e);break;case"xlinkArcrole":ca(n,"http://www.w3.org/1999/xlink","xlink:arcrole",e);break;case"xlinkRole":ca(n,"http://www.w3.org/1999/xlink","xlink:role",e);break;case"xlinkShow":ca(n,"http://www.w3.org/1999/xlink","xlink:show",e);break;case"xlinkTitle":ca(n,"http://www.w3.org/1999/xlink","xlink:title",e);break;case"xlinkType":ca(n,"http://www.w3.org/1999/xlink","xlink:type",e);break;case"xmlBase":ca(n,"http://www.w3.org/XML/1998/namespace","xml:base",e);break;case"xmlLang":ca(n,"http://www.w3.org/XML/1998/namespace","xml:lang",e);break;case"xmlSpace":ca(n,"http://www.w3.org/XML/1998/namespace","xml:space",e);break;case"is":gi(n,"is",e);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=Nv.get(a)||a,gi(n,a,e);else return}cn=!0}function ks(n,t,a,e,l,i){switch(a){case"style":Po(n,e,i);return;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(g(61));if(a=e.__html,a!=null){if(l.children!=null)throw Error(g(60));(i!=null?i.__html:void 0)!==a&&(n.innerHTML=a)}}break;case"children":if(typeof e=="string")ze(n,e);else if(typeof e=="number"||typeof e=="bigint")ze(n,""+e);else return;break;case"onScroll":e!=null&&F("scroll",n);return;case"onScrollEnd":e!=null&&F("scrollend",n);return;case"onClick":e!=null&&(n.onclick=Jt);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Vo.hasOwnProperty(a))n:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),i=a.slice(2,l?a.length-7:void 0),t=n[rt]||null,t=t!=null?t[a]:null,typeof t=="function"&&n.removeEventListener(i,t,l),typeof e=="function")){typeof t!="function"&&t!==null&&(a in n?n[a]=null:n.hasAttribute(a)&&n.removeAttribute(a)),n.addEventListener(i,e,l);break n}cn=!0,a in n?n[a]=e:e===!0?n.setAttribute(a,""):gi(n,a,e)}return}cn=!0}function Wn(n,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":F("error",n),F("load",n);var e=!1,l=!1,i;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];if(c!=null)switch(i){case"src":e=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(g(137,t));default:mn(n,t,i,c,a,null)}}l&&mn(n,t,"srcSet",a.srcSet,a,null),e&&mn(n,t,"src",a.src,a,null);return;case"input":F("invalid",n);var u=i=c=l=null,s=null,h=null;for(e in a)if(a.hasOwnProperty(e)){var p=a[e];if(p!=null)switch(e){case"name":l=p;break;case"type":c=p;break;case"checked":s=p;break;case"defaultChecked":h=p;break;case"value":i=p;break;case"defaultValue":u=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(g(137,t));break;default:mn(n,t,e,p,a,null)}}Wo(n,i,u,s,h,c,l,!1);return;case"select":F("invalid",n),e=c=i=null;for(l in a)if(a.hasOwnProperty(l)&&(u=a[l],u!=null))switch(l){case"value":i=u;break;case"defaultValue":c=u;break;case"multiple":e=u;default:mn(n,t,l,u,a,null)}t=i,a=c,n.multiple=!!e,t!=null?_e(n,!!e,t,!1):a!=null&&_e(n,!!e,a,!0);return;case"textarea":F("invalid",n),i=l=e=null;for(c in a)if(a.hasOwnProperty(c)&&(u=a[c],u!=null))switch(c){case"value":e=u;break;case"defaultValue":l=u;break;case"children":i=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(g(91));break;default:mn(n,t,c,u,a,null)}$o(n,e,l,i);return;case"option":for(s in a)if(a.hasOwnProperty(s)&&(e=a[s],e!=null))switch(s){case"selected":n.selected=e&&typeof e!="function"&&typeof e!="symbol";break;default:mn(n,t,s,e,a,null)}return;case"dialog":F("beforetoggle",n),F("toggle",n),F("cancel",n),F("close",n);break;case"iframe":case"object":F("load",n);break;case"video":case"audio":for(e=0;e<kl.length;e++)F(kl[e],n);break;case"image":F("error",n),F("load",n);break;case"details":F("toggle",n);break;case"embed":case"source":case"link":F("error",n),F("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in a)if(a.hasOwnProperty(h)&&(e=a[h],e!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(g(137,t));default:mn(n,t,h,e,a,null)}return;default:if(Fc(t)){for(p in a)a.hasOwnProperty(p)&&(e=a[p],e!==void 0&&ks(n,t,p,e,a,void 0));return}}for(u in a)a.hasOwnProperty(u)&&(e=a[u],e!=null&&mn(n,t,u,e,a,null))}var og={};function rg(n,t,a,e){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,c=null,u=null,s=null,h=null,p=null;for(m in a){var S=a[m];if(a.hasOwnProperty(m)&&S!=null)switch(m){case"checked":break;case"value":break;case"defaultValue":s=S;default:e.hasOwnProperty(m)||mn(n,t,m,null,e,S)}}for(var f in e){var m=e[f];if(S=a[f],e.hasOwnProperty(f)&&(m!=null||S!=null))switch(f){case"type":m!==S&&(cn=!0),i=m;break;case"name":m!==S&&(cn=!0),l=m;break;case"checked":m!==S&&(cn=!0),h=m;break;case"defaultChecked":m!==S&&(cn=!0),p=m;break;case"value":m!==S&&(cn=!0),c=m;break;case"defaultValue":m!==S&&(cn=!0),u=m;break;case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(g(137,t));break;default:m!==S&&mn(n,t,f,m,e,S)}}kc(n,c,u,s,h,p,i,l);return;case"select":m=c=u=f=null;for(i in a)if(s=a[i],a.hasOwnProperty(i)&&s!=null)switch(i){case"value":break;case"multiple":m=s;default:e.hasOwnProperty(i)||mn(n,t,i,null,e,s)}for(l in e)if(i=e[l],s=a[l],e.hasOwnProperty(l)&&(i!=null||s!=null))switch(l){case"value":i!==s&&(cn=!0),f=i;break;case"defaultValue":i!==s&&(cn=!0),u=i;break;case"multiple":i!==s&&(cn=!0),c=i;default:i!==s&&mn(n,t,l,i,e,s)}t=u,a=c,e=m,f!=null?_e(n,!!a,f,!1):!!e!=!!a&&(t!=null?_e(n,!!a,t,!0):_e(n,!!a,a?[]:"",!1));return;case"textarea":m=f=null;for(u in a)if(l=a[u],a.hasOwnProperty(u)&&l!=null&&!e.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:mn(n,t,u,null,e,l)}for(c in e)if(l=e[c],i=a[c],e.hasOwnProperty(c)&&(l!=null||i!=null))switch(c){case"value":l!==i&&(cn=!0),f=l;break;case"defaultValue":l!==i&&(cn=!0),m=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(g(91));break;default:l!==i&&mn(n,t,c,l,e,i)}Fo(n,f,m);return;case"option":for(var _ in a)if(f=a[_],a.hasOwnProperty(_)&&f!=null&&!e.hasOwnProperty(_))switch(_){case"selected":n.selected=!1;break;default:mn(n,t,_,null,e,f)}for(s in e)if(f=e[s],m=a[s],e.hasOwnProperty(s)&&f!==m&&(f!=null||m!=null))switch(s){case"selected":f!==m&&(cn=!0),n.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:mn(n,t,s,f,e,m)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var j in a)f=a[j],a.hasOwnProperty(j)&&f!=null&&!e.hasOwnProperty(j)&&mn(n,t,j,null,e,f);for(h in e)if(f=e[h],m=a[h],e.hasOwnProperty(h)&&f!==m&&(f!=null||m!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(g(137,t));break;default:mn(n,t,h,f,e,m)}return;default:if(Fc(t)){for(var Z in a)f=a[Z],a.hasOwnProperty(Z)&&f!==void 0&&!e.hasOwnProperty(Z)&&ks(n,t,Z,void 0,e,f);for(p in e)f=e[p],m=a[p],!e.hasOwnProperty(p)||f===m||f===void 0&&m===void 0||ks(n,t,p,f,e,m);return}}for(var d in a)f=a[d],a.hasOwnProperty(d)&&f!=null&&!e.hasOwnProperty(d)&&mn(n,t,d,null,e,f);for(S in e)f=e[S],m=a[S],!e.hasOwnProperty(S)||f===m||f==null&&m==null||mn(n,t,S,f,e,m)}function ch(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function fg(){if(typeof performance.getEntriesByType=="function"){for(var n=0,t=0,a=performance.getEntriesByType("resource"),e=0;e<a.length;e++){var l=a[e],i=l.transferSize,c=l.initiatorType,u=l.duration;if(i&&u&&ch(c)){for(c=0,u=l.responseEnd,e+=1;e<a.length;e++){var s=a[e],h=s.startTime;if(h>u)break;var p=s.transferSize,S=s.initiatorType;p&&ch(S)&&(s=s.responseEnd,c+=p*(s<u?1:(u-h)/(s-h)))}if(--e,t+=8*(i+c)/(l.duration/1e3),n++,10<n)break}}if(0<n)return t/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var Ws=null,Fs=null;function Fl(n){return n.nodeType===9?n:n.ownerDocument}function uh(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sh(n,t){if(n===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&t==="foreignObject"?0:n}function oh(n,t,a,e){return a=Fl(a).createElement(n),a[Qn]=e,a[rt]=t,Wn(a,n,t),Bn(a),a}function $s(n,t){return n==="textarea"||n==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Is=null;function dg(){var n=window.event;return n&&n.type==="popstate"?n===Is?!1:(Is=n,!0):(Is=null,!1)}var Ps=typeof setTimeout=="function"?setTimeout:void 0,hg=typeof clearTimeout=="function"?clearTimeout:void 0,rh=typeof Promise=="function"?Promise:void 0,fh=typeof requestAnimationFrame=="function"?requestAnimationFrame:Ps,vg=typeof queueMicrotask=="function"?queueMicrotask:typeof rh<"u"?function(n){return rh.resolve(null).then(n).catch(mg)}:Ps;function mg(n){setTimeout(function(){throw n})}function Va(n){return n==="head"}function dh(n,t){var a=t,e=0;do{var l=a.nextSibling;if(n.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(e===0){n.removeChild(l),sl(t);return}e--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")e++;else if(a==="html")uo(n.ownerDocument.documentElement);else if(a==="head"){a=n.ownerDocument.head,uo(a);for(var i=a.firstChild;i;){var c=i.nextSibling,u=i.nodeName;i[vl]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=c}}else a==="body"&&uo(n.ownerDocument.body);a=l}while(a);sl(t)}function hh(n,t){var a=n;n=0;do{var e=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),e&&e.nodeType===8)if(a=e.data,a==="/$"){if(n===0)break;n--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||n++;a=e}while(a)}function vh(n,t,a){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,n.style.viewTransitionName=t,a!=null&&(n.style.viewTransitionClass=a),a=getComputedStyle(n),a.display==="inline"){if(t=n.getClientRects(),t.length===1)var e=1;else for(var l=e=0;l<t.length;l++){var i=t[l];0<i.width&&0<i.height&&e++}e===1&&(n=n.style,n.display=t.length===1?"inline-block":"block",n.marginTop="-"+a.paddingTop,n.marginBottom="-"+a.paddingBottom)}}function mh(n,t){n=n.style,t=t.style;var a=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;n.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,n.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),n.display==="inline-block"&&(t==null?n.display=n.margin="":(a=t.display,n.display=a==null||typeof a=="boolean"?"":a,a=t.margin,a!=null?n.margin=a:(a=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],n.marginTop=a==null||typeof a=="boolean"?"":a,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],n.marginBottom=t==null||typeof t=="boolean"?"":t)))}function gg(n,t,a){return a=a.ownerDocument.defaultView,{rect:n,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=n.bottom&&0<=n.right&&n.top<=a.innerHeight&&n.left<=a.innerWidth}}function no(n){var t=n.getBoundingClientRect(),a=getComputedStyle(n);return gg(t,a,n)}function pg(n){return n.documentElement.clientHeight}function yg(n){this.addEventListener("load",n),this.addEventListener("error",n)}function bg(n,t,a,e,l,i,c,u,s){var h=t.nodeType===9?t:t.ownerDocument;try{var p=h.startViewTransition({update:function(){var f=h.defaultView,m=f.navigation&&f.navigation.transition,_=h.fonts.status;e();var j=[];if(_==="loaded"&&(pg(h),h.fonts.status==="loading"&&j.push(h.fonts.ready)),_=j.length,n!==null)for(var Z=n.suspenseyImages,d=0,o=0;o<Z.length;o++){var v=Z[o];if(!v.complete){var b=v.getBoundingClientRect();if(0<b.bottom&&0<b.right&&b.top<f.innerHeight&&b.left<f.innerWidth){if(d+=qh(v),d>Nc){j.length=_;break}v=new Promise(yg.bind(v)),j.push(v)}}}if(0<j.length)return f=Promise.race([Promise.all(j),new Promise(function(N){return setTimeout(N,500)})]).then(l,l),(m?Promise.allSettled([m.finished,f]):f).then(i,i);if(l(),m)return m.finished.then(i,i);i()},types:a});h.__reactViewTransition=p;var S=[];return p.ready.then(function(){for(var f=h.documentElement.getAnimations({subtree:!0}),m=0;m<f.length;m++){var _=f[m],j=_.effect,Z=j.pseudoElement;if(Z!=null&&Z.startsWith("::view-transition")){S.push(_),_=j.getKeyframes();for(var d=Z=void 0,o=!0,v=0;v<_.length;v++){var b=_[v],N=b.width;if(Z===void 0)Z=N;else if(Z!==N){o=!1;break}if(N=b.height,d===void 0)d=N;else if(d!==N){o=!1;break}delete b.width,delete b.height,b.transform==="none"&&delete b.transform}o&&Z!==void 0&&d!==void 0&&(j.setKeyframes(_),o=getComputedStyle(j.target,j.pseudoElement),o.width!==Z||o.height!==d)&&(o=_[0],o.width=Z,o.height=d,o=_[_.length-1],o.width=Z,o.height=d,j.setKeyframes(_))}}c()},function(f){h.__reactViewTransition===p&&(h.__reactViewTransition=null);try{if(typeof f=="object"&&f!==null)switch(f.name){case"InvalidStateError":(f.message==="View transition was skipped because document visibility state is hidden."||f.message==="Skipping view transition because document visibility state has become hidden."||f.message==="Skipping view transition because viewport size changed."||f.message==="Transition was aborted because of invalid state")&&(f=null)}f!==null&&s(f)}finally{e(),l(),c()}}),p.finished.finally(function(){for(var f=0;f<S.length;f++)S[f].cancel();h.__reactViewTransition===p&&(h.__reactViewTransition=null),u()}),p}catch{return e(),l(),c(),null}}function pe(n,t){this._scope=document.documentElement,this._selector="::view-transition-"+n+"("+t+")"}pe.prototype.animate=function(n,t){return t=typeof t=="number"?{duration:t}:J({},t),t.pseudoElement=this._selector,this._scope.animate(n,t)},pe.prototype.getAnimations=function(){for(var n=this._scope,t=this._selector,a=n.getAnimations({subtree:!0}),e=[],l=0;l<a.length;l++){var i=a[l].effect;i!==null&&i.target===n&&i.pseudoElement===t&&e.push(a[l])}return e},pe.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function gh(n){return{name:n,group:new pe("group",n),imagePair:new pe("image-pair",n),old:new pe("old",n),new:new pe("new",n)}}function Nt(n){this._fragmentFiber=n,this._observers=this._eventListeners=null}Nt.prototype.addEventListener=function(n,t,a){var e=null,l=null;if(!(a!=null&&typeof a!="boolean"&&(e=a.signal||null,e!==null&&e.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var i=this._eventListeners;if(yh(i,n,t,a)===-1){var c=this,u=t;a!=null&&typeof a!="boolean"&&a.once===!0&&(u=function(s){c.removeEventListener(n,t,a),typeof t=="function"?t.call(this,s):t.handleEvent(s)}),e!==null&&(l=c.removeEventListener.bind(c,n,t,a),e.addEventListener("abort",l,{once:!0}),l=e.removeEventListener.bind(e,"abort",l)),e=al(a),i.push({type:n,listener:t,optionsOrUseCapture:a,attachedListener:u,cleanup:l}),y(this._fragmentFiber.child,!1,Sg,n,u,e)}this._eventListeners=i}};function Sg(n,t,a,e){return pn(n).addEventListener(t,a,e),!1}Nt.prototype.removeEventListener=function(n,t,a){var e=this._eventListeners;if(e!==null&&(t=yh(e,n,t,a),t!==-1)){var l=e[t];a=l.attachedListener;var i=l.cleanup;l=al(l.optionsOrUseCapture),y(this._fragmentFiber.child,!1,Tg,n,a,l),e.splice(t,1),i!==null&&i()}};function Tg(n,t,a,e){return pn(n).removeEventListener(t,a,e),!1}function al(n){return n!=null&&typeof n!="boolean"&&(n.once===!0||n.signal instanceof AbortSignal)?{capture:n.capture,passive:n.passive}:n}function ph(n){return n==null?"c=0":typeof n=="boolean"?"c="+(n?"1":"0"):"c="+(n.capture?"1":"0")}function yh(n,t,a,e){if(n.length===0)return-1;e=ph(e);for(var l=0;l<n.length;l++){var i=n[l];if(i.type===t&&i.listener===a&&ph(i.optionsOrUseCapture)===e)return l}return-1}Nt.prototype.dispatchEvent=function(n){var t=q(this._fragmentFiber);if(t===null)return!0;t=pn(t);var a=this._eventListeners;if(a!==null&&0<a.length||!n.bubbles){var e=t.nodeType===9?t.createComment(""):document.createTextNode("");if(a)for(var l=0;l<a.length;l++){var i=a[l];e.addEventListener(i.type,i.attachedListener,al(i.optionsOrUseCapture))}if(t.appendChild(e),n=e.dispatchEvent(n),a)for(l=0;l<a.length;l++)i=a[l],e.removeEventListener(i.type,i.attachedListener,al(i.optionsOrUseCapture));return t.removeChild(e),n}return t.dispatchEvent(n)},Nt.prototype.focus=function(n){y(this._fragmentFiber.child,!0,bh,n,void 0,void 0)};function bh(n,t){return n.tag===6?!1:(n=pn(n),Rg(n,t))}Nt.prototype.focusLast=function(n){var t=[];y(this._fragmentFiber.child,!0,to,t,void 0,void 0);for(var a=t.length-1;0<=a&&!bh(t[a],n);a--);};function to(n,t){return t.push(n),!1}Nt.prototype.blur=function(){var n=q(this._fragmentFiber);n!==null&&(n=pn(n),n=Fl(n).activeElement,n!==null&&y(this._fragmentFiber.child,!1,Eg,n,void 0,void 0))};function Eg(n,t){return n.tag===6?!1:(n=pn(n),n===t||n.contains(t)?(t.blur(),!0):!1)}Nt.prototype.observeUsing=function(n){this._observers===null&&(this._observers=new Set),this._observers.add(n),y(this._fragmentFiber.child,!1,Ag,n,void 0,void 0)};function Ag(n,t){return n.tag===6||(n=pn(n),t.observe(n)),!1}Nt.prototype.unobserveUsing=function(n){var t=this._observers;if(t!==null&&t.has(n)){t.delete(n),y(this._fragmentFiber.child,!1,_g,n,void 0,void 0);for(var a=t=0;a<Vt.length;a++){var e=Vt[a];e.fragmentInstance===this&&e.observer===n?n.unobserve(e.instance):Vt[t++]=e}Vt.length=t}};function _g(n,t){return n.tag===6||(n=pn(n),t.unobserve(n)),!1}var Vt=[],ao=!1;function zg(n,t,a){Vt.push({fragmentInstance:n,observer:t,instance:a}),ao||(ao=!0,Ug(function(){ao=!1;var e=Vt;Vt=[];for(var l=0;l<e.length;l++){var i=e[l];i.observer.unobserve(i.instance)}}))}Nt.prototype.getClientRects=function(){var n=[];return y(this._fragmentFiber.child,!1,Og,n,void 0,void 0),n};function Og(n,t){if(n.tag===6){n=n.stateNode;var a=n.ownerDocument.createRange();a.selectNodeContents(n),t.push.apply(t,a.getClientRects())}else n=pn(n),t.push.apply(t,n.getClientRects());return!1}Nt.prototype.getRootNode=function(n){var t=q(this._fragmentFiber);return t===null?this:pn(t).getRootNode(n)},Nt.prototype.compareDocumentPosition=function(n){var t=q(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];y(this._fragmentFiber.child,!1,to,a,void 0,void 0);var e=pn(t);if(a.length===0){if(a=e,_n(this._fragmentFiber)){n:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break n}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(a=t)}t=this._fragmentFiber;var l=e=a.compareDocumentPosition(n);return a===n?l=Node.DOCUMENT_POSITION_CONTAINS:e&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=$n(t)[1],a===null?l=Node.DOCUMENT_POSITION_PRECEDING:(n=pn(a).compareDocumentPosition(n),l=n===0||n&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=pn(a[0]),l=pn(a[a.length-1]);var i=_n(this._fragmentFiber)?t.parentElement:e;if(i==null)return Node.DOCUMENT_POSITION_DISCONNECTED;e=i.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,i=i.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var c=t.compareDocumentPosition(n),u=l.compareDocumentPosition(n),s=c&Node.DOCUMENT_POSITION_CONTAINED_BY||u&Node.DOCUMENT_POSITION_CONTAINED_BY;return u=e&&i&&c&Node.DOCUMENT_POSITION_FOLLOWING&&u&Node.DOCUMENT_POSITION_PRECEDING,t=e&&t===n||i&&l===n||s||u?Node.DOCUMENT_POSITION_CONTAINED_BY:!e&&t===n||!i&&l===n?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:c,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Ng(t,this._fragmentFiber,a[0],a[a.length-1],n)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Ng(n,t,a,e,l){var i=Fa(l);if(n&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!i)n:{for(;i!==null;){if(i.tag===7&&(i===t||i.alternate===t)){a=!0;break n}i=i.return}a=!1}return a}if(n&Node.DOCUMENT_POSITION_CONTAINS){if(i===null)return i=l.ownerDocument,l===i||l===i.documentElement||l===i.body;n:{for(i=t,t=q(t);i!==null;){if(!(i.tag!==5&&i.tag!==3&&i.tag!==27||i!==t&&i.alternate!==t)){i=!0;break n}i=i.return}i=!1}return i}return n&Node.DOCUMENT_POSITION_PRECEDING?((t=!!i)&&!(t=i===a)&&(t=Sn(a,i,gt),t===null?t=!1:(y(t,!0,ut,i,a),i=Yn,Yn=null,t=i!==null)),t):n&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!i)&&!(t=i===e)&&(t=Sn(e,i,gt),t===null?t=!1:(y(t,!0,Pn,i,e),i=Yn,$=Yn=null,t=i!==null)),t):!1}function Sh(n,t){var a=n.ownerDocument.createRange();a.selectNodeContents(n),n=a.getBoundingClientRect(),window.scrollTo(window.scrollX+n.left,t?window.scrollY+n.top:window.scrollY+n.bottom-window.innerHeight)}Nt.prototype.scrollIntoView=function(n){if(typeof n=="object")throw Error(g(566));var t=[];y(this._fragmentFiber.child,!1,to,t,void 0,void 0);var a=n!==!1;if(t.length===0){var e=$n(this._fragmentFiber);if(e=a?e[1]||e[0]||q(this._fragmentFiber):e[0]||e[1],e===null)return;if(e.tag===6){n=pn(e),Sh(n,a);return}if(e=pn(e),e.nodeType!==9){if(e.nodeType===11){a="host"in e?e.host:null,a!==null&&a.scrollIntoView(n);return}e.scrollIntoView(n)}}for(e=a?t.length-1:0;e!==(a?-1:t.length);){var l=t[e];l.tag===6?(l=pn(l),Sh(l,a)):pn(l).scrollIntoView(n),e+=a?-1:1}};function jg(n,t){return n=pn(n),Th(n,t),!1}function Th(n,t){n.reactFragments==null&&(n.reactFragments=new Set),n.reactFragments.add(t)}function Eh(n,t){var a=t._eventListeners;if(a!==null)for(var e=0;e<a.length;e++){var l=a[e];n.addEventListener(l.type,l.attachedListener,al(l.optionsOrUseCapture))}n.nodeType!==3&&(a=t._observers,a!==null&&a.forEach(function(i){for(var c=0,u=0;u<Vt.length;u++){var s=Vt[u];(s.fragmentInstance!==t||s.observer!==i||s.instance!==n)&&(Vt[c++]=s)}Vt.length=c,i.observe(n)}),Th(n,t))}function Dg(n,t){var a=t._eventListeners;if(a!==null)for(var e=0;e<a.length;e++){var l=a[e];n.removeEventListener(l.type,l.attachedListener,al(l.optionsOrUseCapture))}n.nodeType!==3&&(a=t._observers,a!==null&&a.forEach(function(i){typeof i.rootMargin=="string"?zg(t,i,n):i.unobserve(n)}),n.reactFragments!=null&&n.reactFragments.delete(t))}function eo(n){var t=n.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":eo(a),mi(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}n.removeChild(a)}}function Mg(n,t,a,e){for(;n.nodeType===1;){var l=a;if(n.nodeName.toLowerCase()!==t.toLowerCase()){if(!e&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(e){if(!n[vl])switch(t){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(i=n.getAttribute("rel"),i==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(i!==l.rel||n.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||n.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||n.getAttribute("title")!==(l.title==null?null:l.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(i=n.getAttribute("src"),(i!==(l.src==null?null:l.src)||n.getAttribute("type")!==(l.type==null?null:l.type)||n.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(t==="input"&&n.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&n.getAttribute("name")===i)return n}else return n;if(n=Ht(n.nextSibling),n===null)break}return null}function Cg(n,t,a){if(t==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=Ht(n.nextSibling),n===null))return null;return n}function Ah(n,t){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!t||(n=Ht(n.nextSibling),n===null))return null;return n}function lo(n){return n.data==="$?"||n.data==="$~"}function io(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function wg(n,t){var a=n.ownerDocument;if(n.data==="$~")n._reactRetry=t;else if(n.data!=="$?"||a.readyState!=="loading")t();else{var e=function(){t(),a.removeEventListener("DOMContentLoaded",e)};a.addEventListener("DOMContentLoaded",e),n._reactRetry=e}}function Ht(n){for(;n!=null;n=n.nextSibling){var t=n.nodeType;if(t===1||t===3)break;if(t===8){if(t=n.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return n}var co=null;function _h(n){n=n.nextSibling;for(var t=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"||a==="/&"){if(t===0)return Ht(n.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}n=n.nextSibling}return null}function zh(n){n=n.previousSibling;for(var t=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return n;t--}else a!=="/$"&&a!=="/&"||t++}n=n.previousSibling}return null}function Rg(n,t){function a(){e=!0}if(n.ownerDocument.activeElement===n)return!0;var e=!1;try{n.ownerDocument.addEventListener("focus",a,!0),(n.focus||HTMLElement.prototype.focus).call(n,t)}finally{n.ownerDocument.removeEventListener("focus",a,!0)}return e}function Ug(n){fh(function(){fh(function(t){return n(t)})})}function Oh(n,t,a){switch(t=Fl(a),n){case"html":if(n=t.documentElement,!n)throw Error(g(452));return n;case"head":if(n=t.head,!n)throw Error(g(453));return n;case"body":if(n=t.body,!n)throw Error(g(454));return n;default:throw Error(g(451))}}function Nh(n,t,a){for(var e in a){var l=a[e];a.hasOwnProperty(e)&&l!=null&&mn(n,t,e,null,og,l)}a.dangerouslySetInnerHTML!=null&&(n.textContent=""),n.onclick===Jt&&(n.onclick=null),mi(n)}function uo(n){for(var t=n.attributes;t.length;)n.removeAttributeNode(t[0]);mi(n)}var qt=new Map,jh=new Set;function $l(n){if(typeof n.getRootNode=="function"){var t=n.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return n.nodeType===9?n:n.ownerDocument}var ba=G.d;G.d={f:Hg,r:qg,D:xg,C:Yg,L:Bg,m:Gg,X:Xg,S:Lg,M:Vg};function Hg(){var n=ba.f(),t=yc();return n||t}function qg(n){var t=Te(n);t!==null&&t.tag===5&&t.type==="form"?Mf(t):ba.r(n)}var el=typeof document>"u"?null:document;function Dh(n,t,a){var e=el;if(e&&typeof t=="string"&&t){var l=jt(t);l='link[rel="'+n+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),jh.has(l)||(jh.add(l),n={rel:n,crossOrigin:a,href:t},e.querySelector(l)===null&&(t=e.createElement("link"),Wn(t,"link",n),Bn(t),e.head.appendChild(t)))}}function xg(n){ba.D(n),Dh("dns-prefetch",n,null)}function Yg(n,t){ba.C(n,t),Dh("preconnect",n,t)}function Bg(n,t,a){ba.L(n,t,a);var e=el;if(e&&n&&t){var l='link[rel="preload"][as="'+jt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+jt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+jt(a.imageSizes)+'"]')):l+='[href="'+jt(n)+'"]';var i=l;switch(t){case"style":i=ll(n);break;case"script":i=il(n)}if(!(qt.has(i)||(n=J({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:n,as:t},a),qt.set(i,n),e.querySelector(l)!==null||t==="style"&&e.querySelector(Il(i))||t==="script"&&e.querySelector(Pl(i))))){var c=e.createElement("link");Wn(c,"link",n),t==="style"&&(c[vi]=!0,c.onload=c.onerror=function(){Lo(c)}),Bn(c),e.head.appendChild(c)}}}function Gg(n,t){ba.m(n,t);var a=el;if(a&&n){var e=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+jt(e)+'"][href="'+jt(n)+'"]',i=l;switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=il(n)}if(!qt.has(i)&&(n=J({rel:"modulepreload",href:n},t),qt.set(i,n),a.querySelector(l)===null)){switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Pl(i)))return}e=a.createElement("link"),Wn(e,"link",n),Bn(e),a.head.appendChild(e)}}}function Lg(n,t,a){ba.S(n,t,a);var e=el;if(e&&n){var l=Ee(e).hoistableStyles,i=ll(n);t=t||"default";var c=l.get(i);if(!c){var u={loading:0,preload:null};if(c=e.querySelector(Il(i)))u.loading=5;else{n=J({rel:"stylesheet",href:n,"data-precedence":t},a),(a=qt.get(i))&&so(n,a);var s=c=e.createElement("link");Bn(s),Wn(s,"link",n),s._p=new Promise(function(h,p){s.onload=h,s.onerror=p}),s.addEventListener("load",function(){u.loading|=1}),s.addEventListener("error",function(){u.loading|=2}),u.loading|=4,zc(c,t,e)}c={type:"stylesheet",instance:c,count:1,state:u},l.set(i,c)}}}function Xg(n,t){ba.X(n,t);var a=el;if(a&&n){var e=Ee(a).hoistableScripts,l=il(n),i=e.get(l);i||(i=a.querySelector(Pl(l)),i||(n=J({src:n,async:!0},t),(t=qt.get(l))&&oo(n,t),i=a.createElement("script"),Bn(i),Wn(i,"link",n),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},e.set(l,i))}}function Vg(n,t){ba.M(n,t);var a=el;if(a&&n){var e=Ee(a).hoistableScripts,l=il(n),i=e.get(l);i||(i=a.querySelector(Pl(l)),i||(n=J({src:n,async:!0,type:"module"},t),(t=qt.get(l))&&oo(n,t),i=a.createElement("script"),Bn(i),Wn(i,"link",n),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},e.set(l,i))}}function Mh(n,t,a,e){var l=(l=Sa.current)?$l(l):null;if(!l)throw Error(g(446));switch(n){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=ll(a.href),t=Ee(l).hoistableStyles,e=t.get(a),e||(e={type:"style",instance:null,count:0,state:null},t.set(a,e)),e):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){n=ll(a.href);var i=Ee(l).hoistableStyles,c=i.get(n);if(c||(l=l.ownerDocument||l,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(n,c),(i=l.querySelector(Il(n)))?i._p||(c.instance=i,c.state.loading=5):(i=qt.get(n),i||(i={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},qt.set(n,i)),Qg(l,n,i,c.state))),t&&e===null)throw Error(g(528,""));return c}if(t&&e!==null)throw Error(g(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(a=il(a),t=Ee(l).hoistableScripts,e=t.get(a),e||(e={type:"script",instance:null,count:0,state:null},t.set(a,e)),e):{type:"void",instance:null,count:0,state:null};default:throw Error(g(444,n))}}function ll(n){return'href="'+jt(n)+'"'}function Il(n){return'link[rel="stylesheet"]['+n+"]"}function Ch(n){return J({},n,{"data-precedence":n.precedence,precedence:null})}function Qg(n,t,a,e){if(t=n.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[vi]!==!0){e.loading=1;return}}else t=n.createElement("link"),t[vi]=!0,t.onload=t.onerror=Lo.bind(null,t),Wn(t,"link",a),Bn(t),n.head.appendChild(t);e.preload=t,t.addEventListener("load",function(){return e.loading|=1}),t.addEventListener("error",function(){return e.loading|=2})}function il(n){return'[src="'+jt(n)+'"]'}function Pl(n){return"script[async]"+n}function wh(n,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var e=n.querySelector('style[data-href~="'+jt(a.href)+'"]');if(e)return t.instance=e,Bn(e),e;var l=J({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return e=(n.ownerDocument||n).createElement("style"),Bn(e),Wn(e,"style",l),zc(e,a.precedence,n),t.instance=e;case"stylesheet":l=ll(a.href);var i=n.querySelector(Il(l));if(i)return t.state.loading|=4,t.instance=i,Bn(i),i;e=Ch(a),(l=qt.get(l))&&so(e,l),i=(n.ownerDocument||n).createElement("link"),Bn(i);var c=i;return c._p=new Promise(function(u,s){c.onload=u,c.onerror=s}),Wn(i,"link",e),t.state.loading|=4,zc(i,a.precedence,n),t.instance=i;case"script":return i=il(a.src),(l=n.querySelector(Pl(i)))?(t.instance=l,Bn(l),l):(e=a,(l=qt.get(i))&&(e=J({},a),oo(e,l)),n=n.ownerDocument||n,l=n.createElement("script"),Bn(l),Wn(l,"link",e),n.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(g(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(e=t.instance,t.state.loading|=4,zc(e,a.precedence,n));return t.instance}function zc(n,t,a){for(var e=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=e.length?e[e.length-1]:null,i=l,c=0;c<e.length;c++){var u=e[c];if(u.dataset.precedence===t)i=u;else if(i!==l)break}i?i.parentNode.insertBefore(n,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(n,t.firstChild))}function so(n,t){n.crossOrigin==null&&(n.crossOrigin=t.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=t.referrerPolicy),n.title==null&&(n.title=t.title)}function oo(n,t){n.crossOrigin==null&&(n.crossOrigin=t.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=t.referrerPolicy),n.integrity==null&&(n.integrity=t.integrity)}var Oc=null;function Rh(n,t,a){if(Oc===null){var e=new Map,l=Oc=new Map;l.set(a,e)}else l=Oc,e=l.get(a),e||(e=new Map,l.set(a,e));if(e.has(n))return e;for(e.set(n,null),a=a.getElementsByTagName(n),l=0;l<a.length;l++){var i=a[l];if(!(i[vl]||i[Qn]||n==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(t)||"";c=n+c;var u=e.get(c);u?u.push(i):e.set(c,[i])}}return e}function ro(n,t,a){n=n.ownerDocument||n,n.head.insertBefore(a,t==="title"?n.querySelector("head > title"):null)}function Zg(n,t,a){if(a===1||t.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return n=t.disabled,typeof t.precedence=="string"&&n==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Uh(n,t){return n==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function Hh(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function qh(n){return(n.width||100)*(n.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function xh(n,t){typeof t.decode=="function"&&(n.imgCount++,t.complete||(n.imgBytes+=qh(t),n.suspenseyImages.push(t)),n=kg.bind(n),t.decode().then(n,n))}function Kg(n,t,a,e){if(a.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=ll(e.href),i=t.querySelector(Il(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(n.count++,n=ni.bind(n),t.then(n,n)),a.state.loading|=4,a.instance=i,Bn(i);return}i=t.ownerDocument||t,e=Ch(e),(l=qt.get(l))&&so(e,l),i=i.createElement("link"),Bn(i);var c=i;c._p=new Promise(function(u,s){c.onload=u,c.onerror=s}),Wn(i,"link",e),a.instance=i}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(n.count++,a=ni.bind(n),t.addEventListener("load",a),t.addEventListener("error",a))}}var Nc=0;function Jg(n,t){return n.stylesheets&&n.count===0&&Dc(n,n.stylesheets),0<n.count||0<n.imgCount?function(a){var e=setTimeout(function(){if(n.stylesheets&&Dc(n,n.stylesheets),n.unsuspend){var i=n.unsuspend;n.unsuspend=null,i()}},6e4+t);0<n.imgBytes&&Nc===0&&(Nc=62500*fg());var l=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&Dc(n,n.stylesheets),n.unsuspend)){var i=n.unsuspend;n.unsuspend=null,i()}},(n.imgBytes>Nc?50:800)+t);return n.unsuspend=a,function(){n.unsuspend=null,clearTimeout(e),clearTimeout(l)}}:null}function Yh(n){if(n.count===0&&(n.imgCount===0||!n.waitingForImages)){if(n.stylesheets)Dc(n,n.stylesheets);else if(n.unsuspend){var t=n.unsuspend;n.unsuspend=null,t()}}}function ni(){this.count--,Yh(this)}function kg(){this.imgCount--,Yh(this)}var jc=null;function Dc(n,t){n.stylesheets=null,n.unsuspend!==null&&(n.count++,jc=new Map,t.forEach(Wg,n),jc=null,ni.call(n))}function Wg(n,t){if(!(t.state.loading&4)){var a=jc.get(n);if(a)var e=a.get(null);else{a=new Map,jc.set(n,a);for(var l=n.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var c=l[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),e=c)}e&&a.set(null,e)}l=t.instance,c=l.getAttribute("data-precedence"),i=a.get(c)||e,i===e&&a.set(null,l),a.set(c,l),this.count++,e=ni.bind(this),l.addEventListener("load",e),l.addEventListener("error",e),i?i.parentNode.insertBefore(l,i.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(l,n.firstChild)),t.state.loading|=4}}var cl={$$typeof:Mn,Provider:null,Consumer:null,_currentValue:la,_currentValue2:la,_threadCount:0};function Fg(n,t,a,e,l,i,c,u,s){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qc(0),this.hiddenUpdates=Qc(null),this.identifierPrefix=e,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.transitionTypes=null,this.incompleteTransitions=new Map}function Bh(n,t,a,e,l,i,c,u,s,h,p,S){return n=new Fg(n,t,a,c,s,h,p,S,u),t=1,i===!0&&(t|=24),i=ft(3,null,null,t),n.current=i,i.stateNode=n,t=zu(),t.refCount++,n.pooledCache=t,t.refCount++,i.memoizedState={element:e,isDehydrated:a,cache:t},Du(i),n}function Gh(n){return n?(n=we,n):we}function Lh(n,t,a,e,l,i){l=Gh(l),e.context===null?e.context=l:e.pendingContext=l,e=Ca(t),e.payload={element:a},i=i===void 0?null:i,i!==null&&(e.callback=i),a=wa(n,e,t),a!==null&&(mt(a,n,t),Cl(a,n,t))}function Xh(n,t){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<t?a:t}}function fo(n,t){Xh(n,t),(n=n.alternate)&&Xh(n,t)}function Vh(n){if(n.tag===13||n.tag===31){var t=ne(n,67108864);t!==null&&mt(t,n,67108864),fo(n,67108864)}}function Qh(n){if(n.tag===13||n.tag===31){var t=Ot();t=Zc(t);var a=ne(n,t);a!==null&&mt(a,n,t),fo(n,t)}}var ul=!0;function $g(n,t,a,e){var l=D.T;D.T=null;var i=G.p;try{G.p=2,ho(n,t,a,e)}finally{G.p=i,D.T=l}}function Ig(n,t,a,e){var l=D.T;D.T=null;var i=G.p;try{G.p=8,ho(n,t,a,e)}finally{G.p=i,D.T=l}}function ho(n,t,a,e){if(ul){var l=vo(e);if(l===null)Js(n,t,e,Mc,a),Kh(n,e);else if(np(l,n,t,a,e))e.stopPropagation();else if(Kh(n,e),t&4&&-1<Pg.indexOf(n)){for(;l!==null;){var i=Te(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=Wa(i.pendingLanes);if(c!==0){var u=i;for(u.pendingLanes|=2,u.entangledLanes|=2;c;){var s=1<<31-bt(c);u.entanglements[1]|=s,c&=~s}ea(i),(sn&6)===0&&(mc=pt()+500,Jl(0))}}break;case 31:case 13:u=ne(i,2),u!==null&&mt(u,i,2),yc(),fo(i,2)}if(i=vo(e),i===null&&Js(n,t,e,Mc,a),i===l)break;l=i}l!==null&&e.stopPropagation()}else Js(n,t,e,null,a)}}function vo(n){return n=Ic(n),mo(n)}var Mc=null;function mo(n){if(Mc=null,n=Fa(n),n!==null){var t=z(n);if(t===null)n=null;else{var a=t.tag;if(a===13){if(n=gn(t),n!==null)return n;n=null}else if(a===31){if(n=xn(t),n!==null)return n;n=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;n=null}else t!==n&&(n=null)}}return Mc=n,null}function Zh(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(fv()){case Do:return 2;case Mo:return 8;case oi:case dv:return 32;case Co:return 268435456;default:return 32}default:return 32}}var go=!1,Qa=null,Za=null,Ka=null,ti=new Map,ai=new Map,Ja=[],Pg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Kh(n,t){switch(n){case"focusin":case"focusout":Qa=null;break;case"dragenter":case"dragleave":Za=null;break;case"mouseover":case"mouseout":Ka=null;break;case"pointerover":case"pointerout":ti.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ai.delete(t.pointerId)}}function ei(n,t,a,e,l,i){return n===null||n.nativeEvent!==i?(n={blockedOn:t,domEventName:a,eventSystemFlags:e,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Te(t),t!==null&&Vh(t)),n):(n.eventSystemFlags|=e,t=n.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),n)}function np(n,t,a,e,l){switch(t){case"focusin":return Qa=ei(Qa,n,t,a,e,l),!0;case"dragenter":return Za=ei(Za,n,t,a,e,l),!0;case"mouseover":return Ka=ei(Ka,n,t,a,e,l),!0;case"pointerover":var i=l.pointerId;return ti.set(i,ei(ti.get(i)||null,n,t,a,e,l)),!0;case"gotpointercapture":return i=l.pointerId,ai.set(i,ei(ai.get(i)||null,n,t,a,e,l)),!0}return!1}function Jh(n){var t=Fa(n.target);if(t!==null){var a=z(t);if(a!==null){if(t=a.tag,t===13){if(t=gn(a),t!==null){n.blockedOn=t,Yo(n.priority,function(){Qh(a)});return}}else if(t===31){if(t=xn(a),t!==null){n.blockedOn=t,Yo(n.priority,function(){Qh(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Cc(n){if(n.blockedOn!==null)return!1;for(var t=n.targetContainers;0<t.length;){var a=vo(n.nativeEvent);if(a===null){a=n.nativeEvent;var e=new a.constructor(a.type,a);$c=e,a.target.dispatchEvent(e),$c=null}else return t=Te(a),t!==null&&Vh(t),n.blockedOn=a,!1;t.shift()}return!0}function kh(n,t,a){Cc(n)&&a.delete(t)}function tp(){go=!1,Qa!==null&&Cc(Qa)&&(Qa=null),Za!==null&&Cc(Za)&&(Za=null),Ka!==null&&Cc(Ka)&&(Ka=null),ti.forEach(kh),ai.forEach(kh)}function wc(n,t){n.blockedOn===t&&(n.blockedOn=null,go||(go=!0,A.unstable_scheduleCallback(A.unstable_NormalPriority,tp)))}var Rc=null;function Wh(n){Rc!==n&&(Rc=n,A.unstable_scheduleCallback(A.unstable_NormalPriority,function(){Rc===n&&(Rc=null);for(var t=0;t<n.length;t+=3){var a=n[t],e=n[t+1],l=n[t+2];if(typeof e!="function"){if(mo(e||a)===null)continue;break}var i=Te(a);i!==null&&(n.splice(t,3),t-=3,Fu(i,{pending:!0,data:l,method:a.method,action:e},e,l))}}))}function sl(n){function t(s){return wc(s,n)}Qa!==null&&wc(Qa,n),Za!==null&&wc(Za,n),Ka!==null&&wc(Ka,n),ti.forEach(t),ai.forEach(t);for(var a=0;a<Ja.length;a++){var e=Ja[a];e.blockedOn===n&&(e.blockedOn=null)}for(;0<Ja.length&&(a=Ja[0],a.blockedOn===null);)Jh(a),a.blockedOn===null&&Ja.shift();if(a=(n.ownerDocument||n).$$reactFormReplay,a!=null)for(e=0;e<a.length;e+=3){var l=a[e],i=a[e+1],c=l[rt]||null;if(typeof i=="function")c||Wh(a);else if(c){var u=null;if(i&&i.hasAttribute("formAction")){if(l=i,c=i[rt]||null)u=c.formAction;else if(mo(l)!==null)continue}else u=c.action;typeof u=="function"?a[e+1]=u:(a.splice(e,3),e-=3),Wh(a)}}}function Fh(){function n(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return l=c})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),e||setTimeout(a,20)}function a(){if(!e&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var e=!1,l=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){e=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function po(n){this._internalRoot=n}Uc.prototype.render=po.prototype.render=function(n){var t=this._internalRoot;if(t===null)throw Error(g(409));var a=t.current,e=Ot();Lh(a,e,n,t,null,null)},Uc.prototype.unmount=po.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var t=n.containerInfo;Lh(n.current,2,null,n,null,null),yc(),t[Se]=null}};function Uc(n){this._internalRoot=n}Uc.prototype.unstable_scheduleHydration=function(n){if(n){var t=xo();n={blockedOn:null,target:n,priority:t};for(var a=0;a<Ja.length&&t!==0&&t<Ja[a].priority;a++);Ja.splice(a,0,n),a===0&&Jh(n)}};var $h=X.version;if($h!=="19.3.0")throw Error(g(527,$h,"19.3.0"));G.findDOMNode=function(n){var t=n._reactInternals;if(t===void 0)throw typeof n.render=="function"?Error(g(188)):(n=Object.keys(n).join(","),Error(g(268,n)));return n=dn(t),n=n!==null?U(n):null,n=n===null?null:n.stateNode,n};var ap={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hc.isDisabled&&Hc.supportsFiber)try{fl=Hc.inject(ap),yt=Hc}catch{}}return ii.createRoot=function(n,t){if(!H(n))throw Error(g(299));var a=!1,e="",l=Gf,i=Lf,c=Xf;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(e=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=Bh(n,1,!1,null,null,a,e,null,l,i,c,Fh),n[Se]=t.current,Ks(n),new po(t)},ii.hydrateRoot=function(n,t,a){if(!H(n))throw Error(g(299));var e=!1,l="",i=Gf,c=Lf,u=Xf,s=null;return a!=null&&(a.unstable_strictMode===!0&&(e=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.formState!==void 0&&(s=a.formState)),t=Bh(n,1,!0,t,a??null,e,l,s,i,c,u,Fh),t.context=Gh(null),a=t.current,e=Ot(),e=Zc(e),l=Ca(e),l.callback=null,wa(a,l,e),a=e,t.current.lanes=a,hl(t,a),ea(t),n[Se]=t.current,Ks(n),new Uc(t)},ii.version="19.3.0",ii}var uv;function vp(){if(uv)return So.exports;uv=1;function A(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A)}catch(X){console.error(X)}}return A(),So.exports=hp(),So.exports}var mp=vp();const gp=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Page Not Found | Suraj Public School</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <main>
      <section class="page-hero">
        <div class="container">
          <div class="eyebrow">404</div>
          <h1 class="display">
            This page took<br /><em>a different route.</em>
          </h1>
          <p>
            The page you are looking for may have moved or is not available.
          </p>
          <a class="btn btn--gold" href="index.html">Return home →</a>
        </div>
      </section>
    </main>
    <script src="js/script.js"><\/script>
  </body>
</html>
`,pp=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>About Suraj Public School | Kotkasim</title>
    <meta
      name="description"
      content="Learn about the vision, values and learning approach of Suraj Public School, Kotkasim."
    />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <main>
      <section class="page-hero">
        <div class="container">
          <div class="breadcrumb">
            <a href="index.html">Home</a><span>/</span><span>About</span>
          </div>
          <h1 class="display">A school with<br /><em>a clear purpose.</em></h1>
        </div>
      </section>
      <section class="section">
        <div class="container split">
          <div class="copy reveal">
            <div class="eyebrow">Who we are</div>
            <h2>Learning that reaches beyond the textbook.</h2>
            <p>
              Suraj Public School is a CBSE affiliated senior secondary school
              in Kotkasim, Rajasthan. Since its establishment in 2003, the
              school has been a place where learning is connected with
              discipline, curiosity, respect and a growing sense of
              responsibility.
            </p>
            <p>
              Our work is grounded in a simple belief: students flourish when
              they feel known, challenged and supported. We aim to provide a
              calm, purposeful environment in which academic development and
              character building are given equal importance.
            </p>
          </div>
          <div class="image-frame image-frame--landscape reveal">
            <img
              src="assets/images/home/campus-building.jpg"
              alt="School campus building"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section class="section section--mist">
        <div class="container split split--wide">
          <div class="copy reveal">
            <div class="eyebrow">Our journey</div>
            <h2>Steady progress, rooted in values.</h2>
            <p>
              The story of Suraj Public School is best understood as an ongoing
              commitment to education in the Kotkasim community. Our journey
              continues through everyday teaching, conversations with families,
              student effort and the shared responsibility of preparing young
              people for a changing world.
            </p>
            <div class="timeline">
              <div class="timeline-item">
                <h3>Established in 2003</h3>
                <p>
                  The school began its journey with a commitment to meaningful
                  education in Kotkasim.
                </p>
              </div>
              <div class="timeline-item">
                <h3>Growing with our community</h3>
                <p>
                  Learning, relationships and responsibility remain at the
                  centre of school life.
                </p>
              </div>
              <div class="timeline-item">
                <h3>Looking ahead</h3>
                <p>
                  We continue to strengthen future-ready learning while
                  protecting the values that matter.
                </p>
              </div>
            </div>
          </div>
          <div class="copy reveal">
            <div class="feature">
              <strong>Vision</strong
              ><span
                >To nurture capable, compassionate and confident learners who
                use knowledge with integrity and purpose.</span
              >
            </div>
            <div class="feature">
              <strong>Mission</strong
              ><span
                >To create a supportive learning environment that develops
                academic foundations, character, creativity, discipline and
                responsible citizenship.</span
              >
            </div>
            <div class="feature">
              <strong>Core values</strong
              ><span
                >Respect, honesty, effort, empathy, curiosity, responsibility
                and a willingness to learn.</span
              >
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container section-heading reveal">
          <div class="eyebrow">Our approach to learning</div>
          <h2>High expectations, human attention.</h2>
          <p>
            We encourage students to understand ideas deeply, communicate
            clearly and take ownership of their progress. Learning is
            strengthened through questioning, practice, collaboration,
            reflection and opportunities to apply knowledge.
          </p>
        </div>
        <div class="container card-grid">
          <article class="card reveal">
            <div class="card-body">
              <h3>Holistic development</h3>
              <p>
                Academic work is complemented by activity, sport, creative
                expression, teamwork and leadership experiences.
              </p>
            </div>
          </article>
          <article class="card reveal">
            <div class="card-body">
              <h3>Future-ready education</h3>
              <p>
                Digital literacy, logical thinking, problem solving and
                technology awareness help students approach new possibilities
                responsibly.
              </p>
            </div>
          </article>
          <article class="card reveal">
            <div class="card-body">
              <h3>Supportive relationships</h3>
              <p>
                Students benefit from a culture where questions are welcomed,
                effort is recognised and families are part of the conversation.
              </p>
            </div>
          </article>
        </div>
      </section>
      <section class="cta">
        <div class="container cta-inner">
          <h2>See how our learning approach comes alive.</h2>
          <a class="btn btn--gold" href="our-teachers.html"
            >Meet our teachers →</a
          >
        </div>
      </section>
    </main>
    <script src="js/script.js"><\/script>
  </body>
</html>
`,yp=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Achievements | Suraj Public School</title>
    <meta
      name="description"
      content="A space for verified achievements and student milestones at Suraj Public School."
    />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <main>
      <section class="page-hero">
        <div class="container">
          <div class="breadcrumb">
            <a href="index.html">Home</a><span>/</span><span>Achievements</span>
          </div>
          <h1 class="display">
            Celebrate effort.<br /><em>Record progress.</em>
          </h1>
        </div>
      </section>
      <section class="section">
        <div class="container section-heading reveal">
          <div class="eyebrow">Achievements</div>
          <h2>A considered place for milestones.</h2>
          <p>
            This page is designed for verified school achievements, student
            participation and meaningful milestones. No awards or results are
            stated here until official information is supplied by the school.
          </p>
        </div>
        <div class="container" data-filter-group="achievements">
          <div class="filter-row">
            <button class="filter-btn active" data-filter="all">All</button
            ><button class="filter-btn" data-filter="academic">Academic</button
            ><button class="filter-btn" data-filter="sports">Sports</button
            ><button class="filter-btn" data-filter="competitions">
              Competitions</button
            ><button class="filter-btn" data-filter="creative">
              Creative Activities</button
            ><button class="filter-btn" data-filter="technology">
              Technology</button
            ><button class="filter-btn" data-filter="development">
              Student Development
            </button>
          </div>
          <div class="card-grid">
            <article
              class="card reveal"
              data-filter-item="achievements"
              data-category="academic"
            >
              <div class="card-body">
                <h3>Academic milestones</h3>
                <p>
                  Use this card for verified academic distinctions,
                  participation or progress stories.
                </p>
                <a class="card-link" href="contact.html"
                  >Update this record →</a
                >
              </div>
            </article>
            <article
              class="card reveal"
              data-filter-item="achievements"
              data-category="sports"
            >
              <div class="card-body">
                <h3>Sports & fitness</h3>
                <p>
                  Use this card for confirmed sports participation and student
                  effort.
                </p>
                <a class="card-link" href="contact.html"
                  >Update this record →</a
                >
              </div>
            </article>
            <article
              class="card reveal"
              data-filter-item="achievements"
              data-category="competitions"
            >
              <div class="card-body">
                <h3>Competitions</h3>
                <p>
                  Use this card for verified participation, recognition or
                  learning outcomes.
                </p>
                <a class="card-link" href="contact.html"
                  >Update this record →</a
                >
              </div>
            </article>
            <article
              class="card reveal"
              data-filter-item="achievements"
              data-category="creative"
            >
              <div class="card-body">
                <h3>Creative expression</h3>
                <p>
                  Use this card for confirmed exhibitions, performances or
                  creative work.
                </p>
                <a class="card-link" href="contact.html"
                  >Update this record →</a
                >
              </div>
            </article>
            <article
              class="card reveal"
              data-filter-item="achievements"
              data-category="technology"
            >
              <div class="card-body">
                <h3>Technology & innovation</h3>
                <p>
                  Use this card for verified coding, robotics or project
                  milestones.
                </p>
                <a class="card-link" href="contact.html"
                  >Update this record →</a
                >
              </div>
            </article>
            <article
              class="card reveal"
              data-filter-item="achievements"
              data-category="development"
            >
              <div class="card-body">
                <h3>Student development</h3>
                <p>
                  Use this card for leadership, service, teamwork or personal
                  growth stories.
                </p>
                <a class="card-link" href="contact.html"
                  >Update this record →</a
                >
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
    <script src="js/script.js"><\/script>
  </body>
</html>
`,bp=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Student Life & Activities | Suraj Public School</title>
    <meta
      name="description"
      content="Discover the activities, teamwork and student development opportunities at Suraj Public School."
    />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <main>
      <section class="page-hero">
        <div class="container">
          <div class="breadcrumb">
            <a href="index.html">Home</a><span>/</span><span>Activities</span>
          </div>
          <h1 class="display">
            A life of learning<br /><em>in every direction.</em>
          </h1>
        </div>
      </section>
      <section class="section">
        <div class="container split">
          <div class="image-frame image-frame--landscape reveal">
            <img
              src="assets/images/activities/student-activities.png"
              alt="Students collaborating in an activity"
              loading="lazy"
            />
          </div>
          <div class="copy reveal">
            <div class="eyebrow">Student life</div>
            <h2>Confidence grows through participation.</h2>
            <p>
              School life offers students many ways to practise cooperation,
              creativity, resilience and leadership. Through structured
              activities and shared experiences, students learn to contribute,
              listen, take initiative and celebrate progress.
            </p>
            <p>
              The activities shown here are broad programme areas. Specific
              clubs, schedules and events should be updated by the school as
              they are confirmed.
            </p>
          </div>
        </div>
      </section>
      <section class="section section--mist">
        <div class="container card-grid">
          <article class="card reveal">
            <div class="card-body">
              <h3>Sports</h3>
              <p>
                Physical activity supports health, teamwork, focus and the
                discipline of practising towards improvement.
              </p>
            </div>
          </article>
          <article class="card reveal">
            <div class="card-body">
              <h3>Cultural activities</h3>
              <p>
                Expression through performance, art, music and celebration
                builds confidence and appreciation.
              </p>
            </div>
          </article>
          <article class="card reveal">
            <div class="card-body">
              <h3>Competitions</h3>
              <p>
                Healthy challenge helps students prepare, participate graciously
                and learn from experience.
              </p>
            </div>
          </article>
          <article class="card reveal">
            <div class="card-body">
              <h3>Educational activities</h3>
              <p>
                Visits, demonstrations and themed learning experiences make
                ideas more vivid and connected.
              </p>
            </div>
          </article>
          <article class="card reveal">
            <div class="card-body">
              <h3>Technology activities</h3>
              <p>
                Students explore digital tools, coding, making and responsible
                technology use.
              </p>
            </div>
          </article>
          <article class="card reveal">
            <div class="card-body">
              <h3>Leadership & teamwork</h3>
              <p>
                Shared responsibility and group work create opportunities to
                practise initiative, communication and trust.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
    <script src="js/script.js"><\/script>
  </body>
</html>
`,Sp=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Admissions | Suraj Public School, Kotkasim</title>
    <meta
      name="description"
      content="Learn about admissions, the enquiry process and important information at Suraj Public School."
    />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <main>
      <section class="page-hero">
        <div class="container">
          <div class="breadcrumb">
            <a href="index.html">Home</a><span>/</span><span>Admissions</span>
          </div>
          <h1 class="display">
            A thoughtful beginning<br /><em>starts here.</em>
          </h1>
        </div>
      </section>
      <section class="section">
        <div class="container split">
          <div class="copy reveal">
            <div class="eyebrow">Admissions</div>
            <h2>Choose a learning community with care.</h2>
            <p>
              We understand that choosing a school is an important decision. Our
              admissions conversation is an opportunity for families to
              understand the school's approach, share relevant information about
              the student and ask practical questions.
            </p>
            <div class="feature-list">
              <div class="feature">
                <strong>Learning with purpose</strong
                ><span
                  >Academic growth and character development together.</span
                >
              </div>
              <div class="feature">
                <strong>Supportive environment</strong
                ><span
                  >A school culture built around effort, respect and
                  belonging.</span
                >
              </div>
              <div class="feature">
                <strong>Future readiness</strong
                ><span
                  >Communication, creativity, technology awareness and
                  confidence.</span
                >
              </div>
              <div class="feature">
                <strong>Family partnership</strong
                ><span>Open communication throughout the school journey.</span>
              </div>
            </div>
          </div>
          <div class="image-frame image-frame--landscape reveal">
            <img
              src="assets/images/admissions/admission-learning.png"
              alt="Students learning together"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section class="section section--mist">
        <div class="container split">
          <div class="copy reveal">
            <div class="eyebrow">The process</div>
            <h2>Clear steps for families.</h2>
            <div class="timeline">
              <div class="timeline-item">
                <h3>1. Make an enquiry</h3>
                <p>
                  Share your details and the class you are considering through
                  the enquiry form.
                </p>
              </div>
              <div class="timeline-item">
                <h3>2. Connect with the school</h3>
                <p>
                  The school team can guide you through the next steps and
                  answer your questions.
                </p>
              </div>
              <div class="timeline-item">
                <h3>3. Review the information</h3>
                <p>
                  Discuss the student's learning needs, school expectations and
                  relevant documentation.
                </p>
              </div>
              <div class="timeline-item">
                <h3>4. Complete the formal process</h3>
                <p>
                  Admissions are subject to the school's current process and
                  availability.
                </p>
              </div>
            </div>
          </div>
          <div class="copy reveal">
            <h3>Required documents</h3>
            <p>
              Document requirements can vary by class and current school policy.
              Please confirm the latest list directly with the school before
              submitting documents.
            </p>
            <ul>
              <li>
                Student identity and date-of-birth document, as applicable
              </li>
              <li>Previous school or academic records, as applicable</li>
              <li>Parent or guardian contact details</li>
              <li>Other documents requested by the school</li>
            </ul>
            <h3>Important information</h3>
            <p>
              No fee amounts or unverified admission conditions are published
              here. Please contact the school for current, official guidance.
            </p>
          </div>
        </div>
      </section>
      <section id="enquiry" class="section">
        <div class="container split">
          <div class="copy reveal">
            <div class="eyebrow">Admission enquiry</div>
            <h2>Tell us how we can help.</h2>
            <p>
              Submit this form and the school team will receive your enquiry by
              email.
            </p>
            <p>
              <strong>Chowki Road, Kotkasim, Rajasthan - 301702</strong><br /><a
                class="card-link"
                href="tel:9950711477"
                >99507 11477</a
              >
            </p>
            <a
              class="btn btn--navy"
              href="https://wa.me/919950711477?text=Hello%20Suraj%20Public%20School%2C%20I%20would%20like%20to%20enquire%20about%20admission%20and%20school%20information."
              target="_blank"
              rel="noopener"
              >WhatsApp the school</a
            >
          </div>
          <form
            class="contact-card reveal"
            data-validate
            data-email-delivery
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input
              type="hidden"
              name="access_key"
              value="b54a2250-2af6-4d6b-8bc1-9642dfb830ba"
            />
            <input
              type="hidden"
              name="subject"
              value="New Admission Enquiry | Suraj Public School"
            />
            <input
              type="hidden"
              name="from_name"
              value="Suraj Public School Website"
            />
            <input
              type="checkbox"
              name="botcheck"
              class="form-trap"
              tabindex="-1"
              autocomplete="off"
            />
            <div class="form-grid">
              <div class="field">
                <label for="student">Student Name</label
                ><input id="student" name="student" required />
              </div>
              <div class="field">
                <label for="parent">Parent/Guardian Name</label
                ><input id="parent" name="parent" required />
              </div>
              <div class="field">
                <label for="class">Class Applying For</label
                ><input id="class" name="class" required />
              </div>
              <div class="field">
                <label for="mobile">Mobile Number</label
                ><input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  pattern="[0-9 +()-]{10,}"
                  required
                />
              </div>
              <div class="field">
                <label for="email">Email</label
                ><input id="email" name="email" type="email" />
              </div>
              <div class="field full">
                <label for="message">Message</label
                ><textarea id="message" name="message" required></textarea>
              </div>
              <div class="field full">
                <div class="enquiry-actions">
                  <button class="btn btn--gold" type="submit">
                    Send enquiry by email
                  </button>
                  <button
                    class="btn btn--whatsapp"
                    type="button"
                    data-whatsapp-enquiry
                  >
                    Send on WhatsApp
                  </button>
                </div>
              </div>
            </div>
            <div class="form-message">
              Thank you. Your enquiry has been sent to the school.
            </div>
          </form>
        </div>
      </section>
      <section class="section section--mist">
        <div class="container">
          <div class="section-heading reveal">
            <div class="eyebrow">More information</div>
            <h2>Useful school resources.</h2>
          </div>
          <div class="card-grid">
            <article class="card">
              <div class="card-body">
                <h3>Mandatory disclosure</h3>
                <p>
                  View the structured public disclosure page and update it with
                  official documents.
                </p>
                <a class="card-link" href="mandatory-disclosure.html"
                  >Open disclosure →</a
                >
              </div>
            </article>
            <article class="card">
              <div class="card-body">
                <h3>Annual report</h3>
                <p>
                  A clear framework for sharing the school's academic year and
                  development story.
                </p>
                <a class="card-link" href="annual-report.html"
                  >Open annual report →</a
                >
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
    <script src="js/script.js"><\/script>
  </body>
</html>
`,Tp=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Annual Report | Suraj Public School</title>
    <meta
      name="description"
      content="Editable annual report framework for Suraj Public School, Kotkasim."
    />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <main>
      <section class="page-hero">
        <div class="container">
          <div class="breadcrumb">
            <a href="index.html">Home</a><span>/</span
            ><span>Annual Report</span>
          </div>
          <h1 class="display">A year of<br /><em>learning and growth.</em></h1>
        </div>
      </section>
      <section class="section">
        <div class="container split">
          <div class="copy reveal">
            <div class="eyebrow">Annual report</div>
            <h2>Academic Year: [YYYY - YYYY]</h2>
            <p>
              This editable report framework gives the school a considered place
              to share its academic year, student development work and future
              direction. Replace bracketed fields with verified information,
              images and approved figures.
            </p>
            <p><strong>Last Updated: [DD/MM/YYYY]</strong></p>
          </div>
          <div class="image-frame image-frame--landscape reveal">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=82"
              alt="Students learning together"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section class="section section--mist">
        <div class="container card-grid">
          <article class="card reveal">
            <div class="card-body">
              <h3>Academic activities</h3>
              <p>
                [Add a verified summary of teaching, learning, assessment and
                academic initiatives.]
              </p>
            </div>
          </article>
          <article class="card reveal">
            <div class="card-body">
              <h3>Student development</h3>
              <p>
                [Add a verified summary of personal, social, leadership and
                wellbeing initiatives.]
              </p>
            </div>
          </article>
          <article class="card reveal">
            <div class="card-body">
              <h3>Co-curricular activities</h3>
              <p>
                [Add verified activities, participation and learning outcomes.]
              </p>
            </div>
          </article>
          <article class="card reveal">
            <div class="card-body">
              <h3>Sports</h3>
              <p>
                [Add verified sports activities, participation and development
                highlights.]
              </p>
            </div>
          </article>
          <article class="card reveal">
            <div class="card-body">
              <h3>Technology & projects</h3>
              <p>
                [Add verified coding, robotics, digital learning and project
                highlights.]
              </p>
            </div>
          </article>
          <article class="card reveal">
            <div class="card-body">
              <h3>Achievements</h3>
              <p>
                [Add only approved and verifiable achievements, awards or
                milestones.]
              </p>
            </div>
          </article>
          <article class="card reveal">
            <div class="card-body">
              <h3>Future plans</h3>
              <p>
                [Add the school's approved priorities and plans for the next
                academic year.]
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
    <script src="js/script.js"><\/script>
  </body>
</html>
`,Ep=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Coding & Robotics | Suraj Public School</title>
    <meta
      name="description"
      content="Explore coding, robotics, logical thinking and project-based learning at Suraj Public School."
    />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <main>
      <section class="page-hero">
        <div class="container">
          <div class="breadcrumb">
            <a href="index.html">Home</a><span>/</span
            ><span>Coding & Robotics</span>
          </div>
          <h1 class="display">
            Ideas become<br /><em>things you can test.</em>
          </h1>
        </div>
      </section>
      <section class="section">
        <div class="container split">
          <div class="copy reveal">
            <div class="eyebrow">Coding & robotics</div>
            <h2>Learning to think, make and improve.</h2>
            <p>
              Coding and robotics offer students a practical language for
              curiosity. They can break a challenge into steps, write
              instructions, observe what happens, find an error and try a better
              approach.
            </p>
            <p>
              The programme is designed around hands-on learning in coding,
              programming, robotics, artificial intelligence awareness, logical
              thinking, problem solving, innovation and project-based learning.
            </p>
          </div>
          <div class="image-frame image-frame--landscape reveal">
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=82"
              alt="Educational robotics activity"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section class="section section--navy">
        <div class="container">
          <div class="section-heading reveal">
            <div class="eyebrow">What students practise</div>
            <h2>Technology with imagination and responsibility.</h2>
          </div>
          <div class="feature-list">
            <div class="feature reveal">
              <strong>Coding & programming</strong
              ><span
                >Turning ideas into clear instructions and working logic.</span
              >
            </div>
            <div class="feature reveal">
              <strong>Robotics</strong
              ><span
                >Connecting mechanisms, sensors, code and purposeful
                design.</span
              >
            </div>
            <div class="feature reveal">
              <strong>AI awareness</strong
              ><span
                >Beginning to understand possibility, ethics and responsible
                use.</span
              >
            </div>
            <div class="feature reveal">
              <strong>Problem solving</strong
              ><span
                >Testing, debugging and improving through persistence.</span
              >
            </div>
            <div class="feature reveal">
              <strong>Innovation</strong
              ><span>Asking what could work better and why.</span>
            </div>
            <div class="feature reveal">
              <strong>Project-based learning</strong
              ><span>Collaborating to make, explain and reflect.</span>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container section-heading reveal">
          <div class="eyebrow">Project ideas</div>
          <h2>From a question to a working prototype.</h2>
        </div>
        <div class="container card-grid">
          <article class="card reveal">
            <div class="card-image">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=82"
                alt="Electronics for an obstacle avoiding car"
                loading="lazy"
              />
            </div>
            <div class="card-body">
              <h3>Obstacle Avoiding Car</h3>
              <p>
                A project concept that invites students to explore sensors,
                movement, logic and testing.
              </p>
              <a class="card-link" href="projects.html">View project →</a>
            </div>
          </article>
          <article class="card reveal">
            <div class="card-image">
              <img
                src="https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=1000&q=82"
                alt="Smart device concept"
                loading="lazy"
              />
            </div>
            <div class="card-body">
              <h3>Smart Dustbin</h3>
              <p>
                A practical automation idea for exploring detection, response
                and purposeful design.
              </p>
              <a class="card-link" href="projects.html">View project →</a>
            </div>
          </article>
          <article class="card reveal">
            <div class="card-image">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=82"
                alt="Student coding project"
                loading="lazy"
              />
            </div>
            <div class="card-body">
              <h3>Student Coding Projects</h3>
              <p>
                Small experiments that help learners understand sequence,
                conditions and creative expression.
              </p>
              <a class="card-link" href="projects.html">View project →</a>
            </div>
          </article>
        </div>
      </section>
    </main>
    <script src="js/script.js"><\/script>
  </body>
</html>
`,Ap=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <title>Contact Suraj Public School | Kotkasim</title>

    <meta
      name="description"
      content="Contact Suraj Public School, Chowki Road, Kotkasim, Rajasthan."
    />

    <link rel="stylesheet" href="css/style.css" />

    <style>
      /* ================================
         GOOGLE MAP
      ================================= */

      .map-placeholder {
        width: 100%;
      }

      .map-container {
        width: 100%;
        height: 450px;
        overflow: hidden;
        border-radius: 18px;
        background: #e9e9e9;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
      }

      .map-container iframe {
        display: block;
        width: 100%;
        height: 100%;
        border: 0;
      }

      .map-placeholder .btn {
        margin-top: 18px;
      }

      /* ================================
         TABLET
      ================================= */

      @media (max-width: 768px) {
        .map-container {
          height: 320px;
          border-radius: 14px;
        }
      }

      /* ================================
         MOBILE
      ================================= */

      @media (max-width: 480px) {
        .map-container {
          height: 280px;
          border-radius: 12px;
        }

        .map-placeholder .btn {
          width: 100%;
          text-align: center;
        }
      }
    </style>
  </head>

  <body>
    <main>
      <!-- ================================
           PAGE HERO
      ================================= -->

      <section class="page-hero">
        <div class="container">
          <div class="breadcrumb">
            <a href="index.html">Home</a>
            <span>/</span>
            <span>Contact</span>
          </div>

          <h1 class="display">
            We would be glad<br />
            <em>to hear from you.</em>
          </h1>
        </div>
      </section>

      <!-- ================================
           CONTACT DETAILS + MAP
      ================================= -->

      <section class="section">
        <div class="container contact-grid">
          <!-- CONTACT DETAILS -->

          <div class="contact-card reveal">
            <div class="eyebrow">Contact details</div>

            <h2 class="display">Suraj Public School</h2>

            <!-- ADDRESS -->

            <div class="contact-row">
              <span>⌖</span>

              <div>
                <strong>Address</strong>

                <span>
                  Chowki Road, Kotkasim,<br />
                  Rajasthan - 301702
                </span>
              </div>
            </div>

            <!-- PHONE -->

            <div class="contact-row">
              <span>☎</span>

              <div>
                <strong>Phone</strong>

                <span>
                  <a href="tel:9950711477"> 99507 11477 </a>
                </span>
              </div>
            </div>

            <!-- WHATSAPP -->

            <div class="contact-row">
              <span>◔</span>

              <div>
                <strong>WhatsApp</strong>

                <span>
                  <a
                    href="https://wa.me/919950711477"
                    target="_blank"
                    rel="noopener"
                  >
                    Start a conversation
                  </a>
                </span>
              </div>
            </div>

            <!-- CALL BUTTON -->

            <a class="btn btn--navy" href="tel:9950711477"> Call Now </a>
          </div>

          <!-- ================================
               GOOGLE MAP
          ================================= -->

          <div class="map-placeholder reveal">
            <div class="map-container">
              <iframe
                src="https://www.google.com/maps?q=Suraj%20Public%20School%20Kotkasim%2C%20Chowki%20Road%2C%20Kotkasim%2C%20Rajasthan%20301702&output=embed"
                title="Suraj Public School Kotkasim Location"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              >
              </iframe>
            </div>

            <!-- OPEN GOOGLE MAPS BUTTON -->

            <a
              class="btn btn--gold"
              href="https://www.google.com/maps/search/?api=1&query=Suraj+Public+School+Kotkasim"
              target="_blank"
              rel="noopener"
            >
              Open in Google Maps ↗
            </a>
          </div>
        </div>
      </section>

      <!-- ================================
           MESSAGE SECTION
      ================================= -->

      <section class="section section--mist">
        <div class="container split">
          <!-- LEFT CONTENT -->

          <div class="copy reveal">
            <div class="eyebrow">Write to us</div>

            <h2>Send a message.</h2>

            <p>
              Send your name, mobile number and message directly to the school
              on WhatsApp.
            </p>
          </div>

          <!-- CONTACT FORM -->

          <form class="contact-card reveal" data-validate>
            <div class="form-grid">
              <!-- NAME -->

              <div class="field">
                <label for="name"> Name </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autocomplete="name"
                  required
                />
              </div>

              <!-- PHONE -->

              <div class="field">
                <label for="phone"> Mobile Number </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  pattern="[0-9 +()-]{10,}"
                  autocomplete="tel"
                  required
                />
              </div>

              <!-- MESSAGE -->

              <div class="field full">
                <label for="contact-message"> Message </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="6"
                  required
                ></textarea>
              </div>

              <!-- SUBMIT -->

              <div class="field full">
                <div class="enquiry-actions">
                  <button
                    class="btn btn--whatsapp"
                    type="button"
                    data-whatsapp-contact
                  >
                    Send on WhatsApp
                  </button>
                </div>
              </div>
            </div>

            <!-- FORM MESSAGE -->

            <div class="form-message">
              Thank you. Your message is ready to send.
            </div>
          </form>
        </div>
      </section>
    </main>

    <!-- ================================
         JAVASCRIPT
    ================================= -->

    <script src="js/script.js"><\/script>
  </body>
</html>
`,_p=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Events & News | Suraj Public School</title>
    <meta
      name="description"
      content="School events and news updates for the Suraj Public School community."
    />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <main>
      <section class="page-hero">
        <div class="container">
          <div class="breadcrumb">
            <a href="index.html">Home</a><span>/</span
            ><span>Events & News</span>
          </div>
          <h1 class="display">What is happening<br /><em>at school.</em></h1>
        </div>
      </section>
      <section class="section">
        <div class="container" data-filter-group="events">
          <div class="section-heading reveal">
            <div class="eyebrow">Events & news</div>
            <h2>Keep the community close.</h2>
            <p>
              These editable sample cards demonstrate how school updates can be
              presented. Replace the sample dates, images and copy with
              confirmed event information.
            </p>
          </div>
          <div class="filter-row">
            <button class="filter-btn active" data-filter="all">All</button
            ><button class="filter-btn" data-filter="academic">Academic</button
            ><button class="filter-btn" data-filter="activity">
              Activities</button
            ><button class="filter-btn" data-filter="community">
              Community
            </button>
          </div>
          <div class="card-grid">
            <article
              class="card reveal"
              data-filter-item="events"
              data-category="academic"
            >
              <div class="card-image">
                <img
                  src="https://images.unsplash.com/photo-1503"
                  alt="Students learning"
                  loading="lazy"
                />
              </div>
              <div class="card-body">
                <p class="eyebrow">[DD / MM / YYYY]</p>
                <h3>Academic learning focus</h3>
                <p>
                  An editable news summary for a verified academic activity,
                  workshop or school update.
                </p>
                <a class="card-link" href="contact.html">Read more →</a>
              </div>
            </article>
            <article
              class="card reveal"
              data-filter-item="events"
              data-category="activity"
            >
              <div class="card-image">
                <img
                  src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=82"
                  alt="Sports activity"
                  loading="lazy"
                />
              </div>
              <div class="card-body">
                <p class="eyebrow">[DD / MM / YYYY]</p>
                <h3>Learning beyond the classroom</h3>
                <p>
                  An editable event summary for sport, culture, projects or
                  student participation.
                </p>
                <a class="card-link" href="contact.html">Read more →</a>
              </div>
            </article>
            <article
              class="card reveal"
              data-filter-item="events"
              data-category="community"
            >
              <div class="card-image">
                <img
                  src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1000&q=82"
                  alt="Community gathering"
                  loading="lazy"
                />
              </div>
              <div class="card-body">
                <p class="eyebrow">[DD / MM / YYYY]</p>
                <h3>Community connection</h3>
                <p>
                  An editable update for a family, community or school
                  gathering.
                </p>
                <a class="card-link" href="contact.html">Read more →</a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
    <script src="js/script.js"><\/script>
  </body>
</html>
`,zp=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Facilities & Learning Spaces | Suraj Public School</title>
    <meta
      name="description"
      content="Explore the learning spaces and facility areas that can support student development at Suraj Public School."
    />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <main>
      <section class="page-hero">
        <div class="container">
          <div class="breadcrumb">
            <a href="index.html">Home</a><span>/</span><span>Facilities</span>
          </div>
          <h1 class="display">Spaces that invite<br /><em>discovery.</em></h1>
        </div>
      </section>
      <section class="section">
        <div class="container split">
          <div class="copy reveal">
            <div class="eyebrow">Learning environment</div>
            <h2>Purposeful spaces for purposeful learning.</h2>
            <p>
              The right environment can make learning more comfortable,
              collaborative and memorable. This page presents the areas that
              families may wish to explore. Specific facilities, photographs and
              details should be confirmed and updated by the school before
              publication.
            </p>
            <p>
              Each space should support the school's wider aim: to help students
              learn with focus, participate with confidence and develop a
              balanced range of capabilities.
            </p>
          </div>
          <div class="image-frame image-frame--landscape reveal">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=82"
              alt="Bright classroom learning space"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section class="section section--mist">
        <div class="container card-grid">
          <article class="card reveal">
            <div class="card-image">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=82"
                alt="Learning space"
                loading="lazy"
              />
            </div>
            <div class="card-body">
              <h3>Learning Spaces</h3>
              <p>
                Comfortable, focused spaces that support explanation, discussion
                and collaborative learning.
                <em>Details to be confirmed by the school.</em>
              </p>
            </div>
          </article>
          <article class="card reveal">
            <div class="card-image">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=82"
                alt="Technology learning"
                loading="lazy"
              />
            </div>
            <div class="card-body">
              <h3>Technology Learning</h3>
              <p>
                Opportunities to build digital awareness and explore technology
                responsibly. <em>Details to be confirmed by the school.</em>
              </p>
            </div>
          </article>
          <article class="card reveal">
            <div class="card-image">
              <img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=82"
                alt="Computer education concept"
                loading="lazy"
              />
            </div>
            <div class="card-body">
              <h3>Computer Education</h3>
              <p>
                A space for digital learning, computational thinking and guided
                creation. <em>Details to be confirmed by the school.</em>
              </p>
            </div>
          </article>
          <article class="card reveal">
            <div class="card-body">
              <h3>Science Learning</h3>
              <p>
                Encouraging observation, questioning, experimentation and
                evidence-based thinking. <em>Facilities to be confirmed.</em>
              </p>
            </div>
          </article>
          <article class="card reveal">
            <div class="card-body">
              <h3>Library & Reading</h3>
              <p>
                A quiet environment where students can develop reading habits,
                research skills and imagination.
                <em>Facilities to be confirmed.</em>
              </p>
            </div>
          </article>
          <article class="card reveal">
            <div class="card-body">
              <h3>Sports & physical development</h3>
              <p>
                Activities that help students practise health, resilience,
                cooperation and discipline. <em>Facilities to be confirmed.</em>
              </p>
            </div>
          </article>
          <article class="card reveal">
            <div class="card-body">
              <h3>Creative activities</h3>
              <p>
                Room for visual expression, performance, making and thoughtful
                communication. <em>Facilities to be confirmed.</em>
              </p>
            </div>
          </article>
          <article class="card reveal">
            <div class="card-body">
              <h3>Project-based learning</h3>
              <p>
                Opportunities to bring ideas together through making, presenting
                and reflection. <em>Facilities to be confirmed.</em>
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
    <script src="js/script.js"><\/script>
  </body>
</html>
`,Op=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Gallery | Suraj Public School, Kotkasim</title>
    <meta
      name="description"
      content="Explore a visual gallery of campus, activities, projects and student life at Suraj Public School."
    />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <main>
      <section class="page-hero">
        <div class="container">
          <div class="breadcrumb">
            <a href="index.html">Home</a><span>/</span><span>Gallery</span>
          </div>
          <h1 class="display">A glimpse of<br /><em>school life.</em></h1>
        </div>
      </section>
      <section class="section">
        <div class="container" data-filter-group="gallery">
          <div class="section-heading reveal">
            <div class="eyebrow">Gallery</div>
            <h2>Moments worth remembering.</h2>
            <p>
              school's official photographs publication.
            </p>
          </div>
          <div class="filter-row">
            <button class="filter-btn active" data-filter="all">All</button
            ><button class="filter-btn" data-filter="campus">Campus</button
            ><button class="filter-btn" data-filter="students">Students</button
            ><button class="filter-btn" data-filter="activities">
              Activities</button
            ><button class="filter-btn" data-filter="projects">Projects</button
            ><button class="filter-btn" data-filter="events">Events</button
            ><button class="filter-btn" data-filter="technology">
              Technology
            </button>
          </div>
          <div class="gallery-grid">
            <button
              class="gallery-item"
              data-filter-item="gallery"
              data-category="campus"
            >
              <img
                src="assets/images/gallery/campus-building.jpg"
                alt="School campus"
                loading="lazy"
              /></button
            ><button
              class="gallery-item"
              data-filter-item="gallery"
              data-category="students"
            >
              <img
                src="assets/images/gallery/classroom-learning.png"
                alt="Students in a classroom"
                loading="lazy"
              /></button
            ><button
              class="gallery-item"
              data-filter-item="gallery"
              data-category="activities"
            >
              <img
                src="assets/images/gallery/robotics-activity.png"
                alt="Student activity"
                loading="lazy"
              /></button
            ><button
              class="gallery-item"
              data-filter-item="gallery"
              data-category="projects"
            >
              <img
                src="assets/images/gallery/student-activity.png"
                alt="Student project components"
                loading="lazy"
              /></button
            ><button
              class="gallery-item"
              data-filter-item="gallery"
              data-category="events"
            >
            <img
                src="assets/images/gallery/student-gallery.png"
                alt="Student project components"
                loading="lazy"
              /></button
            ><button
              class="gallery-item"
              data-filter-item="gallery"
              data-category="events"
            >
              <img
                src="assets/images/gallery/collaborative-learning.png"
                alt="Community event"
                loading="lazy"
              /></button
            ><button
              class="gallery-item"
              data-filter-item="gallery"
              data-category="technology"
            >
              <img
                src="assets/images/gallery/student-project.png"
                alt="Robotics activity"
                loading="lazy"
              /></button
            ><button
              class="gallery-item"
              data-filter-item="gallery"
              data-category="campus"
            >
              <img
                src="assets/images/gallery/school-activity.png"
                alt="School building"
                loading="lazy"
              /></button
            ><button
              class="gallery-item"
              data-filter-item="gallery"
              data-category="activities"
            >
              <img
                src="assets/images/gallery/sports-activity.png"
                alt="Sports activity"
                loading="lazy"
              />
            </button>
          </div>
        </div>
      </section>
      <div class="lightbox" aria-label="Image viewer" role="dialog">
        <button class="lightbox-close" aria-label="Close gallery">×</button>
        <div class="lightbox-nav">
          <button data-prev aria-label="Previous image">←</button
          ><button data-next aria-label="Next image">→</button>
        </div>
        <img src="" alt="" />
      </div>
    </main>
    <script src="js/script.js"><\/script>
  </body>
</html>
`,Np=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Suraj Public School, Kotkasim | CBSE Senior Secondary School</title>
    <meta
      name="description"
      content="Suraj Public School, Kotkasim, Rajasthan - a CBSE affiliated senior secondary school focused on learning, character and future readiness."
    />
    <meta
      name="keywords"
      content="Suraj Public School, Kotkasim, CBSE school Rajasthan, senior secondary school"
    />
    <meta property="og:title" content="Suraj Public School, Kotkasim" />
    <meta
      property="og:description"
      content="Learning today, leading tomorrow."
    />
    <meta property="og:type" content="website" />
    <link rel="canonical" href="https://www.surajpublicschool.in/" />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <main>
      <section class="hero">
        <div class="hero-slides" aria-hidden="true">
          <div
            class="hero-slide is-active"
            data-image="assets/images/home/hero-welcome.png"
          ></div>
          <div
            class="hero-slide"
            data-image="assets/images/home/hero-learning.png"
          ></div>
          <div
            class="hero-slide"
            data-image="assets/images/home/hero-activity.png"
          ></div>
          <div
            class="hero-slide"
            data-image="assets/images/home/hero-achievement.png"
          ></div>
        </div>
        <button
          class="hero-arrow hero-arrow--prev"
          type="button"
          data-hero-prev
          aria-label="Previous image"
        >
          &#8249;
        </button>
        <button
          class="hero-arrow hero-arrow--next"
          type="button"
          data-hero-next
          aria-label="Next image"
        >
          &#8250;
        </button>
      </section>
      <section id="welcome" class="section">
        <div class="container split split--wide">
          <div class="image-frame image-frame--landscape reveal">
            <img
              src="assets/images/home/campus-building.jpg"
              alt="Welcoming school building and campus"
              loading="lazy"
            />
          </div>
          <div class="copy reveal">
            <div class="eyebrow">A place to belong</div>
            <h2>Welcome to Suraj Public School</h2>
            <p>
              Suraj Public School, Kotkasim, is an institution where academic
              growth and personal growth move together. Our learning environment
              is designed to help students ask thoughtful questions, work with
              discipline and express their ideas with confidence.
            </p>
            <p>
              Through a balanced emphasis on knowledge, values, creativity,
              technology awareness and responsible citizenship, we encourage
              every learner to discover a meaningful direction for the future.
            </p>
            <a class="btn btn--navy" href="about.html"
              >Discover Our School <span>↗</span></a
            >
          </div>
        </div>
      </section>
      <section class="stats-band">
        <div class="container stats-row">
          <strong>Rooted in values. Open to possibility.</strong
          ><span>Chowki Road, Kotkasim, Rajasthan - 301702</span
          ><a href="tel:9950711477" class="btn btn--navy">Call 99507 11477</a>
        </div>
      </section>
      <section class="section section--mist">
        <div class="container">
          <div class="section-heading reveal">
            <div class="eyebrow">The essentials</div>
            <h2>School at a glance</h2>
            <p>
              A few important facts about our school, presented clearly for
              families exploring the right learning community.
            </p>
          </div>
          <div class="glance-grid reveal">
            <div class="glance-card">
              <div class="icon">✦</div>
              <strong>2003</strong><span>Established</span>
            </div>
            <div class="glance-card">
              <div class="icon">◎</div>
              <strong>1730355</strong><span>CBSE Affiliation No.</span>
            </div>
            <div class="glance-card">
              <div class="icon">▥</div>
              <strong>Senior Secondary</strong><span>School Level</span>
            </div>
            <div class="glance-card">
              <div class="icon">⌖</div>
              <strong>Kotkasim</strong><span>Rajasthan</span>
            </div>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container split">
          <div class="copy reveal">
            <div class="eyebrow">A message of purpose</div>
            <h2>Growing minds. Building character.</h2>
            <p>
              “Every child carries a unique possibility. Our role as educators
              is to create the conditions in which that possibility can be
              recognised, strengthened and guided with care.”
            </p>
            <p>
              At Suraj Public School, we see education as a partnership between
              school, student and family. We value disciplined effort, honest
              conversations, curiosity and the courage to learn from experience.
            </p>
            <div class="signature">
              Anand Parkash<small>Principal · Suraj Public School</small>
            </div>
            <a class="card-link" href="principal.html"
              >Read the Principal's message →</a
            >
          </div>
          <div class="image-frame image-frame--portrait reveal">
            <!-- Replace with an approved image in assets/images/home/ --><img
              src="assets/images/home/principal-message.png"
              alt="Temporary portrait placeholder for Anand Parkash, Principal"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <section class="section section--navy">
        <div class="container">
          <div class="section-heading reveal">
            <div class="eyebrow">Learning with direction</div>
            <h2>Education for the whole student</h2>
            <p>
              Strong foundations, thoughtful teaching and opportunities to
              explore help students connect classroom learning with the wider
              world.
            </p>
          </div>
          <div class="card-grid">
            <article class="card reveal">
              <div class="card-image">
                <img
                  src="assets/images/home/classroom-learning.png"
                  alt="Students learning together in a classroom"
                  loading="lazy"
                />
              </div>
              <div class="card-body">
                <h3>Academic Excellence</h3>
                <p>
                  Conceptual clarity, consistent practice and supportive
                  guidance help learners make meaningful academic progress.
                </p>
                <a class="card-link" href="our-teachers.html"
                  >Meet our teachers →</a
                >
              </div>
            </article>
            <article class="card reveal">
              <div class="card-image">
                <img
                  src="assets/images/home/robotics-activity.png"
                  alt="Educational robotics activity"
                  loading="lazy"
                />
              </div>
              <div class="card-body">
                <h3>Future-Ready Learning</h3>
                <p>
                  Digital literacy, logical thinking and creative problem
                  solving open new ways for students to understand the future.
                </p>
                <a class="card-link" href="coding-robotics.html"
                  >Explore coding & robotics →</a
                >
              </div>
            </article>
            <article class="card reveal">
              <div class="card-image">
                <img
                  src="assets/images/home/student-collaboration.png"
                  alt="Students collaborating on an activity"
                  loading="lazy"
                />
              </div>
              <div class="card-body">
                <h3>Student Life</h3>
                <p>
                  Activities, teamwork and expression allow students to build
                  confidence beyond the classroom.
                </p>
                <a class="card-link" href="activities.html"
                  >See student life →</a
                >
              </div>
            </article>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container split">
          <div class="image-frame image-frame--landscape reveal">
            <img
              src="assets/images/home/technology-learning.png"
              alt="Students exploring technology and collaboration"
              loading="lazy"
            />
          </div>
          <div class="copy reveal">
            <div class="eyebrow">More than a classroom</div>
            <h2>Curiosity has a practical side.</h2>
            <p>
              Learning becomes memorable when students can investigate, make,
              test, explain and improve. Our future-ready approach brings
              together communication, creativity, technology awareness and
              disciplined collaboration.
            </p>
            <div class="feature-list">
              <div class="feature">
                <strong>Digital Literacy</strong
                ><span>Using technology thoughtfully and responsibly.</span>
              </div>
              <div class="feature">
                <strong>Logical Thinking</strong
                ><span>Building step-by-step reasoning and clarity.</span>
              </div>
              <div class="feature">
                <strong>Creativity</strong
                ><span>Turning ideas into expressive work.</span>
              </div>
              <div class="feature">
                <strong>Confidence</strong
                ><span>Finding the courage to participate and lead.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section section--mist">
        <div class="container">
          <div class="section-heading reveal">
            <div class="eyebrow">From imagination to making</div>
            <h2>Student projects, real learning</h2>
            <p>
              Project work creates room for experimentation, teamwork and the
              satisfaction of making something useful.
            </p>
          </div>
          <div class="card-grid">
            <article class="card reveal">
              <div class="card-image">
                <img
                  src="assets/images/home/electronics-project.png"
                  alt="Electronics and student project components"
                  loading="lazy"
                />
              </div>
              <div class="card-body">
                <h3>Build, test, improve</h3>
                <p>
                  Students connect ideas with action through guided project
                  experiences.
                </p>
                <a class="card-link" href="projects.html">View projects →</a>
              </div>
            </article>
            <article class="card reveal">
              <div class="card-image">
                <img
                  src="assets/images/home/robotics-learning.png"
                  alt="Robotics learning activity"
                  loading="lazy"
                />
              </div>
              <div class="card-body">
                <h3>Coding & Robotics</h3>
                <p>
                  An introduction to computational thinking, programming and
                  innovation.
                </p>
                <a class="card-link" href="coding-robotics.html"
                  >Discover the programme →</a
                >
              </div>
            </article>
            <article class="card reveal">
              <div class="card-image">
                <img
                  src="assets/images/home/sports-activity.png"
                  alt="Students engaged in sport"
                  loading="lazy"
                />
              </div>
              <div class="card-body">
                <h3>Life beyond lessons</h3>
                <p>
                  Activities help students practise resilience, cooperation and
                  leadership.
                </p>
                <a class="card-link" href="activities.html"
                  >Explore activities →</a
                >
              </div>
            </article>
          </div>
        </div>
      </section>
      <section class="cta">
        <div class="container cta-inner">
          <h2>Begin the conversation about your child's future.</h2>
          <a href="admissions.html#enquiry" class="btn btn--gold"
            >Make an admission enquiry <span>→</span></a
          >
        </div>
      </section>
    </main>
    <script src="js/script.js"><\/script>
  </body>
</html>
`,jp=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Mandatory Public Disclosure | Suraj Public School</title>
    <meta
      name="description"
      content="Mandatory public disclosure framework for Suraj Public School, Kotkasim."
    />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <main>
      <section class="page-hero">
        <div class="container">
          <div class="breadcrumb">
            <a href="index.html">Home</a><span>/</span
            ><span>Public Disclosure</span>
          </div>
          <h1 class="display">Mandatory Public<br /><em>Disclosure.</em></h1>
        </div>
      </section>
      <section class="section">
        <div class="container section-heading reveal">
          <div class="eyebrow">Transparency</div>
          <h2>Official information, clearly organised.</h2>
          <p>
            This page is structured for the school's verified public disclosure
            materials. Please upload official documents and replace each
            placeholder before publishing as a final disclosure record.
          </p>
          <p><strong>Last Updated: [DD/MM/YYYY]</strong></p>
        </div>
        <div class="container doc-list">
          <article class="doc-card reveal">
            <div>
              <h3>General Information</h3>
              <p>
                School profile, address, affiliation and approved general
                details.
              </p>
              <span class="doc-meta">Last Updated: [DD/MM/YYYY]</span>
            </div>
            <a
              class="btn btn--navy"
              href="assets/documents/general-information.pdf"
              >View / Download</a
            >
          </article>
          <article class="doc-card reveal">
            <div>
              <h3>Documents and Information</h3>
              <p>
                Official documents and information required for public access.
              </p>
              <span class="doc-meta">Last Updated: [DD/MM/YYYY]</span>
            </div>
            <a
              class="btn btn--navy"
              href="assets/documents/documents-information.pdf"
              >View / Download</a
            >
          </article>
          <article class="doc-card reveal">
            <div>
              <h3>Staff Information</h3>
              <p>Upload the school's verified staff information document.</p>
              <span class="doc-meta">Last Updated: [DD/MM/YYYY]</span>
            </div>
            <a
              class="btn btn--navy"
              href="assets/documents/staff-information.pdf"
              >View / Download</a
            >
          </article>
          <article class="doc-card reveal">
            <div>
              <h3>School Infrastructure</h3>
              <p>Upload verified infrastructure and facility information.</p>
              <span class="doc-meta">Last Updated: [DD/MM/YYYY]</span>
            </div>
            <a class="btn btn--navy" href="assets/documents/infrastructure.pdf"
              >View / Download</a
            >
          </article>
          <article class="doc-card reveal">
            <div>
              <h3>Fee Structure</h3>
              <p>
                Upload the current official fee structure when approved for
                publication.
              </p>
              <span class="doc-meta">Last Updated: [DD/MM/YYYY]</span>
            </div>
            <a class="btn btn--navy" href="assets/documents/fee-structure.pdf"
              >View / Download</a
            >
          </article>
          <article class="doc-card reveal">
            <div>
              <h3>Academic Information</h3>
              <p>Upload verified academic information and related documents.</p>
              <span class="doc-meta">Last Updated: [DD/MM/YYYY]</span>
            </div>
            <a
              class="btn btn--navy"
              href="assets/documents/academic-information.pdf"
              >View / Download</a
            >
          </article>
          <article class="doc-card reveal">
            <div>
              <h3>Other Information</h3>
              <p>
                Additional official information required by the school or
                authority.
              </p>
              <span class="doc-meta">Last Updated: [DD/MM/YYYY]</span>
            </div>
            <a
              class="btn btn--navy"
              href="assets/documents/other-information.pdf"
              >View / Download</a
            >
          </article>
        </div>
      </section>
    </main>
    <script src="js/script.js"><\/script>
  </body>
</html>
`,Dp=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Our Teachers | Suraj Public School, Kotkasim</title>
    <meta
      name="description"
      content="Meet the teaching team at Suraj Public School, Kotkasim."
    />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <main>
      <section class="page-hero">
        <div class="container">
          <div class="breadcrumb">
            <a href="index.html">Home</a><span>/</span><span>Our Teachers</span>
          </div>
          <h1 class="display">The people<br /><em>behind every lesson.</em></h1>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="section-heading reveal">
            <div class="eyebrow">Our teaching team</div>
            <h2>Guidance, knowledge and care in every classroom.</h2>
            <p>
              Meet the teachers who help our students learn with confidence,
              curiosity and purpose. These are temporary demo details and can be
              replaced with verified information later.
            </p>
          </div>
          <div class="card-grid">
            <article class="card reveal">
              <div class="card-image">
                <img
                  src="assets/images/our-teachers/anand-parkash.png"
                  alt="Demo photo of Anand Parkash"
                  loading="lazy"
                />
              </div>
              <div class="card-body">
                <h3>Anand Parkash</h3>
                <p>Principal</p>
              </div>
            </article>
            <article class="card reveal">
              <div class="card-image">
                <img
                  src="assets/images/our-teachers/neha-sharma.png"
                  alt="Demo photo of Neha Sharma"
                  loading="lazy"
                />
              </div>
              <div class="card-body">
                <h3>Neha Sharma</h3>
                <p>PGT Mathematics</p>
              </div>
            </article>
            <article class="card reveal">
              <div class="card-image">
                <img
                  src="assets/images/our-teachers/amit-kumar.png"
                  alt="Demo photo of Amit Kumar"
                  loading="lazy"
                />
              </div>
              <div class="card-body">
                <h3>Amit Kumar</h3>
                <p>PGT Science</p>
              </div>
            </article>
            <article class="card reveal">
              <div class="card-image">
                <img
                  src="assets/images/our-teachers/pooja-yadav.png"
                  alt="Demo photo of Pooja Yadav"
                  loading="lazy"
                />
              </div>
              <div class="card-body">
                <h3>Pooja Yadav</h3>
                <p>PGT English</p>
              </div>
            </article>
            <article class="card reveal">
              <div class="card-image">
                <img
                  src="assets/images/our-teachers/ravi-singh.png"
                  alt="Demo photo of Ravi Singh"
                  loading="lazy"
                />
              </div>
              <div class="card-body">
                <h3>Ravi Singh</h3>
                <p>PGT Social Science</p>
              </div>
            </article>
            <article class="card reveal">
              <div class="card-image">
                <img
                  src="assets/images/our-teachers/kavita-meena.png"
                  alt="Demo photo of Kavita Meena"
                  loading="lazy"
                />
              </div>
              <div class="card-body">
                <h3>Kavita Meena</h3>
                <p>TGT Hindi</p>
              </div>
            </article>
            <article class="card reveal">
              <div class="card-image">
                <img
                  src="assets/images/our-teachers/mohit-verma.png"
                  alt="Demo photo of Mohit Verma"
                  loading="lazy"
                />
              </div>
              <div class="card-body">
                <h3>Mohit Verma</h3>
                <p>TGT Computer Science</p>
              </div>
            </article>
            <article class="card reveal">
              <div class="card-image">
                <img
                  src="assets/images/our-teachers/sunita-kumari.png"
                  alt="Demo photo of Sunita Kumari"
                  loading="lazy"
                />
              </div>
              <div class="card-body">
                <h3>Sunita Kumari</h3>
                <p>Primary Teacher</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
    <script src="js/script.js"><\/script>
  </body>
</html>
`,Mp=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Principal's Message | Suraj Public School</title>
    <meta
      name="description"
      content="Read the message and educational vision of Anand Parkash, Principal of Suraj Public School."
    />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <main>
      <section class="page-hero">
        <div class="container">
          <div class="breadcrumb">
            <a href="index.html">Home</a><span>/</span><span>Principal</span>
          </div>
          <h1 class="display">A message from<br /><em>our Principal.</em></h1>
        </div>
      </section>
      <section class="section">
        <div class="container split split--wide">
          <div class="image-frame image-frame--portrait reveal">
            <!-- Replace with an approved image in assets/images/principal/ --><img
              src="assets/images/principal/principal-portrait.png"
              alt="Temporary portrait placeholder for Anand Parkash"
              loading="lazy"
            />
          </div>
          <div class="copy reveal">
            <div class="eyebrow">Message from the Principal</div>
            <h2>Anand Parkash</h2>
            <p><strong>Principal</strong></p>
            <p>
              Education is one of the most meaningful ways in which we help
              young people understand themselves and the world around them. At
              Suraj Public School, our purpose is to make that journey
              thoughtful, disciplined and full of possibility.
            </p>
            <p>
              We want every student to develop strong academic foundations, but
              we also want them to become curious learners, considerate human
              beings and confident contributors. Character is built through
              everyday choices: showing respect, keeping a commitment, listening
              carefully, trying again and taking responsibility for one's
              actions.
            </p>
            <p>
              Creativity and technology have an important place in this journey.
              When students are given opportunities to investigate, design,
              collaborate and solve problems, they begin to see their own
              potential more clearly. Our responsibility is to guide that energy
              with care, high expectations and sound values.
            </p>
            <p>
              Parents and school share a vital partnership. Open communication
              and mutual trust allow us to understand each child better and
              support progress with consistency. Together, we can prepare
              students not only for examinations, but for the decisions,
              relationships and responsibilities of the future.
            </p>
            <p>
              Every learner has a capacity to grow. We are committed to helping
              that growth become purposeful, confident and kind.
            </p>
            <div class="signature">
              Anand Parkash<small
                >Principal<br />Suraj Public School, Kotkasim</small
              >
            </div>
          </div>
        </div>
      </section>
      <section class="section section--mist">
        <div class="container section-heading reveal">
          <div class="eyebrow">Educational vision</div>
          <h2>Developing potential with patience and purpose.</h2>
          <p>
            We believe student development is strongest when academic guidance,
            personal values, creativity, technology awareness and family
            partnership reinforce one another.
          </p>
        </div>
        <div class="container card-grid">
          <article class="card reveal">
            <div class="card-body">
              <h3>Student development philosophy</h3>
              <p>
                Each learner deserves encouragement, meaningful challenge and
                the chance to make steady progress from a foundation of dignity
                and belonging.
              </p>
            </div>
          </article>
          <article class="card reveal">
            <div class="card-body">
              <h3>Parent-school partnership</h3>
              <p>
                Families bring essential insight. Regular, respectful
                communication helps create a consistent support system around
                each student.
              </p>
            </div>
          </article>
          <article class="card reveal">
            <div class="card-body">
              <h3>Preparing for the future</h3>
              <p>
                Knowledge matters, and so do adaptability, communication,
                ethical judgement, creativity and the confidence to keep
                learning.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
    <script src="js/script.js"><\/script>
  </body>
</html>
`,Cp=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Privacy Policy | Suraj Public School</title>
    <meta
      name="description"
      content="Privacy policy for the Suraj Public School website."
    />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <main>
      <section class="page-hero">
        <div class="container">
          <div class="breadcrumb">
            <a href="index.html">Home</a><span>/</span
            ><span>Privacy Policy</span>
          </div>
          <h1 class="display">Privacy<br /><em>Policy.</em></h1>
        </div>
      </section>
      <section class="section">
        <div class="container narrow copy">
          <div class="eyebrow">Website information</div>
          <h2>Our approach to privacy</h2>
          <p>
            This website is a static informational website for Suraj Public
            School. The enquiry forms currently demonstrate local validation and
            do not transmit or store submitted information on a server.
          </p>
          <h3>Information you choose to share</h3>
          <p>
            If a future form service is connected, the school should update this
            page to explain what information is collected, why it is used, how
            long it is retained and how families can contact the school about
            it.
          </p>
          <h3>External links</h3>
          <p>
            This website may link to WhatsApp, Google Maps or other external
            services. Those services have their own privacy policies and terms.
          </p>
          <h3>Updates</h3>
          <p>
            Replace this placeholder policy with the school's approved privacy
            policy before launch. Last Updated: [DD/MM/YYYY]
          </p>
        </div>
      </section>
    </main>
    <script src="js/script.js"><\/script>
  </body>
</html>
`,wp=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Student Projects | Suraj Public School</title>
    <meta
      name="description"
      content="Explore a showcase of coding, robotics and student project ideas at Suraj Public School."
    />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <main>
      <section class="page-hero">
        <div class="container">
          <div class="breadcrumb">
            <a href="index.html">Home</a><span>/</span><span>Projects</span>
          </div>
          <h1 class="display">
            Make it. Explain it.<br /><em>Learn from it.</em>
          </h1>
        </div>
      </section>
      <section class="section">
        <div class="container section-heading reveal">
          <div class="eyebrow">Project showcase</div>
          <h2>Learning you can see, touch and discuss.</h2>
          <p>
            Projects give students a reason to combine knowledge, teamwork and
            communication. The showcase below presents editable project entries
            for the school's own photographs and descriptions.
          </p>
        </div>
        <div class="container card-grid">
          <article
            class="card reveal"
            data-project-card
            data-title="Obstacle Avoiding Car"
            data-image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=82"
            data-description="An introductory robotics project exploring sensors, motors, sequence and testing. Replace this description with the school's verified project details."
          >
            <div class="card-image">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=82"
                alt="Obstacle avoiding car project concept"
                loading="lazy"
              />
            </div>
            <div class="card-body">
              <h3>Obstacle Avoiding Car</h3>
              <p>Exploring sensors, movement, logic and iterative testing.</p>
              <button class="btn btn--navy" data-project>View Details</button>
            </div>
          </article>
          <article
            class="card reveal"
            data-project-card
            data-title="Smart Dustbin"
            data-image="https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=1200&q=82"
            data-description="A smart device concept that invites students to explore detection, response and useful automation. Replace this description with verified project details."
          >
            <div class="card-image">
              <img
                src="https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=1200&q=82"
                alt="Smart dustbin project concept"
                loading="lazy"
              />
            </div>
            <div class="card-body">
              <h3>Smart Dustbin</h3>
              <p>Thinking about sensors, automation and practical design.</p>
              <button class="btn btn--navy" data-project>View Details</button>
            </div>
          </article>
          <article
            class="card reveal"
            data-project-card
            data-title="Bag Security Alarm"
            data-image="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=82"
            data-description="A project idea for exploring simple circuits, alerts and everyday problem solving. Replace this description with verified project details."
          >
            <div class="card-image">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=82"
                alt="Security technology concept"
                loading="lazy"
              />
            </div>
            <div class="card-body">
              <h3>Bag Security Alarm</h3>
              <p>Connecting a real-world need with simple electronic logic.</p>
              <button class="btn btn--navy" data-project>View Details</button>
            </div>
          </article>
          <article
            class="card reveal"
            data-project-card
            data-title="Coding Projects"
            data-image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=82"
            data-description="Student coding projects can turn ideas into interactive experiences and clear demonstrations. Replace this description with verified project details."
          >
            <div class="card-image">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=82"
                alt="Student coding project"
                loading="lazy"
              />
            </div>
            <div class="card-body">
              <h3>Coding Projects</h3>
              <p>
                Small programmes that build confidence through making and
                sharing.
              </p>
              <button class="btn btn--navy" data-project>View Details</button>
            </div>
          </article>
          <article
            class="card reveal"
            data-project-card
            data-title="Robotics Demonstrations"
            data-image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=82"
            data-description="Demonstrations make student thinking visible through explanation, teamwork and live testing. Replace this description with verified project details."
          >
            <div class="card-image">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=82"
                alt="Robotics demonstration"
                loading="lazy"
              />
            </div>
            <div class="card-body">
              <h3>Robotics Demonstrations</h3>
              <p>Showing how an idea changes when it meets the real world.</p>
              <button class="btn btn--navy" data-project>View Details</button>
            </div>
          </article>
        </div>
      </section>
      <div class="modal" aria-label="Project details" role="dialog">
        <div class="modal-card">
          <button class="modal-close" aria-label="Close project details">
            ×</button
          ><img src="" alt="" />
          <h2></h2>
          <p></p>
        </div>
      </div>
    </main>
    <script src="js/script.js"><\/script>
  </body>
</html>
`,Rp=`<!doctype html>\r
<html lang="en">\r
  <head>\r
    <meta charset="utf-8" />\r
    <meta name="viewport" content="width=device-width,initial-scale=1" />\r
    <title>Student Results | Suraj Public School, Kotkasim</title>\r
    <meta\r
      name="description"\r
      content="View student academic results and class-wise achievements at Suraj Public School."\r
    />\r
    <link rel="stylesheet" href="css/style.css" />\r
  </head>\r
  <body>\r
    <main>\r
      <section class="page-hero results-hero">\r
        <div class="container">\r
          <div class="breadcrumb">\r
            <a href="index.html">Home</a><span>/</span><span>Results</span>\r
          </div>\r
          <div class="results-hero-content">\r
            <div>\r
              <div class="eyebrow">Academic results</div>\r
              <h1 class="display">\r
                Every mark tells<br /><em>a story of effort.</em>\r
              </h1>\r
              <p>\r
                Celebrating the focus, consistency and progress of our learners.\r
              </p>\r
            </div>\r
            <div class="results-year">\r
              <span>Academic Year</span><strong>2025 - 26</strong>\r
            </div>\r
          </div>\r
        </div>\r
      </section>\r
      <section class="section results-overview">\r
        <div class="container">\r
          <div class="section-heading reveal">\r
            <div class="eyebrow">A proud report</div>\r
            <h2>Progress worth celebrating.</h2>\r
            <p>\r
              Demo result records are shown below. Replace the names, marks and\r
              photos with the school's verified records when ready.\r
            </p>\r
          </div>\r
          <div class="results-stats reveal">\r
            <div>\r
              <strong>98<span>%</span></strong\r
              ><small>Pass percentage</small>\r
            </div>\r
            <div>\r
              <strong>92<span>%</span></strong\r
              ><small>Highest aggregate</small>\r
            </div>\r
            <div>\r
              <strong>86<span>%</span></strong\r
              ><small>Class average</small>\r
            </div>\r
            <div><strong>24</strong><small>Merit achievers</small></div>\r
          </div>\r
        </div>\r
      </section>\r
      <section class="section section--mist">\r
        <div class="container">\r
          <div class="results-section-heading reveal">\r
            <div>\r
              <div class="eyebrow">Senior secondary</div>\r
              <h2>Class XII highlights</h2>\r
            </div>\r
            <span class="results-badge">Top performers</span>\r
          </div>\r
          <div class="results-grid">\r
            <article class="result-card reveal">\r
              <div class="result-photo">\r
                <img\r
                  src="assets/images/results/class-12/aarav-sharma.png"\r
                  alt="Demo photo of Aarav Sharma"\r
                  loading="lazy"\r
                />\r
              </div>\r
              <div class="result-content">\r
                <span class="result-rank">01 · Science</span>\r
                <h3>Aarav Sharma</h3>\r
                <p>Class XII · Science</p>\r
                <div class="result-score">\r
                  <strong>92%</strong><span>Aggregate</span>\r
                </div>\r
                <div class="marks">\r
                  <span>Physics <b>94</b></span\r
                  ><span>Chemistry <b>91</b></span\r
                  ><span>Mathematics <b>93</b></span>\r
                </div>\r
              </div>\r
            </article>\r
            <article class="result-card reveal">\r
              <div class="result-photo">\r
                <img\r
                  src="assets/images/results/class-12/ananya-verma.png"\r
                  alt="Demo photo of Ananya Verma"\r
                  loading="lazy"\r
                />\r
              </div>\r
              <div class="result-content">\r
                <span class="result-rank">02 · Commerce</span>\r
                <h3>Ananya Verma</h3>\r
                <p>Class XII · Commerce</p>\r
                <div class="result-score">\r
                  <strong>89%</strong><span>Aggregate</span>\r
                </div>\r
                <div class="marks">\r
                  <span>Accounts <b>91</b></span\r
                  ><span>Business <b>88</b></span\r
                  ><span>Economics <b>89</b></span>\r
                </div>\r
              </div>\r
            </article>\r
            <article class="result-card reveal">\r
              <div class="result-photo">\r
                <img\r
                  src="assets/images/results/class-12/vivaan-singh.png"\r
                  alt="Demo photo of Vivaan Singh"\r
                  loading="lazy"\r
                />\r
              </div>\r
              <div class="result-content">\r
                <span class="result-rank">03 · Humanities</span>\r
                <h3>Vivaan Singh</h3>\r
                <p>Class XII · Humanities</p>\r
                <div class="result-score">\r
                  <strong>86%</strong><span>Aggregate</span>\r
                </div>\r
                <div class="marks">\r
                  <span>English <b>90</b></span\r
                  ><span>History <b>85</b></span\r
                  ><span>Political Science <b>87</b></span>\r
                </div>\r
              </div>\r
            </article>\r
          </div>\r
        </div>\r
      </section>\r
      <section class="section">\r
        <div class="container">\r
          <div class="results-section-heading reveal">\r
            <div>\r
              <div class="eyebrow">Secondary school</div>\r
              <h2>Class X highlights</h2>\r
            </div>\r
            <span class="results-badge results-badge--blue"\r
              >Strong foundations</span\r
            >\r
          </div>\r
          <div class="results-grid">\r
            <article class="result-card reveal">\r
              <div class="result-photo">\r
                <img\r
                  src="assets/images/results/class-10/diya-yadav.png"\r
                  alt="Demo photo of Diya Yadav"\r
                  loading="lazy"\r
                />\r
              </div>\r
              <div class="result-content">\r
                <span class="result-rank">01 · Class X</span>\r
                <h3>Diya Yadav</h3>\r
                <p>Class X · CBSE</p>\r
                <div class="result-score">\r
                  <strong>94%</strong><span>Aggregate</span>\r
                </div>\r
                <div class="marks">\r
                  <span>Mathematics <b>96</b></span\r
                  ><span>Science <b>93</b></span\r
                  ><span>English <b>92</b></span>\r
                </div>\r
              </div>\r
            </article>\r
            <article class="result-card reveal">\r
              <div class="result-photo">\r
                <img\r
                  src="assets/images/results/class-10/reyansh-kumar.png"\r
                  alt="Demo photo of Reyansh Kumar"\r
                  loading="lazy"\r
                />\r
              </div>\r
              <div class="result-content">\r
                <span class="result-rank">02 · Class X</span>\r
                <h3>Reyansh Kumar</h3>\r
                <p>Class X · CBSE</p>\r
                <div class="result-score">\r
                  <strong>90%</strong><span>Aggregate</span>\r
                </div>\r
                <div class="marks">\r
                  <span>Mathematics <b>92</b></span\r
                  ><span>Science <b>89</b></span\r
                  ><span>Social Science <b>91</b></span>\r
                </div>\r
              </div>\r
            </article>\r
            <article class="result-card reveal">\r
              <div class="result-photo">\r
                <img\r
                  src="assets/images/results/class-10/meera-gupta.png"\r
                  alt="Demo photo of Meera Gupta"\r
                  loading="lazy"\r
                />\r
              </div>\r
              <div class="result-content">\r
                <span class="result-rank">03 · Class X</span>\r
                <h3>Meera Gupta</h3>\r
                <p>Class X · CBSE</p>\r
                <div class="result-score">\r
                  <strong>88%</strong><span>Aggregate</span>\r
                </div>\r
                <div class="marks">\r
                  <span>Hindi <b>91</b></span\r
                  ><span>Science <b>87</b></span\r
                  ><span>English <b>89</b></span>\r
                </div>\r
              </div>\r
            </article>\r
          </div>\r
        </div>\r
      </section>\r
      <section class="cta results-cta">\r
        <div class="container cta-inner">\r
          <h2>Behind every result is a journey.</h2>\r
          <a class="btn btn--gold" href="contact.html">Contact the school →</a>\r
        </div>\r
      </section>\r
    </main>\r
    <script src="js/script.js"><\/script>\r
  </body>\r
</html>\r
`,Up=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Terms & Conditions | Suraj Public School</title>
    <meta
      name="description"
      content="Terms and conditions for the Suraj Public School website."
    />
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    <main>
      <section class="page-hero">
        <div class="container">
          <div class="breadcrumb">
            <a href="index.html">Home</a><span>/</span
            ><span>Terms & Conditions</span>
          </div>
          <h1 class="display">Terms &<br /><em>Conditions.</em></h1>
        </div>
      </section>
      <section class="section">
        <div class="container narrow copy">
          <div class="eyebrow">Website use</div>
          <h2>Information for visitors</h2>
          <p>
            This website is intended to provide general information about Suraj
            Public School, Kotkasim. Information should be reviewed and updated
            by the school before being treated as an official current record.
          </p>
          <h3>Accuracy and updates</h3>
          <p>
            The school should update programme details, documents, dates,
            photographs and other information as appropriate. Where a page
            contains a marked placeholder, it should not be treated as confirmed
            information.
          </p>
          <h3>External services</h3>
          <p>
            Links to external services such as WhatsApp and Google Maps are
            provided for convenience and are subject to the terms of those
            services.
          </p>
          <h3>Contact</h3>
          <p>
            For questions about information on this website, contact Suraj
            Public School at 99507 11477. Last Updated: [DD/MM/YYYY]
          </p>
        </div>
      </section>
    </main>
    <script src="js/script.js"><\/script>
  </body>
</html>
`,_o=Object.assign({"../legacy-pages/404.html":gp,"../legacy-pages/about.html":pp,"../legacy-pages/achievements.html":yp,"../legacy-pages/activities.html":bp,"../legacy-pages/admissions.html":Sp,"../legacy-pages/annual-report.html":Tp,"../legacy-pages/coding-robotics.html":Ep,"../legacy-pages/contact.html":Ap,"../legacy-pages/events.html":_p,"../legacy-pages/facilities.html":zp,"../legacy-pages/gallery.html":Op,"../legacy-pages/index.html":Np,"../legacy-pages/mandatory-disclosure.html":jp,"../legacy-pages/our-teachers.html":Dp,"../legacy-pages/principal.html":Mp,"../legacy-pages/privacy-policy.html":Cp,"../legacy-pages/projects.html":wp,"../legacy-pages/results.html":Rp,"../legacy-pages/terms.html":Up}),Hp=[["index.html","Home"],["about.html","About"],["our-teachers.html","Our Teachers"],["results.html","Results"],["admissions.html","Admissions"],["activities.html","Activities"],["gallery.html","Gallery"],["contact.html","Contact"]],zo=(A=window.location.pathname)=>{const X=A.split("/").pop();return X&&X.endsWith(".html")?X:"index.html"},qp=A=>{var V;const X=_o[`../legacy-pages/${A}`]||_o["../legacy-pages/404.html"];return((V=X==null?void 0:X.match(/<main[\s\S]*?<\/main>/i))==null?void 0:V[0])||'<main><section class="section"><div class="container"><h1>Page not found</h1></div></section></main>'},xp=A=>{var X,V;return((V=(X=_o[`../legacy-pages/${A}`])==null?void 0:X.match(/<title>(.*?)<\/title>/i))==null?void 0:V[1])||"Suraj Public School"};function Yp({route:A,open:X,setOpen:V}){const g=A==="index.html";return E.jsx("header",{className:`site-header${g?" site-header--home":""}`,children:E.jsxs("div",{className:"container nav-wrap",children:[E.jsxs("a",{className:"brand",href:"index.html","aria-label":"Suraj Public School home",children:[E.jsx("img",{className:"brand-logo",src:"/assets/images/shared/school-logo.jpg",alt:"Suraj Public School logo"}),E.jsxs("span",{className:"brand-copy",children:[E.jsx("strong",{children:"Suraj Public School"}),E.jsx("small",{children:"Kotkasim, Rajasthan"})]})]}),E.jsxs("button",{className:`menu-toggle${X?" open":""}`,"aria-label":X?"Close navigation":"Open navigation","aria-expanded":X,onClick:()=>V(!X),children:[E.jsx("span",{}),E.jsx("span",{}),E.jsx("span",{})]}),E.jsxs("nav",{className:`main-nav${X?" open":""}`,"aria-label":"Primary navigation",children:[Hp.map(([H,z])=>E.jsx("a",{className:A===H?"active":"",href:H,children:z},H)),E.jsx("a",{href:"admissions.html#enquiry",className:"btn btn--gold nav-cta",children:"Enquire Now"})]})]})})}function Bp(){return E.jsxs("footer",{className:"site-footer",children:[E.jsxs("div",{className:"container footer-grid",children:[E.jsxs("div",{className:"footer-brand",children:[E.jsxs("a",{className:"brand",href:"index.html",children:[E.jsx("img",{className:"brand-logo",src:"/assets/images/shared/school-logo.jpg",alt:"Suraj Public School logo"}),E.jsxs("span",{className:"brand-copy",children:[E.jsx("strong",{children:"Suraj Public School"}),E.jsx("small",{children:"Kotkasim, Rajasthan"})]})]}),E.jsx("p",{children:"A trusted learning community shaping confident, thoughtful and future-ready learners through education, discipline and character."}),E.jsxs("div",{className:"socials",children:[E.jsx("a",{href:"#","aria-label":"Facebook",children:"f"}),E.jsx("a",{href:"#","aria-label":"Instagram",children:"ig"}),E.jsx("a",{href:"#","aria-label":"YouTube",children:"▶"})]})]}),E.jsxs("div",{children:[E.jsx("h3",{children:"Quick Links"}),E.jsxs("ul",{className:"footer-links",children:[E.jsx("li",{children:E.jsx("a",{href:"index.html",children:"Home"})}),E.jsx("li",{children:E.jsx("a",{href:"about.html",children:"About"})}),E.jsx("li",{children:E.jsx("a",{href:"our-teachers.html",children:"Our Teachers"})}),E.jsx("li",{children:E.jsx("a",{href:"admissions.html",children:"Admissions"})}),E.jsx("li",{children:E.jsx("a",{href:"gallery.html",children:"Gallery"})}),E.jsx("li",{children:E.jsx("a",{href:"contact.html",children:"Contact"})})]})]}),E.jsxs("div",{children:[E.jsx("h3",{children:"School"}),E.jsxs("ul",{className:"footer-links",children:[E.jsx("li",{children:E.jsx("a",{href:"principal.html",children:"Principal"})}),E.jsx("li",{children:E.jsx("a",{href:"activities.html",children:"Activities"})}),E.jsx("li",{children:E.jsx("a",{href:"coding-robotics.html",children:"Coding & Robotics"})}),E.jsx("li",{children:E.jsx("a",{href:"projects.html",children:"Projects"})}),E.jsx("li",{children:E.jsx("a",{href:"achievements.html",children:"Achievements"})}),E.jsx("li",{children:E.jsx("a",{href:"events.html",children:"Events"})})]})]}),E.jsxs("div",{children:[E.jsx("h3",{children:"Important"}),E.jsxs("ul",{className:"footer-links",children:[E.jsx("li",{children:E.jsx("a",{href:"mandatory-disclosure.html",children:"Mandatory Public Disclosure"})}),E.jsx("li",{children:E.jsx("a",{href:"annual-report.html",children:"Annual Report"})}),E.jsx("li",{children:E.jsx("a",{href:"privacy-policy.html",children:"Privacy Policy"})}),E.jsx("li",{children:E.jsx("a",{href:"terms.html",children:"Terms & Conditions"})})]}),E.jsxs("p",{style:{color:"#b7c5d4",fontSize:".85rem"},children:["Chowki Road, Kotkasim,",E.jsx("br",{}),"Rajasthan - 301702",E.jsx("br",{}),E.jsx("a",{href:"tel:9950711477",children:"99507 11477"})]})]})]}),E.jsxs("div",{className:"container footer-bottom",children:[E.jsx("span",{children:"© 2026 Suraj Public School, Kotkasim. All Rights Reserved."}),E.jsx("span",{children:"CBSE Affiliation No. 1730355"})]})]})}function Gp(){return E.jsxs("div",{className:"floating-actions",children:[E.jsx("a",{className:"whatsapp",href:"https://wa.me/919950711477?text=Hello%20Suraj%20Public%20School%2C%20I%20would%20like%20to%20enquire%20about%20admission%20and%20school%20information.",target:"_blank",rel:"noopener","aria-label":"Chat on WhatsApp",title:"Chat on WhatsApp",children:E.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:E.jsx("path",{d:"M20.5 3.5A11.8 11.8 0 0 0 12.1 0C5.6 0 .3 5.3.3 11.8c0 2.1.6 4.1 1.6 5.8L.2 24l6.6-1.7a11.8 11.8 0 0 0 5.3 1.3h.1c6.5 0 11.8-5.3 11.8-11.8 0-3.2-1.2-6.1-3.5-8.3Zm-8.4 18.1h-.1a9.8 9.8 0 0 1-5-1.4l-.4-.2-3.9 1 1-3.8-.3-.4a9.8 9.8 0 1 1 8.7 4.8Zm5.4-7.3c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.5.8-1.6.1-.2.1-.4 0-.6-.1-.2-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.3 3.2c.2.2 2.2 3.4 5.4 4.8 2.1.9 2.6 1 3.5.8.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.1-1.5-.1-.1-.3-.2-.6-.4Z"})})}),E.jsx("a",{className:"call-action",href:"tel:9950711477","aria-label":"Call Suraj Public School",title:"Call Suraj Public School",children:E.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:E.jsx("path",{d:"M6.6 2.8 9 2.2c.7-.2 1.4.2 1.7.9l1.1 2.7c.2.6.1 1.2-.4 1.6L10 8.7c1 2.1 2.7 3.8 4.8 4.8l1.3-1.4c.4-.4 1-.6 1.6-.4l2.7 1.1c.7.3 1.1 1 .9 1.7l-.6 2.4c-.2.8-.9 1.4-1.7 1.4C11.3 18.3 5.7 12.7 5.7 5c0-.8.6-1.5 1.4-1.7Z"})})}),E.jsx("button",{className:"back-top","aria-label":"Back to top",title:"Back to top",children:"↑"})]})}function Lp(A,X,V,g){ol.useEffect(()=>{document.title=xp(X),window.scrollTo({top:0,behavior:"instant"});const H=A.current,z=xn=>{const on=xn.target.closest("a");if(!on||on.target==="_blank"||on.origin!==window.location.origin)return;const dn=on.getAttribute("href");if(!(dn!=null&&dn.endsWith(".html"))&&!(dn!=null&&dn.includes(".html#")))return;xn.preventDefault();const[U,y]=dn.split("#"),q=zo(U);window.history.pushState({},"",dn),V(q),g(!1),window.setTimeout(()=>{var _n;return y&&((_n=document.getElementById(y))==null?void 0:_n.scrollIntoView())},40)};H==null||H.addEventListener("click",z);const gn=()=>V(zo());return window.addEventListener("popstate",gn),()=>{H==null||H.removeEventListener("click",z),window.removeEventListener("popstate",gn)}},[A,X,V,g]),ol.useEffect(()=>{var Mn,O,x,Y,rn,an;const H=()=>{var C,K;(C=document.querySelector(".site-header"))==null||C.classList.toggle("scrolled",window.scrollY>30),(K=document.querySelector(".back-top"))==null||K.classList.toggle("show",window.scrollY>500)},z=A.current,gn=z==null?void 0:z.querySelector(".back-top"),xn=()=>window.scrollTo({top:0,behavior:"smooth"});window.addEventListener("scroll",H,{passive:!0}),gn==null||gn.addEventListener("click",xn);const on=[...(z==null?void 0:z.querySelectorAll(".hero-slide"))||[]],dn=z==null?void 0:z.querySelector(".hero-slides");let U=0;const y=C=>{U=(C+on.length)%on.length,dn&&(dn.style.transform=`translateX(-${U*100}%)`)};on.forEach(C=>{C.style.backgroundImage=`url("${C.dataset.image}")`});const q=on.length>1?window.setInterval(()=>y(U+1),5e3):void 0;(Mn=z==null?void 0:z.querySelector("[data-hero-prev]"))==null||Mn.addEventListener("click",()=>y(U-1)),(O=z==null?void 0:z.querySelector("[data-hero-next]"))==null||O.addEventListener("click",()=>y(U+1));const _n=z==null?void 0:z.querySelector("[data-filter-group]"),$n=[...(_n==null?void 0:_n.querySelectorAll("[data-filter]"))||[]],In=[...(z==null?void 0:z.querySelectorAll('[data-filter-item="gallery"]'))||[]],pn=C=>{const K=C.currentTarget;$n.forEach(On=>On.classList.remove("active")),K.classList.add("active"),In.forEach(On=>{On.hidden=K.dataset.filter!=="all"&&On.dataset.category!==K.dataset.filter})};$n.forEach(C=>C.addEventListener("click",pn));const Yn=[...(z==null?void 0:z.querySelectorAll(".gallery-item"))||[]],$=z==null?void 0:z.querySelector(".lightbox");let ut=0;const Pn=C=>{if(!$||!Yn.length)return;ut=(C+Yn.length)%Yn.length;const K=Yn[ut].querySelector("img");$.querySelector("img").src=K.src,$.querySelector("img").alt=K.alt,$.classList.add("open"),document.body.style.overflow="hidden"},gt=()=>{$==null||$.classList.remove("open"),document.body.style.overflow=""};Yn.forEach((C,K)=>C.addEventListener("click",()=>Pn(K))),(x=$==null?void 0:$.querySelector(".lightbox-close"))==null||x.addEventListener("click",gt),(Y=$==null?void 0:$.querySelector("[data-next]"))==null||Y.addEventListener("click",()=>Pn(ut+1)),(rn=$==null?void 0:$.querySelector("[data-prev]"))==null||rn.addEventListener("click",()=>Pn(ut-1));const Sn=z==null?void 0:z.querySelector(".modal"),J=C=>{const K=C.currentTarget.closest("[data-project-card]");!Sn||!K||(Sn.querySelector("img").src=K.dataset.image,Sn.querySelector("img").alt=K.dataset.title,Sn.querySelector("h2").textContent=K.dataset.title,Sn.querySelector("p").textContent=K.dataset.description,Sn.classList.add("open"),document.body.style.overflow="hidden")},nn=()=>{Sn==null||Sn.classList.remove("open"),document.body.style.overflow=""};z==null||z.querySelectorAll("[data-project]").forEach(C=>C.addEventListener("click",J)),(an=Sn==null?void 0:Sn.querySelector(".modal-close"))==null||an.addEventListener("click",nn);const st=[...(z==null?void 0:z.querySelectorAll("form[data-validate]"))||[]].map(C=>{const K=On=>{var r;if(!C.checkValidity()){On.preventDefault(),C.reportValidity();return}C.hasAttribute("data-email-delivery")||(On.preventDefault(),C.reset(),(r=C.querySelector(".form-message"))==null||r.classList.add("show"))};return C.addEventListener("submit",K),[C,K]}),ot=[...(z==null?void 0:z.querySelectorAll("[data-whatsapp-enquiry], [data-whatsapp-contact]"))||[]].map(C=>{const K=()=>{const On=C.closest("form");if(!(On!=null&&On.checkValidity())){On==null||On.reportValidity();return}const r=w=>{var M;return((M=On.elements[w])==null?void 0:M.value.trim())||"Not provided"},T=C.hasAttribute("data-whatsapp-enquiry")?["Hello Suraj Public School, I would like to make an admission enquiry.",`Student Name: ${r("student")}`,`Parent/Guardian Name: ${r("parent")}`,`Class Applying For: ${r("class")}`,`Mobile Number: ${r("mobile")}`,`Email: ${r("email")}`,`Message: ${r("message")}`].join(`
`):["Hello Suraj Public School, I would like to send a message.",`Name: ${r("name")}`,`Mobile Number: ${r("phone")}`,`Message: ${r("message")}`].join(`
`);window.open(`https://wa.me/919950711477?text=${encodeURIComponent(T)}`,"_blank","noopener")};return C.addEventListener("click",K),[C,K]}),tt=[...(z==null?void 0:z.querySelectorAll(".reveal"))||[]],at="IntersectionObserver"in window?new IntersectionObserver(C=>C.forEach(K=>{K.isIntersecting&&(K.target.classList.add("visible"),at.unobserve(K.target))}),{threshold:.12}):null;tt.forEach(C=>at?at.observe(C):C.classList.add("visible"));const Qt=C=>{C.key==="Escape"&&(gt(),nn()),$!=null&&$.classList.contains("open")&&C.key==="ArrowRight"&&Pn(ut+1),$!=null&&$.classList.contains("open")&&C.key==="ArrowLeft"&&Pn(ut-1)};return document.addEventListener("keydown",Qt),H(),()=>{window.removeEventListener("scroll",H),gn==null||gn.removeEventListener("click",xn),window.clearInterval(q),at==null||at.disconnect(),document.removeEventListener("keydown",Qt),st.forEach(([C,K])=>C.removeEventListener("submit",K)),ot.forEach(([C,K])=>C.removeEventListener("click",K)),document.body.style.overflow=""}},[A,X])}function Xp(){const[A,X]=ol.useState(zo),[V,g]=ol.useState(!1),H=ol.useRef(null);return Lp(H,A,X,g),E.jsxs("div",{ref:H,children:[E.jsx(Yp,{route:A,open:V,setOpen:g}),E.jsx("div",{dangerouslySetInnerHTML:{__html:qp(A)}}),E.jsx(Bp,{}),E.jsx(Gp,{})]})}mp.createRoot(document.getElementById("root")).render(E.jsx(sp.StrictMode,{children:E.jsx(Xp,{})}));
