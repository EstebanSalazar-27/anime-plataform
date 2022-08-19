var J2=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var NF=J2((pt,mt)=>{const Z2=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}};Z2();function ek(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var S={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vo=Symbol.for("react.element"),tk=Symbol.for("react.portal"),nk=Symbol.for("react.fragment"),rk=Symbol.for("react.strict_mode"),ik=Symbol.for("react.profiler"),sk=Symbol.for("react.provider"),ok=Symbol.for("react.context"),ak=Symbol.for("react.forward_ref"),lk=Symbol.for("react.suspense"),uk=Symbol.for("react.memo"),ck=Symbol.for("react.lazy"),Qm=Symbol.iterator;function fk(t){return t===null||typeof t!="object"?null:(t=Qm&&t[Qm]||t["@@iterator"],typeof t=="function"?t:null)}var B0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},H0=Object.assign,W0={};function os(t,e,n){this.props=t,this.context=e,this.refs=W0,this.updater=n||B0}os.prototype.isReactComponent={};os.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};os.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function G0(){}G0.prototype=os.prototype;function yd(t,e,n){this.props=t,this.context=e,this.refs=W0,this.updater=n||B0}var wd=yd.prototype=new G0;wd.constructor=yd;H0(wd,os.prototype);wd.isPureReactComponent=!0;var Xm=Array.isArray,K0=Object.prototype.hasOwnProperty,Ed={current:null},q0={key:!0,ref:!0,__self:!0,__source:!0};function Y0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)K0.call(e,r)&&!q0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Vo,type:t,key:s,ref:o,props:i,_owner:Ed.current}}function hk(t,e){return{$$typeof:Vo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Sd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Vo}function dk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Jm=/\/+/g;function Sc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?dk(""+t.key):e.toString(36)}function Ha(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Vo:case tk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Sc(o,0):r,Xm(i)?(n="",t!=null&&(n=t.replace(Jm,"$&/")+"/"),Ha(i,e,n,"",function(u){return u})):i!=null&&(Sd(i)&&(i=hk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Jm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Xm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Sc(s,a);o+=Ha(s,e,n,l,i)}else if(l=fk(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Sc(s,a++),o+=Ha(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ya(t,e,n){if(t==null)return t;var r=[],i=0;return Ha(t,r,"","",function(s){return e.call(n,s,i++)}),r}function pk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var tt={current:null},Wa={transition:null},mk={ReactCurrentDispatcher:tt,ReactCurrentBatchConfig:Wa,ReactCurrentOwner:Ed};q.Children={map:ya,forEach:function(t,e,n){ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ya(t,function(){e++}),e},toArray:function(t){return ya(t,function(e){return e})||[]},only:function(t){if(!Sd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};q.Component=os;q.Fragment=nk;q.Profiler=ik;q.PureComponent=yd;q.StrictMode=rk;q.Suspense=lk;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mk;q.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=H0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ed.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)K0.call(e,l)&&!q0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Vo,type:t.type,key:i,ref:s,props:r,_owner:o}};q.createContext=function(t){return t={$$typeof:ok,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:sk,_context:t},t.Consumer=t};q.createElement=Y0;q.createFactory=function(t){var e=Y0.bind(null,t);return e.type=t,e};q.createRef=function(){return{current:null}};q.forwardRef=function(t){return{$$typeof:ak,render:t}};q.isValidElement=Sd;q.lazy=function(t){return{$$typeof:ck,_payload:{_status:-1,_result:t},_init:pk}};q.memo=function(t,e){return{$$typeof:uk,type:t,compare:e===void 0?null:e}};q.startTransition=function(t){var e=Wa.transition;Wa.transition={};try{t()}finally{Wa.transition=e}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(t,e){return tt.current.useCallback(t,e)};q.useContext=function(t){return tt.current.useContext(t)};q.useDebugValue=function(){};q.useDeferredValue=function(t){return tt.current.useDeferredValue(t)};q.useEffect=function(t,e){return tt.current.useEffect(t,e)};q.useId=function(){return tt.current.useId()};q.useImperativeHandle=function(t,e,n){return tt.current.useImperativeHandle(t,e,n)};q.useInsertionEffect=function(t,e){return tt.current.useInsertionEffect(t,e)};q.useLayoutEffect=function(t,e){return tt.current.useLayoutEffect(t,e)};q.useMemo=function(t,e){return tt.current.useMemo(t,e)};q.useReducer=function(t,e,n){return tt.current.useReducer(t,e,n)};q.useRef=function(t){return tt.current.useRef(t)};q.useState=function(t){return tt.current.useState(t)};q.useSyncExternalStore=function(t,e,n){return tt.current.useSyncExternalStore(t,e,n)};q.useTransition=function(){return tt.current.useTransition()};q.version="18.2.0";(function(t){t.exports=q})(S);const Q0=ek(S.exports);var bf={},X0={exports:{}},Et={},J0={exports:{}},Z0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,B){var H=R.length;R.push(B);e:for(;0<H;){var ve=H-1>>>1,Ie=R[ve];if(0<i(Ie,B))R[ve]=B,R[H]=Ie,H=ve;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var B=R[0],H=R.pop();if(H!==B){R[0]=H;e:for(var ve=0,Ie=R.length,ga=Ie>>>1;ve<ga;){var yr=2*(ve+1)-1,Ec=R[yr],wr=yr+1,va=R[wr];if(0>i(Ec,H))wr<Ie&&0>i(va,Ec)?(R[ve]=va,R[wr]=H,ve=wr):(R[ve]=Ec,R[yr]=H,ve=yr);else if(wr<Ie&&0>i(va,H))R[ve]=va,R[wr]=H,ve=wr;else break e}}return B}function i(R,B){var H=R.sortIndex-B.sortIndex;return H!==0?H:R.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,p=!1,v=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(R){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=R)r(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(u)}}function E(R){if(w=!1,g(R),!v)if(n(l)!==null)v=!0,yc(T);else{var B=n(u);B!==null&&wc(E,B.startTime-R)}}function T(R,B){v=!1,w&&(w=!1,m(b),b=-1),p=!0;var H=h;try{for(g(B),f=n(l);f!==null&&(!(f.expirationTime>B)||R&&!fe());){var ve=f.callback;if(typeof ve=="function"){f.callback=null,h=f.priorityLevel;var Ie=ve(f.expirationTime<=B);B=t.unstable_now(),typeof Ie=="function"?f.callback=Ie:f===n(l)&&r(l),g(B)}else r(l);f=n(l)}if(f!==null)var ga=!0;else{var yr=n(u);yr!==null&&wc(E,yr.startTime-B),ga=!1}return ga}finally{f=null,h=H,p=!1}}var C=!1,k=null,b=-1,F=5,U=-1;function fe(){return!(t.unstable_now()-U<F)}function Tt(){if(k!==null){var R=t.unstable_now();U=R;var B=!0;try{B=k(!0,R)}finally{B?sn():(C=!1,k=null)}}else C=!1}var sn;if(typeof d=="function")sn=function(){d(Tt)};else if(typeof MessageChannel<"u"){var vr=new MessageChannel,Ym=vr.port2;vr.port1.onmessage=Tt,sn=function(){Ym.postMessage(null)}}else sn=function(){_(Tt,0)};function yc(R){k=R,C||(C=!0,sn())}function wc(R,B){b=_(function(){R(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,yc(T))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(h){case 1:case 2:case 3:var B=3;break;default:B=h}var H=h;h=B;try{return R()}finally{h=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,B){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var H=h;h=R;try{return B()}finally{h=H}},t.unstable_scheduleCallback=function(R,B,H){var ve=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ve+H:ve):H=ve,R){case 1:var Ie=-1;break;case 2:Ie=250;break;case 5:Ie=1073741823;break;case 4:Ie=1e4;break;default:Ie=5e3}return Ie=H+Ie,R={id:c++,callback:B,priorityLevel:R,startTime:H,expirationTime:Ie,sortIndex:-1},H>ve?(R.sortIndex=H,e(u,R),n(l)===null&&R===n(u)&&(w?(m(b),b=-1):w=!0,wc(E,H-ve))):(R.sortIndex=Ie,e(l,R),v||p||(v=!0,yc(T))),R},t.unstable_shouldYield=fe,t.unstable_wrapCallback=function(R){var B=h;return function(){var H=h;h=B;try{return R.apply(this,arguments)}finally{h=H}}}})(Z0);(function(t){t.exports=Z0})(J0);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e1=S.exports,vt=J0.exports;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var t1=new Set,oo={};function ri(t,e){Vi(t,e),Vi(t+"Capture",e)}function Vi(t,e){for(oo[t]=e,t=0;t<e.length;t++)t1.add(e[t])}var gn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),If=Object.prototype.hasOwnProperty,gk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zm={},eg={};function vk(t){return If.call(eg,t)?!0:If.call(Zm,t)?!1:gk.test(t)?eg[t]=!0:(Zm[t]=!0,!1)}function yk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function wk(t,e,n,r){if(e===null||typeof e>"u"||yk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function nt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ve[t]=new nt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ve[e]=new nt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ve[t]=new nt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ve[t]=new nt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ve[t]=new nt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ve[t]=new nt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ve[t]=new nt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ve[t]=new nt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ve[t]=new nt(t,5,!1,t.toLowerCase(),null,!1,!1)});var _d=/[\-:]([a-z])/g;function kd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_d,kd);Ve[e]=new nt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_d,kd);Ve[e]=new nt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_d,kd);Ve[e]=new nt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ve[t]=new nt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ve.xlinkHref=new nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ve[t]=new nt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Td(t,e,n,r){var i=Ve.hasOwnProperty(e)?Ve[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(wk(e,n,i,r)&&(n=null),r||i===null?vk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var In=e1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,wa=Symbol.for("react.element"),di=Symbol.for("react.portal"),pi=Symbol.for("react.fragment"),xd=Symbol.for("react.strict_mode"),Cf=Symbol.for("react.profiler"),n1=Symbol.for("react.provider"),r1=Symbol.for("react.context"),bd=Symbol.for("react.forward_ref"),Af=Symbol.for("react.suspense"),Nf=Symbol.for("react.suspense_list"),Id=Symbol.for("react.memo"),Dn=Symbol.for("react.lazy"),i1=Symbol.for("react.offscreen"),tg=Symbol.iterator;function _s(t){return t===null||typeof t!="object"?null:(t=tg&&t[tg]||t["@@iterator"],typeof t=="function"?t:null)}var pe=Object.assign,_c;function Ps(t){if(_c===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);_c=e&&e[1]||""}return`
`+_c+t}var kc=!1;function Tc(t,e){if(!t||kc)return"";kc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{kc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ps(t):""}function Ek(t){switch(t.tag){case 5:return Ps(t.type);case 16:return Ps("Lazy");case 13:return Ps("Suspense");case 19:return Ps("SuspenseList");case 0:case 2:case 15:return t=Tc(t.type,!1),t;case 11:return t=Tc(t.type.render,!1),t;case 1:return t=Tc(t.type,!0),t;default:return""}}function Of(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case pi:return"Fragment";case di:return"Portal";case Cf:return"Profiler";case xd:return"StrictMode";case Af:return"Suspense";case Nf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case r1:return(t.displayName||"Context")+".Consumer";case n1:return(t._context.displayName||"Context")+".Provider";case bd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Id:return e=t.displayName||null,e!==null?e:Of(t.type)||"Memo";case Dn:e=t._payload,t=t._init;try{return Of(t(e))}catch{}}return null}function Sk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Of(e);case 8:return e===xd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function er(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function s1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _k(t){var e=s1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ea(t){t._valueTracker||(t._valueTracker=_k(t))}function o1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=s1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function fl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Pf(t,e){var n=e.checked;return pe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function ng(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=er(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function a1(t,e){e=e.checked,e!=null&&Td(t,"checked",e,!1)}function Rf(t,e){a1(t,e);var n=er(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Df(t,e.type,n):e.hasOwnProperty("defaultValue")&&Df(t,e.type,er(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function rg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Df(t,e,n){(e!=="number"||fl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Rs=Array.isArray;function Ni(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+er(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function $f(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return pe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ig(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(Rs(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:er(n)}}function l1(t,e){var n=er(e.value),r=er(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function sg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function u1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Lf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?u1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Sa,c1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Sa=Sa||document.createElement("div"),Sa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Sa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ao(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Us={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kk=["Webkit","ms","Moz","O"];Object.keys(Us).forEach(function(t){kk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Us[e]=Us[t]})});function f1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Us.hasOwnProperty(t)&&Us[t]?(""+e).trim():e+"px"}function h1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=f1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Tk=pe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mf(t,e){if(e){if(Tk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function Ff(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Uf=null;function Cd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var jf=null,Oi=null,Pi=null;function og(t){if(t=Wo(t)){if(typeof jf!="function")throw Error(x(280));var e=t.stateNode;e&&(e=pu(e),jf(t.stateNode,t.type,e))}}function d1(t){Oi?Pi?Pi.push(t):Pi=[t]:Oi=t}function p1(){if(Oi){var t=Oi,e=Pi;if(Pi=Oi=null,og(t),e)for(t=0;t<e.length;t++)og(e[t])}}function m1(t,e){return t(e)}function g1(){}var xc=!1;function v1(t,e,n){if(xc)return t(e,n);xc=!0;try{return m1(t,e,n)}finally{xc=!1,(Oi!==null||Pi!==null)&&(g1(),p1())}}function lo(t,e){var n=t.stateNode;if(n===null)return null;var r=pu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var zf=!1;if(gn)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){zf=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{zf=!1}function xk(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var js=!1,hl=null,dl=!1,Vf=null,bk={onError:function(t){js=!0,hl=t}};function Ik(t,e,n,r,i,s,o,a,l){js=!1,hl=null,xk.apply(bk,arguments)}function Ck(t,e,n,r,i,s,o,a,l){if(Ik.apply(this,arguments),js){if(js){var u=hl;js=!1,hl=null}else throw Error(x(198));dl||(dl=!0,Vf=u)}}function ii(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function y1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ag(t){if(ii(t)!==t)throw Error(x(188))}function Ak(t){var e=t.alternate;if(!e){if(e=ii(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return ag(i),t;if(s===r)return ag(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function w1(t){return t=Ak(t),t!==null?E1(t):null}function E1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=E1(t);if(e!==null)return e;t=t.sibling}return null}var S1=vt.unstable_scheduleCallback,lg=vt.unstable_cancelCallback,Nk=vt.unstable_shouldYield,Ok=vt.unstable_requestPaint,ye=vt.unstable_now,Pk=vt.unstable_getCurrentPriorityLevel,Ad=vt.unstable_ImmediatePriority,_1=vt.unstable_UserBlockingPriority,pl=vt.unstable_NormalPriority,Rk=vt.unstable_LowPriority,k1=vt.unstable_IdlePriority,cu=null,qt=null;function Dk(t){if(qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(cu,t,void 0,(t.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:Mk,$k=Math.log,Lk=Math.LN2;function Mk(t){return t>>>=0,t===0?32:31-($k(t)/Lk|0)|0}var _a=64,ka=4194304;function Ds(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ml(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ds(a):(s&=o,s!==0&&(r=Ds(s)))}else o=n&~i,o!==0?r=Ds(o):s!==0&&(r=Ds(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ut(e),i=1<<n,r|=t[n],e&=~i;return r}function Fk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Uk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ut(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=Fk(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Bf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function T1(){var t=_a;return _a<<=1,(_a&4194240)===0&&(_a=64),t}function bc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Bo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ut(e),t[e]=n}function jk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ut(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Nd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ut(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var te=0;function x1(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var b1,Od,I1,C1,A1,Hf=!1,Ta=[],Hn=null,Wn=null,Gn=null,uo=new Map,co=new Map,Ln=[],zk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ug(t,e){switch(t){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":Wn=null;break;case"mouseover":case"mouseout":Gn=null;break;case"pointerover":case"pointerout":uo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":co.delete(e.pointerId)}}function Ts(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Wo(e),e!==null&&Od(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Vk(t,e,n,r,i){switch(e){case"focusin":return Hn=Ts(Hn,t,e,n,r,i),!0;case"dragenter":return Wn=Ts(Wn,t,e,n,r,i),!0;case"mouseover":return Gn=Ts(Gn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return uo.set(s,Ts(uo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,co.set(s,Ts(co.get(s)||null,t,e,n,r,i)),!0}return!1}function N1(t){var e=xr(t.target);if(e!==null){var n=ii(e);if(n!==null){if(e=n.tag,e===13){if(e=y1(n),e!==null){t.blockedOn=e,A1(t.priority,function(){I1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ga(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Wf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Uf=r,n.target.dispatchEvent(r),Uf=null}else return e=Wo(n),e!==null&&Od(e),t.blockedOn=n,!1;e.shift()}return!0}function cg(t,e,n){Ga(t)&&n.delete(e)}function Bk(){Hf=!1,Hn!==null&&Ga(Hn)&&(Hn=null),Wn!==null&&Ga(Wn)&&(Wn=null),Gn!==null&&Ga(Gn)&&(Gn=null),uo.forEach(cg),co.forEach(cg)}function xs(t,e){t.blockedOn===e&&(t.blockedOn=null,Hf||(Hf=!0,vt.unstable_scheduleCallback(vt.unstable_NormalPriority,Bk)))}function fo(t){function e(i){return xs(i,t)}if(0<Ta.length){xs(Ta[0],t);for(var n=1;n<Ta.length;n++){var r=Ta[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Hn!==null&&xs(Hn,t),Wn!==null&&xs(Wn,t),Gn!==null&&xs(Gn,t),uo.forEach(e),co.forEach(e),n=0;n<Ln.length;n++)r=Ln[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ln.length&&(n=Ln[0],n.blockedOn===null);)N1(n),n.blockedOn===null&&Ln.shift()}var Ri=In.ReactCurrentBatchConfig,gl=!0;function Hk(t,e,n,r){var i=te,s=Ri.transition;Ri.transition=null;try{te=1,Pd(t,e,n,r)}finally{te=i,Ri.transition=s}}function Wk(t,e,n,r){var i=te,s=Ri.transition;Ri.transition=null;try{te=4,Pd(t,e,n,r)}finally{te=i,Ri.transition=s}}function Pd(t,e,n,r){if(gl){var i=Wf(t,e,n,r);if(i===null)Lc(t,e,r,vl,n),ug(t,r);else if(Vk(i,t,e,n,r))r.stopPropagation();else if(ug(t,r),e&4&&-1<zk.indexOf(t)){for(;i!==null;){var s=Wo(i);if(s!==null&&b1(s),s=Wf(t,e,n,r),s===null&&Lc(t,e,r,vl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Lc(t,e,r,null,n)}}var vl=null;function Wf(t,e,n,r){if(vl=null,t=Cd(r),t=xr(t),t!==null)if(e=ii(t),e===null)t=null;else if(n=e.tag,n===13){if(t=y1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vl=t,null}function O1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pk()){case Ad:return 1;case _1:return 4;case pl:case Rk:return 16;case k1:return 536870912;default:return 16}default:return 16}}var zn=null,Rd=null,Ka=null;function P1(){if(Ka)return Ka;var t,e=Rd,n=e.length,r,i="value"in zn?zn.value:zn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ka=i.slice(t,1<r?1-r:void 0)}function qa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xa(){return!0}function fg(){return!1}function St(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xa:fg,this.isPropagationStopped=fg,this}return pe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xa)},persist:function(){},isPersistent:xa}),e}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dd=St(as),Ho=pe({},as,{view:0,detail:0}),Gk=St(Ho),Ic,Cc,bs,fu=pe({},Ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$d,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bs&&(bs&&t.type==="mousemove"?(Ic=t.screenX-bs.screenX,Cc=t.screenY-bs.screenY):Cc=Ic=0,bs=t),Ic)},movementY:function(t){return"movementY"in t?t.movementY:Cc}}),hg=St(fu),Kk=pe({},fu,{dataTransfer:0}),qk=St(Kk),Yk=pe({},Ho,{relatedTarget:0}),Ac=St(Yk),Qk=pe({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),Xk=St(Qk),Jk=pe({},as,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Zk=St(Jk),eT=pe({},as,{data:0}),dg=St(eT),tT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=rT[t])?!!e[t]:!1}function $d(){return iT}var sT=pe({},Ho,{key:function(t){if(t.key){var e=tT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?nT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$d,charCode:function(t){return t.type==="keypress"?qa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),oT=St(sT),aT=pe({},fu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pg=St(aT),lT=pe({},Ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$d}),uT=St(lT),cT=pe({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),fT=St(cT),hT=pe({},fu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),dT=St(hT),pT=[9,13,27,32],Ld=gn&&"CompositionEvent"in window,zs=null;gn&&"documentMode"in document&&(zs=document.documentMode);var mT=gn&&"TextEvent"in window&&!zs,R1=gn&&(!Ld||zs&&8<zs&&11>=zs),mg=String.fromCharCode(32),gg=!1;function D1(t,e){switch(t){case"keyup":return pT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var mi=!1;function gT(t,e){switch(t){case"compositionend":return $1(e);case"keypress":return e.which!==32?null:(gg=!0,mg);case"textInput":return t=e.data,t===mg&&gg?null:t;default:return null}}function vT(t,e){if(mi)return t==="compositionend"||!Ld&&D1(t,e)?(t=P1(),Ka=Rd=zn=null,mi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return R1&&e.locale!=="ko"?null:e.data;default:return null}}var yT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!yT[t.type]:e==="textarea"}function L1(t,e,n,r){d1(r),e=yl(e,"onChange"),0<e.length&&(n=new Dd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Vs=null,ho=null;function wT(t){K1(t,0)}function hu(t){var e=yi(t);if(o1(e))return t}function ET(t,e){if(t==="change")return e}var M1=!1;if(gn){var Nc;if(gn){var Oc="oninput"in document;if(!Oc){var yg=document.createElement("div");yg.setAttribute("oninput","return;"),Oc=typeof yg.oninput=="function"}Nc=Oc}else Nc=!1;M1=Nc&&(!document.documentMode||9<document.documentMode)}function wg(){Vs&&(Vs.detachEvent("onpropertychange",F1),ho=Vs=null)}function F1(t){if(t.propertyName==="value"&&hu(ho)){var e=[];L1(e,ho,t,Cd(t)),v1(wT,e)}}function ST(t,e,n){t==="focusin"?(wg(),Vs=e,ho=n,Vs.attachEvent("onpropertychange",F1)):t==="focusout"&&wg()}function _T(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hu(ho)}function kT(t,e){if(t==="click")return hu(e)}function TT(t,e){if(t==="input"||t==="change")return hu(e)}function xT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zt=typeof Object.is=="function"?Object.is:xT;function po(t,e){if(zt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!If.call(e,i)||!zt(t[i],e[i]))return!1}return!0}function Eg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sg(t,e){var n=Eg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Eg(n)}}function U1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?U1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function j1(){for(var t=window,e=fl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fl(t.document)}return e}function Md(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function bT(t){var e=j1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&U1(n.ownerDocument.documentElement,n)){if(r!==null&&Md(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Sg(n,s);var o=Sg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var IT=gn&&"documentMode"in document&&11>=document.documentMode,gi=null,Gf=null,Bs=null,Kf=!1;function _g(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kf||gi==null||gi!==fl(r)||(r=gi,"selectionStart"in r&&Md(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bs&&po(Bs,r)||(Bs=r,r=yl(Gf,"onSelect"),0<r.length&&(e=new Dd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=gi)))}function ba(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vi={animationend:ba("Animation","AnimationEnd"),animationiteration:ba("Animation","AnimationIteration"),animationstart:ba("Animation","AnimationStart"),transitionend:ba("Transition","TransitionEnd")},Pc={},z1={};gn&&(z1=document.createElement("div").style,"AnimationEvent"in window||(delete vi.animationend.animation,delete vi.animationiteration.animation,delete vi.animationstart.animation),"TransitionEvent"in window||delete vi.transitionend.transition);function du(t){if(Pc[t])return Pc[t];if(!vi[t])return t;var e=vi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in z1)return Pc[t]=e[n];return t}var V1=du("animationend"),B1=du("animationiteration"),H1=du("animationstart"),W1=du("transitionend"),G1=new Map,kg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(t,e){G1.set(t,e),ri(e,[t])}for(var Rc=0;Rc<kg.length;Rc++){var Dc=kg[Rc],CT=Dc.toLowerCase(),AT=Dc[0].toUpperCase()+Dc.slice(1);ur(CT,"on"+AT)}ur(V1,"onAnimationEnd");ur(B1,"onAnimationIteration");ur(H1,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(W1,"onTransitionEnd");Vi("onMouseEnter",["mouseout","mouseover"]);Vi("onMouseLeave",["mouseout","mouseover"]);Vi("onPointerEnter",["pointerout","pointerover"]);Vi("onPointerLeave",["pointerout","pointerover"]);ri("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ri("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ri("onBeforeInput",["compositionend","keypress","textInput","paste"]);ri("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ri("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ri("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $s="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),NT=new Set("cancel close invalid load scroll toggle".split(" ").concat($s));function Tg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Ck(r,e,void 0,t),t.currentTarget=null}function K1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Tg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Tg(i,a,u),s=l}}}if(dl)throw t=Vf,dl=!1,Vf=null,t}function se(t,e){var n=e[Jf];n===void 0&&(n=e[Jf]=new Set);var r=t+"__bubble";n.has(r)||(q1(e,t,2,!1),n.add(r))}function $c(t,e,n){var r=0;e&&(r|=4),q1(n,t,r,e)}var Ia="_reactListening"+Math.random().toString(36).slice(2);function mo(t){if(!t[Ia]){t[Ia]=!0,t1.forEach(function(n){n!=="selectionchange"&&(NT.has(n)||$c(n,!1,t),$c(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ia]||(e[Ia]=!0,$c("selectionchange",!1,e))}}function q1(t,e,n,r){switch(O1(e)){case 1:var i=Hk;break;case 4:i=Wk;break;default:i=Pd}n=i.bind(null,e,n,t),i=void 0,!zf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Lc(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=xr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}v1(function(){var u=s,c=Cd(n),f=[];e:{var h=G1.get(t);if(h!==void 0){var p=Dd,v=t;switch(t){case"keypress":if(qa(n)===0)break e;case"keydown":case"keyup":p=oT;break;case"focusin":v="focus",p=Ac;break;case"focusout":v="blur",p=Ac;break;case"beforeblur":case"afterblur":p=Ac;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=hg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=qk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=uT;break;case V1:case B1:case H1:p=Xk;break;case W1:p=fT;break;case"scroll":p=Gk;break;case"wheel":p=dT;break;case"copy":case"cut":case"paste":p=Zk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=pg}var w=(e&4)!==0,_=!w&&t==="scroll",m=w?h!==null?h+"Capture":null:h;w=[];for(var d=u,g;d!==null;){g=d;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,m!==null&&(E=lo(d,m),E!=null&&w.push(go(d,E,g)))),_)break;d=d.return}0<w.length&&(h=new p(h,v,null,n,c),f.push({event:h,listeners:w}))}}if((e&7)===0){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Uf&&(v=n.relatedTarget||n.fromElement)&&(xr(v)||v[vn]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?xr(v):null,v!==null&&(_=ii(v),v!==_||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(w=hg,E="onMouseLeave",m="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(w=pg,E="onPointerLeave",m="onPointerEnter",d="pointer"),_=p==null?h:yi(p),g=v==null?h:yi(v),h=new w(E,d+"leave",p,n,c),h.target=_,h.relatedTarget=g,E=null,xr(c)===u&&(w=new w(m,d+"enter",v,n,c),w.target=g,w.relatedTarget=_,E=w),_=E,p&&v)t:{for(w=p,m=v,d=0,g=w;g;g=fi(g))d++;for(g=0,E=m;E;E=fi(E))g++;for(;0<d-g;)w=fi(w),d--;for(;0<g-d;)m=fi(m),g--;for(;d--;){if(w===m||m!==null&&w===m.alternate)break t;w=fi(w),m=fi(m)}w=null}else w=null;p!==null&&xg(f,h,p,w,!1),v!==null&&_!==null&&xg(f,_,v,w,!0)}}e:{if(h=u?yi(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var T=ET;else if(vg(h))if(M1)T=TT;else{T=_T;var C=ST}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=kT);if(T&&(T=T(t,u))){L1(f,T,n,c);break e}C&&C(t,h,u),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Df(h,"number",h.value)}switch(C=u?yi(u):window,t){case"focusin":(vg(C)||C.contentEditable==="true")&&(gi=C,Gf=u,Bs=null);break;case"focusout":Bs=Gf=gi=null;break;case"mousedown":Kf=!0;break;case"contextmenu":case"mouseup":case"dragend":Kf=!1,_g(f,n,c);break;case"selectionchange":if(IT)break;case"keydown":case"keyup":_g(f,n,c)}var k;if(Ld)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else mi?D1(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(R1&&n.locale!=="ko"&&(mi||b!=="onCompositionStart"?b==="onCompositionEnd"&&mi&&(k=P1()):(zn=c,Rd="value"in zn?zn.value:zn.textContent,mi=!0)),C=yl(u,b),0<C.length&&(b=new dg(b,t,null,n,c),f.push({event:b,listeners:C}),k?b.data=k:(k=$1(n),k!==null&&(b.data=k)))),(k=mT?gT(t,n):vT(t,n))&&(u=yl(u,"onBeforeInput"),0<u.length&&(c=new dg("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=k))}K1(f,e)})}function go(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=lo(t,n),s!=null&&r.unshift(go(t,s,i)),s=lo(t,e),s!=null&&r.push(go(t,s,i))),t=t.return}return r}function fi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function xg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=lo(n,s),l!=null&&o.unshift(go(n,l,a))):i||(l=lo(n,s),l!=null&&o.push(go(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var OT=/\r\n?/g,PT=/\u0000|\uFFFD/g;function bg(t){return(typeof t=="string"?t:""+t).replace(OT,`
`).replace(PT,"")}function Ca(t,e,n){if(e=bg(e),bg(t)!==e&&n)throw Error(x(425))}function wl(){}var qf=null,Yf=null;function Qf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Xf=typeof setTimeout=="function"?setTimeout:void 0,RT=typeof clearTimeout=="function"?clearTimeout:void 0,Ig=typeof Promise=="function"?Promise:void 0,DT=typeof queueMicrotask=="function"?queueMicrotask:typeof Ig<"u"?function(t){return Ig.resolve(null).then(t).catch($T)}:Xf;function $T(t){setTimeout(function(){throw t})}function Mc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),fo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);fo(e)}function Kn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Cg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ls=Math.random().toString(36).slice(2),Wt="__reactFiber$"+ls,vo="__reactProps$"+ls,vn="__reactContainer$"+ls,Jf="__reactEvents$"+ls,LT="__reactListeners$"+ls,MT="__reactHandles$"+ls;function xr(t){var e=t[Wt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[vn]||n[Wt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Cg(t);t!==null;){if(n=t[Wt])return n;t=Cg(t)}return e}t=n,n=t.parentNode}return null}function Wo(t){return t=t[Wt]||t[vn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function yi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function pu(t){return t[vo]||null}var Zf=[],wi=-1;function cr(t){return{current:t}}function ae(t){0>wi||(t.current=Zf[wi],Zf[wi]=null,wi--)}function ie(t,e){wi++,Zf[wi]=t.current,t.current=e}var tr={},Ye=cr(tr),lt=cr(!1),zr=tr;function Bi(t,e){var n=t.type.contextTypes;if(!n)return tr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ut(t){return t=t.childContextTypes,t!=null}function El(){ae(lt),ae(Ye)}function Ag(t,e,n){if(Ye.current!==tr)throw Error(x(168));ie(Ye,e),ie(lt,n)}function Y1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,Sk(t)||"Unknown",i));return pe({},n,r)}function Sl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,zr=Ye.current,ie(Ye,t),ie(lt,lt.current),!0}function Ng(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=Y1(t,e,zr),r.__reactInternalMemoizedMergedChildContext=t,ae(lt),ae(Ye),ie(Ye,t)):ae(lt),ie(lt,n)}var an=null,mu=!1,Fc=!1;function Q1(t){an===null?an=[t]:an.push(t)}function FT(t){mu=!0,Q1(t)}function fr(){if(!Fc&&an!==null){Fc=!0;var t=0,e=te;try{var n=an;for(te=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}an=null,mu=!1}catch(i){throw an!==null&&(an=an.slice(t+1)),S1(Ad,fr),i}finally{te=e,Fc=!1}}return null}var Ei=[],Si=0,_l=null,kl=0,xt=[],bt=0,Vr=null,un=1,cn="";function Er(t,e){Ei[Si++]=kl,Ei[Si++]=_l,_l=t,kl=e}function X1(t,e,n){xt[bt++]=un,xt[bt++]=cn,xt[bt++]=Vr,Vr=t;var r=un;t=cn;var i=32-Ut(r)-1;r&=~(1<<i),n+=1;var s=32-Ut(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,un=1<<32-Ut(e)+i|n<<i|r,cn=s+t}else un=1<<s|n<<i|r,cn=t}function Fd(t){t.return!==null&&(Er(t,1),X1(t,1,0))}function Ud(t){for(;t===_l;)_l=Ei[--Si],Ei[Si]=null,kl=Ei[--Si],Ei[Si]=null;for(;t===Vr;)Vr=xt[--bt],xt[bt]=null,cn=xt[--bt],xt[bt]=null,un=xt[--bt],xt[bt]=null}var gt=null,dt=null,ue=!1,$t=null;function J1(t,e){var n=Ct(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Og(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gt=t,dt=Kn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gt=t,dt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Vr!==null?{id:un,overflow:cn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ct(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gt=t,dt=null,!0):!1;default:return!1}}function eh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function th(t){if(ue){var e=dt;if(e){var n=e;if(!Og(t,e)){if(eh(t))throw Error(x(418));e=Kn(n.nextSibling);var r=gt;e&&Og(t,e)?J1(r,n):(t.flags=t.flags&-4097|2,ue=!1,gt=t)}}else{if(eh(t))throw Error(x(418));t.flags=t.flags&-4097|2,ue=!1,gt=t}}}function Pg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gt=t}function Aa(t){if(t!==gt)return!1;if(!ue)return Pg(t),ue=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Qf(t.type,t.memoizedProps)),e&&(e=dt)){if(eh(t))throw Z1(),Error(x(418));for(;e;)J1(t,e),e=Kn(e.nextSibling)}if(Pg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){dt=Kn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}dt=null}}else dt=gt?Kn(t.stateNode.nextSibling):null;return!0}function Z1(){for(var t=dt;t;)t=Kn(t.nextSibling)}function Hi(){dt=gt=null,ue=!1}function jd(t){$t===null?$t=[t]:$t.push(t)}var UT=In.ReactCurrentBatchConfig;function Rt(t,e){if(t&&t.defaultProps){e=pe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Tl=cr(null),xl=null,_i=null,zd=null;function Vd(){zd=_i=xl=null}function Bd(t){var e=Tl.current;ae(Tl),t._currentValue=e}function nh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Di(t,e){xl=t,zd=_i=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(ot=!0),t.firstContext=null)}function Nt(t){var e=t._currentValue;if(zd!==t)if(t={context:t,memoizedValue:e,next:null},_i===null){if(xl===null)throw Error(x(308));_i=t,xl.dependencies={lanes:0,firstContext:t}}else _i=_i.next=t;return e}var br=null;function Hd(t){br===null?br=[t]:br.push(t)}function ew(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Hd(e)):(n.next=i.next,i.next=n),e.interleaved=n,yn(t,r)}function yn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $n=!1;function Wd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(X&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,yn(t,n)}return i=r.interleaved,i===null?(e.next=e,Hd(r)):(e.next=i.next,i.next=e),r.interleaved=e,yn(t,n)}function Ya(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nd(t,n)}}function Rg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function bl(t,e,n,r){var i=t.updateQueue;$n=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,w=a;switch(h=e,p=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){f=v.call(p,f,h);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,h=typeof v=="function"?v.call(p,f,h):v,h==null)break e;f=pe({},f,h);break e;case 2:$n=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Hr|=o,t.lanes=o,t.memoizedState=f}}function Dg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var nw=new e1.Component().refs;function rh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:pe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var gu={isMounted:function(t){return(t=t._reactInternals)?ii(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=et(),i=Qn(t),s=pn(r,i);s.payload=e,n!=null&&(s.callback=n),e=qn(t,s,i),e!==null&&(jt(e,t,i,r),Ya(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=et(),i=Qn(t),s=pn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=qn(t,s,i),e!==null&&(jt(e,t,i,r),Ya(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=et(),r=Qn(t),i=pn(n,r);i.tag=2,e!=null&&(i.callback=e),e=qn(t,i,r),e!==null&&(jt(e,t,r,n),Ya(e,t,r))}};function $g(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!po(n,r)||!po(i,s):!0}function rw(t,e,n){var r=!1,i=tr,s=e.contextType;return typeof s=="object"&&s!==null?s=Nt(s):(i=ut(e)?zr:Ye.current,r=e.contextTypes,s=(r=r!=null)?Bi(t,i):tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=gu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Lg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&gu.enqueueReplaceState(e,e.state,null)}function ih(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=nw,Wd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Nt(s):(s=ut(e)?zr:Ye.current,i.context=Bi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&gu.enqueueReplaceState(i,i.state,null),bl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Is(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===nw&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function Na(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Mg(t){var e=t._init;return e(t._payload)}function iw(t){function e(m,d){if(t){var g=m.deletions;g===null?(m.deletions=[d],m.flags|=16):g.push(d)}}function n(m,d){if(!t)return null;for(;d!==null;)e(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function i(m,d){return m=Xn(m,d),m.index=0,m.sibling=null,m}function s(m,d,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<d?(m.flags|=2,d):g):(m.flags|=2,d)):(m.flags|=1048576,d)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,d,g,E){return d===null||d.tag!==6?(d=Wc(g,m.mode,E),d.return=m,d):(d=i(d,g),d.return=m,d)}function l(m,d,g,E){var T=g.type;return T===pi?c(m,d,g.props.children,E,g.key):d!==null&&(d.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Dn&&Mg(T)===d.type)?(E=i(d,g.props),E.ref=Is(m,d,g),E.return=m,E):(E=tl(g.type,g.key,g.props,null,m.mode,E),E.ref=Is(m,d,g),E.return=m,E)}function u(m,d,g,E){return d===null||d.tag!==4||d.stateNode.containerInfo!==g.containerInfo||d.stateNode.implementation!==g.implementation?(d=Gc(g,m.mode,E),d.return=m,d):(d=i(d,g.children||[]),d.return=m,d)}function c(m,d,g,E,T){return d===null||d.tag!==7?(d=$r(g,m.mode,E,T),d.return=m,d):(d=i(d,g),d.return=m,d)}function f(m,d,g){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Wc(""+d,m.mode,g),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case wa:return g=tl(d.type,d.key,d.props,null,m.mode,g),g.ref=Is(m,null,d),g.return=m,g;case di:return d=Gc(d,m.mode,g),d.return=m,d;case Dn:var E=d._init;return f(m,E(d._payload),g)}if(Rs(d)||_s(d))return d=$r(d,m.mode,g,null),d.return=m,d;Na(m,d)}return null}function h(m,d,g,E){var T=d!==null?d.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return T!==null?null:a(m,d,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case wa:return g.key===T?l(m,d,g,E):null;case di:return g.key===T?u(m,d,g,E):null;case Dn:return T=g._init,h(m,d,T(g._payload),E)}if(Rs(g)||_s(g))return T!==null?null:c(m,d,g,E,null);Na(m,g)}return null}function p(m,d,g,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(g)||null,a(d,m,""+E,T);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case wa:return m=m.get(E.key===null?g:E.key)||null,l(d,m,E,T);case di:return m=m.get(E.key===null?g:E.key)||null,u(d,m,E,T);case Dn:var C=E._init;return p(m,d,g,C(E._payload),T)}if(Rs(E)||_s(E))return m=m.get(g)||null,c(d,m,E,T,null);Na(d,E)}return null}function v(m,d,g,E){for(var T=null,C=null,k=d,b=d=0,F=null;k!==null&&b<g.length;b++){k.index>b?(F=k,k=null):F=k.sibling;var U=h(m,k,g[b],E);if(U===null){k===null&&(k=F);break}t&&k&&U.alternate===null&&e(m,k),d=s(U,d,b),C===null?T=U:C.sibling=U,C=U,k=F}if(b===g.length)return n(m,k),ue&&Er(m,b),T;if(k===null){for(;b<g.length;b++)k=f(m,g[b],E),k!==null&&(d=s(k,d,b),C===null?T=k:C.sibling=k,C=k);return ue&&Er(m,b),T}for(k=r(m,k);b<g.length;b++)F=p(k,m,b,g[b],E),F!==null&&(t&&F.alternate!==null&&k.delete(F.key===null?b:F.key),d=s(F,d,b),C===null?T=F:C.sibling=F,C=F);return t&&k.forEach(function(fe){return e(m,fe)}),ue&&Er(m,b),T}function w(m,d,g,E){var T=_s(g);if(typeof T!="function")throw Error(x(150));if(g=T.call(g),g==null)throw Error(x(151));for(var C=T=null,k=d,b=d=0,F=null,U=g.next();k!==null&&!U.done;b++,U=g.next()){k.index>b?(F=k,k=null):F=k.sibling;var fe=h(m,k,U.value,E);if(fe===null){k===null&&(k=F);break}t&&k&&fe.alternate===null&&e(m,k),d=s(fe,d,b),C===null?T=fe:C.sibling=fe,C=fe,k=F}if(U.done)return n(m,k),ue&&Er(m,b),T;if(k===null){for(;!U.done;b++,U=g.next())U=f(m,U.value,E),U!==null&&(d=s(U,d,b),C===null?T=U:C.sibling=U,C=U);return ue&&Er(m,b),T}for(k=r(m,k);!U.done;b++,U=g.next())U=p(k,m,b,U.value,E),U!==null&&(t&&U.alternate!==null&&k.delete(U.key===null?b:U.key),d=s(U,d,b),C===null?T=U:C.sibling=U,C=U);return t&&k.forEach(function(Tt){return e(m,Tt)}),ue&&Er(m,b),T}function _(m,d,g,E){if(typeof g=="object"&&g!==null&&g.type===pi&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case wa:e:{for(var T=g.key,C=d;C!==null;){if(C.key===T){if(T=g.type,T===pi){if(C.tag===7){n(m,C.sibling),d=i(C,g.props.children),d.return=m,m=d;break e}}else if(C.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Dn&&Mg(T)===C.type){n(m,C.sibling),d=i(C,g.props),d.ref=Is(m,C,g),d.return=m,m=d;break e}n(m,C);break}else e(m,C);C=C.sibling}g.type===pi?(d=$r(g.props.children,m.mode,E,g.key),d.return=m,m=d):(E=tl(g.type,g.key,g.props,null,m.mode,E),E.ref=Is(m,d,g),E.return=m,m=E)}return o(m);case di:e:{for(C=g.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===g.containerInfo&&d.stateNode.implementation===g.implementation){n(m,d.sibling),d=i(d,g.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else e(m,d);d=d.sibling}d=Gc(g,m.mode,E),d.return=m,m=d}return o(m);case Dn:return C=g._init,_(m,d,C(g._payload),E)}if(Rs(g))return v(m,d,g,E);if(_s(g))return w(m,d,g,E);Na(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,d!==null&&d.tag===6?(n(m,d.sibling),d=i(d,g),d.return=m,m=d):(n(m,d),d=Wc(g,m.mode,E),d.return=m,m=d),o(m)):n(m,d)}return _}var Wi=iw(!0),sw=iw(!1),Go={},Yt=cr(Go),yo=cr(Go),wo=cr(Go);function Ir(t){if(t===Go)throw Error(x(174));return t}function Gd(t,e){switch(ie(wo,e),ie(yo,t),ie(Yt,Go),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Lf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Lf(e,t)}ae(Yt),ie(Yt,e)}function Gi(){ae(Yt),ae(yo),ae(wo)}function ow(t){Ir(wo.current);var e=Ir(Yt.current),n=Lf(e,t.type);e!==n&&(ie(yo,t),ie(Yt,n))}function Kd(t){yo.current===t&&(ae(Yt),ae(yo))}var he=cr(0);function Il(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Uc=[];function qd(){for(var t=0;t<Uc.length;t++)Uc[t]._workInProgressVersionPrimary=null;Uc.length=0}var Qa=In.ReactCurrentDispatcher,jc=In.ReactCurrentBatchConfig,Br=0,de=null,Te=null,Ne=null,Cl=!1,Hs=!1,Eo=0,jT=0;function We(){throw Error(x(321))}function Yd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zt(t[n],e[n]))return!1;return!0}function Qd(t,e,n,r,i,s){if(Br=s,de=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Qa.current=t===null||t.memoizedState===null?HT:WT,t=n(r,i),Hs){s=0;do{if(Hs=!1,Eo=0,25<=s)throw Error(x(301));s+=1,Ne=Te=null,e.updateQueue=null,Qa.current=GT,t=n(r,i)}while(Hs)}if(Qa.current=Al,e=Te!==null&&Te.next!==null,Br=0,Ne=Te=de=null,Cl=!1,e)throw Error(x(300));return t}function Xd(){var t=Eo!==0;return Eo=0,t}function Ht(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?de.memoizedState=Ne=t:Ne=Ne.next=t,Ne}function Ot(){if(Te===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=Te.next;var e=Ne===null?de.memoizedState:Ne.next;if(e!==null)Ne=e,Te=t;else{if(t===null)throw Error(x(310));Te=t,t={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},Ne===null?de.memoizedState=Ne=t:Ne=Ne.next=t}return Ne}function So(t,e){return typeof e=="function"?e(t):e}function zc(t){var e=Ot(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=Te,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Br&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,de.lanes|=c,Hr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,zt(r,e.memoizedState)||(ot=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,de.lanes|=s,Hr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vc(t){var e=Ot(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);zt(s,e.memoizedState)||(ot=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function aw(){}function lw(t,e){var n=de,r=Ot(),i=e(),s=!zt(r.memoizedState,i);if(s&&(r.memoizedState=i,ot=!0),r=r.queue,Jd(fw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ne!==null&&Ne.memoizedState.tag&1){if(n.flags|=2048,_o(9,cw.bind(null,n,r,i,e),void 0,null),Oe===null)throw Error(x(349));(Br&30)!==0||uw(n,e,i)}return i}function uw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=de.updateQueue,e===null?(e={lastEffect:null,stores:null},de.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function cw(t,e,n,r){e.value=n,e.getSnapshot=r,hw(e)&&dw(t)}function fw(t,e,n){return n(function(){hw(e)&&dw(t)})}function hw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zt(t,n)}catch{return!0}}function dw(t){var e=yn(t,1);e!==null&&jt(e,t,1,-1)}function Fg(t){var e=Ht();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:t},e.queue=t,t=t.dispatch=BT.bind(null,de,t),[e.memoizedState,t]}function _o(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=de.updateQueue,e===null?(e={lastEffect:null,stores:null},de.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function pw(){return Ot().memoizedState}function Xa(t,e,n,r){var i=Ht();de.flags|=t,i.memoizedState=_o(1|e,n,void 0,r===void 0?null:r)}function vu(t,e,n,r){var i=Ot();r=r===void 0?null:r;var s=void 0;if(Te!==null){var o=Te.memoizedState;if(s=o.destroy,r!==null&&Yd(r,o.deps)){i.memoizedState=_o(e,n,s,r);return}}de.flags|=t,i.memoizedState=_o(1|e,n,s,r)}function Ug(t,e){return Xa(8390656,8,t,e)}function Jd(t,e){return vu(2048,8,t,e)}function mw(t,e){return vu(4,2,t,e)}function gw(t,e){return vu(4,4,t,e)}function vw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function yw(t,e,n){return n=n!=null?n.concat([t]):null,vu(4,4,vw.bind(null,e,t),n)}function Zd(){}function ww(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Yd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Ew(t,e){var n=Ot();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Yd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Sw(t,e,n){return(Br&21)===0?(t.baseState&&(t.baseState=!1,ot=!0),t.memoizedState=n):(zt(n,e)||(n=T1(),de.lanes|=n,Hr|=n,t.baseState=!0),e)}function zT(t,e){var n=te;te=n!==0&&4>n?n:4,t(!0);var r=jc.transition;jc.transition={};try{t(!1),e()}finally{te=n,jc.transition=r}}function _w(){return Ot().memoizedState}function VT(t,e,n){var r=Qn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},kw(t))Tw(e,n);else if(n=ew(t,e,n,r),n!==null){var i=et();jt(n,t,r,i),xw(n,e,r)}}function BT(t,e,n){var r=Qn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(kw(t))Tw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,zt(a,o)){var l=e.interleaved;l===null?(i.next=i,Hd(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=ew(t,e,i,r),n!==null&&(i=et(),jt(n,t,r,i),xw(n,e,r))}}function kw(t){var e=t.alternate;return t===de||e!==null&&e===de}function Tw(t,e){Hs=Cl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function xw(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nd(t,n)}}var Al={readContext:Nt,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},HT={readContext:Nt,useCallback:function(t,e){return Ht().memoizedState=[t,e===void 0?null:e],t},useContext:Nt,useEffect:Ug,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xa(4194308,4,vw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xa(4,2,t,e)},useMemo:function(t,e){var n=Ht();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ht();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=VT.bind(null,de,t),[r.memoizedState,t]},useRef:function(t){var e=Ht();return t={current:t},e.memoizedState=t},useState:Fg,useDebugValue:Zd,useDeferredValue:function(t){return Ht().memoizedState=t},useTransition:function(){var t=Fg(!1),e=t[0];return t=zT.bind(null,t[1]),Ht().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=de,i=Ht();if(ue){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),Oe===null)throw Error(x(349));(Br&30)!==0||uw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Ug(fw.bind(null,r,s,t),[t]),r.flags|=2048,_o(9,cw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ht(),e=Oe.identifierPrefix;if(ue){var n=cn,r=un;n=(r&~(1<<32-Ut(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Eo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=jT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},WT={readContext:Nt,useCallback:ww,useContext:Nt,useEffect:Jd,useImperativeHandle:yw,useInsertionEffect:mw,useLayoutEffect:gw,useMemo:Ew,useReducer:zc,useRef:pw,useState:function(){return zc(So)},useDebugValue:Zd,useDeferredValue:function(t){var e=Ot();return Sw(e,Te.memoizedState,t)},useTransition:function(){var t=zc(So)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:aw,useSyncExternalStore:lw,useId:_w,unstable_isNewReconciler:!1},GT={readContext:Nt,useCallback:ww,useContext:Nt,useEffect:Jd,useImperativeHandle:yw,useInsertionEffect:mw,useLayoutEffect:gw,useMemo:Ew,useReducer:Vc,useRef:pw,useState:function(){return Vc(So)},useDebugValue:Zd,useDeferredValue:function(t){var e=Ot();return Te===null?e.memoizedState=t:Sw(e,Te.memoizedState,t)},useTransition:function(){var t=Vc(So)[0],e=Ot().memoizedState;return[t,e]},useMutableSource:aw,useSyncExternalStore:lw,useId:_w,unstable_isNewReconciler:!1};function Ki(t,e){try{var n="",r=e;do n+=Ek(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Bc(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function sh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var KT=typeof WeakMap=="function"?WeakMap:Map;function bw(t,e,n){n=pn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ol||(Ol=!0,mh=r),sh(t,e)},n}function Iw(t,e,n){n=pn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){sh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){sh(t,e),typeof r!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function jg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new KT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ax.bind(null,t,e,n),e.then(t,t))}function zg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Vg(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=pn(-1,1),e.tag=2,qn(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var qT=In.ReactCurrentOwner,ot=!1;function Qe(t,e,n,r){e.child=t===null?sw(e,null,n,r):Wi(e,t.child,n,r)}function Bg(t,e,n,r,i){n=n.render;var s=e.ref;return Di(e,i),r=Qd(t,e,n,r,s,i),n=Xd(),t!==null&&!ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,wn(t,e,i)):(ue&&n&&Fd(e),e.flags|=1,Qe(t,e,r,i),e.child)}function Hg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ap(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Cw(t,e,s,r,i)):(t=tl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:po,n(o,r)&&t.ref===e.ref)return wn(t,e,i)}return e.flags|=1,t=Xn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Cw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(po(s,r)&&t.ref===e.ref)if(ot=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(ot=!0);else return e.lanes=t.lanes,wn(t,e,i)}return oh(t,e,n,r,i)}function Aw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(Ti,ht),ht|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ie(Ti,ht),ht|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ie(Ti,ht),ht|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ie(Ti,ht),ht|=r;return Qe(t,e,i,n),e.child}function Nw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function oh(t,e,n,r,i){var s=ut(n)?zr:Ye.current;return s=Bi(e,s),Di(e,i),n=Qd(t,e,n,r,s,i),r=Xd(),t!==null&&!ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,wn(t,e,i)):(ue&&r&&Fd(e),e.flags|=1,Qe(t,e,n,i),e.child)}function Wg(t,e,n,r,i){if(ut(n)){var s=!0;Sl(e)}else s=!1;if(Di(e,i),e.stateNode===null)Ja(t,e),rw(e,n,r),ih(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Nt(u):(u=ut(n)?zr:Ye.current,u=Bi(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Lg(e,o,r,u),$n=!1;var h=e.memoizedState;o.state=h,bl(e,r,o,i),l=e.memoizedState,a!==r||h!==l||lt.current||$n?(typeof c=="function"&&(rh(e,n,c,r),l=e.memoizedState),(a=$n||$g(e,n,a,r,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,tw(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Rt(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Nt(l):(l=ut(n)?zr:Ye.current,l=Bi(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Lg(e,o,r,l),$n=!1,h=e.memoizedState,o.state=h,bl(e,r,o,i);var v=e.memoizedState;a!==f||h!==v||lt.current||$n?(typeof p=="function"&&(rh(e,n,p,r),v=e.memoizedState),(u=$n||$g(e,n,u,r,h,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return ah(t,e,n,r,s,i)}function ah(t,e,n,r,i,s){Nw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Ng(e,n,!1),wn(t,e,s);r=e.stateNode,qT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Wi(e,t.child,null,s),e.child=Wi(e,null,a,s)):Qe(t,e,a,s),e.memoizedState=r.state,i&&Ng(e,n,!0),e.child}function Ow(t){var e=t.stateNode;e.pendingContext?Ag(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ag(t,e.context,!1),Gd(t,e.containerInfo)}function Gg(t,e,n,r,i){return Hi(),jd(i),e.flags|=256,Qe(t,e,n,r),e.child}var lh={dehydrated:null,treeContext:null,retryLane:0};function uh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Pw(t,e,n){var r=e.pendingProps,i=he.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ie(he,i&1),t===null)return th(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Eu(o,r,0,null),t=$r(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=uh(n),e.memoizedState=lh,t):ep(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return YT(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Xn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Xn(a,s):(s=$r(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?uh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=lh,r}return s=t.child,t=s.sibling,r=Xn(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ep(t,e){return e=Eu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Oa(t,e,n,r){return r!==null&&jd(r),Wi(e,t.child,null,n),t=ep(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function YT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Bc(Error(x(422))),Oa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Eu({mode:"visible",children:r.children},i,0,null),s=$r(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Wi(e,t.child,null,o),e.child.memoizedState=uh(o),e.memoizedState=lh,s);if((e.mode&1)===0)return Oa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(x(419)),r=Bc(s,r,void 0),Oa(t,e,o,r)}if(a=(o&t.childLanes)!==0,ot||a){if(r=Oe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,yn(t,i),jt(r,t,i,-1))}return op(),r=Bc(Error(x(421))),Oa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=lx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,dt=Kn(i.nextSibling),gt=e,ue=!0,$t=null,t!==null&&(xt[bt++]=un,xt[bt++]=cn,xt[bt++]=Vr,un=t.id,cn=t.overflow,Vr=e),e=ep(e,r.children),e.flags|=4096,e)}function Kg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),nh(t.return,e,n)}function Hc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Rw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Qe(t,e,r.children,n),r=he.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Kg(t,n,e);else if(t.tag===19)Kg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ie(he,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Il(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Hc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Il(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Hc(e,!0,n,null,s);break;case"together":Hc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ja(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function wn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=Xn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Xn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function QT(t,e,n){switch(e.tag){case 3:Ow(e),Hi();break;case 5:ow(e);break;case 1:ut(e.type)&&Sl(e);break;case 4:Gd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ie(Tl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ie(he,he.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?Pw(t,e,n):(ie(he,he.current&1),t=wn(t,e,n),t!==null?t.sibling:null);ie(he,he.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return Rw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ie(he,he.current),r)break;return null;case 22:case 23:return e.lanes=0,Aw(t,e,n)}return wn(t,e,n)}var Dw,ch,$w,Lw;Dw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ch=function(){};$w=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ir(Yt.current);var s=null;switch(n){case"input":i=Pf(t,i),r=Pf(t,r),s=[];break;case"select":i=pe({},i,{value:void 0}),r=pe({},r,{value:void 0}),s=[];break;case"textarea":i=$f(t,i),r=$f(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=wl)}Mf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(oo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(oo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&se("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Lw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Cs(t,e){if(!ue)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ge(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function XT(t,e,n){var r=e.pendingProps;switch(Ud(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(e),null;case 1:return ut(e.type)&&El(),Ge(e),null;case 3:return r=e.stateNode,Gi(),ae(lt),ae(Ye),qd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Aa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,$t!==null&&(yh($t),$t=null))),ch(t,e),Ge(e),null;case 5:Kd(e);var i=Ir(wo.current);if(n=e.type,t!==null&&e.stateNode!=null)$w(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return Ge(e),null}if(t=Ir(Yt.current),Aa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Wt]=e,r[vo]=s,t=(e.mode&1)!==0,n){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(i=0;i<$s.length;i++)se($s[i],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":ng(r,s),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},se("invalid",r);break;case"textarea":ig(r,s),se("invalid",r)}Mf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ca(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ca(r.textContent,a,t),i=["children",""+a]):oo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&se("scroll",r)}switch(n){case"input":Ea(r),rg(r,s,!0);break;case"textarea":Ea(r),sg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=wl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=u1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Wt]=e,t[vo]=r,Dw(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ff(n,r),n){case"dialog":se("cancel",t),se("close",t),i=r;break;case"iframe":case"object":case"embed":se("load",t),i=r;break;case"video":case"audio":for(i=0;i<$s.length;i++)se($s[i],t);i=r;break;case"source":se("error",t),i=r;break;case"img":case"image":case"link":se("error",t),se("load",t),i=r;break;case"details":se("toggle",t),i=r;break;case"input":ng(t,r),i=Pf(t,r),se("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=pe({},r,{value:void 0}),se("invalid",t);break;case"textarea":ig(t,r),i=$f(t,r),se("invalid",t);break;default:i=r}Mf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?h1(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&c1(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ao(t,l):typeof l=="number"&&ao(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&se("scroll",t):l!=null&&Td(t,s,l,o))}switch(n){case"input":Ea(t),rg(t,r,!1);break;case"textarea":Ea(t),sg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+er(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ni(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ni(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=wl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ge(e),null;case 6:if(t&&e.stateNode!=null)Lw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=Ir(wo.current),Ir(Yt.current),Aa(e)){if(r=e.stateNode,n=e.memoizedProps,r[Wt]=e,(s=r.nodeValue!==n)&&(t=gt,t!==null))switch(t.tag){case 3:Ca(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ca(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Wt]=e,e.stateNode=r}return Ge(e),null;case 13:if(ae(he),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ue&&dt!==null&&(e.mode&1)!==0&&(e.flags&128)===0)Z1(),Hi(),e.flags|=98560,s=!1;else if(s=Aa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[Wt]=e}else Hi(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ge(e),s=!1}else $t!==null&&(yh($t),$t=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(he.current&1)!==0?xe===0&&(xe=3):op())),e.updateQueue!==null&&(e.flags|=4),Ge(e),null);case 4:return Gi(),ch(t,e),t===null&&mo(e.stateNode.containerInfo),Ge(e),null;case 10:return Bd(e.type._context),Ge(e),null;case 17:return ut(e.type)&&El(),Ge(e),null;case 19:if(ae(he),s=e.memoizedState,s===null)return Ge(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Cs(s,!1);else{if(xe!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Il(t),o!==null){for(e.flags|=128,Cs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ie(he,he.current&1|2),e.child}t=t.sibling}s.tail!==null&&ye()>qi&&(e.flags|=128,r=!0,Cs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Il(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Cs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ue)return Ge(e),null}else 2*ye()-s.renderingStartTime>qi&&n!==1073741824&&(e.flags|=128,r=!0,Cs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ye(),e.sibling=null,n=he.current,ie(he,r?n&1|2:n&1),e):(Ge(e),null);case 22:case 23:return sp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(ht&1073741824)!==0&&(Ge(e),e.subtreeFlags&6&&(e.flags|=8192)):Ge(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function JT(t,e){switch(Ud(e),e.tag){case 1:return ut(e.type)&&El(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Gi(),ae(lt),ae(Ye),qd(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Kd(e),null;case 13:if(ae(he),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));Hi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ae(he),null;case 4:return Gi(),null;case 10:return Bd(e.type._context),null;case 22:case 23:return sp(),null;case 24:return null;default:return null}}var Pa=!1,Ke=!1,ZT=typeof WeakSet=="function"?WeakSet:Set,O=null;function ki(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){me(t,e,r)}else n.current=null}function fh(t,e,n){try{n()}catch(r){me(t,e,r)}}var qg=!1;function ex(t,e){if(qf=gl,t=j1(),Md(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,h=null;t:for(;;){for(var p;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yf={focusedElem:t,selectionRange:n},gl=!1,O=e;O!==null;)if(e=O,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,O=t;else for(;O!==null;){e=O;try{var v=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,_=v.memoizedState,m=e.stateNode,d=m.getSnapshotBeforeUpdate(e.elementType===e.type?w:Rt(e.type,w),_);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(E){me(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,O=t;break}O=e.return}return v=qg,qg=!1,v}function Ws(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&fh(e,n,s)}i=i.next}while(i!==r)}}function yu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function hh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Mw(t){var e=t.alternate;e!==null&&(t.alternate=null,Mw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wt],delete e[vo],delete e[Jf],delete e[LT],delete e[MT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Fw(t){return t.tag===5||t.tag===3||t.tag===4}function Yg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Fw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wl));else if(r!==4&&(t=t.child,t!==null))for(dh(t,e,n),t=t.sibling;t!==null;)dh(t,e,n),t=t.sibling}function ph(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ph(t,e,n),t=t.sibling;t!==null;)ph(t,e,n),t=t.sibling}var Le=null,Dt=!1;function On(t,e,n){for(n=n.child;n!==null;)Uw(t,e,n),n=n.sibling}function Uw(t,e,n){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(cu,n)}catch{}switch(n.tag){case 5:Ke||ki(n,e);case 6:var r=Le,i=Dt;Le=null,On(t,e,n),Le=r,Dt=i,Le!==null&&(Dt?(t=Le,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&(Dt?(t=Le,n=n.stateNode,t.nodeType===8?Mc(t.parentNode,n):t.nodeType===1&&Mc(t,n),fo(t)):Mc(Le,n.stateNode));break;case 4:r=Le,i=Dt,Le=n.stateNode.containerInfo,Dt=!0,On(t,e,n),Le=r,Dt=i;break;case 0:case 11:case 14:case 15:if(!Ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&fh(n,e,o),i=i.next}while(i!==r)}On(t,e,n);break;case 1:if(!Ke&&(ki(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){me(n,e,a)}On(t,e,n);break;case 21:On(t,e,n);break;case 22:n.mode&1?(Ke=(r=Ke)||n.memoizedState!==null,On(t,e,n),Ke=r):On(t,e,n);break;default:On(t,e,n)}}function Qg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new ZT),e.forEach(function(r){var i=ux.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Pt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Le=a.stateNode,Dt=!1;break e;case 3:Le=a.stateNode.containerInfo,Dt=!0;break e;case 4:Le=a.stateNode.containerInfo,Dt=!0;break e}a=a.return}if(Le===null)throw Error(x(160));Uw(s,o,i),Le=null,Dt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){me(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)jw(e,t),e=e.sibling}function jw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pt(e,t),Bt(t),r&4){try{Ws(3,t,t.return),yu(3,t)}catch(w){me(t,t.return,w)}try{Ws(5,t,t.return)}catch(w){me(t,t.return,w)}}break;case 1:Pt(e,t),Bt(t),r&512&&n!==null&&ki(n,n.return);break;case 5:if(Pt(e,t),Bt(t),r&512&&n!==null&&ki(n,n.return),t.flags&32){var i=t.stateNode;try{ao(i,"")}catch(w){me(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&a1(i,s),Ff(a,o);var u=Ff(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?h1(i,f):c==="dangerouslySetInnerHTML"?c1(i,f):c==="children"?ao(i,f):Td(i,c,f,u)}switch(a){case"input":Rf(i,s);break;case"textarea":l1(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ni(i,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ni(i,!!s.multiple,s.defaultValue,!0):Ni(i,!!s.multiple,s.multiple?[]:"",!1))}i[vo]=s}catch(w){me(t,t.return,w)}}break;case 6:if(Pt(e,t),Bt(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){me(t,t.return,w)}}break;case 3:if(Pt(e,t),Bt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fo(e.containerInfo)}catch(w){me(t,t.return,w)}break;case 4:Pt(e,t),Bt(t);break;case 13:Pt(e,t),Bt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(rp=ye())),r&4&&Qg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ke=(u=Ke)||c,Pt(e,t),Ke=u):Pt(e,t),Bt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(O=t,c=t.child;c!==null;){for(f=O=c;O!==null;){switch(h=O,p=h.child,h.tag){case 0:case 11:case 14:case 15:Ws(4,h,h.return);break;case 1:ki(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){me(r,n,w)}}break;case 5:ki(h,h.return);break;case 22:if(h.memoizedState!==null){Jg(f);continue}}p!==null?(p.return=h,O=p):Jg(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=f1("display",o))}catch(w){me(t,t.return,w)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){me(t,t.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Pt(e,t),Bt(t),r&4&&Qg(t);break;case 21:break;default:Pt(e,t),Bt(t)}}function Bt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Fw(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ao(i,""),r.flags&=-33);var s=Yg(t);ph(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Yg(t);dh(t,a,o);break;default:throw Error(x(161))}}catch(l){me(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function tx(t,e,n){O=t,zw(t)}function zw(t,e,n){for(var r=(t.mode&1)!==0;O!==null;){var i=O,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Pa;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ke;a=Pa;var u=Ke;if(Pa=o,(Ke=l)&&!u)for(O=i;O!==null;)o=O,l=o.child,o.tag===22&&o.memoizedState!==null?Zg(i):l!==null?(l.return=o,O=l):Zg(i);for(;s!==null;)O=s,zw(s),s=s.sibling;O=i,Pa=a,Ke=u}Xg(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,O=s):Xg(t)}}function Xg(t){for(;O!==null;){var e=O;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Ke||yu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ke)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Rt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Dg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Dg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&fo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}Ke||e.flags&512&&hh(e)}catch(h){me(e,e.return,h)}}if(e===t){O=null;break}if(n=e.sibling,n!==null){n.return=e.return,O=n;break}O=e.return}}function Jg(t){for(;O!==null;){var e=O;if(e===t){O=null;break}var n=e.sibling;if(n!==null){n.return=e.return,O=n;break}O=e.return}}function Zg(t){for(;O!==null;){var e=O;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{yu(4,e)}catch(l){me(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){me(e,i,l)}}var s=e.return;try{hh(e)}catch(l){me(e,s,l)}break;case 5:var o=e.return;try{hh(e)}catch(l){me(e,o,l)}}}catch(l){me(e,e.return,l)}if(e===t){O=null;break}var a=e.sibling;if(a!==null){a.return=e.return,O=a;break}O=e.return}}var nx=Math.ceil,Nl=In.ReactCurrentDispatcher,tp=In.ReactCurrentOwner,At=In.ReactCurrentBatchConfig,X=0,Oe=null,Se=null,Ue=0,ht=0,Ti=cr(0),xe=0,ko=null,Hr=0,wu=0,np=0,Gs=null,it=null,rp=0,qi=1/0,on=null,Ol=!1,mh=null,Yn=null,Ra=!1,Vn=null,Pl=0,Ks=0,gh=null,Za=-1,el=0;function et(){return(X&6)!==0?ye():Za!==-1?Za:Za=ye()}function Qn(t){return(t.mode&1)===0?1:(X&2)!==0&&Ue!==0?Ue&-Ue:UT.transition!==null?(el===0&&(el=T1()),el):(t=te,t!==0||(t=window.event,t=t===void 0?16:O1(t.type)),t)}function jt(t,e,n,r){if(50<Ks)throw Ks=0,gh=null,Error(x(185));Bo(t,n,r),((X&2)===0||t!==Oe)&&(t===Oe&&((X&2)===0&&(wu|=n),xe===4&&Mn(t,Ue)),ct(t,r),n===1&&X===0&&(e.mode&1)===0&&(qi=ye()+500,mu&&fr()))}function ct(t,e){var n=t.callbackNode;Uk(t,e);var r=ml(t,t===Oe?Ue:0);if(r===0)n!==null&&lg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&lg(n),e===1)t.tag===0?FT(ev.bind(null,t)):Q1(ev.bind(null,t)),DT(function(){(X&6)===0&&fr()}),n=null;else{switch(x1(r)){case 1:n=Ad;break;case 4:n=_1;break;case 16:n=pl;break;case 536870912:n=k1;break;default:n=pl}n=Yw(n,Vw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Vw(t,e){if(Za=-1,el=0,(X&6)!==0)throw Error(x(327));var n=t.callbackNode;if($i()&&t.callbackNode!==n)return null;var r=ml(t,t===Oe?Ue:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Rl(t,r);else{e=r;var i=X;X|=2;var s=Hw();(Oe!==t||Ue!==e)&&(on=null,qi=ye()+500,Dr(t,e));do try{sx();break}catch(a){Bw(t,a)}while(1);Vd(),Nl.current=s,X=i,Se!==null?e=0:(Oe=null,Ue=0,e=xe)}if(e!==0){if(e===2&&(i=Bf(t),i!==0&&(r=i,e=vh(t,i))),e===1)throw n=ko,Dr(t,0),Mn(t,r),ct(t,ye()),n;if(e===6)Mn(t,r);else{if(i=t.current.alternate,(r&30)===0&&!rx(i)&&(e=Rl(t,r),e===2&&(s=Bf(t),s!==0&&(r=s,e=vh(t,s))),e===1))throw n=ko,Dr(t,0),Mn(t,r),ct(t,ye()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:Sr(t,it,on);break;case 3:if(Mn(t,r),(r&130023424)===r&&(e=rp+500-ye(),10<e)){if(ml(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){et(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Xf(Sr.bind(null,t,it,on),e);break}Sr(t,it,on);break;case 4:if(Mn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ut(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*nx(r/1960))-r,10<r){t.timeoutHandle=Xf(Sr.bind(null,t,it,on),r);break}Sr(t,it,on);break;case 5:Sr(t,it,on);break;default:throw Error(x(329))}}}return ct(t,ye()),t.callbackNode===n?Vw.bind(null,t):null}function vh(t,e){var n=Gs;return t.current.memoizedState.isDehydrated&&(Dr(t,e).flags|=256),t=Rl(t,e),t!==2&&(e=it,it=n,e!==null&&yh(e)),t}function yh(t){it===null?it=t:it.push.apply(it,t)}function rx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!zt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Mn(t,e){for(e&=~np,e&=~wu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ut(e),r=1<<n;t[n]=-1,e&=~r}}function ev(t){if((X&6)!==0)throw Error(x(327));$i();var e=ml(t,0);if((e&1)===0)return ct(t,ye()),null;var n=Rl(t,e);if(t.tag!==0&&n===2){var r=Bf(t);r!==0&&(e=r,n=vh(t,r))}if(n===1)throw n=ko,Dr(t,0),Mn(t,e),ct(t,ye()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Sr(t,it,on),ct(t,ye()),null}function ip(t,e){var n=X;X|=1;try{return t(e)}finally{X=n,X===0&&(qi=ye()+500,mu&&fr())}}function Wr(t){Vn!==null&&Vn.tag===0&&(X&6)===0&&$i();var e=X;X|=1;var n=At.transition,r=te;try{if(At.transition=null,te=1,t)return t()}finally{te=r,At.transition=n,X=e,(X&6)===0&&fr()}}function sp(){ht=Ti.current,ae(Ti)}function Dr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,RT(n)),Se!==null)for(n=Se.return;n!==null;){var r=n;switch(Ud(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&El();break;case 3:Gi(),ae(lt),ae(Ye),qd();break;case 5:Kd(r);break;case 4:Gi();break;case 13:ae(he);break;case 19:ae(he);break;case 10:Bd(r.type._context);break;case 22:case 23:sp()}n=n.return}if(Oe=t,Se=t=Xn(t.current,null),Ue=ht=e,xe=0,ko=null,np=wu=Hr=0,it=Gs=null,br!==null){for(e=0;e<br.length;e++)if(n=br[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}br=null}return t}function Bw(t,e){do{var n=Se;try{if(Vd(),Qa.current=Al,Cl){for(var r=de.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Cl=!1}if(Br=0,Ne=Te=de=null,Hs=!1,Eo=0,tp.current=null,n===null||n.return===null){xe=1,ko=e,Se=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ue,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if((c.mode&1)===0&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=zg(o);if(p!==null){p.flags&=-257,Vg(p,o,a,s,e),p.mode&1&&jg(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(l),e.updateQueue=w}else v.add(l);break e}else{if((e&1)===0){jg(s,u,e),op();break e}l=Error(x(426))}}else if(ue&&a.mode&1){var _=zg(o);if(_!==null){(_.flags&65536)===0&&(_.flags|=256),Vg(_,o,a,s,e),jd(Ki(l,a));break e}}s=l=Ki(l,a),xe!==4&&(xe=2),Gs===null?Gs=[s]:Gs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=bw(s,l,e);Rg(s,m);break e;case 1:a=l;var d=s.type,g=s.stateNode;if((s.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Yn===null||!Yn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Iw(s,a,e);Rg(s,E);break e}}s=s.return}while(s!==null)}Gw(n)}catch(T){e=T,Se===n&&n!==null&&(Se=n=n.return);continue}break}while(1)}function Hw(){var t=Nl.current;return Nl.current=Al,t===null?Al:t}function op(){(xe===0||xe===3||xe===2)&&(xe=4),Oe===null||(Hr&268435455)===0&&(wu&268435455)===0||Mn(Oe,Ue)}function Rl(t,e){var n=X;X|=2;var r=Hw();(Oe!==t||Ue!==e)&&(on=null,Dr(t,e));do try{ix();break}catch(i){Bw(t,i)}while(1);if(Vd(),X=n,Nl.current=r,Se!==null)throw Error(x(261));return Oe=null,Ue=0,xe}function ix(){for(;Se!==null;)Ww(Se)}function sx(){for(;Se!==null&&!Nk();)Ww(Se)}function Ww(t){var e=qw(t.alternate,t,ht);t.memoizedProps=t.pendingProps,e===null?Gw(t):Se=e,tp.current=null}function Gw(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=XT(n,e,ht),n!==null){Se=n;return}}else{if(n=JT(n,e),n!==null){n.flags&=32767,Se=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xe=6,Se=null;return}}if(e=e.sibling,e!==null){Se=e;return}Se=e=t}while(e!==null);xe===0&&(xe=5)}function Sr(t,e,n){var r=te,i=At.transition;try{At.transition=null,te=1,ox(t,e,n,r)}finally{At.transition=i,te=r}return null}function ox(t,e,n,r){do $i();while(Vn!==null);if((X&6)!==0)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(jk(t,s),t===Oe&&(Se=Oe=null,Ue=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Ra||(Ra=!0,Yw(pl,function(){return $i(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=At.transition,At.transition=null;var o=te;te=1;var a=X;X|=4,tp.current=null,ex(t,n),jw(n,t),bT(Yf),gl=!!qf,Yf=qf=null,t.current=n,tx(n),Ok(),X=a,te=o,At.transition=s}else t.current=n;if(Ra&&(Ra=!1,Vn=t,Pl=i),s=t.pendingLanes,s===0&&(Yn=null),Dk(n.stateNode),ct(t,ye()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ol)throw Ol=!1,t=mh,mh=null,t;return(Pl&1)!==0&&t.tag!==0&&$i(),s=t.pendingLanes,(s&1)!==0?t===gh?Ks++:(Ks=0,gh=t):Ks=0,fr(),null}function $i(){if(Vn!==null){var t=x1(Pl),e=At.transition,n=te;try{if(At.transition=null,te=16>t?16:t,Vn===null)var r=!1;else{if(t=Vn,Vn=null,Pl=0,(X&6)!==0)throw Error(x(331));var i=X;for(X|=4,O=t.current;O!==null;){var s=O,o=s.child;if((O.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(O=u;O!==null;){var c=O;switch(c.tag){case 0:case 11:case 15:Ws(8,c,s)}var f=c.child;if(f!==null)f.return=c,O=f;else for(;O!==null;){c=O;var h=c.sibling,p=c.return;if(Mw(c),c===u){O=null;break}if(h!==null){h.return=p,O=h;break}O=p}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var _=w.sibling;w.sibling=null,w=_}while(w!==null)}}O=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,O=o;else e:for(;O!==null;){if(s=O,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Ws(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,O=m;break e}O=s.return}}var d=t.current;for(O=d;O!==null;){o=O;var g=o.child;if((o.subtreeFlags&2064)!==0&&g!==null)g.return=o,O=g;else e:for(o=d;O!==null;){if(a=O,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:yu(9,a)}}catch(T){me(a,a.return,T)}if(a===o){O=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,O=E;break e}O=a.return}}if(X=i,fr(),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(cu,t)}catch{}r=!0}return r}finally{te=n,At.transition=e}}return!1}function tv(t,e,n){e=Ki(n,e),e=bw(t,e,1),t=qn(t,e,1),e=et(),t!==null&&(Bo(t,1,e),ct(t,e))}function me(t,e,n){if(t.tag===3)tv(t,t,n);else for(;e!==null;){if(e.tag===3){tv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yn===null||!Yn.has(r))){t=Ki(n,t),t=Iw(e,t,1),e=qn(e,t,1),t=et(),e!==null&&(Bo(e,1,t),ct(e,t));break}}e=e.return}}function ax(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=et(),t.pingedLanes|=t.suspendedLanes&n,Oe===t&&(Ue&n)===n&&(xe===4||xe===3&&(Ue&130023424)===Ue&&500>ye()-rp?Dr(t,0):np|=n),ct(t,e)}function Kw(t,e){e===0&&((t.mode&1)===0?e=1:(e=ka,ka<<=1,(ka&130023424)===0&&(ka=4194304)));var n=et();t=yn(t,e),t!==null&&(Bo(t,e,n),ct(t,n))}function lx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Kw(t,n)}function ux(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),Kw(t,n)}var qw;qw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||lt.current)ot=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return ot=!1,QT(t,e,n);ot=(t.flags&131072)!==0}else ot=!1,ue&&(e.flags&1048576)!==0&&X1(e,kl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ja(t,e),t=e.pendingProps;var i=Bi(e,Ye.current);Di(e,n),i=Qd(null,e,r,t,i,n);var s=Xd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ut(r)?(s=!0,Sl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Wd(e),i.updater=gu,e.stateNode=i,i._reactInternals=e,ih(e,r,t,n),e=ah(null,e,r,!0,s,n)):(e.tag=0,ue&&s&&Fd(e),Qe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ja(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=fx(r),t=Rt(r,t),i){case 0:e=oh(null,e,r,t,n);break e;case 1:e=Wg(null,e,r,t,n);break e;case 11:e=Bg(null,e,r,t,n);break e;case 14:e=Hg(null,e,r,Rt(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rt(r,i),oh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rt(r,i),Wg(t,e,r,i,n);case 3:e:{if(Ow(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,tw(t,e),bl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ki(Error(x(423)),e),e=Gg(t,e,r,n,i);break e}else if(r!==i){i=Ki(Error(x(424)),e),e=Gg(t,e,r,n,i);break e}else for(dt=Kn(e.stateNode.containerInfo.firstChild),gt=e,ue=!0,$t=null,n=sw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hi(),r===i){e=wn(t,e,n);break e}Qe(t,e,r,n)}e=e.child}return e;case 5:return ow(e),t===null&&th(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Qf(r,i)?o=null:s!==null&&Qf(r,s)&&(e.flags|=32),Nw(t,e),Qe(t,e,o,n),e.child;case 6:return t===null&&th(e),null;case 13:return Pw(t,e,n);case 4:return Gd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Wi(e,null,r,n):Qe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rt(r,i),Bg(t,e,r,i,n);case 7:return Qe(t,e,e.pendingProps,n),e.child;case 8:return Qe(t,e,e.pendingProps.children,n),e.child;case 12:return Qe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ie(Tl,r._currentValue),r._currentValue=o,s!==null)if(zt(s.value,o)){if(s.children===i.children&&!lt.current){e=wn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=pn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),nh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),nh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Qe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Di(e,n),i=Nt(i),r=r(i),e.flags|=1,Qe(t,e,r,n),e.child;case 14:return r=e.type,i=Rt(r,e.pendingProps),i=Rt(r.type,i),Hg(t,e,r,i,n);case 15:return Cw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Rt(r,i),Ja(t,e),e.tag=1,ut(r)?(t=!0,Sl(e)):t=!1,Di(e,n),rw(e,r,i),ih(e,r,i,n),ah(null,e,r,!0,t,n);case 19:return Rw(t,e,n);case 22:return Aw(t,e,n)}throw Error(x(156,e.tag))};function Yw(t,e){return S1(t,e)}function cx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(t,e,n,r){return new cx(t,e,n,r)}function ap(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fx(t){if(typeof t=="function")return ap(t)?1:0;if(t!=null){if(t=t.$$typeof,t===bd)return 11;if(t===Id)return 14}return 2}function Xn(t,e){var n=t.alternate;return n===null?(n=Ct(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function tl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")ap(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case pi:return $r(n.children,i,s,e);case xd:o=8,i|=8;break;case Cf:return t=Ct(12,n,e,i|2),t.elementType=Cf,t.lanes=s,t;case Af:return t=Ct(13,n,e,i),t.elementType=Af,t.lanes=s,t;case Nf:return t=Ct(19,n,e,i),t.elementType=Nf,t.lanes=s,t;case i1:return Eu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case n1:o=10;break e;case r1:o=9;break e;case bd:o=11;break e;case Id:o=14;break e;case Dn:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=Ct(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function $r(t,e,n,r){return t=Ct(7,t,r,e),t.lanes=n,t}function Eu(t,e,n,r){return t=Ct(22,t,r,e),t.elementType=i1,t.lanes=n,t.stateNode={isHidden:!1},t}function Wc(t,e,n){return t=Ct(6,t,null,e),t.lanes=n,t}function Gc(t,e,n){return e=Ct(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function hx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bc(0),this.expirationTimes=bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function lp(t,e,n,r,i,s,o,a,l){return t=new hx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ct(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wd(s),t}function dx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:di,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Qw(t){if(!t)return tr;t=t._reactInternals;e:{if(ii(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ut(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(ut(n))return Y1(t,n,e)}return e}function Xw(t,e,n,r,i,s,o,a,l){return t=lp(n,r,!0,t,i,s,o,a,l),t.context=Qw(null),n=t.current,r=et(),i=Qn(n),s=pn(r,i),s.callback=e!=null?e:null,qn(n,s,i),t.current.lanes=i,Bo(t,i,r),ct(t,r),t}function Su(t,e,n,r){var i=e.current,s=et(),o=Qn(i);return n=Qw(n),e.context===null?e.context=n:e.pendingContext=n,e=pn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=qn(i,e,o),t!==null&&(jt(t,i,o,s),Ya(t,i,o)),o}function Dl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function nv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function up(t,e){nv(t,e),(t=t.alternate)&&nv(t,e)}function px(){return null}var Jw=typeof reportError=="function"?reportError:function(t){console.error(t)};function cp(t){this._internalRoot=t}_u.prototype.render=cp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));Su(t,e,null,null)};_u.prototype.unmount=cp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wr(function(){Su(null,t,null,null)}),e[vn]=null}};function _u(t){this._internalRoot=t}_u.prototype.unstable_scheduleHydration=function(t){if(t){var e=C1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ln.length&&e!==0&&e<Ln[n].priority;n++);Ln.splice(n,0,t),n===0&&N1(t)}};function fp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ku(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function rv(){}function mx(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Dl(o);s.call(u)}}var o=Xw(e,r,t,0,null,!1,!1,"",rv);return t._reactRootContainer=o,t[vn]=o.current,mo(t.nodeType===8?t.parentNode:t),Wr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Dl(l);a.call(u)}}var l=lp(t,0,!1,null,null,!1,!1,"",rv);return t._reactRootContainer=l,t[vn]=l.current,mo(t.nodeType===8?t.parentNode:t),Wr(function(){Su(e,l,n,r)}),l}function Tu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Dl(o);a.call(l)}}Su(e,o,t,i)}else o=mx(n,e,t,i,r);return Dl(o)}b1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ds(e.pendingLanes);n!==0&&(Nd(e,n|1),ct(e,ye()),(X&6)===0&&(qi=ye()+500,fr()))}break;case 13:Wr(function(){var r=yn(t,1);if(r!==null){var i=et();jt(r,t,1,i)}}),up(t,1)}};Od=function(t){if(t.tag===13){var e=yn(t,134217728);if(e!==null){var n=et();jt(e,t,134217728,n)}up(t,134217728)}};I1=function(t){if(t.tag===13){var e=Qn(t),n=yn(t,e);if(n!==null){var r=et();jt(n,t,e,r)}up(t,e)}};C1=function(){return te};A1=function(t,e){var n=te;try{return te=t,e()}finally{te=n}};jf=function(t,e,n){switch(e){case"input":if(Rf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=pu(r);if(!i)throw Error(x(90));o1(r),Rf(r,i)}}}break;case"textarea":l1(t,n);break;case"select":e=n.value,e!=null&&Ni(t,!!n.multiple,e,!1)}};m1=ip;g1=Wr;var gx={usingClientEntryPoint:!1,Events:[Wo,yi,pu,d1,p1,ip]},As={findFiberByHostInstance:xr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},vx={bundleType:As.bundleType,version:As.version,rendererPackageName:As.rendererPackageName,rendererConfig:As.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:In.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=w1(t),t===null?null:t.stateNode},findFiberByHostInstance:As.findFiberByHostInstance||px,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Da=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Da.isDisabled&&Da.supportsFiber)try{cu=Da.inject(vx),qt=Da}catch{}}Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gx;Et.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fp(e))throw Error(x(200));return dx(t,e,null,n)};Et.createRoot=function(t,e){if(!fp(t))throw Error(x(299));var n=!1,r="",i=Jw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=lp(t,1,!1,null,null,n,!1,r,i),t[vn]=e.current,mo(t.nodeType===8?t.parentNode:t),new cp(e)};Et.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=w1(e),t=t===null?null:t.stateNode,t};Et.flushSync=function(t){return Wr(t)};Et.hydrate=function(t,e,n){if(!ku(e))throw Error(x(200));return Tu(null,t,e,!0,n)};Et.hydrateRoot=function(t,e,n){if(!fp(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Jw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Xw(e,null,t,1,n!=null?n:null,i,!1,s,o),t[vn]=e.current,mo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new _u(e)};Et.render=function(t,e,n){if(!ku(e))throw Error(x(200));return Tu(null,t,e,!1,n)};Et.unmountComponentAtNode=function(t){if(!ku(t))throw Error(x(40));return t._reactRootContainer?(Wr(function(){Tu(null,null,t,!1,function(){t._reactRootContainer=null,t[vn]=null})}),!0):!1};Et.unstable_batchedUpdates=ip;Et.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ku(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return Tu(t,e,n,!1,r)};Et.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Et})(X0);var iv=X0.exports;bf.createRoot=iv.createRoot,bf.hydrateRoot=iv.hydrateRoot;function $l(){return $l=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$l.apply(this,arguments)}var Cr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Cr||(Cr={}));var sv=function(t){return t},ov="beforeunload",yx="popstate";function wx(t){t===void 0&&(t={});var e=t,n=e.window,r=n===void 0?document.defaultView:n,i=r.history;function s(){var k=r.location,b=k.pathname,F=k.search,U=k.hash,fe=i.state||{};return[fe.idx,sv({pathname:b,search:F,hash:U,state:fe.usr||null,key:fe.key||"default"})]}var o=null;function a(){if(o)p.call(o),o=null;else{var k=Cr.Pop,b=s(),F=b[0],U=b[1];if(p.length){if(F!=null){var fe=c-F;fe&&(o={action:k,location:U,retry:function(){T(fe*-1)}},T(fe))}}else d(k)}}r.addEventListener(yx,a);var l=Cr.Pop,u=s(),c=u[0],f=u[1],h=lv(),p=lv();c==null&&(c=0,i.replaceState($l({},i.state,{idx:c}),""));function v(k){return typeof k=="string"?k:wh(k)}function w(k,b){return b===void 0&&(b=null),sv($l({pathname:f.pathname,hash:"",search:""},typeof k=="string"?si(k):k,{state:b,key:Ex()}))}function _(k,b){return[{usr:k.state,key:k.key,idx:b},v(k)]}function m(k,b,F){return!p.length||(p.call({action:k,location:b,retry:F}),!1)}function d(k){l=k;var b=s();c=b[0],f=b[1],h.call({action:l,location:f})}function g(k,b){var F=Cr.Push,U=w(k,b);function fe(){g(k,b)}if(m(F,U,fe)){var Tt=_(U,c+1),sn=Tt[0],vr=Tt[1];try{i.pushState(sn,"",vr)}catch{r.location.assign(vr)}d(F)}}function E(k,b){var F=Cr.Replace,U=w(k,b);function fe(){E(k,b)}if(m(F,U,fe)){var Tt=_(U,c),sn=Tt[0],vr=Tt[1];i.replaceState(sn,"",vr),d(F)}}function T(k){i.go(k)}var C={get action(){return l},get location(){return f},createHref:v,push:g,replace:E,go:T,back:function(){T(-1)},forward:function(){T(1)},listen:function(b){return h.push(b)},block:function(b){var F=p.push(b);return p.length===1&&r.addEventListener(ov,av),function(){F(),p.length||r.removeEventListener(ov,av)}}};return C}function av(t){t.preventDefault(),t.returnValue=""}function lv(){var t=[];return{get length(){return t.length},push:function(n){return t.push(n),function(){t=t.filter(function(r){return r!==n})}},call:function(n){t.forEach(function(r){return r&&r(n)})}}}function Ex(){return Math.random().toString(36).substr(2,8)}function wh(t){var e=t.pathname,n=e===void 0?"/":e,r=t.search,i=r===void 0?"":r,s=t.hash,o=s===void 0?"":s;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(n+=o.charAt(0)==="#"?o:"#"+o),n}function si(t){var e={};if(t){var n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));var r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const hp=S.exports.createContext(null),dp=S.exports.createContext(null),Ko=S.exports.createContext({outlet:null,matches:[]});function Vt(t,e){if(!t)throw new Error(e)}function Sx(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?si(e):e,i=tE(r.pathname||"/",n);if(i==null)return null;let s=Zw(t);_x(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Ox(s[a],i);return o}function Zw(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(r)||Vt(!1),o.relativePath=o.relativePath.slice(r.length));let a=Jn([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(i.index===!0&&Vt(!1),Zw(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:Ax(a,i.index),routesMeta:l})}),e}function _x(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Nx(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const kx=/^:\w+$/,Tx=3,xx=2,bx=1,Ix=10,Cx=-2,uv=t=>t==="*";function Ax(t,e){let n=t.split("/"),r=n.length;return n.some(uv)&&(r+=Cx),e&&(r+=xx),n.filter(i=>!uv(i)).reduce((i,s)=>i+(kx.test(s)?Tx:s===""?bx:Ix),r)}function Nx(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Ox(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=Px({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;s.push({params:r,pathname:Jn([i,c.pathname]),pathnameBase:nE(Jn([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=Jn([i,c.pathnameBase]))}return s}function Px(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Rx(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let h=a[f]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=Dx(a[f]||""),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Rx(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),r]}function Dx(t,e){try{return decodeURIComponent(t)}catch{return t}}function $x(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?si(t):t;return{pathname:n?n.startsWith("/")?n:Lx(n,e):e,search:Fx(r),hash:Ux(i)}}function Lx(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function eE(t,e,n){let r=typeof t=="string"?si(t):t,i=t===""||r.pathname===""?"/":r.pathname,s;if(i==null)s=n;else{let a=e.length-1;if(i.startsWith("..")){let l=i.split("/");for(;l[0]==="..";)l.shift(),a-=1;r.pathname=l.join("/")}s=a>=0?e[a]:"/"}let o=$x(r,s);return i&&i!=="/"&&i.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function Mx(t){return t===""||t.pathname===""?"/":typeof t=="string"?si(t).pathname:t.pathname}function tE(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const Jn=t=>t.join("/").replace(/\/\/+/g,"/"),nE=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Fx=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Ux=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function jx(t){us()||Vt(!1);let{basename:e,navigator:n}=S.exports.useContext(hp),{hash:r,pathname:i,search:s}=pp(t),o=i;if(e!=="/"){let a=Mx(t),l=a!=null&&a.endsWith("/");o=i==="/"?e+(l?"/":""):Jn([e,i])}return n.createHref({pathname:o,search:s,hash:r})}function us(){return S.exports.useContext(dp)!=null}function Cn(){return us()||Vt(!1),S.exports.useContext(dp).location}function qo(){us()||Vt(!1);let{basename:t,navigator:e}=S.exports.useContext(hp),{matches:n}=S.exports.useContext(Ko),{pathname:r}=Cn(),i=JSON.stringify(n.map(a=>a.pathnameBase)),s=S.exports.useRef(!1);return S.exports.useEffect(()=>{s.current=!0}),S.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=eE(a,JSON.parse(i),r);t!=="/"&&(u.pathname=Jn([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state)},[t,e,i,r])}function rE(){let{matches:t}=S.exports.useContext(Ko),e=t[t.length-1];return e?e.params:{}}function pp(t){let{matches:e}=S.exports.useContext(Ko),{pathname:n}=Cn(),r=JSON.stringify(e.map(i=>i.pathnameBase));return S.exports.useMemo(()=>eE(t,JSON.parse(r),n),[t,r,n])}function zx(t,e){us()||Vt(!1);let{matches:n}=S.exports.useContext(Ko),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let s=r?r.pathnameBase:"/";r&&r.route;let o=Cn(),a;if(e){var l;let h=typeof e=="string"?si(e):e;s==="/"||((l=h.pathname)==null?void 0:l.startsWith(s))||Vt(!1),a=h}else a=o;let u=a.pathname||"/",c=s==="/"?u:u.slice(s.length)||"/",f=Sx(t,{pathname:c});return Vx(f&&f.map(h=>Object.assign({},h,{params:Object.assign({},i,h.params),pathname:Jn([s,h.pathname]),pathnameBase:h.pathnameBase==="/"?s:Jn([s,h.pathnameBase])})),n)}function Vx(t,e){return e===void 0&&(e=[]),t==null?null:t.reduceRight((n,r,i)=>S.exports.createElement(Ko.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:e.concat(t.slice(0,i+1))}}),null)}function Bx(t){let{to:e,replace:n,state:r}=t;us()||Vt(!1);let i=qo();return S.exports.useEffect(()=>{i(e,{replace:n,state:r})}),null}function _r(t){Vt(!1)}function Hx(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Cr.Pop,navigator:s,static:o=!1}=t;us()&&Vt(!1);let a=nE(e),l=S.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=si(r));let{pathname:u="/",search:c="",hash:f="",state:h=null,key:p="default"}=r,v=S.exports.useMemo(()=>{let w=tE(u,a);return w==null?null:{pathname:w,search:c,hash:f,state:h,key:p}},[a,u,c,f,h,p]);return v==null?null:S.exports.createElement(hp.Provider,{value:l},S.exports.createElement(dp.Provider,{children:n,value:{location:v,navigationType:i}}))}function Wx(t){let{children:e,location:n}=t;return zx(Eh(e),n)}function Eh(t){let e=[];return S.exports.Children.forEach(t,n=>{if(!S.exports.isValidElement(n))return;if(n.type===S.exports.Fragment){e.push.apply(e,Eh(n.props.children));return}n.type!==_r&&Vt(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=Eh(n.props.children)),e.push(r)}),e}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ll(){return Ll=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ll.apply(this,arguments)}function iE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const Gx=["onClick","reloadDocument","replace","state","target","to"],Kx=["aria-current","caseSensitive","className","end","style","to","children"];function qx(t){let{basename:e,children:n,window:r}=t,i=S.exports.useRef();i.current==null&&(i.current=wx({window:r}));let s=i.current,[o,a]=S.exports.useState({action:s.action,location:s.location});return S.exports.useLayoutEffect(()=>s.listen(a),[s]),S.exports.createElement(Hx,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}function Yx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}const hr=S.exports.forwardRef(function(e,n){let{onClick:r,reloadDocument:i,replace:s=!1,state:o,target:a,to:l}=e,u=iE(e,Gx),c=jx(l),f=Qx(l,{replace:s,state:o,target:a});function h(p){r&&r(p),!p.defaultPrevented&&!i&&f(p)}return S.exports.createElement("a",Ll({},u,{href:c,onClick:h,ref:n,target:a}))}),cv=S.exports.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=iE(e,Kx),f=Cn(),h=pp(l),p=f.pathname,v=h.pathname;i||(p=p.toLowerCase(),v=v.toLowerCase());let w=p===v||!o&&p.startsWith(v)&&p.charAt(v.length)==="/",_=w?r:void 0,m;typeof s=="function"?m=s({isActive:w}):m=[s,w?"active":null].filter(Boolean).join(" ");let d=typeof a=="function"?a({isActive:w}):a;return S.exports.createElement(hr,Ll({},c,{"aria-current":_,className:m,ref:n,style:d,to:l}),typeof u=="function"?u({isActive:w}):u)});function Qx(t,e){let{target:n,replace:r,state:i}=e===void 0?{}:e,s=qo(),o=Cn(),a=pp(t);return S.exports.useCallback(l=>{if(l.button===0&&(!n||n==="_self")&&!Yx(l)){l.preventDefault();let u=!!r||wh(o)===wh(a);s(t,{replace:u,state:i})}},[o,s,a,r,i,n,t])}function dr(t){let e=S.exports.useRef(Kc(t)),n=Cn(),r=S.exports.useMemo(()=>{let o=Kc(n.search);for(let a of e.current.keys())o.has(a)||e.current.getAll(a).forEach(l=>{o.append(a,l)});return o},[n.search]),i=qo(),s=S.exports.useCallback((o,a)=>{i("?"+Kc(o),a)},[i]);return[r,s]}function Kc(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}var mp={exports:{}},xu={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xx=S.exports,Jx=Symbol.for("react.element"),Zx=Symbol.for("react.fragment"),eb=Object.prototype.hasOwnProperty,tb=Xx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nb={key:!0,ref:!0,__self:!0,__source:!0};function sE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)eb.call(e,r)&&!nb.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Jx,type:t,key:s,ref:o,props:i,_owner:tb.current}}xu.Fragment=Zx;xu.jsx=sE;xu.jsxs=sE;(function(t){t.exports=xu})(mp);const y=mp.exports.jsx,D=mp.exports.jsxs,rb=()=>D(hr,{to:"/anime-plataform",className:"text-3xl dark:text-slate-50 text-stone-800 font-bold font-serif",children:["Anime",y("span",{className:"text-blue-500",children:"DV"})]});/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var ib={prefix:"far",iconName:"circle-play",icon:[512,512,[61469,"play-circle"],"f144","M188.3 147.1C195.8 142.8 205.1 142.1 212.5 147.5L356.5 235.5C363.6 239.9 368 247.6 368 256C368 264.4 363.6 272.1 356.5 276.5L212.5 364.5C205.1 369 195.8 369.2 188.3 364.9C180.7 360.7 176 352.7 176 344V167.1C176 159.3 180.7 151.3 188.3 147.1V147.1zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"]},sb=ib,ob={prefix:"far",iconName:"face-meh",icon:[512,512,[128528,"meh"],"f11a","M144.4 208C144.4 190.3 158.7 176 176.4 176C194 176 208.4 190.3 208.4 208C208.4 225.7 194 240 176.4 240C158.7 240 144.4 225.7 144.4 208zM368.4 208C368.4 225.7 354 240 336.4 240C318.7 240 304.4 225.7 304.4 208C304.4 190.3 318.7 176 336.4 176C354 176 368.4 190.3 368.4 208zM328 328C341.3 328 352 338.7 352 352C352 365.3 341.3 376 328 376H184C170.7 376 160 365.3 160 352C160 338.7 170.7 328 184 328H328zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464z"]},ab={prefix:"far",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,10084,61578,9829],"f004","M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"]},lb={prefix:"far",iconName:"moon",icon:[512,512,[127769,9214],"f186","M421.6 379.9c-.6641 0-1.35 .0625-2.049 .1953c-11.24 2.143-22.37 3.17-33.32 3.17c-94.81 0-174.1-77.14-174.1-175.5c0-63.19 33.79-121.3 88.73-152.6c8.467-4.812 6.339-17.66-3.279-19.44c-11.2-2.078-29.53-3.746-40.9-3.746C132.3 31.1 32 132.2 32 256c0 123.6 100.1 224 223.8 224c69.04 0 132.1-31.45 173.8-82.93C435.3 389.1 429.1 379.9 421.6 379.9zM255.8 432C158.9 432 80 353 80 256c0-76.32 48.77-141.4 116.7-165.8C175.2 125 163.2 165.6 163.2 207.8c0 99.44 65.13 183.9 154.9 212.8C298.5 428.1 277.4 432 255.8 432z"]},ub={prefix:"far",iconName:"star",icon:[576,512,[61446,11088],"f005","M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z"]},cb={prefix:"far",iconName:"sun",icon:[512,512,[9728],"f185","M505.2 324.8l-47.73-68.78l47.75-68.81c7.359-10.62 8.797-24.12 3.844-36.06c-4.969-11.94-15.52-20.44-28.22-22.72l-82.39-14.88l-14.89-82.41c-2.281-12.72-10.76-23.25-22.69-28.22c-11.97-4.936-25.42-3.498-36.12 3.844L256 54.49L187.2 6.709C176.5-.6016 163.1-2.039 151.1 2.896c-11.92 4.971-20.4 15.5-22.7 28.19l-14.89 82.44L31.15 128.4C18.42 130.7 7.854 139.2 2.9 151.2C-2.051 163.1-.5996 176.6 6.775 187.2l47.73 68.78l-47.75 68.81c-7.359 10.62-8.795 24.12-3.844 36.06c4.969 11.94 15.52 20.44 28.22 22.72l82.39 14.88l14.89 82.41c2.297 12.72 10.78 23.25 22.7 28.22c11.95 4.906 25.44 3.531 36.09-3.844L256 457.5l68.83 47.78C331.3 509.7 338.8 512 346.3 512c4.906 0 9.859-.9687 14.56-2.906c11.92-4.969 20.4-15.5 22.7-28.19l14.89-82.44l82.37-14.88c12.73-2.281 23.3-10.78 28.25-22.75C514.1 348.9 512.6 335.4 505.2 324.8zM456.8 339.2l-99.61 18l-18 99.63L256 399.1L172.8 456.8l-18-99.63l-99.61-18L112.9 255.1L55.23 172.8l99.61-18l18-99.63L256 112.9l83.15-57.75l18.02 99.66l99.61 18L399.1 255.1L456.8 339.2zM256 143.1c-61.85 0-111.1 50.14-111.1 111.1c0 61.85 50.15 111.1 111.1 111.1s111.1-50.14 111.1-111.1C367.1 194.1 317.8 143.1 256 143.1zM256 319.1c-35.28 0-63.99-28.71-63.99-63.99S220.7 192 256 192s63.99 28.71 63.99 63.1S291.3 319.1 256 319.1z"]};/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function fv(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function N(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?fv(Object(n),!0).forEach(function(r){db(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):fv(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ml(t){return Ml=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ml(t)}function fb(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function hv(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function hb(t,e,n){return e&&hv(t.prototype,e),n&&hv(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function db(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function gp(t,e){return mb(t)||vb(t,e)||oE(t,e)||wb()}function bu(t){return pb(t)||gb(t)||oE(t)||yb()}function pb(t){if(Array.isArray(t))return Sh(t)}function mb(t){if(Array.isArray(t))return t}function gb(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function vb(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function oE(t,e){if(!!t){if(typeof t=="string")return Sh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Sh(t,e)}}function Sh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function yb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var dv=function(){},vp={},aE={},lE=null,uE={mark:dv,measure:dv};try{typeof window<"u"&&(vp=window),typeof document<"u"&&(aE=document),typeof MutationObserver<"u"&&(lE=MutationObserver),typeof performance<"u"&&(uE=performance)}catch{}var Eb=vp.navigator||{},pv=Eb.userAgent,mv=pv===void 0?"":pv,nr=vp,le=aE,gv=lE,$a=uE;nr.document;var An=!!le.documentElement&&!!le.head&&typeof le.addEventListener=="function"&&typeof le.createElement=="function",cE=~mv.indexOf("MSIE")||~mv.indexOf("Trident/"),En="___FONT_AWESOME___",_h=16,fE="fa",hE="svg-inline--fa",Gr="data-fa-i2svg",kh="data-fa-pseudo-element",Sb="data-fa-pseudo-element-pending",yp="data-prefix",wp="data-icon",vv="fontawesome-i2svg",_b="async",kb=["HTML","HEAD","STYLE","SCRIPT"],dE=function(){try{return!0}catch{return!1}}(),Ep={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},Fl={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},pE={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Tb={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},xb=/fa[srltdbk]?[\-\ ]/,mE="fa-layers-text",bb=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Ib={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},gE=[1,2,3,4,5,6,7,8,9,10],Cb=gE.concat([11,12,13,14,15,16,17,18,19,20]),Ab=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ar={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Nb=[].concat(bu(Object.keys(Fl)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ar.GROUP,Ar.SWAP_OPACITY,Ar.PRIMARY,Ar.SECONDARY]).concat(gE.map(function(t){return"".concat(t,"x")})).concat(Cb.map(function(t){return"w-".concat(t)})),vE=nr.FontAwesomeConfig||{};function Ob(t){var e=le.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Pb(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(le&&typeof le.querySelector=="function"){var Rb=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Rb.forEach(function(t){var e=gp(t,2),n=e[0],r=e[1],i=Pb(Ob(n));i!=null&&(vE[r]=i)})}var Db={familyPrefix:fE,styleDefault:"solid",replacementClass:hE,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},qs=N(N({},Db),vE);qs.autoReplaceSvg||(qs.observeMutations=!1);var L={};Object.keys(qs).forEach(function(t){Object.defineProperty(L,t,{enumerable:!0,set:function(n){qs[t]=n,nl.forEach(function(r){return r(L)})},get:function(){return qs[t]}})});nr.FontAwesomeConfig=L;var nl=[];function $b(t){return nl.push(t),function(){nl.splice(nl.indexOf(t),1)}}var Pn=_h,Kt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Lb(t){if(!(!t||!An)){var e=le.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=le.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return le.head.insertBefore(e,r),t}}var Mb="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function To(){for(var t=12,e="";t-- >0;)e+=Mb[Math.random()*62|0];return e}function cs(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Sp(t){return t.classList?cs(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function yE(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Fb(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(yE(t[n]),'" ')},"").trim()}function Iu(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function _p(t){return t.size!==Kt.size||t.x!==Kt.x||t.y!==Kt.y||t.rotate!==Kt.rotate||t.flipX||t.flipY}function Ub(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function jb(t){var e=t.transform,n=t.width,r=n===void 0?_h:n,i=t.height,s=i===void 0?_h:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&cE?l+="translate(".concat(e.x/Pn-r/2,"em, ").concat(e.y/Pn-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Pn,"em), calc(-50% + ").concat(e.y/Pn,"em)) "):l+="translate(".concat(e.x/Pn,"em, ").concat(e.y/Pn,"em) "),l+="scale(".concat(e.size/Pn*(e.flipX?-1:1),", ").concat(e.size/Pn*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var zb=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function wE(){var t=fE,e=hE,n=L.familyPrefix,r=L.replacementClass,i=zb;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var yv=!1;function qc(){L.autoAddCss&&!yv&&(Lb(wE()),yv=!0)}var Vb={mixout:function(){return{dom:{css:wE,insertCss:qc}}},hooks:function(){return{beforeDOMElementCreation:function(){qc()},beforeI2svg:function(){qc()}}}},Sn=nr||{};Sn[En]||(Sn[En]={});Sn[En].styles||(Sn[En].styles={});Sn[En].hooks||(Sn[En].hooks={});Sn[En].shims||(Sn[En].shims=[]);var Mt=Sn[En],EE=[],Bb=function t(){le.removeEventListener("DOMContentLoaded",t),Ul=1,EE.map(function(e){return e()})},Ul=!1;An&&(Ul=(le.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(le.readyState),Ul||le.addEventListener("DOMContentLoaded",Bb));function Hb(t){!An||(Ul?setTimeout(t,0):EE.push(t))}function Yo(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?yE(t):"<".concat(e," ").concat(Fb(r),">").concat(s.map(Yo).join(""),"</").concat(e,">")}function wv(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Wb=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Yc=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?Wb(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function Gb(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Th(t){var e=Gb(t);return e.length===1?e[0].toString(16):null}function Kb(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Ev(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function xh(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Ev(e);typeof Mt.hooks.addPack=="function"&&!i?Mt.hooks.addPack(t,Ev(e)):Mt.styles[t]=N(N({},Mt.styles[t]||{}),s),t==="fas"&&xh("fa",e)}var Ys=Mt.styles,qb=Mt.shims,Yb=Object.values(pE),kp=null,SE={},_E={},kE={},TE={},xE={},Qb=Object.keys(Ep);function Xb(t){return~Nb.indexOf(t)}function Jb(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!Xb(i)?i:null}var bE=function(){var e=function(s){return Yc(Ys,function(o,a,l){return o[l]=Yc(a,s,{}),o},{})};SE=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),_E=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),xE=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Ys||L.autoFetchSvg,r=Yc(qb,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});kE=r.names,TE=r.unicodes,kp=Cu(L.styleDefault)};$b(function(t){kp=Cu(t.styleDefault)});bE();function Tp(t,e){return(SE[t]||{})[e]}function Zb(t,e){return(_E[t]||{})[e]}function xi(t,e){return(xE[t]||{})[e]}function IE(t){return kE[t]||{prefix:null,iconName:null}}function eI(t){var e=TE[t],n=Tp("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function rr(){return kp}var xp=function(){return{prefix:null,iconName:null,rest:[]}};function Cu(t){var e=Ep[t],n=Fl[t]||Fl[e],r=t in Mt.styles?t:null;return n||r||null}function Au(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,i=null,s=t.reduce(function(o,a){var l=Jb(L.familyPrefix,a);if(Ys[a]?(a=Yb.includes(a)?Tb[a]:a,i=a,o.prefix=a):Qb.indexOf(a)>-1?(i=a,o.prefix=Cu(a)):l?o.iconName=l:a!==L.replacementClass&&o.rest.push(a),!r&&o.prefix&&o.iconName){var u=i==="fa"?IE(o.iconName):{},c=xi(o.prefix,o.iconName);u.prefix&&(i=null),o.iconName=u.iconName||c||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!Ys.far&&Ys.fas&&!L.autoFetchSvg&&(o.prefix="fas")}return o},xp());return(s.prefix==="fa"||i==="fa")&&(s.prefix=rr()||"fas"),s}var tI=function(){function t(){fb(this,t),this.definitions={}}return hb(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=N(N({},n.definitions[a]||{}),o[a]),xh(a,o[a]);var l=pE[a];l&&xh(l,o[a]),bE()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[a][f]=u)}),n[a][l]=u}),n}}]),t}(),Sv=[],bi={},Li={},nI=Object.keys(Li);function rI(t,e){var n=e.mixoutsTo;return Sv=t,bi={},Object.keys(Li).forEach(function(r){nI.indexOf(r)===-1&&delete Li[r]}),Sv.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Ml(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){bi[o]||(bi[o]=[]),bi[o].push(s[o])})}r.provides&&r.provides(Li)}),n}function bh(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=bi[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Kr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=bi[t]||[];i.forEach(function(s){s.apply(null,n)})}function _n(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Li[t]?Li[t].apply(null,e):void 0}function Ih(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||rr();if(!!e)return e=xi(n,e)||e,wv(CE.definitions,n,e)||wv(Mt.styles,n,e)}var CE=new tI,iI=function(){L.autoReplaceSvg=!1,L.observeMutations=!1,Kr("noAuto")},sI={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return An?(Kr("beforeI2svg",e),_n("pseudoElements2svg",e),_n("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,Hb(function(){aI({autoReplaceSvgRoot:n}),Kr("watch",e)})}},oI={icon:function(e){if(e===null)return null;if(Ml(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:xi(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Cu(e[0]);return{prefix:r,iconName:xi(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(L.familyPrefix,"-"))>-1||e.match(xb))){var i=Au(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||rr(),iconName:xi(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=rr();return{prefix:s,iconName:xi(s,e)||e}}}},_t={noAuto:iI,config:L,dom:sI,parse:oI,library:CE,findIconDefinition:Ih,toHtml:Yo},aI=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?le:n;(Object.keys(Mt.styles).length>0||L.autoFetchSvg)&&An&&L.autoReplaceSvg&&_t.dom.i2svg({node:r})};function Nu(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Yo(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!An){var r=le.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function lI(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(_p(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Iu(N(N({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function uI(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(L.familyPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:N(N({},i),{},{id:o}),children:r}]}]}function bp(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,f=t.extra,h=t.watchable,p=h===void 0?!1:h,v=r.found?r:n,w=v.width,_=v.height,m=i==="fak",d=[L.replacementClass,s?"".concat(L.familyPrefix,"-").concat(s):""].filter(function(F){return f.classes.indexOf(F)===-1}).filter(function(F){return F!==""||!!F}).concat(f.classes).join(" "),g={children:[],attributes:N(N({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:d,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(_)})},E=m&&!~f.classes.indexOf("fa-fw")?{width:"".concat(w/_*16*.0625,"em")}:{};p&&(g.attributes[Gr]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||To())},children:[l]}),delete g.attributes.title);var T=N(N({},g),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:N(N({},E),f.styles)}),C=r.found&&n.found?_n("generateAbstractMask",T)||{children:[],attributes:{}}:_n("generateAbstractIcon",T)||{children:[],attributes:{}},k=C.children,b=C.attributes;return T.children=k,T.attributes=b,a?uI(T):lI(T)}function _v(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=N(N(N({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Gr]="");var c=N({},o.styles);_p(i)&&(c.transform=jb({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=Iu(c);f.length>0&&(u.style=f);var h=[];return h.push({tag:"span",attributes:u,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function cI(t){var e=t.content,n=t.title,r=t.extra,i=N(N(N({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Iu(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Qc=Mt.styles;function Ch(t){var e=t[0],n=t[1],r=t.slice(4),i=gp(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(L.familyPrefix,"-").concat(Ar.GROUP)},children:[{tag:"path",attributes:{class:"".concat(L.familyPrefix,"-").concat(Ar.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(L.familyPrefix,"-").concat(Ar.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var fI={found:!1,width:512,height:512};function hI(t,e){!dE&&!L.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ah(t,e){var n=e;return e==="fa"&&L.styleDefault!==null&&(e=rr()),new Promise(function(r,i){if(_n("missingIconAbstract"),n==="fa"){var s=IE(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Qc[e]&&Qc[e][t]){var o=Qc[e][t];return r(Ch(o))}hI(t,e),r(N(N({},fI),{},{icon:L.showMissingIcons&&t?_n("missingIconAbstract")||{}:{}}))})}var kv=function(){},Nh=L.measurePerformance&&$a&&$a.mark&&$a.measure?$a:{mark:kv,measure:kv},Ls='FA "6.1.2"',dI=function(e){return Nh.mark("".concat(Ls," ").concat(e," begins")),function(){return AE(e)}},AE=function(e){Nh.mark("".concat(Ls," ").concat(e," ends")),Nh.measure("".concat(Ls," ").concat(e),"".concat(Ls," ").concat(e," begins"),"".concat(Ls," ").concat(e," ends"))},Ip={begin:dI,end:AE},rl=function(){};function Tv(t){var e=t.getAttribute?t.getAttribute(Gr):null;return typeof e=="string"}function pI(t){var e=t.getAttribute?t.getAttribute(yp):null,n=t.getAttribute?t.getAttribute(wp):null;return e&&n}function mI(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(L.replacementClass)}function gI(){if(L.autoReplaceSvg===!0)return il.replace;var t=il[L.autoReplaceSvg];return t||il.replace}function vI(t){return le.createElementNS("http://www.w3.org/2000/svg",t)}function yI(t){return le.createElement(t)}function NE(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?vI:yI:n;if(typeof t=="string")return le.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(NE(o,{ceFn:r}))}),i}function wI(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var il={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(NE(i),n)}),n.getAttribute(Gr)===null&&L.keepOriginalSource){var r=le.createComment(wI(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Sp(n).indexOf(L.replacementClass))return il.replace(e);var i=new RegExp("".concat(L.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===L.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Yo(a)}).join(`
`);n.setAttribute(Gr,""),n.innerHTML=o}};function xv(t){t()}function OE(t,e){var n=typeof e=="function"?e:rl;if(t.length===0)n();else{var r=xv;L.mutateApproach===_b&&(r=nr.requestAnimationFrame||xv),r(function(){var i=gI(),s=Ip.begin("mutate");t.map(i),s(),n()})}}var Cp=!1;function PE(){Cp=!0}function Oh(){Cp=!1}var jl=null;function bv(t){if(!!gv&&!!L.observeMutations){var e=t.treeCallback,n=e===void 0?rl:e,r=t.nodeCallback,i=r===void 0?rl:r,s=t.pseudoElementsCallback,o=s===void 0?rl:s,a=t.observeMutationsRoot,l=a===void 0?le:a;jl=new gv(function(u){if(!Cp){var c=rr();cs(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Tv(f.addedNodes[0])&&(L.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&L.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Tv(f.target)&&~Ab.indexOf(f.attributeName))if(f.attributeName==="class"&&pI(f.target)){var h=Au(Sp(f.target)),p=h.prefix,v=h.iconName;f.target.setAttribute(yp,p||c),v&&f.target.setAttribute(wp,v)}else mI(f.target)&&i(f.target)})}}),An&&jl.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function EI(){!jl||jl.disconnect()}function SI(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function _I(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Au(Sp(t));return i.prefix||(i.prefix=rr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Zb(i.prefix,t.innerText)||Tp(i.prefix,Th(t.innerText))),!i.iconName&&L.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function kI(t){var e=cs(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return L.autoA11y&&(n?e["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(r||To()):(e["aria-hidden"]="true",e.focusable="false")),e}function TI(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Kt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Iv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=_I(t),r=n.iconName,i=n.prefix,s=n.rest,o=kI(t),a=bh("parseNodeAttributes",{},t),l=e.styleParser?SI(t):[];return N({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Kt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var xI=Mt.styles;function RE(t){var e=L.autoReplaceSvg==="nest"?Iv(t,{styleParser:!1}):Iv(t);return~e.extra.classes.indexOf(mE)?_n("generateLayersText",t,e):_n("generateSvgReplacementMutation",t,e)}function Cv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!An)return Promise.resolve();var n=le.documentElement.classList,r=function(f){return n.add("".concat(vv,"-").concat(f))},i=function(f){return n.remove("".concat(vv,"-").concat(f))},s=L.autoFetchSvg?Object.keys(Ep):Object.keys(xI);s.includes("fa")||s.push("fa");var o=[".".concat(mE,":not([").concat(Gr,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(Gr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=cs(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Ip.begin("onTree"),u=a.reduce(function(c,f){try{var h=RE(f);h&&c.push(h)}catch(p){dE||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(h){OE(h,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(h){l(),f(h)})})}function bI(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;RE(t).then(function(n){n&&OE([n],e)})}function II(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Ih(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Ih(i||{})),t(r,N(N({},n),{},{mask:i}))}}var CI=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Kt:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,f=n.title,h=f===void 0?null:f,p=n.titleId,v=p===void 0?null:p,w=n.classes,_=w===void 0?[]:w,m=n.attributes,d=m===void 0?{}:m,g=n.styles,E=g===void 0?{}:g;if(!!e){var T=e.prefix,C=e.iconName,k=e.icon;return Nu(N({type:"icon"},e),function(){return Kr("beforeDOMElementCreation",{iconDefinition:e,params:n}),L.autoA11y&&(h?d["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(v||To()):(d["aria-hidden"]="true",d.focusable="false")),bp({icons:{main:Ch(k),mask:l?Ch(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:T,iconName:C,transform:N(N({},Kt),i),symbol:o,title:h,maskId:c,titleId:v,extra:{attributes:d,styles:E,classes:_}})})}},AI={mixout:function(){return{icon:II(CI)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Cv,n.nodeCallback=bI,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?le:r,s=n.callback,o=s===void 0?function(){}:s;return Cv(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,h=r.extra;return new Promise(function(p,v){Promise.all([Ah(i,a),c.iconName?Ah(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var _=gp(w,2),m=_[0],d=_[1];p([n,bp({icons:{main:m,mask:d},prefix:a,iconName:i,transform:l,symbol:u,maskId:f,title:s,titleId:o,extra:h,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Iu(a);l.length>0&&(i.style=l);var u;return _p(o)&&(u=_n("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},NI={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Nu({type:"layer"},function(){Kr("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(L.familyPrefix,"-layers")].concat(bu(s)).join(" ")},children:o}]})}}}},OI={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return Nu({type:"counter",content:n},function(){return Kr("beforeDOMElementCreation",{content:n,params:r}),cI({content:n.toString(),title:s,extra:{attributes:u,styles:f,classes:["".concat(L.familyPrefix,"-layers-counter")].concat(bu(a))}})})}}}},PI={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Kt:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,h=r.styles,p=h===void 0?{}:h;return Nu({type:"text",content:n},function(){return Kr("beforeDOMElementCreation",{content:n,params:r}),_v({content:n,transform:N(N({},Kt),s),title:a,extra:{attributes:f,styles:p,classes:["".concat(L.familyPrefix,"-layers-text")].concat(bu(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(cE){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return L.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,_v({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},RI=new RegExp('"',"ug"),Av=[1105920,1112319];function DI(t){var e=t.replace(RI,""),n=Kb(e,0),r=n>=Av[0]&&n<=Av[1],i=e.length===2?e[0]===e[1]:!1;return{value:Th(i?e[0]:e),isSecondary:r||i}}function Nv(t,e){var n="".concat(Sb).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=cs(t.children),o=s.filter(function(C){return C.getAttribute(kh)===e})[0],a=nr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(bb),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var f=a.getPropertyValue("content"),h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Fl[l[2].toLowerCase()]:Ib[u],p=DI(f),v=p.value,w=p.isSecondary,_=l[0].startsWith("FontAwesome"),m=Tp(h,v),d=m;if(_){var g=eI(v);g.iconName&&g.prefix&&(m=g.iconName,h=g.prefix)}if(m&&!w&&(!o||o.getAttribute(yp)!==h||o.getAttribute(wp)!==d)){t.setAttribute(n,d),o&&t.removeChild(o);var E=TI(),T=E.extra;T.attributes[kh]=e,Ah(m,h).then(function(C){var k=bp(N(N({},E),{},{icons:{main:C,mask:xp()},prefix:h,iconName:d,extra:T,watchable:!0})),b=le.createElement("svg");e==="::before"?t.insertBefore(b,t.firstChild):t.appendChild(b),b.outerHTML=k.map(function(F){return Yo(F)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function $I(t){return Promise.all([Nv(t,"::before"),Nv(t,"::after")])}function LI(t){return t.parentNode!==document.head&&!~kb.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(kh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ov(t){if(!!An)return new Promise(function(e,n){var r=cs(t.querySelectorAll("*")).filter(LI).map($I),i=Ip.begin("searchPseudoElements");PE(),Promise.all(r).then(function(){i(),Oh(),e()}).catch(function(){i(),Oh(),n()})})}var MI={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ov,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?le:r;L.searchPseudoElements&&Ov(i)}}},Pv=!1,FI={mixout:function(){return{dom:{unwatch:function(){PE(),Pv=!0}}}},hooks:function(){return{bootstrap:function(){bv(bh("mutationObserverCallbacks",{}))},noAuto:function(){EI()},watch:function(n){var r=n.observeMutationsRoot;Pv?Oh():bv(bh("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Rv=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},UI={mixout:function(){return{parse:{transform:function(n){return Rv(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Rv(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:f,path:h};return{tag:"g",attributes:N({},p.outer),children:[{tag:"g",attributes:N({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:N(N({},r.icon.attributes),p.path)}]}]}}}},Xc={x:0,y:0,width:"100%",height:"100%"};function Dv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function jI(t){return t.tag==="g"?t.children:[t]}var zI={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Au(i.split(" ").map(function(o){return o.trim()})):xp();return s.prefix||(s.prefix=rr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,f=o.width,h=o.icon,p=Ub({transform:l,containerWidth:f,iconWidth:u}),v={tag:"rect",attributes:N(N({},Xc),{},{fill:"white"})},w=c.children?{children:c.children.map(Dv)}:{},_={tag:"g",attributes:N({},p.inner),children:[Dv(N({tag:c.tag,attributes:N(N({},c.attributes),p.path)},w))]},m={tag:"g",attributes:N({},p.outer),children:[_]},d="mask-".concat(a||To()),g="clip-".concat(a||To()),E={tag:"mask",attributes:N(N({},Xc),{},{id:d,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,m]},T={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:jI(h)},E]};return r.push(T,{tag:"rect",attributes:N({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(d,")")},Xc)}),{children:r,attributes:i}}}},VI={provides:function(e){var n=!1;nr.matchMedia&&(n=nr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:N(N({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=N(N({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:N(N({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:N(N({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:N(N({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:N(N({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:N(N({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:N(N({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:N(N({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},BI={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},HI=[Vb,AI,NI,OI,PI,MI,FI,UI,zI,VI,BI];rI(HI,{mixoutsTo:_t});_t.noAuto;_t.config;_t.library;_t.dom;var Ph=_t.parse;_t.findIconDefinition;_t.toHtml;var WI=_t.icon;_t.layer;_t.text;_t.counter;var W={exports:{}},GI="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",KI=GI,qI=KI;function DE(){}function $E(){}$E.resetWarningCache=DE;var YI=function(){function t(r,i,s,o,a,l){if(l!==qI){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:$E,resetWarningCache:DE};return n.PropTypes=n,n};W.exports=YI();function $v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Bn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?$v(Object(n),!0).forEach(function(r){Ii(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$v(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function zl(t){return zl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},zl(t)}function Ii(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function QI(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function XI(t,e){if(t==null)return{};var n=QI(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function Rh(t){return JI(t)||ZI(t)||eC(t)||tC()}function JI(t){if(Array.isArray(t))return Dh(t)}function ZI(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function eC(t,e){if(!!t){if(typeof t=="string")return Dh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Dh(t,e)}}function Dh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function tC(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nC(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,f=t.pulse,h=t.fixedWidth,p=t.inverse,v=t.border,w=t.listItem,_=t.flip,m=t.size,d=t.rotation,g=t.pull,E=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":h,"fa-inverse":p,"fa-border":v,"fa-li":w,"fa-flip":_===!0,"fa-flip-horizontal":_==="horizontal"||_==="both","fa-flip-vertical":_==="vertical"||_==="both"},Ii(e,"fa-".concat(m),typeof m<"u"&&m!==null),Ii(e,"fa-rotate-".concat(d),typeof d<"u"&&d!==null&&d!==0),Ii(e,"fa-pull-".concat(g),typeof g<"u"&&g!==null),Ii(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(T){return E[T]?T:null}).filter(function(T){return T})}function rC(t){return t=t-0,t===t}function LE(t){return rC(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var iC=["style"];function sC(t){return t.charAt(0).toUpperCase()+t.slice(1)}function oC(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=LE(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[sC(i)]=s:e[i]=s,e},{})}function ME(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ME(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=oC(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[LE(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=XI(n,iC);return i.attrs.style=Bn(Bn({},i.attrs.style),o),t.apply(void 0,[e.tag,Bn(Bn({},i.attrs),a)].concat(Rh(r)))}var FE=!1;try{FE=!0}catch{}function aC(){if(!FE&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Lv(t){if(t&&zl(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ph.icon)return Ph.icon(t);if(t===null)return null;if(t&&zl(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Jc(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ii({},t,e):{}}var yt=Q0.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=Lv(n),c=Jc("classes",[].concat(Rh(nC(t)),Rh(s.split(" ")))),f=Jc("transform",typeof t.transform=="string"?Ph.transform(t.transform):t.transform),h=Jc("mask",Lv(r)),p=WI(u,Bn(Bn(Bn(Bn({},c),f),h),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!p)return aC("Could not find icon",u),null;var v=p.abstract,w={ref:e};return Object.keys(t).forEach(function(_){yt.defaultProps.hasOwnProperty(_)||(w[_]=t[_])}),lC(v[0],w)});yt.displayName="FontAwesomeIcon";yt.propTypes={beat:W.exports.bool,border:W.exports.bool,beatFade:W.exports.bool,bounce:W.exports.bool,className:W.exports.string,fade:W.exports.bool,flash:W.exports.bool,mask:W.exports.oneOfType([W.exports.object,W.exports.array,W.exports.string]),maskId:W.exports.string,fixedWidth:W.exports.bool,inverse:W.exports.bool,flip:W.exports.oneOf([!0,!1,"horizontal","vertical","both"]),icon:W.exports.oneOfType([W.exports.object,W.exports.array,W.exports.string]),listItem:W.exports.bool,pull:W.exports.oneOf(["right","left"]),pulse:W.exports.bool,rotation:W.exports.oneOf([0,90,180,270]),shake:W.exports.bool,size:W.exports.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:W.exports.bool,spinPulse:W.exports.bool,spinReverse:W.exports.bool,symbol:W.exports.oneOfType([W.exports.bool,W.exports.string]),title:W.exports.string,titleId:W.exports.string,transform:W.exports.oneOfType([W.exports.string,W.exports.object]),swapOpacity:W.exports.bool};yt.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var lC=ME.bind(null,Q0.createElement);const uC=({handleDarkMode:t,darkMode:e})=>y("button",{onClick:t,children:y(yt,{className:"text-lg dark:text-slate-100 text-stone-800",icon:e?lb:cb})});/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var cC={prefix:"fas",iconName:"arrow-right-to-bracket",icon:[512,512,["sign-in"],"f090","M416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128C512 74.98 469 32 416 32zM342.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L242.8 224H32C14.31 224 0 238.3 0 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C355.1 266.1 355.1 245.9 342.6 233.4z"]},fC=cC,hC={prefix:"fas",iconName:"filter",icon:[512,512,[],"f0b0","M3.853 54.87C10.47 40.9 24.54 32 40 32H472C487.5 32 501.5 40.9 508.1 54.87C514.8 68.84 512.7 85.37 502.1 97.33L320 320.9V448C320 460.1 313.2 471.2 302.3 476.6C291.5 482 278.5 480.9 268.8 473.6L204.8 425.6C196.7 419.6 192 410.1 192 400V320.9L9.042 97.33C-.745 85.37-2.765 68.84 3.854 54.87L3.853 54.87z"]},dC={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,10084,61578,9829],"f004","M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"]},pC={prefix:"fas",iconName:"user-large",icon:[512,512,["user-alt"],"f406","M256 288c79.53 0 144-64.47 144-144s-64.47-144-144-144c-79.52 0-144 64.47-144 144S176.5 288 256 288zM351.1 320H160c-88.36 0-160 71.63-160 160c0 17.67 14.33 32 31.1 32H480c17.67 0 31.1-14.33 31.1-32C512 391.6 440.4 320 351.1 320z"]},mC=pC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},gC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},jE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,f=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(h=64)),r.push(n[c],n[f],n[h],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(UE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw Error();const h=s<<2|a>>4;if(r.push(h),u!==64){const p=a<<4&240|u>>2;if(r.push(p),f!==64){const v=u<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},vC=function(t){const e=UE(t);return jE.encodeByteArray(e,!0)},zE=function(t){return vC(t).replace(/\./g,"")},yC=function(t){try{return jE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function VE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function BE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function HE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function EC(){return Pe().indexOf("Electron/")>=0}function WE(){const t=Pe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function SC(){return Pe().indexOf("MSAppHost/")>=0}function _C(){return typeof indexedDB=="object"}function kC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC="FirebaseError";class tn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=TC,Object.setPrototypeOf(this,tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qo.prototype.create)}}class Qo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?xC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new tn(i,a,r)}}function xC(t,e){return t.replace(bC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const bC=/\{\$([^}]+)}/g;function IC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Mv(s)&&Mv(o)){if(!Vl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Mv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function CC(t,e){const n=new AC(t,e);return n.subscribe.bind(n)}class AC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");NC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Zc),i.error===void 0&&(i.error=Zc),i.complete===void 0&&(i.complete=Zc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function NC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(t){return t&&t._delegate?t._delegate:t}class ir{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new wC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RC(e))try{this.getOrInitializeService({instanceIdentifier:kr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=kr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=kr){return this.instances.has(e)}getOptions(e=kr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:PC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=kr){return this.component?this.component.multipleInstances?e:kr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PC(t){return t===kr?void 0:t}function RC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new OC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const $C={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},LC=Z.INFO,MC={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},FC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=MC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ap{constructor(e){this.name=e,this._logLevel=LC,this._logHandler=FC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$C[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const UC=(t,e)=>e.some(n=>t instanceof n);let Fv,Uv;function jC(){return Fv||(Fv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zC(){return Uv||(Uv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const GE=new WeakMap,$h=new WeakMap,KE=new WeakMap,ef=new WeakMap,Np=new WeakMap;function VC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Zn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&GE.set(n,t)}).catch(()=>{}),Np.set(e,t),e}function BC(t){if($h.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});$h.set(t,e)}let Lh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $h.get(t);if(e==="objectStoreNames")return t.objectStoreNames||KE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function HC(t){Lh=t(Lh)}function WC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(tf(this),e,...n);return KE.set(r,e.sort?e.sort():[e]),Zn(r)}:zC().includes(t)?function(...e){return t.apply(tf(this),e),Zn(GE.get(this))}:function(...e){return Zn(t.apply(tf(this),e))}}function GC(t){return typeof t=="function"?WC(t):(t instanceof IDBTransaction&&BC(t),UC(t,jC())?new Proxy(t,Lh):t)}function Zn(t){if(t instanceof IDBRequest)return VC(t);if(ef.has(t))return ef.get(t);const e=GC(t);return e!==t&&(ef.set(t,e),Np.set(e,t)),e}const tf=t=>Np.get(t);function KC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Zn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Zn(o.result),l.oldVersion,l.newVersion,Zn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const qC=["get","getKey","getAll","getAllKeys","count"],YC=["put","add","delete","clear"],nf=new Map;function jv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(nf.get(e))return nf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=YC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||qC.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return nf.set(e,s),s}HC(t=>({...t,get:(e,n,r)=>jv(e,n)||t.get(e,n,r),has:(e,n)=>!!jv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(XC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function XC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mh="@firebase/app",zv="0.7.30";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new Ap("@firebase/app"),JC="@firebase/app-compat",ZC="@firebase/analytics-compat",eA="@firebase/analytics",tA="@firebase/app-check-compat",nA="@firebase/app-check",rA="@firebase/auth",iA="@firebase/auth-compat",sA="@firebase/database",oA="@firebase/database-compat",aA="@firebase/functions",lA="@firebase/functions-compat",uA="@firebase/installations",cA="@firebase/installations-compat",fA="@firebase/messaging",hA="@firebase/messaging-compat",dA="@firebase/performance",pA="@firebase/performance-compat",mA="@firebase/remote-config",gA="@firebase/remote-config-compat",vA="@firebase/storage",yA="@firebase/storage-compat",wA="@firebase/firestore",EA="@firebase/firestore-compat",SA="firebase",_A="9.9.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE="[DEFAULT]",kA={[Mh]:"fire-core",[JC]:"fire-core-compat",[eA]:"fire-analytics",[ZC]:"fire-analytics-compat",[nA]:"fire-app-check",[tA]:"fire-app-check-compat",[rA]:"fire-auth",[iA]:"fire-auth-compat",[sA]:"fire-rtdb",[oA]:"fire-rtdb-compat",[aA]:"fire-fn",[lA]:"fire-fn-compat",[uA]:"fire-iid",[cA]:"fire-iid-compat",[fA]:"fire-fcm",[hA]:"fire-fcm-compat",[dA]:"fire-perf",[pA]:"fire-perf-compat",[mA]:"fire-rc",[gA]:"fire-rc-compat",[vA]:"fire-gcs",[yA]:"fire-gcs-compat",[wA]:"fire-fst",[EA]:"fire-fst-compat","fire-js":"fire-js",[SA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl=new Map,Fh=new Map;function TA(t,e){try{t.container.addComponent(e)}catch(n){qr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Yr(t){const e=t.name;if(Fh.has(e))return qr.debug(`There were multiple attempts to register component ${e}.`),!1;Fh.set(e,t);for(const n of Bl.values())TA(n,t);return!0}function Ou(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qr=new Qo("app","Firebase",xA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs=_A;function IA(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:qE,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw Qr.create("bad-app-name",{appName:String(r)});const i=Bl.get(r);if(i){if(Vl(t,i.options)&&Vl(n,i.config))return i;throw Qr.create("duplicate-app",{appName:r})}const s=new DC(r);for(const a of Fh.values())s.addComponent(a);const o=new bA(t,n,s);return Bl.set(r,o),o}function Op(t=qE){const e=Bl.get(t);if(!e)throw Qr.create("no-app",{appName:t});return e}function Qt(t,e,n){var r;let i=(r=kA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qr.warn(a.join(" "));return}Yr(new ir(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA="firebase-heartbeat-database",AA=1,xo="firebase-heartbeat-store";let rf=null;function YE(){return rf||(rf=KC(CA,AA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(xo)}}}).catch(t=>{throw Qr.create("idb-open",{originalErrorMessage:t.message})})),rf}async function NA(t){var e;try{return(await YE()).transaction(xo).objectStore(xo).get(QE(t))}catch(n){if(n instanceof tn)qr.warn(n.message);else{const r=Qr.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});qr.warn(r.message)}}}async function Vv(t,e){var n;try{const i=(await YE()).transaction(xo,"readwrite");return await i.objectStore(xo).put(e,QE(t)),i.done}catch(r){if(r instanceof tn)qr.warn(r.message);else{const i=Qr.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});qr.warn(i.message)}}}function QE(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA=1024,PA=30*24*60*60*1e3;class RA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $A(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Bv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=PA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Bv(),{heartbeatsToSend:n,unsentEntries:r}=DA(this._heartbeatsCache.heartbeats),i=zE(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Bv(){return new Date().toISOString().substring(0,10)}function DA(t,e=OA){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Hv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Hv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $A{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _C()?kC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await NA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Hv(t){return zE(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LA(t){Yr(new ir("platform-logger",e=>new QC(e),"PRIVATE")),Yr(new ir("heartbeat",e=>new RA(e),"PRIVATE")),Qt(Mh,zv,t),Qt(Mh,zv,"esm2017"),Qt("fire-js","")}LA("");var MA="firebase",FA="9.9.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt(MA,FA,"app");function Pp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function XE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const UA=XE,JE=new Qo("auth","Firebase",XE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv=new Ap("@firebase/auth");function sl(t,...e){Wv.logLevel<=Z.ERROR&&Wv.error(`Auth (${fs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(t,...e){throw Rp(t,...e)}function Xt(t,...e){return Rp(t,...e)}function ZE(t,e,n){const r=Object.assign(Object.assign({},UA()),{[e]:n});return new Qo("auth","Firebase",r).create(e,{appName:t.name})}function jA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Zt(t,"argument-error"),ZE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Rp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return JE.create(t,...e)}function V(t,e,...n){if(!t)throw Rp(e,...n)}function fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw sl(e),new Error(e)}function kn(t,e){t||fn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gv=new Map;function hn(t){kn(t instanceof Function,"Expected a class definition");let e=Gv.get(t);return e?(kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gv.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(t,e){const n=Ou(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Vl(s,e!=null?e:{}))return i;Zt(i,"already-initialized")}return n.initialize({options:e})}function VA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function BA(){return Kv()==="http:"||Kv()==="https:"}function Kv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(BA()||BE()||"connection"in navigator)?navigator.onLine:!0}function WA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n){this.shortDelay=e,this.longDelay=n,kn(n>e,"Short delay should be less than long delay!"),this.isMobile=VE()||HE()}get(){return HA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(t,e){kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA=new Jo(3e4,6e4);function qA(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Pu(t,e,n,r,i={}){return tS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Xo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),eS.fetch()(nS(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function tS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},GA),e);try{const i=new QA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw La(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw La(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw La(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw La(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw ZE(t,c,u);Zt(t,c)}}catch(i){if(i instanceof tn)throw i;Zt(t,"network-request-failed")}}async function YA(t,e,n,r,i={}){const s=await Pu(t,e,n,r,i);return"mfaPendingCredential"in s&&Zt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function nS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Dp(t.config,i):`${t.config.apiScheme}://${i}`}class QA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xt(this.auth,"network-request-failed")),KA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function La(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Xt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XA(t,e){return Pu(t,"POST","/v1/accounts:delete",e)}async function JA(t,e){return Pu(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ZA(t,e=!1){const n=oi(t),r=await n.getIdToken(e),i=$p(r);V(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Qs(sf(i.auth_time)),issuedAtTime:Qs(sf(i.iat)),expirationTime:Qs(sf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function sf(t){return Number(t)*1e3}function $p(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return sl("JWT malformed, contained fewer than 3 sections"),null;try{const s=yC(r);return s?JSON.parse(s):(sl("Failed to decode base64 JWT payload"),null)}catch(s){return sl("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function eN(t){const e=$p(t);return V(e,"internal-error"),V(typeof e.exp<"u","internal-error"),V(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof tn&&tN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function tN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qs(this.lastLoginAt),this.creationTime=Qs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await bo(t,JA(n,{idToken:r}));V(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?sN(s.providerUserInfo):[],a=iN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new rS(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function rN(t){const e=oi(t);await Hl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function sN(t){return t.map(e=>{var{providerId:n}=e,r=Pp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oN(t,e){const n=await tS(t,{},async()=>{const r=Xo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=nS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",eS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){V(e.idToken,"internal-error"),V(typeof e.idToken<"u","internal-error"),V(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):eN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return V(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await oN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Io;return r&&(V(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(V(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(V(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Io,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(t,e){V(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Lr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Pp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new nN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new rS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await bo(this,this.stsTokenManager.getToken(this.auth,e));return V(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ZA(this,e)}reload(){return rN(this)}_assign(e){this!==e&&(V(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Lr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){V(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Hl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await bo(this,XA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:E,isAnonymous:T,providerData:C,stsTokenManager:k}=n;V(g&&k,e,"internal-error");const b=Io.fromJSON(this.name,k);V(typeof g=="string",e,"internal-error"),Rn(f,e.name),Rn(h,e.name),V(typeof E=="boolean",e,"internal-error"),V(typeof T=="boolean",e,"internal-error"),Rn(p,e.name),Rn(v,e.name),Rn(w,e.name),Rn(_,e.name),Rn(m,e.name),Rn(d,e.name);const F=new Lr({uid:g,auth:e,email:h,emailVerified:E,displayName:f,isAnonymous:T,photoURL:v,phoneNumber:p,tenantId:w,stsTokenManager:b,createdAt:m,lastLoginAt:d});return C&&Array.isArray(C)&&(F.providerData=C.map(U=>Object.assign({},U))),_&&(F._redirectEventId=_),F}static async _fromIdTokenResponse(e,n,r=!1){const i=new Io;i.updateFromServerResponse(n);const s=new Lr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Hl(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}iS.type="NONE";const qv=iS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(t,e,n){return`firebase:${t}:${e}:${n}`}class Mi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ol(this.userKey,i.apiKey,s),this.fullPersistenceKey=ol("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Lr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Mi(hn(qv),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||hn(qv);const o=ol(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const f=Lr._fromJSON(e,c);u!==s&&(a=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Mi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Mi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(aS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(uS(e))return"Blackberry";if(cS(e))return"Webos";if(Lp(e))return"Safari";if((e.includes("chrome/")||oS(e))&&!e.includes("edge/"))return"Chrome";if(lS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sS(t=Pe()){return/firefox\//i.test(t)}function Lp(t=Pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function oS(t=Pe()){return/crios\//i.test(t)}function aS(t=Pe()){return/iemobile/i.test(t)}function lS(t=Pe()){return/android/i.test(t)}function uS(t=Pe()){return/blackberry/i.test(t)}function cS(t=Pe()){return/webos/i.test(t)}function Ru(t=Pe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function aN(t=Pe()){var e;return Ru(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lN(){return WE()&&document.documentMode===10}function fS(t=Pe()){return Ru(t)||lS(t)||cS(t)||uS(t)||/windows phone/i.test(t)||aS(t)}function uN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hS(t,e=[]){let n;switch(t){case"Browser":n=Yv(Pe());break;case"Worker":n=`${Yv(Pe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qv(this),this.idTokenSubscription=new Qv(this),this.beforeStateQueue=new cN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=JE,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=hn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Mi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return V(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Hl(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=WA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?oi(e):null;return n&&V(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&V(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(hn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&hn(e)||this._popupRedirectResolver;V(n,this,"argument-error"),this.redirectPersistenceManager=await Mi.create(this,[hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return V(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return V(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Mp(t){return oi(t)}class Qv{constructor(e){this.auth=e,this.observer=null,this.addObserver=CC(n=>this.observer=n)}get next(){return V(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,n){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fi(t,e){return YA(t,"POST","/v1/accounts:signInWithIdp",qA(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hN="http://localhost";class Xr extends dS{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Pp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Xr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Fi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Fi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Fi(e,n)}buildRequest(){const e={requestUri:hN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo extends Fp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Zo{constructor(){super("facebook.com")}static credential(e){return Xr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln extends Zo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xr._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ln.credential(n,r)}catch{return null}}}ln.GOOGLE_SIGN_IN_METHOD="google.com";ln.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Zo{constructor(){super("github.com")}static credential(e){return Xr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.GITHUB_SIGN_IN_METHOD="github.com";Un.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Zo{constructor(){super("twitter.com")}static credential(e,n){return Xr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return jn.credential(n,r)}catch{return null}}}jn.TWITTER_SIGN_IN_METHOD="twitter.com";jn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Lr._fromIdTokenResponse(e,r,i),o=Xv(r);return new Yi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Xv(r);return new Yi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Xv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl extends tn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Wl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Wl(e,n,r,i)}}function pS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Wl._fromErrorAndOperation(t,s,e,r):s})}async function dN(t,e,n=!1){const r=await bo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pN(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await bo(t,pS(i,s,e,t),n);V(o.idToken,i,"internal-error");const a=$p(o.idToken);V(a,i,"internal-error");const{sub:l}=a;return V(t.uid===l,i,"user-mismatch"),Yi._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Zt(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mN(t,e,n=!1){const r="signIn",i=await pS(t,r,e),s=await Yi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function gN(t,e,n,r){return oi(t).onAuthStateChanged(e,n,r)}const Gl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gl,"1"),this.storage.removeItem(Gl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vN(){const t=Pe();return Lp(t)||Ru(t)}const yN=1e3,wN=10;class gS extends mS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=vN()&&uN(),this.fallbackToPolling=fS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);lN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,wN):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},yN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}gS.type="LOCAL";const EN=gS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS extends mS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}vS.type="SESSION";const yS=vS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SN(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Du(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await SN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Du.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Up("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(){return window}function kN(t){Jt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(){return typeof Jt().WorkerGlobalScope<"u"&&typeof Jt().importScripts=="function"}async function TN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function bN(){return wS()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES="firebaseLocalStorageDb",IN=1,Kl="firebaseLocalStorage",SS="fbase_key";class ea{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $u(t,e){return t.transaction([Kl],e?"readwrite":"readonly").objectStore(Kl)}function CN(){const t=indexedDB.deleteDatabase(ES);return new ea(t).toPromise()}function jh(){const t=indexedDB.open(ES,IN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Kl,{keyPath:SS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Kl)?e(r):(r.close(),await CN(),e(await jh()))})})}async function Jv(t,e,n){const r=$u(t,!0).put({[SS]:e,value:n});return new ea(r).toPromise()}async function AN(t,e){const n=$u(t,!1).get(e),r=await new ea(n).toPromise();return r===void 0?null:r.value}function Zv(t,e){const n=$u(t,!0).delete(e);return new ea(n).toPromise()}const NN=800,ON=3;class _S{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ON)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Du._getInstance(bN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await TN(),!this.activeServiceWorker)return;this.sender=new _N(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jh();return await Jv(e,Gl,"1"),await Zv(e,Gl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>AN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=$u(i,!1).getAll();return new ea(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),NN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_S.type="LOCAL";const PN=_S;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function DN(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Xt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",RN().appendChild(r)})}function $N(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Jo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(t,e){return e?hn(e):(V(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp extends dS{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Fi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Fi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function LN(t){return mN(t.auth,new jp(t),t.bypassAuthState)}function MN(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),pN(n,new jp(t),t.bypassAuthState)}async function FN(t){const{auth:e,user:n}=t;return V(n,e,"internal-error"),dN(n,new jp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return LN;case"linkViaPopup":case"linkViaRedirect":return FN;case"reauthViaPopup":case"reauthViaRedirect":return MN;default:Zt(this.auth,"internal-error")}}resolve(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UN=new Jo(2e3,1e4);async function jN(t,e,n){const r=Mp(t);jA(t,e,Fp);const i=kS(r,n);return new Nr(r,"signInViaPopup",e,i).executeNotNull()}class Nr extends TS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Nr.currentPopupAction&&Nr.currentPopupAction.cancel(),Nr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return V(e,this.auth,"internal-error"),e}async onExecution(){kn(this.filter.length===1,"Popup operations only handle one event");const e=Up();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,UN.get())};e()}}Nr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zN="pendingRedirect",al=new Map;class VN extends TS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=al.get(this.auth._key());if(!e){try{const r=await BN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}al.set(this.auth._key(),e)}return this.bypassAuthState||al.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BN(t,e){const n=GN(e),r=WN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function HN(t,e){al.set(t._key(),e)}function WN(t){return hn(t._redirectPersistence)}function GN(t){return ol(zN,t.config.apiKey,t.name)}async function KN(t,e,n=!1){const r=Mp(t),i=kS(r,e),o=await new VN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN=10*60*1e3;class YN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!QN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!xS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Xt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qN&&this.cachedEventUids.clear(),this.cachedEventUids.has(ey(e))}saveEventToCache(e){this.cachedEventUids.add(ey(e)),this.lastProcessedEventTime=Date.now()}}function ey(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function QN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xS(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XN(t,e={}){return Pu(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZN=/^https?/;async function eO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await XN(t);for(const n of e)try{if(tO(n))return}catch{}Zt(t,"unauthorized-domain")}function tO(t){const e=Uh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ZN.test(n))return!1;if(JN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nO=new Jo(3e4,6e4);function ty(){const t=Jt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rO(t){return new Promise((e,n)=>{var r,i,s;function o(){ty(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ty(),n(Xt(t,"network-request-failed"))},timeout:nO.get()})}if(!((i=(r=Jt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Jt().gapi)===null||s===void 0)&&s.load)o();else{const a=$N("iframefcb");return Jt()[a]=()=>{gapi.load?o():n(Xt(t,"network-request-failed"))},DN(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ll=null,e})}let ll=null;function iO(t){return ll=ll||rO(t),ll}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sO=new Jo(5e3,15e3),oO="__/auth/iframe",aO="emulator/auth/iframe",lO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function cO(t){const e=t.config;V(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Dp(e,aO):`https://${t.config.authDomain}/${oO}`,r={apiKey:e.apiKey,appName:t.name,v:fs},i=uO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Xo(r).slice(1)}`}async function fO(t){const e=await iO(t),n=Jt().gapi;return V(n,t,"internal-error"),e.open({where:document.body,url:cO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Xt(t,"network-request-failed"),a=Jt().setTimeout(()=>{s(o)},sO.get());function l(){Jt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dO=500,pO=600,mO="_blank",gO="http://localhost";class ny{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vO(t,e,n,r=dO,i=pO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},hO),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Pe().toLowerCase();n&&(a=oS(u)?mO:n),sS(u)&&(e=e||gO,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[p,v])=>`${h}${p}=${v},`,"");if(aN(u)&&a!=="_self")return yO(e||"",a),new ny(null);const f=window.open(e||"",a,c);V(f,t,"popup-blocked");try{f.focus()}catch{}return new ny(f)}function yO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wO="__/auth/handler",EO="emulator/auth/handler";function ry(t,e,n,r,i,s){V(t.config.authDomain,t,"auth-domain-config-required"),V(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fs,eventId:i};if(e instanceof Fp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",IC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Zo){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${SO(t)}?${Xo(a).slice(1)}`}function SO({config:t}){return t.emulator?Dp(t,EO):`https://${t.authDomain}/${wO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of="webStorageSupport";class _O{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yS,this._completeRedirectFn=KN,this._overrideRedirectResult=HN}async _openPopup(e,n,r,i){var s;kn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=ry(e,n,r,Uh(),i);return vO(e,o,Up())}async _openRedirect(e,n,r,i){return await this._originValidation(e),kN(ry(e,n,r,Uh(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(kn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fO(e),r=new YN(e);return n.register("authEvent",i=>(V(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(of,{type:of},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[of];o!==void 0&&n(!!o),Zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=eO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fS()||Lp()||Ru()}}const kO=_O;var iy="@firebase/auth",sy="0.20.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){V(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function bO(t){Yr(new ir("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{V(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),V(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hS(t)},c=new fN(a,l,u);return VA(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Yr(new ir("auth-internal",e=>{const n=Mp(e.getProvider("auth").getImmediate());return(r=>new TO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qt(iy,sy,xO(t)),Qt(iy,sy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IO(t=Op()){const e=Ou(t,"auth");return e.isInitialized()?e.getImmediate():zA(t,{popupRedirectResolver:kO,persistence:[PN,EN,yS]})}bO("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS="firebasestorage.googleapis.com",CO="storageBucket",AO=2*60*1e3,NO=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends tn{constructor(e,n){super(af(e),`Firebase Storage: ${n} (${af(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,nn.prototype)}_codeEquals(e){return af(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function af(t){return"storage/"+t}function OO(){const t="An unknown error occurred, please check the error payload for server response.";return new nn("unknown",t)}function PO(){return new nn("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function RO(){return new nn("canceled","User canceled the upload/download.")}function DO(t){return new nn("invalid-url","Invalid URL '"+t+"'.")}function $O(t){return new nn("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function oy(t){return new nn("invalid-argument",t)}function IS(){return new nn("app-deleted","The Firebase app was deleted.")}function LO(t){return new nn("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ft.makeFromUrl(e,n)}catch{return new Ft(e,"")}if(r.path==="")return r;throw $O(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const c="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",p=new RegExp(`^https?://${f}/${c}/b/${i}/o${h}`,"i"),v={bucket:1,path:3},w=n===bS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",m=new RegExp(`^https?://${w}/${i}/${_}`,"i"),g=[{regex:a,indices:l,postModify:s},{regex:p,indices:v,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<g.length;E++){const T=g[E],C=T.regex.exec(e);if(C){const k=C[T.indices.bucket];let b=C[T.indices.path];b||(b=""),r=new Ft(k,b),T.postModify(r);break}}if(r==null)throw DO(e);return r}}class MO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FO(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(..._){u||(u=!0,e.apply(null,_))}function f(_){i=setTimeout(()=>{i=null,t(p,l())},_)}function h(){s&&clearTimeout(s)}function p(_,...m){if(u){h();return}if(_){h(),c.call(null,_,...m);return}if(l()||o){h(),c.call(null,_,...m);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,f(g)}let v=!1;function w(_){v||(v=!0,h(),!u&&(i!==null?(_||(a=2),clearTimeout(i),f(0)):_||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function UO(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jO(t){return t!==void 0}function ay(t,e,n,r){if(r<e)throw oy(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw oy(`Invalid value for '${t}'. Expected ${n} or less.`)}function zO(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ql;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ql||(ql={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(e,n,r,i,s,o,a,l,u,c,f){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((h,p)=>{this.resolve_=h,this.reject_=p,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ma(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ql.NO_ERROR,l=s.getStatus();if(!a||this.isRetryStatusCode_(l)){const c=s.getErrorCode()===ql.ABORT;r(!1,new Ma(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Ma(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());jO(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=OO();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?IS():RO();o(l)}else{const l=PO();o(l)}};this.canceled_?n(!1,new Ma(!1,null,!0)):this.backoffId_=FO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&UO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=this.additionalRetryCodes_.indexOf(e)!==-1;return n||i||s}}class Ma{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function BO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function HO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function WO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function GO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function KO(t,e,n,r,i,s){const o=zO(t.urlParams),a=t.url+o,l=Object.assign({},t.headers);return WO(l,e),BO(l,n),HO(l,s),GO(l,r),new VO(a,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function YO(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n){this._service=e,n instanceof Ft?this._location=n:this._location=Ft.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Yl(e,n)}get root(){const e=new Ft(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return YO(this._location.path)}get storage(){return this._service}get parent(){const e=qO(this._location.path);if(e===null)return null;const n=new Ft(this._location.bucket,e);return new Yl(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw LO(e)}}function ly(t,e){const n=e==null?void 0:e[CO];return n==null?null:Ft.makeFromBucketSpec(n,t)}class QO{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=bS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=AO,this._maxUploadRetryTime=NO,this._requests=new Set,i!=null?this._bucket=Ft.makeFromBucketSpec(i,this._host):this._bucket=ly(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ft.makeFromBucketSpec(this._url,e):this._bucket=ly(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ay("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ay("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Yl(this,e)}_makeRequest(e,n,r,i){if(this._deleted)return new MO(IS());{const s=KO(e,this._appId,r,i,n,this._firebaseVersion);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const uy="@firebase/storage",cy="0.9.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CS="storage";function XO(t=Op(),e){return t=oi(t),Ou(t,CS).getImmediate({identifier:e})}function JO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new QO(n,r,i,e,fs)}function ZO(){Yr(new ir(CS,JO,"PUBLIC").setMultipleInstances(!0)),Qt(uy,cy,""),Qt(uy,cy,"esm2017")}ZO();var eP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,zp=zp||{},j=eP||self;function Ql(){}function zh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ta(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function tP(t){return Object.prototype.hasOwnProperty.call(t,lf)&&t[lf]||(t[lf]=++nP)}var lf="closure_uid_"+(1e9*Math.random()>>>0),nP=0;function rP(t,e,n){return t.call.apply(t.bind,arguments)}function iP(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function je(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?je=rP:je=iP,je.apply(null,arguments)}function Fa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function He(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function pr(){this.s=this.s,this.o=this.o}var sP=0;pr.prototype.s=!1;pr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),sP!=0)&&tP(this)};pr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const AS=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},NS=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function oP(t){e:{var e=XP;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function fy(t){return Array.prototype.concat.apply([],arguments)}function Vp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Xl(t){return/^[\s\xa0]*$/.test(t)}var hy=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Xe(t,e){return t.indexOf(e)!=-1}function uf(t,e){return t<e?-1:t>e?1:0}var Je;e:{var dy=j.navigator;if(dy){var py=dy.userAgent;if(py){Je=py;break e}}Je=""}function Bp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function OS(t){const e={};for(const n in t)e[n]=t[n];return e}var my="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function PS(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<my.length;s++)n=my[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Hp(t){return Hp[" "](t),t}Hp[" "]=Ql;function aP(t){var e=cP;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var lP=Xe(Je,"Opera"),Qi=Xe(Je,"Trident")||Xe(Je,"MSIE"),RS=Xe(Je,"Edge"),Vh=RS||Qi,DS=Xe(Je,"Gecko")&&!(Xe(Je.toLowerCase(),"webkit")&&!Xe(Je,"Edge"))&&!(Xe(Je,"Trident")||Xe(Je,"MSIE"))&&!Xe(Je,"Edge"),uP=Xe(Je.toLowerCase(),"webkit")&&!Xe(Je,"Edge");function $S(){var t=j.document;return t?t.documentMode:void 0}var Jl;e:{var cf="",ff=function(){var t=Je;if(DS)return/rv:([^\);]+)(\)|;)/.exec(t);if(RS)return/Edge\/([\d\.]+)/.exec(t);if(Qi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(uP)return/WebKit\/(\S+)/.exec(t);if(lP)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ff&&(cf=ff?ff[1]:""),Qi){var hf=$S();if(hf!=null&&hf>parseFloat(cf)){Jl=String(hf);break e}}Jl=cf}var cP={};function fP(){return aP(function(){let t=0;const e=hy(String(Jl)).split("."),n=hy("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=uf(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||uf(i[2].length==0,s[2].length==0)||uf(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Bh;if(j.document&&Qi){var gy=$S();Bh=gy||parseInt(Jl,10)||void 0}else Bh=void 0;var hP=Bh,dP=function(){if(!j.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{j.addEventListener("test",Ql,e),j.removeEventListener("test",Ql,e)}catch{}return t}();function qe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}qe.prototype.h=function(){this.defaultPrevented=!0};function Co(t,e){if(qe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(DS){e:{try{Hp(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:pP[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Co.Z.h.call(this)}}He(Co,qe);var pP={2:"touch",3:"pen",4:"mouse"};Co.prototype.h=function(){Co.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var na="closure_listenable_"+(1e6*Math.random()|0),mP=0;function gP(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++mP,this.ca=this.fa=!1}function Lu(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Mu(t){this.src=t,this.g={},this.h=0}Mu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Wh(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new gP(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function Hh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=AS(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Lu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Wh(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Wp="closure_lm_"+(1e6*Math.random()|0),df={};function LS(t,e,n,r,i){if(r&&r.once)return FS(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)LS(t,e[s],n,r,i);return null}return n=qp(n),t&&t[na]?t.N(e,n,ta(r)?!!r.capture:!!r,i):MS(t,e,n,!1,r,i)}function MS(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ta(i)?!!i.capture:!!i,a=Kp(t);if(a||(t[Wp]=a=new Mu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=vP(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)dP||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(jS(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function vP(){function t(n){return e.call(t.src,t.listener,n)}var e=yP;return t}function FS(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)FS(t,e[s],n,r,i);return null}return n=qp(n),t&&t[na]?t.O(e,n,ta(r)?!!r.capture:!!r,i):MS(t,e,n,!0,r,i)}function US(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)US(t,e[s],n,r,i);else r=ta(r)?!!r.capture:!!r,n=qp(n),t&&t[na]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Wh(s,n,r,i),-1<n&&(Lu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Kp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Wh(e,n,r,i)),(n=-1<t?e[t]:null)&&Gp(n))}function Gp(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[na])Hh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(jS(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Kp(e))?(Hh(n,t),n.h==0&&(n.src=null,e[Wp]=null)):Lu(t)}}}function jS(t){return t in df?df[t]:df[t]="on"+t}function yP(t,e){if(t.ca)t=!0;else{e=new Co(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Gp(t),t=n.call(r,e)}return t}function Kp(t){return t=t[Wp],t instanceof Mu?t:null}var pf="__closure_events_fn_"+(1e9*Math.random()>>>0);function qp(t){return typeof t=="function"?t:(t[pf]||(t[pf]=function(e){return t.handleEvent(e)}),t[pf])}function Re(){pr.call(this),this.i=new Mu(this),this.P=this,this.I=null}He(Re,pr);Re.prototype[na]=!0;Re.prototype.removeEventListener=function(t,e,n,r){US(this,t,e,n,r)};function ze(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new qe(e,t);else if(e instanceof qe)e.target=e.target||t;else{var i=e;e=new qe(r,t),PS(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ua(o,r,!0,e)&&i}if(o=e.g=t,i=Ua(o,r,!0,e)&&i,i=Ua(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ua(o,r,!1,e)&&i}Re.prototype.M=function(){if(Re.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Lu(n[r]);delete t.g[e],t.h--}}this.I=null};Re.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Re.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ua(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&Hh(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Yp=j.JSON.stringify;function wP(){var t=VS;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class EP{constructor(){this.h=this.g=null}add(e,n){const r=zS.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var zS=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new SP,t=>t.reset());class SP{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function _P(t){j.setTimeout(()=>{throw t},0)}function Qp(t,e){Gh||kP(),Kh||(Gh(),Kh=!0),VS.add(t,e)}var Gh;function kP(){var t=j.Promise.resolve(void 0);Gh=function(){t.then(TP)}}var Kh=!1,VS=new EP;function TP(){for(var t;t=wP();){try{t.h.call(t.g)}catch(n){_P(n)}var e=zS;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Kh=!1}function Fu(t,e){Re.call(this),this.h=t||1,this.g=e||j,this.j=je(this.kb,this),this.l=Date.now()}He(Fu,Re);P=Fu.prototype;P.da=!1;P.S=null;P.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),ze(this,"tick"),this.da&&(Xp(this),this.start()))}};P.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Xp(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}P.M=function(){Fu.Z.M.call(this),Xp(this),delete this.g};function Jp(t,e,n){if(typeof t=="function")n&&(t=je(t,n));else if(t&&typeof t.handleEvent=="function")t=je(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:j.setTimeout(t,e||0)}function BS(t){t.g=Jp(()=>{t.g=null,t.i&&(t.i=!1,BS(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class xP extends pr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:BS(this)}M(){super.M(),this.g&&(j.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ao(t){pr.call(this),this.h=t,this.g={}}He(Ao,pr);var vy=[];function HS(t,e,n,r){Array.isArray(n)||(n&&(vy[0]=n.toString()),n=vy);for(var i=0;i<n.length;i++){var s=LS(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function WS(t){Bp(t.g,function(e,n){this.g.hasOwnProperty(n)&&Gp(e)},t),t.g={}}Ao.prototype.M=function(){Ao.Z.M.call(this),WS(this)};Ao.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Uu(){this.g=!0}Uu.prototype.Aa=function(){this.g=!1};function bP(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");o=2<=f.length&&f[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function IP(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Ci(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+AP(t,n)+(r?" "+r:"")})}function CP(t,e){t.info(function(){return"TIMEOUT: "+e})}Uu.prototype.info=function(){};function AP(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Yp(n)}catch{return e}}var ai={},yy=null;function ju(){return yy=yy||new Re}ai.Ma="serverreachability";function GS(t){qe.call(this,ai.Ma,t)}He(GS,qe);function No(t){const e=ju();ze(e,new GS(e))}ai.STAT_EVENT="statevent";function KS(t,e){qe.call(this,ai.STAT_EVENT,t),this.stat=e}He(KS,qe);function Ze(t){const e=ju();ze(e,new KS(e,t))}ai.Na="timingevent";function qS(t,e){qe.call(this,ai.Na,t),this.size=e}He(qS,qe);function ra(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return j.setTimeout(function(){t()},e)}var zu={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},YS={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Zp(){}Zp.prototype.h=null;function wy(t){return t.h||(t.h=t.i())}function QS(){}var ia={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function em(){qe.call(this,"d")}He(em,qe);function tm(){qe.call(this,"c")}He(tm,qe);var qh;function Vu(){}He(Vu,Zp);Vu.prototype.g=function(){return new XMLHttpRequest};Vu.prototype.i=function(){return{}};qh=new Vu;function sa(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Ao(this),this.P=NP,t=Vh?125:void 0,this.W=new Fu(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new XS}function XS(){this.i=null,this.g="",this.h=!1}var NP=45e3,Yh={},Zl={};P=sa.prototype;P.setTimeout=function(t){this.P=t};function Qh(t,e,n){t.K=1,t.v=Hu(Tn(e)),t.s=n,t.U=!0,JS(t,null)}function JS(t,e){t.F=Date.now(),oa(t),t.A=Tn(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),s_(n.h,"t",r),t.C=0,n=t.l.H,t.h=new XS,t.g=x_(t.l,n?e:null,!t.s),0<t.O&&(t.L=new xP(je(t.Ia,t,t.g),t.O)),HS(t.V,t.g,"readystatechange",t.gb),e=t.H?OS(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),No(),bP(t.j,t.u,t.A,t.m,t.X,t.s)}P.gb=function(t){t=t.target;const e=this.L;e&&dn(t)==3?e.l():this.Ia(t)};P.Ia=function(t){try{if(t==this.g)e:{const c=dn(this.g);var e=this.g.Da();const f=this.g.ba();if(!(3>c)&&(c!=3||Vh||this.g&&(this.h.h||this.g.ga()||ky(this.g)))){this.I||c!=4||e==7||(e==8||0>=f?No(3):No(2)),Bu(this);var n=this.g.ba();this.N=n;t:if(ZS(this)){var r=ky(this.g);t="";var i=r.length,s=dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Or(this),Xs(this);var o="";break t}this.h.i=new j.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,IP(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Xl(a)){var u=a;break t}}u=null}if(n=u)Ci(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Xh(this,n);else{this.i=!1,this.o=3,Ze(12),Or(this),Xs(this);break e}}this.U?(e_(this,c,o),Vh&&this.i&&c==3&&(HS(this.V,this.W,"tick",this.fb),this.W.start())):(Ci(this.j,this.m,o,null),Xh(this,o)),c==4&&Or(this),this.i&&!this.I&&(c==4?S_(this.l,this):(this.i=!1,oa(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ze(12)):(this.o=0,Ze(13)),Or(this),Xs(this)}}}catch{}finally{}};function ZS(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function e_(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=OP(t,n),i==Zl){e==4&&(t.o=4,Ze(14),r=!1),Ci(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Yh){t.o=4,Ze(15),Ci(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ci(t.j,t.m,i,null),Xh(t,i);ZS(t)&&i!=Zl&&i!=Yh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ze(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),cm(e),e.L=!0,Ze(11))):(Ci(t.j,t.m,n,"[Invalid Chunked Response]"),Or(t),Xs(t))}P.fb=function(){if(this.g){var t=dn(this.g),e=this.g.ga();this.C<e.length&&(Bu(this),e_(this,t,e),this.i&&t!=4&&oa(this))}};function OP(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Zl:(n=Number(e.substring(n,r)),isNaN(n)?Yh:(r+=1,r+n>e.length?Zl:(e=e.substr(r,n),t.C=r+n,e)))}P.cancel=function(){this.I=!0,Or(this)};function oa(t){t.Y=Date.now()+t.P,t_(t,t.P)}function t_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ra(je(t.eb,t),e)}function Bu(t){t.B&&(j.clearTimeout(t.B),t.B=null)}P.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(CP(this.j,this.A),this.K!=2&&(No(),Ze(17)),Or(this),this.o=2,Xs(this)):t_(this,this.Y-t)};function Xs(t){t.l.G==0||t.I||S_(t.l,t)}function Or(t){Bu(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Xp(t.W),WS(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Xh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Jh(n.i,t))){if(n.I=t.N,!t.J&&Jh(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ru(n),Ku(n);else break e;um(n),Ze(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=ra(je(n.ab,n),6e3));if(1>=l_(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Pr(n,11)}else if((t.J||n.g==t)&&ru(n),!Xl(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const f=u[4];f!=null&&(n.za=f,n.h.info("SVER="+n.za));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const v=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;!s.g&&(Xe(v,"spdy")||Xe(v,"quic")||Xe(v,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(im(s,s.h),s.h=null))}if(r.D){const w=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.sa=w,ce(r.F,r.D,w))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=T_(r,r.H?r.la:null,r.W),o.J){u_(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Bu(a),oa(a)),r.g=o}else w_(r);0<n.l.length&&qu(n)}else u[0]!="stop"&&u[0]!="close"||Pr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Pr(n,7):lm(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}No(4)}catch{}}function PP(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(zh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function nm(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(zh(t)||typeof t=="string")NS(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(zh(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=PP(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function hs(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof hs)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}P=hs.prototype;P.R=function(){rm(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};P.T=function(){return rm(this),this.g.concat()};function rm(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Jr(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Jr(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}P.get=function(t,e){return Jr(this.h,t)?this.h[t]:e};P.set=function(t,e){Jr(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};P.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function Jr(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var n_=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function RP(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Zr(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Zr){this.g=e!==void 0?e:t.g,eu(this,t.j),this.s=t.s,tu(this,t.i),nu(this,t.m),this.l=t.l,e=t.h;var n=new Oo;n.i=e.i,e.g&&(n.g=new hs(e.g),n.h=e.h),Ey(this,n),this.o=t.o}else t&&(n=String(t).match(n_))?(this.g=!!e,eu(this,n[1]||"",!0),this.s=Js(n[2]||""),tu(this,n[3]||"",!0),nu(this,n[4]),this.l=Js(n[5]||"",!0),Ey(this,n[6]||"",!0),this.o=Js(n[7]||"")):(this.g=!!e,this.h=new Oo(null,this.g))}Zr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ms(e,Sy,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ms(e,Sy,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(Ms(n,n.charAt(0)=="/"?FP:MP,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ms(n,jP)),t.join("")};function Tn(t){return new Zr(t)}function eu(t,e,n){t.j=n?Js(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function tu(t,e,n){t.i=n?Js(e,!0):e}function nu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ey(t,e,n){e instanceof Oo?(t.h=e,zP(t.h,t.g)):(n||(e=Ms(e,UP)),t.h=new Oo(e,t.g))}function ce(t,e,n){t.h.set(e,n)}function Hu(t){return ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function DP(t){return t instanceof Zr?Tn(t):new Zr(t,void 0)}function $P(t,e,n,r){var i=new Zr(null,void 0);return t&&eu(i,t),e&&tu(i,e),n&&nu(i,n),r&&(i.l=r),i}function Js(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ms(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,LP),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function LP(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Sy=/[#\/\?@]/g,MP=/[#\?:]/g,FP=/[#\?]/g,UP=/[#\?@]/g,jP=/#/g;function Oo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function mr(t){t.g||(t.g=new hs,t.h=0,t.i&&RP(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}P=Oo.prototype;P.add=function(t,e){mr(this),this.i=null,t=ds(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function r_(t,e){mr(t),e=ds(t,e),Jr(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Jr(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&rm(t)))}function i_(t,e){return mr(t),e=ds(t,e),Jr(t.g.h,e)}P.forEach=function(t,e){mr(this),this.g.forEach(function(n,r){NS(n,function(i){t.call(e,i,r,this)},this)},this)};P.T=function(){mr(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};P.R=function(t){mr(this);var e=[];if(typeof t=="string")i_(this,t)&&(e=fy(e,this.g.get(ds(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=fy(e,t[n])}return e};P.set=function(t,e){return mr(this),this.i=null,t=ds(this,t),i_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};P.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function s_(t,e,n){r_(t,e),0<n.length&&(t.i=null,t.g.set(ds(t,e),Vp(n)),t.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function ds(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function zP(t,e){e&&!t.j&&(mr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(r_(this,r),s_(this,i,n))},t)),t.j=e}var VP=class{constructor(t,e){this.h=t,this.g=e}};function o_(t){this.l=t||BP,j.PerformanceNavigationTiming?(t=j.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(j.g&&j.g.Ea&&j.g.Ea()&&j.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var BP=10;function a_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function l_(t){return t.h?1:t.g?t.g.size:0}function Jh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function im(t,e){t.g?t.g.add(e):t.h=e}function u_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}o_.prototype.cancel=function(){if(this.i=c_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function c_(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Vp(t.i)}function sm(){}sm.prototype.stringify=function(t){return j.JSON.stringify(t,void 0)};sm.prototype.parse=function(t){return j.JSON.parse(t,void 0)};function HP(){this.g=new sm}function WP(t,e,n){const r=n||"";try{nm(t,function(i,s){let o=i;ta(i)&&(o=Yp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function GP(t,e){const n=new Uu;if(j.Image){const r=new Image;r.onload=Fa(ja,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Fa(ja,n,r,"TestLoadImage: error",!1,e),r.onabort=Fa(ja,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Fa(ja,n,r,"TestLoadImage: timeout",!1,e),j.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ja(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function aa(t){this.l=t.$b||null,this.j=t.ib||!1}He(aa,Zp);aa.prototype.g=function(){return new Wu(this.l,this.j)};aa.prototype.i=function(t){return function(){return t}}({});function Wu(t,e){Re.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=om,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}He(Wu,Re);var om=0;P=Wu.prototype;P.open=function(t,e){if(this.readyState!=om)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Po(this)};P.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||j).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,la(this)),this.readyState=om};P.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Po(this)),this.g&&(this.readyState=3,Po(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof j.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;f_(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function f_(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}P.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?la(this):Po(this),this.readyState==3&&f_(this)}};P.Ua=function(t){this.g&&(this.response=this.responseText=t,la(this))};P.Ta=function(t){this.g&&(this.response=t,la(this))};P.ha=function(){this.g&&la(this)};function la(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Po(t)}P.setRequestHeader=function(t,e){this.v.append(t,e)};P.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Po(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Wu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var KP=j.JSON.parse;function ke(t){Re.call(this),this.headers=new hs,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=h_,this.K=this.L=!1}He(ke,Re);var h_="",qP=/^https?$/i,YP=["POST","PUT"];P=ke.prototype;P.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():qh.g(),this.C=this.u?wy(this.u):wy(qh),this.g.onreadystatechange=je(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){_y(this,s);return}t=n||"";const i=new hs(this.headers);r&&nm(r,function(s,o){i.set(o,s)}),r=oP(i.T()),n=j.FormData&&t instanceof j.FormData,!(0<=AS(YP,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{m_(this),0<this.B&&((this.K=QP(this.g))?(this.g.timeout=this.B,this.g.ontimeout=je(this.pa,this)):this.A=Jp(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){_y(this,s)}};function QP(t){return Qi&&fP()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function XP(t){return t.toLowerCase()=="content-type"}P.pa=function(){typeof zp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ze(this,"timeout"),this.abort(8))};function _y(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,d_(t),Gu(t)}function d_(t){t.D||(t.D=!0,ze(t,"complete"),ze(t,"error"))}P.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ze(this,"complete"),ze(this,"abort"),Gu(this))};P.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Gu(this,!0)),ke.Z.M.call(this)};P.Fa=function(){this.s||(this.F||this.v||this.l?p_(this):this.cb())};P.cb=function(){p_(this)};function p_(t){if(t.h&&typeof zp<"u"&&(!t.C[1]||dn(t)!=4||t.ba()!=2)){if(t.v&&dn(t)==4)Jp(t.Fa,0,t);else if(ze(t,"readystatechange"),dn(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(n_)[1]||null;if(!i&&j.self&&j.self.location){var s=j.self.location.protocol;i=s.substr(0,s.length-1)}r=!qP.test(i?i.toLowerCase():"")}n=r}if(n)ze(t,"complete"),ze(t,"success");else{t.m=6;try{var o=2<dn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",d_(t)}}finally{Gu(t)}}}}function Gu(t,e){if(t.g){m_(t);const n=t.g,r=t.C[0]?Ql:null;t.g=null,t.C=null,e||ze(t,"ready");try{n.onreadystatechange=r}catch{}}}function m_(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(j.clearTimeout(t.A),t.A=null)}function dn(t){return t.g?t.g.readyState:0}P.ba=function(){try{return 2<dn(this)?this.g.status:-1}catch{return-1}};P.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),KP(e)}};function ky(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case h_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}P.Da=function(){return this.m};P.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function JP(t){let e="";return Bp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function am(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=JP(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ce(t,e,n))}function Ns(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function g_(t){this.za=0,this.l=[],this.h=new Uu,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ns("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ns("baseRetryDelayMs",5e3,t),this.$a=Ns("retryDelaySeedMs",1e4,t),this.Ya=Ns("forwardChannelMaxRetries",2,t),this.ra=Ns("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new o_(t&&t.concurrentRequestLimit),this.Ca=new HP,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}P=g_.prototype;P.ma=8;P.G=1;function lm(t){if(v_(t),t.G==3){var e=t.V++,n=Tn(t.F);ce(n,"SID",t.J),ce(n,"RID",e),ce(n,"TYPE","terminate"),ua(t,n),e=new sa(t,t.h,e,void 0),e.K=2,e.v=Hu(Tn(n)),n=!1,j.navigator&&j.navigator.sendBeacon&&(n=j.navigator.sendBeacon(e.v.toString(),"")),!n&&j.Image&&(new Image().src=e.v,n=!0),n||(e.g=x_(e.l,null),e.g.ea(e.v)),e.F=Date.now(),oa(e)}k_(t)}P.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function Ku(t){t.g&&(cm(t),t.g.cancel(),t.g=null)}function v_(t){Ku(t),t.u&&(j.clearTimeout(t.u),t.u=null),ru(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&j.clearTimeout(t.m),t.m=null)}function mf(t,e){t.l.push(new VP(t.Za++,e)),t.G==3&&qu(t)}function qu(t){a_(t.i)||t.m||(t.m=!0,Qp(t.Ha,t),t.C=0)}function ZP(t,e){return l_(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=ra(je(t.Ha,t,e),__(t,t.C)),t.C++,!0)}P.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new sa(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=OS(s),PS(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=y_(this,i,e),n=Tn(this.F),ce(n,"RID",t),ce(n,"CVER",22),this.D&&ce(n,"X-HTTP-Session-Id",this.D),ua(this,n),this.o&&s&&am(n,this.o,s),im(this.i,i),this.Ra&&ce(n,"TYPE","init"),this.ja?(ce(n,"$req",e),ce(n,"SID","null"),i.$=!0,Qh(i,n,null)):Qh(i,n,e),this.G=2}}else this.G==3&&(t?Ty(this,t):this.l.length==0||a_(this.i)||Ty(this))};function Ty(t,e){var n;e?n=e.m:n=t.V++;const r=Tn(t.F);ce(r,"SID",t.J),ce(r,"RID",n),ce(r,"AID",t.U),ua(t,r),t.o&&t.s&&am(r,t.o,t.s),n=new sa(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=y_(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),im(t.i,n),Qh(n,r,e)}function ua(t,e){t.j&&nm({},function(n,r){ce(e,r,n)})}function y_(t,e,n){n=Math.min(t.l.length,n);var r=t.j?je(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{WP(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function w_(t){t.g||t.u||(t.Y=1,Qp(t.Ga,t),t.A=0)}function um(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=ra(je(t.Ga,t),__(t,t.A)),t.A++,!0)}P.Ga=function(){if(this.u=null,E_(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ra(je(this.bb,this),t)}};P.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Ze(10),Ku(this),E_(this))};function cm(t){t.B!=null&&(j.clearTimeout(t.B),t.B=null)}function E_(t){t.g=new sa(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=Tn(t.oa);ce(e,"RID","rpc"),ce(e,"SID",t.J),ce(e,"CI",t.N?"0":"1"),ce(e,"AID",t.U),ua(t,e),ce(e,"TYPE","xmlhttp"),t.o&&t.s&&am(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Hu(Tn(e)),n.s=null,n.U=!0,JS(n,t)}P.ab=function(){this.v!=null&&(this.v=null,Ku(this),um(this),Ze(19))};function ru(t){t.v!=null&&(j.clearTimeout(t.v),t.v=null)}function S_(t,e){var n=null;if(t.g==e){ru(t),cm(t),t.g=null;var r=2}else if(Jh(t.i,e))n=e.D,u_(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ju(),ze(r,new qS(r,n)),qu(t)}else w_(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&ZP(t,e)||r==2&&um(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Pr(t,5);break;case 4:Pr(t,10);break;case 3:Pr(t,6);break;default:Pr(t,2)}}}function __(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Pr(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=je(t.jb,t);n||(n=new Zr("//www.google.com/images/cleardot.gif"),j.location&&j.location.protocol=="http"||eu(n,"https"),Hu(n)),GP(n.toString(),r)}else Ze(2);t.G=0,t.j&&t.j.va(e),k_(t),v_(t)}P.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Ze(2)):(this.h.info("Failed to ping google.com"),Ze(1))};function k_(t){t.G=0,t.I=-1,t.j&&((c_(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Vp(t.l),t.l.length=0),t.j.ua())}function T_(t,e,n){let r=DP(n);if(r.i!="")e&&tu(r,e+"."+r.i),nu(r,r.m);else{const i=j.location;r=$P(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&Bp(t.aa,function(i,s){ce(r,s,i)}),e=t.D,n=t.sa,e&&n&&ce(r,e,n),ce(r,"VER",t.ma),ua(t,r),r}function x_(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new ke(new aa({ib:!0})):new ke(t.qa),e.L=t.H,e}function b_(){}P=b_.prototype;P.xa=function(){};P.wa=function(){};P.va=function(){};P.ua=function(){};P.Oa=function(){};function iu(){if(Qi&&!(10<=Number(hP)))throw Error("Environmental error: no available transport.")}iu.prototype.g=function(t,e){return new wt(t,e)};function wt(t,e){Re.call(this),this.g=new g_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Xl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Xl(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ps(this)}He(wt,Re);wt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Qp(je(t.hb,t,e))),Ze(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=T_(t,null,t.W),qu(t)};wt.prototype.close=function(){lm(this.g)};wt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,mf(this.g,e)}else this.v?(e={},e.__data__=Yp(t),mf(this.g,e)):mf(this.g,t)};wt.prototype.M=function(){this.g.j=null,delete this.j,lm(this.g),delete this.g,wt.Z.M.call(this)};function I_(t){em.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}He(I_,em);function C_(){tm.call(this),this.status=1}He(C_,tm);function ps(t){this.g=t}He(ps,b_);ps.prototype.xa=function(){ze(this.g,"a")};ps.prototype.wa=function(t){ze(this.g,new I_(t))};ps.prototype.va=function(t){ze(this.g,new C_)};ps.prototype.ua=function(){ze(this.g,"b")};iu.prototype.createWebChannel=iu.prototype.g;wt.prototype.send=wt.prototype.u;wt.prototype.open=wt.prototype.m;wt.prototype.close=wt.prototype.close;zu.NO_ERROR=0;zu.TIMEOUT=8;zu.HTTP_ERROR=6;YS.COMPLETE="complete";QS.EventType=ia;ia.OPEN="a";ia.CLOSE="b";ia.ERROR="c";ia.MESSAGE="d";Re.prototype.listen=Re.prototype.N;ke.prototype.listenOnce=ke.prototype.O;ke.prototype.getLastError=ke.prototype.La;ke.prototype.getLastErrorCode=ke.prototype.Da;ke.prototype.getStatus=ke.prototype.ba;ke.prototype.getResponseJson=ke.prototype.Qa;ke.prototype.getResponseText=ke.prototype.ga;ke.prototype.send=ke.prototype.ea;var eR=function(){return new iu},tR=function(){return ju()},gf=zu,nR=YS,rR=ai,xy={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},iR=aa,za=QS,sR=ke;const by="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ms="9.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=new Ap("@firebase/firestore");function Iy(){return ei.logLevel}function $(t,...e){if(ei.logLevel<=Z.DEBUG){const n=e.map(fm);ei.debug(`Firestore (${ms}): ${t}`,...n)}}function xn(t,...e){if(ei.logLevel<=Z.ERROR){const n=e.map(fm);ei.error(`Firestore (${ms}): ${t}`,...n)}}function Cy(t,...e){if(ei.logLevel<=Z.WARN){const n=e.map(fm);ei.warn(`Firestore (${ms}): ${t}`,...n)}}function fm(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t="Unexpected state"){const e=`FIRESTORE (${ms}) INTERNAL ASSERTION FAILED: `+t;throw xn(e),new Error(e)}function _e(t,e){t||K()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends tn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class aR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class lR{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Mr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Mr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Mr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(_e(typeof r.accessToken=="string"),new oR(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return _e(e===null||typeof e=="string"),new rt(e)}}class uR{constructor(e,n,r){this.type="FirstParty",this.user=rt.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class cR{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new uR(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class fR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hR{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,n){const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.p;return this.p=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.g.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.g.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(_e(typeof n.token=="string"),this.p=n.token,new fR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=dR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ee(t,e){return t<e?-1:t>e?1:0}function Xi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ft.fromMillis(Date.now())}static fromDate(e){return ft.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ft(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.timestamp=e}static fromTimestamp(e){return new G(e)}static min(){return new G(new ft(0,0))}static max(){return new G(new ft(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ro.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ro?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ge extends Ro{construct(e,n,r){return new ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ge(n)}static emptyPath(){return new ge([])}}const pR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends Ro{construct(e,n,r){return new st(e,n,r)}static isValidIdentifier(e){return pR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new z(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new z(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(ge.fromString(e))}static fromName(e){return new M(ge.fromString(e).popFirst(5))}static empty(){return new M(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new ge(e.slice()))}}function mR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=G.fromTimestamp(r===1e9?new ft(n+1,0):new ft(n,r));return new sr(i,M.empty(),e)}function gR(t){return new sr(t.readTime,t.key,-1)}class sr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new sr(G.min(),M.empty(),-1)}static max(){return new sr(G.max(),M.empty(),-1)}}function vR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=M.comparator(t.documentKey,e.documentKey),n!==0?n:ee(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hm(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==yR)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,r)=>{n(e)})}static reject(e){return new I((n,r)=>{r(e)})}static waitFor(e){return new I((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=I.resolve(!1);for(const r of e)n=n.next(i=>i?I.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new I((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new I((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ca(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.it(r),this.rt=r=>n.writeSequenceNumber(r))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ay(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Yu(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ER(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dm.ot=-1;class De{constructor(e,n){this.comparator=e,this.root=n||Me.EMPTY}insert(e,n){return new De(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Me.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Me.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Va(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Va(this.root,e,this.comparator,!1)}getReverseIterator(){return new Va(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Va(this.root,e,this.comparator,!0)}}class Va{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Me{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Me.RED,this.left=i!=null?i:Me.EMPTY,this.right=s!=null?s:Me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Me(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Me.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Me.EMPTY=null,Me.RED=!0,Me.BLACK=!1;Me.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Me(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ny(this.data.getIterator())}getIteratorFrom(e){return new Ny(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof be)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new be(this.comparator);return n.data=e,n}}class Ny{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new Fr([])}unionWith(e){let n=new be(st.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Fr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Xi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Be(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Be(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const SR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function or(t){if(_e(!!t),typeof t=="string"){let e=0;const n=SR.exec(t);if(_e(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ee(t.seconds),nanos:Ee(t.nanos)}}function Ee(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ji(t){return typeof t=="string"?Be.fromBase64String(t):Be.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function O_(t){const e=t.mapValue.fields.__previous_value__;return N_(e)?O_(e):e}function Do(t){const e=or(t.mapValue.fields.__local_write_time__.timestampValue);return new ft(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Zi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Zi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Zi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(t){return t==null}function Zh(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ti(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?N_(t)?4:kR(t)?9007199254740991:10:K()}function en(t,e){if(t===e)return!0;const n=ti(t);if(n!==ti(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Do(t).isEqual(Do(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=or(r.timestampValue),o=or(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Ji(r.bytesValue).isEqual(Ji(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ee(r.geoPointValue.latitude)===Ee(i.geoPointValue.latitude)&&Ee(r.geoPointValue.longitude)===Ee(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ee(r.integerValue)===Ee(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ee(r.doubleValue),o=Ee(i.doubleValue);return s===o?Zh(s)===Zh(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Xi(t.arrayValue.values||[],e.arrayValue.values||[],en);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Ay(s)!==Ay(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!en(s[a],o[a])))return!1;return!0}(t,e);default:return K()}}function $o(t,e){return(t.values||[]).find(n=>en(n,e))!==void 0}function es(t,e){if(t===e)return 0;const n=ti(t),r=ti(e);if(n!==r)return ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ee(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ee(i.integerValue||i.doubleValue),a=Ee(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Oy(t.timestampValue,e.timestampValue);case 4:return Oy(Do(t),Do(e));case 5:return ee(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Ji(i),a=Ji(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=ee(o[l],a[l]);if(u!==0)return u}return ee(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ee(Ee(i.latitude),Ee(s.latitude));return o!==0?o:ee(Ee(i.longitude),Ee(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=es(o[l],a[l]);if(u)return u}return ee(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Ba.mapValue&&s===Ba.mapValue)return 0;if(i===Ba.mapValue)return 1;if(s===Ba.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const f=ee(a[c],u[c]);if(f!==0)return f;const h=es(o[a[c]],l[u[c]]);if(h!==0)return h}return ee(a.length,u.length)}(t.mapValue,e.mapValue);default:throw K()}}function Oy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ee(t,e);const n=or(t),r=or(e),i=ee(n.seconds,r.seconds);return i!==0?i:ee(n.nanos,r.nanos)}function Ui(t){return ed(t)}function ed(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=or(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ji(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,M.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=ed(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${ed(r.fields[a])}`;return s+"}"}(t.mapValue):K();var e,n}function td(t){return!!t&&"integerValue"in t}function pm(t){return!!t&&"arrayValue"in t}function Py(t){return!!t&&"nullValue"in t}function Ry(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function vf(t){return!!t&&"mapValue"in t}function Zs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Yu(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Zs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Zs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function kR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.value=e}static empty(){return new Gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!vf(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zs(n)}setAll(e){let n=st.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Zs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());vf(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return en(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];vf(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Yu(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Gt(Zs(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Fe(e,0,G.min(),G.min(),Gt.empty(),0)}static newFoundDocument(e,n,r){return new Fe(e,1,n,G.min(),r,0)}static newNoDocument(e,n){return new Fe(e,2,n,G.min(),Gt.empty(),0)}static newUnknownDocument(e,n){return new Fe(e,3,n,G.min(),Gt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Fe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Fe(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ut=null}}function Dy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new TR(t,e,n,r,i,s,o)}function mm(t){const e=J(t);if(e.ut===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+Ui(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Qu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ui(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ui(r)).join(",")),e.ut=n}return e.ut}function xR(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${Ui(r.value)}`;var r}).join(", ")}]`),Qu(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>Ui(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>Ui(n)).join(",")),`Target(${e})`}function gm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!RR(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!en(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ly(t.startAt,e.startAt)&&Ly(t.endAt,e.endAt)}function nd(t){return M.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class at extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.ct(e,n,r):new bR(e,n,r):n==="array-contains"?new AR(e,r):n==="in"?new NR(e,r):n==="not-in"?new OR(e,r):n==="array-contains-any"?new PR(e,r):new at(e,n,r)}static ct(e,n,r){return n==="in"?new IR(e,r):new CR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.at(es(n,this.value)):n!==null&&ti(this.value)===ti(n)&&this.at(es(n,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class bR extends at{constructor(e,n,r){super(e,n,r),this.key=M.fromName(r.referenceValue)}matches(e){const n=M.comparator(e.key,this.key);return this.at(n)}}class IR extends at{constructor(e,n){super(e,"in",n),this.keys=P_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class CR extends at{constructor(e,n){super(e,"not-in",n),this.keys=P_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function P_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>M.fromName(r.referenceValue))}class AR extends at{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return pm(n)&&$o(n.arrayValue,this.value)}}class NR extends at{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&$o(this.value.arrayValue,n)}}class OR extends at{constructor(e,n){super(e,"not-in",n)}matches(e){if($o(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!$o(this.value.arrayValue,n)}}class PR extends at{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!pm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>$o(this.value.arrayValue,r))}}class su{constructor(e,n){this.position=e,this.inclusive=n}}class eo{constructor(e,n="asc"){this.field=e,this.dir=n}}function RR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function $y(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=M.comparator(M.fromName(o.referenceValue),n.key):r=es(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ly(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!en(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.lt=null,this.ft=null,this.startAt,this.endAt}}function DR(t,e,n,r,i,s,o,a){return new Xu(t,e,n,r,i,s,o,a)}function vm(t){return new Xu(t)}function My(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function $R(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function LR(t){for(const e of t.filters)if(e.ht())return e.field;return null}function MR(t){return t.collectionGroup!==null}function Lo(t){const e=J(t);if(e.lt===null){e.lt=[];const n=LR(e),r=$R(e);if(n!==null&&r===null)n.isKeyField()||e.lt.push(new eo(n)),e.lt.push(new eo(st.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.lt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new eo(st.keyField(),s))}}}return e.lt}function bn(t){const e=J(t);if(!e.ft)if(e.limitType==="F")e.ft=Dy(e.path,e.collectionGroup,Lo(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Lo(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new eo(s.field,o))}const r=e.endAt?new su(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new su(e.startAt.position,e.startAt.inclusive):null;e.ft=Dy(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.ft}function rd(t,e,n){return new Xu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ju(t,e){return gm(bn(t),bn(e))&&t.limitType===e.limitType}function R_(t){return`${mm(bn(t))}|lt:${t.limitType}`}function id(t){return`Query(target=${xR(bn(t))}; limitType=${t.limitType})`}function ym(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):M.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=$y(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Lo(n),r)||n.endAt&&!function(i,s,o){const a=$y(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Lo(n),r))}(t,e)}function FR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function D_(t){return(e,n)=>{let r=!1;for(const i of Lo(t)){const s=UR(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function UR(t,e,n){const r=t.field.isKeyField()?M.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?es(a,l):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jR(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zh(e)?"-0":e}}function zR(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(){this._=void 0}}function VR(t,e,n){return t instanceof sd?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof ou?$_(t,e):t instanceof au?L_(t,e):function(r,i){const s=HR(r,i),o=Fy(s)+Fy(r._t);return td(s)&&td(r._t)?zR(o):jR(r.wt,o)}(t,e)}function BR(t,e,n){return t instanceof ou?$_(t,e):t instanceof au?L_(t,e):n}function HR(t,e){return t instanceof od?td(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class sd extends Zu{}class ou extends Zu{constructor(e){super(),this.elements=e}}function $_(t,e){const n=M_(e);for(const r of t.elements)n.some(i=>en(i,r))||n.push(r);return{arrayValue:{values:n}}}class au extends Zu{constructor(e){super(),this.elements=e}}function L_(t,e){let n=M_(e);for(const r of t.elements)n=n.filter(i=>!en(i,r));return{arrayValue:{values:n}}}class od extends Zu{constructor(e,n){super(),this.wt=e,this._t=n}}function Fy(t){return Ee(t.integerValue||t.doubleValue)}function M_(t){return pm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function WR(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof ou&&r instanceof ou||n instanceof au&&r instanceof au?Xi(n.elements,r.elements,en):n instanceof od&&r instanceof od?en(n._t,r._t):n instanceof sd&&r instanceof sd}(t.transform,e.transform)}class Ur{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ur}static exists(e){return new Ur(void 0,e)}static updateTime(e){return new Ur(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ul(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class wm{}function F_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new KR(t.key,Ur.none()):new Em(t.key,t.data,Ur.none());{const n=t.data,r=Gt.empty();let i=new be(st.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ec(t.key,r,new Fr(i.toArray()),Ur.none())}}function GR(t,e,n){t instanceof Em?function(r,i,s){const o=r.value.clone(),a=jy(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ec?function(r,i,s){if(!ul(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=jy(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(U_(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function to(t,e,n,r){return t instanceof Em?function(i,s,o,a){if(!ul(i.precondition,s))return o;const l=i.value.clone(),u=zy(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof ec?function(i,s,o,a){if(!ul(i.precondition,s))return o;const l=zy(i.fieldTransforms,a,s),u=s.data;return u.setAll(U_(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return ul(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function Uy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Xi(n,r,(i,s)=>WR(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Em extends wm{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ec extends wm{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function U_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function jy(t,e,n){const r=new Map;_e(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,BR(o,a,n[i]))}return r}function zy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,VR(s,o,e))}return r}class KR extends wm{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we,Y;function j_(t){if(t===void 0)return xn("GRPC error has no .code"),A.UNKNOWN;switch(t){case we.OK:return A.OK;case we.CANCELLED:return A.CANCELLED;case we.UNKNOWN:return A.UNKNOWN;case we.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case we.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case we.INTERNAL:return A.INTERNAL;case we.UNAVAILABLE:return A.UNAVAILABLE;case we.UNAUTHENTICATED:return A.UNAUTHENTICATED;case we.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case we.NOT_FOUND:return A.NOT_FOUND;case we.ALREADY_EXISTS:return A.ALREADY_EXISTS;case we.PERMISSION_DENIED:return A.PERMISSION_DENIED;case we.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case we.ABORTED:return A.ABORTED;case we.OUT_OF_RANGE:return A.OUT_OF_RANGE;case we.UNIMPLEMENTED:return A.UNIMPLEMENTED;case we.DATA_LOSS:return A.DATA_LOSS;default:return K()}}(Y=we||(we={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Yu(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return ER(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR=new De(M.comparator);function ar(){return YR}const z_=new De(M.comparator);function Fs(...t){let e=z_;for(const n of t)e=e.insert(n.key,n);return e}function QR(t){let e=z_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Rr(){return no()}function V_(){return no()}function no(){return new gs(t=>t.toString(),(t,e)=>t.isEqual(e))}new De(M.comparator);const XR=new be(M.comparator);function Q(...t){let e=XR;for(const n of t)e=e.add(n);return e}const JR=new be(ee);function B_(){return JR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,fa.createSynthesizedTargetChangeForCurrentChange(e,n)),new tc(G.min(),r,B_(),ar(),Q())}}class fa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new fa(Be.EMPTY_BYTE_STRING,n,Q(),Q(),Q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n,r,i){this.gt=e,this.removedTargetIds=n,this.key=r,this.yt=i}}class H_{constructor(e,n){this.targetId=e,this.It=n}}class W_{constructor(e,n,r=Be.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Vy{constructor(){this.Tt=0,this.Et=Hy(),this.At=Be.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return this.Tt!==0}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=Q(),n=Q(),r=Q();return this.Et.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new fa(this.At,this.Rt,e,n,r)}Dt(){this.bt=!1,this.Et=Hy()}Ct(e,n){this.bt=!0,this.Et=this.Et.insert(e,n)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Mt(){this.bt=!0,this.Rt=!0}}class ZR{constructor(e){this.Ot=e,this.Ft=new Map,this.$t=ar(),this.Bt=By(),this.Lt=new be(ee)}Ut(e){for(const n of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(n,e.yt):this.Kt(n,e.key,e.yt);for(const n of e.removedTargetIds)this.Kt(n,e.key,e.yt)}Gt(e){this.forEachTarget(e,n=>{const r=this.Qt(n);switch(e.state){case 0:this.jt(n)&&r.Vt(e.resumeToken);break;case 1:r.kt(),r.Pt||r.Dt(),r.Vt(e.resumeToken);break;case 2:r.kt(),r.Pt||this.removeTarget(n);break;case 3:this.jt(n)&&(r.Mt(),r.Vt(e.resumeToken));break;case 4:this.jt(n)&&(this.Wt(n),r.Vt(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ft.forEach((r,i)=>{this.jt(i)&&n(i)})}zt(e){const n=e.targetId,r=e.It.count,i=this.Ht(n);if(i){const s=i.target;if(nd(s))if(r===0){const o=new M(s.path);this.Kt(n,o,Fe.newNoDocument(o,G.min()))}else _e(r===1);else this.Jt(n)!==r&&(this.Wt(n),this.Lt=this.Lt.add(n))}}Yt(e){const n=new Map;this.Ft.forEach((s,o)=>{const a=this.Ht(o);if(a){if(s.current&&nd(a.target)){const l=new M(a.target.path);this.$t.get(l)!==null||this.Xt(o,l)||this.Kt(o,l,Fe.newNoDocument(l,e))}s.vt&&(n.set(o,s.St()),s.Dt())}});let r=Q();this.Bt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ht(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.$t.forEach((s,o)=>o.setReadTime(e));const i=new tc(e,n,this.Lt,this.$t,r);return this.$t=ar(),this.Bt=By(),this.Lt=new be(ee),i}qt(e,n){if(!this.jt(e))return;const r=this.Xt(e,n.key)?2:0;this.Qt(e).Ct(n.key,r),this.$t=this.$t.insert(n.key,n),this.Bt=this.Bt.insert(n.key,this.Zt(n.key).add(e))}Kt(e,n,r){if(!this.jt(e))return;const i=this.Qt(e);this.Xt(e,n)?i.Ct(n,1):i.xt(n),this.Bt=this.Bt.insert(n,this.Zt(n).delete(e)),r&&(this.$t=this.$t.insert(n,r))}removeTarget(e){this.Ft.delete(e)}Jt(e){const n=this.Qt(e).St();return this.Ot.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let n=this.Ft.get(e);return n||(n=new Vy,this.Ft.set(e,n)),n}Zt(e){let n=this.Bt.get(e);return n||(n=new be(ee),this.Bt=this.Bt.insert(e,n)),n}jt(e){const n=this.Ht(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Ht(e){const n=this.Ft.get(e);return n&&n.Pt?null:this.Ot.te(e)}Wt(e){this.Ft.set(e,new Vy),this.Ot.getRemoteKeysForTarget(e).forEach(n=>{this.Kt(e,n,null)})}Xt(e,n){return this.Ot.getRemoteKeysForTarget(e).has(n)}}function By(){return new De(M.comparator)}function Hy(){return new De(M.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e4=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),t4=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class n4{constructor(e,n){this.databaseId=e,this.dt=n}}function r4(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function i4(t,e){return t.dt?e.toBase64():e.toUint8Array()}function Mo(t){return _e(!!t),G.fromTimestamp(function(e){const n=or(e);return new ft(n.seconds,n.nanos)}(t))}function s4(t,e){return function(n){return new ge(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function G_(t){const e=ge.fromString(t);return _e(Y_(e)),e}function yf(t,e){const n=G_(e);if(n.get(1)!==t.databaseId.projectId)throw new z(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new M(K_(n))}function ad(t,e){return s4(t.databaseId,e)}function o4(t){const e=G_(t);return e.length===4?ge.emptyPath():K_(e)}function Wy(t){return new ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function K_(t){return _e(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function a4(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.dt?(_e(u===void 0||typeof u=="string"),Be.fromBase64String(u||"")):(_e(u===void 0||u instanceof Uint8Array),Be.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?A.UNKNOWN:j_(l.code);return new z(u,l.message||"")}(o);n=new W_(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=yf(t,r.document.name),s=Mo(r.document.updateTime),o=new Gt({mapValue:{fields:r.document.fields}}),a=Fe.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new cl(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=yf(t,r.document),s=r.readTime?Mo(r.readTime):G.min(),o=Fe.newNoDocument(i,s),a=r.removedTargetIds||[];n=new cl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=yf(t,r.document),s=r.removedTargetIds||[];n=new cl([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new qR(i),o=r.targetId;n=new H_(o,s)}}return n}function l4(t,e){return{documents:[ad(t,e.path)]}}function u4(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=ad(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ad(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(f){if(f.op==="=="){if(Ry(f.value))return{unaryFilter:{field:hi(f.field),op:"IS_NAN"}};if(Py(f.value))return{unaryFilter:{field:hi(f.field),op:"IS_NULL"}}}else if(f.op==="!="){if(Ry(f.value))return{unaryFilter:{field:hi(f.field),op:"IS_NOT_NAN"}};if(Py(f.value))return{unaryFilter:{field:hi(f.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hi(f.field),op:d4(f.op),value:f.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:hi(c.field),direction:h4(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.dt||Qu(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function c4(t){let e=o4(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){_e(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=q_(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(f){return new eo(Ai(f.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(c)));let a=null;n.limit&&(a=function(c){let f;return f=typeof c=="object"?c.value:c,Qu(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(c){const f=!!c.before,h=c.values||[];return new su(h,f)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const f=!c.before,h=c.values||[];return new su(h,f)}(n.endAt)),DR(e,i,o,s,a,"F",l,u)}function f4(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return K()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function q_(t){return t?t.unaryFilter!==void 0?[m4(t)]:t.fieldFilter!==void 0?[p4(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>q_(e)).reduce((e,n)=>e.concat(n)):K():[]}function h4(t){return e4[t]}function d4(t){return t4[t]}function hi(t){return{fieldPath:t.canonicalString()}}function Ai(t){return st.fromServerFormat(t.fieldPath)}function p4(t){return at.create(Ai(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(t.fieldFilter.op),t.fieldFilter.value)}function m4(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ai(t.unaryFilter.field);return at.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ai(t.unaryFilter.field);return at.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ai(t.unaryFilter.field);return at.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ai(t.unaryFilter.field);return at.create(i,"!=",{nullValue:"NULL_VALUE"});default:return K()}}function Y_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g4{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&GR(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=to(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=to(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=V_();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=F_(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Q())}isEqual(e){return this.batchId===e.batchId&&Xi(this.mutations,e.mutations,(n,r)=>Uy(n,r))&&Xi(this.baseMutations,e.baseMutations,(n,r)=>Uy(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v4{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n,r,i,s=G.min(),o=G.min(),a=Be.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new jr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new jr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y4{constructor(e){this.ne=e}}function w4(t){const e=c4({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?rd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E4{constructor(){this.ze=new S4}addToCollectionParentIndex(e,n){return this.ze.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this.ze.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(sr.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(sr.min())}updateCollectionGroup(e,n,r){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class S4{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new be(ge.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new be(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new ts(0)}static Rn(){return new ts(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _4{constructor(){this.changes=new gs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Fe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?I.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k4{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T4{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&to(r.mutation,i,Fr.empty(),ft.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Q()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Q()){const i=Rr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Fs();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Rr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Q()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=ar();const o=no(),a=no();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof ec)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),to(c.mutation,u,c.mutation.getFieldMask(),ft.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var f;return a.set(u,new k4(c,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=no();let i=new De((o,a)=>o-a),s=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Fr.empty();c=a.applyToLocalView(u,c),r.set(l,c);const f=(i.get(a.batchId)||Q()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,f=V_();c.forEach(h=>{if(!s.has(h)){const p=F_(n.get(h),r.get(h));p!==null&&f.set(h,p),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return I.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return M.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):MR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):I.resolve(Rr());let a=-1,l=s;return o.next(u=>I.forEach(u,(c,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(c)?I.resolve():this.getBaseDocument(e,c,f).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,Q())).next(c=>({batchId:a,changes:QR(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new M(n)).next(r=>{let i=Fs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Fs();return this.indexManager.getCollectionParents(e,i).next(o=>I.forEach(o,a=>{const l=function(u,c){return new Xu(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,f)=>{s=s.insert(c,f)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,Fe.newInvalidDocument(u)))});let o=Fs();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&to(u.mutation,l,Fr.empty(),ft.now()),ym(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):I.resolve(Fe.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x4{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,n){return I.resolve(this.Jn.get(n))}saveBundleMetadata(e,n){var r;return this.Jn.set(n.id,{id:(r=n).id,version:r.version,createTime:Mo(r.createTime)}),I.resolve()}getNamedQuery(e,n){return I.resolve(this.Yn.get(n))}saveNamedQuery(e,n){return this.Yn.set(n.name,function(r){return{name:r.name,query:w4(r.bundledQuery),readTime:Mo(r.readTime)}}(n)),I.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b4{constructor(){this.overlays=new De(M.comparator),this.Xn=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Rr();return I.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ie(e,n,s)}),I.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Xn.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Xn.delete(r)),I.resolve()}getOverlaysForCollection(e,n,r){const i=Rr(),s=n.length+1,o=new M(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return I.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new De((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Rr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Rr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return I.resolve(a)}ie(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Xn.get(i.largestBatchId).delete(r.key);this.Xn.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new v4(n,r));let s=this.Xn.get(n);s===void 0&&(s=Q(),this.Xn.set(n,s)),this.Xn.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(){this.Zn=new be(Ae.ts),this.es=new be(Ae.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,n){const r=new Ae(e,n);this.Zn=this.Zn.add(r),this.es=this.es.add(r)}ss(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.rs(new Ae(e,n))}os(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new M(new ge([])),r=new Ae(n,e),i=new Ae(n,e+1),s=[];return this.es.forEachInRange([r,i],o=>{this.rs(o),s.push(o.key)}),s}cs(){this.Zn.forEach(e=>this.rs(e))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const n=new M(new ge([])),r=new Ae(n,e),i=new Ae(n,e+1);let s=Q();return this.es.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ae(e,0),r=this.Zn.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ae{constructor(e,n){this.key=e,this.ls=n}static ts(e,n){return M.comparator(e.key,n.key)||ee(e.ls,n.ls)}static ns(e,n){return ee(e.ls,n.ls)||M.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I4{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.fs=1,this.ds=new be(Ae.ts)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new g4(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.ds=this.ds.add(new Ae(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ws(r),s=i<0?0:i;return I.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.fs-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ae(n,0),i=new Ae(n,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([r,i],o=>{const a=this._s(o.ls);s.push(a)}),I.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new be(ee);return n.forEach(i=>{const s=new Ae(i,0),o=new Ae(i,Number.POSITIVE_INFINITY);this.ds.forEachInRange([s,o],a=>{r=r.add(a.ls)})}),I.resolve(this.gs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;M.isDocumentKey(s)||(s=s.child(""));const o=new Ae(new M(s),0);let a=new be(ee);return this.ds.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.ls)),!0)},o),I.resolve(this.gs(a))}gs(e){const n=[];return e.forEach(r=>{const i=this._s(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){_e(this.ys(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ds;return I.forEach(n.mutations,i=>{const s=new Ae(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ds=r})}In(e){}containsKey(e,n){const r=new Ae(n,0),i=this.ds.firstAfterOrEqual(r);return I.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}ys(e,n){return this.ws(e)}ws(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}_s(e){const n=this.ws(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C4{constructor(e){this.ps=e,this.docs=new De(M.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return I.resolve(r?r.document.mutableCopy():Fe.newInvalidDocument(n))}getEntries(e,n){let r=ar();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Fe.newInvalidDocument(i))}),I.resolve(r)}getAllFromCollection(e,n,r){let i=ar();const s=new M(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||vR(gR(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return I.resolve(i)}getAllFromCollectionGroup(e,n,r,i){K()}Is(e,n){return I.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new A4(this)}getSize(e){return I.resolve(this.size)}}class A4 extends _4{constructor(e){super(),this.zn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.zn.addEntry(e,i)):this.zn.removeEntry(r)}),I.waitFor(n)}getFromCache(e,n){return this.zn.getEntry(e,n)}getAllFromCache(e,n){return this.zn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N4{constructor(e){this.persistence=e,this.Ts=new gs(n=>mm(n),gm),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Es=0,this.As=new Sm,this.targetCount=0,this.Rs=ts.An()}forEachTarget(e,n){return this.Ts.forEach((r,i)=>n(i)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Es&&(this.Es=n),I.resolve()}vn(e){this.Ts.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Rs=new ts(n),this.highestTargetId=n),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,n){return this.vn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.vn(n),I.resolve()}removeTargetData(e,n){return this.Ts.delete(n.target),this.As.us(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Ts.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Ts.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),I.waitFor(s).next(()=>i)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const r=this.Ts.get(n)||null;return I.resolve(r)}addMatchingKeys(e,n,r){return this.As.ss(n,r),I.resolve()}removeMatchingKeys(e,n,r){this.As.os(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),I.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.As.us(n),I.resolve()}getMatchingKeysForTargetId(e,n){const r=this.As.hs(n);return I.resolve(r)}containsKey(e,n){return I.resolve(this.As.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O4{constructor(e,n){this.bs={},this.overlays={},this.Ps=new dm(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new N4(this),this.indexManager=new E4,this.remoteDocumentCache=function(r){return new C4(r)}(r=>this.referenceDelegate.Ss(r)),this.wt=new y4(n),this.Ds=new x4(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new b4,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.bs[e.toKey()];return r||(r=new I4(n,this.referenceDelegate),this.bs[e.toKey()]=r),r}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new P4(this.Ps.next());return this.referenceDelegate.Cs(),r(i).next(s=>this.referenceDelegate.xs(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ns(e,n){return I.or(Object.values(this.bs).map(r=>()=>r.containsKey(e,n)))}}class P4 extends wR{constructor(e){super(),this.currentSequenceNumber=e}}class _m{constructor(e){this.persistence=e,this.ks=new Sm,this.Ms=null}static Os(e){return new _m(e)}get Fs(){if(this.Ms)return this.Ms;throw K()}addReference(e,n,r){return this.ks.addReference(r,n),this.Fs.delete(r.toString()),I.resolve()}removeReference(e,n,r){return this.ks.removeReference(r,n),this.Fs.add(r.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Fs.add(n.toString()),I.resolve()}removeTarget(e,n){this.ks.us(n.targetId).forEach(i=>this.Fs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Fs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Cs(){this.Ms=new Set}xs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Fs,r=>{const i=M.fromPath(r);return this.$s(e,i).next(s=>{s||n.removeEntry(i,G.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.Fs.delete(n.toString()):this.Fs.add(n.toString())})}Ss(e){return 0}$s(e,n){return I.or([()=>I.resolve(this.ks.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ns(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Pi=r,this.vi=i}static Vi(e,n){let r=Q(),i=Q();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new km(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R4{constructor(){this.Si=!1}initialize(e,n){this.Di=e,this.indexManager=n,this.Si=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ci(e,n).next(s=>s||this.xi(e,n,i,r)).next(s=>s||this.Ni(e,n))}Ci(e,n){if(My(n))return I.resolve(null);let r=bn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=rd(n,null,"F"),r=bn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Q(...s);return this.Di.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ki(n,a);return this.Mi(n,u,o,l.readTime)?this.Ci(e,rd(n,null,"F")):this.Oi(e,u,n,l)}))})))}xi(e,n,r,i){return My(n)||i.isEqual(G.min())?this.Ni(e,n):this.Di.getDocuments(e,r).next(s=>{const o=this.ki(n,s);return this.Mi(n,o,r,i)?this.Ni(e,n):(Iy()<=Z.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),id(n)),this.Oi(e,o,n,mR(i,-1)))})}ki(e,n){let r=new be(D_(e));return n.forEach((i,s)=>{ym(e,s)&&(r=r.add(s))}),r}Mi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ni(e,n){return Iy()<=Z.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",id(n)),this.Di.getDocumentsMatchingQuery(e,n,sr.min())}Oi(e,n,r,i){return this.Di.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D4{constructor(e,n,r,i){this.persistence=e,this.Fi=n,this.wt=i,this.$i=new De(ee),this.Bi=new gs(s=>mm(s),gm),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(r)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new T4(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.$i))}}function $4(t,e,n,r){return new D4(t,e,n,r)}async function Q_(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Q();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Ki:u,removedBatchIds:o,addedBatchIds:a}))})})}function X_(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Vs.getLastRemoteSnapshotVersion(n))}function L4(t,e){const n=J(t),r=e.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const a=[];e.targetChanges.forEach((c,f)=>{const h=i.get(f);if(!h)return;a.push(n.Vs.removeMatchingKeys(s,c.removedDocuments,f).next(()=>n.Vs.addMatchingKeys(s,c.addedDocuments,f)));let p=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(f)?p=p.withResumeToken(Be.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(f,p),function(v,w,_){return v.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(h,p,c)&&a.push(n.Vs.updateTargetData(s,p))});let l=ar(),u=Q();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(M4(s,o,e.documentUpdates).next(c=>{l=c.Gi,u=c.Qi})),!r.isEqual(G.min())){const c=n.Vs.getLastRemoteSnapshotVersion(s).next(f=>n.Vs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return I.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.$i=i,s))}function M4(t,e,n){let r=Q(),i=Q();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=ar();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(G.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Gi:o,Qi:i}})}function F4(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Vs.getTargetData(r,e).next(s=>s?(i=s,I.resolve(i)):n.Vs.allocateTargetId(r).next(o=>(i=new jr(e,o,0,r.currentSequenceNumber),n.Vs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.$i.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.$i=n.$i.insert(r.targetId,r),n.Bi.set(e,r.targetId)),r})}async function ld(t,e,n){const r=J(t),i=r.$i.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ca(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.$i=r.$i.remove(e),r.Bi.delete(i.target)}function Gy(t,e,n){const r=J(t);let i=G.min(),s=Q();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=J(a),f=c.Bi.get(u);return f!==void 0?I.resolve(c.$i.get(f)):c.Vs.getTargetData(l,u)}(r,o,bn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Fi.getDocumentsMatchingQuery(o,e,n?i:G.min(),n?s:Q())).next(a=>(U4(r,FR(e),a),{documents:a,ji:s})))}function U4(t,e,n){let r=G.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Li.set(e,r)}class Ky{constructor(){this.activeTargetIds=B_()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class j4{constructor(){this.Fr=new Ky,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,n,r){this.$r[e]=n}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new Ky,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z4{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B4{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H4 extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.so=n+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,n,r,i,s){const o=this.oo(e,n);$("RestConnection","Sending: ",o,r);const a={};return this.uo(a,i,s),this.co(e,o,a,r).then(l=>($("RestConnection","Received: ",l),l),l=>{throw Cy("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}ao(e,n,r,i,s,o){return this.ro(e,n,r,i,s)}uo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ms,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}oo(e,n){const r=V4[e];return`${this.so}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,n,r,i){return new Promise((s,o)=>{const a=new sR;a.listenOnce(nR.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case gf.NO_ERROR:const u=a.getResponseJson();$("Connection","XHR received:",JSON.stringify(u)),s(u);break;case gf.TIMEOUT:$("Connection",'RPC "'+e+'" timed out'),o(new z(A.DEADLINE_EXCEEDED,"Request time out"));break;case gf.HTTP_ERROR:const c=a.getStatus();if($("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const f=a.getResponseJson().error;if(f&&f.status&&f.message){const h=function(p){const v=p.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(v)>=0?v:A.UNKNOWN}(f.status);o(new z(h,f.message))}else o(new z(A.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new z(A.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{$("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}ho(e,n,r){const i=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=eR(),o=tR(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new iR({})),this.uo(a.initMessageHeaders,n,r),VE()||HE()||EC()||WE()||SC()||BE()||(a.httpHeadersOverwriteParam="$httpHeaders");const l=i.join("");$("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,f=!1;const h=new B4({jr:v=>{f?$("Connection","Not sending because WebChannel is closed:",v):(c||($("Connection","Opening WebChannel transport."),u.open(),c=!0),$("Connection","WebChannel sending:",v),u.send(v))},Wr:()=>u.close()}),p=(v,w,_)=>{v.listen(w,m=>{try{_(m)}catch(d){setTimeout(()=>{throw d},0)}})};return p(u,za.EventType.OPEN,()=>{f||$("Connection","WebChannel transport opened.")}),p(u,za.EventType.CLOSE,()=>{f||(f=!0,$("Connection","WebChannel transport closed"),h.eo())}),p(u,za.EventType.ERROR,v=>{f||(f=!0,Cy("Connection","WebChannel transport errored:",v),h.eo(new z(A.UNAVAILABLE,"The operation could not be completed")))}),p(u,za.EventType.MESSAGE,v=>{var w;if(!f){const _=v.data[0];_e(!!_);const m=_,d=m.error||((w=m[0])===null||w===void 0?void 0:w.error);if(d){$("Connection","WebChannel received error:",d);const g=d.status;let E=function(C){const k=we[C];if(k!==void 0)return j_(k)}(g),T=d.message;E===void 0&&(E=A.INTERNAL,T="Unknown error status: "+g+" with message "+d.message),f=!0,h.eo(new z(E,T)),u.close()}else $("Connection","WebChannel received:",_),h.no(_)}}),p(o,rR.STAT_EVENT,v=>{v.stat===xy.PROXY?$("Connection","Detected buffering proxy"):v.stat===xy.NOPROXY&&$("Connection","Detected no buffering proxy")}),setTimeout(()=>{h.Zr()},0),h}}function wf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J_(t){return new n4(t,!0)}class Z_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.js=e,this.timerId=n,this.lo=r,this.fo=i,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W4{constructor(e,n,r,i,s,o,a,l){this.js=e,this.Ao=r,this.Ro=i,this.bo=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Z_(e,n)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.vo===null&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,n){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(xn(n.toString()),xn("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(n)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),n=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Po===n&&this.Uo(r,i)},r=>{e(()=>{const i=new z(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.qo(i)})})}Uo(e,n){const r=this.Lo(this.Po);this.stream=this.Ko(e,n),this.stream.zr(()=>{r(()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(i=>{r(()=>this.qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return n=>{this.js.enqueueAndForget(()=>this.Po===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class G4 extends W4{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.wt=s}Ko(e,n){return this.bo.ho("Listen",e,n)}onMessage(e){this.So.reset();const n=a4(this.wt,e),r=function(i){if(!("targetChange"in i))return G.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?G.min():s.readTime?Mo(s.readTime):G.min()}(e);return this.listener.Go(n,r)}Qo(e){const n={};n.database=Wy(this.wt),n.addTarget=function(i,s){let o;const a=s.target;return o=nd(a)?{documents:l4(i,a)}:{query:u4(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=i4(i,s.resumeToken):s.snapshotVersion.compareTo(G.min())>0&&(o.readTime=r4(i,s.snapshotVersion.toTimestamp())),o}(this.wt,e);const r=f4(this.wt,e);r&&(n.labels=r),this.Oo(n)}jo(e){const n={};n.database=Wy(this.wt),n.removeTarget=e,this.Oo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K4 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.bo=r,this.wt=i,this.Zo=!1}tu(){if(this.Zo)throw new z(A.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.bo.ro(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(A.UNKNOWN,i.toString())})}ao(e,n,r,i){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.bo.ao(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(A.UNKNOWN,s.toString())})}terminate(){this.Zo=!0}}class q4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(xn(n),this.su=!1):$("OnlineStateTracker",n)}cu(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y4{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br(o=>{r.enqueueAndForget(async()=>{da(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=J(a);l.lu.add(4),await ha(l),l._u.set("Unknown"),l.lu.delete(4),await nc(l)}(this))})}),this._u=new q4(r,i)}}async function nc(t){if(da(t))for(const e of t.fu)await e(!0)}async function ha(t){for(const e of t.fu)await e(!1)}function e2(t,e){const n=J(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),bm(n)?xm(n):vs(n).Co()&&Tm(n,e))}function t2(t,e){const n=J(t),r=vs(n);n.hu.delete(e),r.Co()&&n2(n,e),n.hu.size===0&&(r.Co()?r.ko():da(n)&&n._u.set("Unknown"))}function Tm(t,e){t.wu.Nt(e.targetId),vs(t).Qo(e)}function n2(t,e){t.wu.Nt(e),vs(t).jo(e)}function xm(t){t.wu=new ZR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),vs(t).start(),t._u.iu()}function bm(t){return da(t)&&!vs(t).Do()&&t.hu.size>0}function da(t){return J(t).lu.size===0}function r2(t){t.wu=void 0}async function Q4(t){t.hu.forEach((e,n)=>{Tm(t,e)})}async function X4(t,e){r2(t),bm(t)?(t._u.uu(e),xm(t)):t._u.set("Unknown")}async function J4(t,e,n){if(t._u.set("Online"),e instanceof W_&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.hu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.hu.delete(o),r.wu.removeTarget(o))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Yy(t,r)}else if(e instanceof cl?t.wu.Ut(e):e instanceof H_?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(G.min()))try{const r=await X_(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.wu.Yt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.hu.get(l);u&&i.hu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.hu.get(a);if(!l)return;i.hu.set(a,l.withResumeToken(Be.EMPTY_BYTE_STRING,l.snapshotVersion)),n2(i,a);const u=new jr(l.target,a,1,l.sequenceNumber);Tm(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await Yy(t,r)}}async function Yy(t,e,n){if(!ca(e))throw e;t.lu.add(1),await ha(t),t._u.set("Offline"),n||(n=()=>X_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await nc(t)})}async function Qy(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=da(n);n.lu.add(3),await ha(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await nc(n)}async function Z4(t,e){const n=J(t);e?(n.lu.delete(2),await nc(n)):e||(n.lu.add(2),await ha(n),n._u.set("Unknown"))}function vs(t){return t.mu||(t.mu=function(e,n,r){const i=J(e);return i.tu(),new G4(n,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,r)}(t.datastore,t.asyncQueue,{zr:Q4.bind(null,t),Jr:X4.bind(null,t),Go:J4.bind(null,t)}),t.fu.push(async e=>{e?(t.mu.No(),bm(t)?xm(t):t._u.set("Unknown")):(await t.mu.stop(),r2(t))})),t.mu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Mr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Im(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function i2(t,e){if(xn("AsyncQueue",`${e}: ${t}`),ca(t))return new z(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this.comparator=e?(n,r)=>e(n,r)||M.comparator(n.key,r.key):(n,r)=>M.comparator(n.key,r.key),this.keyedMap=Fs(),this.sortedSet=new De(this.comparator)}static emptySet(e){return new ji(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ji)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ji;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(){this.yu=new De(M.comparator)}track(e){const n=e.doc.key,r=this.yu.get(n);r?e.type!==0&&r.type===3?this.yu=this.yu.insert(n,e):e.type===3&&r.type!==1?this.yu=this.yu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.yu=this.yu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.yu=this.yu.remove(n):e.type===1&&r.type===2?this.yu=this.yu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.yu=this.yu.insert(n,{type:2,doc:e.doc}):K():this.yu=this.yu.insert(n,e)}pu(){const e=[];return this.yu.inorderTraversal((n,r)=>{e.push(r)}),e}}class ns{constructor(e,n,r,i,s,o,a,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new ns(e,n,ji.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ju(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(){this.Iu=void 0,this.listeners=[]}}class tD{constructor(){this.queries=new gs(e=>R_(e),Ju),this.onlineState="Unknown",this.Tu=new Set}}async function nD(t,e){const n=J(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new eD),i)try{s.Iu=await n.onListen(r)}catch(o){const a=i2(o,`Initialization of query '${id(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Eu(n.onlineState),s.Iu&&e.Au(s.Iu)&&Cm(n)}async function rD(t,e){const n=J(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function iD(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Au(i)&&(r=!0);o.Iu=i}}r&&Cm(n)}function sD(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Cm(t){t.Tu.forEach(e=>{e.next()})}class oD{constructor(e,n,r){this.query=e,this.Ru=n,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=r||{}}Au(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ns(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),n=!0):this.Vu(e,this.onlineState)&&(this.Su(e),n=!0),this.Pu=e,n}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let n=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),n=!0),n}Vu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Du||!r)&&(!e.docs.isEmpty()||n==="Offline")}vu(e){if(e.docChanges.length>0)return!0;const n=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Su(e){e=ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e){this.key=e}}class o2{constructor(e){this.key=e}}class aD{constructor(e,n){this.query=e,this.Fu=n,this.$u=null,this.current=!1,this.Bu=Q(),this.mutatedKeys=Q(),this.Lu=D_(e),this.Uu=new ji(this.Lu)}get qu(){return this.Fu}Ku(e,n){const r=n?n.Gu:new Xy,i=n?n.Uu:this.Uu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,f)=>{const h=i.get(c),p=ym(this.query,f)?f:null,v=!!h&&this.mutatedKeys.has(h.key),w=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let _=!1;h&&p?h.data.isEqual(p.data)?v!==w&&(r.track({type:3,doc:p}),_=!0):this.Qu(h,p)||(r.track({type:2,doc:p}),_=!0,(l&&this.Lu(p,l)>0||u&&this.Lu(p,u)<0)&&(a=!0)):!h&&p?(r.track({type:0,doc:p}),_=!0):h&&!p&&(r.track({type:1,doc:h}),_=!0,(l||u)&&(a=!0)),_&&(p?(o=o.add(p),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Uu:o,Gu:r,Mi:a,mutatedKeys:s}}Qu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const s=e.Gu.pu();s.sort((u,c)=>function(f,h){const p=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return p(f)-p(h)}(u.type,c.type)||this.Lu(u.doc,c.doc)),this.ju(r);const o=n?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,l=a!==this.$u;return this.$u=a,s.length!==0||l?{snapshot:new ns(this.query,e.Uu,i,s,e.mutatedKeys,a===0,l,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Xy,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(n=>this.Fu=this.Fu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Fu=this.Fu.delete(n)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=Q(),this.Uu.forEach(r=>{this.Hu(r.key)&&(this.Bu=this.Bu.add(r.key))});const n=[];return e.forEach(r=>{this.Bu.has(r)||n.push(new o2(r))}),this.Bu.forEach(r=>{e.has(r)||n.push(new s2(r))}),n}Ju(e){this.Fu=e.ji,this.Bu=Q();const n=this.Ku(e.documents);return this.applyChanges(n,!0)}Yu(){return ns.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class lD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class uD{constructor(e){this.key=e,this.Xu=!1}}class cD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Zu={},this.tc=new gs(a=>R_(a),Ju),this.ec=new Map,this.nc=new Set,this.sc=new De(M.comparator),this.ic=new Map,this.rc=new Sm,this.oc={},this.uc=new Map,this.cc=ts.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return this.ac===!0}}async function fD(t,e){const n=yD(t);let r,i;const s=n.tc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Yu();else{const o=await F4(n.localStore,bn(e));n.isPrimaryClient&&e2(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await hD(n,e,r,a==="current")}return i}async function hD(t,e,n,r){t.hc=(c,f,h)=>async function(p,v,w,_){let m=v.view.Ku(w);m.Mi&&(m=await Gy(p.localStore,v.query,!1).then(({documents:E})=>v.view.Ku(E,m)));const d=_&&_.targetChanges.get(v.targetId),g=v.view.applyChanges(m,p.isPrimaryClient,d);return Zy(p,v.targetId,g.zu),g.snapshot}(t,c,f,h);const i=await Gy(t.localStore,e,!0),s=new aD(e,i.ji),o=s.Ku(i.documents),a=fa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),l=s.applyChanges(o,t.isPrimaryClient,a);Zy(t,n,l.zu);const u=new lD(e,n,s);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),l.snapshot}async function dD(t,e){const n=J(t),r=n.tc.get(e),i=n.ec.get(r.targetId);if(i.length>1)return n.ec.set(r.targetId,i.filter(s=>!Ju(s,e))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ld(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),t2(n.remoteStore,r.targetId),ud(n,r.targetId)}).catch(hm)):(ud(n,r.targetId),await ld(n.localStore,r.targetId,!0))}async function a2(t,e){const n=J(t);try{const r=await L4(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ic.get(s);o&&(_e(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Xu=!0:i.modifiedDocuments.size>0?_e(o.Xu):i.removedDocuments.size>0&&(_e(o.Xu),o.Xu=!1))}),await u2(n,r,e)}catch(r){await hm(r)}}function Jy(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.tc.forEach((s,o)=>{const a=o.view.Eu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=J(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const f of c.listeners)f.Eu(o)&&(l=!0)}),l&&Cm(a)}(r.eventManager,e),i.length&&r.Zu.Go(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function pD(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ic.get(e),s=i&&i.key;if(s){let o=new De(M.comparator);o=o.insert(s,Fe.newNoDocument(s,G.min()));const a=Q().add(s),l=new tc(G.min(),new Map,new be(ee),o,a);await a2(r,l),r.sc=r.sc.remove(s),r.ic.delete(e),Am(r)}else await ld(r.localStore,e,!1).then(()=>ud(r,e,n)).catch(hm)}function ud(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach(r=>{t.rc.containsKey(r)||l2(t,r)})}function l2(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);n!==null&&(t2(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),Am(t))}function Zy(t,e,n){for(const r of n)r instanceof s2?(t.rc.addReference(r.key,e),mD(t,r)):r instanceof o2?($("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||l2(t,r.key)):K()}function mD(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||($("SyncEngine","New document in limbo: "+n),t.nc.add(r),Am(t))}function Am(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new M(ge.fromString(e)),r=t.cc.next();t.ic.set(r,new uD(n)),t.sc=t.sc.insert(n,r),e2(t.remoteStore,new jr(bn(vm(n.path)),r,2,dm.ot))}}async function u2(t,e,n){const r=J(t),i=[],s=[],o=[];r.tc.isEmpty()||(r.tc.forEach((a,l)=>{o.push(r.hc(l,e,n).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u.fromCache?"not-current":"current"),i.push(u);const c=km.Vi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Zu.Go(i),await async function(a,l){const u=J(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>I.forEach(l,f=>I.forEach(f.Pi,h=>u.persistence.referenceDelegate.addReference(c,f.targetId,h)).next(()=>I.forEach(f.vi,h=>u.persistence.referenceDelegate.removeReference(c,f.targetId,h)))))}catch(c){if(!ca(c))throw c;$("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const f=c.targetId;if(!c.fromCache){const h=u.$i.get(f),p=h.snapshotVersion,v=h.withLastLimboFreeSnapshotVersion(p);u.$i=u.$i.insert(f,v)}}}(r.localStore,s))}async function gD(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await Q_(n.localStore,e);n.currentUser=e,function(i,s){i.uc.forEach(o=>{o.forEach(a=>{a.reject(new z(A.CANCELLED,s))})}),i.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await u2(n,r.Ki)}}function vD(t,e){const n=J(t),r=n.ic.get(e);if(r&&r.Xu)return Q().add(r.key);{let i=Q();const s=n.ec.get(e);if(!s)return i;for(const o of s){const a=n.tc.get(o);i=i.unionWith(a.view.qu)}return i}}function yD(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=a2.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pD.bind(null,e),e.Zu.Go=iD.bind(null,e.eventManager),e.Zu.lc=sD.bind(null,e.eventManager),e}class wD{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=J_(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,n){return null}gc(e,n){return null}wc(e){return $4(this.persistence,new R4,e.initialUser,this.wt)}_c(e){return new O4(_m.Os,this.wt)}dc(e){return new j4}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ED{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Jy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=gD.bind(null,this.syncEngine),await Z4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new tD}createDatastore(e){const n=J_(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new H4(i));var i;return function(s,o,a,l){return new K4(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Jy(this.syncEngine,a,0),o=qy.V()?new qy:new z4,new Y4(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new cD(r,i,s,o,a,l);return u&&(c.ac=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=J(e);$("RemoteStore","RemoteStore shutting down."),n.lu.add(5),await ha(n),n.du.shutdown(),n._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SD{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):xn("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _D{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=rt.UNAUTHENTICATED,this.clientId=A_.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{$("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>($("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Mr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=i2(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function kD(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Q_(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function TD(t,e){t.asyncQueue.verifyOperationInProgress();const n=await xD(t);$("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Qy(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Qy(e.remoteStore,s)),t.onlineComponents=e}async function xD(t){return t.offlineComponents||($("FirestoreClient","Using default OfflineComponentProvider"),await kD(t,new wD)),t.offlineComponents}async function bD(t){return t.onlineComponents||($("FirestoreClient","Using default OnlineComponentProvider"),await TD(t,new ED)),t.onlineComponents}async function ID(t){const e=await bD(t),n=e.eventManager;return n.onListen=fD.bind(null,e.syncEngine),n.onUnlisten=dD.bind(null,e.syncEngine),n}function CD(t,e,n={}){const r=new Mr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new SD({next:f=>{s.enqueueAndForget(()=>rD(i,c));const h=f.docs.has(o);!h&&f.fromCache?l.reject(new z(A.UNAVAILABLE,"Failed to get document because the client is offline.")):h&&f.fromCache&&a&&a.source==="server"?l.reject(new z(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),c=new oD(vm(o.path),u,{includeMetadataChanges:!0,Du:!0});return nD(i,c)}(await ID(t),t.asyncQueue,e,n,r)),r.promise}const e0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AD(t,e,n){if(!n)throw new z(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ND(t,e,n,r){if(e===!0&&r===!0)throw new z(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function t0(t){if(!M.isDocumentKey(t))throw new z(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function OD(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function n0(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=OD(t);throw new z(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new z(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,ND("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c2{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new r0({}),this._settingsFrozen=!1,e instanceof Zi?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new z(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zi(i.options.projectId)}(e))}get app(){if(!this._app)throw new z(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new r0(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new aR;switch(n.type){case"gapi":const r=n.client;return _e(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new cR(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new z(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=e0.get(e);n&&($("ComponentProvider","Removing Datastore"),e0.delete(e),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fo(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mn(this.firestore,e,this._key)}}class Nm{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Nm(this.firestore,e,this._query)}}class Fo extends Nm{constructor(e,n,r){super(e,n,vm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mn(this.firestore,null,new M(e))}withConverter(e){return new Fo(this.firestore,e,this._path)}}function PD(t,e,...n){if(t=oi(t),arguments.length===1&&(e=A_.I()),AD("doc","path",e),t instanceof c2){const r=ge.fromString(e,...n);return t0(r),new mn(t,null,new M(r))}{if(!(t instanceof mn||t instanceof Fo))throw new z(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ge.fromString(e,...n));return t0(r),new mn(t.firestore,t instanceof Fo?t.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Z_(this,"async_queue_retry"),this.Kc=()=>{const n=wf();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const e=wf();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const n=wf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new Mr;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Oc.push(e),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(e){if(!ca(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(e){const n=this.Mc.then(()=>(this.Lc=!0,e().catch(r=>{this.Bc=r,this.Lc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw xn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Lc=!1,r))));return this.Mc=n,n}enqueueAfterDelay(e,n,r){this.Gc(),this.qc.indexOf(e)>-1&&(n=0);const i=Im.createAndSchedule(this,e,n,r,s=>this.Wc(s));return this.$c.push(i),i}Gc(){this.Bc&&K()}verifyOperationInProgress(){}async zc(){let e;do e=this.Mc,await e;while(e!==this.Mc)}Hc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Jc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Yc(e){this.qc.push(e)}Wc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class f2 extends c2{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new RD,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||h2(this),this._firestoreClient.terminate()}}function DD(t=Op()){return Ou(t,"firestore").getImmediate()}function $D(t){return t._firestoreClient||h2(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function h2(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new _R(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new _D(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e){this._byteString=e}static fromBase64String(e){try{return new lu(Be.fromBase64String(e))}catch(n){throw new z(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new lu(Be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LD{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}}const MD=new RegExp("[~\\*/\\[\\]]");function FD(t,e,n){if(e.search(MD)>=0)throw i0(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new d2(...e.split("."))._internalPath}catch{throw i0(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function i0(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new z(A.INVALID_ARGUMENT,a+t+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new mn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new UD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(m2("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class UD extends p2{data(){return super.data()}}function m2(t,e){return typeof e=="string"?FD(t,e):e instanceof d2?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class g2 extends p2{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new zD(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(m2("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class zD extends g2{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VD{convertValue(e,n="none"){switch(ti(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ji(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){const r={};return Yu(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new LD(Ee(e.latitude),Ee(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=O_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Do(e));default:return null}}convertTimestamp(e){const n=or(e);return new ft(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ge.fromString(e);_e(Y_(r));const i=new Zi(r.get(1),r.get(3)),s=new M(r.popFirst(5));return i.isEqual(n)||xn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BD(t){t=n0(t,mn);const e=n0(t.firestore,f2);return CD($D(e),t._key).then(n=>WD(e,t,n))}class HD extends VD{constructor(e){super(),this.firestore=e}convertBytes(e){return new lu(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new mn(this.firestore,null,n)}}function WD(t,e,n){const r=n.docs.get(e._key),i=new HD(t);return new g2(t,i,e._key,r,new jD(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ms=n})(fs),Yr(new ir("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new f2(i,new lR(n.getProvider("auth-internal")),new hR(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),Qt(by,"3.4.14",t),Qt(by,"3.4.14","esm2017")})();const GD={apiKey:"AIzaSyBneb9pO7geeJhe_VWCBlc-D6pcnjdG5-E",authDomain:"animedv-992b9.firebaseapp.com",projectId:{VITE_APIKEY:"AIzaSyBneb9pO7geeJhe_VWCBlc-D6pcnjdG5-E",VITE_AUTHDOMAIN:"animedv-992b9.firebaseapp.com",VITE_PROJECTID:"animedv-992b9",VITE_STORAGEBUCKET:"animedv-992b9.appspot.com",VITE_MESSAGINGSENDERID:"249151580863",VITE_APPID:"1:249151580863:web:dd590a572bd3b00862340a",BASE_URL:"/anime-plataform/",MODE:"production",DEV:!1,PROD:!0}.VITE_APP_PROJECTID,storageBucket:{VITE_APIKEY:"AIzaSyBneb9pO7geeJhe_VWCBlc-D6pcnjdG5-E",VITE_AUTHDOMAIN:"animedv-992b9.firebaseapp.com",VITE_PROJECTID:"animedv-992b9",VITE_STORAGEBUCKET:"animedv-992b9.appspot.com",VITE_MESSAGINGSENDERID:"249151580863",VITE_APPID:"1:249151580863:web:dd590a572bd3b00862340a",BASE_URL:"/anime-plataform/",MODE:"production",DEV:!1,PROD:!0}.VITE_APP_STORAGEBUCKET,messagingSenderId:{VITE_APIKEY:"AIzaSyBneb9pO7geeJhe_VWCBlc-D6pcnjdG5-E",VITE_AUTHDOMAIN:"animedv-992b9.firebaseapp.com",VITE_PROJECTID:"animedv-992b9",VITE_STORAGEBUCKET:"animedv-992b9.appspot.com",VITE_MESSAGINGSENDERID:"249151580863",VITE_APPID:"1:249151580863:web:dd590a572bd3b00862340a",BASE_URL:"/anime-plataform/",MODE:"production",DEV:!1,PROD:!0}.VITE_APP_MESSAGINGSENDERID,appId:"1:249151580863:web:dd590a572bd3b00862340a"},rc=IA(GD),s0=IO(rc),KD=DD(rc);XO(rc);const qD=async t=>{const e=PD(KD,"users",t),n=await BD(e);return console.log(n),n.exists};console.log(rc);const YD=()=>{const[t,e]=S.exports.useState(!1);return y(hr,{to:"/anime-plataform/login",children:t?y(yt,{className:"text-lg dark:text-slate-100 text-stone-800",color:"white",icon:fC}):y(yt,{className:"text-lg dark:text-slate-100 text-stone-800",color:"white",icon:mC})})},Om=S.exports.createContext();function QD({children:t}){const[e,n]=S.exports.useState();return y(Om.Provider,{value:{filtersSelected:e,setFiltersSelected:n},children:t})}const Ce=({isSelected:t,name:e,value:n,children:r})=>y("option",{className:"dark:text-slate-200 text-stone-800 select-none",selected:t,name:e,value:n,children:r}),Ef=({name:t,id:e,children:n,handleChange:r})=>y("select",{className:" dark:bg-stone-800/90 bg-slate-200 shadow-sm rounded-sm h-8 px-2  max-h-8 flex-stats dark:text-slate-100 text-stone-700  font-sans font-medium select-none focus:bg-slate-100 ",onChange:r,name:t,id:e,children:n}),XD={keyword:"",filterdOutType:"anime"},JD=()=>{const[t,e]=S.exports.useState(XD),{filtersSelected:n,setFiltersSelected:r}=S.exports.useContext(Om),i=qo(),s=({target:a})=>{e({...t,[a.name]:a.value})};return D("form",{className:" flex gap-2",onSubmit:a=>{a.preventDefault(),i(`/anime-plataform/search/?type=${t.filterdOutType}&q=${t.keyword}`),n&&r()},children:[D("select",{className:"bg-transparent text-stone-800 dark:text-slate-50",name:"filterdOutType",id:"filterdOutType ",onChange:s,children:[y("option",{className:"text-stone-900",selected:!0,value:"anime",children:"Anime"}),y("option",{className:"text-stone-900",value:"manga",children:"Manga"})]}),y("input",{name:"keyword",value:t.keyword,required:!0,className:"min-w-[300px]  h-10 pl-4 pr-3 rounded-full dark:bg-white/10 bg-slate-300 dark:text-slate-50  placeholder-stone-700 dark:placeholder-slate-50 outline-none",onChange:s,type:"search",placeholder:"Search anime , example: naruto"})]})},ZD=({handleDarkMode:t,darkMode:e})=>D("nav",{className:"min-h-[12] bg-slate-200  fixed left-0 right-0  p-2 px-12 z-10 dark:bg-stone-900 transition-colors shadow-sm flex-stats justify-between ",children:[D("div",{className:"flex items-center gap-6",children:[y(rb,{}),y(cv,{className:"dark:text-slate-50 text-stone-800  font-medium text-md ",to:"/anime-plataform?type=anime",children:"Anime"}),y(cv,{className:"dark:text-slate-50 text-stone-800 font-medium text-md ",to:"/anime-plataform?type=manga",children:"Manga"})]}),D("div",{className:"flex items-center gap-4",children:[y(JD,{}),y(uC,{darkMode:e,handleDarkMode:t}),y(YD,{})]}),y("button",{className:"hidden sm:block text-slate-50",children:"Search"})]}),v2=S.exports.createContext({darkMode:!0}),e3=({children:t})=>{const[e,n]=S.exports.useState(!0),r=()=>{n(!e),localStorage.setItem("theme",e)};return S.exports.useEffect(()=>{const i=JSON.parse(localStorage.getItem("theme"));i&&n(i==="true")},[]),y(v2.Provider,{value:{darkMode:e,setDarkMode:n,handleDarkMode:r},children:t})},ys=({children:t,width:e="w-4/5"})=>y("div",{className:`  ${e} mx-auto min-h-[30vh]`,children:t}),t3=()=>y("footer",{className:" h-60 w-full dark:bg-stone-900 bg-slate-200 relative -bottom-20 shadow-2xl mt-60",children:y(ys,{})});var o0=Array.isArray,a0=Object.keys,n3=Object.prototype.hasOwnProperty,r3=typeof Element<"u";function cd(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=o0(t),r=o0(e),i,s,o;if(n&&r){if(s=t.length,s!=e.length)return!1;for(i=s;i--!==0;)if(!cd(t[i],e[i]))return!1;return!0}if(n!=r)return!1;var a=t instanceof Date,l=e instanceof Date;if(a!=l)return!1;if(a&&l)return t.getTime()==e.getTime();var u=t instanceof RegExp,c=e instanceof RegExp;if(u!=c)return!1;if(u&&c)return t.toString()==e.toString();var f=a0(t);if(s=f.length,s!==a0(e).length)return!1;for(i=s;i--!==0;)if(!n3.call(e,f[i]))return!1;if(r3&&t instanceof Element&&e instanceof Element)return t===e;for(i=s;i--!==0;)if(o=f[i],!(o==="_owner"&&t.$$typeof)&&!cd(t[o],e[o]))return!1;return!0}return t!==t&&e!==e}var i3=function(e,n){try{return cd(e,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}},s3=typeof global=="object"&&global&&global.Object===Object&&global;const y2=s3;var o3=typeof self=="object"&&self&&self.Object===Object&&self,a3=y2||o3||Function("return this")();const rn=a3;var l3=rn.Symbol;const lr=l3;var w2=Object.prototype,u3=w2.hasOwnProperty,c3=w2.toString,Os=lr?lr.toStringTag:void 0;function f3(t){var e=u3.call(t,Os),n=t[Os];try{t[Os]=void 0;var r=!0}catch{}var i=c3.call(t);return r&&(e?t[Os]=n:delete t[Os]),i}var h3=Object.prototype,d3=h3.toString;function p3(t){return d3.call(t)}var m3="[object Null]",g3="[object Undefined]",l0=lr?lr.toStringTag:void 0;function ws(t){return t==null?t===void 0?g3:m3:l0&&l0 in Object(t)?f3(t):p3(t)}function E2(t,e){return function(n){return t(e(n))}}var v3=E2(Object.getPrototypeOf,Object);const S2=v3;function Es(t){return t!=null&&typeof t=="object"}function y3(){this.__data__=[],this.size=0}function _2(t,e){return t===e||t!==t&&e!==e}function ic(t,e){for(var n=t.length;n--;)if(_2(t[n][0],e))return n;return-1}var w3=Array.prototype,E3=w3.splice;function S3(t){var e=this.__data__,n=ic(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():E3.call(e,n,1),--this.size,!0}function _3(t){var e=this.__data__,n=ic(e,t);return n<0?void 0:e[n][1]}function k3(t){return ic(this.__data__,t)>-1}function T3(t,e){var n=this.__data__,r=ic(n,t);return r<0?(++this.size,n.push([t,e])):n[r][1]=e,this}function Nn(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}Nn.prototype.clear=y3;Nn.prototype.delete=S3;Nn.prototype.get=_3;Nn.prototype.has=k3;Nn.prototype.set=T3;function x3(){this.__data__=new Nn,this.size=0}function b3(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}function I3(t){return this.__data__.get(t)}function C3(t){return this.__data__.has(t)}function pa(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var A3="[object AsyncFunction]",N3="[object Function]",O3="[object GeneratorFunction]",P3="[object Proxy]";function k2(t){if(!pa(t))return!1;var e=ws(t);return e==N3||e==O3||e==A3||e==P3}var R3=rn["__core-js_shared__"];const Sf=R3;var u0=function(){var t=/[^.]+$/.exec(Sf&&Sf.keys&&Sf.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function D3(t){return!!u0&&u0 in t}var $3=Function.prototype,L3=$3.toString;function li(t){if(t!=null){try{return L3.call(t)}catch{}try{return t+""}catch{}}return""}var M3=/[\\^$.*+?()[\]{}|]/g,F3=/^\[object .+?Constructor\]$/,U3=Function.prototype,j3=Object.prototype,z3=U3.toString,V3=j3.hasOwnProperty,B3=RegExp("^"+z3.call(V3).replace(M3,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function H3(t){if(!pa(t)||D3(t))return!1;var e=k2(t)?B3:F3;return e.test(li(t))}function W3(t,e){return t==null?void 0:t[e]}function ui(t,e){var n=W3(t,e);return H3(n)?n:void 0}var G3=ui(rn,"Map");const Uo=G3;var K3=ui(Object,"create");const jo=K3;function q3(){this.__data__=jo?jo(null):{},this.size=0}function Y3(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var Q3="__lodash_hash_undefined__",X3=Object.prototype,J3=X3.hasOwnProperty;function Z3(t){var e=this.__data__;if(jo){var n=e[t];return n===Q3?void 0:n}return J3.call(e,t)?e[t]:void 0}var e$=Object.prototype,t$=e$.hasOwnProperty;function n$(t){var e=this.__data__;return jo?e[t]!==void 0:t$.call(e,t)}var r$="__lodash_hash_undefined__";function i$(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=jo&&e===void 0?r$:e,this}function ni(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}ni.prototype.clear=q3;ni.prototype.delete=Y3;ni.prototype.get=Z3;ni.prototype.has=n$;ni.prototype.set=i$;function s$(){this.size=0,this.__data__={hash:new ni,map:new(Uo||Nn),string:new ni}}function o$(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function sc(t,e){var n=t.__data__;return o$(e)?n[typeof e=="string"?"string":"hash"]:n.map}function a$(t){var e=sc(this,t).delete(t);return this.size-=e?1:0,e}function l$(t){return sc(this,t).get(t)}function u$(t){return sc(this,t).has(t)}function c$(t,e){var n=sc(this,t),r=n.size;return n.set(t,e),this.size+=n.size==r?0:1,this}function gr(t){var e=-1,n=t==null?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}gr.prototype.clear=s$;gr.prototype.delete=a$;gr.prototype.get=l$;gr.prototype.has=u$;gr.prototype.set=c$;var f$=200;function h$(t,e){var n=this.__data__;if(n instanceof Nn){var r=n.__data__;if(!Uo||r.length<f$-1)return r.push([t,e]),this.size=++n.size,this;n=this.__data__=new gr(r)}return n.set(t,e),this.size=n.size,this}function Ss(t){var e=this.__data__=new Nn(t);this.size=e.size}Ss.prototype.clear=x3;Ss.prototype.delete=b3;Ss.prototype.get=I3;Ss.prototype.has=C3;Ss.prototype.set=h$;function d$(t,e){for(var n=-1,r=t==null?0:t.length;++n<r&&e(t[n],n,t)!==!1;);return t}var p$=function(){try{var t=ui(Object,"defineProperty");return t({},"",{}),t}catch{}}();const c0=p$;function T2(t,e,n){e=="__proto__"&&c0?c0(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}var m$=Object.prototype,g$=m$.hasOwnProperty;function x2(t,e,n){var r=t[e];(!(g$.call(t,e)&&_2(r,n))||n===void 0&&!(e in t))&&T2(t,e,n)}function oc(t,e,n,r){var i=!n;n||(n={});for(var s=-1,o=e.length;++s<o;){var a=e[s],l=r?r(n[a],t[a],a,n,t):void 0;l===void 0&&(l=t[a]),i?T2(n,a,l):x2(n,a,l)}return n}function v$(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}var y$="[object Arguments]";function f0(t){return Es(t)&&ws(t)==y$}var b2=Object.prototype,w$=b2.hasOwnProperty,E$=b2.propertyIsEnumerable,S$=f0(function(){return arguments}())?f0:function(t){return Es(t)&&w$.call(t,"callee")&&!E$.call(t,"callee")};const _$=S$;var k$=Array.isArray;const ma=k$;function T$(){return!1}var I2=typeof pt=="object"&&pt&&!pt.nodeType&&pt,h0=I2&&typeof mt=="object"&&mt&&!mt.nodeType&&mt,x$=h0&&h0.exports===I2,d0=x$?rn.Buffer:void 0,b$=d0?d0.isBuffer:void 0,I$=b$||T$;const C2=I$;var C$=9007199254740991,A$=/^(?:0|[1-9]\d*)$/;function N$(t,e){var n=typeof t;return e=e==null?C$:e,!!e&&(n=="number"||n!="symbol"&&A$.test(t))&&t>-1&&t%1==0&&t<e}var O$=9007199254740991;function A2(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=O$}var P$="[object Arguments]",R$="[object Array]",D$="[object Boolean]",$$="[object Date]",L$="[object Error]",M$="[object Function]",F$="[object Map]",U$="[object Number]",j$="[object Object]",z$="[object RegExp]",V$="[object Set]",B$="[object String]",H$="[object WeakMap]",W$="[object ArrayBuffer]",G$="[object DataView]",K$="[object Float32Array]",q$="[object Float64Array]",Y$="[object Int8Array]",Q$="[object Int16Array]",X$="[object Int32Array]",J$="[object Uint8Array]",Z$="[object Uint8ClampedArray]",eL="[object Uint16Array]",tL="[object Uint32Array]",oe={};oe[K$]=oe[q$]=oe[Y$]=oe[Q$]=oe[X$]=oe[J$]=oe[Z$]=oe[eL]=oe[tL]=!0;oe[P$]=oe[R$]=oe[W$]=oe[D$]=oe[G$]=oe[$$]=oe[L$]=oe[M$]=oe[F$]=oe[U$]=oe[j$]=oe[z$]=oe[V$]=oe[B$]=oe[H$]=!1;function nL(t){return Es(t)&&A2(t.length)&&!!oe[ws(t)]}function Pm(t){return function(e){return t(e)}}var N2=typeof pt=="object"&&pt&&!pt.nodeType&&pt,ro=N2&&typeof mt=="object"&&mt&&!mt.nodeType&&mt,rL=ro&&ro.exports===N2,_f=rL&&y2.process,iL=function(){try{var t=ro&&ro.require&&ro.require("util").types;return t||_f&&_f.binding&&_f.binding("util")}catch{}}();const rs=iL;var p0=rs&&rs.isTypedArray,sL=p0?Pm(p0):nL;const oL=sL;var aL=Object.prototype,lL=aL.hasOwnProperty;function O2(t,e){var n=ma(t),r=!n&&_$(t),i=!n&&!r&&C2(t),s=!n&&!r&&!i&&oL(t),o=n||r||i||s,a=o?v$(t.length,String):[],l=a.length;for(var u in t)(e||lL.call(t,u))&&!(o&&(u=="length"||i&&(u=="offset"||u=="parent")||s&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||N$(u,l)))&&a.push(u);return a}var uL=Object.prototype;function Rm(t){var e=t&&t.constructor,n=typeof e=="function"&&e.prototype||uL;return t===n}var cL=E2(Object.keys,Object);const fL=cL;var hL=Object.prototype,dL=hL.hasOwnProperty;function pL(t){if(!Rm(t))return fL(t);var e=[];for(var n in Object(t))dL.call(t,n)&&n!="constructor"&&e.push(n);return e}function P2(t){return t!=null&&A2(t.length)&&!k2(t)}function Dm(t){return P2(t)?O2(t):pL(t)}function mL(t,e){return t&&oc(e,Dm(e),t)}function gL(t){var e=[];if(t!=null)for(var n in Object(t))e.push(n);return e}var vL=Object.prototype,yL=vL.hasOwnProperty;function wL(t){if(!pa(t))return gL(t);var e=Rm(t),n=[];for(var r in t)r=="constructor"&&(e||!yL.call(t,r))||n.push(r);return n}function $m(t){return P2(t)?O2(t,!0):wL(t)}function EL(t,e){return t&&oc(e,$m(e),t)}var R2=typeof pt=="object"&&pt&&!pt.nodeType&&pt,m0=R2&&typeof mt=="object"&&mt&&!mt.nodeType&&mt,SL=m0&&m0.exports===R2,g0=SL?rn.Buffer:void 0,v0=g0?g0.allocUnsafe:void 0;function _L(t,e){if(e)return t.slice();var n=t.length,r=v0?v0(n):new t.constructor(n);return t.copy(r),r}function D2(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}function kL(t,e){for(var n=-1,r=t==null?0:t.length,i=0,s=[];++n<r;){var o=t[n];e(o,n,t)&&(s[i++]=o)}return s}function $2(){return[]}var TL=Object.prototype,xL=TL.propertyIsEnumerable,y0=Object.getOwnPropertySymbols,bL=y0?function(t){return t==null?[]:(t=Object(t),kL(y0(t),function(e){return xL.call(t,e)}))}:$2;const Lm=bL;function IL(t,e){return oc(t,Lm(t),e)}function L2(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}var CL=Object.getOwnPropertySymbols,AL=CL?function(t){for(var e=[];t;)L2(e,Lm(t)),t=S2(t);return e}:$2;const M2=AL;function NL(t,e){return oc(t,M2(t),e)}function F2(t,e,n){var r=e(t);return ma(t)?r:L2(r,n(t))}function OL(t){return F2(t,Dm,Lm)}function PL(t){return F2(t,$m,M2)}var RL=ui(rn,"DataView");const fd=RL;var DL=ui(rn,"Promise");const hd=DL;var $L=ui(rn,"Set");const dd=$L;var LL=ui(rn,"WeakMap");const pd=LL;var w0="[object Map]",ML="[object Object]",E0="[object Promise]",S0="[object Set]",_0="[object WeakMap]",k0="[object DataView]",FL=li(fd),UL=li(Uo),jL=li(hd),zL=li(dd),VL=li(pd),Tr=ws;(fd&&Tr(new fd(new ArrayBuffer(1)))!=k0||Uo&&Tr(new Uo)!=w0||hd&&Tr(hd.resolve())!=E0||dd&&Tr(new dd)!=S0||pd&&Tr(new pd)!=_0)&&(Tr=function(t){var e=ws(t),n=e==ML?t.constructor:void 0,r=n?li(n):"";if(r)switch(r){case FL:return k0;case UL:return w0;case jL:return E0;case zL:return S0;case VL:return _0}return e});const Mm=Tr;var BL=Object.prototype,HL=BL.hasOwnProperty;function WL(t){var e=t.length,n=new t.constructor(e);return e&&typeof t[0]=="string"&&HL.call(t,"index")&&(n.index=t.index,n.input=t.input),n}var GL=rn.Uint8Array;const T0=GL;function Fm(t){var e=new t.constructor(t.byteLength);return new T0(e).set(new T0(t)),e}function KL(t,e){var n=e?Fm(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}var qL=/\w*$/;function YL(t){var e=new t.constructor(t.source,qL.exec(t));return e.lastIndex=t.lastIndex,e}var x0=lr?lr.prototype:void 0,b0=x0?x0.valueOf:void 0;function QL(t){return b0?Object(b0.call(t)):{}}function XL(t,e){var n=e?Fm(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}var JL="[object Boolean]",ZL="[object Date]",eM="[object Map]",tM="[object Number]",nM="[object RegExp]",rM="[object Set]",iM="[object String]",sM="[object Symbol]",oM="[object ArrayBuffer]",aM="[object DataView]",lM="[object Float32Array]",uM="[object Float64Array]",cM="[object Int8Array]",fM="[object Int16Array]",hM="[object Int32Array]",dM="[object Uint8Array]",pM="[object Uint8ClampedArray]",mM="[object Uint16Array]",gM="[object Uint32Array]";function vM(t,e,n){var r=t.constructor;switch(e){case oM:return Fm(t);case JL:case ZL:return new r(+t);case aM:return KL(t,n);case lM:case uM:case cM:case fM:case hM:case dM:case pM:case mM:case gM:return XL(t,n);case eM:return new r;case tM:case iM:return new r(t);case nM:return YL(t);case rM:return new r;case sM:return QL(t)}}var I0=Object.create,yM=function(){function t(){}return function(e){if(!pa(e))return{};if(I0)return I0(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();const wM=yM;function EM(t){return typeof t.constructor=="function"&&!Rm(t)?wM(S2(t)):{}}var SM="[object Map]";function _M(t){return Es(t)&&Mm(t)==SM}var C0=rs&&rs.isMap,kM=C0?Pm(C0):_M;const TM=kM;var xM="[object Set]";function bM(t){return Es(t)&&Mm(t)==xM}var A0=rs&&rs.isSet,IM=A0?Pm(A0):bM;const CM=IM;var AM=1,NM=2,OM=4,U2="[object Arguments]",PM="[object Array]",RM="[object Boolean]",DM="[object Date]",$M="[object Error]",j2="[object Function]",LM="[object GeneratorFunction]",MM="[object Map]",FM="[object Number]",z2="[object Object]",UM="[object RegExp]",jM="[object Set]",zM="[object String]",VM="[object Symbol]",BM="[object WeakMap]",HM="[object ArrayBuffer]",WM="[object DataView]",GM="[object Float32Array]",KM="[object Float64Array]",qM="[object Int8Array]",YM="[object Int16Array]",QM="[object Int32Array]",XM="[object Uint8Array]",JM="[object Uint8ClampedArray]",ZM="[object Uint16Array]",e5="[object Uint32Array]",re={};re[U2]=re[PM]=re[HM]=re[WM]=re[RM]=re[DM]=re[GM]=re[KM]=re[qM]=re[YM]=re[QM]=re[MM]=re[FM]=re[z2]=re[UM]=re[jM]=re[zM]=re[VM]=re[XM]=re[JM]=re[ZM]=re[e5]=!0;re[$M]=re[j2]=re[BM]=!1;function io(t,e,n,r,i,s){var o,a=e&AM,l=e&NM,u=e&OM;if(n&&(o=i?n(t,r,i,s):n(t)),o!==void 0)return o;if(!pa(t))return t;var c=ma(t);if(c){if(o=WL(t),!a)return D2(t,o)}else{var f=Mm(t),h=f==j2||f==LM;if(C2(t))return _L(t,a);if(f==z2||f==U2||h&&!i){if(o=l||h?{}:EM(t),!a)return l?NL(t,EL(o,t)):IL(t,mL(o,t))}else{if(!re[f])return i?t:{};o=vM(t,f,a)}}s||(s=new Ss);var p=s.get(t);if(p)return p;s.set(t,o),CM(t)?t.forEach(function(_){o.add(io(_,e,n,_,t,s))}):TM(t)&&t.forEach(function(_,m){o.set(m,io(_,e,n,m,t,s))});var v=u?l?PL:OL:l?$m:Dm,w=c?void 0:v(t);return d$(w||t,function(_,m){w&&(m=_,_=t[m]),x2(o,m,io(_,e,n,m,t,s))}),o}var t5=4;function N0(t){return io(t,t5)}function V2(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var n5="[object Symbol]";function Um(t){return typeof t=="symbol"||Es(t)&&ws(t)==n5}var r5="Expected a function";function jm(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(r5);var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],s=n.cache;if(s.has(i))return s.get(i);var o=t.apply(this,r);return n.cache=s.set(i,o)||s,o};return n.cache=new(jm.Cache||gr),n}jm.Cache=gr;var i5=500;function s5(t){var e=jm(t,function(r){return n.size===i5&&n.clear(),r}),n=e.cache;return e}var o5=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a5=/\\(\\)?/g,l5=s5(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(o5,function(n,r,i,s){e.push(i?s.replace(a5,"$1"):r||n)}),e});const u5=l5;var c5=1/0;function f5(t){if(typeof t=="string"||Um(t))return t;var e=t+"";return e=="0"&&1/t==-c5?"-0":e}var h5=1/0,O0=lr?lr.prototype:void 0,P0=O0?O0.toString:void 0;function B2(t){if(typeof t=="string")return t;if(ma(t))return V2(t,B2)+"";if(Um(t))return P0?P0.call(t):"";var e=t+"";return e=="0"&&1/t==-h5?"-0":e}function d5(t){return t==null?"":B2(t)}function H2(t){return ma(t)?V2(t,f5):Um(t)?[t]:D2(u5(d5(t)))}var p5=!0;function W2(t,e){if(!p5){if(t)return;var n="Warning: "+e;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}var G2={exports:{}},ne={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $e=typeof Symbol=="function"&&Symbol.for,zm=$e?Symbol.for("react.element"):60103,Vm=$e?Symbol.for("react.portal"):60106,ac=$e?Symbol.for("react.fragment"):60107,lc=$e?Symbol.for("react.strict_mode"):60108,uc=$e?Symbol.for("react.profiler"):60114,cc=$e?Symbol.for("react.provider"):60109,fc=$e?Symbol.for("react.context"):60110,Bm=$e?Symbol.for("react.async_mode"):60111,hc=$e?Symbol.for("react.concurrent_mode"):60111,dc=$e?Symbol.for("react.forward_ref"):60112,pc=$e?Symbol.for("react.suspense"):60113,m5=$e?Symbol.for("react.suspense_list"):60120,mc=$e?Symbol.for("react.memo"):60115,gc=$e?Symbol.for("react.lazy"):60116,g5=$e?Symbol.for("react.block"):60121,v5=$e?Symbol.for("react.fundamental"):60117,y5=$e?Symbol.for("react.responder"):60118,w5=$e?Symbol.for("react.scope"):60119;function kt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case zm:switch(t=t.type,t){case Bm:case hc:case ac:case uc:case lc:case pc:return t;default:switch(t=t&&t.$$typeof,t){case fc:case dc:case gc:case mc:case cc:return t;default:return e}}case Vm:return e}}}function K2(t){return kt(t)===hc}ne.AsyncMode=Bm;ne.ConcurrentMode=hc;ne.ContextConsumer=fc;ne.ContextProvider=cc;ne.Element=zm;ne.ForwardRef=dc;ne.Fragment=ac;ne.Lazy=gc;ne.Memo=mc;ne.Portal=Vm;ne.Profiler=uc;ne.StrictMode=lc;ne.Suspense=pc;ne.isAsyncMode=function(t){return K2(t)||kt(t)===Bm};ne.isConcurrentMode=K2;ne.isContextConsumer=function(t){return kt(t)===fc};ne.isContextProvider=function(t){return kt(t)===cc};ne.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===zm};ne.isForwardRef=function(t){return kt(t)===dc};ne.isFragment=function(t){return kt(t)===ac};ne.isLazy=function(t){return kt(t)===gc};ne.isMemo=function(t){return kt(t)===mc};ne.isPortal=function(t){return kt(t)===Vm};ne.isProfiler=function(t){return kt(t)===uc};ne.isStrictMode=function(t){return kt(t)===lc};ne.isSuspense=function(t){return kt(t)===pc};ne.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===ac||t===hc||t===uc||t===lc||t===pc||t===m5||typeof t=="object"&&t!==null&&(t.$$typeof===gc||t.$$typeof===mc||t.$$typeof===cc||t.$$typeof===fc||t.$$typeof===dc||t.$$typeof===v5||t.$$typeof===y5||t.$$typeof===w5||t.$$typeof===g5)};ne.typeOf=kt;(function(t){t.exports=ne})(G2);var Hm=G2.exports,E5={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},S5={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},_5={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},q2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Wm={};Wm[Hm.ForwardRef]=_5;Wm[Hm.Memo]=q2;function R0(t){return Hm.isMemo(t)?q2:Wm[t.$$typeof]||E5}var k5=Object.defineProperty,T5=Object.getOwnPropertyNames,D0=Object.getOwnPropertySymbols,x5=Object.getOwnPropertyDescriptor,b5=Object.getPrototypeOf,$0=Object.prototype;function Y2(t,e,n){if(typeof e!="string"){if($0){var r=b5(e);r&&r!==$0&&Y2(t,r,n)}var i=T5(e);D0&&(i=i.concat(D0(e)));for(var s=R0(t),o=R0(e),a=0;a<i.length;++a){var l=i[a];if(!S5[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=x5(e,l);try{k5(t,l,u)}catch{}}}}return t}var I5=Y2,C5=1,A5=4;function N5(t){return io(t,C5|A5)}function zo(){return zo=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},zo.apply(this,arguments)}function Q2(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function Gm(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function L0(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var M0=function(e){return Array.isArray(e)&&e.length===0},md=function(e){return typeof e=="function"},O5=function(e){return e!==null&&typeof e=="object"},P5=function(e){return String(Math.floor(Number(e)))===e},R5=function(e){return S.exports.Children.count(e)===0};function It(t,e,n,r){r===void 0&&(r=0);for(var i=H2(e);t&&r<i.length;)t=t[i[r++]];return t===void 0?n:t}function kf(t,e,n){for(var r=N0(t),i=r,s=0,o=H2(e);s<o.length-1;s++){var a=o[s],l=It(t,o.slice(0,s+1));if(l&&(O5(l)||Array.isArray(l)))i=i[a]=N0(l);else{var u=o[s+1];i=i[a]=P5(u)&&Number(u)>=0?[]:{}}}return(s===0?t:i)[o[s]]===n?t:(n===void 0?delete i[o[s]]:i[o[s]]=n,s===0&&n===void 0&&delete r[o[s]],r)}var vc=S.exports.createContext(void 0);vc.displayName="FormikContext";vc.Provider;var D5=vc.Consumer;function $5(){var t=S.exports.useContext(vc);return t||W2(!1),t}var L5=S.exports.forwardRef(function(t,e){var n=t.action,r=Gm(t,["action"]),i=n!=null?n:"#",s=$5(),o=s.handleReset,a=s.handleSubmit;return S.exports.createElement("form",Object.assign({onSubmit:a,ref:e,onReset:o,action:i},r))});L5.displayName="Form";function M5(t){var e=function(i){return S.exports.createElement(D5,null,function(s){return s||W2(!1),S.exports.createElement(t,Object.assign({},i,{formik:s}))})},n=t.displayName||t.name||t.constructor&&t.constructor.name||"Component";return e.WrappedComponent=t,e.displayName="FormikConnect("+n+")",I5(e,t)}var F5=function(e,n,r){var i=is(e),s=i[n];return i.splice(n,1),i.splice(r,0,s),i},U5=function(e,n,r){var i=is(e),s=i[n];return i[n]=i[r],i[r]=s,i},Tf=function(e,n,r){var i=is(e);return i.splice(n,0,r),i},j5=function(e,n,r){var i=is(e);return i[n]=r,i},is=function(e){if(e){if(Array.isArray(e))return[].concat(e);var n=Object.keys(e).map(function(r){return parseInt(r)}).reduce(function(r,i){return i>r?i:r},0);return Array.from(zo({},e,{length:n+1}))}else return[]},z5=function(t){Q2(e,t);function e(r){var i;return i=t.call(this,r)||this,i.updateArrayField=function(s,o,a){var l=i.props,u=l.name,c=l.formik.setFormikState;c(function(f){var h=typeof a=="function"?a:s,p=typeof o=="function"?o:s,v=kf(f.values,u,s(It(f.values,u))),w=a?h(It(f.errors,u)):void 0,_=o?p(It(f.touched,u)):void 0;return M0(w)&&(w=void 0),M0(_)&&(_=void 0),zo({},f,{values:v,errors:a?kf(f.errors,u,w):f.errors,touched:o?kf(f.touched,u,_):f.touched})})},i.push=function(s){return i.updateArrayField(function(o){return[].concat(is(o),[N5(s)])},!1,!1)},i.handlePush=function(s){return function(){return i.push(s)}},i.swap=function(s,o){return i.updateArrayField(function(a){return U5(a,s,o)},!0,!0)},i.handleSwap=function(s,o){return function(){return i.swap(s,o)}},i.move=function(s,o){return i.updateArrayField(function(a){return F5(a,s,o)},!0,!0)},i.handleMove=function(s,o){return function(){return i.move(s,o)}},i.insert=function(s,o){return i.updateArrayField(function(a){return Tf(a,s,o)},function(a){return Tf(a,s,null)},function(a){return Tf(a,s,null)})},i.handleInsert=function(s,o){return function(){return i.insert(s,o)}},i.replace=function(s,o){return i.updateArrayField(function(a){return j5(a,s,o)},!1,!1)},i.handleReplace=function(s,o){return function(){return i.replace(s,o)}},i.unshift=function(s){var o=-1;return i.updateArrayField(function(a){var l=a?[s].concat(a):[s];return o<0&&(o=l.length),l},function(a){var l=a?[null].concat(a):[null];return o<0&&(o=l.length),l},function(a){var l=a?[null].concat(a):[null];return o<0&&(o=l.length),l}),o},i.handleUnshift=function(s){return function(){return i.unshift(s)}},i.handleRemove=function(s){return function(){return i.remove(s)}},i.handlePop=function(){return function(){return i.pop()}},i.remove=i.remove.bind(L0(i)),i.pop=i.pop.bind(L0(i)),i}var n=e.prototype;return n.componentDidUpdate=function(i){this.props.validateOnChange&&this.props.formik.validateOnChange&&!i3(It(i.formik.values,i.name),It(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},n.remove=function(i){var s;return this.updateArrayField(function(o){var a=o?is(o):[];return s||(s=a[i]),md(a.splice)&&a.splice(i,1),a},!0,!0),s},n.pop=function(){var i;return this.updateArrayField(function(s){var o=s;return i||(i=o&&o.pop&&o.pop()),o},!0,!0),i},n.render=function(){var i={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},s=this.props,o=s.component,a=s.render,l=s.children,u=s.name,c=s.formik,f=Gm(c,["validate","validationSchema"]),h=zo({},i,{form:f,name:u});return o?S.exports.createElement(o,h):a?a(h):l?typeof l=="function"?l(h):R5(l)?null:S.exports.Children.only(l):null},e}(S.exports.Component);z5.defaultProps={validateOnChange:!0};var V5=function(t){Q2(e,t);function e(){return t.apply(this,arguments)||this}var n=e.prototype;return n.shouldComponentUpdate=function(i){return It(this.props.formik.errors,this.props.name)!==It(i.formik.errors,this.props.name)||It(this.props.formik.touched,this.props.name)!==It(i.formik.touched,this.props.name)||Object.keys(this.props).length!==Object.keys(i).length},n.render=function(){var i=this.props,s=i.component,o=i.formik,a=i.render,l=i.children,u=i.name,c=Gm(i,["component","formik","render","children","name"]),f=It(o.touched,u),h=It(o.errors,u);return!!f&&!!h?a?md(a)?a(h):null:l?md(l)?l(h):null:s?S.exports.createElement(s,c,h):h:null},e}(S.exports.Component),B5=M5(V5),H5={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function W5(t){if(typeof t=="number")return{value:t,unit:"px"};var e,n=(t.match(/^[0-9.]*/)||"").toString();n.includes(".")?e=parseFloat(n):e=parseInt(n,10);var r=(t.match(/[^0-9]*$/)||"").toString();return H5[r]?{value:e,unit:r}:(console.warn("React Spinners: ".concat(t," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}function xf(t){var e=W5(t);return"".concat(e.value).concat(e.unit)}var G5=function(t,e,n){var r="react-spinners-".concat(t,"-").concat(n);if(typeof window>"u"||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var s=i.sheet,o=`
    @keyframes `.concat(r,` {
      `).concat(e,`
    }
  `);return s&&s.insertRule(o,0),r},uu=globalThis&&globalThis.__assign||function(){return uu=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},uu.apply(this,arguments)},K5=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n},q5=G5("BeatLoader","50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}","beat");function ss(t){var e=t.loading,n=e===void 0?!0:e,r=t.color,i=r===void 0?"#000000":r,s=t.speedMultiplier,o=s===void 0?1:s,a=t.cssOverride,l=a===void 0?{}:a,u=t.size,c=u===void 0?15:u,f=t.margin,h=f===void 0?2:f,p=K5(t,["loading","color","speedMultiplier","cssOverride","size","margin"]),v=uu({display:"inherit"},l),w=function(_){return{display:"inline-block",backgroundColor:i,width:xf(c),height:xf(c),margin:xf(h),borderRadius:"100%",animation:"".concat(q5," ").concat(.7/o,"s ").concat(_%2?"0s":"".concat(.35/o,"s")," infinite linear"),animationFillMode:"both"}};return n?D("span",{...uu({style:v},p),children:[y("span",{style:w(1)}),y("span",{style:w(2)}),y("span",{style:w(3)})]}):null}const ci="https://api.jikan.moe/v4/",Lt={limit:"?limit=",page:"page=",query:"?q=",typeOf:"type=",gender:"genres=",status:"status=",order:"order_by="},Y5=async({query:t,limit:e=25,page:n=1})=>await(await fetch(`${ci}${t}${Lt.limit}${e}&${Lt.page}${n}`)).json(),Q5=async({type:t="anime",id:e,page:n=1})=>await(await fetch(`${ci}${t}/${e}/episodes?${Lt.page}${n}`)).json(),X5=async({type:t})=>await(await fetch(`https://api.jikan.moe/v4/top/${t}${Lt.limit}10`)).json(),J5=async({type:t})=>await(await fetch(`https://api.jikan.moe/v4/watch/${t}${Lt.limit}1`)).json(),Z5=async({type:t="anime",id:e})=>await(await fetch(`${ci}${t}/${e}`)).json(),eF=async({type:t,query:e,page:n})=>await(await fetch(`${ci}${t}${e}&${Lt.page}${n}`)).json(),X2=async({type:t="anime"})=>await(await fetch(`${ci}genres/${t}`)).json(),tF=async({type:t="anime",id:e})=>({newDataSliced:(await(await fetch(`${ci}${t}/${e}/userupdates`)).json()).data.slice(0,16)}),nF=async({type:t="",typeOf:e="",gender:n="",status:r="",order:i="",page:s=1})=>await(await fetch(`${ci}${t}?${Lt.typeOf}${e}&${Lt.gender}${n}&${Lt.status}${r}&${Lt.order}${i}&${Lt.page}${s}`)).json(),rF=({type:t})=>{const[e,n]=S.exports.useState([]),[r,i]=S.exports.useState(!1),s=async({type:o})=>{i(!0);const a=await X5({type:o});n(a),i(!1)};return S.exports.useEffect(()=>{s({type:t})},[t]),{dataTop:e,loading:r}},Km=({children:t,...e})=>y("h3",{className:`${e.fonts} dark:text-slate-100 text-stone-800`,children:t}),F0=({title:t,url:e,episodes:n,id:r,status:i,score:s,type:o,queryType:a})=>{const l=n?n.map((u,c)=>y("div",{className:"text-center font-sans text-[12px] rounded-md dark:text-orange-300 text-orange-400 font-semibold",children:u.title},t+c)):null;return D(hr,{to:`/anime-plataform/detail?id=${r}&type=${a}`,target:"_blank",className:" flex  items-center justify-between w-full gap-3 ","aria-label":"as",children:[y("h2",{className:"whitespace-nowrap text-ellipsis hover:text-orange-300 dark:text-slate-100 text-stone-800 font-semibold transition-colors overflow-hidden",children:t}),y("div",{className:` bg-blue-500 min-w-[60px] text-center px-3 font-sans text-sm  font-semibold rounded-md text-blue-50 decorator-${o}`,children:o}),l]})},iF=()=>{var f;const[t,e]=S.exports.useState([]),[n,r]=S.exports.useState([]),[i]=dr(),s=i.get("type")?i.get("type"):"anime",{dataTop:o,loading:a}=rF({type:s}),l=(f=t==null?void 0:t.data)==null?void 0:f.map((h,p)=>y(F0,{type:h.type,url:h.url,queryType:s,id:h.mal_id,title:h.title,score:h.score,status:h.status},h.title)),u=n==null?void 0:n.map((h,p)=>y(F0,{queryType:s,episodes:h.episodes,id:h.entry.mal_id,title:h.entry.title,status:h.status},h.entry.mal_id+h.entry.title)),c=()=>{try{return J5({type:"episodes"})}catch(h){h.code===404&&console.log("not found "),console.log(B5)}};return S.exports.useEffect(()=>{o&&e(o)},[o]),S.exports.useEffect(()=>{c().then(h=>{if(h.data){const p=h.data.slice(0,10);r(p)}})},[s]),D("aside",{className:" p-4  overflow-y-scroll  lg-min:sticky lg-min:top-20 bg-slate-200 dark:bg-stone-900 shadow-lg  transition-colors max-h-[500px]   min-w-[300px] min-h-[400px] max-w-[350px] md:w-full flex flex-col justify-between gap-3  shrink-0",children:[D("div",{className:" relative w-full",children:[D("h2",{className:"mb-1 text-lg text-sky-400 font-bold dark:text-sky-300",children:["Top ",s]})," ",y("hr",{className:"w-full border-sky-400 dark:border-sky-100"})]}),!a&&t?l:y("div",{className:"absolute left-2/4 bottom-2/4 -translate-x-2/4  ",children:y(ss,{color:"#1fa9ff",size:12})}),D("div",{className:"w-full",children:[y("h2",{className:"mb-1 text-lg text-sky-400 dark:text-sky-300 font-bold",children:"Recent Episodes"})," ",y("hr",{className:"w-full border-sky-400 dark:border-sky-100"})]}),!a&&n?u:y("div",{className:"absolute left-2/4 bottom-2/4 -translate-x-2/4  ",children:y(ss,{color:"#1fa9ff",size:12})})]})},sF=({query:t,limit:e,page:n})=>{const[r,i]=S.exports.useState([]),[s,o]=S.exports.useState({}),[a,l]=S.exports.useState(!1),u=async({query:c,limite:f,page:h})=>{l(!0);const p=await Y5({query:c,limit:f,page:h}),{data:v}=await p,{pagination:w}=await p;i(v),o(w),l(!1)};return S.exports.useEffect(()=>{u({query:t,limit:e,page:n})},[n,t]),{data:r,pagination:s,loading:a}},oF=({isVisible:t})=>(console.log(t),y("button",{id:"detail-span",className:` z-[200] ${t} absolute  top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4  p-1 transition-all px-4 py-[1px] rounded-full  `,children:y(yt,{className:"text-slate-100 text-3xl",icon:sb})})),aF=({aired:t,background:e,type:n,duration:r,episodes:i,images:s,score:o,season:a,status:l,title:u,id:c,trailer:f})=>{const[h,p]=S.exports.useState(!1),v=h===!0?" isVisible":"isHidden",[w]=dr(),_=w.get("type")?w.get("type"):"anime";return D(hr,{onMouseOver:()=>{p(!0)},onMouseOut:()=>{p(!1)},id:"anime-card",to:`/anime-plataform/detail?id=${c}&type=${_}`,className:" flex select-none flex-col w-40    hover:shadow-2xl  transition-all min-w-[10rem]  min-h-[200px] max-h-[300px]  md:basis-full  dark:bg-stone-900 bg-slate-200  flex-shrink-0 rounded-sm ",children:[D("div",{id:"card-image",className:"relative min-h-[200px]",children:[y("img",{className:" transition-all  w-full min-w-full min-h-full h-60 dark:bg-gray-700  bg-slate-300  object-cover ",src:s.jpg.image_url}),y("span",{id:"bourble-type",className:` text-slate-50 text-[12px] min-w-[60px] py-[2px] px-2 font-bold rounded-full    text-center  absolute bottom-1 left-1 decorator-${n}`,children:n}),y(oF,{isVisible:v})]}),y("div",{className:"p-2 ",children:y("h3",{className:"whitespace-nowrap overflow-hidden text-ellipsis block dark:text-slate-100 text-stone-800 font-semibold",fonts:"text-sm ",children:u})})]})},gd=({isFiltersLoading:t,isLoading:e,pagination:n,currentPage:r,setCurrentPage:i})=>{const[s,o]=S.exports.useState(Number),[a,l]=S.exports.useState({}),[u,c]=S.exports.useState(""),[f,h]=S.exports.useState(""),p=e===!0?"disabled":"",v=Cn();function w(){a!=null&&a.has_next_page&&i(r+1)}function _(){r>1&&i(r-1)}return S.exports.useEffect(()=>{l(n)},[n]),S.exports.useEffect(()=>{h(u)},[]),S.exports.useEffect(()=>{c(v.pathname)},[v.pathname]),S.exports.useEffect(()=>{f!==u&&i(1)},[u]),S.exports.useEffect(()=>{var m,d,g;(m=a==null?void 0:a.items)!=null&&m.total&&o(Math.ceil(parseInt((d=a==null?void 0:a.items)==null?void 0:d.total)/parseInt((g=a==null?void 0:a.items)==null?void 0:g.per_page)))},[a]),D("nav",{className:"flex gap-2 items-end",children:[y("button",{disabled:p||r===1,onClick:_,className:"text-slate-50 disabled:opacity-50 transition-colors bg-orange-400/80 font-semibold px-2 py-1 rounded-sm",children:"Previously"}),y("button",{disabled:p||(a==null?void 0:a.has_next_page)===!1,onClick:w,className:"text-slate-50 disabled:opacity-50 bg-orange-400/80 font-semibold px-2 py-1 rounded-sm",children:"Next"}),s?D(Km,{fonts:"text-sm  dark:text-slate-100 text-stone-800 font-semibold",children:["Page: ",r," of ",s," "]}):null]})},lF=()=>{const[t,e]=S.exports.useState(1),[n]=dr(),r=n.get("type")?n.get("type"):"anime",{data:i,pagination:s,loading:o}=sF({query:r,limit:25,page:t});return D("div",{className:"flex flex-col  gap-3",children:[y("div",{className:" ",children:y(gd,{isLoading:o,pagination:s,currentPage:t,setCurrentPage:e})}),y("section",{className:" relative w-full md-min:min-w-[600px] min-w-[300px] min-h-[300px]  flex-stats flex-wrap gap-4",children:!o&&i?i.map(({aired:a,background:l,mal_id:u,duration:c,episodes:f,images:h,score:p,type:v,season:w,status:_,title:m,trailer:d})=>y(aF,{aired:a,id:u,plot:l,duration:c,episodes:f,images:h,score:p,season:w,status:_,title:m,trailer:d,type:v},m)):y("div",{className:"absolute left-2/4  -translate-x-2/4 ",children:y(ss,{color:"#1fa9ff",size:20})})})]})},uF=()=>{const{type:t}=rE();return document.title="Home",y(ys,{children:D("div",{className:"w-full pt-40  flex-stats-items-start lg:flex-wrap gap-20",children:[y(iF,{}),D("div",{className:"  flex-stats-col w-full gap-4 ",children:[y(Km,{fonts:"text-3xl capitalize",children:t||"anime"}),y(lF,{})]})]})})},U0=({title:t,type:e,images:n,id:r})=>{const[i,s]=S.exports.useState(!1),o=i===!0?" isVisible":"isHidden",[a]=dr(),l=a.get("type")?a.get("type"):"anime",u=()=>{s(!0)},c=()=>{s(!1)};return D(hr,{to:`/anime-plataform/detail?id=${r}&type=${l}`,className:"relative select-none flex flex-col w-[185px] bg-slate-300 dark:bg-stone-800 sm:w-full gap-2 rounded-sm justify-center items-center mb-2 shadow-lg",onMouseOver:u,onMouseOut:c,children:[D("div",{id:"card-image",className:"relative  w-full bg-slate-200 dark:bg-stone-700 p-1.5 rounded-sm",children:[y("img",{src:n.large_image_url,className:" w-full h-full  min-h-[250px] min-w-[150px] bg-slate-600    max-h-[250px] block bg-center bg-no-repeat bg-cover",alt:t}),y("span",{id:"bourble-type",className:`text-slate-50 text-[12px] min-w-[70px] py-[2px] px-2 font-bold rounded-full text-center absolute left-2 bottom-2 decorator-${e}`,children:e})]}),y("div",{children:y(Km,{fonts:"whitespace-nowrap overflow-hidden text-ellipsis  flex flex-col justify-center pb-2  w-[160px]",children:t})}),y("div",{id:"detail-span",className:` ${o} absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4  p-1  hover:-translate-y-5 transition-all px-4 py-[1px] rounded-full  `,children:y(yt,{className:"text-pink-500 text-2xl   overflow-hidden ",icon:ab})})]})},cF=({type:t,query:e,page:n})=>{const[r,i]=S.exports.useState([]),[s,o]=S.exports.useState(!1),[a,l]=S.exports.useState({}),u=async({type:c,query:f,page:h})=>{o(!0);const p=await eF({type:c,query:f,page:h}),{data:v}=p,{pagination:w}=p;i(v),l(w),o(!1)};return S.exports.useEffect(()=>{u({type:t,query:e,page:n})},[t,e,n]),{data:r,pagination:a,loading:s}},fF=({value:t,name:e,id:n,label:r})=>D("div",{className:"w-max min-w-[60px] flex gap-[2px] items-center",children:[y("input",{type:"checkbox",className:"",value:t,name:e,id:n}),y("label",{className:"dark:text-stone-200 text-[12px] capitalize font-medium w-full ",htmlFor:n,children:r})]}),hF=({handleCheckboxChange:t,genresFilteredOut:e})=>{var f;const[n,r]=S.exports.useState([]),[i,s]=S.exports.useState(!1);rE();const[o]=dr(),a=o.get("type")?o.get("type"):"anime",l=S.exports.useRef(),u=i===!0?"showModal":"",c=async()=>{const h=await X2({type:a});r(h)};return S.exports.useEffect(()=>{const h=p=>{i&&l.current&&!l.current.contains(p.target)&&s(!1)};return document.addEventListener("mousedown",h),()=>{document.removeEventListener("mousedown",h)}},[i]),S.exports.useEffect(()=>{c()},[a]),D("div",{ref:l,name:"genres",id:"genres",onChange:t,className:" min-w-[170px] cont-genres relative flex items-center justify-center cursor-pointer dark:bg-stone-800 bg-slate-200 select-none  rounded-sm h-8 px-2 ",children:[D("button",{type:"button",className:"absolute w-full h-full dark:text-slate-100 text-stone-700 font-semibold",onClick:()=>s(h=>!h),children:["Gender selected: ",e]}),y("div",{className:`menu-genres  ${u} dark:bg-stone-800 bg-slate-200 before:dark:border-y-stone-800`,children:(f=n==null?void 0:n.data)==null?void 0:f.map(h=>y(fF,{id:h.mal_id,value:h.mal_id,name:"genres",label:h.name},h.mal_id))})]})},dF=({SetfilterOut:t,currentPage:e,setCurrentPage:n})=>{const[r,i]=S.exports.useState({typeOf:"",genres:[],status:"",order:""}),s=qo();Cn();const[o]=dr(),a=o.get("type")?o.get("type"):"anime",l=({target:f})=>{i({...r,[f.name]:f.value})},u=f=>{let h=[...r.genres,f.target.value];r.genres.includes(f.target.value)&&(h=h.filter(p=>p!==f.target.value)),i({...r,[f.target.name]:h})};return D("form",{className:"w-full h-12 flex-stats gap-2 flex-wrap pb-20",onSubmit:f=>{f.preventDefault(),t({typeOf:r.typeOf,gender:r.genres,status:r.status,order:r.order}),e>1&&n(1),s(`?type=${a}&typeOf=${r.typeOf}&genres=${r.genres}&status=${r.status}&order_by=${r.order}`)},children:[D(Ef,{name:"typeOf",handleChange:l,children:[y(Ce,{name:"All",selected:!0,value:"ALL",children:"All"}),y(Ce,{name:"typeOf",value:"TV",children:"TV"}),y(Ce,{name:"typeOf",value:"Movie",children:"Movie"}),y(Ce,{name:"typeOf",value:"Special",children:"Special"}),y(Ce,{name:"typeOf",value:"Ova",children:"Ova"}),y(Ce,{name:"typeOf",value:"ONA",children:"Ona"})]}),y(hF,{genresFilteredOut:r.genres.length,handleCheckboxChange:u}),D(Ef,{name:"status",handleChange:l,children:[y(Ce,{name:"all",selected:!0,value:"all",children:"Estado: All"}),y(Ce,{name:"airing",value:"airing",children:"Estado: Airing"}),y(Ce,{name:"complete",value:"complete",children:"Estado: Complete"}),y(Ce,{name:"upcoming",value:"upcoming",children:"Estado: Upcoming"})]}),D(Ef,{name:"order",handleChange:l,children:[y(Ce,{name:"default",selected:!0,value:"default",children:"Order by: Default"}),y(Ce,{name:"popularity",value:"popularity",children:"Order by: Popularity"}),y(Ce,{name:"title",value:"title",children:"Order by: Title"}),y(Ce,{name:"type",value:"type",children:"Order by: Type "}),y(Ce,{name:"rating",value:"rating",children:"Order by: Rating"}),y(Ce,{name:"start_date",value:"start_date",children:"Order by: Start-date"}),y(Ce,{name:"end_date",value:"end_date",children:"Order by: End-date"}),y(Ce,{name:"favorites",value:"favorites",children:"Order by: Favorites"})]}),D("button",{type:"submit",className:" select-none  h-8 max-h-8 px-2 text-slate-50 font-bold bg-blue-500 text-md rounded-sm flex justify-center items-center gap-2",children:[y(yt,{color:"white",icon:hC}),"Filtrar"]})]})},pF=({type:t,typeOf:e,gender:n,status:r,order:i,page:s})=>{const[o,a]=S.exports.useState([]),[l,u]=S.exports.useState({}),[c,f]=S.exports.useState(!1),h=async({type:p,typeOf:v,gender:w,status:_,order:m,page:d})=>{f(!0);const g=await nF({type:p,typeOf:v,gender:w,status:_,order:m,page:d});a(g.data),u(g.pagination),f(!1)};return S.exports.useEffect(()=>{h({type:t,typeOf:e,gender:n,status:r,order:i,page:s})},[t,e,n,r,i,s]),{filteredData:o,filteredLoading:c,filteredPagination:l}},mF=()=>{const[t,e]=S.exports.useState([]),[n,r]=S.exports.useState([]),[i,s]=S.exports.useState(1),{filtersSelected:o,setFiltersSelected:a}=S.exports.useContext(Om),l=Cn().search,[u]=dr(),c=u.get("type")?u.get("type"):"anime";console.log(c,"search");const{data:f,pagination:h,loading:p}=cF({type:c,query:l,page:i}),{filteredData:v,filteredPagination:w,filteredLoading:_}=pF({type:c,typeOf:o==null?void 0:o.typeOf,gender:o==null?void 0:o.gender,status:o==null?void 0:o.status,order:o==null?void 0:o.order,page:i}),m=o?n.map(d=>y(U0,{title:d.title,type:d.type,images:d.images.jpg,id:d.mal_id},d.title+d.mal_id)):t.map(d=>y(U0,{title:d.title,type:d.type,images:d.images.jpg,id:d.mal_id},d.title+d.mal_id));return t&&t.sort((d,g)=>{if(d.type=="TV")return-1;if(d.type=="OVA")return 2;if(g.type=="Special")return 3;if(g.type=="ONA")return 0;if(g.type=="Movie")return-3}),S.exports.useEffect(()=>{f&&e(f)},[f]),S.exports.useEffect(()=>{v&&r(v)},[v]),y(ys,{children:D("div",{className:" pt-40 flex flex-col gap-6",children:[o?y(gd,{pagination:w,currentPage:i,setCurrentPage:s}):y(gd,{isLoading:p,isFiltersLoading:_,pagination:h,currentPage:i,setCurrentPage:s}),y(dF,{currentPage:i,setCurrentPage:s,SetfilterOut:a}),o?D("div",{className:"flex flex-col md:pt-4",children:[y("h2",{className:"font-semibold text-2xl dark:text-slate-200 text-stone-800",children:"Filters Selected:"})," ",D("h2",{className:"capitalize font-semibold dark:text-slate-300 text-stone-700",children:["Type: ",o.typeOf," / Status: ",o.status," / Order By: ",o.order," "]})," "]}):null,y("div",{className:"relative flex items-start w-full  min-h-[300px] md:pt-8 gap-4 flex-wrap",children:p?y("div",{className:"absolute left-2/4 bottom-2/4  -translate-2/4",children:y(ss,{color:"#3b82f6",size:24})}):m})]})})},gF=({id:t,type:e})=>{const[n,r]=S.exports.useState([]),[i,s]=S.exports.useState(!1),o=async({id:a,type:l})=>{s(!0);const u=await Z5({id:a,type:l});r(u.data),s(!1)};return S.exports.useEffect(()=>{o({id:t,type:e})},[t,e]),{data:n,loading:i}},vF=({score:t,scoreBy:e})=>{let n=[];for(let r=0;r<t/2;r++)n.push(y(yt,{className:"score-bg  ",icon:ub},r));return D("div",{className:"dark:text-slate-100 text-stone-700 pt-1 text-[12px] flex flex-col justify-center items-center",children:[y("span",{children:n}),D("span",{children:[e," Votes"]})]})},yF=({type:t,id:e})=>{const[n,r]=S.exports.useState([]),[i,s]=S.exports.useState(!1),o=({type:a,id:l})=>{setTimeout(async()=>{s(!0);const u=await tF({type:a,id:l});r(u),s(!1)},2e3)};return S.exports.useEffect(()=>{o({type:t,id:e})},[]),{data:n,loading:i}},wF=()=>y("button",{className:"absolute w-full h-full     flex justify-center items-center",children:y("span",{className:"rounded-full bg-rose-500  text-slate-100  w-8 h-8 py-2 flex justify-center items-center px-2",children:y(yt,{className:"text-lg   ",icon:dC})})}),qm=({children:t,props:e})=>y("span",{className:`${e}`,children:t}),EF=({poster:t,members:e,airing:n,queryType:r,id:i})=>{var l;const{data:s,loading:o}=yF({type:r,id:i});console.log(s);const a=o?y(ss,{className:"absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4",color:"#38bdf8",size:12}):(l=s.newDataSliced)==null?void 0:l.map(u=>y("a",{target:"_blank",href:u.user.url,className:"flex",children:y("picture",{children:y("img",{className:"w-14 h-14 object-cover",src:u.user.images.jpg.image_url,alt:""})})},u.user.username));return S.exports.useEffect(()=>{},[]),D("aside",{className:"flex flex-col gap-4 min-w-[250px] md-min:max-w-[280px] relative lg-min:-top-52   xl-min:left-4 md:w-full",children:[y("picture",{className:" p-1 dark:bg-stone-900  bg-slate-100 rounded-sm md-w-full shadow-lg dark:shadow-slate-600/5 ",children:y("img",{className:" h-full w-full max-h-[500px] min-h-[300px]  min-w-[200px]   object-cover",src:t,alt:"poster_anime"})}),D("div",{className:"flex-stats gap-4",children:[y("div",{className:"relative basis-2/4 bg-slate-200 hover:bg-rose-500  dark:hover:bg-rose-500 transition-colors dark:bg-stone-900 shadow-lg dark:shadow-slate-600/5 rounded-md h-12 flex  justify-center items-center",children:y(wF,{})}),D("div",{className:`basis-2/4 text-slate-50 font-semibold shadow-lg dark:shadow-slate-600/5 rounded-md h-12 select-none flex text-lg items-center justify-center  ${n?"bg-green-400":"bg-rose-600"} `,children:[" ",n?y("h2",{children:" Transmission"}):y("h2",{children:"Finished"})," "]})]}),y("div",{className:"min-h-[300px] relative w-full dark:bg-stone-900 bg-slate-200 rounded-md shadow-lg dark:shadow-slate-600/5 ",children:D("div",{className:" p-2   grid gap-3",children:[D("h2",{className:"dark:text-slate-100 border-b-[1.5px] border-white/80 dark:border-black/60 pb-1 text-stone-800 font-bold text-lg ",children:["Followers: ",D(qm,{props:"text-sky-400",children:[" ",e]})," "]}),y("div",{className:"flex flex-wrap justify-center items-center  gap-2",children:a})]})})]})};var vd=function(t,e){return vd=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)r.hasOwnProperty(i)&&(n[i]=r[i])},vd(t,e)};function SF(t,e){vd(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var so=function(){return so=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},so.apply(this,arguments)};function _F(t,e,n,r){var i,s=!1,o=0;function a(){i&&clearTimeout(i)}function l(){a(),s=!0}typeof e!="boolean"&&(r=n,n=e,e=void 0);function u(){var c=this,f=Date.now()-o,h=arguments;if(s)return;function p(){o=Date.now(),n.apply(c,h)}function v(){i=void 0}r&&!i&&p(),a(),r===void 0&&f>t?p():e!==!0&&(i=setTimeout(r?v:p,r===void 0?t-f:t))}return u.cancel=l,u}var zi={Pixel:"Pixel",Percent:"Percent"},j0={unit:zi.Percent,value:.8};function z0(t){return typeof t=="number"?{unit:zi.Percent,value:t*100}:typeof t=="string"?t.match(/^(\d*(\.\d+)?)px$/)?{unit:zi.Pixel,value:parseFloat(t)}:t.match(/^(\d*(\.\d+)?)%$/)?{unit:zi.Percent,value:parseFloat(t)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),j0):(console.warn("scrollThreshold should be string or number"),j0)}var kF=function(t){SF(e,t);function e(n){var r=t.call(this,n)||this;return r.lastScrollTop=0,r.actionTriggered=!1,r.startY=0,r.currentY=0,r.dragging=!1,r.maxPullDownDistance=0,r.getScrollableTarget=function(){return r.props.scrollableTarget instanceof HTMLElement?r.props.scrollableTarget:typeof r.props.scrollableTarget=="string"?document.getElementById(r.props.scrollableTarget):(r.props.scrollableTarget===null&&console.warn(`You are trying to pass scrollableTarget but it is null. This might
        happen because the element may not have been added to DOM yet.
        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.
      `),null)},r.onStart=function(i){r.lastScrollTop||(r.dragging=!0,i instanceof MouseEvent?r.startY=i.pageY:i instanceof TouchEvent&&(r.startY=i.touches[0].pageY),r.currentY=r.startY,r._infScroll&&(r._infScroll.style.willChange="transform",r._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},r.onMove=function(i){!r.dragging||(i instanceof MouseEvent?r.currentY=i.pageY:i instanceof TouchEvent&&(r.currentY=i.touches[0].pageY),!(r.currentY<r.startY)&&(r.currentY-r.startY>=Number(r.props.pullDownToRefreshThreshold)&&r.setState({pullToRefreshThresholdBreached:!0}),!(r.currentY-r.startY>r.maxPullDownDistance*1.5)&&r._infScroll&&(r._infScroll.style.overflow="visible",r._infScroll.style.transform="translate3d(0px, "+(r.currentY-r.startY)+"px, 0px)")))},r.onEnd=function(){r.startY=0,r.currentY=0,r.dragging=!1,r.state.pullToRefreshThresholdBreached&&(r.props.refreshFunction&&r.props.refreshFunction(),r.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame(function(){r._infScroll&&(r._infScroll.style.overflow="auto",r._infScroll.style.transform="none",r._infScroll.style.willChange="unset")})},r.onScrollListener=function(i){typeof r.props.onScroll=="function"&&setTimeout(function(){return r.props.onScroll&&r.props.onScroll(i)},0);var s=r.props.height||r._scrollableNode?i.target:document.documentElement.scrollTop?document.documentElement:document.body;if(!r.actionTriggered){var o=r.props.inverse?r.isElementAtTop(s,r.props.scrollThreshold):r.isElementAtBottom(s,r.props.scrollThreshold);o&&r.props.hasMore&&(r.actionTriggered=!0,r.setState({showLoader:!0}),r.props.next&&r.props.next()),r.lastScrollTop=s.scrollTop}},r.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:n.dataLength},r.throttledOnScrollListener=_F(150,r.onScrollListener).bind(r),r.onStart=r.onStart.bind(r),r.onMove=r.onMove.bind(r),r.onEnd=r.onEnd.bind(r),r}return e.prototype.componentDidMount=function(){if(typeof this.props.dataLength>"u")throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),typeof this.props.initialScrollY=="number"&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),typeof this.props.refreshFunction!="function"))throw new Error(`Mandatory prop "refreshFunction" missing.
          Pull Down To Refresh functionality will not work
          as expected. Check README.md for usage'`)},e.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},e.prototype.componentDidUpdate=function(n){this.props.dataLength!==n.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},e.getDerivedStateFromProps=function(n,r){var i=n.dataLength!==r.prevDataLength;return i?so(so({},r),{prevDataLength:n.dataLength}):null},e.prototype.isElementAtTop=function(n,r){r===void 0&&(r=.8);var i=n===document.body||n===document.documentElement?window.screen.availHeight:n.clientHeight,s=z0(r);return s.unit===zi.Pixel?n.scrollTop<=s.value+i-n.scrollHeight+1:n.scrollTop<=s.value/100+i-n.scrollHeight+1},e.prototype.isElementAtBottom=function(n,r){r===void 0&&(r=.8);var i=n===document.body||n===document.documentElement?window.screen.availHeight:n.clientHeight,s=z0(r);return s.unit===zi.Pixel?n.scrollTop+i>=n.scrollHeight-s.value:n.scrollTop+i>=s.value/100*n.scrollHeight},e.prototype.render=function(){var n=this,r=so({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),i=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),s=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return y("div",{style:s,className:"infinite-scroll-component__outerdiv",children:D("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(o){return n._infScroll=o},style:r,children:[this.props.pullDownToRefresh&&y("div",{style:{position:"relative"},ref:function(o){return n._pullDown=o},children:y("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance},children:this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent})}),this.props.children,!this.state.showLoader&&!i&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage]})})},e}(S.exports.Component);const TF=({synopsis:t,genders:e,detail:n,queryType:r,id:i})=>{var m;const[s,o]=S.exports.useState([]),[a,l]=S.exports.useState(!0),[u,c]=S.exports.useState(!1),[f,h]=S.exports.useState(1);s.sort((d,g)=>d.mal_id-g.mal_id);const p=n&&((m=n==null?void 0:n.genres)==null?void 0:m.map(d=>{var C;const g=e&&((C=e==null?void 0:e.data)==null?void 0:C.filter(k=>k.name===d.name)),E={};for(var T=0;T<(g==null?void 0:g.length);T++)E.id=g[T].mal_id;return y(hr,{to:`/anime-plataform/search?genres=${E.id}`,href:d.url,className:"text-sky-400  bg-sky-200/60 dark:bg-sky-200/10 hover:text-slate-100 hover:bg-sky-400 dark:hover:bg-sky-400 shadow-sm  rounded-full min-w-[25px]  px-3 py-1 text-center  text-[13px]  font-bold",target:"_blank",children:d.name},d.name)})),v=s==null?void 0:s.map(d=>D("a",{href:d.url,target:"_blank",className:"bg-slate-300/40 dark:bg-stone-800  dark:text-slate-200 text-sm text-stone-700 hover:text-orange-400 dark:hover:text-orange-300  font-semibold shadow-md rounded-full px-3 py-[6px]",children:[D(qm,{props:"bg-sky-400 text-slate-100 px-3 py-[1.5px] mr-2 rounded-full ",children:[" ",d.mal_id]}),"    ",d.title]},d.mal_id+d.title)),w=async()=>{c(!0);const d=await Q5({type:r,id:i,page:f});(d.data===0||d.data.length<20)&&l(!1),o(g=>[...g,...d.data]),c(!1)},_=()=>{a&&setTimeout(()=>{h(d=>d+1)},1500)};return S.exports.useEffect(()=>{w()},[f]),D("main",{className:"w-4/5 md:w-full flex-col px-4 md:px-0 ",children:[D("div",{className:"w-full dark:bg-stone-900 bg-slate-200 min-h-[250px] mb-4 shadow-lg p-4 flex flex-col gap-3",children:[y("h2",{className:"text-2xl dark:text-slate-100 text-stone-800 font-bold",children:"Synopsis"}),y("div",{className:"flex flex-wrap gap-3 w-full",children:p}),y("p",{className:"dark:text-stone-300   text-stone-700 text-[12.5px] font-semibold text-left lett ",children:t})]}),D("div",{id:"scrollableDiv",className:"  w-full dark:bg-stone-900 bg-slate-200 min-h-[350px] max-h-[250px] overflow-y-auto  shadow-lg p-4 flex flex-col gap-3",children:[y("h2",{className:"text-2xl dark:text-slate-100 text-stone-800 font-bold",children:"Episodes List"}),y(kF,{scrollableTarget:"scrollableDiv",dataLength:f*10,next:_,hasMore:a,loader:a&&y(ss,{size:14,color:"#38bdf8",className:"relative p-2"}),endMessage:y("h2",{className:"text-orange-400 font-bold",children:"There haven't  more episodes!"}),className:" relative flex flex-col gap-2",children:v})]})]})},V0=()=>{var u,c;const[t,e]=S.exports.useState({}),[n,r]=S.exports.useState([]),[i]=dr(),s=i.get("type")?i.get("type"):"anime",o=i.get("id"),{data:a}=gF({type:s,id:o}),l=async()=>{const f=await X2({type:s});r(f)};return S.exports.useEffect(()=>{a&&e(a)},[a]),S.exports.useEffect(()=>(t&&(document.title=`Detail ${t.title}`),()=>{document.title="AnimeDV"}),[t]),S.exports.useEffect(()=>{l()},[]),D("div",{className:" flex flex-col pt-[57px]  gap-6 w-full",children:[y("div",{className:"   relative w-full dark:bg-slate-200 bg-stone-900 pb-10 px-4 h-80 flex flex-col  justify-end items-center",children:D("div",{className:"flex  md:flex-col md:justify-center md:items-start md:gap-4  gap-2  w-full  items-start ",children:[y("div",{className:" lg-min:basis-2/5"}),D("div",{className:"flex flex-col flex-1 gap-2   xl-min:pl-2  items-start ",children:[y("h4",{className:"text-3xl dark:text-stone-800 text-slate-200 font-bold",children:t.title}),y(hr,{to:`/anime-plataform/search?typeOf=${t.type}`,className:"bg-sky-500 px-6 py-[1px] text-slate-100  rounded-full font-semibold",children:t.type}),D("div",{className:"flex gap-2",children:[D("h4",{className:"text-sm font-serif dark:text-stone-800 text-stone-100 dark:bg-slate-300 bg-stone-700 font-medium px-2 p-[3px] rounded-md ",children:[t.title_english," "]}),D("h4",{className:"text-sm font-serif dark:text-stone-800 text-stone-100 dark:bg-slate-300 bg-stone-700 font-medium px-2 p-[3px] rounded-md ",children:[t.title_japanese," "]})]})]}),y("div",{className:"basis-1/5  ",children:D("div",{className:"flex max-w-[200px] min-w-[200px] rounded-sm overflow-hidden",children:[y("div",{className:"w-2/5 flex  items-center justify-center  text-center bg-sky-500 text-slate-100  font-bold text-lg  capitalize p-2",children:t.score/2}),D("div",{className:"w-3/5 dark:bg-stone-800 bg-slate-200 font-bold p-[2px] text-center",children:[" ",y(vF,{score:t.score,scoreBy:t.scored_by})]})]})})]})}),y(ys,{children:D("div",{className:"flex gap-5 items-start w-full md:flex-col md:items-center ",children:[y(EF,{poster:(c=(u=t==null?void 0:t.images)==null?void 0:u.jpg)==null?void 0:c.large_image_url,members:t.members,airing:t.airing,queryType:s,id:o}),y(TF,{id:o,queryType:s,genders:n,detail:t,synopsis:t.synopsis})]})})]})},xF=()=>y(ys,{children:D("div",{className:"text-center flex-col pt-60",children:[y(yt,{className:"dark:text-slate-200 text-stone-800 text-6xl font-bold",icon:ob}),D("h2",{className:"  text-6xl dark:text-slate-200 text-stone-800 font-bold ",children:[" ",y(qm,{props:"text-orange-400",children:"Error 404"})," ",y("br",{})," There isn't match found "]})]})}),bF=S.exports.createContext({});function IF({children:t}){const[e,n]=S.exports.useState([]),[r,i]=S.exports.useState(),s=o=>(console.log("favorite"),y(Bx,{to:"/login"}));return y(bF.Provider,{value:{favoritesList:e,addToFavorite:s,setFavoritesList:n,isFavorite:r,setIsFavorite:i},children:t})}const CF=()=>{S.exports.useState(null);const[t,e]=S.exports.useState(0),n=async()=>{const u=new ln;await r(u)},r=async u=>{try{const c=await jN(s0,u);console.log(c)}catch(c){console.error(c)}};S.exports.useEffect(()=>{e(1),gN(s0,i)},[]);const i=async u=>{if(u){const c=await qD(u.uid);e(c?2:3),e(3),console.log(u.displayName,"hola")}else e(4),console.log("no user ")};return y(ys,{children:y("div",{className:"pt-40 w-full h-screen flex justify-center",children:D("div",{className:"p-4",children:[t===1&&y("h2",{className:"text-stone-800 font-bold",children:"Loading"}),t===2&&y("h2",{className:"text-stone-800 font-bold",children:"Registrado"}),t===3&&y("h2",{className:"text-stone-800 font-bold",children:"Estas autenticado pero no registrado"}),t===4&&y("h2",{className:"text-stone-800 font-bold",children:"No estas logueado"}),y("button",{onClick:n,className:"bg-sky-500 p-2 rounded-sm hover:bg-sky-600  text-lg text-slate-50 font-bold",children:"Register With Google"})]})})})};function AF(){const{darkMode:t,handleDarkMode:e}=S.exports.useContext(v2),n=t?"dark":"",r=t?"bg-black/95 ":"bg-slate-100";return console.log({VITE_APIKEY:"AIzaSyBneb9pO7geeJhe_VWCBlc-D6pcnjdG5-E",VITE_AUTHDOMAIN:"animedv-992b9.firebaseapp.com",VITE_PROJECTID:"animedv-992b9",VITE_STORAGEBUCKET:"animedv-992b9.appspot.com",VITE_MESSAGINGSENDERID:"249151580863",VITE_APPID:"1:249151580863:web:dd590a572bd3b00862340a",BASE_URL:"/anime-plataform/",MODE:"production",DEV:!1,PROD:!0}),y(QD,{children:y(IF,{children:D("div",{className:`${n} ${r}   min-h-screen`,children:[y(ZD,{handleDarkMode:e,darkMode:t}),D(Wx,{children:[y(_r,{path:"/anime-plataform/detail",element:y(V0,{})}),y(_r,{path:"*",element:y(xF,{})}),y(_r,{path:"/anime-plataform/",element:y(uF,{})}),y(_r,{path:"/anime-plataform/:type/detail/:id",element:y(V0,{})}),y(_r,{path:"/anime-plataform/search/",element:y(mF,{})}),y(_r,{path:"/anime-plataform/login",element:y(CF,{})})]}),y(t3,{})]})})})}bf.createRoot(document.getElementById("root")).render(y(e3,{children:y(qx,{children:y(AF,{})})}))});export default NF();
