/* empty css              */import{a as p}from"./chunk-8501fdf2.js";/* empty css              */L();function L(){const e=document.getElementById("navigation-content");p(e);const t=window.location.pathname,n=Array.from(e.querySelectorAll(`a[href="${t}"]`));p(n.length<=1,{navLinks:n,href:t});const r=n[0];!r||r.scrollIntoView({behavior:"auto",block:"center",inline:"center"})}T();function T(){if(!document.querySelector(".doc-page #page-container")){p(window.location.pathname==="/");return}const t=document.getElementById("navigation-content");p(t),Array.from(document.querySelectorAll("h2")).forEach(r=>{const u=r.textContent;p(u),p(r.id,{docSection:r});const i="#"+r.id;q(t,i),r.onclick=()=>{window.location.hash=i,N()}})}function q(e,t){const n=Array.from(e.querySelectorAll(`a[href="${window.location.pathname}"]`));if(p(n.length<=1),n.length===0)return;const r=Array.from(e.querySelectorAll(`a[href="${t}"]`));p(r.length===1,{urlHash:t})}function N(){const{hash:e}=window.location;if(e===""||e==="#")return;p(e.startsWith("#"));const t=document.getElementById(e.slice(1));!t||t.scrollIntoView()}M();V();function V(){const e=document.getElementById("menu-toggle");e.onclick=C}function M(){const e=document.getElementById("navigation-mask");e.onclick=C}function C(){document.body.classList.toggle("show-menu")}var B={exports:{}},o={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=Symbol.for("react.element"),D=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),F=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),W=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),K=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),E=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=E&&e[E]||e["@@iterator"],typeof e=="function"?e:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I=Object.assign,j={};function y(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||R}y.prototype.isReactComponent={};y.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function x(){}x.prototype=y.prototype;function g(e,t,n){this.props=e,this.context=t,this.refs=j,this.updater=n||R}var S=g.prototype=new x;S.constructor=g;I(S,y.prototype);S.isPureReactComponent=!0;var $=Array.isArray,A=Object.prototype.hasOwnProperty,k={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,n){var r,u={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)A.call(t,r)&&!O.hasOwnProperty(r)&&(u[r]=t[r]);var l=arguments.length-2;if(l===1)u.children=n;else if(1<l){for(var c=Array(l),f=0;f<l;f++)c[f]=arguments[f+2];u.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)u[r]===void 0&&(u[r]=l[r]);return{$$typeof:d,type:e,key:i,ref:s,props:u,_owner:k.current}}function X(e,t){return{$$typeof:d,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function w(e){return typeof e=="object"&&e!==null&&e.$$typeof===d}function Z(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var b=/\/+/g;function _(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Z(""+e.key):t.toString(36)}function m(e,t,n,r,u){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case d:case D:s=!0}}if(s)return s=e,u=u(s),e=r===""?"."+_(s,0):r,$(u)?(n="",e!=null&&(n=e.replace(b,"$&/")+"/"),m(u,t,n,"",function(f){return f})):u!=null&&(w(u)&&(u=X(u,n+(!u.key||s&&s.key===u.key?"":(""+u.key).replace(b,"$&/")+"/")+e)),t.push(u)),1;if(s=0,r=r===""?".":r+":",$(e))for(var l=0;l<e.length;l++){i=e[l];var c=r+_(i,l);s+=m(i,t,n,c,u)}else if(c=Y(e),typeof c=="function")for(e=c.call(e),l=0;!(i=e.next()).done;)i=i.value,c=r+_(i,l++),s+=m(i,t,n,c,u);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function h(e,t,n){if(e==null)return e;var r=[],u=0;return m(e,r,"","",function(i){return t.call(n,i,u++)}),r}function ee(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var a={current:null},v={transition:null},te={ReactCurrentDispatcher:a,ReactCurrentBatchConfig:v,ReactCurrentOwner:k};o.Children={map:h,forEach:function(e,t,n){h(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return h(e,function(){t++}),t},toArray:function(e){return h(e,function(t){return t})||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};o.Component=y;o.Fragment=U;o.Profiler=H;o.PureComponent=g;o.StrictMode=F;o.Suspense=J;o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te;o.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=I({},e.props),u=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=k.current),t.key!==void 0&&(u=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)A.call(t,c)&&!O.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var f=0;f<c;f++)l[f]=arguments[f+2];r.children=l}return{$$typeof:d,type:e.type,key:u,ref:i,props:r,_owner:s}};o.createContext=function(e){return e={$$typeof:W,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:z,_context:e},e.Consumer=e};o.createElement=P;o.createFactory=function(e){var t=P.bind(null,e);return t.type=e,t};o.createRef=function(){return{current:null}};o.forwardRef=function(e){return{$$typeof:G,render:e}};o.isValidElement=w;o.lazy=function(e){return{$$typeof:Q,_payload:{_status:-1,_result:e},_init:ee}};o.memo=function(e,t){return{$$typeof:K,type:e,compare:t===void 0?null:t}};o.startTransition=function(e){var t=v.transition;v.transition={};try{e()}finally{v.transition=t}};o.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};o.useCallback=function(e,t){return a.current.useCallback(e,t)};o.useContext=function(e){return a.current.useContext(e)};o.useDebugValue=function(){};o.useDeferredValue=function(e){return a.current.useDeferredValue(e)};o.useEffect=function(e,t){return a.current.useEffect(e,t)};o.useId=function(){return a.current.useId()};o.useImperativeHandle=function(e,t,n){return a.current.useImperativeHandle(e,t,n)};o.useInsertionEffect=function(e,t){return a.current.useInsertionEffect(e,t)};o.useLayoutEffect=function(e,t){return a.current.useLayoutEffect(e,t)};o.useMemo=function(e,t){return a.current.useMemo(e,t)};o.useReducer=function(e,t,n){return a.current.useReducer(e,t,n)};o.useRef=function(e){return a.current.useRef(e)};o.useState=function(e){return a.current.useState(e)};o.useSyncExternalStore=function(e,t,n){return a.current.useSyncExternalStore(e,t,n)};o.useTransition=function(){return a.current.useTransition()};o.version="18.2.0";(function(e){e.exports=o})(B);
