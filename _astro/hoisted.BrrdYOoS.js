import"./Tabs.astro_astro_type_script_index_0_lang.vCxYAn8N.js";import"./Npm.astro_astro_type_script_index_0_lang.Dtr4yMNC.js";import"./Header.astro_astro_type_script_index_0_lang.C9lyR5za.js";import{u as F}from"./DialectTabs.astro_astro_type_script_index_0_lang.BgSXc1ff.js";import"./CopyButton.astro_astro_type_script_index_0_lang.DTWY5rh_.js";import"./CollapseToggleButton.astro_astro_type_script_index_0_lang.BYPl6kRb.js";import{g as M,c as h}from"./_commonjsHelpers.Cpj98o6Y.js";import"./CodeTabs.astro_astro_type_script_index_0_lang.DxXlXk3M.js";const O=window.location.hash;if(O!==""){const t=document.querySelector(O);t&&t.scrollIntoView()}var w="Expected a function",L=NaN,N="[object Symbol]",B=/^\s+|\s+$/g,D=/^[-+]0x[0-9a-f]+$/i,R=/^0b[01]+$/i,_=/^0o[0-7]+$/i,G=parseInt,P=typeof h=="object"&&h&&h.Object===Object&&h,U=typeof self=="object"&&self&&self.Object===Object&&self,V=P||U||Function("return this")(),X=Object.prototype,z=X.toString,J=Math.max,K=Math.min,v=function(){return V.Date.now()};function Q(t,e,n){var o,r,c,l,s,a,u=0,x=!1,d=!1,T=!0;if(typeof t!="function")throw new TypeError(w);e=A(e)||0,p(n)&&(x=!!n.leading,d="maxWait"in n,c=d?J(A(n.maxWait)||0,e):c,T="trailing"in n?!!n.trailing:T);function b(i){var f=o,m=r;return o=r=void 0,u=i,l=t.apply(m,f),l}function H(i){return u=i,s=setTimeout(g,e),x?b(i):l}function W(i){var f=i-a,m=i-u,E=e-f;return d?K(E,c-m):E}function I(i){var f=i-a,m=i-u;return a===void 0||f>=e||f<0||d&&m>=c}function g(){var i=v();if(I(i))return S(i);s=setTimeout(g,W(i))}function S(i){return s=void 0,T&&o?b(i):(o=r=void 0,l)}function $(){s!==void 0&&clearTimeout(s),u=0,o=a=r=s=void 0}function q(){return s===void 0?l:S(v())}function y(){var i=v(),f=I(i);if(o=arguments,r=this,a=i,f){if(s===void 0)return H(a);if(d)return s=setTimeout(g,e),b(a)}return s===void 0&&(s=setTimeout(g,e)),l}return y.cancel=$,y.flush=q,y}function Y(t,e,n){var o=!0,r=!0;if(typeof t!="function")throw new TypeError(w);return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),Q(t,e,{leading:o,maxWait:e,trailing:r})}function p(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Z(t){return!!t&&typeof t=="object"}function tt(t){return typeof t=="symbol"||Z(t)&&z.call(t)==N}function A(t){if(typeof t=="number")return t;if(tt(t))return L;if(p(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=p(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(B,"");var n=R.test(t);return n||_.test(t)?G(t.slice(2),n?2:8):D.test(t)?L:+t}var et=Y;const nt=M(et),rt=t=>{const e=[],{anchors:n}=t;for(let r=n.length-1;r>=0;r--){const c=n[r].offsetTop;c<t.scrollTop+t.viewportHeight&&c+75>t.scrollTop&&e.push(n[r].id)}const o=n.find(r=>r.offsetTop>t.scrollTop);if(o&&o.offsetTop-75>t.scrollTop){const r=n.findIndex(c=>c.offsetTop===o.offsetTop);if(r!==-1){const c=n[r-1];c&&!e.includes(c.id)&&e.push(c.id)}}return o||e.push(n[n.length-1]?.id),e},j=document.querySelector(".documentation-content-wrap"),it=document.querySelectorAll("h2, h3"),C=document.querySelectorAll("[data-slug]"),k=()=>{const t=rt({viewportHeight:window.innerHeight,anchors:[...it].map(e=>({id:e.id,offsetTop:e.offsetTop})),scrollTop:j.scrollTop});C.forEach(e=>{const n=e.dataset.slug;n&&(e.classList.toggle("nav-toc-item--active",t.includes(n)),e.classList.toggle("nav-toc-item",!t.includes(n)))})};j&&C&&(j.addEventListener("scroll",nt(k,80)),k());F();
