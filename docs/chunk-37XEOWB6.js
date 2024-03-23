import{A as I,Bc as D,H as N,I as M,K as S,N as d,R as r,f as b,i as y,ia as j,j as v,ka as k,q as l,r as g,t as x,ua as B,y as E}from"./chunk-2NJMIRNR.js";function f(e){return Array.isArray(e)?e:[e]}var w;try{w=typeof Intl<"u"&&Intl.v8BreakIterator}catch{w=!1}var A=(()=>{let t=class t{constructor(i){this._platformId=i,this.isBrowser=this._platformId?D(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||w)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};t.\u0275fac=function(n){return new(n||t)(r(j))},t.\u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var L=new Set,u,W=(()=>{let t=class t{constructor(i,n){this._platform=i,this._nonce=n,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):K}matchMedia(i){return(this._platform.WEBKIT||this._platform.BLINK)&&V(i,this._nonce),this._matchMedia(i)}};t.\u0275fac=function(n){return new(n||t)(r(A),r(k,8))},t.\u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function V(e,t){if(!L.has(e))try{u||(u=document.createElement("style"),t&&(u.nonce=t),u.setAttribute("type","text/css"),document.head.appendChild(u)),u.sheet&&(u.sheet.insertRule(`@media ${e} {body{ }}`,0),L.add(e))}catch(h){console.error(h)}}function K(e){return{matches:e==="all"||e==="",media:e,addListener:()=>{},removeListener:()=>{}}}var R=(()=>{let t=class t{constructor(i,n){this._mediaMatcher=i,this._zone=n,this._queries=new Map,this._destroySubject=new y}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(i){return O(f(i)).some(p=>this._registerQuery(p).mql.matches)}observe(i){let p=O(f(i)).map(a=>this._registerQuery(a).observable),s=g(p);return s=x(s.pipe(I(1)),s.pipe(N(1),E(0))),s.pipe(l(a=>{let c={matches:!1,breakpoints:{}};return a.forEach(({matches:m,query:P})=>{c.matches=c.matches||m,c.breakpoints[P]=m}),c}))}_registerQuery(i){if(this._queries.has(i))return this._queries.get(i);let n=this._mediaMatcher.matchMedia(i),s={observable:new b(a=>{let c=m=>this._zone.run(()=>a.next(m));return n.addListener(c),()=>{n.removeListener(c)}}).pipe(M(n),l(({matches:a})=>({query:i,matches:a})),S(this._destroySubject)),mql:n};return this._queries.set(i,s),s}};t.\u0275fac=function(n){return new(n||t)(r(W),r(B))},t.\u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function O(e){return e.map(t=>t.split(",")).reduce((t,h)=>t.concat(h)).map(t=>t.trim())}var o={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var st=(()=>{let t=class t{constructor(i){this.breakpointObserver=i,this.breakpoint$=this.breakpointObserver.observe([o.Large,o.Medium,o.Small,o.HandsetPortrait]),this.currentBreakpoint=new v("")}breakpointChanged(){this.breakpointObserver.isMatched(o.Large)?this.currentBreakpoint.next("large"):this.breakpointObserver.isMatched(o.Medium)?this.currentBreakpoint.next("medium"):this.breakpointObserver.isMatched(o.Small)?this.currentBreakpoint.next("small"):this.breakpointObserver.isMatched(o.HandsetPortrait)&&this.currentBreakpoint.next("mobile")}};t.\u0275fac=function(n){return new(n||t)(r(R))},t.\u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{st as a};