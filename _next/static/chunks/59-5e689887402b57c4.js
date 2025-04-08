"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[59],{3093:(e,t,n)=>{n.d(t,{s:()=>i,t:()=>a});var r=n(2149);function o(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function a(...e){return t=>{let n=!1,r=e.map(e=>{let r=o(e,t);return n||"function"!=typeof r||(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];"function"==typeof n?n():o(e[t],null)}}}}function i(...e){return r.useCallback(a(...e),e)}},4722:(e,t,n)=>{n.d(t,{hO:()=>l,sG:()=>u});var r=n(2149),o=n(4632),a=n(9668),i=n(8081),u=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=r.forwardRef((e,n)=>{let{asChild:r,...o}=e,u=r?a.DX:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(u,{...o,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{});function l(e,t){e&&o.flushSync(()=>e.dispatchEvent(t))}},5348:(e,t,n)=>{n.d(t,{bm:()=>ti,UC:()=>tr,VY:()=>ta,hJ:()=>tn,ZL:()=>tt,bL:()=>e7,hE:()=>to,l9:()=>te});var r,o,a=n(2149),i=n.t(a,2);function u(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}var l=n(3093),c=n(8081),s=globalThis?.document?a.useLayoutEffect:()=>{},d=i["useId".toString()]||(()=>void 0),f=0;function p(e){let[t,n]=a.useState(d());return s(()=>{e||n(e=>e??String(f++))},[e]),e||(t?`radix-${t}`:"")}function v(e){let t=a.useRef(e);return a.useEffect(()=>{t.current=e}),a.useMemo(()=>(...e)=>t.current?.(...e),[])}var m=n(4722),h="dismissableLayer.update",g=a.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),y=a.forwardRef((e,t)=>{var n,o;let{disableOutsidePointerEvents:i=!1,onEscapeKeyDown:s,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:p,onDismiss:y,...w}=e,C=a.useContext(g),[N,x]=a.useState(null),R=null!==(o=null==N?void 0:N.ownerDocument)&&void 0!==o?o:null===(n=globalThis)||void 0===n?void 0:n.document,[,O]=a.useState({}),S=(0,l.s)(t,e=>x(e)),D=Array.from(C.layers),[A]=[...C.layersWithOutsidePointerEventsDisabled].slice(-1),L=D.indexOf(A),P=N?D.indexOf(N):-1,k=C.layersWithOutsidePointerEventsDisabled.size>0,M=P>=L,T=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=v(e),o=a.useRef(!1),i=a.useRef(()=>{});return a.useEffect(()=>{let e=e=>{if(e.target&&!o.current){let t=function(){b("dismissableLayer.pointerDownOutside",r,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",i.current),i.current=t,n.addEventListener("click",i.current,{once:!0})):t()}else n.removeEventListener("click",i.current);o.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",i.current)}},[n,r]),{onPointerDownCapture:()=>o.current=!0}}(e=>{let t=e.target,n=[...C.branches].some(e=>e.contains(t));!M||n||(null==d||d(e),null==p||p(e),e.defaultPrevented||null==y||y())},R),j=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=v(e),o=a.useRef(!1);return a.useEffect(()=>{let e=e=>{e.target&&!o.current&&b("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}(e=>{let t=e.target;[...C.branches].some(e=>e.contains(t))||(null==f||f(e),null==p||p(e),e.defaultPrevented||null==y||y())},R);return!function(e,t=globalThis?.document){let n=v(e);a.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{P===C.layers.size-1&&(null==s||s(e),!e.defaultPrevented&&y&&(e.preventDefault(),y()))},R),a.useEffect(()=>{if(N)return i&&(0===C.layersWithOutsidePointerEventsDisabled.size&&(r=R.body.style.pointerEvents,R.body.style.pointerEvents="none"),C.layersWithOutsidePointerEventsDisabled.add(N)),C.layers.add(N),E(),()=>{i&&1===C.layersWithOutsidePointerEventsDisabled.size&&(R.body.style.pointerEvents=r)}},[N,R,i,C]),a.useEffect(()=>()=>{N&&(C.layers.delete(N),C.layersWithOutsidePointerEventsDisabled.delete(N),E())},[N,C]),a.useEffect(()=>{let e=()=>O({});return document.addEventListener(h,e),()=>document.removeEventListener(h,e)},[]),(0,c.jsx)(m.sG.div,{...w,ref:S,style:{pointerEvents:k?M?"auto":"none":void 0,...e.style},onFocusCapture:u(e.onFocusCapture,j.onFocusCapture),onBlurCapture:u(e.onBlurCapture,j.onBlurCapture),onPointerDownCapture:u(e.onPointerDownCapture,T.onPointerDownCapture)})});function E(){let e=new CustomEvent(h);document.dispatchEvent(e)}function b(e,t,n,r){let{discrete:o}=r,a=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&a.addEventListener(e,t,{once:!0}),o?(0,m.hO)(a,i):a.dispatchEvent(i)}y.displayName="DismissableLayer",a.forwardRef((e,t)=>{let n=a.useContext(g),r=a.useRef(null),o=(0,l.s)(t,r);return a.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,c.jsx)(m.sG.div,{...e,ref:o})}).displayName="DismissableLayerBranch";var w="focusScope.autoFocusOnMount",C="focusScope.autoFocusOnUnmount",N={bubbles:!1,cancelable:!0},x=a.forwardRef((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:i,...u}=e,[s,d]=a.useState(null),f=v(o),p=v(i),h=a.useRef(null),g=(0,l.s)(t,e=>d(e)),y=a.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;a.useEffect(()=>{if(r){let e=function(e){if(y.paused||!s)return;let t=e.target;s.contains(t)?h.current=t:S(h.current,{select:!0})},t=function(e){if(y.paused||!s)return;let t=e.relatedTarget;null===t||s.contains(t)||S(h.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&S(s)});return s&&n.observe(s,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,s,y.paused]),a.useEffect(()=>{if(s){D.add(y);let e=document.activeElement;if(!s.contains(e)){let t=new CustomEvent(w,N);s.addEventListener(w,f),s.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.activeElement;for(let r of e)if(S(r,{select:t}),document.activeElement!==n)return}(R(s).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&S(s))}return()=>{s.removeEventListener(w,f),setTimeout(()=>{let t=new CustomEvent(C,N);s.addEventListener(C,p),s.dispatchEvent(t),t.defaultPrevented||S(null!=e?e:document.body,{select:!0}),s.removeEventListener(C,p),D.remove(y)},0)}}},[s,f,p,y]);let E=a.useCallback(e=>{if(!n&&!r||y.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,a]=function(e){let t=R(e);return[O(t,e),O(t.reverse(),e)]}(t);r&&a?e.shiftKey||o!==a?e.shiftKey&&o===r&&(e.preventDefault(),n&&S(a,{select:!0})):(e.preventDefault(),n&&S(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,y.paused]);return(0,c.jsx)(m.sG.div,{tabIndex:-1,...u,ref:g,onKeyDown:E})});function R(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function O(e,t){for(let n of e)if(!function(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function S(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}x.displayName="FocusScope";var D=function(){let e=[];return{add(t){let n=e[0];t!==n&&(null==n||n.pause()),(e=A(e,t)).unshift(t)},remove(t){var n;null===(n=(e=A(e,t))[0])||void 0===n||n.resume()}}}();function A(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}var L=n(4632),P=a.forwardRef((e,t)=>{var n,r;let{container:o,...i}=e,[u,l]=a.useState(!1);s(()=>l(!0),[]);let d=o||u&&(null===(r=globalThis)||void 0===r?void 0:null===(n=r.document)||void 0===n?void 0:n.body);return d?L.createPortal((0,c.jsx)(m.sG.div,{...i,ref:t}),d):null});P.displayName="Portal";var k=e=>{let{present:t,children:n}=e,r=function(e){var t,n;let[r,o]=a.useState(),i=a.useRef({}),u=a.useRef(e),l=a.useRef("none"),[c,d]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},a.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return a.useEffect(()=>{let e=M(i.current);l.current="mounted"===c?e:"none"},[c]),s(()=>{let t=i.current,n=u.current;if(n!==e){let r=l.current,o=M(t);e?d("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?d("UNMOUNT"):n&&r!==o?d("ANIMATION_OUT"):d("UNMOUNT"),u.current=e}},[e,d]),s(()=>{if(r){var e;let t;let n=null!==(e=r.ownerDocument.defaultView)&&void 0!==e?e:window,o=e=>{let o=M(i.current).includes(e.animationName);if(e.target===r&&o&&(d("ANIMATION_END"),!u.current)){let e=r.style.animationFillMode;r.style.animationFillMode="forwards",t=n.setTimeout(()=>{"forwards"===r.style.animationFillMode&&(r.style.animationFillMode=e)})}},a=e=>{e.target===r&&(l.current=M(i.current))};return r.addEventListener("animationstart",a),r.addEventListener("animationcancel",o),r.addEventListener("animationend",o),()=>{n.clearTimeout(t),r.removeEventListener("animationstart",a),r.removeEventListener("animationcancel",o),r.removeEventListener("animationend",o)}}d("ANIMATION_END")},[r,d]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:a.useCallback(e=>{e&&(i.current=getComputedStyle(e)),o(e)},[])}}(t),o="function"==typeof n?n({present:r.isPresent}):a.Children.only(n),i=(0,l.s)(r.ref,function(e){var t,n;let r=null===(t=Object.getOwnPropertyDescriptor(e.props,"ref"))||void 0===t?void 0:t.get,o=r&&"isReactWarning"in r&&r.isReactWarning;return o?e.ref:(o=(r=null===(n=Object.getOwnPropertyDescriptor(e,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(o));return"function"==typeof n||r.isPresent?a.cloneElement(o,{ref:i}):null};function M(e){return(null==e?void 0:e.animationName)||"none"}k.displayName="Presence";var T=0;function j(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var I=function(){return(I=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function F(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}Object.create;Object.create;var W=("function"==typeof SuppressedError&&SuppressedError,"right-scroll-bar-position"),_="width-before-scroll-bar";function B(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var U="undefined"!=typeof window?a.useLayoutEffect:a.useEffect,$=new WeakMap;function G(e){return e}var K=function(e){void 0===e&&(e={});var t,n,r,o,a=(t=null,void 0===n&&(n=G),r=[],o=!1,{read:function(){if(o)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:null},useMedium:function(e){var t=n(e,o);return r.push(t),function(){r=r.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(o=!0;r.length;){var t=r;r=[],t.forEach(e)}r={push:function(t){return e(t)},filter:function(){return r}}},assignMedium:function(e){o=!0;var t=[];if(r.length){var n=r;r=[],n.forEach(e),t=r}var a=function(){var n=t;t=[],n.forEach(e)},i=function(){return Promise.resolve().then(a)};i(),r={push:function(e){t.push(e),i()},filter:function(e){return t=t.filter(e),r}}}});return a.options=I({async:!0,ssr:!1},e),a}(),X=function(){},Z=a.forwardRef(function(e,t){var n,r,o,i,u=a.useRef(null),l=a.useState({onScrollCapture:X,onWheelCapture:X,onTouchMoveCapture:X}),c=l[0],s=l[1],d=e.forwardProps,f=e.children,p=e.className,v=e.removeScrollBar,m=e.enabled,h=e.shards,g=e.sideCar,y=e.noIsolation,E=e.inert,b=e.allowPinchZoom,w=e.as,C=e.gapMode,N=F(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),x=(n=[u,t],r=function(e){return n.forEach(function(t){return B(t,e)})},(o=(0,a.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,i=o.facade,U(function(){var e=$.get(i);if(e){var t=new Set(e),r=new Set(n),o=i.current;t.forEach(function(e){r.has(e)||B(e,null)}),r.forEach(function(e){t.has(e)||B(e,o)})}$.set(i,n)},[n]),i),R=I(I({},N),c);return a.createElement(a.Fragment,null,m&&a.createElement(g,{sideCar:K,removeScrollBar:v,shards:h,noIsolation:y,inert:E,setCallbacks:s,allowPinchZoom:!!b,lockRef:u,gapMode:C}),d?a.cloneElement(a.Children.only(f),I(I({},R),{ref:x})):a.createElement(void 0===w?"div":w,I({},R,{className:p,ref:x}),f))});Z.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},Z.classNames={fullWidth:_,zeroRight:W};var Y=function(e){var t=e.sideCar,n=F(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return a.createElement(r,I({},n))};Y.isSideCarExport=!0;var z=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=o||n.nc;return t&&e.setAttribute("nonce",t),e}())){var a,i;(a=t).styleSheet?a.styleSheet.cssText=r:a.appendChild(document.createTextNode(r)),i=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(i)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},V=function(){var e=z();return function(t,n){a.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},H=function(){var e=V();return function(t){return e(t.styles,t.dynamic),null}},q={left:0,top:0,right:0,gap:0},J=function(e){return parseInt(e||"",10)||0},Q=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[J(n),J(r),J(o)]},ee=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return q;var t=Q(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},et=H(),en="data-scroll-locked",er=function(e,t,n,r){var o=e.left,a=e.top,i=e.right,u=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(u,"px ").concat(r,";\n  }\n  body[").concat(en,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(u,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(W," {\n    right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(_," {\n    margin-right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(W," .").concat(W," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(_," .").concat(_," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(en,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(u,"px;\n  }\n")},eo=function(){var e=parseInt(document.body.getAttribute(en)||"0",10);return isFinite(e)?e:0},ea=function(){a.useEffect(function(){return document.body.setAttribute(en,(eo()+1).toString()),function(){var e=eo()-1;e<=0?document.body.removeAttribute(en):document.body.setAttribute(en,e.toString())}},[])},ei=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r;ea();var i=a.useMemo(function(){return ee(o)},[o]);return a.createElement(et,{styles:er(i,!t,o,n?"":"!important")})},eu=!1;if("undefined"!=typeof window)try{var el=Object.defineProperty({},"passive",{get:function(){return eu=!0,!0}});window.addEventListener("test",el,el),window.removeEventListener("test",el,el)}catch(e){eu=!1}var ec=!!eu&&{passive:!1},es=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&(n.overflowY!==n.overflowX||"TEXTAREA"===e.tagName||"visible"!==n[t])},ed=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),ef(e,r)){var o=ep(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},ef=function(e,t){return"v"===e?es(t,"overflowY"):es(t,"overflowX")},ep=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},ev=function(e,t,n,r,o){var a,i=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),u=i*r,l=n.target,c=t.contains(l),s=!1,d=u>0,f=0,p=0;do{var v=ep(e,l),m=v[0],h=v[1]-v[2]-i*m;(m||h)&&ef(e,l)&&(f+=h,p+=m),l=l instanceof ShadowRoot?l.host:l.parentNode}while(!c&&l!==document.body||c&&(t.contains(l)||t===l));return d&&(o&&1>Math.abs(f)||!o&&u>f)?s=!0:!d&&(o&&1>Math.abs(p)||!o&&-u>p)&&(s=!0),s},em=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},eh=function(e){return[e.deltaX,e.deltaY]},eg=function(e){return e&&"current"in e?e.current:e},ey=0,eE=[];let eb=(K.useMedium(function(e){var t=a.useRef([]),n=a.useRef([0,0]),r=a.useRef(),o=a.useState(ey++)[0],i=a.useState(H)[0],u=a.useRef(e);a.useEffect(function(){u.current=e},[e]),a.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(eg),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var l=a.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!u.current.allowPinchZoom;var o,a=em(e),i=n.current,l="deltaX"in e?e.deltaX:i[0]-a[0],c="deltaY"in e?e.deltaY:i[1]-a[1],s=e.target,d=Math.abs(l)>Math.abs(c)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=ed(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=ed(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(l||c)&&(r.current=o),!o)return!0;var p=r.current||o;return ev(p,t,e,"h"===p?l:c,!0)},[]),c=a.useCallback(function(e){if(eE.length&&eE[eE.length-1]===i){var n="deltaY"in e?eh(e):em(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(u.current.shards||[]).map(eg).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?l(e,o[0]):!u.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),s=a.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),d=a.useCallback(function(e){n.current=em(e),r.current=void 0},[]),f=a.useCallback(function(t){s(t.type,eh(t),t.target,l(t,e.lockRef.current))},[]),p=a.useCallback(function(t){s(t.type,em(t),t.target,l(t,e.lockRef.current))},[]);a.useEffect(function(){return eE.push(i),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:p}),document.addEventListener("wheel",c,ec),document.addEventListener("touchmove",c,ec),document.addEventListener("touchstart",d,ec),function(){eE=eE.filter(function(e){return e!==i}),document.removeEventListener("wheel",c,ec),document.removeEventListener("touchmove",c,ec),document.removeEventListener("touchstart",d,ec)}},[]);var v=e.removeScrollBar,m=e.inert;return a.createElement(a.Fragment,null,m?a.createElement(i,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,v?a.createElement(ei,{gapMode:e.gapMode}):null)}),Y);var ew=a.forwardRef(function(e,t){return a.createElement(Z,I({},e,{ref:t,sideCar:eb}))});ew.classNames=Z.classNames;var eC=function(e){return"undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body},eN=new WeakMap,ex=new WeakMap,eR={},eO=0,eS=function(e){return e&&(e.host||eS(e.parentNode))},eD=function(e,t,n,r){var o=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=eS(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});eR[n]||(eR[n]=new WeakMap);var a=eR[n],i=[],u=new Set,l=new Set(o),c=function(e){!(!e||u.has(e))&&(u.add(e),c(e.parentNode))};o.forEach(c);var s=function(e){!(!e||l.has(e))&&Array.prototype.forEach.call(e.children,function(e){if(u.has(e))s(e);else try{var t=e.getAttribute(r),o=null!==t&&"false"!==t,l=(eN.get(e)||0)+1,c=(a.get(e)||0)+1;eN.set(e,l),a.set(e,c),i.push(e),1===l&&o&&ex.set(e,!0),1===c&&e.setAttribute(n,"true"),o||e.setAttribute(r,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return s(t),u.clear(),eO++,function(){i.forEach(function(e){var t=eN.get(e)-1,o=a.get(e)-1;eN.set(e,t),a.set(e,o),t||(ex.has(e)||e.removeAttribute(r),ex.delete(e)),o||e.removeAttribute(n)}),--eO||(eN=new WeakMap,eN=new WeakMap,ex=new WeakMap,eR={})}},eA=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||eC(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),eD(r,o,n,"aria-hidden")):function(){return null}},eL=n(9668),eP="Dialog",[ek,eM]=function(e,t=[]){let n=[],r=()=>{let t=n.map(e=>a.createContext(e));return function(n){let r=n?.[e]||t;return a.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return r.scopeName=e,[function(t,r){let o=a.createContext(r),i=n.length;n=[...n,r];let u=t=>{let{scope:n,children:r,...u}=t,l=n?.[e]?.[i]||o,s=a.useMemo(()=>u,Object.values(u));return(0,c.jsx)(l.Provider,{value:s,children:r})};return u.displayName=t+"Provider",[u,function(n,u){let l=u?.[e]?.[i]||o,c=a.useContext(l);if(c)return c;if(void 0!==r)return r;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return a.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}(r,...t)]}(eP),[eT,ej]=ek(eP),eI=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:i,modal:u=!0}=e,l=a.useRef(null),s=a.useRef(null),[d=!1,f]=function({prop:e,defaultProp:t,onChange:n=()=>{}}){let[r,o]=function({defaultProp:e,onChange:t}){let n=a.useState(e),[r]=n,o=a.useRef(r),i=v(t);return a.useEffect(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),n}({defaultProp:t,onChange:n}),i=void 0!==e,u=i?e:r,l=v(n);return[u,a.useCallback(t=>{if(i){let n="function"==typeof t?t(e):t;n!==e&&l(n)}else o(t)},[i,e,o,l])]}({prop:r,defaultProp:o,onChange:i});return(0,c.jsx)(eT,{scope:t,triggerRef:l,contentRef:s,contentId:p(),titleId:p(),descriptionId:p(),open:d,onOpenChange:f,onOpenToggle:a.useCallback(()=>f(e=>!e),[f]),modal:u,children:n})};eI.displayName=eP;var eF="DialogTrigger",eW=a.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ej(eF,n),a=(0,l.s)(t,o.triggerRef);return(0,c.jsx)(m.sG.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":e9(o.open),...r,ref:a,onClick:u(e.onClick,o.onOpenToggle)})});eW.displayName=eF;var e_="DialogPortal",[eB,eU]=ek(e_,{forceMount:void 0}),e$=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:o}=e,i=ej(e_,t);return(0,c.jsx)(eB,{scope:t,forceMount:n,children:a.Children.map(r,e=>(0,c.jsx)(k,{present:n||i.open,children:(0,c.jsx)(P,{asChild:!0,container:o,children:e})}))})};e$.displayName=e_;var eG="DialogOverlay",eK=a.forwardRef((e,t)=>{let n=eU(eG,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=ej(eG,e.__scopeDialog);return a.modal?(0,c.jsx)(k,{present:r||a.open,children:(0,c.jsx)(eX,{...o,ref:t})}):null});eK.displayName=eG;var eX=a.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ej(eG,n);return(0,c.jsx)(ew,{as:eL.DX,allowPinchZoom:!0,shards:[o.contentRef],children:(0,c.jsx)(m.sG.div,{"data-state":e9(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),eZ="DialogContent",eY=a.forwardRef((e,t)=>{let n=eU(eZ,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=ej(eZ,e.__scopeDialog);return(0,c.jsx)(k,{present:r||a.open,children:a.modal?(0,c.jsx)(ez,{...o,ref:t}):(0,c.jsx)(eV,{...o,ref:t})})});eY.displayName=eZ;var ez=a.forwardRef((e,t)=>{let n=ej(eZ,e.__scopeDialog),r=a.useRef(null),o=(0,l.s)(t,n.contentRef,r);return a.useEffect(()=>{let e=r.current;if(e)return eA(e)},[]),(0,c.jsx)(eH,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:u(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:u(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:u(e.onFocusOutside,e=>e.preventDefault())})}),eV=a.forwardRef((e,t)=>{let n=ej(eZ,e.__scopeDialog),r=a.useRef(!1),o=a.useRef(!1);return(0,c.jsx)(eH,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var a,i;null===(a=e.onCloseAutoFocus)||void 0===a||a.call(e,t),t.defaultPrevented||(r.current||null===(i=n.triggerRef.current)||void 0===i||i.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:t=>{var a,i;null===(a=e.onInteractOutside)||void 0===a||a.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));let u=t.target;(null===(i=n.triggerRef.current)||void 0===i?void 0:i.contains(u))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}})}),eH=a.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:i,...u}=e,s=ej(eZ,n),d=a.useRef(null),f=(0,l.s)(t,d);return a.useEffect(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:j()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:j()),T++,()=>{1===T&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),T--}},[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(x,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:i,children:(0,c.jsx)(y,{role:"dialog",id:s.contentId,"aria-describedby":s.descriptionId,"aria-labelledby":s.titleId,"data-state":e9(s.open),...u,ref:f,onDismiss:()=>s.onOpenChange(!1)})}),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e3,{titleId:s.titleId}),(0,c.jsx)(e5,{contentRef:d,descriptionId:s.descriptionId})]})]})}),eq="DialogTitle",eJ=a.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ej(eq,n);return(0,c.jsx)(m.sG.h2,{id:o.titleId,...r,ref:t})});eJ.displayName=eq;var eQ="DialogDescription",e0=a.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ej(eQ,n);return(0,c.jsx)(m.sG.p,{id:o.descriptionId,...r,ref:t})});e0.displayName=eQ;var e1="DialogClose",e2=a.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=ej(e1,n);return(0,c.jsx)(m.sG.button,{type:"button",...r,ref:t,onClick:u(e.onClick,()=>o.onOpenChange(!1))})});function e9(e){return e?"open":"closed"}e2.displayName=e1;var e8="DialogTitleWarning",[e4,e6]=function(e,t){let n=a.createContext(t),r=e=>{let{children:t,...r}=e,o=a.useMemo(()=>r,Object.values(r));return(0,c.jsx)(n.Provider,{value:o,children:t})};return r.displayName=e+"Provider",[r,function(r){let o=a.useContext(n);if(o)return o;if(void 0!==t)return t;throw Error(`\`${r}\` must be used within \`${e}\``)}]}(e8,{contentName:eZ,titleName:eq,docsSlug:"dialog"}),e3=e=>{let{titleId:t}=e,n=e6(e8),r="`".concat(n.contentName,"` requires a `").concat(n.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);return a.useEffect(()=>{t&&!document.getElementById(t)&&console.error(r)},[r,t]),null},e5=e=>{let{contentRef:t,descriptionId:n}=e,r=e6("DialogDescriptionWarning"),o="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(r.contentName,"}.");return a.useEffect(()=>{var e;let r=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");n&&r&&!document.getElementById(n)&&console.warn(o)},[o,t,n]),null},e7=eI,te=eW,tt=e$,tn=eK,tr=eY,to=eJ,ta=e0,ti=e2},8222:(e,t,n)=>{n.d(t,{A:()=>r});let r=(0,n(8990).A)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},8990:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(2149);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),i=e=>{let t=a(e);return t.charAt(0).toUpperCase()+t.slice(1)},u=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim()};var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let c=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",size:o=24,strokeWidth:a=2,absoluteStrokeWidth:i,className:c="",children:s,iconNode:d,...f}=e;return(0,r.createElement)("svg",{ref:t,...l,width:o,height:o,stroke:n,strokeWidth:i?24*Number(a)/Number(o):a,className:u("lucide",c),...f},[...d.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(s)?s:[s]])}),s=(e,t)=>{let n=(0,r.forwardRef)((n,a)=>{let{className:l,...s}=n;return(0,r.createElement)(c,{ref:a,iconNode:t,className:u("lucide-".concat(o(i(e))),"lucide-".concat(e),l),...s})});return n.displayName=i(e),n}},9668:(e,t,n)=>{n.d(t,{DX:()=>i});var r=n(2149),o=n(3093),a=n(8081),i=r.forwardRef((e,t)=>{let{children:n,...o}=e,i=r.Children.toArray(n),l=i.find(c);if(l){let e=l.props.children,n=i.map(t=>t!==l?t:r.Children.count(e)>1?r.Children.only(null):r.isValidElement(e)?e.props.children:null);return(0,a.jsx)(u,{...o,ref:t,children:r.isValidElement(e)?r.cloneElement(e,void 0,n):null})}return(0,a.jsx)(u,{...o,ref:t,children:n})});i.displayName="Slot";var u=r.forwardRef((e,t)=>{let{children:n,...a}=e;if(r.isValidElement(n)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(n=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(n),i=function(e,t){let n={...t};for(let r in t){let o=e[r],a=t[r];/^on[A-Z]/.test(r)?o&&a?n[r]=(...e)=>{a(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...a}:"className"===r&&(n[r]=[o,a].filter(Boolean).join(" "))}return{...e,...n}}(a,n.props);return n.type!==r.Fragment&&(i.ref=t?(0,o.t)(t,e):e),r.cloneElement(n,i)}return r.Children.count(n)>1?r.Children.only(null):null});u.displayName="SlotClone";var l=({children:e})=>(0,a.jsx)(a.Fragment,{children:e});function c(e){return r.isValidElement(e)&&e.type===l}}}]);