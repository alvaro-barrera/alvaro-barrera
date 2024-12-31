function _(){const e=document.querySelector(".hamburger-menu"),t=document.querySelector(".menu-icon"),n=document.querySelector("#menu-items");e?.addEventListener("click",()=>{const o=e.getAttribute("aria-expanded")==="true";t?.classList.toggle("is-active"),e.setAttribute("aria-expanded",o?"false":"true"),e.setAttribute("aria-label",o?"Open Menu":"Close Menu"),n?.classList.toggle("display-none")})}_();document.addEventListener("astro:after-swap",_);const b="data-astro-transition-persist";function Q(e){for(const t of document.scripts)for(const n of e.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!t.src&&t.textContent===n.textContent||t.src&&t.type===n.type&&t.src===n.src)){n.dataset.astroExec="";break}}function Z(e){const t=document.documentElement,n=[...t.attributes].filter(({name:o})=>(t.removeAttribute(o),o.startsWith("data-astro-")));[...e.documentElement.attributes,...n].forEach(({name:o,value:r})=>t.setAttribute(o,r))}function ee(e){for(const t of Array.from(document.head.children)){const n=oe(t,e);n?n.remove():t.remove()}document.head.append(...e.head.children)}function te(e,t){t.replaceWith(e);for(const n of t.querySelectorAll(`[${b}]`)){const o=n.getAttribute(b),r=e.querySelector(`[${b}="${o}"]`);r&&(r.replaceWith(n),r.localName==="astro-island"&&re(n)&&!ie(n,r)&&(n.setAttribute("ssr",""),n.setAttribute("props",r.getAttribute("props"))))}}const ne=()=>{const e=document.activeElement;if(e?.closest(`[${b}]`)){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){const t=e.selectionStart,n=e.selectionEnd;return()=>R({activeElement:e,start:t,end:n})}return()=>R({activeElement:e})}else return()=>R({activeElement:null})},R=({activeElement:e,start:t,end:n})=>{e&&(e.focus(),(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)&&(typeof t=="number"&&(e.selectionStart=t),typeof n=="number"&&(e.selectionEnd=n)))},oe=(e,t)=>{const n=e.getAttribute(b),o=n&&t.head.querySelector(`[${b}="${n}"]`);if(o)return o;if(e.matches("link[rel=stylesheet]")){const r=e.getAttribute("href");return t.head.querySelector(`link[rel=stylesheet][href="${r}"]`)}return null},re=e=>{const t=e.dataset.astroTransitionPersistProps;return t==null||t==="false"},ie=(e,t)=>e.getAttribute("props")===t.getAttribute("props"),se=e=>{Q(e),Z(e),ee(e);const t=ne();te(e.body,document.body),t()},ae="astro:before-preparation",ce="astro:after-preparation",le="astro:before-swap",ue="astro:after-swap",fe=e=>document.dispatchEvent(new Event(e));class $ extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;signal;constructor(t,n,o,r,s,u,a,l,f,c){super(t,n),this.from=o,this.to=r,this.direction=s,this.navigationType=u,this.sourceElement=a,this.info=l,this.newDocument=f,this.signal=c,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class de extends ${formData;loader;constructor(t,n,o,r,s,u,a,l,f,c){super(ae,{cancelable:!0},t,n,o,r,s,u,a,l),this.formData=f,this.loader=c.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class me extends ${direction;viewTransition;swap;constructor(t,n){super(le,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument,t.signal),this.direction=t.direction,this.viewTransition=n,this.swap=()=>se(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function he(e,t,n,o,r,s,u,a,l){const f=new de(e,t,n,o,r,s,window.document,u,a,l);return document.dispatchEvent(f)&&(await f.loader(),f.defaultPrevented||(fe(ce),f.navigationType!=="traverse"&&x({scrollX,scrollY}))),f}function pe(e,t){const n=new me(e,t);return document.dispatchEvent(n),n.swap(),n}const ge=history.pushState.bind(history),T=history.replaceState.bind(history),x=e=>{history.state&&(history.scrollRestoration="manual",T({...history.state,...e},""))},D=!!document.startViewTransition,I=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),B=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let d,g,A;const U=e=>document.dispatchEvent(new Event(e)),V=()=>U("astro:page-load"),we=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},M="data-astro-transition-persist",O="data-astro-transition",P="data-astro-transition-fallback";let H,y=0;history.state?(y=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):I()&&(T({index:y,scrollX,scrollY},""),history.scrollRestoration="manual");async function be(e,t){try{const n=await fetch(e,t),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function W(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function ye(){let e=Promise.resolve();for(const t of document.getElementsByTagName("script")){if(t.dataset.astroExec==="")continue;const n=t.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=t.innerHTML;for(const r of t.attributes){if(r.name==="src"){const s=new Promise(u=>{o.onload=o.onerror=u});e=e.then(()=>s)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",t.replaceWith(o)}return e}const j=(e,t,n,o,r)=>{const s=B(t,e),u=document.title;document.title=o;let a=!1;if(e.href!==location.href&&!r)if(n.history==="replace"){const l=history.state;T({...n.state,index:l.index,scrollX:l.scrollX,scrollY:l.scrollY},"",e.href)}else ge({...n.state,index:++y,scrollX:0,scrollY:0},"",e.href);if(document.title=u,A=e,s||(scrollTo({left:0,top:0,behavior:"instant"}),a=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(e.hash){history.scrollRestoration="auto";const l=history.state;location.href=e.href,history.state||(T(l,""),s&&window.dispatchEvent(new PopStateEvent("popstate")))}else a||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function ve(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${M}="${n.getAttribute(M)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),t.push(new Promise(r=>{["load","error"].forEach(s=>o.addEventListener(s,r)),document.head.append(o)}))}return t}async function C(e,t,n,o,r){async function s(l){function f(h){const m=h.effect;return!m||!(m instanceof KeyframeEffect)||!m.target?!1:window.getComputedStyle(m.target,m.pseudoElement).animationIterationCount==="infinite"}const c=document.getAnimations();document.documentElement.setAttribute(P,l);const p=document.getAnimations().filter(h=>!c.includes(h)&&!f(h));return Promise.allSettled(p.map(h=>h.finished))}if(r==="animate"&&!n.transitionSkipped&&!e.signal.aborted)try{await s("old")}catch{}const u=document.title,a=pe(e,n.viewTransition);j(a.to,a.from,t,u,o),U(ue),r==="animate"&&(!n.transitionSkipped&&!a.signal.aborted?s("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function Te(){return d?.controller.abort(),d={controller:new AbortController}}async function K(e,t,n,o,r){const s=Te();if(!I()||location.origin!==n.origin){s===d&&(d=void 0),location.href=n.href;return}const u=r?"traverse":o.history==="replace"?"replace":"push";if(u!=="traverse"&&x({scrollX,scrollY}),B(t,n)&&(e!=="back"&&n.hash||e==="back"&&t.hash)){j(n,t,o,document.title,r),s===d&&(d=void 0);return}const a=await he(t,n,e,u,o.sourceElement,o.info,s.controller.signal,o.formData,l);if(a.defaultPrevented||a.signal.aborted){s===d&&(d=void 0),a.signal.aborted||(location.href=n.href);return}async function l(i){const p=i.to.href,h={signal:i.signal};if(i.formData){h.method="POST";const w=i.sourceElement instanceof HTMLFormElement?i.sourceElement:i.sourceElement instanceof HTMLElement&&"form"in i.sourceElement?i.sourceElement.form:i.sourceElement?.closest("form");h.body=w?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(i.formData):i.formData}const m=await be(p,h);if(m===null){i.preventDefault();return}if(m.redirected){const w=new URL(m.redirected);if(w.origin!==i.to.origin){i.preventDefault();return}i.to=w}if(H??=new DOMParser,i.newDocument=H.parseFromString(m.html,m.mediaType),i.newDocument.querySelectorAll("noscript").forEach(w=>w.remove()),!i.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!i.formData){i.preventDefault();return}const L=ve(i.newDocument);L.length&&!i.signal.aborted&&await Promise.all(L)}async function f(){if(g&&g.viewTransition){try{g.viewTransition.skipTransition()}catch{}try{await g.viewTransition.updateCallbackDone}catch{}}return g={transitionSkipped:!1}}const c=await f();if(a.signal.aborted){s===d&&(d=void 0);return}if(document.documentElement.setAttribute(O,a.direction),D)c.viewTransition=document.startViewTransition(async()=>await C(a,o,c,r));else{const i=(async()=>{await Promise.resolve(),await C(a,o,c,r,W())})();c.viewTransition={updateCallbackDone:i,ready:i,finished:new Promise(p=>c.viewTransitionFinished=p),skipTransition:()=>{c.transitionSkipped=!0,document.documentElement.removeAttribute(P)}}}c.viewTransition?.updateCallbackDone.finally(async()=>{await ye(),V(),we()}),c.viewTransition?.finished.finally(()=>{c.viewTransition=void 0,c===g&&(g=void 0),s===d&&(d=void 0),document.documentElement.removeAttribute(O),document.documentElement.removeAttribute(P)});try{await c.viewTransition?.updateCallbackDone}catch(i){const p=i;console.log("[astro]",p.name,p.message,p.stack)}}async function F(e,t){await K("forward",A,new URL(e,location.href),t??{})}function Ee(e){if(!I()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,n=t.index,o=n>y?"forward":"back";y=n,K(o,A,new URL(location.href),{},t)}const q=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&x({scrollX,scrollY})};{if(D||W()!=="none")if(A=new URL(location.href),addEventListener("popstate",Ee),addEventListener("load",V),"onscrollend"in window)addEventListener("scrollend",q);else{let e,t,n,o;const r=()=>{if(o!==history.state?.index){clearInterval(e),e=void 0;return}if(t===scrollY&&n===scrollX){clearInterval(e),e=void 0,q();return}else t=scrollY,n=scrollX};addEventListener("scroll",()=>{e===void 0&&(o=history.state.index,t=scrollY,n=scrollX,e=window.setInterval(r,50))},{passive:!0})}for(const e of document.getElementsByTagName("script"))e.dataset.astroExec=""}const G=new Set,E=new WeakSet;let k,z,X=!1;function Ae(e){X||(X=!0,k??=e?.prefetchAll,z??=e?.defaultStrategy??"hover",Se(),Le(),Re(),ke())}function Se(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,t=>{v(t.target,"tap")&&S(t.target.href,{ignoreSlowConnection:!0})},{passive:!0})}function Le(){let e;document.body.addEventListener("focusin",o=>{v(o.target,"hover")&&t(o)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),N(()=>{for(const o of document.getElementsByTagName("a"))E.has(o)||v(o,"hover")&&(E.add(o),o.addEventListener("mouseenter",t,{passive:!0}),o.addEventListener("mouseleave",n,{passive:!0}))});function t(o){const r=o.target.href;e&&clearTimeout(e),e=setTimeout(()=>{S(r)},80)}function n(){e&&(clearTimeout(e),e=0)}}function Re(){let e;N(()=>{for(const t of document.getElementsByTagName("a"))E.has(t)||v(t,"viewport")&&(E.add(t),e??=Pe(),e.observe(t))})}function Pe(){const e=new WeakMap;return new IntersectionObserver((t,n)=>{for(const o of t){const r=o.target,s=e.get(r);o.isIntersecting?(s&&clearTimeout(s),e.set(r,setTimeout(()=>{n.unobserve(r),e.delete(r),S(r.href)},300))):s&&(clearTimeout(s),e.delete(r))}})}function ke(){N(()=>{for(const e of document.getElementsByTagName("a"))v(e,"load")&&S(e.href)})}function S(e,t){e=e.replace(/#.*/,"");const n=t?.ignoreSlowConnection??!1;if(xe(e,n))if(G.add(e),document.createElement("link").relList?.supports?.("prefetch")&&t?.with!=="fetch"){const o=document.createElement("link");o.rel="prefetch",o.setAttribute("href",e),document.head.append(o)}else fetch(e,{priority:"low"})}function xe(e,t){if(!navigator.onLine||!t&&J())return!1;try{const n=new URL(e,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!G.has(e)}catch{}return!1}function v(e,t){if(e?.tagName!=="A")return!1;const n=e.dataset.astroPrefetch;return n==="false"?!1:t==="tap"&&(n!=null||k)&&J()?!0:n==null&&k||n===""?t===z:n===t}function J(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function N(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}function De(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function Y(e){return e.dataset.astroReload!==void 0}(D||De()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(e.composed&&(t=e.composedPath()[0]),t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const n=t instanceof HTMLElement?t.target:t.target.baseVal,o=t instanceof HTMLElement?t.href:t.href.baseVal,r=new URL(o,location.href).origin;Y(t)||t.hasAttribute("download")||!t.href||n&&n!=="_self"||r!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),F(o,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||Y(t))return;const n=t,o=e.submitter,r=new FormData(n,o),s=typeof n.action=="string"?n.action:n.getAttribute("action"),u=typeof n.method=="string"?n.method:n.getAttribute("method");let a=o?.getAttribute("formaction")??s??location.pathname;const l=o?.getAttribute("formmethod")??u??"get";if(l==="dialog"||location.origin!==new URL(a,location.href).origin)return;const f={sourceElement:o??n};if(l==="get"){const c=new URLSearchParams(r),i=new URL(a);i.search=c.toString(),a=i.toString()}else f.formData=r;e.preventDefault(),F(a,f)}),Ae({prefetchAll:!0}));
