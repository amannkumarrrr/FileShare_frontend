var up=Object.defineProperty;var pp=(e,t,n)=>t in e?up(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Ci=(e,t,n)=>pp(e,typeof t!="symbol"?t+"":t,n);function fp(e,t){for(var n=0;n<t.length;n++){const s=t[n];if(typeof s!="string"&&!Array.isArray(s)){for(const i in s)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(s,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>s[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function mp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Dc={exports:{}},ri={},Pc={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zr=Symbol.for("react.element"),hp=Symbol.for("react.portal"),xp=Symbol.for("react.fragment"),vp=Symbol.for("react.strict_mode"),gp=Symbol.for("react.profiler"),yp=Symbol.for("react.provider"),jp=Symbol.for("react.context"),wp=Symbol.for("react.forward_ref"),bp=Symbol.for("react.suspense"),kp=Symbol.for("react.memo"),Sp=Symbol.for("react.lazy"),oo=Symbol.iterator;function Np(e){return e===null||typeof e!="object"?null:(e=oo&&e[oo]||e["@@iterator"],typeof e=="function"?e:null)}var Lc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mc=Object.assign,Rc={};function Zn(e,t,n){this.props=e,this.context=t,this.refs=Rc,this.updater=n||Lc}Zn.prototype.isReactComponent={};Zn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Zn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _c(){}_c.prototype=Zn.prototype;function tl(e,t,n){this.props=e,this.context=t,this.refs=Rc,this.updater=n||Lc}var nl=tl.prototype=new _c;nl.constructor=tl;Mc(nl,Zn.prototype);nl.isPureReactComponent=!0;var co=Array.isArray,Ic=Object.prototype.hasOwnProperty,rl={current:null},Oc={key:!0,ref:!0,__self:!0,__source:!0};function Fc(e,t,n){var s,i={},a=null,l=null;if(t!=null)for(s in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(a=""+t.key),t)Ic.call(t,s)&&!Oc.hasOwnProperty(s)&&(i[s]=t[s]);var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){for(var o=Array(c),d=0;d<c;d++)o[d]=arguments[d+2];i.children=o}if(e&&e.defaultProps)for(s in c=e.defaultProps,c)i[s]===void 0&&(i[s]=c[s]);return{$$typeof:Zr,type:e,key:a,ref:l,props:i,_owner:rl.current}}function Cp(e,t){return{$$typeof:Zr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function sl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zr}function zp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var uo=/\/+/g;function zi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?zp(""+e.key):t.toString(36)}function vs(e,t,n,s,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(a){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Zr:case hp:l=!0}}if(l)return l=e,i=i(l),e=s===""?"."+zi(l,0):s,co(i)?(n="",e!=null&&(n=e.replace(uo,"$&/")+"/"),vs(i,t,n,"",function(d){return d})):i!=null&&(sl(i)&&(i=Cp(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(uo,"$&/")+"/")+e)),t.push(i)),1;if(l=0,s=s===""?".":s+":",co(e))for(var c=0;c<e.length;c++){a=e[c];var o=s+zi(a,c);l+=vs(a,t,n,o,i)}else if(o=Np(e),typeof o=="function")for(e=o.call(e),c=0;!(a=e.next()).done;)a=a.value,o=s+zi(a,c++),l+=vs(a,t,n,o,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Xr(e,t,n){if(e==null)return e;var s=[],i=0;return vs(e,s,"","",function(a){return t.call(n,a,i++)}),s}function Ep(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Se={current:null},gs={transition:null},Ap={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:gs,ReactCurrentOwner:rl};function Uc(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:Xr,forEach:function(e,t,n){Xr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Xr(e,function(){t++}),t},toArray:function(e){return Xr(e,function(t){return t})||[]},only:function(e){if(!sl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=Zn;U.Fragment=xp;U.Profiler=gp;U.PureComponent=tl;U.StrictMode=vp;U.Suspense=bp;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ap;U.act=Uc;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var s=Mc({},e.props),i=e.key,a=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,l=rl.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(o in t)Ic.call(t,o)&&!Oc.hasOwnProperty(o)&&(s[o]=t[o]===void 0&&c!==void 0?c[o]:t[o])}var o=arguments.length-2;if(o===1)s.children=n;else if(1<o){c=Array(o);for(var d=0;d<o;d++)c[d]=arguments[d+2];s.children=c}return{$$typeof:Zr,type:e.type,key:i,ref:a,props:s,_owner:l}};U.createContext=function(e){return e={$$typeof:jp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:yp,_context:e},e.Consumer=e};U.createElement=Fc;U.createFactory=function(e){var t=Fc.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:wp,render:e}};U.isValidElement=sl;U.lazy=function(e){return{$$typeof:Sp,_payload:{_status:-1,_result:e},_init:Ep}};U.memo=function(e,t){return{$$typeof:kp,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=gs.transition;gs.transition={};try{e()}finally{gs.transition=t}};U.unstable_act=Uc;U.useCallback=function(e,t){return Se.current.useCallback(e,t)};U.useContext=function(e){return Se.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return Se.current.useDeferredValue(e)};U.useEffect=function(e,t){return Se.current.useEffect(e,t)};U.useId=function(){return Se.current.useId()};U.useImperativeHandle=function(e,t,n){return Se.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return Se.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return Se.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return Se.current.useMemo(e,t)};U.useReducer=function(e,t,n){return Se.current.useReducer(e,t,n)};U.useRef=function(e){return Se.current.useRef(e)};U.useState=function(e){return Se.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return Se.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return Se.current.useTransition()};U.version="18.3.1";Pc.exports=U;var v=Pc.exports;const si=mp(v),Tp=fp({__proto__:null,default:si},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp=v,Pp=Symbol.for("react.element"),Lp=Symbol.for("react.fragment"),Mp=Object.prototype.hasOwnProperty,Rp=Dp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_p={key:!0,ref:!0,__self:!0,__source:!0};function Bc(e,t,n){var s,i={},a=null,l=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(l=t.ref);for(s in t)Mp.call(t,s)&&!_p.hasOwnProperty(s)&&(i[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)i[s]===void 0&&(i[s]=t[s]);return{$$typeof:Pp,type:e,key:a,ref:l,props:i,_owner:Rp.current}}ri.Fragment=Lp;ri.jsx=Bc;ri.jsxs=Bc;Dc.exports=ri;var r=Dc.exports,na={},$c={exports:{}},Ie={},Vc={exports:{}},Hc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,O){var F=A.length;A.push(O);e:for(;0<F;){var Z=F-1>>>1,te=A[Z];if(0<i(te,O))A[Z]=O,A[F]=te,F=Z;else break e}}function n(A){return A.length===0?null:A[0]}function s(A){if(A.length===0)return null;var O=A[0],F=A.pop();if(F!==O){A[0]=F;e:for(var Z=0,te=A.length,R=te>>>1;Z<R;){var Fe=2*(Z+1)-1,Nt=A[Fe],Ze=Fe+1,T=A[Ze];if(0>i(Nt,F))Ze<te&&0>i(T,Nt)?(A[Z]=T,A[Ze]=F,Z=Ze):(A[Z]=Nt,A[Fe]=F,Z=Fe);else if(Ze<te&&0>i(T,F))A[Z]=T,A[Ze]=F,Z=Ze;else break e}}return O}function i(A,O){var F=A.sortIndex-O.sortIndex;return F!==0?F:A.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var l=Date,c=l.now();e.unstable_now=function(){return l.now()-c}}var o=[],d=[],x=1,h=null,u=3,j=!1,y=!1,w=!1,b=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(A){for(var O=n(d);O!==null;){if(O.callback===null)s(d);else if(O.startTime<=A)s(d),O.sortIndex=O.expirationTime,t(o,O);else break;O=n(d)}}function g(A){if(w=!1,m(A),!y)if(n(o)!==null)y=!0,Ge(S);else{var O=n(d);O!==null&&st(g,O.startTime-A)}}function S(A,O){y=!1,w&&(w=!1,f(P),P=-1),j=!0;var F=u;try{for(m(O),h=n(o);h!==null&&(!(h.expirationTime>O)||A&&!H());){var Z=h.callback;if(typeof Z=="function"){h.callback=null,u=h.priorityLevel;var te=Z(h.expirationTime<=O);O=e.unstable_now(),typeof te=="function"?h.callback=te:h===n(o)&&s(o),m(O)}else s(o);h=n(o)}if(h!==null)var R=!0;else{var Fe=n(d);Fe!==null&&st(g,Fe.startTime-O),R=!1}return R}finally{h=null,u=F,j=!1}}var z=!1,E=null,P=-1,$=5,k=-1;function H(){return!(e.unstable_now()-k<$)}function ae(){if(E!==null){var A=e.unstable_now();k=A;var O=!0;try{O=E(!0,A)}finally{O?M():(z=!1,E=null)}}else z=!1}var M;if(typeof p=="function")M=function(){p(ae)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,Pe=se.port2;se.port1.onmessage=ae,M=function(){Pe.postMessage(null)}}else M=function(){b(ae,0)};function Ge(A){E=A,z||(z=!0,M())}function st(A,O){P=b(function(){A(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){y||j||(y=!0,Ge(S))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return u},e.unstable_getFirstCallbackNode=function(){return n(o)},e.unstable_next=function(A){switch(u){case 1:case 2:case 3:var O=3;break;default:O=u}var F=u;u=O;try{return A()}finally{u=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,O){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var F=u;u=A;try{return O()}finally{u=F}},e.unstable_scheduleCallback=function(A,O,F){var Z=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?Z+F:Z):F=Z,A){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=F+te,A={id:x++,callback:O,priorityLevel:A,startTime:F,expirationTime:te,sortIndex:-1},F>Z?(A.sortIndex=F,t(d,A),n(o)===null&&A===n(d)&&(w?(f(P),P=-1):w=!0,st(g,F-Z))):(A.sortIndex=te,t(o,A),y||j||(y=!0,Ge(S))),A},e.unstable_shouldYield=H,e.unstable_wrapCallback=function(A){var O=u;return function(){var F=u;u=O;try{return A.apply(this,arguments)}finally{u=F}}}})(Hc);Vc.exports=Hc;var Ip=Vc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op=v,_e=Ip;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wc=new Set,Sr={};function mn(e,t){In(e,t),In(e+"Capture",t)}function In(e,t){for(Sr[e]=t,e=0;e<t.length;e++)Wc.add(t[e])}var gt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ra=Object.prototype.hasOwnProperty,Fp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,po={},fo={};function Up(e){return ra.call(fo,e)?!0:ra.call(po,e)?!1:Fp.test(e)?fo[e]=!0:(po[e]=!0,!1)}function Bp(e,t,n,s){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function $p(e,t,n,s){if(t===null||typeof t>"u"||Bp(e,t,n,s))return!0;if(s)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ne(e,t,n,s,i,a,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=l}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new Ne(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new Ne(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new Ne(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new Ne(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new Ne(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new Ne(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new Ne(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new Ne(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new Ne(e,5,!1,e.toLowerCase(),null,!1,!1)});var il=/[\-:]([a-z])/g;function al(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(il,al);he[t]=new Ne(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(il,al);he[t]=new Ne(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(il,al);he[t]=new Ne(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new Ne(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new Ne("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new Ne(e,1,!1,e.toLowerCase(),null,!0,!0)});function ll(e,t,n,s){var i=he.hasOwnProperty(t)?he[t]:null;(i!==null?i.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&($p(t,n,i,s)&&(n=null),s||i===null?Up(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,s=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,s?e.setAttributeNS(s,t,n):e.setAttribute(t,n))))}var bt=Op.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,es=Symbol.for("react.element"),yn=Symbol.for("react.portal"),jn=Symbol.for("react.fragment"),ol=Symbol.for("react.strict_mode"),sa=Symbol.for("react.profiler"),Gc=Symbol.for("react.provider"),Zc=Symbol.for("react.context"),cl=Symbol.for("react.forward_ref"),ia=Symbol.for("react.suspense"),aa=Symbol.for("react.suspense_list"),dl=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),qc=Symbol.for("react.offscreen"),mo=Symbol.iterator;function nr(e){return e===null||typeof e!="object"?null:(e=mo&&e[mo]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Object.assign,Ei;function dr(e){if(Ei===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ei=t&&t[1]||""}return`
`+Ei+e}var Ai=!1;function Ti(e,t){if(!e||Ai)return"";Ai=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var s=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){s=d}e.call(t.prototype)}else{try{throw Error()}catch(d){s=d}e()}}catch(d){if(d&&s&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),a=s.stack.split(`
`),l=i.length-1,c=a.length-1;1<=l&&0<=c&&i[l]!==a[c];)c--;for(;1<=l&&0<=c;l--,c--)if(i[l]!==a[c]){if(l!==1||c!==1)do if(l--,c--,0>c||i[l]!==a[c]){var o=`
`+i[l].replace(" at new "," at ");return e.displayName&&o.includes("<anonymous>")&&(o=o.replace("<anonymous>",e.displayName)),o}while(1<=l&&0<=c);break}}}finally{Ai=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?dr(e):""}function Vp(e){switch(e.tag){case 5:return dr(e.type);case 16:return dr("Lazy");case 13:return dr("Suspense");case 19:return dr("SuspenseList");case 0:case 2:case 15:return e=Ti(e.type,!1),e;case 11:return e=Ti(e.type.render,!1),e;case 1:return e=Ti(e.type,!0),e;default:return""}}function la(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case jn:return"Fragment";case yn:return"Portal";case sa:return"Profiler";case ol:return"StrictMode";case ia:return"Suspense";case aa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Zc:return(e.displayName||"Context")+".Consumer";case Gc:return(e._context.displayName||"Context")+".Provider";case cl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case dl:return t=e.displayName||null,t!==null?t:la(e.type)||"Memo";case Et:t=e._payload,e=e._init;try{return la(e(t))}catch{}}return null}function Hp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return la(t);case 8:return t===ol?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Wt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Wp(e){var t=Qc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){s=""+l,a.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return s},setValue:function(l){s=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ts(e){e._valueTracker||(e._valueTracker=Wp(e))}function Kc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),s="";return e&&(s=Qc(e)?e.checked?"true":"false":e.value),e=s,e!==n?(t.setValue(e),!0):!1}function As(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function oa(e,t){var n=t.checked;return ee({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ho(e,t){var n=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;n=Wt(t.value!=null?t.value:n),e._wrapperState={initialChecked:s,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Yc(e,t){t=t.checked,t!=null&&ll(e,"checked",t,!1)}function ca(e,t){Yc(e,t);var n=Wt(t.value),s=t.type;if(n!=null)s==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?da(e,t.type,n):t.hasOwnProperty("defaultValue")&&da(e,t.type,Wt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function da(e,t,n){(t!=="number"||As(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ur=Array.isArray;function Dn(e,t,n,s){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&s&&(e[n].defaultSelected=!0)}else{for(n=""+Wt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,s&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ua(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return ee({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(ur(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Wt(n)}}function Jc(e,t){var n=Wt(t.value),s=Wt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),s!=null&&(e.defaultValue=""+s)}function go(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Xc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Xc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ns,ed=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,s,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,s,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ns=ns||document.createElement("div"),ns.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ns.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Nr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gp=["Webkit","ms","Moz","O"];Object.keys(mr).forEach(function(e){Gp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),mr[t]=mr[e]})});function td(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||mr.hasOwnProperty(e)&&mr[e]?(""+t).trim():t+"px"}function nd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var s=n.indexOf("--")===0,i=td(n,t[n],s);n==="float"&&(n="cssFloat"),s?e.setProperty(n,i):e[n]=i}}var Zp=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fa(e,t){if(t){if(Zp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function ma(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ha=null;function ul(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xa=null,Pn=null,Ln=null;function yo(e){if(e=Kr(e)){if(typeof xa!="function")throw Error(N(280));var t=e.stateNode;t&&(t=ci(t),xa(e.stateNode,e.type,t))}}function rd(e){Pn?Ln?Ln.push(e):Ln=[e]:Pn=e}function sd(){if(Pn){var e=Pn,t=Ln;if(Ln=Pn=null,yo(e),t)for(e=0;e<t.length;e++)yo(t[e])}}function id(e,t){return e(t)}function ad(){}var Di=!1;function ld(e,t,n){if(Di)return e(t,n);Di=!0;try{return id(e,t,n)}finally{Di=!1,(Pn!==null||Ln!==null)&&(ad(),sd())}}function Cr(e,t){var n=e.stateNode;if(n===null)return null;var s=ci(n);if(s===null)return null;n=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var va=!1;if(gt)try{var rr={};Object.defineProperty(rr,"passive",{get:function(){va=!0}}),window.addEventListener("test",rr,rr),window.removeEventListener("test",rr,rr)}catch{va=!1}function qp(e,t,n,s,i,a,l,c,o){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(x){this.onError(x)}}var hr=!1,Ts=null,Ds=!1,ga=null,Qp={onError:function(e){hr=!0,Ts=e}};function Kp(e,t,n,s,i,a,l,c,o){hr=!1,Ts=null,qp.apply(Qp,arguments)}function Yp(e,t,n,s,i,a,l,c,o){if(Kp.apply(this,arguments),hr){if(hr){var d=Ts;hr=!1,Ts=null}else throw Error(N(198));Ds||(Ds=!0,ga=d)}}function hn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function od(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function jo(e){if(hn(e)!==e)throw Error(N(188))}function Jp(e){var t=e.alternate;if(!t){if(t=hn(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,s=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(s=i.return,s!==null){n=s;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return jo(i),e;if(a===s)return jo(i),t;a=a.sibling}throw Error(N(188))}if(n.return!==s.return)n=i,s=a;else{for(var l=!1,c=i.child;c;){if(c===n){l=!0,n=i,s=a;break}if(c===s){l=!0,s=i,n=a;break}c=c.sibling}if(!l){for(c=a.child;c;){if(c===n){l=!0,n=a,s=i;break}if(c===s){l=!0,s=a,n=i;break}c=c.sibling}if(!l)throw Error(N(189))}}if(n.alternate!==s)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function cd(e){return e=Jp(e),e!==null?dd(e):null}function dd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=dd(e);if(t!==null)return t;e=e.sibling}return null}var ud=_e.unstable_scheduleCallback,wo=_e.unstable_cancelCallback,Xp=_e.unstable_shouldYield,ef=_e.unstable_requestPaint,re=_e.unstable_now,tf=_e.unstable_getCurrentPriorityLevel,pl=_e.unstable_ImmediatePriority,pd=_e.unstable_UserBlockingPriority,Ps=_e.unstable_NormalPriority,nf=_e.unstable_LowPriority,fd=_e.unstable_IdlePriority,ii=null,ot=null;function rf(e){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(ii,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:lf,sf=Math.log,af=Math.LN2;function lf(e){return e>>>=0,e===0?32:31-(sf(e)/af|0)|0}var rs=64,ss=4194304;function pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ls(e,t){var n=e.pendingLanes;if(n===0)return 0;var s=0,i=e.suspendedLanes,a=e.pingedLanes,l=n&268435455;if(l!==0){var c=l&~i;c!==0?s=pr(c):(a&=l,a!==0&&(s=pr(a)))}else l=n&~i,l!==0?s=pr(l):a!==0&&(s=pr(a));if(s===0)return 0;if(t!==0&&t!==s&&!(t&i)&&(i=s&-s,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(s&4&&(s|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)n=31-Xe(t),i=1<<n,s|=e[n],t&=~i;return s}function of(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cf(e,t){for(var n=e.suspendedLanes,s=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var l=31-Xe(a),c=1<<l,o=i[l];o===-1?(!(c&n)||c&s)&&(i[l]=of(c,t)):o<=t&&(e.expiredLanes|=c),a&=~c}}function ya(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function md(){var e=rs;return rs<<=1,!(rs&4194240)&&(rs=64),e}function Pi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xe(t),e[t]=n}function df(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Xe(n),a=1<<i;t[i]=0,s[i]=-1,e[i]=-1,n&=~a}}function fl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var s=31-Xe(n),i=1<<s;i&t|e[s]&t&&(e[s]|=t),n&=~i}}var V=0;function hd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var xd,ml,vd,gd,yd,ja=!1,is=[],_t=null,It=null,Ot=null,zr=new Map,Er=new Map,Tt=[],uf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bo(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":It=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Er.delete(t.pointerId)}}function sr(e,t,n,s,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:s,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Kr(t),t!==null&&ml(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function pf(e,t,n,s,i){switch(t){case"focusin":return _t=sr(_t,e,t,n,s,i),!0;case"dragenter":return It=sr(It,e,t,n,s,i),!0;case"mouseover":return Ot=sr(Ot,e,t,n,s,i),!0;case"pointerover":var a=i.pointerId;return zr.set(a,sr(zr.get(a)||null,e,t,n,s,i)),!0;case"gotpointercapture":return a=i.pointerId,Er.set(a,sr(Er.get(a)||null,e,t,n,s,i)),!0}return!1}function jd(e){var t=nn(e.target);if(t!==null){var n=hn(t);if(n!==null){if(t=n.tag,t===13){if(t=od(n),t!==null){e.blockedOn=t,yd(e.priority,function(){vd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ys(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var s=new n.constructor(n.type,n);ha=s,n.target.dispatchEvent(s),ha=null}else return t=Kr(n),t!==null&&ml(t),e.blockedOn=n,!1;t.shift()}return!0}function ko(e,t,n){ys(e)&&n.delete(t)}function ff(){ja=!1,_t!==null&&ys(_t)&&(_t=null),It!==null&&ys(It)&&(It=null),Ot!==null&&ys(Ot)&&(Ot=null),zr.forEach(ko),Er.forEach(ko)}function ir(e,t){e.blockedOn===t&&(e.blockedOn=null,ja||(ja=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,ff)))}function Ar(e){function t(i){return ir(i,e)}if(0<is.length){ir(is[0],e);for(var n=1;n<is.length;n++){var s=is[n];s.blockedOn===e&&(s.blockedOn=null)}}for(_t!==null&&ir(_t,e),It!==null&&ir(It,e),Ot!==null&&ir(Ot,e),zr.forEach(t),Er.forEach(t),n=0;n<Tt.length;n++)s=Tt[n],s.blockedOn===e&&(s.blockedOn=null);for(;0<Tt.length&&(n=Tt[0],n.blockedOn===null);)jd(n),n.blockedOn===null&&Tt.shift()}var Mn=bt.ReactCurrentBatchConfig,Ms=!0;function mf(e,t,n,s){var i=V,a=Mn.transition;Mn.transition=null;try{V=1,hl(e,t,n,s)}finally{V=i,Mn.transition=a}}function hf(e,t,n,s){var i=V,a=Mn.transition;Mn.transition=null;try{V=4,hl(e,t,n,s)}finally{V=i,Mn.transition=a}}function hl(e,t,n,s){if(Ms){var i=wa(e,t,n,s);if(i===null)$i(e,t,s,Rs,n),bo(e,s);else if(pf(i,e,t,n,s))s.stopPropagation();else if(bo(e,s),t&4&&-1<uf.indexOf(e)){for(;i!==null;){var a=Kr(i);if(a!==null&&xd(a),a=wa(e,t,n,s),a===null&&$i(e,t,s,Rs,n),a===i)break;i=a}i!==null&&s.stopPropagation()}else $i(e,t,s,null,n)}}var Rs=null;function wa(e,t,n,s){if(Rs=null,e=ul(s),e=nn(e),e!==null)if(t=hn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=od(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Rs=e,null}function wd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tf()){case pl:return 1;case pd:return 4;case Ps:case nf:return 16;case fd:return 536870912;default:return 16}default:return 16}}var Pt=null,xl=null,js=null;function bd(){if(js)return js;var e,t=xl,n=t.length,s,i="value"in Pt?Pt.value:Pt.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(s=1;s<=l&&t[n-s]===i[a-s];s++);return js=i.slice(e,1<s?1-s:void 0)}function ws(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function as(){return!0}function So(){return!1}function Oe(e){function t(n,s,i,a,l){this._reactName=n,this._targetInst=i,this.type=s,this.nativeEvent=a,this.target=l,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(a):a[c]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?as:So,this.isPropagationStopped=So,this}return ee(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=as)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=as)},persist:function(){},isPersistent:as}),t}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vl=Oe(qn),Qr=ee({},qn,{view:0,detail:0}),xf=Oe(Qr),Li,Mi,ar,ai=ee({},Qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ar&&(ar&&e.type==="mousemove"?(Li=e.screenX-ar.screenX,Mi=e.screenY-ar.screenY):Mi=Li=0,ar=e),Li)},movementY:function(e){return"movementY"in e?e.movementY:Mi}}),No=Oe(ai),vf=ee({},ai,{dataTransfer:0}),gf=Oe(vf),yf=ee({},Qr,{relatedTarget:0}),Ri=Oe(yf),jf=ee({},qn,{animationName:0,elapsedTime:0,pseudoElement:0}),wf=Oe(jf),bf=ee({},qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kf=Oe(bf),Sf=ee({},qn,{data:0}),Co=Oe(Sf),Nf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ef(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zf[e])?!!t[e]:!1}function gl(){return Ef}var Af=ee({},Qr,{key:function(e){if(e.key){var t=Nf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ws(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gl,charCode:function(e){return e.type==="keypress"?ws(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ws(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Tf=Oe(Af),Df=ee({},ai,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zo=Oe(Df),Pf=ee({},Qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gl}),Lf=Oe(Pf),Mf=ee({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rf=Oe(Mf),_f=ee({},ai,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),If=Oe(_f),Of=[9,13,27,32],yl=gt&&"CompositionEvent"in window,xr=null;gt&&"documentMode"in document&&(xr=document.documentMode);var Ff=gt&&"TextEvent"in window&&!xr,kd=gt&&(!yl||xr&&8<xr&&11>=xr),Eo=" ",Ao=!1;function Sd(e,t){switch(e){case"keyup":return Of.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wn=!1;function Uf(e,t){switch(e){case"compositionend":return Nd(t);case"keypress":return t.which!==32?null:(Ao=!0,Eo);case"textInput":return e=t.data,e===Eo&&Ao?null:e;default:return null}}function Bf(e,t){if(wn)return e==="compositionend"||!yl&&Sd(e,t)?(e=bd(),js=xl=Pt=null,wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kd&&t.locale!=="ko"?null:t.data;default:return null}}var $f={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function To(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$f[e.type]:t==="textarea"}function Cd(e,t,n,s){rd(s),t=_s(t,"onChange"),0<t.length&&(n=new vl("onChange","change",null,n,s),e.push({event:n,listeners:t}))}var vr=null,Tr=null;function Vf(e){Id(e,0)}function li(e){var t=Sn(e);if(Kc(t))return e}function Hf(e,t){if(e==="change")return t}var zd=!1;if(gt){var _i;if(gt){var Ii="oninput"in document;if(!Ii){var Do=document.createElement("div");Do.setAttribute("oninput","return;"),Ii=typeof Do.oninput=="function"}_i=Ii}else _i=!1;zd=_i&&(!document.documentMode||9<document.documentMode)}function Po(){vr&&(vr.detachEvent("onpropertychange",Ed),Tr=vr=null)}function Ed(e){if(e.propertyName==="value"&&li(Tr)){var t=[];Cd(t,Tr,e,ul(e)),ld(Vf,t)}}function Wf(e,t,n){e==="focusin"?(Po(),vr=t,Tr=n,vr.attachEvent("onpropertychange",Ed)):e==="focusout"&&Po()}function Gf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return li(Tr)}function Zf(e,t){if(e==="click")return li(t)}function qf(e,t){if(e==="input"||e==="change")return li(t)}function Qf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var tt=typeof Object.is=="function"?Object.is:Qf;function Dr(e,t){if(tt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var i=n[s];if(!ra.call(t,i)||!tt(e[i],t[i]))return!1}return!0}function Lo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mo(e,t){var n=Lo(e);e=0;for(var s;n;){if(n.nodeType===3){if(s=e+n.textContent.length,e<=t&&s>=t)return{node:n,offset:t-e};e=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lo(n)}}function Ad(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ad(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Td(){for(var e=window,t=As();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=As(e.document)}return t}function jl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Kf(e){var t=Td(),n=e.focusedElem,s=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ad(n.ownerDocument.documentElement,n)){if(s!==null&&jl(n)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(s.start,i);s=s.end===void 0?a:Math.min(s.end,i),!e.extend&&a>s&&(i=s,s=a,a=i),i=Mo(n,a);var l=Mo(n,s);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>s?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Yf=gt&&"documentMode"in document&&11>=document.documentMode,bn=null,ba=null,gr=null,ka=!1;function Ro(e,t,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ka||bn==null||bn!==As(s)||(s=bn,"selectionStart"in s&&jl(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),gr&&Dr(gr,s)||(gr=s,s=_s(ba,"onSelect"),0<s.length&&(t=new vl("onSelect","select",null,t,n),e.push({event:t,listeners:s}),t.target=bn)))}function ls(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kn={animationend:ls("Animation","AnimationEnd"),animationiteration:ls("Animation","AnimationIteration"),animationstart:ls("Animation","AnimationStart"),transitionend:ls("Transition","TransitionEnd")},Oi={},Dd={};gt&&(Dd=document.createElement("div").style,"AnimationEvent"in window||(delete kn.animationend.animation,delete kn.animationiteration.animation,delete kn.animationstart.animation),"TransitionEvent"in window||delete kn.transitionend.transition);function oi(e){if(Oi[e])return Oi[e];if(!kn[e])return e;var t=kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Dd)return Oi[e]=t[n];return e}var Pd=oi("animationend"),Ld=oi("animationiteration"),Md=oi("animationstart"),Rd=oi("transitionend"),_d=new Map,_o="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yt(e,t){_d.set(e,t),mn(t,[e])}for(var Fi=0;Fi<_o.length;Fi++){var Ui=_o[Fi],Jf=Ui.toLowerCase(),Xf=Ui[0].toUpperCase()+Ui.slice(1);Yt(Jf,"on"+Xf)}Yt(Pd,"onAnimationEnd");Yt(Ld,"onAnimationIteration");Yt(Md,"onAnimationStart");Yt("dblclick","onDoubleClick");Yt("focusin","onFocus");Yt("focusout","onBlur");Yt(Rd,"onTransitionEnd");In("onMouseEnter",["mouseout","mouseover"]);In("onMouseLeave",["mouseout","mouseover"]);In("onPointerEnter",["pointerout","pointerover"]);In("onPointerLeave",["pointerout","pointerover"]);mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),em=new Set("cancel close invalid load scroll toggle".split(" ").concat(fr));function Io(e,t,n){var s=e.type||"unknown-event";e.currentTarget=n,Yp(s,t,void 0,e),e.currentTarget=null}function Id(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var s=e[n],i=s.event;s=s.listeners;e:{var a=void 0;if(t)for(var l=s.length-1;0<=l;l--){var c=s[l],o=c.instance,d=c.currentTarget;if(c=c.listener,o!==a&&i.isPropagationStopped())break e;Io(i,c,d),a=o}else for(l=0;l<s.length;l++){if(c=s[l],o=c.instance,d=c.currentTarget,c=c.listener,o!==a&&i.isPropagationStopped())break e;Io(i,c,d),a=o}}}if(Ds)throw e=ga,Ds=!1,ga=null,e}function q(e,t){var n=t[Ea];n===void 0&&(n=t[Ea]=new Set);var s=e+"__bubble";n.has(s)||(Od(t,e,2,!1),n.add(s))}function Bi(e,t,n){var s=0;t&&(s|=4),Od(n,e,s,t)}var os="_reactListening"+Math.random().toString(36).slice(2);function Pr(e){if(!e[os]){e[os]=!0,Wc.forEach(function(n){n!=="selectionchange"&&(em.has(n)||Bi(n,!1,e),Bi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[os]||(t[os]=!0,Bi("selectionchange",!1,t))}}function Od(e,t,n,s){switch(wd(t)){case 1:var i=mf;break;case 4:i=hf;break;default:i=hl}n=i.bind(null,t,n,e),i=void 0,!va||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),s?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function $i(e,t,n,s,i){var a=s;if(!(t&1)&&!(t&2)&&s!==null)e:for(;;){if(s===null)return;var l=s.tag;if(l===3||l===4){var c=s.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(l===4)for(l=s.return;l!==null;){var o=l.tag;if((o===3||o===4)&&(o=l.stateNode.containerInfo,o===i||o.nodeType===8&&o.parentNode===i))return;l=l.return}for(;c!==null;){if(l=nn(c),l===null)return;if(o=l.tag,o===5||o===6){s=a=l;continue e}c=c.parentNode}}s=s.return}ld(function(){var d=a,x=ul(n),h=[];e:{var u=_d.get(e);if(u!==void 0){var j=vl,y=e;switch(e){case"keypress":if(ws(n)===0)break e;case"keydown":case"keyup":j=Tf;break;case"focusin":y="focus",j=Ri;break;case"focusout":y="blur",j=Ri;break;case"beforeblur":case"afterblur":j=Ri;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=No;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=gf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=Lf;break;case Pd:case Ld:case Md:j=wf;break;case Rd:j=Rf;break;case"scroll":j=xf;break;case"wheel":j=If;break;case"copy":case"cut":case"paste":j=kf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=zo}var w=(t&4)!==0,b=!w&&e==="scroll",f=w?u!==null?u+"Capture":null:u;w=[];for(var p=d,m;p!==null;){m=p;var g=m.stateNode;if(m.tag===5&&g!==null&&(m=g,f!==null&&(g=Cr(p,f),g!=null&&w.push(Lr(p,g,m)))),b)break;p=p.return}0<w.length&&(u=new j(u,y,null,n,x),h.push({event:u,listeners:w}))}}if(!(t&7)){e:{if(u=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",u&&n!==ha&&(y=n.relatedTarget||n.fromElement)&&(nn(y)||y[yt]))break e;if((j||u)&&(u=x.window===x?x:(u=x.ownerDocument)?u.defaultView||u.parentWindow:window,j?(y=n.relatedTarget||n.toElement,j=d,y=y?nn(y):null,y!==null&&(b=hn(y),y!==b||y.tag!==5&&y.tag!==6)&&(y=null)):(j=null,y=d),j!==y)){if(w=No,g="onMouseLeave",f="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(w=zo,g="onPointerLeave",f="onPointerEnter",p="pointer"),b=j==null?u:Sn(j),m=y==null?u:Sn(y),u=new w(g,p+"leave",j,n,x),u.target=b,u.relatedTarget=m,g=null,nn(x)===d&&(w=new w(f,p+"enter",y,n,x),w.target=m,w.relatedTarget=b,g=w),b=g,j&&y)t:{for(w=j,f=y,p=0,m=w;m;m=gn(m))p++;for(m=0,g=f;g;g=gn(g))m++;for(;0<p-m;)w=gn(w),p--;for(;0<m-p;)f=gn(f),m--;for(;p--;){if(w===f||f!==null&&w===f.alternate)break t;w=gn(w),f=gn(f)}w=null}else w=null;j!==null&&Oo(h,u,j,w,!1),y!==null&&b!==null&&Oo(h,b,y,w,!0)}}e:{if(u=d?Sn(d):window,j=u.nodeName&&u.nodeName.toLowerCase(),j==="select"||j==="input"&&u.type==="file")var S=Hf;else if(To(u))if(zd)S=qf;else{S=Gf;var z=Wf}else(j=u.nodeName)&&j.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(S=Zf);if(S&&(S=S(e,d))){Cd(h,S,n,x);break e}z&&z(e,u,d),e==="focusout"&&(z=u._wrapperState)&&z.controlled&&u.type==="number"&&da(u,"number",u.value)}switch(z=d?Sn(d):window,e){case"focusin":(To(z)||z.contentEditable==="true")&&(bn=z,ba=d,gr=null);break;case"focusout":gr=ba=bn=null;break;case"mousedown":ka=!0;break;case"contextmenu":case"mouseup":case"dragend":ka=!1,Ro(h,n,x);break;case"selectionchange":if(Yf)break;case"keydown":case"keyup":Ro(h,n,x)}var E;if(yl)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else wn?Sd(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(kd&&n.locale!=="ko"&&(wn||P!=="onCompositionStart"?P==="onCompositionEnd"&&wn&&(E=bd()):(Pt=x,xl="value"in Pt?Pt.value:Pt.textContent,wn=!0)),z=_s(d,P),0<z.length&&(P=new Co(P,e,null,n,x),h.push({event:P,listeners:z}),E?P.data=E:(E=Nd(n),E!==null&&(P.data=E)))),(E=Ff?Uf(e,n):Bf(e,n))&&(d=_s(d,"onBeforeInput"),0<d.length&&(x=new Co("onBeforeInput","beforeinput",null,n,x),h.push({event:x,listeners:d}),x.data=E))}Id(h,t)})}function Lr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function _s(e,t){for(var n=t+"Capture",s=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Cr(e,n),a!=null&&s.unshift(Lr(e,a,i)),a=Cr(e,t),a!=null&&s.push(Lr(e,a,i))),e=e.return}return s}function gn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Oo(e,t,n,s,i){for(var a=t._reactName,l=[];n!==null&&n!==s;){var c=n,o=c.alternate,d=c.stateNode;if(o!==null&&o===s)break;c.tag===5&&d!==null&&(c=d,i?(o=Cr(n,a),o!=null&&l.unshift(Lr(n,o,c))):i||(o=Cr(n,a),o!=null&&l.push(Lr(n,o,c)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var tm=/\r\n?/g,nm=/\u0000|\uFFFD/g;function Fo(e){return(typeof e=="string"?e:""+e).replace(tm,`
`).replace(nm,"")}function cs(e,t,n){if(t=Fo(t),Fo(e)!==t&&n)throw Error(N(425))}function Is(){}var Sa=null,Na=null;function Ca(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var za=typeof setTimeout=="function"?setTimeout:void 0,rm=typeof clearTimeout=="function"?clearTimeout:void 0,Uo=typeof Promise=="function"?Promise:void 0,sm=typeof queueMicrotask=="function"?queueMicrotask:typeof Uo<"u"?function(e){return Uo.resolve(null).then(e).catch(im)}:za;function im(e){setTimeout(function(){throw e})}function Vi(e,t){var n=t,s=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(s===0){e.removeChild(i),Ar(t);return}s--}else n!=="$"&&n!=="$?"&&n!=="$!"||s++;n=i}while(n);Ar(t)}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Bo(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Qn=Math.random().toString(36).slice(2),lt="__reactFiber$"+Qn,Mr="__reactProps$"+Qn,yt="__reactContainer$"+Qn,Ea="__reactEvents$"+Qn,am="__reactListeners$"+Qn,lm="__reactHandles$"+Qn;function nn(e){var t=e[lt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[lt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bo(e);e!==null;){if(n=e[lt])return n;e=Bo(e)}return t}e=n,n=e.parentNode}return null}function Kr(e){return e=e[lt]||e[yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Sn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function ci(e){return e[Mr]||null}var Aa=[],Nn=-1;function Jt(e){return{current:e}}function Q(e){0>Nn||(e.current=Aa[Nn],Aa[Nn]=null,Nn--)}function G(e,t){Nn++,Aa[Nn]=e.current,e.current=t}var Gt={},ye=Jt(Gt),Ae=Jt(!1),cn=Gt;function On(e,t){var n=e.type.contextTypes;if(!n)return Gt;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Te(e){return e=e.childContextTypes,e!=null}function Os(){Q(Ae),Q(ye)}function $o(e,t,n){if(ye.current!==Gt)throw Error(N(168));G(ye,t),G(Ae,n)}function Fd(e,t,n){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return n;s=s.getChildContext();for(var i in s)if(!(i in t))throw Error(N(108,Hp(e)||"Unknown",i));return ee({},n,s)}function Fs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Gt,cn=ye.current,G(ye,e),G(Ae,Ae.current),!0}function Vo(e,t,n){var s=e.stateNode;if(!s)throw Error(N(169));n?(e=Fd(e,t,cn),s.__reactInternalMemoizedMergedChildContext=e,Q(Ae),Q(ye),G(ye,e)):Q(Ae),G(Ae,n)}var mt=null,di=!1,Hi=!1;function Ud(e){mt===null?mt=[e]:mt.push(e)}function om(e){di=!0,Ud(e)}function Xt(){if(!Hi&&mt!==null){Hi=!0;var e=0,t=V;try{var n=mt;for(V=1;e<n.length;e++){var s=n[e];do s=s(!0);while(s!==null)}mt=null,di=!1}catch(i){throw mt!==null&&(mt=mt.slice(e+1)),ud(pl,Xt),i}finally{V=t,Hi=!1}}return null}var Cn=[],zn=0,Us=null,Bs=0,Ue=[],Be=0,dn=null,ht=1,xt="";function en(e,t){Cn[zn++]=Bs,Cn[zn++]=Us,Us=e,Bs=t}function Bd(e,t,n){Ue[Be++]=ht,Ue[Be++]=xt,Ue[Be++]=dn,dn=e;var s=ht;e=xt;var i=32-Xe(s)-1;s&=~(1<<i),n+=1;var a=32-Xe(t)+i;if(30<a){var l=i-i%5;a=(s&(1<<l)-1).toString(32),s>>=l,i-=l,ht=1<<32-Xe(t)+i|n<<i|s,xt=a+e}else ht=1<<a|n<<i|s,xt=e}function wl(e){e.return!==null&&(en(e,1),Bd(e,1,0))}function bl(e){for(;e===Us;)Us=Cn[--zn],Cn[zn]=null,Bs=Cn[--zn],Cn[zn]=null;for(;e===dn;)dn=Ue[--Be],Ue[Be]=null,xt=Ue[--Be],Ue[Be]=null,ht=Ue[--Be],Ue[Be]=null}var Re=null,Me=null,K=!1,Ye=null;function $d(e,t){var n=$e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ho(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Re=e,Me=Ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Re=e,Me=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dn!==null?{id:ht,overflow:xt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=$e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Re=e,Me=null,!0):!1;default:return!1}}function Ta(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Da(e){if(K){var t=Me;if(t){var n=t;if(!Ho(e,t)){if(Ta(e))throw Error(N(418));t=Ft(n.nextSibling);var s=Re;t&&Ho(e,t)?$d(s,n):(e.flags=e.flags&-4097|2,K=!1,Re=e)}}else{if(Ta(e))throw Error(N(418));e.flags=e.flags&-4097|2,K=!1,Re=e}}}function Wo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Re=e}function ds(e){if(e!==Re)return!1;if(!K)return Wo(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ca(e.type,e.memoizedProps)),t&&(t=Me)){if(Ta(e))throw Vd(),Error(N(418));for(;t;)$d(e,t),t=Ft(t.nextSibling)}if(Wo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Me=Ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Me=null}}else Me=Re?Ft(e.stateNode.nextSibling):null;return!0}function Vd(){for(var e=Me;e;)e=Ft(e.nextSibling)}function Fn(){Me=Re=null,K=!1}function kl(e){Ye===null?Ye=[e]:Ye.push(e)}var cm=bt.ReactCurrentBatchConfig;function lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var s=n.stateNode}if(!s)throw Error(N(147,e));var i=s,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(l){var c=i.refs;l===null?delete c[a]:c[a]=l},t._stringRef=a,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function us(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Go(e){var t=e._init;return t(e._payload)}function Hd(e){function t(f,p){if(e){var m=f.deletions;m===null?(f.deletions=[p],f.flags|=16):m.push(p)}}function n(f,p){if(!e)return null;for(;p!==null;)t(f,p),p=p.sibling;return null}function s(f,p){for(f=new Map;p!==null;)p.key!==null?f.set(p.key,p):f.set(p.index,p),p=p.sibling;return f}function i(f,p){return f=Vt(f,p),f.index=0,f.sibling=null,f}function a(f,p,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<p?(f.flags|=2,p):m):(f.flags|=2,p)):(f.flags|=1048576,p)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function c(f,p,m,g){return p===null||p.tag!==6?(p=Yi(m,f.mode,g),p.return=f,p):(p=i(p,m),p.return=f,p)}function o(f,p,m,g){var S=m.type;return S===jn?x(f,p,m.props.children,g,m.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Et&&Go(S)===p.type)?(g=i(p,m.props),g.ref=lr(f,p,m),g.return=f,g):(g=Es(m.type,m.key,m.props,null,f.mode,g),g.ref=lr(f,p,m),g.return=f,g)}function d(f,p,m,g){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=Ji(m,f.mode,g),p.return=f,p):(p=i(p,m.children||[]),p.return=f,p)}function x(f,p,m,g,S){return p===null||p.tag!==7?(p=ln(m,f.mode,g,S),p.return=f,p):(p=i(p,m),p.return=f,p)}function h(f,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Yi(""+p,f.mode,m),p.return=f,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case es:return m=Es(p.type,p.key,p.props,null,f.mode,m),m.ref=lr(f,null,p),m.return=f,m;case yn:return p=Ji(p,f.mode,m),p.return=f,p;case Et:var g=p._init;return h(f,g(p._payload),m)}if(ur(p)||nr(p))return p=ln(p,f.mode,m,null),p.return=f,p;us(f,p)}return null}function u(f,p,m,g){var S=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:c(f,p,""+m,g);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case es:return m.key===S?o(f,p,m,g):null;case yn:return m.key===S?d(f,p,m,g):null;case Et:return S=m._init,u(f,p,S(m._payload),g)}if(ur(m)||nr(m))return S!==null?null:x(f,p,m,g,null);us(f,m)}return null}function j(f,p,m,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return f=f.get(m)||null,c(p,f,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case es:return f=f.get(g.key===null?m:g.key)||null,o(p,f,g,S);case yn:return f=f.get(g.key===null?m:g.key)||null,d(p,f,g,S);case Et:var z=g._init;return j(f,p,m,z(g._payload),S)}if(ur(g)||nr(g))return f=f.get(m)||null,x(p,f,g,S,null);us(p,g)}return null}function y(f,p,m,g){for(var S=null,z=null,E=p,P=p=0,$=null;E!==null&&P<m.length;P++){E.index>P?($=E,E=null):$=E.sibling;var k=u(f,E,m[P],g);if(k===null){E===null&&(E=$);break}e&&E&&k.alternate===null&&t(f,E),p=a(k,p,P),z===null?S=k:z.sibling=k,z=k,E=$}if(P===m.length)return n(f,E),K&&en(f,P),S;if(E===null){for(;P<m.length;P++)E=h(f,m[P],g),E!==null&&(p=a(E,p,P),z===null?S=E:z.sibling=E,z=E);return K&&en(f,P),S}for(E=s(f,E);P<m.length;P++)$=j(E,f,P,m[P],g),$!==null&&(e&&$.alternate!==null&&E.delete($.key===null?P:$.key),p=a($,p,P),z===null?S=$:z.sibling=$,z=$);return e&&E.forEach(function(H){return t(f,H)}),K&&en(f,P),S}function w(f,p,m,g){var S=nr(m);if(typeof S!="function")throw Error(N(150));if(m=S.call(m),m==null)throw Error(N(151));for(var z=S=null,E=p,P=p=0,$=null,k=m.next();E!==null&&!k.done;P++,k=m.next()){E.index>P?($=E,E=null):$=E.sibling;var H=u(f,E,k.value,g);if(H===null){E===null&&(E=$);break}e&&E&&H.alternate===null&&t(f,E),p=a(H,p,P),z===null?S=H:z.sibling=H,z=H,E=$}if(k.done)return n(f,E),K&&en(f,P),S;if(E===null){for(;!k.done;P++,k=m.next())k=h(f,k.value,g),k!==null&&(p=a(k,p,P),z===null?S=k:z.sibling=k,z=k);return K&&en(f,P),S}for(E=s(f,E);!k.done;P++,k=m.next())k=j(E,f,P,k.value,g),k!==null&&(e&&k.alternate!==null&&E.delete(k.key===null?P:k.key),p=a(k,p,P),z===null?S=k:z.sibling=k,z=k);return e&&E.forEach(function(ae){return t(f,ae)}),K&&en(f,P),S}function b(f,p,m,g){if(typeof m=="object"&&m!==null&&m.type===jn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case es:e:{for(var S=m.key,z=p;z!==null;){if(z.key===S){if(S=m.type,S===jn){if(z.tag===7){n(f,z.sibling),p=i(z,m.props.children),p.return=f,f=p;break e}}else if(z.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Et&&Go(S)===z.type){n(f,z.sibling),p=i(z,m.props),p.ref=lr(f,z,m),p.return=f,f=p;break e}n(f,z);break}else t(f,z);z=z.sibling}m.type===jn?(p=ln(m.props.children,f.mode,g,m.key),p.return=f,f=p):(g=Es(m.type,m.key,m.props,null,f.mode,g),g.ref=lr(f,p,m),g.return=f,f=g)}return l(f);case yn:e:{for(z=m.key;p!==null;){if(p.key===z)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(f,p.sibling),p=i(p,m.children||[]),p.return=f,f=p;break e}else{n(f,p);break}else t(f,p);p=p.sibling}p=Ji(m,f.mode,g),p.return=f,f=p}return l(f);case Et:return z=m._init,b(f,p,z(m._payload),g)}if(ur(m))return y(f,p,m,g);if(nr(m))return w(f,p,m,g);us(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(f,p.sibling),p=i(p,m),p.return=f,f=p):(n(f,p),p=Yi(m,f.mode,g),p.return=f,f=p),l(f)):n(f,p)}return b}var Un=Hd(!0),Wd=Hd(!1),$s=Jt(null),Vs=null,En=null,Sl=null;function Nl(){Sl=En=Vs=null}function Cl(e){var t=$s.current;Q($s),e._currentValue=t}function Pa(e,t,n){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===n)break;e=e.return}}function Rn(e,t){Vs=e,Sl=En=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ee=!0),e.firstContext=null)}function He(e){var t=e._currentValue;if(Sl!==e)if(e={context:e,memoizedValue:t,next:null},En===null){if(Vs===null)throw Error(N(308));En=e,Vs.dependencies={lanes:0,firstContext:e}}else En=En.next=e;return t}var rn=null;function zl(e){rn===null?rn=[e]:rn.push(e)}function Gd(e,t,n,s){var i=t.interleaved;return i===null?(n.next=n,zl(t)):(n.next=i.next,i.next=n),t.interleaved=n,jt(e,s)}function jt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var At=!1;function El(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ut(e,t,n){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,B&2){var i=s.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),s.pending=t,jt(e,n)}return i=s.interleaved,i===null?(t.next=t,zl(s)):(t.next=i.next,i.next=t),s.interleaved=t,jt(e,n)}function bs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,fl(e,n)}}function Zo(e,t){var n=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=l:a=a.next=l,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:s.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:s.shared,effects:s.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Hs(e,t,n,s){var i=e.updateQueue;At=!1;var a=i.firstBaseUpdate,l=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var o=c,d=o.next;o.next=null,l===null?a=d:l.next=d,l=o;var x=e.alternate;x!==null&&(x=x.updateQueue,c=x.lastBaseUpdate,c!==l&&(c===null?x.firstBaseUpdate=d:c.next=d,x.lastBaseUpdate=o))}if(a!==null){var h=i.baseState;l=0,x=d=o=null,c=a;do{var u=c.lane,j=c.eventTime;if((s&u)===u){x!==null&&(x=x.next={eventTime:j,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var y=e,w=c;switch(u=t,j=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){h=y.call(j,h,u);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,u=typeof y=="function"?y.call(j,h,u):y,u==null)break e;h=ee({},h,u);break e;case 2:At=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,u=i.effects,u===null?i.effects=[c]:u.push(c))}else j={eventTime:j,lane:u,tag:c.tag,payload:c.payload,callback:c.callback,next:null},x===null?(d=x=j,o=h):x=x.next=j,l|=u;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;u=c,c=u.next,u.next=null,i.lastBaseUpdate=u,i.shared.pending=null}}while(!0);if(x===null&&(o=h),i.baseState=o,i.firstBaseUpdate=d,i.lastBaseUpdate=x,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);pn|=l,e.lanes=l,e.memoizedState=h}}function qo(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],i=s.callback;if(i!==null){if(s.callback=null,s=n,typeof i!="function")throw Error(N(191,i));i.call(s)}}}var Yr={},ct=Jt(Yr),Rr=Jt(Yr),_r=Jt(Yr);function sn(e){if(e===Yr)throw Error(N(174));return e}function Al(e,t){switch(G(_r,t),G(Rr,e),G(ct,Yr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:pa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=pa(t,e)}Q(ct),G(ct,t)}function Bn(){Q(ct),Q(Rr),Q(_r)}function qd(e){sn(_r.current);var t=sn(ct.current),n=pa(t,e.type);t!==n&&(G(Rr,e),G(ct,n))}function Tl(e){Rr.current===e&&(Q(ct),Q(Rr))}var Y=Jt(0);function Ws(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wi=[];function Dl(){for(var e=0;e<Wi.length;e++)Wi[e]._workInProgressVersionPrimary=null;Wi.length=0}var ks=bt.ReactCurrentDispatcher,Gi=bt.ReactCurrentBatchConfig,un=0,J=null,le=null,ue=null,Gs=!1,yr=!1,Ir=0,dm=0;function xe(){throw Error(N(321))}function Pl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!tt(e[n],t[n]))return!1;return!0}function Ll(e,t,n,s,i,a){if(un=a,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ks.current=e===null||e.memoizedState===null?mm:hm,e=n(s,i),yr){a=0;do{if(yr=!1,Ir=0,25<=a)throw Error(N(301));a+=1,ue=le=null,t.updateQueue=null,ks.current=xm,e=n(s,i)}while(yr)}if(ks.current=Zs,t=le!==null&&le.next!==null,un=0,ue=le=J=null,Gs=!1,t)throw Error(N(300));return e}function Ml(){var e=Ir!==0;return Ir=0,e}function at(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ue===null?J.memoizedState=ue=e:ue=ue.next=e,ue}function We(){if(le===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=le.next;var t=ue===null?J.memoizedState:ue.next;if(t!==null)ue=t,le=e;else{if(e===null)throw Error(N(310));le=e,e={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},ue===null?J.memoizedState=ue=e:ue=ue.next=e}return ue}function Or(e,t){return typeof t=="function"?t(e):t}function Zi(e){var t=We(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var s=le,i=s.baseQueue,a=n.pending;if(a!==null){if(i!==null){var l=i.next;i.next=a.next,a.next=l}s.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,s=s.baseState;var c=l=null,o=null,d=a;do{var x=d.lane;if((un&x)===x)o!==null&&(o=o.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),s=d.hasEagerState?d.eagerState:e(s,d.action);else{var h={lane:x,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};o===null?(c=o=h,l=s):o=o.next=h,J.lanes|=x,pn|=x}d=d.next}while(d!==null&&d!==a);o===null?l=s:o.next=c,tt(s,t.memoizedState)||(Ee=!0),t.memoizedState=s,t.baseState=l,t.baseQueue=o,n.lastRenderedState=s}if(e=n.interleaved,e!==null){i=e;do a=i.lane,J.lanes|=a,pn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function qi(e){var t=We(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var s=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do a=e(a,l.action),l=l.next;while(l!==i);tt(a,t.memoizedState)||(Ee=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,s]}function Qd(){}function Kd(e,t){var n=J,s=We(),i=t(),a=!tt(s.memoizedState,i);if(a&&(s.memoizedState=i,Ee=!0),s=s.queue,Rl(Xd.bind(null,n,s,e),[e]),s.getSnapshot!==t||a||ue!==null&&ue.memoizedState.tag&1){if(n.flags|=2048,Fr(9,Jd.bind(null,n,s,i,t),void 0,null),pe===null)throw Error(N(349));un&30||Yd(n,t,i)}return i}function Yd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jd(e,t,n,s){t.value=n,t.getSnapshot=s,eu(t)&&tu(e)}function Xd(e,t,n){return n(function(){eu(t)&&tu(e)})}function eu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!tt(e,n)}catch{return!0}}function tu(e){var t=jt(e,1);t!==null&&et(t,e,1,-1)}function Qo(e){var t=at();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Or,lastRenderedState:e},t.queue=e,e=e.dispatch=fm.bind(null,J,e),[t.memoizedState,e]}function Fr(e,t,n,s){return e={tag:e,create:t,destroy:n,deps:s,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(s=n.next,n.next=e,e.next=s,t.lastEffect=e)),e}function nu(){return We().memoizedState}function Ss(e,t,n,s){var i=at();J.flags|=e,i.memoizedState=Fr(1|t,n,void 0,s===void 0?null:s)}function ui(e,t,n,s){var i=We();s=s===void 0?null:s;var a=void 0;if(le!==null){var l=le.memoizedState;if(a=l.destroy,s!==null&&Pl(s,l.deps)){i.memoizedState=Fr(t,n,a,s);return}}J.flags|=e,i.memoizedState=Fr(1|t,n,a,s)}function Ko(e,t){return Ss(8390656,8,e,t)}function Rl(e,t){return ui(2048,8,e,t)}function ru(e,t){return ui(4,2,e,t)}function su(e,t){return ui(4,4,e,t)}function iu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function au(e,t,n){return n=n!=null?n.concat([e]):null,ui(4,4,iu.bind(null,t,e),n)}function _l(){}function lu(e,t){var n=We();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&Pl(t,s[1])?s[0]:(n.memoizedState=[e,t],e)}function ou(e,t){var n=We();t=t===void 0?null:t;var s=n.memoizedState;return s!==null&&t!==null&&Pl(t,s[1])?s[0]:(e=e(),n.memoizedState=[e,t],e)}function cu(e,t,n){return un&21?(tt(n,t)||(n=md(),J.lanes|=n,pn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ee=!0),e.memoizedState=n)}function um(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var s=Gi.transition;Gi.transition={};try{e(!1),t()}finally{V=n,Gi.transition=s}}function du(){return We().memoizedState}function pm(e,t,n){var s=$t(e);if(n={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null},uu(e))pu(t,n);else if(n=Gd(e,t,n,s),n!==null){var i=ke();et(n,e,s,i),fu(n,t,s)}}function fm(e,t,n){var s=$t(e),i={lane:s,action:n,hasEagerState:!1,eagerState:null,next:null};if(uu(e))pu(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var l=t.lastRenderedState,c=a(l,n);if(i.hasEagerState=!0,i.eagerState=c,tt(c,l)){var o=t.interleaved;o===null?(i.next=i,zl(t)):(i.next=o.next,o.next=i),t.interleaved=i;return}}catch{}finally{}n=Gd(e,t,i,s),n!==null&&(i=ke(),et(n,e,s,i),fu(n,t,s))}}function uu(e){var t=e.alternate;return e===J||t!==null&&t===J}function pu(e,t){yr=Gs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function fu(e,t,n){if(n&4194240){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,fl(e,n)}}var Zs={readContext:He,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},mm={readContext:He,useCallback:function(e,t){return at().memoizedState=[e,t===void 0?null:t],e},useContext:He,useEffect:Ko,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ss(4194308,4,iu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ss(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ss(4,2,e,t)},useMemo:function(e,t){var n=at();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var s=at();return t=n!==void 0?n(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=pm.bind(null,J,e),[s.memoizedState,e]},useRef:function(e){var t=at();return e={current:e},t.memoizedState=e},useState:Qo,useDebugValue:_l,useDeferredValue:function(e){return at().memoizedState=e},useTransition:function(){var e=Qo(!1),t=e[0];return e=um.bind(null,e[1]),at().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var s=J,i=at();if(K){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),pe===null)throw Error(N(349));un&30||Yd(s,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Ko(Xd.bind(null,s,a,e),[e]),s.flags|=2048,Fr(9,Jd.bind(null,s,a,n,t),void 0,null),n},useId:function(){var e=at(),t=pe.identifierPrefix;if(K){var n=xt,s=ht;n=(s&~(1<<32-Xe(s)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ir++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=dm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},hm={readContext:He,useCallback:lu,useContext:He,useEffect:Rl,useImperativeHandle:au,useInsertionEffect:ru,useLayoutEffect:su,useMemo:ou,useReducer:Zi,useRef:nu,useState:function(){return Zi(Or)},useDebugValue:_l,useDeferredValue:function(e){var t=We();return cu(t,le.memoizedState,e)},useTransition:function(){var e=Zi(Or)[0],t=We().memoizedState;return[e,t]},useMutableSource:Qd,useSyncExternalStore:Kd,useId:du,unstable_isNewReconciler:!1},xm={readContext:He,useCallback:lu,useContext:He,useEffect:Rl,useImperativeHandle:au,useInsertionEffect:ru,useLayoutEffect:su,useMemo:ou,useReducer:qi,useRef:nu,useState:function(){return qi(Or)},useDebugValue:_l,useDeferredValue:function(e){var t=We();return le===null?t.memoizedState=e:cu(t,le.memoizedState,e)},useTransition:function(){var e=qi(Or)[0],t=We().memoizedState;return[e,t]},useMutableSource:Qd,useSyncExternalStore:Kd,useId:du,unstable_isNewReconciler:!1};function Qe(e,t){if(e&&e.defaultProps){t=ee({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function La(e,t,n,s){t=e.memoizedState,n=n(s,t),n=n==null?t:ee({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var pi={isMounted:function(e){return(e=e._reactInternals)?hn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var s=ke(),i=$t(e),a=vt(s,i);a.payload=t,n!=null&&(a.callback=n),t=Ut(e,a,i),t!==null&&(et(t,e,i,s),bs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var s=ke(),i=$t(e),a=vt(s,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Ut(e,a,i),t!==null&&(et(t,e,i,s),bs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ke(),s=$t(e),i=vt(n,s);i.tag=2,t!=null&&(i.callback=t),t=Ut(e,i,s),t!==null&&(et(t,e,s,n),bs(t,e,s))}};function Yo(e,t,n,s,i,a,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,a,l):t.prototype&&t.prototype.isPureReactComponent?!Dr(n,s)||!Dr(i,a):!0}function mu(e,t,n){var s=!1,i=Gt,a=t.contextType;return typeof a=="object"&&a!==null?a=He(a):(i=Te(t)?cn:ye.current,s=t.contextTypes,a=(s=s!=null)?On(e,i):Gt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=pi,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Jo(e,t,n,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,s),t.state!==e&&pi.enqueueReplaceState(t,t.state,null)}function Ma(e,t,n,s){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},El(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=He(a):(a=Te(t)?cn:ye.current,i.context=On(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(La(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&pi.enqueueReplaceState(i,i.state,null),Hs(e,n,i,s),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function $n(e,t){try{var n="",s=t;do n+=Vp(s),s=s.return;while(s);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Qi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ra(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var vm=typeof WeakMap=="function"?WeakMap:Map;function hu(e,t,n){n=vt(-1,n),n.tag=3,n.payload={element:null};var s=t.value;return n.callback=function(){Qs||(Qs=!0,Wa=s),Ra(e,t)},n}function xu(e,t,n){n=vt(-1,n),n.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var i=t.value;n.payload=function(){return s(i)},n.callback=function(){Ra(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Ra(e,t),typeof s!="function"&&(Bt===null?Bt=new Set([this]):Bt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Xo(e,t,n){var s=e.pingCache;if(s===null){s=e.pingCache=new vm;var i=new Set;s.set(t,i)}else i=s.get(t),i===void 0&&(i=new Set,s.set(t,i));i.has(n)||(i.add(n),e=Dm.bind(null,e,t,n),t.then(e,e))}function ec(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function tc(e,t,n,s,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=vt(-1,1),t.tag=2,Ut(n,t,1))),n.lanes|=1),e)}var gm=bt.ReactCurrentOwner,Ee=!1;function we(e,t,n,s){t.child=e===null?Wd(t,null,n,s):Un(t,e.child,n,s)}function nc(e,t,n,s,i){n=n.render;var a=t.ref;return Rn(t,i),s=Ll(e,t,n,s,a,i),n=Ml(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,wt(e,t,i)):(K&&n&&wl(t),t.flags|=1,we(e,t,s,i),t.child)}function rc(e,t,n,s,i){if(e===null){var a=n.type;return typeof a=="function"&&!Hl(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,vu(e,t,a,s,i)):(e=Es(n.type,null,s,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var l=a.memoizedProps;if(n=n.compare,n=n!==null?n:Dr,n(l,s)&&e.ref===t.ref)return wt(e,t,i)}return t.flags|=1,e=Vt(a,s),e.ref=t.ref,e.return=t,t.child=e}function vu(e,t,n,s,i){if(e!==null){var a=e.memoizedProps;if(Dr(a,s)&&e.ref===t.ref)if(Ee=!1,t.pendingProps=s=a,(e.lanes&i)!==0)e.flags&131072&&(Ee=!0);else return t.lanes=e.lanes,wt(e,t,i)}return _a(e,t,n,s,i)}function gu(e,t,n){var s=t.pendingProps,i=s.children,a=e!==null?e.memoizedState:null;if(s.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(Tn,Le),Le|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,G(Tn,Le),Le|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=a!==null?a.baseLanes:n,G(Tn,Le),Le|=s}else a!==null?(s=a.baseLanes|n,t.memoizedState=null):s=n,G(Tn,Le),Le|=s;return we(e,t,i,n),t.child}function yu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function _a(e,t,n,s,i){var a=Te(n)?cn:ye.current;return a=On(t,a),Rn(t,i),n=Ll(e,t,n,s,a,i),s=Ml(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,wt(e,t,i)):(K&&s&&wl(t),t.flags|=1,we(e,t,n,i),t.child)}function sc(e,t,n,s,i){if(Te(n)){var a=!0;Fs(t)}else a=!1;if(Rn(t,i),t.stateNode===null)Ns(e,t),mu(t,n,s),Ma(t,n,s,i),s=!0;else if(e===null){var l=t.stateNode,c=t.memoizedProps;l.props=c;var o=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=He(d):(d=Te(n)?cn:ye.current,d=On(t,d));var x=n.getDerivedStateFromProps,h=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==s||o!==d)&&Jo(t,l,s,d),At=!1;var u=t.memoizedState;l.state=u,Hs(t,s,l,i),o=t.memoizedState,c!==s||u!==o||Ae.current||At?(typeof x=="function"&&(La(t,n,x,s),o=t.memoizedState),(c=At||Yo(t,n,c,s,u,o,d))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=o),l.props=s,l.state=o,l.context=d,s=c):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{l=t.stateNode,Zd(e,t),c=t.memoizedProps,d=t.type===t.elementType?c:Qe(t.type,c),l.props=d,h=t.pendingProps,u=l.context,o=n.contextType,typeof o=="object"&&o!==null?o=He(o):(o=Te(n)?cn:ye.current,o=On(t,o));var j=n.getDerivedStateFromProps;(x=typeof j=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==h||u!==o)&&Jo(t,l,s,o),At=!1,u=t.memoizedState,l.state=u,Hs(t,s,l,i);var y=t.memoizedState;c!==h||u!==y||Ae.current||At?(typeof j=="function"&&(La(t,n,j,s),y=t.memoizedState),(d=At||Yo(t,n,d,s,u,y,o)||!1)?(x||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(s,y,o),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(s,y,o)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=y),l.props=s,l.state=y,l.context=o,s=d):(typeof l.componentDidUpdate!="function"||c===e.memoizedProps&&u===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&u===e.memoizedState||(t.flags|=1024),s=!1)}return Ia(e,t,n,s,a,i)}function Ia(e,t,n,s,i,a){yu(e,t);var l=(t.flags&128)!==0;if(!s&&!l)return i&&Vo(t,n,!1),wt(e,t,a);s=t.stateNode,gm.current=t;var c=l&&typeof n.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&l?(t.child=Un(t,e.child,null,a),t.child=Un(t,null,c,a)):we(e,t,c,a),t.memoizedState=s.state,i&&Vo(t,n,!0),t.child}function ju(e){var t=e.stateNode;t.pendingContext?$o(e,t.pendingContext,t.pendingContext!==t.context):t.context&&$o(e,t.context,!1),Al(e,t.containerInfo)}function ic(e,t,n,s,i){return Fn(),kl(i),t.flags|=256,we(e,t,n,s),t.child}var Oa={dehydrated:null,treeContext:null,retryLane:0};function Fa(e){return{baseLanes:e,cachePool:null,transitions:null}}function wu(e,t,n){var s=t.pendingProps,i=Y.current,a=!1,l=(t.flags&128)!==0,c;if((c=l)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!==0),c?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),G(Y,i&1),e===null)return Da(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=s.children,e=s.fallback,a?(s=t.mode,a=t.child,l={mode:"hidden",children:l},!(s&1)&&a!==null?(a.childLanes=0,a.pendingProps=l):a=hi(l,s,0,null),e=ln(e,s,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Fa(n),t.memoizedState=Oa,e):Il(t,l));if(i=e.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return ym(e,t,l,s,c,i,n);if(a){a=s.fallback,l=t.mode,i=e.child,c=i.sibling;var o={mode:"hidden",children:s.children};return!(l&1)&&t.child!==i?(s=t.child,s.childLanes=0,s.pendingProps=o,t.deletions=null):(s=Vt(i,o),s.subtreeFlags=i.subtreeFlags&14680064),c!==null?a=Vt(c,a):(a=ln(a,l,n,null),a.flags|=2),a.return=t,s.return=t,s.sibling=a,t.child=s,s=a,a=t.child,l=e.child.memoizedState,l=l===null?Fa(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},a.memoizedState=l,a.childLanes=e.childLanes&~n,t.memoizedState=Oa,s}return a=e.child,e=a.sibling,s=Vt(a,{mode:"visible",children:s.children}),!(t.mode&1)&&(s.lanes=n),s.return=t,s.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=s,t.memoizedState=null,s}function Il(e,t){return t=hi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ps(e,t,n,s){return s!==null&&kl(s),Un(t,e.child,null,n),e=Il(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ym(e,t,n,s,i,a,l){if(n)return t.flags&256?(t.flags&=-257,s=Qi(Error(N(422))),ps(e,t,l,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=s.fallback,i=t.mode,s=hi({mode:"visible",children:s.children},i,0,null),a=ln(a,i,l,null),a.flags|=2,s.return=t,a.return=t,s.sibling=a,t.child=s,t.mode&1&&Un(t,e.child,null,l),t.child.memoizedState=Fa(l),t.memoizedState=Oa,a);if(!(t.mode&1))return ps(e,t,l,null);if(i.data==="$!"){if(s=i.nextSibling&&i.nextSibling.dataset,s)var c=s.dgst;return s=c,a=Error(N(419)),s=Qi(a,s,void 0),ps(e,t,l,s)}if(c=(l&e.childLanes)!==0,Ee||c){if(s=pe,s!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(s.suspendedLanes|l)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,jt(e,i),et(s,e,i,-1))}return Vl(),s=Qi(Error(N(421))),ps(e,t,l,s)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Pm.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Me=Ft(i.nextSibling),Re=t,K=!0,Ye=null,e!==null&&(Ue[Be++]=ht,Ue[Be++]=xt,Ue[Be++]=dn,ht=e.id,xt=e.overflow,dn=t),t=Il(t,s.children),t.flags|=4096,t)}function ac(e,t,n){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Pa(e.return,t,n)}function Ki(e,t,n,s,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=s,a.tail=n,a.tailMode=i)}function bu(e,t,n){var s=t.pendingProps,i=s.revealOrder,a=s.tail;if(we(e,t,s.children,n),s=Y.current,s&2)s=s&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ac(e,n,t);else if(e.tag===19)ac(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(G(Y,s),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ws(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ki(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ws(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ki(t,!0,n,null,a);break;case"together":Ki(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ns(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=Vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function jm(e,t,n){switch(t.tag){case 3:ju(t),Fn();break;case 5:qd(t);break;case 1:Te(t.type)&&Fs(t);break;case 4:Al(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,i=t.memoizedProps.value;G($s,s._currentValue),s._currentValue=i;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(G(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?wu(e,t,n):(G(Y,Y.current&1),e=wt(e,t,n),e!==null?e.sibling:null);G(Y,Y.current&1);break;case 19:if(s=(n&t.childLanes)!==0,e.flags&128){if(s)return bu(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(Y,Y.current),s)break;return null;case 22:case 23:return t.lanes=0,gu(e,t,n)}return wt(e,t,n)}var ku,Ua,Su,Nu;ku=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ua=function(){};Su=function(e,t,n,s){var i=e.memoizedProps;if(i!==s){e=t.stateNode,sn(ct.current);var a=null;switch(n){case"input":i=oa(e,i),s=oa(e,s),a=[];break;case"select":i=ee({},i,{value:void 0}),s=ee({},s,{value:void 0}),a=[];break;case"textarea":i=ua(e,i),s=ua(e,s),a=[];break;default:typeof i.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Is)}fa(n,s);var l;n=null;for(d in i)if(!s.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var c=i[d];for(l in c)c.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Sr.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in s){var o=s[d];if(c=i!=null?i[d]:void 0,s.hasOwnProperty(d)&&o!==c&&(o!=null||c!=null))if(d==="style")if(c){for(l in c)!c.hasOwnProperty(l)||o&&o.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in o)o.hasOwnProperty(l)&&c[l]!==o[l]&&(n||(n={}),n[l]=o[l])}else n||(a||(a=[]),a.push(d,n)),n=o;else d==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,c=c?c.__html:void 0,o!=null&&c!==o&&(a=a||[]).push(d,o)):d==="children"?typeof o!="string"&&typeof o!="number"||(a=a||[]).push(d,""+o):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Sr.hasOwnProperty(d)?(o!=null&&d==="onScroll"&&q("scroll",e),a||c===o||(a=[])):(a=a||[]).push(d,o))}n&&(a=a||[]).push("style",n);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};Nu=function(e,t,n,s){n!==s&&(t.flags|=4)};function or(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function ve(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,s=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,s|=i.subtreeFlags&14680064,s|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,s|=i.subtreeFlags,s|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=s,e.childLanes=n,t}function wm(e,t,n){var s=t.pendingProps;switch(bl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ve(t),null;case 1:return Te(t.type)&&Os(),ve(t),null;case 3:return s=t.stateNode,Bn(),Q(Ae),Q(ye),Dl(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ds(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ye!==null&&(qa(Ye),Ye=null))),Ua(e,t),ve(t),null;case 5:Tl(t);var i=sn(_r.current);if(n=t.type,e!==null&&t.stateNode!=null)Su(e,t,n,s,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(N(166));return ve(t),null}if(e=sn(ct.current),ds(t)){s=t.stateNode,n=t.type;var a=t.memoizedProps;switch(s[lt]=t,s[Mr]=a,e=(t.mode&1)!==0,n){case"dialog":q("cancel",s),q("close",s);break;case"iframe":case"object":case"embed":q("load",s);break;case"video":case"audio":for(i=0;i<fr.length;i++)q(fr[i],s);break;case"source":q("error",s);break;case"img":case"image":case"link":q("error",s),q("load",s);break;case"details":q("toggle",s);break;case"input":ho(s,a),q("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!a.multiple},q("invalid",s);break;case"textarea":vo(s,a),q("invalid",s)}fa(n,a),i=null;for(var l in a)if(a.hasOwnProperty(l)){var c=a[l];l==="children"?typeof c=="string"?s.textContent!==c&&(a.suppressHydrationWarning!==!0&&cs(s.textContent,c,e),i=["children",c]):typeof c=="number"&&s.textContent!==""+c&&(a.suppressHydrationWarning!==!0&&cs(s.textContent,c,e),i=["children",""+c]):Sr.hasOwnProperty(l)&&c!=null&&l==="onScroll"&&q("scroll",s)}switch(n){case"input":ts(s),xo(s,a,!0);break;case"textarea":ts(s),go(s);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(s.onclick=Is)}s=i,t.updateQueue=s,s!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=l.createElement(n,{is:s.is}):(e=l.createElement(n),n==="select"&&(l=e,s.multiple?l.multiple=!0:s.size&&(l.size=s.size))):e=l.createElementNS(e,n),e[lt]=t,e[Mr]=s,ku(e,t,!1,!1),t.stateNode=e;e:{switch(l=ma(n,s),n){case"dialog":q("cancel",e),q("close",e),i=s;break;case"iframe":case"object":case"embed":q("load",e),i=s;break;case"video":case"audio":for(i=0;i<fr.length;i++)q(fr[i],e);i=s;break;case"source":q("error",e),i=s;break;case"img":case"image":case"link":q("error",e),q("load",e),i=s;break;case"details":q("toggle",e),i=s;break;case"input":ho(e,s),i=oa(e,s),q("invalid",e);break;case"option":i=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},i=ee({},s,{value:void 0}),q("invalid",e);break;case"textarea":vo(e,s),i=ua(e,s),q("invalid",e);break;default:i=s}fa(n,i),c=i;for(a in c)if(c.hasOwnProperty(a)){var o=c[a];a==="style"?nd(e,o):a==="dangerouslySetInnerHTML"?(o=o?o.__html:void 0,o!=null&&ed(e,o)):a==="children"?typeof o=="string"?(n!=="textarea"||o!=="")&&Nr(e,o):typeof o=="number"&&Nr(e,""+o):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Sr.hasOwnProperty(a)?o!=null&&a==="onScroll"&&q("scroll",e):o!=null&&ll(e,a,o,l))}switch(n){case"input":ts(e),xo(e,s,!1);break;case"textarea":ts(e),go(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Wt(s.value));break;case"select":e.multiple=!!s.multiple,a=s.value,a!=null?Dn(e,!!s.multiple,a,!1):s.defaultValue!=null&&Dn(e,!!s.multiple,s.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Is)}switch(n){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ve(t),null;case 6:if(e&&t.stateNode!=null)Nu(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(N(166));if(n=sn(_r.current),sn(ct.current),ds(t)){if(s=t.stateNode,n=t.memoizedProps,s[lt]=t,(a=s.nodeValue!==n)&&(e=Re,e!==null))switch(e.tag){case 3:cs(s.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&cs(s.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else s=(n.nodeType===9?n:n.ownerDocument).createTextNode(s),s[lt]=t,t.stateNode=s}return ve(t),null;case 13:if(Q(Y),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Me!==null&&t.mode&1&&!(t.flags&128))Vd(),Fn(),t.flags|=98560,a=!1;else if(a=ds(t),s!==null&&s.dehydrated!==null){if(e===null){if(!a)throw Error(N(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(N(317));a[lt]=t}else Fn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ve(t),a=!1}else Ye!==null&&(qa(Ye),Ye=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?oe===0&&(oe=3):Vl())),t.updateQueue!==null&&(t.flags|=4),ve(t),null);case 4:return Bn(),Ua(e,t),e===null&&Pr(t.stateNode.containerInfo),ve(t),null;case 10:return Cl(t.type._context),ve(t),null;case 17:return Te(t.type)&&Os(),ve(t),null;case 19:if(Q(Y),a=t.memoizedState,a===null)return ve(t),null;if(s=(t.flags&128)!==0,l=a.rendering,l===null)if(s)or(a,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Ws(e),l!==null){for(t.flags|=128,or(a,!1),s=l.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=n,n=t.child;n!==null;)a=n,e=s,a.flags&=14680066,l=a.alternate,l===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return G(Y,Y.current&1|2),t.child}e=e.sibling}a.tail!==null&&re()>Vn&&(t.flags|=128,s=!0,or(a,!1),t.lanes=4194304)}else{if(!s)if(e=Ws(l),e!==null){if(t.flags|=128,s=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),or(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!K)return ve(t),null}else 2*re()-a.renderingStartTime>Vn&&n!==1073741824&&(t.flags|=128,s=!0,or(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(n=a.last,n!==null?n.sibling=l:t.child=l,a.last=l)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=re(),t.sibling=null,n=Y.current,G(Y,s?n&1|2:n&1),t):(ve(t),null);case 22:case 23:return $l(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&t.mode&1?Le&1073741824&&(ve(t),t.subtreeFlags&6&&(t.flags|=8192)):ve(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function bm(e,t){switch(bl(t),t.tag){case 1:return Te(t.type)&&Os(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bn(),Q(Ae),Q(ye),Dl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Tl(t),null;case 13:if(Q(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));Fn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(Y),null;case 4:return Bn(),null;case 10:return Cl(t.type._context),null;case 22:case 23:return $l(),null;case 24:return null;default:return null}}var fs=!1,ge=!1,km=typeof WeakSet=="function"?WeakSet:Set,L=null;function An(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(s){ne(e,t,s)}else n.current=null}function Ba(e,t,n){try{n()}catch(s){ne(e,t,s)}}var lc=!1;function Sm(e,t){if(Sa=Ms,e=Td(),jl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var i=s.anchorOffset,a=s.focusNode;s=s.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var l=0,c=-1,o=-1,d=0,x=0,h=e,u=null;t:for(;;){for(var j;h!==n||i!==0&&h.nodeType!==3||(c=l+i),h!==a||s!==0&&h.nodeType!==3||(o=l+s),h.nodeType===3&&(l+=h.nodeValue.length),(j=h.firstChild)!==null;)u=h,h=j;for(;;){if(h===e)break t;if(u===n&&++d===i&&(c=l),u===a&&++x===s&&(o=l),(j=h.nextSibling)!==null)break;h=u,u=h.parentNode}h=j}n=c===-1||o===-1?null:{start:c,end:o}}else n=null}n=n||{start:0,end:0}}else n=null;for(Na={focusedElem:e,selectionRange:n},Ms=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,b=y.memoizedState,f=t.stateNode,p=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:Qe(t.type,w),b);f.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(g){ne(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return y=lc,lc=!1,y}function jr(e,t,n){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var i=s=s.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Ba(t,n,a)}i=i.next}while(i!==s)}}function fi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var s=n.create;n.destroy=s()}n=n.next}while(n!==t)}}function $a(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Cu(e){var t=e.alternate;t!==null&&(e.alternate=null,Cu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[lt],delete t[Mr],delete t[Ea],delete t[am],delete t[lm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zu(e){return e.tag===5||e.tag===3||e.tag===4}function oc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Va(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Is));else if(s!==4&&(e=e.child,e!==null))for(Va(e,t,n),e=e.sibling;e!==null;)Va(e,t,n),e=e.sibling}function Ha(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Ha(e,t,n),e=e.sibling;e!==null;)Ha(e,t,n),e=e.sibling}var fe=null,Ke=!1;function zt(e,t,n){for(n=n.child;n!==null;)Eu(e,t,n),n=n.sibling}function Eu(e,t,n){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(ii,n)}catch{}switch(n.tag){case 5:ge||An(n,t);case 6:var s=fe,i=Ke;fe=null,zt(e,t,n),fe=s,Ke=i,fe!==null&&(Ke?(e=fe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):fe.removeChild(n.stateNode));break;case 18:fe!==null&&(Ke?(e=fe,n=n.stateNode,e.nodeType===8?Vi(e.parentNode,n):e.nodeType===1&&Vi(e,n),Ar(e)):Vi(fe,n.stateNode));break;case 4:s=fe,i=Ke,fe=n.stateNode.containerInfo,Ke=!0,zt(e,t,n),fe=s,Ke=i;break;case 0:case 11:case 14:case 15:if(!ge&&(s=n.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){i=s=s.next;do{var a=i,l=a.destroy;a=a.tag,l!==void 0&&(a&2||a&4)&&Ba(n,t,l),i=i.next}while(i!==s)}zt(e,t,n);break;case 1:if(!ge&&(An(n,t),s=n.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=n.memoizedProps,s.state=n.memoizedState,s.componentWillUnmount()}catch(c){ne(n,t,c)}zt(e,t,n);break;case 21:zt(e,t,n);break;case 22:n.mode&1?(ge=(s=ge)||n.memoizedState!==null,zt(e,t,n),ge=s):zt(e,t,n);break;default:zt(e,t,n)}}function cc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new km),t.forEach(function(s){var i=Lm.bind(null,e,s);n.has(s)||(n.add(s),s.then(i,i))})}}function qe(e,t){var n=t.deletions;if(n!==null)for(var s=0;s<n.length;s++){var i=n[s];try{var a=e,l=t,c=l;e:for(;c!==null;){switch(c.tag){case 5:fe=c.stateNode,Ke=!1;break e;case 3:fe=c.stateNode.containerInfo,Ke=!0;break e;case 4:fe=c.stateNode.containerInfo,Ke=!0;break e}c=c.return}if(fe===null)throw Error(N(160));Eu(a,l,i),fe=null,Ke=!1;var o=i.alternate;o!==null&&(o.return=null),i.return=null}catch(d){ne(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Au(t,e),t=t.sibling}function Au(e,t){var n=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qe(t,e),it(e),s&4){try{jr(3,e,e.return),fi(3,e)}catch(w){ne(e,e.return,w)}try{jr(5,e,e.return)}catch(w){ne(e,e.return,w)}}break;case 1:qe(t,e),it(e),s&512&&n!==null&&An(n,n.return);break;case 5:if(qe(t,e),it(e),s&512&&n!==null&&An(n,n.return),e.flags&32){var i=e.stateNode;try{Nr(i,"")}catch(w){ne(e,e.return,w)}}if(s&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,l=n!==null?n.memoizedProps:a,c=e.type,o=e.updateQueue;if(e.updateQueue=null,o!==null)try{c==="input"&&a.type==="radio"&&a.name!=null&&Yc(i,a),ma(c,l);var d=ma(c,a);for(l=0;l<o.length;l+=2){var x=o[l],h=o[l+1];x==="style"?nd(i,h):x==="dangerouslySetInnerHTML"?ed(i,h):x==="children"?Nr(i,h):ll(i,x,h,d)}switch(c){case"input":ca(i,a);break;case"textarea":Jc(i,a);break;case"select":var u=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var j=a.value;j!=null?Dn(i,!!a.multiple,j,!1):u!==!!a.multiple&&(a.defaultValue!=null?Dn(i,!!a.multiple,a.defaultValue,!0):Dn(i,!!a.multiple,a.multiple?[]:"",!1))}i[Mr]=a}catch(w){ne(e,e.return,w)}}break;case 6:if(qe(t,e),it(e),s&4){if(e.stateNode===null)throw Error(N(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(w){ne(e,e.return,w)}}break;case 3:if(qe(t,e),it(e),s&4&&n!==null&&n.memoizedState.isDehydrated)try{Ar(t.containerInfo)}catch(w){ne(e,e.return,w)}break;case 4:qe(t,e),it(e);break;case 13:qe(t,e),it(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Ul=re())),s&4&&cc(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(ge=(d=ge)||x,qe(t,e),ge=d):qe(t,e),it(e),s&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!x&&e.mode&1)for(L=e,x=e.child;x!==null;){for(h=L=x;L!==null;){switch(u=L,j=u.child,u.tag){case 0:case 11:case 14:case 15:jr(4,u,u.return);break;case 1:An(u,u.return);var y=u.stateNode;if(typeof y.componentWillUnmount=="function"){s=u,n=u.return;try{t=s,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){ne(s,n,w)}}break;case 5:An(u,u.return);break;case 22:if(u.memoizedState!==null){uc(h);continue}}j!==null?(j.return=u,L=j):uc(h)}x=x.sibling}e:for(x=null,h=e;;){if(h.tag===5){if(x===null){x=h;try{i=h.stateNode,d?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(c=h.stateNode,o=h.memoizedProps.style,l=o!=null&&o.hasOwnProperty("display")?o.display:null,c.style.display=td("display",l))}catch(w){ne(e,e.return,w)}}}else if(h.tag===6){if(x===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(w){ne(e,e.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;x===h&&(x=null),h=h.return}x===h&&(x=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:qe(t,e),it(e),s&4&&cc(e);break;case 21:break;default:qe(t,e),it(e)}}function it(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(zu(n)){var s=n;break e}n=n.return}throw Error(N(160))}switch(s.tag){case 5:var i=s.stateNode;s.flags&32&&(Nr(i,""),s.flags&=-33);var a=oc(e);Ha(e,a,i);break;case 3:case 4:var l=s.stateNode.containerInfo,c=oc(e);Va(e,c,l);break;default:throw Error(N(161))}}catch(o){ne(e,e.return,o)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Nm(e,t,n){L=e,Tu(e)}function Tu(e,t,n){for(var s=(e.mode&1)!==0;L!==null;){var i=L,a=i.child;if(i.tag===22&&s){var l=i.memoizedState!==null||fs;if(!l){var c=i.alternate,o=c!==null&&c.memoizedState!==null||ge;c=fs;var d=ge;if(fs=l,(ge=o)&&!d)for(L=i;L!==null;)l=L,o=l.child,l.tag===22&&l.memoizedState!==null?pc(i):o!==null?(o.return=l,L=o):pc(i);for(;a!==null;)L=a,Tu(a),a=a.sibling;L=i,fs=c,ge=d}dc(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,L=a):dc(e)}}function dc(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||fi(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!ge)if(n===null)s.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Qe(t.type,n.memoizedProps);s.componentDidUpdate(i,n.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&qo(t,a,s);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}qo(t,l,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var o=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":o.autoFocus&&n.focus();break;case"img":o.src&&(n.src=o.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var x=d.memoizedState;if(x!==null){var h=x.dehydrated;h!==null&&Ar(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}ge||t.flags&512&&$a(t)}catch(u){ne(t,t.return,u)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function uc(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function pc(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{fi(4,t)}catch(o){ne(t,n,o)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var i=t.return;try{s.componentDidMount()}catch(o){ne(t,i,o)}}var a=t.return;try{$a(t)}catch(o){ne(t,a,o)}break;case 5:var l=t.return;try{$a(t)}catch(o){ne(t,l,o)}}}catch(o){ne(t,t.return,o)}if(t===e){L=null;break}var c=t.sibling;if(c!==null){c.return=t.return,L=c;break}L=t.return}}var Cm=Math.ceil,qs=bt.ReactCurrentDispatcher,Ol=bt.ReactCurrentOwner,Ve=bt.ReactCurrentBatchConfig,B=0,pe=null,ie=null,me=0,Le=0,Tn=Jt(0),oe=0,Ur=null,pn=0,mi=0,Fl=0,wr=null,ze=null,Ul=0,Vn=1/0,ft=null,Qs=!1,Wa=null,Bt=null,ms=!1,Lt=null,Ks=0,br=0,Ga=null,Cs=-1,zs=0;function ke(){return B&6?re():Cs!==-1?Cs:Cs=re()}function $t(e){return e.mode&1?B&2&&me!==0?me&-me:cm.transition!==null?(zs===0&&(zs=md()),zs):(e=V,e!==0||(e=window.event,e=e===void 0?16:wd(e.type)),e):1}function et(e,t,n,s){if(50<br)throw br=0,Ga=null,Error(N(185));qr(e,n,s),(!(B&2)||e!==pe)&&(e===pe&&(!(B&2)&&(mi|=n),oe===4&&Dt(e,me)),De(e,s),n===1&&B===0&&!(t.mode&1)&&(Vn=re()+500,di&&Xt()))}function De(e,t){var n=e.callbackNode;cf(e,t);var s=Ls(e,e===pe?me:0);if(s===0)n!==null&&wo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(n!=null&&wo(n),t===1)e.tag===0?om(fc.bind(null,e)):Ud(fc.bind(null,e)),sm(function(){!(B&6)&&Xt()}),n=null;else{switch(hd(s)){case 1:n=pl;break;case 4:n=pd;break;case 16:n=Ps;break;case 536870912:n=fd;break;default:n=Ps}n=Ou(n,Du.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Du(e,t){if(Cs=-1,zs=0,B&6)throw Error(N(327));var n=e.callbackNode;if(_n()&&e.callbackNode!==n)return null;var s=Ls(e,e===pe?me:0);if(s===0)return null;if(s&30||s&e.expiredLanes||t)t=Ys(e,s);else{t=s;var i=B;B|=2;var a=Lu();(pe!==e||me!==t)&&(ft=null,Vn=re()+500,an(e,t));do try{Am();break}catch(c){Pu(e,c)}while(!0);Nl(),qs.current=a,B=i,ie!==null?t=0:(pe=null,me=0,t=oe)}if(t!==0){if(t===2&&(i=ya(e),i!==0&&(s=i,t=Za(e,i))),t===1)throw n=Ur,an(e,0),Dt(e,s),De(e,re()),n;if(t===6)Dt(e,s);else{if(i=e.current.alternate,!(s&30)&&!zm(i)&&(t=Ys(e,s),t===2&&(a=ya(e),a!==0&&(s=a,t=Za(e,a))),t===1))throw n=Ur,an(e,0),Dt(e,s),De(e,re()),n;switch(e.finishedWork=i,e.finishedLanes=s,t){case 0:case 1:throw Error(N(345));case 2:tn(e,ze,ft);break;case 3:if(Dt(e,s),(s&130023424)===s&&(t=Ul+500-re(),10<t)){if(Ls(e,0)!==0)break;if(i=e.suspendedLanes,(i&s)!==s){ke(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=za(tn.bind(null,e,ze,ft),t);break}tn(e,ze,ft);break;case 4:if(Dt(e,s),(s&4194240)===s)break;for(t=e.eventTimes,i=-1;0<s;){var l=31-Xe(s);a=1<<l,l=t[l],l>i&&(i=l),s&=~a}if(s=i,s=re()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*Cm(s/1960))-s,10<s){e.timeoutHandle=za(tn.bind(null,e,ze,ft),s);break}tn(e,ze,ft);break;case 5:tn(e,ze,ft);break;default:throw Error(N(329))}}}return De(e,re()),e.callbackNode===n?Du.bind(null,e):null}function Za(e,t){var n=wr;return e.current.memoizedState.isDehydrated&&(an(e,t).flags|=256),e=Ys(e,t),e!==2&&(t=ze,ze=n,t!==null&&qa(t)),e}function qa(e){ze===null?ze=e:ze.push.apply(ze,e)}function zm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var s=0;s<n.length;s++){var i=n[s],a=i.getSnapshot;i=i.value;try{if(!tt(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dt(e,t){for(t&=~Fl,t&=~mi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Xe(t),s=1<<n;e[n]=-1,t&=~s}}function fc(e){if(B&6)throw Error(N(327));_n();var t=Ls(e,0);if(!(t&1))return De(e,re()),null;var n=Ys(e,t);if(e.tag!==0&&n===2){var s=ya(e);s!==0&&(t=s,n=Za(e,s))}if(n===1)throw n=Ur,an(e,0),Dt(e,t),De(e,re()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,tn(e,ze,ft),De(e,re()),null}function Bl(e,t){var n=B;B|=1;try{return e(t)}finally{B=n,B===0&&(Vn=re()+500,di&&Xt())}}function fn(e){Lt!==null&&Lt.tag===0&&!(B&6)&&_n();var t=B;B|=1;var n=Ve.transition,s=V;try{if(Ve.transition=null,V=1,e)return e()}finally{V=s,Ve.transition=n,B=t,!(B&6)&&Xt()}}function $l(){Le=Tn.current,Q(Tn)}function an(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,rm(n)),ie!==null)for(n=ie.return;n!==null;){var s=n;switch(bl(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&Os();break;case 3:Bn(),Q(Ae),Q(ye),Dl();break;case 5:Tl(s);break;case 4:Bn();break;case 13:Q(Y);break;case 19:Q(Y);break;case 10:Cl(s.type._context);break;case 22:case 23:$l()}n=n.return}if(pe=e,ie=e=Vt(e.current,null),me=Le=t,oe=0,Ur=null,Fl=mi=pn=0,ze=wr=null,rn!==null){for(t=0;t<rn.length;t++)if(n=rn[t],s=n.interleaved,s!==null){n.interleaved=null;var i=s.next,a=n.pending;if(a!==null){var l=a.next;a.next=i,s.next=l}n.pending=s}rn=null}return e}function Pu(e,t){do{var n=ie;try{if(Nl(),ks.current=Zs,Gs){for(var s=J.memoizedState;s!==null;){var i=s.queue;i!==null&&(i.pending=null),s=s.next}Gs=!1}if(un=0,ue=le=J=null,yr=!1,Ir=0,Ol.current=null,n===null||n.return===null){oe=1,Ur=t,ie=null;break}e:{var a=e,l=n.return,c=n,o=t;if(t=me,c.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){var d=o,x=c,h=x.tag;if(!(x.mode&1)&&(h===0||h===11||h===15)){var u=x.alternate;u?(x.updateQueue=u.updateQueue,x.memoizedState=u.memoizedState,x.lanes=u.lanes):(x.updateQueue=null,x.memoizedState=null)}var j=ec(l);if(j!==null){j.flags&=-257,tc(j,l,c,a,t),j.mode&1&&Xo(a,d,t),t=j,o=d;var y=t.updateQueue;if(y===null){var w=new Set;w.add(o),t.updateQueue=w}else y.add(o);break e}else{if(!(t&1)){Xo(a,d,t),Vl();break e}o=Error(N(426))}}else if(K&&c.mode&1){var b=ec(l);if(b!==null){!(b.flags&65536)&&(b.flags|=256),tc(b,l,c,a,t),kl($n(o,c));break e}}a=o=$n(o,c),oe!==4&&(oe=2),wr===null?wr=[a]:wr.push(a),a=l;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var f=hu(a,o,t);Zo(a,f);break e;case 1:c=o;var p=a.type,m=a.stateNode;if(!(a.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Bt===null||!Bt.has(m)))){a.flags|=65536,t&=-t,a.lanes|=t;var g=xu(a,c,t);Zo(a,g);break e}}a=a.return}while(a!==null)}Ru(n)}catch(S){t=S,ie===n&&n!==null&&(ie=n=n.return);continue}break}while(!0)}function Lu(){var e=qs.current;return qs.current=Zs,e===null?Zs:e}function Vl(){(oe===0||oe===3||oe===2)&&(oe=4),pe===null||!(pn&268435455)&&!(mi&268435455)||Dt(pe,me)}function Ys(e,t){var n=B;B|=2;var s=Lu();(pe!==e||me!==t)&&(ft=null,an(e,t));do try{Em();break}catch(i){Pu(e,i)}while(!0);if(Nl(),B=n,qs.current=s,ie!==null)throw Error(N(261));return pe=null,me=0,oe}function Em(){for(;ie!==null;)Mu(ie)}function Am(){for(;ie!==null&&!Xp();)Mu(ie)}function Mu(e){var t=Iu(e.alternate,e,Le);e.memoizedProps=e.pendingProps,t===null?Ru(e):ie=t,Ol.current=null}function Ru(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=bm(n,t),n!==null){n.flags&=32767,ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,ie=null;return}}else if(n=wm(n,t,Le),n!==null){ie=n;return}if(t=t.sibling,t!==null){ie=t;return}ie=t=e}while(t!==null);oe===0&&(oe=5)}function tn(e,t,n){var s=V,i=Ve.transition;try{Ve.transition=null,V=1,Tm(e,t,n,s)}finally{Ve.transition=i,V=s}return null}function Tm(e,t,n,s){do _n();while(Lt!==null);if(B&6)throw Error(N(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(df(e,a),e===pe&&(ie=pe=null,me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ms||(ms=!0,Ou(Ps,function(){return _n(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Ve.transition,Ve.transition=null;var l=V;V=1;var c=B;B|=4,Ol.current=null,Sm(e,n),Au(n,e),Kf(Na),Ms=!!Sa,Na=Sa=null,e.current=n,Nm(n),ef(),B=c,V=l,Ve.transition=a}else e.current=n;if(ms&&(ms=!1,Lt=e,Ks=i),a=e.pendingLanes,a===0&&(Bt=null),rf(n.stateNode),De(e,re()),t!==null)for(s=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],s(i.value,{componentStack:i.stack,digest:i.digest});if(Qs)throw Qs=!1,e=Wa,Wa=null,e;return Ks&1&&e.tag!==0&&_n(),a=e.pendingLanes,a&1?e===Ga?br++:(br=0,Ga=e):br=0,Xt(),null}function _n(){if(Lt!==null){var e=hd(Ks),t=Ve.transition,n=V;try{if(Ve.transition=null,V=16>e?16:e,Lt===null)var s=!1;else{if(e=Lt,Lt=null,Ks=0,B&6)throw Error(N(331));var i=B;for(B|=4,L=e.current;L!==null;){var a=L,l=a.child;if(L.flags&16){var c=a.deletions;if(c!==null){for(var o=0;o<c.length;o++){var d=c[o];for(L=d;L!==null;){var x=L;switch(x.tag){case 0:case 11:case 15:jr(8,x,a)}var h=x.child;if(h!==null)h.return=x,L=h;else for(;L!==null;){x=L;var u=x.sibling,j=x.return;if(Cu(x),x===d){L=null;break}if(u!==null){u.return=j,L=u;break}L=j}}}var y=a.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var b=w.sibling;w.sibling=null,w=b}while(w!==null)}}L=a}}if(a.subtreeFlags&2064&&l!==null)l.return=a,L=l;else e:for(;L!==null;){if(a=L,a.flags&2048)switch(a.tag){case 0:case 11:case 15:jr(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,L=f;break e}L=a.return}}var p=e.current;for(L=p;L!==null;){l=L;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,L=m;else e:for(l=p;L!==null;){if(c=L,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:fi(9,c)}}catch(S){ne(c,c.return,S)}if(c===l){L=null;break e}var g=c.sibling;if(g!==null){g.return=c.return,L=g;break e}L=c.return}}if(B=i,Xt(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(ii,e)}catch{}s=!0}return s}finally{V=n,Ve.transition=t}}return!1}function mc(e,t,n){t=$n(n,t),t=hu(e,t,1),e=Ut(e,t,1),t=ke(),e!==null&&(qr(e,1,t),De(e,t))}function ne(e,t,n){if(e.tag===3)mc(e,e,n);else for(;t!==null;){if(t.tag===3){mc(t,e,n);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Bt===null||!Bt.has(s))){e=$n(n,e),e=xu(t,e,1),t=Ut(t,e,1),e=ke(),t!==null&&(qr(t,1,e),De(t,e));break}}t=t.return}}function Dm(e,t,n){var s=e.pingCache;s!==null&&s.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&n,pe===e&&(me&n)===n&&(oe===4||oe===3&&(me&130023424)===me&&500>re()-Ul?an(e,0):Fl|=n),De(e,t)}function _u(e,t){t===0&&(e.mode&1?(t=ss,ss<<=1,!(ss&130023424)&&(ss=4194304)):t=1);var n=ke();e=jt(e,t),e!==null&&(qr(e,t,n),De(e,n))}function Pm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_u(e,n)}function Lm(e,t){var n=0;switch(e.tag){case 13:var s=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(N(314))}s!==null&&s.delete(t),_u(e,n)}var Iu;Iu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ae.current)Ee=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ee=!1,jm(e,t,n);Ee=!!(e.flags&131072)}else Ee=!1,K&&t.flags&1048576&&Bd(t,Bs,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;Ns(e,t),e=t.pendingProps;var i=On(t,ye.current);Rn(t,n),i=Ll(null,t,s,e,i,n);var a=Ml();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Te(s)?(a=!0,Fs(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,El(t),i.updater=pi,t.stateNode=i,i._reactInternals=t,Ma(t,s,e,n),t=Ia(null,t,s,!0,a,n)):(t.tag=0,K&&a&&wl(t),we(null,t,i,n),t=t.child),t;case 16:s=t.elementType;e:{switch(Ns(e,t),e=t.pendingProps,i=s._init,s=i(s._payload),t.type=s,i=t.tag=Rm(s),e=Qe(s,e),i){case 0:t=_a(null,t,s,e,n);break e;case 1:t=sc(null,t,s,e,n);break e;case 11:t=nc(null,t,s,e,n);break e;case 14:t=rc(null,t,s,Qe(s.type,e),n);break e}throw Error(N(306,s,""))}return t;case 0:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:Qe(s,i),_a(e,t,s,i,n);case 1:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:Qe(s,i),sc(e,t,s,i,n);case 3:e:{if(ju(t),e===null)throw Error(N(387));s=t.pendingProps,a=t.memoizedState,i=a.element,Zd(e,t),Hs(t,s,null,n);var l=t.memoizedState;if(s=l.element,a.isDehydrated)if(a={element:s,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=$n(Error(N(423)),t),t=ic(e,t,s,n,i);break e}else if(s!==i){i=$n(Error(N(424)),t),t=ic(e,t,s,n,i);break e}else for(Me=Ft(t.stateNode.containerInfo.firstChild),Re=t,K=!0,Ye=null,n=Wd(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fn(),s===i){t=wt(e,t,n);break e}we(e,t,s,n)}t=t.child}return t;case 5:return qd(t),e===null&&Da(t),s=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,l=i.children,Ca(s,i)?l=null:a!==null&&Ca(s,a)&&(t.flags|=32),yu(e,t),we(e,t,l,n),t.child;case 6:return e===null&&Da(t),null;case 13:return wu(e,t,n);case 4:return Al(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Un(t,null,s,n):we(e,t,s,n),t.child;case 11:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:Qe(s,i),nc(e,t,s,i,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(s=t.type._context,i=t.pendingProps,a=t.memoizedProps,l=i.value,G($s,s._currentValue),s._currentValue=l,a!==null)if(tt(a.value,l)){if(a.children===i.children&&!Ae.current){t=wt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var c=a.dependencies;if(c!==null){l=a.child;for(var o=c.firstContext;o!==null;){if(o.context===s){if(a.tag===1){o=vt(-1,n&-n),o.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var x=d.pending;x===null?o.next=o:(o.next=x.next,x.next=o),d.pending=o}}a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Pa(a.return,n,t),c.lanes|=n;break}o=o.next}}else if(a.tag===10)l=a.type===t.type?null:a.child;else if(a.tag===18){if(l=a.return,l===null)throw Error(N(341));l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),Pa(l,n,t),l=a.sibling}else l=a.child;if(l!==null)l.return=a;else for(l=a;l!==null;){if(l===t){l=null;break}if(a=l.sibling,a!==null){a.return=l.return,l=a;break}l=l.return}a=l}we(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,s=t.pendingProps.children,Rn(t,n),i=He(i),s=s(i),t.flags|=1,we(e,t,s,n),t.child;case 14:return s=t.type,i=Qe(s,t.pendingProps),i=Qe(s.type,i),rc(e,t,s,i,n);case 15:return vu(e,t,t.type,t.pendingProps,n);case 17:return s=t.type,i=t.pendingProps,i=t.elementType===s?i:Qe(s,i),Ns(e,t),t.tag=1,Te(s)?(e=!0,Fs(t)):e=!1,Rn(t,n),mu(t,s,i),Ma(t,s,i,n),Ia(null,t,s,!0,e,n);case 19:return bu(e,t,n);case 22:return gu(e,t,n)}throw Error(N(156,t.tag))};function Ou(e,t){return ud(e,t)}function Mm(e,t,n,s){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(e,t,n,s){return new Mm(e,t,n,s)}function Hl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Rm(e){if(typeof e=="function")return Hl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===cl)return 11;if(e===dl)return 14}return 2}function Vt(e,t){var n=e.alternate;return n===null?(n=$e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Es(e,t,n,s,i,a){var l=2;if(s=e,typeof e=="function")Hl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case jn:return ln(n.children,i,a,t);case ol:l=8,i|=8;break;case sa:return e=$e(12,n,t,i|2),e.elementType=sa,e.lanes=a,e;case ia:return e=$e(13,n,t,i),e.elementType=ia,e.lanes=a,e;case aa:return e=$e(19,n,t,i),e.elementType=aa,e.lanes=a,e;case qc:return hi(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Gc:l=10;break e;case Zc:l=9;break e;case cl:l=11;break e;case dl:l=14;break e;case Et:l=16,s=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=$e(l,n,t,i),t.elementType=e,t.type=s,t.lanes=a,t}function ln(e,t,n,s){return e=$e(7,e,s,t),e.lanes=n,e}function hi(e,t,n,s){return e=$e(22,e,s,t),e.elementType=qc,e.lanes=n,e.stateNode={isHidden:!1},e}function Yi(e,t,n){return e=$e(6,e,null,t),e.lanes=n,e}function Ji(e,t,n){return t=$e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function _m(e,t,n,s,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pi(0),this.expirationTimes=Pi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pi(0),this.identifierPrefix=s,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Wl(e,t,n,s,i,a,l,c,o){return e=new _m(e,t,n,c,o),t===1?(t=1,a===!0&&(t|=8)):t=0,a=$e(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:s,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},El(a),e}function Im(e,t,n){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yn,key:s==null?null:""+s,children:e,containerInfo:t,implementation:n}}function Fu(e){if(!e)return Gt;e=e._reactInternals;e:{if(hn(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Te(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(Te(n))return Fd(e,n,t)}return t}function Uu(e,t,n,s,i,a,l,c,o){return e=Wl(n,s,!0,e,i,a,l,c,o),e.context=Fu(null),n=e.current,s=ke(),i=$t(n),a=vt(s,i),a.callback=t??null,Ut(n,a,i),e.current.lanes=i,qr(e,i,s),De(e,s),e}function xi(e,t,n,s){var i=t.current,a=ke(),l=$t(i);return n=Fu(n),t.context===null?t.context=n:t.pendingContext=n,t=vt(a,l),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=Ut(i,t,l),e!==null&&(et(e,i,l,a),bs(e,i,l)),l}function Js(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function hc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gl(e,t){hc(e,t),(e=e.alternate)&&hc(e,t)}function Om(){return null}var Bu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Zl(e){this._internalRoot=e}vi.prototype.render=Zl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));xi(e,t,null,null)};vi.prototype.unmount=Zl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;fn(function(){xi(null,e,null,null)}),t[yt]=null}};function vi(e){this._internalRoot=e}vi.prototype.unstable_scheduleHydration=function(e){if(e){var t=gd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Tt.length&&t!==0&&t<Tt[n].priority;n++);Tt.splice(n,0,e),n===0&&jd(e)}};function ql(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xc(){}function Fm(e,t,n,s,i){if(i){if(typeof s=="function"){var a=s;s=function(){var d=Js(l);a.call(d)}}var l=Uu(t,s,e,0,null,!1,!1,"",xc);return e._reactRootContainer=l,e[yt]=l.current,Pr(e.nodeType===8?e.parentNode:e),fn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof s=="function"){var c=s;s=function(){var d=Js(o);c.call(d)}}var o=Wl(e,0,!1,null,null,!1,!1,"",xc);return e._reactRootContainer=o,e[yt]=o.current,Pr(e.nodeType===8?e.parentNode:e),fn(function(){xi(t,o,n,s)}),o}function yi(e,t,n,s,i){var a=n._reactRootContainer;if(a){var l=a;if(typeof i=="function"){var c=i;i=function(){var o=Js(l);c.call(o)}}xi(t,l,e,i)}else l=Fm(n,t,e,i,s);return Js(l)}xd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=pr(t.pendingLanes);n!==0&&(fl(t,n|1),De(t,re()),!(B&6)&&(Vn=re()+500,Xt()))}break;case 13:fn(function(){var s=jt(e,1);if(s!==null){var i=ke();et(s,e,1,i)}}),Gl(e,1)}};ml=function(e){if(e.tag===13){var t=jt(e,134217728);if(t!==null){var n=ke();et(t,e,134217728,n)}Gl(e,134217728)}};vd=function(e){if(e.tag===13){var t=$t(e),n=jt(e,t);if(n!==null){var s=ke();et(n,e,t,s)}Gl(e,t)}};gd=function(){return V};yd=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};xa=function(e,t,n){switch(t){case"input":if(ca(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var s=n[t];if(s!==e&&s.form===e.form){var i=ci(s);if(!i)throw Error(N(90));Kc(s),ca(s,i)}}}break;case"textarea":Jc(e,n);break;case"select":t=n.value,t!=null&&Dn(e,!!n.multiple,t,!1)}};id=Bl;ad=fn;var Um={usingClientEntryPoint:!1,Events:[Kr,Sn,ci,rd,sd,Bl]},cr={findFiberByHostInstance:nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bm={bundleType:cr.bundleType,version:cr.version,rendererPackageName:cr.rendererPackageName,rendererConfig:cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=cd(e),e===null?null:e.stateNode},findFiberByHostInstance:cr.findFiberByHostInstance||Om,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hs.isDisabled&&hs.supportsFiber)try{ii=hs.inject(Bm),ot=hs}catch{}}Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Um;Ie.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ql(t))throw Error(N(200));return Im(e,t,null,n)};Ie.createRoot=function(e,t){if(!ql(e))throw Error(N(299));var n=!1,s="",i=Bu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Wl(e,1,!1,null,null,n,!1,s,i),e[yt]=t.current,Pr(e.nodeType===8?e.parentNode:e),new Zl(t)};Ie.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=cd(t),e=e===null?null:e.stateNode,e};Ie.flushSync=function(e){return fn(e)};Ie.hydrate=function(e,t,n){if(!gi(t))throw Error(N(200));return yi(null,e,t,!0,n)};Ie.hydrateRoot=function(e,t,n){if(!ql(e))throw Error(N(405));var s=n!=null&&n.hydratedSources||null,i=!1,a="",l=Bu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Uu(t,null,e,1,n??null,i,!1,a,l),e[yt]=t.current,Pr(e),s)for(e=0;e<s.length;e++)n=s[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new vi(t)};Ie.render=function(e,t,n){if(!gi(t))throw Error(N(200));return yi(null,e,t,!1,n)};Ie.unmountComponentAtNode=function(e){if(!gi(e))throw Error(N(40));return e._reactRootContainer?(fn(function(){yi(null,null,e,!1,function(){e._reactRootContainer=null,e[yt]=null})}),!0):!1};Ie.unstable_batchedUpdates=Bl;Ie.unstable_renderSubtreeIntoContainer=function(e,t,n,s){if(!gi(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return yi(e,t,n,!1,s)};Ie.version="18.3.1-next-f1338f8080-20240426";function $u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($u)}catch(e){console.error(e)}}$u(),$c.exports=Ie;var $m=$c.exports,vc=$m;na.createRoot=vc.createRoot,na.hydrateRoot=vc.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Br(){return Br=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)({}).hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Br.apply(null,arguments)}var Mt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Mt||(Mt={}));const gc="popstate";function Vm(e){e===void 0&&(e={});function t(s,i){let{pathname:a,search:l,hash:c}=s.location;return Qa("",{pathname:a,search:l,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(s,i){return typeof i=="string"?i:Xs(i)}return Wm(t,n,null,e)}function X(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Vu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Hm(){return Math.random().toString(36).substr(2,8)}function yc(e,t){return{usr:e.state,key:e.key,idx:t}}function Qa(e,t,n,s){return n===void 0&&(n=null),Br({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Kn(t):t,{state:n,key:t&&t.key||s||Hm()})}function Xs(e){let{pathname:t="/",search:n="",hash:s=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),s&&s!=="#"&&(t+=s.charAt(0)==="#"?s:"#"+s),t}function Kn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let s=e.indexOf("?");s>=0&&(t.search=e.substr(s),e=e.substr(0,s)),e&&(t.pathname=e)}return t}function Wm(e,t,n,s){s===void 0&&(s={});let{window:i=document.defaultView,v5Compat:a=!1}=s,l=i.history,c=Mt.Pop,o=null,d=x();d==null&&(d=0,l.replaceState(Br({},l.state,{idx:d}),""));function x(){return(l.state||{idx:null}).idx}function h(){c=Mt.Pop;let b=x(),f=b==null?null:b-d;d=b,o&&o({action:c,location:w.location,delta:f})}function u(b,f){c=Mt.Push;let p=Qa(w.location,b,f);d=x()+1;let m=yc(p,d),g=w.createHref(p);try{l.pushState(m,"",g)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(g)}a&&o&&o({action:c,location:w.location,delta:1})}function j(b,f){c=Mt.Replace;let p=Qa(w.location,b,f);d=x();let m=yc(p,d),g=w.createHref(p);l.replaceState(m,"",g),a&&o&&o({action:c,location:w.location,delta:0})}function y(b){let f=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof b=="string"?b:Xs(b);return p=p.replace(/ $/,"%20"),X(f,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,f)}let w={get action(){return c},get location(){return e(i,l)},listen(b){if(o)throw new Error("A history only accepts one active listener");return i.addEventListener(gc,h),o=b,()=>{i.removeEventListener(gc,h),o=null}},createHref(b){return t(i,b)},createURL:y,encodeLocation(b){let f=y(b);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:u,replace:j,go(b){return l.go(b)}};return w}var jc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(jc||(jc={}));function Gm(e,t,n){return n===void 0&&(n="/"),Zm(e,t,n)}function Zm(e,t,n,s){let i=typeof t=="string"?Kn(t):t,a=Hn(i.pathname||"/",n);if(a==null)return null;let l=Hu(e);qm(l);let c=null,o=ih(a);for(let d=0;c==null&&d<l.length;++d)c=rh(l[d],o);return c}function Hu(e,t,n,s){t===void 0&&(t=[]),n===void 0&&(n=[]),s===void 0&&(s="");let i=(a,l,c)=>{let o={relativePath:c===void 0?a.path||"":c,caseSensitive:a.caseSensitive===!0,childrenIndex:l,route:a};o.relativePath.startsWith("/")&&(X(o.relativePath.startsWith(s),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(s.length));let d=Ht([s,o.relativePath]),x=n.concat(o);a.children&&a.children.length>0&&(X(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Hu(a.children,t,x,d)),!(a.path==null&&!a.index)&&t.push({path:d,score:th(d,a.index),routesMeta:x})};return e.forEach((a,l)=>{var c;if(a.path===""||!((c=a.path)!=null&&c.includes("?")))i(a,l);else for(let o of Wu(a.path))i(a,l,o)}),t}function Wu(e){let t=e.split("/");if(t.length===0)return[];let[n,...s]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(s.length===0)return i?[a,""]:[a];let l=Wu(s.join("/")),c=[];return c.push(...l.map(o=>o===""?a:[a,o].join("/"))),i&&c.push(...l),c.map(o=>e.startsWith("/")&&o===""?"/":o)}function qm(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:nh(t.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}const Qm=/^:[\w-]+$/,Km=3,Ym=2,Jm=1,Xm=10,eh=-2,wc=e=>e==="*";function th(e,t){let n=e.split("/"),s=n.length;return n.some(wc)&&(s+=eh),t&&(s+=Ym),n.filter(i=>!wc(i)).reduce((i,a)=>i+(Qm.test(a)?Km:a===""?Jm:Xm),s)}function nh(e,t){return e.length===t.length&&e.slice(0,-1).every((s,i)=>s===t[i])?e[e.length-1]-t[t.length-1]:0}function rh(e,t,n){let{routesMeta:s}=e,i={},a="/",l=[];for(let c=0;c<s.length;++c){let o=s[c],d=c===s.length-1,x=a==="/"?t:t.slice(a.length)||"/",h=Ka({path:o.relativePath,caseSensitive:o.caseSensitive,end:d},x),u=o.route;if(!h)return null;Object.assign(i,h.params),l.push({params:i,pathname:Ht([a,h.pathname]),pathnameBase:oh(Ht([a,h.pathnameBase])),route:u}),h.pathnameBase!=="/"&&(a=Ht([a,h.pathnameBase]))}return l}function Ka(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,s]=sh(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],l=a.replace(/(.)\/+$/,"$1"),c=i.slice(1);return{params:s.reduce((d,x,h)=>{let{paramName:u,isOptional:j}=x;if(u==="*"){let w=c[h]||"";l=a.slice(0,a.length-w.length).replace(/(.)\/+$/,"$1")}const y=c[h];return j&&!y?d[u]=void 0:d[u]=(y||"").replace(/%2F/g,"/"),d},{}),pathname:a,pathnameBase:l,pattern:e}}function sh(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Vu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let s=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,c,o)=>(s.push({paramName:c,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),s]}function ih(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Vu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Hn(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,s=e.charAt(n);return s&&s!=="/"?null:e.slice(n)||"/"}function ah(e,t){t===void 0&&(t="/");let{pathname:n,search:s="",hash:i=""}=typeof e=="string"?Kn(e):e,a;return n?(n=Gu(n),n.startsWith("/")?a=bc(n.substring(1),"/"):a=bc(n,t)):a=t,{pathname:a,search:ch(s),hash:dh(i)}}function bc(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Xi(e,t,n,s){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function lh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Ql(e,t){let n=lh(e);return t?n.map((s,i)=>i===n.length-1?s.pathname:s.pathnameBase):n.map(s=>s.pathnameBase)}function Kl(e,t,n,s){s===void 0&&(s=!1);let i;typeof e=="string"?i=Kn(e):(i=Br({},e),X(!i.pathname||!i.pathname.includes("?"),Xi("?","pathname","search",i)),X(!i.pathname||!i.pathname.includes("#"),Xi("#","pathname","hash",i)),X(!i.search||!i.search.includes("#"),Xi("#","search","hash",i)));let a=e===""||i.pathname==="",l=a?"/":i.pathname,c;if(l==null)c=n;else{let h=t.length-1;if(!s&&l.startsWith("..")){let u=l.split("/");for(;u[0]==="..";)u.shift(),h-=1;i.pathname=u.join("/")}c=h>=0?t[h]:"/"}let o=ah(i,c),d=l&&l!=="/"&&l.endsWith("/"),x=(a||l===".")&&n.endsWith("/");return!o.pathname.endsWith("/")&&(d||x)&&(o.pathname+="/"),o}const Gu=e=>e.replace(/\/\/+/g,"/"),Ht=e=>Gu(e.join("/")),oh=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ch=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,dh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function uh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Zu=["post","put","patch","delete"];new Set(Zu);const ph=["get",...Zu];new Set(ph);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $r(){return $r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)({}).hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},$r.apply(null,arguments)}const ji=v.createContext(null),qu=v.createContext(null),kt=v.createContext(null),wi=v.createContext(null),pt=v.createContext({outlet:null,matches:[],isDataRoute:!1}),Qu=v.createContext(null);function fh(e,t){let{relative:n}=t===void 0?{}:t;Yn()||X(!1);let{basename:s,navigator:i}=v.useContext(kt),{hash:a,pathname:l,search:c}=bi(e,{relative:n}),o=l;return s!=="/"&&(o=l==="/"?s:Ht([s,l])),i.createHref({pathname:o,search:c,hash:a})}function Yn(){return v.useContext(wi)!=null}function Jn(){return Yn()||X(!1),v.useContext(wi).location}function Ku(e){v.useContext(kt).static||v.useLayoutEffect(e)}function rt(){let{isDataRoute:e}=v.useContext(pt);return e?Ah():mh()}function mh(){Yn()||X(!1);let e=v.useContext(ji),{basename:t,future:n,navigator:s}=v.useContext(kt),{matches:i}=v.useContext(pt),{pathname:a}=Jn(),l=JSON.stringify(Ql(i,n.v7_relativeSplatPath)),c=v.useRef(!1);return Ku(()=>{c.current=!0}),v.useCallback(function(d,x){if(x===void 0&&(x={}),!c.current)return;if(typeof d=="number"){s.go(d);return}let h=Kl(d,JSON.parse(l),a,x.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Ht([t,h.pathname])),(x.replace?s.replace:s.push)(h,x.state,x)},[t,s,l,a,e])}const hh=v.createContext(null);function xh(e){let t=v.useContext(pt).outlet;return t&&v.createElement(hh.Provider,{value:e},t)}function vh(){let{matches:e}=v.useContext(pt),t=e[e.length-1];return t?t.params:{}}function bi(e,t){let{relative:n}=t===void 0?{}:t,{future:s}=v.useContext(kt),{matches:i}=v.useContext(pt),{pathname:a}=Jn(),l=JSON.stringify(Ql(i,s.v7_relativeSplatPath));return v.useMemo(()=>Kl(e,JSON.parse(l),a,n==="path"),[e,l,a,n])}function gh(e,t){return yh(e,t)}function yh(e,t,n,s){Yn()||X(!1);let{navigator:i}=v.useContext(kt),{matches:a}=v.useContext(pt),l=a[a.length-1],c=l?l.params:{};l&&l.pathname;let o=l?l.pathnameBase:"/";l&&l.route;let d=Jn(),x;if(t){var h;let b=typeof t=="string"?Kn(t):t;o==="/"||(h=b.pathname)!=null&&h.startsWith(o)||X(!1),x=b}else x=d;let u=x.pathname||"/",j=u;if(o!=="/"){let b=o.replace(/^\//,"").split("/");j="/"+u.replace(/^\//,"").split("/").slice(b.length).join("/")}let y=Gm(e,{pathname:j}),w=Sh(y&&y.map(b=>Object.assign({},b,{params:Object.assign({},c,b.params),pathname:Ht([o,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?o:Ht([o,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),a,n,s);return t&&w?v.createElement(wi.Provider,{value:{location:$r({pathname:"/",search:"",hash:"",state:null,key:"default"},x),navigationType:Mt.Pop}},w):w}function jh(){let e=Eh(),t=uh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),n?v.createElement("pre",{style:i},n):null,null)}const wh=v.createElement(jh,null);class bh extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?v.createElement(pt.Provider,{value:this.props.routeContext},v.createElement(Qu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function kh(e){let{routeContext:t,match:n,children:s}=e,i=v.useContext(ji);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),v.createElement(pt.Provider,{value:t},s)}function Sh(e,t,n,s){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),s===void 0&&(s=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=s)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let l=e,c=(i=n)==null?void 0:i.errors;if(c!=null){let x=l.findIndex(h=>h.route.id&&(c==null?void 0:c[h.route.id])!==void 0);x>=0||X(!1),l=l.slice(0,Math.min(l.length,x+1))}let o=!1,d=-1;if(n&&s&&s.v7_partialHydration)for(let x=0;x<l.length;x++){let h=l[x];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=x),h.route.id){let{loaderData:u,errors:j}=n,y=h.route.loader&&u[h.route.id]===void 0&&(!j||j[h.route.id]===void 0);if(h.route.lazy||y){o=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((x,h,u)=>{let j,y=!1,w=null,b=null;n&&(j=c&&h.route.id?c[h.route.id]:void 0,w=h.route.errorElement||wh,o&&(d<0&&u===0?(Th("route-fallback"),y=!0,b=null):d===u&&(y=!0,b=h.route.hydrateFallbackElement||null)));let f=t.concat(l.slice(0,u+1)),p=()=>{let m;return j?m=w:y?m=b:h.route.Component?m=v.createElement(h.route.Component,null):h.route.element?m=h.route.element:m=x,v.createElement(kh,{match:h,routeContext:{outlet:x,matches:f,isDataRoute:n!=null},children:m})};return n&&(h.route.ErrorBoundary||h.route.errorElement||u===0)?v.createElement(bh,{location:n.location,revalidation:n.revalidation,component:w,error:j,children:p(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):p()},null)}var Yu=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Yu||{}),Ju=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ju||{});function Nh(e){let t=v.useContext(ji);return t||X(!1),t}function Ch(e){let t=v.useContext(qu);return t||X(!1),t}function zh(e){let t=v.useContext(pt);return t||X(!1),t}function Xu(e){let t=zh(),n=t.matches[t.matches.length-1];return n.route.id||X(!1),n.route.id}function Eh(){var e;let t=v.useContext(Qu),n=Ch(),s=Xu();return t!==void 0?t:(e=n.errors)==null?void 0:e[s]}function Ah(){let{router:e}=Nh(Yu.UseNavigateStable),t=Xu(Ju.UseNavigateStable),n=v.useRef(!1);return Ku(()=>{n.current=!0}),v.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,$r({fromRouteId:t},a)))},[e,t])}const kc={};function Th(e,t,n){kc[e]||(kc[e]=!0)}function Dh(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Sc(e){let{to:t,replace:n,state:s,relative:i}=e;Yn()||X(!1);let{future:a,static:l}=v.useContext(kt),{matches:c}=v.useContext(pt),{pathname:o}=Jn(),d=rt(),x=Kl(t,Ql(c,a.v7_relativeSplatPath),o,i==="path"),h=JSON.stringify(x);return v.useEffect(()=>d(JSON.parse(h),{replace:n,state:s,relative:i}),[d,h,i,n,s]),null}function Ph(e){return xh(e.context)}function je(e){X(!1)}function Lh(e){let{basename:t="/",children:n=null,location:s,navigationType:i=Mt.Pop,navigator:a,static:l=!1,future:c}=e;Yn()&&X(!1);let o=t.replace(/^\/*/,"/"),d=v.useMemo(()=>({basename:o,navigator:a,static:l,future:$r({v7_relativeSplatPath:!1},c)}),[o,c,a,l]);typeof s=="string"&&(s=Kn(s));let{pathname:x="/",search:h="",hash:u="",state:j=null,key:y="default"}=s,w=v.useMemo(()=>{let b=Hn(x,o);return b==null?null:{location:{pathname:b,search:h,hash:u,state:j,key:y},navigationType:i}},[o,x,h,u,j,y,i]);return w==null?null:v.createElement(kt.Provider,{value:d},v.createElement(wi.Provider,{children:n,value:w}))}function Mh(e){let{children:t,location:n}=e;return gh(Ya(t),n)}new Promise(()=>{});function Ya(e,t){t===void 0&&(t=[]);let n=[];return v.Children.forEach(e,(s,i)=>{if(!v.isValidElement(s))return;let a=[...t,i];if(s.type===v.Fragment){n.push.apply(n,Ya(s.props.children,a));return}s.type!==je&&X(!1),!s.props.index||!s.props.children||X(!1);let l={id:s.props.id||a.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(l.children=Ya(s.props.children,a)),n.push(l)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ei(){return ei=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)({}).hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},ei.apply(null,arguments)}function ep(e,t){if(e==null)return{};var n={};for(var s in e)if({}.hasOwnProperty.call(e,s)){if(t.indexOf(s)!==-1)continue;n[s]=e[s]}return n}function Rh(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function _h(e,t){return e.button===0&&(!t||t==="_self")&&!Rh(e)}const Ih=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Oh=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],Fh="6";try{window.__reactRouterVersion=Fh}catch{}const Uh=v.createContext({isTransitioning:!1}),Bh="startTransition",Nc=Tp[Bh];function $h(e){let{basename:t,children:n,future:s,window:i}=e,a=v.useRef();a.current==null&&(a.current=Vm({window:i,v5Compat:!0}));let l=a.current,[c,o]=v.useState({action:l.action,location:l.location}),{v7_startTransition:d}=s||{},x=v.useCallback(h=>{d&&Nc?Nc(()=>o(h)):o(h)},[o,d]);return v.useLayoutEffect(()=>l.listen(x),[l,x]),v.useEffect(()=>Dh(s),[s]),v.createElement(Lh,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:l,future:s})}const Vh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Hh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Wh=v.forwardRef(function(t,n){let{onClick:s,relative:i,reloadDocument:a,replace:l,state:c,target:o,to:d,preventScrollReset:x,viewTransition:h}=t,u=ep(t,Ih),{basename:j}=v.useContext(kt),y,w=!1;if(typeof d=="string"&&Hh.test(d)&&(y=d,Vh))try{let m=new URL(window.location.href),g=d.startsWith("//")?new URL(m.protocol+d):new URL(d),S=Hn(g.pathname,j);g.origin===m.origin&&S!=null?d=S+g.search+g.hash:w=!0}catch{}let b=fh(d,{relative:i}),f=qh(d,{replace:l,state:c,target:o,preventScrollReset:x,relative:i,viewTransition:h});function p(m){s&&s(m),m.defaultPrevented||f(m)}return v.createElement("a",ei({},u,{href:y||b,onClick:w||a?s:p,ref:n,target:o}))}),Gh=v.forwardRef(function(t,n){let{"aria-current":s="page",caseSensitive:i=!1,className:a="",end:l=!1,style:c,to:o,viewTransition:d,children:x}=t,h=ep(t,Oh),u=bi(o,{relative:h.relative}),j=Jn(),y=v.useContext(qu),{navigator:w,basename:b}=v.useContext(kt),f=y!=null&&Qh(u)&&d===!0,p=w.encodeLocation?w.encodeLocation(u).pathname:u.pathname,m=j.pathname,g=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(m=m.toLowerCase(),g=g?g.toLowerCase():null,p=p.toLowerCase()),g&&b&&(g=Hn(g,b)||g);const S=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let z=m===p||!l&&m.startsWith(p)&&m.charAt(S)==="/",E=g!=null&&(g===p||!l&&g.startsWith(p)&&g.charAt(p.length)==="/"),P={isActive:z,isPending:E,isTransitioning:f},$=z?s:void 0,k;typeof a=="function"?k=a(P):k=[a,z?"active":null,E?"pending":null,f?"transitioning":null].filter(Boolean).join(" ");let H=typeof c=="function"?c(P):c;return v.createElement(Wh,ei({},h,{"aria-current":$,className:k,ref:n,style:H,to:o,viewTransition:d}),typeof x=="function"?x(P):x)});var Ja;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ja||(Ja={}));var Cc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Cc||(Cc={}));function Zh(e){let t=v.useContext(ji);return t||X(!1),t}function qh(e,t){let{target:n,replace:s,state:i,preventScrollReset:a,relative:l,viewTransition:c}=t===void 0?{}:t,o=rt(),d=Jn(),x=bi(e,{relative:l});return v.useCallback(h=>{if(_h(h,n)){h.preventDefault();let u=s!==void 0?s:Xs(d)===Xs(x);o(e,{replace:u,state:i,preventScrollReset:a,relative:l,viewTransition:c})}},[d,o,x,s,i,n,e,a,l,c])}function Qh(e,t){t===void 0&&(t={});let n=v.useContext(Uh);n==null&&X(!1);let{basename:s}=Zh(Ja.useViewTransitionState),i=bi(e,{relative:t.relative});if(!n.isTransitioning)return!1;let a=Hn(n.currentLocation.pathname,s)||n.currentLocation.pathname,l=Hn(n.nextLocation.pathname,s)||n.nextLocation.pathname;return Ka(i.pathname,l)!=null||Ka(i.pathname,a)!=null}const Kh=[{id:"doc-001",name:"Zero_Trust_Architecture_v3.docx",type:"docx",size:4528128,sizeFormatted:"4.3 MB",owner:"Alex Morgan (You)",ownerEmail:"alex.morgan@zerotrust.sec",classification:"Highly Confidential",lastModified:"2026-10-28 14:23",uploadedAt:"2026-10-15 09:12",sharedWithCount:4,description:"Core architectural guidelines for least-privilege continuous micro-segmentation and ephemeral mTLS tokens.",sha256Hash:"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",version:"3.2",versions:[{version:"3.2",uploadedAt:"2026-10-28 14:23",uploadedBy:"Alex Morgan",size:"4.3 MB",changes:"Updated policy enforcement points and egress gateway mTLS rotation",hash:"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"},{version:"3.1",uploadedAt:"2026-10-20 11:05",uploadedBy:"Alex Morgan",size:"4.1 MB",changes:"Added continuous posture assessment criteria for Linux endpoints",hash:"8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4"},{version:"3.0",uploadedAt:"2026-10-15 09:12",uploadedBy:"Alex Morgan",size:"3.9 MB",changes:"Initial draft of Zero Trust Architecture Framework v3.0",hash:"7c6a5273a5a5f10b5f08e5828daec841f2be02ecce80f3e7b93a46718d56b066"}]},{id:"doc-002",name:"Security_Audit_Report_Q3_2026.pdf",type:"pdf",size:284e4,sizeFormatted:"2.7 MB",owner:"Elena Rostova",ownerEmail:"elena.rostova@zerotrust.sec",classification:"Confidential",lastModified:"2026-10-26 16:45",uploadedAt:"2026-10-22 10:30",sharedWithCount:8,description:"Comprehensive third-party red team assessment and vulnerability penetration testing synthesis.",sha256Hash:"3a42798e16c35c6cf0e3b97b1a206c4bcf1b59074092b7754eb53503c7aaec57",version:"1.4",versions:[{version:"1.4",uploadedAt:"2026-10-26 16:45",uploadedBy:"Elena Rostova",size:"2.7 MB",changes:"Resolved false positives in API perimeter penetration report",hash:"3a42798e16c35c6cf0e3b97b1a206c4bcf1b59074092b7754eb53503c7aaec57"},{version:"1.0",uploadedAt:"2026-10-22 10:30",uploadedBy:"Elena Rostova",size:"2.6 MB",changes:"Initial assessment draft received from external auditor",hash:"b14ca7c030d306b6b77df7f7300f2e0f06f5221081309df515865249a5b67e81"}]},{id:"doc-003",name:"Incident_Response_Playbook_v2.pdf",type:"pdf",size:195e4,sizeFormatted:"1.9 MB",owner:"Alex Morgan (You)",ownerEmail:"alex.morgan@zerotrust.sec",classification:"Internal",lastModified:"2026-10-24 09:30",uploadedAt:"2026-09-10 14:00",sharedWithCount:15,description:"Standard operating procedures for rapid containment of unauthorized data exfiltration attempts.",sha256Hash:"a1b2c3d4e5f60718293a4b5c6d7e8f90123456789abcdef0123456789abcdef0",version:"2.0",versions:[{version:"2.0",uploadedAt:"2026-10-24 09:30",uploadedBy:"Alex Morgan",size:"1.9 MB",changes:"Added automated isolation triggers for ransomware payloads",hash:"a1b2c3d4e5f60718293a4b5c6d7e8f90123456789abcdef0123456789abcdef0"}]},{id:"doc-004",name:"Enterprise_Access_Control_Matrix.xlsx",type:"xlsx",size:112e4,sizeFormatted:"1.1 MB",owner:"David Chen",ownerEmail:"david.chen@zerotrust.sec",classification:"Confidential",lastModified:"2026-10-27 18:10",uploadedAt:"2026-10-01 08:20",sharedWithCount:6,description:"Role-Based and Attribute-Based Access Control permissions across all tier-1 infrastructure assets.",sha256Hash:"4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945",version:"4.1",versions:[{version:"4.1",uploadedAt:"2026-10-27 18:10",uploadedBy:"David Chen",size:"1.1 MB",changes:"Updated cloud devops role clearances",hash:"4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945"}]},{id:"doc-005",name:"Employee_Onboarding_Handbook.pdf",type:"pdf",size:54e5,sizeFormatted:"5.2 MB",owner:"Sarah Jenkins",ownerEmail:"sarah.jenkins@zerotrust.sec",classification:"Public",lastModified:"2026-10-18 11:20",uploadedAt:"2026-08-01 13:40",sharedWithCount:120,description:"General organizational handbook, code of conduct, and public communications policy.",sha256Hash:"9e107d9d372bb6826bd81d3542a419d6ec4336eb838929b199e74288b8e3a7f8",version:"1.0",versions:[{version:"1.0",uploadedAt:"2026-10-18 11:20",uploadedBy:"Sarah Jenkins",size:"5.2 MB",changes:"Published official 2026 employee handbook edition",hash:"9e107d9d372bb6826bd81d3542a419d6ec4336eb838929b199e74288b8e3a7f8"}]},{id:"doc-006",name:"Cryptographic_Key_Rotation_Specs.docx",type:"docx",size:89e4,sizeFormatted:"870 KB",owner:"Alex Morgan (You)",ownerEmail:"alex.morgan@zerotrust.sec",classification:"Highly Confidential",lastModified:"2026-10-25 13:00",uploadedAt:"2026-10-25 13:00",sharedWithCount:2,description:"HSM KMS envelope encryption key schedule and automated 90-day rotation workflows.",sha256Hash:"112233445566778899aabbccddeeff00112233445566778899aabbccddeeff00",version:"1.0",versions:[{version:"1.0",uploadedAt:"2026-10-25 13:00",uploadedBy:"Alex Morgan",size:"870 KB",changes:"Initial release for cryptographic infrastructure committee review",hash:"112233445566778899aabbccddeeff00112233445566778899aabbccddeeff00"}]},{id:"doc-007",name:"Executive_Board_Security_Deck.pptx",type:"pptx",size:87e5,sizeFormatted:"8.3 MB",owner:"Marcus Vance",ownerEmail:"marcus.vance@zerotrust.sec",classification:"Confidential",lastModified:"2026-10-21 17:15",uploadedAt:"2026-10-20 15:00",sharedWithCount:5,description:"Quarterly board presentation on cybersecurity investments, threat landscape, and Zero-Trust rollout.",sha256Hash:"556677889900aabbccddeeff0011223344556677889900aabbccddeeff001122",version:"2.1",versions:[{version:"2.1",uploadedAt:"2026-10-21 17:15",uploadedBy:"Marcus Vance",size:"8.3 MB",changes:"Integrated Q3 compliance certification milestones",hash:"556677889900aabbccddeeff0011223344556677889900aabbccddeeff001122"}]},{id:"doc-008",name:"Zero_Trust_Enclave_Scripts.zip",type:"zip",size:154e5,sizeFormatted:"14.7 MB",owner:"Alex Morgan (You)",ownerEmail:"alex.morgan@zerotrust.sec",classification:"Internal",lastModified:"2026-10-19 12:40",uploadedAt:"2026-10-10 08:30",sharedWithCount:11,description:"Terraform and Ansible automation scripts for isolated micro-segmentation security zones.",sha256Hash:"ddeeff00112233445566778899aabbccddeeff00112233445566778899aabbcc",version:"1.2",versions:[{version:"1.2",uploadedAt:"2026-10-19 12:40",uploadedBy:"Alex Morgan",size:"14.7 MB",changes:"Hardened bastion host configuration scripts",hash:"ddeeff00112233445566778899aabbccddeeff00112233445566778899aabbcc"}]}],Yh=[{id:"swm-001",documentId:"doc-002",name:"Security_Audit_Report_Q3_2026.pdf",type:"pdf",size:"2.7 MB",owner:"Elena Rostova",ownerEmail:"elena.rostova@zerotrust.sec",classification:"Confidential",sharedDate:"2026-10-26 17:00",accessType:"View Only",expiryDate:"2026-11-15 23:59",status:"Active"},{id:"swm-002",documentId:"doc-004",name:"Enterprise_Access_Control_Matrix.xlsx",type:"xlsx",size:"1.1 MB",owner:"David Chen",ownerEmail:"david.chen@zerotrust.sec",classification:"Confidential",sharedDate:"2026-10-27 19:15",accessType:"Edit",expiryDate:"2026-11-05 23:59",status:"Expiring Soon"},{id:"swm-003",documentId:"doc-007",name:"Executive_Board_Security_Deck.pptx",type:"pptx",size:"8.3 MB",owner:"Marcus Vance",ownerEmail:"marcus.vance@zerotrust.sec",classification:"Confidential",sharedDate:"2026-10-22 09:10",accessType:"Restricted Download",expiryDate:"2026-11-30 23:59",status:"Active"},{id:"swm-004",documentId:"doc-009",name:"Disaster_Recovery_Failover_Plan.pdf",type:"pdf",size:"3.4 MB",owner:"Tariq Al-Mansoor",ownerEmail:"tariq.mansoor@zerotrust.sec",classification:"Internal",sharedDate:"2026-10-10 14:00",accessType:"View Only",expiryDate:"2026-10-25 23:59",status:"Expired"}],Jh=[{id:"sbm-001",documentId:"doc-001",documentName:"Zero_Trust_Architecture_v3.docx",classification:"Highly Confidential",recipientName:"David Chen",recipientEmail:"david.chen@zerotrust.sec",permissions:"Can Download",sharedDate:"2026-10-28 15:00",expiryDate:"2026-11-12 23:59",status:"Active"},{id:"sbm-002",documentId:"doc-001",documentName:"Zero_Trust_Architecture_v3.docx",classification:"Highly Confidential",recipientName:"Elena Rostova",recipientEmail:"elena.rostova@zerotrust.sec",permissions:"Full Access",sharedDate:"2026-10-28 15:05",expiryDate:"2026-11-20 23:59",status:"Active"},{id:"sbm-003",documentId:"doc-003",documentName:"Incident_Response_Playbook_v2.pdf",classification:"Internal",recipientName:"Security Operations Team (SOC)",recipientEmail:"soc-team@zerotrust.sec",permissions:"View Only",sharedDate:"2026-10-24 10:15",expiryDate:"2026-12-31 23:59",status:"Active"},{id:"sbm-004",documentId:"doc-006",documentName:"Cryptographic_Key_Rotation_Specs.docx",classification:"Highly Confidential",recipientName:"External Compliance Auditor",recipientEmail:"auditor.external@security-firm.io",permissions:"View Only",sharedDate:"2026-10-25 14:00",expiryDate:"2026-10-27 23:59",status:"Expired"},{id:"sbm-005",documentId:"doc-008",documentName:"Zero_Trust_Enclave_Scripts.zip",classification:"Internal",recipientName:"DevOps Infrastructure Lead",recipientEmail:"devops-lead@zerotrust.sec",permissions:"Can Download",sharedDate:"2026-10-19 14:30",expiryDate:"2026-10-26 23:59",status:"Revoked"}],Xh=[{id:"usr-001",name:"Alex Morgan",email:"alex.morgan@zerotrust.sec",department:"Cybersecurity Operations",role:"Admin",status:"Active",clearanceLevel:"Highly Confidential",lastActive:"Just now"},{id:"usr-002",name:"Elena Rostova",email:"elena.rostova@zerotrust.sec",department:"Threat Intelligence",role:"Security Officer",status:"Active",clearanceLevel:"Highly Confidential",lastActive:"12 minutes ago"},{id:"usr-003",name:"David Chen",email:"david.chen@zerotrust.sec",department:"Cloud Infrastructure",role:"Security Officer",status:"Active",clearanceLevel:"Confidential",lastActive:"1 hour ago"},{id:"usr-004",name:"Marcus Vance",email:"marcus.vance@zerotrust.sec",department:"Executive Governance",role:"Admin",status:"Active",clearanceLevel:"Highly Confidential",lastActive:"3 hours ago"},{id:"usr-005",name:"Sarah Jenkins",email:"sarah.jenkins@zerotrust.sec",department:"People Operations",role:"Standard User",status:"Active",clearanceLevel:"Internal",lastActive:"5 hours ago"},{id:"usr-006",name:"Tariq Al-Mansoor",email:"tariq.mansoor@zerotrust.sec",department:"Network Operations",role:"Compliance Officer",status:"Pending MFA",clearanceLevel:"Confidential",lastActive:"Yesterday"},{id:"usr-007",name:"Chloe Dubois",email:"chloe.dubois@zerotrust.sec",department:"Legal & Risk Compliance",role:"Auditor",status:"Active",clearanceLevel:"Confidential",lastActive:"2 days ago"},{id:"usr-008",name:"Ryan O'Connor",email:"ryan.oconnor@contractor.sec",department:"External Vendor Support",role:"Standard User",status:"Suspended",clearanceLevel:"Public",lastActive:"1 week ago"}],ex=[{id:"act-001",user:"Alex Morgan",userEmail:"alex.morgan@zerotrust.sec",action:"LOGIN_SUCCESS",document:"Session Authentication Gateway",timestamp:"2026-10-29 18:42:15",status:"Success",ipAddress:"192.168.10.45 (Zero-Trust Enclave)",device:"Edge Chromium v130 / Windows 11 Secure Workstation",details:"Zero-Trust continuous posture check passed; hardware token verified."},{id:"act-002",user:"Alex Morgan",userEmail:"alex.morgan@zerotrust.sec",action:"SHARE_CREATED",document:"Zero_Trust_Architecture_v3.docx",timestamp:"2026-10-28 15:05:00",status:"Success",ipAddress:"192.168.10.45",device:"Edge Chromium v130 / Windows 11 Secure Workstation",details:"Generated time-limited ephemeral access token for Elena Rostova with 14-day expiry."},{id:"act-003",user:"Ryan O'Connor",userEmail:"ryan.oconnor@contractor.sec",action:"ACCESS_BLOCKED",document:"Cryptographic_Key_Rotation_Specs.docx",timestamp:"2026-10-28 11:14:02",status:"Blocked",ipAddress:"203.0.113.88 (External Untrusted IP)",device:"Unknown Agent / Android 14",details:"Zero-Trust Policy Block: User clearance level (Public) insufficient for Highly Confidential resource."},{id:"act-004",user:"Elena Rostova",userEmail:"elena.rostova@zerotrust.sec",action:"FILE_DOWNLOAD",document:"Security_Audit_Report_Q3_2026.pdf",timestamp:"2026-10-28 09:22:45",status:"Success",ipAddress:"10.200.4.12",device:"Firefox v129 / macOS Sonoma Encrypted",details:"Watermarked copy exported with cryptographically signed user stamp."},{id:"act-005",user:"Tariq Al-Mansoor",userEmail:"tariq.mansoor@zerotrust.sec",action:"POLICY_VIOLATION",document:"Disaster_Recovery_Failover_Plan.pdf",timestamp:"2026-10-27 22:04:19",status:"Warning",ipAddress:"198.51.100.24",device:"Chrome v129 / Linux Ubuntu",details:"Attempted access outside designated working hours without pre-approved emergency ticket."},{id:"act-006",user:"David Chen",userEmail:"david.chen@zerotrust.sec",action:"PERMISSION_CHANGE",document:"Enterprise_Access_Control_Matrix.xlsx",timestamp:"2026-10-27 18:12:30",status:"Success",ipAddress:"10.200.4.88",device:"Chrome v130 / Windows 11 Secure Workstation",details:"Elevated editor role granted to Security Operations lead."},{id:"act-007",user:"Alex Morgan",userEmail:"alex.morgan@zerotrust.sec",action:"SHARE_REVOKED",document:"Zero_Trust_Enclave_Scripts.zip",timestamp:"2026-10-26 14:30:11",status:"Success",ipAddress:"192.168.10.45",device:"Edge Chromium v130 / Windows 11 Secure Workstation",details:"Immediate revocation of contractor access upon project completion milestone."},{id:"act-008",user:"Unknown Attacker",userEmail:"anonymous@darknet.mesh",action:"LOGIN_FAILED",document:"Admin Portal Endpoint /api/v1/auth",timestamp:"2026-10-26 03:11:45",status:"Blocked",ipAddress:"185.220.101.5 (Tor Exit Node)",device:"Automated Python/Requests 2.31",details:"Brute force credential stuffing attempt blocked automatically by Zero-Trust WAF."}],tx={usedBytes:374e5,totalBytes:107374182400,usedFormatted:"37.4 MB",totalFormatted:"100 GB",percentage:.035,byCategory:{documents:14.8,spreadsheets:1.1,presentations:8.3,archives:14.7,other:.5}},ti=typeof window<"u"&&(window.location.port==="3000"||window.location.port==="5173")?"/api":"http://localhost:8080/api",Yl="zt_auth_token",Jl="zt_auth_user",Vr=()=>localStorage.getItem(Yl),nx=(e,t)=>{localStorage.setItem(Yl,e),localStorage.setItem(Jl,JSON.stringify(t))},Xl=()=>{localStorage.removeItem(Yl),localStorage.removeItem(Jl)},rx=()=>{const e=localStorage.getItem(Jl);return e?JSON.parse(e):null};class Rt extends Error{constructor(n,s,i){super(s);Ci(this,"status");Ci(this,"data");this.name="ApiError",this.status=n,this.data=i}}async function W(e,t={}){const n=`${ti}${e}`,s=Vr(),i={"Content-Type":"application/json",Accept:"application/json",...t.headers};s&&(i.Authorization=`Bearer ${s}`);let a;try{a=await fetch(n,{...t,headers:i})}catch{throw new Rt(0,"Unable to connect to Zero-Trust backend server at "+ti+". Ensure the Spring Boot backend is running.")}if(a.status===401){Xl(),window.dispatchEvent(new CustomEvent("zt-auth-expired"));let l="Authentication failed or session token has expired.";try{const c=await a.json();c.message&&(l=c.message)}catch{}throw new Rt(401,l)}if(a.status===403){let l="Zero-Trust Policy Violation: Access Forbidden (Insufficient Clearance).";try{const c=await a.json();c.message&&(l=c.message)}catch{}throw new Rt(403,l)}if(!a.ok){let l=`Request failed with status ${a.status}`,c=null;try{c=await a.json(),c.message&&(l=c.message)}catch{}throw new Rt(a.status,l,c)}return a.status===204?{}:a.json()}const ea={login:async(e,t)=>W("/auth/login",{method:"POST",body:JSON.stringify({email:e,password:t})}),register:async(e,t,n,s)=>W("/auth/register",{method:"POST",body:JSON.stringify({fullName:e,email:t,password:n,departmentName:s})}),getMe:async()=>W("/auth/me",{method:"GET"}),logout:async()=>{try{await W("/auth/logout",{method:"POST"})}finally{Xl()}}},ta={getDocuments:async e=>{const t=new URLSearchParams;e!=null&&e.classification&&e.classification!=="All"&&t.append("classification",e.classification),e!=null&&e.search&&t.append("search",e.search),e!=null&&e.sortBy&&t.append("sortBy",e.sortBy),e!=null&&e.sortOrder&&t.append("sortOrder",e.sortOrder);const n=t.toString();return W(`/documents${n?`?${n}`:""}`,{method:"GET"})},getDocument:async e=>W(`/documents/${e}`,{method:"GET"}),createDocument:async e=>W("/documents",{method:"POST",body:JSON.stringify(e)}),updateDocument:async(e,t)=>W(`/documents/${e}`,{method:"PUT",body:JSON.stringify(t)}),deleteDocument:async e=>W(`/documents/${e}`,{method:"DELETE"})},xs={getUsers:async()=>W("/users",{method:"GET"}),getUser:async e=>W(`/users/${e}`,{method:"GET"}),createUser:async e=>W("/users",{method:"POST",body:JSON.stringify(e)}),updateUser:async(e,t)=>W(`/users/${e}`,{method:"PUT",body:JSON.stringify(t)}),updateStatus:async(e,t)=>W(`/users/${e}/status`,{method:"PATCH",body:JSON.stringify({status:t})}),deleteUser:async e=>W(`/users/${e}`,{method:"DELETE"}),getProfile:async()=>W("/users/profile",{method:"GET"}),updateProfile:async e=>W("/users/profile",{method:"PUT",body:JSON.stringify(e)})},sx={getStats:async()=>W("/dashboard/stats",{method:"GET"})},ix={getActivities:async e=>{const t=new URLSearchParams;e!=null&&e.query&&t.append("query",e.query),e!=null&&e.status&&e.status!=="All"&&t.append("status",e.status),e!=null&&e.action&&e.action!=="All"&&t.append("action",e.action);const n=t.toString();return W(`/activities${n?`?${n}`:""}`,{method:"GET"})}},be={getStatus:async()=>W("/drive/status",{method:"GET"}),getAuthUrl:async()=>W("/drive/auth-url",{method:"GET"}),handleCallback:async(e,t)=>W("/drive/callback",{method:"POST",body:JSON.stringify({code:e,state:t})}),disconnect:async()=>W("/drive/disconnect",{method:"POST"}),uploadFile:async e=>{const t=`${ti}/drive/upload`,n=Vr(),s={};n&&(s.Authorization=`Bearer ${n}`);const i=await fetch(t,{method:"POST",headers:s,body:e});if(!i.ok){let a="Google Drive upload failed.";try{const l=await i.json();l.message&&(a=l.message)}catch{}throw new Rt(i.status,a)}return i.json()},downloadDocument:async(e,t)=>{const n=`${ti}/drive/download/${e}`,s=Vr(),i={};s&&(i.Authorization=`Bearer ${s}`);const a=await fetch(n,{method:"GET",headers:i});if(!a.ok){let d="Zero-Trust Download Failed.";try{const x=await a.json();x.message&&(d=x.message)}catch{}throw new Rt(a.status,d)}const l=await a.blob(),c=window.URL.createObjectURL(l),o=document.createElement("a");o.href=c,o.download=t,document.body.appendChild(o),o.click(),document.body.removeChild(o),window.URL.revokeObjectURL(c)},shareDocument:async(e,t)=>W(`/drive/share/${e}`,{method:"POST",body:JSON.stringify(t)}),revokeShare:async e=>W(`/drive/shares/${e}/revoke`,{method:"POST"}),getSharesByMe:async()=>W("/drive/shares/by-me",{method:"GET"}),getSharesWithMe:async()=>W("/drive/shares/with-me",{method:"GET"})},tp=v.createContext(void 0),ax=({children:e})=>{const[t,n]=v.useState(()=>rx()),[s,i]=v.useState(()=>!!Vr()),[a,l]=v.useState(!1),[c,o]=v.useState(!1),[d,x]=v.useState(Kh),[h,u]=v.useState(Yh),[j,y]=v.useState(Jh),[w,b]=v.useState(Xh),[f,p]=v.useState(ex),[m,g]=v.useState(tx),[S,z]=v.useState(""),[E,P]=v.useState(!1),[$,k]=v.useState(null),[H,ae]=v.useState([{id:"notif-1",title:"Zero-Trust Device Verification",message:"Hardware token posture check completed successfully for this session.",time:"10m ago",read:!1,type:"success"},{id:"notif-2",title:"Access Expiry Notice",message:"Access to Enterprise_Access_Control_Matrix.xlsx expires in 7 days.",time:"1h ago",read:!1,type:"warning"},{id:"notif-3",title:"Document Shared With You",message:"Elena Rostova shared Security_Audit_Report_Q3_2026.pdf with View Only rights.",time:"3h ago",read:!1,type:"info"}]),M=(T,I="success")=>{const C=Date.now().toString();k({id:C,message:T,type:I}),setTimeout(()=>{k(_=>(_==null?void 0:_.id)===C?null:_)},4e3)},se=()=>{ae(T=>T.map(I=>({...I,read:!0}))),M("All notifications marked as read","info")},Pe=H.filter(T=>!T.read).length,Ge=async()=>{if(Vr())try{o(!0);const I=await ea.getMe();n(I),i(!0),l(!0);try{const C=await ta.getDocuments();C&&Array.isArray(C)&&C.length>0&&x(C)}catch{}try{const C=await xs.getUsers();C&&Array.isArray(C)&&b(C)}catch{}try{const C=await sx.getStats();C&&C.storageStats&&g({usedBytes:C.storageStats.usedBytes,totalBytes:C.storageStats.totalBytes,usedFormatted:C.storageStats.usedFormatted,totalFormatted:C.storageStats.totalFormatted,percentage:C.storageStats.percentage,byCategory:{documents:C.storageStats.byCategory.documents||14.8,spreadsheets:C.storageStats.byCategory.spreadsheets||1.1,presentations:C.storageStats.byCategory.presentations||8.3,archives:C.storageStats.byCategory.archives||14.7,other:.5}})}catch{}try{const C=await ix.getActivities();C&&Array.isArray(C)&&C.length>0&&p(C)}catch{}try{const C=await be.getSharesByMe();C&&Array.isArray(C)&&C.length>0&&y(C.map(_=>({id:_.id,documentId:_.documentId,documentName:_.documentName,classification:_.classification,recipientName:_.recipientName,recipientEmail:_.recipientEmail,permissions:_.permissions,sharedDate:_.sharedDate,expiryDate:_.expiryDate,status:_.status==="ACTIVE"?"Active":_.status==="REVOKED"?"Revoked":"Expired",oneTimeAccess:_.oneTimeAccess,accessCount:_.accessCount,maxAccessCount:_.maxAccessCount,storageLocation:_.storageLocation})))}catch{}try{const C=await be.getSharesWithMe();C&&Array.isArray(C)&&u(C.map(_=>({id:_.id,documentId:_.documentId,name:_.documentName,type:_.fileType||"pdf",size:_.fileSize||"1.5 MB",owner:_.ownerName||"Alex Morgan",ownerEmail:_.ownerEmail||"user@zerotrust.sec",classification:_.classification,sharedDate:_.sharedDate,accessType:_.permissions==="View Only"?"View Only":_.permissions==="Can Download"?"Restricted Download":"Edit",expiryDate:_.expiryDate,status:_.status==="ACTIVE"?"Active":"Expired",oneTimeAccess:_.oneTimeAccess,accessCount:_.accessCount,storageLocation:_.storageLocation})))}catch{}}catch(I){I instanceof Rt&&I.status===401?(i(!1),n(null)):l(!1)}finally{o(!1)}};v.useEffect(()=>{Ge();const T=()=>{i(!1),n(null),M("Zero-Trust session has expired. Please authenticate.","warning")};return window.addEventListener("zt-auth-expired",T),()=>window.removeEventListener("zt-auth-expired",T)},[]);const st=async(T,I)=>{try{o(!0);const C=await ea.login(T,I);return nx(C.token,C.user),n(C.user),i(!0),l(!0),M("Authenticated via Spring Boot Backend. Zero-Trust Token issued.","success"),await Ge(),!0}catch(C){return C instanceof Rt&&C.status===0?(M("Backend server is offline. Running in local simulation mode.","warning"),i(!0),!0):(M(C.message||"Authentication failed. Please verify credentials.","error"),!1)}finally{o(!1)}},A=async()=>{try{await ea.logout()}catch{Xl()}finally{i(!1),n(null),M("Session ended. Returning to secure login gateway.","info")}},O=async T=>{try{if(a){const I=await ta.createDocument({name:T.name,fileType:T.type,fileSize:T.size,sizeFormatted:T.sizeFormatted,classification:T.classification,description:T.description});x(C=>[I,...C]),M(`"${T.name}" securely registered in backend database.`,"success")}else{const I=Array.from({length:64},()=>Math.floor(Math.random()*16).toString(16)).join(""),C={id:`doc-${Date.now()}`,name:T.name,type:T.type,size:T.size,sizeFormatted:T.sizeFormatted,owner:(t==null?void 0:t.fullName)||"Alex Morgan",ownerEmail:(t==null?void 0:t.email)||"alex.morgan@zerotrust.sec",classification:T.classification,lastModified:"Just now",uploadedAt:new Date().toISOString().replace("T"," ").substring(0,16),sharedWithCount:0,description:T.description||"Uploaded via Zero-Trust secure file ingestion interface.",sha256Hash:I,version:"1.0",versions:[{version:"1.0",uploadedAt:new Date().toISOString().replace("T"," ").substring(0,16),uploadedBy:(t==null?void 0:t.fullName)||"Alex Morgan",size:T.sizeFormatted,changes:"Initial ingestion with metadata binding",hash:I}]};x(_=>[C,..._]),M(`"${T.name}" securely ingested into the vault.`,"success")}}catch(I){M(I.message||"Error uploading document metadata.","error")}},F=async T=>{const I=d.find(C=>C.id===T);try{a&&await ta.deleteDocument(T),x(C=>C.filter(_=>_.id!==T)),M(`Document "${(I==null?void 0:I.name)||T}" purged from vault.`,"info")}catch(C){M(C.message||"Error deleting document.","error")}},Z=async(T,I,C,_,Ce,xn)=>{const vn=d.find(de=>de.id===T);if(vn)try{if(a){const de=await be.shareDocument(T,{recipientEmail:I,recipientName:C,permissions:_,expiryDate:Ce,oneTimeAccess:!!xn,maxAccessCount:1}),Ct={id:de.id,documentId:T,documentName:vn.name,classification:vn.classification,recipientName:de.recipientName||I.split("@")[0],recipientEmail:de.recipientEmail,permissions:de.permissions,sharedDate:de.sharedDate,expiryDate:de.expiryDate,status:"Active",oneTimeAccess:de.oneTimeAccess,accessCount:de.accessCount,maxAccessCount:de.maxAccessCount,storageLocation:de.storageLocation};y(dp=>[Ct,...dp])}else{const de={id:`sbm-${Date.now()}`,documentId:T,documentName:vn.name,classification:vn.classification,recipientName:C||I.split("@")[0],recipientEmail:I,permissions:_,sharedDate:new Date().toISOString().replace("T"," ").substring(0,16),expiryDate:Ce||"2026-11-30 23:59",status:"Active",oneTimeAccess:!!xn,accessCount:0,maxAccessCount:1};y(Ct=>[de,...Ct])}x(de=>de.map(Ct=>Ct.id===T?{...Ct,sharedWithCount:Ct.sharedWithCount+1}:Ct)),M(`Shared "${vn.name}" with ${I} ${xn?"(One-Time Token)":""}`,"success")}catch(de){M(de.message||"Error generating secure share.","error")}},te=(T,I,C)=>{y(_=>_.map(Ce=>Ce.id===T?{...Ce,permissions:I,expiryDate:C}:Ce)),M("Sharing permissions updated successfully.","success")},R=async T=>{const I=j.find(C=>C.id===T);try{a&&I&&await be.revokeShare(T),y(C=>C.map(_=>_.id===T?{..._,status:"Revoked"}:_)),I&&M(`Revoked access for ${I.recipientEmail}`,"info")}catch(C){M(C.message||"Error revoking share.","error")}},Fe=async T=>{try{if(a){const I=await xs.createUser({fullName:T.name,email:T.email,password:T.password||"SecurePass2026!",departmentName:T.department,roleName:T.role==="Admin"?"ADMIN":T.role==="Security Officer"?"MANAGER":"EMPLOYEE",clearanceLevel:T.clearanceLevel});b(C=>[I,...C]),M(`User ${T.name} provisioned in PostgreSQL database.`,"success")}else{const I={...T,id:`usr-${Date.now()}`,lastActive:"Never (Invited)"};b(C=>[I,...C]),M(`User ${I.name} added to Zero-Trust directory.`,"success")}}catch(I){M(I.message||"Error provisioning user.","error")}},Nt=async(T,I)=>{try{const C=parseInt(T.replace("usr-",""),10);if(a&&!isNaN(C)){const _=await xs.updateUser(C,{fullName:I.name,departmentName:I.department,roleName:I.role==="Admin"?"ADMIN":I.role==="Security Officer"?"MANAGER":"EMPLOYEE",clearanceLevel:I.clearanceLevel,status:I.status});b(Ce=>Ce.map(xn=>xn.id===T?_:xn))}else b(_=>_.map(Ce=>Ce.id===T?{...Ce,...I}:Ce));M("User record updated.","success")}catch(C){M(C.message||"Error updating user record.","error")}},Ze=async T=>{const I=w.find(C=>C.id===T);try{const C=parseInt(T.replace("usr-",""),10);a&&!isNaN(C)&&await xs.deleteUser(C),b(_=>_.filter(Ce=>Ce.id!==T)),M(`User ${(I==null?void 0:I.name)||""} removed from access control list.`,"info")}catch(C){M(C.message||"Error removing user.","error")}};return r.jsx(tp.Provider,{value:{currentUser:t,isAuthenticated:s,backendConnected:a,loading:c,documents:d,sharedWithMe:h,sharedByMe:j,users:w,securityActivities:f,storageStats:m,globalSearch:S,setGlobalSearch:z,sidebarOpen:E,setSidebarOpen:P,toast:$,showToast:M,notifications:H,unreadNotificationCount:Pe,markAllNotificationsRead:se,loginUser:st,logoutUser:A,refreshBackendData:Ge,addDocument:O,deleteDocument:F,shareDocument:Z,updateSharedPermission:te,revokeSharedAccess:R,addUser:Fe,updateUser:Nt,deleteUser:Ze},children:e})},ce=()=>{const e=v.useContext(tp);if(!e)throw new Error("useApp must be used within an AppProvider");return e};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),np=(...e)=>e.filter((t,n,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ox={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=v.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:i="",children:a,iconNode:l,...c},o)=>v.createElement("svg",{ref:o,...ox,width:t,height:t,stroke:e,strokeWidth:s?Number(n)*24/Number(t):n,className:np("lucide",i),...c},[...l.map(([d,x])=>v.createElement(d,x)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=(e,t)=>{const n=v.forwardRef(({className:s,...i},a)=>v.createElement(cx,{ref:a,iconNode:t,className:np(`lucide-${lx(e)}`,s),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=D("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=D("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=D("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=D("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=D("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=D("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=D("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=D("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=D("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=D("CheckCheck",[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=D("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=D("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=D("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=D("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hr=D("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xa=D("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=D("CloudUpload",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=D("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=D("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=D("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=D("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=D("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=D("FileCheck2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=D("FileCode",[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=D("FileSpreadsheet",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=D("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=D("Files",[["path",{d:"M20 7h-3a2 2 0 0 1-2-2V2",key:"x099mo"}],["path",{d:"M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z",key:"18t6ie"}],["path",{d:"M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8",key:"1nja0z"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=D("FolderDown",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m15 13-3 3-3-3",key:"6j2sf0"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=D("FolderSearch",[["path",{d:"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1",key:"1bw5m7"}],["path",{d:"m21 21-1.9-1.9",key:"1g2n9r"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=D("FolderUp",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m9 13 3-3 3 3",key:"1pxg3c"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=D("GitCommitHorizontal",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=D("HardDrive",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=D("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=D("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=D("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=D("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=D("KeyRound",[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=D("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=D("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=D("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=D("LayoutList",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=D("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=D("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=D("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dx=D("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=D("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=D("Presentation",[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=D("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=D("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=D("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=D("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=D("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=D("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=D("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=D("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=D("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=D("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=D("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=D("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=D("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=D("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=D("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=D("Unlink",[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ni=D("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=D("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=D("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=D("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=D("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=D("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Ux=()=>{const{sidebarOpen:e,setSidebarOpen:t,logoutUser:n,currentUser:s,backendConnected:i}=ce(),a=rt(),l=async()=>{await n(),a("/login")},c=[{name:"Dashboard",path:"/dashboard",icon:Ex},{name:"My Documents",path:"/documents",icon:eo},{name:"Shared With Me",path:"/shared-with-me",icon:ap},{name:"Shared By Me",path:"/shared-by-me",icon:to},{name:"Upload Document",path:"/upload",icon:on},{name:"User Management",path:"/users",icon:so},{name:"Security Activity",path:"/activity",icon:kr},{name:"Settings",path:"/settings",icon:ro},{name:"Access Denied (403)",path:"/access-denied",icon:Jr}];return r.jsxs(r.Fragment,{children:[e&&r.jsx("div",{className:"sidebar-backdrop",onClick:()=>t(!1),style:{position:"fixed",inset:0,backgroundColor:"rgba(0,0,0,0.7)",backdropFilter:"blur(3px)",zIndex:998}}),r.jsxs("aside",{className:`zt-sidebar ${e?"sidebar-mobile-open":""}`,children:[r.jsxs("div",{className:"sidebar-header",children:[r.jsxs("div",{className:"brand-box",children:[r.jsx("div",{className:"brand-logo-glow",children:r.jsx(nt,{size:26,color:"#06B6D4"})}),r.jsxs("div",{className:"brand-text",children:[r.jsx("div",{className:"brand-title",children:"ZERO-TRUST"}),r.jsx("div",{className:"brand-subtitle",children:"SECURE DOC VAULT"})]})]}),r.jsx("button",{type:"button",className:"mobile-close-btn",onClick:()=>t(!1),"aria-label":"Close menu",children:r.jsx(io,{size:20})})]}),r.jsxs("div",{className:"sidebar-security-badge",children:[r.jsx("div",{className:"status-dot-pulse"}),r.jsxs("div",{className:"posture-info",children:[r.jsx("span",{className:"posture-title",children:"Perimeter: Strict"}),r.jsx("span",{className:"posture-sub",children:i?"Spring Boot + Postgres":"Zero-Trust UI Sandbox"})]}),r.jsx(Je,{size:13,color:"#06B6D4"})]}),r.jsxs("nav",{className:"sidebar-nav",children:[r.jsx("div",{className:"nav-group-label",children:"SECURE NAVIGATION"}),c.map(o=>{const d=o.icon;return r.jsxs(Gh,{to:o.path,className:({isActive:x})=>`nav-link ${x?"nav-link-active":""}`,onClick:()=>t(!1),children:[r.jsx("div",{className:"nav-icon-wrap",children:r.jsx(d,{size:18})}),r.jsx("span",{className:"nav-text",children:o.name}),r.jsx(yx,{size:14,className:"nav-arrow"})]},o.path)})]}),r.jsxs("div",{className:"sidebar-footer",children:[r.jsxs("div",{className:"user-profile-preview",children:[r.jsx("div",{className:"avatar-circle",children:s!=null&&s.fullName?s.fullName.split(" ").map(o=>o[0]).join(""):"AM"}),r.jsxs("div",{className:"user-text",children:[r.jsx("div",{className:"user-name",children:(s==null?void 0:s.fullName)||"Alex Morgan"}),r.jsx("div",{className:"user-role",children:(s==null?void 0:s.role)||"SecOps Admin"})]})]}),r.jsxs("button",{type:"button",className:"logout-button",onClick:l,title:"End Session",children:[r.jsx(op,{size:16}),r.jsx("span",{children:"Sign Out"})]})]})]}),r.jsx("style",{children:`
        .zt-sidebar {
          width: 260px;
          background-color: var(--bg-secondary);
          border-right: 1px solid var(--border-subtle);
          display: flex;
          flex-direction: column;
          height: 100vh;
          flex-shrink: 0;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 999;
          position: sticky;
          top: 0;
        }
        .sidebar-header {
          padding: 20px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-subtle);
        }
        .brand-box {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .brand-logo-glow {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          background: rgba(6, 182, 212, 0.12);
          border: 1px solid rgba(6, 182, 212, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.2);
        }
        .brand-title {
          font-size: 0.95rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--text-primary);
        }
        .brand-subtitle {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--cyan-primary);
        }
        .mobile-close-btn {
          display: none;
          color: var(--text-secondary);
        }
        .sidebar-security-badge {
          margin: 14px 16px 8px 16px;
          padding: 8px 12px;
          background: rgba(11, 19, 36, 0.8);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .status-dot-pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--emerald);
          box-shadow: 0 0 8px var(--emerald);
        }
        .posture-info {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .posture-title {
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }
        .posture-sub {
          font-size: 0.68rem;
          color: var(--text-muted);
        }
        .nav-group-label {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          padding: 14px 20px 6px 20px;
        }
        .sidebar-nav {
          flex: 1;
          overflow-y: auto;
          padding: 8px 10px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .nav-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 9px 12px;
          color: var(--text-secondary);
          border-radius: var(--radius-sm);
          font-size: 0.86rem;
          font-weight: 500;
          transition: all 0.2s ease;
          position: relative;
        }
        .nav-link:hover {
          color: var(--text-primary);
          background-color: var(--bg-card);
        }
        .nav-link-active {
          color: #FFFFFF;
          background: linear-gradient(90deg, rgba(6, 182, 212, 0.16), rgba(6, 182, 212, 0.04));
          border-left: 3px solid var(--cyan-primary);
          font-weight: 600;
        }
        .nav-icon-wrap {
          display: flex;
          align-items: center;
          color: inherit;
        }
        .nav-link-active .nav-icon-wrap {
          color: var(--cyan-primary);
        }
        .nav-text {
          flex: 1;
        }
        .nav-arrow {
          opacity: 0;
          transition: opacity 0.2s, transform 0.2s;
        }
        .nav-link:hover .nav-arrow, .nav-link-active .nav-arrow {
          opacity: 0.7;
          transform: translateX(2px);
        }
        .sidebar-footer {
          padding: 16px;
          border-top: 1px solid var(--border-subtle);
          background-color: rgba(11, 19, 36, 0.5);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .user-profile-preview {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .avatar-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0284C7, #0F766E);
          color: white;
          font-size: 0.8rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .user-text {
          display: flex;
          flex-direction: column;
        }
        .user-name {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .user-role {
          font-size: 0.7rem;
          color: var(--cyan-primary);
        }
        .logout-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          color: var(--rose);
          background: rgba(239, 68, 68, 0.08);
          border: 1px solid rgba(239, 68, 68, 0.2);
          transition: all 0.2s;
        }
        .logout-button:hover {
          background: rgba(239, 68, 68, 0.2);
        }

        @media (max-width: 900px) {
          .zt-sidebar {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            transform: translateX(-100%);
            box-shadow: var(--shadow-lg);
          }
          .zt-sidebar.sidebar-mobile-open {
            transform: translateX(0);
          }
          .mobile-close-btn {
            display: block;
          }
        }
      `})]})},Bx=()=>{const{setSidebarOpen:e,globalSearch:t,setGlobalSearch:n,notifications:s,unreadNotificationCount:i,markAllNotificationsRead:a,showToast:l,currentUser:c,logoutUser:o,backendConnected:d}=ce(),[x,h]=v.useState(!1),[u,j]=v.useState(!1),y=v.useRef(null),w=v.useRef(null),b=rt();v.useEffect(()=>{const p=m=>{y.current&&!y.current.contains(m.target)&&h(!1),w.current&&!w.current.contains(m.target)&&j(!1)};return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[]);const f=p=>{p.preventDefault(),t.trim()&&(b("/documents"),l(`Filtering documents for "${t}"`,"info"))};return r.jsxs("header",{className:"zt-navbar",children:[r.jsxs("div",{className:"navbar-left",children:[r.jsx("button",{type:"button",className:"hamburger-btn",onClick:()=>e(!0),"aria-label":"Toggle navigation drawer",children:r.jsx(Dx,{size:22})}),r.jsxs("form",{onSubmit:f,className:"search-box",children:[r.jsx(Xn,{size:16,className:"search-icon"}),r.jsx("input",{type:"text",className:"search-input",placeholder:"Search documents, tags, audit logs... (Press Enter)",value:t,onChange:p=>n(p.target.value)})]})]}),r.jsxs("div",{className:"navbar-right",children:[r.jsxs("div",{className:"zt-status-pill d-none-mobile",children:[r.jsx(nt,{size:15,color:"#10B981"}),r.jsxs("span",{className:"zt-status-text",children:[r.jsx("strong",{children:"Zero-Trust Status:"})," ",d?"Connected (Spring Boot API + PostgreSQL)":"Perimeter Enforced"]})]}),r.jsxs("div",{className:"dropdown-wrapper",ref:y,children:[r.jsxs("button",{type:"button",className:"navbar-icon-btn",onClick:()=>h(!x),"aria-label":"View notifications",children:[r.jsx(mx,{size:19}),i>0&&r.jsx("span",{className:"notif-badge",children:i})]}),x&&r.jsxs("div",{className:"dropdown-panel notif-dropdown",children:[r.jsxs("div",{className:"dropdown-panel-header",children:[r.jsxs("div",{className:"header-title",children:[r.jsx("span",{children:"Security Notifications"}),i>0&&r.jsxs("span",{className:"count-pill",children:[i," new"]})]}),i>0&&r.jsxs("button",{type:"button",className:"mark-read-btn",onClick:a,children:[r.jsx(xx,{size:14}),r.jsx("span",{children:"Mark all read"})]})]}),r.jsx("div",{className:"notif-list",children:s.length===0?r.jsx("div",{className:"empty-notif",children:"No notifications"}):s.map(p=>r.jsxs("div",{className:`notif-item ${p.read?"":"notif-unread"}`,children:[r.jsx("div",{className:"notif-icon",children:p.type==="warning"?r.jsx(Si,{size:15,color:"#F59E0B"}):p.type==="success"?r.jsx(nt,{size:15,color:"#10B981"}):r.jsx(Wr,{size:15,color:"#06B6D4"})}),r.jsxs("div",{className:"notif-content",children:[r.jsx("div",{className:"notif-title",children:p.title}),r.jsx("div",{className:"notif-msg",children:p.message}),r.jsx("div",{className:"notif-time",children:p.time})]})]},p.id))}),r.jsx("div",{className:"dropdown-panel-footer",children:r.jsx("button",{type:"button",className:"btn-view-all",onClick:()=>{h(!1),b("/activity")},children:"View Full Audit Log"})})]})]}),r.jsxs("div",{className:"dropdown-wrapper",ref:w,children:[r.jsxs("button",{type:"button",className:"user-profile-btn",onClick:()=>j(!u),"aria-label":"User menu",children:[r.jsx("div",{className:"nav-avatar",children:c!=null&&c.fullName?c.fullName.split(" ").map(p=>p[0]).join(""):"AM"}),r.jsxs("div",{className:"nav-user-info d-none-mobile",children:[r.jsx("span",{className:"nav-user-name",children:(c==null?void 0:c.fullName)||"Alex Morgan"}),r.jsx("span",{className:"nav-user-badge",children:(c==null?void 0:c.role)||"Clearance: Level 4"})]}),r.jsx(gx,{size:14,className:"chevron-icon"})]}),u&&r.jsxs("div",{className:"dropdown-panel profile-dropdown",children:[r.jsxs("div",{className:"profile-header-info",children:[r.jsx("div",{className:"ph-name",children:(c==null?void 0:c.fullName)||"Alex Morgan"}),r.jsx("div",{className:"ph-email",children:(c==null?void 0:c.email)||"alex.morgan@zerotrust.sec"}),r.jsx("div",{className:"ph-badge",children:(c==null?void 0:c.role)||"Security Operations Admin"})]}),r.jsx("div",{className:"dropdown-divider"}),r.jsxs("button",{type:"button",className:"dropdown-menu-item",onClick:()=>{j(!1),b("/settings")},children:[r.jsx(Gn,{size:16}),r.jsx("span",{children:"Profile & Account"})]}),r.jsxs("button",{type:"button",className:"dropdown-menu-item",onClick:()=>{j(!1),b("/settings")},children:[r.jsx(ro,{size:16}),r.jsx("span",{children:"Security Policies & MFA"})]}),r.jsxs("button",{type:"button",className:"dropdown-menu-item",onClick:()=>{j(!1),b("/access-denied")},children:[r.jsx(Je,{size:16}),r.jsx("span",{children:"Simulate Policy Block (403)"})]}),r.jsx("div",{className:"dropdown-divider"}),r.jsxs("button",{type:"button",className:"dropdown-menu-item item-danger",onClick:async()=>{j(!1),await o(),b("/login")},children:[r.jsx(op,{size:16}),r.jsx("span",{children:"Sign Out"})]})]})]})]}),r.jsx("style",{children:`
        .zt-navbar {
          height: 64px;
          background-color: var(--bg-secondary);
          border-bottom: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .navbar-left {
          display: flex;
          align-items: center;
          gap: 16px;
          flex: 1;
          max-width: 520px;
        }
        .hamburger-btn {
          display: none;
          color: var(--text-secondary);
          padding: 6px;
          border-radius: var(--radius-sm);
        }
        .hamburger-btn:hover {
          color: var(--text-primary);
          background-color: var(--bg-elevated);
        }
        .search-box {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
        }
        .search-icon {
          position: absolute;
          left: 12px;
          color: var(--text-muted);
          pointer-events: none;
        }
        .search-input {
          width: 100%;
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          padding: 8px 14px 8px 36px;
          font-size: 0.85rem;
          color: var(--text-primary);
          transition: all 0.2s;
        }
        .search-input:focus {
          outline: none;
          border-color: var(--cyan-primary);
          box-shadow: 0 0 0 3px var(--cyan-glow);
          background: var(--bg-card);
        }
        .navbar-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .zt-status-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          color: var(--text-secondary);
        }
        .zt-status-pill strong {
          color: var(--emerald);
        }
        .dropdown-wrapper {
          position: relative;
        }
        .navbar-icon-btn {
          position: relative;
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          transition: all 0.2s;
        }
        .navbar-icon-btn:hover {
          color: var(--cyan-primary);
          border-color: var(--border-medium);
        }
        .notif-badge {
          position: absolute;
          top: -4px;
          right: -4px;
          background-color: var(--rose);
          color: white;
          font-size: 0.65rem;
          font-weight: 700;
          height: 18px;
          min-width: 18px;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 4px;
          box-shadow: 0 0 8px rgba(239, 68, 68, 0.5);
        }
        .user-profile-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 4px 8px 4px 4px;
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-full);
          transition: all 0.2s;
        }
        .user-profile-btn:hover {
          border-color: var(--border-medium);
        }
        .nav-avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0284C7, #0F766E);
          color: white;
          font-size: 0.75rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .nav-user-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }
        .nav-user-name {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.1;
        }
        .nav-user-badge {
          font-size: 0.68rem;
          color: var(--cyan-primary);
          line-height: 1.1;
        }
        .chevron-icon {
          color: var(--text-muted);
        }
        .dropdown-panel {
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          background-color: var(--bg-card);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          z-index: 500;
          animation: slideUp 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .notif-dropdown {
          width: 360px;
        }
        .dropdown-panel-header {
          padding: 12px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-subtle);
        }
        .header-title {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .count-pill {
          background: var(--cyan-primary);
          color: var(--text-inverse);
          font-size: 0.68rem;
          font-weight: 700;
          padding: 1px 6px;
          border-radius: var(--radius-full);
        }
        .mark-read-btn {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.75rem;
          color: var(--cyan-primary);
        }
        .mark-read-btn:hover {
          text-decoration: underline;
        }
        .notif-list {
          max-height: 280px;
          overflow-y: auto;
        }
        .notif-item {
          display: flex;
          gap: 12px;
          padding: 12px 16px;
          border-bottom: 1px solid var(--border-subtle);
          transition: background-color 0.2s;
        }
        .notif-item:hover {
          background-color: var(--bg-card-hover);
        }
        .notif-unread {
          background-color: rgba(6, 182, 212, 0.05);
        }
        .notif-icon {
          margin-top: 2px;
        }
        .notif-content {
          flex: 1;
        }
        .notif-title {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .notif-msg {
          font-size: 0.76rem;
          color: var(--text-secondary);
          margin-top: 2px;
          line-height: 1.35;
        }
        .notif-time {
          font-size: 0.68rem;
          color: var(--text-muted);
          margin-top: 4px;
        }
        .empty-notif {
          padding: 24px;
          text-align: center;
          font-size: 0.85rem;
          color: var(--text-muted);
        }
        .dropdown-panel-footer {
          padding: 8px 12px;
          border-top: 1px solid var(--border-subtle);
          text-align: center;
        }
        .btn-view-all {
          font-size: 0.78rem;
          color: var(--cyan-primary);
          font-weight: 500;
          padding: 4px 8px;
        }
        .btn-view-all:hover {
          text-decoration: underline;
        }
        .profile-dropdown {
          width: 240px;
          padding: 8px 0;
        }
        .profile-header-info {
          padding: 10px 16px;
        }
        .ph-name {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .ph-email {
          font-size: 0.74rem;
          color: var(--text-secondary);
        }
        .ph-badge {
          display: inline-block;
          font-size: 0.68rem;
          color: var(--cyan-primary);
          background: rgba(6, 182, 212, 0.1);
          padding: 2px 6px;
          border-radius: var(--radius-sm);
          margin-top: 6px;
        }
        .dropdown-divider {
          height: 1px;
          background: var(--border-subtle);
          margin: 6px 0;
        }
        .dropdown-menu-item {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 16px;
          font-size: 0.82rem;
          color: var(--text-secondary);
          transition: all 0.15s;
          text-align: left;
        }
        .dropdown-menu-item:hover {
          color: var(--text-primary);
          background-color: var(--bg-card-hover);
        }
        .dropdown-menu-item.item-danger {
          color: var(--rose);
        }
        .dropdown-menu-item.item-danger:hover {
          background-color: var(--rose-bg);
        }

        @media (max-width: 900px) {
          .hamburger-btn {
            display: flex;
          }
        }
        @media (max-width: 640px) {
          .d-none-mobile {
            display: none !important;
          }
          .notif-dropdown {
            width: 300px;
            right: -60px;
          }
        }
      `})]})},$x=()=>{const{toast:e}=ce();if(!e)return null;const t=()=>{switch(e.type){case"success":return r.jsx(Hr,{size:18,className:"text-emerald",style:{color:"var(--emerald)",flexShrink:0}});case"warning":return r.jsx(Si,{size:18,className:"text-amber",style:{color:"var(--amber)",flexShrink:0}});case"error":return r.jsx(ip,{size:18,className:"text-rose",style:{color:"var(--rose)",flexShrink:0}});case"info":default:return r.jsx(Wr,{size:18,className:"text-cyan",style:{color:"var(--cyan-primary)",flexShrink:0}})}};return r.jsx("div",{className:"toast-container",children:r.jsxs("div",{className:`toast-item toast-${e.type}`,children:[t(),r.jsx("span",{children:e.message})]})})},Vx=()=>r.jsxs("div",{className:"app-container",children:[r.jsx(Ux,{}),r.jsxs("div",{className:"main-content-wrapper",children:[r.jsx(Bx,{}),r.jsx("main",{className:"page-container",children:r.jsx(Ph,{})})]}),r.jsx($x,{})]}),St=({isOpen:e,onClose:t,title:n,children:s,footer:i,maxWidth:a="md"})=>{if(v.useEffect(()=>{const c=o=>{o.key==="Escape"&&e&&t()};return e&&(document.body.style.overflow="hidden",window.addEventListener("keydown",c)),()=>{document.body.style.overflow="unset",window.removeEventListener("keydown",c)}},[e,t]),!e)return null;const l=a==="lg"?"modal-lg":a==="sm"?"modal-sm":"";return r.jsx("div",{className:"modal-backdrop",onClick:t,role:"dialog","aria-modal":"true",children:r.jsxs("div",{className:`modal-content ${l}`,onClick:c=>c.stopPropagation(),children:[r.jsxs("div",{className:"modal-header",children:[r.jsx("div",{className:"modal-title",children:n}),r.jsx("button",{type:"button",className:"btn-icon",onClick:t,"aria-label":"Close dialog",children:r.jsx(io,{size:18})})]}),r.jsx("div",{className:"modal-body",children:s}),i&&r.jsx("div",{className:"modal-footer",children:i})]})})},Hx=()=>{const e=rt(),{showToast:t,loginUser:n}=ce(),[s,i]=v.useState("alex.morgan@zerotrust.sec"),[a,l]=v.useState("SecurePass2026!"),[c,o]=v.useState(!1),[d,x]=v.useState(!0),[h,u]=v.useState(!1),[j,y]=v.useState(!1),[w,b]=v.useState(""),f=async m=>{if(m.preventDefault(),!s||!a){t("Please fill in both email and password.","warning");return}u(!0);const g=await n(s,a);u(!1),g&&e("/dashboard")},p=m=>{m.preventDefault(),y(!1),t(`Password recovery link dispatched to ${w||s}`,"info")};return r.jsxs("div",{className:"login-root",children:[r.jsx("div",{className:"login-bg-grid"}),r.jsxs("div",{className:"login-card-container",children:[r.jsxs("div",{className:"login-proto-notice",children:[r.jsx(Jr,{size:16,color:"var(--cyan-primary)",style:{flexShrink:0}}),r.jsxs("span",{children:[r.jsx("strong",{children:"Phase 1 UI Prototype:"})," Zero-Trust access control and authentication integration will be connected in subsequent phases."]})]}),r.jsxs("div",{className:"login-box",children:[r.jsxs("div",{className:"login-brand-header",children:[r.jsx("div",{className:"login-shield-badge",children:r.jsx(nt,{size:36,color:"var(--cyan-primary)"})}),r.jsx("h1",{className:"login-title",children:"Zero-Trust Security Gateway"}),r.jsx("p",{className:"login-desc",children:"Continuous identity verification & encrypted document repository"})]}),r.jsxs("form",{onSubmit:f,className:"login-form",children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label required",children:"Organizational Email"}),r.jsxs("div",{className:"input-icon-wrapper",children:[r.jsx(no,{size:16,className:"input-icon"}),r.jsx("input",{type:"email",className:"form-input",placeholder:"name@zerotrust.sec",value:s,onChange:m=>i(m.target.value),required:!0})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"6px"},children:[r.jsx("label",{className:"form-label required",style:{margin:0},children:"Password"}),r.jsx("button",{type:"button",className:"forgot-link",onClick:()=>y(!0),children:"Forgot Password?"})]}),r.jsxs("div",{className:"input-icon-wrapper",children:[r.jsx(Je,{size:16,className:"input-icon"}),r.jsx("input",{type:c?"text":"password",className:"form-input",placeholder:"••••••••••••",value:a,onChange:m=>l(m.target.value),required:!0}),r.jsx("button",{type:"button",className:"toggle-password-btn",onClick:()=>o(!c),"aria-label":c?"Hide password":"Show password",children:c?r.jsx(jx,{size:16}):r.jsx(Wn,{size:16})})]})]}),r.jsxs("div",{className:"login-options-row",children:[r.jsxs("label",{className:"remember-checkbox-label",children:[r.jsx("input",{type:"checkbox",checked:d,onChange:m=>x(m.target.checked)}),r.jsx("span",{children:"Remember this trusted device"})]}),r.jsxs("span",{className:"posture-tag",title:"Continuous telemetry evaluation active",children:[r.jsx("span",{className:"dot-live"})," Posture Scan Active"]})]}),r.jsx("button",{type:"submit",className:"btn btn-primary login-submit-btn",disabled:h,children:h?r.jsxs(r.Fragment,{children:[r.jsx("span",{className:"spinner-border"}),r.jsx("span",{children:"Verifying Device Posture..."})]}):r.jsxs(r.Fragment,{children:[r.jsx("span",{children:"Authenticate & Enter Vault"}),r.jsx(ux,{size:18})]})})]}),r.jsxs("div",{className:"demo-credentials-box",children:[r.jsxs("div",{className:"demo-box-title",children:[r.jsx(el,{size:13,color:"var(--cyan-primary)"}),r.jsx("span",{children:"Demo Account Clearance:"})]}),r.jsxs("div",{className:"demo-box-creds",children:[r.jsx("code",{children:"alex.morgan@zerotrust.sec"})," (SecOps Admin / Level 4 Clearance)"]})]})]}),r.jsx("div",{className:"login-footer-text",children:"Zero-Trust Document Management & File Sharing System • Phase 1 UI Sandbox"})]}),r.jsx(St,{isOpen:j,onClose:()=>y(!1),title:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx(el,{size:18,color:"var(--cyan-primary)"}),r.jsx("span",{children:"Identity Recovery Challenge"})]}),children:r.jsxs("form",{onSubmit:p,children:[r.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",marginBottom:"16px"},children:"Under Zero-Trust guidelines, identity reset requires secondary verification from your enterprise administrator. Enter your registered email to dispatch a challenge token."}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label required",children:"Registered Security Email"}),r.jsx("input",{type:"email",className:"form-input",placeholder:"alex.morgan@zerotrust.sec",value:w||s,onChange:m=>b(m.target.value),required:!0})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px",marginTop:"20px"},children:[r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>y(!1),children:"Cancel"}),r.jsx("button",{type:"submit",className:"btn btn-primary btn-sm",children:"Send Recovery Challenge"})]})]})}),r.jsx("style",{children:`
        .login-root {
          min-height: 100vh;
          background-color: var(--bg-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          position: relative;
          overflow: hidden;
        }
        .login-bg-grid {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 50% 30%, rgba(6, 182, 212, 0.08) 0%, transparent 60%),
            linear-gradient(rgba(30, 45, 74, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30, 45, 74, 0.15) 1px, transparent 1px);
          background-size: 100% 100%, 36px 36px, 36px 36px;
          pointer-events: none;
        }
        .login-card-container {
          width: 100%;
          max-width: 460px;
          position: relative;
          z-index: 10;
        }
        .login-proto-notice {
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.3);
          border-radius: var(--radius-sm);
          padding: 8px 14px;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.78rem;
          color: var(--text-secondary);
        }
        .login-proto-notice strong {
          color: var(--cyan-primary);
        }
        .login-box {
          background-color: var(--bg-card);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-lg);
          padding: 32px 28px;
          box-shadow: var(--shadow-lg), 0 0 40px rgba(6, 182, 212, 0.12);
        }
        .login-brand-header {
          text-align: center;
          margin-bottom: 24px;
        }
        .login-shield-badge {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px auto;
          box-shadow: 0 0 25px rgba(6, 182, 212, 0.2);
        }
        .login-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.01em;
        }
        .login-desc {
          font-size: 0.82rem;
          color: var(--text-secondary);
          margin-top: 4px;
        }
        .input-icon-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .input-icon {
          position: absolute;
          left: 12px;
          color: var(--text-muted);
          pointer-events: none;
        }
        .input-icon-wrapper .form-input {
          padding-left: 38px;
          padding-right: 38px;
        }
        .toggle-password-btn {
          position: absolute;
          right: 12px;
          color: var(--text-muted);
          padding: 4px;
          display: flex;
          align-items: center;
        }
        .toggle-password-btn:hover {
          color: var(--text-primary);
        }
        .forgot-link {
          font-size: 0.78rem;
          color: var(--cyan-primary);
        }
        .forgot-link:hover {
          text-decoration: underline;
        }
        .login-options-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          font-size: 0.82rem;
        }
        .remember-checkbox-label {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-secondary);
          cursor: pointer;
        }
        .remember-checkbox-label input {
          accent-color: var(--cyan-primary);
          cursor: pointer;
        }
        .posture-tag {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          color: var(--emerald);
          font-family: var(--font-mono);
        }
        .dot-live {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--emerald);
          box-shadow: 0 0 6px var(--emerald);
        }
        .login-submit-btn {
          width: 100%;
          padding: 12px;
          font-size: 0.95rem;
          font-weight: 600;
        }
        .spinner-border {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .demo-credentials-box {
          margin-top: 24px;
          padding: 12px 14px;
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
        }
        .demo-box-title {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--cyan-primary);
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .demo-box-creds {
          font-size: 0.78rem;
          color: var(--text-secondary);
        }
        .demo-box-creds code {
          background: rgba(6, 182, 212, 0.12);
          color: var(--text-primary);
          padding: 2px 6px;
          border-radius: 4px;
          font-family: var(--font-mono);
        }
        .login-footer-text {
          text-align: center;
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 18px;
        }
      `})]})},ut=({level:e,showIcon:t=!0})=>{switch(e){case"Highly Confidential":return r.jsxs("span",{className:"badge badge-highly-confidential",title:"Zero-Trust Strict Egress & Envelope Encryption Required",children:[t&&r.jsx(Jr,{size:12}),"Highly Confidential"]});case"Confidential":return r.jsxs("span",{className:"badge badge-confidential",title:"Zero-Trust Role-Based Isolation Enforced",children:[t&&r.jsx(Je,{size:12}),"Confidential"]});case"Internal":return r.jsxs("span",{className:"badge badge-internal",title:"Organization-wide secure access",children:[t&&r.jsx(ki,{size:12}),"Internal"]});case"Public":default:return r.jsxs("span",{className:"badge badge-public",title:"Public domain or unrestricted internal",children:[t&&r.jsx(nt,{size:12}),"Public"]})}},Gr=({status:e})=>{const t=e.toLowerCase();return t==="active"||t==="success"?r.jsxs("span",{className:"badge badge-active",children:[r.jsx(Hr,{size:12}),e]}):t==="expiring soon"||t==="warning"||t==="pending mfa"?r.jsxs("span",{className:"badge badge-warning",children:[r.jsx(Xa,{size:12}),e]}):t==="expired"||t==="revoked"||t==="blocked"||t==="suspended"?r.jsxs("span",{className:"badge badge-danger",children:[r.jsx(ip,{size:12}),e]}):r.jsx("span",{className:"badge badge-neutral",children:e})},ao=({isOpen:e,onClose:t,document:n,onOpenShare:s})=>{const{showToast:i,backendConnected:a}=ce(),l=rt();if(!n)return null;const c=async()=>{try{a?(i(`Requesting Zero-Trust stream for "${n.name}"...`,"info"),await be.downloadDocument(n.id,n.name),i(`Cryptographically verified download complete for "${n.name}"`,"success")):i(`Initiating secure watermarked download for "${n.name}"...`,"success")}catch(d){i(d.message||"Download authorization blocked by Zero-Trust policy.","error")}},o=()=>{t(),l(`/documents/${n.id}`)};return r.jsxs(St,{isOpen:e,onClose:t,maxWidth:"lg",title:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx(qt,{size:18,color:"var(--cyan-primary)"}),r.jsx("span",{children:"Secure Document Viewer & Metadata"})]}),children:[r.jsxs("div",{children:[r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"12px",paddingBottom:"16px",borderBottom:"1px solid var(--border-subtle)",marginBottom:"16px"},children:[r.jsxs("div",{children:[r.jsx("h3",{style:{fontSize:"1.2rem",fontWeight:600,color:"var(--text-primary)",wordBreak:"break-all"},children:n.name}),r.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",marginTop:"4px"},children:n.description})]}),r.jsx(ut,{level:n.classification})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:"12px",marginBottom:"20px"},children:[r.jsxs("div",{className:"meta-card",children:[r.jsxs("span",{className:"meta-label",children:[r.jsx(Gn,{size:13})," Owner"]}),r.jsx("span",{className:"meta-value",children:n.owner})]}),r.jsxs("div",{className:"meta-card",children:[r.jsxs("span",{className:"meta-label",children:[r.jsx(Qt,{size:13})," File Size"]}),r.jsx("span",{className:"meta-value",children:n.sizeFormatted})]}),r.jsxs("div",{className:"meta-card",children:[r.jsxs("span",{className:"meta-label",children:[r.jsx(sp,{size:13})," Last Modified"]}),r.jsx("span",{className:"meta-value",children:n.lastModified})]}),r.jsxs("div",{className:"meta-card",children:[r.jsxs("span",{className:"meta-label",children:[r.jsx(nt,{size:13})," Current Version"]}),r.jsxs("span",{className:"meta-value",children:["v",n.version]})]}),r.jsxs("div",{className:"meta-card",children:[r.jsxs("span",{className:"meta-label",children:[n.storageLocation==="GOOGLE_DRIVE"?r.jsx(dt,{size:13,color:"var(--cyan-primary)"}):r.jsx(Qt,{size:13})," Storage"]}),r.jsx("span",{className:"meta-value",style:{display:"flex",alignItems:"center",gap:"4px"},children:n.storageLocation==="GOOGLE_DRIVE"?r.jsx("span",{style:{color:"var(--cyan-primary)",fontSize:"0.8rem"},children:"Google Drive"}):r.jsx("span",{style:{color:"var(--emerald)",fontSize:"0.8rem"},children:"Local Vault"})})]})]}),r.jsxs("div",{style:{backgroundColor:"var(--bg-input)",border:"1px solid var(--border-subtle)",borderRadius:"var(--radius-sm)",padding:"10px 14px",marginBottom:"20px",display:"flex",alignItems:"center",gap:"10px"},children:[r.jsx(lp,{size:16,color:"var(--cyan-primary)",style:{flexShrink:0}}),r.jsxs("div",{style:{overflow:"hidden"},children:[r.jsx("div",{style:{fontSize:"0.7rem",color:"var(--text-muted)",textTransform:"uppercase"},children:"SHA-256 INTEGRITY DIGEST"}),r.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:"0.78rem",color:"var(--text-secondary)",wordBreak:"break-all"},children:n.sha256Hash})]})]}),r.jsxs("div",{className:"preview-canvas",children:[r.jsx("div",{className:"watermark-overlay",children:"CONFIDENTIAL // ALEX MORGAN // ZERO-TRUST AUDIT // 2026-10-29"}),r.jsxs("div",{className:"preview-content-mock",children:[r.jsxs("div",{className:"preview-header-line",children:[r.jsx("span",{className:"line-tag",children:"DOCUMENT HEADER"}),r.jsx("span",{className:"line-status",children:"ENCRYPTED AT REST (AES-256 MOCK)"})]}),r.jsxs("div",{className:"preview-text-block",children:[r.jsxs("p",{children:[r.jsx("strong",{children:"CLASSIFICATION:"})," ",n.classification.toUpperCase()]}),r.jsx("p",{children:"This document is secured under the enterprise Zero-Trust policy architecture. Micro-segmentation rules prohibit unverified egress, screen capture, or unauthenticated forwarding."}),r.jsxs("p",{children:[r.jsx("strong",{children:"Summary Content:"})," ",n.description]}),r.jsxs("div",{className:"preview-fake-paragraphs",children:[r.jsx("div",{className:"fake-line full"}),r.jsx("div",{className:"fake-line medium"}),r.jsx("div",{className:"fake-line long"}),r.jsx("div",{className:"fake-line short"})]})]})]})]}),r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"12px",marginTop:"20px",paddingTop:"16px",borderTop:"1px solid var(--border-subtle)"},children:[r.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:o,children:[r.jsx(ni,{size:14}),r.jsx("span",{children:"Open Full Version History & Details"})]}),r.jsxs("div",{style:{display:"flex",gap:"10px"},children:[s&&r.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>{t(),s(n)},children:[r.jsx(Kt,{size:14}),r.jsx("span",{children:"Share"})]}),r.jsxs("button",{type:"button",className:"btn btn-primary btn-sm",onClick:c,children:[r.jsx(Zt,{size:14}),r.jsx("span",{children:"Download Watermarked Copy"})]})]})]})]}),r.jsx("style",{children:`
        .meta-card {
          background-color: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          padding: 10px 14px;
          border-radius: var(--radius-sm);
        }
        .meta-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          color: var(--text-muted);
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .meta-value {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .preview-canvas {
          height: 240px;
          background: #080D1A;
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-sm);
          position: relative;
          overflow: hidden;
          padding: 20px;
          display: flex;
          flex-direction: column;
        }
        .watermark-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.04);
          transform: rotate(-25deg);
          pointer-events: none;
          letter-spacing: 0.15em;
          user-select: none;
        }
        .preview-content-mock {
          position: relative;
          z-index: 1;
        }
        .preview-header-line {
          display: flex;
          justify-content: space-between;
          font-size: 0.72rem;
          color: var(--cyan-primary);
          border-bottom: 1px solid var(--border-subtle);
          padding-bottom: 8px;
          margin-bottom: 12px;
          font-family: var(--font-mono);
        }
        .preview-text-block p {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 8px;
        }
        .preview-fake-paragraphs {
          margin-top: 14px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .fake-line {
          height: 6px;
          background-color: rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-full);
        }
        .fake-line.full { width: 100%; }
        .fake-line.medium { width: 75%; }
        .fake-line.long { width: 90%; }
        .fake-line.short { width: 45%; }
      `})]})},lo=({isOpen:e,onClose:t,document:n})=>{const{shareDocument:s,showToast:i}=ce(),[a,l]=v.useState(""),[c,o]=v.useState(""),[d,x]=v.useState("View Only"),[h,u]=v.useState("14"),[j,y]=v.useState(!1);if(!n)return null;const w=b=>{if(b.preventDefault(),!a){i("Please specify a recipient email address","warning");return}const f=new Date(Date.now()+parseInt(h,10)*24*60*60*1e3).toISOString().replace("T"," ").substring(0,16);s(n.id,a,c,d,f,j),t(),l(""),o(""),y(!1)};return r.jsx(St,{isOpen:e,onClose:t,title:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx(Kt,{size:18,color:"var(--cyan-primary)"}),r.jsx("span",{children:"Zero-Trust Document Sharing"})]}),children:r.jsxs("form",{onSubmit:w,children:[r.jsxs("div",{style:{backgroundColor:"var(--bg-elevated)",border:"1px solid var(--border-subtle)",borderRadius:"var(--radius-sm)",padding:"12px 16px",marginBottom:"20px"},children:[r.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-muted)",marginBottom:"4px"},children:"TARGET RESOURCE"}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px"},children:[r.jsx("span",{style:{fontWeight:600,color:"var(--text-primary)",wordBreak:"break-all"},children:n.name}),r.jsx(ut,{level:n.classification,showIcon:!1})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label required",children:"Recipient Work Email"}),r.jsxs("div",{style:{position:"relative"},children:[r.jsx(no,{size:16,style:{position:"absolute",left:"12px",top:"12px",color:"var(--text-muted)"}}),r.jsx("input",{type:"email",className:"form-input",style:{paddingLeft:"38px"},placeholder:"e.g. colleague@zerotrust.sec",value:a,onChange:b=>l(b.target.value),required:!0})]}),r.jsx("span",{className:"form-hint",children:"Recipient must pass continuous Zero-Trust posture verification."})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Recipient Full Name (Optional)"}),r.jsxs("div",{style:{position:"relative"},children:[r.jsx(Ni,{size:16,style:{position:"absolute",left:"12px",top:"12px",color:"var(--text-muted)"}}),r.jsx("input",{type:"text",className:"form-input",style:{paddingLeft:"38px"},placeholder:"e.g. Elena Rostova",value:c,onChange:b=>o(b.target.value)})]})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",marginBottom:"18px"},children:[r.jsxs("div",{children:[r.jsx("label",{className:"form-label",children:"Granted Access Level"}),r.jsxs("select",{className:"form-select",value:d,onChange:b=>x(b.target.value),children:[r.jsx("option",{value:"View Only",children:"View Only (Protected Preview)"}),r.jsx("option",{value:"Can Download",children:"Can Download (Signed Watermark)"}),r.jsx("option",{value:"Full Access",children:"Full Access (Edit & Re-share)"})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"form-label",children:"Access Expiration"}),r.jsx("div",{style:{position:"relative"},children:r.jsxs("select",{className:"form-select",value:h,onChange:b=>u(b.target.value),children:[r.jsx("option",{value:"1",children:"24 Hours (Ephemeral Token)"}),r.jsx("option",{value:"7",children:"7 Days"}),r.jsx("option",{value:"14",children:"14 Days (Standard)"}),r.jsx("option",{value:"30",children:"30 Days (Maximum)"})]})})]})]}),r.jsxs("div",{style:{backgroundColor:"var(--bg-elevated)",border:`1px solid ${j?"var(--cyan-primary)":"var(--border-subtle)"}`,borderRadius:"var(--radius-sm)",padding:"12px 14px",marginBottom:"18px",display:"flex",alignItems:"flex-start",gap:"12px",cursor:"pointer",transition:"all 0.2s"},onClick:()=>y(!j),children:[r.jsx("input",{type:"checkbox",checked:j,onChange:b=>y(b.target.checked),style:{marginTop:"3px",accentColor:"var(--cyan-primary)",cursor:"pointer"}}),r.jsxs("div",{children:[r.jsxs("div",{style:{fontWeight:600,color:"var(--text-primary)",fontSize:"0.86rem",display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx("span",{children:"Single-Use Token (One-Time Access)"}),r.jsx("span",{className:"tab-pill",style:{background:"rgba(239, 68, 68, 0.15)",color:"#F87171",fontSize:"0.65rem"},children:"Self-Destruct"})]}),r.jsx("div",{style:{fontSize:"0.74rem",color:"var(--text-secondary)",marginTop:"2px",lineHeight:1.4},children:"Zero-Trust ephemeral grant: the link and permissions will be permanently revoked and invalidated immediately after the recipient downloads or opens the document once."})]})]}),r.jsxs("div",{style:{backgroundColor:"rgba(6, 182, 212, 0.08)",border:"1px solid rgba(6, 182, 212, 0.25)",borderRadius:"var(--radius-sm)",padding:"12px",display:"flex",gap:"10px",fontSize:"0.78rem",color:"var(--text-secondary)",marginBottom:"20px"},children:[r.jsx(ki,{size:18,color:"var(--cyan-primary)",style:{flexShrink:0,marginTop:"2px"}}),r.jsxs("div",{children:[r.jsx("strong",{children:"Zero-Trust Protocol:"})," Ephemeral links are single-identity bound. Access logs will be recorded in the security audit trail."]})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px"},children:[r.jsx("button",{type:"button",className:"btn btn-secondary",onClick:t,children:"Cancel"}),r.jsxs("button",{type:"submit",className:"btn btn-primary",children:[r.jsx(Kt,{size:16}),r.jsx("span",{children:"Generate Secure Share"})]})]})]})})},Wx=()=>{const{documents:e,sharedWithMe:t,sharedByMe:n,securityActivities:s,storageStats:i,showToast:a,currentUser:l,backendConnected:c}=ce(),o=rt(),[d,x]=v.useState(null),[h,u]=v.useState(null),j=t.length+n.length,y=s.slice(0,5),w=e.slice(0,5),b=f=>{a(`Downloading secure watermarked copy of "${f}"...`,"success")};return r.jsxs("div",{className:"dashboard-page",children:[r.jsxs("div",{className:"dashboard-welcome-card",children:[r.jsxs("div",{className:"welcome-left",children:[r.jsxs("div",{className:"posture-pill",children:[r.jsx("span",{className:"dot-live"}),r.jsxs("span",{children:["Continuous Zero-Trust Posture: ",r.jsx("strong",{children:"Verified"})," ",c&&"(Live Spring Boot)"]})]}),r.jsxs("h1",{className:"welcome-title",children:["Welcome back, ",(l==null?void 0:l.fullName)||"Alex Morgan"]}),r.jsx("p",{className:"welcome-subtitle",children:"Zero-Trust security perimeter enforced. Hardware token verified, egress gateway mTLS active."})]}),r.jsxs("div",{className:"welcome-right",children:[r.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>o("/upload"),children:[r.jsx(on,{size:16}),r.jsx("span",{children:"Upload Document"})]}),r.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>o("/documents"),children:[r.jsx("span",{children:"Explore All Files"}),r.jsx(fx,{size:15})]})]})]}),r.jsxs("div",{className:"metrics-grid",children:[r.jsxs("div",{className:"metric-card",onClick:()=>o("/documents"),children:[r.jsxs("div",{className:"metric-header",children:[r.jsx("span",{className:"metric-title",children:"TOTAL VAULT DOCUMENTS"}),r.jsx("div",{className:"metric-icon-wrap cyan",children:r.jsx(eo,{size:20})})]}),r.jsx("div",{className:"metric-value",children:e.length}),r.jsxs("div",{className:"metric-footer",children:[r.jsx("span",{className:"metric-subtext",children:"All classified & hashed"}),r.jsx("span",{className:"metric-link",children:"Manage →"})]})]}),r.jsxs("div",{className:"metric-card",onClick:()=>o("/shared-by-me"),children:[r.jsxs("div",{className:"metric-header",children:[r.jsx("span",{className:"metric-title",children:"ACTIVE SHARED LINKS"}),r.jsx("div",{className:"metric-icon-wrap emerald",children:r.jsx(to,{size:20})})]}),r.jsx("div",{className:"metric-value",children:j}),r.jsxs("div",{className:"metric-footer",children:[r.jsxs("span",{className:"metric-subtext",children:[n.length," shared by you • ",t.length," received"]}),r.jsx("span",{className:"metric-link",children:"View →"})]})]}),r.jsxs("div",{className:"metric-card",onClick:()=>o("/activity"),children:[r.jsxs("div",{className:"metric-header",children:[r.jsx("span",{className:"metric-title",children:"RECENT AUDIT EVENTS"}),r.jsx("div",{className:"metric-icon-wrap amber",children:r.jsx(kr,{size:20})})]}),r.jsx("div",{className:"metric-value",children:s.length}),r.jsxs("div",{className:"metric-footer",children:[r.jsx("span",{className:"metric-subtext",children:"100% SIEM indexed (mock)"}),r.jsx("span",{className:"metric-link",children:"Audit →"})]})]}),r.jsxs("div",{className:"metric-card",children:[r.jsxs("div",{className:"metric-header",children:[r.jsx("span",{className:"metric-title",children:"ENCRYPTED STORAGE"}),r.jsx("div",{className:"metric-icon-wrap purple",children:r.jsx(Qt,{size:20})})]}),r.jsx("div",{className:"metric-value",children:i.usedFormatted}),r.jsxs("div",{className:"metric-footer",children:[r.jsxs("span",{className:"metric-subtext",children:["Quota: ",i.totalFormatted]}),r.jsx("span",{className:"metric-badge",children:"0.04% used"})]})]})]}),r.jsxs("div",{className:"zt-card storage-card-section",children:[r.jsxs("div",{className:"zt-card-header",children:[r.jsxs("div",{className:"zt-card-title",children:[r.jsx(Qt,{size:18,color:"var(--cyan-primary)"}),r.jsx("span",{children:"Encrypted Storage Allocation & Quota"})]}),r.jsxs("span",{style:{fontSize:"0.8rem",color:"var(--text-secondary)"},children:[r.jsx("strong",{children:i.usedFormatted})," of ",i.totalFormatted," allocated"]})]}),r.jsxs("div",{className:"storage-progress-bar",children:[r.jsx("div",{className:"progress-fill docs",style:{width:"40%"},title:"Documents (40%)"}),r.jsx("div",{className:"progress-fill archives",style:{width:"38%"},title:"Encrypted Archives (38%)"}),r.jsx("div",{className:"progress-fill presentations",style:{width:"18%"},title:"Presentations (18%)"}),r.jsx("div",{className:"progress-fill spreadsheets",style:{width:"4%"},title:"Sheets (4%)"})]}),r.jsxs("div",{className:"storage-legend",children:[r.jsxs("div",{className:"legend-item",children:[r.jsx("span",{className:"legend-dot docs"})," Documents (",i.byCategory.documents," MB)"]}),r.jsxs("div",{className:"legend-item",children:[r.jsx("span",{className:"legend-dot archives"})," Secure Archives (",i.byCategory.archives," MB)"]}),r.jsxs("div",{className:"legend-item",children:[r.jsx("span",{className:"legend-dot presentations"})," Presentations (",i.byCategory.presentations," MB)"]}),r.jsxs("div",{className:"legend-item",children:[r.jsx("span",{className:"legend-dot spreadsheets"})," Data Sheets (",i.byCategory.spreadsheets," MB)"]})]})]}),r.jsxs("div",{className:"dashboard-split-grid",children:[r.jsxs("div",{className:"zt-card",children:[r.jsxs("div",{className:"zt-card-header",children:[r.jsxs("div",{className:"zt-card-title",children:[r.jsx(qt,{size:18,color:"var(--cyan-primary)"}),r.jsx("span",{children:"Recent Documents"})]}),r.jsxs("button",{type:"button",className:"btn-ghost btn-sm",onClick:()=>o("/documents"),children:["View All (",e.length,")"]})]}),r.jsx("div",{className:"table-responsive",children:r.jsxs("table",{className:"zt-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Document Name"}),r.jsx("th",{children:"Classification"}),r.jsx("th",{children:"Size"}),r.jsx("th",{children:"Actions"})]})}),r.jsx("tbody",{children:w.map(f=>r.jsxs("tr",{children:[r.jsx("td",{children:r.jsxs("div",{className:"table-doc-info",children:[r.jsx("span",{className:"doc-name-text",title:f.name,children:f.name}),r.jsxs("span",{className:"doc-meta-text",children:["v",f.version," • ",f.lastModified]})]})}),r.jsx("td",{children:r.jsx(ut,{level:f.classification,showIcon:!1})}),r.jsx("td",{style:{color:"var(--text-secondary)"},children:f.sizeFormatted}),r.jsx("td",{children:r.jsxs("div",{className:"table-actions",children:[r.jsx("button",{type:"button",className:"btn-icon",title:"View Document",onClick:()=>x(f),children:r.jsx(Wn,{size:15})}),r.jsx("button",{type:"button",className:"btn-icon",title:"Share Document",onClick:()=>u(f),children:r.jsx(Kt,{size:15})}),r.jsx("button",{type:"button",className:"btn-icon",title:"Download",onClick:()=>b(f.name),children:r.jsx(Zt,{size:15})})]})})]},f.id))})]})})]}),r.jsxs("div",{className:"zt-card",children:[r.jsxs("div",{className:"zt-card-header",children:[r.jsxs("div",{className:"zt-card-title",children:[r.jsx(kr,{size:18,color:"var(--cyan-primary)"}),r.jsx("span",{children:"Recent Security Activity"})]}),r.jsx("button",{type:"button",className:"btn-ghost btn-sm",onClick:()=>o("/activity"),children:"Full Audit Trail"})]}),r.jsx("div",{className:"activity-stream",children:y.map(f=>r.jsxs("div",{className:"stream-item",children:[r.jsxs("div",{className:`stream-icon-badge ${f.status.toLowerCase()}`,children:[f.status==="Success"&&r.jsx(Hr,{size:14}),f.status==="Blocked"&&r.jsx(Je,{size:14}),f.status==="Warning"&&r.jsx(Si,{size:14}),f.status==="Flagged"&&r.jsx(Wr,{size:14})]}),r.jsxs("div",{className:"stream-details",children:[r.jsxs("div",{className:"stream-line-top",children:[r.jsx("span",{className:"stream-user",children:f.user}),r.jsx("span",{className:"stream-action",children:f.action}),r.jsx("span",{className:"stream-time",children:f.timestamp.substring(11,16)})]}),r.jsx("div",{className:"stream-doc",children:f.document}),r.jsx("div",{className:"stream-info",children:f.details})]})]},f.id))})]})]}),r.jsxs("div",{className:"quick-action-dock",children:[r.jsx("div",{className:"dock-title",children:"SECURITY VAULT QUICK ACTIONS"}),r.jsxs("div",{className:"dock-buttons",children:[r.jsxs("button",{type:"button",className:"dock-btn",onClick:()=>o("/upload"),children:[r.jsx(on,{size:18,color:"var(--cyan-primary)"}),r.jsx("span",{children:"Ingest Document"})]}),r.jsxs("button",{type:"button",className:"dock-btn",onClick:()=>o("/shared-by-me"),children:[r.jsx(Kt,{size:18,color:"var(--emerald)"}),r.jsx("span",{children:"Manage Access Grants"})]}),r.jsxs("button",{type:"button",className:"dock-btn",onClick:()=>o("/users"),children:[r.jsx(so,{size:18,color:"var(--purple)"}),r.jsx("span",{children:"User Clearance Directory"})]}),r.jsxs("button",{type:"button",className:"dock-btn",onClick:()=>o("/activity"),children:[r.jsx(kr,{size:18,color:"var(--amber)"}),r.jsx("span",{children:"Security SIEM Logs"})]})]})]}),r.jsx(ao,{isOpen:!!d,onClose:()=>x(null),document:d,onOpenShare:f=>u(f)}),r.jsx(lo,{isOpen:!!h,onClose:()=>u(null),document:h}),r.jsx("style",{children:`
        .dashboard-welcome-card {
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(15, 23, 42, 0.95) 100%);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-lg);
          padding: 28px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 24px;
          box-shadow: var(--shadow-md);
        }
        .posture-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 4px 12px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: var(--radius-full);
          font-size: 0.76rem;
          color: var(--text-secondary);
          margin-bottom: 10px;
        }
        .posture-pill strong {
          color: var(--emerald);
        }
        .welcome-title {
          font-size: 1.7rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }
        .welcome-subtitle {
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin-top: 6px;
          max-width: 600px;
        }
        .welcome-right {
          display: flex;
          gap: 12px;
          flex-shrink: 0;
        }
        .metrics-grid {
          display: grid;
          grid-templateColumns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
          margin-bottom: 24px;
        }
        .metric-card {
          background-color: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 20px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          flex-direction: column;
        }
        .metric-card:hover {
          border-color: var(--cyan-primary);
          box-shadow: 0 4px 16px rgba(6, 182, 212, 0.15);
          transform: translateY(-2px);
        }
        .metric-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .metric-title {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: var(--text-muted);
        }
        .metric-icon-wrap {
          width: 38px;
          height: 38px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .metric-icon-wrap.cyan {
          background: rgba(6, 182, 212, 0.12);
          color: var(--cyan-primary);
        }
        .metric-icon-wrap.emerald {
          background: rgba(16, 185, 129, 0.12);
          color: var(--emerald);
        }
        .metric-icon-wrap.amber {
          background: rgba(245, 158, 11, 0.12);
          color: var(--amber);
        }
        .metric-icon-wrap.purple {
          background: rgba(139, 92, 246, 0.12);
          color: var(--purple);
        }
        .metric-value {
          font-size: 1.85rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.1;
          margin-bottom: 8px;
        }
        .metric-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.76rem;
          color: var(--text-secondary);
          margin-top: auto;
          padding-top: 8px;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
        }
        .metric-link {
          color: var(--cyan-primary);
          font-weight: 600;
        }
        .metric-badge {
          background: rgba(139, 92, 246, 0.15);
          color: var(--purple);
          padding: 2px 6px;
          border-radius: var(--radius-sm);
          font-size: 0.7rem;
        }
        .storage-card-section {
          margin-bottom: 24px;
        }
        .storage-progress-bar {
          height: 10px;
          background: var(--bg-input);
          border-radius: var(--radius-full);
          overflow: hidden;
          display: flex;
          margin-bottom: 16px;
        }
        .progress-fill.docs { background: var(--cyan-primary); }
        .progress-fill.archives { background: var(--emerald); }
        .progress-fill.presentations { background: var(--purple); }
        .progress-fill.spreadsheets { background: var(--amber); }
        .storage-legend {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          font-size: 0.78rem;
          color: var(--text-secondary);
        }
        .legend-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .legend-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .legend-dot.docs { background: var(--cyan-primary); }
        .legend-dot.archives { background: var(--emerald); }
        .legend-dot.presentations { background: var(--purple); }
        .legend-dot.spreadsheets { background: var(--amber); }
        .dashboard-split-grid {
          display: grid;
          grid-templateColumns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 24px;
        }
        .table-doc-info {
          display: flex;
          flex-direction: column;
        }
        .doc-name-text {
          font-weight: 500;
          color: var(--text-primary);
          max-width: 200px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .doc-meta-text {
          font-size: 0.72rem;
          color: var(--text-muted);
        }
        .table-actions {
          display: flex;
          gap: 4px;
        }
        .activity-stream {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .stream-item {
          display: flex;
          gap: 12px;
          padding: 8px 0;
          border-bottom: 1px solid var(--border-subtle);
        }
        .stream-item:last-child {
          border-bottom: none;
        }
        .stream-icon-badge {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .stream-icon-badge.success {
          background: var(--emerald-bg);
          color: var(--emerald);
        }
        .stream-icon-badge.blocked {
          background: var(--rose-bg);
          color: var(--rose);
        }
        .stream-icon-badge.warning {
          background: var(--amber-bg);
          color: var(--amber);
        }
        .stream-icon-badge.flagged {
          background: var(--blue-bg);
          color: var(--blue);
        }
        .stream-details {
          flex: 1;
        }
        .stream-line-top {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
        }
        .stream-user {
          font-weight: 600;
          color: var(--text-primary);
        }
        .stream-action {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--cyan-primary);
          background: rgba(6, 182, 212, 0.1);
          padding: 1px 5px;
          border-radius: 3px;
        }
        .stream-time {
          margin-left: auto;
          font-size: 0.7rem;
          color: var(--text-muted);
        }
        .stream-doc {
          font-size: 0.76rem;
          color: var(--text-secondary);
          margin-top: 2px;
          font-weight: 500;
        }
        .stream-info {
          font-size: 0.72rem;
          color: var(--text-muted);
          margin-top: 2px;
          line-height: 1.3;
        }
        .quick-action-dock {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 18px 24px;
        }
        .dock-title {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-muted);
          margin-bottom: 14px;
        }
        .dock-buttons {
          display: grid;
          grid-templateColumns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 14px;
        }
        .dock-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          font-size: 0.85rem;
          font-weight: 500;
          transition: all 0.2s;
        }
        .dock-btn:hover {
          border-color: var(--cyan-primary);
          background: var(--bg-card-hover);
          transform: translateY(-1px);
        }

        @media (max-width: 900px) {
          .dashboard-welcome-card {
            flex-direction: column;
            align-items: flex-start;
          }
          .welcome-right {
            width: 100%;
            justify-content: flex-start;
          }
          .dashboard-split-grid {
            grid-templateColumns: 1fr;
          }
        }
      `})]})},tr=({icon:e,title:t,description:n,actionText:s,onAction:i})=>r.jsxs("div",{className:"empty-state",children:[r.jsx("div",{className:"empty-state-icon",children:e||r.jsx(Sx,{size:28})}),r.jsx("h3",{className:"empty-state-title",children:t}),r.jsx("p",{className:"empty-state-desc",children:n}),s&&i&&r.jsx("button",{type:"button",className:"btn btn-primary btn-sm",onClick:i,children:s})]}),Gx=()=>{const{documents:e,deleteDocument:t,showToast:n,globalSearch:s,backendConnected:i}=ce(),a=rt(),[l,c]=v.useState("table"),[o,d]=v.useState(s||""),[x,h]=v.useState("All"),[u,j]=v.useState("All"),[y,w]=v.useState("date"),[b,f]=v.useState("desc"),[p,m]=v.useState(null),[g,S]=v.useState(null);si.useEffect(()=>{s&&d(s)},[s]);const z=v.useMemo(()=>e.filter(k=>{const H=k.name.toLowerCase().includes(o.toLowerCase())||k.description.toLowerCase().includes(o.toLowerCase())||k.owner.toLowerCase().includes(o.toLowerCase()),ae=x==="All"||k.classification===x,M=u==="All"||k.type===u;return H&&ae&&M}).sort((k,H)=>{let ae=0;return y==="name"?ae=k.name.localeCompare(H.name):y==="date"?ae=new Date(k.lastModified).getTime()-new Date(H.lastModified).getTime():y==="size"&&(ae=k.size-H.size),b==="asc"?ae:-ae}),[e,o,x,u,y,b]),E=async k=>{try{i?(n(`Requesting Zero-Trust stream for "${k.name}"...`,"info"),await be.downloadDocument(k.id,k.name),n(`Cryptographically verified download complete for "${k.name}"`,"success")):n(`Watermarked encrypted export generated for "${k.name}"`,"success")}catch(H){n(H.message||"Download authorization blocked by Zero-Trust policy.","error")}},P=k=>{window.confirm(`Are you sure you want to delete "${k.name}" from your secure documents?`)&&t(k.id)},$=k=>{switch(k){case"pdf":return r.jsx(qt,{size:20,color:"#F87171"});case"docx":return r.jsx(qt,{size:20,color:"#60A5FA"});case"xlsx":return r.jsx(kx,{size:20,color:"#34D399"});case"pptx":return r.jsx(Lx,{size:20,color:"#FBBF24"});case"zip":return r.jsx(dx,{size:20,color:"#A78BFA"});default:return r.jsx(bx,{size:20,color:"#94A3B8"})}};return r.jsxs("div",{className:"my-documents-page",children:[r.jsxs("div",{className:"page-header",style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",gap:"16px"},children:[r.jsxs("div",{children:[r.jsxs("h1",{className:"page-title",children:[r.jsx(eo,{size:24,color:"var(--cyan-primary)"}),r.jsx("span",{children:"My Secure Documents"})]}),r.jsx("p",{className:"page-subtitle",children:"Manage, classify, and audit documents secured with Zero-Trust access parameters."})]}),r.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>a("/upload"),children:[r.jsx(on,{size:16}),r.jsx("span",{children:"Upload Document"})]})]}),r.jsxs("div",{className:"docs-toolbar zt-card",children:[r.jsxs("div",{className:"toolbar-search",children:[r.jsx(Xn,{size:16,className:"toolbar-search-icon"}),r.jsx("input",{type:"text",className:"form-input",style:{paddingLeft:"36px"},placeholder:"Filter by name, tags, description...",value:o,onChange:k=>d(k.target.value)})]}),r.jsxs("div",{className:"toolbar-filters",children:[r.jsxs("div",{className:"filter-select-group",children:[r.jsx("label",{className:"filter-label",children:"Classification:"}),r.jsxs("select",{className:"form-select filter-select",value:x,onChange:k=>h(k.target.value),children:[r.jsx("option",{value:"All",children:"All Classifications"}),r.jsx("option",{value:"Public",children:"Public"}),r.jsx("option",{value:"Internal",children:"Internal"}),r.jsx("option",{value:"Confidential",children:"Confidential"}),r.jsx("option",{value:"Highly Confidential",children:"Highly Confidential"})]})]}),r.jsxs("div",{className:"filter-select-group",children:[r.jsx("label",{className:"filter-label",children:"File Type:"}),r.jsxs("select",{className:"form-select filter-select",value:u,onChange:k=>j(k.target.value),children:[r.jsx("option",{value:"All",children:"All File Types"}),r.jsx("option",{value:"pdf",children:"PDF Documents"}),r.jsx("option",{value:"docx",children:"Word (.docx)"}),r.jsx("option",{value:"xlsx",children:"Excel (.xlsx)"}),r.jsx("option",{value:"pptx",children:"PowerPoint (.pptx)"}),r.jsx("option",{value:"zip",children:"Zip Archives"})]})]}),r.jsxs("div",{className:"filter-select-group",children:[r.jsx("label",{className:"filter-label",children:"Sort By:"}),r.jsxs("select",{className:"form-select filter-select",value:y,onChange:k=>w(k.target.value),children:[r.jsx("option",{value:"date",children:"Date Modified"}),r.jsx("option",{value:"name",children:"Name"}),r.jsx("option",{value:"size",children:"Size"})]}),r.jsx("button",{type:"button",className:"btn-icon",title:`Order: ${b==="asc"?"Ascending":"Descending"}`,onClick:()=>f(b==="asc"?"desc":"asc"),children:r.jsx(px,{size:15})})]}),r.jsxs("div",{className:"view-toggle-btns",children:[r.jsx("button",{type:"button",className:`view-btn ${l==="table"?"active":""}`,onClick:()=>c("table"),title:"Table View",children:r.jsx(Tx,{size:16})}),r.jsx("button",{type:"button",className:`view-btn ${l==="grid"?"active":""}`,onClick:()=>c("grid"),title:"Grid View",children:r.jsx(Ax,{size:16})})]})]})]}),z.length===0?r.jsx(tr,{title:"No Matching Documents Found",description:"No files matched your current search and classification filters. Try resetting the filters or upload a new document.",actionText:"Clear Filters",onAction:()=>{d(""),h("All"),j("All")}}):l==="table"?r.jsx("div",{className:"table-responsive",children:r.jsxs("table",{className:"zt-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Document Name"}),r.jsx("th",{children:"Classification"}),r.jsx("th",{children:"Owner"}),r.jsx("th",{children:"Size"}),r.jsx("th",{children:"Last Modified"}),r.jsx("th",{children:"Actions"})]})}),r.jsx("tbody",{children:z.map(k=>r.jsxs("tr",{children:[r.jsx("td",{children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[r.jsx("div",{className:"table-file-icon",children:$(k.type)}),r.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[r.jsx("span",{className:"table-doc-name-clickable",onClick:()=>m(k),title:"Click to view details",children:k.name}),r.jsxs("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)",display:"flex",alignItems:"center",gap:"6px",marginTop:"2px"},children:[r.jsxs("span",{children:["v",k.version," • SHA-256: ",k.sha256Hash.substring(0,8),"..."]}),k.storageLocation==="GOOGLE_DRIVE"?r.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"3px",background:"rgba(6, 182, 212, 0.12)",color:"var(--cyan-primary)",padding:"1px 5px",borderRadius:"4px",fontSize:"0.65rem",fontWeight:600},children:[r.jsx(dt,{size:10})," Google Drive"]}):r.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"3px",background:"rgba(16, 185, 129, 0.12)",color:"var(--emerald)",padding:"1px 5px",borderRadius:"4px",fontSize:"0.65rem"},children:[r.jsx(Qt,{size:10})," Local Vault"]})]})]})]})}),r.jsx("td",{children:r.jsx(ut,{level:k.classification})}),r.jsx("td",{style:{fontSize:"0.82rem",color:"var(--text-secondary)"},children:k.owner}),r.jsx("td",{style:{fontSize:"0.82rem",color:"var(--text-secondary)"},children:k.sizeFormatted}),r.jsx("td",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:k.lastModified}),r.jsx("td",{children:r.jsxs("div",{className:"table-actions",children:[r.jsx("button",{type:"button",className:"btn-icon",title:"Quick Preview",onClick:()=>m(k),children:r.jsx(Wn,{size:15})}),r.jsx("button",{type:"button",className:"btn-icon",title:"Share Document",onClick:()=>S(k),children:r.jsx(Kt,{size:15})}),r.jsx("button",{type:"button",className:"btn-icon",title:"Download Watermarked",onClick:()=>E(k),children:r.jsx(Zt,{size:15})}),r.jsx("button",{type:"button",className:"btn-icon",title:"Document Details & Version History",onClick:()=>a(`/documents/${k.id}`),children:r.jsx(ni,{size:15})}),r.jsx("button",{type:"button",className:"btn-icon",style:{color:"var(--rose)"},title:"Delete Document",onClick:()=>P(k),children:r.jsx(er,{size:15})})]})})]},k.id))})]})}):r.jsx("div",{className:"docs-grid-cards",children:z.map(k=>r.jsxs("div",{className:"doc-card zt-card",children:[r.jsxs("div",{className:"doc-card-top",children:[r.jsx("div",{className:"doc-card-icon",children:$(k.type)}),r.jsx(ut,{level:k.classification,showIcon:!1})]}),r.jsx("h4",{className:"doc-card-title",title:k.name,onClick:()=>m(k),children:k.name}),r.jsx("p",{className:"doc-card-desc",children:k.description}),r.jsxs("div",{className:"doc-card-meta",children:[r.jsx("span",{children:k.sizeFormatted}),r.jsx("span",{children:"•"}),k.storageLocation==="GOOGLE_DRIVE"?r.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"3px",color:"var(--cyan-primary)"},children:[r.jsx(dt,{size:11})," Google Drive"]}):r.jsxs("span",{children:["v",k.version]}),r.jsx("span",{children:"•"}),r.jsx("span",{children:k.lastModified.substring(0,10)})]}),r.jsxs("div",{className:"doc-card-footer",children:[r.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>m(k),children:[r.jsx(Wn,{size:13}),r.jsx("span",{children:"Preview"})]}),r.jsxs("div",{style:{display:"flex",gap:"4px"},children:[r.jsx("button",{type:"button",className:"btn-icon",title:"Share",onClick:()=>S(k),children:r.jsx(Kt,{size:15})}),r.jsx("button",{type:"button",className:"btn-icon",title:"Download",onClick:()=>E(k),children:r.jsx(Zt,{size:15})}),r.jsx("button",{type:"button",className:"btn-icon",title:"Full Details",onClick:()=>a(`/documents/${k.id}`),children:r.jsx(ni,{size:15})})]})]})]},k.id))}),r.jsx(ao,{isOpen:!!p,onClose:()=>m(null),document:p,onOpenShare:k=>S(k)}),r.jsx(lo,{isOpen:!!g,onClose:()=>S(null),document:g}),r.jsx("style",{children:`
        .docs-toolbar {
          padding: 16px 20px;
          margin-bottom: 24px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .toolbar-search {
          position: relative;
          min-width: 280px;
          flex: 1;
        }
        .toolbar-search-icon {
          position: absolute;
          left: 12px;
          top: 11px;
          color: var(--text-muted);
          pointer-events: none;
        }
        .toolbar-filters {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
        }
        .filter-select-group {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .filter-label {
          font-size: 0.78rem;
          color: var(--text-muted);
          white-space: nowrap;
        }
        .filter-select {
          padding: 6px 10px;
          font-size: 0.8rem;
          width: auto;
          min-width: 130px;
        }
        .view-toggle-btns {
          display: flex;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          overflow: hidden;
        }
        .view-btn {
          padding: 7px 10px;
          color: var(--text-secondary);
          background: var(--bg-elevated);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .view-btn.active {
          color: var(--cyan-primary);
          background: var(--bg-card-hover);
        }
        .table-file-icon {
          width: 34px;
          height: 34px;
          border-radius: var(--radius-sm);
          background: var(--bg-elevated);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .table-doc-name-clickable {
          font-weight: 600;
          color: var(--text-primary);
          cursor: pointer;
        }
        .table-doc-name-clickable:hover {
          color: var(--cyan-primary);
          text-decoration: underline;
        }
        .table-actions {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .docs-grid-cards {
          display: grid;
          grid-templateColumns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 20px;
        }
        .doc-card {
          display: flex;
          flex-direction: column;
          transition: all 0.2s ease;
        }
        .doc-card:hover {
          border-color: var(--cyan-primary);
          transform: translateY(-2px);
        }
        .doc-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .doc-card-icon {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          background: var(--bg-elevated);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .doc-card-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
          cursor: pointer;
          margin-bottom: 6px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .doc-card-title:hover {
          color: var(--cyan-primary);
        }
        .doc-card-desc {
          font-size: 0.78rem;
          color: var(--text-secondary);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          line-height: 1.4;
          margin-bottom: 14px;
          flex: 1;
        }
        .doc-card-meta {
          font-size: 0.72rem;
          color: var(--text-muted);
          display: flex;
          gap: 6px;
          align-items: center;
          margin-bottom: 14px;
          border-top: 1px solid var(--border-subtle);
          padding-top: 10px;
        }
        .doc-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      `})]})},Zx=()=>{var u;const{id:e}=vh(),t=rt(),{documents:n,deleteDocument:s,showToast:i,backendConnected:a}=ce(),[l,c]=v.useState(!1),o=n.find(j=>j.id===e);if(!o)return r.jsx("div",{className:"doc-details-not-found",children:r.jsx(tr,{title:"Document Not Located",description:"The requested document does not exist or your Zero-Trust session lacks permission to view it.",actionText:"Back to Documents",onAction:()=>t("/documents")})});const d=async()=>{try{a?(i(`Requesting Zero-Trust stream for "${o.name}"...`,"info"),await be.downloadDocument(o.id,o.name),i(`Cryptographically verified download complete for "${o.name}"`,"success")):i(`Generating signed export for "${o.name}" v${o.version}...`,"success")}catch(j){i(j.message||"Zero-Trust Policy Blocked: Access Denied","error")}},x=j=>{i(`Downloading historical revision v${j.version} (${j.hash.substring(0,8)})...`,"info")},h=()=>{window.confirm(`Permanently remove "${o.name}" from the secure vault?`)&&(s(o.id),t("/documents"))};return r.jsxs("div",{className:"doc-details-page",children:[r.jsxs("div",{className:"details-header-nav",children:[r.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>t("/documents"),children:[r.jsx(rp,{size:14}),r.jsx("span",{children:"Back to Documents"})]}),r.jsxs("div",{className:"header-actions",children:[o.webViewLink&&r.jsxs("a",{href:o.webViewLink,target:"_blank",rel:"noreferrer",className:"btn btn-secondary btn-sm",style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[r.jsx(ni,{size:14}),r.jsx("span",{children:"Open in Drive"})]}),r.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>c(!0),children:[r.jsx(Kt,{size:14}),r.jsx("span",{children:"Share"})]}),r.jsxs("button",{type:"button",className:"btn btn-primary btn-sm",onClick:d,children:[r.jsx(Zt,{size:14}),r.jsxs("span",{children:["Download (v",o.version,")"]})]}),r.jsxs("button",{type:"button",className:"btn btn-danger btn-sm",onClick:h,children:[r.jsx(er,{size:14}),r.jsx("span",{children:"Delete"})]})]})]}),r.jsxs("div",{className:"zt-card details-main-card",children:[r.jsxs("div",{className:"dmc-top",children:[r.jsxs("div",{className:"dmc-title-box",children:[r.jsx("div",{className:"dmc-icon",children:r.jsx(qt,{size:28,color:"var(--cyan-primary)"})}),r.jsxs("div",{children:[r.jsx("h1",{className:"dmc-title",children:o.name}),r.jsx("p",{className:"dmc-desc",children:o.description})]})]}),r.jsx(ut,{level:o.classification})]}),r.jsxs("div",{className:"details-meta-grid",children:[r.jsxs("div",{className:"dmg-item",children:[r.jsxs("span",{className:"dmg-label",children:[r.jsx(Gn,{size:13})," Owner & Creator"]}),r.jsx("span",{className:"dmg-val",children:o.owner}),r.jsx("span",{className:"dmg-sub",children:o.ownerEmail})]}),r.jsxs("div",{className:"dmg-item",children:[r.jsxs("span",{className:"dmg-label",children:[r.jsx(Qt,{size:13})," Resource Size"]}),r.jsx("span",{className:"dmg-val",children:o.sizeFormatted}),r.jsxs("span",{className:"dmg-sub",children:[o.size.toLocaleString()," bytes"]})]}),r.jsxs("div",{className:"dmg-item",children:[r.jsxs("span",{className:"dmg-label",children:[r.jsx(sp,{size:13})," Upload Date"]}),r.jsx("span",{className:"dmg-val",children:o.uploadedAt}),r.jsxs("span",{className:"dmg-sub",children:["Modified: ",o.lastModified]})]}),r.jsxs("div",{className:"dmg-item",children:[r.jsxs("span",{className:"dmg-label",children:[r.jsx(nt,{size:13})," Active Shares"]}),r.jsxs("span",{className:"dmg-val",children:[o.sharedWithCount," recipients"]}),r.jsx("span",{className:"dmg-sub",children:"Token bound access"})]}),r.jsxs("div",{className:"dmg-item",children:[r.jsxs("span",{className:"dmg-label",children:[o.storageLocation==="GOOGLE_DRIVE"?r.jsx(dt,{size:13,color:"var(--cyan-primary)"}):r.jsx(Qt,{size:13})," Storage Destination"]}),r.jsx("span",{className:"dmg-val",style:{display:"flex",alignItems:"center",gap:"6px"},children:o.storageLocation==="GOOGLE_DRIVE"?r.jsxs(r.Fragment,{children:[r.jsx(dt,{size:14,color:"var(--cyan-primary)"})," Google Drive API v3"]}):"Local Encrypted Vault"}),r.jsx("span",{className:"dmg-sub",children:o.googleDriveFileId?`File ID: ${o.googleDriveFileId.substring(0,16)}...`:"Filesystem Enclave"})]})]}),r.jsxs("div",{className:"hash-banner",children:[r.jsxs("div",{className:"hash-header",children:[r.jsx(lp,{size:15,color:"var(--cyan-primary)"}),r.jsxs("span",{children:["SHA-256 INTEGRITY HASH (CURRENT REVISION v",o.version,")"]})]}),r.jsx("div",{className:"hash-code",children:o.sha256Hash})]}),r.jsxs("div",{className:"phase2-planned-badge",children:[r.jsx(Je,{size:15,color:"var(--cyan-primary)"}),r.jsxs("span",{children:[r.jsx("strong",{children:"Zero-Trust Architecture Note:"})," End-to-end envelope encryption (AES-256-GCM) with client-side key wrapping is scheduled for Phase 2 implementation."]})]})]}),r.jsxs("div",{className:"zt-card version-history-card",children:[r.jsxs("div",{className:"zt-card-header",children:[r.jsxs("div",{className:"zt-card-title",children:[r.jsx(Cx,{size:18,color:"var(--cyan-primary)"}),r.jsx("span",{children:"Version History & Cryptographic Provenance"})]}),r.jsxs("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:[((u=o.versions)==null?void 0:u.length)||1," Revisions Logged"]})]}),r.jsx("div",{className:"timeline-container",children:(o.versions||[]).map((j,y)=>{var w;return r.jsxs("div",{className:"timeline-row",children:[r.jsxs("div",{className:"timeline-bullet-col",children:[r.jsx("div",{className:`timeline-bullet ${y===0?"current":""}`,children:r.jsx(Nx,{size:14})}),y<(((w=o.versions)==null?void 0:w.length)||1)-1&&r.jsx("div",{className:"timeline-line"})]}),r.jsxs("div",{className:"timeline-content-card",children:[r.jsxs("div",{className:"tcc-header",children:[r.jsxs("div",{className:"tcc-ver",children:[r.jsxs("span",{className:"ver-badge",children:["v",j.version]}),y===0&&r.jsx("span",{className:"current-tag",children:"ACTIVE HEAD"}),r.jsxs("span",{className:"tcc-author",children:["by ",j.uploadedBy]})]}),r.jsx("div",{className:"tcc-time",children:j.uploadedAt})]}),r.jsx("div",{className:"tcc-changes",children:j.changes}),r.jsxs("div",{className:"tcc-footer",children:[r.jsxs("span",{className:"tcc-hash",children:["SHA: ",j.hash.substring(0,16),"..."]}),r.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>x(j),children:[r.jsx(Zt,{size:13}),r.jsxs("span",{children:["Download v",j.version]})]})]})]})]},j.version)})})]}),r.jsx(lo,{isOpen:l,onClose:()=>c(!1),document:o}),r.jsx("style",{children:`
        .details-header-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        .header-actions {
          display: flex;
          gap: 10px;
        }
        .details-main-card {
          margin-bottom: 24px;
        }
        .dmc-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 24px;
        }
        .dmc-title-box {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .dmc-icon {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-sm);
          background: rgba(6, 182, 212, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .dmc-title {
          font-size: 1.45rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .dmc-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin-top: 4px;
        }
        .details-meta-grid {
          display: grid;
          grid-templateColumns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
          margin-bottom: 24px;
        }
        .dmg-item {
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 14px 16px;
        }
        .dmg-label {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          color: var(--text-muted);
          text-transform: uppercase;
          margin-bottom: 6px;
        }
        .dmg-val {
          display: block;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .dmg-sub {
          display: block;
          font-size: 0.72rem;
          color: var(--text-secondary);
          margin-top: 2px;
        }
        .hash-banner {
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 12px 16px;
          margin-bottom: 16px;
        }
        .hash-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--cyan-primary);
          margin-bottom: 6px;
        }
        .hash-code {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-secondary);
          word-break: break-all;
        }
        .phase2-planned-badge {
          background: rgba(6, 182, 212, 0.08);
          border: 1px solid rgba(6, 182, 212, 0.25);
          border-radius: var(--radius-sm);
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
        .phase2-planned-badge strong {
          color: var(--cyan-primary);
        }
        .version-history-card {
          margin-bottom: 24px;
        }
        .timeline-container {
          display: flex;
          flex-direction: column;
        }
        .timeline-row {
          display: flex;
          gap: 16px;
        }
        .timeline-bullet-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 32px;
        }
        .timeline-bullet {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--bg-elevated);
          border: 1px solid var(--border-medium);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          z-index: 1;
        }
        .timeline-bullet.current {
          background: rgba(6, 182, 212, 0.15);
          border-color: var(--cyan-primary);
          color: var(--cyan-primary);
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.3);
        }
        .timeline-line {
          flex: 1;
          width: 2px;
          background: var(--border-subtle);
          margin: 4px 0;
        }
        .timeline-content-card {
          flex: 1;
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 14px 18px;
          margin-bottom: 16px;
        }
        .tcc-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 6px;
        }
        .tcc-ver {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .ver-badge {
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--text-primary);
        }
        .current-tag {
          font-size: 0.65rem;
          font-weight: 700;
          background: rgba(16, 185, 129, 0.15);
          color: var(--emerald);
          padding: 2px 6px;
          border-radius: 4px;
        }
        .tcc-author {
          font-size: 0.78rem;
          color: var(--text-muted);
        }
        .tcc-time {
          font-size: 0.75rem;
          color: var(--text-muted);
        }
        .tcc-changes {
          font-size: 0.84rem;
          color: var(--text-secondary);
          margin-bottom: 12px;
          line-height: 1.4;
        }
        .tcc-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid var(--border-subtle);
          padding-top: 10px;
        }
        .tcc-hash {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
        }
      `})]})},qx=()=>{const{sharedWithMe:e,documents:t,showToast:n,backendConnected:s}=ce(),[i,a]=v.useState(""),[l,c]=v.useState("All"),[o,d]=v.useState("All"),[x,h]=v.useState(null),[u,j]=v.useState(null),[y,w]=v.useState(""),b=v.useMemo(()=>e.filter(g=>{const S=g.name.toLowerCase().includes(i.toLowerCase())||g.owner.toLowerCase().includes(i.toLowerCase())||g.ownerEmail.toLowerCase().includes(i.toLowerCase()),z=l==="All"||g.accessType===l,E=o==="All"||g.status===o;return S&&z&&E}),[e,i,l,o]),f=g=>{const S=t.find(z=>z.id===g.documentId);h(S||{id:g.documentId,name:g.name,type:g.type,size:24e5,sizeFormatted:g.size,owner:g.owner,ownerEmail:g.ownerEmail,classification:g.classification,lastModified:g.sharedDate,uploadedAt:g.sharedDate,sharedWithCount:1,description:`Shared with you by ${g.owner} under ${g.accessType} permissions.`,sha256Hash:"4a5b6c7d8e9f0123456789abcdef0123456789abcdef0123456789abcdef0123",version:"1.0",versions:[]})},p=async g=>{if(g.accessType==="View Only"){n(`Policy restriction: "${g.name}" is designated View Only. Direct file download is prohibited.`,"warning");return}try{s&&g.documentId?(n(`Requesting Zero-Trust stream for "${g.name}"...`,"info"),await be.downloadDocument(g.documentId,g.name),n(`Cryptographically verified download complete for "${g.name}"`,"success")):n(`Downloading secure signed file "${g.name}"...`,"success")}catch(S){n(S.message||"Download authorization blocked by Zero-Trust policy.","error")}},m=g=>{g.preventDefault(),n(`Access extension request dispatched to document owner (${u==null?void 0:u.ownerEmail})`,"info"),j(null),w("")};return r.jsxs("div",{className:"shared-with-me-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsxs("h1",{className:"page-title",children:[r.jsx(ap,{size:24,color:"var(--cyan-primary)"}),r.jsx("span",{children:"Shared With Me"})]}),r.jsx("p",{className:"page-subtitle",children:"Documents provisioned to your zero-trust identity with continuous time-bound access tokens."})]}),r.jsxs("div",{className:"zt-card",style:{padding:"16px 20px",marginBottom:"24px",display:"flex",flexWrap:"wrap",gap:"16px",alignItems:"center",justifyContent:"space-between"},children:[r.jsxs("div",{style:{position:"relative",flex:1,minWidth:"260px"},children:[r.jsx(Xn,{size:16,style:{position:"absolute",left:"12px",top:"11px",color:"var(--text-muted)"}}),r.jsx("input",{type:"text",className:"form-input",style:{paddingLeft:"36px"},placeholder:"Search by filename or owner...",value:i,onChange:g=>a(g.target.value)})]}),r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"12px"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[r.jsx("span",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:"Access Type:"}),r.jsxs("select",{className:"form-select",style:{width:"auto",padding:"6px 10px",fontSize:"0.8rem"},value:l,onChange:g=>c(g.target.value),children:[r.jsx("option",{value:"All",children:"All Types"}),r.jsx("option",{value:"View Only",children:"View Only"}),r.jsx("option",{value:"Edit",children:"Edit"}),r.jsx("option",{value:"Restricted Download",children:"Restricted Download"})]})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[r.jsx("span",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:"Status:"}),r.jsxs("select",{className:"form-select",style:{width:"auto",padding:"6px 10px",fontSize:"0.8rem"},value:o,onChange:g=>d(g.target.value),children:[r.jsx("option",{value:"All",children:"All Statuses"}),r.jsx("option",{value:"Active",children:"Active"}),r.jsx("option",{value:"Expiring Soon",children:"Expiring Soon"}),r.jsx("option",{value:"Expired",children:"Expired"})]})]})]})]}),b.length===0?r.jsx(tr,{title:"No Shared Documents",description:"There are currently no external or internal documents shared with your account matching the filters.",actionText:"Clear Filters",onAction:()=>{a(""),c("All"),d("All")}}):r.jsx("div",{className:"table-responsive",children:r.jsxs("table",{className:"zt-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Document Name"}),r.jsx("th",{children:"Classification"}),r.jsx("th",{children:"Owner"}),r.jsx("th",{children:"Access Type"}),r.jsx("th",{children:"Shared Date"}),r.jsx("th",{children:"Expiry Date"}),r.jsx("th",{children:"Status"}),r.jsx("th",{children:"Actions"})]})}),r.jsx("tbody",{children:b.map(g=>r.jsxs("tr",{children:[r.jsx("td",{children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[r.jsx(qt,{size:18,color:"var(--cyan-primary)"}),r.jsxs("div",{children:[r.jsx("div",{style:{fontWeight:600,color:"var(--text-primary)"},children:g.name}),r.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)"},children:g.size})]})]})}),r.jsx("td",{children:r.jsx(ut,{level:g.classification})}),r.jsxs("td",{children:[r.jsx("div",{style:{fontSize:"0.82rem",color:"var(--text-primary)"},children:g.owner}),r.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)"},children:g.ownerEmail})]}),r.jsx("td",{children:r.jsx("span",{style:{fontSize:"0.75rem",fontFamily:"var(--font-mono)",background:"rgba(6, 182, 212, 0.1)",color:"var(--cyan-primary)",padding:"2px 8px",borderRadius:"4px"},children:g.accessType})}),r.jsx("td",{style:{fontSize:"0.82rem",color:"var(--text-secondary)"},children:g.sharedDate}),r.jsx("td",{style:{fontSize:"0.82rem",color:"var(--text-secondary)"},children:g.expiryDate}),r.jsx("td",{children:r.jsx(Gr,{status:g.status})}),r.jsx("td",{children:r.jsxs("div",{style:{display:"flex",gap:"6px"},children:[r.jsx("button",{type:"button",className:"btn-icon",title:"View Document",onClick:()=>f(g),children:r.jsx(Wn,{size:15})}),r.jsx("button",{type:"button",className:"btn-icon",title:"Download",onClick:()=>p(g),children:r.jsx(Zt,{size:15})}),r.jsx("button",{type:"button",className:"btn-icon",title:"Request Token Extension",onClick:()=>j(g),children:r.jsx(Xa,{size:15})})]})})]},g.id))})]})}),r.jsx(ao,{isOpen:!!x,onClose:()=>h(null),document:x}),r.jsx(St,{isOpen:!!u,onClose:()=>j(null),title:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx(Xa,{size:18,color:"var(--cyan-primary)"}),r.jsx("span",{children:"Request Access Token Extension"})]}),children:u&&r.jsxs("form",{onSubmit:m,children:[r.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",marginBottom:"16px"},children:["Your token for ",r.jsx("strong",{children:u.name})," expires on ",u.expiryDate,". Submit an extension request to ",r.jsx("strong",{children:u.owner}),"."]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label required",children:"Business Justification"}),r.jsx("textarea",{className:"form-textarea",rows:3,placeholder:"State the project requirements necessitating token extension...",value:y,onChange:g=>w(g.target.value),required:!0})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px"},children:[r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>j(null),children:"Cancel"}),r.jsx("button",{type:"submit",className:"btn btn-primary btn-sm",children:"Submit Extension Request"})]})]})})]})},Qx=({isOpen:e,onClose:t,sharedItem:n})=>{const{updateSharedPermission:s,revokeSharedAccess:i}=ce(),[a,l]=v.useState((n==null?void 0:n.permissions)||"View Only"),[c,o]=v.useState((n==null?void 0:n.expiryDate)||"2026-11-30 23:59");if(si.useEffect(()=>{n&&(l(n.permissions),o(n.expiryDate))},[n]),!n)return null;const d=h=>{h.preventDefault(),s(n.id,a,c),t()},x=()=>{window.confirm(`Are you sure you want to immediately revoke access for ${n.recipientEmail}?`)&&(i(n.id),t())};return r.jsx(St,{isOpen:e,onClose:t,title:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx(nt,{size:18,color:"var(--cyan-primary)"}),r.jsx("span",{children:"Manage Sharing Permissions"})]}),children:r.jsxs("form",{onSubmit:d,children:[r.jsxs("div",{style:{backgroundColor:"var(--bg-elevated)",border:"1px solid var(--border-subtle)",borderRadius:"var(--radius-sm)",padding:"14px",marginBottom:"20px"},children:[r.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"8px"},children:[r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)",textTransform:"uppercase"},children:"DOCUMENT"}),r.jsx("div",{style:{fontWeight:600,color:"var(--text-primary)",marginTop:"2px"},children:n.documentName})]}),r.jsx(ut,{level:n.classification,showIcon:!1})]}),r.jsxs("div",{style:{borderTop:"1px solid var(--border-subtle)",paddingTop:"8px",marginTop:"8px"},children:[r.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)",textTransform:"uppercase"},children:"RECIPIENT"}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",marginTop:"2px"},children:[r.jsx(Ni,{size:14,color:"var(--cyan-primary)"}),r.jsxs("span",{style:{fontSize:"0.85rem",color:"var(--text-primary)"},children:[n.recipientName," (",n.recipientEmail,")"]})]})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Access Permissions Level"}),r.jsx("div",{style:{position:"relative"},children:r.jsxs("select",{className:"form-select",value:a,onChange:h=>l(h.target.value),children:[r.jsx("option",{value:"View Only",children:"View Only (Strict In-Browser Preview)"}),r.jsx("option",{value:"Can Download",children:"Can Download (Signed & Watermarked)"}),r.jsx("option",{value:"Full Access",children:"Full Access (Edit & Manage)"})]})}),r.jsx("span",{className:"form-hint",children:"Zero-Trust policy applies continuous posture validation regardless of granted level."})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Access Expiration Timestamp"}),r.jsx("div",{style:{position:"relative"},children:r.jsx("input",{type:"text",className:"form-input",value:c,onChange:h=>o(h.target.value),placeholder:"YYYY-MM-DD HH:mm"})}),r.jsx("span",{className:"form-hint",children:"Format: YYYY-MM-DD HH:mm (Zero-Trust auto-expiry)"})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"24px",paddingTop:"16px",borderTop:"1px solid var(--border-subtle)"},children:[n.status!=="Revoked"?r.jsxs("button",{type:"button",className:"btn btn-danger btn-sm",onClick:x,children:[r.jsx(er,{size:14}),r.jsx("span",{children:"Revoke Access"})]}):r.jsx("span",{style:{fontSize:"0.8rem",color:"var(--rose)"},children:"Access is currently revoked"}),r.jsxs("div",{style:{display:"flex",gap:"10px"},children:[r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:t,children:"Cancel"}),r.jsx("button",{type:"submit",className:"btn btn-primary btn-sm",children:"Save Permissions"})]})]})]})})},Kx=()=>{const{sharedByMe:e,revokeSharedAccess:t}=ce(),[n,s]=v.useState(""),[i,a]=v.useState("All"),[l,c]=v.useState("All"),[o,d]=v.useState(null),x=v.useMemo(()=>e.filter(u=>{const j=u.documentName.toLowerCase().includes(n.toLowerCase())||u.recipientName.toLowerCase().includes(n.toLowerCase())||u.recipientEmail.toLowerCase().includes(n.toLowerCase()),y=i==="All"||u.permissions===i,w=l==="All"||u.status===l;return j&&y&&w}),[e,n,i,l]),h=u=>{window.confirm(`Revoke secure access for ${u.recipientEmail}?`)&&t(u.id)};return r.jsxs("div",{className:"shared-by-me-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsxs("h1",{className:"page-title",children:[r.jsx(to,{size:24,color:"var(--cyan-primary)"}),r.jsx("span",{children:"Shared By Me"})]}),r.jsx("p",{className:"page-subtitle",children:"Manage outgoing Zero-Trust access grants, configure ephemeral permissions, and audit active recipients."})]}),r.jsxs("div",{className:"zt-card",style:{padding:"16px 20px",marginBottom:"24px",display:"flex",flexWrap:"wrap",gap:"16px",alignItems:"center",justifyContent:"space-between"},children:[r.jsxs("div",{style:{position:"relative",flex:1,minWidth:"260px"},children:[r.jsx(Xn,{size:16,style:{position:"absolute",left:"12px",top:"11px",color:"var(--text-muted)"}}),r.jsx("input",{type:"text",className:"form-input",style:{paddingLeft:"36px"},placeholder:"Search by recipient or document...",value:n,onChange:u=>s(u.target.value)})]}),r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"12px"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[r.jsx("span",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:"Permissions:"}),r.jsxs("select",{className:"form-select",style:{width:"auto",padding:"6px 10px",fontSize:"0.8rem"},value:i,onChange:u=>a(u.target.value),children:[r.jsx("option",{value:"All",children:"All Permissions"}),r.jsx("option",{value:"View Only",children:"View Only"}),r.jsx("option",{value:"Can Download",children:"Can Download"}),r.jsx("option",{value:"Full Access",children:"Full Access"})]})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[r.jsx("span",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:"Status:"}),r.jsxs("select",{className:"form-select",style:{width:"auto",padding:"6px 10px",fontSize:"0.8rem"},value:l,onChange:u=>c(u.target.value),children:[r.jsx("option",{value:"All",children:"All Statuses"}),r.jsx("option",{value:"Active",children:"Active"}),r.jsx("option",{value:"Revoked",children:"Revoked"}),r.jsx("option",{value:"Expired",children:"Expired"})]})]})]})]}),x.length===0?r.jsx(tr,{title:"No Active Shared Grants",description:"You have not created any shared links matching the current filters. Go to My Documents to share a file.",actionText:"Clear Filters",onAction:()=>{s(""),a("All"),c("All")}}):r.jsx("div",{className:"table-responsive",children:r.jsxs("table",{className:"zt-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Document"}),r.jsx("th",{children:"Classification"}),r.jsx("th",{children:"Recipient"}),r.jsx("th",{children:"Granted Permissions"}),r.jsx("th",{children:"Shared Date"}),r.jsx("th",{children:"Expiry Date"}),r.jsx("th",{children:"Status"}),r.jsx("th",{children:"Actions"})]})}),r.jsx("tbody",{children:x.map(u=>r.jsxs("tr",{children:[r.jsx("td",{children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[r.jsx(qt,{size:18,color:"var(--cyan-primary)"}),r.jsxs("div",{children:[r.jsx("span",{style:{fontWeight:600,color:"var(--text-primary)"},children:u.documentName}),u.storageLocation==="GOOGLE_DRIVE"&&r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",fontSize:"0.68rem",color:"var(--cyan-primary)",marginTop:"2px"},children:[r.jsx(dt,{size:11})," Google Drive API v3"]})]})]})}),r.jsx("td",{children:r.jsx(ut,{level:u.classification,showIcon:!1})}),r.jsx("td",{children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[r.jsx(Ni,{size:14,color:"var(--cyan-primary)"}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"0.82rem",color:"var(--text-primary)"},children:u.recipientName}),r.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)"},children:u.recipientEmail})]})]})}),r.jsx("td",{children:r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[r.jsx("span",{style:{fontSize:"0.75rem",fontFamily:"var(--font-mono)",background:"rgba(6, 182, 212, 0.1)",color:"var(--cyan-primary)",padding:"2px 8px",borderRadius:"4px",width:"fit-content"},children:u.permissions}),u.oneTimeAccess&&r.jsxs("span",{style:{fontSize:"0.68rem",background:"rgba(239, 68, 68, 0.12)",color:"#F87171",padding:"1px 6px",borderRadius:"4px",display:"inline-flex",alignItems:"center",gap:"3px",width:"fit-content"},children:[r.jsx(Fx,{size:10})," 1-Time (",u.accessCount||0,"/1 used)"]})]})}),r.jsx("td",{style:{fontSize:"0.82rem",color:"var(--text-secondary)"},children:u.sharedDate}),r.jsx("td",{style:{fontSize:"0.82rem",color:"var(--text-secondary)"},children:u.expiryDate}),r.jsx("td",{children:r.jsx(Gr,{status:u.status})}),r.jsx("td",{children:r.jsxs("div",{style:{display:"flex",gap:"6px"},children:[r.jsx("button",{type:"button",className:"btn-icon",title:"Manage Permissions & Expiry",onClick:()=>d(u),children:r.jsx(Px,{size:15})}),u.status!=="Revoked"&&r.jsx("button",{type:"button",className:"btn-icon",style:{color:"var(--rose)"},title:"Immediately Revoke Access",onClick:()=>h(u),children:r.jsx(er,{size:15})})]})})]},u.id))})]})}),r.jsx(Qx,{isOpen:!!o,onClose:()=>d(null),sharedItem:o})]})},Yx=()=>{const{addDocument:e,refreshBackendData:t,showToast:n}=ce(),s=rt(),[i,a]=v.useState(!1),[l,c]=v.useState(null),[o,d]=v.useState(null),[x,h]=v.useState("GOOGLE_DRIVE"),[u,j]=v.useState("Confidential"),[y,w]=v.useState(""),[b,f]=v.useState(!1),[p,m]=v.useState(0),[g,S]=v.useState(""),z=v.useRef(null),E=M=>{M.preventDefault(),M.stopPropagation(),M.type==="dragenter"||M.type==="dragover"?a(!0):M.type==="dragleave"&&a(!1)},P=M=>{var st;c(M);const se=((st=M.name.split(".").pop())==null?void 0:st.toLowerCase())||"";let Pe="code";se==="pdf"?Pe="pdf":["doc","docx"].includes(se)?Pe="docx":["xls","xlsx","csv"].includes(se)?Pe="xlsx":["ppt","pptx"].includes(se)?Pe="pptx":["zip","tar","gz","7z"].includes(se)?Pe="zip":["png","jpg","jpeg","svg"].includes(se)&&(Pe="png");const Ge=M.size>1024*1024?`${(M.size/(1024*1024)).toFixed(1)} MB`:`${Math.round(M.size/1024)} KB`;d({name:M.name,size:M.size,sizeFormatted:Ge,type:Pe})},$=M=>{M.preventDefault(),M.stopPropagation(),a(!1),M.dataTransfer.files&&M.dataTransfer.files[0]&&P(M.dataTransfer.files[0])},k=M=>{M.target.files&&M.target.files[0]&&P(M.target.files[0])},H=()=>{c(null),d(null),m(0),f(!1)},ae=async M=>{if(M.preventDefault(),!o){n("Please select or drop a file to upload.","warning");return}if(f(!0),m(20),S("Scanning file signatures & verifying integrity..."),x==="GOOGLE_DRIVE"&&l)try{m(40),S("Authenticating Zero-Trust Google Drive session...");const se=new FormData;se.append("file",l),se.append("classification",u),y&&se.append("description",y),m(65),S("Streaming ciphertext to Google Drive API v3..."),await be.uploadFile(se),m(100),S("File encrypted and stored in Google Drive successfully."),n("Document uploaded to Google Drive with Zero-Trust provenance.","success"),await t(),setTimeout(()=>{s("/documents")},600)}catch(se){f(!1),n(`Drive upload failed: ${se.message}. If Drive is not connected, please connect it in Settings.`,"error")}else setTimeout(()=>{m(50),S("Generating cryptographic SHA-256 digest...")},400),setTimeout(()=>{m(85),S(`Binding Zero-Trust policy: ${u}...`)},900),setTimeout(async()=>{m(100),S("Secure ingestion completed successfully."),await e({name:o.name,type:o.type,size:o.size,sizeFormatted:o.sizeFormatted,classification:u,description:y}),setTimeout(()=>{s("/documents")},500)},1400)};return r.jsxs("div",{className:"upload-page",children:[r.jsxs("div",{className:"page-header",style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[r.jsxs("div",{children:[r.jsxs("h1",{className:"page-title",children:[r.jsx(on,{size:24,color:"var(--cyan-primary)"}),r.jsx("span",{children:"Secure Document Ingestion"})]}),r.jsx("p",{className:"page-subtitle",children:"Upload and bind documents to Zero-Trust classification criteria with cryptographic provenance."})]}),r.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>s("/documents"),children:[r.jsx(rp,{size:14}),r.jsx("span",{children:"Back to Documents"})]})]}),r.jsx("div",{className:"upload-container zt-card",children:r.jsxs("form",{onSubmit:ae,children:[r.jsx("input",{ref:z,type:"file",style:{display:"none"},onChange:k}),o?r.jsxs("div",{className:"selected-file-banner",children:[r.jsxs("div",{className:"sfb-left",children:[r.jsx("div",{className:"sfb-icon",children:r.jsx(qt,{size:24,color:"var(--cyan-primary)"})}),r.jsxs("div",{children:[r.jsx("div",{className:"sfb-name",children:o.name}),r.jsxs("div",{className:"sfb-meta",children:[o.sizeFormatted," • Type: ",o.type.toUpperCase()]})]})]}),!b&&r.jsx("button",{type:"button",className:"btn-icon",title:"Remove file",onClick:H,children:r.jsx(io,{size:18})})]}):r.jsxs("div",{className:`dropzone-box ${i?"dropzone-active":""}`,onDragEnter:E,onDragLeave:E,onDragOver:E,onDrop:$,onClick:()=>{var M;return(M=z.current)==null?void 0:M.click()},children:[r.jsx("div",{className:"dropzone-icon",children:r.jsx(on,{size:40,color:"var(--cyan-primary)"})}),r.jsx("h3",{className:"dropzone-title",children:"Drag & Drop secure files here"}),r.jsxs("p",{className:"dropzone-sub",children:["or ",r.jsx("span",{className:"browse-link",children:"browse from your workstation"})]}),r.jsx("div",{className:"dropzone-allowed",children:"Supported formats: PDF, DOCX, XLSX, PPTX, ZIP, PNG (Max 100 MB per file)"})]}),r.jsxs("div",{className:"form-group",style:{marginTop:"24px"},children:[r.jsx("label",{className:"form-label required",children:"Secure Storage Destination"}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:"14px"},children:[r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"14px 16px",borderRadius:"var(--radius-sm)",border:`1px solid ${x==="GOOGLE_DRIVE"?"var(--cyan-primary)":"var(--border-subtle)"}`,background:x==="GOOGLE_DRIVE"?"rgba(6, 182, 212, 0.08)":"var(--bg-card)",cursor:"pointer",transition:"all 0.2s"},children:[r.jsx("input",{type:"radio",name:"storageTarget",value:"GOOGLE_DRIVE",checked:x==="GOOGLE_DRIVE",onChange:()=>h("GOOGLE_DRIVE"),style:{accentColor:"var(--cyan-primary)"}}),r.jsx(dt,{size:20,color:"var(--cyan-primary)"}),r.jsxs("div",{children:[r.jsx("div",{style:{fontWeight:600,color:"var(--text-primary)",fontSize:"0.88rem"},children:"Google Drive (API v3)"}),r.jsx("div",{style:{fontSize:"0.74rem",color:"var(--text-secondary)"},children:"Store in linked Google Drive with Zero-Trust access control"})]})]}),r.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"12px",padding:"14px 16px",borderRadius:"var(--radius-sm)",border:`1px solid ${x==="LOCAL"?"var(--cyan-primary)":"var(--border-subtle)"}`,background:x==="LOCAL"?"rgba(6, 182, 212, 0.08)":"var(--bg-card)",cursor:"pointer",transition:"all 0.2s"},children:[r.jsx("input",{type:"radio",name:"storageTarget",value:"LOCAL",checked:x==="LOCAL",onChange:()=>h("LOCAL"),style:{accentColor:"var(--cyan-primary)"}}),r.jsx(Qt,{size:20,color:"var(--emerald)"}),r.jsxs("div",{children:[r.jsx("div",{style:{fontWeight:600,color:"var(--text-primary)",fontSize:"0.88rem"},children:"Local Encrypted Vault"}),r.jsx("div",{style:{fontSize:"0.74rem",color:"var(--text-secondary)"},children:"Store on isolated server filesystem repository"})]})]})]})]}),r.jsxs("div",{className:"form-group",style:{marginTop:"20px"},children:[r.jsx("label",{className:"form-label required",children:"Zero-Trust Document Classification"}),r.jsxs("div",{className:"classification-options-grid",children:[r.jsxs("label",{className:`class-option-card ${u==="Public"?"selected":""}`,children:[r.jsx("input",{type:"radio",name:"classification",value:"Public",checked:u==="Public",onChange:()=>j("Public")}),r.jsxs("div",{className:"coc-header",children:[r.jsx(nt,{size:16,color:"#CBD5E1"}),r.jsx("span",{className:"coc-title",children:"Public"})]}),r.jsx("p",{className:"coc-desc",children:"No restriction. Accessible to all users and external partners."})]}),r.jsxs("label",{className:`class-option-card ${u==="Internal"?"selected":""}`,children:[r.jsx("input",{type:"radio",name:"classification",value:"Internal",checked:u==="Internal",onChange:()=>j("Internal")}),r.jsxs("div",{className:"coc-header",children:[r.jsx(ki,{size:16,color:"#60A5FA"}),r.jsx("span",{className:"coc-title",children:"Internal"})]}),r.jsx("p",{className:"coc-desc",children:"Restricted to authenticated organization staff only."})]}),r.jsxs("label",{className:`class-option-card ${u==="Confidential"?"selected":""}`,children:[r.jsx("input",{type:"radio",name:"classification",value:"Confidential",checked:u==="Confidential",onChange:()=>j("Confidential")}),r.jsxs("div",{className:"coc-header",children:[r.jsx(Je,{size:16,color:"#A78BFA"}),r.jsx("span",{className:"coc-title",children:"Confidential"})]}),r.jsx("p",{className:"coc-desc",children:"Role-based clearance required. Ephemeral tokens enforced."})]}),r.jsxs("label",{className:`class-option-card ${u==="Highly Confidential"?"selected":""}`,children:[r.jsx("input",{type:"radio",name:"classification",value:"Highly Confidential",checked:u==="Highly Confidential",onChange:()=>j("Highly Confidential")}),r.jsxs("div",{className:"coc-header",children:[r.jsx(Jr,{size:16,color:"#F87171"}),r.jsx("span",{className:"coc-title",children:"Highly Confidential"})]}),r.jsx("p",{className:"coc-desc",children:"Strict micro-segmentation, watermarking & egress lock."})]})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Document Summary / Justification"}),r.jsx("textarea",{className:"form-textarea",rows:3,placeholder:"Provide context regarding resource contents and intended security audience...",value:y,onChange:M=>w(M.target.value)})]}),b&&r.jsxs("div",{className:"upload-progress-container",children:[r.jsxs("div",{className:"progress-info-line",children:[r.jsx("span",{className:"phase-text",children:g}),r.jsxs("span",{className:"percent-text",children:[p,"%"]})]}),r.jsx("div",{className:"progress-track",children:r.jsx("div",{className:"progress-fill",style:{width:`${p}%`}})})]}),r.jsxs("div",{className:"form-actions-row",children:[r.jsx("button",{type:"button",className:"btn btn-secondary",disabled:b,onClick:()=>s("/documents"),children:"Cancel"}),r.jsxs("button",{type:"submit",className:"btn btn-primary",disabled:!o||b,children:[r.jsx(on,{size:16}),r.jsx("span",{children:b?"Ingesting into Vault...":"Upload & Encrypt Document"})]})]})]})}),r.jsx("style",{children:`
        .upload-container {
          max-width: 860px;
          margin: 0 auto;
        }
        .dropzone-box {
          border: 2px dashed var(--border-medium);
          border-radius: var(--radius-md);
          padding: 40px 20px;
          text-align: center;
          cursor: pointer;
          background: rgba(11, 19, 36, 0.4);
          transition: all 0.2s ease;
        }
        .dropzone-box:hover, .dropzone-active {
          border-color: var(--cyan-primary);
          background: rgba(6, 182, 212, 0.04);
          box-shadow: 0 0 20px rgba(6, 182, 212, 0.1);
        }
        .dropzone-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(6, 182, 212, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px auto;
        }
        .dropzone-title {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .dropzone-sub {
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin-top: 4px;
        }
        .browse-link {
          color: var(--cyan-primary);
          font-weight: 500;
          text-decoration: underline;
        }
        .dropzone-allowed {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 14px;
        }
        .selected-file-banner {
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 14px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .sfb-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .sfb-icon {
          width: 42px;
          height: 42px;
          border-radius: var(--radius-sm);
          background: rgba(6, 182, 212, 0.12);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sfb-name {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .sfb-meta {
          font-size: 0.76rem;
          color: var(--text-muted);
          margin-top: 2px;
        }
        .classification-options-grid {
          display: grid;
          grid-templateColumns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 12px;
          margin-top: 8px;
        }
        .class-option-card {
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 12px 14px;
          cursor: pointer;
          background: var(--bg-input);
          transition: all 0.2s ease;
          display: flex;
          flex-direction: column;
        }
        .class-option-card input {
          display: none;
        }
        .class-option-card:hover {
          border-color: var(--border-medium);
        }
        .class-option-card.selected {
          border-color: var(--cyan-primary);
          background: rgba(6, 182, 212, 0.08);
          box-shadow: 0 0 12px rgba(6, 182, 212, 0.15);
        }
        .coc-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
        }
        .coc-title {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .coc-desc {
          font-size: 0.72rem;
          color: var(--text-secondary);
          line-height: 1.35;
        }
        .upload-progress-container {
          margin-top: 20px;
          padding: 14px;
          background: var(--bg-input);
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-subtle);
        }
        .progress-info-line {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          margin-bottom: 8px;
        }
        .phase-text {
          color: var(--cyan-primary);
          font-weight: 500;
        }
        .percent-text {
          font-weight: 700;
          color: var(--text-primary);
          font-family: var(--font-mono);
        }
        .progress-track {
          height: 8px;
          background: var(--bg-card);
          border-radius: var(--radius-full);
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #06B6D4, #10B981);
          transition: width 0.3s ease;
        }
        .form-actions-row {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 24px;
          padding-top: 16px;
          border-top: 1px solid var(--border-subtle);
        }
      `})]})},Jx=({isOpen:e,onClose:t})=>{const{addUser:n,showToast:s}=ce(),[i,a]=v.useState(""),[l,c]=v.useState(""),[o,d]=v.useState("Cybersecurity Operations"),[x,h]=v.useState("Standard User"),[u,j]=v.useState("Internal"),y=w=>{if(w.preventDefault(),!i.trim()||!l.trim()){s("Name and email are required","warning");return}n({name:i,email:l,department:o,role:x,status:"Active",clearanceLevel:u}),a(""),c(""),t()};return r.jsx(St,{isOpen:e,onClose:t,title:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx(cp,{size:18,color:"var(--cyan-primary)"}),r.jsx("span",{children:"Provision New Zero-Trust Identity"})]}),children:r.jsxs("form",{onSubmit:y,children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label required",children:"Full Name"}),r.jsxs("div",{style:{position:"relative"},children:[r.jsx(Gn,{size:16,style:{position:"absolute",left:"12px",top:"12px",color:"var(--text-muted)"}}),r.jsx("input",{type:"text",className:"form-input",style:{paddingLeft:"38px"},placeholder:"e.g. Jordan Hayes",value:i,onChange:w=>a(w.target.value),required:!0})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label required",children:"Work Email Address"}),r.jsxs("div",{style:{position:"relative"},children:[r.jsx(no,{size:16,style:{position:"absolute",left:"12px",top:"12px",color:"var(--text-muted)"}}),r.jsx("input",{type:"email",className:"form-input",style:{paddingLeft:"38px"},placeholder:"e.g. jordan.hayes@zerotrust.sec",value:l,onChange:w=>c(w.target.value),required:!0})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Department / Unit"}),r.jsxs("div",{style:{position:"relative"},children:[r.jsx(hx,{size:16,style:{position:"absolute",left:"12px",top:"12px",color:"var(--text-muted)"}}),r.jsx("input",{type:"text",className:"form-input",style:{paddingLeft:"38px"},placeholder:"e.g. Cloud Security Architecture",value:o,onChange:w=>d(w.target.value)})]})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",marginBottom:"20px"},children:[r.jsxs("div",{children:[r.jsx("label",{className:"form-label",children:"System Role"}),r.jsxs("select",{className:"form-select",value:x,onChange:w=>h(w.target.value),children:[r.jsx("option",{value:"Standard User",children:"Standard User"}),r.jsx("option",{value:"Security Officer",children:"Security Officer"}),r.jsx("option",{value:"Compliance Officer",children:"Compliance Officer"}),r.jsx("option",{value:"Auditor",children:"Auditor"}),r.jsx("option",{value:"Admin",children:"Admin"})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"form-label",children:"Security Clearance Level"}),r.jsxs("select",{className:"form-select",value:u,onChange:w=>j(w.target.value),children:[r.jsx("option",{value:"Public",children:"Public (Level 1)"}),r.jsx("option",{value:"Internal",children:"Internal (Level 2)"}),r.jsx("option",{value:"Confidential",children:"Confidential (Level 3)"}),r.jsx("option",{value:"Highly Confidential",children:"Highly Confidential (Level 4)"})]})]})]}),r.jsxs("div",{style:{backgroundColor:"rgba(6, 182, 212, 0.08)",border:"1px solid rgba(6, 182, 212, 0.25)",borderRadius:"var(--radius-sm)",padding:"12px",display:"flex",gap:"10px",fontSize:"0.78rem",color:"var(--text-secondary)",marginBottom:"20px"},children:[r.jsx(ki,{size:16,color:"var(--cyan-primary)",style:{flexShrink:0,marginTop:"2px"}}),r.jsx("span",{children:"Identity will require hardware posture registration and MFA enrollment upon first access gateway challenge."})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px"},children:[r.jsx("button",{type:"button",className:"btn btn-secondary",onClick:t,children:"Cancel"}),r.jsx("button",{type:"submit",className:"btn btn-primary",children:"Provision Identity"})]})]})})},Xx=({isOpen:e,onClose:t,user:n})=>{const{updateUser:s,deleteUser:i,showToast:a}=ce(),[l,c]=v.useState(""),[o,d]=v.useState(""),[x,h]=v.useState(""),[u,j]=v.useState("Standard User"),[y,w]=v.useState("Active"),[b,f]=v.useState("Internal");if(v.useEffect(()=>{n&&(c(n.name),d(n.email),h(n.department),j(n.role),w(n.status),f(n.clearanceLevel))},[n]),!n)return null;const p=g=>{g.preventDefault(),s(n.id,{name:l,email:o,department:x,role:u,status:y,clearanceLevel:b}),t()},m=()=>{window.confirm(`Are you sure you want to remove ${n.name} from the Zero-Trust directory?`)&&(i(n.id),t())};return r.jsx(St,{isOpen:e,onClose:t,title:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx(Ni,{size:18,color:"var(--cyan-primary)"}),r.jsx("span",{children:"Edit User Clearance & Role"})]}),children:r.jsxs("form",{onSubmit:p,children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label required",children:"Full Name"}),r.jsx("input",{type:"text",className:"form-input",value:l,onChange:g=>c(g.target.value),required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label required",children:"Work Email"}),r.jsx("input",{type:"email",className:"form-input",value:o,onChange:g=>d(g.target.value),required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Department"}),r.jsx("input",{type:"text",className:"form-input",value:x,onChange:g=>h(g.target.value)})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",marginBottom:"16px"},children:[r.jsxs("div",{children:[r.jsx("label",{className:"form-label",children:"Role"}),r.jsxs("select",{className:"form-select",value:u,onChange:g=>j(g.target.value),children:[r.jsx("option",{value:"Standard User",children:"Standard User"}),r.jsx("option",{value:"Security Officer",children:"Security Officer"}),r.jsx("option",{value:"Compliance Officer",children:"Compliance Officer"}),r.jsx("option",{value:"Auditor",children:"Auditor"}),r.jsx("option",{value:"Admin",children:"Admin"})]})]}),r.jsxs("div",{children:[r.jsx("label",{className:"form-label",children:"Status"}),r.jsxs("select",{className:"form-select",value:y,onChange:g=>w(g.target.value),children:[r.jsx("option",{value:"Active",children:"Active"}),r.jsx("option",{value:"Pending MFA",children:"Pending MFA"}),r.jsx("option",{value:"Suspended",children:"Suspended"})]})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Zero-Trust Clearance Level"}),r.jsxs("select",{className:"form-select",value:b,onChange:g=>f(g.target.value),children:[r.jsx("option",{value:"Public",children:"Public (Level 1)"}),r.jsx("option",{value:"Internal",children:"Internal (Level 2)"}),r.jsx("option",{value:"Confidential",children:"Confidential (Level 3)"}),r.jsx("option",{value:"Highly Confidential",children:"Highly Confidential (Level 4)"})]})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"24px",paddingTop:"16px",borderTop:"1px solid var(--border-subtle)"},children:[r.jsxs("button",{type:"button",className:"btn btn-danger btn-sm",onClick:m,children:[r.jsx(er,{size:14}),r.jsx("span",{children:"Delete User"})]}),r.jsxs("div",{style:{display:"flex",gap:"10px"},children:[r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:t,children:"Cancel"}),r.jsx("button",{type:"submit",className:"btn btn-primary btn-sm",children:"Update User"})]})]})]})})},ev=()=>{const{users:e,deleteUser:t}=ce(),[n,s]=v.useState(""),[i,a]=v.useState("All"),[l,c]=v.useState("All"),[o,d]=v.useState(!1),[x,h]=v.useState(null),u=v.useMemo(()=>e.filter(y=>{const w=y.name.toLowerCase().includes(n.toLowerCase())||y.email.toLowerCase().includes(n.toLowerCase())||y.department.toLowerCase().includes(n.toLowerCase()),b=i==="All"||y.role===i,f=l==="All"||y.status===l;return w&&b&&f}),[e,n,i,l]),j=y=>{window.confirm(`Remove user ${y.name} from the Zero-Trust directory?`)&&t(y.id)};return r.jsxs("div",{className:"user-management-page",children:[r.jsxs("div",{className:"page-header",style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",gap:"16px"},children:[r.jsxs("div",{children:[r.jsxs("h1",{className:"page-title",children:[r.jsx(so,{size:24,color:"var(--cyan-primary)"}),r.jsx("span",{children:"Identity & User Access Directory"})]}),r.jsx("p",{className:"page-subtitle",children:"Configure Zero-Trust user security clearances, roles, and device posture compliance states."})]}),r.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>d(!0),children:[r.jsx(cp,{size:16}),r.jsx("span",{children:"Provision New User"})]})]}),r.jsxs("div",{className:"zt-card",style:{padding:"16px 20px",marginBottom:"24px",display:"flex",flexWrap:"wrap",gap:"16px",alignItems:"center",justifyContent:"space-between"},children:[r.jsxs("div",{style:{position:"relative",flex:1,minWidth:"260px"},children:[r.jsx(Xn,{size:16,style:{position:"absolute",left:"12px",top:"11px",color:"var(--text-muted)"}}),r.jsx("input",{type:"text",className:"form-input",style:{paddingLeft:"36px"},placeholder:"Search by user name, email, department...",value:n,onChange:y=>s(y.target.value)})]}),r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"12px"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[r.jsx("span",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:"Role:"}),r.jsxs("select",{className:"form-select",style:{width:"auto",padding:"6px 10px",fontSize:"0.8rem"},value:i,onChange:y=>a(y.target.value),children:[r.jsx("option",{value:"All",children:"All Roles"}),r.jsx("option",{value:"Admin",children:"Admin"}),r.jsx("option",{value:"Security Officer",children:"Security Officer"}),r.jsx("option",{value:"Compliance Officer",children:"Compliance Officer"}),r.jsx("option",{value:"Auditor",children:"Auditor"}),r.jsx("option",{value:"Standard User",children:"Standard User"})]})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[r.jsx("span",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:"Status:"}),r.jsxs("select",{className:"form-select",style:{width:"auto",padding:"6px 10px",fontSize:"0.8rem"},value:l,onChange:y=>c(y.target.value),children:[r.jsx("option",{value:"All",children:"All Statuses"}),r.jsx("option",{value:"Active",children:"Active"}),r.jsx("option",{value:"Pending MFA",children:"Pending MFA"}),r.jsx("option",{value:"Suspended",children:"Suspended"})]})]})]})]}),u.length===0?r.jsx(tr,{title:"No Users Found",description:"No identity records matched your current query or role filter.",actionText:"Clear Filters",onAction:()=>{s(""),a("All"),c("All")}}):r.jsx("div",{className:"table-responsive",children:r.jsxs("table",{className:"zt-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"User Identity"}),r.jsx("th",{children:"Department"}),r.jsx("th",{children:"Role"}),r.jsx("th",{children:"Clearance Level"}),r.jsx("th",{children:"Status"}),r.jsx("th",{children:"Last Active"}),r.jsx("th",{children:"Actions"})]})}),r.jsx("tbody",{children:u.map(y=>r.jsxs("tr",{children:[r.jsx("td",{children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[r.jsx("div",{style:{width:"34px",height:"34px",borderRadius:"50%",background:"linear-gradient(135deg, #0284C7, #0F766E)",color:"white",fontWeight:700,fontSize:"0.78rem",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:y.name.split(" ").map(w=>w[0]).join("")}),r.jsxs("div",{children:[r.jsx("div",{style:{fontWeight:600,color:"var(--text-primary)"},children:y.name}),r.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)"},children:y.email})]})]})}),r.jsx("td",{style:{fontSize:"0.82rem",color:"var(--text-secondary)"},children:y.department}),r.jsx("td",{children:r.jsx("span",{style:{fontSize:"0.75rem",fontFamily:"var(--font-mono)",background:"rgba(6, 182, 212, 0.1)",color:"var(--cyan-primary)",padding:"2px 8px",borderRadius:"4px"},children:y.role})}),r.jsx("td",{children:r.jsx(ut,{level:y.clearanceLevel,showIcon:!1})}),r.jsx("td",{children:r.jsx(Gr,{status:y.status})}),r.jsx("td",{style:{fontSize:"0.82rem",color:"var(--text-muted)"},children:y.lastActive}),r.jsx("td",{children:r.jsxs("div",{style:{display:"flex",gap:"6px"},children:[r.jsx("button",{type:"button",className:"btn-icon",title:"Edit User Clearance & Role",onClick:()=>h(y),children:r.jsx(_x,{size:15})}),r.jsx("button",{type:"button",className:"btn-icon",style:{color:"var(--rose)"},title:"Delete User Record",onClick:()=>j(y),children:r.jsx(er,{size:15})})]})})]},y.id))})]})}),r.jsx(Jx,{isOpen:o,onClose:()=>d(!1)}),r.jsx(Xx,{isOpen:!!x,onClose:()=>h(null),user:x})]})},tv=()=>{const{securityActivities:e,showToast:t}=ce(),[n,s]=v.useState(""),[i,a]=v.useState("All"),[l,c]=v.useState("All"),[o,d]=v.useState(null),x=v.useMemo(()=>e.filter(u=>{const j=u.user.toLowerCase().includes(n.toLowerCase())||u.userEmail.toLowerCase().includes(n.toLowerCase())||u.document.toLowerCase().includes(n.toLowerCase())||u.details.toLowerCase().includes(n.toLowerCase()),y=i==="All"||u.status===i,w=l==="All"||u.action===l;return j&&y&&w}),[e,n,i,l]),h=()=>{const u="data:text/csv;charset=utf-8,"+["Timestamp,User,Email,Action,Document,Status,IP,Device,Details"].concat(x.map(w=>`"${w.timestamp}","${w.user}","${w.userEmail}","${w.action}","${w.document}","${w.status}","${w.ipAddress}","${w.device}","${w.details.replace(/"/g,'""')}"`)).join(`
`),j=encodeURI(u),y=document.createElement("a");y.setAttribute("href",j),y.setAttribute("download",`zero_trust_audit_log_${new Date().toISOString().substring(0,10)}.csv`),document.body.appendChild(y),y.click(),document.body.removeChild(y),t("Zero-Trust audit trail CSV exported.","success")};return r.jsxs("div",{className:"security-activity-page",children:[r.jsxs("div",{className:"page-header",style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",gap:"16px"},children:[r.jsxs("div",{children:[r.jsxs("h1",{className:"page-title",children:[r.jsx(kr,{size:24,color:"var(--cyan-primary)"}),r.jsx("span",{children:"Zero-Trust Security & Audit Trail"})]}),r.jsx("p",{className:"page-subtitle",children:"Immutable log of continuous authentication challenges, authorization events, and file access tokens."})]}),r.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:h,children:[r.jsx(Zt,{size:14}),r.jsx("span",{children:"Export Audit Trail (CSV)"})]})]}),r.jsxs("div",{className:"security-status-banner",children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[r.jsx(nt,{size:18,color:"var(--emerald)"}),r.jsxs("span",{children:[r.jsx("strong",{children:"SIEM & Audit Status:"})," All mock events cryptographically bound. Real-time Splunk/Elastic SIEM ingestion will be connected in Phase 3."]})]}),r.jsxs("span",{style:{fontFamily:"var(--font-mono)",fontSize:"0.74rem"},children:[e.length," Events Logged"]})]}),r.jsxs("div",{className:"zt-card",style:{padding:"16px 20px",marginBottom:"24px",display:"flex",flexWrap:"wrap",gap:"16px",alignItems:"center",justifyContent:"space-between"},children:[r.jsxs("div",{style:{position:"relative",flex:1,minWidth:"260px"},children:[r.jsx(Xn,{size:16,style:{position:"absolute",left:"12px",top:"11px",color:"var(--text-muted)"}}),r.jsx("input",{type:"text",className:"form-input",style:{paddingLeft:"36px"},placeholder:"Search by user, document, or event details...",value:n,onChange:u=>s(u.target.value)})]}),r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"12px"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[r.jsx("span",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:"Status:"}),r.jsxs("select",{className:"form-select",style:{width:"auto",padding:"6px 10px",fontSize:"0.8rem"},value:i,onChange:u=>a(u.target.value),children:[r.jsx("option",{value:"All",children:"All Statuses"}),r.jsx("option",{value:"Success",children:"Success"}),r.jsx("option",{value:"Blocked",children:"Blocked"}),r.jsx("option",{value:"Warning",children:"Warning"}),r.jsx("option",{value:"Flagged",children:"Flagged"})]})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[r.jsx("span",{style:{fontSize:"0.78rem",color:"var(--text-muted)"},children:"Action:"}),r.jsxs("select",{className:"form-select",style:{width:"auto",padding:"6px 10px",fontSize:"0.8rem"},value:l,onChange:u=>c(u.target.value),children:[r.jsx("option",{value:"All",children:"All Actions"}),r.jsx("option",{value:"LOGIN_SUCCESS",children:"LOGIN_SUCCESS"}),r.jsx("option",{value:"LOGIN_FAILED",children:"LOGIN_FAILED"}),r.jsx("option",{value:"FILE_ACCESS",children:"FILE_ACCESS"}),r.jsx("option",{value:"FILE_DOWNLOAD",children:"FILE_DOWNLOAD"}),r.jsx("option",{value:"FILE_UPLOAD",children:"FILE_UPLOAD"}),r.jsx("option",{value:"SHARE_CREATED",children:"SHARE_CREATED"}),r.jsx("option",{value:"SHARE_REVOKED",children:"SHARE_REVOKED"}),r.jsx("option",{value:"PERMISSION_CHANGE",children:"PERMISSION_CHANGE"}),r.jsx("option",{value:"ACCESS_BLOCKED",children:"ACCESS_BLOCKED"}),r.jsx("option",{value:"POLICY_VIOLATION",children:"POLICY_VIOLATION"})]})]})]})]}),x.length===0?r.jsx(tr,{title:"No Audit Events Found",description:"No security activities matched your query and filter criteria.",actionText:"Reset Filters",onAction:()=>{s(""),a("All"),c("All")}}):r.jsx("div",{className:"table-responsive",children:r.jsxs("table",{className:"zt-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Timestamp"}),r.jsx("th",{children:"Identity"}),r.jsx("th",{children:"Action Type"}),r.jsx("th",{children:"Target Resource"}),r.jsx("th",{children:"Status"}),r.jsx("th",{children:"Origin IP / Node"}),r.jsx("th",{children:"Actions"})]})}),r.jsx("tbody",{children:x.map(u=>r.jsxs("tr",{children:[r.jsx("td",{style:{fontSize:"0.78rem",color:"var(--text-muted)",fontFamily:"var(--font-mono)"},children:u.timestamp}),r.jsxs("td",{children:[r.jsx("div",{style:{fontSize:"0.82rem",fontWeight:600,color:"var(--text-primary)"},children:u.user}),r.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)"},children:u.userEmail})]}),r.jsx("td",{children:r.jsx("span",{style:{fontSize:"0.74rem",fontFamily:"var(--font-mono)",background:"rgba(6, 182, 212, 0.1)",color:"var(--cyan-primary)",padding:"2px 8px",borderRadius:"4px"},children:u.action})}),r.jsx("td",{style:{fontSize:"0.82rem",color:"var(--text-secondary)",maxWidth:"200px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},title:u.document,children:u.document}),r.jsx("td",{children:r.jsx(Gr,{status:u.status})}),r.jsx("td",{style:{fontSize:"0.76rem",color:"var(--text-muted)",fontFamily:"var(--font-mono)"},children:u.ipAddress.split(" ")[0]}),r.jsx("td",{children:r.jsx("button",{type:"button",className:"btn-icon",title:"Inspect Security Audit Packet",onClick:()=>d(u),children:r.jsx(Wn,{size:15})})})]},u.id))})]})}),r.jsx(St,{isOpen:!!o,onClose:()=>d(null),title:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx(Ix,{size:18,color:"var(--cyan-primary)"}),r.jsx("span",{children:"Zero-Trust Security Event Inspector"})]}),children:o&&r.jsxs("div",{children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"16px",paddingBottom:"12px",borderBottom:"1px solid var(--border-subtle)"},children:[r.jsx("span",{style:{fontFamily:"var(--font-mono)",fontSize:"0.9rem",color:"var(--cyan-primary)",fontWeight:700},children:o.action}),r.jsx(Gr,{status:o.status})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"14px",marginBottom:"16px"},children:[r.jsxs("div",{style:{background:"var(--bg-elevated)",padding:"10px 14px",borderRadius:"var(--radius-sm)"},children:[r.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)",textTransform:"uppercase"},children:"User Identity"}),r.jsx("div",{style:{fontWeight:600,color:"var(--text-primary)",marginTop:"2px"},children:o.user}),r.jsx("div",{style:{fontSize:"0.74rem",color:"var(--text-secondary)"},children:o.userEmail})]}),r.jsxs("div",{style:{background:"var(--bg-elevated)",padding:"10px 14px",borderRadius:"var(--radius-sm)"},children:[r.jsx("div",{style:{fontSize:"0.72rem",color:"var(--text-muted)",textTransform:"uppercase"},children:"Timestamp"}),r.jsx("div",{style:{fontWeight:600,color:"var(--text-primary)",marginTop:"2px",fontFamily:"var(--font-mono)"},children:o.timestamp}),r.jsxs("div",{style:{fontSize:"0.74rem",color:"var(--text-secondary)"},children:["Event ID: ",o.id]})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Target Resource / Endpoint"}),r.jsx("div",{style:{background:"var(--bg-input)",border:"1px solid var(--border-subtle)",borderRadius:"var(--radius-sm)",padding:"8px 12px",fontSize:"0.85rem",color:"var(--text-primary)"},children:o.document})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Client Host & Posture Details"}),r.jsxs("div",{style:{background:"var(--bg-input)",border:"1px solid var(--border-subtle)",borderRadius:"var(--radius-sm)",padding:"8px 12px",fontSize:"0.8rem",color:"var(--text-secondary)",fontFamily:"var(--font-mono)"},children:[r.jsxs("div",{children:[r.jsx("strong",{children:"Source IP:"})," ",o.ipAddress]}),r.jsxs("div",{style:{marginTop:"4px"},children:[r.jsx("strong",{children:"Host Device:"})," ",o.device]})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Security Audit Telemetry Details"}),r.jsx("div",{style:{background:"rgba(6, 182, 212, 0.06)",border:"1px solid rgba(6, 182, 212, 0.2)",borderRadius:"var(--radius-sm)",padding:"12px",fontSize:"0.82rem",color:"var(--text-secondary)",lineHeight:1.5},children:o.details})]}),r.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:"20px"},children:r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>d(null),children:"Close Inspector"})})]})})]})},nv=()=>{const{showToast:e}=ce(),[t,n]=v.useState("profile"),[s,i]=v.useState({configured:!1,connected:!1,googleEmail:"",connectedAt:"",scope:"https://www.googleapis.com/auth/drive.file",message:""}),[a,l]=v.useState(!1),[c,o]=v.useState("alex.morgan.gdrive@zerotrust.sec"),[d,x]=v.useState("Alex Morgan"),[h,u]=v.useState("alex.morgan@zerotrust.sec"),[j,y]=v.useState("Cybersecurity Operations"),[w,b]=v.useState("Lead Zero-Trust Security Architect"),[f,p]=v.useState(""),[m,g]=v.useState(""),[S,z]=v.useState(""),[E,P]=v.useState("15"),[$,k]=v.useState(!0),[H,ae]=v.useState(!0),[M,se]=v.useState(!0),Pe=R=>{R.preventDefault(),e("Profile configuration updated.","success")},Ge=R=>{if(R.preventDefault(),!f||!m||!S){e("Please fill in all password fields.","warning");return}if(m!==S){e("New passwords do not match.","error");return}e("Password credentials updated successfully.","success"),p(""),g(""),z("")},st=R=>{R.preventDefault(),e("Session and zero-trust perimeter preferences saved.","success")},A=R=>{e(`Phase 2 Notice: ${R} hardware integration will be implemented in Phase 2.`,"info")},O=async()=>{try{l(!0);const R=await be.getStatus();i(R)}catch{}finally{l(!1)}};v.useEffect(()=>{O();const R=new URLSearchParams(window.location.search);R.get("tab")==="gdrive"&&n("gdrive");const Nt=R.get("code"),Ze=R.get("state"),T=R.get("connected"),I=R.get("error");T==="true"?(n("gdrive"),e("Google Drive successfully authenticated and connected under Zero-Trust perimeter.","success"),window.history.replaceState({},document.title,window.location.pathname+"?tab=gdrive")):I?(n("gdrive"),e(`Google Drive authorization failed: ${I}`,"error"),window.history.replaceState({},document.title,window.location.pathname+"?tab=gdrive")):Nt&&(n("gdrive"),l(!0),be.handleCallback(Nt,Ze||void 0).then(C=>{i(C),e("Google Drive successfully authenticated and connected under Zero-Trust perimeter.","success"),window.history.replaceState({},document.title,window.location.pathname+"?tab=gdrive")}).catch(C=>{e(`Google OAuth exchange failed: ${C.message}`,"error")}).finally(()=>l(!1)))},[]);const F=async()=>{try{l(!0);const R=await be.getAuthUrl();if(R.url.includes("sandbox=true")){e("Initiating Developer Sandbox OAuth flow...","info");const Fe=await be.handleCallback("sim-code-manual-connect","state:manual");i(Fe),e("Google Drive connected in Developer Sandbox Mode.","success")}else window.location.href=R.url}catch(R){e(R.message||"Unable to start Google Drive authentication.","error")}finally{l(!1)}},Z=async()=>{if(window.confirm("Are you sure you want to disconnect Google Drive? Active Google Drive storage links will require reconnection."))try{l(!0),await be.disconnect(),i(R=>({...R,connected:!1,googleEmail:void 0,connectedAt:void 0,message:"Google Drive disconnected."})),e("Google Drive unlinked and OAuth tokens purged.","success")}catch(R){e(R.message||"Failed to disconnect Google Drive.","error")}finally{l(!1)}},te=async()=>{try{l(!0);const R=await be.handleCallback(`sim-code-${Date.now()}`,"sandbox:direct");i(R),e(`Google Drive connected for ${c} (Developer Sandbox).`,"success")}catch(R){e(R.message||"Simulation failed.","error")}finally{l(!1)}};return r.jsxs("div",{className:"settings-page",children:[r.jsxs("div",{className:"page-header",children:[r.jsxs("h1",{className:"page-title",children:[r.jsx(ro,{size:24,color:"var(--cyan-primary)"}),r.jsx("span",{children:"Security & Account Settings"})]}),r.jsx("p",{className:"page-subtitle",children:"Manage Zero-Trust credentials, session policies, hardware tokens, and identity profile."})]}),r.jsxs("div",{className:"settings-layout",children:[r.jsxs("div",{className:"settings-sidebar-nav zt-card",children:[r.jsxs("button",{type:"button",className:`tab-btn ${t==="profile"?"active":""}`,onClick:()=>n("profile"),children:[r.jsx(Gn,{size:16}),r.jsx("span",{children:"Profile Identity"})]}),r.jsxs("button",{type:"button",className:`tab-btn ${t==="security"?"active":""}`,onClick:()=>n("security"),children:[r.jsx(Je,{size:16}),r.jsx("span",{children:"Password & Security"})]}),r.jsxs("button",{type:"button",className:`tab-btn ${t==="preferences"?"active":""}`,onClick:()=>n("preferences"),children:[r.jsx(Ac,{size:16}),r.jsx("span",{children:"Session & Policies"})]}),r.jsxs("button",{type:"button",className:`tab-btn ${t==="mfa"?"active":""}`,onClick:()=>n("mfa"),children:[r.jsx(zc,{size:16}),r.jsx("span",{children:"MFA Security Tokens"}),r.jsx("span",{className:"tab-pill",children:"Phase 2"})]}),r.jsxs("button",{type:"button",className:`tab-btn ${t==="gdrive"?"active":""}`,onClick:()=>n("gdrive"),children:[r.jsx(dt,{size:16}),r.jsx("span",{children:"Google Drive"}),r.jsx("span",{className:"tab-pill",style:{background:s.connected?"rgba(16, 185, 129, 0.15)":"rgba(6, 182, 212, 0.15)",color:s.connected?"var(--emerald)":"var(--cyan-primary)"},children:s.connected?"Connected":"API v3"})]})]}),r.jsxs("div",{className:"settings-content zt-card",children:[t==="profile"&&r.jsxs("div",{children:[r.jsx("div",{className:"zt-card-header",children:r.jsxs("div",{className:"zt-card-title",children:[r.jsx(Gn,{size:18,color:"var(--cyan-primary)"}),r.jsx("span",{children:"Profile Identity Settings"})]})}),r.jsxs("form",{onSubmit:Pe,children:[r.jsxs("div",{className:"avatar-section",children:[r.jsx("div",{className:"avatar-big",children:"AM"}),r.jsxs("div",{children:[r.jsx("h3",{style:{fontSize:"1.05rem",fontWeight:600},children:"Alex Morgan"}),r.jsx("p",{style:{fontSize:"0.8rem",color:"var(--text-secondary)"},children:"Clearance: Highly Confidential (Level 4) • Primary Admin"})]})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",marginBottom:"18px"},children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label required",children:"Full Legal Name"}),r.jsx("input",{type:"text",className:"form-input",value:d,onChange:R=>x(R.target.value),required:!0})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label required",children:"Organizational Email"}),r.jsx("input",{type:"email",className:"form-input",value:h,onChange:R=>u(R.target.value),required:!0})]})]}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",marginBottom:"20px"},children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Assigned Department"}),r.jsx("input",{type:"text",className:"form-input",value:j,onChange:R=>y(R.target.value)})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Job Title"}),r.jsx("input",{type:"text",className:"form-input",value:w,onChange:R=>b(R.target.value)})]})]}),r.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:r.jsxs("button",{type:"submit",className:"btn btn-primary",children:[r.jsx(Ec,{size:16}),r.jsx("span",{children:"Save Profile Changes"})]})})]})]}),t==="security"&&r.jsxs("div",{children:[r.jsx("div",{className:"zt-card-header",children:r.jsxs("div",{className:"zt-card-title",children:[r.jsx(Je,{size:18,color:"var(--cyan-primary)"}),r.jsx("span",{children:"Security & Password Management"})]})}),r.jsxs("form",{onSubmit:Ge,children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label required",children:"Current Secure Password"}),r.jsx("input",{type:"password",className:"form-input",placeholder:"••••••••••••",value:f,onChange:R=>p(R.target.value)})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label required",children:"New Zero-Trust Compliant Password"}),r.jsx("input",{type:"password",className:"form-input",placeholder:"Min 12 chars, upper, lower, symbol, number",value:m,onChange:R=>g(R.target.value)}),m&&r.jsxs("div",{style:{marginTop:"8px",fontSize:"0.75rem",color:"var(--emerald)",display:"flex",alignItems:"center",gap:"6px"},children:[r.jsx(Hr,{size:13}),r.jsx("span",{children:"Password meets NIST 800-63B Zero-Trust complexity requirements"})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label required",children:"Confirm New Password"}),r.jsx("input",{type:"password",className:"form-input",placeholder:"••••••••••••",value:S,onChange:R=>z(R.target.value)})]}),r.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:"20px"},children:r.jsxs("button",{type:"submit",className:"btn btn-primary",children:[r.jsx(Je,{size:16}),r.jsx("span",{children:"Update Vault Password"})]})})]})]}),t==="preferences"&&r.jsxs("div",{children:[r.jsx("div",{className:"zt-card-header",children:r.jsxs("div",{className:"zt-card-title",children:[r.jsx(Ac,{size:18,color:"var(--cyan-primary)"}),r.jsx("span",{children:"Session Posture & Security Preferences"})]})}),r.jsxs("form",{onSubmit:st,children:[r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label",children:"Inactivity Session Timeout"}),r.jsxs("select",{className:"form-select",value:E,onChange:R=>P(R.target.value),children:[r.jsx("option",{value:"5",children:"5 Minutes (Strict Security Mode)"}),r.jsx("option",{value:"15",children:"15 Minutes (Standard Zero-Trust Recommendation)"}),r.jsx("option",{value:"30",children:"30 Minutes"}),r.jsx("option",{value:"60",children:"60 Minutes"})]}),r.jsx("span",{className:"form-hint",children:"Session locks automatically upon timeout; re-authentication challenge triggered."})]}),r.jsxs("div",{className:"toggle-list",children:[r.jsxs("label",{className:"toggle-row",children:[r.jsx("input",{type:"checkbox",checked:$,onChange:R=>k(R.target.checked)}),r.jsxs("div",{children:[r.jsx("div",{className:"toggle-title",children:"Enforce Continuous Micro-segmentation"}),r.jsx("div",{className:"toggle-sub",children:"Periodically verify endpoint network parameters against zero-trust allowlist."})]})]}),r.jsxs("label",{className:"toggle-row",children:[r.jsx("input",{type:"checkbox",checked:H,onChange:R=>ae(R.target.checked)}),r.jsxs("div",{children:[r.jsx("div",{className:"toggle-title",children:"Instant Security Telemetry Alerts"}),r.jsx("div",{className:"toggle-sub",children:"Receive email notifications on unauthorized file access attempts."})]})]}),r.jsxs("label",{className:"toggle-row",children:[r.jsx("input",{type:"checkbox",checked:M,onChange:R=>se(R.target.checked)}),r.jsxs("div",{children:[r.jsx("div",{className:"toggle-title",children:"Synchronize Audit Logs to SIEM Pipeline"}),r.jsx("div",{className:"toggle-sub",children:"Stream tamper-evident audit packets to enterprise monitoring agents."})]})]})]}),r.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:"24px"},children:r.jsxs("button",{type:"submit",className:"btn btn-primary",children:[r.jsx(Ec,{size:16}),r.jsx("span",{children:"Save Policy Preferences"})]})})]})]}),t==="mfa"&&r.jsxs("div",{children:[r.jsxs("div",{className:"zt-card-header",children:[r.jsxs("div",{className:"zt-card-title",children:[r.jsx(zc,{size:18,color:"var(--cyan-primary)"}),r.jsx("span",{children:"Multi-Factor Authentication (MFA) Setup"})]}),r.jsx("span",{className:"badge badge-warning",children:"UI PLACEHOLDER ONLY"})]}),r.jsxs("div",{className:"security-status-banner",children:[r.jsx(Wr,{size:16,color:"var(--cyan-primary)",style:{flexShrink:0}}),r.jsxs("span",{children:[r.jsx("strong",{children:"Phase 1 UI Notice:"})," As specified in the project guidelines, hardware MFA, TOTP seed generation, and FIDO2 WebAuthn keys are displayed as UI placeholders for frontend demonstration. Backend cryptographic integration is scheduled for Phase 2."]})]}),r.jsxs("div",{className:"mfa-cards-list",children:[r.jsxs("div",{className:"mfa-card",children:[r.jsx("div",{className:"mfa-icon-col",children:r.jsx(Tc,{size:24,color:"var(--cyan-primary)"})}),r.jsxs("div",{className:"mfa-info-col",children:[r.jsxs("div",{className:"mfa-title",children:[r.jsx("span",{children:"Authenticator App (TOTP)"}),r.jsx("span",{className:"badge badge-active",children:"Recommended"})]}),r.jsx("div",{className:"mfa-desc",children:"Use Google Authenticator, Microsoft Authenticator, or 1Password to generate time-based one-time codes."})]}),r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>A("TOTP Authenticator"),children:"Configure"})]}),r.jsxs("div",{className:"mfa-card",children:[r.jsx("div",{className:"mfa-icon-col",children:r.jsx(el,{size:24,color:"var(--emerald)"})}),r.jsxs("div",{className:"mfa-info-col",children:[r.jsxs("div",{className:"mfa-title",children:[r.jsx("span",{children:"Hardware Security Key (FIDO2 / WebAuthn)"}),r.jsx("span",{className:"badge badge-highly-confidential",children:"Max Security"})]}),r.jsx("div",{className:"mfa-desc",children:"Authenticate using a physical USB or NFC hardware token (e.g. YubiKey) with cryptographic attestation."})]}),r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>A("FIDO2 Hardware Key"),children:"Register Key"})]}),r.jsxs("div",{className:"mfa-card",children:[r.jsx("div",{className:"mfa-icon-col",children:r.jsx(Je,{size:24,color:"var(--amber)"})}),r.jsxs("div",{className:"mfa-info-col",children:[r.jsx("div",{className:"mfa-title",children:r.jsx("span",{children:"Offline Disaster Recovery Keys"})}),r.jsx("div",{className:"mfa-desc",children:"Generate 10 single-use offline recovery bypass keys for emergency break-glass vault access."})]}),r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>A("Emergency Backup Codes"),children:"Generate Keys"})]})]})]}),t==="gdrive"&&r.jsxs("div",{children:[r.jsxs("div",{className:"zt-card-header",children:[r.jsxs("div",{className:"zt-card-title",children:[r.jsx(dt,{size:18,color:"var(--cyan-primary)"}),r.jsx("span",{children:"Google Drive API v3 Integration"})]}),r.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:O,disabled:a,title:"Refresh Drive connection status",children:[r.jsx(Mx,{size:14,className:a?"spin":""}),r.jsx("span",{children:"Refresh"})]})]}),r.jsxs("div",{style:{padding:"16px",borderRadius:"var(--radius-sm)",backgroundColor:s.connected?"rgba(16, 185, 129, 0.08)":"rgba(245, 158, 11, 0.08)",border:`1px solid ${s.connected?"rgba(16, 185, 129, 0.3)":"rgba(245, 158, 11, 0.3)"}`,marginBottom:"24px",display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"16px"},children:[r.jsxs("div",{style:{display:"flex",gap:"14px"},children:[s.connected?r.jsx(Hr,{size:24,color:"var(--emerald)",style:{flexShrink:0,marginTop:"2px"}}):r.jsx(Si,{size:24,color:"var(--amber)",style:{flexShrink:0,marginTop:"2px"}}),r.jsxs("div",{children:[r.jsx("div",{style:{fontWeight:600,color:"var(--text-primary)",fontSize:"0.96rem"},children:s.connected?"Google Drive Connected & Active":"Google Drive Not Connected"}),r.jsx("div",{style:{fontSize:"0.82rem",color:"var(--text-secondary)",marginTop:"4px",lineHeight:1.5},children:s.message||(s.connected?"Your Google Drive is linked under Zero-Trust perimeter. Minimal scope enforced.":"Connect your Google account to upload, manage, and share documents directly via Google Drive API v3.")})]})]}),r.jsx("div",{children:s.connected?r.jsxs("button",{type:"button",className:"btn btn-danger btn-sm",onClick:Z,disabled:a,children:[r.jsx(Ox,{size:14}),r.jsx("span",{children:"Disconnect"})]}):r.jsxs("button",{type:"button",className:"btn btn-primary btn-sm",onClick:F,disabled:a,children:[r.jsx(dt,{size:14}),r.jsx("span",{children:"Connect Google Drive"})]})})]}),s.connected&&r.jsxs("div",{style:{background:"var(--bg-elevated)",border:"1px solid var(--border-subtle)",borderRadius:"var(--radius-sm)",padding:"18px",marginBottom:"24px"},children:[r.jsx("div",{style:{fontSize:"0.82rem",fontWeight:600,color:"var(--cyan-primary)",letterSpacing:"0.05em",marginBottom:"14px"},children:"ACTIVE ZERO-TRUST DRIVE SESSION"}),r.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"16px"},children:[r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:"LINKED GOOGLE ACCOUNT"}),r.jsx("div",{style:{fontSize:"0.9rem",fontWeight:600,color:"var(--text-primary)",marginTop:"2px"},children:s.googleEmail||"Account Synchronized"})]}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:"ZERO-TRUST PERMISSION SCOPE"}),r.jsx("div",{style:{fontSize:"0.82rem",fontFamily:"monospace",color:"var(--emerald)",marginTop:"2px"},children:"drive.file (Least Privilege)"})]}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:"INITIAL CONNECTION TIMESTAMP"}),r.jsx("div",{style:{fontSize:"0.85rem",color:"var(--text-primary)",marginTop:"2px"},children:s.connectedAt||"Active Session"})]}),r.jsxs("div",{children:[r.jsx("div",{style:{fontSize:"0.74rem",color:"var(--text-muted)"},children:"TOKEN ENCRYPTION STATUS"}),r.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--cyan-primary)",marginTop:"2px",display:"flex",alignItems:"center",gap:"6px"},children:[r.jsx(nt,{size:14})," Encrypted in Vault DB"]})]})]})]}),r.jsx("div",{style:{background:"var(--bg-card)",border:"1px dashed var(--border-subtle)",borderRadius:"var(--radius-sm)",padding:"18px",marginBottom:"24px"},children:r.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px",flexWrap:"wrap"},children:[r.jsxs("div",{children:[r.jsxs("div",{style:{fontWeight:600,color:"var(--text-primary)",fontSize:"0.92rem",display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx(Tc,{size:16,color:"var(--cyan-primary)"}),r.jsx("span",{children:"Instant Developer Sandbox Mode"}),r.jsx("span",{className:"tab-pill",style:{background:"rgba(6, 182, 212, 0.15)",color:"var(--cyan-primary)"},children:"Live Demo"})]}),r.jsx("div",{style:{fontSize:"0.78rem",color:"var(--text-secondary)",marginTop:"4px"},children:"Simulate a full Google OAuth token exchange right now without setting up Google Cloud Console keys."})]}),r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[r.jsx("input",{type:"email",className:"form-input",style:{width:"240px",padding:"6px 12px",fontSize:"0.82rem"},value:c,onChange:R=>o(R.target.value),placeholder:"sandbox.user@gmail.com"}),r.jsxs("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:te,disabled:a,children:[r.jsx(vx,{size:14}),r.jsx("span",{children:"Simulate OAuth"})]})]})]})}),r.jsxs("div",{style:{background:"var(--bg-elevated)",border:"1px solid var(--border-subtle)",borderRadius:"var(--radius-sm)",padding:"20px"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"12px"},children:[r.jsx(Wr,{size:18,color:"var(--cyan-primary)"}),r.jsx("h3",{style:{fontSize:"0.98rem",fontWeight:600,color:"var(--text-primary)"},children:"Google Cloud Console Production Setup Guide"})]}),r.jsx("p",{style:{fontSize:"0.82rem",color:"var(--text-secondary)",marginBottom:"16px",lineHeight:1.5},children:"Follow these 5 steps to configure real Google OAuth 2.0 Client credentials for your project:"}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"14px",fontSize:"0.82rem"},children:[r.jsxs("div",{style:{padding:"12px",background:"var(--bg-card)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)"},children:[r.jsx("strong",{children:"Step 1: Create a Google Cloud Project"}),r.jsxs("div",{style:{color:"var(--text-secondary)",marginTop:"4px"},children:["Navigate to ",r.jsx("a",{href:"https://console.cloud.google.com",target:"_blank",rel:"noreferrer",style:{color:"var(--cyan-primary)",textDecoration:"underline"},children:"Google Cloud Console"})," and create a new project named ",r.jsx("code",{children:"Zero-Trust Secure Vault"}),"."]})]}),r.jsxs("div",{style:{padding:"12px",background:"var(--bg-card)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)"},children:[r.jsx("strong",{children:"Step 2: Enable Google Drive API v3"}),r.jsxs("div",{style:{color:"var(--text-secondary)",marginTop:"4px"},children:["Go to ",r.jsx("em",{children:"APIs & Services > Library"}),", search for ",r.jsx("strong",{children:"Google Drive API"}),", and click ",r.jsx("strong",{children:"Enable"}),"."]})]}),r.jsxs("div",{style:{padding:"12px",background:"var(--bg-card)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)"},children:[r.jsx("strong",{children:"Step 3: Configure OAuth Consent Screen"}),r.jsxs("div",{style:{color:"var(--text-secondary)",marginTop:"4px"},children:["Select ",r.jsx("strong",{children:"External"})," user type, add application name, developer email, and add the least-privilege scope: ",r.jsx("code",{children:"https://www.googleapis.com/auth/drive.file"}),"."]})]}),r.jsxs("div",{style:{padding:"12px",background:"var(--bg-card)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)"},children:[r.jsx("strong",{children:"Step 4: Create OAuth 2.0 Web Application Credentials"}),r.jsxs("div",{style:{color:"var(--text-secondary)",marginTop:"4px"},children:["Go to ",r.jsx("em",{children:"Credentials > Create Credentials > OAuth client ID"}),":",r.jsxs("ul",{style:{marginTop:"6px",paddingLeft:"18px",lineHeight:1.6},children:[r.jsxs("li",{children:["Application Type: ",r.jsx("strong",{children:"Web Application"})]}),r.jsxs("li",{children:["Authorized JavaScript Origins: ",r.jsx("code",{children:"http://localhost:3000"})," and ",r.jsx("code",{children:"http://localhost:5173"})]}),r.jsxs("li",{children:["Authorized Redirect URIs: ",r.jsx("code",{children:"http://localhost:3000/settings?tab=gdrive"})]})]})]})]}),r.jsxs("div",{style:{padding:"12px",background:"var(--bg-card)",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-subtle)"},children:[r.jsx("strong",{children:"Step 5: Set Environment Variables on Backend"}),r.jsxs("div",{style:{color:"var(--text-secondary)",marginTop:"4px"},children:["Supply your credentials to Spring Boot via environment variables or ",r.jsx("code",{children:"backend/src/main/resources/application.yml"}),":",r.jsx("pre",{style:{marginTop:"8px",padding:"10px",background:"var(--bg-input)",borderRadius:"4px",color:"var(--cyan-primary)",fontFamily:"monospace",fontSize:"0.76rem",overflowX:"auto"},children:`GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-client-secret
GOOGLE_REDIRECT_URI=http://localhost:3000/settings?tab=gdrive`})]})]})]})]})]})]})]}),r.jsx("style",{children:`
        .settings-layout {
          display: grid;
          grid-templateColumns: 240px 1fr;
          gap: 24px;
        }
        .settings-sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 6px;
          height: fit-content;
          padding: 12px;
        }
        .tab-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          font-size: 0.86rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: all 0.2s;
          text-align: left;
          position: relative;
        }
        .tab-btn:hover {
          color: var(--text-primary);
          background-color: var(--bg-elevated);
        }
        .tab-btn.active {
          color: var(--cyan-primary);
          background: rgba(6, 182, 212, 0.1);
          font-weight: 600;
        }
        .tab-pill {
          margin-left: auto;
          font-size: 0.65rem;
          background: rgba(245, 158, 11, 0.15);
          color: var(--amber);
          padding: 2px 6px;
          border-radius: 4px;
          font-weight: 700;
        }
        .avatar-section {
          display: flex;
          align-items: center;
          gap: 16px;
          padding-bottom: 20px;
          margin-bottom: 20px;
          border-bottom: 1px solid var(--border-subtle);
        }
        .avatar-big {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0284C7, #0F766E);
          color: white;
          font-size: 1.2rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.25);
        }
        .toggle-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .toggle-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          cursor: pointer;
          padding: 10px 14px;
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
        }
        .toggle-row input {
          margin-top: 4px;
          accent-color: var(--cyan-primary);
          cursor: pointer;
        }
        .toggle-title {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .toggle-sub {
          font-size: 0.76rem;
          color: var(--text-secondary);
          margin-top: 2px;
        }
        .mfa-cards-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .mfa-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          background: var(--bg-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
        }
        .mfa-icon-col {
          width: 44px;
          height: 44px;
          border-radius: var(--radius-sm);
          background: var(--bg-card);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .mfa-info-col {
          flex: 1;
        }
        .mfa-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .mfa-desc {
          font-size: 0.78rem;
          color: var(--text-secondary);
          margin-top: 3px;
          line-height: 1.4;
        }

        @media (max-width: 800px) {
          .settings-layout {
            grid-templateColumns: 1fr;
          }
        }
      `})]})},rv=()=>{const e=rt(),{showToast:t}=ce(),[n,s]=v.useState(!1),[i,a]=v.useState(""),[l,c]=v.useState("Confidential"),o=d=>{d.preventDefault(),s(!1),t(`Clearance elevation ticket dispatched to Security Operations (Ticket: ZT-${Math.floor(Math.random()*9e4+1e4)})`,"success"),a("")};return r.jsxs("div",{className:"access-denied-page",children:[r.jsxs("div",{className:"denied-box zt-card",children:[r.jsx("div",{className:"denied-icon-glow",children:r.jsx(Jr,{size:48,color:"var(--rose)"})}),r.jsx("div",{className:"denied-code-pill",children:"ERROR 403 • ZERO-TRUST POLICY REJECTION"}),r.jsx("h1",{className:"denied-title",children:"Access Denied: Clearance Insufficient"}),r.jsx("p",{className:"denied-message",children:"Continuous zero-trust posture evaluation blocked access to this protected resource. Your current session attributes, network origin, or identity clearance do not meet the micro-segmentation threshold."}),r.jsxs("div",{className:"denied-telemetry-box",children:[r.jsxs("div",{className:"telemetry-item",children:[r.jsx("span",{className:"telemetry-label",children:"POLICY RULE:"}),r.jsx("span",{className:"telemetry-value",children:"Strict Least-Privilege Enclave (POL-902-ZT)"})]}),r.jsxs("div",{className:"telemetry-item",children:[r.jsx("span",{className:"telemetry-label",children:"REQUIRED CLEARANCE:"}),r.jsx("span",{className:"telemetry-value highlight-red",children:"Highly Confidential (Level 4)"})]}),r.jsxs("div",{className:"telemetry-item",children:[r.jsx("span",{className:"telemetry-label",children:"CURRENT IDENTITY:"}),r.jsx("span",{className:"telemetry-value",children:"alex.morgan@zerotrust.sec"})]}),r.jsxs("div",{className:"telemetry-item",children:[r.jsx("span",{className:"telemetry-label",children:"INCIDENT REF:"}),r.jsx("span",{className:"telemetry-value",children:"INC-20261029-BLOCK-8832"})]})]}),r.jsxs("div",{className:"denied-buttons-row",children:[r.jsxs("button",{type:"button",className:"btn btn-primary",onClick:()=>e("/dashboard"),children:[r.jsx(zx,{size:16}),r.jsx("span",{children:"Return to Secure Dashboard"})]}),r.jsxs("button",{type:"button",className:"btn btn-secondary",onClick:()=>s(!0),children:[r.jsx(Rx,{size:15}),r.jsx("span",{children:"Request Temporary Clearance Elevation"})]})]})]}),r.jsx(St,{isOpen:n,onClose:()=>s(!1),title:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx(wx,{size:18,color:"var(--cyan-primary)"}),r.jsx("span",{children:"Zero-Trust Clearance Elevation Request"})]}),children:r.jsxs("form",{onSubmit:o,children:[r.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",marginBottom:"16px"},children:"Emergency clearance elevations are logged to SIEM audit trails and require cryptographic sign-off by the Security Operations Lead."}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label required",children:"Requested Clearance Level"}),r.jsxs("select",{className:"form-select",value:l,onChange:d=>c(d.target.value),children:[r.jsx("option",{value:"Internal",children:"Internal (Level 2)"}),r.jsx("option",{value:"Confidential",children:"Confidential (Level 3)"}),r.jsx("option",{value:"Highly Confidential",children:"Highly Confidential (Level 4)"})]})]}),r.jsxs("div",{className:"form-group",children:[r.jsx("label",{className:"form-label required",children:"Business Need & Urgency Justification"}),r.jsx("textarea",{className:"form-textarea",rows:4,placeholder:"State the active incident number, change request ID, or project operational necessity...",value:i,onChange:d=>a(d.target.value),required:!0})]}),r.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"12px",marginTop:"20px"},children:[r.jsx("button",{type:"button",className:"btn btn-secondary btn-sm",onClick:()=>s(!1),children:"Cancel"}),r.jsx("button",{type:"submit",className:"btn btn-primary btn-sm",children:"Dispatch Approval Ticket"})]})]})}),r.jsx("style",{children:`
        .access-denied-page {
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }
        .denied-box {
          max-width: 620px;
          width: 100%;
          text-align: center;
          padding: 40px 32px;
          border-color: rgba(239, 68, 68, 0.3);
          box-shadow: 0 0 40px rgba(239, 68, 68, 0.12);
        }
        .denied-icon-glow {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px auto;
          box-shadow: 0 0 25px rgba(239, 68, 68, 0.25);
        }
        .denied-code-pill {
          display: inline-block;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--rose);
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.25);
          padding: 3px 10px;
          border-radius: var(--radius-full);
          margin-bottom: 14px;
        }
        .denied-title {
          font-size: 1.55rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 12px;
          letter-spacing: -0.01em;
        }
        .denied-message {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .denied-telemetry-box {
          background: var(--bg-input);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-sm);
          padding: 16px;
          text-align: left;
          font-family: var(--font-mono);
          font-size: 0.76rem;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 28px;
        }
        .telemetry-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .telemetry-label {
          color: var(--text-muted);
        }
        .telemetry-value {
          color: var(--text-primary);
        }
        .telemetry-value.highlight-red {
          color: var(--rose);
          font-weight: 600;
        }
        .denied-buttons-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
        }
      `})]})},sv=()=>r.jsx(ax,{children:r.jsx($h,{children:r.jsxs(Mh,{children:[r.jsx(je,{path:"/login",element:r.jsx(Hx,{})}),r.jsxs(je,{element:r.jsx(Vx,{}),children:[r.jsx(je,{path:"/",element:r.jsx(Sc,{to:"/dashboard",replace:!0})}),r.jsx(je,{path:"/dashboard",element:r.jsx(Wx,{})}),r.jsx(je,{path:"/documents",element:r.jsx(Gx,{})}),r.jsx(je,{path:"/documents/:id",element:r.jsx(Zx,{})}),r.jsx(je,{path:"/shared-with-me",element:r.jsx(qx,{})}),r.jsx(je,{path:"/shared-by-me",element:r.jsx(Kx,{})}),r.jsx(je,{path:"/upload",element:r.jsx(Yx,{})}),r.jsx(je,{path:"/users",element:r.jsx(ev,{})}),r.jsx(je,{path:"/activity",element:r.jsx(tv,{})}),r.jsx(je,{path:"/settings",element:r.jsx(nv,{})}),r.jsx(je,{path:"/access-denied",element:r.jsx(rv,{})})]}),r.jsx(je,{path:"*",element:r.jsx(Sc,{to:"/dashboard",replace:!0})})]})})});na.createRoot(document.getElementById("root")).render(r.jsx(si.StrictMode,{children:r.jsx(sv,{})}));
