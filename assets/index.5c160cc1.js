var S2=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var yR=S2((Ye,qe)=>{const E2=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}};E2();function x2(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var k={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $o=Symbol.for("react.element"),b2=Symbol.for("react.portal"),T2=Symbol.for("react.fragment"),I2=Symbol.for("react.strict_mode"),C2=Symbol.for("react.profiler"),O2=Symbol.for("react.provider"),P2=Symbol.for("react.context"),A2=Symbol.for("react.forward_ref"),N2=Symbol.for("react.suspense"),R2=Symbol.for("react.memo"),$2=Symbol.for("react.lazy"),Vh=Symbol.iterator;function L2(e){return e===null||typeof e!="object"?null:(e=Vh&&e[Vh]||e["@@iterator"],typeof e=="function"?e:null)}var rv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},iv=Object.assign,ov={};function ci(e,t,n){this.props=e,this.context=t,this.refs=ov,this.updater=n||rv}ci.prototype.isReactComponent={};ci.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ci.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function sv(){}sv.prototype=ci.prototype;function Nf(e,t,n){this.props=e,this.context=t,this.refs=ov,this.updater=n||rv}var Rf=Nf.prototype=new sv;Rf.constructor=Nf;iv(Rf,ci.prototype);Rf.isPureReactComponent=!0;var Wh=Array.isArray,av=Object.prototype.hasOwnProperty,$f={current:null},lv={key:!0,ref:!0,__self:!0,__source:!0};function uv(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)av.call(t,r)&&!lv.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:$o,type:e,key:o,ref:s,props:i,_owner:$f.current}}function D2(e,t){return{$$typeof:$o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Lf(e){return typeof e=="object"&&e!==null&&e.$$typeof===$o}function M2(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Gh=/\/+/g;function Xl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?M2(""+e.key):t.toString(36)}function Ns(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case $o:case b2:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Xl(s,0):r,Wh(i)?(n="",e!=null&&(n=e.replace(Gh,"$&/")+"/"),Ns(i,t,n,"",function(u){return u})):i!=null&&(Lf(i)&&(i=D2(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Gh,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Wh(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+Xl(o,a);s+=Ns(o,t,n,l,i)}else if(l=L2(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+Xl(o,a++),s+=Ns(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function us(e,t,n){if(e==null)return e;var r=[],i=0;return Ns(e,r,"","",function(o){return t.call(n,o,i++)}),r}function j2(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var De={current:null},Rs={transition:null},F2={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:Rs,ReactCurrentOwner:$f};z.Children={map:us,forEach:function(e,t,n){us(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return us(e,function(){t++}),t},toArray:function(e){return us(e,function(t){return t})||[]},only:function(e){if(!Lf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=ci;z.Fragment=T2;z.Profiler=C2;z.PureComponent=Nf;z.StrictMode=I2;z.Suspense=N2;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F2;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=iv({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=$f.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)av.call(t,l)&&!lv.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:$o,type:e.type,key:i,ref:o,props:r,_owner:s}};z.createContext=function(e){return e={$$typeof:P2,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:O2,_context:e},e.Consumer=e};z.createElement=uv;z.createFactory=function(e){var t=uv.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:A2,render:e}};z.isValidElement=Lf;z.lazy=function(e){return{$$typeof:$2,_payload:{_status:-1,_result:e},_init:j2}};z.memo=function(e,t){return{$$typeof:R2,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=Rs.transition;Rs.transition={};try{e()}finally{Rs.transition=t}};z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};z.useCallback=function(e,t){return De.current.useCallback(e,t)};z.useContext=function(e){return De.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return De.current.useDeferredValue(e)};z.useEffect=function(e,t){return De.current.useEffect(e,t)};z.useId=function(){return De.current.useId()};z.useImperativeHandle=function(e,t,n){return De.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return De.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return De.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return De.current.useMemo(e,t)};z.useReducer=function(e,t,n){return De.current.useReducer(e,t,n)};z.useRef=function(e){return De.current.useRef(e)};z.useState=function(e){return De.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return De.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return De.current.useTransition()};z.version="18.2.0";(function(e){e.exports=z})(k);const cv=x2(k.exports);var Qu={},fv={exports:{}},Ze={},dv={exports:{}},hv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,j){var F=A.length;A.push(j);e:for(;0<F;){var se=F-1>>>1,de=A[se];if(0<i(de,j))A[se]=j,A[F]=de,F=se;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var j=A[0],F=A.pop();if(F!==j){A[0]=F;e:for(var se=0,de=A.length,as=de>>>1;se<as;){var Hn=2*(se+1)-1,ql=A[Hn],Vn=Hn+1,ls=A[Vn];if(0>i(ql,F))Vn<de&&0>i(ls,ql)?(A[se]=ls,A[Vn]=F,se=Vn):(A[se]=ql,A[Hn]=F,se=Hn);else if(Vn<de&&0>i(ls,F))A[se]=ls,A[Vn]=F,se=Vn;else break e}}return j}function i(A,j){var F=A.sortIndex-j.sortIndex;return F!==0?F:A.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],u=[],c=1,f=null,d=3,g=!1,y=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(A){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=A)r(u),j.sortIndex=j.expirationTime,t(l,j);else break;j=n(u)}}function _(A){if(w=!1,m(A),!y)if(n(l)!==null)y=!0,Kl(E);else{var j=n(u);j!==null&&Yl(_,j.startTime-A)}}function E(A,j){y=!1,w&&(w=!1,p(b),b=-1),g=!0;var F=d;try{for(m(j),f=n(l);f!==null&&(!(f.expirationTime>j)||A&&!G());){var se=f.callback;if(typeof se=="function"){f.callback=null,d=f.priorityLevel;var de=se(f.expirationTime<=j);j=e.unstable_now(),typeof de=="function"?f.callback=de:f===n(l)&&r(l),m(j)}else r(l);f=n(l)}if(f!==null)var as=!0;else{var Hn=n(u);Hn!==null&&Yl(_,Hn.startTime-j),as=!1}return as}finally{f=null,d=F,g=!1}}var I=!1,S=null,b=-1,L=5,N=-1;function G(){return!(e.unstable_now()-N<L)}function Pe(){if(S!==null){var A=e.unstable_now();N=A;var j=!0;try{j=S(!0,A)}finally{j?Ve():(I=!1,S=null)}}else I=!1}var Ve;if(typeof h=="function")Ve=function(){h(Pe)};else if(typeof MessageChannel<"u"){var kt=new MessageChannel,ss=kt.port2;kt.port1.onmessage=Pe,Ve=function(){ss.postMessage(null)}}else Ve=function(){x(Pe,0)};function Kl(A){S=A,I||(I=!0,Ve())}function Yl(A,j){b=x(function(){A(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){y||g||(y=!0,Kl(E))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(A){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var F=d;d=j;try{return A()}finally{d=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,j){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var F=d;d=A;try{return j()}finally{d=F}},e.unstable_scheduleCallback=function(A,j,F){var se=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?se+F:se):F=se,A){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=F+de,A={id:c++,callback:j,priorityLevel:A,startTime:F,expirationTime:de,sortIndex:-1},F>se?(A.sortIndex=F,t(u,A),n(l)===null&&A===n(u)&&(w?(p(b),b=-1):w=!0,Yl(_,F-se))):(A.sortIndex=de,t(l,A),y||g||(y=!0,Kl(E))),A},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(A){var j=d;return function(){var F=d;d=j;try{return A.apply(this,arguments)}finally{d=F}}}})(hv);(function(e){e.exports=hv})(dv);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pv=k.exports,Qe=dv.exports;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mv=new Set,no={};function kr(e,t){ei(e,t),ei(e+"Capture",t)}function ei(e,t){for(no[e]=t,e=0;e<t.length;e++)mv.add(t[e])}var Wt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ju=Object.prototype.hasOwnProperty,U2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Kh={},Yh={};function z2(e){return Ju.call(Yh,e)?!0:Ju.call(Kh,e)?!1:U2.test(e)?Yh[e]=!0:(Kh[e]=!0,!1)}function B2(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function H2(e,t,n,r){if(t===null||typeof t>"u"||B2(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Me(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Se[e]=new Me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Se[t]=new Me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Se[e]=new Me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Se[e]=new Me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Se[e]=new Me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Se[e]=new Me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Se[e]=new Me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Se[e]=new Me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Se[e]=new Me(e,5,!1,e.toLowerCase(),null,!1,!1)});var Df=/[\-:]([a-z])/g;function Mf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Df,Mf);Se[t]=new Me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Df,Mf);Se[t]=new Me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Df,Mf);Se[t]=new Me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Se[e]=new Me(e,1,!1,e.toLowerCase(),null,!1,!1)});Se.xlinkHref=new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Se[e]=new Me(e,1,!1,e.toLowerCase(),null,!0,!0)});function jf(e,t,n,r){var i=Se.hasOwnProperty(t)?Se[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(H2(t,n,i,r)&&(n=null),r||i===null?z2(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var tn=pv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,cs=Symbol.for("react.element"),Ir=Symbol.for("react.portal"),Cr=Symbol.for("react.fragment"),Ff=Symbol.for("react.strict_mode"),Zu=Symbol.for("react.profiler"),gv=Symbol.for("react.provider"),vv=Symbol.for("react.context"),Uf=Symbol.for("react.forward_ref"),ec=Symbol.for("react.suspense"),tc=Symbol.for("react.suspense_list"),zf=Symbol.for("react.memo"),un=Symbol.for("react.lazy"),yv=Symbol.for("react.offscreen"),qh=Symbol.iterator;function Ei(e){return e===null||typeof e!="object"?null:(e=qh&&e[qh]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Object.assign,Ql;function Ri(e){if(Ql===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ql=t&&t[1]||""}return`
`+Ql+e}var Jl=!1;function Zl(e,t){if(!e||Jl)return"";Jl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{Jl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ri(e):""}function V2(e){switch(e.tag){case 5:return Ri(e.type);case 16:return Ri("Lazy");case 13:return Ri("Suspense");case 19:return Ri("SuspenseList");case 0:case 2:case 15:return e=Zl(e.type,!1),e;case 11:return e=Zl(e.type.render,!1),e;case 1:return e=Zl(e.type,!0),e;default:return""}}function nc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Cr:return"Fragment";case Ir:return"Portal";case Zu:return"Profiler";case Ff:return"StrictMode";case ec:return"Suspense";case tc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case vv:return(e.displayName||"Context")+".Consumer";case gv:return(e._context.displayName||"Context")+".Provider";case Uf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case zf:return t=e.displayName||null,t!==null?t:nc(e.type)||"Memo";case un:t=e._payload,e=e._init;try{return nc(e(t))}catch{}}return null}function W2(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nc(t);case 8:return t===Ff?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wv(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function G2(e){var t=wv(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fs(e){e._valueTracker||(e._valueTracker=G2(e))}function _v(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=wv(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function rc(e,t){var n=t.checked;return ie({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Xh(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Pn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function kv(e,t){t=t.checked,t!=null&&jf(e,"checked",t,!1)}function ic(e,t){kv(e,t);var n=Pn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?oc(e,t.type,n):t.hasOwnProperty("defaultValue")&&oc(e,t.type,Pn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Qh(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function oc(e,t,n){(t!=="number"||Qs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var $i=Array.isArray;function Vr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Pn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function sc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return ie({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Jh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if($i(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Pn(n)}}function Sv(e,t){var n=Pn(t.value),r=Pn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Zh(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ev(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ac(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ev(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ds,xv=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ds=ds||document.createElement("div"),ds.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ds.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ro(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},K2=["Webkit","ms","Moz","O"];Object.keys(Fi).forEach(function(e){K2.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Fi[t]=Fi[e]})});function bv(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Fi.hasOwnProperty(e)&&Fi[e]?(""+t).trim():t+"px"}function Tv(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=bv(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Y2=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lc(e,t){if(t){if(Y2[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function uc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cc=null;function Bf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fc=null,Wr=null,Gr=null;function ep(e){if(e=Mo(e)){if(typeof fc!="function")throw Error(T(280));var t=e.stateNode;t&&(t=Qa(t),fc(e.stateNode,e.type,t))}}function Iv(e){Wr?Gr?Gr.push(e):Gr=[e]:Wr=e}function Cv(){if(Wr){var e=Wr,t=Gr;if(Gr=Wr=null,ep(e),t)for(e=0;e<t.length;e++)ep(t[e])}}function Ov(e,t){return e(t)}function Pv(){}var eu=!1;function Av(e,t,n){if(eu)return e(t,n);eu=!0;try{return Ov(e,t,n)}finally{eu=!1,(Wr!==null||Gr!==null)&&(Pv(),Cv())}}function io(e,t){var n=e.stateNode;if(n===null)return null;var r=Qa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var dc=!1;if(Wt)try{var xi={};Object.defineProperty(xi,"passive",{get:function(){dc=!0}}),window.addEventListener("test",xi,xi),window.removeEventListener("test",xi,xi)}catch{dc=!1}function q2(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ui=!1,Js=null,Zs=!1,hc=null,X2={onError:function(e){Ui=!0,Js=e}};function Q2(e,t,n,r,i,o,s,a,l){Ui=!1,Js=null,q2.apply(X2,arguments)}function J2(e,t,n,r,i,o,s,a,l){if(Q2.apply(this,arguments),Ui){if(Ui){var u=Js;Ui=!1,Js=null}else throw Error(T(198));Zs||(Zs=!0,hc=u)}}function Sr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Nv(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function tp(e){if(Sr(e)!==e)throw Error(T(188))}function Z2(e){var t=e.alternate;if(!t){if(t=Sr(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return tp(i),e;if(o===r)return tp(i),t;o=o.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function Rv(e){return e=Z2(e),e!==null?$v(e):null}function $v(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=$v(e);if(t!==null)return t;e=e.sibling}return null}var Lv=Qe.unstable_scheduleCallback,np=Qe.unstable_cancelCallback,e_=Qe.unstable_shouldYield,t_=Qe.unstable_requestPaint,ae=Qe.unstable_now,n_=Qe.unstable_getCurrentPriorityLevel,Hf=Qe.unstable_ImmediatePriority,Dv=Qe.unstable_UserBlockingPriority,ea=Qe.unstable_NormalPriority,r_=Qe.unstable_LowPriority,Mv=Qe.unstable_IdlePriority,Ka=null,Ot=null;function i_(e){if(Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(Ka,e,void 0,(e.current.flags&128)===128)}catch{}}var vt=Math.clz32?Math.clz32:a_,o_=Math.log,s_=Math.LN2;function a_(e){return e>>>=0,e===0?32:31-(o_(e)/s_|0)|0}var hs=64,ps=4194304;function Li(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ta(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Li(a):(o&=s,o!==0&&(r=Li(o)))}else s=n&~i,s!==0?r=Li(s):o!==0&&(r=Li(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-vt(t),i=1<<n,r|=e[n],t&=~i;return r}function l_(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function u_(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-vt(o),a=1<<s,l=i[s];l===-1?((a&n)===0||(a&r)!==0)&&(i[s]=l_(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function pc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function jv(){var e=hs;return hs<<=1,(hs&4194240)===0&&(hs=64),e}function tu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Lo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-vt(t),e[t]=n}function c_(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-vt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Vf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-vt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var V=0;function Fv(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Uv,Wf,zv,Bv,Hv,mc=!1,ms=[],_n=null,kn=null,Sn=null,oo=new Map,so=new Map,fn=[],f_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rp(e,t){switch(e){case"focusin":case"focusout":_n=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":oo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":so.delete(t.pointerId)}}function bi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Mo(t),t!==null&&Wf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function d_(e,t,n,r,i){switch(t){case"focusin":return _n=bi(_n,e,t,n,r,i),!0;case"dragenter":return kn=bi(kn,e,t,n,r,i),!0;case"mouseover":return Sn=bi(Sn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return oo.set(o,bi(oo.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,so.set(o,bi(so.get(o)||null,e,t,n,r,i)),!0}return!1}function Vv(e){var t=Xn(e.target);if(t!==null){var n=Sr(t);if(n!==null){if(t=n.tag,t===13){if(t=Nv(n),t!==null){e.blockedOn=t,Hv(e.priority,function(){zv(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $s(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=gc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);cc=r,n.target.dispatchEvent(r),cc=null}else return t=Mo(n),t!==null&&Wf(t),e.blockedOn=n,!1;t.shift()}return!0}function ip(e,t,n){$s(e)&&n.delete(t)}function h_(){mc=!1,_n!==null&&$s(_n)&&(_n=null),kn!==null&&$s(kn)&&(kn=null),Sn!==null&&$s(Sn)&&(Sn=null),oo.forEach(ip),so.forEach(ip)}function Ti(e,t){e.blockedOn===t&&(e.blockedOn=null,mc||(mc=!0,Qe.unstable_scheduleCallback(Qe.unstable_NormalPriority,h_)))}function ao(e){function t(i){return Ti(i,e)}if(0<ms.length){Ti(ms[0],e);for(var n=1;n<ms.length;n++){var r=ms[n];r.blockedOn===e&&(r.blockedOn=null)}}for(_n!==null&&Ti(_n,e),kn!==null&&Ti(kn,e),Sn!==null&&Ti(Sn,e),oo.forEach(t),so.forEach(t),n=0;n<fn.length;n++)r=fn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<fn.length&&(n=fn[0],n.blockedOn===null);)Vv(n),n.blockedOn===null&&fn.shift()}var Kr=tn.ReactCurrentBatchConfig,na=!0;function p_(e,t,n,r){var i=V,o=Kr.transition;Kr.transition=null;try{V=1,Gf(e,t,n,r)}finally{V=i,Kr.transition=o}}function m_(e,t,n,r){var i=V,o=Kr.transition;Kr.transition=null;try{V=4,Gf(e,t,n,r)}finally{V=i,Kr.transition=o}}function Gf(e,t,n,r){if(na){var i=gc(e,t,n,r);if(i===null)fu(e,t,r,ra,n),rp(e,r);else if(d_(i,e,t,n,r))r.stopPropagation();else if(rp(e,r),t&4&&-1<f_.indexOf(e)){for(;i!==null;){var o=Mo(i);if(o!==null&&Uv(o),o=gc(e,t,n,r),o===null&&fu(e,t,r,ra,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else fu(e,t,r,null,n)}}var ra=null;function gc(e,t,n,r){if(ra=null,e=Bf(r),e=Xn(e),e!==null)if(t=Sr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Nv(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ra=e,null}function Wv(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(n_()){case Hf:return 1;case Dv:return 4;case ea:case r_:return 16;case Mv:return 536870912;default:return 16}default:return 16}}var vn=null,Kf=null,Ls=null;function Gv(){if(Ls)return Ls;var e,t=Kf,n=t.length,r,i="value"in vn?vn.value:vn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Ls=i.slice(e,1<r?1-r:void 0)}function Ds(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gs(){return!0}function op(){return!1}function et(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?gs:op,this.isPropagationStopped=op,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gs)},persist:function(){},isPersistent:gs}),t}var fi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yf=et(fi),Do=ie({},fi,{view:0,detail:0}),g_=et(Do),nu,ru,Ii,Ya=ie({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ii&&(Ii&&e.type==="mousemove"?(nu=e.screenX-Ii.screenX,ru=e.screenY-Ii.screenY):ru=nu=0,Ii=e),nu)},movementY:function(e){return"movementY"in e?e.movementY:ru}}),sp=et(Ya),v_=ie({},Ya,{dataTransfer:0}),y_=et(v_),w_=ie({},Do,{relatedTarget:0}),iu=et(w_),__=ie({},fi,{animationName:0,elapsedTime:0,pseudoElement:0}),k_=et(__),S_=ie({},fi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),E_=et(S_),x_=ie({},fi,{data:0}),ap=et(x_),b_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},T_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},I_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function C_(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=I_[e])?!!t[e]:!1}function qf(){return C_}var O_=ie({},Do,{key:function(e){if(e.key){var t=b_[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ds(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?T_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qf,charCode:function(e){return e.type==="keypress"?Ds(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ds(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),P_=et(O_),A_=ie({},Ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lp=et(A_),N_=ie({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qf}),R_=et(N_),$_=ie({},fi,{propertyName:0,elapsedTime:0,pseudoElement:0}),L_=et($_),D_=ie({},Ya,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),M_=et(D_),j_=[9,13,27,32],Xf=Wt&&"CompositionEvent"in window,zi=null;Wt&&"documentMode"in document&&(zi=document.documentMode);var F_=Wt&&"TextEvent"in window&&!zi,Kv=Wt&&(!Xf||zi&&8<zi&&11>=zi),up=String.fromCharCode(32),cp=!1;function Yv(e,t){switch(e){case"keyup":return j_.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qv(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Or=!1;function U_(e,t){switch(e){case"compositionend":return qv(t);case"keypress":return t.which!==32?null:(cp=!0,up);case"textInput":return e=t.data,e===up&&cp?null:e;default:return null}}function z_(e,t){if(Or)return e==="compositionend"||!Xf&&Yv(e,t)?(e=Gv(),Ls=Kf=vn=null,Or=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Kv&&t.locale!=="ko"?null:t.data;default:return null}}var B_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!B_[e.type]:t==="textarea"}function Xv(e,t,n,r){Iv(r),t=ia(t,"onChange"),0<t.length&&(n=new Yf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Bi=null,lo=null;function H_(e){ay(e,0)}function qa(e){var t=Nr(e);if(_v(t))return e}function V_(e,t){if(e==="change")return t}var Qv=!1;if(Wt){var ou;if(Wt){var su="oninput"in document;if(!su){var dp=document.createElement("div");dp.setAttribute("oninput","return;"),su=typeof dp.oninput=="function"}ou=su}else ou=!1;Qv=ou&&(!document.documentMode||9<document.documentMode)}function hp(){Bi&&(Bi.detachEvent("onpropertychange",Jv),lo=Bi=null)}function Jv(e){if(e.propertyName==="value"&&qa(lo)){var t=[];Xv(t,lo,e,Bf(e)),Av(H_,t)}}function W_(e,t,n){e==="focusin"?(hp(),Bi=t,lo=n,Bi.attachEvent("onpropertychange",Jv)):e==="focusout"&&hp()}function G_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qa(lo)}function K_(e,t){if(e==="click")return qa(t)}function Y_(e,t){if(e==="input"||e==="change")return qa(t)}function q_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:q_;function uo(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ju.call(t,i)||!wt(e[i],t[i]))return!1}return!0}function pp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mp(e,t){var n=pp(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pp(n)}}function Zv(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Zv(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ey(){for(var e=window,t=Qs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qs(e.document)}return t}function Qf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function X_(e){var t=ey(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Zv(n.ownerDocument.documentElement,n)){if(r!==null&&Qf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=mp(n,o);var s=mp(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Q_=Wt&&"documentMode"in document&&11>=document.documentMode,Pr=null,vc=null,Hi=null,yc=!1;function gp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yc||Pr==null||Pr!==Qs(r)||(r=Pr,"selectionStart"in r&&Qf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hi&&uo(Hi,r)||(Hi=r,r=ia(vc,"onSelect"),0<r.length&&(t=new Yf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Pr)))}function vs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ar={animationend:vs("Animation","AnimationEnd"),animationiteration:vs("Animation","AnimationIteration"),animationstart:vs("Animation","AnimationStart"),transitionend:vs("Transition","TransitionEnd")},au={},ty={};Wt&&(ty=document.createElement("div").style,"AnimationEvent"in window||(delete Ar.animationend.animation,delete Ar.animationiteration.animation,delete Ar.animationstart.animation),"TransitionEvent"in window||delete Ar.transitionend.transition);function Xa(e){if(au[e])return au[e];if(!Ar[e])return e;var t=Ar[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ty)return au[e]=t[n];return e}var ny=Xa("animationend"),ry=Xa("animationiteration"),iy=Xa("animationstart"),oy=Xa("transitionend"),sy=new Map,vp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dn(e,t){sy.set(e,t),kr(t,[e])}for(var lu=0;lu<vp.length;lu++){var uu=vp[lu],J_=uu.toLowerCase(),Z_=uu[0].toUpperCase()+uu.slice(1);Dn(J_,"on"+Z_)}Dn(ny,"onAnimationEnd");Dn(ry,"onAnimationIteration");Dn(iy,"onAnimationStart");Dn("dblclick","onDoubleClick");Dn("focusin","onFocus");Dn("focusout","onBlur");Dn(oy,"onTransitionEnd");ei("onMouseEnter",["mouseout","mouseover"]);ei("onMouseLeave",["mouseout","mouseover"]);ei("onPointerEnter",["pointerout","pointerover"]);ei("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ek=new Set("cancel close invalid load scroll toggle".split(" ").concat(Di));function yp(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,J2(r,t,void 0,e),e.currentTarget=null}function ay(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;yp(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;yp(i,a,u),o=l}}}if(Zs)throw e=hc,Zs=!1,hc=null,e}function X(e,t){var n=t[Ec];n===void 0&&(n=t[Ec]=new Set);var r=e+"__bubble";n.has(r)||(ly(t,e,2,!1),n.add(r))}function cu(e,t,n){var r=0;t&&(r|=4),ly(n,e,r,t)}var ys="_reactListening"+Math.random().toString(36).slice(2);function co(e){if(!e[ys]){e[ys]=!0,mv.forEach(function(n){n!=="selectionchange"&&(ek.has(n)||cu(n,!1,e),cu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ys]||(t[ys]=!0,cu("selectionchange",!1,t))}}function ly(e,t,n,r){switch(Wv(t)){case 1:var i=p_;break;case 4:i=m_;break;default:i=Gf}n=i.bind(null,t,n,e),i=void 0,!dc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function fu(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Xn(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Av(function(){var u=o,c=Bf(n),f=[];e:{var d=sy.get(e);if(d!==void 0){var g=Yf,y=e;switch(e){case"keypress":if(Ds(n)===0)break e;case"keydown":case"keyup":g=P_;break;case"focusin":y="focus",g=iu;break;case"focusout":y="blur",g=iu;break;case"beforeblur":case"afterblur":g=iu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=y_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=R_;break;case ny:case ry:case iy:g=k_;break;case oy:g=L_;break;case"scroll":g=g_;break;case"wheel":g=M_;break;case"copy":case"cut":case"paste":g=E_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=lp}var w=(t&4)!==0,x=!w&&e==="scroll",p=w?d!==null?d+"Capture":null:d;w=[];for(var h=u,m;h!==null;){m=h;var _=m.stateNode;if(m.tag===5&&_!==null&&(m=_,p!==null&&(_=io(h,p),_!=null&&w.push(fo(h,_,m)))),x)break;h=h.return}0<w.length&&(d=new g(d,y,null,n,c),f.push({event:d,listeners:w}))}}if((t&7)===0){e:{if(d=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",d&&n!==cc&&(y=n.relatedTarget||n.fromElement)&&(Xn(y)||y[Gt]))break e;if((g||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Xn(y):null,y!==null&&(x=Sr(y),y!==x||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(w=sp,_="onMouseLeave",p="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(w=lp,_="onPointerLeave",p="onPointerEnter",h="pointer"),x=g==null?d:Nr(g),m=y==null?d:Nr(y),d=new w(_,h+"leave",g,n,c),d.target=x,d.relatedTarget=m,_=null,Xn(c)===u&&(w=new w(p,h+"enter",y,n,c),w.target=m,w.relatedTarget=x,_=w),x=_,g&&y)t:{for(w=g,p=y,h=0,m=w;m;m=Tr(m))h++;for(m=0,_=p;_;_=Tr(_))m++;for(;0<h-m;)w=Tr(w),h--;for(;0<m-h;)p=Tr(p),m--;for(;h--;){if(w===p||p!==null&&w===p.alternate)break t;w=Tr(w),p=Tr(p)}w=null}else w=null;g!==null&&wp(f,d,g,w,!1),y!==null&&x!==null&&wp(f,x,y,w,!0)}}e:{if(d=u?Nr(u):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var E=V_;else if(fp(d))if(Qv)E=Y_;else{E=G_;var I=W_}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=K_);if(E&&(E=E(e,u))){Xv(f,E,n,c);break e}I&&I(e,d,u),e==="focusout"&&(I=d._wrapperState)&&I.controlled&&d.type==="number"&&oc(d,"number",d.value)}switch(I=u?Nr(u):window,e){case"focusin":(fp(I)||I.contentEditable==="true")&&(Pr=I,vc=u,Hi=null);break;case"focusout":Hi=vc=Pr=null;break;case"mousedown":yc=!0;break;case"contextmenu":case"mouseup":case"dragend":yc=!1,gp(f,n,c);break;case"selectionchange":if(Q_)break;case"keydown":case"keyup":gp(f,n,c)}var S;if(Xf)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Or?Yv(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Kv&&n.locale!=="ko"&&(Or||b!=="onCompositionStart"?b==="onCompositionEnd"&&Or&&(S=Gv()):(vn=c,Kf="value"in vn?vn.value:vn.textContent,Or=!0)),I=ia(u,b),0<I.length&&(b=new ap(b,e,null,n,c),f.push({event:b,listeners:I}),S?b.data=S:(S=qv(n),S!==null&&(b.data=S)))),(S=F_?U_(e,n):z_(e,n))&&(u=ia(u,"onBeforeInput"),0<u.length&&(c=new ap("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=S))}ay(f,t)})}function fo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ia(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=io(e,n),o!=null&&r.unshift(fo(e,o,i)),o=io(e,t),o!=null&&r.push(fo(e,o,i))),e=e.return}return r}function Tr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wp(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=io(n,o),l!=null&&s.unshift(fo(n,l,a))):i||(l=io(n,o),l!=null&&s.push(fo(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var tk=/\r\n?/g,nk=/\u0000|\uFFFD/g;function _p(e){return(typeof e=="string"?e:""+e).replace(tk,`
`).replace(nk,"")}function ws(e,t,n){if(t=_p(t),_p(e)!==t&&n)throw Error(T(425))}function oa(){}var wc=null,_c=null;function kc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sc=typeof setTimeout=="function"?setTimeout:void 0,rk=typeof clearTimeout=="function"?clearTimeout:void 0,kp=typeof Promise=="function"?Promise:void 0,ik=typeof queueMicrotask=="function"?queueMicrotask:typeof kp<"u"?function(e){return kp.resolve(null).then(e).catch(ok)}:Sc;function ok(e){setTimeout(function(){throw e})}function du(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ao(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ao(t)}function En(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Sp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var di=Math.random().toString(36).slice(2),xt="__reactFiber$"+di,ho="__reactProps$"+di,Gt="__reactContainer$"+di,Ec="__reactEvents$"+di,sk="__reactListeners$"+di,ak="__reactHandles$"+di;function Xn(e){var t=e[xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Gt]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Sp(e);e!==null;){if(n=e[xt])return n;e=Sp(e)}return t}e=n,n=e.parentNode}return null}function Mo(e){return e=e[xt]||e[Gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function Qa(e){return e[ho]||null}var xc=[],Rr=-1;function Mn(e){return{current:e}}function J(e){0>Rr||(e.current=xc[Rr],xc[Rr]=null,Rr--)}function q(e,t){Rr++,xc[Rr]=e.current,e.current=t}var An={},Ce=Mn(An),ze=Mn(!1),sr=An;function ti(e,t){var n=e.type.contextTypes;if(!n)return An;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Be(e){return e=e.childContextTypes,e!=null}function sa(){J(ze),J(Ce)}function Ep(e,t,n){if(Ce.current!==An)throw Error(T(168));q(Ce,t),q(ze,n)}function uy(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(T(108,W2(e)||"Unknown",i));return ie({},n,r)}function aa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||An,sr=Ce.current,q(Ce,e),q(ze,ze.current),!0}function xp(e,t,n){var r=e.stateNode;if(!r)throw Error(T(169));n?(e=uy(e,t,sr),r.__reactInternalMemoizedMergedChildContext=e,J(ze),J(Ce),q(Ce,e)):J(ze),q(ze,n)}var jt=null,Ja=!1,hu=!1;function cy(e){jt===null?jt=[e]:jt.push(e)}function lk(e){Ja=!0,cy(e)}function jn(){if(!hu&&jt!==null){hu=!0;var e=0,t=V;try{var n=jt;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}jt=null,Ja=!1}catch(i){throw jt!==null&&(jt=jt.slice(e+1)),Lv(Hf,jn),i}finally{V=t,hu=!1}}return null}var $r=[],Lr=0,la=null,ua=0,rt=[],it=0,ar=null,Ft=1,Ut="";function Wn(e,t){$r[Lr++]=ua,$r[Lr++]=la,la=e,ua=t}function fy(e,t,n){rt[it++]=Ft,rt[it++]=Ut,rt[it++]=ar,ar=e;var r=Ft;e=Ut;var i=32-vt(r)-1;r&=~(1<<i),n+=1;var o=32-vt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Ft=1<<32-vt(t)+i|n<<i|r,Ut=o+e}else Ft=1<<o|n<<i|r,Ut=e}function Jf(e){e.return!==null&&(Wn(e,1),fy(e,1,0))}function Zf(e){for(;e===la;)la=$r[--Lr],$r[Lr]=null,ua=$r[--Lr],$r[Lr]=null;for(;e===ar;)ar=rt[--it],rt[it]=null,Ut=rt[--it],rt[it]=null,Ft=rt[--it],rt[it]=null}var Xe=null,Ge=null,ee=!1,pt=null;function dy(e,t){var n=st(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function bp(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,Ge=En(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,Ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ar!==null?{id:Ft,overflow:Ut}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=st(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Xe=e,Ge=null,!0):!1;default:return!1}}function bc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Tc(e){if(ee){var t=Ge;if(t){var n=t;if(!bp(e,t)){if(bc(e))throw Error(T(418));t=En(n.nextSibling);var r=Xe;t&&bp(e,t)?dy(r,n):(e.flags=e.flags&-4097|2,ee=!1,Xe=e)}}else{if(bc(e))throw Error(T(418));e.flags=e.flags&-4097|2,ee=!1,Xe=e}}}function Tp(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function _s(e){if(e!==Xe)return!1;if(!ee)return Tp(e),ee=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!kc(e.type,e.memoizedProps)),t&&(t=Ge)){if(bc(e))throw hy(),Error(T(418));for(;t;)dy(e,t),t=En(t.nextSibling)}if(Tp(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ge=En(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ge=null}}else Ge=Xe?En(e.stateNode.nextSibling):null;return!0}function hy(){for(var e=Ge;e;)e=En(e.nextSibling)}function ni(){Ge=Xe=null,ee=!1}function ed(e){pt===null?pt=[e]:pt.push(e)}var uk=tn.ReactCurrentBatchConfig;function dt(e,t){if(e&&e.defaultProps){t=ie({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var ca=Mn(null),fa=null,Dr=null,td=null;function nd(){td=Dr=fa=null}function rd(e){var t=ca.current;J(ca),e._currentValue=t}function Ic(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Yr(e,t){fa=e,td=Dr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ue=!0),e.firstContext=null)}function lt(e){var t=e._currentValue;if(td!==e)if(e={context:e,memoizedValue:t,next:null},Dr===null){if(fa===null)throw Error(T(308));Dr=e,fa.dependencies={lanes:0,firstContext:e}}else Dr=Dr.next=e;return t}var Qn=null;function id(e){Qn===null?Qn=[e]:Qn.push(e)}function py(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,id(t)):(n.next=i.next,i.next=n),t.interleaved=n,Kt(e,r)}function Kt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var cn=!1;function od(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function my(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(H&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Kt(e,n)}return i=r.interleaved,i===null?(t.next=t,id(r)):(t.next=i.next,i.next=t),r.interleaved=t,Kt(e,n)}function Ms(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vf(e,n)}}function Ip(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function da(e,t,n,r){var i=e.updateQueue;cn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==s&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,c=u=l=null,a=o;do{var d=a.lane,g=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=e,w=a;switch(d=t,g=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){f=y.call(g,f,d);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,d=typeof y=="function"?y.call(g,f,d):y,d==null)break e;f=ie({},f,d);break e;case 2:cn=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=f):c=c.next=g,s|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);ur|=s,e.lanes=s,e.memoizedState=f}}function Cp(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var gy=new pv.Component().refs;function Cc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Za={isMounted:function(e){return(e=e._reactInternals)?Sr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Le(),i=Tn(e),o=Vt(r,i);o.payload=t,n!=null&&(o.callback=n),t=xn(e,o,i),t!==null&&(yt(t,e,i,r),Ms(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Le(),i=Tn(e),o=Vt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=xn(e,o,i),t!==null&&(yt(t,e,i,r),Ms(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Le(),r=Tn(e),i=Vt(n,r);i.tag=2,t!=null&&(i.callback=t),t=xn(e,i,r),t!==null&&(yt(t,e,r,n),Ms(t,e,r))}};function Op(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!uo(n,r)||!uo(i,o):!0}function vy(e,t,n){var r=!1,i=An,o=t.contextType;return typeof o=="object"&&o!==null?o=lt(o):(i=Be(t)?sr:Ce.current,r=t.contextTypes,o=(r=r!=null)?ti(e,i):An),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Za,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Pp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Za.enqueueReplaceState(t,t.state,null)}function Oc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=gy,od(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=lt(o):(o=Be(t)?sr:Ce.current,i.context=ti(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Cc(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Za.enqueueReplaceState(i,i.state,null),da(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ci(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===gy&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function ks(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ap(e){var t=e._init;return t(e._payload)}function yy(e){function t(p,h){if(e){var m=p.deletions;m===null?(p.deletions=[h],p.flags|=16):m.push(h)}}function n(p,h){if(!e)return null;for(;h!==null;)t(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=In(p,h),p.index=0,p.sibling=null,p}function o(p,h,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<h?(p.flags|=2,h):m):(p.flags|=2,h)):(p.flags|=1048576,h)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,h,m,_){return h===null||h.tag!==6?(h=_u(m,p.mode,_),h.return=p,h):(h=i(h,m),h.return=p,h)}function l(p,h,m,_){var E=m.type;return E===Cr?c(p,h,m.props.children,_,m.key):h!==null&&(h.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===un&&Ap(E)===h.type)?(_=i(h,m.props),_.ref=Ci(p,h,m),_.return=p,_):(_=Hs(m.type,m.key,m.props,null,p.mode,_),_.ref=Ci(p,h,m),_.return=p,_)}function u(p,h,m,_){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=ku(m,p.mode,_),h.return=p,h):(h=i(h,m.children||[]),h.return=p,h)}function c(p,h,m,_,E){return h===null||h.tag!==7?(h=ir(m,p.mode,_,E),h.return=p,h):(h=i(h,m),h.return=p,h)}function f(p,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=_u(""+h,p.mode,m),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case cs:return m=Hs(h.type,h.key,h.props,null,p.mode,m),m.ref=Ci(p,null,h),m.return=p,m;case Ir:return h=ku(h,p.mode,m),h.return=p,h;case un:var _=h._init;return f(p,_(h._payload),m)}if($i(h)||Ei(h))return h=ir(h,p.mode,m,null),h.return=p,h;ks(p,h)}return null}function d(p,h,m,_){var E=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:a(p,h,""+m,_);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case cs:return m.key===E?l(p,h,m,_):null;case Ir:return m.key===E?u(p,h,m,_):null;case un:return E=m._init,d(p,h,E(m._payload),_)}if($i(m)||Ei(m))return E!==null?null:c(p,h,m,_,null);ks(p,m)}return null}function g(p,h,m,_,E){if(typeof _=="string"&&_!==""||typeof _=="number")return p=p.get(m)||null,a(h,p,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case cs:return p=p.get(_.key===null?m:_.key)||null,l(h,p,_,E);case Ir:return p=p.get(_.key===null?m:_.key)||null,u(h,p,_,E);case un:var I=_._init;return g(p,h,m,I(_._payload),E)}if($i(_)||Ei(_))return p=p.get(m)||null,c(h,p,_,E,null);ks(h,_)}return null}function y(p,h,m,_){for(var E=null,I=null,S=h,b=h=0,L=null;S!==null&&b<m.length;b++){S.index>b?(L=S,S=null):L=S.sibling;var N=d(p,S,m[b],_);if(N===null){S===null&&(S=L);break}e&&S&&N.alternate===null&&t(p,S),h=o(N,h,b),I===null?E=N:I.sibling=N,I=N,S=L}if(b===m.length)return n(p,S),ee&&Wn(p,b),E;if(S===null){for(;b<m.length;b++)S=f(p,m[b],_),S!==null&&(h=o(S,h,b),I===null?E=S:I.sibling=S,I=S);return ee&&Wn(p,b),E}for(S=r(p,S);b<m.length;b++)L=g(S,p,b,m[b],_),L!==null&&(e&&L.alternate!==null&&S.delete(L.key===null?b:L.key),h=o(L,h,b),I===null?E=L:I.sibling=L,I=L);return e&&S.forEach(function(G){return t(p,G)}),ee&&Wn(p,b),E}function w(p,h,m,_){var E=Ei(m);if(typeof E!="function")throw Error(T(150));if(m=E.call(m),m==null)throw Error(T(151));for(var I=E=null,S=h,b=h=0,L=null,N=m.next();S!==null&&!N.done;b++,N=m.next()){S.index>b?(L=S,S=null):L=S.sibling;var G=d(p,S,N.value,_);if(G===null){S===null&&(S=L);break}e&&S&&G.alternate===null&&t(p,S),h=o(G,h,b),I===null?E=G:I.sibling=G,I=G,S=L}if(N.done)return n(p,S),ee&&Wn(p,b),E;if(S===null){for(;!N.done;b++,N=m.next())N=f(p,N.value,_),N!==null&&(h=o(N,h,b),I===null?E=N:I.sibling=N,I=N);return ee&&Wn(p,b),E}for(S=r(p,S);!N.done;b++,N=m.next())N=g(S,p,b,N.value,_),N!==null&&(e&&N.alternate!==null&&S.delete(N.key===null?b:N.key),h=o(N,h,b),I===null?E=N:I.sibling=N,I=N);return e&&S.forEach(function(Pe){return t(p,Pe)}),ee&&Wn(p,b),E}function x(p,h,m,_){if(typeof m=="object"&&m!==null&&m.type===Cr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case cs:e:{for(var E=m.key,I=h;I!==null;){if(I.key===E){if(E=m.type,E===Cr){if(I.tag===7){n(p,I.sibling),h=i(I,m.props.children),h.return=p,p=h;break e}}else if(I.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===un&&Ap(E)===I.type){n(p,I.sibling),h=i(I,m.props),h.ref=Ci(p,I,m),h.return=p,p=h;break e}n(p,I);break}else t(p,I);I=I.sibling}m.type===Cr?(h=ir(m.props.children,p.mode,_,m.key),h.return=p,p=h):(_=Hs(m.type,m.key,m.props,null,p.mode,_),_.ref=Ci(p,h,m),_.return=p,p=_)}return s(p);case Ir:e:{for(I=m.key;h!==null;){if(h.key===I)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(p,h.sibling),h=i(h,m.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else t(p,h);h=h.sibling}h=ku(m,p.mode,_),h.return=p,p=h}return s(p);case un:return I=m._init,x(p,h,I(m._payload),_)}if($i(m))return y(p,h,m,_);if(Ei(m))return w(p,h,m,_);ks(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,m),h.return=p,p=h):(n(p,h),h=_u(m,p.mode,_),h.return=p,p=h),s(p)):n(p,h)}return x}var ri=yy(!0),wy=yy(!1),jo={},Pt=Mn(jo),po=Mn(jo),mo=Mn(jo);function Jn(e){if(e===jo)throw Error(T(174));return e}function sd(e,t){switch(q(mo,t),q(po,e),q(Pt,jo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ac(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ac(t,e)}J(Pt),q(Pt,t)}function ii(){J(Pt),J(po),J(mo)}function _y(e){Jn(mo.current);var t=Jn(Pt.current),n=ac(t,e.type);t!==n&&(q(po,e),q(Pt,n))}function ad(e){po.current===e&&(J(Pt),J(po))}var ne=Mn(0);function ha(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var pu=[];function ld(){for(var e=0;e<pu.length;e++)pu[e]._workInProgressVersionPrimary=null;pu.length=0}var js=tn.ReactCurrentDispatcher,mu=tn.ReactCurrentBatchConfig,lr=0,re=null,ue=null,pe=null,pa=!1,Vi=!1,go=0,ck=0;function xe(){throw Error(T(321))}function ud(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wt(e[n],t[n]))return!1;return!0}function cd(e,t,n,r,i,o){if(lr=o,re=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,js.current=e===null||e.memoizedState===null?pk:mk,e=n(r,i),Vi){o=0;do{if(Vi=!1,go=0,25<=o)throw Error(T(301));o+=1,pe=ue=null,t.updateQueue=null,js.current=gk,e=n(r,i)}while(Vi)}if(js.current=ma,t=ue!==null&&ue.next!==null,lr=0,pe=ue=re=null,pa=!1,t)throw Error(T(300));return e}function fd(){var e=go!==0;return go=0,e}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?re.memoizedState=pe=e:pe=pe.next=e,pe}function ut(){if(ue===null){var e=re.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=pe===null?re.memoizedState:pe.next;if(t!==null)pe=t,ue=e;else{if(e===null)throw Error(T(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},pe===null?re.memoizedState=pe=e:pe=pe.next=e}return pe}function vo(e,t){return typeof t=="function"?t(e):t}function gu(e){var t=ut(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=ue,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var c=u.lane;if((lr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,re.lanes|=c,ur|=c}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,wt(r,t.memoizedState)||(Ue=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,re.lanes|=o,ur|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function vu(e){var t=ut(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);wt(o,t.memoizedState)||(Ue=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ky(){}function Sy(e,t){var n=re,r=ut(),i=t(),o=!wt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ue=!0),r=r.queue,dd(by.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,yo(9,xy.bind(null,n,r,i,t),void 0,null),me===null)throw Error(T(349));(lr&30)!==0||Ey(n,t,i)}return i}function Ey(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function xy(e,t,n,r){t.value=n,t.getSnapshot=r,Ty(t)&&Iy(e)}function by(e,t,n){return n(function(){Ty(t)&&Iy(e)})}function Ty(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wt(e,n)}catch{return!0}}function Iy(e){var t=Kt(e,1);t!==null&&yt(t,e,1,-1)}function Np(e){var t=Et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:e},t.queue=e,e=e.dispatch=hk.bind(null,re,e),[t.memoizedState,e]}function yo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=re.updateQueue,t===null?(t={lastEffect:null,stores:null},re.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Cy(){return ut().memoizedState}function Fs(e,t,n,r){var i=Et();re.flags|=e,i.memoizedState=yo(1|t,n,void 0,r===void 0?null:r)}function el(e,t,n,r){var i=ut();r=r===void 0?null:r;var o=void 0;if(ue!==null){var s=ue.memoizedState;if(o=s.destroy,r!==null&&ud(r,s.deps)){i.memoizedState=yo(t,n,o,r);return}}re.flags|=e,i.memoizedState=yo(1|t,n,o,r)}function Rp(e,t){return Fs(8390656,8,e,t)}function dd(e,t){return el(2048,8,e,t)}function Oy(e,t){return el(4,2,e,t)}function Py(e,t){return el(4,4,e,t)}function Ay(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ny(e,t,n){return n=n!=null?n.concat([e]):null,el(4,4,Ay.bind(null,t,e),n)}function hd(){}function Ry(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ud(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $y(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ud(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ly(e,t,n){return(lr&21)===0?(e.baseState&&(e.baseState=!1,Ue=!0),e.memoizedState=n):(wt(n,t)||(n=jv(),re.lanes|=n,ur|=n,e.baseState=!0),t)}function fk(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=mu.transition;mu.transition={};try{e(!1),t()}finally{V=n,mu.transition=r}}function Dy(){return ut().memoizedState}function dk(e,t,n){var r=Tn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},My(e))jy(t,n);else if(n=py(e,t,n,r),n!==null){var i=Le();yt(n,e,r,i),Fy(n,t,r)}}function hk(e,t,n){var r=Tn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(My(e))jy(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,wt(a,s)){var l=t.interleaved;l===null?(i.next=i,id(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=py(e,t,i,r),n!==null&&(i=Le(),yt(n,e,r,i),Fy(n,t,r))}}function My(e){var t=e.alternate;return e===re||t!==null&&t===re}function jy(e,t){Vi=pa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fy(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vf(e,n)}}var ma={readContext:lt,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},pk={readContext:lt,useCallback:function(e,t){return Et().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:Rp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Fs(4194308,4,Ay.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Fs(4194308,4,e,t)},useInsertionEffect:function(e,t){return Fs(4,2,e,t)},useMemo:function(e,t){var n=Et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=dk.bind(null,re,e),[r.memoizedState,e]},useRef:function(e){var t=Et();return e={current:e},t.memoizedState=e},useState:Np,useDebugValue:hd,useDeferredValue:function(e){return Et().memoizedState=e},useTransition:function(){var e=Np(!1),t=e[0];return e=fk.bind(null,e[1]),Et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=re,i=Et();if(ee){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),me===null)throw Error(T(349));(lr&30)!==0||Ey(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Rp(by.bind(null,r,o,e),[e]),r.flags|=2048,yo(9,xy.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Et(),t=me.identifierPrefix;if(ee){var n=Ut,r=Ft;n=(r&~(1<<32-vt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=go++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ck++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},mk={readContext:lt,useCallback:Ry,useContext:lt,useEffect:dd,useImperativeHandle:Ny,useInsertionEffect:Oy,useLayoutEffect:Py,useMemo:$y,useReducer:gu,useRef:Cy,useState:function(){return gu(vo)},useDebugValue:hd,useDeferredValue:function(e){var t=ut();return Ly(t,ue.memoizedState,e)},useTransition:function(){var e=gu(vo)[0],t=ut().memoizedState;return[e,t]},useMutableSource:ky,useSyncExternalStore:Sy,useId:Dy,unstable_isNewReconciler:!1},gk={readContext:lt,useCallback:Ry,useContext:lt,useEffect:dd,useImperativeHandle:Ny,useInsertionEffect:Oy,useLayoutEffect:Py,useMemo:$y,useReducer:vu,useRef:Cy,useState:function(){return vu(vo)},useDebugValue:hd,useDeferredValue:function(e){var t=ut();return ue===null?t.memoizedState=e:Ly(t,ue.memoizedState,e)},useTransition:function(){var e=vu(vo)[0],t=ut().memoizedState;return[e,t]},useMutableSource:ky,useSyncExternalStore:Sy,useId:Dy,unstable_isNewReconciler:!1};function oi(e,t){try{var n="",r=t;do n+=V2(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function yu(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Pc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var vk=typeof WeakMap=="function"?WeakMap:Map;function Uy(e,t,n){n=Vt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){va||(va=!0,Uc=r),Pc(e,t)},n}function zy(e,t,n){n=Vt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Pc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Pc(e,t),typeof r!="function"&&(bn===null?bn=new Set([this]):bn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function $p(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new vk;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Ak.bind(null,e,t,n),t.then(e,e))}function Lp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Dp(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Vt(-1,1),t.tag=2,xn(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var yk=tn.ReactCurrentOwner,Ue=!1;function Ae(e,t,n,r){t.child=e===null?wy(t,null,n,r):ri(t,e.child,n,r)}function Mp(e,t,n,r,i){n=n.render;var o=t.ref;return Yr(t,i),r=cd(e,t,n,r,o,i),n=fd(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(ee&&n&&Jf(t),t.flags|=1,Ae(e,t,r,i),t.child)}function jp(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!kd(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,By(e,t,o,r,i)):(e=Hs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:uo,n(s,r)&&e.ref===t.ref)return Yt(e,t,i)}return t.flags|=1,e=In(o,r),e.ref=t.ref,e.return=t,t.child=e}function By(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(uo(o,r)&&e.ref===t.ref)if(Ue=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Ue=!0);else return t.lanes=e.lanes,Yt(e,t,i)}return Ac(e,t,n,r,i)}function Hy(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(jr,We),We|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,q(jr,We),We|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,q(jr,We),We|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,q(jr,We),We|=r;return Ae(e,t,i,n),t.child}function Vy(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ac(e,t,n,r,i){var o=Be(n)?sr:Ce.current;return o=ti(t,o),Yr(t,i),n=cd(e,t,n,r,o,i),r=fd(),e!==null&&!Ue?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Yt(e,t,i)):(ee&&r&&Jf(t),t.flags|=1,Ae(e,t,n,i),t.child)}function Fp(e,t,n,r,i){if(Be(n)){var o=!0;aa(t)}else o=!1;if(Yr(t,i),t.stateNode===null)Us(e,t),vy(t,n,r),Oc(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=lt(u):(u=Be(n)?sr:Ce.current,u=ti(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Pp(t,s,r,u),cn=!1;var d=t.memoizedState;s.state=d,da(t,r,s,i),l=t.memoizedState,a!==r||d!==l||ze.current||cn?(typeof c=="function"&&(Cc(t,n,c,r),l=t.memoizedState),(a=cn||Op(t,n,a,r,d,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,my(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:dt(t.type,a),s.props=u,f=t.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=lt(l):(l=Be(n)?sr:Ce.current,l=ti(t,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Pp(t,s,r,l),cn=!1,d=t.memoizedState,s.state=d,da(t,r,s,i);var y=t.memoizedState;a!==f||d!==y||ze.current||cn?(typeof g=="function"&&(Cc(t,n,g,r),y=t.memoizedState),(u=cn||Op(t,n,u,r,d,y,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Nc(e,t,n,r,o,i)}function Nc(e,t,n,r,i,o){Vy(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&xp(t,n,!1),Yt(e,t,o);r=t.stateNode,yk.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=ri(t,e.child,null,o),t.child=ri(t,null,a,o)):Ae(e,t,a,o),t.memoizedState=r.state,i&&xp(t,n,!0),t.child}function Wy(e){var t=e.stateNode;t.pendingContext?Ep(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ep(e,t.context,!1),sd(e,t.containerInfo)}function Up(e,t,n,r,i){return ni(),ed(i),t.flags|=256,Ae(e,t,n,r),t.child}var Rc={dehydrated:null,treeContext:null,retryLane:0};function $c(e){return{baseLanes:e,cachePool:null,transitions:null}}function Gy(e,t,n){var r=t.pendingProps,i=ne.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),q(ne,i&1),e===null)return Tc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=s):o=rl(s,r,0,null),e=ir(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=$c(n),t.memoizedState=Rc,e):pd(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return wk(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(s&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=In(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=In(a,o):(o=ir(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?$c(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Rc,r}return o=e.child,e=o.sibling,r=In(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function pd(e,t){return t=rl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ss(e,t,n,r){return r!==null&&ed(r),ri(t,e.child,null,n),e=pd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wk(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=yu(Error(T(422))),Ss(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=rl({mode:"visible",children:r.children},i,0,null),o=ir(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&ri(t,e.child,null,s),t.child.memoizedState=$c(s),t.memoizedState=Rc,o);if((t.mode&1)===0)return Ss(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(T(419)),r=yu(o,r,void 0),Ss(e,t,s,r)}if(a=(s&e.childLanes)!==0,Ue||a){if(r=me,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|s))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Kt(e,i),yt(r,e,i,-1))}return _d(),r=yu(Error(T(421))),Ss(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Nk.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ge=En(i.nextSibling),Xe=t,ee=!0,pt=null,e!==null&&(rt[it++]=Ft,rt[it++]=Ut,rt[it++]=ar,Ft=e.id,Ut=e.overflow,ar=t),t=pd(t,r.children),t.flags|=4096,t)}function zp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ic(e.return,t,n)}function wu(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Ky(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Ae(e,t,r.children,n),r=ne.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zp(e,n,t);else if(e.tag===19)zp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(q(ne,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ha(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),wu(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ha(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}wu(t,!0,n,null,o);break;case"together":wu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Us(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ur|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=In(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=In(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _k(e,t,n){switch(t.tag){case 3:Wy(t),ni();break;case 5:_y(t);break;case 1:Be(t.type)&&aa(t);break;case 4:sd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;q(ca,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(q(ne,ne.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Gy(e,t,n):(q(ne,ne.current&1),e=Yt(e,t,n),e!==null?e.sibling:null);q(ne,ne.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Ky(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),q(ne,ne.current),r)break;return null;case 22:case 23:return t.lanes=0,Hy(e,t,n)}return Yt(e,t,n)}var Yy,Lc,qy,Xy;Yy=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lc=function(){};qy=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Jn(Pt.current);var o=null;switch(n){case"input":i=rc(e,i),r=rc(e,r),o=[];break;case"select":i=ie({},i,{value:void 0}),r=ie({},r,{value:void 0}),o=[];break;case"textarea":i=sc(e,i),r=sc(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=oa)}lc(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(no.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(no.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&X("scroll",e),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Xy=function(e,t,n,r){n!==r&&(t.flags|=4)};function Oi(e,t){if(!ee)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function kk(e,t,n){var r=t.pendingProps;switch(Zf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return Be(t.type)&&sa(),be(t),null;case 3:return r=t.stateNode,ii(),J(ze),J(Ce),ld(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(_s(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,pt!==null&&(Hc(pt),pt=null))),Lc(e,t),be(t),null;case 5:ad(t);var i=Jn(mo.current);if(n=t.type,e!==null&&t.stateNode!=null)qy(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(T(166));return be(t),null}if(e=Jn(Pt.current),_s(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[xt]=t,r[ho]=o,e=(t.mode&1)!==0,n){case"dialog":X("cancel",r),X("close",r);break;case"iframe":case"object":case"embed":X("load",r);break;case"video":case"audio":for(i=0;i<Di.length;i++)X(Di[i],r);break;case"source":X("error",r);break;case"img":case"image":case"link":X("error",r),X("load",r);break;case"details":X("toggle",r);break;case"input":Xh(r,o),X("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},X("invalid",r);break;case"textarea":Jh(r,o),X("invalid",r)}lc(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ws(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ws(r.textContent,a,e),i=["children",""+a]):no.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&X("scroll",r)}switch(n){case"input":fs(r),Qh(r,o,!0);break;case"textarea":fs(r),Zh(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=oa)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ev(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[xt]=t,e[ho]=r,Yy(e,t,!1,!1),t.stateNode=e;e:{switch(s=uc(n,r),n){case"dialog":X("cancel",e),X("close",e),i=r;break;case"iframe":case"object":case"embed":X("load",e),i=r;break;case"video":case"audio":for(i=0;i<Di.length;i++)X(Di[i],e);i=r;break;case"source":X("error",e),i=r;break;case"img":case"image":case"link":X("error",e),X("load",e),i=r;break;case"details":X("toggle",e),i=r;break;case"input":Xh(e,r),i=rc(e,r),X("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ie({},r,{value:void 0}),X("invalid",e);break;case"textarea":Jh(e,r),i=sc(e,r),X("invalid",e);break;default:i=r}lc(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?Tv(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&xv(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ro(e,l):typeof l=="number"&&ro(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(no.hasOwnProperty(o)?l!=null&&o==="onScroll"&&X("scroll",e):l!=null&&jf(e,o,l,s))}switch(n){case"input":fs(e),Qh(e,r,!1);break;case"textarea":fs(e),Zh(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Pn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Vr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Vr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=oa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return be(t),null;case 6:if(e&&t.stateNode!=null)Xy(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(T(166));if(n=Jn(mo.current),Jn(Pt.current),_s(t)){if(r=t.stateNode,n=t.memoizedProps,r[xt]=t,(o=r.nodeValue!==n)&&(e=Xe,e!==null))switch(e.tag){case 3:ws(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ws(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xt]=t,t.stateNode=r}return be(t),null;case 13:if(J(ne),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ee&&Ge!==null&&(t.mode&1)!==0&&(t.flags&128)===0)hy(),ni(),t.flags|=98560,o=!1;else if(o=_s(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(T(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(T(317));o[xt]=t}else ni(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;be(t),o=!1}else pt!==null&&(Hc(pt),pt=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ne.current&1)!==0?ce===0&&(ce=3):_d())),t.updateQueue!==null&&(t.flags|=4),be(t),null);case 4:return ii(),Lc(e,t),e===null&&co(t.stateNode.containerInfo),be(t),null;case 10:return rd(t.type._context),be(t),null;case 17:return Be(t.type)&&sa(),be(t),null;case 19:if(J(ne),o=t.memoizedState,o===null)return be(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Oi(o,!1);else{if(ce!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=ha(e),s!==null){for(t.flags|=128,Oi(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return q(ne,ne.current&1|2),t.child}e=e.sibling}o.tail!==null&&ae()>si&&(t.flags|=128,r=!0,Oi(o,!1),t.lanes=4194304)}else{if(!r)if(e=ha(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Oi(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ee)return be(t),null}else 2*ae()-o.renderingStartTime>si&&n!==1073741824&&(t.flags|=128,r=!0,Oi(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ae(),t.sibling=null,n=ne.current,q(ne,r?n&1|2:n&1),t):(be(t),null);case 22:case 23:return wd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(We&1073741824)!==0&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function Sk(e,t){switch(Zf(t),t.tag){case 1:return Be(t.type)&&sa(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ii(),J(ze),J(Ce),ld(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ad(t),null;case 13:if(J(ne),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));ni()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(ne),null;case 4:return ii(),null;case 10:return rd(t.type._context),null;case 22:case 23:return wd(),null;case 24:return null;default:return null}}var Es=!1,Te=!1,Ek=typeof WeakSet=="function"?WeakSet:Set,O=null;function Mr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(e,t,r)}else n.current=null}function Dc(e,t,n){try{n()}catch(r){oe(e,t,r)}}var Bp=!1;function xk(e,t){if(wc=na,e=ey(),Qf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,c=0,f=e,d=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(g=f.firstChild)!==null;)d=f,f=g;for(;;){if(f===e)break t;if(d===n&&++u===i&&(a=s),d===o&&++c===r&&(l=s),(g=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(_c={focusedElem:e,selectionRange:n},na=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var y=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,x=y.memoizedState,p=t.stateNode,h=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:dt(t.type,w),x);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(_){oe(t,t.return,_)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return y=Bp,Bp=!1,y}function Wi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Dc(t,n,o)}i=i.next}while(i!==r)}}function tl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Mc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Qy(e){var t=e.alternate;t!==null&&(e.alternate=null,Qy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xt],delete t[ho],delete t[Ec],delete t[sk],delete t[ak])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Jy(e){return e.tag===5||e.tag===3||e.tag===4}function Hp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function jc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=oa));else if(r!==4&&(e=e.child,e!==null))for(jc(e,t,n),e=e.sibling;e!==null;)jc(e,t,n),e=e.sibling}function Fc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Fc(e,t,n),e=e.sibling;e!==null;)Fc(e,t,n),e=e.sibling}var ye=null,ht=!1;function sn(e,t,n){for(n=n.child;n!==null;)Zy(e,t,n),n=n.sibling}function Zy(e,t,n){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(Ka,n)}catch{}switch(n.tag){case 5:Te||Mr(n,t);case 6:var r=ye,i=ht;ye=null,sn(e,t,n),ye=r,ht=i,ye!==null&&(ht?(e=ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(ht?(e=ye,n=n.stateNode,e.nodeType===8?du(e.parentNode,n):e.nodeType===1&&du(e,n),ao(e)):du(ye,n.stateNode));break;case 4:r=ye,i=ht,ye=n.stateNode.containerInfo,ht=!0,sn(e,t,n),ye=r,ht=i;break;case 0:case 11:case 14:case 15:if(!Te&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&((o&2)!==0||(o&4)!==0)&&Dc(n,t,s),i=i.next}while(i!==r)}sn(e,t,n);break;case 1:if(!Te&&(Mr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){oe(n,t,a)}sn(e,t,n);break;case 21:sn(e,t,n);break;case 22:n.mode&1?(Te=(r=Te)||n.memoizedState!==null,sn(e,t,n),Te=r):sn(e,t,n);break;default:sn(e,t,n)}}function Vp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Ek),t.forEach(function(r){var i=Rk.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ft(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:ye=a.stateNode,ht=!1;break e;case 3:ye=a.stateNode.containerInfo,ht=!0;break e;case 4:ye=a.stateNode.containerInfo,ht=!0;break e}a=a.return}if(ye===null)throw Error(T(160));Zy(o,s,i),ye=null,ht=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){oe(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)e0(t,e),t=t.sibling}function e0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ft(t,e),St(e),r&4){try{Wi(3,e,e.return),tl(3,e)}catch(w){oe(e,e.return,w)}try{Wi(5,e,e.return)}catch(w){oe(e,e.return,w)}}break;case 1:ft(t,e),St(e),r&512&&n!==null&&Mr(n,n.return);break;case 5:if(ft(t,e),St(e),r&512&&n!==null&&Mr(n,n.return),e.flags&32){var i=e.stateNode;try{ro(i,"")}catch(w){oe(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&kv(i,o),uc(a,s);var u=uc(a,o);for(s=0;s<l.length;s+=2){var c=l[s],f=l[s+1];c==="style"?Tv(i,f):c==="dangerouslySetInnerHTML"?xv(i,f):c==="children"?ro(i,f):jf(i,c,f,u)}switch(a){case"input":ic(i,o);break;case"textarea":Sv(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Vr(i,!!o.multiple,g,!1):d!==!!o.multiple&&(o.defaultValue!=null?Vr(i,!!o.multiple,o.defaultValue,!0):Vr(i,!!o.multiple,o.multiple?[]:"",!1))}i[ho]=o}catch(w){oe(e,e.return,w)}}break;case 6:if(ft(t,e),St(e),r&4){if(e.stateNode===null)throw Error(T(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){oe(e,e.return,w)}}break;case 3:if(ft(t,e),St(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ao(t.containerInfo)}catch(w){oe(e,e.return,w)}break;case 4:ft(t,e),St(e);break;case 13:ft(t,e),St(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(vd=ae())),r&4&&Vp(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Te=(u=Te)||c,ft(t,e),Te=u):ft(t,e),St(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for(O=e,c=e.child;c!==null;){for(f=O=c;O!==null;){switch(d=O,g=d.child,d.tag){case 0:case 11:case 14:case 15:Wi(4,d,d.return);break;case 1:Mr(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){oe(r,n,w)}}break;case 5:Mr(d,d.return);break;case 22:if(d.memoizedState!==null){Gp(f);continue}}g!==null?(g.return=d,O=g):Gp(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=bv("display",s))}catch(w){oe(e,e.return,w)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){oe(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ft(t,e),St(e),r&4&&Vp(e);break;case 21:break;default:ft(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Jy(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ro(i,""),r.flags&=-33);var o=Hp(e);Fc(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=Hp(e);jc(e,a,s);break;default:throw Error(T(161))}}catch(l){oe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bk(e,t,n){O=e,t0(e)}function t0(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var i=O,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Es;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Te;a=Es;var u=Te;if(Es=s,(Te=l)&&!u)for(O=i;O!==null;)s=O,l=s.child,s.tag===22&&s.memoizedState!==null?Kp(i):l!==null?(l.return=s,O=l):Kp(i);for(;o!==null;)O=o,t0(o),o=o.sibling;O=i,Es=a,Te=u}Wp(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,O=o):Wp(e)}}function Wp(e){for(;O!==null;){var t=O;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Te||tl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Te)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:dt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Cp(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Cp(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&ao(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}Te||t.flags&512&&Mc(t)}catch(d){oe(t,t.return,d)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function Gp(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function Kp(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{tl(4,t)}catch(l){oe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){oe(t,i,l)}}var o=t.return;try{Mc(t)}catch(l){oe(t,o,l)}break;case 5:var s=t.return;try{Mc(t)}catch(l){oe(t,s,l)}}}catch(l){oe(t,t.return,l)}if(t===e){O=null;break}var a=t.sibling;if(a!==null){a.return=t.return,O=a;break}O=t.return}}var Tk=Math.ceil,ga=tn.ReactCurrentDispatcher,md=tn.ReactCurrentOwner,at=tn.ReactCurrentBatchConfig,H=0,me=null,le=null,we=0,We=0,jr=Mn(0),ce=0,wo=null,ur=0,nl=0,gd=0,Gi=null,Fe=null,vd=0,si=1/0,Mt=null,va=!1,Uc=null,bn=null,xs=!1,yn=null,ya=0,Ki=0,zc=null,zs=-1,Bs=0;function Le(){return(H&6)!==0?ae():zs!==-1?zs:zs=ae()}function Tn(e){return(e.mode&1)===0?1:(H&2)!==0&&we!==0?we&-we:uk.transition!==null?(Bs===0&&(Bs=jv()),Bs):(e=V,e!==0||(e=window.event,e=e===void 0?16:Wv(e.type)),e)}function yt(e,t,n,r){if(50<Ki)throw Ki=0,zc=null,Error(T(185));Lo(e,n,r),((H&2)===0||e!==me)&&(e===me&&((H&2)===0&&(nl|=n),ce===4&&dn(e,we)),He(e,r),n===1&&H===0&&(t.mode&1)===0&&(si=ae()+500,Ja&&jn()))}function He(e,t){var n=e.callbackNode;u_(e,t);var r=ta(e,e===me?we:0);if(r===0)n!==null&&np(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&np(n),t===1)e.tag===0?lk(Yp.bind(null,e)):cy(Yp.bind(null,e)),ik(function(){(H&6)===0&&jn()}),n=null;else{switch(Fv(r)){case 1:n=Hf;break;case 4:n=Dv;break;case 16:n=ea;break;case 536870912:n=Mv;break;default:n=ea}n=u0(n,n0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function n0(e,t){if(zs=-1,Bs=0,(H&6)!==0)throw Error(T(327));var n=e.callbackNode;if(qr()&&e.callbackNode!==n)return null;var r=ta(e,e===me?we:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=wa(e,r);else{t=r;var i=H;H|=2;var o=i0();(me!==e||we!==t)&&(Mt=null,si=ae()+500,rr(e,t));do try{Ok();break}catch(a){r0(e,a)}while(1);nd(),ga.current=o,H=i,le!==null?t=0:(me=null,we=0,t=ce)}if(t!==0){if(t===2&&(i=pc(e),i!==0&&(r=i,t=Bc(e,i))),t===1)throw n=wo,rr(e,0),dn(e,r),He(e,ae()),n;if(t===6)dn(e,r);else{if(i=e.current.alternate,(r&30)===0&&!Ik(i)&&(t=wa(e,r),t===2&&(o=pc(e),o!==0&&(r=o,t=Bc(e,o))),t===1))throw n=wo,rr(e,0),dn(e,r),He(e,ae()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(T(345));case 2:Gn(e,Fe,Mt);break;case 3:if(dn(e,r),(r&130023424)===r&&(t=vd+500-ae(),10<t)){if(ta(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Le(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Sc(Gn.bind(null,e,Fe,Mt),t);break}Gn(e,Fe,Mt);break;case 4:if(dn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-vt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Tk(r/1960))-r,10<r){e.timeoutHandle=Sc(Gn.bind(null,e,Fe,Mt),r);break}Gn(e,Fe,Mt);break;case 5:Gn(e,Fe,Mt);break;default:throw Error(T(329))}}}return He(e,ae()),e.callbackNode===n?n0.bind(null,e):null}function Bc(e,t){var n=Gi;return e.current.memoizedState.isDehydrated&&(rr(e,t).flags|=256),e=wa(e,t),e!==2&&(t=Fe,Fe=n,t!==null&&Hc(t)),e}function Hc(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function Ik(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!wt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dn(e,t){for(t&=~gd,t&=~nl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-vt(t),r=1<<n;e[n]=-1,t&=~r}}function Yp(e){if((H&6)!==0)throw Error(T(327));qr();var t=ta(e,0);if((t&1)===0)return He(e,ae()),null;var n=wa(e,t);if(e.tag!==0&&n===2){var r=pc(e);r!==0&&(t=r,n=Bc(e,r))}if(n===1)throw n=wo,rr(e,0),dn(e,t),He(e,ae()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Gn(e,Fe,Mt),He(e,ae()),null}function yd(e,t){var n=H;H|=1;try{return e(t)}finally{H=n,H===0&&(si=ae()+500,Ja&&jn())}}function cr(e){yn!==null&&yn.tag===0&&(H&6)===0&&qr();var t=H;H|=1;var n=at.transition,r=V;try{if(at.transition=null,V=1,e)return e()}finally{V=r,at.transition=n,H=t,(H&6)===0&&jn()}}function wd(){We=jr.current,J(jr)}function rr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,rk(n)),le!==null)for(n=le.return;n!==null;){var r=n;switch(Zf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&sa();break;case 3:ii(),J(ze),J(Ce),ld();break;case 5:ad(r);break;case 4:ii();break;case 13:J(ne);break;case 19:J(ne);break;case 10:rd(r.type._context);break;case 22:case 23:wd()}n=n.return}if(me=e,le=e=In(e.current,null),we=We=t,ce=0,wo=null,gd=nl=ur=0,Fe=Gi=null,Qn!==null){for(t=0;t<Qn.length;t++)if(n=Qn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Qn=null}return e}function r0(e,t){do{var n=le;try{if(nd(),js.current=ma,pa){for(var r=re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}pa=!1}if(lr=0,pe=ue=re=null,Vi=!1,go=0,md.current=null,n===null||n.return===null){ce=1,wo=t,le=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=we,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if((c.mode&1)===0&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=Lp(s);if(g!==null){g.flags&=-257,Dp(g,s,a,o,t),g.mode&1&&$p(o,u,t),t=g,l=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(l),t.updateQueue=w}else y.add(l);break e}else{if((t&1)===0){$p(o,u,t),_d();break e}l=Error(T(426))}}else if(ee&&a.mode&1){var x=Lp(s);if(x!==null){(x.flags&65536)===0&&(x.flags|=256),Dp(x,s,a,o,t),ed(oi(l,a));break e}}o=l=oi(l,a),ce!==4&&(ce=2),Gi===null?Gi=[o]:Gi.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=Uy(o,l,t);Ip(o,p);break e;case 1:a=l;var h=o.type,m=o.stateNode;if((o.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(bn===null||!bn.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var _=zy(o,a,t);Ip(o,_);break e}}o=o.return}while(o!==null)}s0(n)}catch(E){t=E,le===n&&n!==null&&(le=n=n.return);continue}break}while(1)}function i0(){var e=ga.current;return ga.current=ma,e===null?ma:e}function _d(){(ce===0||ce===3||ce===2)&&(ce=4),me===null||(ur&268435455)===0&&(nl&268435455)===0||dn(me,we)}function wa(e,t){var n=H;H|=2;var r=i0();(me!==e||we!==t)&&(Mt=null,rr(e,t));do try{Ck();break}catch(i){r0(e,i)}while(1);if(nd(),H=n,ga.current=r,le!==null)throw Error(T(261));return me=null,we=0,ce}function Ck(){for(;le!==null;)o0(le)}function Ok(){for(;le!==null&&!e_();)o0(le)}function o0(e){var t=l0(e.alternate,e,We);e.memoizedProps=e.pendingProps,t===null?s0(e):le=t,md.current=null}function s0(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=kk(n,t,We),n!==null){le=n;return}}else{if(n=Sk(n,t),n!==null){n.flags&=32767,le=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,le=null;return}}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);ce===0&&(ce=5)}function Gn(e,t,n){var r=V,i=at.transition;try{at.transition=null,V=1,Pk(e,t,n,r)}finally{at.transition=i,V=r}return null}function Pk(e,t,n,r){do qr();while(yn!==null);if((H&6)!==0)throw Error(T(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(c_(e,o),e===me&&(le=me=null,we=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||xs||(xs=!0,u0(ea,function(){return qr(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=at.transition,at.transition=null;var s=V;V=1;var a=H;H|=4,md.current=null,xk(e,n),e0(n,e),X_(_c),na=!!wc,_c=wc=null,e.current=n,bk(n),t_(),H=a,V=s,at.transition=o}else e.current=n;if(xs&&(xs=!1,yn=e,ya=i),o=e.pendingLanes,o===0&&(bn=null),i_(n.stateNode),He(e,ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(va)throw va=!1,e=Uc,Uc=null,e;return(ya&1)!==0&&e.tag!==0&&qr(),o=e.pendingLanes,(o&1)!==0?e===zc?Ki++:(Ki=0,zc=e):Ki=0,jn(),null}function qr(){if(yn!==null){var e=Fv(ya),t=at.transition,n=V;try{if(at.transition=null,V=16>e?16:e,yn===null)var r=!1;else{if(e=yn,yn=null,ya=0,(H&6)!==0)throw Error(T(331));var i=H;for(H|=4,O=e.current;O!==null;){var o=O,s=o.child;if((O.flags&16)!==0){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(O=u;O!==null;){var c=O;switch(c.tag){case 0:case 11:case 15:Wi(8,c,o)}var f=c.child;if(f!==null)f.return=c,O=f;else for(;O!==null;){c=O;var d=c.sibling,g=c.return;if(Qy(c),c===u){O=null;break}if(d!==null){d.return=g,O=d;break}O=g}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var x=w.sibling;w.sibling=null,w=x}while(w!==null)}}O=o}}if((o.subtreeFlags&2064)!==0&&s!==null)s.return=o,O=s;else e:for(;O!==null;){if(o=O,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:Wi(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,O=p;break e}O=o.return}}var h=e.current;for(O=h;O!==null;){s=O;var m=s.child;if((s.subtreeFlags&2064)!==0&&m!==null)m.return=s,O=m;else e:for(s=h;O!==null;){if(a=O,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:tl(9,a)}}catch(E){oe(a,a.return,E)}if(a===s){O=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,O=_;break e}O=a.return}}if(H=i,jn(),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(Ka,e)}catch{}r=!0}return r}finally{V=n,at.transition=t}}return!1}function qp(e,t,n){t=oi(n,t),t=Uy(e,t,1),e=xn(e,t,1),t=Le(),e!==null&&(Lo(e,1,t),He(e,t))}function oe(e,t,n){if(e.tag===3)qp(e,e,n);else for(;t!==null;){if(t.tag===3){qp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(bn===null||!bn.has(r))){e=oi(n,e),e=zy(t,e,1),t=xn(t,e,1),e=Le(),t!==null&&(Lo(t,1,e),He(t,e));break}}t=t.return}}function Ak(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Le(),e.pingedLanes|=e.suspendedLanes&n,me===e&&(we&n)===n&&(ce===4||ce===3&&(we&130023424)===we&&500>ae()-vd?rr(e,0):gd|=n),He(e,t)}function a0(e,t){t===0&&((e.mode&1)===0?t=1:(t=ps,ps<<=1,(ps&130023424)===0&&(ps=4194304)));var n=Le();e=Kt(e,t),e!==null&&(Lo(e,t,n),He(e,n))}function Nk(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),a0(e,n)}function Rk(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(t),a0(e,n)}var l0;l0=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ze.current)Ue=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ue=!1,_k(e,t,n);Ue=(e.flags&131072)!==0}else Ue=!1,ee&&(t.flags&1048576)!==0&&fy(t,ua,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Us(e,t),e=t.pendingProps;var i=ti(t,Ce.current);Yr(t,n),i=cd(null,t,r,e,i,n);var o=fd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Be(r)?(o=!0,aa(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,od(t),i.updater=Za,t.stateNode=i,i._reactInternals=t,Oc(t,r,e,n),t=Nc(null,t,r,!0,o,n)):(t.tag=0,ee&&o&&Jf(t),Ae(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Us(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Lk(r),e=dt(r,e),i){case 0:t=Ac(null,t,r,e,n);break e;case 1:t=Fp(null,t,r,e,n);break e;case 11:t=Mp(null,t,r,e,n);break e;case 14:t=jp(null,t,r,dt(r.type,e),n);break e}throw Error(T(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),Ac(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),Fp(e,t,r,i,n);case 3:e:{if(Wy(t),e===null)throw Error(T(387));r=t.pendingProps,o=t.memoizedState,i=o.element,my(e,t),da(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=oi(Error(T(423)),t),t=Up(e,t,r,n,i);break e}else if(r!==i){i=oi(Error(T(424)),t),t=Up(e,t,r,n,i);break e}else for(Ge=En(t.stateNode.containerInfo.firstChild),Xe=t,ee=!0,pt=null,n=wy(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ni(),r===i){t=Yt(e,t,n);break e}Ae(e,t,r,n)}t=t.child}return t;case 5:return _y(t),e===null&&Tc(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,kc(r,i)?s=null:o!==null&&kc(r,o)&&(t.flags|=32),Vy(e,t),Ae(e,t,s,n),t.child;case 6:return e===null&&Tc(t),null;case 13:return Gy(e,t,n);case 4:return sd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ri(t,null,r,n):Ae(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),Mp(e,t,r,i,n);case 7:return Ae(e,t,t.pendingProps,n),t.child;case 8:return Ae(e,t,t.pendingProps.children,n),t.child;case 12:return Ae(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,q(ca,r._currentValue),r._currentValue=s,o!==null)if(wt(o.value,s)){if(o.children===i.children&&!ze.current){t=Yt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Vt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ic(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(T(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ic(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ae(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Yr(t,n),i=lt(i),r=r(i),t.flags|=1,Ae(e,t,r,n),t.child;case 14:return r=t.type,i=dt(r,t.pendingProps),i=dt(r.type,i),jp(e,t,r,i,n);case 15:return By(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:dt(r,i),Us(e,t),t.tag=1,Be(r)?(e=!0,aa(t)):e=!1,Yr(t,n),vy(t,r,i),Oc(t,r,i,n),Nc(null,t,r,!0,e,n);case 19:return Ky(e,t,n);case 22:return Hy(e,t,n)}throw Error(T(156,t.tag))};function u0(e,t){return Lv(e,t)}function $k(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function st(e,t,n,r){return new $k(e,t,n,r)}function kd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lk(e){if(typeof e=="function")return kd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Uf)return 11;if(e===zf)return 14}return 2}function In(e,t){var n=e.alternate;return n===null?(n=st(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Hs(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")kd(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Cr:return ir(n.children,i,o,t);case Ff:s=8,i|=8;break;case Zu:return e=st(12,n,t,i|2),e.elementType=Zu,e.lanes=o,e;case ec:return e=st(13,n,t,i),e.elementType=ec,e.lanes=o,e;case tc:return e=st(19,n,t,i),e.elementType=tc,e.lanes=o,e;case yv:return rl(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gv:s=10;break e;case vv:s=9;break e;case Uf:s=11;break e;case zf:s=14;break e;case un:s=16,r=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=st(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function ir(e,t,n,r){return e=st(7,e,r,t),e.lanes=n,e}function rl(e,t,n,r){return e=st(22,e,r,t),e.elementType=yv,e.lanes=n,e.stateNode={isHidden:!1},e}function _u(e,t,n){return e=st(6,e,null,t),e.lanes=n,e}function ku(e,t,n){return t=st(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dk(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tu(0),this.expirationTimes=tu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Sd(e,t,n,r,i,o,s,a,l){return e=new Dk(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=st(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},od(o),e}function Mk(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ir,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function c0(e){if(!e)return An;e=e._reactInternals;e:{if(Sr(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(Be(n))return uy(e,n,t)}return t}function f0(e,t,n,r,i,o,s,a,l){return e=Sd(n,r,!0,e,i,o,s,a,l),e.context=c0(null),n=e.current,r=Le(),i=Tn(n),o=Vt(r,i),o.callback=t!=null?t:null,xn(n,o,i),e.current.lanes=i,Lo(e,i,r),He(e,r),e}function il(e,t,n,r){var i=t.current,o=Le(),s=Tn(i);return n=c0(n),t.context===null?t.context=n:t.pendingContext=n,t=Vt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xn(i,t,s),e!==null&&(yt(e,i,s,o),Ms(e,i,s)),s}function _a(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Xp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ed(e,t){Xp(e,t),(e=e.alternate)&&Xp(e,t)}function jk(){return null}var d0=typeof reportError=="function"?reportError:function(e){console.error(e)};function xd(e){this._internalRoot=e}ol.prototype.render=xd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));il(e,t,null,null)};ol.prototype.unmount=xd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cr(function(){il(null,e,null,null)}),t[Gt]=null}};function ol(e){this._internalRoot=e}ol.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bv();e={blockedOn:null,target:e,priority:t};for(var n=0;n<fn.length&&t!==0&&t<fn[n].priority;n++);fn.splice(n,0,e),n===0&&Vv(e)}};function bd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function sl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Qp(){}function Fk(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=_a(s);o.call(u)}}var s=f0(t,r,e,0,null,!1,!1,"",Qp);return e._reactRootContainer=s,e[Gt]=s.current,co(e.nodeType===8?e.parentNode:e),cr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=_a(l);a.call(u)}}var l=Sd(e,0,!1,null,null,!1,!1,"",Qp);return e._reactRootContainer=l,e[Gt]=l.current,co(e.nodeType===8?e.parentNode:e),cr(function(){il(t,l,n,r)}),l}function al(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=_a(s);a.call(l)}}il(t,s,e,i)}else s=Fk(n,t,e,i,r);return _a(s)}Uv=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Li(t.pendingLanes);n!==0&&(Vf(t,n|1),He(t,ae()),(H&6)===0&&(si=ae()+500,jn()))}break;case 13:cr(function(){var r=Kt(e,1);if(r!==null){var i=Le();yt(r,e,1,i)}}),Ed(e,1)}};Wf=function(e){if(e.tag===13){var t=Kt(e,134217728);if(t!==null){var n=Le();yt(t,e,134217728,n)}Ed(e,134217728)}};zv=function(e){if(e.tag===13){var t=Tn(e),n=Kt(e,t);if(n!==null){var r=Le();yt(n,e,t,r)}Ed(e,t)}};Bv=function(){return V};Hv=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};fc=function(e,t,n){switch(t){case"input":if(ic(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Qa(r);if(!i)throw Error(T(90));_v(r),ic(r,i)}}}break;case"textarea":Sv(e,n);break;case"select":t=n.value,t!=null&&Vr(e,!!n.multiple,t,!1)}};Ov=yd;Pv=cr;var Uk={usingClientEntryPoint:!1,Events:[Mo,Nr,Qa,Iv,Cv,yd]},Pi={findFiberByHostInstance:Xn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},zk={bundleType:Pi.bundleType,version:Pi.version,rendererPackageName:Pi.rendererPackageName,rendererConfig:Pi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Rv(e),e===null?null:e.stateNode},findFiberByHostInstance:Pi.findFiberByHostInstance||jk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bs.isDisabled&&bs.supportsFiber)try{Ka=bs.inject(zk),Ot=bs}catch{}}Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uk;Ze.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bd(t))throw Error(T(200));return Mk(e,t,null,n)};Ze.createRoot=function(e,t){if(!bd(e))throw Error(T(299));var n=!1,r="",i=d0;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Sd(e,1,!1,null,null,n,!1,r,i),e[Gt]=t.current,co(e.nodeType===8?e.parentNode:e),new xd(t)};Ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=Rv(t),e=e===null?null:e.stateNode,e};Ze.flushSync=function(e){return cr(e)};Ze.hydrate=function(e,t,n){if(!sl(t))throw Error(T(200));return al(null,e,t,!0,n)};Ze.hydrateRoot=function(e,t,n){if(!bd(e))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=d0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=f0(t,null,e,1,n!=null?n:null,i,!1,o,s),e[Gt]=t.current,co(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ol(t)};Ze.render=function(e,t,n){if(!sl(t))throw Error(T(200));return al(null,e,t,!1,n)};Ze.unmountComponentAtNode=function(e){if(!sl(e))throw Error(T(40));return e._reactRootContainer?(cr(function(){al(null,null,e,!1,function(){e._reactRootContainer=null,e[Gt]=null})}),!0):!1};Ze.unstable_batchedUpdates=yd;Ze.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!sl(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return al(e,t,n,!1,r)};Ze.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Ze})(fv);var Jp=fv.exports;Qu.createRoot=Jp.createRoot,Qu.hydrateRoot=Jp.hydrateRoot;function ka(){return ka=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ka.apply(this,arguments)}var Zn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Zn||(Zn={}));var Zp=function(e){return e},em="beforeunload",Bk="popstate";function Hk(e){e===void 0&&(e={});var t=e,n=t.window,r=n===void 0?document.defaultView:n,i=r.history;function o(){var S=r.location,b=S.pathname,L=S.search,N=S.hash,G=i.state||{};return[G.idx,Zp({pathname:b,search:L,hash:N,state:G.usr||null,key:G.key||"default"})]}var s=null;function a(){if(s)g.call(s),s=null;else{var S=Zn.Pop,b=o(),L=b[0],N=b[1];if(g.length){if(L!=null){var G=c-L;G&&(s={action:S,location:N,retry:function(){E(G*-1)}},E(G))}}else h(S)}}r.addEventListener(Bk,a);var l=Zn.Pop,u=o(),c=u[0],f=u[1],d=nm(),g=nm();c==null&&(c=0,i.replaceState(ka({},i.state,{idx:c}),""));function y(S){return typeof S=="string"?S:Vc(S)}function w(S,b){return b===void 0&&(b=null),Zp(ka({pathname:f.pathname,hash:"",search:""},typeof S=="string"?Er(S):S,{state:b,key:Vk()}))}function x(S,b){return[{usr:S.state,key:S.key,idx:b},y(S)]}function p(S,b,L){return!g.length||(g.call({action:S,location:b,retry:L}),!1)}function h(S){l=S;var b=o();c=b[0],f=b[1],d.call({action:l,location:f})}function m(S,b){var L=Zn.Push,N=w(S,b);function G(){m(S,b)}if(p(L,N,G)){var Pe=x(N,c+1),Ve=Pe[0],kt=Pe[1];try{i.pushState(Ve,"",kt)}catch{r.location.assign(kt)}h(L)}}function _(S,b){var L=Zn.Replace,N=w(S,b);function G(){_(S,b)}if(p(L,N,G)){var Pe=x(N,c),Ve=Pe[0],kt=Pe[1];i.replaceState(Ve,"",kt),h(L)}}function E(S){i.go(S)}var I={get action(){return l},get location(){return f},createHref:y,push:m,replace:_,go:E,back:function(){E(-1)},forward:function(){E(1)},listen:function(b){return d.push(b)},block:function(b){var L=g.push(b);return g.length===1&&r.addEventListener(em,tm),function(){L(),g.length||r.removeEventListener(em,tm)}}};return I}function tm(e){e.preventDefault(),e.returnValue=""}function nm(){var e=[];return{get length(){return e.length},push:function(n){return e.push(n),function(){e=e.filter(function(r){return r!==n})}},call:function(n){e.forEach(function(r){return r&&r(n)})}}}function Vk(){return Math.random().toString(36).substr(2,8)}function Vc(e){var t=e.pathname,n=t===void 0?"/":t,r=e.search,i=r===void 0?"":r,o=e.hash,s=o===void 0?"":o;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),s&&s!=="#"&&(n+=s.charAt(0)==="#"?s:"#"+s),n}function Er(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Td=k.exports.createContext(null),Id=k.exports.createContext(null),Fo=k.exports.createContext({outlet:null,matches:[]});function _t(e,t){if(!e)throw new Error(t)}function Wk(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Er(t):t,i=m0(r.pathname||"/",n);if(i==null)return null;let o=h0(e);Gk(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=tS(o[a],i);return s}function h0(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((i,o)=>{let s={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(s.relativePath.startsWith(r)||_t(!1),s.relativePath=s.relativePath.slice(r.length));let a=Cn([r,s.relativePath]),l=n.concat(s);i.children&&i.children.length>0&&(i.index===!0&&_t(!1),h0(i.children,t,l,a)),!(i.path==null&&!i.index)&&t.push({path:a,score:Zk(a,i.index),routesMeta:l})}),t}function Gk(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:eS(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Kk=/^:\w+$/,Yk=3,qk=2,Xk=1,Qk=10,Jk=-2,rm=e=>e==="*";function Zk(e,t){let n=e.split("/"),r=n.length;return n.some(rm)&&(r+=Jk),t&&(r+=qk),n.filter(i=>!rm(i)).reduce((i,o)=>i+(Kk.test(o)?Yk:o===""?Xk:Qk),r)}function eS(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function tS(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=nS({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;o.push({params:r,pathname:Cn([i,c.pathname]),pathnameBase:g0(Cn([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=Cn([i,c.pathnameBase]))}return o}function nS(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=rS(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{if(c==="*"){let d=a[f]||"";s=o.slice(0,o.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=iS(a[f]||""),u},{}),pathname:o,pathnameBase:s,pattern:e}}function rS(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(s,a)=>(r.push(a),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,t?void 0:"i"),r]}function iS(e,t){try{return decodeURIComponent(e)}catch{return e}}function oS(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Er(e):e;return{pathname:n?n.startsWith("/")?n:sS(n,t):t,search:lS(r),hash:uS(i)}}function sS(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function p0(e,t,n){let r=typeof e=="string"?Er(e):e,i=e===""||r.pathname===""?"/":r.pathname,o;if(i==null)o=n;else{let a=t.length-1;if(i.startsWith("..")){let l=i.split("/");for(;l[0]==="..";)l.shift(),a-=1;r.pathname=l.join("/")}o=a>=0?t[a]:"/"}let s=oS(r,o);return i&&i!=="/"&&i.endsWith("/")&&!s.pathname.endsWith("/")&&(s.pathname+="/"),s}function aS(e){return e===""||e.pathname===""?"/":typeof e=="string"?Er(e).pathname:e.pathname}function m0(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&n!=="/"?null:e.slice(t.length)||"/"}const Cn=e=>e.join("/").replace(/\/\/+/g,"/"),g0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),lS=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,uS=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function cS(e){hi()||_t(!1);let{basename:t,navigator:n}=k.exports.useContext(Td),{hash:r,pathname:i,search:o}=Cd(e),s=i;if(t!=="/"){let a=aS(e),l=a!=null&&a.endsWith("/");s=i==="/"?t+(l?"/":""):Cn([t,i])}return n.createHref({pathname:s,search:o,hash:r})}function hi(){return k.exports.useContext(Id)!=null}function nn(){return hi()||_t(!1),k.exports.useContext(Id).location}function Uo(){hi()||_t(!1);let{basename:e,navigator:t}=k.exports.useContext(Td),{matches:n}=k.exports.useContext(Fo),{pathname:r}=nn(),i=JSON.stringify(n.map(a=>a.pathnameBase)),o=k.exports.useRef(!1);return k.exports.useEffect(()=>{o.current=!0}),k.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let u=p0(a,JSON.parse(i),r);e!=="/"&&(u.pathname=Cn([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state)},[e,t,i,r])}function v0(){let{matches:e}=k.exports.useContext(Fo),t=e[e.length-1];return t?t.params:{}}function Cd(e){let{matches:t}=k.exports.useContext(Fo),{pathname:n}=nn(),r=JSON.stringify(t.map(i=>i.pathnameBase));return k.exports.useMemo(()=>p0(e,JSON.parse(r),n),[e,r,n])}function fS(e,t){hi()||_t(!1);let{matches:n}=k.exports.useContext(Fo),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let o=r?r.pathnameBase:"/";r&&r.route;let s=nn(),a;if(t){var l;let d=typeof t=="string"?Er(t):t;o==="/"||((l=d.pathname)==null?void 0:l.startsWith(o))||_t(!1),a=d}else a=s;let u=a.pathname||"/",c=o==="/"?u:u.slice(o.length)||"/",f=Wk(e,{pathname:c});return dS(f&&f.map(d=>Object.assign({},d,{params:Object.assign({},i,d.params),pathname:Cn([o,d.pathname]),pathnameBase:d.pathnameBase==="/"?o:Cn([o,d.pathnameBase])})),n)}function dS(e,t){return t===void 0&&(t=[]),e==null?null:e.reduceRight((n,r,i)=>k.exports.createElement(Fo.Provider,{children:r.route.element!==void 0?r.route.element:n,value:{outlet:n,matches:t.concat(e.slice(0,i+1))}}),null)}function hS(e){let{to:t,replace:n,state:r}=e;hi()||_t(!1);let i=Uo();return k.exports.useEffect(()=>{i(t,{replace:n,state:r})}),null}function Kn(e){_t(!1)}function pS(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Zn.Pop,navigator:o,static:s=!1}=e;hi()&&_t(!1);let a=g0(t),l=k.exports.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=Er(r));let{pathname:u="/",search:c="",hash:f="",state:d=null,key:g="default"}=r,y=k.exports.useMemo(()=>{let w=m0(u,a);return w==null?null:{pathname:w,search:c,hash:f,state:d,key:g}},[a,u,c,f,d,g]);return y==null?null:k.exports.createElement(Td.Provider,{value:l},k.exports.createElement(Id.Provider,{children:n,value:{location:y,navigationType:i}}))}function mS(e){let{children:t,location:n}=e;return fS(Wc(t),n)}function Wc(e){let t=[];return k.exports.Children.forEach(e,n=>{if(!k.exports.isValidElement(n))return;if(n.type===k.exports.Fragment){t.push.apply(t,Wc(n.props.children));return}n.type!==Kn&&_t(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=Wc(n.props.children)),t.push(r)}),t}/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sa(){return Sa=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Sa.apply(this,arguments)}function y0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}const gS=["onClick","reloadDocument","replace","state","target","to"],vS=["aria-current","caseSensitive","className","end","style","to","children"];function yS(e){let{basename:t,children:n,window:r}=e,i=k.exports.useRef();i.current==null&&(i.current=Hk({window:r}));let o=i.current,[s,a]=k.exports.useState({action:o.action,location:o.location});return k.exports.useLayoutEffect(()=>o.listen(a),[o]),k.exports.createElement(pS,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o})}function wS(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const fr=k.exports.forwardRef(function(t,n){let{onClick:r,reloadDocument:i,replace:o=!1,state:s,target:a,to:l}=t,u=y0(t,gS),c=cS(l),f=_S(l,{replace:o,state:s,target:a});function d(g){r&&r(g),!g.defaultPrevented&&!i&&f(g)}return k.exports.createElement("a",Sa({},u,{href:c,onClick:d,ref:n,target:a}))}),im=k.exports.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:a,to:l,children:u}=t,c=y0(t,vS),f=nn(),d=Cd(l),g=f.pathname,y=d.pathname;i||(g=g.toLowerCase(),y=y.toLowerCase());let w=g===y||!s&&g.startsWith(y)&&g.charAt(y.length)==="/",x=w?r:void 0,p;typeof o=="function"?p=o({isActive:w}):p=[o,w?"active":null].filter(Boolean).join(" ");let h=typeof a=="function"?a({isActive:w}):a;return k.exports.createElement(fr,Sa({},c,{"aria-current":x,className:p,ref:n,style:h,to:l}),typeof u=="function"?u({isActive:w}):u)});function _S(e,t){let{target:n,replace:r,state:i}=t===void 0?{}:t,o=Uo(),s=nn(),a=Cd(e);return k.exports.useCallback(l=>{if(l.button===0&&(!n||n==="_self")&&!wS(l)){l.preventDefault();let u=!!r||Vc(s)===Vc(a);o(e,{replace:u,state:i})}},[s,o,a,r,i,n,e])}function Fn(e){let t=k.exports.useRef(Su(e)),n=nn(),r=k.exports.useMemo(()=>{let s=Su(n.search);for(let a of t.current.keys())s.has(a)||t.current.getAll(a).forEach(l=>{s.append(a,l)});return s},[n.search]),i=Uo(),o=k.exports.useCallback((s,a)=>{i("?"+Su(s),a)},[i]);return[r,o]}function Su(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}var Od={exports:{}},ll={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kS=k.exports,SS=Symbol.for("react.element"),ES=Symbol.for("react.fragment"),xS=Object.prototype.hasOwnProperty,bS=kS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,TS={key:!0,ref:!0,__self:!0,__source:!0};function w0(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)xS.call(t,r)&&!TS.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:SS,type:e,key:o,ref:s,props:i,_owner:bS.current}}ll.Fragment=ES;ll.jsx=w0;ll.jsxs=w0;(function(e){e.exports=ll})(Od);const v=Od.exports.jsx,R=Od.exports.jsxs,IS=()=>R(fr,{to:"/anime-plataform",className:"text-3xl dark:text-slate-50 text-stone-800 font-bold font-serif",children:["Anime",v("span",{className:"text-blue-500",children:"DV"})]});/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var CS={prefix:"far",iconName:"circle-play",icon:[512,512,[61469,"play-circle"],"f144","M188.3 147.1C195.8 142.8 205.1 142.1 212.5 147.5L356.5 235.5C363.6 239.9 368 247.6 368 256C368 264.4 363.6 272.1 356.5 276.5L212.5 364.5C205.1 369 195.8 369.2 188.3 364.9C180.7 360.7 176 352.7 176 344V167.1C176 159.3 180.7 151.3 188.3 147.1V147.1zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"]},OS=CS,PS={prefix:"far",iconName:"face-meh",icon:[512,512,[128528,"meh"],"f11a","M144.4 208C144.4 190.3 158.7 176 176.4 176C194 176 208.4 190.3 208.4 208C208.4 225.7 194 240 176.4 240C158.7 240 144.4 225.7 144.4 208zM368.4 208C368.4 225.7 354 240 336.4 240C318.7 240 304.4 225.7 304.4 208C304.4 190.3 318.7 176 336.4 176C354 176 368.4 190.3 368.4 208zM328 328C341.3 328 352 338.7 352 352C352 365.3 341.3 376 328 376H184C170.7 376 160 365.3 160 352C160 338.7 170.7 328 184 328H328zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464z"]},AS={prefix:"far",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,10084,61578,9829],"f004","M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"]},NS={prefix:"far",iconName:"moon",icon:[512,512,[127769,9214],"f186","M421.6 379.9c-.6641 0-1.35 .0625-2.049 .1953c-11.24 2.143-22.37 3.17-33.32 3.17c-94.81 0-174.1-77.14-174.1-175.5c0-63.19 33.79-121.3 88.73-152.6c8.467-4.812 6.339-17.66-3.279-19.44c-11.2-2.078-29.53-3.746-40.9-3.746C132.3 31.1 32 132.2 32 256c0 123.6 100.1 224 223.8 224c69.04 0 132.1-31.45 173.8-82.93C435.3 389.1 429.1 379.9 421.6 379.9zM255.8 432C158.9 432 80 353 80 256c0-76.32 48.77-141.4 116.7-165.8C175.2 125 163.2 165.6 163.2 207.8c0 99.44 65.13 183.9 154.9 212.8C298.5 428.1 277.4 432 255.8 432z"]},RS={prefix:"far",iconName:"star",icon:[576,512,[61446,11088],"f005","M287.9 0C297.1 0 305.5 5.25 309.5 13.52L378.1 154.8L531.4 177.5C540.4 178.8 547.8 185.1 550.7 193.7C553.5 202.4 551.2 211.9 544.8 218.2L433.6 328.4L459.9 483.9C461.4 492.9 457.7 502.1 450.2 507.4C442.8 512.7 432.1 513.4 424.9 509.1L287.9 435.9L150.1 509.1C142.9 513.4 133.1 512.7 125.6 507.4C118.2 502.1 114.5 492.9 115.1 483.9L142.2 328.4L31.11 218.2C24.65 211.9 22.36 202.4 25.2 193.7C28.03 185.1 35.5 178.8 44.49 177.5L197.7 154.8L266.3 13.52C270.4 5.249 278.7 0 287.9 0L287.9 0zM287.9 78.95L235.4 187.2C231.9 194.3 225.1 199.3 217.3 200.5L98.98 217.9L184.9 303C190.4 308.5 192.9 316.4 191.6 324.1L171.4 443.7L276.6 387.5C283.7 383.7 292.2 383.7 299.2 387.5L404.4 443.7L384.2 324.1C382.9 316.4 385.5 308.5 391 303L476.9 217.9L358.6 200.5C350.7 199.3 343.9 194.3 340.5 187.2L287.9 78.95z"]},$S={prefix:"far",iconName:"sun",icon:[512,512,[9728],"f185","M505.2 324.8l-47.73-68.78l47.75-68.81c7.359-10.62 8.797-24.12 3.844-36.06c-4.969-11.94-15.52-20.44-28.22-22.72l-82.39-14.88l-14.89-82.41c-2.281-12.72-10.76-23.25-22.69-28.22c-11.97-4.936-25.42-3.498-36.12 3.844L256 54.49L187.2 6.709C176.5-.6016 163.1-2.039 151.1 2.896c-11.92 4.971-20.4 15.5-22.7 28.19l-14.89 82.44L31.15 128.4C18.42 130.7 7.854 139.2 2.9 151.2C-2.051 163.1-.5996 176.6 6.775 187.2l47.73 68.78l-47.75 68.81c-7.359 10.62-8.795 24.12-3.844 36.06c4.969 11.94 15.52 20.44 28.22 22.72l82.39 14.88l14.89 82.41c2.297 12.72 10.78 23.25 22.7 28.22c11.95 4.906 25.44 3.531 36.09-3.844L256 457.5l68.83 47.78C331.3 509.7 338.8 512 346.3 512c4.906 0 9.859-.9687 14.56-2.906c11.92-4.969 20.4-15.5 22.7-28.19l14.89-82.44l82.37-14.88c12.73-2.281 23.3-10.78 28.25-22.75C514.1 348.9 512.6 335.4 505.2 324.8zM456.8 339.2l-99.61 18l-18 99.63L256 399.1L172.8 456.8l-18-99.63l-99.61-18L112.9 255.1L55.23 172.8l99.61-18l18-99.63L256 112.9l83.15-57.75l18.02 99.66l99.61 18L399.1 255.1L456.8 339.2zM256 143.1c-61.85 0-111.1 50.14-111.1 111.1c0 61.85 50.15 111.1 111.1 111.1s111.1-50.14 111.1-111.1C367.1 194.1 317.8 143.1 256 143.1zM256 319.1c-35.28 0-63.99-28.71-63.99-63.99S220.7 192 256 192s63.99 28.71 63.99 63.1S291.3 319.1 256 319.1z"]};/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function om(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?om(Object(n),!0).forEach(function(r){MS(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):om(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ea(e){return Ea=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ea(e)}function LS(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function sm(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function DS(e,t,n){return t&&sm(e.prototype,t),n&&sm(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function MS(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Pd(e,t){return FS(e)||zS(e,t)||_0(e,t)||HS()}function ul(e){return jS(e)||US(e)||_0(e)||BS()}function jS(e){if(Array.isArray(e))return Gc(e)}function FS(e){if(Array.isArray(e))return e}function US(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function zS(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,a;try{for(n=n.call(e);!(i=(s=n.next()).done)&&(r.push(s.value),!(t&&r.length===t));i=!0);}catch(l){o=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw a}}return r}}function _0(e,t){if(!!e){if(typeof e=="string")return Gc(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gc(e,t)}}function Gc(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function BS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function HS(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var am=function(){},Ad={},k0={},S0=null,E0={mark:am,measure:am};try{typeof window<"u"&&(Ad=window),typeof document<"u"&&(k0=document),typeof MutationObserver<"u"&&(S0=MutationObserver),typeof performance<"u"&&(E0=performance)}catch{}var VS=Ad.navigator||{},lm=VS.userAgent,um=lm===void 0?"":lm,Nn=Ad,Z=k0,cm=S0,Ts=E0;Nn.document;var rn=!!Z.documentElement&&!!Z.head&&typeof Z.addEventListener=="function"&&typeof Z.createElement=="function",x0=~um.indexOf("MSIE")||~um.indexOf("Trident/"),qt="___FONT_AWESOME___",Kc=16,b0="fa",T0="svg-inline--fa",dr="data-fa-i2svg",Yc="data-fa-pseudo-element",WS="data-fa-pseudo-element-pending",Nd="data-prefix",Rd="data-icon",fm="fontawesome-i2svg",GS="async",KS=["HTML","HEAD","STYLE","SCRIPT"],I0=function(){try{return!0}catch{return!1}}(),$d={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},xa={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},C0={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},YS={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},qS=/fa[srltdbk]?[\-\ ]/,O0="fa-layers-text",XS=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,QS={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},P0=[1,2,3,4,5,6,7,8,9,10],JS=P0.concat([11,12,13,14,15,16,17,18,19,20]),ZS=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],er={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},eE=[].concat(ul(Object.keys(xa)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",er.GROUP,er.SWAP_OPACITY,er.PRIMARY,er.SECONDARY]).concat(P0.map(function(e){return"".concat(e,"x")})).concat(JS.map(function(e){return"w-".concat(e)})),A0=Nn.FontAwesomeConfig||{};function tE(e){var t=Z.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function nE(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Z&&typeof Z.querySelector=="function"){var rE=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];rE.forEach(function(e){var t=Pd(e,2),n=t[0],r=t[1],i=nE(tE(n));i!=null&&(A0[r]=i)})}var iE={familyPrefix:b0,styleDefault:"solid",replacementClass:T0,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Yi=C(C({},iE),A0);Yi.autoReplaceSvg||(Yi.observeMutations=!1);var $={};Object.keys(Yi).forEach(function(e){Object.defineProperty($,e,{enumerable:!0,set:function(n){Yi[e]=n,Vs.forEach(function(r){return r($)})},get:function(){return Yi[e]}})});Nn.FontAwesomeConfig=$;var Vs=[];function oE(e){return Vs.push(e),function(){Vs.splice(Vs.indexOf(e),1)}}var an=Kc,Tt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function sE(e){if(!(!e||!rn)){var t=Z.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Z.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return Z.head.insertBefore(t,r),e}}var aE="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function _o(){for(var e=12,t="";e-- >0;)t+=aE[Math.random()*62|0];return t}function pi(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ld(e){return e.classList?pi(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function N0(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function lE(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(N0(e[n]),'" ')},"").trim()}function cl(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Dd(e){return e.size!==Tt.size||e.x!==Tt.x||e.y!==Tt.y||e.rotate!==Tt.rotate||e.flipX||e.flipY}function uE(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(o," ").concat(s," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function cE(e){var t=e.transform,n=e.width,r=n===void 0?Kc:n,i=e.height,o=i===void 0?Kc:i,s=e.startCentered,a=s===void 0?!1:s,l="";return a&&x0?l+="translate(".concat(t.x/an-r/2,"em, ").concat(t.y/an-o/2,"em) "):a?l+="translate(calc(-50% + ".concat(t.x/an,"em), calc(-50% + ").concat(t.y/an,"em)) "):l+="translate(".concat(t.x/an,"em, ").concat(t.y/an,"em) "),l+="scale(".concat(t.size/an*(t.flipX?-1:1),", ").concat(t.size/an*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var fE=`:root, :host {
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
}`;function R0(){var e=b0,t=T0,n=$.familyPrefix,r=$.replacementClass,i=fE;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var dm=!1;function Eu(){$.autoAddCss&&!dm&&(sE(R0()),dm=!0)}var dE={mixout:function(){return{dom:{css:R0,insertCss:Eu}}},hooks:function(){return{beforeDOMElementCreation:function(){Eu()},beforeI2svg:function(){Eu()}}}},Xt=Nn||{};Xt[qt]||(Xt[qt]={});Xt[qt].styles||(Xt[qt].styles={});Xt[qt].hooks||(Xt[qt].hooks={});Xt[qt].shims||(Xt[qt].shims=[]);var mt=Xt[qt],$0=[],hE=function e(){Z.removeEventListener("DOMContentLoaded",e),ba=1,$0.map(function(t){return t()})},ba=!1;rn&&(ba=(Z.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Z.readyState),ba||Z.addEventListener("DOMContentLoaded",hE));function pE(e){!rn||(ba?setTimeout(e,0):$0.push(e))}function zo(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,o=i===void 0?[]:i;return typeof e=="string"?N0(e):"<".concat(t," ").concat(lE(r),">").concat(o.map(zo).join(""),"</").concat(t,">")}function hm(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var mE=function(t,n){return function(r,i,o,s){return t.call(n,r,i,o,s)}},xu=function(t,n,r,i){var o=Object.keys(t),s=o.length,a=i!==void 0?mE(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[o[0]]):(l=0,c=r);l<s;l++)u=o[l],c=a(c,t[u],u,t);return c};function gE(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function qc(e){var t=gE(e);return t.length===1?t[0].toString(16):null}function vE(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function pm(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Xc(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=pm(t);typeof mt.hooks.addPack=="function"&&!i?mt.hooks.addPack(e,pm(t)):mt.styles[e]=C(C({},mt.styles[e]||{}),o),e==="fas"&&Xc("fa",t)}var qi=mt.styles,yE=mt.shims,wE=Object.values(C0),Md=null,L0={},D0={},M0={},j0={},F0={},_E=Object.keys($d);function kE(e){return~eE.indexOf(e)}function SE(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!kE(i)?i:null}var U0=function(){var t=function(o){return xu(qi,function(s,a,l){return s[l]=xu(a,o,{}),s},{})};L0=t(function(i,o,s){if(o[3]&&(i[o[3]]=s),o[2]){var a=o[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=s})}return i}),D0=t(function(i,o,s){if(i[s]=s,o[2]){var a=o[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=s})}return i}),F0=t(function(i,o,s){var a=o[2];return i[s]=s,a.forEach(function(l){i[l]=s}),i});var n="far"in qi||$.autoFetchSvg,r=xu(yE,function(i,o){var s=o[0],a=o[1],l=o[2];return a==="far"&&!n&&(a="fas"),typeof s=="string"&&(i.names[s]={prefix:a,iconName:l}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});M0=r.names,j0=r.unicodes,Md=fl($.styleDefault)};oE(function(e){Md=fl(e.styleDefault)});U0();function jd(e,t){return(L0[e]||{})[t]}function EE(e,t){return(D0[e]||{})[t]}function Fr(e,t){return(F0[e]||{})[t]}function z0(e){return M0[e]||{prefix:null,iconName:null}}function xE(e){var t=j0[e],n=jd("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Rn(){return Md}var Fd=function(){return{prefix:null,iconName:null,rest:[]}};function fl(e){var t=$d[e],n=xa[e]||xa[t],r=e in mt.styles?e:null;return n||r||null}function dl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,i=null,o=e.reduce(function(s,a){var l=SE($.familyPrefix,a);if(qi[a]?(a=wE.includes(a)?YS[a]:a,i=a,s.prefix=a):_E.indexOf(a)>-1?(i=a,s.prefix=fl(a)):l?s.iconName=l:a!==$.replacementClass&&s.rest.push(a),!r&&s.prefix&&s.iconName){var u=i==="fa"?z0(s.iconName):{},c=Fr(s.prefix,s.iconName);u.prefix&&(i=null),s.iconName=u.iconName||c||s.iconName,s.prefix=u.prefix||s.prefix,s.prefix==="far"&&!qi.far&&qi.fas&&!$.autoFetchSvg&&(s.prefix="fas")}return s},Fd());return(o.prefix==="fa"||i==="fa")&&(o.prefix=Rn()||"fas"),o}var bE=function(){function e(){LS(this,e),this.definitions={}}return DS(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(a){n.definitions[a]=C(C({},n.definitions[a]||{}),s[a]),Xc(a,s[a]);var l=C0[a];l&&Xc(l,s[a]),U0()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var s=i[o],a=s.prefix,l=s.iconName,u=s.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[a][f]=u)}),n[a][l]=u}),n}}]),e}(),mm=[],Ur={},Xr={},TE=Object.keys(Xr);function IE(e,t){var n=t.mixoutsTo;return mm=e,Ur={},Object.keys(Xr).forEach(function(r){TE.indexOf(r)===-1&&delete Xr[r]}),mm.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),Ea(i[s])==="object"&&Object.keys(i[s]).forEach(function(a){n[s]||(n[s]={}),n[s][a]=i[s][a]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(s){Ur[s]||(Ur[s]=[]),Ur[s].push(o[s])})}r.provides&&r.provides(Xr)}),n}function Qc(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=Ur[e]||[];return o.forEach(function(s){t=s.apply(null,[t].concat(r))}),t}function hr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Ur[e]||[];i.forEach(function(o){o.apply(null,n)})}function Qt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Xr[e]?Xr[e].apply(null,t):void 0}function Jc(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Rn();if(!!t)return t=Fr(n,t)||t,hm(B0.definitions,n,t)||hm(mt.styles,n,t)}var B0=new bE,CE=function(){$.autoReplaceSvg=!1,$.observeMutations=!1,hr("noAuto")},OE={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return rn?(hr("beforeI2svg",t),Qt("pseudoElements2svg",t),Qt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;$.autoReplaceSvg===!1&&($.autoReplaceSvg=!0),$.observeMutations=!0,pE(function(){AE({autoReplaceSvgRoot:n}),hr("watch",t)})}},PE={icon:function(t){if(t===null)return null;if(Ea(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Fr(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=fl(t[0]);return{prefix:r,iconName:Fr(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat($.familyPrefix,"-"))>-1||t.match(qS))){var i=dl(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Rn(),iconName:Fr(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var o=Rn();return{prefix:o,iconName:Fr(o,t)||t}}}},tt={noAuto:CE,config:$,dom:OE,parse:PE,library:B0,findIconDefinition:Jc,toHtml:zo},AE=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Z:n;(Object.keys(mt.styles).length>0||$.autoFetchSvg)&&rn&&$.autoReplaceSvg&&tt.dom.i2svg({node:r})};function hl(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return zo(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!rn){var r=Z.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function NE(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,o=e.styles,s=e.transform;if(Dd(s)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=cl(C(C({},o),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function RE(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,o=e.symbol,s=o===!0?"".concat(t,"-").concat($.familyPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:C(C({},i),{},{id:s}),children:r}]}]}function Ud(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,o=e.iconName,s=e.transform,a=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,d=e.watchable,g=d===void 0?!1:d,y=r.found?r:n,w=y.width,x=y.height,p=i==="fak",h=[$.replacementClass,o?"".concat($.familyPrefix,"-").concat(o):""].filter(function(L){return f.classes.indexOf(L)===-1}).filter(function(L){return L!==""||!!L}).concat(f.classes).join(" "),m={children:[],attributes:C(C({},f.attributes),{},{"data-prefix":i,"data-icon":o,class:h,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(x)})},_=p&&!~f.classes.indexOf("fa-fw")?{width:"".concat(w/x*16*.0625,"em")}:{};g&&(m.attributes[dr]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||_o())},children:[l]}),delete m.attributes.title);var E=C(C({},m),{},{prefix:i,iconName:o,main:n,mask:r,maskId:u,transform:s,symbol:a,styles:C(C({},_),f.styles)}),I=r.found&&n.found?Qt("generateAbstractMask",E)||{children:[],attributes:{}}:Qt("generateAbstractIcon",E)||{children:[],attributes:{}},S=I.children,b=I.attributes;return E.children=S,E.attributes=b,a?RE(E):NE(E)}function gm(e){var t=e.content,n=e.width,r=e.height,i=e.transform,o=e.title,s=e.extra,a=e.watchable,l=a===void 0?!1:a,u=C(C(C({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});l&&(u[dr]="");var c=C({},s.styles);Dd(i)&&(c.transform=cE({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=cl(c);f.length>0&&(u.style=f);var d=[];return d.push({tag:"span",attributes:u,children:[t]}),o&&d.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),d}function $E(e){var t=e.content,n=e.title,r=e.extra,i=C(C(C({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=cl(r.styles);o.length>0&&(i.style=o);var s=[];return s.push({tag:"span",attributes:i,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var bu=mt.styles;function Zc(e){var t=e[0],n=e[1],r=e.slice(4),i=Pd(r,1),o=i[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat($.familyPrefix,"-").concat(er.GROUP)},children:[{tag:"path",attributes:{class:"".concat($.familyPrefix,"-").concat(er.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat($.familyPrefix,"-").concat(er.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:s}}var LE={found:!1,width:512,height:512};function DE(e,t){!I0&&!$.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ef(e,t){var n=t;return t==="fa"&&$.styleDefault!==null&&(t=Rn()),new Promise(function(r,i){if(Qt("missingIconAbstract"),n==="fa"){var o=z0(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&bu[t]&&bu[t][e]){var s=bu[t][e];return r(Zc(s))}DE(e,t),r(C(C({},LE),{},{icon:$.showMissingIcons&&e?Qt("missingIconAbstract")||{}:{}}))})}var vm=function(){},tf=$.measurePerformance&&Ts&&Ts.mark&&Ts.measure?Ts:{mark:vm,measure:vm},Mi='FA "6.1.2"',ME=function(t){return tf.mark("".concat(Mi," ").concat(t," begins")),function(){return H0(t)}},H0=function(t){tf.mark("".concat(Mi," ").concat(t," ends")),tf.measure("".concat(Mi," ").concat(t),"".concat(Mi," ").concat(t," begins"),"".concat(Mi," ").concat(t," ends"))},zd={begin:ME,end:H0},Ws=function(){};function ym(e){var t=e.getAttribute?e.getAttribute(dr):null;return typeof t=="string"}function jE(e){var t=e.getAttribute?e.getAttribute(Nd):null,n=e.getAttribute?e.getAttribute(Rd):null;return t&&n}function FE(e){return e&&e.classList&&e.classList.contains&&e.classList.contains($.replacementClass)}function UE(){if($.autoReplaceSvg===!0)return Gs.replace;var e=Gs[$.autoReplaceSvg];return e||Gs.replace}function zE(e){return Z.createElementNS("http://www.w3.org/2000/svg",e)}function BE(e){return Z.createElement(e)}function V0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?zE:BE:n;if(typeof e=="string")return Z.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(s){i.setAttribute(s,e.attributes[s])});var o=e.children||[];return o.forEach(function(s){i.appendChild(V0(s,{ceFn:r}))}),i}function HE(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Gs={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(V0(i),n)}),n.getAttribute(dr)===null&&$.keepOriginalSource){var r=Z.createComment(HE(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ld(n).indexOf($.replacementClass))return Gs.replace(t);var i=new RegExp("".concat($.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(a,l){return l===$.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var s=r.map(function(a){return zo(a)}).join(`
`);n.setAttribute(dr,""),n.innerHTML=s}};function wm(e){e()}function W0(e,t){var n=typeof t=="function"?t:Ws;if(e.length===0)n();else{var r=wm;$.mutateApproach===GS&&(r=Nn.requestAnimationFrame||wm),r(function(){var i=UE(),o=zd.begin("mutate");e.map(i),o(),n()})}}var Bd=!1;function G0(){Bd=!0}function nf(){Bd=!1}var Ta=null;function _m(e){if(!!cm&&!!$.observeMutations){var t=e.treeCallback,n=t===void 0?Ws:t,r=e.nodeCallback,i=r===void 0?Ws:r,o=e.pseudoElementsCallback,s=o===void 0?Ws:o,a=e.observeMutationsRoot,l=a===void 0?Z:a;Ta=new cm(function(u){if(!Bd){var c=Rn();pi(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!ym(f.addedNodes[0])&&($.searchPseudoElements&&s(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&$.searchPseudoElements&&s(f.target.parentNode),f.type==="attributes"&&ym(f.target)&&~ZS.indexOf(f.attributeName))if(f.attributeName==="class"&&jE(f.target)){var d=dl(Ld(f.target)),g=d.prefix,y=d.iconName;f.target.setAttribute(Nd,g||c),y&&f.target.setAttribute(Rd,y)}else FE(f.target)&&i(f.target)})}}),rn&&Ta.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function VE(){!Ta||Ta.disconnect()}function WE(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var o=i.split(":"),s=o[0],a=o.slice(1);return s&&a.length>0&&(r[s]=a.join(":").trim()),r},{})),n}function GE(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=dl(Ld(e));return i.prefix||(i.prefix=Rn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=EE(i.prefix,e.innerText)||jd(i.prefix,qc(e.innerText))),!i.iconName&&$.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function KE(e){var t=pi(e.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return $.autoA11y&&(n?t["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(r||_o()):(t["aria-hidden"]="true",t.focusable="false")),t}function YE(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Tt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function km(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=GE(e),r=n.iconName,i=n.prefix,o=n.rest,s=KE(e),a=Qc("parseNodeAttributes",{},e),l=t.styleParser?WE(e):[];return C({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Tt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:l,attributes:s}},a)}var qE=mt.styles;function K0(e){var t=$.autoReplaceSvg==="nest"?km(e,{styleParser:!1}):km(e);return~t.extra.classes.indexOf(O0)?Qt("generateLayersText",e,t):Qt("generateSvgReplacementMutation",e,t)}function Sm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!rn)return Promise.resolve();var n=Z.documentElement.classList,r=function(f){return n.add("".concat(fm,"-").concat(f))},i=function(f){return n.remove("".concat(fm,"-").concat(f))},o=$.autoFetchSvg?Object.keys($d):Object.keys(qE);o.includes("fa")||o.push("fa");var s=[".".concat(O0,":not([").concat(dr,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(dr,"])")})).join(", ");if(s.length===0)return Promise.resolve();var a=[];try{a=pi(e.querySelectorAll(s))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=zd.begin("onTree"),u=a.reduce(function(c,f){try{var d=K0(f);d&&c.push(d)}catch(g){I0||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(d){W0(d,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(d){l(),f(d)})})}function XE(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;K0(e).then(function(n){n&&W0([n],t)})}function QE(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Jc(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Jc(i||{})),e(r,C(C({},n),{},{mask:i}))}}var JE=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Tt:r,o=n.symbol,s=o===void 0?!1:o,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,f=n.title,d=f===void 0?null:f,g=n.titleId,y=g===void 0?null:g,w=n.classes,x=w===void 0?[]:w,p=n.attributes,h=p===void 0?{}:p,m=n.styles,_=m===void 0?{}:m;if(!!t){var E=t.prefix,I=t.iconName,S=t.icon;return hl(C({type:"icon"},t),function(){return hr("beforeDOMElementCreation",{iconDefinition:t,params:n}),$.autoA11y&&(d?h["aria-labelledby"]="".concat($.replacementClass,"-title-").concat(y||_o()):(h["aria-hidden"]="true",h.focusable="false")),Ud({icons:{main:Zc(S),mask:l?Zc(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:I,transform:C(C({},Tt),i),symbol:s,title:d,maskId:c,titleId:y,extra:{attributes:h,styles:_,classes:x}})})}},ZE={mixout:function(){return{icon:QE(JE)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Sm,n.nodeCallback=XE,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?Z:r,o=n.callback,s=o===void 0?function(){}:o;return Sm(i,s)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,s=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,d=r.extra;return new Promise(function(g,y){Promise.all([ef(i,a),c.iconName?ef(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var x=Pd(w,2),p=x[0],h=x[1];g([n,Ud({icons:{main:p,mask:h},prefix:a,iconName:i,transform:l,symbol:u,maskId:f,title:o,titleId:s,extra:d,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.transform,a=n.styles,l=cl(a);l.length>0&&(i.style=l);var u;return Dd(s)&&(u=Qt("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:i}}}},ex={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return hl({type:"layer"},function(){hr("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(a){Array.isArray(a)?a.map(function(l){s=s.concat(l.abstract)}):s=s.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat($.familyPrefix,"-layers")].concat(ul(o)).join(" ")},children:s}]})}}}},tx={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,s=r.classes,a=s===void 0?[]:s,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return hl({type:"counter",content:n},function(){return hr("beforeDOMElementCreation",{content:n,params:r}),$E({content:n.toString(),title:o,extra:{attributes:u,styles:f,classes:["".concat($.familyPrefix,"-layers-counter")].concat(ul(a))}})})}}}},nx={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?Tt:i,s=r.title,a=s===void 0?null:s,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,d=r.styles,g=d===void 0?{}:d;return hl({type:"text",content:n},function(){return hr("beforeDOMElementCreation",{content:n,params:r}),gm({content:n,transform:C(C({},Tt),o),title:a,extra:{attributes:f,styles:g,classes:["".concat($.familyPrefix,"-layers-text")].concat(ul(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,o=r.transform,s=r.extra,a=null,l=null;if(x0){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return $.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,gm({content:n.innerHTML,width:a,height:l,transform:o,title:i,extra:s,watchable:!0})])}}},rx=new RegExp('"',"ug"),Em=[1105920,1112319];function ix(e){var t=e.replace(rx,""),n=vE(t,0),r=n>=Em[0]&&n<=Em[1],i=t.length===2?t[0]===t[1]:!1;return{value:qc(i?t[0]:t),isSecondary:r||i}}function xm(e,t){var n="".concat(WS).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var o=pi(e.children),s=o.filter(function(I){return I.getAttribute(Yc)===t})[0],a=Nn.getComputedStyle(e,t),l=a.getPropertyValue("font-family").match(XS),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(s&&!l)return e.removeChild(s),r();if(l&&c!=="none"&&c!==""){var f=a.getPropertyValue("content"),d=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?xa[l[2].toLowerCase()]:QS[u],g=ix(f),y=g.value,w=g.isSecondary,x=l[0].startsWith("FontAwesome"),p=jd(d,y),h=p;if(x){var m=xE(y);m.iconName&&m.prefix&&(p=m.iconName,d=m.prefix)}if(p&&!w&&(!s||s.getAttribute(Nd)!==d||s.getAttribute(Rd)!==h)){e.setAttribute(n,h),s&&e.removeChild(s);var _=YE(),E=_.extra;E.attributes[Yc]=t,ef(p,d).then(function(I){var S=Ud(C(C({},_),{},{icons:{main:I,mask:Fd()},prefix:d,iconName:h,extra:E,watchable:!0})),b=Z.createElement("svg");t==="::before"?e.insertBefore(b,e.firstChild):e.appendChild(b),b.outerHTML=S.map(function(L){return zo(L)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function ox(e){return Promise.all([xm(e,"::before"),xm(e,"::after")])}function sx(e){return e.parentNode!==document.head&&!~KS.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Yc)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function bm(e){if(!!rn)return new Promise(function(t,n){var r=pi(e.querySelectorAll("*")).filter(sx).map(ox),i=zd.begin("searchPseudoElements");G0(),Promise.all(r).then(function(){i(),nf(),t()}).catch(function(){i(),nf(),n()})})}var ax={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=bm,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Z:r;$.searchPseudoElements&&bm(i)}}},Tm=!1,lx={mixout:function(){return{dom:{unwatch:function(){G0(),Tm=!0}}}},hooks:function(){return{bootstrap:function(){_m(Qc("mutationObserverCallbacks",{}))},noAuto:function(){VE()},watch:function(n){var r=n.observeMutationsRoot;Tm?nf():_m(Qc("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Im=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),s=o[0],a=o.slice(1).join("-");if(s&&a==="h")return r.flipX=!0,r;if(s&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(s){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},ux={mixout:function(){return{parse:{transform:function(n){return Im(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Im(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,s=n.iconWidth,a={transform:"translate(".concat(o/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},d={transform:"translate(".concat(s/2*-1," -256)")},g={outer:a,inner:f,path:d};return{tag:"g",attributes:C({},g.outer),children:[{tag:"g",attributes:C({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:C(C({},r.icon.attributes),g.path)}]}]}}}},Tu={x:0,y:0,width:"100%",height:"100%"};function Cm(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function cx(e){return e.tag==="g"?e.children:[e]}var fx={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?dl(i.split(" ").map(function(s){return s.trim()})):Fd();return o.prefix||(o.prefix=Rn()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.mask,a=n.maskId,l=n.transform,u=o.width,c=o.icon,f=s.width,d=s.icon,g=uE({transform:l,containerWidth:f,iconWidth:u}),y={tag:"rect",attributes:C(C({},Tu),{},{fill:"white"})},w=c.children?{children:c.children.map(Cm)}:{},x={tag:"g",attributes:C({},g.inner),children:[Cm(C({tag:c.tag,attributes:C(C({},c.attributes),g.path)},w))]},p={tag:"g",attributes:C({},g.outer),children:[x]},h="mask-".concat(a||_o()),m="clip-".concat(a||_o()),_={tag:"mask",attributes:C(C({},Tu),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,p]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:cx(d)},_]};return r.push(E,{tag:"rect",attributes:C({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(h,")")},Tu)}),{children:r,attributes:i}}}},dx={provides:function(t){var n=!1;Nn.matchMedia&&(n=Nn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:C(C({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=C(C({},o),{},{attributeName:"opacity"}),a={tag:"circle",attributes:C(C({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:C(C({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:C(C({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:C(C({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:C(C({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:C(C({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:C(C({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},hx={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},px=[dE,ZE,ex,tx,nx,ax,lx,ux,fx,dx,hx];IE(px,{mixoutsTo:tt});tt.noAuto;tt.config;tt.library;tt.dom;var rf=tt.parse;tt.findIconDefinition;tt.toHtml;var mx=tt.icon;tt.layer;tt.text;tt.counter;var U={exports:{}},gx="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",vx=gx,yx=vx;function Y0(){}function q0(){}q0.resetWarningCache=Y0;var wx=function(){function e(r,i,o,s,a,l){if(l!==yx){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:q0,resetWarningCache:Y0};return n.PropTypes=n,n};U.exports=wx();function Om(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function wn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Om(Object(n),!0).forEach(function(r){zr(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Om(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ia(e){return Ia=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ia(e)}function zr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _x(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function kx(e,t){if(e==null)return{};var n=_x(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function of(e){return Sx(e)||Ex(e)||xx(e)||bx()}function Sx(e){if(Array.isArray(e))return sf(e)}function Ex(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function xx(e,t){if(!!e){if(typeof e=="string")return sf(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return sf(e,t)}}function sf(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function bx(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Tx(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,s=e.shake,a=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,f=e.pulse,d=e.fixedWidth,g=e.inverse,y=e.border,w=e.listItem,x=e.flip,p=e.size,h=e.rotation,m=e.pull,_=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":d,"fa-inverse":g,"fa-border":y,"fa-li":w,"fa-flip":x===!0,"fa-flip-horizontal":x==="horizontal"||x==="both","fa-flip-vertical":x==="vertical"||x==="both"},zr(t,"fa-".concat(p),typeof p<"u"&&p!==null),zr(t,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),zr(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),zr(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(_).map(function(E){return _[E]?E:null}).filter(function(E){return E})}function Ix(e){return e=e-0,e===e}function X0(e){return Ix(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var Cx=["style"];function Ox(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Px(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=X0(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[Ox(i)]=o:t[i]=o,t},{})}function Q0(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return Q0(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=Px(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[X0(u)]=c}return l},{attrs:{}}),o=n.style,s=o===void 0?{}:o,a=kx(n,Cx);return i.attrs.style=wn(wn({},i.attrs.style),s),e.apply(void 0,[t.tag,wn(wn({},i.attrs),a)].concat(of(r)))}var J0=!1;try{J0=!0}catch{}function Ax(){if(!J0&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Pm(e){if(e&&Ia(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(rf.icon)return rf.icon(e);if(e===null)return null;if(e&&Ia(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Iu(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?zr({},e,t):{}}var Je=cv.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,o=e.className,s=e.title,a=e.titleId,l=e.maskId,u=Pm(n),c=Iu("classes",[].concat(of(Tx(e)),of(o.split(" ")))),f=Iu("transform",typeof e.transform=="string"?rf.transform(e.transform):e.transform),d=Iu("mask",Pm(r)),g=mx(u,wn(wn(wn(wn({},c),f),d),{},{symbol:i,title:s,titleId:a,maskId:l}));if(!g)return Ax("Could not find icon",u),null;var y=g.abstract,w={ref:t};return Object.keys(e).forEach(function(x){Je.defaultProps.hasOwnProperty(x)||(w[x]=e[x])}),Nx(y[0],w)});Je.displayName="FontAwesomeIcon";Je.propTypes={beat:U.exports.bool,border:U.exports.bool,beatFade:U.exports.bool,bounce:U.exports.bool,className:U.exports.string,fade:U.exports.bool,flash:U.exports.bool,mask:U.exports.oneOfType([U.exports.object,U.exports.array,U.exports.string]),maskId:U.exports.string,fixedWidth:U.exports.bool,inverse:U.exports.bool,flip:U.exports.oneOf([!0,!1,"horizontal","vertical","both"]),icon:U.exports.oneOfType([U.exports.object,U.exports.array,U.exports.string]),listItem:U.exports.bool,pull:U.exports.oneOf(["right","left"]),pulse:U.exports.bool,rotation:U.exports.oneOf([0,90,180,270]),shake:U.exports.bool,size:U.exports.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:U.exports.bool,spinPulse:U.exports.bool,spinReverse:U.exports.bool,symbol:U.exports.oneOfType([U.exports.bool,U.exports.string]),title:U.exports.string,titleId:U.exports.string,transform:U.exports.oneOfType([U.exports.string,U.exports.object]),swapOpacity:U.exports.bool};Je.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Nx=Q0.bind(null,cv.createElement);const Rx=({handleDarkMode:e,darkMode:t})=>v("button",{onClick:e,children:v(Je,{className:"text-lg dark:text-slate-100 text-stone-800",icon:t?NS:$S})});/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var $x={prefix:"fas",iconName:"arrow-right-to-bracket",icon:[512,512,["sign-in"],"f090","M416 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c17.67 0 32 14.33 32 32v256c0 17.67-14.33 32-32 32h-64c-17.67 0-32 14.33-32 32s14.33 32 32 32h64c53.02 0 96-42.98 96-96V128C512 74.98 469 32 416 32zM342.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L242.8 224H32C14.31 224 0 238.3 0 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C355.1 266.1 355.1 245.9 342.6 233.4z"]},Lx=$x,Dx={prefix:"fas",iconName:"filter",icon:[512,512,[],"f0b0","M3.853 54.87C10.47 40.9 24.54 32 40 32H472C487.5 32 501.5 40.9 508.1 54.87C514.8 68.84 512.7 85.37 502.1 97.33L320 320.9V448C320 460.1 313.2 471.2 302.3 476.6C291.5 482 278.5 480.9 268.8 473.6L204.8 425.6C196.7 419.6 192 410.1 192 400V320.9L9.042 97.33C-.745 85.37-2.765 68.84 3.854 54.87L3.853 54.87z"]},Mx={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,10084,61578,9829],"f004","M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"]},jx={prefix:"fas",iconName:"user-large",icon:[512,512,["user-alt"],"f406","M256 288c79.53 0 144-64.47 144-144s-64.47-144-144-144c-79.52 0-144 64.47-144 144S176.5 288 256 288zM351.1 320H160c-88.36 0-160 71.63-160 160c0 17.67 14.33 32 31.1 32H480c17.67 0 31.1-14.33 31.1-32C512 391.6 440.4 320 351.1 320z"]},Fx=jx;/**
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
 */const Z0=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Ux=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},e1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=o>>2,f=(o&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;l||(g=64,s||(d=64)),r.push(n[c],n[f],n[d],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Z0(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ux(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||f==null)throw Error();const d=o<<2|a>>4;if(r.push(d),u!==64){const g=a<<4&240|u>>2;if(r.push(g),f!==64){const y=u<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},zx=function(e){const t=Z0(e);return e1.encodeByteArray(t,!0)},t1=function(e){return zx(e).replace(/\./g,"")},Bx=function(e){try{return e1.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */class Hx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Oe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oe())}function Wx(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Gx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Kx(){const e=Oe();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Yx(){return typeof indexedDB=="object"}function qx(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}/**
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
 */const Xx="FirebaseError";class $t extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Xx,Object.setPrototypeOf(this,$t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bo.prototype.create)}}class Bo{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?Qx(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new $t(i,a,r)}}function Qx(e,t){return e.replace(Jx,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Jx=/\{\$([^}]+)}/g;function Zx(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ca(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(Am(o)&&Am(s)){if(!Ca(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Am(e){return e!==null&&typeof e=="object"}/**
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
 */function Ho(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function eb(e,t){const n=new tb(e,t);return n.subscribe.bind(n)}class tb{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");nb(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=Cu),i.error===void 0&&(i.error=Cu),i.complete===void 0&&(i.complete=Cu);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nb(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function Cu(){}/**
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
 */function Vo(e){return e&&e._delegate?e._delegate:e}class $n{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Yn="[DEFAULT]";/**
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
 */class rb{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Hx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ob(t))try{this.getOrInitializeService({instanceIdentifier:Yn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Yn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Yn){return this.instances.has(t)}getOptions(t=Yn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ib(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Yn){return this.component?this.component.multipleInstances?t:Yn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ib(e){return e===Yn?void 0:e}function ob(e){return e.instantiationMode==="EAGER"}/**
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
 */class sb{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new rb(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(K||(K={}));const ab={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},lb=K.INFO,ub={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},cb=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=ub[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Hd{constructor(t){this.name=t,this._logLevel=lb,this._logHandler=cb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in K))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ab[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...t),this._logHandler(this,K.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...t),this._logHandler(this,K.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,K.INFO,...t),this._logHandler(this,K.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,K.WARN,...t),this._logHandler(this,K.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...t),this._logHandler(this,K.ERROR,...t)}}const fb=(e,t)=>t.some(n=>e instanceof n);let Nm,Rm;function db(){return Nm||(Nm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hb(){return Rm||(Rm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const n1=new WeakMap,af=new WeakMap,r1=new WeakMap,Ou=new WeakMap,Vd=new WeakMap;function pb(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",o),e.removeEventListener("error",s)},o=()=>{n(On(e.result)),i()},s=()=>{r(e.error),i()};e.addEventListener("success",o),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&n1.set(n,e)}).catch(()=>{}),Vd.set(t,e),t}function mb(e){if(af.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",s),e.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",o),e.addEventListener("error",s),e.addEventListener("abort",s)});af.set(e,t)}let lf={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return af.get(e);if(t==="objectStoreNames")return e.objectStoreNames||r1.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return On(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function gb(e){lf=e(lf)}function vb(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Pu(this),t,...n);return r1.set(r,t.sort?t.sort():[t]),On(r)}:hb().includes(e)?function(...t){return e.apply(Pu(this),t),On(n1.get(this))}:function(...t){return On(e.apply(Pu(this),t))}}function yb(e){return typeof e=="function"?vb(e):(e instanceof IDBTransaction&&mb(e),fb(e,db())?new Proxy(e,lf):e)}function On(e){if(e instanceof IDBRequest)return pb(e);if(Ou.has(e))return Ou.get(e);const t=yb(e);return t!==e&&(Ou.set(e,t),Vd.set(t,e)),t}const Pu=e=>Vd.get(e);function wb(e,t,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(e,t),a=On(s);return r&&s.addEventListener("upgradeneeded",l=>{r(On(s.result),l.oldVersion,l.newVersion,On(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const _b=["get","getKey","getAll","getAllKeys","count"],kb=["put","add","delete","clear"],Au=new Map;function $m(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Au.get(t))return Au.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=kb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||_b.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Au.set(t,o),o}gb(e=>({...e,get:(t,n,r)=>$m(t,n)||e.get(t,n,r),has:(t,n)=>!!$m(t,n)||e.has(t,n)}));/**
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
 */class Sb{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Eb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Eb(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const uf="@firebase/app",Lm="0.7.30";/**
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
 */const pr=new Hd("@firebase/app"),xb="@firebase/app-compat",bb="@firebase/analytics-compat",Tb="@firebase/analytics",Ib="@firebase/app-check-compat",Cb="@firebase/app-check",Ob="@firebase/auth",Pb="@firebase/auth-compat",Ab="@firebase/database",Nb="@firebase/database-compat",Rb="@firebase/functions",$b="@firebase/functions-compat",Lb="@firebase/installations",Db="@firebase/installations-compat",Mb="@firebase/messaging",jb="@firebase/messaging-compat",Fb="@firebase/performance",Ub="@firebase/performance-compat",zb="@firebase/remote-config",Bb="@firebase/remote-config-compat",Hb="@firebase/storage",Vb="@firebase/storage-compat",Wb="@firebase/firestore",Gb="@firebase/firestore-compat",Kb="firebase",Yb="9.9.2";/**
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
 */const i1="[DEFAULT]",qb={[uf]:"fire-core",[xb]:"fire-core-compat",[Tb]:"fire-analytics",[bb]:"fire-analytics-compat",[Cb]:"fire-app-check",[Ib]:"fire-app-check-compat",[Ob]:"fire-auth",[Pb]:"fire-auth-compat",[Ab]:"fire-rtdb",[Nb]:"fire-rtdb-compat",[Rb]:"fire-fn",[$b]:"fire-fn-compat",[Lb]:"fire-iid",[Db]:"fire-iid-compat",[Mb]:"fire-fcm",[jb]:"fire-fcm-compat",[Fb]:"fire-perf",[Ub]:"fire-perf-compat",[zb]:"fire-rc",[Bb]:"fire-rc-compat",[Hb]:"fire-gcs",[Vb]:"fire-gcs-compat",[Wb]:"fire-fst",[Gb]:"fire-fst-compat","fire-js":"fire-js",[Kb]:"fire-js-all"};/**
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
 */const Oa=new Map,cf=new Map;function Xb(e,t){try{e.container.addComponent(t)}catch(n){pr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function mr(e){const t=e.name;if(cf.has(t))return pr.debug(`There were multiple attempts to register component ${t}.`),!1;cf.set(t,e);for(const n of Oa.values())Xb(n,e);return!0}function pl(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Qb={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gr=new Bo("app","Firebase",Qb);/**
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
 */class Jb{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw gr.create("app-deleted",{appName:this._name})}}/**
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
 */const mi=Yb;function Zb(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:i1,automaticDataCollectionEnabled:!1},t),r=n.name;if(typeof r!="string"||!r)throw gr.create("bad-app-name",{appName:String(r)});const i=Oa.get(r);if(i){if(Ca(e,i.options)&&Ca(n,i.config))return i;throw gr.create("duplicate-app",{appName:r})}const o=new sb(r);for(const a of cf.values())o.addComponent(a);const s=new Jb(e,n,o);return Oa.set(r,s),s}function Wd(e=i1){const t=Oa.get(e);if(!t)throw gr.create("no-app",{appName:e});return t}function At(e,t,n){var r;let i=(r=qb[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),pr.warn(a.join(" "));return}mr(new $n(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const eT="firebase-heartbeat-database",tT=1,ko="firebase-heartbeat-store";let Nu=null;function o1(){return Nu||(Nu=wb(eT,tT,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ko)}}}).catch(e=>{throw gr.create("idb-open",{originalErrorMessage:e.message})})),Nu}async function nT(e){var t;try{return(await o1()).transaction(ko).objectStore(ko).get(s1(e))}catch(n){if(n instanceof $t)pr.warn(n.message);else{const r=gr.create("idb-get",{originalErrorMessage:(t=n)===null||t===void 0?void 0:t.message});pr.warn(r.message)}}}async function Dm(e,t){var n;try{const i=(await o1()).transaction(ko,"readwrite");return await i.objectStore(ko).put(t,s1(e)),i.done}catch(r){if(r instanceof $t)pr.warn(r.message);else{const i=gr.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});pr.warn(i.message)}}}function s1(e){return`${e.name}!${e.options.appId}`}/**
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
 */const rT=1024,iT=30*24*60*60*1e3;class oT{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new aT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Mm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=iT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Mm(),{heartbeatsToSend:n,unsentEntries:r}=sT(this._heartbeatsCache.heartbeats),i=t1(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Mm(){return new Date().toISOString().substring(0,10)}function sT(e,t=rT){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),jm(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),jm(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class aT{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yx()?qx().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await nT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dm(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dm(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function jm(e){return t1(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function lT(e){mr(new $n("platform-logger",t=>new Sb(t),"PRIVATE")),mr(new $n("heartbeat",t=>new oT(t),"PRIVATE")),At(uf,Lm,e),At(uf,Lm,"esm2017"),At("fire-js","")}lT("");var uT="firebase",cT="9.9.2";/**
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
 */At(uT,cT,"app");function Gd(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function a1(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fT=a1,l1=new Bo("auth","Firebase",a1());/**
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
 */const Fm=new Hd("@firebase/auth");function Ks(e,...t){Fm.logLevel<=K.ERROR&&Fm.error(`Auth (${mi}): ${e}`,...t)}/**
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
 */function Jt(e,...t){throw Kd(e,...t)}function Nt(e,...t){return Kd(e,...t)}function dT(e,t,n){const r=Object.assign(Object.assign({},fT()),{[t]:n});return new Bo("auth","Firebase",r).create(t,{appName:e.name})}function Kd(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l1.create(e,...t)}function M(e,t,...n){if(!e)throw Kd(t,...n)}function zt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ks(t),new Error(t)}function Zt(e,t){e||zt(t)}/**
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
 */const Um=new Map;function Bt(e){Zt(e instanceof Function,"Expected a class definition");let t=Um.get(e);return t?(Zt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Um.set(e,t),t)}/**
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
 */function hT(e,t){const n=pl(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(Ca(o,t!=null?t:{}))return i;Jt(i,"already-initialized")}return n.initialize({options:t})}function pT(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Bt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
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
 */function ff(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function mT(){return zm()==="http:"||zm()==="https:"}function zm(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function gT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mT()||Wx()||"connection"in navigator)?navigator.onLine:!0}function vT(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class Wo{constructor(t,n){this.shortDelay=t,this.longDelay=n,Zt(n>t,"Short delay should be less than long delay!"),this.isMobile=Vx()||Gx()}get(){return gT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Yd(e,t){Zt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
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
 */class u1{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const yT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const wT=new Wo(3e4,6e4);function _T(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ml(e,t,n,r,i={}){return c1(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=Ho(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),u1.fetch()(f1(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function c1(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},yT),t);try{const i=new ST(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Is(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Is(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Is(e,"email-already-in-use",s);if(l==="USER_DISABLED")throw Is(e,"user-disabled",s);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw dT(e,c,u);Jt(e,c)}}catch(i){if(i instanceof $t)throw i;Jt(e,"network-request-failed")}}async function kT(e,t,n,r,i={}){const o=await ml(e,t,n,r,i);return"mfaPendingCredential"in o&&Jt(e,"multi-factor-auth-required",{_serverResponse:o}),o}function f1(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Yd(e.config,i):`${e.config.apiScheme}://${i}`}class ST{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Nt(this.auth,"network-request-failed")),wT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Is(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Nt(e,t,r);return i.customData._tokenResponse=n,i}/**
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
 */async function ET(e,t){return ml(e,"POST","/v1/accounts:delete",t)}async function xT(e,t){return ml(e,"POST","/v1/accounts:lookup",t)}/**
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
 */function Xi(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function bT(e,t=!1){const n=Vo(e),r=await n.getIdToken(t),i=qd(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Xi(Ru(i.auth_time)),issuedAtTime:Xi(Ru(i.iat)),expirationTime:Xi(Ru(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Ru(e){return Number(e)*1e3}function qd(e){var t;const[n,r,i]=e.split(".");if(n===void 0||r===void 0||i===void 0)return Ks("JWT malformed, contained fewer than 3 sections"),null;try{const o=Bx(r);return o?JSON.parse(o):(Ks("Failed to decode base64 JWT payload"),null)}catch(o){return Ks("Caught error parsing JWT payload as JSON",(t=o)===null||t===void 0?void 0:t.toString()),null}}function TT(e){const t=qd(e);return M(t,"internal-error"),M(typeof t.exp<"u","internal-error"),M(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
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
 */async function So(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof $t&&IT(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function IT({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class CT{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var t;try{await this.user.getIdToken(!0)}catch(n){((t=n)===null||t===void 0?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class d1{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xi(this.lastLoginAt),this.creationTime=Xi(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Pa(e){var t;const n=e.auth,r=await e.getIdToken(),i=await So(e,xT(n,{idToken:r}));M(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=!((t=o.providerUserInfo)===null||t===void 0)&&t.length?AT(o.providerUserInfo):[],a=PT(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new d1(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(e,f)}async function OT(e){const t=Vo(e);await Pa(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function PT(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function AT(e){return e.map(t=>{var{providerId:n}=t,r=Gd(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function NT(e,t){const n=await c1(e,{},async()=>{const r=Ho({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=f1(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",u1.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Eo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){M(t.idToken,"internal-error"),M(typeof t.idToken<"u","internal-error"),M(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):TT(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return M(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await NT(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Eo;return r&&(M(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(M(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Eo,this.toJSON())}_performRefresh(){return zt("not implemented")}}/**
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
 */function ln(e,t){M(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class or{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=Gd(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new CT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new d1(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await So(this,this.stsTokenManager.getToken(this.auth,t));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return bT(this,t)}reload(){return OT(this)}_assign(t){this!==t&&(M(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new or(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Pa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await So(this,ET(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,y=(s=n.photoURL)!==null&&s!==void 0?s:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:_,isAnonymous:E,providerData:I,stsTokenManager:S}=n;M(m&&S,t,"internal-error");const b=Eo.fromJSON(this.name,S);M(typeof m=="string",t,"internal-error"),ln(f,t.name),ln(d,t.name),M(typeof _=="boolean",t,"internal-error"),M(typeof E=="boolean",t,"internal-error"),ln(g,t.name),ln(y,t.name),ln(w,t.name),ln(x,t.name),ln(p,t.name),ln(h,t.name);const L=new or({uid:m,auth:t,email:d,emailVerified:_,displayName:f,isAnonymous:E,photoURL:y,phoneNumber:g,tenantId:w,stsTokenManager:b,createdAt:p,lastLoginAt:h});return I&&Array.isArray(I)&&(L.providerData=I.map(N=>Object.assign({},N))),x&&(L._redirectEventId=x),L}static async _fromIdTokenResponse(t,n,r=!1){const i=new Eo;i.updateFromServerResponse(n);const o=new or({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Pa(o),o}}/**
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
 */class h1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}h1.type="NONE";const Bm=h1;/**
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
 */function Ys(e,t,n){return`firebase:${e}:${t}:${n}`}class Qr{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Ys(this.userKey,i.apiKey,o),this.fullPersistenceKey=Ys("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?or._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Qr(Bt(Bm),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Bt(Bm);const s=Ys(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(s);if(c){const f=or._fromJSON(t,c);u!==o&&(a=f),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Qr(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Qr(o,t,r))}}/**
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
 */function Hm(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(g1(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(p1(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(y1(t))return"Blackberry";if(w1(t))return"Webos";if(Xd(t))return"Safari";if((t.includes("chrome/")||m1(t))&&!t.includes("edge/"))return"Chrome";if(v1(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function p1(e=Oe()){return/firefox\//i.test(e)}function Xd(e=Oe()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function m1(e=Oe()){return/crios\//i.test(e)}function g1(e=Oe()){return/iemobile/i.test(e)}function v1(e=Oe()){return/android/i.test(e)}function y1(e=Oe()){return/blackberry/i.test(e)}function w1(e=Oe()){return/webos/i.test(e)}function gl(e=Oe()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function RT(e=Oe()){var t;return gl(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function $T(){return Kx()&&document.documentMode===10}function _1(e=Oe()){return gl(e)||v1(e)||w1(e)||y1(e)||/windows phone/i.test(e)||g1(e)}function LT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function k1(e,t=[]){let n;switch(e){case"Browser":n=Hm(Oe());break;case"Worker":n=`${Hm(Oe())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${mi}/${r}`}/**
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
 */class DT{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=o=>new Promise((s,a)=>{try{const l=t(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){var n;if(this.auth.currentUser===t)return;const r=[];try{for(const i of this.queue)await i(t),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const o of r)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class MT{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vm(this),this.idTokenSubscription=new Vm(this),this.beforeStateQueue=new DT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l1,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Bt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Qr.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!s||s===a)&&(l==null?void 0:l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){var n;try{await Pa(t)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=vT()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Vo(t):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&M(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Bt(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Bo("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Bt(t)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await Qr.create(this,[Bt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return M(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=k1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function S1(e){return Vo(e)}class Vm{constructor(t){this.auth=t,this.observer=null,this.addObserver=eb(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class E1{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return zt("not implemented")}_getIdTokenResponse(t){return zt("not implemented")}_linkToIdToken(t,n){return zt("not implemented")}_getReauthenticationResolver(t){return zt("not implemented")}}/**
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
 */async function Jr(e,t){return kT(e,"POST","/v1/accounts:signInWithIdp",_T(e,t))}/**
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
 */const jT="http://localhost";class vr extends E1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new vr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=Gd(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new vr(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return Jr(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Jr(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Jr(t,n)}buildRequest(){const t={requestUri:jT,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ho(n)}return t}}/**
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
 */class x1{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Go extends x1{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
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
 */class hn extends Go{constructor(){super("facebook.com")}static credential(t){return vr._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return hn.credentialFromTaggedObject(t)}static credentialFromError(t){return hn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return hn.credential(t.oauthAccessToken)}catch{return null}}}hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";hn.PROVIDER_ID="facebook.com";/**
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
 */class pn extends Go{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return vr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return pn.credentialFromTaggedObject(t)}static credentialFromError(t){return pn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return pn.credential(n,r)}catch{return null}}}pn.GOOGLE_SIGN_IN_METHOD="google.com";pn.PROVIDER_ID="google.com";/**
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
 */class mn extends Go{constructor(){super("github.com")}static credential(t){return vr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return mn.credentialFromTaggedObject(t)}static credentialFromError(t){return mn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return mn.credential(t.oauthAccessToken)}catch{return null}}}mn.GITHUB_SIGN_IN_METHOD="github.com";mn.PROVIDER_ID="github.com";/**
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
 */class gn extends Go{constructor(){super("twitter.com")}static credential(t,n){return vr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return gn.credentialFromTaggedObject(t)}static credentialFromError(t){return gn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return gn.credential(n,r)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
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
 */class ai{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await or._fromIdTokenResponse(t,r,i),s=Wm(r);return new ai({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Wm(r);return new ai({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Wm(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class Aa extends $t{constructor(t,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Aa.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Aa(t,n,r,i)}}function b1(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Aa._fromErrorAndOperation(e,o,t,r):o})}async function FT(e,t,n=!1){const r=await So(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ai._forOperation(e,"link",r)}/**
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
 */async function UT(e,t,n=!1){var r;const{auth:i}=e,o="reauthenticate";try{const s=await So(e,b1(i,o,t,e),n);M(s.idToken,i,"internal-error");const a=qd(s.idToken);M(a,i,"internal-error");const{sub:l}=a;return M(e.uid===l,i,"user-mismatch"),ai._forOperation(e,o,s)}catch(s){throw((r=s)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Jt(i,"user-mismatch"),s}}/**
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
 */async function zT(e,t,n=!1){const r="signIn",i=await b1(e,r,t),o=await ai._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}const Na="__sak";/**
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
 */class T1{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Na,"1"),this.storage.removeItem(Na),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function BT(){const e=Oe();return Xd(e)||gl(e)}const HT=1e3,VT=10;class I1 extends T1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=BT()&&LT(),this.fallbackToPolling=_1(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);$T()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,VT):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},HT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}I1.type="LOCAL";const WT=I1;/**
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
 */class C1 extends T1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}C1.type="SESSION";const O1=C1;/**
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
 */function GT(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class vl{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new vl(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await GT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vl.receivers=[];/**
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
 */function Qd(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class KT{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Qd("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(d.data.response);break;default:clearTimeout(c),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function Rt(){return window}function YT(e){Rt().location.href=e}/**
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
 */function P1(){return typeof Rt().WorkerGlobalScope<"u"&&typeof Rt().importScripts=="function"}async function qT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function XT(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function QT(){return P1()?self:null}/**
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
 */const A1="firebaseLocalStorageDb",JT=1,Ra="firebaseLocalStorage",N1="fbase_key";class Ko{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function yl(e,t){return e.transaction([Ra],t?"readwrite":"readonly").objectStore(Ra)}function ZT(){const e=indexedDB.deleteDatabase(A1);return new Ko(e).toPromise()}function df(){const e=indexedDB.open(A1,JT);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Ra,{keyPath:N1})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Ra)?t(r):(r.close(),await ZT(),t(await df()))})})}async function Gm(e,t,n){const r=yl(e,!0).put({[N1]:t,value:n});return new Ko(r).toPromise()}async function eI(e,t){const n=yl(e,!1).get(t),r=await new Ko(n).toPromise();return r===void 0?null:r.value}function Km(e,t){const n=yl(e,!0).delete(t);return new Ko(n).toPromise()}const tI=800,nI=3;class R1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await df(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>nI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return P1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vl._getInstance(QT()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await qT(),!this.activeServiceWorker)return;this.sender=new KT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||XT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await df();return await Gm(t,Na,"1"),await Km(t,Na),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Gm(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>eI(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Km(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=yl(i,!1).getAll();return new Ko(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}R1.type="LOCAL";const rI=R1;/**
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
 */function iI(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function oI(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=Nt("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",iI().appendChild(r)})}function sI(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new Wo(3e4,6e4);/**
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
 */function aI(e,t){return t?Bt(t):(M(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class Jd extends E1{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Jr(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Jr(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Jr(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function lI(e){return zT(e.auth,new Jd(e),e.bypassAuthState)}function uI(e){const{auth:t,user:n}=e;return M(n,t,"internal-error"),UT(n,new Jd(e),e.bypassAuthState)}async function cI(e){const{auth:t,user:n}=e;return M(n,t,"internal-error"),FT(n,new Jd(e),e.bypassAuthState)}/**
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
 */class $1{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return lI;case"linkViaPopup":case"linkViaRedirect":return cI;case"reauthViaPopup":case"reauthViaRedirect":return uI;default:Jt(this.auth,"internal-error")}}resolve(t){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const fI=new Wo(2e3,1e4);class Br extends $1{constructor(t,n,r,i,o){super(t,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Br.currentPopupAction&&Br.currentPopupAction.cancel(),Br.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return M(t,this.auth,"internal-error"),t}async onExecution(){Zt(this.filter.length===1,"Popup operations only handle one event");const t=Qd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Br.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Nt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,fI.get())};t()}}Br.currentPopupAction=null;/**
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
 */const dI="pendingRedirect",qs=new Map;class hI extends $1{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=qs.get(this.auth._key());if(!t){try{const r=await pI(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}qs.set(this.auth._key(),t)}return this.bypassAuthState||qs.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function pI(e,t){const n=vI(t),r=gI(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function mI(e,t){qs.set(e._key(),t)}function gI(e){return Bt(e._redirectPersistence)}function vI(e){return Ys(dI,e.config.apiKey,e.name)}async function yI(e,t,n=!1){const r=S1(e),i=aI(r,t),s=await new hI(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
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
 */const wI=10*60*1e3;class _I{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!kI(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!L1(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Nt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=wI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ym(t))}saveEventToCache(t){this.cachedEventUids.add(Ym(t)),this.lastProcessedEventTime=Date.now()}}function Ym(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function L1({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function kI(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return L1(e);default:return!1}}/**
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
 */async function SI(e,t={}){return ml(e,"GET","/v1/projects",t)}/**
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
 */const EI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xI=/^https?/;async function bI(e){if(e.config.emulator)return;const{authorizedDomains:t}=await SI(e);for(const n of t)try{if(TI(n))return}catch{}Jt(e,"unauthorized-domain")}function TI(e){const t=ff(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!xI.test(n))return!1;if(EI.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const II=new Wo(3e4,6e4);function qm(){const e=Rt().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function CI(e){return new Promise((t,n)=>{var r,i,o;function s(){qm(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{qm(),n(Nt(e,"network-request-failed"))},timeout:II.get()})}if(!((i=(r=Rt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((o=Rt().gapi)===null||o===void 0)&&o.load)s();else{const a=sI("iframefcb");return Rt()[a]=()=>{gapi.load?s():n(Nt(e,"network-request-failed"))},oI(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw Xs=null,t})}let Xs=null;function OI(e){return Xs=Xs||CI(e),Xs}/**
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
 */const PI=new Wo(5e3,15e3),AI="__/auth/iframe",NI="emulator/auth/iframe",RI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$I=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function LI(e){const t=e.config;M(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Yd(t,NI):`https://${e.config.authDomain}/${AI}`,r={apiKey:t.apiKey,appName:e.name,v:mi},i=$I.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Ho(r).slice(1)}`}async function DI(e){const t=await OI(e),n=Rt().gapi;return M(n,e,"internal-error"),t.open({where:document.body,url:LI(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RI,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Nt(e,"network-request-failed"),a=Rt().setTimeout(()=>{o(s)},PI.get());function l(){Rt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const MI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jI=500,FI=600,UI="_blank",zI="http://localhost";class Xm{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BI(e,t,n,r=jI,i=FI){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},MI),{width:r.toString(),height:i.toString(),top:o,left:s}),u=Oe().toLowerCase();n&&(a=m1(u)?UI:n),p1(u)&&(t=t||zI,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[g,y])=>`${d}${g}=${y},`,"");if(RT(u)&&a!=="_self")return HI(t||"",a),new Xm(null);const f=window.open(t||"",a,c);M(f,e,"popup-blocked");try{f.focus()}catch{}return new Xm(f)}function HI(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const VI="__/auth/handler",WI="emulator/auth/handler";function Qm(e,t,n,r,i,o){M(e.config.authDomain,e,"auth-domain-config-required"),M(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:mi,eventId:i};if(t instanceof x1){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",Zx(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))s[l]=u}if(t instanceof Go){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${GI(e)}?${Ho(a).slice(1)}`}function GI({config:e}){return e.emulator?Yd(e,WI):`https://${e.authDomain}/${VI}`}/**
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
 */const $u="webStorageSupport";class KI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=O1,this._completeRedirectFn=yI,this._overrideRedirectResult=mI}async _openPopup(t,n,r,i){var o;Zt((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=Qm(t,n,r,ff(),i);return BI(t,s,Qd())}async _openRedirect(t,n,r,i){return await this._originValidation(t),YT(Qm(t,n,r,ff(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Zt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await DI(t),r=new _I(t);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send($u,{type:$u},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[$u];s!==void 0&&n(!!s),Jt(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bI(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return _1()||Xd()||gl()}}const YI=KI;var Jm="@firebase/auth",Zm="0.20.5";/**
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
 */class qI{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{var i;t(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function XI(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function QI(e){mr(new $n("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{M(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),M(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const u={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:k1(e)},c=new MT(a,l,u);return pT(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),mr(new $n("auth-internal",t=>{const n=S1(t.getProvider("auth").getImmediate());return(r=>new qI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),At(Jm,Zm,XI(e)),At(Jm,Zm,"esm2017")}/**
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
 */function JI(e=Wd()){const t=pl(e,"auth");return t.isInitialized()?t.getImmediate():hT(e,{popupRedirectResolver:YI,persistence:[rI,WT,O1]})}QI("Browser");/**
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
 */const D1="firebasestorage.googleapis.com",ZI="storageBucket",eC=2*60*1e3,tC=10*60*1e3;/**
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
 */class Lt extends $t{constructor(t,n){super(Lu(t),`Firebase Storage: ${n} (${Lu(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Lt.prototype)}_codeEquals(t){return Lu(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Lu(e){return"storage/"+e}function nC(){const e="An unknown error occurred, please check the error payload for server response.";return new Lt("unknown",e)}function rC(){return new Lt("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function iC(){return new Lt("canceled","User canceled the upload/download.")}function oC(e){return new Lt("invalid-url","Invalid URL '"+e+"'.")}function sC(e){return new Lt("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function eg(e){return new Lt("invalid-argument",e)}function M1(){return new Lt("app-deleted","The Firebase app was deleted.")}function aC(e){return new Lt("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class gt{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=gt.makeFromUrl(t,n)}catch{return new gt(t,"")}if(r.path==="")return r;throw sC(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function o(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+i+s,"i"),l={bucket:1,path:3};function u(_){_.path_=decodeURIComponent(_.path)}const c="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${c}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},w=n===D1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,x="([^?#]*)",p=new RegExp(`^https?://${w}/${i}/${x}`,"i"),m=[{regex:a,indices:l,postModify:o},{regex:g,indices:y,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let _=0;_<m.length;_++){const E=m[_],I=E.regex.exec(t);if(I){const S=I[E.indices.bucket];let b=I[E.indices.path];b||(b=""),r=new gt(S,b),E.postModify(r);break}}if(r==null)throw oC(t);return r}}class lC{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
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
 */function uC(e,t,n){let r=1,i=null,o=null,s=!1,a=0;function l(){return a===2}let u=!1;function c(...x){u||(u=!0,t.apply(null,x))}function f(x){i=setTimeout(()=>{i=null,e(g,l())},x)}function d(){o&&clearTimeout(o)}function g(x,...p){if(u){d();return}if(x){d(),c.call(null,x,...p);return}if(l()||s){d(),c.call(null,x,...p);return}r<64&&(r*=2);let m;a===1?(a=2,m=0):m=(r+Math.random())*1e3,f(m)}let y=!1;function w(x){y||(y=!0,d(),!u&&(i!==null?(x||(a=2),clearTimeout(i),f(0)):x||(a=1)))}return f(0),o=setTimeout(()=>{s=!0,w(!0)},n),w}function cC(e){e(!1)}/**
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
 */function fC(e){return e!==void 0}function tg(e,t,n,r){if(r<t)throw eg(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw eg(`Invalid value for '${e}'. Expected ${n} or less.`)}function dC(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var $a;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})($a||($a={}));/**
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
 */class hC{constructor(t,n,r,i,o,s,a,l,u,c,f){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=o,this.additionalRetryCodes_=s,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,g)=>{this.resolve_=d,this.reject_=g,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new Cs(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const s=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&o.addUploadProgressListener(s),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(s),this.pendingConnection_=null;const a=o.getErrorCode()===$a.NO_ERROR,l=o.getStatus();if(!a||this.isRetryStatusCode_(l)){const c=o.getErrorCode()===$a.ABORT;r(!1,new Cs(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Cs(u,o))})},n=(r,i)=>{const o=this.resolve_,s=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());fC(l)?o(l):o()}catch(l){s(l)}else if(a!==null){const l=nC();l.serverResponse=a.getErrorText(),this.errorCallback_?s(this.errorCallback_(a,l)):s(l)}else if(i.canceled){const l=this.appDelete_?M1():iC();s(l)}else{const l=rC();s(l)}};this.canceled_?n(!1,new Cs(!1,null,!0)):this.backoffId_=uC(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&cC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,o=this.additionalRetryCodes_.indexOf(t)!==-1;return n||i||o}}class Cs{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function pC(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function mC(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t!=null?t:"AppManager")}function gC(e,t){t&&(e["X-Firebase-GMPID"]=t)}function vC(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function yC(e,t,n,r,i,o){const s=dC(e.urlParams),a=e.url+s,l=Object.assign({},e.headers);return gC(l,t),pC(l,n),mC(l,o),vC(l,r),new hC(a,e.method,l,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i)}/**
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
 */function wC(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function _C(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
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
 */class La{constructor(t,n){this._service=t,n instanceof gt?this._location=n:this._location=gt.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new La(t,n)}get root(){const t=new gt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _C(this._location.path)}get storage(){return this._service}get parent(){const t=wC(this._location.path);if(t===null)return null;const n=new gt(this._location.bucket,t);return new La(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw aC(t)}}function ng(e,t){const n=t==null?void 0:t[ZI];return n==null?null:gt.makeFromBucketSpec(n,e)}class kC{constructor(t,n,r,i,o){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=D1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=eC,this._maxUploadRetryTime=tC,this._requests=new Set,i!=null?this._bucket=gt.makeFromBucketSpec(i,this._host):this._bucket=ng(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=gt.makeFromBucketSpec(this._url,t):this._bucket=ng(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){tg("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){tg("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new La(this,t)}_makeRequest(t,n,r,i){if(this._deleted)return new lC(M1());{const o=yC(t,this._appId,r,i,n,this._firebaseVersion);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const rg="@firebase/storage",ig="0.9.9";/**
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
 */const j1="storage";function SC(e=Wd(),t){return e=Vo(e),pl(e,j1).getImmediate({identifier:t})}function EC(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new kC(n,r,i,t,mi)}function xC(){mr(new $n(j1,EC,"PUBLIC").setMultipleInstances(!0)),At(rg,ig,""),At(rg,ig,"esm2017")}xC();var bC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},P,Zd=Zd||{},D=bC||self;function Da(){}function hf(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Yo(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function TC(e){return Object.prototype.hasOwnProperty.call(e,Du)&&e[Du]||(e[Du]=++IC)}var Du="closure_uid_"+(1e9*Math.random()>>>0),IC=0;function CC(e,t,n){return e.call.apply(e.bind,arguments)}function OC(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function _e(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_e=CC:_e=OC,_e.apply(null,arguments)}function Os(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function Ee(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(r,i,o){for(var s=Array(arguments.length-2),a=2;a<arguments.length;a++)s[a-2]=arguments[a];return t.prototype[i].apply(r,s)}}function Un(){this.s=this.s,this.o=this.o}var PC=0;Un.prototype.s=!1;Un.prototype.na=function(){!this.s&&(this.s=!0,this.M(),PC!=0)&&TC(this)};Un.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const F1=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},U1=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,i=typeof e=="string"?e.split(""):e;for(let o=0;o<r;o++)o in i&&t.call(n,i[o],o,e)};function AC(e){e:{var t=E4;const n=e.length,r=typeof e=="string"?e.split(""):e;for(let i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function og(e){return Array.prototype.concat.apply([],arguments)}function eh(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function Ma(e){return/^[\s\xa0]*$/.test(e)}var sg=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Ne(e,t){return e.indexOf(t)!=-1}function Mu(e,t){return e<t?-1:e>t?1:0}var Re;e:{var ag=D.navigator;if(ag){var lg=ag.userAgent;if(lg){Re=lg;break e}}Re=""}function th(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function z1(e){const t={};for(const n in e)t[n]=e[n];return t}var ug="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function B1(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let o=0;o<ug.length;o++)n=ug[o],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function nh(e){return nh[" "](e),e}nh[" "]=Da;function NC(e){var t=LC;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var RC=Ne(Re,"Opera"),xo=Ne(Re,"Trident")||Ne(Re,"MSIE"),H1=Ne(Re,"Edge"),pf=H1||xo,V1=Ne(Re,"Gecko")&&!(Ne(Re.toLowerCase(),"webkit")&&!Ne(Re,"Edge"))&&!(Ne(Re,"Trident")||Ne(Re,"MSIE"))&&!Ne(Re,"Edge"),$C=Ne(Re.toLowerCase(),"webkit")&&!Ne(Re,"Edge");function W1(){var e=D.document;return e?e.documentMode:void 0}var mf;e:{var ju="",Fu=function(){var e=Re;if(V1)return/rv:([^\);]+)(\)|;)/.exec(e);if(H1)return/Edge\/([\d\.]+)/.exec(e);if(xo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if($C)return/WebKit\/(\S+)/.exec(e);if(RC)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Fu&&(ju=Fu?Fu[1]:""),xo){var Uu=W1();if(Uu!=null&&Uu>parseFloat(ju)){mf=String(Uu);break e}}mf=ju}var LC={};function DC(){return NC(function(){let e=0;const t=sg(String(mf)).split("."),n=sg("9").split("."),r=Math.max(t.length,n.length);for(let s=0;e==0&&s<r;s++){var i=t[s]||"",o=n[s]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],i[0].length==0&&o[0].length==0)break;e=Mu(i[1].length==0?0:parseInt(i[1],10),o[1].length==0?0:parseInt(o[1],10))||Mu(i[2].length==0,o[2].length==0)||Mu(i[2],o[2]),i=i[3],o=o[3]}while(e==0)}return 0<=e})}D.document&&xo&&W1();var MC=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{D.addEventListener("test",Da,t),D.removeEventListener("test",Da,t)}catch{}return e}();function Ie(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};function bo(e,t){if(Ie.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(V1){e:{try{nh(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:jC[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&bo.Z.h.call(this)}}Ee(bo,Ie);var jC={2:"touch",3:"pen",4:"mouse"};bo.prototype.h=function(){bo.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var qo="closure_listenable_"+(1e6*Math.random()|0),FC=0;function UC(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++FC,this.ca=this.fa=!1}function wl(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function _l(e){this.src=e,this.g={},this.h=0}_l.prototype.add=function(e,t,n,r,i){var o=e.toString();e=this.g[o],e||(e=this.g[o]=[],this.h++);var s=vf(e,t,r,i);return-1<s?(t=e[s],n||(t.fa=!1)):(t=new UC(t,this.src,o,!!r,i),t.fa=n,e.push(t)),t};function gf(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=F1(r,t),o;(o=0<=i)&&Array.prototype.splice.call(r,i,1),o&&(wl(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function vf(e,t,n,r){for(var i=0;i<e.length;++i){var o=e[i];if(!o.ca&&o.listener==t&&o.capture==!!n&&o.ia==r)return i}return-1}var rh="closure_lm_"+(1e6*Math.random()|0),zu={};function G1(e,t,n,r,i){if(r&&r.once)return Y1(e,t,n,r,i);if(Array.isArray(t)){for(var o=0;o<t.length;o++)G1(e,t[o],n,r,i);return null}return n=sh(n),e&&e[qo]?e.N(t,n,Yo(r)?!!r.capture:!!r,i):K1(e,t,n,!1,r,i)}function K1(e,t,n,r,i,o){if(!t)throw Error("Invalid event type");var s=Yo(i)?!!i.capture:!!i,a=oh(e);if(a||(e[rh]=a=new _l(e)),n=a.add(t,n,r,s,o),n.proxy)return n;if(r=zC(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)MC||(i=s),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(X1(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function zC(){function e(n){return t.call(e.src,e.listener,n)}var t=BC;return e}function Y1(e,t,n,r,i){if(Array.isArray(t)){for(var o=0;o<t.length;o++)Y1(e,t[o],n,r,i);return null}return n=sh(n),e&&e[qo]?e.O(t,n,Yo(r)?!!r.capture:!!r,i):K1(e,t,n,!0,r,i)}function q1(e,t,n,r,i){if(Array.isArray(t))for(var o=0;o<t.length;o++)q1(e,t[o],n,r,i);else r=Yo(r)?!!r.capture:!!r,n=sh(n),e&&e[qo]?(e=e.i,t=String(t).toString(),t in e.g&&(o=e.g[t],n=vf(o,n,r,i),-1<n&&(wl(o[n]),Array.prototype.splice.call(o,n,1),o.length==0&&(delete e.g[t],e.h--)))):e&&(e=oh(e))&&(t=e.g[t.toString()],e=-1,t&&(e=vf(t,n,r,i)),(n=-1<e?t[e]:null)&&ih(n))}function ih(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[qo])gf(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(X1(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=oh(t))?(gf(n,e),n.h==0&&(n.src=null,t[rh]=null)):wl(e)}}}function X1(e){return e in zu?zu[e]:zu[e]="on"+e}function BC(e,t){if(e.ca)e=!0;else{t=new bo(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&ih(e),e=n.call(r,t)}return e}function oh(e){return e=e[rh],e instanceof _l?e:null}var Bu="__closure_events_fn_"+(1e9*Math.random()>>>0);function sh(e){return typeof e=="function"?e:(e[Bu]||(e[Bu]=function(t){return e.handleEvent(t)}),e[Bu])}function ge(){Un.call(this),this.i=new _l(this),this.P=this,this.I=null}Ee(ge,Un);ge.prototype[qo]=!0;ge.prototype.removeEventListener=function(e,t,n,r){q1(this,e,t,n,r)};function ke(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,typeof t=="string")t=new Ie(t,e);else if(t instanceof Ie)t.target=t.target||e;else{var i=t;t=new Ie(r,e),B1(t,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=t.g=n[o];i=Ps(s,r,!0,t)&&i}if(s=t.g=e,i=Ps(s,r,!0,t)&&i,i=Ps(s,r,!1,t)&&i,n)for(o=0;o<n.length;o++)s=t.g=n[o],i=Ps(s,r,!1,t)&&i}ge.prototype.M=function(){if(ge.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)wl(n[r]);delete e.g[t],e.h--}}this.I=null};ge.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};ge.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Ps(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,o=0;o<t.length;++o){var s=t[o];if(s&&!s.ca&&s.capture==n){var a=s.listener,l=s.ia||s.src;s.fa&&gf(e.i,s),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var ah=D.JSON.stringify;function HC(){var e=J1;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class VC{constructor(){this.h=this.g=null}add(t,n){const r=Q1.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Q1=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new WC,e=>e.reset());class WC{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function GC(e){D.setTimeout(()=>{throw e},0)}function lh(e,t){yf||KC(),wf||(yf(),wf=!0),J1.add(e,t)}var yf;function KC(){var e=D.Promise.resolve(void 0);yf=function(){e.then(YC)}}var wf=!1,J1=new VC;function YC(){for(var e;e=HC();){try{e.h.call(e.g)}catch(n){GC(n)}var t=Q1;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}wf=!1}function kl(e,t){ge.call(this),this.h=e||1,this.g=t||D,this.j=_e(this.kb,this),this.l=Date.now()}Ee(kl,ge);P=kl.prototype;P.da=!1;P.S=null;P.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),ke(this,"tick"),this.da&&(uh(this),this.start()))}};P.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function uh(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}P.M=function(){kl.Z.M.call(this),uh(this),delete this.g};function ch(e,t,n){if(typeof e=="function")n&&(e=_e(e,n));else if(e&&typeof e.handleEvent=="function")e=_e(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:D.setTimeout(e,t||0)}function Z1(e){e.g=ch(()=>{e.g=null,e.i&&(e.i=!1,Z1(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class qC extends Un{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Z1(this)}M(){super.M(),this.g&&(D.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function To(e){Un.call(this),this.h=e,this.g={}}Ee(To,Un);var cg=[];function ew(e,t,n,r){Array.isArray(n)||(n&&(cg[0]=n.toString()),n=cg);for(var i=0;i<n.length;i++){var o=G1(t,n[i],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}}function tw(e){th(e.g,function(t,n){this.g.hasOwnProperty(n)&&ih(t)},e),e.g={}}To.prototype.M=function(){To.Z.M.call(this),tw(this)};To.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Sl(){this.g=!0}Sl.prototype.Aa=function(){this.g=!1};function XC(e,t,n,r,i,o){e.info(function(){if(e.g)if(o)for(var s="",a=o.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");s=2<=f.length&&f[1]=="type"?s+(c+"="+u+"&"):s+(c+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+s})}function QC(e,t,n,r,i,o,s){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+o+" "+s})}function Hr(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+ZC(e,n)+(r?" "+r:"")})}function JC(e,t){e.info(function(){return"TIMEOUT: "+t})}Sl.prototype.info=function(){};function ZC(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if(o!="noop"&&o!="stop"&&o!="close")for(var s=1;s<i.length;s++)i[s]=""}}}}return ah(n)}catch{return t}}var gi={},fg=null;function fh(){return fg=fg||new ge}gi.Ma="serverreachability";function nw(e){Ie.call(this,gi.Ma,e)}Ee(nw,Ie);function Io(e){const t=fh();ke(t,new nw(t))}gi.STAT_EVENT="statevent";function rw(e,t){Ie.call(this,gi.STAT_EVENT,e),this.stat=t}Ee(rw,Ie);function $e(e){const t=fh();ke(t,new rw(t,e))}gi.Na="timingevent";function iw(e,t){Ie.call(this,gi.Na,e),this.size=t}Ee(iw,Ie);function Xo(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return D.setTimeout(function(){e()},t)}var dh={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},e4={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function hh(){}hh.prototype.h=null;function dg(e){return e.h||(e.h=e.i())}function t4(){}var Qo={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ph(){Ie.call(this,"d")}Ee(ph,Ie);function mh(){Ie.call(this,"c")}Ee(mh,Ie);var _f;function El(){}Ee(El,hh);El.prototype.g=function(){return new XMLHttpRequest};El.prototype.i=function(){return{}};_f=new El;function Jo(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new To(this),this.P=n4,e=pf?125:void 0,this.W=new kl(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new ow}function ow(){this.i=null,this.g="",this.h=!1}var n4=45e3,kf={},ja={};P=Jo.prototype;P.setTimeout=function(e){this.P=e};function Sf(e,t,n){e.K=1,e.v=bl(en(t)),e.s=n,e.U=!0,sw(e,null)}function sw(e,t){e.F=Date.now(),Zo(e),e.A=en(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),hw(n.h,"t",r),e.C=0,n=e.l.H,e.h=new ow,e.g=Rw(e.l,n?t:null,!e.s),0<e.O&&(e.L=new qC(_e(e.Ia,e,e.g),e.O)),ew(e.V,e.g,"readystatechange",e.gb),t=e.H?z1(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Io(),XC(e.j,e.u,e.A,e.m,e.X,e.s)}P.gb=function(e){e=e.target;const t=this.L;t&&Ht(e)==3?t.l():this.Ia(e)};P.Ia=function(e){try{if(e==this.g)e:{const c=Ht(this.g);var t=this.g.Da();const f=this.g.ba();if(!(3>c)&&(c!=3||pf||this.g&&(this.h.h||this.g.ga()||gg(this.g)))){this.I||c!=4||t==7||(t==8||0>=f?Io(3):Io(2)),xl(this);var n=this.g.ba();this.N=n;t:if(aw(this)){var r=gg(this.g);e="";var i=r.length,o=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){tr(this),Qi(this);var s="";break t}this.h.i=new D.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:o&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,s=this.h.g}else s=this.g.ga();if(this.i=n==200,QC(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ma(a)){var u=a;break t}}u=null}if(n=u)Hr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ef(this,n);else{this.i=!1,this.o=3,$e(12),tr(this),Qi(this);break e}}this.U?(lw(this,c,s),pf&&this.i&&c==3&&(ew(this.V,this.W,"tick",this.fb),this.W.start())):(Hr(this.j,this.m,s,null),Ef(this,s)),c==4&&tr(this),this.i&&!this.I&&(c==4?Ow(this.l,this):(this.i=!1,Zo(this)))}else n==400&&0<s.indexOf("Unknown SID")?(this.o=3,$e(12)):(this.o=0,$e(13)),tr(this),Qi(this)}}}catch{}finally{}};function aw(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function lw(e,t,n){let r=!0,i;for(;!e.I&&e.C<n.length;)if(i=r4(e,n),i==ja){t==4&&(e.o=4,$e(14),r=!1),Hr(e.j,e.m,null,"[Incomplete Response]");break}else if(i==kf){e.o=4,$e(15),Hr(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else Hr(e.j,e.m,i,null),Ef(e,i);aw(e)&&i!=ja&&i!=kf&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,$e(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),xh(t),t.L=!0,$e(11))):(Hr(e.j,e.m,n,"[Invalid Chunked Response]"),tr(e),Qi(e))}P.fb=function(){if(this.g){var e=Ht(this.g),t=this.g.ga();this.C<t.length&&(xl(this),lw(this,e,t),this.i&&e!=4&&Zo(this))}};function r4(e,t){var n=e.C,r=t.indexOf(`
`,n);return r==-1?ja:(n=Number(t.substring(n,r)),isNaN(n)?kf:(r+=1,r+n>t.length?ja:(t=t.substr(r,n),e.C=r+n,t)))}P.cancel=function(){this.I=!0,tr(this)};function Zo(e){e.Y=Date.now()+e.P,uw(e,e.P)}function uw(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Xo(_e(e.eb,e),t)}function xl(e){e.B&&(D.clearTimeout(e.B),e.B=null)}P.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(JC(this.j,this.A),this.K!=2&&(Io(),$e(17)),tr(this),this.o=2,Qi(this)):uw(this,this.Y-e)};function Qi(e){e.l.G==0||e.I||Ow(e.l,e)}function tr(e){xl(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,uh(e.W),tw(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Ef(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||xf(n.i,e))){if(n.I=e.N,!e.J&&xf(n.i,e)&&n.G==3){try{var r=n.Ca.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)Ba(n),Ol(n);else break e;Eh(n),$e(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Xo(_e(n.ab,n),6e3));if(1>=gw(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else nr(n,11)}else if((e.J||n.g==e)&&Ba(n),!Ma(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.U=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.J=u[1],n.la=u[2];const c=u[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const f=u[4];f!=null&&(n.za=f,n.h.info("SVER="+n.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=e.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var o=r.i;!o.g&&(Ne(y,"spdy")||Ne(y,"quic")||Ne(y,"h2"))&&(o.j=o.l,o.g=new Set,o.h&&(yh(o,o.h),o.h=null))}if(r.D){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.sa=w,te(r.F,r.D,w))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var s=e;if(r.oa=Nw(r,r.H?r.la:null,r.W),s.J){vw(r.i,s);var a=s,l=r.K;l&&a.setTimeout(l),a.B&&(xl(a),Zo(a)),r.g=s}else Iw(r);0<n.l.length&&Pl(n)}else u[0]!="stop"&&u[0]!="close"||nr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?nr(n,7):Sh(n):u[0]!="noop"&&n.j&&n.j.wa(u),n.A=0)}}Io(4)}catch{}}function i4(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(hf(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function gh(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(hf(e)||typeof e=="string")U1(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(hf(e)||typeof e=="string"){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=i4(e),i=r.length;for(var o=0;o<i;o++)t.call(void 0,r[o],n&&n[o],e)}}function vi(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof vi)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}P=vi.prototype;P.R=function(){vh(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};P.T=function(){return vh(this),this.g.concat()};function vh(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];yr(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)r=e.g[t],yr(i,r)||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}P.get=function(e,t){return yr(this.h,e)?this.h[e]:t};P.set=function(e,t){yr(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};P.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],o=this.get(i);e.call(t,o,i,this)}};function yr(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var cw=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function o4(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var o=e[n].substring(0,r);i=e[n].substring(r+1)}else o=e[n];t(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function wr(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof wr){this.g=t!==void 0?t:e.g,Fa(this,e.j),this.s=e.s,Ua(this,e.i),za(this,e.m),this.l=e.l,t=e.h;var n=new Co;n.i=t.i,t.g&&(n.g=new vi(t.g),n.h=t.h),hg(this,n),this.o=e.o}else e&&(n=String(e).match(cw))?(this.g=!!t,Fa(this,n[1]||"",!0),this.s=Ji(n[2]||""),Ua(this,n[3]||"",!0),za(this,n[4]),this.l=Ji(n[5]||"",!0),hg(this,n[6]||"",!0),this.o=Ji(n[7]||"")):(this.g=!!t,this.h=new Co(null,this.g))}wr.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ji(t,pg,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ji(t,pg,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(ji(n,n.charAt(0)=="/"?c4:u4,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ji(n,d4)),e.join("")};function en(e){return new wr(e)}function Fa(e,t,n){e.j=n?Ji(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ua(e,t,n){e.i=n?Ji(t,!0):t}function za(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function hg(e,t,n){t instanceof Co?(e.h=t,h4(e.h,e.g)):(n||(t=ji(t,f4)),e.h=new Co(t,e.g))}function te(e,t,n){e.h.set(t,n)}function bl(e){return te(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function s4(e){return e instanceof wr?en(e):new wr(e,void 0)}function a4(e,t,n,r){var i=new wr(null,void 0);return e&&Fa(i,e),t&&Ua(i,t),n&&za(i,n),r&&(i.l=r),i}function Ji(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ji(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,l4),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function l4(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var pg=/[#\/\?@]/g,u4=/[#\?:]/g,c4=/[#\?]/g,f4=/[#\?@]/g,d4=/#/g;function Co(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function zn(e){e.g||(e.g=new vi,e.h=0,e.i&&o4(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}P=Co.prototype;P.add=function(e,t){zn(this),this.i=null,e=yi(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function fw(e,t){zn(e),t=yi(e,t),yr(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,yr(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&vh(e)))}function dw(e,t){return zn(e),t=yi(e,t),yr(e.g.h,t)}P.forEach=function(e,t){zn(this),this.g.forEach(function(n,r){U1(n,function(i){e.call(t,i,r,this)},this)},this)};P.T=function(){zn(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],o=0;o<i.length;o++)n.push(t[r]);return n};P.R=function(e){zn(this);var t=[];if(typeof e=="string")dw(this,e)&&(t=og(t,this.g.get(yi(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=og(t,e[n])}return t};P.set=function(e,t){return zn(this),this.i=null,e=yi(this,e),dw(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};P.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function hw(e,t,n){fw(e,t),0<n.length&&(e.i=null,e.g.set(yi(e,t),eh(n)),e.h+=n.length)}P.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var o=0;o<r.length;o++){var s=i;r[o]!==""&&(s+="="+encodeURIComponent(String(r[o]))),e.push(s)}}return this.i=e.join("&")};function yi(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function h4(e,t){t&&!e.j&&(zn(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(fw(this,r),hw(this,i,n))},e)),e.j=t}var p4=class{constructor(e,t){this.h=e,this.g=t}};function pw(e){this.l=e||m4,D.PerformanceNavigationTiming?(e=D.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(D.g&&D.g.Ea&&D.g.Ea()&&D.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var m4=10;function mw(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function gw(e){return e.h?1:e.g?e.g.size:0}function xf(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function yh(e,t){e.g?e.g.add(t):e.h=t}function vw(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}pw.prototype.cancel=function(){if(this.i=yw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function yw(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return eh(e.i)}function wh(){}wh.prototype.stringify=function(e){return D.JSON.stringify(e,void 0)};wh.prototype.parse=function(e){return D.JSON.parse(e,void 0)};function g4(){this.g=new wh}function v4(e,t,n){const r=n||"";try{gh(e,function(i,o){let s=i;Yo(i)&&(s=ah(i)),t.push(r+o+"="+encodeURIComponent(s))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function y4(e,t){const n=new Sl;if(D.Image){const r=new Image;r.onload=Os(As,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Os(As,n,r,"TestLoadImage: error",!1,t),r.onabort=Os(As,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Os(As,n,r,"TestLoadImage: timeout",!1,t),D.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function As(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Tl(e){this.l=e.$b||null,this.j=e.ib||!1}Ee(Tl,hh);Tl.prototype.g=function(){return new Il(this.l,this.j)};Tl.prototype.i=function(e){return function(){return e}}({});function Il(e,t){ge.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=_h,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ee(Il,ge);var _h=0;P=Il.prototype;P.open=function(e,t){if(this.readyState!=_h)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Oo(this)};P.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||D).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};P.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,es(this)),this.readyState=_h};P.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Oo(this)),this.g&&(this.readyState=3,Oo(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof D.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ww(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function ww(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}P.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?es(this):Oo(this),this.readyState==3&&ww(this)}};P.Ua=function(e){this.g&&(this.response=this.responseText=e,es(this))};P.Ta=function(e){this.g&&(this.response=e,es(this))};P.ha=function(){this.g&&es(this)};function es(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Oo(e)}P.setRequestHeader=function(e,t){this.v.append(e,t)};P.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};P.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Oo(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Il.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var w4=D.JSON.parse;function fe(e){ge.call(this),this.headers=new vi,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=_w,this.K=this.L=!1}Ee(fe,ge);var _w="",_4=/^https?$/i,k4=["POST","PUT"];P=fe.prototype;P.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():_f.g(),this.C=this.u?dg(this.u):dg(_f),this.g.onreadystatechange=_e(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(o){mg(this,o);return}e=n||"";const i=new vi(this.headers);r&&gh(r,function(o,s){i.set(s,o)}),r=AC(i.T()),n=D.FormData&&e instanceof D.FormData,!(0<=F1(k4,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(o,s){this.g.setRequestHeader(s,o)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ew(this),0<this.B&&((this.K=S4(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_e(this.pa,this)):this.A=ch(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(o){mg(this,o)}};function S4(e){return xo&&DC()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function E4(e){return e.toLowerCase()=="content-type"}P.pa=function(){typeof Zd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ke(this,"timeout"),this.abort(8))};function mg(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,kw(e),Cl(e)}function kw(e){e.D||(e.D=!0,ke(e,"complete"),ke(e,"error"))}P.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,ke(this,"complete"),ke(this,"abort"),Cl(this))};P.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Cl(this,!0)),fe.Z.M.call(this)};P.Fa=function(){this.s||(this.F||this.v||this.l?Sw(this):this.cb())};P.cb=function(){Sw(this)};function Sw(e){if(e.h&&typeof Zd<"u"&&(!e.C[1]||Ht(e)!=4||e.ba()!=2)){if(e.v&&Ht(e)==4)ch(e.Fa,0,e);else if(ke(e,"readystatechange"),Ht(e)==4){e.h=!1;try{const a=e.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=a===0){var i=String(e.H).match(cw)[1]||null;if(!i&&D.self&&D.self.location){var o=D.self.location.protocol;i=o.substr(0,o.length-1)}r=!_4.test(i?i.toLowerCase():"")}n=r}if(n)ke(e,"complete"),ke(e,"success");else{e.m=6;try{var s=2<Ht(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.ba()+"]",kw(e)}}finally{Cl(e)}}}}function Cl(e,t){if(e.g){Ew(e);const n=e.g,r=e.C[0]?Da:null;e.g=null,e.C=null,t||ke(e,"ready");try{n.onreadystatechange=r}catch{}}}function Ew(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(D.clearTimeout(e.A),e.A=null)}function Ht(e){return e.g?e.g.readyState:0}P.ba=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}};P.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};P.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),w4(t)}};function gg(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case _w:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}P.Da=function(){return this.m};P.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function x4(e){let t="";return th(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function kh(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=x4(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):te(e,t,n))}function Ai(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function xw(e){this.za=0,this.l=[],this.h=new Sl,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ai("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ai("baseRetryDelayMs",5e3,e),this.$a=Ai("retryDelaySeedMs",1e4,e),this.Ya=Ai("forwardChannelMaxRetries",2,e),this.ra=Ai("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new pw(e&&e.concurrentRequestLimit),this.Ca=new g4,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}P=xw.prototype;P.ma=8;P.G=1;function Sh(e){if(bw(e),e.G==3){var t=e.V++,n=en(e.F);te(n,"SID",e.J),te(n,"RID",t),te(n,"TYPE","terminate"),ts(e,n),t=new Jo(e,e.h,t,void 0),t.K=2,t.v=bl(en(n)),n=!1,D.navigator&&D.navigator.sendBeacon&&(n=D.navigator.sendBeacon(t.v.toString(),"")),!n&&D.Image&&(new Image().src=t.v,n=!0),n||(t.g=Rw(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Zo(t)}Aw(e)}P.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function Ol(e){e.g&&(xh(e),e.g.cancel(),e.g=null)}function bw(e){Ol(e),e.u&&(D.clearTimeout(e.u),e.u=null),Ba(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&D.clearTimeout(e.m),e.m=null)}function Hu(e,t){e.l.push(new p4(e.Za++,t)),e.G==3&&Pl(e)}function Pl(e){mw(e.i)||e.m||(e.m=!0,lh(e.Ha,e),e.C=0)}function b4(e,t){return gw(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=Xo(_e(e.Ha,e,t),Pw(e,e.C)),e.C++,!0)}P.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new Jo(this,this.h,e,void 0);let o=this.s;if(this.P&&(o?(o=z1(o),B1(o,this.P)):o=this.P),this.o===null&&(i.H=o),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Tw(this,i,t),n=en(this.F),te(n,"RID",e),te(n,"CVER",22),this.D&&te(n,"X-HTTP-Session-Id",this.D),ts(this,n),this.o&&o&&kh(n,this.o,o),yh(this.i,i),this.Ra&&te(n,"TYPE","init"),this.ja?(te(n,"$req",t),te(n,"SID","null"),i.$=!0,Sf(i,n,null)):Sf(i,n,t),this.G=2}}else this.G==3&&(e?vg(this,e):this.l.length==0||mw(this.i)||vg(this))};function vg(e,t){var n;t?n=t.m:n=e.V++;const r=en(e.F);te(r,"SID",e.J),te(r,"RID",n),te(r,"AID",e.U),ts(e,r),e.o&&e.s&&kh(r,e.o,e.s),n=new Jo(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Tw(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),yh(e.i,n),Sf(n,r,t)}function ts(e,t){e.j&&gh({},function(n,r){te(t,r,n)})}function Tw(e,t,n){n=Math.min(e.l.length,n);var r=e.j?_e(e.j.Oa,e.j,e):null;e:{var i=e.l;let o=-1;for(;;){const s=["count="+n];o==-1?0<n?(o=i[0].h,s.push("ofs="+o)):o=0:s.push("ofs="+o);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=o,0>u)o=Math.max(0,i[l].h-100),a=!1;else try{v4(c,s,"req"+u+"_")}catch{r&&r(c)}}if(a){r=s.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function Iw(e){e.g||e.u||(e.Y=1,lh(e.Ga,e),e.A=0)}function Eh(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=Xo(_e(e.Ga,e),Pw(e,e.A)),e.A++,!0)}P.Ga=function(){if(this.u=null,Cw(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=Xo(_e(this.bb,this),e)}};P.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,$e(10),Ol(this),Cw(this))};function xh(e){e.B!=null&&(D.clearTimeout(e.B),e.B=null)}function Cw(e){e.g=new Jo(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=en(e.oa);te(t,"RID","rpc"),te(t,"SID",e.J),te(t,"CI",e.N?"0":"1"),te(t,"AID",e.U),ts(e,t),te(t,"TYPE","xmlhttp"),e.o&&e.s&&kh(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=bl(en(t)),n.s=null,n.U=!0,sw(n,e)}P.ab=function(){this.v!=null&&(this.v=null,Ol(this),Eh(this),$e(19))};function Ba(e){e.v!=null&&(D.clearTimeout(e.v),e.v=null)}function Ow(e,t){var n=null;if(e.g==t){Ba(e),xh(e),e.g=null;var r=2}else if(xf(e.i,t))n=t.D,vw(e.i,t),r=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(r==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=fh(),ke(r,new iw(r,n)),Pl(e)}else Iw(e);else if(i=t.o,i==3||i==0&&0<e.I||!(r==1&&b4(e,t)||r==2&&Eh(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:nr(e,5);break;case 4:nr(e,10);break;case 3:nr(e,6);break;default:nr(e,2)}}}function Pw(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function nr(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var r=_e(e.jb,e);n||(n=new wr("//www.google.com/images/cleardot.gif"),D.location&&D.location.protocol=="http"||Fa(n,"https"),bl(n)),y4(n.toString(),r)}else $e(2);e.G=0,e.j&&e.j.va(t),Aw(e),bw(e)}P.jb=function(e){e?(this.h.info("Successfully pinged google.com"),$e(2)):(this.h.info("Failed to ping google.com"),$e(1))};function Aw(e){e.G=0,e.I=-1,e.j&&((yw(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,eh(e.l),e.l.length=0),e.j.ua())}function Nw(e,t,n){let r=s4(n);if(r.i!="")t&&Ua(r,t+"."+r.i),za(r,r.m);else{const i=D.location;r=a4(i.protocol,t?t+"."+i.hostname:i.hostname,+i.port,n)}return e.aa&&th(e.aa,function(i,o){te(r,o,i)}),t=e.D,n=e.sa,t&&n&&te(r,t,n),te(r,"VER",e.ma),ts(e,r),r}function Rw(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new fe(new Tl({ib:!0})):new fe(e.qa),t.L=e.H,t}function $w(){}P=$w.prototype;P.xa=function(){};P.wa=function(){};P.va=function(){};P.ua=function(){};P.Oa=function(){};function ct(e,t){ge.call(this),this.g=new xw(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!Ma(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Ma(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new wi(this)}Ee(ct,ge);ct.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),lh(_e(e.hb,e,t))),$e(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Nw(e,null,e.W),Pl(e)};ct.prototype.close=function(){Sh(this.g)};ct.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,Hu(this.g,t)}else this.v?(t={},t.__data__=ah(e),Hu(this.g,t)):Hu(this.g,e)};ct.prototype.M=function(){this.g.j=null,delete this.j,Sh(this.g),delete this.g,ct.Z.M.call(this)};function Lw(e){ph.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Ee(Lw,ph);function Dw(){mh.call(this),this.status=1}Ee(Dw,mh);function wi(e){this.g=e}Ee(wi,$w);wi.prototype.xa=function(){ke(this.g,"a")};wi.prototype.wa=function(e){ke(this.g,new Lw(e))};wi.prototype.va=function(e){ke(this.g,new Dw)};wi.prototype.ua=function(){ke(this.g,"b")};ct.prototype.send=ct.prototype.u;ct.prototype.open=ct.prototype.m;ct.prototype.close=ct.prototype.close;dh.NO_ERROR=0;dh.TIMEOUT=8;dh.HTTP_ERROR=6;e4.COMPLETE="complete";t4.EventType=Qo;Qo.OPEN="a";Qo.CLOSE="b";Qo.ERROR="c";Qo.MESSAGE="d";ge.prototype.listen=ge.prototype.N;fe.prototype.listenOnce=fe.prototype.O;fe.prototype.getLastError=fe.prototype.La;fe.prototype.getLastErrorCode=fe.prototype.Da;fe.prototype.getStatus=fe.prototype.ba;fe.prototype.getResponseJson=fe.prototype.Qa;fe.prototype.getResponseText=fe.prototype.ga;fe.prototype.send=fe.prototype.ea;const yg="@firebase/firestore";/**
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
 */class je{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}je.UNAUTHENTICATED=new je(null),je.GOOGLE_CREDENTIALS=new je("google-credentials-uid"),je.FIRST_PARTY=new je("first-party-uid"),je.MOCK_USER=new je("mock-user");/**
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
 */let Al="9.9.2";/**
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
 */const Ha=new Hd("@firebase/firestore");function Ke(e,...t){if(Ha.logLevel<=K.DEBUG){const n=t.map(Mw);Ha.debug(`Firestore (${Al}): ${e}`,...n)}}function bh(e,...t){if(Ha.logLevel<=K.ERROR){const n=t.map(Mw);Ha.error(`Firestore (${Al}): ${e}`,...n)}}function Mw(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
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
*/var t}/**
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
 */function jw(e="Unexpected state"){const t=`FIRESTORE (${Al}) INTERNAL ASSERTION FAILED: `+e;throw bh(t),new Error(t)}function Va(e,t){e||jw()}/**
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
 */const It={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ct extends $t{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Zr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
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
 */class T4{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class I4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(je.UNAUTHENTICATED))}shutdown(){}}class C4{constructor(t){this.t=t,this.currentUser=je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let o=new Zr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Zr,t.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const l=o;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{Ke("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Ke("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Zr)}},0),s()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(Ke("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Va(typeof r.accessToken=="string"),new T4(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Va(t===null||typeof t=="string"),new je(t)}}class O4{constructor(t,n,r){this.type="FirstParty",this.user=je.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class P4{constructor(t,n,r){this.h=t,this.l=n,this.m=r}getToken(){return Promise.resolve(new O4(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(je.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class A4{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class N4{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,n){const r=o=>{o.error!=null&&Ke("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.p;return this.p=o.token,Ke("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const i=o=>{Ke("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.g.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.g.getImmediate({optional:!0});o?i(o):Ke("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(Va(typeof n.token=="string"),this.p=n.token,new A4(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function R4(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class $4{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=R4(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=t.charAt(i[o]%t.length))}return r}}function Fw(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class L4{constructor(t,n,r,i,o,s,a,l){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Po{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Po("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Po&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */var wg,B;(B=wg||(wg={}))[B.OK=0]="OK",B[B.CANCELLED=1]="CANCELLED",B[B.UNKNOWN=2]="UNKNOWN",B[B.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",B[B.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",B[B.NOT_FOUND=5]="NOT_FOUND",B[B.ALREADY_EXISTS=6]="ALREADY_EXISTS",B[B.PERMISSION_DENIED=7]="PERMISSION_DENIED",B[B.UNAUTHENTICATED=16]="UNAUTHENTICATED",B[B.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",B[B.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",B[B.ABORTED=10]="ABORTED",B[B.OUT_OF_RANGE=11]="OUT_OF_RANGE",B[B.UNIMPLEMENTED=12]="UNIMPLEMENTED",B[B.INTERNAL=13]="INTERNAL",B[B.UNAVAILABLE=14]="UNAVAILABLE",B[B.DATA_LOSS=15]="DATA_LOSS";function Vu(){return typeof document<"u"?document:null}class D4{constructor(t,n,r=1e3,i=1.5,o=6e4){this.js=t,this.timerId=n,this.lo=r,this.fo=i,this._o=o,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-r);i>0&&Ke("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,()=>(this.yo=Date.now(),t())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
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
 */class Th{constructor(t,n,r,i,o){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Zr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}static createAndSchedule(t,n,r,i,o){const s=Date.now()+r,a=new Th(t,n,s,i,o);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ct(It.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function M4(e,t){if(bh("AsyncQueue",`${t}: ${e}`),Fw(e))return new Ct(It.UNAVAILABLE,`${t}: ${e}`);throw e}/**
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
 */class j4{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=je.UNAUTHENTICATED,this.clientId=$4.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{Ke("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Ke("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ct(It.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Zr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=M4(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}const _g=new Map;function F4(e,t,n,r){if(t===!0&&r===!0)throw new Ct(It.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}/**
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
 */class kg{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new Ct(It.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Ct(It.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,F4("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
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
 */class U4{constructor(t,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kg({}),this._settingsFrozen=!1,t instanceof Po?this._databaseId=t:(this._app=t,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new Ct(It.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Po(i.options.projectId)}(t))}get app(){if(!this._app)throw new Ct(It.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new Ct(It.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kg(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new I4;switch(n.type){case"gapi":const r=n.client;return Va(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new P4(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new Ct(It.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=_g.get(t);n&&(Ke("ComponentProvider","Removing Datastore"),_g.delete(t),n.terminate())}(this),Promise.resolve()}}/**
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
 */class z4{constructor(){this.Mc=Promise.resolve(),this.Oc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new D4(this,"async_queue_retry"),this.Kc=()=>{const n=Vu();n&&Ke("AsyncQueue","Visibility state changed to "+n.visibilityState),this.So.Eo()};const t=Vu();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const n=Vu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise(()=>{});const n=new Zr;return this.Qc(()=>this.Fc&&this.Uc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Oc.push(t),this.jc()))}async jc(){if(this.Oc.length!==0){try{await this.Oc[0](),this.Oc.shift(),this.So.reset()}catch(t){if(!Fw(t))throw t;Ke("AsyncQueue","Operation failed with retryable error: "+t)}this.Oc.length>0&&this.So.Io(()=>this.jc())}}Qc(t){const n=this.Mc.then(()=>(this.Lc=!0,t().catch(r=>{this.Bc=r,this.Lc=!1;const i=function(o){let s=o.message||"";return o.stack&&(s=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),s}(r);throw bh("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Lc=!1,r))));return this.Mc=n,n}enqueueAfterDelay(t,n,r){this.Gc(),this.qc.indexOf(t)>-1&&(n=0);const i=Th.createAndSchedule(this,t,n,r,o=>this.Wc(o));return this.$c.push(i),i}Gc(){this.Bc&&jw()}verifyOperationInProgress(){}async zc(){let t;do t=this.Mc,await t;while(t!==this.Mc)}Hc(t){for(const n of this.$c)if(n.timerId===t)return!0;return!1}Jc(t){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.zc()})}Yc(t){this.qc.push(t)}Wc(t){const n=this.$c.indexOf(t);this.$c.splice(n,1)}}class B4 extends U4{constructor(t,n,r){super(t,n,r),this.type="firestore",this._queue=new z4,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||V4(this),this._firestoreClient.terminate()}}function H4(e=Wd()){return pl(e,"firestore").getImmediate()}function V4(e){var t;const n=e._freezeSettings(),r=function(i,o,s,a){return new L4(i,o,s,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new j4(e._authCredentials,e._appCheckCredentials,e._queue,r)}(function(e,t=!0){(function(n){Al=n})(mi),mr(new $n("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),o=new B4(i,new C4(n.getProvider("auth-internal")),new N4(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o},"PUBLIC")),At(yg,"3.4.14",e),At(yg,"3.4.14","esm2017")})();const W4={apiKey:"AIzaSyBneb9pO7geeJhe_VWCBlc-D6pcnjdG5-E",authDomain:"animedv-992b9.firebaseapp.com",projectId:{VITE_APIKEY:"AIzaSyBneb9pO7geeJhe_VWCBlc-D6pcnjdG5-E",VITE_AUTHDOMAIN:"animedv-992b9.firebaseapp.com",VITE_PROJECTID:"animedv-992b9",VITE_STORAGEBUCKET:"animedv-992b9.appspot.com",VITE_MESSAGINGSENDERID:"249151580863",VITE_APPID:"1:249151580863:web:dd590a572bd3b00862340a",BASE_URL:"/anime-plataform/",MODE:"production",DEV:!1,PROD:!0}.VITE_APP_PROJECTID,storageBucket:{VITE_APIKEY:"AIzaSyBneb9pO7geeJhe_VWCBlc-D6pcnjdG5-E",VITE_AUTHDOMAIN:"animedv-992b9.firebaseapp.com",VITE_PROJECTID:"animedv-992b9",VITE_STORAGEBUCKET:"animedv-992b9.appspot.com",VITE_MESSAGINGSENDERID:"249151580863",VITE_APPID:"1:249151580863:web:dd590a572bd3b00862340a",BASE_URL:"/anime-plataform/",MODE:"production",DEV:!1,PROD:!0}.VITE_APP_STORAGEBUCKET,messagingSenderId:{VITE_APIKEY:"AIzaSyBneb9pO7geeJhe_VWCBlc-D6pcnjdG5-E",VITE_AUTHDOMAIN:"animedv-992b9.firebaseapp.com",VITE_PROJECTID:"animedv-992b9",VITE_STORAGEBUCKET:"animedv-992b9.appspot.com",VITE_MESSAGINGSENDERID:"249151580863",VITE_APPID:"1:249151580863:web:dd590a572bd3b00862340a",BASE_URL:"/anime-plataform/",MODE:"production",DEV:!1,PROD:!0}.VITE_APP_MESSAGINGSENDERID,appId:"1:249151580863:web:dd590a572bd3b00862340a"},Nl=Zb(W4);JI(Nl);H4(Nl);SC(Nl);console.log(Nl);const Uw=()=>{const[e,t]=k.exports.useState(!1);return v("button",{children:e?v(Je,{className:"text-lg dark:text-slate-100 text-stone-800",color:"white",icon:Lx}):v(Je,{className:"text-lg dark:text-slate-100 text-stone-800",color:"white",icon:Fx})})},Ih=k.exports.createContext();function G4({children:e}){const[t,n]=k.exports.useState();return v(Ih.Provider,{value:{filtersSelected:t,setFiltersSelected:n},children:e})}const he=({isSelected:e,name:t,value:n,children:r})=>v("option",{className:"dark:text-slate-200 text-stone-800 select-none",selected:e,name:t,value:n,children:r}),Wu=({name:e,id:t,children:n,handleChange:r})=>v("select",{className:" dark:bg-stone-800/90 bg-slate-200 shadow-sm rounded-sm h-8 px-2  max-h-8 flex-stats dark:text-slate-100 text-stone-700  font-sans font-medium select-none focus:bg-slate-100 ",onChange:r,name:e,id:t,children:n}),K4={keyword:"",filterdOutType:"anime"},Y4=()=>{const[e,t]=k.exports.useState(K4),{filtersSelected:n,setFiltersSelected:r}=k.exports.useContext(Ih),i=Uo(),o=({target:a})=>{t({...e,[a.name]:a.value})};return R("form",{className:" flex gap-2",onSubmit:a=>{a.preventDefault(),i(`/anime-plataform/search/?type=${e.filterdOutType}&q=${e.keyword}`),n&&r()},children:[R("select",{className:"bg-transparent text-stone-800 dark:text-slate-50",name:"filterdOutType",id:"filterdOutType ",onChange:o,children:[v("option",{className:"text-stone-900",selected:!0,value:"anime",children:"Anime"}),v("option",{className:"text-stone-900",value:"manga",children:"Manga"})]}),v("input",{name:"keyword",value:e.keyword,required:!0,className:"min-w-[300px]  h-10 pl-4 pr-3 rounded-full dark:bg-white/10 bg-slate-300 dark:text-slate-50  placeholder-stone-700 dark:placeholder-slate-50 outline-none",onChange:o,type:"search",placeholder:"Search anime , example: naruto"})]})},q4=({handleDarkMode:e,darkMode:t})=>R("nav",{className:"min-h-[12] bg-slate-200  fixed left-0 right-0  p-2 px-12 z-10 dark:bg-stone-900 transition-colors shadow-sm flex-stats justify-between ",children:[R("div",{className:"flex items-center gap-6",children:[v(IS,{}),v(im,{className:"dark:text-slate-50 text-stone-800  font-medium text-md ",to:"/anime-plataform?type=anime",children:"Anime"}),v(im,{className:"dark:text-slate-50 text-stone-800 font-medium text-md ",to:"/anime-plataform?type=manga",children:"Manga"})]}),R("div",{className:"flex items-center gap-4",children:[v(Y4,{}),v(Rx,{darkMode:t,handleDarkMode:e}),v(Uw,{})]}),v("button",{className:"hidden sm:block text-slate-50",children:"Search"})]}),zw=k.exports.createContext({darkMode:!0}),X4=({children:e})=>{const[t,n]=k.exports.useState(!0),r=()=>{n(!t),localStorage.setItem("theme",t)};return k.exports.useEffect(()=>{const i=JSON.parse(localStorage.getItem("theme"));i&&n(i==="true")},[]),v(zw.Provider,{value:{darkMode:t,setDarkMode:n,handleDarkMode:r},children:e})},ns=({children:e,width:t="w-4/5"})=>v("div",{className:`  ${t} mx-auto min-h-[30vh]`,children:e}),Q4=()=>v("footer",{className:"h-60 w-full dark:bg-stone-900 bg-slate-200 relative -bottom-20 shadow-2xl mt-60",children:v(ns,{})});var Sg=Array.isArray,Eg=Object.keys,J4=Object.prototype.hasOwnProperty,Z4=typeof Element<"u";function bf(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var n=Sg(e),r=Sg(t),i,o,s;if(n&&r){if(o=e.length,o!=t.length)return!1;for(i=o;i--!==0;)if(!bf(e[i],t[i]))return!1;return!0}if(n!=r)return!1;var a=e instanceof Date,l=t instanceof Date;if(a!=l)return!1;if(a&&l)return e.getTime()==t.getTime();var u=e instanceof RegExp,c=t instanceof RegExp;if(u!=c)return!1;if(u&&c)return e.toString()==t.toString();var f=Eg(e);if(o=f.length,o!==Eg(t).length)return!1;for(i=o;i--!==0;)if(!J4.call(t,f[i]))return!1;if(Z4&&e instanceof Element&&t instanceof Element)return e===t;for(i=o;i--!==0;)if(s=f[i],!(s==="_owner"&&e.$$typeof)&&!bf(e[s],t[s]))return!1;return!0}return e!==e&&t!==t}var eO=function(t,n){try{return bf(t,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}},tO=typeof global=="object"&&global&&global.Object===Object&&global;const Bw=tO;var nO=typeof self=="object"&&self&&self.Object===Object&&self,rO=Bw||nO||Function("return this")();const Dt=rO;var iO=Dt.Symbol;const Ln=iO;var Hw=Object.prototype,oO=Hw.hasOwnProperty,sO=Hw.toString,Ni=Ln?Ln.toStringTag:void 0;function aO(e){var t=oO.call(e,Ni),n=e[Ni];try{e[Ni]=void 0;var r=!0}catch{}var i=sO.call(e);return r&&(t?e[Ni]=n:delete e[Ni]),i}var lO=Object.prototype,uO=lO.toString;function cO(e){return uO.call(e)}var fO="[object Null]",dO="[object Undefined]",xg=Ln?Ln.toStringTag:void 0;function _i(e){return e==null?e===void 0?dO:fO:xg&&xg in Object(e)?aO(e):cO(e)}function Vw(e,t){return function(n){return e(t(n))}}var hO=Vw(Object.getPrototypeOf,Object);const Ww=hO;function ki(e){return e!=null&&typeof e=="object"}function pO(){this.__data__=[],this.size=0}function Gw(e,t){return e===t||e!==e&&t!==t}function Rl(e,t){for(var n=e.length;n--;)if(Gw(e[n][0],t))return n;return-1}var mO=Array.prototype,gO=mO.splice;function vO(e){var t=this.__data__,n=Rl(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():gO.call(t,n,1),--this.size,!0}function yO(e){var t=this.__data__,n=Rl(t,e);return n<0?void 0:t[n][1]}function wO(e){return Rl(this.__data__,e)>-1}function _O(e,t){var n=this.__data__,r=Rl(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function on(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}on.prototype.clear=pO;on.prototype.delete=vO;on.prototype.get=yO;on.prototype.has=wO;on.prototype.set=_O;function kO(){this.__data__=new on,this.size=0}function SO(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function EO(e){return this.__data__.get(e)}function xO(e){return this.__data__.has(e)}function rs(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var bO="[object AsyncFunction]",TO="[object Function]",IO="[object GeneratorFunction]",CO="[object Proxy]";function Kw(e){if(!rs(e))return!1;var t=_i(e);return t==TO||t==IO||t==bO||t==CO}var OO=Dt["__core-js_shared__"];const Gu=OO;var bg=function(){var e=/[^.]+$/.exec(Gu&&Gu.keys&&Gu.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function PO(e){return!!bg&&bg in e}var AO=Function.prototype,NO=AO.toString;function xr(e){if(e!=null){try{return NO.call(e)}catch{}try{return e+""}catch{}}return""}var RO=/[\\^$.*+?()[\]{}|]/g,$O=/^\[object .+?Constructor\]$/,LO=Function.prototype,DO=Object.prototype,MO=LO.toString,jO=DO.hasOwnProperty,FO=RegExp("^"+MO.call(jO).replace(RO,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function UO(e){if(!rs(e)||PO(e))return!1;var t=Kw(e)?FO:$O;return t.test(xr(e))}function zO(e,t){return e==null?void 0:e[t]}function br(e,t){var n=zO(e,t);return UO(n)?n:void 0}var BO=br(Dt,"Map");const Ao=BO;var HO=br(Object,"create");const No=HO;function VO(){this.__data__=No?No(null):{},this.size=0}function WO(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var GO="__lodash_hash_undefined__",KO=Object.prototype,YO=KO.hasOwnProperty;function qO(e){var t=this.__data__;if(No){var n=t[e];return n===GO?void 0:n}return YO.call(t,e)?t[e]:void 0}var XO=Object.prototype,QO=XO.hasOwnProperty;function JO(e){var t=this.__data__;return No?t[e]!==void 0:QO.call(t,e)}var ZO="__lodash_hash_undefined__";function eP(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=No&&t===void 0?ZO:t,this}function _r(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}_r.prototype.clear=VO;_r.prototype.delete=WO;_r.prototype.get=qO;_r.prototype.has=JO;_r.prototype.set=eP;function tP(){this.size=0,this.__data__={hash:new _r,map:new(Ao||on),string:new _r}}function nP(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function $l(e,t){var n=e.__data__;return nP(t)?n[typeof t=="string"?"string":"hash"]:n.map}function rP(e){var t=$l(this,e).delete(e);return this.size-=t?1:0,t}function iP(e){return $l(this,e).get(e)}function oP(e){return $l(this,e).has(e)}function sP(e,t){var n=$l(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function Bn(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Bn.prototype.clear=tP;Bn.prototype.delete=rP;Bn.prototype.get=iP;Bn.prototype.has=oP;Bn.prototype.set=sP;var aP=200;function lP(e,t){var n=this.__data__;if(n instanceof on){var r=n.__data__;if(!Ao||r.length<aP-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Bn(r)}return n.set(e,t),this.size=n.size,this}function Si(e){var t=this.__data__=new on(e);this.size=t.size}Si.prototype.clear=kO;Si.prototype.delete=SO;Si.prototype.get=EO;Si.prototype.has=xO;Si.prototype.set=lP;function uP(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var cP=function(){try{var e=br(Object,"defineProperty");return e({},"",{}),e}catch{}}();const Tg=cP;function Yw(e,t,n){t=="__proto__"&&Tg?Tg(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var fP=Object.prototype,dP=fP.hasOwnProperty;function qw(e,t,n){var r=e[t];(!(dP.call(e,t)&&Gw(r,n))||n===void 0&&!(t in e))&&Yw(e,t,n)}function Ll(e,t,n,r){var i=!n;n||(n={});for(var o=-1,s=t.length;++o<s;){var a=t[o],l=r?r(n[a],e[a],a,n,e):void 0;l===void 0&&(l=e[a]),i?Yw(n,a,l):qw(n,a,l)}return n}function hP(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var pP="[object Arguments]";function Ig(e){return ki(e)&&_i(e)==pP}var Xw=Object.prototype,mP=Xw.hasOwnProperty,gP=Xw.propertyIsEnumerable,vP=Ig(function(){return arguments}())?Ig:function(e){return ki(e)&&mP.call(e,"callee")&&!gP.call(e,"callee")};const yP=vP;var wP=Array.isArray;const is=wP;function _P(){return!1}var Qw=typeof Ye=="object"&&Ye&&!Ye.nodeType&&Ye,Cg=Qw&&typeof qe=="object"&&qe&&!qe.nodeType&&qe,kP=Cg&&Cg.exports===Qw,Og=kP?Dt.Buffer:void 0,SP=Og?Og.isBuffer:void 0,EP=SP||_P;const Jw=EP;var xP=9007199254740991,bP=/^(?:0|[1-9]\d*)$/;function TP(e,t){var n=typeof e;return t=t==null?xP:t,!!t&&(n=="number"||n!="symbol"&&bP.test(e))&&e>-1&&e%1==0&&e<t}var IP=9007199254740991;function Zw(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=IP}var CP="[object Arguments]",OP="[object Array]",PP="[object Boolean]",AP="[object Date]",NP="[object Error]",RP="[object Function]",$P="[object Map]",LP="[object Number]",DP="[object Object]",MP="[object RegExp]",jP="[object Set]",FP="[object String]",UP="[object WeakMap]",zP="[object ArrayBuffer]",BP="[object DataView]",HP="[object Float32Array]",VP="[object Float64Array]",WP="[object Int8Array]",GP="[object Int16Array]",KP="[object Int32Array]",YP="[object Uint8Array]",qP="[object Uint8ClampedArray]",XP="[object Uint16Array]",QP="[object Uint32Array]",Q={};Q[HP]=Q[VP]=Q[WP]=Q[GP]=Q[KP]=Q[YP]=Q[qP]=Q[XP]=Q[QP]=!0;Q[CP]=Q[OP]=Q[zP]=Q[PP]=Q[BP]=Q[AP]=Q[NP]=Q[RP]=Q[$P]=Q[LP]=Q[DP]=Q[MP]=Q[jP]=Q[FP]=Q[UP]=!1;function JP(e){return ki(e)&&Zw(e.length)&&!!Q[_i(e)]}function Ch(e){return function(t){return e(t)}}var e2=typeof Ye=="object"&&Ye&&!Ye.nodeType&&Ye,Zi=e2&&typeof qe=="object"&&qe&&!qe.nodeType&&qe,ZP=Zi&&Zi.exports===e2,Ku=ZP&&Bw.process,eA=function(){try{var e=Zi&&Zi.require&&Zi.require("util").types;return e||Ku&&Ku.binding&&Ku.binding("util")}catch{}}();const li=eA;var Pg=li&&li.isTypedArray,tA=Pg?Ch(Pg):JP;const nA=tA;var rA=Object.prototype,iA=rA.hasOwnProperty;function t2(e,t){var n=is(e),r=!n&&yP(e),i=!n&&!r&&Jw(e),o=!n&&!r&&!i&&nA(e),s=n||r||i||o,a=s?hP(e.length,String):[],l=a.length;for(var u in e)(t||iA.call(e,u))&&!(s&&(u=="length"||i&&(u=="offset"||u=="parent")||o&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||TP(u,l)))&&a.push(u);return a}var oA=Object.prototype;function Oh(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||oA;return e===n}var sA=Vw(Object.keys,Object);const aA=sA;var lA=Object.prototype,uA=lA.hasOwnProperty;function cA(e){if(!Oh(e))return aA(e);var t=[];for(var n in Object(e))uA.call(e,n)&&n!="constructor"&&t.push(n);return t}function n2(e){return e!=null&&Zw(e.length)&&!Kw(e)}function Ph(e){return n2(e)?t2(e):cA(e)}function fA(e,t){return e&&Ll(t,Ph(t),e)}function dA(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var hA=Object.prototype,pA=hA.hasOwnProperty;function mA(e){if(!rs(e))return dA(e);var t=Oh(e),n=[];for(var r in e)r=="constructor"&&(t||!pA.call(e,r))||n.push(r);return n}function Ah(e){return n2(e)?t2(e,!0):mA(e)}function gA(e,t){return e&&Ll(t,Ah(t),e)}var r2=typeof Ye=="object"&&Ye&&!Ye.nodeType&&Ye,Ag=r2&&typeof qe=="object"&&qe&&!qe.nodeType&&qe,vA=Ag&&Ag.exports===r2,Ng=vA?Dt.Buffer:void 0,Rg=Ng?Ng.allocUnsafe:void 0;function yA(e,t){if(t)return e.slice();var n=e.length,r=Rg?Rg(n):new e.constructor(n);return e.copy(r),r}function i2(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}function wA(e,t){for(var n=-1,r=e==null?0:e.length,i=0,o=[];++n<r;){var s=e[n];t(s,n,e)&&(o[i++]=s)}return o}function o2(){return[]}var _A=Object.prototype,kA=_A.propertyIsEnumerable,$g=Object.getOwnPropertySymbols,SA=$g?function(e){return e==null?[]:(e=Object(e),wA($g(e),function(t){return kA.call(e,t)}))}:o2;const Nh=SA;function EA(e,t){return Ll(e,Nh(e),t)}function s2(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}var xA=Object.getOwnPropertySymbols,bA=xA?function(e){for(var t=[];e;)s2(t,Nh(e)),e=Ww(e);return t}:o2;const a2=bA;function TA(e,t){return Ll(e,a2(e),t)}function l2(e,t,n){var r=t(e);return is(e)?r:s2(r,n(e))}function IA(e){return l2(e,Ph,Nh)}function CA(e){return l2(e,Ah,a2)}var OA=br(Dt,"DataView");const Tf=OA;var PA=br(Dt,"Promise");const If=PA;var AA=br(Dt,"Set");const Cf=AA;var NA=br(Dt,"WeakMap");const Of=NA;var Lg="[object Map]",RA="[object Object]",Dg="[object Promise]",Mg="[object Set]",jg="[object WeakMap]",Fg="[object DataView]",$A=xr(Tf),LA=xr(Ao),DA=xr(If),MA=xr(Cf),jA=xr(Of),qn=_i;(Tf&&qn(new Tf(new ArrayBuffer(1)))!=Fg||Ao&&qn(new Ao)!=Lg||If&&qn(If.resolve())!=Dg||Cf&&qn(new Cf)!=Mg||Of&&qn(new Of)!=jg)&&(qn=function(e){var t=_i(e),n=t==RA?e.constructor:void 0,r=n?xr(n):"";if(r)switch(r){case $A:return Fg;case LA:return Lg;case DA:return Dg;case MA:return Mg;case jA:return jg}return t});const Rh=qn;var FA=Object.prototype,UA=FA.hasOwnProperty;function zA(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&UA.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var BA=Dt.Uint8Array;const Ug=BA;function $h(e){var t=new e.constructor(e.byteLength);return new Ug(t).set(new Ug(e)),t}function HA(e,t){var n=t?$h(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var VA=/\w*$/;function WA(e){var t=new e.constructor(e.source,VA.exec(e));return t.lastIndex=e.lastIndex,t}var zg=Ln?Ln.prototype:void 0,Bg=zg?zg.valueOf:void 0;function GA(e){return Bg?Object(Bg.call(e)):{}}function KA(e,t){var n=t?$h(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var YA="[object Boolean]",qA="[object Date]",XA="[object Map]",QA="[object Number]",JA="[object RegExp]",ZA="[object Set]",e3="[object String]",t3="[object Symbol]",n3="[object ArrayBuffer]",r3="[object DataView]",i3="[object Float32Array]",o3="[object Float64Array]",s3="[object Int8Array]",a3="[object Int16Array]",l3="[object Int32Array]",u3="[object Uint8Array]",c3="[object Uint8ClampedArray]",f3="[object Uint16Array]",d3="[object Uint32Array]";function h3(e,t,n){var r=e.constructor;switch(t){case n3:return $h(e);case YA:case qA:return new r(+e);case r3:return HA(e,n);case i3:case o3:case s3:case a3:case l3:case u3:case c3:case f3:case d3:return KA(e,n);case XA:return new r;case QA:case e3:return new r(e);case JA:return WA(e);case ZA:return new r;case t3:return GA(e)}}var Hg=Object.create,p3=function(){function e(){}return function(t){if(!rs(t))return{};if(Hg)return Hg(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();const m3=p3;function g3(e){return typeof e.constructor=="function"&&!Oh(e)?m3(Ww(e)):{}}var v3="[object Map]";function y3(e){return ki(e)&&Rh(e)==v3}var Vg=li&&li.isMap,w3=Vg?Ch(Vg):y3;const _3=w3;var k3="[object Set]";function S3(e){return ki(e)&&Rh(e)==k3}var Wg=li&&li.isSet,E3=Wg?Ch(Wg):S3;const x3=E3;var b3=1,T3=2,I3=4,u2="[object Arguments]",C3="[object Array]",O3="[object Boolean]",P3="[object Date]",A3="[object Error]",c2="[object Function]",N3="[object GeneratorFunction]",R3="[object Map]",$3="[object Number]",f2="[object Object]",L3="[object RegExp]",D3="[object Set]",M3="[object String]",j3="[object Symbol]",F3="[object WeakMap]",U3="[object ArrayBuffer]",z3="[object DataView]",B3="[object Float32Array]",H3="[object Float64Array]",V3="[object Int8Array]",W3="[object Int16Array]",G3="[object Int32Array]",K3="[object Uint8Array]",Y3="[object Uint8ClampedArray]",q3="[object Uint16Array]",X3="[object Uint32Array]",Y={};Y[u2]=Y[C3]=Y[U3]=Y[z3]=Y[O3]=Y[P3]=Y[B3]=Y[H3]=Y[V3]=Y[W3]=Y[G3]=Y[R3]=Y[$3]=Y[f2]=Y[L3]=Y[D3]=Y[M3]=Y[j3]=Y[K3]=Y[Y3]=Y[q3]=Y[X3]=!0;Y[A3]=Y[c2]=Y[F3]=!1;function eo(e,t,n,r,i,o){var s,a=t&b3,l=t&T3,u=t&I3;if(n&&(s=i?n(e,r,i,o):n(e)),s!==void 0)return s;if(!rs(e))return e;var c=is(e);if(c){if(s=zA(e),!a)return i2(e,s)}else{var f=Rh(e),d=f==c2||f==N3;if(Jw(e))return yA(e,a);if(f==f2||f==u2||d&&!i){if(s=l||d?{}:g3(e),!a)return l?TA(e,gA(s,e)):EA(e,fA(s,e))}else{if(!Y[f])return i?e:{};s=h3(e,f,a)}}o||(o=new Si);var g=o.get(e);if(g)return g;o.set(e,s),x3(e)?e.forEach(function(x){s.add(eo(x,t,n,x,e,o))}):_3(e)&&e.forEach(function(x,p){s.set(p,eo(x,t,n,p,e,o))});var y=u?l?CA:IA:l?Ah:Ph,w=c?void 0:y(e);return uP(w||e,function(x,p){w&&(p=x,x=e[p]),qw(s,p,eo(x,t,n,p,e,o))}),s}var Q3=4;function Gg(e){return eo(e,Q3)}function d2(e,t){for(var n=-1,r=e==null?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}var J3="[object Symbol]";function Lh(e){return typeof e=="symbol"||ki(e)&&_i(e)==J3}var Z3="Expected a function";function Dh(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Z3);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var s=e.apply(this,r);return n.cache=o.set(i,s)||o,s};return n.cache=new(Dh.Cache||Bn),n}Dh.Cache=Bn;var eN=500;function tN(e){var t=Dh(e,function(r){return n.size===eN&&n.clear(),r}),n=t.cache;return t}var nN=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rN=/\\(\\)?/g,iN=tN(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(nN,function(n,r,i,o){t.push(i?o.replace(rN,"$1"):r||n)}),t});const oN=iN;var sN=1/0;function aN(e){if(typeof e=="string"||Lh(e))return e;var t=e+"";return t=="0"&&1/e==-sN?"-0":t}var lN=1/0,Kg=Ln?Ln.prototype:void 0,Yg=Kg?Kg.toString:void 0;function h2(e){if(typeof e=="string")return e;if(is(e))return d2(e,h2)+"";if(Lh(e))return Yg?Yg.call(e):"";var t=e+"";return t=="0"&&1/e==-lN?"-0":t}function uN(e){return e==null?"":h2(e)}function p2(e){return is(e)?d2(e,aN):Lh(e)?[e]:i2(oN(uN(e)))}var cN=!0;function m2(e,t){if(!cN){if(e)return;var n="Warning: "+t;typeof console<"u"&&console.warn(n);try{throw Error(n)}catch{}}}var g2={exports:{}},W={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ve=typeof Symbol=="function"&&Symbol.for,Mh=ve?Symbol.for("react.element"):60103,jh=ve?Symbol.for("react.portal"):60106,Dl=ve?Symbol.for("react.fragment"):60107,Ml=ve?Symbol.for("react.strict_mode"):60108,jl=ve?Symbol.for("react.profiler"):60114,Fl=ve?Symbol.for("react.provider"):60109,Ul=ve?Symbol.for("react.context"):60110,Fh=ve?Symbol.for("react.async_mode"):60111,zl=ve?Symbol.for("react.concurrent_mode"):60111,Bl=ve?Symbol.for("react.forward_ref"):60112,Hl=ve?Symbol.for("react.suspense"):60113,fN=ve?Symbol.for("react.suspense_list"):60120,Vl=ve?Symbol.for("react.memo"):60115,Wl=ve?Symbol.for("react.lazy"):60116,dN=ve?Symbol.for("react.block"):60121,hN=ve?Symbol.for("react.fundamental"):60117,pN=ve?Symbol.for("react.responder"):60118,mN=ve?Symbol.for("react.scope"):60119;function nt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Mh:switch(e=e.type,e){case Fh:case zl:case Dl:case jl:case Ml:case Hl:return e;default:switch(e=e&&e.$$typeof,e){case Ul:case Bl:case Wl:case Vl:case Fl:return e;default:return t}}case jh:return t}}}function v2(e){return nt(e)===zl}W.AsyncMode=Fh;W.ConcurrentMode=zl;W.ContextConsumer=Ul;W.ContextProvider=Fl;W.Element=Mh;W.ForwardRef=Bl;W.Fragment=Dl;W.Lazy=Wl;W.Memo=Vl;W.Portal=jh;W.Profiler=jl;W.StrictMode=Ml;W.Suspense=Hl;W.isAsyncMode=function(e){return v2(e)||nt(e)===Fh};W.isConcurrentMode=v2;W.isContextConsumer=function(e){return nt(e)===Ul};W.isContextProvider=function(e){return nt(e)===Fl};W.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Mh};W.isForwardRef=function(e){return nt(e)===Bl};W.isFragment=function(e){return nt(e)===Dl};W.isLazy=function(e){return nt(e)===Wl};W.isMemo=function(e){return nt(e)===Vl};W.isPortal=function(e){return nt(e)===jh};W.isProfiler=function(e){return nt(e)===jl};W.isStrictMode=function(e){return nt(e)===Ml};W.isSuspense=function(e){return nt(e)===Hl};W.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Dl||e===zl||e===jl||e===Ml||e===Hl||e===fN||typeof e=="object"&&e!==null&&(e.$$typeof===Wl||e.$$typeof===Vl||e.$$typeof===Fl||e.$$typeof===Ul||e.$$typeof===Bl||e.$$typeof===hN||e.$$typeof===pN||e.$$typeof===mN||e.$$typeof===dN)};W.typeOf=nt;(function(e){e.exports=W})(g2);var Uh=g2.exports,gN={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},vN={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},yN={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},y2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},zh={};zh[Uh.ForwardRef]=yN;zh[Uh.Memo]=y2;function qg(e){return Uh.isMemo(e)?y2:zh[e.$$typeof]||gN}var wN=Object.defineProperty,_N=Object.getOwnPropertyNames,Xg=Object.getOwnPropertySymbols,kN=Object.getOwnPropertyDescriptor,SN=Object.getPrototypeOf,Qg=Object.prototype;function w2(e,t,n){if(typeof t!="string"){if(Qg){var r=SN(t);r&&r!==Qg&&w2(e,r,n)}var i=_N(t);Xg&&(i=i.concat(Xg(t)));for(var o=qg(e),s=qg(t),a=0;a<i.length;++a){var l=i[a];if(!vN[l]&&!(n&&n[l])&&!(s&&s[l])&&!(o&&o[l])){var u=kN(t,l);try{wN(e,l,u)}catch{}}}}return e}var EN=w2,xN=1,bN=4;function TN(e){return eo(e,xN|bN)}function Ro(){return Ro=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ro.apply(this,arguments)}function _2(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function Bh(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Jg(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Zg=function(t){return Array.isArray(t)&&t.length===0},Pf=function(t){return typeof t=="function"},IN=function(t){return t!==null&&typeof t=="object"},CN=function(t){return String(Math.floor(Number(t)))===t},ON=function(t){return k.exports.Children.count(t)===0};function ot(e,t,n,r){r===void 0&&(r=0);for(var i=p2(t);e&&r<i.length;)e=e[i[r++]];return e===void 0?n:e}function Yu(e,t,n){for(var r=Gg(e),i=r,o=0,s=p2(t);o<s.length-1;o++){var a=s[o],l=ot(e,s.slice(0,o+1));if(l&&(IN(l)||Array.isArray(l)))i=i[a]=Gg(l);else{var u=s[o+1];i=i[a]=CN(u)&&Number(u)>=0?[]:{}}}return(o===0?e:i)[s[o]]===n?e:(n===void 0?delete i[s[o]]:i[s[o]]=n,o===0&&n===void 0&&delete r[s[o]],r)}var Gl=k.exports.createContext(void 0);Gl.displayName="FormikContext";Gl.Provider;var PN=Gl.Consumer;function AN(){var e=k.exports.useContext(Gl);return e||m2(!1),e}var NN=k.exports.forwardRef(function(e,t){var n=e.action,r=Bh(e,["action"]),i=n!=null?n:"#",o=AN(),s=o.handleReset,a=o.handleSubmit;return k.exports.createElement("form",Object.assign({onSubmit:a,ref:t,onReset:s,action:i},r))});NN.displayName="Form";function RN(e){var t=function(i){return k.exports.createElement(PN,null,function(o){return o||m2(!1),k.exports.createElement(e,Object.assign({},i,{formik:o}))})},n=e.displayName||e.name||e.constructor&&e.constructor.name||"Component";return t.WrappedComponent=e,t.displayName="FormikConnect("+n+")",EN(t,e)}var $N=function(t,n,r){var i=ui(t),o=i[n];return i.splice(n,1),i.splice(r,0,o),i},LN=function(t,n,r){var i=ui(t),o=i[n];return i[n]=i[r],i[r]=o,i},qu=function(t,n,r){var i=ui(t);return i.splice(n,0,r),i},DN=function(t,n,r){var i=ui(t);return i[n]=r,i},ui=function(t){if(t){if(Array.isArray(t))return[].concat(t);var n=Object.keys(t).map(function(r){return parseInt(r)}).reduce(function(r,i){return i>r?i:r},0);return Array.from(Ro({},t,{length:n+1}))}else return[]},MN=function(e){_2(t,e);function t(r){var i;return i=e.call(this,r)||this,i.updateArrayField=function(o,s,a){var l=i.props,u=l.name,c=l.formik.setFormikState;c(function(f){var d=typeof a=="function"?a:o,g=typeof s=="function"?s:o,y=Yu(f.values,u,o(ot(f.values,u))),w=a?d(ot(f.errors,u)):void 0,x=s?g(ot(f.touched,u)):void 0;return Zg(w)&&(w=void 0),Zg(x)&&(x=void 0),Ro({},f,{values:y,errors:a?Yu(f.errors,u,w):f.errors,touched:s?Yu(f.touched,u,x):f.touched})})},i.push=function(o){return i.updateArrayField(function(s){return[].concat(ui(s),[TN(o)])},!1,!1)},i.handlePush=function(o){return function(){return i.push(o)}},i.swap=function(o,s){return i.updateArrayField(function(a){return LN(a,o,s)},!0,!0)},i.handleSwap=function(o,s){return function(){return i.swap(o,s)}},i.move=function(o,s){return i.updateArrayField(function(a){return $N(a,o,s)},!0,!0)},i.handleMove=function(o,s){return function(){return i.move(o,s)}},i.insert=function(o,s){return i.updateArrayField(function(a){return qu(a,o,s)},function(a){return qu(a,o,null)},function(a){return qu(a,o,null)})},i.handleInsert=function(o,s){return function(){return i.insert(o,s)}},i.replace=function(o,s){return i.updateArrayField(function(a){return DN(a,o,s)},!1,!1)},i.handleReplace=function(o,s){return function(){return i.replace(o,s)}},i.unshift=function(o){var s=-1;return i.updateArrayField(function(a){var l=a?[o].concat(a):[o];return s<0&&(s=l.length),l},function(a){var l=a?[null].concat(a):[null];return s<0&&(s=l.length),l},function(a){var l=a?[null].concat(a):[null];return s<0&&(s=l.length),l}),s},i.handleUnshift=function(o){return function(){return i.unshift(o)}},i.handleRemove=function(o){return function(){return i.remove(o)}},i.handlePop=function(){return function(){return i.pop()}},i.remove=i.remove.bind(Jg(i)),i.pop=i.pop.bind(Jg(i)),i}var n=t.prototype;return n.componentDidUpdate=function(i){this.props.validateOnChange&&this.props.formik.validateOnChange&&!eO(ot(i.formik.values,i.name),ot(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},n.remove=function(i){var o;return this.updateArrayField(function(s){var a=s?ui(s):[];return o||(o=a[i]),Pf(a.splice)&&a.splice(i,1),a},!0,!0),o},n.pop=function(){var i;return this.updateArrayField(function(o){var s=o;return i||(i=s&&s.pop&&s.pop()),s},!0,!0),i},n.render=function(){var i={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},o=this.props,s=o.component,a=o.render,l=o.children,u=o.name,c=o.formik,f=Bh(c,["validate","validationSchema"]),d=Ro({},i,{form:f,name:u});return s?k.exports.createElement(s,d):a?a(d):l?typeof l=="function"?l(d):ON(l)?null:k.exports.Children.only(l):null},t}(k.exports.Component);MN.defaultProps={validateOnChange:!0};var jN=function(e){_2(t,e);function t(){return e.apply(this,arguments)||this}var n=t.prototype;return n.shouldComponentUpdate=function(i){return ot(this.props.formik.errors,this.props.name)!==ot(i.formik.errors,this.props.name)||ot(this.props.formik.touched,this.props.name)!==ot(i.formik.touched,this.props.name)||Object.keys(this.props).length!==Object.keys(i).length},n.render=function(){var i=this.props,o=i.component,s=i.formik,a=i.render,l=i.children,u=i.name,c=Bh(i,["component","formik","render","children","name"]),f=ot(s.touched,u),d=ot(s.errors,u);return!!f&&!!d?a?Pf(a)?a(d):null:l?Pf(l)?l(d):null:o?k.exports.createElement(o,c,d):d:null},t}(k.exports.Component),FN=RN(jN),UN={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function zN(e){if(typeof e=="number")return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();n.includes(".")?t=parseFloat(n):t=parseInt(n,10);var r=(e.match(/[^0-9]*$/)||"").toString();return UN[r]?{value:t,unit:r}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}function Xu(e){var t=zN(e);return"".concat(t.value).concat(t.unit)}var BN=function(e,t,n){var r="react-spinners-".concat(e,"-").concat(n);if(typeof window>"u"||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var o=i.sheet,s=`
    @keyframes `.concat(r,` {
      `).concat(t,`
    }
  `);return o&&o.insertRule(s,0),r},Wa=globalThis&&globalThis.__assign||function(){return Wa=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Wa.apply(this,arguments)},HN=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},VN=BN("BeatLoader","50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}","beat");function Ga(e){var t=e.loading,n=t===void 0?!0:t,r=e.color,i=r===void 0?"#000000":r,o=e.speedMultiplier,s=o===void 0?1:o,a=e.cssOverride,l=a===void 0?{}:a,u=e.size,c=u===void 0?15:u,f=e.margin,d=f===void 0?2:f,g=HN(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),y=Wa({display:"inherit"},l),w=function(x){return{display:"inline-block",backgroundColor:i,width:Xu(c),height:Xu(c),margin:Xu(d),borderRadius:"100%",animation:"".concat(VN," ").concat(.7/s,"s ").concat(x%2?"0s":"".concat(.35/s,"s")," infinite linear"),animationFillMode:"both"}};return n?R("span",{...Wa({style:y},g),children:[v("span",{style:w(1)}),v("span",{style:w(2)}),v("span",{style:w(3)})]}):null}const os="https://api.jikan.moe/v4/",bt={limit:"?limit=",page:"page=",query:"?q=",typeOf:"type=",gender:"genres=",status:"status=",order:"order_by="},WN=async({query:e,limit:t=25,page:n=1})=>await(await fetch(`${os}${e}${bt.limit}${t}&${bt.page}${n}`)).json(),GN=async({type:e})=>await(await fetch(`https://api.jikan.moe/v4/top/${e}${bt.limit}10`)).json(),KN=async({type:e})=>await(await fetch(`https://api.jikan.moe/v4/watch/${e}${bt.limit}1`)).json(),YN=async({type:e="anime",id:t})=>await(await fetch(`${os}${e}/${t}`)).json(),qN=async({type:e,query:t,page:n})=>await(await fetch(`${os}${e}${t}&${bt.page}${n}`)).json(),k2=async({type:e="anime"})=>await(await fetch(`${os}genres/${e}`)).json(),XN=async({type:e="",typeOf:t="",gender:n="",status:r="",order:i="",page:o=1})=>await(await fetch(`${os}${e}?${bt.typeOf}${t}&${bt.gender}${n}&${bt.status}${r}&${bt.order}${i}&${bt.page}${o}`)).json(),QN=({type:e})=>{const[t,n]=k.exports.useState([]),[r,i]=k.exports.useState(!1),o=async({type:s})=>{i(!0);const a=await GN({type:s});n(a),i(!1)};return k.exports.useEffect(()=>{o({type:e})},[e]),{dataTop:t,loading:r}},Hh=({children:e,...t})=>v("h3",{className:`${t.fonts} dark:text-slate-100 text-stone-800`,children:e}),ev=({title:e,url:t,episodes:n,id:r,status:i,score:o,type:s,queryType:a})=>{const l=n?n.map((u,c)=>v("div",{className:"text-center font-sans text-[12px] rounded-md dark:text-orange-300 text-orange-400 font-semibold",children:u.title},e+c)):null;return R(fr,{to:`/anime-plataform/detail?id=${r}&type=${a}`,target:"_blank",className:" flex  items-center justify-between w-full gap-3 ","aria-label":"as",children:[v("h2",{className:"whitespace-nowrap text-ellipsis hover:text-orange-300 dark:text-slate-100 text-stone-800 font-semibold transition-colors overflow-hidden",children:e}),v("div",{className:` bg-blue-500 min-w-[60px] text-center px-3 font-sans text-sm  font-semibold rounded-md text-blue-50 decorator-${s}`,children:s}),l]})},JN=()=>{var f;const[e,t]=k.exports.useState([]),[n,r]=k.exports.useState([]),[i]=Fn(),o=i.get("type")?i.get("type"):"anime",{dataTop:s,loading:a}=QN({type:o}),l=(f=e==null?void 0:e.data)==null?void 0:f.map((d,g)=>v(ev,{type:d.type,url:d.url,queryType:o,id:d.mal_id,title:d.title,score:d.score,status:d.status},d.title)),u=n==null?void 0:n.map((d,g)=>v(ev,{queryType:o,episodes:d.episodes,id:d.entry.mal_id,title:d.entry.title,status:d.status},d.entry.mal_id+d.entry.title)),c=()=>{try{return KN({type:"episodes"})}catch(d){d.code===404&&console.log("not found "),console.log(FN)}};return k.exports.useEffect(()=>{s&&t(s)},[s]),k.exports.useEffect(()=>{c().then(d=>{if(d.data){const g=d.data.slice(0,10);r(g)}})},[o]),R("aside",{className:" p-4  overflow-y-scroll  lg-min:sticky lg-min:top-20 bg-slate-200 dark:bg-stone-900 shadow-lg  transition-colors max-h-[500px]   min-w-[300px] min-h-[400px] max-w-[350px] md:w-full flex flex-col justify-between gap-3  shrink-0",children:[R("div",{className:" relative w-full",children:[R("h2",{className:"mb-1 text-lg text-sky-400 font-bold dark:text-sky-300",children:["Top ",o]})," ",v("hr",{className:"w-full border-sky-400 dark:border-sky-100"})]}),!a&&e?l:v("div",{className:"absolute left-2/4 bottom-2/4 -translate-x-2/4  ",children:v(Ga,{color:"#1fa9ff",size:12})}),R("div",{className:"w-full",children:[v("h2",{className:"mb-1 text-lg text-sky-400 dark:text-sky-300 font-bold",children:"Recent Episodes"})," ",v("hr",{className:"w-full border-sky-400 dark:border-sky-100"})]}),!a&&n?u:v("div",{className:"absolute left-2/4 bottom-2/4 -translate-x-2/4  ",children:v(Ga,{color:"#1fa9ff",size:12})})]})},ZN=({query:e,limit:t,page:n})=>{const[r,i]=k.exports.useState([]),[o,s]=k.exports.useState({}),[a,l]=k.exports.useState(!1),u=async({query:c,limite:f,page:d})=>{l(!0);const g=await WN({query:c,limit:f,page:d}),{data:y}=await g,{pagination:w}=await g;i(y),s(w),l(!1)};return k.exports.useEffect(()=>{u({query:e,limit:t,page:n})},[n,e]),{data:r,pagination:o,loading:a}},eR=({isVisible:e})=>(console.log(e),v("button",{id:"detail-span",className:` z-[200] ${e} absolute  top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4  p-1 transition-all px-4 py-[1px] rounded-full  `,children:v(Je,{className:"text-slate-100 text-3xl",icon:OS})})),tR=({aired:e,background:t,type:n,duration:r,episodes:i,images:o,score:s,season:a,status:l,title:u,id:c,trailer:f})=>{const[d,g]=k.exports.useState(!1),y=d===!0?" isVisible":"isHidden",[w]=Fn(),x=w.get("type")?w.get("type"):"anime";return R(fr,{onMouseOver:()=>{g(!0)},onMouseOut:()=>{g(!1)},id:"anime-card",to:`/anime-plataform/detail?id=${c}&type=${x}`,className:" flex select-none flex-col w-40    hover:shadow-2xl  transition-all min-w-[10rem]  min-h-[200px] max-h-[300px]  md:basis-full  dark:bg-stone-900 bg-slate-200  flex-shrink-0 rounded-sm ",children:[R("div",{id:"card-image",className:"relative min-h-[200px]",children:[v("img",{className:" transition-all  w-full min-w-full min-h-full h-60 dark:bg-gray-700  bg-slate-300  object-cover ",src:o.jpg.image_url}),v("span",{id:"bourble-type",className:` text-slate-50 text-[12px] min-w-[60px] py-[2px] px-2 font-bold rounded-full    text-center  absolute bottom-1 left-1 decorator-${n}`,children:n}),v(eR,{isVisible:y})]}),v("div",{className:"p-2 ",children:v("h3",{className:"whitespace-nowrap overflow-hidden text-ellipsis block dark:text-slate-100 text-stone-800 font-semibold",fonts:"text-sm ",children:u})})]})},Af=({isFiltersLoading:e,isLoading:t,pagination:n,currentPage:r,setCurrentPage:i})=>{const[o,s]=k.exports.useState(Number),[a,l]=k.exports.useState({}),[u,c]=k.exports.useState(""),[f,d]=k.exports.useState(""),g=t===!0?"disabled":"",y=nn();function w(){a!=null&&a.has_next_page&&i(r+1)}function x(){r>1&&i(r-1)}return k.exports.useEffect(()=>{l(n)},[n]),k.exports.useEffect(()=>{d(u)},[]),k.exports.useEffect(()=>{c(y.pathname)},[y.pathname]),k.exports.useEffect(()=>{f!==u&&i(1)},[u]),k.exports.useEffect(()=>{var p,h,m;(p=a==null?void 0:a.items)!=null&&p.total&&s(Math.ceil(parseInt((h=a==null?void 0:a.items)==null?void 0:h.total)/parseInt((m=a==null?void 0:a.items)==null?void 0:m.per_page)))},[a]),R("nav",{className:"flex gap-2 items-end",children:[v("button",{disabled:g||r===1,onClick:x,className:"text-slate-50 disabled:opacity-50 transition-colors bg-orange-400/80 font-semibold px-2 py-1 rounded-sm",children:"Previously"}),v("button",{disabled:g||(a==null?void 0:a.has_next_page)===!1,onClick:w,className:"text-slate-50 disabled:opacity-50 bg-orange-400/80 font-semibold px-2 py-1 rounded-sm",children:"Next"}),o?R(Hh,{fonts:"text-sm  dark:text-slate-100 text-stone-800 font-semibold",children:["Page: ",r," of ",o," "]}):null]})},nR=()=>{const[e,t]=k.exports.useState(1),[n]=Fn(),r=n.get("type")?n.get("type"):"anime",{data:i,pagination:o,loading:s}=ZN({query:r,limit:25,page:e});return R("div",{className:"flex flex-col  gap-3",children:[v("div",{className:" ",children:v(Af,{isLoading:s,pagination:o,currentPage:e,setCurrentPage:t})}),v("section",{className:" relative w-full md-min:min-w-[600px] min-w-[300px] min-h-[300px]  flex-stats flex-wrap gap-4",children:!s&&i?i.map(({aired:a,background:l,mal_id:u,duration:c,episodes:f,images:d,score:g,type:y,season:w,status:x,title:p,trailer:h})=>v(tR,{aired:a,id:u,plot:l,duration:c,episodes:f,images:d,score:g,season:w,status:x,title:p,trailer:h,type:y},p)):v("div",{className:"absolute left-2/4  -translate-x-2/4 ",children:v(Ga,{color:"#1fa9ff",size:20})})})]})},rR=()=>{const{type:e}=v0();return document.title="Home",v(ns,{children:R("div",{className:"w-full pt-40  flex-stats-items-start lg:flex-wrap gap-20",children:[v(JN,{}),R("div",{className:"  flex-stats-col w-full gap-4 ",children:[v(Hh,{fonts:"text-3xl capitalize",children:e||"anime"}),v(nR,{})]})]})})},tv=({title:e,type:t,images:n,id:r})=>{const[i,o]=k.exports.useState(!1),s=i===!0?" isVisible":"isHidden",[a]=Fn(),l=a.get("type")?a.get("type"):"anime",u=()=>{o(!0)},c=()=>{o(!1)};return R(fr,{to:`/anime-plataform/detail?id=${r}&type=${l}`,className:"relative select-none flex flex-col w-[185px] bg-slate-300 dark:bg-stone-800 sm:w-full gap-2 rounded-sm justify-center items-center mb-2 shadow-lg",onMouseOver:u,onMouseOut:c,children:[R("div",{id:"card-image",className:"relative  w-full bg-slate-200 dark:bg-stone-700 p-1.5 rounded-sm",children:[v("img",{src:n.large_image_url,className:" w-full h-full  min-h-[250px] min-w-[150px] bg-slate-600  max-h-[250px] block bg-center bg-no-repeat bg-cover",alt:e}),v("span",{id:"bourble-type",className:`text-slate-50 text-[12px] min-w-[70px] py-[2px] px-2 font-bold rounded-full text-center absolute left-2 bottom-2 decorator-${t}`,children:t})]}),v("div",{children:v(Hh,{fonts:"whitespace-nowrap overflow-hidden text-ellipsis  flex flex-col justify-center pb-2  w-[160px]",children:e})}),v("div",{id:"detail-span",className:` ${s} absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4  p-1  hover:-translate-y-5 transition-all px-4 py-[1px] rounded-full  `,children:v(Je,{className:"text-pink-500 text-2xl   overflow-hidden ",icon:AS})})]})},iR=({type:e,query:t,page:n})=>{const[r,i]=k.exports.useState([]),[o,s]=k.exports.useState(!1),[a,l]=k.exports.useState({}),u=async({type:c,query:f,page:d})=>{s(!0);const g=await qN({type:c,query:f,page:d}),{data:y}=g,{pagination:w}=g;i(y),l(w),s(!1)};return k.exports.useEffect(()=>{u({type:e,query:t,page:n})},[e,t,n]),{data:r,pagination:a,loading:o}},oR=({value:e,name:t,id:n,label:r})=>R("div",{className:"w-max min-w-[60px] flex gap-[2px] items-center",children:[v("input",{type:"checkbox",className:"",value:e,name:t,id:n}),v("label",{className:"dark:text-stone-200 text-[12px] capitalize font-medium w-full ",htmlFor:n,children:r})]}),sR=({handleCheckboxChange:e,genresFilteredOut:t})=>{var f;const[n,r]=k.exports.useState([]),[i,o]=k.exports.useState(!1);v0();const[s]=Fn(),a=s.get("type")?s.get("type"):"anime",l=k.exports.useRef(),u=i===!0?"showModal":"",c=async()=>{const d=await k2({type:a});r(d)};return k.exports.useEffect(()=>{const d=g=>{i&&l.current&&!l.current.contains(g.target)&&o(!1)};return document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)}},[i]),k.exports.useEffect(()=>{c()},[a]),R("div",{ref:l,name:"genres",id:"genres",onChange:e,className:" min-w-[170px] cont-genres relative flex items-center justify-center cursor-pointer dark:bg-stone-800 bg-slate-200 select-none  rounded-sm h-8 px-2 ",children:[R("button",{type:"button",className:"absolute w-full h-full dark:text-slate-100 text-stone-700 font-semibold",onClick:()=>o(d=>!d),children:["Gender selected: ",t]}),v("div",{className:`menu-genres  ${u} dark:bg-stone-800 bg-slate-200 before:dark:border-y-stone-800`,children:(f=n==null?void 0:n.data)==null?void 0:f.map(d=>v(oR,{id:d.mal_id,value:d.mal_id,name:"genres",label:d.name},d.mal_id))})]})},aR=({SetfilterOut:e,currentPage:t,setCurrentPage:n})=>{const[r,i]=k.exports.useState({typeOf:"",genres:[],status:"",order:""}),o=Uo();nn();const[s]=Fn(),a=s.get("type")?s.get("type"):"anime",l=({target:f})=>{i({...r,[f.name]:f.value})},u=f=>{let d=[...r.genres,f.target.value];r.genres.includes(f.target.value)&&(d=d.filter(g=>g!==f.target.value)),i({...r,[f.target.name]:d})};return R("form",{className:"w-full h-12 flex-stats gap-2 flex-wrap pb-20",onSubmit:f=>{f.preventDefault(),e({typeOf:r.typeOf,gender:r.genres,status:r.status,order:r.order}),t>1&&n(1),o(`?type=${a}&typeOf=${r.typeOf}&genres=${r.genres}&status=${r.status}&order_by=${r.order}`)},children:[R(Wu,{name:"typeOf",handleChange:l,children:[v(he,{name:"All",value:"TV",children:"All"}),v(he,{name:"typeOf",value:"TV",children:"TV"}),v(he,{name:"typeOf",value:"Movie",children:"Movie"}),v(he,{name:"typeOf",value:"Special",children:"Special"}),v(he,{name:"typeOf",value:"Ova",children:"Ova"}),v(he,{name:"typeOf",value:"ONA",children:"Ona"})]}),v(sR,{genresFilteredOut:r.genres.length,handleCheckboxChange:u}),R(Wu,{name:"status",handleChange:l,children:[v(he,{name:"all",isSelected:"selected",value:"all",children:"Estado: All"}),v(he,{name:"airing",value:"airing",children:"Estado: Airing"}),v(he,{name:"complete",value:"complete",children:"Estado: Complete"}),v(he,{name:"upcoming",value:"upcoming",children:"Estado: Upcoming"})]}),R(Wu,{name:"order",handleChange:l,children:[v(he,{name:"default",isSelected:"selected",value:"default",children:"Order by: Default"}),v(he,{name:"popularity",value:"popularity",children:"Order by: Popularity"}),v(he,{name:"title",value:"title",children:"Order by: Title"}),v(he,{name:"type",value:"type",children:"Order by: Type "}),v(he,{name:"rating",value:"rating",children:"Order by: Rating"}),v(he,{name:"start_date",value:"start_date",children:"Order by: Start-date"}),v(he,{name:"end_date",value:"end_date",children:"Order by: End-date"}),v(he,{name:"favorites",value:"favorites",children:"Order by: Favorites"})]}),R("button",{type:"submit",className:" select-none  h-8 max-h-8 px-2 text-slate-50 font-bold bg-blue-500 text-md rounded-sm flex justify-center items-center gap-2",children:[v(Je,{color:"white",icon:Dx}),"Filtrar"]})]})},lR=({type:e,typeOf:t,gender:n,status:r,order:i,page:o})=>{const[s,a]=k.exports.useState([]),[l,u]=k.exports.useState({}),[c,f]=k.exports.useState(!1),d=async({type:g,typeOf:y,gender:w,status:x,order:p,page:h})=>{f(!0);const m=await XN({type:g,typeOf:y,gender:w,status:x,order:p,page:h});a(m.data),u(m.pagination),f(!1)};return k.exports.useEffect(()=>{d({type:e,typeOf:t,gender:n,status:r,order:i,page:o})},[e,t,n,r,i,o]),{filteredData:s,filteredLoading:c,filteredPagination:l}},uR=()=>{const[e,t]=k.exports.useState([]),[n,r]=k.exports.useState([]),[i,o]=k.exports.useState(1),{filtersSelected:s,setFiltersSelected:a}=k.exports.useContext(Ih),l=nn().search,[u]=Fn(),c=u.get("type")?u.get("type"):"anime";console.log(c,"search");const{data:f,pagination:d,loading:g}=iR({type:c,query:l,page:i}),{filteredData:y,filteredPagination:w,filteredLoading:x}=lR({type:c,typeOf:s==null?void 0:s.typeOf,gender:s==null?void 0:s.gender,status:s==null?void 0:s.status,order:s==null?void 0:s.order,page:i}),p=s?n.map(h=>v(tv,{title:h.title,type:h.type,images:h.images.jpg,id:h.mal_id},h.title+h.mal_id)):e.map(h=>v(tv,{title:h.title,type:h.type,images:h.images.jpg,id:h.mal_id},h.title+h.mal_id));return e&&e.sort((h,m)=>{if(h.type=="TV")return-1;if(h.type=="OVA")return 2;if(m.type=="Special")return 3;if(m.type=="ONA")return 0;if(m.type=="Movie")return-3}),k.exports.useEffect(()=>{f&&t(f)},[f]),k.exports.useEffect(()=>{y&&r(y)},[y]),v(ns,{children:R("div",{className:" pt-40 flex flex-col gap-6",children:[s?v(Af,{pagination:w,currentPage:i,setCurrentPage:o}):v(Af,{isLoading:g,isFiltersLoading:x,pagination:d,currentPage:i,setCurrentPage:o}),v(aR,{currentPage:i,setCurrentPage:o,SetfilterOut:a}),s?R("div",{className:"flex flex-col md:pt-4",children:[v("h2",{className:"font-semibold text-2xl dark:text-slate-200 text-stone-800",children:"Filters Selected:"})," ",R("h2",{className:"capitalize font-semibold dark:text-slate-300 text-stone-700",children:["Type: ",s.typeOf," / Status: ",s.status," / Order By: ",s.order," "]})," "]}):null,v("div",{className:"relative flex items-start w-full  min-h-[300px] md:pt-8 gap-4 flex-wrap",children:g?v("div",{className:"absolute left-2/4 bottom-2/4  -translate-2/4",children:v(Ga,{color:"#3b82f6",size:24})}):p})]})})},cR=({id:e,type:t})=>{const[n,r]=k.exports.useState([]),[i,o]=k.exports.useState(!1),s=async({id:a,type:l})=>{o(!0);const u=await YN({id:a,type:l});r(u.data),o(!1)};return k.exports.useEffect(()=>{s({id:e,type:t})},[e,t]),{data:n,loading:i}},to=({children:e,props:t})=>v("span",{className:`${t}`,children:e}),fR=()=>v("button",{className:"absolute w-full h-full  flex justify-center items-center",children:v("span",{className:"rounded-full bg-rose-500  w-8 h-8 py-2 flex justify-center items-center px-2",children:v(Je,{className:"text-lg text-white ",icon:Mx})})}),dR=({score:e,scoreBy:t})=>{let n=[];for(let r=0;r<e/2;r++)n.push(v(Je,{className:"score-bg  ",icon:RS},r));return R("div",{className:"dark:text-slate-100 text-stone-700 pt-1 text-[12px] flex flex-col justify-center items-center",children:[v("span",{children:n}),R("span",{children:[t," Votes"]})]})},hR=({poster:e,members:t,airing:n})=>R("aside",{className:"flex flex-col gap-4 min-w-[250px] relative lg-min:-top-52   xl-min:left-4 md:w-full",children:[v("picture",{className:" p-1 dark:bg-stone-900  bg-slate-100 rounded-sm md-w-full shadow-lg dark:shadow-slate-600/5 ",children:v("img",{className:" h-full max-h-[500px]    min-w-[200px] w-full md-w-full object-cover",src:e,alt:"poster_anime"})}),R("div",{className:"flex-stats gap-4",children:[v("div",{className:"relative basis-2/4 bg-slate-200 dark:bg-stone-900 shadow-lg dark:shadow-slate-600/5 rounded-md h-12 flex  justify-center items-center",children:v(fR,{})}),R("div",{className:`basis-2/4 text-slate-50 font-semibold shadow-lg dark:shadow-slate-600/5 rounded-md h-12 select-none flex text-lg  justify-center items-center ${n?"bg-green-400":"bg-rose-600"} `,children:[" ",n?v("h2",{children:"In Transmission"}):v("h2",{children:"Finished"})," "]})]}),v("div",{className:"h-[300px] w-full dark:bg-stone-900 bg-slate-200 rounded-md shadow-lg dark:shadow-slate-600/5",children:v("div",{className:"border-b-[1.5px] p-2 border-white/80 dark:border-black/60",children:R("h2",{className:"dark:text-slate-100 text-stone-800 font-bold text-lg ",children:["Followers: ",R(to,{props:"text-sky-400",children:[" ",t]})," "]})})})]}),nv=()=>{var c,f,d,g,y,w,x,p,h,m,_,E,I,S,b,L;const[e,t]=k.exports.useState({});k.exports.useState([]);const[n,r]=k.exports.useState([]),[i]=Fn(),o=i.get("type")?i.get("type"):"anime",s=i.get("id"),{data:a}=cR({type:o,id:s}),l=async()=>{const N=await k2({type:o});r(N)};e&&((c=e==null?void 0:e.studios)==null||c.map(N=>v("a",{className:"text-stone-800 dark:text-slate-100 font-semibold",target:"_blank",href:N.url,children:v(to,{props:"text-blue-300",children:N.name})},N.name)));const u=e&&((f=e==null?void 0:e.genres)==null?void 0:f.map(N=>{var kt;const G=n&&((kt=n==null?void 0:n.data)==null?void 0:kt.filter(ss=>ss.name===N.name)),Pe={};for(var Ve=0;Ve<(G==null?void 0:G.length);Ve++)Pe.id=G[Ve].mal_id;return v(fr,{to:`/anime-plataform/search?genres=${Pe.id}`,href:N.url,className:"text-sky-400  bg-sky-200/60 dark:bg-sky-200/10 hover:text-slate-100 hover:bg-sky-400 dark:hover:bg-sky-400 shadow-sm  rounded-full min-w-[25px]  px-3 py-1 text-center  text-[13px]  font-bold",target:"_blank",children:N.name},N.name)}));return e.episodes&&e.episodes,e.aired?((d=e.aired)==null||d.prop.from.day,(g=e.aired)==null||g.prop.from.month,(y=e.aired)==null||y.prop.from.year,(w=e.aired)==null||w.prop.to.day,(x=e.aired)==null||x.prop.from.month,(p=e.aired)==null||p.prop.from.year):((h=e.published)==null||h.prop.from.day,(m=e.published)==null||m.prop.from.month,(_=e.published)==null||_.prop.from.year,(E=e.published)==null||E.prop.to.day,(I=e.published)==null||I.prop.from.month,(S=e.published)==null||S.prop.from.year),k.exports.useEffect(()=>{a&&t(a)},[a]),k.exports.useEffect(()=>(e&&(document.title=`Detail ${e.title}`),()=>{document.title="AnimeDV"}),[e]),k.exports.useEffect(()=>{l()},[]),console.log(e,"detail"),R("div",{className:" flex flex-col pt-[57px]  gap-6 w-full",children:[v("div",{className:"   relative w-full dark:bg-slate-200 bg-stone-900 pb-10 px-4 h-80 flex flex-col  justify-end items-center",children:R("div",{className:"flex  md:flex-col md:justify-center md:items-start md:gap-4  gap-2  w-full  items-start ",children:[v("div",{className:" lg-min:basis-2/5"}),R("div",{className:"flex flex-col flex-1 gap-2   xl-min:pl-2  items-start ",children:[v("h4",{className:"text-3xl dark:text-stone-800 text-slate-200 font-bold",children:e.title}),v(fr,{to:`/anime-plataform/search?typeOf=${e.type}`,className:"bg-sky-500 px-6 py-[1px] text-slate-100  rounded-full font-semibold",children:e.type}),R("div",{className:"flex gap-2",children:[R("h4",{className:"text-sm font-serif dark:text-stone-800 text-stone-100 dark:bg-slate-300 bg-stone-700 font-medium px-2 p-[3px] rounded-md ",children:[e.title_english," "]}),R("h4",{className:"text-sm font-serif dark:text-stone-800 text-stone-100 dark:bg-slate-300 bg-stone-700 font-medium px-2 p-[3px] rounded-md ",children:[e.title_japanese," "]})]})]}),v("div",{className:"basis-1/5  ",children:R("div",{className:"flex max-w-[200px] min-w-[200px] rounded-sm overflow-hidden",children:[v("div",{className:"w-2/5 flex  items-center justify-center  text-center bg-sky-500 text-slate-100  font-bold text-lg  capitalize p-2",children:e.score/2}),R("div",{className:"w-3/5 dark:bg-stone-800 bg-slate-200 font-bold p-[2px] text-center",children:[" ",v(dR,{score:e.score,scoreBy:e.scored_by})]})]})})]})}),v(ns,{children:R("div",{className:"flex gap-5 items-start w-full md:flex-col md:items-center ",children:[v(hR,{poster:(L=(b=e==null?void 0:e.images)==null?void 0:b.jpg)==null?void 0:L.large_image_url,members:e.members,airing:e.airing}),v("main",{className:"w-4/5 md:w-full flex-col px-4 md:px-0",children:R("div",{className:"w-full dark:bg-stone-900 bg-slate-200 min-h-[250px] shadow-lg p-4 flex flex-col gap-3",children:[v("h2",{className:"text-lg dark:text-slate-100 text-stone-800 font-bold",children:"Synopsis"}),v("div",{className:"flex flex-wrap gap-3 w-full",children:u}),v("p",{className:"dark:text-stone-300   text-stone-700 text-[12.5px] font-semibold text-left lett ",children:e.synopsis})]})})]})})]})},pR=()=>v(ns,{children:R("div",{className:"text-center flex-col pt-60",children:[v(Je,{className:"dark:text-slate-200 text-stone-800 text-6xl font-bold",icon:PS}),R("h2",{className:"  text-6xl dark:text-slate-200 text-stone-800 font-bold ",children:[" ",v(to,{props:"text-orange-400",children:"Error 404"})," ",v("br",{})," There isn't match found "]})]})}),mR=k.exports.createContext({});function gR({children:e}){const[t,n]=k.exports.useState([]),[r,i]=k.exports.useState(),o=s=>(console.log("favorite"),v(hS,{to:"/login"}));return v(mR.Provider,{value:{favoritesList:t,addToFavorite:o,setFavoritesList:n,isFavorite:r,setIsFavorite:i},children:e})}function vR(){const{darkMode:e,handleDarkMode:t}=k.exports.useContext(zw),n=e?"dark":"",r=e?"bg-black/95":"bg-slate-100";return console.log({VITE_APIKEY:"AIzaSyBneb9pO7geeJhe_VWCBlc-D6pcnjdG5-E",VITE_AUTHDOMAIN:"animedv-992b9.firebaseapp.com",VITE_PROJECTID:"animedv-992b9",VITE_STORAGEBUCKET:"animedv-992b9.appspot.com",VITE_MESSAGINGSENDERID:"249151580863",VITE_APPID:"1:249151580863:web:dd590a572bd3b00862340a",BASE_URL:"/anime-plataform/",MODE:"production",DEV:!1,PROD:!0}),v(G4,{children:v(gR,{children:R("div",{className:`${n} ${r}   min-h-screen`,children:[v(q4,{handleDarkMode:t,darkMode:e}),R(mS,{children:[v(Kn,{path:"/anime-plataform/detail",element:v(nv,{})}),v(Kn,{path:"*",element:v(pR,{})}),v(Kn,{path:"/anime-plataform/",element:v(rR,{})}),v(Kn,{path:"/anime-plataform/:type/detail/:id",element:v(nv,{})}),v(Kn,{path:"/anime-plataform/search/",element:v(uR,{})}),v(Kn,{path:"/anime-plataform/login",element:v(Uw,{})})]}),v(Q4,{})]})})})}Qu.createRoot(document.getElementById("root")).render(v(X4,{children:v(yS,{children:v(vR,{})})}))});export default yR();
