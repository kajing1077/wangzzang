(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[879],{3266:e=>{e.exports={style:{fontFamily:"'Geist Mono', 'Geist Mono Fallback'",fontStyle:"normal"},className:"__className_ae4407",variable:"__variable_ae4407"}},4774:e=>{e.exports={style:{fontFamily:"'Geist', 'Geist Fallback'",fontStyle:"normal"},className:"__className_839080",variable:"__variable_839080"}},8128:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var r=n(2149);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),i=e=>{let t=a(e);return t.charAt(0).toUpperCase()+t.slice(1)},u=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim()};var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let c=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",size:o=24,strokeWidth:a=2,absoluteStrokeWidth:i,className:c="",children:s,iconNode:d,...f}=e;return(0,r.createElement)("svg",{ref:t,...l,width:o,height:o,stroke:n,strokeWidth:i?24*Number(a)/Number(o):a,className:u("lucide",c),...f},[...d.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(s)?s:[s]])}),s=((e,t)=>{let n=(0,r.forwardRef)((n,a)=>{let{className:l,...s}=n;return(0,r.createElement)(c,{ref:a,iconNode:t,className:u("lucide-".concat(o(i(e))),"lucide-".concat(e),l),...s})});return n.displayName=i(e),n})("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},8574:(e,t,n)=>{"use strict";n.d(t,{bm:()=>td,UC:()=>tl,VY:()=>ts,hJ:()=>tu,ZL:()=>ti,bL:()=>to,hE:()=>tc,l9:()=>ta});var r,o,a=n(2149),i=n.t(a,2);function u(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}function l(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}function c(...e){return t=>{let n=!1,r=e.map(e=>{let r=l(e,t);return n||"function"!=typeof r||(n=!0),r});if(n)return()=>{for(let t=0;t<r.length;t++){let n=r[t];"function"==typeof n?n():l(e[t],null)}}}}function s(...e){return a.useCallback(c(...e),e)}var d=n(8081),f=globalThis?.document?a.useLayoutEffect:()=>{},p=i["useId".toString()]||(()=>void 0),v=0;function m(e){let[t,n]=a.useState(p());return f(()=>{e||n(e=>e??String(v++))},[e]),e||(t?`radix-${t}`:"")}function h(e){let t=a.useRef(e);return a.useEffect(()=>{t.current=e}),a.useMemo(()=>(...e)=>t.current?.(...e),[])}var g=n(4632),y=a.forwardRef((e,t)=>{let{children:n,...r}=e,o=a.Children.toArray(n),i=o.find(w);if(i){let e=i.props.children,n=o.map(t=>t!==i?t:a.Children.count(e)>1?a.Children.only(null):a.isValidElement(e)?e.props.children:null);return(0,d.jsx)(b,{...r,ref:t,children:a.isValidElement(e)?a.cloneElement(e,void 0,n):null})}return(0,d.jsx)(b,{...r,ref:t,children:n})});y.displayName="Slot";var b=a.forwardRef((e,t)=>{let{children:n,...r}=e;if(a.isValidElement(n)){let e=function(e){let t=Object.getOwnPropertyDescriptor(e.props,"ref")?.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(n=(t=Object.getOwnPropertyDescriptor(e,"ref")?.get)&&"isReactWarning"in t&&t.isReactWarning)?e.props.ref:e.props.ref||e.ref}(n),o=function(e,t){let n={...t};for(let r in t){let o=e[r],a=t[r];/^on[A-Z]/.test(r)?o&&a?n[r]=(...e)=>{a(...e),o(...e)}:o&&(n[r]=o):"style"===r?n[r]={...o,...a}:"className"===r&&(n[r]=[o,a].filter(Boolean).join(" "))}return{...e,...n}}(r,n.props);return n.type!==a.Fragment&&(o.ref=t?c(t,e):e),a.cloneElement(n,o)}return a.Children.count(n)>1?a.Children.only(null):null});b.displayName="SlotClone";var E=({children:e})=>(0,d.jsx)(d.Fragment,{children:e});function w(e){return a.isValidElement(e)&&e.type===E}var C=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let n=a.forwardRef((e,n)=>{let{asChild:r,...o}=e,a=r?y:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,d.jsx)(a,{...o,ref:n})});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),N="dismissableLayer.update",x=a.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),R=a.forwardRef((e,t)=>{var n,o;let{disableOutsidePointerEvents:i=!1,onEscapeKeyDown:l,onPointerDownOutside:c,onFocusOutside:f,onInteractOutside:p,onDismiss:v,...m}=e,g=a.useContext(x),[y,b]=a.useState(null),E=null!==(o=null==y?void 0:y.ownerDocument)&&void 0!==o?o:null===(n=globalThis)||void 0===n?void 0:n.document,[,w]=a.useState({}),R=s(t,e=>b(e)),D=Array.from(g.layers),[L]=[...g.layersWithOutsidePointerEventsDisabled].slice(-1),k=D.indexOf(L),A=y?D.indexOf(y):-1,P=g.layersWithOutsidePointerEventsDisabled.size>0,M=A>=k,T=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=h(e),o=a.useRef(!1),i=a.useRef(()=>{});return a.useEffect(()=>{let e=e=>{if(e.target&&!o.current){let t=function(){O("dismissableLayer.pointerDownOutside",r,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",i.current),i.current=t,n.addEventListener("click",i.current,{once:!0})):t()}else n.removeEventListener("click",i.current);o.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",i.current)}},[n,r]),{onPointerDownCapture:()=>o.current=!0}}(e=>{let t=e.target,n=[...g.branches].some(e=>e.contains(t));!M||n||(null==c||c(e),null==p||p(e),e.defaultPrevented||null==v||v())},E),j=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===(t=globalThis)||void 0===t?void 0:t.document,r=h(e),o=a.useRef(!1);return a.useEffect(()=>{let e=e=>{e.target&&!o.current&&O("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}(e=>{let t=e.target;[...g.branches].some(e=>e.contains(t))||(null==f||f(e),null==p||p(e),e.defaultPrevented||null==v||v())},E);return!function(e,t=globalThis?.document){let n=h(e);a.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{A===g.layers.size-1&&(null==l||l(e),!e.defaultPrevented&&v&&(e.preventDefault(),v()))},E),a.useEffect(()=>{if(y)return i&&(0===g.layersWithOutsidePointerEventsDisabled.size&&(r=E.body.style.pointerEvents,E.body.style.pointerEvents="none"),g.layersWithOutsidePointerEventsDisabled.add(y)),g.layers.add(y),S(),()=>{i&&1===g.layersWithOutsidePointerEventsDisabled.size&&(E.body.style.pointerEvents=r)}},[y,E,i,g]),a.useEffect(()=>()=>{y&&(g.layers.delete(y),g.layersWithOutsidePointerEventsDisabled.delete(y),S())},[y,g]),a.useEffect(()=>{let e=()=>w({});return document.addEventListener(N,e),()=>document.removeEventListener(N,e)},[]),(0,d.jsx)(C.div,{...m,ref:R,style:{pointerEvents:P?M?"auto":"none":void 0,...e.style},onFocusCapture:u(e.onFocusCapture,j.onFocusCapture),onBlurCapture:u(e.onBlurCapture,j.onBlurCapture),onPointerDownCapture:u(e.onPointerDownCapture,T.onPointerDownCapture)})});function S(){let e=new CustomEvent(N);document.dispatchEvent(e)}function O(e,t,n,r){let{discrete:o}=r,a=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});if(t&&a.addEventListener(e,t,{once:!0}),o)a&&g.flushSync(()=>a.dispatchEvent(i));else a.dispatchEvent(i)}R.displayName="DismissableLayer",a.forwardRef((e,t)=>{let n=a.useContext(x),r=a.useRef(null),o=s(t,r);return a.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,d.jsx)(C.div,{...e,ref:o})}).displayName="DismissableLayerBranch";var D="focusScope.autoFocusOnMount",L="focusScope.autoFocusOnUnmount",k={bubbles:!1,cancelable:!0},A=a.forwardRef((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:i,...u}=e,[l,c]=a.useState(null),f=h(o),p=h(i),v=a.useRef(null),m=s(t,e=>c(e)),g=a.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;a.useEffect(()=>{if(r){let e=function(e){if(g.paused||!l)return;let t=e.target;l.contains(t)?v.current=t:T(v.current,{select:!0})},t=function(e){if(g.paused||!l)return;let t=e.relatedTarget;null===t||l.contains(t)||T(v.current,{select:!0})};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&T(l)});return l&&n.observe(l,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,l,g.paused]),a.useEffect(()=>{if(l){j.add(g);let e=document.activeElement;if(!l.contains(e)){let t=new CustomEvent(D,k);l.addEventListener(D,f),l.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.activeElement;for(let r of e)if(T(r,{select:t}),document.activeElement!==n)return}(P(l).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&T(l))}return()=>{l.removeEventListener(D,f),setTimeout(()=>{let t=new CustomEvent(L,k);l.addEventListener(L,p),l.dispatchEvent(t),t.defaultPrevented||T(null!=e?e:document.body,{select:!0}),l.removeEventListener(L,p),j.remove(g)},0)}}},[l,f,p,g]);let y=a.useCallback(e=>{if(!n&&!r||g.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,a]=function(e){let t=P(e);return[M(t,e),M(t.reverse(),e)]}(t);r&&a?e.shiftKey||o!==a?e.shiftKey&&o===r&&(e.preventDefault(),n&&T(a,{select:!0})):(e.preventDefault(),n&&T(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,g.paused]);return(0,d.jsx)(C.div,{tabIndex:-1,...u,ref:m,onKeyDown:y})});function P(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function M(e,t){for(let n of e)if(!function(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function T(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}A.displayName="FocusScope";var j=function(){let e=[];return{add(t){let n=e[0];t!==n&&(null==n||n.pause()),(e=I(e,t)).unshift(t)},remove(t){var n;null===(n=(e=I(e,t))[0])||void 0===n||n.resume()}}}();function I(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}var _=a.forwardRef((e,t)=>{var n,r;let{container:o,...i}=e,[u,l]=a.useState(!1);f(()=>l(!0),[]);let c=o||u&&(null===(r=globalThis)||void 0===r?void 0:null===(n=r.document)||void 0===n?void 0:n.body);return c?g.createPortal((0,d.jsx)(C.div,{...i,ref:t}),c):null});_.displayName="Portal";var F=e=>{let{present:t,children:n}=e,r=function(e){var t,n;let[r,o]=a.useState(),i=a.useRef({}),u=a.useRef(e),l=a.useRef("none"),[c,s]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},a.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return a.useEffect(()=>{let e=W(i.current);l.current="mounted"===c?e:"none"},[c]),f(()=>{let t=i.current,n=u.current;if(n!==e){let r=l.current,o=W(t);e?s("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?s("UNMOUNT"):n&&r!==o?s("ANIMATION_OUT"):s("UNMOUNT"),u.current=e}},[e,s]),f(()=>{if(r){var e;let t;let n=null!==(e=r.ownerDocument.defaultView)&&void 0!==e?e:window,o=e=>{let o=W(i.current).includes(e.animationName);if(e.target===r&&o&&(s("ANIMATION_END"),!u.current)){let e=r.style.animationFillMode;r.style.animationFillMode="forwards",t=n.setTimeout(()=>{"forwards"===r.style.animationFillMode&&(r.style.animationFillMode=e)})}},a=e=>{e.target===r&&(l.current=W(i.current))};return r.addEventListener("animationstart",a),r.addEventListener("animationcancel",o),r.addEventListener("animationend",o),()=>{n.clearTimeout(t),r.removeEventListener("animationstart",a),r.removeEventListener("animationcancel",o),r.removeEventListener("animationend",o)}}s("ANIMATION_END")},[r,s]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:a.useCallback(e=>{e&&(i.current=getComputedStyle(e)),o(e)},[])}}(t),o="function"==typeof n?n({present:r.isPresent}):a.Children.only(n),i=s(r.ref,function(e){var t,n;let r=null===(t=Object.getOwnPropertyDescriptor(e.props,"ref"))||void 0===t?void 0:t.get,o=r&&"isReactWarning"in r&&r.isReactWarning;return o?e.ref:(o=(r=null===(n=Object.getOwnPropertyDescriptor(e,"ref"))||void 0===n?void 0:n.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(o));return"function"==typeof n||r.isPresent?a.cloneElement(o,{ref:i}):null};function W(e){return(null==e?void 0:e.animationName)||"none"}F.displayName="Presence";var B=0;function U(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var $=function(){return($=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function K(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}Object.create;Object.create;var Z=("function"==typeof SuppressedError&&SuppressedError,"right-scroll-bar-position"),Y="width-before-scroll-bar";function z(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var V="undefined"!=typeof window?a.useLayoutEffect:a.useEffect,X=new WeakMap;function H(e){return e}var q=function(e){void 0===e&&(e={});var t,n,r,o,a=(t=null,void 0===n&&(n=H),r=[],o=!1,{read:function(){if(o)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:null},useMedium:function(e){var t=n(e,o);return r.push(t),function(){r=r.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(o=!0;r.length;){var t=r;r=[],t.forEach(e)}r={push:function(t){return e(t)},filter:function(){return r}}},assignMedium:function(e){o=!0;var t=[];if(r.length){var n=r;r=[],n.forEach(e),t=r}var a=function(){var n=t;t=[],n.forEach(e)},i=function(){return Promise.resolve().then(a)};i(),r={push:function(e){t.push(e),i()},filter:function(e){return t=t.filter(e),r}}}});return a.options=$({async:!0,ssr:!1},e),a}(),G=function(){},J=a.forwardRef(function(e,t){var n,r,o,i,u=a.useRef(null),l=a.useState({onScrollCapture:G,onWheelCapture:G,onTouchMoveCapture:G}),c=l[0],s=l[1],d=e.forwardProps,f=e.children,p=e.className,v=e.removeScrollBar,m=e.enabled,h=e.shards,g=e.sideCar,y=e.noIsolation,b=e.inert,E=e.allowPinchZoom,w=e.as,C=e.gapMode,N=K(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),x=(n=[u,t],r=function(e){return n.forEach(function(t){return z(t,e)})},(o=(0,a.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,i=o.facade,V(function(){var e=X.get(i);if(e){var t=new Set(e),r=new Set(n),o=i.current;t.forEach(function(e){r.has(e)||z(e,null)}),r.forEach(function(e){t.has(e)||z(e,o)})}X.set(i,n)},[n]),i),R=$($({},N),c);return a.createElement(a.Fragment,null,m&&a.createElement(g,{sideCar:q,removeScrollBar:v,shards:h,noIsolation:y,inert:b,setCallbacks:s,allowPinchZoom:!!E,lockRef:u,gapMode:C}),d?a.cloneElement(a.Children.only(f),$($({},R),{ref:x})):a.createElement(void 0===w?"div":w,$({},R,{className:p,ref:x}),f))});J.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},J.classNames={fullWidth:Y,zeroRight:Z};var Q=function(e){var t=e.sideCar,n=K(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return a.createElement(r,$({},n))};Q.isSideCarExport=!0;var ee=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=o||n.nc;return t&&e.setAttribute("nonce",t),e}())){var a,i;(a=t).styleSheet?a.styleSheet.cssText=r:a.appendChild(document.createTextNode(r)),i=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(i)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},et=function(){var e=ee();return function(t,n){a.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},en=function(){var e=et();return function(t){return e(t.styles,t.dynamic),null}},er={left:0,top:0,right:0,gap:0},eo=function(e){return parseInt(e||"",10)||0},ea=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[eo(n),eo(r),eo(o)]},ei=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return er;var t=ea(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},eu=en(),el="data-scroll-locked",ec=function(e,t,n,r){var o=e.left,a=e.top,i=e.right,u=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(u,"px ").concat(r,";\n  }\n  body[").concat(el,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(u,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(Z," {\n    right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(Y," {\n    margin-right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(Z," .").concat(Z," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(Y," .").concat(Y," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(el,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(u,"px;\n  }\n")},es=function(){var e=parseInt(document.body.getAttribute(el)||"0",10);return isFinite(e)?e:0},ed=function(){a.useEffect(function(){return document.body.setAttribute(el,(es()+1).toString()),function(){var e=es()-1;e<=0?document.body.removeAttribute(el):document.body.setAttribute(el,e.toString())}},[])},ef=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r;ed();var i=a.useMemo(function(){return ei(o)},[o]);return a.createElement(eu,{styles:ec(i,!t,o,n?"":"!important")})},ep=!1;if("undefined"!=typeof window)try{var ev=Object.defineProperty({},"passive",{get:function(){return ep=!0,!0}});window.addEventListener("test",ev,ev),window.removeEventListener("test",ev,ev)}catch(e){ep=!1}var em=!!ep&&{passive:!1},eh=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&(n.overflowY!==n.overflowX||"TEXTAREA"===e.tagName||"visible"!==n[t])},eg=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),ey(e,r)){var o=eb(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},ey=function(e,t){return"v"===e?eh(t,"overflowY"):eh(t,"overflowX")},eb=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},eE=function(e,t,n,r,o){var a,i=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),u=i*r,l=n.target,c=t.contains(l),s=!1,d=u>0,f=0,p=0;do{var v=eb(e,l),m=v[0],h=v[1]-v[2]-i*m;(m||h)&&ey(e,l)&&(f+=h,p+=m),l=l instanceof ShadowRoot?l.host:l.parentNode}while(!c&&l!==document.body||c&&(t.contains(l)||t===l));return d&&(o&&1>Math.abs(f)||!o&&u>f)?s=!0:!d&&(o&&1>Math.abs(p)||!o&&-u>p)&&(s=!0),s},ew=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},eC=function(e){return[e.deltaX,e.deltaY]},eN=function(e){return e&&"current"in e?e.current:e},ex=0,eR=[];let eS=(q.useMedium(function(e){var t=a.useRef([]),n=a.useRef([0,0]),r=a.useRef(),o=a.useState(ex++)[0],i=a.useState(en)[0],u=a.useRef(e);a.useEffect(function(){u.current=e},[e]),a.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(eN),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var l=a.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!u.current.allowPinchZoom;var o,a=ew(e),i=n.current,l="deltaX"in e?e.deltaX:i[0]-a[0],c="deltaY"in e?e.deltaY:i[1]-a[1],s=e.target,d=Math.abs(l)>Math.abs(c)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=eg(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=eg(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(l||c)&&(r.current=o),!o)return!0;var p=r.current||o;return eE(p,t,e,"h"===p?l:c,!0)},[]),c=a.useCallback(function(e){if(eR.length&&eR[eR.length-1]===i){var n="deltaY"in e?eC(e):ew(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(u.current.shards||[]).map(eN).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?l(e,o[0]):!u.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),s=a.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),d=a.useCallback(function(e){n.current=ew(e),r.current=void 0},[]),f=a.useCallback(function(t){s(t.type,eC(t),t.target,l(t,e.lockRef.current))},[]),p=a.useCallback(function(t){s(t.type,ew(t),t.target,l(t,e.lockRef.current))},[]);a.useEffect(function(){return eR.push(i),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:p}),document.addEventListener("wheel",c,em),document.addEventListener("touchmove",c,em),document.addEventListener("touchstart",d,em),function(){eR=eR.filter(function(e){return e!==i}),document.removeEventListener("wheel",c,em),document.removeEventListener("touchmove",c,em),document.removeEventListener("touchstart",d,em)}},[]);var v=e.removeScrollBar,m=e.inert;return a.createElement(a.Fragment,null,m?a.createElement(i,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,v?a.createElement(ef,{gapMode:e.gapMode}):null)}),Q);var eO=a.forwardRef(function(e,t){return a.createElement(J,$({},e,{ref:t,sideCar:eS}))});eO.classNames=J.classNames;var eD=function(e){return"undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body},eL=new WeakMap,ek=new WeakMap,eA={},eP=0,eM=function(e){return e&&(e.host||eM(e.parentNode))},eT=function(e,t,n,r){var o=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=eM(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});eA[n]||(eA[n]=new WeakMap);var a=eA[n],i=[],u=new Set,l=new Set(o),c=function(e){!(!e||u.has(e))&&(u.add(e),c(e.parentNode))};o.forEach(c);var s=function(e){!(!e||l.has(e))&&Array.prototype.forEach.call(e.children,function(e){if(u.has(e))s(e);else try{var t=e.getAttribute(r),o=null!==t&&"false"!==t,l=(eL.get(e)||0)+1,c=(a.get(e)||0)+1;eL.set(e,l),a.set(e,c),i.push(e),1===l&&o&&ek.set(e,!0),1===c&&e.setAttribute(n,"true"),o||e.setAttribute(r,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return s(t),u.clear(),eP++,function(){i.forEach(function(e){var t=eL.get(e)-1,o=a.get(e)-1;eL.set(e,t),a.set(e,o),t||(ek.has(e)||e.removeAttribute(r),ek.delete(e)),o||e.removeAttribute(n)}),--eP||(eL=new WeakMap,eL=new WeakMap,ek=new WeakMap,eA={})}},ej=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||eD(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),eT(r,o,n,"aria-hidden")):function(){return null}},eI="Dialog",[e_,eF]=function(e,t=[]){let n=[],r=()=>{let t=n.map(e=>a.createContext(e));return function(n){let r=n?.[e]||t;return a.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return r.scopeName=e,[function(t,r){let o=a.createContext(r),i=n.length;n=[...n,r];let u=t=>{let{scope:n,children:r,...u}=t,l=n?.[e]?.[i]||o,c=a.useMemo(()=>u,Object.values(u));return(0,d.jsx)(l.Provider,{value:c,children:r})};return u.displayName=t+"Provider",[u,function(n,u){let l=u?.[e]?.[i]||o,c=a.useContext(l);if(c)return c;if(void 0!==r)return r;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return a.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}(r,...t)]}(eI),[eW,eB]=e_(eI),eU=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:i,modal:u=!0}=e,l=a.useRef(null),c=a.useRef(null),[s=!1,f]=function({prop:e,defaultProp:t,onChange:n=()=>{}}){let[r,o]=function({defaultProp:e,onChange:t}){let n=a.useState(e),[r]=n,o=a.useRef(r),i=h(t);return a.useEffect(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),n}({defaultProp:t,onChange:n}),i=void 0!==e,u=i?e:r,l=h(n);return[u,a.useCallback(t=>{if(i){let n="function"==typeof t?t(e):t;n!==e&&l(n)}else o(t)},[i,e,o,l])]}({prop:r,defaultProp:o,onChange:i});return(0,d.jsx)(eW,{scope:t,triggerRef:l,contentRef:c,contentId:m(),titleId:m(),descriptionId:m(),open:s,onOpenChange:f,onOpenToggle:a.useCallback(()=>f(e=>!e),[f]),modal:u,children:n})};eU.displayName=eI;var e$="DialogTrigger",eK=a.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eB(e$,n),a=s(t,o.triggerRef);return(0,d.jsx)(C.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":e7(o.open),...r,ref:a,onClick:u(e.onClick,o.onOpenToggle)})});eK.displayName=e$;var eZ="DialogPortal",[eY,ez]=e_(eZ,{forceMount:void 0}),eV=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:o}=e,i=eB(eZ,t);return(0,d.jsx)(eY,{scope:t,forceMount:n,children:a.Children.map(r,e=>(0,d.jsx)(F,{present:n||i.open,children:(0,d.jsx)(_,{asChild:!0,container:o,children:e})}))})};eV.displayName=eZ;var eX="DialogOverlay",eH=a.forwardRef((e,t)=>{let n=ez(eX,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=eB(eX,e.__scopeDialog);return a.modal?(0,d.jsx)(F,{present:r||a.open,children:(0,d.jsx)(eq,{...o,ref:t})}):null});eH.displayName=eX;var eq=a.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eB(eX,n);return(0,d.jsx)(eO,{as:y,allowPinchZoom:!0,shards:[o.contentRef],children:(0,d.jsx)(C.div,{"data-state":e7(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),eG="DialogContent",eJ=a.forwardRef((e,t)=>{let n=ez(eG,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=eB(eG,e.__scopeDialog);return(0,d.jsx)(F,{present:r||a.open,children:a.modal?(0,d.jsx)(eQ,{...o,ref:t}):(0,d.jsx)(e0,{...o,ref:t})})});eJ.displayName=eG;var eQ=a.forwardRef((e,t)=>{let n=eB(eG,e.__scopeDialog),r=a.useRef(null),o=s(t,n.contentRef,r);return a.useEffect(()=>{let e=r.current;if(e)return ej(e)},[]),(0,d.jsx)(e1,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:u(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:u(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:u(e.onFocusOutside,e=>e.preventDefault())})}),e0=a.forwardRef((e,t)=>{let n=eB(eG,e.__scopeDialog),r=a.useRef(!1),o=a.useRef(!1);return(0,d.jsx)(e1,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var a,i;null===(a=e.onCloseAutoFocus)||void 0===a||a.call(e,t),t.defaultPrevented||(r.current||null===(i=n.triggerRef.current)||void 0===i||i.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:t=>{var a,i;null===(a=e.onInteractOutside)||void 0===a||a.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"!==t.detail.originalEvent.type||(o.current=!0));let u=t.target;(null===(i=n.triggerRef.current)||void 0===i?void 0:i.contains(u))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}})}),e1=a.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:i,...u}=e,l=eB(eG,n),c=a.useRef(null),f=s(t,c);return a.useEffect(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:U()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:U()),B++,()=>{1===B&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),B--}},[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(A,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:i,children:(0,d.jsx)(R,{role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":e7(l.open),...u,ref:f,onDismiss:()=>l.onOpenChange(!1)})}),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(tn,{titleId:l.titleId}),(0,d.jsx)(tr,{contentRef:c,descriptionId:l.descriptionId})]})]})}),e2="DialogTitle",e4=a.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eB(e2,n);return(0,d.jsx)(C.h2,{id:o.titleId,...r,ref:t})});e4.displayName=e2;var e8="DialogDescription",e6=a.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eB(e8,n);return(0,d.jsx)(C.p,{id:o.descriptionId,...r,ref:t})});e6.displayName=e8;var e9="DialogClose",e3=a.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eB(e9,n);return(0,d.jsx)(C.button,{type:"button",...r,ref:t,onClick:u(e.onClick,()=>o.onOpenChange(!1))})});function e7(e){return e?"open":"closed"}e3.displayName=e9;var e5="DialogTitleWarning",[te,tt]=function(e,t){let n=a.createContext(t),r=e=>{let{children:t,...r}=e,o=a.useMemo(()=>r,Object.values(r));return(0,d.jsx)(n.Provider,{value:o,children:t})};return r.displayName=e+"Provider",[r,function(r){let o=a.useContext(n);if(o)return o;if(void 0!==t)return t;throw Error(`\`${r}\` must be used within \`${e}\``)}]}(e5,{contentName:eG,titleName:e2,docsSlug:"dialog"}),tn=e=>{let{titleId:t}=e,n=tt(e5),r="`".concat(n.contentName,"` requires a `").concat(n.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);return a.useEffect(()=>{t&&!document.getElementById(t)&&console.error(r)},[r,t]),null},tr=e=>{let{contentRef:t,descriptionId:n}=e,r=tt("DialogDescriptionWarning"),o="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(r.contentName,"}.");return a.useEffect(()=>{var e;let r=null===(e=t.current)||void 0===e?void 0:e.getAttribute("aria-describedby");n&&r&&!document.getElementById(n)&&console.warn(o)},[o,t,n]),null},to=eU,ta=eK,ti=eV,tu=eH,tl=eJ,tc=e4,ts=e6,td=e3}}]);