import{E as C,r as t,m as b,c as y,a as g,b as E,j as p}from"./index-DeHznlkS.js";import{c as $,i as F,d as S,a as P,s as k,g as H,b as O,u as j,R as B,e as D,f as L,r as z}from"./components-D8uQ7O_9.js";/**
 * @remix-run/react v2.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function A(l){if(!l)return null;let x=Object.entries(l),s={};for(let[i,e]of x)if(e&&e.__type==="RouteErrorResponse")s[i]=new C(e.status,e.statusText,e.data,e.internal===!0);else if(e&&e.__type==="Error"){if(e.__subType){let o=window[e.__subType];if(typeof o=="function")try{let u=new o(e.message);u.stack=e.stack,s[i]=u}catch{}}if(s[i]==null){let o=new Error(e.message);o.stack=e.stack,s[i]=o}}else s[i]=e;return s}/**
 * @remix-run/react v2.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let n,r,f=!1;let R,W=new Promise(l=>{R=l}).catch(()=>{});function T(l){if(!r){let o=window.__remixContext.url,u=window.location.pathname;if(o!==u&&!window.__remixContext.isSpaMode){let d=`Initial URL (${o}) does not match URL at time of hydration (${u}), reloading page...`;return console.error(d),window.location.reload(),t.createElement(t.Fragment,null)}if(window.__remixContext.future.unstable_singleFetch){if(!n){let d=window.__remixContext.stream;F(d,"No stream found for single fetch decoding"),window.__remixContext.stream=void 0,n=S(d,window).then(_=>{window.__remixContext.state=_.value,n.value=!0}).catch(_=>{n.error=_})}if(n.error)throw n.error;if(!n.value)throw n}let M=P(window.__remixManifest.routes,window.__remixRouteModules,window.__remixContext.state,window.__remixContext.future,window.__remixContext.isSpaMode),a;if(!window.__remixContext.isSpaMode){a={...window.__remixContext.state,loaderData:{...window.__remixContext.state.loaderData}};let d=b(M,window.location,window.__remixContext.basename);if(d)for(let _ of d){let m=_.route.id,c=window.__remixRouteModules[m],w=window.__remixManifest.routes[m];c&&k(w,c,window.__remixContext.isSpaMode)&&(c.HydrateFallback||!w.hasLoader)?a.loaderData[m]=void 0:w&&!w.hasLoader&&(a.loaderData[m]=null)}a&&a.errors&&(a.errors=A(a.errors))}r=y({routes:M,history:g(),basename:window.__remixContext.basename,future:{v7_normalizeFormMethod:!0,v7_fetcherPersist:window.__remixContext.future.v3_fetcherPersist,v7_partialHydration:!0,v7_prependBasename:!0,v7_relativeSplatPath:window.__remixContext.future.v3_relativeSplatPath,v7_skipActionErrorRevalidation:window.__remixContext.future.unstable_singleFetch===!0},hydrationData:a,mapRouteProperties:E,unstable_dataStrategy:window.__remixContext.future.unstable_singleFetch?H(window.__remixManifest,window.__remixRouteModules):void 0,unstable_patchRoutesOnNavigation:O(window.__remixManifest,window.__remixRouteModules,window.__remixContext.future,window.__remixContext.isSpaMode,window.__remixContext.basename)}),r.state.initialized&&(f=!0,r.initialize()),r.createRoutesForHMR=$,window.__remixRouter=r,R&&R(r)}let[x,s]=t.useState(void 0),[i,e]=t.useState(r.state.location);return t.useLayoutEffect(()=>{f||(f=!0,r.initialize())},[]),t.useLayoutEffect(()=>r.subscribe(o=>{o.location!==i&&e(o.location)}),[i]),j(r,window.__remixManifest,window.__remixRouteModules,window.__remixContext.future,window.__remixContext.isSpaMode),t.createElement(t.Fragment,null,t.createElement(B.Provider,{value:{manifest:window.__remixManifest,routeModules:window.__remixRouteModules,future:window.__remixContext.future,criticalCss:x,isSpaMode:window.__remixContext.isSpaMode}},t.createElement(D,{location:i},t.createElement(L,{router:r,fallbackElement:null,future:{v7_startTransition:!0}}))),window.__remixContext.future.unstable_singleFetch?t.createElement(t.Fragment,null):null)}var v,h=z;h.createRoot,v=h.hydrateRoot;t.startTransition(()=>{v(document,p.jsx(t.StrictMode,{children:p.jsx(T,{})}))});
